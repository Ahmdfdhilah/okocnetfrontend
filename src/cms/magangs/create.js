import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateMagang = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        judulMagang: '',
        durasiMagang: '',
        urlMsib: '',
        tentangProgram: '',
        jenisMagang: '',
        deskripsiMagang: [],
        lokasiMagang: '',
        benefitMagang: '',
        kriteriaPeserta: [],
        kompetensi: [],
        publishedAt: new Date().toISOString().slice(0, 16),
        file: null,
    });

    const [formErrors, setFormErrors] = useState({
        judulMagang: '',
        durasiMagang: '',
        urlMsib: '',
        tentangProgram: '',
        jenisMagang: '',
        deskripsiMagang: '',
        lokasiMagang: '',
        benefitMagang: '',
        kriteriaPeserta: '',
        kompetensi: '',
        file: '',
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
        setFormData({
            ...formData,
            file: e.target.files[0],
        });
        setFormErrors({
            ...formErrors,
            file: '',
        });
    };

    const handleAddDescription = () => {
        const updatedDescriptions = [...formData.deskripsiMagang, ''];
        setFormData({
            ...formData,
            deskripsiMagang: updatedDescriptions,
        });
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = [...formData.deskripsiMagang];
        updatedDescriptions[index] = value;
        setFormData({
            ...formData,
            deskripsiMagang: updatedDescriptions,
        });
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = [...formData.deskripsiMagang];
        updatedDescriptions.splice(index, 1);
        setFormData({
            ...formData,
            deskripsiMagang: updatedDescriptions,
        });
    };

    const handleAddCriteria = () => {
        const updatedCriteria = [...formData.kriteriaPeserta, ''];
        setFormData({
            ...formData,
            kriteriaPeserta: updatedCriteria,
        });
    };

    const handleCriteriaChange = (index, value) => {
        const updatedCriteria = [...formData.kriteriaPeserta];
        updatedCriteria[index] = value;
        setFormData({
            ...formData,
            kriteriaPeserta: updatedCriteria,
        });
    };

    const handleRemoveCriteria = (index) => {
        const updatedCriteria = [...formData.kriteriaPeserta];
        updatedCriteria.splice(index, 1);
        setFormData({
            ...formData,
            kriteriaPeserta: updatedCriteria,
        });
    };

    const handleAddCompetency = () => {
        const updatedCompetencies = [...formData.kompetensi, ''];
        setFormData({
            ...formData,
            kompetensi: updatedCompetencies,
        });
    };

    const handleCompetencyChange = (index, value) => {
        const updatedCompetencies = [...formData.kompetensi];
        updatedCompetencies[index] = value;
        setFormData({
            ...formData,
            kompetensi: updatedCompetencies,
        });
    };

    const handleRemoveCompetency = (index) => {
        const updatedCompetencies = [...formData.kompetensi];
        updatedCompetencies.splice(index, 1);
        setFormData({
            ...formData,
            kompetensi: updatedCompetencies,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulMagang: '',
            durasiMagang: '',
            urlMsib: '',
            tentangProgram: '',
            jenisMagang: '',
            deskripsiMagang: '',
            lokasiMagang: '',
            benefitMagang: '',
            kriteriaPeserta: '',
            kompetensi: '',
            file: '',
        };

        if (!formData.judulMagang.trim()) {
            errors.judulMagang = 'Judul Magang harus diisi';
            valid = false;
        }
        if (!formData.durasiMagang.trim()) {
            errors.durasiMagang = 'Durasi Magang harus diisi';
            valid = false;
        }
        if (!formData.urlMsib.trim()) {
            errors.urlMsib = 'URL MSIB harus diisi';
            valid = false;
        }
        if (!formData.tentangProgram.trim()) {
            errors.tentangProgram = 'Tentang Program harus diisi';
            valid = false;
        }
        if (!formData.jenisMagang.trim()) {
            errors.jenisMagang = 'Jenis Magang harus diisi';
            valid = false;
        }
        if (formData.deskripsiMagang.length === 0) {
            errors.deskripsiMagang = 'Deskripsi Magang harus diisi';
            valid = false;
        }
        if (!formData.lokasiMagang.trim()) {
            errors.lokasiMagang = 'Lokasi Magang harus diisi';
            valid = false;
        }
        if (!formData.benefitMagang.trim()) {
            errors.benefitMagang = 'Benefit Magang harus diisi';
            valid = false;
        }
        if (formData.kriteriaPeserta.length === 0) {
            errors.kriteriaPeserta = 'Kriteria Peserta harus diisi';
            valid = false;
        }
        if (formData.kompetensi.length === 0) {
            errors.kompetensi = 'Kompetensi harus diisi';
            valid = false;
        }
        if (!formData.file) {
            errors.file = 'Foto Magang harus diunggah';
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
            formDataToSend.append('judulMagang', formData.judulMagang);
            formDataToSend.append('durasiMagang', formData.durasiMagang);
            formDataToSend.append('urlMsib', formData.urlMsib);
            formDataToSend.append('tentangProgram', formData.tentangProgram);
            formDataToSend.append('jenisMagang', formData.jenisMagang);
            formData.deskripsiMagang.forEach((deskripsi, index) => {
                formDataToSend.append(`deskripsiMagang[${index}]`, deskripsi);
            });
            formDataToSend.append('lokasiMagang', formData.lokasiMagang);
            formDataToSend.append('benefitMagang', formData.benefitMagang);
            formData.kriteriaPeserta.forEach((kriteria, index) => {
                formDataToSend.append(`kriteriaPeserta[${index}]`, kriteria);
            });
            formData.kompetensi.forEach((kompetensi, index) => {
                formDataToSend.append(`kompetensi[${index}]`, kompetensi);
            });
            formDataToSend.append('publishedAt', formData.publishedAt);

            await axios.post(`https://okocenet-72f35a89c2ef.herokuapp.com/magangs/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/internship');
        } catch (error) {
            console.error('Error creating internship:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Internship</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                {/* Judul Magang */}
                <div className="mb-4">
                    <label htmlFor="judulMagang" className="block text-sm font-medium text-gray-700">
                        Judul Magang
                    </label>
                    <input
                        type="text"
                        id="judulMagang"
                        name="judulMagang"
                        value={formData.judulMagang}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.judulMagang && <p className="text-red-500 text-sm mt-1">{formErrors.judulMagang}</p>}
                </div>

                {/* Durasi Magang */}
                <div className="mb-4">
                    <label htmlFor="durasiMagang" className="block text-sm font-medium text-gray-700">
                        Durasi Magang
                    </label>
                    <input
                        type="text"
                        id="durasiMagang"
                        name="durasiMagang"
                        value={formData.durasiMagang}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.durasiMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.durasiMagang && <p className="text-red-500 text-sm mt-1">{formErrors.durasiMagang}</p>}
                </div>

                {/* URL MSIB */}
                <div className="mb-4">
                    <label htmlFor="urlMsib" className="block text-sm font-medium text-gray-700">
                        URL MSIB
                    </label>
                    <input
                        type="text"
                        id="urlMsib"
                        name="urlMsib"
                        value={formData.urlMsib}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.urlMsib ? 'border-red-500' : ''}`}
                    />
                    {formErrors.urlMsib && <p className="text-red-500 text-sm mt-1">{formErrors.urlMsib}</p>}
                </div>

                {/* Tentang Program */}
                <div className="mb-4">
                    <label htmlFor="tentangProgram" className="block text-sm font-medium text-gray-700">
                        Tentang Program
                    </label>
                    <input
                        type="text"
                        id="tentangProgram"
                        name="tentangProgram"
                        value={formData.tentangProgram}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.tentangProgram ? 'border-red-500' : ''}`}
                    />
                    {formErrors.tentangProgram && <p className="text-red-500 text-sm mt-1">{formErrors.tentangProgram}</p>}
                </div>

                {/* Jenis Magang */}
                <div className="mb-4">
                    <label htmlFor="jenisMagang" className="block text-sm font-medium text-gray-700">
                        Jenis Magang
                    </label>
                    <input
                        type="text"
                        id="jenisMagang"
                        name="jenisMagang"
                        value={formData.jenisMagang}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.jenisMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.jenisMagang && <p className="text-red-500 text-sm mt-1">{formErrors.jenisMagang}</p>}
                </div>

                {/* Deskripsi Magang */}
                <div className="mb-4">
                    <label htmlFor="deskripsiMagang" className="block text-sm font-medium text-gray-700">
                        Deskripsi Magang
                    </label>
                    {formData.deskripsiMagang.map((deskripsi, index) => (
                        <div key={index} className="flex items-center mt-2">
                            <input
                                type="text"
                                id={`deskripsiMagang${index}`}
                                name={`deskripsiMagang[${index}]`}
                                value={deskripsi}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.deskripsiMagang ? 'border-red-500' : ''}`}
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveDescription(index)}
                                className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddDescription}
                        className="bg-green-500 text-white rounded-md px-3 py-1 text-sm"
                    >
                        Add Deskripsi Magang
                    </button>
                    {formErrors.deskripsiMagang && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiMagang}</p>}
                </div>

                {/* Lokasi Magang */}
                <div className="mb-4">
                    <label htmlFor="lokasiMagang" className="block text-sm font-medium text-gray-700">
                        Lokasi Magang
                    </label>
                    <input
                        type="text"
                        id="lokasiMagang"
                        name="lokasiMagang"
                        value={formData.lokasiMagang}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.lokasiMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.lokasiMagang && <p className="text-red-500 text-sm mt-1">{formErrors.lokasiMagang}</p>}
                </div>

                {/* Benefit Magang */}
                <div className="mb-4">
                    <label htmlFor="benefitMagang" className="block text-sm font-medium text-gray-700">
                        Benefit Magang
                    </label>
                    <input
                        type="text"
                        id="benefitMagang"
                        name="benefitMagang"
                        value={formData.benefitMagang}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.benefitMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.benefitMagang && <p className="text-red-500 text-sm mt-1">{formErrors.benefitMagang}</p>}
                </div>

                {/* Kriteria Peserta */}
                <div className="mb-4">
                    <label htmlFor="kriteriaPeserta" className="block text-sm font-medium text-gray-700">
                        Kriteria Peserta
                    </label>
                    {formData.kriteriaPeserta.map((kriteria, index) => (
                        <div key={index} className="flex items-center mt-2">
                            <input
                                type="text"
                                id={`kriteriaPeserta${index}`}
                                name={`kriteriaPeserta[${index}]`}
                                value={kriteria}
                                onChange={(e) => handleCriteriaChange(index, e.target.value)}
                                className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kriteriaPeserta ? 'border-red-500' : ''}`}
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveCriteria(index)}
                                className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddCriteria}
                        className="bg-green-500 text-white rounded-md px-3 py-1 text-sm"
                    >
                        Add Kriteria Peserta
                    </button>
                    {formErrors.kriteriaPeserta && <p className="text-red-500 text-sm mt-1">{formErrors.kriteriaPeserta}</p>}
                </div>

                {/* Kompetensi */}
                <div className="mb-4">
                    <label htmlFor="kompetensi" className="block text-sm font-medium text-gray-700">
                        Kompetensi
                    </label>
                    {formData.kompetensi.map((kompetensi, index) => (
                        <div key={index} className="flex items-center mt-2">
                            <input
                                type="text"
                                id={`kompetensi${index}`}
                                name={`kompetensi[${index}]`}
                                value={kompetensi}
                                onChange={(e) => handleCompetencyChange(index, e.target.value)}
                                className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kompetensi ? 'border-red-500' : ''}`}
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveCompetency(index)}
                                className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddCompetency}
                        className="bg-green-500 text-white rounded-md px-3 py-1 text-sm"
                    >
                        Add Kompetensi
                    </button>
                    {formErrors.kompetensi && <p className="text-red-500 text-sm mt-1">{formErrors.kompetensi}</p>}
                </div>

                {/* File Upload */}
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Foto Magang
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.file ? 'border-red-500' : ''}`}
                    />
                    {formErrors.file && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Create Magang
                </button>
            </form>
        </div>
    );
};

export default CreateMagang;