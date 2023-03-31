import { Bars3Icon, GiftIcon } from "@heroicons/react/24/solid";
export default function TopBar() {
  return (
    <div className="hide-when-print sticky top-0 z-30 bg-white dark:bg-zinc-700 backdrop-blur">
      <div className="flex lg:hidden absolute left-1 top-0 bottom-0 items-center justify-center">
        <button type="button" className="inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:text-gray-100">
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon />
        </button>
      </div>
      <div className="absolute right-2 top-0 bottom-0 flex items-center justify-center" >
        <button className="inline-flex items-center justify-center rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 py-2 px-2 space-x-2 text-sm">
          <GiftIcon className="h-6 w-6 text-red-500" />
        </button>
      </div>
      <div className="flex items-center justify-center w-full p-2 border-bottom-2 border-gray-200 shadow-bottom flex-col min-w-0">
        <div className="font-semibold truncate w-full text-center px-12 text-black dark:text-white">New Chat</div>
        <div className="text-xs text-gray-400">Start a new chat</div>
      </div>
    </div>
  );
}