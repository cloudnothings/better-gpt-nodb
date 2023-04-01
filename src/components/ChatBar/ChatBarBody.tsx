import ChatBarInput from "./ChatBarInputs";
import PromptSettingsBar from "./PromptSettingsBar";

const ChatBarBody = () => {
  return (
    <div className="px-4 pb-4 pt-0 bg-white dark:bg-zinc-800 transition-colors">
      <div className="pb-safe">
        <div className="flex items-end justify-center space-x-2 mb-2">
          <div className="w-full space-y-2 pt-2">
            <PromptSettingsBar />
            <ChatBarInput />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBarBody