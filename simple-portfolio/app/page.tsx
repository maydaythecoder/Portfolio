import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        {/* Left Sticky Title*/}
        <h3 className="font-space-grotesk font-medium tracking-[-0.025em] text-[20px] z-[100] block">
          Muhyadin.
        </h3>

        {/* Central Paragraph */}
        <p className="font-space-grotesk text-[20px] font-light tracking-[-0.025em]">
          I am a junior frontend developer with a passion for creating
          compelling user experiences. My expertise lies in building responsive
          and intuitive web interfaces that prioritize usability and
          performance.
        </p>

        {/* Right Sticky Nav */}
        <Link
          className="font-space-grotesk text-[20px] font-light tracking-[-0.025em] hover:underline"
          href="/about"
        >
          about
        </Link>
        <Link
          className="font-space-grotesk text-[20px] font-light tracking-[-0.025em] hover:underline"
          href="/contact"
        >
          contact
        </Link>

        {/* Image Track One */}
        <div>
          {/*First Image*/}
          <span>
            <img
              className="w-[auto] h-[110vh] max-w-[100%]"
              src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
            />
            <h2 className="font-space-grotesk text-[24px] tracking-[-0.025em]">
              Title
            </h2>
            <h4 className="font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
              descrition
            </h4>
          </span>

          {/*Second Image*/}
          <span>
            <img
              className="w-[40vw] h-[60vh] max-w-[100%]"
              src="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2 className="font-space-grotesk text-[24px] tracking-[-0.025em]">
              Title
            </h2>
            <h4 className="font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
              descrition
            </h4>
          </span>
        </div>

        {/* Image Track Two */}
        <div>
          {/*Third Image*/}
          <span>
            <img
              className="w-[30vw] h-[50vh] max-w-[100%]"
              src="https://images.unsplash.com/photo-1701505708176-63194ee8f0e8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <h2 className="font-space-grotesk text-[24px] tracking-[-0.025em]">
              Title
            </h2>
            <h4 className="font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
              descrition
            </h4>
          </span>

          {/*Forth Image*/}
          <span>
            <img
              className="w-[auto] h-[auto] max-w-[100%]"
              src="https://images.unsplash.com/photo-1525286376485-60c84ee403d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoYXBlfGVufDB8MXwwfHx8MA%3D%3D"
            />
            <h2 className="font-space-grotesk text-[24px] tracking-[-0.025em]">
              Title
            </h2>
            <h4 className="font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
              descrition
            </h4>
          </span>
        </div>
      </div>

      {/* footer */}
      <div className=" bg-black">
        <h5 className="text-[white] text-center font-normal tracking-[-0.025em] text-[96px] leading-[1em] md:text-[60px] text-[color:var(--64ddf9a6011f1)]">
          {" "}
          Let's work together{" "}
        </h5>
        <span className="font-space-grotesk font-light tracking-[-0.025em] text-[16px] text-[white] text-[color:var(--64ddf9a6011f1)]">
          {" "}
          913 Trenton St <br /> Toronto, Ohio(OH), 43964{" "}
        </span>
        <a
          className="font-space-grotesk font-light tracking-[-0.025em] text-[16px] no-underline hover:underline text-[white] text-[color:var(--64ddf9a6011f1)]"
          href="mailto:hey@abstract.agency"
        >
          hey@abstract.agency
        </a>
        <a
          className="font-space-grotesk font-light tracking-[-0.025em] text-[16px] no-underline hover:underline text-[white] text-[color:var(--64ddf9a6011f1)]"
          href="mailto:hey@abstract.agency"
        >
          608-547-1103
        </a>
      </div>
    </>
  );
}
