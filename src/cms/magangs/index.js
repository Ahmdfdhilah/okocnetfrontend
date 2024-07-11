import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const MagangTable = () => {
    const [magangs, setMagangs] = useState([]);
    const [selectedMagang, setSelectedMagang] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMagangs();
    }, []);

    const fetchMagangs = async () => {
        try {
            const response = await axios.get('http://localhost:3000/magangs');
            setMagangs(response.data.data);
        } catch (error) {
            console.error('Error fetching magangs:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/magangs/${id}`);
            fetchMagangs();
        } catch (error) {
            console.error('Error deleting magang:', error);
        }
    };

    const handleRowClick = (magang) => {
        setSelectedMagang(magang);
    };

    const handleCloseDetail = () => {
        setSelectedMagang(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/magang/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/magang/edit/${id}`);
    };

    return (
        <div className="overflow-x-auto my-32 px-6">
            <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Magangs</h2>
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
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Lokasi</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Durasi</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Jenis</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Foto</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tentang Program</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {magangs.map((magang) => (
                        <React.Fragment key={magang.id}>
                            <tr
                                className="hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer"
                                onClick={() => handleRowClick(magang)}
                            >
                                <td className="py-3 px-4">{magang.judulMagang}</td>
                                <td className="py-3 px-4">{magang.lokasiMagang}</td>
                                <td className="py-3 px-4">{magang.durasiMagang}</td>
                                <td className="py-3 px-4">{magang.jenisMagang}</td>
                                <td className="py-3 px-4">
                                    <img
                                        src={magang.fotoMagang}
                                        alt={magang.judulMagang}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                </td>
                                <td className="py-3 px-3">{magang.tentangProgram}</td>
                                <td className="py-3 px-3">
                                    <button
                                        onClick={() => handleDelete(magang.id)}
                                        className="bg-red-500 text-white px-4 py-1 my-1 rounded hover:bg-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleEdit(magang.id)}
                                        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded hover:bg-blue-600 focus:outline-none"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            {selectedMagang && selectedMagang.id === magang.id && (
                                <tr className="bg-gray-200">
                                    <td colSpan="7" className="py-4 px-6">
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                <p><span className="font-semibold">Judul:</span> {magang.judulMagang}</p>
                                                <p><span className="font-semibold">Lokasi:</span> {magang.lokasiMagang}</p>
                                                <p><span className="font-semibold">Durasi:</span> {magang.durasiMagang}</p>
                                                <p><span className="font-semibold">Jenis:</span> {magang.jenisMagang}</p>
                                                <p><span className="font-semibold">Tentang Program:</span> {magang.tentangProgram}</p>
                                                <p><span className="font-semibold">Benefit:</span> {magang.benefitMagang}</p>
                                                <p><span className="font-semibold">URL MSIB:</span> <a href={magang.urlMsib} className="text-blue-500">{magang.urlMsib}</a></p>
                                                <p><span className="font-semibold">Created By:</span> {magang.createdBy.username}</p>
                                                <p><span className="font-semibold">Updated By:</span> {magang.updatedBy.username}</p>
                                                <h4 className="font-semibold mt-4">Deskripsi:</h4>
                                                {magang.deskripsiMagang.map((item, index) => (
                                                    <li key={index} className="list-disc list-inside">{item.str}</li>
                                                ))}
                                                <h4 className="font-semibold mt-4">Kriteria:</h4>
                                                {magang.kriteriaPeserta.map((item, index) => (
                                                    <li key={index} className="list-disc list-inside">{item.str}</li>
                                                ))}
                                                <h4 className="font-semibold mt-4">Kompetensi:</h4>
                                                {magang.kompetensi.map((item, index) => (
                                                    <li key={index} className="list-disc list-inside">{item.str}</li>
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

export default MagangTable;