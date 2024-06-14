import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ModalStep3 = ({ onClose }) => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchEvent();
    }, [])

    const fetchEvent = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/events?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data event');
            }
            const data = await response.json();
            const newsData = data.data;
            newsData.sort((a, b) => b.id - a.id);
            const singleData = newsData[0];
            console.log(singleData);
            setData([singleData]);
        } catch (error) {
            console.error('Error fetching events:', error);
            setData([]);
        }
    };

    return (
        <>
            <div>
                {datas.map((data, index) =>
                    <div key={index} className="flex flex-col mx-auto h-auto max-md:ml-0 drop-shadow-xl mobile:px-6 mobile:w-full lg:p-0 lg:w-5/6">
                        <div className="flex flex-col grow max-md:mt-10">
                            <img src={data?.attributes?.foto_event?.data?.attributes?.url} loading="lazy" className="w-full object-cover shadow-sm aspect-square mobile:h-54 lg:h-72" alt='' />
                            <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                <div className="relative group mb-2 mt-2 h-10">
                                    <div className="text-base leading-7 text-black font-bold text-xl overflow-hidden line-clamp-2">
                                        {data.attributes?.judul_event}
                                    </div>
                                    <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                        {data.attributes?.judul_event}
                                    </div>
                                </div>
                                <Link to={`/event/${data.id}`}>
                                    <div className="justify-center items-center mt-6 px-16 py-5 text-base leading-5 text-center text-white bg-green-600 rounded-lg border-t border-dashed shadow-sm border-neutral-400 hover:bg-green-500 max-md:px-5"> Beli Tiket
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    type="button"
                    className="w-full text-white mt-6 bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 focus:ring-blue-800"
                    onClick={onClose}
                >
                    Selesai
                </button>
            </div>
        </>
    );
};

export default ModalStep3;
