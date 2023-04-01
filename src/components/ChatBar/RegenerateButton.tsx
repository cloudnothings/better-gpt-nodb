import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/solid";
import FeatureButton from "../Buttons/FeatureButton";

const RegenerateButton = () => {
  const regenerate = () => {
    console.log("Regenerate");
  };

  return (
    <FeatureButton
      color="bg-blue-500 active:bg-blue-600"
      featureName="Regenerate"
      icon={ArrowPathRoundedSquareIcon}
      onClick={regenerate}
    />
  );
};

export default RegenerateButton;
