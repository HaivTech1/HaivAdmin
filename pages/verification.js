import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import toast, { LoaderIcon } from 'react-hot-toast'
import { useRouter } from 'next/router'
import client from '../lib/client'
import siteMetadata from '../utils/siteMetadata'
import { PageSEO } from '../utils/SEO'
import AuthCard from '../components/form/AuthCard'

const inputs = Array(6).fill('')
let newInputIndex = 0

const isObjectValid = obj => {
  return Object.values(obj).every(val => val.trim())
}

const Verification = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const vinput = React.useRef()
  const [nextInputIndex, setNextInputIndex] = useState(0)

  const [OTP, setOTP] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  })

  const handleChangeText = (text, index) => {
    const newOTP = { ...OTP }
    newOTP[index] = text
    setOTP(newOTP)

    const lastInputIndex = inputs.length - 1
    if (!text) newInputIndex = index === 0 ? 0 : index - 1
    else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1
    setNextInputIndex(newInputIndex)
  }

  useEffect(() => {
    vinput.current.focus()
  }, [nextInputIndex])

  const submitOTP = async () => {
    if (isObjectValid(OTP)) {
      let val = ''
      Object.values(OTP).forEach(v => {
        val += v
      })
      setIsLoading(true)

      await client
        .post(`/api/users/authVerify/${val}`)
        .then(response => {
          console.log(response.data)
          toast.success('Verification successful, You are now being redirected!')
          setIsLoading(false)

          setInterval(() => {
            router.push('/')
          }, 1500)
        })
        .catch(error => {
          console.log(error)
          toast.error(error.message)
          setIsLoading(false)
        })
    }
  }

  return (
    <>
      <PageSEO title="Verify your account" description={siteMetadata.description} />
      <AuthCard>
        <div>
          <p className="mb-4 text-center">
            Please verify your account, PIN has been sent to your email
          </p>
          <div className="mb-4 grid place-items-center grid-cols-6">
            {inputs.map((inp, index) => {
              return (
                <div key={index.toString()}>
                  <input
                    value={OTP[index]}
                    onChange={event => handleChangeText(event.target.value, index)}
                    placeholder="0"
                    type="text"
                    maxLength="1"
                    ref={nextInputIndex === index ? vinput : null}
                    className="block w-12 text-center px-3 py-1.5 text-base font-bold text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-primary-700 focus:border-0 focus:ring-primary-700 focus:outline-none focus:ring  duration-150"
                  />
                </div>
              )
            })}
          </div>
          <div className="text-center pt-1 mb-12 pb-1">
            <button
              onClick={submitOTP}
              className="big-background inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
              {isLoading ? (
                <div className="flex justify-center">
                  <LoaderIcon />
                </div>
              ) : (
                'Verify account'
              )}
            </button>
          </div>
        </div>
      </AuthCard>
    </>
  )
}

export default Verification
