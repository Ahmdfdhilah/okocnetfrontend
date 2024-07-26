import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const CreatePenggerakOkoce = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        namaPenggerak: '',
        deskripsiPenggerak: '',
        file: null,
        publishedAt: new Date().toISOString().slice(0, 16),
    });

    const [formErrors, setFormErrors] = useState({
        namaPenggerak: '',
        deskripsiPenggerak: '',
        file: '',
    });

    const handleInputChange = (e) => {
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
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
        setFormErrors({
            ...formErrors,
            file: '',
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            namaPenggerak: '',
            deskripsiPenggerak: '',
            file: '',
        };

        if (!formData.namaPenggerak.trim()) {
            errors.namaPenggerak = 'Nama Penggerak harus diisi';
            valid = false;
        }
        if (!formData.deskripsiPenggerak.trim()) {
            errors.deskripsiPenggerak = 'Deskripsi Penggerak harus diisi';
            valid = false;
        }
        if (!formData.file) {
            errors.file = 'Foto Penggerak harus diunggah';
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
                formDataToSend.append('file', formData.file);
                formDataToSend.append('namaPenggerak', formData.namaPenggerak);
                formDataToSend.append('deskripsiPenggerak', formData.deskripsiPenggerak);
                formDataToSend.append('publishedAt', formData.publishedAt);

                await axios.post(`http://localhost:3000/penggerak-okoces/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/penggerak-okoce');
            } catch (error) {
                console.error('Error creating data:', error);
            }
        })
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat penggerak ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Create New Penggerak</h1>
                <form onSubmit={onSubmit} encType="multipart/form-data" className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <div className="mb-6">
                        <label htmlFor="namaPenggerak" className="block text-lg font-medium text-gray-700 mb-2">
                            Nama Penggerak
                        </label>
                        <input
                            type="text"
                            id="namaPenggerak"
                            name="namaPenggerak"
                            value={formData.namaPenggerak}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.namaPenggerak ? 'border-red-500' : ''}`}
                            placeholder="Masukkan nama penggerak"
                        />
                        {formErrors.namaPenggerak && <p className="text-red-500 text-sm mt-1">{formErrors.namaPenggerak}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="deskripsiPenggerak" className="block text-lg font-medium text-gray-700 mb-2">
                            Deskripsi Penggerak
                        </label>
                        <textarea
                            id="deskripsiPenggerak"
                            name="deskripsiPenggerak"
                            value={formData.deskripsiPenggerak}
                            onChange={handleInputChange}
                            rows="3"
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsiPenggerak ? 'border-red-500' : ''}`}
                            placeholder="Masukkan deskripsi penggerak"
                        ></textarea>
                        {formErrors.deskripsiPenggerak && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiPenggerak}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
                            Foto Penggerak
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.file ? 'border-red-500' : ''}`}
                        />
                        {formErrors.file && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
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
        </>
    );
};

export default CreatePenggerakOkoce;