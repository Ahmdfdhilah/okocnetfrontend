import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";

const AnimateAnggota = ({ nama }) => {
  const countUpRef = useRef(null);
  const hasAnimated = useRef(false);
  const [totalAnggota, setTotalAnggota] = useState(0);

  useEffect(() => {
    const fetchTotals = async () => {
      try {
        const response = await fetch('http://localhost:3000/totals');
        if (!response.ok) {
          throw new Error('Failed to fetch totals');
        }
        const data = await response.json();
        const totalUmkm = data.data.find(item => item.nama === nama);
        if (totalUmkm) {
          setTotalAnggota(totalUmkm.total);
        }
      } catch (error) {
        console.error('Error fetching totals:', error);
      }
    };

    fetchTotals();
  }, [nama]);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current && totalAnggota !== 0) {
          const countUp = new CountUp(countUpRef.current, totalAnggota, {
            duration: 2,
            separator: ".",
          });
          if (!countUp.error) {
            countUp.start();
            hasAnimated.current = true;
            observer.unobserve(entry.target);
          } else {
            console.error(countUp.error);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, [totalAnggota]);

  return (
    <div className="pb-5">
      <h3
        id="about-headline"
        className="text-center lg:text-left text-black text-2xl lg:text-5xl font-extrabold"
        ref={countUpRef}
      >
        {totalAnggota.toLocaleString("id-ID")}
      </h3>
    </div>
  );
};

export default AnimateAnggota;