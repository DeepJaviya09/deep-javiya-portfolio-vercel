import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const RevealOnScroll: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const transitionStyle = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={transitionStyle}
      className={`transition-all duration-1000 ease-out-expo transform 
        ${isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-24 rotate-x-6'} 
        ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;