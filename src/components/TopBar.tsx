'use client'
import { Bars3Icon } from "@heroicons/react/24/solid";
import useAppStore from "~/store/appStore";

const TopBar = () => {
  const showSidebar = useAppStore(state => state.showSidebar);
  const setShowSidebar = useAppStore(state => state.setShowSidebar);
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
    localStorage.setItem('showSidebar', !showSidebar ? 'true' : 'false');
  }
  return (
    <div className="print:hidden sticky top-0 z-30 bg-white dark:bg-zinc-700 backdrop-blur">
      <div className="flex absolute left-1 top-0 bottom-0 items-center justify-center">
        <button type="button" onClick={handleShowSidebar} className="inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none  dark:hover:text-gray-100">
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon />
        </button>
      </div>
      {/* <ThemeChanger /> */}
      <div className="flex items-center justify-center w-full p-2 border-bottom-2 border-gray-200 shadow-bottom flex-col min-w-0">
        <div className="font-semibold truncate w-full text-center px-12 text-black dark:text-white">New Chat</div>
        <div className="text-xs text-gray-400">Start a new chat</div>
      </div>
    </div>
  );
}

export default TopBar;