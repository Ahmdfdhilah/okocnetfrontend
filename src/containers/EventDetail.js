// EventDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FloatingMenu from '../components/FloatingMenu';

const EventDetail = () => {
    const { id } = useParams();
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://cms-okoce-a155c649b6e6.herokuapp.com/api/events/${id}?populate=*`);
                if (!response.ok) {
                    throw new Error('Gagal mengambil data event');
                }
                const data = await response.json();
                setEventData(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching event:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!eventData) {
        return <p>Event tidak ditemukan</p>;
    }

    return (
        <>
            <div className="max-w-4xl mx-auto mt-24 p-4">
                <div className="bg-white shadow-md rounded-lg lg:p-5">
                    <img className="object-cover w-full h-full" src={eventData.attributes?.foto_event?.data?.attributes?.url} alt="" />
                    <div className="grid mobile:grid-cols-1 lg:grid-cols-2">
                        <div>
                            <h2 className="font-extrabold text-3xl mb-2 mt-12 mobile:ml-4 lg:ml-10">{eventData.attributes?.judul_event}</h2>
                        </div>
                        <div>
                            <p className="text-zinc-700 font-medium text-2xl mobile:mt-2 mobile:ml-4 lg:mt-12 lg:ml-64">{eventData.attributes?.harga_event}</p>
                        </div>
                    </div>
                    <div className="mt-4 mb-10 mobile:ml-4 lg:ml-10">
                        <p className="text-lg">Inisiator Event<br /></p>
                        <p className="font-extrabold text-red-500 text-xl">{eventData.attributes?.contact_person}</p>
                    </div>
                    <div className="w-[90%] mx-auto border-b-2 border-blue-400">
                        <p className="mt-2 text-lg text-black text-justify pb-4">{eventData.attributes?.deskripsi_event}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">{eventData.attributes?.deskripsi_event_2}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">{eventData.attributes?.deskripsi_event_3}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">{eventData.attributes?.deskripsi_event_4}
                        </p>
                        <p className="mt-2 text-lg text-black text-justify pb-4">{eventData.attributes?.deskripsi_event_5}
                        </p>
                    </div>
                    <div className="w-[90%] mx-auto border-b-2 border-blue-400 pt-6 grid justify-between mobile:grid-cols-2 mobile:gap-2 mobile:grid-flow-row lg:grid-cols-3">
                        <div className="bg-gray-100 rounded-xl mobile:w-full lg:w-48">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">Tanggal Event</h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">{eventData.attributes?.tanggal_event}
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl mobile:w-full lg:w-48">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">Waktu</h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">{eventData.attributes?.durasi_event}
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-xl mobile:w-full lg:w-48">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">Kuota</h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">{eventData.attributes?.quota_event}
                            </p>
                        </div>
                        <div className="mt-10 mb-6 bg-gray-100 col-span-2 w-64 rounded-xl my-4">
                            <h3 className="w-full bg-blue-500 pl-3 text-start py-1 font-semibold text-lg text-white">Lokasi</h3>
                            <p className="mt-2 text-black font-bold text-xl pl-3 py-1">{eventData.attributes?.tempat_event}
                            </p>
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto border-b-2 border-blue-400 pt-4">
                        <h3 className="font-semibold text-xl text-blue-500">Narasumber</h3>
                        <p className="mt-2 text-2xl font-bold text-black text-justify pb-4">{eventData.attributes?.narasumber}
                        </p>
                    </div>
                </div>
            </div >
            <FloatingMenu />{" "}
        </>
    );
};

export default EventDetail;
