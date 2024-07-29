import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const UpdateThementor = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    const [formData, setFormData] = useState({
        judul: '',
        deskripsi: [''],
        files: [],
    });

    const [formErrors, setFormErrors] = useState({
        judul: '',
        deskripsi: '',
        files: '',
    });

    useEffect(() => {
        const fetchThementor = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/thementors/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const { judul, deskripsi } = response.data;

                const formattedDeskripsi = deskripsi.map(item => item.str);

                setFormData({
                    judul,
                    deskripsi: formattedDeskripsi,
                    files: [], // Clear previous files
                });
                setLoadingData(false);
            } catch (error) {
                console.error('Error fetching Thementor data:', error);
                setLoadingData(false);
            }
        };

        fetchThementor();
    }, [id, token]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        setFormErrors(prev => ({
            ...prev,
            [name]: '',
        }));
    };

    const handleDeskripsiChange = (index, e) => {
        const newDeskripsi = [...formData.deskripsi];
        newDeskripsi[index] = e.target.value;
        setFormData(prev => ({
            ...prev,
            deskripsi: newDeskripsi,
        }));
    };

    const handleAddDeskripsi = () => {
        setFormData(prev => ({
            ...prev,
            deskripsi: [...prev.deskripsi, ''],
        }));
    };

    const handleRemoveDeskripsi = (index) => {
        const newDeskripsi = formData.deskripsi.filter((_, i) => i !== index);
        setFormData(prev => ({
            ...prev,
            deskripsi: newDeskripsi,
        }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({
            ...prev,
            files: files,
        }));
        setFormErrors(prev => ({
            ...prev,
            files: '',
        }));
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = [...formData.files];
        updatedFiles.splice(index, 1);
        setFormData(prev => ({
            ...prev,
            files: updatedFiles,
        }));
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judul: '',
            deskripsi: '',
            files: '',
        };

        if (!formData.judul.trim()) {
            errors.judul = 'Judul harus diisi';
            valid = false;
        }
        if (formData.deskripsi.some(desc => !desc.trim())) {
            errors.deskripsi = 'Deskripsi tidak boleh kosong';
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
                formDataToSend.append('judul', formData.judul);

                formData.deskripsi.forEach((desc, index) => {
                    formDataToSend.append(`deskripsi[${index}]`, desc);
                });

                formData.files.forEach((file) => {
                    formDataToSend.append('files', file);
                });

                await axios.put(`http://localhost:3000/thementors/${id}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                });

                navigate('/admin/thementor');
            } catch (error) {
                console.error('Error updating Thementor:', error);
                setLoading(false);
            }
        });
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin memperbarui Thementor ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            {loadingData ? (
                <Loading />
            ) : (
                <div className="container mx-auto py-10 mt-32">
                    <h1 className="text-4xl font-bold mb-8 text-center">Update Thementor</h1>
                    <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md" encType="multipart/form-data">
                        {/* Judul */}
                        <div className="mb-6">
                            <label htmlFor="judul" className="block text-lg font-medium text-gray-700 mb-2">
                                Judul
                            </label>
                            <input
                                type="text"
                                id="judul"
                                name="judul"
                                value={formData.judul}
                                onChange={handleInputChange}
                                className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judul ? 'border-red-500' : ''}`}
                                placeholder="Masukkan judul"
                            />
                            {formErrors.judul && <p className="text-red-500 text-sm mt-1">{formErrors.judul}</p>}
                        </div>

                        {/* Deskripsi */}
                        {formData.deskripsi.map((desc, index) => (
                            <div key={index} className="mb-6">
                                <label htmlFor={`deskripsi_${index}`} className="block text-lg font-medium text-gray-700 mb-2">
                                    Deskripsi {index + 1}
                                </label>
                                <textarea
                                    id={`deskripsi_${index}`}
                                    name={`deskripsi_${index}`}
                                    value={desc}
                                    onChange={(e) => handleDeskripsiChange(index, e)}
                                    className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.deskripsi ? 'border-red-500' : ''}`}
                                    rows="4"
                                    placeholder="Masukkan deskripsi"
                                ></textarea>
                                <button type="button" onClick={() => handleRemoveDeskripsi(index)} className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Hapus Deskripsi</button>
                            </div>
                        ))}
                        <button type="button" onClick={handleAddDeskripsi} className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Tambah Deskripsi</button>

                        {/* Dokumentasi */}
                        <div className="mb-6">
                            <label htmlFor="files" className="block text-lg font-medium text-gray-700 mb-2">
                                Dokumentasi
                            </label>
                            <input
                                type="file"
                                id="files"
                                name="files"
                                accept="image/*"
                                onChange={handleFileChange}
                                multiple
                                className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.files ? 'border-red-500' : ''}`}
                            />
                            {formErrors.files && <p className="text-red-500 text-sm mt-1">{formErrors.files}</p>}
                        </div>

                        {/* List Dokumentasi */}
                        {formData.files.length > 0 && (
                            <div className="mb-6">
                                <p className="text-lg font-medium text-gray-700 mb-2">Dokumentasi yang akan diunggah:</p>
                                <ul className="list-disc list-inside">
                                    {formData.files.map((file, index) => (
                                        <li key={index} className="flex items-center justify-between mt-1">
                                            <span>{file.name}</span>
                                            <button
                                                type="button"
                                                className="ml-2 text-sm text-red-500"
                                                onClick={() => handleRemoveFile(index)}
                                            >
                                                Hapus
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Perbarui
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <ConfirmationModal
                show={modalShow}
                title={modalTitle}
                message={modalMessage}
                onConfirm={modalAction}
                onCancel={() => setModalShow(false)}
            />
        </>
    );
};

export default UpdateThementor;
