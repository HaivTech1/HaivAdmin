import { CogIcon, PlayIcon, SaveAsIcon, SaveIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import toast, { LoaderIcon } from 'react-hot-toast'
import Image from 'next/image'
import MarkHint from './MarkHint'
import Textarea from './form/Textarea'
import TextInput from './form/TextInput'
import Label from './form/Label'

export const defaultProperty = {
  title: '',
  price: '',
  type: '',
  purpose: '',
  bedroom: '',
  bathroom: '',
  address: '',
  longitude: '',
  latitude: '',
  details: '',
  specifications: '',
  meta: '',
  image: '',
  featured: false,
}

const PropertyForm = ({ initialProperty, busy, propertyBtnTitle, resetAfterSubmit, onSubmit }) => {
  const [propertyInfo, setPropertyInfo] = useState({ ...defaultProperty })
  const [selectedImageURL, setSelectedImageURL] = useState('')
  const [imageUrlToCopy, setImageUrlToCopy] = useState('')
  const [imageUploading, setImageUploading] = useState(false)
  const [displayMarkdownHint, setDisplayMarkdownHint] = useState(false)

  useEffect(() => {
    if (initialProperty) {
      setPropertyInfo({ ...initialProperty })
      setSelectedImageURL(initialProperty?.image)
    }
    setPropertyInfo({ ...initialProperty })
    return () => {
      if (resetAfterSubmit) resetForm()
    }
  }, [initialProperty, resetAfterSubmit])

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
    featured,
  } = propertyInfo

  const handleChange = ({ target }) => {
    const { value, name, checked } = target

    if (name === 'image') {
      const file = target.files[0]
      if (!file.type.includes('image')) {
        toast.error('This is not an image')
        console.log('This is not an image')
      }
      setPropertyInfo({ ...propertyInfo, image: file })
      return setSelectedImageURL(URL.createObjectURL(file))
    }

    if (name === 'featured') {
      localStorage.setItem('propertyStore', JSON.stringify({ ...propertyInfo, featured: checked }))
      return setPropertyInfo({ ...propertyInfo, [name]: checked })
    }

    if (name === 'specifications') {
      const newSpecifications = specifications?.split(', ')
      if (newSpecifications?.length > 4) toast.error('Only first 4 will be selected')
      console.log('Only first 4 will be selected')
    }

    if (name === 'meta') {
      return setPropertyInfo({
        ...propertyInfo,
        meta: value.substring(0, 149),
      })
    }

    const newProperty = { ...propertyInfo, [name]: value }

    setPropertyInfo({ ...newProperty })

    localStorage.setItem('propertyStore', JSON.stringify(newProperty))
  }

  const handleImageUpload = async ({ target }) => {
    if (imageUploading) return
    const file = target.files[0]

    if (!file.type.includes('image')) {
      toast.error('This is not an image!')
      console.log('This is not an image!')
    }

    setImageUploading(true)

    const formData = new FormData()
    formData.append('image', file)
    console.log(formData)
    const { error, image } = await uploadImage(formData)
    setImageUploading(false)
    if (error) toast.error(error)
    setImageUrlToCopy(image)
  }

  const handleOnCopy = () => {
    const textToCopy = `![Add image description] (${imageUrlToCopy})`
    navigator.clipboard.writeText(textToCopy)
    toast.success('Copied')
  }

  const handleDetailsCopy = () => {
    const textToCopy = `
    ### Property details

    ### Additional Specifications

    ### Official Rentage Policy

    ### Property Agreement
    `
    navigator.clipboard.writeText(textToCopy)
    toast.success('Copied')
  }

  const handleSubmit = e => {
    e.preventDefault()
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
      featured,
    } = propertyInfo

    if (!title) return toast.error('Title is missing')
    if (!price) return toast.error('Price is missing')
    if (!purpose) return toast.error('Purpose is missing')
    if (!type) return toast.error('Type is missing')
    if (!meta) return toast.error('Meta description is missing')
    if (!address) return toast.error('Address is missing')
    if (!details) return toast.error('Details is missing')

    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, ' ')
      .split(' ')
      .filter(item => item.trim())
      .join('-')

    const newSpecifications = specifications
      .split(', ')
      .map(item => item.trim())
      .splice(0, 4)

    const formData = new FormData()

    const finalProperty = {
      ...propertyInfo,
      specifications: JSON.stringify(newSpecifications),
      slug,
    }

    for (let key in finalProperty) {
      formData.append(key, finalProperty[key])
    }

    onSubmit(formData)
    if (resetAfterSubmit) resetForm()
  }

  const resetForm = () => {
    setPropertyInfo({ ...defaultProperty })
    localStorage.removeItem('propertyStore')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="p-4 rounded-lg">
          {/* action buttons */}
          <div className="flex flex-wrap justify-end mx-6 my-2">
            <button
              onClick={resetForm}
              type="button"
              className="flex items-center space-x-2 px-3 hover:text-white hover:bg-primary-500 ring-1 ring-primary-500 rounded h-10 transition">
              <CogIcon className="w-6 h-6" />
              <span>Reset</span>
            </button>

            <button
              onClick={handleDetailsCopy}
              type="button"
              className="flex items-center space-x-2 px-3  text-primary-700 hover:bg-primary-500 ring-1 ring-primary-500 rounded h-10 transition">
              <SaveIcon className="w-6 h-6" />
              <span>Copy</span>
            </button>

            <button className="flex items-center space-x-2 px-3  text-primary-700 hover:bg-primary-500 ring-1 ring-primary-500 rounded h-10 transition">
              <SaveAsIcon className="w-6 h-6" />
              <span>{busy ? <LoaderIcon /> : propertyBtnTitle}</span>
            </button>
          </div>

          {/* featured checkbox */}
          <div className="flex mx-8 my-5">
            <input
              id="featured"
              type="checkbox"
              name="featured"
              value={featured}
              onChange={handleChange}
              hidden
            />
            <label
              className="select-none flex items-center space-x-2 text-primary-500 cursor-pointer group"
              htmlFor="featured">
              <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center group-hover:border-primary-700">
                {featured && (
                  <div className="w-2 h-2 rounded-full bg-primary-500 group-hover:bg-secondary-500" />
                )}
              </div>
              <span className="group-hover: text-primary-500">Make Featured</span>
            </label>
          </div>

          {/* place image div */}
          <div className="flex space-x-2">
            <div>
              <input id="image-input" type="file" onChange={handleImageUpload} hidden />
              <label
                htmlFor="image-input"
                className="flex items-center space-x-2 px-3 text-primary hover:text-white hover:bg-secondary ring-1 ring-primary rounded h-10 transition cursor-pointer">
                <span>Place Image</span>
                {!imageUploading ? <PlayIcon className="w-6 h-6" /> : <LoaderIcon />}
              </label>
            </div>
            {imageUrlToCopy && (
              <div className="flex-1 flex bg-gray-400 justify-between rounded overflow-hidden">
                <input
                  value={imageUrlToCopy}
                  type="text"
                  className="bg-transparent px-2 text-white w-full"
                  disabled
                />
                <button
                  onClick={handleOnCopy}
                  type="button"
                  className="text-xs flex justify-center items-center flex-col self-stretch p-1 bg-gray-700 text-white">
                  <SaveIcon className="w-6 h-6" />
                  <span>Copy</span>
                </button>
              </div>
            )}
          </div>

          {/* details textarea */}
          <div className="flex-1 mx-6 my-4 space-x-4 relative">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div>
                <Textarea
                  name="details"
                  value={details}
                  onFocus={() => setDisplayMarkdownHint(true)}
                  onChange={handleChange}
                  placeholder="Type in property Details"
                  rows="10"
                  cols="23"
                />

                {/* markdown rules */}
                <div className="absolute top-1/2 right-7 lg:top-1 z-5">
                  {displayMarkdownHint && <MarkHint />}
                </div>
              </div>

              {/* image thumbnail */}
              <div className="px-2 max-w-md">
                <h1 className="text-xl font-semibold text-gray-700 mb-2">Image Thumbnail</h1>

                <div>
                  <input onChange={handleChange} name="image" type="file" id="image" hidden />
                  <label className="cursor-pointer" htmlFor="image">
                    {selectedImageURL ? (
                      <Image
                        src={selectedImageURL}
                        alt="Selected image"
                        width={300}
                        height={200}
                        className="aspect-video shadow-sm rounded"
                      />
                    ) : (
                      <div className="border border-dashed border-gray-500 aspect-video text-gray-500 flex flex-col justify-center items-center">
                        <span>Select Image</span>
                        <span className="text-xs">Recommended size</span>
                        <span className="text-xs">1280 * 720</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* form grid */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:mt-10">
              <div className="relative m-4">
                <Label htmlFor="grid-password">Title</Label>

                <TextInput
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Price</Label>
                <TextInput
                  id="price"
                  name="price"
                  type="number"
                  value={price}
                  placeholder="price"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Purpose</Label>

                <TextInput
                  id="purpose"
                  name="purpose"
                  type="text"
                  value={purpose}
                  placeholder="purpose"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Type</Label>

                <TextInput
                  id="type"
                  name="type"
                  type="text"
                  value={type}
                  placeholder="type"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Bedroom</Label>

                <TextInput
                  id="bedroom"
                  name="bedroom"
                  type="number"
                  value={bedroom}
                  placeholder="bedroom"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Bathroom</Label>

                <TextInput
                  id="bathroom"
                  name="bathroom"
                  type="number"
                  value={bathroom}
                  placeholder="bathroom"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Address</Label>

                <TextInput
                  id="address"
                  name="address"
                  type="text"
                  value={address}
                  placeholder="address"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Longitude</Label>

                <TextInput
                  id="longitude"
                  name="longitude"
                  type="text"
                  value={longitude}
                  placeholder="longitude"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Latitude</Label>

                <TextInput
                  id="latitude"
                  name="latitude"
                  type="text"
                  value={latitude}
                  placeholder="latitude"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Meta description {meta?.length} / 150</Label>

                <TextInput
                  id="meta"
                  name="meta"
                  type="text"
                  value={meta}
                  placeholder="meta"
                  onChange={handleChange}
                  onFocus={() => setDisplayMarkdownHint(false)}
                />
              </div>
              <div className="relative m-4">
                <Label htmlFor="grid-password">Specifications</Label>

                <TextInput
                  value={specifications}
                  id="specifications"
                  name="specifications"
                  type="text"
                  placeholder="specifications"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PropertyForm
