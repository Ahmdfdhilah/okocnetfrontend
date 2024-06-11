import React, { useState, useEffect } from 'react';

const HomepageCarousel = ({ images, interval = 2000 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const changeImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const intervalId = setInterval(changeImage, interval);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [images.length, interval]);

    return (
        <div className="relative w-full mt-24 mobile:h-full lg:h-screen">
            <img
                className="object-cover w-full h-auto mobile:w-[200%]"
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
            />
        </div>
    );
};

export default HomepageCarousel;
