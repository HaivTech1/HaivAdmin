import LayoutWrapper from '../../../components/dashboard/LayoutWrapper'
import client from '../../../lib/client'
import { PageSEO } from '../../../utils/SEO'
import siteMetadata from '../../../utils/siteMetadata'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Loader from '../../../components/Loader'
import { useState } from 'react'
import Link from 'next/link'

let pageNo = 0
const POST_LIMIT = 5

const Post = ({ posts, postCount }) => {
  const [busy, setBusy] = useState()

  const router = useRouter()

  const getPaginationCount = length => {
    const division = length / POST_LIMIT

    if (division % 1 !== 0) {
      return Math.floor(division) + 1
    }
    return division
  }

  const paginationCount = getPaginationCount(postCount)
  const paginationArr = paginationCount ? new Array(paginationCount).fill('') : 0

  const fetchMorepost = index => {
    pageNo = index
    console.log(pageNo)
  }

  const handleDelete = async ({ slug }) => {
    console.log(slug)
    const isConfirm = await Swal.fire({
      title: 'Hello!',
      text: 'Are you sure you want to delete this post?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#F9A01B',
      confirmButtonText: 'Yes, please!',
    }).then(result => {
      return result.isConfirmed
    })

    if (!isConfirm) {
      return
    }

    setBusy(true)

    await client
      .delete(`/api/post/${slug}`)
      .then(response => {
        setBusy(false)
        console.log(response.data.message)
        toast.success(response.data.message)
      })
      .catch(error => {
        setBusy(false)
        toast.error(error.response.data.message)
        console.log(error)
      })
  }

  if (busy) return <Loader />

  return (
    <>
      <PageSEO title="post" description={siteMetadata.description} />
      <LayoutWrapper>
        {posts.length < 1 ? (
          <div className="h-screen flex justify-center items-center">
            <div>
              <h1 className="my-5">No posts available</h1>
              <buton className="button-outline">
                <Link href="/dashboard/post/create">Create Post</Link>
              </buton>
            </div>
          </div>
        ) : (
          <div className="mt-4 mx-4">
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b bg-primary-800 dark:bg-gray-900">
                    <tr>
                      <th scope="col" className="text-white font-bold text-lg px-6 py-4 text-left">
                        #
                      </th>
                      <th scope="col" className="text-white font-bold text-lg px-6 py-4 text-left">
                        Title
                      </th>
                      <th scope="col" className="text-white font-bold text-lg px-6 py-4 text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts?.map((post, index) => (
                      <tr className="border-b" key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                          {index + 1}
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                          {post.title}
                        </td>
                        <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex space-x-4">
                            <div
                              onClick={() =>
                                router.push(
                                  '/dashboard/post/[slug]',
                                  `/dashboard/post/${post.slug}`,
                                )
                              }
                              className=" bg-primary-500 dark:bg-gray-900 rounded-full p-3 font-medium cursor-pointer  hover:underline">
                              <PencilAltIcon className="w-6 h-6" />
                            </div>
                            <button
                              onClick={() => handleDelete(post)}
                              className="bg-primary-500 dark:bg-gray-900 rounded-full p-3 font-medium cursor-pointer  hover:underline">
                              <TrashIcon className="w-6 h-6" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center">
              {paginationArr?.length > 1 ? (
                <div className="flex justify-center items-center py-8 space-x-3">
                  {paginationArr.map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => fetchMorepost(index)}
                      className={
                        index === pageNo
                          ? 'bg-primary-700 dark:bg-gray-900 cursor-pointer text-white hover:bg-gray-500 px-2 py-1 rounded-full'
                          : 'bg-gray-500 cursor-pointer text-white hover:bg-pimary px-2 py-1 rounded-full'
                      }>
                      {index + 1}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </LayoutWrapper>
    </>
  )
}

export default Post

export async function getStaticProps({ query }) {
  const response = await client(`/api/post?pageNo=${pageNo}&limit=${POST_LIMIT}`)

  const posts = response.data.posts
  const postCount = response.data.postCount

  return {
    props: {
      posts,
      postCount,
    },
  }
}
