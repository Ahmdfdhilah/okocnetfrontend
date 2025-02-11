import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const UpdateMerchandise = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
    const { id } = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        judulMerchandise: '',
        deskripsiMerchandise: '',
        hargaMerchandise: '',
        stockMerchandise: '',
        linkMerchandise: '',
        publishedAt: new Date().toISOString().slice(0, 16),
        files: [],
        existingFiles: [],
    });

    const [formErrors, setFormErrors] = useState({
        judulMerchandise: '',
        deskripsiMerchandise: '',
        hargaMerchandise: '',
        stockMerchandise: '',
        linkMerchandise: '',
        files: '',
    });

    useEffect(() => {
        const fetchMerchandise = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/merchandises/${id}`);
                const { judulMerchandise, deskripsiMerchandise, hargaMerchandise, stockMerchandise, linkMerchandise, fotoMerchandise } = response.data;

                const existingFiles = fotoMerchandise.map(fileUrl => ({
                    name: fileUrl.substring(fileUrl.lastIndexOf('/') + 1),
                    url: fileUrl,
                }));

                setFormData({
                    judulMerchandise,
                    deskripsiMerchandise,
                    hargaMerchandise,
                    stockMerchandise,
                    linkMerchandise,
                    publishedAt: new Date().toISOString().slice(0, 16),
                    files: [],
                    existingFiles,
                });
            } catch (error) {
                console.error('Error fetching merchandise:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMerchandise();
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
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            files: files,
        });

        setFormData(prevState => ({
            ...prevState,
            existingFiles: [],
        }));

        setFormErrors({
            ...formErrors,
            files: '',
        });
    };

    const handleRemoveExistingFile = (index) => {
        const updatedExistingFiles = [...formData.existingFiles];
        updatedExistingFiles.splice(index, 1);
        setFormData({
            ...formData,
            existingFiles: updatedExistingFiles,
        });
    };

    const handleRemoveSelectedFile = (index) => {
        const updatedFiles = [...formData.files];
        updatedFiles.splice(index, 1);
        setFormData({
            ...formData,
            files: updatedFiles,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulMerchandise: '',
            deskripsiMerchandise: '',
            hargaMerchandise: '',
            stockMerchandise: '',
            linkMerchandise: '',
            files: '',
        };

        if (!formData.judulMerchandise.trim()) {
            errors.judulMerchandise = 'Judul Merchandise harus diisi';
            valid = false;
        }
        if (!formData.deskripsiMerchandise.trim()) {
            errors.deskripsiMerchandise = 'Deskripsi Merchandise harus diisi';
            valid = false;
        }
        if (!formData.stockMerchandise.trim()) {
            errors.stockMerchandise = 'Stock Merchandise harus diisi';
            valid = false;
        }
        if (!formData.linkMerchandise.trim()) {
            errors.linkMerchandise = 'Link Merchandise harus diisi';
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
                formDataToSend.append('judulMerchandise', formData.judulMerchandise);
                formDataToSend.append('deskripsiMerchandise', formData.deskripsiMerchandise);
                formDataToSend.append('hargaMerchandise', formData.hargaMerchandise);
                formDataToSend.append('stockMerchandise', formData.stockMerchandise);
                formDataToSend.append('linkMerchandise', formData.linkMerchandise);
                formDataToSend.append('publishedAt', formData.publishedAt);

                // Append new files
                if (formData.files.length > 0) {
                    formData.files.forEach((file) => {
                        formDataToSend.append('files', file);
                    });
                }

                // Append existing file URLs
                if (formData.existingFiles.length > 0 && formData.files.length === 0) {
                    formData.existingFiles.forEach((file) => {
                        formDataToSend.append('fotoMerchandise', file.url);
                    });
                }

                const response = await axios.put(`http://localhost:3000/merchandises/${id}/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/merchandise');
            } catch (error) {
                console.error('Error updating merchandise:', error);
            }
        })
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin mengedit merchandise ini?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h2 className="text-4xl font-bold mb-8 text-center">Update Merchandise</h2>
                <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md" encType="multipart/form-data">
                    {/* Judul Merchandise */}
                    <div className="mb-4">
                        <label htmlFor="judulMerchandise" className="block text-sm font-medium text-gray-700">
                            Judul Merchandise
                        </label>
                        <input
                            type="text"
                            id="judulMerchandise"
                            name="judulMerchandise"
                            value={formData.judulMerchandise}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judulMerchandise ? 'border-red-500' : ''}`}
                        />
                        {formErrors.judulMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.judulMerchandise}</p>}
                    </div>

                    {/* Deskripsi Merchandise */}
                    <div className="mb-4">
                        <label htmlFor="deskripsiMerchandise" className="block text-sm font-medium text-gray-700">
                            Deskripsi Merchandise
                        </label>
                        <textarea
                            id="deskripsiMerchandise"
                            name="deskripsiMerchandise"
                            value={formData.deskripsiMerchandise}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.deskripsiMerchandise ? 'border-red-500' : ''}`}
                        />
                        {formErrors.deskripsiMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiMerchandise}</p>}
                    </div>

                    {/* Harga Merchandise */}
                    <div className="mb-4">
                        <label htmlFor="hargaMerchandise" className="block text-sm font-medium text-gray-700">
                            Harga Merchandise
                        </label>
                        <input
                            type="number"
                            id="hargaMerchandise"
                            name="hargaMerchandise"
                            value={formData.hargaMerchandise}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.hargaMerchandise ? 'border-red-500' : ''}`}
                        />
                        {formErrors.hargaMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.hargaMerchandise}</p>}
                    </div>

                    {/* Stock Merchandise */}
                    <div className="mb-4">
                        <label htmlFor="stockMerchandise" className="block text-sm font-medium text-gray-700">
                            Stock Merchandise
                        </label>
                        <input
                            type="number"
                            id="stockMerchandise"
                            name="stockMerchandise"
                            value={formData.stockMerchandise}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.stockMerchandise ? 'border-red-500' : ''}`}
                        />
                        {formErrors.stockMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.stockMerchandise}</p>}
                    </div>

                    {/* Link Merchandise */}
                    <div className="mb-4">
                        <label htmlFor="linkMerchandise" className="block text-sm font-medium text-gray-700">
                            Link Merchandise
                        </label>
                        <input
                            type="text"
                            id="linkMerchandise"
                            name="linkMerchandise"
                            value={formData.linkMerchandise}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.linkMerchandise ? 'border-red-500' : ''}`}
                        />
                        {formErrors.linkMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.linkMerchandise}</p>}
                    </div>

                    {/* File input for new uploads */}
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                            Foto Merchandise
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            multiple
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.files ? 'border-red-500' : ''}`}
                        />
                        {formErrors.files && <p className="text-red-500 text-sm mt-1">{formErrors.files}</p>}
                    </div>

                    {/* Display selected files for upload */}
                    {formData.files.length > 0 && (
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">File yang akan diunggah:</p>
                            <ul className="list-disc list-inside">
                                {formData.files.map((file, index) => (
                                    <li key={index} className="flex items-center justify-between mt-1">
                                        <span>{file.name}</span>
                                        <button
                                            type="button"
                                            className="ml-2 text-sm text-red-500"
                                            onClick={() => handleRemoveSelectedFile(index)}
                                        >
                                            Hapus
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {formData.existingFiles.length > 0 && (
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Foto yang sudah ada:</p>
                            <ul className="list-disc list-inside">
                                {formData.existingFiles.map((file, index) => (
                                    <li key={index} className="flex items-center justify-between mt-1">
                                        {file.url ? (
                                            <img
                                                src={`http://localhost:3000${file.url}`}
                                                alt={file.name}
                                                className="w-20 h-20 object-cover mr-2"
                                            />
                                        ) : (
                                            <span>{file.name}</span>
                                        )}
                                        <button
                                            type="button"
                                            className="ml-8 text-sm text-red-500"
                                            onClick={() => handleRemoveExistingFile(index)}
                                        >
                                            Hapus
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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

export default UpdateMerchandise;