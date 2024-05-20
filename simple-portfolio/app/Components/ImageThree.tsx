import React from "react";

const ImageThree = () => {
    
  return (
    <div>
      <>
        {/* Third Image */}
        <div className="group row-span-1 flex flex-col items-start">
          <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out">
            <img
              className="w-[40vw] h-[60vh] max-w-[110%] group-hover:scale-110 transition-all duration-300"
              src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Third Image"
            />
          </div>
          <h2 className="mt-2 group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
            Neural Network
          </h2>
          <h4 className="group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light mb-96">
            classifies spiral data points into three classes
            <br /> and calculates the classification loss.
          </h4>
        </div>
      </>
    </div>
  );
};

export default ImageThree;
