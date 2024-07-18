import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const UpdateBerita = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        judulBerita: '',
        tanggalBerita: '',
        authorBerita: '',
        editorBerita: '',
        deskripsiBerita: [],
        file: null,
        file2: null,
    });

    const [formErrors, setFormErrors] = useState({
        judulBerita: '',
        tanggalBerita: '',
        authorBerita: '',
        editorBerita: '',
        deskripsiBerita: '',
    });

    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [toast, setToast] = useState({ show: false, type: '', message: '' });

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://okocenet-72f35a89c2ef.herokuapp.com/beritas/${id}`);
                const beritaData = response.data;

                const formattedDeskripsiBerita = beritaData.deskripsiBerita.map(item => item.str);

                setFormData({
                    judulBerita: beritaData.judulBerita,
                    tanggalBerita: beritaData.tanggalBerita,
                    authorBerita: beritaData.authorBerita,
                    editorBerita: beritaData.editorBerita,
                    file: null,
                    file2: null,
                    deskripsiBerita: formattedDeskripsiBerita,
                });
            } catch (error) {
                console.error('Error fetching news article:', error);
                setToast({ show: true, type: 'error', message: 'Gagal memuat berita' });
            }
            finally {
                setLoading(false);
            }
        };

        fetchBerita();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const handleAddDescription = () => {
        const updatedDescriptions = [...formData.deskripsiBerita, ''];
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = [...formData.deskripsiBerita];
        updatedDescriptions[index] = value;
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = [...formData.deskripsiBerita];
        updatedDescriptions.splice(index, 1);
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulBerita: '',
            tanggalBerita: '',
            authorBerita: '',
            editorBerita: '',
            deskripsiBerita: '',
        };

        if (!formData.judulBerita.trim()) {
            errors.judulBerita = 'Judul Berita harus diisi';
            valid = false;
        }
        if (!formData.tanggalBerita) {
            errors.tanggalBerita = 'Tanggal Berita harus diisi';
            valid = false;
        }
        if (!formData.authorBerita.trim()) {
            errors.authorBerita = 'Author Berita harus diisi';
            valid = false;
        }
        if (!formData.editorBerita.trim()) {
            errors.editorBerita = 'Editor Berita harus diisi';
            valid = false;
        }
        if (formData.deskripsiBerita.length === 0) {
            errors.deskripsiBerita = 'Deskripsi Berita harus diisi';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setModalAction(() => async () => {
            try {
                setLoading(true);
                const formDataToSend = new FormData();
                formDataToSend.append('judulBerita', formData.judulBerita);
                formDataToSend.append('tanggalBerita', formData.tanggalBerita);
                formDataToSend.append('authorBerita', formData.authorBerita);
                formDataToSend.append('editorBerita', formData.editorBerita);
                formData.deskripsiBerita.forEach((deskripsi, index) => {
                    formDataToSend.append(`deskripsiBerita[${index}]`, deskripsi);
                });
                formDataToSend.append('file', formData.file);
                formDataToSend.append('file2', formData.file2);
                formDataToSend.append('publishedAt', formData.publishedAt);

                await axios.put(`https://okocenet-72f35a89c2ef.herokuapp.com/beritas/${id}/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/berita');
                setToast({ show: true, type: 'success', message: 'Berita berhasil diperbarui' });
            } catch (error) {
                console.error('Error updating news article:', error);
                setToast({ show: true, type: 'error', message: 'Terjadi kesalahan saat memperbarui berita' });
            } finally {
                setLoading(false);
            }
        });

        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin memperbarui berita ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Update News Article</h1>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <div className="mb-6">
                        <label htmlFor="judulBerita" className="block text-lg font-medium text-gray-700 mb-2">
                            Judul Berita
                        </label>
                        <input
                            type="text"
                            id="judulBerita"
                            name="judulBerita"
                            value={formData.judulBerita}
                            onChange={handleChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Masukkan judul"
                        />
                        {formErrors.judulBerita && <p className="text-red-500 text-sm mt-1">{formErrors.judulBerita}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="tanggalBerita" className="block text-lg font-medium text-gray-700 mb-2">
                            Tanggal Berita
                        </label>
                        <input
                            type="date"
                            id="tanggalBerita"
                            name="tanggalBerita"
                            value={formData.tanggalBerita}
                            onChange={handleChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {formErrors.tanggalBerita && <p className="text-red-500 text-sm mt-1">{formErrors.tanggalBerita}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="authorBerita" className="block text-lg font-medium text-gray-700 mb-2">
                            Author Berita
                        </label>
                        <input
                            type="text"
                            id="authorBerita"
                            name="authorBerita"
                            value={formData.authorBerita}
                            onChange={handleChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Masukkan author"
                        />
                        {formErrors.authorBerita && <p className="text-red-500 text-sm mt-1">{formErrors.authorBerita}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="editorBerita" className="block text-lg font-medium text-gray-700 mb-2">
                            Editor Berita
                        </label>
                        <input
                            type="text"
                            id="editorBerita"
                            name="editorBerita"
                            value={formData.editorBerita}
                            onChange={handleChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Masukkan editor"
                        />
                        {formErrors.editorBerita && <p className="text-red-500 text-sm mt-1">{formErrors.editorBerita}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2">Deskripsi Berita</label>
                        {formData.deskripsiBerita.map((deskripsi, index) => (
                            <div key={index} className="flex mb-2">
                                <input
                                    type="text"
                                    value={deskripsi}
                                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder={`Deskripsi ${index + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveDescription(index)}
                                    className="ml-2 px-3 py-2 border border-gray-300 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddDescription}
                            className="mt-2 px-4 py-2 border border-gray-300 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add Deskripsi
                        </button>
                        {formErrors.deskripsiBerita && (
                            <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiBerita}</p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
                            Foto Berita
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {formErrors.file && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="file2" className="block text-lg font-medium text-gray-700 mb-2">
                            Foto Content
                        </label>
                        <input
                            type="file"
                            id="file2"
                            name="file2"
                            onChange={handleFileChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        {formErrors.file2 && <p className="text-red-500 text-sm mt-1">{formErrors.file2}</p>}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
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
                {toast.show && <Toast type={toast.type} message={toast.message} onClose={() => setToast({ ...toast, show: false })} />}
            </div>
        </>
    );
};

export default UpdateBerita;