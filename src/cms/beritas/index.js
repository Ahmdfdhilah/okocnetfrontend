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
                const response = await axios.get('http://localhost:3000/beritas', { params: query });
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
            await axios.delete(`http://localhost:3000/beritas/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const response = await axios.get('http://localhost:3000/beritas', { params: query });
            setBeritas(response.data.data);
            setToast({ show: true, type: 'success', message: 'Berita berhasil dihapus!' });
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
    const getNumber = (index) => {
        return (query.page - 1) * query.limit + index + 1;
    };

    return (
        <>
            {loading && <Loading />}
            <div className="overflow-x-auto my-32 px-6">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Berita</h2>
                    <button
                        onClick={handleCreateNew}
                        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none"
                    >
                        Buat Baru
                    </button>
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
                        <option value="judulBerita">Judul</option>
                        <option value="tanggalBerita">Tanggal</option>
                        <option value="authorBerita">Penulis</option>
                        <option value="editorBerita">Editor</option>
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
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">No</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Judul</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Tanggal</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Penulis</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Editor</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Foto Berita</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Foto Konten</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Aksi</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody className="text-gray-700">
                        {beritas.map((berita, index) => (
                            <React.Fragment key={berita.id}>
                                <tr
                                    className="hover:bg-gray-100 border-b border-gray-200 py-4 cursor-pointer"
                                    onClick={() => handleRowClick(berita)}
                                >
                                    <td className="py-3 px-4">{getNumber(index)}</td>
                                    <td className="py-3 px-4">{berita.judulBerita}</td>
                                    <td className="py-3 px-4">{new Date(berita.tanggalBerita).toLocaleDateString()}</td>
                                    <td className="py-3 px-4">{berita.authorBerita}</td>
                                    <td className="py-3 px-4">{berita.editorBerita}</td>
                                    <td className="py-3 px-4">
                                        <img src={`http://localhost:3000${berita.fotoBerita}`} alt="foto" className="h-10 w-10 rounded-full object-cover" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <img src={`http://localhost:3000${berita.fotoContent}`} alt="konten" className="h-10 w-10 rounded-full object-cover" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => handleDeleteConfirmation(berita.id)}
                                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 focus:outline-none"
                                        >
                                            Hapus
                                        </button>
                                        <button
                                            onClick={() => handleEdit(berita.id)}
                                            className="bg-yellow-500 text-white px-4 py-1 ml-2 rounded hover:bg-yellow-600 focus:outline-none"
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
                                                    <h3 className="text-lg font-semibold mb-2">Detail</h3>
                                                    <p><span className="font-semibold">Judul:</span> {berita.judulBerita}</p>
                                                    <p><span className="font-semibold">Tanggal:</span> {new Date(berita.tanggalBerita).toLocaleString()}</p>
                                                    <p><span className="font-semibold">Penulis:</span> {berita.authorBerita}</p>
                                                    <p><span className="font-semibold">Editor:</span> {berita.editorBerita}</p>
                                                    <p><span className="font-semibold">Details:</span></p>
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
                        disabled={beritas.length < query.limit}
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded-md mr-2 hover:bg-gray-400 focus:outline-none"
                    >
                        Berikutnya
                    </button>
                </div>
                <ConfirmationModal
                    show={modalShow}
                    title="Hapus Berita"
                    message="Apakah Anda yakin ingin menghapus berita ini?"
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