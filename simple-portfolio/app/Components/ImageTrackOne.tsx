import React from 'react'

const Imagetrackone = () => {
  return (
    <div>
                  <span className="w-[50vw] ml-[5%] gap-10">
              {/* First Image */}
              <span className="group">
                <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out ">
                  <img
                    className="group-hover:scale-110 transition-all duration-300"
                    src="https://images.unsplash.com/photo-1525286376485-60c84ee403d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoYXBlfGVufDB8MXwwfHx8MA%3D%D"
                    alt=""
                  />
                </div>
                <h2 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
                  Title
                </h2>
                <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light mb-64">
                  descrition
                </h4>
              </span>

              {/*Second Image*/}
              <span className="group">
                <div className="w-[30vw] h-[50vh] ml-10 max-w-[100%] rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out">
                  <img
                    className="w-[30vw] h-[50vh] max-w-[100%] group-hover:scale-110 transition-all duration-300"
                    src="https://images.unsplash.com/photo-1701505708176-63194ee8f0e8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <h2 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em] ml-10">
                  Title
                </h2>
                <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light ml-10 mb-96">
                  descrition
                </h4>
              </span>
            </span>
    </div>
  )
}

export default Imagetrackone
