import withProtect from '../../../lib/middleware/withProtect'
import withRoles from '../../../lib/middleware/withRoles'
import multer from '../../../utils/multer'
import nc from 'next-connect'
import Post from '../../../models/post'
import FeaturedPost from '../../../models/featuredPost'

const cloudinary = require('../../../lib/cloud')

const FEATURED_POST_COUNT = 4

export const config = {
  api: {
    bodyParser: false,
  },
}

const addToFeaturedPost = async postId => {
  const isAlreadyExists = await FeaturedPost.findOne({
    post: postId,
  })

  if (isAlreadyExists) return

  const featuredpost = new FeaturedPost({
    post: postId,
  })

  await featuredpost.save()

  const featuredProperties = await FeaturedPost.find({}).sort({
    createdAt: -1,
  })

  featuredProperties.forEach(async (post, index) => {
    if (index >= FEATURED_POST_COUNT) await FeaturedPost.findByIdAndDelete(post._id)
  })
}

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send({ message: 'Something broke!' })
  },
  onNoMatch: (req, res) => {
    res.status(404).send({ message: 'Page is not found' })
  },
})
  .use(multer.single('thumbnail'))
  .post(async (req, res) => {
    const { method } = req

    if (method === 'POST') {
      const { userId, title, subtitle, slug, content, tags, meta, featured } = req.body

      console.log(req.body)

      const { file } = req

      const isAlreadyExists = await Post.findOne({ slug })

      if (isAlreadyExists) return sendError(res, 'Please use unique slug')

      const newPost = new Post({
        user: userId,
        title,
        subtitle,
        slug,
        content,
        tags,
        meta,
      })

      if (file) {
        const { secure_url: url, public_id } = await cloudinary.uploader.upload(
          file.path,
          function (error, result) {
            console.log(result, error)
          },
        )
        newPost.thumbnail = { url, public_id }
      }

      await newPost.save()

      if (featured) await addToFeaturedPost(newPost._id)

      res.json({
        success: true,
        post: {
          id: newPost._id,
          title,
          subtitle,
          slug,
          content,
          tags,
          meta,
          thumbnail: newPost.thumbnail?.url,
        },
      })
    }
  })

export default handler
