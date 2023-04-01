'use client';

import useChat from "~/hooks/useChat";

const SendMessageButton = () => {
  const { message, sendMessage, isLoading } = useChat()
  if (!message) return <></>;
  return (
    <button className="inline-flex items-center h-10 px-4 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap space-x-1"
      type="button"
      onClick={sendMessage}
      disabled={isLoading}
    >
      → Send
    </button>
  )
}

export default SendMessageButton