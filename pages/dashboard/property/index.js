import LayoutWrapper from '../../../components/dashboard/LayoutWrapper'
import client from '../../../lib/client'
import { PageSEO } from '../../../utils/SEO'
import siteMetadata from '../../../utils/siteMetadata'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

let pageNo = 0
const PROPERTY_LIMIT = 5

const Property = ({ properties, propertyCount }) => {
  const router = useRouter()

  const getPaginationCount = length => {
    const division = length / PROPERTY_LIMIT

    if (division % 1 !== 0) {
      return Math.floor(division) + 1
    }
    return division
  }

  const paginationCount = getPaginationCount(propertyCount)
  const paginationArr = paginationCount ? new Array(paginationCount).fill('') : 0

  const fetchMoreProperty = index => {
    pageNo = index
    console.log(pageNo)
  }

  const handleDelete = async ({ slug }) => {
    console.log(slug)
    const isConfirm = await Swal.fire({
      title: 'Hello!',
      text: 'Are you sure you want to delete this property?',
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

    await client
      .delete(`/api/property/${slug}`)
      .then(response => {
        console.log(response.data.message)
        toast.success(response.data.message)
      })
      .catch(error => {
        toast.error(error.response.data.message)
        console.log(error)
      })
  }

  

  return (
    <>
      <PageSEO title="Property" description={siteMetadata.description} />
      <LayoutWrapper>
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
                  {properties?.map((property, index) => (
                    <tr className="border-b" key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                        {index + 1}
                      </td>
                      <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                        {property.title}
                      </td>
                      <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-4">
                          <div
                            onClick={() =>
                              router.push(
                                '/dashboard/property/[slug]',
                                `/dashboard/property/${property.slug}`,
                              )
                            }
                            className=" bg-primary-500 dark:bg-gray-900 rounded-full p-3 font-medium cursor-pointer  hover:underline">
                            <PencilAltIcon className="w-6 h-6" />
                          </div>
                          <button
                            onClick={() => handleDelete(property)}
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
                    onClick={() => fetchMoreProperty(index)}
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
      </LayoutWrapper>
    </>
  )
}

export default Property

export async function getStaticProps({ query }) {
  const response = await client(`/api/property?pageNo=${pageNo}&limit=${PROPERTY_LIMIT}`)

  const properties = response.data.properties
  const propertyCount = response.data.propertyCount

  return {
    props: {
      properties,
      propertyCount,
    },
  }
}
