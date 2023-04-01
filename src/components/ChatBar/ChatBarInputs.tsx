import ChatBarInput from "./ChatBarInput";
import PromptSettingsButton from "./PromptSettingsButton";
import SendMessageButton from "./SendMessageButton";
import VoiceInputButton from "./VoiceInputButton";

const ChatBarInputs = () => {
  return (
    <div className="w-full flex items-end justify-center gap-2">
      <PromptSettingsButton />
      <ChatBarInput />
      <SendMessageButton />
      <VoiceInputButton />
    </div>
  )
}

export default ChatBarInputs