import { useEffect, useState } from 'react'
import LayoutWrapper from '../../../components/dashboard/LayoutWrapper'
import { PageSEO } from '../../../utils/SEO'
import siteMetadata from '../../../utils/siteMetadata'
import { useRouter } from 'next/router'
import PostForm, { defaultpost } from '../../../components/PostForm'
import client from '../../../lib/client'
import toast, { LoaderIcon } from 'react-hot-toast'

const Create = () => {
  const router = useRouter()
  const [postInfo, setPostInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [resetAfterSubmit, setResetAfterSubmit] = useState(false)

  const handleSubmit = async data => {
    setIsLoading(true)
    await client
      .post('/api/post/create', data)
      .then(response => {
        console.log(response.data.post)
        setIsLoading(false)
        setResetAfterSubmit(true)
        toast.success('post Created successfully')

        setInterval(() => {
          router.push(`/dashboard/post/${response.data.post.slug}`)
        }, 3000)
      })
      .catch(error => {
        const message = error.response.data.message
        console.log(message)
        toast.error(message)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const result = localStorage.getItem('postStore')

    if (!result) return

    const oldpost = JSON.parse(result)
    setPostInfo({ ...defaultpost, ...oldpost })
  }, [])

  return (
    <>
      <PageSEO title="Create Post" description={siteMetadata.description} />
      <LayoutWrapper>
        <PostForm
          onSubmit={handleSubmit}
          initialPost={postInfo}
          postTitle="post"
          busy={isLoading}
          postBtnTitle="Create"
          resetAfterSubmit={resetAfterSubmit}
        />
      </LayoutWrapper>
    </>
  )
}

export default Create
