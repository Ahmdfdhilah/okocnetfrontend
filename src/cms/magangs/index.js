import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import Toast from '../../components/Toast';
import Loading from '../../components/Loading';

const MagangTable = () => {
    const [magangs, setMagangs] = useState([]);
    const [selectedMagang, setSelectedMagang] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [modalShow, setModalShow] = useState(false);
    const [toBeDeletedId, setToBeDeletedId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState({
        page: 1,
        limit: 10,
    });
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMagangs = async () => {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:3000/magangs', { params: query });
                setMagangs(response.data.data);
            } catch (error) {
                console.error('Error fetching magangs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMagangs();
    }, [query]);

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/magangs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMagangs(magangs.filter(magang => magang.id !== id));
            setToast({ show: true, type: 'success', message: 'Magang deleted successfully!' });
            setModalShow(false);
        } catch (error) {
            console.error('Error deleting magang:', error);
            setToast({ show: true, type: 'error', message: 'Failed to delete Magang.' });
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
                    <h2 className="text-2xl font-semibold text-gray-800">Magangs</h2>
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
                        <option value="judulMagang">Judul Magang</option>
                        <option value="lokasiMagang">Lokasi Magang</option>
                        <option value="durasiMagang">Durasi Magang</option>
                        <option value="jenisMagang">Jenis Magang</option>
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
                                            src={`http://localhost:3000${magang.fotoMagang}`}
                                            alt={magang.judulMagang}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="py-3 px-3">{magang.tentangProgram}</td>
                                    <td className="py-3 px-3">
                                        <button
                                            onClick={() => handleDeleteConfirmation(magang.id)}
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
                        onClick={() => handlePageChange(query.page - 1)}
                        disabled={query.page === 1}
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md mr-2 hover:bg-gray-400 focus:outline-none"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(query.page + 1)}
                        disabled={magangs.length < query.limit}
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 focus:outline-none"
                    >
                        Next
                    </button>
                </div>
            </div>

            <ConfirmationModal
                show={modalShow}
                title="Delete Magang"
                message="Are you sure you want to delete this Magang?"
                onConfirm={() => handleDelete(toBeDeletedId)}
                onCancel={handleCancelDelete}
            />
            <Toast
                show={toast.show}
                type={toast.type}
                message={toast.message}
                onClose={() => setToast({ show: false, type: '', message: '' })}
            />
        </>
    );
};

export default MagangTable;