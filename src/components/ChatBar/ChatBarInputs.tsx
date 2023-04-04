import { Suspense } from "react";
import ChatBarInput from "./ChatBarInput";
import PromptSettingsButton from "./PromptSettingsButton";
import VoiceInputButton from "./VoiceInputButton";
import ChatBarInputSkeleton from "./ChatBarInputSkeleton";
import PromptSettingsButtonSkeleton from "./PromptSettingsButtonSkeleton";
import VoiceInputButtonSkeleton from "./VoiceInputButtonSkeleton";

const ChatBarInputs = () => {
  return (
    <div className="w-full flex items-end justify-center gap-2">
      <Suspense fallback={<PromptSettingsButtonSkeleton />}>
        <PromptSettingsButton />
      </Suspense>
      <Suspense fallback={<ChatBarInputSkeleton />}>
        <ChatBarInput />
      </Suspense>
      <Suspense fallback={<VoiceInputButtonSkeleton />}>
        <VoiceInputButton />
      </Suspense>
    </div>
  )
}

export default ChatBarInputs