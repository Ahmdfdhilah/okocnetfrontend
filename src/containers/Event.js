/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "../asset/img/Event.png";
import BgEvent from "../asset/img/bg-event.webp";
import { Link } from "react-router-dom";

const Event = () => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/events?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data event');
            }
            const data = await response.json();
            const eventData = data.data;
            eventData.sort((a, b) => a.id - b.id);
            console.log(eventData)
            setData(eventData);

        } catch (error) {
            console.error('Error fetching news:', error);
            setData([]);
        }

    }
    return (
        <>
            <div className="block w-full mt-32">
                <img className="mobile:w-full mobile:h-[12rem] lg:w-9/12 lg:h-[23rem] mx-auto" src={BgEvent} alt="header"></img>
            </div>
            <div className="grid mb-20 mobile:grid-cols-1 mobile:grid-flow-row lg:w-11/12 lg:mx-auto lg:grid-cols-3 lg:grid-flow-row lg:gap-y-12 lg:gap-x-0 lg:mt-24">
                {datas.map((data) =>
                    <div className="flex flex-col mx-auto w-5/6 max-md:ml-0 drop-shadow-xl max-md:w-full mobile:p-6 lg:p-0">
                        <div className="flex flex-col grow max-md:mt-10">
                            <img src={data?.attributes?.foto_event?.data?.attributes?.url} loading="lazy" className="w-full shadow-sm aspect-square" />
                            <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                <div className="relative group mb-2 mt-2 h-10">
                                    <div className="text-base leading-7 text-black font-bold text-xl overflow-hidden line-clamp-2">
                                        {data.attributes?.judul_event}
                                    </div>
                                    <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                        {data.attributes?.judul_event}
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                    <div className="flex flex-col">
                                        <div className="text-neutral-400">{data.attributes.tanggal_event}</div>
                                        <div className="mt-2.5 text-sky-700">{data.attributes.harga_event}</div>
                                    </div>
                                    <div className="self-start mt-8 text-right text-red-600">
                                        {data.attributes.point_event} Points
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
            </div>
        </>
    );
}

export default Event;