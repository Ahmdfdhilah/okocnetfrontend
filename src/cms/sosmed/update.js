import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateSosmed = () => {
    const { userId } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: '',
        link: '',
    });

    const [formErrors, setFormErrors] = useState({
        link: '',
    });

    useEffect(() => {
        const fetchSosmed = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/sosmeds/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSosmed();
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

    const validateForm = () => {
        let valid = true;
        const errors = {
            link: '',
        };

        if (!formData.link.trim()) {
            errors.link = 'Link harus diisi';
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
            await axios.put(`http://localhost:3000/sosmeds/${id}/${userId}`, { link: formData.link });
            navigate('/admin/sosmed');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Update Social Media</h2>
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
                        readOnly
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm bg-gray-100 cursor-not-allowed"
                    />
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
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateSosmed;