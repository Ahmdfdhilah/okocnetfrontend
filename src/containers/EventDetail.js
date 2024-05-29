// EventDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className="max-w-4xl mx-auto mt-24 p-4">
            <div className="bg-white shadow-md rounded-lg p-5">
                <img className="object-cover w-full h-full" src={eventData.attributes?.foto_event?.data?.attributes?.url} alt="" />
                <h2 className="font-bold text-xl mb-2 mt-6">{eventData.attributes?.judul_event}</h2>
                <p className="text-zinc-700">Author: {eventData.attributes?.harga_event}</p>
                <p>Tanggal Publish: {eventData.attributes?.tanggal_event}</p>
                <div>
                    <h3 className="font-semibold text-lg">Deskripsi Berita</h3>
                    <p className="mt-2 text-sm text-zinc-600 text-justify">{eventData.attributes?.deskripsi_event}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;
