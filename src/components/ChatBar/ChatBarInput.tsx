'use client';

import useApi from "~/hooks/useApi";
import useChatStore from "~/store/chatStore";
import useKeyStore from "~/store/keyStore";
import useThreadStore from "~/store/threadStore";

const ChatBarInput = () => {
  const { message, setMessage, isLoading } = useChatStore()
  const apiKey = useKeyStore(state => state.apiKey)
  const currentThread = useThreadStore(state => state.currentThread)
  const { mutate } = useApi()

  const sendMessage = () => {
    if (message.trim() === '') {
      return
    }
    if (currentThread) {
      mutate({
        apiKey,
        messages: [
          ...currentThread.messages,
          {
            role: 'user',
            content: message,
          }],
        model: currentThread.model.id,
      })
    }
    setMessage('')
  }

  return (
    <div className="relative w-full">
      <textarea
        placeholder="Your message here..."
        className="relative block w-full h-10 rounded-md p-2 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px] resize-none dark:bg-zinc-600 dark:text-white dark:ring-gray-500 dark:focus:ring-blue-500"
        value={message}
        disabled={isLoading}
        onChange={(e) => {
          setMessage(e.target.value)
          console.log(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage()
          }
        }}
      />
    </div>
  )
}

export default ChatBarInput