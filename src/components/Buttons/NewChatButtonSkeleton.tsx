import { PlusCircleIcon } from "@heroicons/react/24/solid";

const NewChatButtonSkeleton = () => {
  return (
    <div className="bg-gray-600 text-white group cursor-pointer select-none flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium w-full hover:bg-gray-500 transition-all">
      <PlusCircleIcon className="text-gray-300 mr-2 h-6 w-6 flex-shrink-0" />
      New Chat
    </div>
  )
}

export default NewChatButtonSkeleton