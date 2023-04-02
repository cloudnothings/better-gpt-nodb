'use client';

import useChatStore from "~/store/chatStore";
import useKeyStore from "~/store/keyStore";
import useThreadStore from "~/store/threadStore";
import { useMutation } from "@tanstack/react-query";
import { type Thread, type Message } from "~/types/appstate";
import { nanoid } from 'nanoid';
import { Configuration, OpenAIApi } from "openai";
import useAppStore from "~/store/appStore";

const ChatBarInput = () => {
  const { message, setMessage } = useChatStore()
  const apiKey = useKeyStore(state => state.apiKey)
  const currentThread = useThreadStore(state => state.currentThread)
  const setCurrentThread = useThreadStore(state => state.setCurrentThread)
  const threads = useThreadStore(state => state.threads)
  const setThreads = useThreadStore(state => state.setThreads)
  const systemMessage = useAppStore(state => state.defaultSystemMessage)
  const defaultModel = useAppStore(state => state.defaultModel)

  const { isLoading, mutate } = useMutation({
    mutationFn: async ({ apiKey, messages, model }:
      { apiKey: string, messages: Message[], model: string }
    ) => {
      const configuration = new Configuration({
        apiKey: apiKey,
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.createChatCompletion({
        messages, model
      }).catch((err) => {
        console.log(err)
      })
      if (response) {
        return response.data
      }
    },
    onSuccess: (data) => {
      if (data) {
        const messages = data.choices.map((choice) => choice.message as Message)
        if (currentThread) {
          const newThread = {
            ...currentThread,
            messages: [...currentThread.messages, ...messages]
          } as Thread
          setCurrentThread(newThread)
          if (!threads.find(thread => thread.id === newThread.id)) {
            threads.push(newThread)
            localStorage.setItem('threads', JSON.stringify(threads))
            setThreads(threads)
          } else {
            threads[threads.findIndex(thread => thread.id === newThread.id)] = newThread
            localStorage.setItem('threads', JSON.stringify(threads))
            setThreads(threads)
          }
        } else {
          console.log('new thread')
          const newThread = {
            id: nanoid(),
            messages: [...messages],
            model: defaultModel,
            budget: 0,
            cost: 0,
            description: '',
            initialSystemInstruction: systemMessage,
            starred: false,
            title: message
          } as Thread
          setCurrentThread(newThread)
          threads.push(newThread)
          localStorage.setItem('threads', JSON.stringify(threads))
          setThreads(threads)
        }
      }
    },
    onError: (error) => {
      console.log(error)
    },
    onSettled: () => {
      setMessage('')
    }
  }
  )

  const handleSendMessage = () => {
    if (!apiKey) {
      return
    }
    if (message.length === 0) {
      return
    }
    if (currentThread) {
      setCurrentThread({
        ...currentThread,
        messages: [...currentThread.messages, { role: 'user', content: message }]
      })
      mutate({
        apiKey,
        messages: [...currentThread.messages, { role: 'user', content: message }],
        model: currentThread.model.id
      })
    } else {
      const newThread = {
        id: nanoid(),
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: message }
        ] as Message[],
        model: defaultModel,
        budget: 0,
        cost: 0,
        description: '',
        initialSystemInstruction: systemMessage,
        starred: false,
        title: message
      } as Thread
      setCurrentThread(newThread)
      mutate({
        apiKey,
        messages: newThread.messages,
        model: newThread.model.id
      })
    }
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
            e.preventDefault()
            handleSendMessage()
          }
        }}
      />
    </div>
  )
}

export default ChatBarInput