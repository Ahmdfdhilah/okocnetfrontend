import React from "react";
import Fb from "@img/fb1.png";
import IG from "@img/ig.png";
import YT from "@img/yt1.png";
import Tiktok from "@img/tiktok1.png";

const FloatingMenu = () => {
  return (
    <div
      className="bg-okoce-blue fixed right-0 bottom-64 md:bottom-72 z-50 flex flex-col px-2 py-3 rounded-s-lg"
      style={{ backgroundColor: "#65A4CA" }}>
      {" "}
      {/* Menambahkan properti style dengan background color */}
      <div className="mb-3">
        <a
          href="https://www.facebook.com/profile.php?id=100064564037361"
          target="_blank">
          <img src={Fb} className="w-8" alt="" />
        </a>
      </div>
      <div className="mb-3">
        <a href="https://instagram.com/okoce.indonesia" target="_blank">
          <img src={IG} className="w-8" alt="" />
        </a>
      </div>
      <div className="mb-3">
        <a href="https://www.tiktok.com/@okoceindonesia" target="_blank">
          <img src={Tiktok} className="w-8" alt="" />
        </a>
      </div>
      <div>
        <a
          href="https://www.youtube.com/channel/UCrXYetY5iBgnFnNKCVYzihw"
          target="_blank">
          <img src={YT} className="w-8" alt="" />
        </a>
      </div>
    </div>
  );
};

export default FloatingMenu;
