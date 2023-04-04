import SidebarChatButtonSkeleton from "./SidebarChatButtonSkeleton";

const ThreadListSkeleton = () => {
  return (
    <div className="flex-1 pb-4">
      <SidebarChatButtonSkeleton />
      <SidebarChatButtonSkeleton />
      <SidebarChatButtonSkeleton />
      <SidebarChatButtonSkeleton />
    </div>
  )
}

export default ThreadListSkeleton