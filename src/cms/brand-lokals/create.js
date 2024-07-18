import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateBrandLokal = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        judulBrand: '',
        deskripsiBrand: '',
        file: null,
        publishedAt: new Date().toISOString().slice(0, 16),
    });

    const [formErrors, setFormErrors] = useState({
        judulBrand: '',
        deskripsiBrand: '',
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
            judulBrand: '',
            deskripsiBrand: '',
            file: '',
        };

        if (!formData.judulBrand.trim()) {
            errors.judulBrand = 'Judul brand harus diisi';
            valid = false;
        }
        if (!formData.deskripsiBrand.trim()) {
            errors.deskripsiBrand = 'Deskripsi brand harus diisi';
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
            formDataToSend.append('judulBrand', formData.judulBrand);
            formDataToSend.append('deskripsiBrand', formData.deskripsiBrand);
            formDataToSend.append('publishedAt', formData.publishedAt);

            await axios.post(`https://okocenet-72f35a89c2ef.herokuapp.com/brand-lokals/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/brand-lokal');
        } catch (error) {
            console.error('Error creating brand lokal:', error);
        }
    };

    return (
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Create New Brand Lokal</h1>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="judulBrand" className="block text-lg font-medium text-gray-700 mb-2">
                        Judul Brand
                    </label>
                    <input
                        type="text"
                        id="judulBrand"
                        name="judulBrand"
                        value={formData.judulBrand}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judulBrand ? 'border-red-500' : ''}`}
                        placeholder="Masukkan judul brand"
                    />
                    {formErrors.judulBrand && <p className="text-red-500 text-sm mt-1">{formErrors.judulBrand}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="deskripsiBrand" className="block text-lg font-medium text-gray-700 mb-2">
                        Deskripsi Brand
                    </label>
                    <textarea
                        id="deskripsiBrand"
                        name="deskripsiBrand"
                        value={formData.deskripsiBrand}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.deskripsiBrand ? 'border-red-500' : ''}`}
                        rows="4"
                        placeholder="Masukkan deskripsi brand"
                    ></textarea>
                    {formErrors.deskripsiBrand && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiBrand}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
                        File
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.file ? 'border-red-500' : ''}`}
                    />
                    {formErrors.file && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
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
        </div>
    );
};

export default CreateBrandLokal;