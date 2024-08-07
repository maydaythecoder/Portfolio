import Header from "./Components/header";
import Images from "./Components/Projects";
import Footer from "./Components/Footer";
import Marquee from "./Components/marquue";
import ScrollAnimationsphere from "./Components/ScrollAnimationSphere";

// TODO: fix card animations for ImageOne and ImageTwo also ScrollAnimationOne and ScrollAnimationTwo
// TODO: fix imageOne flip animation to work even with the scroll animation
// TODO: apply updated scroll animation to imageThree and imageFour
// TODO: create flip animation for all project cards
// TODO: add animation to links and words on reload
// TODO: remove velocity from scroll animation
// TODO: fix animations initial state
// TODO: Find a place to use marquee
// TODO: make about page responsive
// TODO: make home page responsive

export default function Home() {
  return (
    <div className="relative">
      <svg
        className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="100%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M130 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="white" />
        <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
          <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
      <div className="bg-slate-100 p-4 sm:p-6 md:p-10 mb-20 md:mb-40 lg:mb-80 align-bottom h-full rounded-b-3xl">
        <Header />
        <ScrollAnimationsphere />
        {/* <Marquee /> */}
        <Images />
      </div>
      <Footer />
    </div>
  );
}
