import React, { useState, useEffect } from "react";
import Arrow from "@img/arrow.png";

const FloatingMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [sosmeds, setSosmeds] = useState([]);

  useEffect(() => {
    const fetchSosmeds = async () => {
      try {
        const response = await fetch('http://localhost:3000/sosmeds');
        if (!response.ok) {
          throw new Error('Failed to fetch sosmeds');
        }
        const data = await response.json();
        setSosmeds(data.data);
      } catch (error) {
        console.error('Error fetching sosmeds:', error);
      }
    };

    fetchSosmeds();
  }, []);


  return (
    <div className="fixed right-0 z-0 flex items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
      <div
        className="relative lg:w-[4rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-okoce-blue w-10 h-8 flex items-center justify-center rounded-r-lg transform transition-transform duration-300 ease-in-out">
          <img
            src={Arrow}
            alt="Arrow"
            className={`mobile:ml-0 lg:ml-10 mobile:w-10 lg:w-10 h-auto transition-transform duration-300 ease-in-out ${isHovered ? 'mobile:-translate-x-7 lg:-translate-x-16' : ''}`}
          />
        </div>
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 bg-okoce-blue px-2 py-3 rounded-s-lg z-20 transition-transform duration-300 ease-in-out ${isHovered ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ backgroundColor: "#000000", width: '70px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {sosmeds.map((item) => (
            <div key={item.id} className="mb-3">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full">
                  <img
                    src={`http://localhost:3000${item.foto}`}
                    className="w-8 h-8 object-contain"
                    alt={item.nama}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;