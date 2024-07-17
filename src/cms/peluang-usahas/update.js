import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdatePeluangUsaha = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
    const { id } = useParams();

    const [formData, setFormData] = useState({
        file: null,
        judulUsaha: '',
        lokasiUsaha: '',
        kategoriUsaha: '',
        tentangProgram: '',
        benefitProgram: '',
        jobdescUsaha: '',
        kriteriaUsaha: '',
        urlPendaftaran: '',
        periodePendaftaran: '',
    });

    const [formErrors, setFormErrors] = useState({
        file: '',
        judulUsaha: '',
        lokasiUsaha: '',
        kategoriUsaha: '',
        tentangProgram: '',
        benefitProgram: '',
        jobdescUsaha: '',
        kriteriaUsaha: '',
        urlPendaftaran: '',
        periodePendaftaran: '',
    });

    useEffect(() => {
        const fetchPeluangUsaha = async () => {
            try {
                const response = await axios.get(`https://okocenet-72f35a89c2ef.herokuapp.com/peluang-usahas/${id}`);
                const {
                    judulUsaha,
                    lokasiUsaha,
                    kategoriUsaha,
                    tentangProgram,
                    benefitProgram,
                    jobdescUsaha,
                    kriteriaUsaha,
                    urlPendaftaran,
                    periodePendaftaran,
                } = response.data;

                setFormData({
                    file: null,
                    judulUsaha,
                    lokasiUsaha,
                    kategoriUsaha,
                    tentangProgram,
                    benefitProgram,
                    jobdescUsaha,
                    kriteriaUsaha,
                    urlPendaftaran,
                    periodePendaftaran,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPeluangUsaha();
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

    const validateForm = () => {
        let valid = true;
        const errors = {
            file: '',
            judulUsaha: '',
            lokasiUsaha: '',
            kategoriUsaha: '',
            tentangProgram: '',
            benefitProgram: '',
            jobdescUsaha: '',
            kriteriaUsaha: '',
            urlPendaftaran: '',
            periodePendaftaran: '',
        };

        if (!formData.file) {
            errors.file = 'Foto harus diunggah';
            valid = false;
        }
        if (!formData.judulUsaha.trim()) {
            errors.judulUsaha = 'Judul Usaha harus diisi';
            valid = false;
        }
        if (!formData.lokasiUsaha.trim()) {
            errors.lokasiUsaha = 'Lokasi Usaha harus diisi';
            valid = false;
        }
        if (!formData.kategoriUsaha.trim()) {
            errors.kategoriUsaha = 'Kategori Usaha harus diisi';
            valid = false;
        }
        if (!formData.tentangProgram.trim()) {
            errors.tentangProgram = 'Tentang Program harus diisi';
            valid = false;
        }
        if (!formData.benefitProgram.trim()) {
            errors.benefitProgram = 'Benefit Program harus diisi';
            valid = false;
        }
        if (!formData.jobdescUsaha.trim()) {
            errors.jobdescUsaha = 'Jobdesc Usaha harus diisi';
            valid = false;
        }
        if (!formData.kriteriaUsaha.trim()) {
            errors.kriteriaUsaha = 'Kriteria Usaha harus diisi';
            valid = false;
        }
        if (!formData.urlPendaftaran.trim()) {
            errors.urlPendaftaran = 'URL Pendaftaran harus diisi';
            valid = false;
        }
        if (!formData.periodePendaftaran.trim()) {
            errors.periodePendaftaran = 'Periode Pendaftaran harus diisi';
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
            formDataToSend.append('judulUsaha', formData.judulUsaha);
            formDataToSend.append('lokasiUsaha', formData.lokasiUsaha);
            formDataToSend.append('kategoriUsaha', formData.kategoriUsaha);
            formDataToSend.append('tentangProgram', formData.tentangProgram);
            formDataToSend.append('benefitProgram', formData.benefitProgram);
            formDataToSend.append('jobdescUsaha', formData.jobdescUsaha);
            formDataToSend.append('kriteriaUsaha', formData.kriteriaUsaha);
            formDataToSend.append('urlPendaftaran', formData.urlPendaftaran);
            formDataToSend.append('periodePendaftaran', formData.periodePendaftaran);

            await axios.put(`https://okocenet-72f35a89c2ef.herokuapp.com/peluang-usahas/${id}/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });

            navigate('/admin/peluang-usaha');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Update Peluang Usaha</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Foto Usaha
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
                <div className="mb-4">
                    <label htmlFor="judulUsaha" className="block text-sm font-medium text-gray-700">
                        Judul Usaha
                    </label>
                    <input
                        type="text"
                        id="judulUsaha"
                        name="judulUsaha"
                        value={formData.judulUsaha}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulUsaha ? 'border-red-500' : ''}`}
                    />
                    {formErrors.judulUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.judulUsaha}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="lokasiUsaha" className="block text-sm font-medium text-gray-700">
                        Lokasi Usaha
                    </label>
                    <input
                        type="text"
                        id="lokasiUsaha"
                        name="lokasiUsaha"
                        value={formData.lokasiUsaha}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.lokasiUsaha ? 'border-red-500' : ''}`}
                    />
                    {formErrors.lokasiUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.lokasiUsaha}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="kategoriUsaha" className="block text-sm font-medium text-gray-700">
                        Kategori Usaha
                    </label>
                    <input
                        type="text"
                        id="kategoriUsaha"
                        name="kategoriUsaha"
                        value={formData.kategoriUsaha}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kategoriUsaha ? 'border-red-500' : ''}`}
                    />
                    {formErrors.kategoriUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.kategoriUsaha}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="tentangProgram" className="block text-sm font-medium text-gray-700">
                        Tentang Program
                    </label>
                    <textarea
                        id="tentangProgram"
                        name="tentangProgram"
                        value={formData.tentangProgram}
                        onChange={handleInputChange}
                        rows="3"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.tentangProgram ? 'border-red-500' : ''}`}
                    />
                    {formErrors.tentangProgram && <p className="text-red-500 text-sm mt-1">{formErrors.tentangProgram}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="benefitProgram" className="block text-sm font-medium text-gray-700">
                        Benefit Program
                    </label>
                    <textarea
                        id="benefitProgram"
                        name="benefitProgram"
                        value={formData.benefitProgram}
                        onChange={handleInputChange}
                        rows="3"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.benefitProgram ? 'border-red-500' : ''}`}
                    />
                    {formErrors.benefitProgram && <p className="text-red-500 text-sm mt-1">{formErrors.benefitProgram}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="jobdescUsaha" className="block text-sm font-medium text-gray-700">
                        Jobdesc Usaha
                    </label>
                    <textarea
                        id="jobdescUsaha"
                        name="jobdescUsaha"
                        value={formData.jobdescUsaha}
                        onChange={handleInputChange}
                        rows="3"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.jobdescUsaha ? 'border-red-500' : ''}`}
                    />
                    {formErrors.jobdescUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.jobdescUsaha}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="kriteriaUsaha" className="block text-sm font-medium text-gray-700">
                        Kriteria Usaha
                    </label>
                    <textarea
                        id="kriteriaUsaha"
                        name="kriteriaUsaha"
                        value={formData.kriteriaUsaha}
                        onChange={handleInputChange}
                        rows="3"
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kriteriaUsaha ? 'border-red-500' : ''}`}
                    />
                    {formErrors.kriteriaUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.kriteriaUsaha}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="urlPendaftaran" className="block text-sm font-medium text-gray-700">
                        URL Pendaftaran
                    </label>
                    <input
                        type="url"
                        id="urlPendaftaran"
                        name="urlPendaftaran"
                        value={formData.urlPendaftaran}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.urlPendaftaran ? 'border-red-500' : ''}`}
                    />
                    {formErrors.urlPendaftaran && <p className="text-red-500 text-sm mt-1">{formErrors.urlPendaftaran}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="periodePendaftaran" className="block text-sm font-medium text-gray-700">
                        Periode Pendaftaran
                    </label>
                    <input
                        type="text"
                        id="periodePendaftaran"
                        name="periodePendaftaran"
                        value={formData.periodePendaftaran}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.periodePendaftaran ? 'border-red-500' : ''}`}
                    />
                    {formErrors.periodePendaftaran && <p className="text-red-500 text-sm mt-1">{formErrors.periodePendaftaran}</p>}
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePeluangUsaha;