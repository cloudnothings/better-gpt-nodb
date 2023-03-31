'use client';

import { KeyIcon } from "@heroicons/react/24/solid"
import useKeyStore from "~/store/keyStore";
import useModalStore from "~/store/modalStore"

const GetStartedAPIKeyButton = () => {
  const apiKey = useKeyStore(state => state.apiKey)
  const setApiKeyModal = useModalStore(state => state.setApiKeyModal)
  return (
    <div className="mt-10 ">
      <div className="text-sm mt-10 text-center space-y-4">
        <div>
          <div>
            To get started, enter your OpenAI API key below.
          </div>
          <div className="text-xs">
            Your API Key is stored locally on your browser and never sent anywhere else.
          </div>
        </div>
        <div>
          <button className="inline-flex items-center justify-center rounded-full px-4 py-3 text-sm shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold disabled:bg-gray-400 space-x-2"
            onClick={() => setApiKeyModal(true)}
          >
            <KeyIcon className="h-5 w-5" />
            <span>
              {`Enter API Key`}
            </span>
          </button>
        </div>
        <div className="text-center">
          <a className="text-blue-500 text-xs hover:underline" target="_blank" rel="noopener noreferrer" href="https://platform.openai.com/account/api-keys">
            {`→ Get your API key from Open AI dashboard.`}
          </a>
        </div>
      </div>
    </div>
  )
}

export default GetStartedAPIKeyButton