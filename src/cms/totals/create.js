import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateTotal = () => {
    const { userId } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: '',
        total: '',
    });

    const [formErrors, setFormErrors] = useState({
        nama: '',
        total: '',
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
            total: '',
        };

        if (!formData.nama.trim()) {
            errors.nama = 'Nama harus diisi';
            valid = false;
        }

        if (!['umkm', 'penggerak', 'usaha', 'swasta', 'pemerintah', 'pendidikan'].includes(formData.nama)) {
            errors.nama = 'Nama tidak valid';
            valid = false;
        }

        if (!formData.total.trim() || isNaN(formData.total)) {
            errors.total = 'Total harus diisi dengan angka';
            valid = false;
        }

        if (valid) {
            try {
                const response = await axios.get('http://localhost:3000/totals');
                const existingNames = response.data.data.map((item) => item.nama);

                if (existingNames.includes(formData.nama)) {
                    errors.nama = 'Nama tidak boleh duplikat';
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
            await axios.post(`http://localhost:3000/totals/${userId}`, formData);
            navigate('/admin/total');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Total</h2>
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
                <div className="mb-4">
                    <label htmlFor="total" className="block text-sm font-medium text-gray-700">
                        Total
                    </label>
                    <input
                        type="text"
                        id="total"
                        name="total"
                        value={formData.total}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.total ? 'border-red-500' : ''}`}
                    />
                    {formErrors.total && <p className="text-red-500 text-sm mt-1">{formErrors.total}</p>}
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

export default CreateTotal;