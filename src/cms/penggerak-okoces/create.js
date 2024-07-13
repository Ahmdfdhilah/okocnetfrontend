import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreatePenggerakOkoce = () => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);

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

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('file', formData.file);
            formDataToSend.append('namaPenggerak', formData.namaPenggerak);
            formDataToSend.append('deskripsiPenggerak', formData.deskripsiPenggerak);
            formDataToSend.append('publishedAt', formData.publishedAt);

            await axios.post(`https://sole-debi-crytonexa-deb22e0b.koyeb.app/penggerak-okoces/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/admin/penggerak-okoce');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Penggerak Okoce</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label htmlFor="namaPenggerak" className="block text-sm font-medium text-gray-700">
                        Nama Penggerak
                    </label>
                    <input
                        type="text"
                        id="namaPenggerak"
                        name="namaPenggerak"
                        value={formData.namaPenggerak}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.namaPenggerak ? 'border-red-500' : ''}`}
                    />
                    {formErrors.namaPenggerak && <p className="text-red-500 text-sm mt-1">{formErrors.namaPenggerak}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="deskripsiPenggerak" className="block text-sm font-medium text-gray-700">
                        Deskripsi Penggerak
                    </label>
                    <textarea
                        id="deskripsiPenggerak"
                        name="deskripsiPenggerak"
                        value={formData.deskripsiPenggerak}
                        onChange={handleInputChange}
                        rows="3"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsiPenggerak ? 'border-red-500' : ''}`}
                    ></textarea>
                    {formErrors.deskripsiPenggerak && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiPenggerak}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Foto Penggerak
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.file ? 'border-red-500' : ''}`}
                    />
                    {formErrors.file && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePenggerakOkoce;