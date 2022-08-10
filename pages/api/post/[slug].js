import dbConnect from '../../../utils/dbConnect'
import Post from '../../../models/post'
import FeaturedPost from '../../../models/featuredPost'

dbConnect()

export const config = {
  api: {
    bodyParser: false,
  },
}

const isFeatured = async postId => {
  const post = await Post.findOne({
    post: postId,
  })
  return post ? true : false
}

const removeFromFeaturedPost = async postId => {
  await FeaturedPost.findByIdAndDelete({
    post: postId,
  })
}

const handler = async (req, res) => {
  const { method } = req

  if (method === 'GET') {
    const slug = req.query.slug

    const post = await Post.findOne({ slug })

    if (!post) return sendError(res, 'Post not available', 404)

    const featured = await isFeatured(post._id)

    res.json({
      success: true,
      post: {
        id: post._id,
        title: post.title,
        subtitle: post.subtitle,
        slug: post.slug,
        content: post.content,
        tags: post.tags,
        meta: post.meta,
        thumbnail: post.thumbnail?.url,
        createdAt: post.createdAt,
        featured,
        user: post.user,
      },
    })
  }

  if (method === 'DELETE') {
    const slug = req.query.slug

    console.log(slug)

    const post = await Post.findOne({ slug })
    if (!post) return res.status(404).json({ message: 'post not found' })

    const public_id = post.image?.public_id
    if (public_id) {
      const { result } = await cloudinary.uploader.destroy(public_id)

      if (result !== 'ok') return res.status(401).json({ message: 'Could not remove image' })
    }
    await Post.findByIdAndDelete(post.id)
    await removeFromFeaturedPost(post.id)

    res.json({ message: 'post removed successfully' })
  }

  if (method === 'PUT') {
    console.log(req.body)
  }
}

export default handler
