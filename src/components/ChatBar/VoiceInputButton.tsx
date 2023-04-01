'use client';

import { MicrophoneIcon } from "@heroicons/react/24/solid";
import useChat from "~/hooks/useChat";

const VoiceInputButton = () => {
  const { message } = useChat();
  if (message) return <></>;
  return (
    <div className="flex items-center space-x-2 group">
      <button className="rounded-full w-10 h-10 bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 p-2 flex items-center justify-center transition-all hover:bg-gray-200 space-x-2 shrink-0" >
        <MicrophoneIcon className="h-5 w-5 text-gray-500 dark:text-zinc-500" />
      </button>
    </div>
  );
};

export default VoiceInputButton;