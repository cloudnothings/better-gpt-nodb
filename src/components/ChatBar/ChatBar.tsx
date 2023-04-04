'use client';
import { classNames } from "~/lib/tools";
import ActionButtonsRow from "./ActionButtonsRow";
import ChatBarBody from "./ChatBarBody";
import useAppStore from "~/store/appStore";
const ChatBar = () => {
  const showSidebar = useAppStore(state => state.showSidebar);
  return (
    <div className={classNames(showSidebar ? 'lg:pl-80' : '', "fixed z-30 bottom-0 transition-all duration-300 left-0 right-0 ")} >
      <ActionButtonsRow />
      <ChatBarBody />
    </div >
  )
}


export default ChatBar