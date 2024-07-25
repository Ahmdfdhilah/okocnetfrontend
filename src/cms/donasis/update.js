import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateDonasi = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
    const { id } = useParams();

    const [formData, setFormData] = useState({
        judulDonasi: '',
        deskripsiDonasi: '',
        file: null,
    });

    const [formErrors, setFormErrors] = useState({
        judulDonasi: '',
        deskripsiDonasi: '',
        file: '',
    });

    useEffect(() => {
        const fetchDonasi = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/donasis/${id}`);
                const { judulDonasi, deskripsiDonasi } = response.data;
                setFormData({
                    judulDonasi,
                    deskripsiDonasi,
                    file: null,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDonasi();
    }, [id]);


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

            await axios.put(`http://localhost:3000/donasis/${id}/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/donasi');
        } catch (error) {
            console.error('Error updating donasi:', error);
        }
    };

    return (
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Update Donasi</h1>
            <form onSubmit={onSubmit} encType="multipart/form-data" className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="judulDonasi" className="block text-lg font-medium text-gray-700 mb-2">
                        Judul Donasi
                    </label>
                    <input
                        type="text"
                        id="judulDonasi"
                        name="judulDonasi"
                        value={formData.judulDonasi}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judulDonasi ? 'border-red-500' : ''}`}
                        placeholder="Masukkan judul donasi"
                    />
                    {formErrors.judulDonasi && <p className="text-red-500 text-sm mt-1">{formErrors.judulDonasi}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="deskripsiDonasi" className="block text-lg font-medium text-gray-700 mb-2">
                        Deskripsi Donasi
                    </label>
                    <textarea
                        id="deskripsiDonasi"
                        name="deskripsiDonasi"
                        value={formData.deskripsiDonasi}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.deskripsiDonasi ? 'border-red-500' : ''}`}
                        rows="3"
                        placeholder="Masukkan deskripsi donasi"
                    />
                    {formErrors.deskripsiDonasi && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiDonasi}</p>}
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

export default UpdateDonasi;