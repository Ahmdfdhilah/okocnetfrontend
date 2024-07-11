import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MerchandiseTable = () => {
    const [merchandises, setMerchandises] = useState([]);
    const [selectedMerchandise, setSelectedMerchandise] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMerchandises();
    }, []);

    const fetchMerchandises = async () => {
        try {
            const response = await axios.get('http://localhost:3000/merchandises');
            setMerchandises(response.data.data);
        } catch (error) {
            console.error('Error fetching merchandises:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/merchandises/${id}`);
            fetchMerchandises();
            setSelectedMerchandise(null);
        } catch (error) {
            console.error('Error deleting merchandise:', error);
        }
    };

    const handleRowClick = (merchandise) => {
        setSelectedMerchandise(merchandise);
    };

    const handleCloseDetail = () => {
        setSelectedMerchandise(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/merchandise/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/merchandise/edit/${id}`);
    };

    const renderPhotos = (photos) => {
        if (!selectedMerchandise || photos.length === 0) return null;

        const maxVisiblePhotos = 2;
        const remainingPhotos = photos.length - maxVisiblePhotos;

        return (
            <div className="flex">
                {photos.slice(0, maxVisiblePhotos).map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`Foto ${selectedMerchandise.judulMerchandise}`}
                        className="h-20 w-20 rounded-full object-cover -ml-4"
                        style={{ zIndex: index, marginLeft: index !== 0 ? '-12px' : '0' }}
                    />
                ))}
                {remainingPhotos > 0 && (
                    <span className="self-end ml-2 text-sm">+ {remainingPhotos} more</span>
                )}
            </div>
        );
    };

    return (
        <div className="overflow-x-auto my-32 px-6">
            <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Merchandises</h2>
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
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Deskripsi</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Harga</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Link</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {merchandises.map((merchandise) => (
                        <React.Fragment key={merchandise.id}>
                            <tr
                                className="hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer"
                                onClick={() => handleRowClick(merchandise)}
                            >
                                <td className="py-3 px-4">{merchandise.judulMerchandise}</td>
                                <td className="py-3 px-4">{merchandise.deskripsiMerchandise}</td>
                                <td className="py-3 px-4">{merchandise.hargaMerchandise}</td>
                                <td className="py-3 px-4">{merchandise.linkMerchandise}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(merchandise.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEdit(merchandise.id)}
                                        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded hover:bg-blue-600 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            {selectedMerchandise && selectedMerchandise.id === merchandise.id && (
                                <tr className="bg-gray-200">
                                    <td colSpan="5" className="py-4 px-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                <p><span className="font-semibold">Judul:</span> {merchandise.judulMerchandise}</p>
                                                <p><span className="font-semibold">Deskripsi:</span> {merchandise.deskripsiMerchandise}</p>
                                                <p><span className="font-semibold">Harga:</span> {merchandise.hargaMerchandise}</p>
                                                <p><span className="font-semibold">Link:</span> {merchandise.linkMerchandise}</p>
                                                <div className="mt-2">
                                                    <span className="font-semibold">Foto:</span>
                                                    {renderPhotos(merchandise.fotoMerchandise)}
                                                </div>
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

export default MerchandiseTable;