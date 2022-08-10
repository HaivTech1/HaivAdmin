import client from './client'
import Property from '../models/property'
import dbConnect from '../utils/dbConnect'

dbConnect()

const isFeatured = async propertyId => {
  const property = await Property.findOne({
    property: propertyId,
  })
  return property ? true : false
}

export const getProperty = async (pageNo, limit, userId) => {
  try {
    const { data } = await client(`/property?pageNo=${pageNo}&limit=${limit}&userId=${userId}`)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const deletePropertyById = async propertyId => {
  try {
    const { data } = await client.delete(`/property/${propertyId}`)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const createProperty = async formData => {
  try {
    const { data } = await client.post('/property/create', formData)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
    }
    return { error: error.message || error }
  }
}

export const getPropertyById = async propertyId => {
  const property = await Property.findOne({ propertyId })

  if (!property) return sendError(res, 'Property not available', 404)

  const featured = await isFeatured(property._id)

  const {
    title,
    price,
    type,
    purpose,
    bedroom,
    bathroom,
    address,
    longitude,
    latitude,
    details,
    specifications,
    meta,
    createdAt,
  } = property

  res.json({
    success: true,
    property: {
      id: property._id,
      title,
      slug,
      price,
      type,
      purpose,
      bedroom,
      bathroom,
      address,
      longitude,
      latitude,
      details,
      specifications,
      meta,
      createdAt,
      image: property.image?.url,
      featured,
    },
  })
}

export const updatePropertyById = async (propertyId, formData) => {
  try {
    console.log(propertyId)
    const { data } = await client.put(`/property/${propertyId}`, formData)
    return data
  } catch (error) {
    const { response } = error
    if (response?.data) {
      return response.data
      console.log(response.data)
    }
    return { error: error.message || error }
  }
}
