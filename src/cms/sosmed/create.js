import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateSosmed = () => {
    const { userId, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: '',
        link: '',
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
        link: '',
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

    const validateForm = async () => {
        let valid = true;
        const errors = {
            nama: '',
            link: '',
        };

        if (!formData.nama.trim()) {
            errors.nama = 'Nama harus diisi';
            valid = false;
        }

        const validNames = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube', 'tiktok'];
        if (!validNames.includes(formData.nama.toLowerCase())) {
            errors.nama = 'Nama sosmed tidak valid';
            valid = false;
        }

        if (!formData.link.trim()) {
            errors.link = 'Link harus diisi';
            valid = false;
        }

        if (valid) {
            try {
                const response = await axios.get('http://localhost:3000/sosmeds');
                const existingNames = response.data.data.map((item) => item.nama);

                if (existingNames.includes(formData.nama)) {
                    errors.nama = 'Nama sosmed tidak boleh duplikat';
                    valid = false;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                valid = false;
            }
        }

        setFormErrors(errors);
        return valid;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!await validateForm()) {
            return;
        }

        try {
            await axios.post(`http://localhost:3000/sosmeds/${userId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/admin/sosmed');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Create New Social Media</h1>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="nama" className="block text-lg font-medium text-gray-700 mb-2">
                        Nama
                    </label>
                    <select
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.nama ? 'border-red-500' : ''}`}
                    >
                        <option value="">Pilih Nama Sosmed</option>
                        <option value="facebook">Facebook</option>
                        <option value="twitter">Twitter</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="youtube">YouTube</option>
                        <option value="tiktok">TikTok</option>
                    </select>
                    {formErrors.nama && <p className="text-red-500 text-sm mt-1">{formErrors.nama}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="link" className="block text-lg font-medium text-gray-700 mb-2">
                        Link
                    </label>
                    <input
                        type="text"
                        id="link"
                        name="link"
                        value={formData.link}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.link ? 'border-red-500' : ''}`}
                        placeholder="Masukkan link"
                    />
                    {formErrors.link && <p className="text-red-500 text-sm mt-1">{formErrors.link}</p>}
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>

    );
};

export default CreateSosmed;