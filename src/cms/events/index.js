import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const EventTable = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:3000/events');
            setEvents(response.data.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/events/${id}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const handleRowClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseDetail = () => {
        setSelectedEvent(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/event/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/event/edit/${id}`);
    };

    return (
        <div className="overflow-x-auto my-32 px-6">
            <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Events</h2>
                <button
                    onClick={handleCreateNew}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                    Create New
                </button>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Judul</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tanggal</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Harga</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Poin</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Foto Event</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tempat</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {events.map((event) => (
                        <React.Fragment key={event.id}>
                            <tr
                                className="hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer"
                                onClick={() => handleRowClick(event)}
                            >
                                <td className="py-3 px-4">{event.judulEvent}</td>
                                <td className="py-3 px-4">{new Date(event.tanggalEvent).toLocaleDateString()}</td>
                                <td className="py-3 px-4">{event.hargaEvent}</td>
                                <td className="py-3 px-4">{event.pointEvent}</td>
                                <td className="py-3 px-4">
                                    <img
                                        src={event.fotoEvent}
                                        alt={event.judulEvent}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4">{event.tempatEvent}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(event.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEdit(event.id)}
                                        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded hover:bg-blue-600 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                           
                            {selectedEvent && selectedEvent.id === event.id && (
                                <tr className="bg-gray-200">
                                    <td colSpan="7" className="py-4 px-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                <p><span className="font-semibold">Judul:</span> {event.judulEvent}</p>
                                                <p><span className="font-semibold">Tanggal:</span> {new Date(event.tanggalEvent).toLocaleString()}</p>
                                                <p><span className="font-semibold">Harga:</span> {event.hargaEvent}</p>
                                                <p><span className="font-semibold">Poin:</span> {event.pointEvent}</p>
                                                <p><span className="font-semibold">Tempat:</span> {event.tempatEvent}</p>
                                                <p><span className="font-semibold">Narasumber:</span> {event.narasumber}</p>
                                                <p><span className="font-semibold">Contact Person:</span> {event.contactPerson}</p>
                                                <p><span className="font-semibold">Created By:</span> {event.createdBy.username}</p>
                                                <p><span className="font-semibold">Updated By:</span> {event.updatedBy.username}</p>
                                                <h4 className="font-semibold mt-4">Deskripsi:</h4>
                                                {event.deskripsiEvent.map((item, index) => (
                                                    <>
                                                    <li key={index} className="list-disc list-inside">{item.str}</li>
                                                    </>
                                                ))}
                                            </div>
                                            <button
                                                onClick={handleCloseDetail}
                                                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EventTable;