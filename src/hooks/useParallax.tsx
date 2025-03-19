
import { useState, useEffect, useRef } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  reverse?: boolean;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 1,
  direction = 'up',
  reverse = false,
}: ParallaxOptions = {}) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      // Get the element's position relative to the viewport
      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is visible in the viewport
      const visiblePart = Math.min(windowHeight, elementTop + elementHeight) - 
                         Math.max(0, elementTop);
      
      // Calculate the percentage of the element that's visible
      const visiblePercentage = visiblePart / elementHeight;
      
      // Calculate the offset based on scroll position
      const scrollPosition = window.scrollY;
      const elementPosition = scrollPosition + elementTop;
      const calculateOffset = ((scrollPosition - elementPosition) * speed * (reverse ? -1 : 1)) / 10;
      
      // Only apply parallax when element is visible
      if (visiblePercentage > 0) {
        setOffset(calculateOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, reverse]);

  const style = {
    transform: direction === 'up' || direction === 'down'
      ? `translateY(${direction === 'down' ? offset : -offset}px)`
      : `translateX(${direction === 'right' ? offset : -offset}px)`,
    transition: 'transform 0.1s cubic-bezier(0.25, 0.1, 0.25, 1)',
  };

  return { ref, style };
}
