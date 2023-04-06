'use client';

import useThreadStore from "~/store/threadStore";
import GetStartedAPIKeyButton from "./Buttons/GetStartedAPIKeyButton"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import FeatureList from "./FeatureList"
import Logo from "./Logo"
import { classNames } from "~/lib/tools";

export default function ProductSplash() {
  const [parent] = useAutoAnimate()

  const currentThread = useThreadStore(state => state.currentThread)
  return (
    <div ref={parent} className={classNames(currentThread ? 'flex-row justify-between' : 'flex-col items-center justify-center', " p-6 sm:p-10 flex")}>
      <div>
        <Logo />
        <div className="text-center font-light text-base sm:text-xl whitespace-nowrap my-4 sm:my-2 text-black dark:text-white">
          An open source UI for ChatGPT
        </div>
      </div>
      {currentThread &&
        <div className="flex flex-col rounded-md border px-2 m-2 font-light text-base sm:text-xl text-black dark:text-white">
          <span>Conversation info</span>
          <span className="text-sm">Model: {currentThread.model.name}</span>
        </div>
      }
      {!currentThread && <FeatureList />}
      {/* Premium Features Button */}
      {/* <PremiumFeaturesButton /> */}
      {/* API Key Input */}
      <GetStartedAPIKeyButton />
    </div >
  )
}