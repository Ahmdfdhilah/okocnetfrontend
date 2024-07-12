import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PeluangUsahaTable = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/peluang-usahas');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/peluang-usahas/${id}`);
            fetchData();
            setSelectedItem(null); // Clear selected item after deletion
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleRowClick = (id) => {
        const selectedItem = data.find(item => item.id === id);
        setSelectedItem(selectedItem);
    };

    const handleCloseDetail = () => {
        setSelectedItem(null);
    };

    return (
        <div className="overflow-x-auto my-32 px-6">
            <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Peluang Usaha</h2>
                <button
                    onClick={() => navigate('/admin/peluang-usaha/create')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                    Create New
                </button>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Gambar</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Judul Usaha</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Lokasi Usaha</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Kategori Usaha</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Published At</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {data.map((item) => (
                        <React.Fragment key={item.id}>
                            <tr
                                className={`hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer ${selectedItem && selectedItem.id === item.id ? 'bg-gray-200' : ''}`}
                                onClick={() => handleRowClick(item.id)}
                            >
                               <td className="py-3 px-4">
                                    <img
                                        src={item.fotoUsaha}
                                        alt={item.judulUsaha}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4">{item.judulUsaha}</td>
                                <td className="py-3 px-4">{item.lokasiUsaha}</td>
                                <td className="py-3 px-4">{item.kategoriUsaha}</td>
                                <td className="py-3 px-4">{new Date(item.publishedAt).toLocaleDateString()}</td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => navigate(`/admin/peluang-usaha/edit/${item.id}`)}
                                        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded hover:bg-blue-600 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            {selectedItem && selectedItem.id === item.id && (
                                <tr className="bg-gray-200">
                                    <td colSpan="6" className="py-4 px-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                <p><span className="font-semibold">Judul Usaha:</span> {selectedItem.judulUsaha}</p>
                                                <p><span className="font-semibold">Lokasi Usaha:</span> {selectedItem.lokasiUsaha}</p>
                                                <p><span className="font-semibold">Kategori Usaha:</span> {selectedItem.kategoriUsaha}</p>
                                                <p><span className="font-semibold">Tentang Program:</span> {selectedItem.tentangProgram}</p>
                                                <p><span className="font-semibold">Benefit Program:</span> {selectedItem.benefitProgram}</p>
                                                <p><span className="font-semibold">Job Description Usaha:</span> {selectedItem.jobdescUsaha}</p>
                                                <p><span className="font-semibold">Kriteria Usaha:</span> {selectedItem.kriteriaUsaha}</p>
                                                <p><span className="font-semibold">URL Pendaftaran:</span>{selectedItem.urlPendaftaran}</p>
                                                <p><span className="font-semibold">Periode Pendaftaran:</span> {selectedItem.periodePendaftaran}</p>
                                                <p><span className="font-semibold">Published At:</span> {new Date(selectedItem.publishedAt).toLocaleString()}</p>
                                                <p><span className="font-semibold">Created By:</span> {selectedItem.createdBy.username}</p>
                                                <p><span className="font-semibold">Updated By:</span> {selectedItem.updatedBy.username}</p>
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

export default PeluangUsahaTable;