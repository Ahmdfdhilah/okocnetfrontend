import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const UpdateTotal = () => {
    const { userId, token } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

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
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/totals/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
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

        if (!formData.total) {
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

        setModalAction(() => async () => {
            try {
                setLoading(true);
                await axios.put(`http://localhost:3000/totals/${id}/${userId}`, { total: formData.total }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                navigate('/admin/total');
            } catch (error) {
                console.error('Error updating data:', error);
            }
        })
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin mengedit total ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Update Total</h1>
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
                            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
            <ConfirmationModal
                show={modalShow}
                title={modalTitle}
                message={modalMessage}
                onConfirm={() => {
                    if (modalAction) {
                        modalAction();
                    }
                    setModalShow(false);
                }}
                onCancel={() => setModalShow(false)}
            />
        </>

    );
};

export default UpdateTotal;