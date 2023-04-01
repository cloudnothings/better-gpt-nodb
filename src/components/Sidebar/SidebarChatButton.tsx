'use client';

import { ChatBubbleLeftEllipsisIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { type MouseEventHandler, useState } from "react"
import useThreadStore from "~/store/threadStore"
import type { Thread } from "~/types/appstate"
import { classNames } from "~/lib/tools";

const SidebarChatButton = (props: Thread & { selected: boolean }) => {
  const setCurrentThread = useThreadStore((state) => state.setCurrentThread)
  const starThreadHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setCurrentThread({ ...props, starred: !props.starred })
  }
  // const deleteThread = useStore((state) => state.deleteThread)
  const [deleting, setDeleting] = useState(false)
  const deleteHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    // deleteThread({ ...props })
    // setProfile({ ...profile, threadIds: profile.threadIds.filter(id => id !== props.id) })
  }
  const selectHandler = () => {
    if (props.selected) return
    setCurrentThread({ ...props })
  }
  return (
    <div role="button" onClick={selectHandler}>
      <div className="select-none lg:select-auto touch-manipulation">
        <div className={classNames(props?.selected ? "bg-gray-900" : "hover:bg-gray-700 hover:text-white", " text-white group flex items-center text-sm font-medium w-full space-x-2 justify-between overflow-hidden")}>
          <div className="flex items-center justify-start gap-x-2 min-w-0 w-full px-2 py-2 text-sm group cursor-pointer">
            <ChatBubbleLeftEllipsisIcon className="text-gray-300 h-6 w-6 flex-shrink-0 hidden sm:block sm:group-hover:hidden" />
            <button className="flex-shrink-0  sm:hidden sm:group-hover:block"
              onClick={starThreadHandler} >
              <StarIconOutline className="h-6 w-6" />
            </button>
            <div className="space-y-1 text-left w-full min-w-0">
              <div className="text-gray-100 truncate w-full">
                {props.title}
              </div>
              <div className="text-xs text-gray-400 font-normal truncate w-full">
                {props.messages[props.messages.length - 1]?.content}
              </div>
            </div>
          </div>
          <div className="pr-2">
            <div className="flex items-center justify-center space-x-2">
              <button className="text-gray-500 hover:text-white transiton-all">
                <PencilSquareIcon className="w-6 h-6 sm:w-4 sm:h-4" />
              </button>
              <button className="text-gray-500 hover:text-white transiton-all"
              >
                {!deleting &&
                  <button className="text-gray-500 hover:text-white transiton-all"
                    onClick={() => console.log("delete")}
                  >
                    <TrashIcon className="w-6 h-6 sm:w-4 sm:h-4" />
                  </button>
                }
                {deleting &&
                  <button className="text-red-500 hover:text-white transiton-all"
                    onClick={deleteHandler}>
                    <TrashIcon className="w-6 h-6 sm:w-4 sm:h-4" />
                  </button>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SidebarChatButton