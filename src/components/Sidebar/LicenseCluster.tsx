import ApiSpan from "./ApiSpan"

const LicenseCluster = () => {
  // const setApiKeyModal = useStore((state) => state.setApiKeyModal)
  // const profile = useStore((state) => state.profile)
  return (
    <div className="flex items-center ">
      <div className="mb-2 flex flex-col gap-2 w-full">
        <ApiSpan />
      </div>
    </div>
  )
}

export default LicenseCluster