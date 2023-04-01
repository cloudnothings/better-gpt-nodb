import ApiCostButton from "./ApiCostButton"
import ApiSpan from "./ApiSpan"

const LicenseCluster = () => {
  // const setApiKeyModal = useStore((state) => state.setApiKeyModal)
  // const profile = useStore((state) => state.profile)
  return (
    <div className="flex items-center justify-center">
      <div className="mb-2 grid grid-cols-2 gap-2">
        {/* <div className=" text-xs text-white font-semibold flex items-center justify-end">
          License Key
        </div>
        <div>
          <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all">
            <ExclamationTriangleIcon className="text-yellow-500 mr-2 h-4 w-4 flex-shrink-0" />
            Unlicensed
          </button>
        </div> */}
        <ApiSpan />
      </div>
    </div>
  )
}

export default LicenseCluster