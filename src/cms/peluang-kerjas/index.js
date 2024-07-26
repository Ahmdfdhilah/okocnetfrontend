import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const PeluangKerjaTable = () => {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [toBeDeletedId, setToBeDeletedId] = useState(null);
    const { token } = useContext(AuthContext);
    const [query, setQuery] = useState({
        page: 1,
        limit: 10,
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [query]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:3000/peluang-kerjas', { params: query });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setToast({ show: true, type: 'error', message: 'Failed to fetch data.' });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:3000/peluang-kerjas/${toBeDeletedId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setToast({ show: true, type: 'success', message: 'Item deleted successfully!' });
            fetchData();
            setSelectedItem(null);
        } catch (error) {
            console.error('Error deleting item:', error);
            setToast({ show: true, type: 'error', message: 'Failed to delete item.' });
        } finally {
            setLoading(false);
            setModalShow(false);
        }
    };

    const handleDeleteConfirmation = (id) => {
        setToBeDeletedId(id);
        setModalShow(true);
    };

    const handleCancelDelete = () => {
        setModalShow(false);
    };

    const handleRowClick = (id) => {
        const selectedItem = data.find(item => item.id === id);
        setSelectedItem(selectedItem);
    };

    const handleCloseDetail = () => {
        setSelectedItem(null);
    };

    const handleCreateNew = () => {
        navigate('/admin/peluang-kerja/create');
    };

    const handleEdit = (id) => {
        navigate(`/admin/peluang-kerja/edit/${id}`);
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
                    <h2 className="text-2xl font-semibold text-gray-800">Peluang Kerja</h2>
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
                        <option value="judulKerja">Judul Kerja</option>
                        <option value="lokasiKerja">Lokasi Kerja</option>
                        <option value="kategoriKerja">Kategori Kerja</option>
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
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Gambar</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Judul Kerja</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Lokasi Kerja</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Kategori Kerja</th>
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
                                            src={`http://localhost:3000${item.fotoKerja}`}
                                            alt={item.judulKerja}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="py-3 px-4">{item.judulKerja}</td>
                                    <td className="py-3 px-4">{item.lokasiKerja}</td>
                                    <td className="py-3 px-4">{item.kategoriKerja}</td>
                                    <td className="py-3 px-4">{new Date(item.publishedAt).toLocaleDateString()}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => handleDeleteConfirmation(item.id)}
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
                                        <td colSpan="6" className="py-4 px-6">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="text-lg font-semibold mb-2">Details</h3>
                                                    <p><span className="font-semibold">Judul Kerja:</span> {selectedItem.judulKerja}</p>
                                                    <p><span className="font-semibold">Lokasi Kerja:</span> {selectedItem.lokasiKerja}</p>
                                                    <p><span className="font-semibold">Kategori Kerja:</span> {selectedItem.kategoriKerja}</p>
                                                    <p><span className="font-semibold">Tentang Program:</span> {selectedItem.tentangProgram}</p>
                                                    <p><span className="font-semibold">Tanggal Publish:</span> {new Date(selectedItem.publishedAt).toLocaleDateString()}</p>
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
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md hover:bg-gray-400 focus:outline-none"
                        disabled={data.length < query.limit}
                    >
                        Next
                    </button>
                </div>
            </div>

            <ConfirmationModal
                show={modalShow}
                title="Delete Peluang Kerja"
                message="Are you sure you want to delete this Peluang Kerja?"
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

export default PeluangKerjaTable;
