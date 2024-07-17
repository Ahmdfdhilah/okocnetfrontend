import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateMagang = () => {
    const { id } = useParams();
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
    });

    useEffect(() => {
        const fetchMagangData = async () => {
            try {
                const response = await axios.get(`https://okocenet-72f35a89c2ef.herokuapp.com/magangs/${id}`);
                const magangData = response.data;

                const formattedDeskripsiMagang = magangData.deskripsiMagang.map(item => item.str);
                const formattedKriteriaPeserta = magangData.kriteriaPeserta.map(item => item.str);
                const formattedKompetensi = magangData.kompetensi.map(item => item.str);

                setFormData({
                    judulMagang: magangData.judulMagang,
                    durasiMagang: magangData.durasiMagang,
                    urlMsib: magangData.urlMsib,
                    tentangProgram: magangData.tentangProgram,
                    jenisMagang: magangData.jenisMagang,
                    deskripsiMagang: formattedDeskripsiMagang,
                    lokasiMagang: magangData.lokasiMagang,
                    benefitMagang: magangData.benefitMagang,
                    kriteriaPeserta: formattedKriteriaPeserta,
                    kompetensi: formattedKompetensi,
                });
            } catch (error) {
                console.error('Error fetching internship data:', error);
            }
        };

        fetchMagangData();
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
            formData.kriteriaPeserta.forEach((kriteria, index) => {
                formDataToSend.append(`kriteriaPeserta[${index}]`, kriteria);
            });
            formData.kompetensi.forEach((kompetensi, index) => {
                formDataToSend.append(`kompetensi[${index}]`, kompetensi);
            });

            await axios.put(`https://okocenet-72f35a89c2ef.herokuapp.com/magangs/${id}/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/magang');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Update Magang</h2>
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
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judulMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.judulMagang && <p className="text-sm text-red-500 mt-1">{formErrors.judulMagang}</p>}
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
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.durasiMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.durasiMagang && <p className="text-sm text-red-500 mt-1">{formErrors.durasiMagang}</p>}
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
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.urlMsib ? 'border-red-500' : ''}`}
                    />
                    {formErrors.urlMsib && <p className="text-sm text-red-500 mt-1">{formErrors.urlMsib}</p>}
                </div>

                {/* Tentang Program */}
                <div className="mb-4">
                    <label htmlFor="tentangProgram" className="block text-sm font-medium text-gray-700">
                        Tentang Program
                    </label>
                    <textarea
                        id="tentangProgram"
                        name="tentangProgram"
                        value={formData.tentangProgram}
                        onChange={handleInputChange}
                        rows={3}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.tentangProgram ? 'border-red-500' : ''}`}
                    />
                    {formErrors.tentangProgram && <p className="text-sm text-red-500 mt-1">{formErrors.tentangProgram}</p>}
                </div>

                {/* Jenis Magang */}
                <div className="mb-4">
                    <fieldset>
                        <legend className="block text-sm font-medium text-gray-700">Jenis Magang</legend>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <input
                                    id="jenisMagang-hybrid"
                                    name="jenisMagang"
                                    type="radio"
                                    value="Hybrid"
                                    checked={formData.jenisMagang === "Hybrid"}
                                    onChange={handleInputChange}
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                />
                                <label htmlFor="jenisMagang-hybrid" className="ml-2 block text-sm text-gray-900">
                                    Hybrid
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="jenisMagang-wfo"
                                    name="jenisMagang"
                                    type="radio"
                                    value="WFO (Work From Office)"
                                    checked={formData.jenisMagang === "WFO (Work From Office)"}
                                    onChange={handleInputChange}
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                />
                                <label htmlFor="jenisMagang-wfo" className="ml-2 block text-sm text-gray-900">
                                    WFO (Work From Office)
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    id="jenisMagang-wfh"
                                    name="jenisMagang"
                                    type="radio"
                                    value="WFH (Work From Home)"
                                    checked={formData.jenisMagang === "WFH (Work From Home)"}
                                    onChange={handleInputChange}
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                />
                                <label htmlFor="jenisMagang-wfh" className="ml-2 block text-sm text-gray-900">
                                    WFH (Work From Home)
                                </label>
                            </div>
                        </div>
                        {formErrors.jenisMagang && <p className="text-sm text-red-500 mt-1">{formErrors.jenisMagang}</p>}
                    </fieldset>
                </div>


                {/* Deskripsi Magang */}
                <div className="mb-4">
                    <label htmlFor="deskripsiMagang" className="block text-sm font-medium text-gray-700">
                        Deskripsi Magang
                    </label>
                    {formData.deskripsiMagang.map((deskripsi, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                id={`deskripsiMagang-${index}`}
                                name={`deskripsiMagang-${index}`}
                                value={deskripsi}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                className={`flex-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.deskripsiMagang ? 'border-red-500' : ''}`}
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    className="bg-red-500 text-white rounded-md px-3 py-1 text-sm"
                                    onClick={() => handleRemoveDescription(index)}
                                >
                                    Hapus
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-green-500 text-white rounded-md px-3 py-1 text-sm"
                        onClick={handleAddDescription}
                    >
                        Tambah Deskripsi
                    </button>
                    {formErrors.deskripsiMagang && <p className="text-sm text-red-500 mt-1">{formErrors.deskripsiMagang}</p>}
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
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.lokasiMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.lokasiMagang && <p className="text-sm text-red-500 mt-1">{formErrors.lokasiMagang}</p>}
                </div>

                {/* Benefit Magang */}
                <div className="mb-4">
                    <label htmlFor="benefitMagang" className="block text-sm font-medium text-gray-700">
                        Benefit Magang
                    </label>
                    <textarea
                        id="benefitMagang"
                        name="benefitMagang"
                        value={formData.benefitMagang}
                        onChange={handleInputChange}
                        rows={3}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.benefitMagang ? 'border-red-500' : ''}`}
                    />
                    {formErrors.benefitMagang && <p className="text-sm text-red-500 mt-1">{formErrors.benefitMagang}</p>}
                </div>

                {/* Kriteria Peserta */}
                <div className="mb-4">
                    <label htmlFor="kriteriaPeserta" className="block text-sm font-medium text-gray-700">
                        Kriteria Peserta
                    </label>
                    {formData.kriteriaPeserta.map((kriteria, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                id={`kriteriaPeserta-${index}`}
                                name={`kriteriaPeserta-${index}`}
                                value={kriteria}
                                onChange={(e) => handleCriteriaChange(index, e.target.value)}
                                className={`flex-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.kriteriaPeserta ? 'border-red-500' : ''}`}
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    className="bg-red-500 text-white rounded-md px-3 py-1 text-sm"
                                    onClick={() => handleRemoveCriteria(index)}
                                >
                                    Hapus
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-green-500 text-white rounded-md px-3 py-1 text-sm"
                        onClick={handleAddCriteria}
                    >
                        Tambah Kriteria
                    </button>
                    {formErrors.kriteriaPeserta && <p className="text-sm text-red-500 mt-1">{formErrors.kriteriaPeserta}</p>}
                </div>

                {/* Kompetensi */}
                <div className="mb-4">
                    <label htmlFor="kompetensi" className="block text-sm font-medium text-gray-700">
                        Kompetensi
                    </label>
                    {formData.kompetensi.map((kompetensi, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                id={`kompetensi-${index}`}
                                name={`kompetensi-${index}`}
                                value={kompetensi}
                                onChange={(e) => handleCompetencyChange(index, e.target.value)}
                                className={`flex-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.kompetensi ? 'border-red-500' : ''}`}
                            />
                            {index > 0 && (
                                <button
                                    type="button"
                                    className="bg-red-500 text-white rounded-md px-3 py-1 text-sm"
                                    onClick={() => handleRemoveCompetency(index)}
                                >
                                    Hapus
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-green-500 text-white rounded-md px-3 py-1 text-sm"
                        onClick={handleAddCompetency}
                    >
                        Tambah Kompetensi
                    </button>
                    {formErrors.kompetensi && <p className="text-sm text-red-500 mt-1">{formErrors.kompetensi}</p>}
                </div>

                {/* Upload File */}
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Upload File
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.file ? 'border-red-500' : ''}`}
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                        Update Magang
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateMagang;