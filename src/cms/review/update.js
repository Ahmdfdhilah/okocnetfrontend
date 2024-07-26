import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const UpdateReview = () => {
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
        posisi: '',
        deskripsi: '',
    });

    const [formErrors, setFormErrors] = useState({
        deskripsi: '',
    });

    useEffect(() => {
        const fetchReview = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/reviews/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReview();
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
            deskripsi: '',
        };

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

        setModalAction(() => async () => {
            try {
                setLoading(true);
                await axios.put(`http://localhost:3000/reviews/${id}/${userId}`, formData, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });
                navigate('/admin/review');
            } catch (error) {
                console.error('Error updating review:', error);
                setLoading(false);
            }
        })
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin mengedit review ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Update Review</h1>
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

export default UpdateReview;