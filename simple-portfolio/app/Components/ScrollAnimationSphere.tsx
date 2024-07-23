'use client';
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const ScrollAnimationsphere: React.FC = () => {
  const sphereRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(window.pageYOffset || document.documentElement.scrollTop);
  const [inViewport, setInViewport] = useState(false);
  const maxDisplacement = 2000; //maximum travel distance
  const scrollFactor = 30 / 100; // 30px per 100px scrolled
  let ticking = false;

  const updatespherePosition = () => {
    if (sphereRef.current) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = st - lastScrollTop;
      const currentTransform = parseFloat(sphereRef.current.style.transform.replace('translateY(', '').replace('px)', '') || '0');

      let newTransform = currentTransform - (scrollDelta * scrollFactor);
      newTransform = Math.max(-maxDisplacement, Math.min(maxDisplacement, newTransform));

      // Update transform or change position after reaching max displacement
      if (Math.abs(newTransform) === maxDisplacement) {
        sphereRef.current.style.position = 'absolute';
        sphereRef.current.style.top = `${st + window.innerHeight / 2}px`;
      } else {
        sphereRef.current.style.position = 'absolute';
        sphereRef.current.style.top = `${st + window.innerHeight / 2}px`;
        sphereRef.current.style.transform = `translateY(${newTransform}px)`;
      }

      setLastScrollTop(st);
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updatespherePosition);
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

    if (sphereRef.current) {
      observer.observe(sphereRef.current);
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (sphereRef.current) {
        observer.unobserve(sphereRef.current);
      }
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (!inViewport) {
      if (sphereRef.current) {
        sphereRef.current.style.position = 'absolute';
      }
    }
  }, [inViewport]);

  return (
    <div className="sphere-container">
      <div ref={sphereRef} className="sphere"></div>
    </div>
  );
};

export default ScrollAnimationsphere;
