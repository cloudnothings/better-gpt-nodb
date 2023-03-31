'use client';

import useKeyStore from "~/store/keyStore"

export default function Warnings() {
  const apiKeyError = useKeyStore(state => state.apiKeyError)
  if (apiKeyError) {
    return (
      <div className="text-red-500 text-center text-sm px-4">
        Please enter your own OpenAI API key to get started.
      </div>
    )
  }
  return (
    <></>
  )
}
