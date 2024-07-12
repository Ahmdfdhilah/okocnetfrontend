import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateDonasi = () => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        judulDonasi: '',
        deskripsiDonasi: '',
        file: null,
        publishedAt: new Date().toISOString().slice(0, 16),
    });

    const [formErrors, setFormErrors] = useState({
        judulDonasi: '',
        deskripsiDonasi: '',
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
            judulDonasi: '',
            deskripsiDonasi: '',
            file: '',
        };

        if (!formData.judulDonasi.trim()) {
            errors.judulDonasi = 'Judul donasi harus diisi';
            valid = false;
        }
        if (!formData.deskripsiDonasi.trim()) {
            errors.deskripsiDonasi = 'Deskripsi donasi harus diisi';
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

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('file', formData.file);
            formDataToSend.append('judulDonasi', formData.judulDonasi);
            formDataToSend.append('deskripsiDonasi', formData.deskripsiDonasi);
            formDataToSend.append('publishedAt', formData.publishedAt);

            await axios.post(`http://localhost:3000/donasis/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/admin/donasi');
        } catch (error) {
            console.error('Error creating donasi:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Donasi</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label htmlFor="judulDonasi" className="block text-sm font-medium text-gray-700">
                        Judul Donasi
                    </label>
                    <input
                        type="text"
                        id="judulDonasi"
                        name="judulDonasi"
                        value={formData.judulDonasi}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulDonasi ? 'border-red-500' : ''}`}
                    />
                    {formErrors.judulDonasi && <p className="text-red-500 text-sm mt-1">{formErrors.judulDonasi}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="deskripsiDonasi" className="block text-sm font-medium text-gray-700">
                        Deskripsi Donasi
                    </label>
                    <textarea
                        id="deskripsiDonasi"
                        name="deskripsiDonasi"
                        value={formData.deskripsiDonasi}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsiDonasi ? 'border-red-500' : ''}`}
                    />
                    {formErrors.deskripsiDonasi && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiDonasi}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        File
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

export default CreateDonasi;