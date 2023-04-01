import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import NewChatButton from "../Buttons/NewChatButton";

const TopSidebarCluster = () => {
  return (
    <div className="px-2 space-y-2 sticky z-30 top-0 bg-gray-800 py-2">
      <div className="flex items-center justify-center space-x-2">
        <NewChatButton />
        <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:bg-gray-500 transition-all w-12 shrink-0"
        >
          <Cog8ToothIcon className="text-gray-300 h-6 w-6 flex-shrink-0" />
        </button>
      </div>
      {/* Search for chats */}
      {/* <div className="relative flex items-center space-x-2">
            <div className="relative w-full">
              <input type="text" placeholder="Search chats..." className="bg-gray-700 text-white px-2 py-1 rounded-md w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="text-gray-500 hover:text-white transiton-all flex items-center justify-center w-12 shrink-0"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"></path></svg>
            </button>
          </div> */}
      {/* <StarredChats /> */}
    </div>
  );
};

export default TopSidebarCluster;