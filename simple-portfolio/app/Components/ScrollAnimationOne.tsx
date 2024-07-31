'use client';

import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const ScrollAnimationOne: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(window.pageYOffset || document.documentElement.scrollTop);
  const [inViewport, setInViewport] = useState(false);
  const maxDisplacement = 2000; // maximum travel distance
  const scrollFactor = 120 / 100; // 80px per 100px scrolled
  let ticking = false;

  const updateElementPosition = () => {
    if (elementRef.current) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = st - lastScrollTop;
      const currentTransform = parseFloat(elementRef.current.style.transform.replace('translateY(', '').replace('px)', '') || '0');

      let newTransform = currentTransform - (scrollDelta * scrollFactor);
      newTransform = Math.max(-maxDisplacement, Math.min(maxDisplacement, newTransform));

      // Update transform or change position after reaching max displacement
      if (Math.abs(newTransform) === maxDisplacement) {
        elementRef.current.style.position = 'absolute';
        elementRef.current.style.top = `${st + window.innerHeight / 2}px`;
      } else {
        elementRef.current.style.position = 'absolute';
        elementRef.current.style.top = `${st + window.innerHeight / 2}px`;
        elementRef.current.style.transform = `translateY(${newTransform}px)`;
      }

      setLastScrollTop(st);
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateElementPosition);
      ticking = true;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        });
      },
      { threshold: [0, 1] }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (!inViewport) {
      if (elementRef.current) {
        elementRef.current.style.position = 'absolute';
      }
    }
  }, [inViewport]);

  return (
    <div
      className="scroll-animation-container"
      ref={elementRef}
      style={{
        transition: 'transform 1.6s cubic-bezier(0.25, 0.1, 0.25, 1) 10ms',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationOne;
