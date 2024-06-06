import React from "react";
import Fb from "@img/fb1.png";
import IG from "@img/ig.png";
import YT from "@img/yt1.png";
import Tiktok from "@img/tiktok1.png";
import Arrow from "@img/arrow.png";

const FloatingMenu = () => {
  return (
    <div className="fixed inset-y-0 right-0 flex items-center z-50 group">
      {/* Indicator element */}
      <div className="bg-okoce-blue w-10 h-10 flex items-center justify-center rounded-l-lg transform group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
        <img src={Arrow} alt="" className="ml-28 w-6 h-auto transition-transform duration-300 ease-in-out group-hover:-translate-x-14"></img>
      </div>
      <div
        className="bg-okoce-blue px-2 py-3 rounded-s-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
        style={{ backgroundColor: "#65A4CA" }}
      >
        <div className="mb-3">
          <a
            href="https://www.facebook.com/profile.php?id=100064564037361"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Fb} className="w-8 md:w-10 lg:w-12" alt="Facebook" />
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://instagram.com/okoce.indonesia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={IG} className="w-8 md:w-10 lg:w-12" alt="Instagram" />
          </a>
        </div>
        <div className="mb-3">
          <a
            href="https://www.tiktok.com/@okoceindonesia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Tiktok} className="w-8 md:w-10 lg:w-12" alt="Tiktok" />
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UCrXYetY5iBgnFnNKCVYzihw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={YT} className="w-8 md:w-10 lg:w-12" alt="YouTube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
