import React, { useEffect, useState } from "react";

const ProfileComponent = () => {
  const [profiles, setProfiles] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("https://okocenet-72f35a89c2ef.herokuapp.com/profiles");
        if (!response.ok) {
          throw new Error("Failed to fetch profiles");
        }
        const data = await response.json();
        setProfiles(data.data);
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    fetchProfiles();
  }, []);

  const toggleText = () => {
    setShowText((prev) => !prev); // Toggle showText state
  };

  const goToPrevItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === 0 ? profiles.length - 1 : prevIndex - 1));
    setShowText(false); // Hide text when switching items
  };

  const goToNextItem = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex === profiles.length - 1 ? 0 : prevIndex + 1));
    setShowText(false); // Hide text when switching items
  };

  return (
    <div className="mobile:w-[60%] mobile:h-auto lg:w-[100%] lg:h-full lg:mr-20">
      <div className="relative rounded-lg overflow-hidden" data-carousel="static">
        <div className="relative h-78" data-carousel-inner>
          {profiles.map((item, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${currentItemIndex === index ? "block" : "hidden"}`}
              data-carousel-item
              onClick={toggleText}
            >
              <img
                src={`https://okocenet-72f35a89c2ef.herokuapp.com${item.foto}`}
                className="object-cover ml-2 w-full h-full"
                alt={item.nama}
              />
              {!showText && (
                <h1 className="w-full text-center text-base font-semibold text-black">
                  {item.nama} - {item.posisi}
                </h1>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-1/2 left-0 z-40 items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-prev
          onClick={goToPrevItem}
        >
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 12H18M6 12L11 7M6 12L11 17"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-0 z-40 items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-next
          onClick={goToNextItem}
        >
          <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 12H19M19 12L13 6M19 12L13 18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfileComponent;