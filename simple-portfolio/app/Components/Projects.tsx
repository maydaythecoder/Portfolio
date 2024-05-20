import React from 'react'
import Imagetrackone from './ImageTrackOne'
import Imagetracktwo from './ImageTrackTwo'

const Images = () => {
  return (
    <div className="p-5  gap-28">
      {/* Image Track One */}
      <div className='ml-24'>
        <Imagetrackone />
      </div>
      {/* Image Track Two */}
      <div className='mt-6'>
        <Imagetracktwo />
      </div>
    </div>
  )
}

export default Images
