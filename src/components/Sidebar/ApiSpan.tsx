import ApiCostButton from "./ApiCostButton"

const ApiSpan = () => {
  return (
    <div className="flex justify-between p-2 hover:bg-opacity-60 hover:bg-gray-600 rounded-md bg-transparent" >
      <span className="text-white font-semibold flex items-center justify-end">
        OpenAI API Key
      </span>
      <ApiCostButton />
    </div>
  )
}

export default ApiSpan