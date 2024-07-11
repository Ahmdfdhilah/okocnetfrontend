import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BeritasTable = () => {
    const [beritas, setBeritas] = useState([]);
    const [selectedBerita, setSelectedBerita] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBeritas();
    }, []);

    const fetchBeritas = async () => {
        try {
            const response = await axios.get('http://localhost:3000/beritas');
            setBeritas(response.data.data);
        } catch (error) {
            console.error('Error fetching beritas:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/beritas/${id}`);
            fetchBeritas();
        } catch (error) {
            console.error('Error deleting berita:', error);
        }
    };

    const handleRowClick = (berita) => {
        setSelectedBerita(berita);
    };

    const handleCloseDetail = () => {
        setSelectedBerita(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/berita/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/berita/edit/${id}`);
    };

    return (
        <div className="overflow-x-auto my-32 px-6">
            <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Beritas</h2>
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
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Author</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Editor</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Foto Berita</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Foto Content</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {beritas.map((berita) => (
                        <React.Fragment key={berita.id}>
                            <tr
                                className="hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer"
                                onClick={() => handleRowClick(berita)}
                            >
                                <td className="py-3 px-4">{berita.judulBerita}</td>
                                <td className="py-3 px-4">{new Date(berita.tanggalBerita).toLocaleDateString()}</td>
                                <td className="py-3 px-4">{berita.authorBerita}</td>
                                <td className="py-3 px-4">{berita.editorBerita}</td>
                                <td className="py-3 px-4">
                                    <img src={berita.fotoBerita} alt="foto" className="h-10 w-10 rounded-full object-cover" />
                                </td>
                                <td className="py-3 px-4">
                                    <img src={berita.fotoContent} alt="content" className="h-10 w-10 rounded-full object-cover"/>
                                </td>
                                <td className="py-3 px-4">
                                    <button
                                        onClick={() => handleDelete(berita.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEdit(berita.id)}
                                        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded hover:bg-blue-600 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            {selectedBerita && selectedBerita.id === berita.id && (
                                <tr className="bg-gray-200">
                                    <td colSpan="7" className="py-4 px-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                <p><span className="font-semibold">Judul:</span> {berita.judulBerita}</p>
                                                <p><span className="font-semibold">Tanggal:</span> {new Date(berita.tanggalBerita).toLocaleString()}</p>
                                                <p><span className="font-semibold">Author:</span> {berita.authorBerita}</p>
                                                <p><span className="font-semibold">Editor:</span> {berita.editorBerita}</p>
                                                <p><span className="font-semibold">Created By:</span> {berita.createdBy.username}</p>
                                                <p><span className="font-semibold">Updated By:</span> {berita.updatedBy.username}</p>
                                                <p><span className="font-semibold">Deskripsi Berita:</span></p>
                                                <ul>
                                                    {berita.deskripsiBerita.map((deskripsi, index) => (
                                                        <li key={index} className="list-disc list-inside">{deskripsi.str}</li>
                                                    ))}
                                                </ul>
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

export default BeritasTable;