import Link from 'next/link'

const Menu = ({ title, count, children }) => {
  const url = title.toLowerCase()
  return (
    <div className="bg-primary-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-primary-600 dark:border-gray-600 text-white font-medium group">
      <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
        {children}
      </div>
      <div className="text-right">
        <p className="text-2xl">{count}</p>
        <Link href={`/dashboard/${url}/create`}>{title}</Link>
      </div>
    </div>
  )
}

export default Menu
