import dbConnect from '../../../utils/dbConnect'
import Property from '../../../models/property'
import FeaturedProperty from '../../../models/featuredProperty'

dbConnect()

export const config = {
  api: {
    bodyParser: false,
  },
}

const isFeatured = async propertyId => {
  const property = await Property.findOne({
    property: propertyId,
  })
  return property ? true : false
}

const removeFromFeaturedPost = async propertyId => {
  await FeaturedProperty.findByIdAndDelete({
    property: propertyId,
  })
}

const handler = async (req, res) => {
  const { method } = req

  if (method === 'GET') {
    const slug = req.query.slug

    const property = await Property.findOne({ slug })

    if (!property) return sendError(res, 'Property not available', 404)

    const featured = await isFeatured(property._id)

    const {
      title,
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
      createdAt,
    } = property

    res.json({
      success: true,
      property: {
        id: property._id,
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
        createdAt,
        image: property.image?.url,
        featured,
      },
    })
  }

  if (method === 'DELETE') {
    const slug = req.query.slug

    console.log(slug)

    const property = await Property.findOne({ slug })
    if (!property) return res.status(404).json({ message: 'Property not found' })

    const public_id = property.image?.public_id
    if (public_id) {
      const { result } = await cloudinary.uploader.destroy(public_id)

      if (result !== 'ok') return res.status(401).json({ message: 'Could not remove image' })
    }
    await Property.findByIdAndDelete(property.id)
    await removeFromFeaturedPost(property.id)

    res.json({ message: 'Property removed successfully' })
  }

  if (method === 'PUT') {
    console.log(req.body)
  }
}

export default handler
