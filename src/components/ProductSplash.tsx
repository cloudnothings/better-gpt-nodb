import GetStartedAPIKeyButton from "./Buttons/GetStartedAPIKeyButton"
import FeatureList from "./FeatureList"
import Logo from "./Logo"

export default function ProductSplash() {
  return (
    <div className="p-6 sm:p-10 flex items-center justify-center">
      <div>
        <Logo />
        <div className="text-center font-light text-base sm:text-xl my-4 sm:my-6 text-black dark:text-white">
          An open source UI for ChatGPT
        </div>
        {/* List of features */}
        <FeatureList />
        {/* Premium Features Button */}
        {/* <PremiumFeaturesButton /> */}
        {/* API Key Input */}
        <GetStartedAPIKeyButton />
      </div>
    </div >
  )
}