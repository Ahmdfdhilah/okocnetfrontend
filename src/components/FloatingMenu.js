import React, { useState } from "react";
import Fb from "@img/fb1.png";
import IG from "@img/ig1.png";
import YT from "@img/yt1.png";
import Tiktok from "@img/tiktok1.png";
import Arrow from "@img/arrow.png";

const FloatingMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed right-0 z-0 flex items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
      {/* Indicator element */}
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
          <div className="mb-3">
            <a
              href="https://www.facebook.com/profile.php?id=100064564037361"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Fb} className="w-8 md:w-10 lg:w-9 lg:ml-1" alt="Facebook" />
            </a>
          </div>
          <div className="mb-3">
            <a
              href="https://instagram.com/okoce.indonesia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IG} className="w-8 md:w-10 lg:w-10 lg:ml-1" alt="Instagram" />
            </a>
          </div>
          <div className="mb-3">
            <a
              href="https://www.tiktok.com/@okoceindonesia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Tiktok} className="w-9 mobile:mr-2 md:w-10 lg:w-12" alt="Tiktok" />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCrXYetY5iBgnFnNKCVYzihw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={YT} className="w-8 md:w-10 lg:w-10 lg:ml-1" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
