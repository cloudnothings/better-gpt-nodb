'use client'

import { useEffect, useState } from "react"
import useAppStore from "~/store/appStore"

const ActionButtonsRow = () => {
  const width = useAppStore((state) => state.width)
  const [style, setStyle] = useState<string>('mx-auto w-full hide-when-print transition-all max-w-3xl')
  useEffect(() => {
    switch (width) {
      case 0:
        setStyle('mx-auto w-full hide-when-print transition-all max-w-3xl')
        break
      case 1:
        setStyle('mx-auto w-full hide-when-print transition-all max-w-5xl px-12')
        break
      case 2:
        setStyle('mx-auto w-full hide-when-print transition-all max-w-full px-12')
        break
    }
  }, [width])
  return (
    <div className={style}>
      <div className="transition-all translate-x-0 opacity-100 ">
        <div className="my-4 text-center w-full flex items-center justify-center flex-wrap gap-2 px-4">
        </div>
      </div>
    </div>
  )
}

export default ActionButtonsRow