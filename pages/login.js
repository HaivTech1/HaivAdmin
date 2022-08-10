import { useRouter } from 'next/router'
import toast, { LoaderIcon } from 'react-hot-toast'
import { useState } from 'react'
import AuthBase from '../components/AuthBase'
import AuthCard from '../components/form/AuthCard'
import TextInput from '../components/form/TextInput'
import { PageSEO } from '../utils/SEO'
import siteMetadata from '../utils/siteMetadata'
import client from '../lib/client'

const Login = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const submitForm = async event => {
    event.preventDefault()

    if (!name.trim()) return toast.error('Name is missing')
    if (!email.trim()) return toast.error('Email is missing')

    setIsLoading(true)

    await client
      .post('/api/users/authLogin', {
        name,
        email,
      })
      .then(response => {
        if (response.data.success === 'true') {
          toast.success(response.data.message)
          setIsLoading(false)
          router.push('/verification')
        } else {
          toast.error('There was a network problem, please try again!')
          setIsLoading(false)
        }
      })
      .catch(error => {
        toast.error(error.response.data.message)
        setIsLoading(false)
      })
  }

  return (
    <>
      <PageSEO title="Sign in into your account" description={siteMetadata.description} />
      <AuthCard>
        <form onSubmit={submitForm}>
          <p className="mb-4">Please login to your account</p>

          <div className="mb-4">
            <TextInput
              value={name}
              type="text"
              placeholder="name"
              onChange={event => setName(event.target.value)}
            />
          </div>

          <div className="mb-4">
            <TextInput
              value={email}
              type="email"
              placeholder="email"
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className="text-center pt-1 mb-12 pb-1">
            <button
              className="big-background inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              {isLoading ? (
                <div className="flex justify-center">
                  <LoaderIcon />
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </div>

          <AuthBase />
        </form>
      </AuthCard>
    </>
  )
}

export default Login
