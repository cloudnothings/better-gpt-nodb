import ActionButtonsRow from "./ActionButtonsRow";
import ChatBarBody from "./ChatBarBody";
const ChatBar = () => {
  return (
    <div className="fixed z-30 bottom-0 left-0 right-0 lg:pl-80">
      <ActionButtonsRow />
      <ChatBarBody />
    </div >
  )
}


export default ChatBar