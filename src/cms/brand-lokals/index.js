import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BrandLokalsTable = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [query, setQuery] = useState({
        page: 1,
        limit: 10,
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [query]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/brand-lokals', { params: query });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/brand-lokals/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleRowClick = (item) => {
        setSelectedItem(item);
    };

    const handleCloseDetail = () => {
        setSelectedItem(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/brand-lokal/create'); 
    };

    const handleEdit = (id) => {
        navigate(`/admin/brand-lokal/edit/${id}`);
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

    return (
        <div className="overflow-x-auto my-32 px-6">
            <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Brand Lokals</h2>
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
                    <option value="judulBrand">Judul Brand</option>
                    <option value="publishedAt">Published At</option>
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
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Judul Brand</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Foto Brand</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Published At</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {data.map((item) => (
                        <React.Fragment key={item.id}>
                            <tr
                                className="hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer"
                                onClick={() => handleRowClick(item)}
                            >
                                <td className="py-3 px-4">{item.judulBrand}</td>
                                <td className="py-3 px-4">
                                    <img
                                        src={item.fotoBrand}
                                        alt={item.judulBrand}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4">{new Date(item.publishedAt).toLocaleDateString()}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEdit(item.id)}
                                        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded hover:bg-blue-600 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            {selectedItem && selectedItem.id === item.id && (
                                <tr className="bg-gray-200">
                                    <td colSpan="5" className="py-4 px-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                <p><span className="font-semibold">Judul Brand:</span> {item.judulBrand}</p>
                                                <p><span className="font-semibold">Deskripsi Brand:</span> {item.deskripsiBrand}</p>
                                                <p><span className="font-semibold">Published At:</span> {new Date(item.publishedAt).toLocaleString()}</p>
                                                <p><span className="font-semibold">Created By:</span> {item.createdBy.username}</p>
                                                <p><span className="font-semibold">Updated By:</span> {item.updatedBy.username}</p>
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
            {/* Pagination */}
            <div className="flex justify-end mt-4">
                <button
                    onClick={() => handlePageChange(query.page - 1)}
                    disabled={query.page <= 1}
                    className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md mr-2 hover:bg-gray-400 focus:outline-none"
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePageChange(query.page + 1)}
                    disabled={data.length < query.limit}
                    className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md mr-2 hover:bg-gray-400 focus:outline-none"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BrandLokalsTable;