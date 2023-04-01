'use client';

import { PlusCircleIcon } from "@heroicons/react/24/solid"
import useThreadStore from "~/store/threadStore";

const NewChatButton = () => {
  const newChatHandler = useThreadStore(state => state.resetState)
  return (
    <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium w-full hover:bg-gray-500 transition-all"
      onClick={newChatHandler}
    >
      <PlusCircleIcon className="text-gray-300 mr-2 h-6 w-6 flex-shrink-0" />
      New Chat
    </button>
  )
}

export default NewChatButton