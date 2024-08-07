"use client"
import React from "react";

const ImageFour: React.FC = () => {




  return (
    <div className="relative">
      {/* Fourth Image */}
      <div className="group -mt-10 transition-transform duration-[1200ms]" id="group">
        <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition duration-300 hover:ease-in-out">
          <img
            className="w-[35vw] h-[90vh] max-w-full group-hover:scale-110 transition-all duration-[1200ms] image"
            src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
            alt="Fourth Image"
          />
        </div>
        <div className="justify-between h-full">
          <div></div>
          <div>
            <h2 className="mt-2 group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
              MortgageMate
            </h2>
            <h4 className="group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
              mortgage tracker to plan out your future
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageFour;
