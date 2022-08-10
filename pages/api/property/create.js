import withProtect from '../../../lib/middleware/withProtect'
import withRoles from '../../../lib/middleware/withRoles'
import multer from '../../../utils/multer'
import nc from 'next-connect'
import Property from '../../../models/property'
import FeaturedProperty from '../../../models/featuredProperty'

const cloudinary = require('../../../lib/cloud')

const FEATURED_PROPERTY_COUNT = 4

export const config = {
  api: {
    bodyParser: false,
  },
}

const addToFeaturedProperty = async propertyId => {
  const isAlreadyExists = await FeaturedProperty.findOne({
    property: propertyId,
  })

  if (isAlreadyExists) return

  const featuredProperty = new FeaturedProperty({
    property: propertyId,
  })

  await featuredProperty.save()

  const featuredProperties = await FeaturedProperty.find({}).sort({
    createdAt: -1,
  })

  featuredProperties.forEach(async (property, index) => {
    if (index >= FEATURED_PROPERTY_COUNT) await FeaturedProperty.findByIdAndDelete(property._id)
  })
}

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).end('Something broke!')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found')
  },
})
  .use(multer.single('image'))
  .post(async (req, res) => {
    const { method } = req

    if (method === 'POST') {
      const {
        title,
        slug,
        price,
        type,
        purpose,
        bedroom,
        bathroom,
        address,
        longitude,
        latitude,
        details,
        specifications,
        meta,
        featured,
      } = req.body

      const { file } = req

      const isAlreadyExists = await Property.findOne({ slug })

      if (isAlreadyExists) return sendError(res, 'Please use unique slug')

      const newProperty = new Property({
        title,
        slug,
        price,
        type,
        purpose,
        bedroom,
        bathroom,
        address,
        longitude,
        latitude,
        details,
        specifications,
        meta,
        featured,
      })

      if (file) {
        const { secure_url: url, public_id } = await cloudinary.uploader.upload(
          file.path,
          function (error, result) {
            console.log(result, error)
          },
        )
        newProperty.image = { url, public_id }
      }

      await newProperty.save()

      if (featured) await addToFeaturedProperty(newProperty._id)

      res.json({
        success: true,
        property: {
          id: newProperty._id,
          title,
          slug,
          price,
          type,
          purpose,
          bedroom,
          bathroom,
          address,
          longitude,
          latitude,
          details,
          specifications,
          meta,
          featured,
          image: newProperty.image?.url,
        },
      })
    }
  })

export default handler
