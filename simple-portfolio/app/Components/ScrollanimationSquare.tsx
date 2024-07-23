'use client';
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const ScrollAnimationSquare: React.FC = () => {
  const squareRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(window.pageYOffset || document.documentElement.scrollTop);
  const [inViewport, setInViewport] = useState(false);
  const maxDisplacement = 200;
  const scrollFactor = 30 / 100; // 30px per 100px scrolled
  let ticking = false;

  const updateSquarePosition = () => {
    if (squareRef.current) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDelta = st - lastScrollTop;
      const currentTransform = parseFloat(squareRef.current.style.transform.replace('translateY(', '').replace('px)', '') || '0');

      let newTransform = currentTransform - (scrollDelta * scrollFactor);
      newTransform = Math.max(-maxDisplacement, Math.min(maxDisplacement, newTransform));

      // Update transform or change position after reaching max displacement
      if (Math.abs(newTransform) === maxDisplacement) {
        squareRef.current.style.position = 'absolute';
        squareRef.current.style.top = `${st + window.innerHeight / 2}px`;
      } else {
        squareRef.current.style.position = 'absolute';
        squareRef.current.style.top = `${st + window.innerHeight / 2}px`;
        squareRef.current.style.transform = `translateY(${newTransform}px)`;
      }

      setLastScrollTop(st);
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateSquarePosition);
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

    if (squareRef.current) {
      observer.observe(squareRef.current);
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (squareRef.current) {
        observer.unobserve(squareRef.current);
      }
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (!inViewport) {
      if (squareRef.current) {
        squareRef.current.style.position = 'absolute';
      }
    }
  }, [inViewport]);

  return (
    <div className="square-container">
      <div ref={squareRef} className="square"></div>
    </div>
  );
};

export default ScrollAnimationSquare;
