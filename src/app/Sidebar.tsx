'use client';

import SidebarFooter from "~/components/Sidebar/SidebarFooter";
import ThreadList from "~/components/Sidebar/ThreadList";
import TopSidebarCluster from "~/components/Sidebar/TopSidebarCluster";
import { classNames } from "~/lib/tools";
import useAppStore from "~/store/appStore";
const Sidebar = () => {
  const showSidebar = useAppStore(state => state.showSidebar);
  return (
    <div className={classNames(showSidebar ? 'lg:!translate-x-0' : '', 'hidden lg:-translate-x-full lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col z-40 transition duration-300')}>
      <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
        <div className="flex flex-1 flex-col overflow-y-auto pb-4">
          <div className="flex-1 space-y-2 bg-gray-800 flex flex-col">
            <TopSidebarCluster />
            {/* <CreateFolderForm /> */}
            <ThreadList />
            {/* Implement Drag n Drop for Chats */}
          </div>
        </div>
      </div>
      <SidebarFooter />
    </div>
  )
}

export default Sidebar