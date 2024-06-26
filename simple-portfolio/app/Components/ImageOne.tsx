"use client";
import React, { useEffect, useRef } from "react";

const ImageOne: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const track = scrollContainerRef.current;
    if (!track) return;

    const handleScroll = () => {
      const scrollDelta = window.scrollY - lastScrollYRef.current;
      lastScrollYRef.current = window.scrollY;

      const currentTransform = parseFloat(track.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
      const transformValue = currentTransform + (scrollDelta / 2.5); 

      track.style.transition = "transform 0.1s ease-out";
      track.style.transform = `translateY(${transformValue}px)`;
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
    <div className="relative">
      {/* First Image */}
      <div className="group" ref={scrollContainerRef}>
        <div className="w-full rounded-lg bg-gray-100 overflow-hidden hover:transition group-hover:scale-95 duration-300 hover:ease-in-out">
          <img
            className="w-full h-[95vh] object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
            src="https://images.unsplash.com/photo-1525286376485-60c84ee403d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNoYXBlfGVufDB8MXwwfHx8MA%3D%D"
            alt=""
          />
        </div>
        <h2 className="mt-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out font-space-grotesk text-[24px] tracking-[-0.025em]">
          A-Star
        </h2>
        <h4 className="group-hover:-translate-y-2 transition-all duration-300 ease-in-out font-space-grotesk text-[18px] tracking-[-0.025em] font-light">
          A-Star pathfinding algorithm
        </h4>
      </div>
    </div>
  );
};

export default ImageOne;
