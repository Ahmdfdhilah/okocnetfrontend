import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateTotal = () => {
    const { userId, token } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: '',
        total: '',
    });

    const [formErrors, setFormErrors] = useState({
        total: '',
    });

    useEffect(() => {
        const fetchTotal = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/totals/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTotal();
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
            total: '',
        };

        if (!formData.total.trim() || isNaN(formData.total)) {
            errors.total = 'Total harus diisi dengan angka';
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
            await axios.put(`http://localhost:3000/totals/${id}/${userId}`, { total: formData.total }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            navigate('/admin/total');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="container mx-auto py-10 mt-32">
        <h1 className="text-4xl font-bold mb-8 text-center">Update New Total</h1>
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
                    <option value="">Pilih Nama</option>
                    <option value="umkm">UMKM</option>
                    <option value="penggerak">Penggerak</option>
                    <option value="usaha">Usaha</option>
                    <option value="swasta">Swasta</option>
                    <option value="pemerintah">Pemerintah</option>
                    <option value="pendidikan">Pendidikan</option>
                </select>
                {formErrors.nama && <p className="text-red-500 text-sm mt-1">{formErrors.nama}</p>}
            </div>
    
            <div className="mb-6">
                <label htmlFor="total" className="block text-lg font-medium text-gray-700 mb-2">
                    Total
                </label>
                <input
                    type="text"
                    id="total"
                    name="total"
                    value={formData.total}
                    onChange={handleInputChange}
                    className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.total ? 'border-red-500' : ''}`}
                />
                {formErrors.total && <p className="text-red-500 text-sm mt-1">{formErrors.total}</p>}
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

export default UpdateTotal;