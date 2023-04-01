"use client";

import { useEffect, useState } from "react";

const useChat = () => {
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMessage = () => {
    console.log("Sending message: ");
  };

  useEffect(() => {
    console.log("Message changed: ", message);
  }, [message]);

  return { message, setMessage, sendMessage, isLoading };
};

export default useChat;
