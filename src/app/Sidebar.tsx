import { Bars3Icon, ChatBubbleLeftEllipsisIcon, CheckIcon, Cog8ToothIcon, ExclamationTriangleIcon, GiftIcon, PencilSquareIcon, PlusCircleIcon, ShieldExclamationIcon, StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
export default function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col z-40">
      <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
        <div className="flex flex-1 flex-col overflow-y-auto pb-4">
          <div className="flex-1 space-y-2 bg-gray-800 flex flex-col">
            <div className="px-2 space-y-2 sticky z-30 top-0 bg-gray-800 py-2">
              <div className="flex items-center justify-center space-x-2">
                <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium w-full hover:bg-gray-500 transition-all"
                // onClick={newChatHandler}
                >
                  <PlusCircleIcon className="text-gray-300 mr-2 h-6 w-6 flex-shrink-0" />
                  New Chat
                </button>
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
            {/* <CreateFolderForm /> */}
            <ThreadList />
            {/* Implement Drag n Drop for Chats */}
          </div>
        </div>
      </div>
      <SidebarFooter>
        <LicenseCluster />
        <div className="border-t border-gray-500 py-1" />
        <SiteInfoCluster />
      </SidebarFooter>
    </div>
  )
}
const ThreadList = () => {
  // const threads = useStore((state) => state.threads)
  // const selectedThread = useStore((state) => state.thread)
  return (
    <div className="flex-1 pb-4">
      {/* {threads.map((thread) => {
        return (
          <SidebarChatButton  {...thread} key={thread.id} selected={selectedThread.id === thread.id} />
        )
      })} */}
    </div>
  )
}

function SiteInfoCluster() {
  return (
    <>
      <Copyright />
      <PrivacyPolicy />
      <FeedbackThemeVolume />
    </>
  )
}

function SidebarFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-shrink-0 bg-gray-700 p-3 justify-center space-y-1">
      {children}
    </div>
  )
}
const FeedbackThemeVolume = () => {
  return (
    <div className="text-center flex items-center justify-center pb-safe">
      <div>
        <button type="button" className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2">

          <ShieldExclamationIcon className="h-4 w-4" />
          <span>Send Feedback</span>
        </button>
      </div>
      {/* Dark mode toggle */}
      {/* <button type="button" className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
      </button> */}
      {/* <button type="button" className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs hover:bg-gray-500 transition-all space-x-2 mr-2">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path></svg>
      </button> */}
    </div>
  )
}
const PrivacyPolicy = () => {
  return (
    <div className="text-xs text-gray-400 text-center flex gap-1 justify-center">
      <a href="/privacy" target="_blank" className="hover:underline">
        Privacy
      </a>
      |
      <a href="/terms" target="_blank" className="hover:underline">
        Terms
      </a>
      |
      <a href="/faqs" target="_blank" className="hover:underline">
        FAQs
      </a>
      |
      <a rel="noopener noreferrer" href="https://openai.com" target="_blank" className="hover:underline">
        Changelog
      </a>
    </div>
  )
}
const Copyright = () => {
  const website = "better-chat.vercel.app"
  return (
    <div className="text-xs text-gray-400 font-semibold text-center">
      <a href="https://openai.com" className="px-1">
        {website}
      </a>
      ©
      <span className="px-1">
        2023
      </span>
    </div>
  )
}

function ChatControls() {
  return (
    <></>
  )
}
const LicenseCluster = () => {
  // const setApiKeyModal = useStore((state) => state.setApiKeyModal)
  // const profile = useStore((state) => state.profile)
  return (
    <div className="flex items-center justify-center">
      <div className="mb-2 grid grid-cols-2 gap-2">
        {/* <div className=" text-xs text-white font-semibold flex items-center justify-end">
          License Key
        </div>
        <div>
          <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all">
            <ExclamationTriangleIcon className="text-yellow-500 mr-2 h-4 w-4 flex-shrink-0" />
            Unlicensed
          </button>
        </div> */}
        <div className="text-xs text-white font-semibold flex items-center justify-end">
          OpenAI API Key
        </div>
        <div className="flex items-center relative">
          <div className="">
            <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium w-full hover:bg-gray-500 transition-all space-x-1"
            // onClick={() => setApiKeyModal(true)}
            >
              {/* {profile.key
                ? (<>
                  <CheckIcon className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>
                    { // parse as dollars, show hundredth thousandths
                      `$${(profile.cost / 1000).toFixed(5)}`
                    }
                  </span>
                </>)
                : (<>
                  <ExclamationTriangleIcon className="h-4 w-4 mr-2 text-yellow-500" />
                  <span>
                    {`Enter API Key`}
                  </span>
                </>)} */}
            </button>
          </div>
          {/* OpenAI Status Button */}
          <button className="flex items-center justify-center absolute left-full ml-2">
            <div className="h-3 w-3 rounded-full bg-green-500">
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}