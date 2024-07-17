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

            const response = await axios.post(`https://okocenet-72f35a89c2ef.herokuapp.com/merchandises/${userId}`, formDataToSend, {
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
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Merchandise</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
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
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulMerchandise ? 'border-red-500' : ''}`}
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
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsiMerchandise ? 'border-red-500' : ''}`}
                    />
                    {formErrors.deskripsiMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiMerchandise}</p>}
                </div>

                {/* Harga Merchandise */}
                <div className="mb-4">
                    <label htmlFor="hargaMerchandise" className="block text-sm font-medium text-gray-700">
                        Harga Merchandise
                    </label>
                    <input
                        type="text"
                        id="hargaMerchandise"
                        name="hargaMerchandise"
                        value={formData.hargaMerchandise}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.hargaMerchandise ? 'border-red-500' : ''}`}
                    />
                    {formErrors.hargaMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.hargaMerchandise}</p>}
                </div>

                {/* Stock Merchandise */}
                <div className="mb-4">
                    <label htmlFor="stockMerchandise" className="block text-sm font-medium text-gray-700">
                        Stock Merchandise
                    </label>
                    <input
                        type="text"
                        id="stockMerchandise"
                        name="stockMerchandise"
                        value={formData.stockMerchandise}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.stockMerchandise ? 'border-red-500' : ''}`}
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
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.linkMerchandise ? 'border-red-500' : ''}`}
                    />
                    {formErrors.linkMerchandise && <p className="text-red-500 text-sm mt-1">{formErrors.linkMerchandise}</p>}
                </div>

                {/* Foto Merchandise */}
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
                        multiple // Izinkan multiple file selection
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.files ? 'border-red-500' : ''}`}
                    />
                    {formErrors.files && <p className="text-red-500 text-sm mt-1">{formErrors.files}</p>}
                </div>

                {/* List Foto Merchandise */}
                {formData.files.length > 0 && (
                    <div className="mb-4">
                        <p className="text-sm font-medium text-gray-700 mb-2">Foto yang akan diunggah:</p>
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
    );
};

export default CreateMerchandise;
