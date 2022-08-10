import dbConnect from '../../../utils/dbConnect'
import Property from '../../../models/property'
import withProtect from '../../../lib/middleware/withProtect'
import withRoles from '../../../lib/middleware/withRoles'

dbConnect()

const handler = async (req, res) => {
  const { method } = req

  if (method !== 'GET') {
    return res.status(400).json({ status: 'fail', message: 'Only GET requests are allowed.' })
  }

  const { pageNo = 0, limit = 10 } = req.query

  const properties = await Property.find({})
    .sort({ createdAt: -1 })
    .skip(parseInt(pageNo) * parseInt(limit))
    .limit(parseInt(limit))

  const propertyCount = await Property.countDocuments()

  if (!properties) return sendError(res, 'There are no properties available yet!')

  res.json({
    success: true,
    properties: properties.map(property => ({
      id: property._id,
      title: property.title,
      slug: property.slug,
      price: property.price,
      type: property.type,
      purpose: property.purpose,
      bedroom: property.bedroom,
      bathroom: property.bathroom,
      address: property.address,
      longitude: property.longitude,
      latitude: property.latitude,
      details: property.datials,
      specifications: property.specifications,
      meta: property.meta,
      image: property.image?.url,
      createdAt: property.createdAt,
    })),
    propertyCount,
  })
}

export default handler
