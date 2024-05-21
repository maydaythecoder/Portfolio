import React from 'react'
import ImageOne from './ImageOne'
import ImageTwo from './ImageTwo'

const Imagetrackone = () => {
  return (
    <div className="flex flex-col w-full lg:w-[35vw] gap-10">
      <ImageOne />
      <div className="flex-grow flex items-center justify-center mt-10">
        <ImageTwo />
      </div>
    </div>
  )
}

export default Imagetrackone
