'use client';

import React, { useState } from 'react';

const ImageOne: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <>
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 600px; /* height-96 in Tailwind CSS */
          margin-top: 10rem;
          backface-visibility: hidden;
          border-radius: 10px;
          background-color: #fafafa; /* slightly gray background */
        }
        .flip-card-back {
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          box-shadow: inset -5px -5px 10px rgba(255, 255, 255, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.1);
        }
        .flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .neumorphic-button {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
          padding: 10px 50px;
          cursor: pointer;
          text-align: center;
          margin: 10px;
          margin-top: -20px;
          transition: box-shadow 0.3s ease;
        }
        .neumorphic-button:active {
          box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
        }
        .neumorphic-button.inverted {
          box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
        }
        .neumorphic-button.inverted:active {
          box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
        }
      `}</style>

      <div className="relative mt-40">
        <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flip-card-inner group">
            <div className="flip-card-front">
              <div className="group">
                <div className=" w-full rounded-lg bg-gray-100 overflow-hidden hover:transition duration-300 hover:ease-in-out">
                  <img
                    className="w-full h-[600px] object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                    src="https://images.unsplash.com/photo-1525286376485-60c84ee403d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoYXBlfGVufDB8MXwwfHx8MA%3D%D"
                    alt=""
                  />
                </div>
                <h2 className="text-left mt-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out font-space-grotesk text-[24px] tracking-[-0.025em]">
                  A-Star
                </h2>
                <h4 className="text-left group-hover:-translate-y-2 transition-all duration-300 ease-in-out font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
                  A-Star pathfinding algorithm
                </h4>
              </div>
            </div>
            <div className="flip-card-back ">
              <h1 className='font-bold text-2xl -ml-32 mt-3 -mb-96 '>A-Star pathfinding algorithm</h1>
              <p className='text-left	ml-5 -mb-10 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
               Phasellus imperdiet tristique urna nec condimentum.<br/>
                Quisque finibus dictum ornare. Praesent tincidunt <br/>
                est consequat,  ullamcorper nunc a, rhoncus neque. <br/>
                Fusce maximus metus ut tincidunt commodo.
                <br/>
                 Sed ac ullamcorper nisl. Nulla facilisi..</p>
              <div>
                <div className='-mt-20'>
                  <span className="neumorphic-button">see code</span>
                  <span className="neumorphic-button inverted">Veiw app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageOne;
