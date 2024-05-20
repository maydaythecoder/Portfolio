import React from 'react'

const ImageOne = () => {
  return (
   <>
          {/* First Image */}
          <div className="group row-span-1 flex flex-col items-start">
          <div className="w-full rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
              src="https://images.unsplash.com/photo-1525286376485-60c84ee403d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoYXBlfGVufDB8MXwwfHx8MA%3D%D"
              alt=""
            />
          </div>
          <h2 className="mt-2 group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
          A-Star 
          </h2>
          <h4 className="group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
          A-Star pathfinding algorithm
          </h4>
        </div>
   </>
  )
}

export default ImageOne
