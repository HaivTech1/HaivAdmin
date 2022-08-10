import { useEffect, useState } from 'react'
import LayoutWrapper from '../../../components/dashboard/LayoutWrapper'
import { PageSEO } from '../../../utils/SEO'
import siteMetadata from '../../../utils/siteMetadata'
import { useRouter } from 'next/router'
import PropertyForm, { defaultProperty } from '../../../components/PropertyForm'
import client from '../../../lib/client'
import toast, { LoaderIcon } from 'react-hot-toast'

const Create = () => {
  const router = useRouter()
  const [propertyInfo, setPropertyInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [resetAfterSubmit, setResetAfterSubmit] = useState(false)

  const handleSubmit = async data => {
    setIsLoading(true)
    await client
      .post('/api/property/create', data)
      .then(response => {
        console.log(response.data.property)
        setIsLoading(false)
        setResetAfterSubmit(true)
        toast.success('Property Created successfully')

        setInterval(() => {
          router.push(`/dashboard/property/${response.data.property.slug}`)
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
    const result = localStorage.getItem('propertyStore')

    if (!result) return

    const oldProperty = JSON.parse(result)
    setPropertyInfo({ ...defaultProperty, ...oldProperty })
  }, [])
  return (
    <>
      <PageSEO title="Create Property" description={siteMetadata.description} />
      <LayoutWrapper>
        <PropertyForm
          onSubmit={handleSubmit}
          initialProperty={propertyInfo}
          propertyTitle="property"
          busy={isLoading}
          propertyBtnTitle="Create"
          resetAfterSubmit={resetAfterSubmit}
        />
      </LayoutWrapper>
    </>
  )
}

export default Create
