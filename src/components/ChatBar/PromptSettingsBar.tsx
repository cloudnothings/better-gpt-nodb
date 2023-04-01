'use client';

import { classNames } from "~/lib/tools";
import SelectMenu from "./SelectMenu";
import useModalStore from "~/store/modalStore";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
const options = [
  { value: '', label: 'Default' },
  { value: 'concise', label: 'Concise' },
  { value: 'step-by-step', label: 'Step-by-step' },
  { value: 'extreme-detail', label: 'Extreme Detail' },
  { value: 'eli5', label: 'ELI5' },
];

const PromptSettingsBar = () => {
  const showMenu = useModalStore(state => state.promptSettingsModal);
  return (
    <div className={classNames(showMenu ? '' : "hidden", "flex justify-center flex-col sm:flex-row space-x-0 gap-2 sm:gap-0")} >
      <div className="flex flex-wrap w-full max-w-3xl justify-between">
        <SelectMenu options={options} label={"Format"} />
        <SelectMenu options={options} label={"Format"} />
        <SelectMenu options={options} label={"Format"} />
        <SelectMenu options={options} label={"Format"} />
        {/* <SelectMenu />
      <SelectMenu />
      <SelectMenu /> */}
      </div>
      <button className="p-1 ml-2 flex items-center justify-center">
        <ArrowPathIcon className="h-5 w-5 text-gray-500 dark:text-zinc-500" />
        <span className="sm:hidden text-xs text-gray-500 font-semibold">Reset to defaults</span>
      </button>
    </div>
  );
};

export default PromptSettingsBar;