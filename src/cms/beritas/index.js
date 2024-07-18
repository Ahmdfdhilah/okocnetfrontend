import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import Toast from '../../components/Toast';
import Loading from '../../components/Loading';

const BeritasTable = () => {
    const [beritas, setBeritas] = useState([]);
    const { token } = useContext(AuthContext);
    const [selectedBerita, setSelectedBerita] = useState(null);
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
        const fetchBeritas = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://okocenet-72f35a89c2ef.herokuapp.com/beritas', { params: query });
                setBeritas(response.data.data);
            } catch (error) {
                console.error('Error fetching beritas:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBeritas();
    }, [query]);

    const handleDelete = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`https://okocenet-72f35a89c2ef.herokuapp.com/beritas/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const response = await axios.get('https://okocenet-72f35a89c2ef.herokuapp.com/beritas', { params: query });
            setBeritas(response.data.data);
            setToast({ show: true, type: 'success', message: 'Berita deleted successfully!' });
            setModalShow(false);
        } catch (error) {
            console.error('Error deleting berita:', error);
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
                    <h2 className="text-2xl font-semibold text-gray-800">Beritas</h2>
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
                        <option value="judulBerita">Judul</option>
                        <option value="tanggalBerita">Tanggal</option>
                        <option value="authorBerita">Author</option>
                        <option value="editorBerita">Editor</option>
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
                    {/* Table Headers */}
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
                    {/* Table Body */}
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
                                        <img src={`https://okocenet-72f35a89c2ef.herokuapp.com${berita.fotoBerita}`} alt="foto" className="h-10 w-10 rounded-full object-cover" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <img src={`https://okocenet-72f35a89c2ef.herokuapp.com${berita.fotoContent}`} alt="content" className="h-10 w-10 rounded-full object-cover" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => handleDeleteConfirmation(berita.id)}
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
                                            {/* Details Section */}
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                    <p><span className="font-semibold">Judul:</span> {berita.judulBerita}</p>
                                                    <p><span className="font-semibold">Tanggal:</span> {new Date(berita.tanggalBerita).toLocaleString()}</p>
                                                    <p><span className="font-semibold">Author:</span> {berita.authorBerita}</p>
                                                    <p><span className="font-semibold">Editor:</span> {berita.editorBerita}</p>
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
                        disabled={beritas.length < query.limit}
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md mr-2 hover:bg-gray-400 focus:outline-none"
                    >
                        Next
                    </button>
                </div>
                <ConfirmationModal
                    show={modalShow}
                    title="Delete Berita"
                    message="Are you sure you want to delete this berita?"
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

export default BeritasTable;
