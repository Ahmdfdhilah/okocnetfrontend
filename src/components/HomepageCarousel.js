import React, { useState, useEffect } from 'react';

const HomepageCarousel = ({ interval = 2000 }) => {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('https://okocenet-72f35a89c2ef.herokuapp.com/banners');
                if (!response.ok) {
                    throw new Error('Failed to fetch banners');
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        const changeImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };

        const intervalId = setInterval(changeImage, interval);

        return () => clearInterval(intervalId);
    }, [images.length, interval]);

    return (
        <div className="relative w-full mt-24 mobile:h-full lg:h-screen">
            {images.length > 0 && (
                <img
                    className="object-cover w-full h-auto mobile:w-[200%]"
                    src={`https://okocenet-72f35a89c2ef.herokuapp.com${images[currentImageIndex].foto}`}
                    alt={images[currentImageIndex].id}
                />
            )}
        </div>
    );
};

export default HomepageCarousel;