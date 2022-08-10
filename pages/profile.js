import React, { useState } from 'react'
import LayoutWrapper from '../components/dashboard/LayoutWrapper'
import Label from '../components/form/Label'
import TextInput from '../components/form/TextInput'
import { useAdmin } from '../lib/provider/context'
import { PageSEO } from '../utils/SEO'
import siteMetadata from '../utils/siteMetadata'
import Image from 'next/image'

const Profile = () => {
  const { user } = useAdmin()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [avatar, setAvatar] = useState(user.email)
  const [selectedImageURL, setSelectedImageURL] = useState('')

  const handleChange = ({ target }) => {
    const { value, name, checked } = target

    if (name === 'avatar') {
      const file = target.files[0]
      if (!file.type.includes('image')) {
        toast.error('This is not an image')
        console.log('This is not an image')
      }
      setAvatar({ avatar: file })
      return setSelectedImageURL(URL.createObjectURL(file))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <PageSEO title="Profile" description={siteMetadata.description} />
      <LayoutWrapper>
        <div className="mt-8 mx-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Update Profile
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                update your profile details
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  {siteMetadata.address}
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  {siteMetadata.phone}
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  {siteMetadata.email}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
              <div className="flex justify-center items-center">
                <div>
                  <input onChange={handleChange} name="avatar" type="file" id="avatar" hidden />
                  <label className="cursor-pointer" htmlFor="avatar">
                    {selectedImageURL ? (
                      <Image
                        src={selectedImageURL}
                        alt="Selected image"
                        width={150}
                        height={150}
                        className="aspect-video shadow-sm rounded-full"
                      />
                    ) : (
                      <div className="border border-primary-500 w-48 h-48 text-gray-500 flex flex-col justify-center items-center rounded-full">
                        <span>Avatar</span>
                        <span className="text-xs">Recommended size</span>
                        <span className="text-xs">1280 * 720</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div className="flex flex-col">
                <Label htmlFor="name" className="hidden">
                  Full Name
                </Label>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-primary-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <Label htmlFor="email" className="hidden">
                  Email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-primary-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="md:w-32 bg-primary-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-primary-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </LayoutWrapper>
    </>
  )
}

export default Profile
