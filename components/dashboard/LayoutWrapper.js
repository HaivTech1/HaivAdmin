import Navigation from './Navigation'
import Sidebar from './Sidebar'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">{children}</div>
        <Sidebar />
      </div>
    </>
  )
}

export default LayoutWrapper
