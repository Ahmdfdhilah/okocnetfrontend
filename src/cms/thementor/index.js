import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import Toast from '../../components/Toast';
import Loading from '../../components/Loading';
import DocumentationManager from '../../components/DocumentationManager';

const ThementorTable = () => {
    const [thementors, setThementors] = useState([]);
    const { token } = useContext(AuthContext);
    const [selectedThementor, setSelectedThementor] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [modalShow, setModalShow] = useState(false);
    const [toBeDeletedId, setToBeDeletedId] = useState(null);
    const [loading, setLoading] = useState(true);

    const [query, setQuery] = useState({
        page: 1,
        limit: 10,
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchThementors = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/thementors', { params: query });
                setThementors(response.data.data);
            } catch (error) {
                console.error('Error fetching themenors:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchThementors();
    }, [query]);

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/thementor/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const response = await axios.get('http://localhost:3000/thementor', { params: query });
            setThementors(response.data.data);
            setToast({ show: true, type: 'success', message: 'Thementor berhasil dihapus!' });
            setModalShow(false);
        } catch (error) {
            console.error('Error deleting themenor:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteConfirmation = (id) => {
        setToBeDeletedId(id);
        setModalShow(true);
    };

    const handleCancelDelete = () => {
        setModalShow(false);
    };

    const handleDocumentationUpdate = async () => {
        const response = await axios.get('http://localhost:3000/thementors', { params: query });
        setThementors(response.data.data);
    };

    const handleRowClick = (thementor) => {
        setSelectedThementor(thementor);
    };

    const handleCloseDetail = () => {
        setSelectedThementor(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/thementor/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/thementor/edit/${id}`);
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
        <>
            {loading && <Loading />}
            <div className="overflow-x-auto my-32 px-6">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Thementor</h2>
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="text"
                        placeholder="Cari..."
                        value={query.search || ''}
                        onChange={handleSearchChange}
                        className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <select
                        value={query.sort || ''}
                        onChange={handleSortChange}
                        className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="">Urutkan Berdasarkan...</option>
                        <option value="judul">Judul</option>
                        {/* Add other sort options if needed */}
                    </select>
                    <select
                        value={query.order || ''}
                        onChange={handleOrderChange}
                        className="px-3 py-2 border border-gray-300 rounded-md mr-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                        <option value="">Urutan...</option>
                        <option value="ASC">ASC</option>
                        <option value="DESC">DESC</option>
                    </select>
                </div>
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Table Headers */}
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Judul</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Dokumentasi</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Aksi</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody className="text-gray-700">
                        {thementors.map((thementor) => (
                            <React.Fragment key={thementor.id}>
                                <tr
                                    className="hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer"
                                    onClick={() => handleRowClick(thementor)}
                                >
                                    <td className="py-3 px-4">{thementor.judul}</td>
                                    <td className="py-3 px-4">
                                        <DocumentationManager
                                            thementorId={thementor.id}
                                            dokumentasiUrls={thementor.dokumentasi}
                                            onUpdate={handleDocumentationUpdate}
                                        />
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => handleEdit(thementor.id)}
                                            className="bg-yellow-500 text-white px-4 py-1 ml-2 rounded hover:bg-yellow-600 focus:outline-none"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                                {selectedThementor && selectedThementor.id === thementor.id && (
                                    <tr className="bg-gray-200">
                                        <td colSpan="3" className="py-4 px-6">
                                            {/* Details Section */}
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-2">Detail</h3>
                                                    <p><span className="font-semibold">Judul:</span> {thementor.judul}</p>
                                                    <p><span className="font-semibold">Dokumentasi:</span></p>
                                                    <ul>
                                                        {thementor.dokumentasi.map((doc, index) => (
                                                            <li key={index} className="list-disc list-inside">
                                                                <img
                                                                    src={`http://localhost:3000${doc}`}
                                                                    alt={`detail-${index}`}
                                                                    className="h-16 w-16 rounded-full object-cover"
                                                                />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <button
                                                    onClick={handleCloseDetail}
                                                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                                >
                                                    Tutup
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
                        Sebelumnya
                    </button>
                    <button
                        onClick={() => handlePageChange(query.page + 1)}
                        disabled={thementors.length < query.limit}
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md mr-2 hover:bg-gray-400 focus:outline-none"
                    >
                        Berikutnya
                    </button>
                </div>
                <ConfirmationModal
                    show={modalShow}
                    title="Hapus Thementor"
                    message="Apakah Anda yakin ingin menghapus Thementor ini?"
                    onConfirm={() => handleDelete(toBeDeletedId)}
                    onCancel={handleCancelDelete}
                />
                <Toast
                    show={toast.show}
                    type={toast.type}
                    message={toast.message}
                    onClose={() => setToast({ show: false, type: '', message: '' })}
                />
            </div>
        </>
    );
};

export default ThementorTable;