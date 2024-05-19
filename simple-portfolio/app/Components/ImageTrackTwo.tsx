import React from 'react'

const Imagetracktwo = () => {
  return (
    <div>
                  {/* Image Track Two */}
                  <span className="w-[50vw] mr-[3%]">
              {/*Third Image*/}
              <span className="group">
                <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out ">
                  <img
                    className="w-[40vw] h-[60vh] max-w-[110%] group-hover:scale-110 transition-all duration-300"
                    src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <h2 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
                  Title
                </h2>
                <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light mb-96 ">
                  descrition
                </h4>
              </span>

              {/*Forth Image*/}
              <span className="group">
                <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out ">
                  <img
                    className="w-[35vw] h-[110vh] max-w-[100%] group-hover:scale-110 transition-all duration-300"
                    src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
                  />
                </div>
                <h2 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
                  Title
                </h2>
                <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
                  descrition
                </h4>
              </span>
            </span>
    </div>
  )
}

export default Imagetracktwo
