const PrivacyPolicy = () => {
  return (
    <div className="text-xs text-gray-400 text-center flex gap-1 justify-center">
      <a href="/privacy" target="_blank" className="hover:underline">
        Privacy
      </a>
      |
      <a href="/terms" target="_blank" className="hover:underline">
        Terms
      </a>
      |
      <a href="/faqs" target="_blank" className="hover:underline">
        FAQs
      </a>
      |
      <a rel="noopener noreferrer" href="https://openai.com" target="_blank" className="hover:underline">
        Changelog
      </a>
    </div>
  )
}

export default PrivacyPolicy