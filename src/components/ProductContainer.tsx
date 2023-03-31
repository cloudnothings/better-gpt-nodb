'use client';

import { useState } from 'react';
import Warnings from './Warnings';
import ChangeModelButton from './Buttons/ChangeModelButton';
import FeatureButtonRow from './FeatureButtonRow';

export default function ProductContainer({ children }: { children: React.ReactNode }) {
  // const width = useStore(state => state.width)
  const [style, setStyle] = useState<string>("transition-all z-20 relative max-w-3xl mx-auto")
  // useEffect(() => {
  //   switch (width) {
  //     case 0:
  //       setStyle("transition-all z-20 relative max-w-3xl mx-auto")
  //       break
  //     case 1:
  //       setStyle("transition-all z-20 relative max-w-5xl mx-auto px-12")
  //       break
  //     case 2:
  //       setStyle("transition-all z-20 relative max-w-full mx-12")
  //       break
  //   }
  // }, [width])

  return (
    <div className={classNames(style, 'pb-96')}>
      <div className="py-8">
        <div className="p-6 sm:p-10 flex items-center justify-center">
          {/* <ProductSplash /> */}
        </div>
        {/* <MessageWindow /> */}
        <FeatureButtonRow />
        <Warnings />
      </div>
      <div>
      </div>
    </div >
  )
}



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
