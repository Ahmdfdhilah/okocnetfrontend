import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateStrukturPengurus = () => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        nama: '',
        jabatan: '',
        tipe: 'founder',
        file: null,
        publishedAt: new Date().toISOString().slice(0, 16), 
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
        jabatan: '',
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
            nama: '',
            jabatan: '',
            file: '',
        };

        if (!formData.nama.trim()) {
            errors.nama = 'Nama harus diisi';
            valid = false;
        }
        if (!formData.jabatan.trim()) {
            errors.jabatan = 'Jabatan harus diisi';
            valid = false;
        }
        if (!formData.file) {
            errors.file = 'Foto harus diunggah';
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
            formDataToSend.append('nama', formData.nama);
            formDataToSend.append('jabatan', formData.jabatan);
            formDataToSend.append('publishedAt', formData.publishedAt);
            formDataToSend.append('tipe', formData.tipe);

            console.log(formData);
            await axios.post(`http://localhost:3000/struktur-penguruses/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/admin/struktur');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Struktur Pengurus</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                        Nama
                    </label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.nama ? 'border-red-500' : ''}`}
                    />
                    {formErrors.nama && <p className="text-red-500 text-sm mt-1">{formErrors.nama}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="jabatan" className="block text-sm font-medium text-gray-700">
                        Jabatan
                    </label>
                    <input
                        type="text"
                        id="jabatan"
                        name="jabatan"
                        value={formData.jabatan}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.jabatan ? 'border-red-500' : ''}`}
                    />
                    {formErrors.jabatan && <p className="text-red-500 text-sm mt-1">{formErrors.jabatan}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="tipe" className="block text-sm font-medium text-gray-700">
                        Tipe
                    </label>
                    <select
                        id="tipe"
                        name="tipe"
                        value={formData.tipe}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option value="founder">Founder</option>
                        <option value="eksekutif">Eksekutif</option>
                        <option value="harian">Harian</option>
                        <option value="kurasi">Kurasi</option>
                        <option value="pembina">Pembina</option>
                        <option value="direktorat">Direktorat</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Foto
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

export default CreateStrukturPengurus;