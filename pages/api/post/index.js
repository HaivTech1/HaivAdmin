import dbConnect from '../../../utils/dbConnect'
import Post from '../../../models/post'
import withProtect from '../../../lib/middleware/withProtect'
import withRoles from '../../../lib/middleware/withRoles'
import { sendError } from '../../../utils/helper'

dbConnect()

const handler = async (req, res) => {
  const { method } = req

  if (method !== 'GET') {
    return res.status(400).json({ status: 'fail', message: 'Only GET requests are allowed.' })
  }

  const { pageNo = 0, limit = 10 } = req.query

  const posts = await Post.find({})
    .sort({ createdAt: -1 })
    .skip(parseInt(pageNo) * parseInt(limit))
    .limit(parseInt(limit))

  const postCount = await Post.countDocuments()

  if (!posts) return sendError(res, 'There are no post available yet!')

  res.json({
    success: true,
    posts: posts.map(post => ({
      id: post._id,
      title: post.title,
      slug: post.slug,
      price: post.price,
      type: post.type,
      purpose: post.purpose,
      bedroom: post.bedroom,
      bathroom: post.bathroom,
      address: post.address,
      longitude: post.longitude,
      latitude: post.latitude,
      details: post.datials,
      specifications: post.specifications,
      meta: post.meta,
      image: post.image?.url,
      createdAt: post.createdAt,
    })),
    postCount,
  })
}

export default handler
