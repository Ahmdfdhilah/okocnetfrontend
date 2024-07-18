import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateReview = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: '',
        posisi: '',
        deskripsi: '',
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
        posisi: '',
        deskripsi: '',
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

    const validateForm = () => {
        let valid = true;
        const errors = {
            nama: '',
            posisi: '',
            deskripsi: '',
        };

        if (!formData.nama.trim()) {
            errors.nama = 'Nama harus diisi';
            valid = false;
        }

        if (!formData.posisi.trim()) {
            errors.posisi = 'Posisi harus diisi';
            valid = false;
        }

        if (!formData.deskripsi.trim()) {
            errors.deskripsi = 'Deskripsi harus diisi';
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
            await axios.post(`https://okocenet-72f35a89c2ef.herokuapp.com/reviews/${userId}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/admin/review');
        } catch (error) {
            console.error('Error creating review:', error);
        }
    };

    return (
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Create New Review</h1>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="nama" className="block text-lg font-medium text-gray-700 mb-2">
                        Nama
                    </label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.nama ? 'border-red-500' : ''}`}
                        placeholder="Masukkan nama"
                    />
                    {formErrors.nama && <p className="text-red-500 text-sm mt-1">{formErrors.nama}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="posisi" className="block text-lg font-medium text-gray-700 mb-2">
                        Posisi
                    </label>
                    <input
                        type="text"
                        id="posisi"
                        name="posisi"
                        value={formData.posisi}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.posisi ? 'border-red-500' : ''}`}
                        placeholder="Masukkan posisi"
                    />
                    {formErrors.posisi && <p className="text-red-500 text-sm mt-1">{formErrors.posisi}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="deskripsi" className="block text-lg font-medium text-gray-700 mb-2">
                        Komentar
                    </label>
                    <textarea
                        id="deskripsi"
                        name="deskripsi"
                        rows="4"
                        value={formData.deskripsi}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsi ? 'border-red-500' : ''}`}
                        placeholder="Masukkan deskripsi"
                    ></textarea>
                    {formErrors.deskripsi && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsi}</p>}
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

export default CreateReview;