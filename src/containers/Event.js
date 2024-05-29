/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from "../asset/img/Event.png"
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
            console.log(eventData)
            setData(eventData);

        } catch (error) {
            console.error('Error fetching news:', error);
            setData([]);
        }

    }
    return (
        <>
            <div className="w-full mt-24">
                <img className="w-full" src={Header} alt="header"></img>
            </div>
            <div className="flex justify-center items-center mx-auto bg-white mt-24">
                <div className="w-full m">
                    <div className="grid grid-cols-3 grid-flow-row gap-y-10 mx-auto">
                        {datas.map((data) =>
                            <div className="flex flex-col mx-auto w-5/6 max-md:ml-0 drop-shadow-xl max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <img src={data?.attributes?.foto_event?.data?.attributes?.url} loading="lazy" className="w-full shadow-sm aspect-square" />
                                    <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                        <div className="text-base leading-5 text-black">
                                            {data.attributes.judul_event}
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
                </div>
            </div>
        </>
    );
}

export default Event;