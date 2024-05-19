'use client'
import React, { useEffect, useRef } from 'react';

const Imagetracktwo: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cumulativeOffsetRef = useRef(0);

  useEffect(() => {
    let isScrolling: number | NodeJS.Timeout | undefined;
    let lastScrollTop = window.scrollY;
    let velocity = 0;
    let animationRunning = false;

    const handleScroll = () => {
      if (animationRunning) return;

      const currentScrollTop = window.scrollY;
      velocity = (currentScrollTop - lastScrollTop) * 5; // Increase the velocity multiplier for longer distance
      lastScrollTop = currentScrollTop;

      window.clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        const startTime = performance.now();
        const duration = 1000; // Duration to continue scrolling in milliseconds

        animationRunning = true;

        const applyMomentum = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = elapsed / duration;

          if (progress < 1) { // Stop after duration
            const easingFactor = Math.log(1 + (1 - progress) * 9) / Math.log(10); // Logarithmic easing factor
            const transformValue = cumulativeOffsetRef.current + velocity * easingFactor;

            if (scrollContainerRef.current) {
              scrollContainerRef.current.style.transform = `translateY(${transformValue}px)`;
            }

            requestAnimationFrame(applyMomentum);
          } else {
            cumulativeOffsetRef.current += velocity; // Update the cumulative offset with the final velocity
            animationRunning = false; // Ensure flag is reset after duration
          }
        };

        requestAnimationFrame(applyMomentum);
      }, 150); // Adjust timeout duration to match how long you want to wait after scroll stops
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-[45vw] mr-[3%] grid grid-rows-2 gap-10">
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
          Title
        </h2>
        <h4 className="group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light mb-96">
          Description
        </h4>
      </div>

      {/* Fourth Image */}
      <div className="group row-span-1 flex flex-col items-start" ref={scrollContainerRef}>
        <div className="w-fit rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out">
          <img
            className="w-[35vw] h-[110vh] max-w-[100%] group-hover:scale-110 transition-all duration-300"
            src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJzdHJhY3QlMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D"
            alt="Fourth Image"
          />
        </div>
        <h2 className="mt-2 group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
          Title
        </h2>
        <h4 className="group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
          Description
        </h4>
      </div>
    </div>
  );
}

export default Imagetracktwo;
