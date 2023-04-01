'use client';

import { Cog8ToothIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

const SidebarSettingsButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <button className="bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium hover:bg-gray-500 transition-all w-12 shrink-0"
      onClick={() => setOpen(!open)}>
      <Cog8ToothIcon className="text-gray-300 h-6 w-6 flex-shrink-0" />
    </button>
  )
}

export default SidebarSettingsButton