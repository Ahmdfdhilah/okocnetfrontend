import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateSosmed = () => {
    const { userId } = useContext(AuthContext);
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
            await axios.post(`http://localhost:3000/sosmeds/${userId}`, formData);
            navigate('/admin/sosmed');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Social Media</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
                        Nama
                    </label>
                    <select
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.nama ? 'border-red-500' : ''}`}
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
                <div className="mb-4">
                    <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                        Link
                    </label>
                    <input
                        type="text"
                        id="link"
                        name="link"
                        value={formData.link}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.link ? 'border-red-500' : ''}`}
                    />
                    {formErrors.link && <p className="text-red-500 text-sm mt-1">{formErrors.link}</p>}
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

export default CreateSosmed;