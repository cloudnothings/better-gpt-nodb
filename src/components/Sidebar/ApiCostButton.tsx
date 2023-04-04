'use client';

import { CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import useKeyStore from "~/store/keyStore";
import useModalStore from "~/store/modalStore";

const ApiCostButton = () => {
  const setApiKeyModal = useModalStore(state => state.setApiKeyModal)
  const apiKey = useKeyStore(state => state.apiKey)
  const cost = useKeyStore(state => state.cost)
  return (
    <div>
      <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-1 font-medium w-full hover:bg-gray-500 transition-all space-x-1"
        onClick={() => setApiKeyModal(true)}
      >
        {apiKey ? (
          <>
            <CheckIcon className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" />
            <span>
              { // parse as dollars, show hundredth thousandths
                `$${(cost)}`
              }
            </span>
          </>
        ) : (
          <>
            <ExclamationTriangleIcon className="h-4 w-4 mr-2 text-yellow-500" />
            <span>
              {`Enter API Key`}
            </span>
          </>
        )}
      </button>
    </div>
  )
}

export default ApiCostButton