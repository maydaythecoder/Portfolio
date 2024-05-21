import React from 'react';
import Imagetrackone from './ImageTrackOne';
import Imagetracktwo from './ImageTrackTwo';

const Images = () => {
  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-28 h-auto lg:h-[300vh]">
      {/* Image Track One */}
      <div className='lg:ml-24 flex-grow'>
        <Imagetrackone />
      </div>
      {/* Image Track Two */}
      <div className="flex flex-col mt-6 lg:mt-0">
        <Imagetracktwo />
      </div>
    </div>
  );
}

export default Images;
