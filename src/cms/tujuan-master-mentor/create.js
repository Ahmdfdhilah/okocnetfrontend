import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const CreateTujuanMasterMentor = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        judul: '',
        deskripsi: '',
        file: null,
    });

    const [formErrors, setFormErrors] = useState({
        judul: '',
        deskripsi: '',
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
            judul: '',
            deskripsi: '',
            file: '',
        };

        if (!formData.judul.trim()) {
            errors.judul = 'Judul harus diisi';
            valid = false;
        }
        if (!formData.deskripsi.trim()) {
            errors.deskripsi = 'Deskripsi harus diisi';
            valid = false;
        }
        if (!formData.file) {
            errors.file = 'File harus diunggah';
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
                formDataToSend.append('judul', formData.judul);
                formDataToSend.append('deskripsi', formData.deskripsi);   
                await axios.post(`http://localhost:3000/tujuan-master-mentors`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/tujuan-master-mentor');
            } catch (error) {
                console.error('Error creating data:', error);
                setLoading(false);
            }
        });
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat tujuan master mentor ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Create New Tujuan Master Mentor</h1>
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
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
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judul ? 'border-red-500' : ''}`}
                        />
                        {formErrors.judul && <p className="text-red-500 text-sm mt-1">{formErrors.judul}</p>}
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
                            rows={4}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsi ? 'border-red-500' : ''}`}
                        />
                        {formErrors.deskripsi && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsi}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
                            Foto
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

export default CreateTujuanMasterMentor;