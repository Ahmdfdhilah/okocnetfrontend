import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateMerchandise = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        judulMerchandise: '',
        deskripsiMerchandise: '',
        hargaMerchandise: '',
        stockMerchandise: '',
        linkMerchandise: '',
        publishedAt: new Date().toISOString().slice(0, 16),
        files: [],
    });

    const [formErrors, setFormErrors] = useState({
        judulMerchandise: '',
        deskripsiMerchandise: '',
        hargaMerchandise: '',
        stockMerchandise: '',
        linkMerchandise: '',
        files: '',
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

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            files: files,
        });
        setFormErrors({
            ...formErrors,
            files: '',
        });
    };

    const handleRemoveFile = (index) => {
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
        if (!formData.hargaMerchandise.trim()) {
            errors.hargaMerchandise = 'Harga Merchandise harus diisi';
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
        if (formData.files.length === 0) {
            errors.files = 'Foto Merchandise harus diunggah';
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
            const formDataToSend = new FormData();
            formDataToSend.append('judulMerchandise', formData.judulMerchandise);
            formDataToSend.append('deskripsiMerchandise', formData.deskripsiMerchandise);
            formDataToSend.append('hargaMerchandise', formData.hargaMerchandise);
            formDataToSend.append('stockMerchandise', formData.stockMerchandise);
            formDataToSend.append('linkMerchandise', formData.linkMerchandise);
            formDataToSend.append('publishedAt', formData.publishedAt);

            formData.files.forEach((file) => {
                formDataToSend.append('files', file);
            });

            const response = await axios.post(`http://localhost:3000/merchandises/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/merchandise');
        } catch (error) {
            console.error('Error creating merchandise:', error);
        }
    };

    return (
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Create New Merchandise</h1>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md" encType="multipart/form-data">
                {/* Judul Merchandise */}
                <div className="mb-6">
                    <label htmlFor="judulMerchandise" className="block text-lg font-medium text-gray-700 mb-2">
                        Judul Merchandise
                    </label>
                    <input
                        type="text"
                        id="judulMerchandise"
                        name="judulMerchandise"
                        value={formData.judulMerchandise}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judulMerchandise ? 'border-red-500' : ''}`}
                        placeholder="Masukkan judul merchandise"
                    />
                    {formErrors.judulMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.judulMerchandise}</p>}
                </div>

                {/* Deskripsi Merchandise */}
                <div className="mb-6">
                    <label htmlFor="deskripsiMerchandise" className="block text-lg font-medium text-gray-700 mb-2">
                        Deskripsi Merchandise
                    </label>
                    <textarea
                        id="deskripsiMerchandise"
                        name="deskripsiMerchandise"
                        value={formData.deskripsiMerchandise}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.deskripsiMerchandise ? 'border-red-500' : ''}`}
                        rows="4"
                        placeholder="Masukkan deskripsi merchandise"
                    ></textarea>
                    {formErrors.deskripsiMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiMerchandise}</p>}
                </div>

                {/* Harga Merchandise */}
                <div className="mb-6">
                    <label htmlFor="hargaMerchandise" className="block text-lg font-medium text-gray-700 mb-2">
                        Harga Merchandise
                    </label>
                    <input
                        type="text"
                        id="hargaMerchandise"
                        name="hargaMerchandise"
                        value={formData.hargaMerchandise}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.hargaMerchandise ? 'border-red-500' : ''}`}
                        placeholder="Masukkan harga merchandise"
                    />
                    {formErrors.hargaMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.hargaMerchandise}</p>}
                </div>

                {/* Stock Merchandise */}
                <div className="mb-6">
                    <label htmlFor="stockMerchandise" className="block text-lg font-medium text-gray-700 mb-2">
                        Stock Merchandise
                    </label>
                    <input
                        type="text"
                        id="stockMerchandise"
                        name="stockMerchandise"
                        value={formData.stockMerchandise}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.stockMerchandise ? 'border-red-500' : ''}`}
                        placeholder="Masukkan stock merchandise"
                    />
                    {formErrors.stockMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.stockMerchandise}</p>}
                </div>

                {/* Link Merchandise */}
                <div className="mb-6">
                    <label htmlFor="linkMerchandise" className="block text-lg font-medium text-gray-700 mb-2">
                        Link Merchandise
                    </label>
                    <input
                        type="text"
                        id="linkMerchandise"
                        name="linkMerchandise"
                        value={formData.linkMerchandise}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.linkMerchandise ? 'border-red-500' : ''}`}
                        placeholder="Masukkan link merchandise"
                    />
                    {formErrors.linkMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.linkMerchandise}</p>}
                </div>

                {/* Foto Merchandise */}
                <div className="mb-6">
                    <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
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

                {/* List Foto Merchandise */}
                {formData.files.length > 0 && (
                    <div className="mb-6">
                        <p className="text-lg font-medium text-gray-700 mb-2">Foto yang akan diunggah:</p>
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
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                    >
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateMerchandise;
