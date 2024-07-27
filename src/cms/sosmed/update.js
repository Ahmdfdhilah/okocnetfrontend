import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const UpdateSosmed = () => {
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
        link: '',
        file: null
    });

    const [formErrors, setFormErrors] = useState({
        link: '',
    });

    useEffect(() => {
        const fetchSosmed = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/sosmeds/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
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

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            foto: e.target.files[0],
        });
        setFormErrors({
            ...formErrors,
            foto: '',
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
        setModalAction(() => async () => {
            try {
                setLoading(true);
                const formDataToSend = new FormData();
                formDataToSend.append('file', formData.foto);
                formDataToSend.append('nama', formData.nama);
                formDataToSend.append('link', formData.link);
                await axios.put(`http://localhost:3000/sosmeds/${id}/${userId}`, formDataToSend, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": 'multipart/form-data'
                    }
                });
                navigate('/admin/sosmed');
            } catch (error) {
                console.error('Error updating data:', error);
            }
        })
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin mengedit sosmed ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Update Social Media</h1>
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
                            <option value="whatsapp">Whatsapp</option>
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
                    <div className="mb-6">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
                            Foto Icon
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.foto ? 'border-red-500' : ''}`}
                        />
                        {formErrors.file && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
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

export default UpdateSosmed;