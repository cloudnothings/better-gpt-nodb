import NewChatButton from "../Buttons/NewChatButton";
import { Suspense } from "react";
import SearchBar from "./SearchBar";
import SearchBarSkeleton from "./SearchBarSkeleton";
import NewChatButtonSkeleton from "../Buttons/NewChatButtonSkeleton";
import SidebarSettingsButtonSkeleton from "./SettingsButtonSkeleton";
import SidebarSettingsButton from "./SettingsButton";

const TopSidebarCluster = () => {
  return (
    <div className="px-2 space-y-2 sticky z-30 top-0 bg-gray-800 py-2">
      <div className="flex items-center justify-center space-x-2">
        <Suspense fallback={<NewChatButtonSkeleton />}>
          <NewChatButton />
        </Suspense>
        <Suspense fallback={<SidebarSettingsButtonSkeleton />}>
          <SidebarSettingsButton />
        </Suspense>
      </div>
      <Suspense fallback={<SearchBarSkeleton />}>
        <SearchBar />
      </Suspense>
      {/*  */}
      {/* <StarredChats /> */}
    </div>
  );
};

export default TopSidebarCluster;
