import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateMitra = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        nama: '',
        file: null,
        publishedAt: '',
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
    });

    useEffect(() => {
        const fetchMitra = async () => {
            try {
                const response = await axios.get(`https://okocenet-72f35a89c2ef.herokuapp.com/mitras/${id}`);
                const mitra = response.data;
                setFormData({
                    nama: mitra.nama,
                    file: null,
                    publishedAt: mitra.publishedAt,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchMitra();
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
            nama: '',
            deskripsi: '',
            file: '',
        };

        if (!formData.nama.trim()) {
            errors.nama = 'Nama harus diisi';
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
            formDataToSend.append('nama', formData.nama);
            formDataToSend.append('publishedAt', formData.publishedAt);

            if (formData.file) {
                formDataToSend.append('file', formData.file);
            }

            await axios.put(`https://okocenet-72f35a89c2ef.herokuapp.com/mitras/${id}/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/mitra');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Update Mitra</h2>
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
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMitra;