import "./globals.css";
import { Providers } from "./providers";

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
    <html suppressHydrationWarning>
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
