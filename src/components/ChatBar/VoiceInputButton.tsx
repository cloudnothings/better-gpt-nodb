'use client';

import { MicrophoneIcon } from "@heroicons/react/24/solid";
import useChatStore from "~/store/chatStore";

const VoiceInputButton = () => {
  const { message } = useChatStore();
  return (
    <>
      {message === '' && (
        <div className="flex items-center space-x-2 group">
          <button disabled className="rounded-full h-10 w-10 bg-gray-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 p-2 flex items-center justify-center transition-all hover:bg-gray-200 space-x-2 shrink-0" >
            <MicrophoneIcon className="h-5 w-5 text-gray-500 dark:text-zinc-500" />
          </button>
        </div>
      )}
    </>
  );
};

export default VoiceInputButton;