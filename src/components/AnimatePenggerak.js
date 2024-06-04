import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const AnimatePenggerak = () => {
  const countUpRef = useRef(null);
  const hasAnimated = useRef(false); // Menyimpan status animasi

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          const countUp = new CountUp(countUpRef.current, 198, {
            duration: 2, // durasi animasi dalam detik
          });
          if (!countUp.error) {
            countUp.start();
            hasAnimated.current = true; // Set status animasi menjadi true
            observer.unobserve(entry.target); // Stop observing setelah animasi berjalan
          } else {
            console.error(countUp.error);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // memicu ketika 10% elemen terlihat
    });

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div className="pb-5">
      <h3
        id="about-headline"
        className="text-center lg:text-left text-black text-2xl lg:text-5xl font-extrabold"
        ref={countUpRef}>
        0
      </h3>
    </div>
  );
};

export default AnimatePenggerak;
