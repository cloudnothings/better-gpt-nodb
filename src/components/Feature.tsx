import { CheckCircleIcon } from "@heroicons/react/24/solid"

const Feature = (props: { featureName: string }) => {
  return (
    <div className="flex items-center justify-start space-x-1">
      <CheckCircleIcon className="text-green-500 w-4 h-4" />
      <div className="text-sm">
        {props.featureName}
      </div>
    </div>
  )
}

export default Feature