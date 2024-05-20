import React from 'react'
import Imagetrackone from './ImageTrackOne'
import Imagetracktwo from './ImageTrackTwo'

const Images = () => {
  return (
    <div className="p-5 grid grid-cols-2 gap-28 h-[300vh]">
      {/* Image Track One */}
      <div className='ml-24 flex-grow'>
        <Imagetrackone />
      </div>
      {/* Image Track Two */}
      <div className="flex flex-col mt-6 ">
      <Imagetracktwo />
    </div>
    </div>
  )
}

export default Images
