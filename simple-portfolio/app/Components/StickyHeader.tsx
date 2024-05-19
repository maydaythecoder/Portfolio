import Link from 'next/link'
import React from 'react'

const StickyHeader = () => {
  return (
    <div>
          <div>
                {/* Left Sticky Title*/}
                <Link
              className="font-space-grotesk font-medium tracking-[-0.025em] text-[20px] z-[100] fixed top-0 left-0 px-10 py-10"
              href="/"
            >
              Muhyadin.
            </Link>



          {/* Right Sticky Nav */}
          <div className="fixed flex flex-col ml-[85vw] text-right z-[100] top-1/2 -translate-y-1/2 right-4 -mt-[250px]">
            <Link
              className="font-space-grotesk text-[20px] font-light tracking-[-0.025em] hover:underline rounded-full text-right mb-4 text-gray-500"
              href="/About"
            >
              about
            </Link>
            <Link
              className="font-space-grotesk text-[20px] font-light tracking-[-0.025em] hover:underline rounded-full text-right text-gray-500"
              href="/Contact"
            >
              contact
            </Link>
          </div>
    </div>
    </div>
  )
}

export default StickyHeader
