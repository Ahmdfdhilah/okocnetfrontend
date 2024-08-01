import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const BannerNames = [
    'Sejarah',
    'Visi Misi',
    'Nilai Inti',
    'Struktur Pengurus',
    'Penggerak',
    'Anniversary',
    '7 Top',
    'Merchandise',
    'Peluang Usaha',
    'Peluang Kerja',
    'Magang',
    'Trainer',
    'Mentor',
    'Mitra Kerjasama',
    'Donasi',
    'Event',
    'Berita',
    'Brand Lokal',
    'Modal Berkah',
    'Emak Kece',
    'Masjid Pemberdaya',
    'Desapreneur',
    'The Mentor',
    'Master Mentor',
    'Testimoni'
];

const UpdateAllBanner = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    const [formData, setFormData] = useState({
        nama: '',
        files: [],
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
    });

    useEffect(() => {
        const fetchBanner = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/all-banners/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { nama } = response.data;

                setFormData({
                    nama,
                    files: [], 
                });
                setLoadingData(false);
            } catch (error) {
                console.error('Error fetching banner data:', error);
                setLoadingData(false);
            }
        };

        fetchBanner();
    }, [id, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        setFormErrors(prev => ({
            ...prev,
            [name]: '',
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({
            ...prev,
            files: files,
        }));
        setFormErrors(prev => ({
            ...prev,
            files: '',
        }));
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...formData.files];
        updatedFiles.splice(index, 1);
        setFormData(prev => ({
            ...prev,
            files: updatedFiles,
        }));
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            nama: '',
            files: '',
        };

        if (!formData.nama) {
            errors.nama = 'Nama harus dipilih';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }
        setModalAction(() => async () => {
            try {
                setLoading(true);
                const formDataToSend = new FormData();
                formDataToSend.append('nama', formData.nama);

                formData.files.forEach((file) => {
                    formDataToSend.append('files', file);
                });

                await axios.put(`http://localhost:3000/all-banners/${id}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                });

                navigate('/admin/all-banner');
            } catch (error) {
                console.error('Error updating banner:', error);
                setLoading(false);
            }
        });
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin memperbarui AllBanner ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            {loadingData ? (
                <Loading />
            ) : (
                <div className="container mx-auto py-10 mt-32">
                    <h1 className="text-4xl font-bold mb-8 text-center">Update AllBanner</h1>
                    <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md" encType="multipart/form-data">
                        {/* Nama */}
                        <div className="mb-6">
                            <label htmlFor="nama" className="block text-lg font-medium text-gray-700 mb-2">
                                Nama
                            </label>
                            <select
                                id="nama"
                                name="nama"
                                value={formData.nama}
                                onChange={handleInputChange}
                                className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.nama ? 'border-red-500' : ''}`}
                            >
                                <option value="">Pilih nama</option>
                                {BannerNames.map((name) => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                            {formErrors.nama && <p className="text-red-500 text-sm mt-1">{formErrors.nama}</p>}
                        </div>

                        {/* Dokumentasi */}
                        <div className="mb-6">
                            <label htmlFor="files" className="block text-lg font-medium text-gray-700 mb-2">
                                Dokumentasi
                            </label>
                            <input
                                type="file"
                                id="files"
                                name="files"
                                accept="image/*"
                                onChange={handleFileChange}
                                multiple
                                className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.files ? 'border-red-500' : ''}`}
                            />
                            {formErrors.files && <p className="text-red-500 text-sm mt-1">{formErrors.files}</p>}
                        </div>

                        {/* List Dokumentasi */}
                        {formData.files.length > 0 && (
                            <div className="mb-6">
                                <p className="text-lg font-medium text-gray-700 mb-2">Dokumentasi yang akan diunggah:</p>
                                <ul className="list-disc list-inside">
                                    {formData.files.map((file, index) => (
                                        <li key={index} className="flex items-center justify-between mt-1">
                                            <span>{file.name}</span>
                                            <button
                                                type="button"
                                                className="ml-2 text-sm text-red-500"
                                                onClick={() => handleRemoveFile(index)}
                                            >
                                                Hapus
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Perbarui
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <ConfirmationModal
                show={modalShow}
                title={modalTitle}
                message={modalMessage}
                onConfirm={modalAction}
                onCancel={() => setModalShow(false)}
            />
        </>
    );
};

export default UpdateAllBanner;