'use client'

import { ThemeProvider } from 'next-themes'
import ReactQueryWrapper from './ReactQueryWrapper'
import { useEffect } from 'react'
import useKeyStore from '~/store/keyStore'
import useAppStore from '~/store/appStore'
import useThreadStore from '~/store/threadStore'

export function Providers({ children }: { children: React.ReactNode }) {
  // Initialize the api key from local storage
  useEffect(() => {
    useKeyStore.getState().loadState()
    useAppStore.getState().loadState()
    useThreadStore.getState().loadState()
  }, [])
  return (
    <ReactQueryWrapper>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ReactQueryWrapper>
  )
}