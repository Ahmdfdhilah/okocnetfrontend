import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateReview = () => {
    const { userId } = useContext(AuthContext);
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
            await axios.post(`http://localhost:3000/reviews/${userId}`, formData);
            navigate('/admin/review');
        } catch (error) {
            console.error('Error creating review:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Review</h2>
            <form onSubmit={onSubmit}>
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
                    <label htmlFor="posisi" className="block text-sm font-medium text-gray-700">
                        Posisi
                    </label>
                    <input
                        type="text"
                        id="posisi"
                        name="posisi"
                        value={formData.posisi}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.posisi ? 'border-red-500' : ''}`}
                    />
                    {formErrors.posisi && <p className="text-red-500 text-sm mt-1">{formErrors.posisi}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700">
                        Deskripsi
                    </label>
                    <textarea
                        id="deskripsi"
                        name="deskripsi"
                        rows="4"
                        value={formData.deskripsi}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsi ? 'border-red-500' : ''}`}
                    ></textarea>
                    {formErrors.deskripsi && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsi}</p>}
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

export default CreateReview;