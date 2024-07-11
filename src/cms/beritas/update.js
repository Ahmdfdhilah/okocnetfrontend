import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateBerita = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {userId} = useContext(AuthContext);

    const [formData, setFormData] = useState({
        judulBerita: '',
        tanggalBerita: '',
        authorBerita: '',
        editorBerita: '',
        file: null,
        file2: null,
        deskripsiBerita: [],
    });

    const [formErrors, setFormErrors] = useState({
        judulBerita: '',
        tanggalBerita: '',
        authorBerita: '',
        editorBerita: '',
        deskripsiBerita: '',
    });

    useEffect(() => {
        const fetchBeritaData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/beritas/${id}`);
                const beritaData = response.data;

                const formattedDeskripsiBerita = beritaData.deskripsiBerita.map(item => item.str);

                setFormData({
                    judulBerita: beritaData.judulBerita,
                    tanggalBerita: beritaData.tanggalBerita,
                    authorBerita: beritaData.authorBerita,
                    editorBerita: beritaData.editorBerita,
                    file: null,
                    file2: null,
                    deskripsiBerita: formattedDeskripsiBerita,
                });
            } catch (error) {
                console.error('Error fetching berita data:', error);
            }
        };

        fetchBeritaData();
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
        const {name, files} = e.target;
        setFormData({
            ...formData,
            [name] : files[0]
        });
        setFormErrors({
            ...formErrors,
            [name]: '',
        });
    };

    const handleAddDescription = () => {
        const updatedDescriptions = [...formData.deskripsiBerita, ''];
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = [...formData.deskripsiBerita];
        updatedDescriptions[index] = value;
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = [...formData.deskripsiBerita];
        updatedDescriptions.splice(index, 1);
        setFormData({
            ...formData,
            deskripsiBerita: updatedDescriptions,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulBerita: '',
            tanggalBerita: '',
            authorBerita: '',
            editorBerita: '',
            deskripsiBerita: '',
        };

        if (!formData.judulBerita.trim()) {
            errors.judulBerita = 'Judul Berita harus diisi';
            valid = false;
        }
        if (!formData.tanggalBerita) {
            errors.tanggalBerita = 'Tanggal Berita harus diisi';
            valid = false;
        }
        if (!formData.authorBerita.trim()) {
            errors.authorBerita = 'Penulis Berita harus diisi';
            valid = false;
        }
        if (!formData.editorBerita.trim()) {
            errors.editorBerita = 'Editor Berita harus diisi';
            valid = false;
        }

        if (formData.deskripsiBerita.length === 0) {
            errors.deskripsiBerita = 'Minimal satu deskripsi Berita harus diisi';
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
            formDataToSend.append('file', formData.file);
            formDataToSend.append('file2', formData.file2);
            formDataToSend.append('judulBerita', formData.judulBerita);
            formDataToSend.append('tanggalBerita', formData.tanggalBerita);
            formDataToSend.append('authorBerita', formData.authorBerita);
            formDataToSend.append('editorBerita', formData.editorBerita);
            formData.deskripsiBerita.forEach((deskripsi, index) => {
                formDataToSend.append(`deskripsiBerita[${index}]`, deskripsi);
            });
            console.log(formData);
            await axios.put(`http://localhost:3000/beritas/${id}/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/admin/berita');
        } catch (error) {
            console.error('Error updating berita data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Update Berita</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                {/* Judul Berita */}
                <div className="mb-4">
                    <label htmlFor="judulBerita" className="block text-sm font-medium text-gray-700">
                        Judul Berita
                    </label>
                    <input
                        type="text"
                        id="judulBerita"
                        name="judulBerita"
                        value={formData.judulBerita}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulBerita ? 'border-red-500' : ''}`}
                    />
                    {formErrors.judulBerita && <p className="text-red-500 text-sm mt-1">{formErrors.judulBerita}</p>}
                </div>

                {/* Tanggal Berita */}
                <div className="mb-4">
                    <label htmlFor="tanggalBerita" className="block text-sm font-medium text-gray-700">
                        Tanggal Berita
                    </label>
                    <input
                        type="datetime-local"
                        id="tanggalBerita"
                        name="tanggalBerita"
                        value={formData.tanggalBerita}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.tanggalBerita ? 'border-red-500' : ''}`}
                    />
                    {formErrors.tanggalBerita && <p className="text-red-500 text-sm mt-1">{formErrors.tanggalBerita}</p>}
                </div>

                {/* Author Berita */}
                <div className="mb-4">
                    <label htmlFor="authorBerita" className="block text-sm font-medium text-gray-700">
                        Penulis Berita
                    </label>
                    <input
                        type="text"
                        id="authorBerita"
                        name="authorBerita"
                        value={formData.authorBerita}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.authorBerita ? 'border-red-500' : ''}`}
                    />
                    {formErrors.authorBerita && <p className="text-red-500 text-sm mt-1">{formErrors.authorBerita}</p>}
                </div>

                {/* Editor Berita */}
                <div className="mb-4">
                    <label htmlFor="editorBerita" className="block text-sm font-medium text-gray-700">
                        Editor Berita
                    </label>
                    <input
                        type="text"
                        id="editorBerita"
                        name="editorBerita"
                        value={formData.editorBerita}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.editorBerita ? 'border-red-500' : ''}`}
                    />
                    {formErrors.editorBerita && <p className="text-red-500 text-sm mt-1">{formErrors.editorBerita}</p>}
                </div>

                {/* Foto Content */}
                <div className="mb-4">
                    <label htmlFor="fotoContent" className="block text-sm font-medium text-gray-700">
                        Foto Content
                    </label>
                    <input
                        type="file"
                        id="file2"
                        name="file2"
                        onChange={handleFileChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.fotoContent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.fotoContent && <p className="text-red-500 text-sm mt-1">{formErrors.fotoContent}</p>}
                </div>

                {/* Foto Berita */}
                <div className="mb-4">
                    <label htmlFor="fotoBerita" className="block text-sm font-medium text-gray-700">
                        Foto Berita
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.fotoBerita ? 'border-red-500' : ''}`}
                    />
                    {formErrors.fotoBerita && <p className="text-red-500 text-sm mt-1">{formErrors.fotoBerita}</p>}
                </div>

                {/* Deskripsi Berita */}
                <div className="mb-4">
                    <label htmlFor="deskripsiBerita" className="block text-sm font-medium text-gray-700">
                        Deskripsi Berita
                    </label>
                    {formData.deskripsiBerita.map((deskripsi, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                value={deskripsi}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsiBerita ? 'border-red-500' : ''}`}
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveDescription(index)}
                                className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddDescription}
                        className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Add Description
                    </button>
                    {formErrors.deskripsiBerita && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiBerita}</p>}
                </div>

                {/* Submit Button */}
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

export default UpdateBerita;