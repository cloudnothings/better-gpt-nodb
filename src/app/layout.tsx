import "./globals.css";

export const metadata = {
  title: 'better-gpt',
  description: 'GPT Interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full dark:dark">
      <body>{children}</body>
    </html>
  )
}
