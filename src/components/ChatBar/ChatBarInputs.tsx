import PromptSettingsButton from "./PromptSettingsButton";
import SendMessageButton from "./SendMessageButton";
import VoiceInputButton from "./VoiceInputButton";

const ChatBarInput = () => {
  return (
    <div className="w-full flex items-end justify-center gap-2">
      <PromptSettingsButton />
      {/* <ChatBarInput /> */}
      <SendMessageButton />
      <VoiceInputButton />
    </div>
  )
}

export default ChatBarInput