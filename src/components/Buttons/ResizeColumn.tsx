'use client';

import { ArrowRightIcon } from "@heroicons/react/24/solid"
import useAppStore from "~/store/appStore"

const ResizeColumn = () => {
  const width = useAppStore((state) => state.width)
  const setWidth = useAppStore((state) => state.setWidth)
  const changeWidthHandler = () => {
    switch (width) {
      case 0:
        setWidth(1)
        break
      case 1:
        setWidth(2)
        break
      case 2:
        setWidth(0)
        break
    }
  }
  // Transitions width of chatbar between 3 sizes
  return (
    <div className="fixed top-0 select-none right-0 bottom-0 z-10 items-center justify-between w-12 bg-gray-50 dark:bg-zinc-700/20 hover:bg-gray-200 dark:hover:bg-zinc-700 cursor-pointer transition-colors grid-cols-1 grid-rows-5 text-center group active:bg-gray-300 dark:active:bg-zinc-600 hidden xl:flex flex-col"
      onClick={changeWidthHandler}
    >
      <RightArrows />
      <RightArrows />
      <RightArrows />
      <RightArrows />
      <RightArrows />
    </div>
  )
}
const RightArrows = () => {
  return (
    <div className="hidden items-center justify-center text-gray-500 group-hover:flex">
      <ArrowRightIcon />
    </div>
  )
}

export default ResizeColumn