'use client';

import useThreadStore from "~/store/threadStore"
import SidebarChatButton from "./SidebarChatButton";

const ThreadList = () => {
  const threads = useThreadStore((state) => state.threads)
  const currentThread = useThreadStore((state) => state.currentThread)
  return (
    <div className="flex-1 pb-4">
      {threads.map((thread) => {
        return (
          <SidebarChatButton  {...thread} key={thread.id} selected={currentThread?.id === thread.id} />
        )
      })}
    </div>
  )
}

export default ThreadList