import React from 'react'
import StickyHeader from '../Components/StickyHeader'
import ContactForm from '../Components/ContactForm'
import ContactInfo from '../Components/ContactInfo'


const Contact = () => {
  return (
    <>
    <StickyHeader />
    <div className="relative isolate bg-white h-[100vh] lg:overflow-clip">
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <ContactInfo />
      <ContactForm />
    </div>
  </div>
    </>
  )
}

export default Contact