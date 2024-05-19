import Link from 'next/link'
import React from 'react'
import StickyHeader from './StickyHeader'
import NavParagraph from './NavParagraph'

const Header = () => {
  return (
    <div>
      <StickyHeader />
      <NavParagraph />
    </div>
  )
}

export default Header
