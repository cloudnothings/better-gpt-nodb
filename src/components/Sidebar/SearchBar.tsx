'use client';

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react"

const SearchBar = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="relative flex items-center space-x-2">
      <div className="relative w-full">
        <input type="text" placeholder="Search chats..." className="bg-gray-700 text-white px-2 py-1 rounded-md w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button className="text-gray-500 hover:text-white transiton-all flex items-center justify-center w-12 shrink-0">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </div>
  )
}

export default SearchBar