import LayoutWrapper from '../../components/dashboard/LayoutWrapper'
import Menu from '../../components/dashboard/Menu'
import { PageSEO } from '../../utils/SEO'
import siteMetadata from '../../utils/siteMetadata'
import { FiBookOpen, FiHome, FiUser } from 'react-icons/fi'
import Details from '../../components/dashboard/Details'

const Dashboard = () => {
  return (
    <>
      <PageSEO title={siteMetadata.type} description={siteMetadata.description} />
      <LayoutWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <Menu title="User" count="1,257">
            <FiUser className="w-7 h-7" />
          </Menu>

          <Menu title="Property" count="1,257">
            <FiHome className="w-7 h-7" />
          </Menu>

          <Menu title="Post" count="1,257">
            <FiBookOpen className="w-7 h-7" />
          </Menu>
        </div>
        <Details />
      </LayoutWrapper>
    </>
  )
}

export default Dashboard
