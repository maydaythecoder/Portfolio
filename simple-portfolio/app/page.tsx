import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-white p-10 mb-96">
          {/* Left Sticky Title*/}
          <h3 className="font-space-grotesk font-medium tracking-[-0.025em] text-[20px] z-[100] fixed top-0 left-0 px-10 py-10">
            Muhyadin.
          </h3>

          {/* Central Paragraph */}
          <p className="font-space-grotesk text-[20px] font-light tracking-[-0.025em] ml-[25vw] w-96 mb-28 mt-5">
            I am a junior Full-Stack developer with a passion for creating
            compelling <br />
            user experiences.
          </p>

          {/* Right Sticky Nav */}
          <div className="fixed flex flex-col ml-[85vw] text-right z-[100] top-1/2 -translate-y-1/2 right-4 -mt-[250px]">
            <Link
              className="font-space-grotesk text-[20px] font-light tracking-[-0.025em] hover:underline rounded-full text-right mb-4 text-gray-500"
              href="/about"
            >
              about
            </Link>
            <Link
              className="font-space-grotesk text-[20px] font-light tracking-[-0.025em] hover:underline rounded-full text-right text-gray-500"
              href="/contact"
            >
              contact
            </Link>
          </div>

          {/* images */}
          <div className="p-5 flex flex-row z-10">
            {/* Image Track One */}
            <span className="w-[50vw] ml-[3%] gap-10">
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
                <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
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
                <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light ml-10">
                  descrition
                </h4>
              </span>
            </span>

            {/* Image Track Two */}
            <span className="w-[50vw] mr-[3%]">
              {/*Third Image*/}
              <span className="group">
                <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out ">
                  <img
                    className="w-[55vw] h-[60vh] max-w-[110%] group-hover:scale-110 transition-all duration-300"
                    src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
                <h2 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
                  Title
                </h2>
                <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
                  descrition
                </h4>
              </span>

              {/*Forth Image*/}
              <span className="group">
                <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out ">
                  <img
                    className="w-[auto] h-[110vh] max-w-[100%] group-hover:scale-110 transition-all duration-300"
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
        </div>

        {/* Footer */}

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
      </div>
    </>
  );
}
