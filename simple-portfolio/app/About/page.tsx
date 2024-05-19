'use client'
import React, { useEffect } from 'react';
import './styles/ParallaxScroll.css';
import Header from '../Components/header';
import StickyHeader from '../Components/StickyHeader';

const ParallaxScroll: React.FC = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval: NodeJS.Timeout | null = null;

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      let iteration = 0;

      clearInterval(interval!);

      interval = setInterval(() => {
        target.innerText = target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value![index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= target.dataset.value!.length) {
          clearInterval(interval!);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = document.querySelector("h1")!;
    h1Element.addEventListener("mouseover", handleMouseOver);

    const track = document.getElementById("image-track")!;
    
    const handleOnDown = (e: MouseEvent | TouchEvent) => {
      track.dataset.mouseDownAt = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX).toString();
    };

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage!;
    };

    const handleOnMove = (e: MouseEvent | TouchEvent) => {
      if (track.dataset.mouseDownAt === "0") return;

      const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt!) - clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage!) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      track.dataset.percentage = nextPercentage.toString();

      track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
      }, { duration: 1200, fill: "forwards" });

      const images = Array.from(track.getElementsByClassName("image"));
      images.forEach(image => {
        (image as HTMLElement).animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      });
    };

    window.addEventListener("mousedown", handleOnDown as EventListener);
    window.addEventListener("touchstart", handleOnDown as EventListener);
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);
    window.addEventListener("mousemove", handleOnMove as EventListener);
    window.addEventListener("touchmove", handleOnMove as EventListener);

    return () => {
      clearInterval(interval!);
      h1Element.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleOnDown as EventListener);
      window.removeEventListener("touchstart", handleOnDown as EventListener);
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);
      window.removeEventListener("mousemove", handleOnMove as EventListener);
      window.removeEventListener("touchmove", handleOnMove as EventListener);
    };
  }, []);

  // TODO: add footer
  
    return (
      <>
     <div className='overflow-x-hidden overflow-y-hidden p-5'>
      <StickyHeader />
      <div className="relative w-full h-screen bg-white">
        <h1 className="absolute text-gray-800 font-sans font-light  left-1/2 transform -translate-x-1/2 mt-10 text-6xl font-space-grotesk" data-value="About Me">about me</h1>
        <div id="image-track" className="absolute flex gap-4 left-1/2 transform -translate-y-1/2 mt-20" data-mouse-down-at="0" data-prev-percentage="0">
          <img className="image w-40 h-56 object-cover rounded-lg border-2 border-gray-400 shadow-lg" src="https://images.unsplash.com/photo-1616789916437-bbf724d10dae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cGVyJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" draggable="false" />
          <img className="image w-40 h-56 object-cover rounded-lg border-2 border-gray-400 shadow-lg" src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym13fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" draggable="false" />
          <img className="image w-40 h-56 object-cover rounded-lg border-2 border-gray-400 shadow-lg" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" draggable="false" />
          <img className="image w-40 h-56 object-cover rounded-lg border-2 border-gray-400 shadow-lg" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnMlMjB3YWxscGFwZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" draggable="false" />
          <img className="image w-40 h-56 object-cover rounded-lg border-2 border-gray-400 shadow-lg" src="https://images.unsplash.com/photo-1616455164974-dd1c84624216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFzdG9uJTIwbWFydGlufGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" draggable="false" />
         </div>
      </div>
      </div>
      </>
    );
  };
  
  export default ParallaxScroll;