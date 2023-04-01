import ApiCostButton from "./ApiCostButton"

const ApiSpan = () => {
  return (
    <>
      <div className="text-xs text-white font-semibold flex items-center justify-end">
        OpenAI API Key
      </div>
      <div className="flex items-center relative">
        <ApiCostButton />

      </div>
    </>
  )
}

export default ApiSpan