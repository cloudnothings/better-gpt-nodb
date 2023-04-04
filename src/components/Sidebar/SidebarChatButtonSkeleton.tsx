import { ChatBubbleLeftEllipsisIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

const SidebarChatButtonSkeleton = () => {
  return (
    <div>
      <div className="select-none lg:select-auto touch-manipulation">
        <div className="hover:bg-gray-700 hover:text-white text-white group flex items-center text-sm font-medium w-full space-x-2 justify-between overflow-hidden">
          <div className="flex items-center justify-start gap-x-2 min-w-0 w-full px-2 py-2 text-sm group cursor-pointer">
            <ChatBubbleLeftEllipsisIcon className="text-gray-300 h-6 w-6 flex-shrink-0 hidden sm:block sm:group-hover:hidden" />
            <div className="flex-shrink-0  sm:hidden sm:group-hover:block"
            >
              <StarIconOutline className="h-6 w-6" />
            </div>
            <div className="space-y-1 text-left w-full min-w-0">
              <div className="bg-white p-2 text-gray-100 truncate w-full">
              </div>
              <div className=" bg-white-gray-400  p-1 truncate w-full">

              </div>
            </div>
          </div>
          <div className="pr-2">
            <div className="flex items-center justify-center space-x-2">
              <div className="text-gray-500 hover:text-white transiton-all">
                <PencilSquareIcon className="w-6 h-6 sm:w-4 sm:h-4" />
              </div>
              <div className="text-gray-500 hover:text-white transiton-all"
              >
                <div className="text-gray-500 hover:text-white transiton-all"
                >
                  <TrashIcon className="w-6 h-6 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SidebarChatButtonSkeleton