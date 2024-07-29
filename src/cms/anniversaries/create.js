import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const CreateAnniversary = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        judul: '',
        tahun: '',
        deskripsi: '',
        videoLink: '',
    });

    const [formErrors, setFormErrors] = useState({
        judul: '',
        tahun: '',
        deskripsi: '',
        videoLink: '',
    });

    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const validateForm = () => {
        let valid = true;
        const errors = {
            judul: '',
            deskripsi: '',
            videoLink: '',
        };

        if (!formData.judul.trim()) {
            errors.judul = 'Judul harus diisi';
            valid = false;
        }
        if (!formData.year) {
            errors.judul = 'Tahun harus diisi';
            valid = false;
        }
        if (!formData.deskripsi.trim()) {
            errors.deskripsi = 'Deskripsi harus diisi';
            valid = false;
        }
        if (!formData.videoLink.trim()) {
            errors.videoLink = 'Link video harus diisi';
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
                await axios.post('http://localhost:3000/anniversaries', formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/anniversary');
            } catch (error) {
                console.error('Error creating anniversary:', error);
            } finally {
                setLoading(false);
            }
        });

        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat anniversary baru ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Create New Anniversary</h1>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    <div className="mb-6">
                        <label htmlFor="judul" className="block text-lg font-medium text-gray-700 mb-2">
                            Judul
                        </label>
                        <input
                            type="text"
                            id="judul"
                            name="judul"
                            value={formData.judul}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judul ? 'border-red-500' : ''}`}
                            placeholder="Masukkan judul anniversary"
                        />
                        {formErrors.judul && <p className="text-red-500 text-sm mt-1">{formErrors.judul}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="year" className="block text-lg font-medium text-gray-700 mb-2">
                            Tahun
                        </label>
                        <input
                            type="number"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judul ? 'border-red-500' : ''}`}
                            placeholder="Masukkan tahun anniversary"
                        />
                        {formErrors.year && <p className="text-red-500 text-sm mt-1">{formErrors.year}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="deskripsi" className="block text-lg font-medium text-gray-700 mb-2">
                            Deskripsi
                        </label>
                        <textarea
                            id="deskripsi"
                            name="deskripsi"
                            value={formData.deskripsi}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.deskripsi ? 'border-red-500' : ''}`}
                            rows="3"
                            placeholder="Masukkan deskripsi anniversary"
                        />
                        {formErrors.deskripsi && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsi}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="videoLink" className="block text-lg font-medium text-gray-700 mb-2">
                            Link Video YouTube
                        </label>
                        <input
                            type="text"
                            id="videoLink"
                            name="videoLink"
                            value={formData.videoLink}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.videoLink ? 'border-red-500' : ''}`}
                            placeholder="Masukkan link video YouTube"
                        />
                        {formErrors.videoLink && <p className="text-red-500 text-sm mt-1">{formErrors.videoLink}</p>}
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                            disabled={loading}
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
            </div>
        </>
    );
};

export default CreateAnniversary;