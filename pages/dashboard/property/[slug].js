import { useState } from 'react'
import LayoutWrapper from '../../../components/dashboard/LayoutWrapper'
import Loader from '../../../components/Loader'
import PropertyForm from '../../../components/PropertyForm'
import client from '../../../lib/client'
import { PageSEO } from '../../../utils/SEO'
import siteMetadata from '../../../utils/siteMetadata'
import toast from 'react-hot-toast'

const SingleProperty = ({ property }) => {
  const [busy, setBusy] = useState()
  const [propertyInfo, setPropertyInfo] = useState(property)

  const handleSubmit = async data => {
    setBusy(true)
    await client
      .put(`/api/property/${propertyInfo.slug}`, data)
      .then(response => {
        setBusy(false)
        toast.success('Property updated successfully')
        setPropertyInfo({
          ...response.data.property,
          specifications: response.data.property?.specifications?.join(', '),
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
      <PageSEO title={property?.title} description={siteMetadata.description} />
      <LayoutWrapper>
        <PropertyForm
          onSubmit={handleSubmit}
          initialProperty={propertyInfo}
          propertyTitle="property"
          propertyBtnTitle="update"
          resetAfterSubmit
        />
      </LayoutWrapper>
    </>
  )
}

export default SingleProperty

export async function getStaticPaths() {
  const response = await client(`/api/property`)

  return {
    fallback: false,
    paths: response.data.properties.map(property => ({
      params: { slug: property.slug },
    })),
  }
}

export async function getStaticProps({ params }) {
  const response = await client(`/api/property/${params.slug}`)
  const property = {
    ...response.data.property,
    specifications: response.data.property?.specifications?.join(', '),
  }

  return {
    props: {
      property,
    },
  }
}
