import "./globals.css";
import { Providers } from "./providers";
export const metadata = {
  title: 'better-gpt',
  description: 'GPT Interface',
}
type Props = {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning className="h-full" lang="en">
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
