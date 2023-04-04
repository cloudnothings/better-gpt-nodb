import LicenseCluster from "./LicenseCluster"
import SiteInfoCluster from "./SiteInfoCluster"

const SidebarFooter = () => {
  return (
    <div className="flex flex-col flex-shrink-0 bg-gray-700 p-3 justify-center space-y-1">
      <LicenseCluster />
      <div className="border-t border-gray-500 py-1" />
      {/* <SiteInfoCluster /> */}
    </div>
  )
}

export default SidebarFooter