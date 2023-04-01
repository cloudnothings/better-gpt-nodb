const Copyright = () => {
  const website = "better-chat.vercel.app"
  return (
    <div className="text-xs text-gray-400 font-semibold text-center">
      <a href="https://openai.com" className="px-1">
        {website}
      </a>
      ©
      <span className="px-1">
        2023
      </span>
    </div>
  )
}

export default Copyright