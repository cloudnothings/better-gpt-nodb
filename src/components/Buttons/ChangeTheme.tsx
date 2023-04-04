'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes'

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="absolute right-2 top-0 bottom-0 flex items-center justify-center" >
      {theme === 'dark' ?
        <button className="inline-flex items-center justify-center rounded-md text-white hover:text-gray-900 focus:outline-none py-2 px-2 space-x-2 text-sm">
          <MoonIcon onClick={() => setTheme('light')} className="h-6 w-6" />
        </button> :
        <button className="inline-flex items-center justify-center rounded-md text-yellow-300 focus:outline-none  py-2 px-2 space-x-2 text-sm">
          <SunIcon onClick={() => setTheme('dark')} className="h-6 w-6 " />
        </button>
      }
    </div>
  )
}

export default ThemeChanger