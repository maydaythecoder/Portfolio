import React from "react";

const ImageFour: React.FC = () => {
  //   const scrollContainerRef = useRef<HTMLDivElement>(null);
  //   const cumulativeOffsetRef = useRef(0);

//     useEffect(() => {
//     let isScrolling: number | NodeJS.Timeout | undefined;
//     let lastScrollTop = window.scrollY;
//     let velocity = 0;
//     let animationRunning = false;

//     const handleScroll = () => {
//       if (animationRunning) return;

//       const currentScrollTop = window.scrollY;
//       velocity = (currentScrollTop - lastScrollTop) * 5; // Increase the velocity multiplier for longer distance
//       lastScrollTop = currentScrollTop;

//       window.clearTimeout(isScrolling);

//       isScrolling = setTimeout(() => {
//         const startTime = performance.now();
//         const duration = 1000; // Duration to continue scrolling in milliseconds

//         animationRunning = true;

//         const applyMomentum = (currentTime: number) => {
//           const elapsed = currentTime - startTime;
//           const progress = elapsed / duration;

//           if (progress < 1) { // Stop after duration
//             const easingFactor = Math.log(1 + (1 - progress) * 9) / Math.log(10); // Logarithmic easing factor
//             const transformValue = cumulativeOffsetRef.current + velocity * easingFactor;

//             if (scrollContainerRef.current) {
//               scrollContainerRef.current.style.transform = `translateY(${transformValue}px)`;
//             }

//             requestAnimationFrame(applyMomentum);
//           } else {
//             cumulativeOffsetRef.current += velocity; // Update the cumulative offset with the final velocity
//             animationRunning = false; // Ensure flag is reset after duration
//           }
//         };

//         requestAnimationFrame(applyMomentum);
//       }, 150); // Adjust timeout duration to match how long you want to wait after scroll stops
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//      }, []);

  return (
    <div>
      {/* Fourth Image */}
      {/* <div className="group row-span-1" ref={scrollContainerRef}> */}
      <div className="group">
      <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out">
        <img
          className="w-[35vw] h-[110vh] max-w-full group-hover:scale-110 transition-all duration-300"
          src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
          alt="Fourth Image"
        />
      </div>
      <div className=" justify-between h-full">
        <div className=""></div>
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
