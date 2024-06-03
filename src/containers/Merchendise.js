import { useState, useEffect } from "react";
import Header from "../asset/img/Merch.png"

const Merchandise = () => {
    const [datas, setDatas] = useState([]);
    const [currentImageIndexes, setCurrentImageIndexes] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/merchandises?populate=*&_sort=id:ASC&_cacheBuster=');
            if (!response.ok) {
                throw new Error('Gagal mengambil data merchandise');
            }
            const data = await response.json();
            const merch = data.data;
            merch.sort((a, b) => a.id - b.id);
            const merchandiseData = merch.map(item => {
                const images = item.attributes.foto_merchandise?.data?.map(image => image.attributes.url) || [];
                return {
                    id: item.id,
                    images: images,
                    judul: item.attributes.judul_merchandise,
                    harga: item.attributes.harga_merchandise,
                    stok: item.attributes.stock_merchandise,
                    deskripsi: item.attributes.deskripsi_merchandise,
                };
            });
            setDatas(merchandiseData);
            setCurrentImageIndexes(new Array(merchandiseData.length).fill(0)); // Initialize image indexes
        } catch (error) {
            console.error('Error fetching data:', error);
            setDatas([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const goToNextImage = (itemIndex) => {
        setCurrentImageIndexes(prevIndexes => {
            const newIndexes = [...prevIndexes];
            newIndexes[itemIndex] = (newIndexes[itemIndex] + 1) % datas[itemIndex].images.length;
            return newIndexes;
        });
    };

    const goToPrevImage = (itemIndex) => {
        setCurrentImageIndexes(prevIndexes => {
            const newIndexes = [...prevIndexes];
            newIndexes[itemIndex] = (newIndexes[itemIndex] - 1 + datas[itemIndex].images.length) % datas[itemIndex].images.length;
            return newIndexes;
        });
    };

    return (
        <>
            <div className="mt-24">
                <img className="w-full" src={Header} alt="Header" />
            </div>
            <div id="products" className="mt-[7rem] w-full flex justify-center bg-white text-slate-700">
                <div className="w-3/4">
                    {datas.length > 0 ? (
                        datas.map((item, currentItemIndex) => (
                            <div key={item.id} className="mb-16 rounded-xl flex mobile:flex-col mobile:bg-gray-200 mobile:p-4 lg:flex-row lg:bg-white">
                                <div className="mx-auto mobile:p-0 mobile:mb-6 mobile:w-full lg:p-2 lg:w-[20rem]">
                                    <div className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                                        <div className="relative h-78" data-carousel-inner>
                                            {item.images.map((imageUrl, index) => (
                                                <div
                                                    key={index}
                                                    className={`duration-700 ease-in-out ${index === currentImageIndexes[currentItemIndex] ? 'block' : 'hidden'}`}
                                                    data-carousel-item
                                                >
                                                    <img src={imageUrl} className="object-cover w-full h-full" alt={item.judul} />
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            type="button"
                                            className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                                            data-carousel-prev
                                            onClick={() => goToPrevImage(currentItemIndex)}
                                        >
                                            <svg
                                                className="w-5 h-5 text-gray-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
                                            data-carousel-next
                                            onClick={() => goToNextImage(currentItemIndex)}
                                        >
                                            <svg
                                                className="w-5 h-5 text-gray-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full lg:w-2/3 pl-0 lg:pl-10 lg:pt-0 font-poppins flex flex-col justify-between">
                                    <div className="flex flex-wrap">
                                        <a className="flex-auto text-xl font-semibold text-black">
                                            {item.judul}
                                        </a>
                                        <div className="text-xl font-semibold mobile:text-black mobile:mt-2 lg:text-gray-500">
                                            {item.harga}
                                        </div>
                                        <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500">
                                            Sisa stok: {item.stok}
                                        </div>
                                        <div className="mt-8">
                                            <p className="text-justify mobile:text-black">
                                                {item.deskripsi}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex text-sm font-medium mobile:mt-4 mobile:mb-2 lg:mb-7 lg:m-0">
                                        <a
                                            href={`https://wa.me/6282210109142?text=Hallo%20Saya%20tertarik%20dengan%20Merchandise%20${item.judul}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mobile:w-full lg:w-40"
                                        >
                                            Beli sekarang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Merchandise;
