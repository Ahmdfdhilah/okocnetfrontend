import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get("https://okocenet-72f35a89c2ef.herokuapp.com/reviews");
                setReviews(response.data.data); 
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="grid mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-4 lg:grid-cols-3">
            {reviews.map((review) => (
                <section key={review.id} className="bg-white">
                    <div className="bg-gray-500 max-w-sm min-h-3/5 px-4 py-8 mx-auto text-center rounded-3xl lg:py-16 lg:px-6">
                        <figure className="max-w-screen-md mx-auto">
                            <svg
                                className="h-12 mx-auto mb-3 text-black dark:text-black"
                                viewBox="0 0 24 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <blockquote>
                                <p className="font-medium text-gray-900 dark:text-white lg:text-2xl">
                                    "{review.deskripsi}"
                                </p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div className="pr-3 font-medium text-gray-900 text-white">
                                        {review.nama}
                                    </div>
                                    <div className="pl-3 text-sm font-bold text-black">
                                        {review.posisi}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ReviewSection;