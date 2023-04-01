'use client';

import { useEffect, useState } from 'react';
import { classNames } from '~/lib/tools';
import useAppStore from '~/store/appStore';

const ProductContainer = ({ children }: { children: React.ReactNode }) => {
  const width = useAppStore(state => state.width)
  const [style, setStyle] = useState<string>("transition-all z-20 relative max-w-3xl mx-auto")
  useEffect(() => {
    switch (width) {
      case 0:
        setStyle("transition-all z-20 relative max-w-3xl mx-auto")
        break
      case 1:
        setStyle("transition-all z-20 relative max-w-5xl mx-auto px-12")
        break
      case 2:
        setStyle("transition-all z-20 relative max-w-full mx-12")
        break
    }
  }, [width])
  return (
    <div className={classNames(style, 'pb-96')}>
      <div className="py-8">
        {children}
      </div>
    </div >
  )
}

export default ProductContainer