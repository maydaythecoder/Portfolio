"use client";
import React, { useEffect, useRef } from 'react';

const ImageTwo: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const track = scrollContainerRef.current;
    if (!track) return;

    const handleScroll = () => {
      // Only apply the scroll animation on large (lg) screens and above
      if (window.innerWidth >= 1024) {
        const scrollDelta = window.scrollY - lastScrollYRef.current;
        lastScrollYRef.current = window.scrollY;

        const currentTransform = parseFloat(track.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
        const transformValue = currentTransform + (scrollDelta / 2); 

        track.style.transition = "transform 0.1s ease-out";
        track.style.transform = `translateY(${transformValue}px)`;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            lastScrollYRef.current = window.scrollY;
            window.addEventListener("scroll", handleScroll);
          } else {
            window.removeEventListener("scroll", handleScroll);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(track);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Second Image */}
      <div className="group ml-4 sm:ml-10 lg:ml-20 mt-10 sm:mt-20 lg:mt-40" ref={scrollContainerRef}>
        <div className="w-full max-w-[90vw] sm:max-w-[60vw] lg:max-w-[30vw] h-[50vh] rounded-lg bg-gray-100 overflow-hidden hover:transition lg:group-hover:scale-95 md:group-hover:scale-95 duration-300 lg:hover:ease-in-out md:hover:ease-in-out">
          <img
            className="w-full h-full object-cover lg:group-hover:scale-110 md:group-hover:scale-110 transition-all duration-300 ease-in-out"
            src="https://images.unsplash.com/photo-1701505708176-63194ee8f0e8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <h2 className="-mt-1 group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[24px] tracking-[-0.025em]">
        AvA-1.0 
        </h2>
        <h4 className=" group-hover:-translate-y-2 transition-all duration-300 font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
          Automated virtual assistant to complete basic tasks
        </h4>
      </div>
    </>
  );
}

export default ImageTwo;
