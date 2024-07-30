import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import { FaSchool, FaUsers, FaBuilding, FaIndustry, FaBriefcase, FaStore, FaImage } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const CMSHome = () => {
    const { userId, token } = useContext(AuthContext);
    const [deskripsiData, setDeskripsiData] = useState({ title: '', deskripsi: '' });
    const [bannerData, setBannerData] = useState([]);
    const [newBannerImage, setNewBannerImage] = useState(null);
    const [newBannerPreview, setNewBannerPreview] = useState(null);
    const [totalsData, setTotalsData] = useState([]);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDeskripsi = async () => {
            try {
                const response = await axios.get('http://localhost:3000/deskripsi', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const deskripsi = response.data;
                if (deskripsi) {
                    setDeskripsiData({ title: deskripsi.title, deskripsi: deskripsi.deskripsi });
                }
            } catch (error) {
                console.error('Error fetching deskripsi data:', error);
            }
        };

        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:3000/banners/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBannerData(response.data);
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        };

        const fetchTotals = async () => {
            try {
                const response = await axios.get('http://localhost:3000/totals', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTotalsData(response.data.data);
            } catch (error) {
                console.error('Error fetching totals data:', error);
            }
        };

        const fetchAll = async () => {
            try {
                setLoading(true);
                await Promise.all([fetchDeskripsi(), fetchBanners(), fetchTotals()]);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchAll();
    }, [token]);

    const handleDeskripsiSubmit = (e) => {
        e.preventDefault();
        setModalTitle('Konfirmasi Simpan');
        setModalMessage('Apakah Anda yakin ingin menyimpan deskripsi ini?');
        setModalAction(() => async () => {
            try {
                setLoading(true);
                await axios.post('http://localhost:3000/deskripsi', deskripsiData, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setToast({ show: true, type: 'success', message: 'Deskripsi berhasil diperbarui!' });
            } catch (error) {
                console.error('Error updating deskripsi:', error);
                setToast({ show: true, type: 'error', message: 'Gagal memperbarui deskripsi.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handleBannerCreate = () => {
        setModalTitle('Konfirmasi Buat');
        setModalMessage('Apakah Anda yakin ingin membuat banner ini?');
        setModalAction(() => async () => {
            const formData = new FormData();
            formData.append('file', newBannerImage);
            setLoading(true);
            try {
                const response = await axios.post(`http://localhost:3000/banners/${userId}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data'
                    },
                });
                setBannerData([...bannerData, response.data]);
                setNewBannerImage(null);
                setNewBannerPreview(null);
                setToast({ show: true, type: 'success', message: 'Banner berhasil dibuat!' });
            } catch (error) {
                console.error('Error creating banner:', error);
                setToast({ show: true, type: 'error', message: 'Gagal membuat banner.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handleBannerDelete = (bannerId) => {
        setModalTitle('Konfirmasi Hapus');
        setModalMessage('Apakah Anda yakin ingin menghapus banner ini?');
        setModalAction(() => async () => {
            setLoading(true);
            try {
                await axios.delete(`http://localhost:3000/banners/${bannerId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBannerData(bannerData.filter((banner) => banner.id !== bannerId));
                setToast({ show: true, type: 'success', message: 'Banner berhasil dihapus!' });
            } catch (error) {
                console.error('Error deleting banner:', error);
                setToast({ show: true, type: 'error', message: 'Gagal menghapus banner.' });
            }
            finally {
                setLoading(false);
            }
        });
        setModalShow(true);
    };

    const handleOnDragEnd = async (result) => {
        if (!result.destination) return;

        const items = Array.from(bannerData);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setBannerData(items);
        setLoading(true);
        try {
            await axios.put('http://localhost:3000/banners/reorder', { banners: items }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setToast({ show: true, type: 'success', message: 'Urutan banner berhasil diubah!' });
        } catch (error) {
            console.error('Error reordering banners:', error);
            setToast({ show: true, type: 'error', message: 'Gagal mengubah urutan banner.' });
        } finally {
            setLoading(false);
        }
    };

    const getIcon = (nama) => {
        switch (nama) {
            case 'pendidikan':
                return <FaSchool className="text-blue-500" size={40} />;
            case 'penggerak':
                return <FaUsers className="text-green-500" size={40} />;
            case 'pemerintah':
                return <FaBuilding className="text-red-500" size={40} />;
            case 'swasta':
                return <FaIndustry className="text-yellow-500" size={40} />;
            case 'usaha':
                return <FaBriefcase className="text-purple-500" size={40} />;
            case 'umkm':
                return <FaStore className="text-pink-500" size={40} />;
            default:
                return <FaUsers size={40} />;
        }
    };

    const handleNewBannerImageChange = (e) => {
        const file = e.target.files[0];
        setNewBannerImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewBannerPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Dasbor Admin</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                    {totalsData.map((total) => (
                        <div key={total.id} className="bg-white rounded-lg shadow p-6 flex items-center">
                            <div className="mr-4">
                                {getIcon(total.nama)}
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">
                                    {total.nama.charAt(0).toUpperCase() + total.nama.slice(1)}
                                </h2>
                                <p className="text-lg font-medium">{total.total}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Edit Halaman Utama</h2>
                    <form onSubmit={handleDeskripsiSubmit} className="max-w-2xl mb-12 p-6">
                        <div className="mb-6">
                            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
                                Judul
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={deskripsiData.title}
                                onChange={(e) => setDeskripsiData({ ...deskripsiData, title: e.target.value })}
                                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200 ease-in-out"
                                placeholder="Masukkan judul"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="deskripsi" className="block text-lg font-medium text-gray-700 mb-2">
                                Deskripsi
                            </label>
                            <textarea
                                id="deskripsi"
                                name="deskripsi"
                                value={deskripsiData.deskripsi}
                                onChange={(e) => setDeskripsiData({ ...deskripsiData, deskripsi: e.target.value })}
                                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200 ease-in-out"
                                rows="5"
                                placeholder="Masukkan deskripsi"
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 ease-in-out"
                        >
                            Simpan
                        </button>
                    </form>

                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">Kelola Banner Halaman Utama</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="mt-8">
                                {newBannerPreview ? (
                                    <div className="flex items-center mb-4">
                                        <img src={newBannerPreview} alt="Prabawan Banner Baru" className="w-24 h-24 object-cover rounded-lg mr-4" />
                                        <span className="text-lg">{newBannerImage?.name}</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center mb-4">
                                        <FaImage className="text-gray-400 mr-2" size={24} />
                                        <span className="text-lg text-gray-400">Belum ada file yang dipilih</span>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    onChange={handleNewBannerImageChange}
                                    className="hidden"
                                    id="newBannerImageInput"
                                />
                                <label
                                    htmlFor="newBannerImageInput"
                                    className="inline-flex px-6 py-3 mt-8 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer min-w-64 justify-center"
                                >
                                    Pilih Banner
                                </label>
                                {newBannerImage && (
                                    <button
                                        onClick={handleBannerCreate}
                                        className="inline-flex px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer mt-4 min-w-64 justify-center"
                                    >
                                        Buat Banner
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-medium mb-4">Seret dan Jatuhkan untuk Mengubah Urutan</h3>
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="banners">
                                    {(provided) => (
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {bannerData.map((banner, index) => (
                                                <Draggable key={banner.id} draggableId={banner.id.toString()} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            ref={provided.innerRef}
                                                            className="bg-gray-100 rounded-lg shadow-md p-3 mt-3 flex items-center justify-between"
                                                        >
                                                            <img
                                                                src={`http://localhost:3000${banner.foto}`}
                                                                className="w-24 h-16 rounded-lg mr-4"
                                                            />
                                                            <button
                                                                onClick={() => handleBannerDelete(banner.id)}
                                                                className="text-red-500 hover:text-red-700 focus:outline-none"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        </div>
                    </div>
                </div>

                <ConfirmationModal
                    show={modalShow}
                    title={modalTitle}
                    message={modalMessage}
                    onConfirm={() => {
                        if (modalAction) {
                            modalAction();
                        }
                        setModalShow(false);
                    }}
                    onCancel={() => setModalShow(false)}
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

export default CMSHome;