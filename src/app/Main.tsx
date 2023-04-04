'use client';

import { classNames } from "~/lib/tools";
import MainBody from "../components/MainBody";
import TopBar from "../components/TopBar";
import useAppStore from "~/store/appStore";

export default function Main() {
  const showSidebar = useAppStore(state => state.showSidebar);
  return (
    <div className={classNames(showSidebar ? 'lg:!pl-80' : '', "lg:pl-0 flex flex-1 flex-col transition-all duration-300")}>
      <main className="relative">
        <TopBar />
        <MainBody />
      </main>
    </div>
  );
}