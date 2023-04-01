import { LanguageIcon } from "@heroicons/react/24/solid";
const PromptSettingsButtonSkeleton = () => {
  return (
    <button className="shrink-0 text-gray-500 dark:text-zinc-500 transition-colors p-1.5 rounded-lg relative hover:text-gray-900 dark:hover:text-zinc-200"
      disabled
    >
      <LanguageIcon className="h-6 w-6" />
    </button >
  );
};

export default PromptSettingsButtonSkeleton;