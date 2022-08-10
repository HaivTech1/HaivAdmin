import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import client, { globalSearch } from '../client'

// create new context
const Context = React.createContext({})

export default function DashboardProvider({ children }) {
  const [user, setUser] = useState([])

  const loggedInUser = async () => {
    await client('/api/users/isLoggedIn')
      .then(response => {
        console.log(response.data.data.user)
        setUser(response.data.data.user)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    loggedInUser()
  }, [])

  const value = {
    user,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useAdmin = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useAdmin must be used within Context')
  }

  return context
}
