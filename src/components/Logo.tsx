const Logo = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      {/* random filler pic */}
      <svg className="h-12 w-12" width="76" height="65" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
      </svg>
      {/* Logo Text */}
      <div className="font-semibold text-4xl sm:text-5xl text-black dark:text-white">
        Better
        <span className="text-blue-500">
          GPT
        </span>
      </div>
      {/* Feature Ad */}
      <span className="bg-gradient-to-r from-green-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white text-center rounded-xl inline-block ">
        GPT-4 Supported!
      </span>
    </div>
  )
}

export default Logo