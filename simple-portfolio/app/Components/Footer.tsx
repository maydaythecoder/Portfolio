import React from 'react'

const Footer = () => {
  return (
        <div className=" bg-black h-[60vh] fixed bottom-0 left-0 w-full -z-50">
          <h5 className="text-[white] text-center pt-24 font-space-grotesk font-normal tracking-[-0.025em] text-8xl leading-[1em] md:text-[100px] text-[color:var(--64ddf9a6011f1)]">
            Let's work together
          </h5>

          <div className=" border-t-[1px] border-gray-400 border-opacity-40 mt-28 mx-10">
            <span className="align-baseline absolute mt-8 ml-9 font-space-grotesk font-light tracking-[-0.025em] text-[16px] text-[white] text-[color:var(--64ddf9a6011f1)]">
              United States <br /> columbus, Ohio(OH), 43231
            </span>
            <a
              className="align-baseline absolute mt-8 ml-[35vw] font-space-grotesk font-light tracking-[-0.025em] text-[16px] no-underline hover:underline text-[white] text-[color:var(--64ddf9a6011f1)]"
              href="#"
            >
              muhyadin.mohamed.003@gmail.com
            </a>
            <a
              className="align-baseline absolute mt-8 pt-6 ml-[35vw] font-space-grotesk font-light tracking-[-0.025em] text-[16px] no-underline hover:underline text-[white] text-[color:var(--64ddf9a6011f1)]"
              href="#"
            >
              ###-###-####
            </a>
          </div>
        </div>
  )
}

export default Footer
