import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MerchandiseTable = () => {
    const [merchandises, setMerchandises] = useState([]);
    const [selectedMerchandise, setSelectedMerchandise] = useState(null);
    const [query, setQuery] = useState({
        page: 1,
        limit: 10,
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchMerchandises();
    }, [query]);

    const fetchMerchandises = async () => {
        try {
            const response = await axios.get('http://localhost:3000/merchandises', { params: query });
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

        const maxVisiblePhotos = 3;
        const remainingPhotos = photos.length - maxVisiblePhotos;

        return (
            <div className="flex">
                {photos.slice(0, maxVisiblePhotos).map((photo, index) => (
                    <img
                        key={index}
                        src={`https://sole-debi-crytonexa-deb22e0b.koyeb.app${photo}`}
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

    const handleSearchChange = (event) => {
        setQuery({ ...query, search: event.target.value });
    };

    const handleSortChange = (event) => {
        setQuery({ ...query, sort: event.target.value });
    };

    const handleOrderChange = (event) => {
        setQuery({ ...query, order: event.target.value });
    };

    const handlePageChange = (newPage) => {
        setQuery({ ...query, page: newPage });
    };

    const handlePreviousPage = () => {
        if (query.page > 1) {
            handlePageChange(query.page - 1);
        }
    };

    const handleNextPage = () => {
        handlePageChange(query.page + 1);
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
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query.search || ''}
                    onChange={handleSearchChange}
                    className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <select
                    value={query.sort || ''}
                    onChange={handleSortChange}
                    className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Sort By...</option>
                    <option value="judulMerchandise">Judul Merchandise</option>
                    <option value="hargaMerchandise">Harga Merchandise</option>
                    <option value="createdAt">Created At</option>
                </select>
                <select
                    value={query.order || ''}
                    onChange={handleOrderChange}
                    className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Order...</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
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
            <div className="mt-4 flex justify-end">
                <button
                    onClick={handlePreviousPage}
                    disabled={query.page <= 1}
                    className={`px-3 py-1 bg-gray-300 text-gray-600 rounded mr-2 hover:bg-gray-400'}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={merchandises.length < query.limit}
                    className={`px-3 py-1 bg-gray-300 text-gray-600 rounded hover:bg-gray-400'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default MerchandiseTable;