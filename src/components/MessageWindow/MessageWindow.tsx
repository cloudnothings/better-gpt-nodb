'use client';

import useThreadStore from "~/store/threadStore";
import MessageContainer from "./MessageContainer";

const MessageWindow = () => {
  const currentThread = useThreadStore((state) => state.currentThread)
  if (!currentThread || !currentThread.messages) {
    return null;
  }
  return (
    <>
      {currentThread.messages.map((message, index) => {
        return (
          <MessageContainer
            key={index}
            {...message}
          />
        );
      })
      }
    </>
  );
};

export default MessageWindow;