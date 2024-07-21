'use client'
import React from 'react';
import ImageThree from './ImageThree';
import ImageFour from './ImageFour';

const Imagetracktwo = () => {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const cumulativeOffsetRef = useRef(0);

//   useEffect(() => {
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
//   }, []);

  return (
    <div className="w-[45vw] mr-[3%] z-50 flex flex-col h-full">
      <div className="flex-grow mb-30" style={{ flexBasis: '50%' }}></div>
    <div>
      <ImageThree />
    </div>
    <div className="flex-grow" style={{ flexBasis: '25%' }}></div>
    <div>
      <ImageFour />
    </div>
  </div>
  );
}

export default Imagetracktwo;
