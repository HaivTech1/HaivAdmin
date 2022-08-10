import { useState } from 'react'
import LayoutWrapper from '../../../components/dashboard/LayoutWrapper'
import Loader from '../../../components/Loader'
import PostForm from '../../../components/PostForm'
import client from '../../../lib/client'
import { PageSEO } from '../../../utils/SEO'
import siteMetadata from '../../../utils/siteMetadata'
import toast from 'react-hot-toast'

const SinglePost = ({ post }) => {
  const [busy, setBusy] = useState()
  const [postInfo, setPostInfo] = useState(post)

  const handleSubmit = async data => {
    setBusy(true)
    await client
      .put(`/api/post/${postInfo.slug}`, data)
      .then(response => {
        setBusy(false)
        toast.success('post updated successfully')
        setPostInfo({
          ...response.data.post,
          tags: response.data.post?.tags?.join(', '),
        })
      })
      .catch(error => {
        setBusy(false)
        toast.error(error.response.data.message)
      })
  }

  if (busy) return <Loader />

  return (
    <>
      <PageSEO title={post?.title} description={siteMetadata.description} />
      <LayoutWrapper>
        <PostForm
          onSubmit={handleSubmit}
          initialPost={postInfo}
          postTitle="post"
          postBtnTitle="update"
          resetAfterSubmit
        />
      </LayoutWrapper>
    </>
  )
}

export default SinglePost

export async function getStaticPaths() {
  const response = await client(`/api/post`)

  return {
    fallback: false,

    paths: response.data.posts.map(post => ({
      params: { slug: post.slug },
    })),
  }
}

export async function getStaticProps({ params }) {
  const response = await client(`/api/post/${params.slug}`)
  const post = {
    ...response.data.post,
    tags: response.data.post?.tags?.join(', '),
  }

  return {
    props: {
      post,
    },
  }
}
