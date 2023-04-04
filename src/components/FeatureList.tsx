import Feature from "./Feature"

const FeatureList = () => {
  const features = ["GPT-4 Support",
    "Open Source",
    "No Login Needed",
    "Chat History",
    "More on the way..."]
  return (
    <div className="flex items-center justify-center">
      <div className="my-4 grid sm:grid-cols-2 gap-y-2 gap-x-6">
        {features.map((feature, index) => {
          return (
            <Feature featureName={feature} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default FeatureList