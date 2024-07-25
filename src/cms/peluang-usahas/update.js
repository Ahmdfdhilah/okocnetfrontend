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
                const response = await axios.get(`http://localhost:3000/peluang-usahas/${id}`);
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

            await axios.put(`http://localhost:3000/peluang-usahas/${id}/${userId}`, formDataToSend, {
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
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Create New Peluang Usaha</h1>
            <form onSubmit={onSubmit} encType="multipart/form-data" className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
                        Foto Usaha
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.file ? 'border-red-500' : ''}`}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="judulUsaha" className="block text-lg font-medium text-gray-700 mb-2">
                        Judul Usaha
                    </label>
                    <input
                        type="text"
                        id="judulUsaha"
                        name="judulUsaha"
                        value={formData.judulUsaha}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulUsaha ? 'border-red-500' : ''}`}
                        placeholder="Masukkan judul usaha"
                    />
                    {formErrors.judulUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.judulUsaha}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="lokasiUsaha" className="block text-lg font-medium text-gray-700 mb-2">
                        Lokasi Usaha
                    </label>
                    <input
                        type="text"
                        id="lokasiUsaha"
                        name="lokasiUsaha"
                        value={formData.lokasiUsaha}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.lokasiUsaha ? 'border-red-500' : ''}`}
                        placeholder="Masukkan lokasi usaha"
                    />
                    {formErrors.lokasiUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.lokasiUsaha}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="kategoriUsaha" className="block text-lg font-medium text-gray-700 mb-2">
                        Kategori Usaha
                    </label>
                    <input
                        type="text"
                        id="kategoriUsaha"
                        name="kategoriUsaha"
                        value={formData.kategoriUsaha}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kategoriUsaha ? 'border-red-500' : ''}`}
                        placeholder="Masukkan kategori usaha"
                    />
                    {formErrors.kategoriUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.kategoriUsaha}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="tentangProgram" className="block text-lg font-medium text-gray-700 mb-2">
                        Tentang Program
                    </label>
                    <textarea
                        id="tentangProgram"
                        name="tentangProgram"
                        rows="3"
                        value={formData.tentangProgram}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.tentangProgram ? 'border-red-500' : ''}`}
                        placeholder="Deskripsi tentang program usaha"
                    ></textarea>
                    {formErrors.tentangProgram && <p className="text-red-500 text-sm mt-1">{formErrors.tentangProgram}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="benefitProgram" className="block text-lg font-medium text-gray-700 mb-2">
                        Benefit Program
                    </label>
                    <textarea
                        id="benefitProgram"
                        name="benefitProgram"
                        rows="3"
                        value={formData.benefitProgram}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.benefitProgram ? 'border-red-500' : ''}`}
                        placeholder="Deskripsi manfaat dari program usaha"
                    ></textarea>
                    {formErrors.benefitProgram && <p className="text-red-500 text-sm mt-1">{formErrors.benefitProgram}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="jobdescUsaha" className="block text-lg font-medium text-gray-700 mb-2">
                        Jobdesc Usaha
                    </label>
                    <textarea
                        id="jobdescUsaha"
                        name="jobdescUsaha"
                        rows="3"
                        value={formData.jobdescUsaha}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.jobdescUsaha ? 'border-red-500' : ''}`}
                        placeholder="Deskripsi tugas dari pekerjaan"
                    ></textarea>
                    {formErrors.jobdescUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.jobdescUsaha}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="kriteriaUsaha" className="block text-lg font-medium text-gray-700 mb-2">
                        Kriteria Usaha
                    </label>
                    <textarea
                        id="kriteriaUsaha"
                        name="kriteriaUsaha"
                        rows="3"
                        value={formData.kriteriaUsaha}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kriteriaUsaha ? 'border-red-500' : ''}`}
                        placeholder="Deskripsi kriteria peserta yang dibutuhkan"
                    ></textarea>
                    {formErrors.kriteriaUsaha && <p className="text-red-500 text-sm mt-1">{formErrors.kriteriaUsaha}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="urlPendaftaran" className="block text-lg font-medium text-gray-700 mb-2">
                        URL Pendaftaran
                    </label>
                    <input
                        type="text"
                        id="urlPendaftaran"
                        name="urlPendaftaran"
                        value={formData.urlPendaftaran}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.urlPendaftaran ? 'border-red-500' : ''}`}
                        placeholder="Masukkan URL pendaftaran"
                    />
                    {formErrors.urlPendaftaran && <p className="text-red-500 text-sm mt-1">{formErrors.urlPendaftaran}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="periodePendaftaran" className="block text-lg font-medium text-gray-700 mb-2">
                        Periode Pendaftaran
                    </label>
                    <input
                        type="text"
                        id="periodePendaftaran"
                        name="periodePendaftaran"
                        value={formData.periodePendaftaran}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.periodePendaftaran ? 'border-red-500' : ''}`}
                        placeholder="Masukkan periode pendaftaran"
                    />
                    {formErrors.periodePendaftaran && <p className="text-red-500 text-sm mt-1">{formErrors.periodePendaftaran}</p>}
                </div>

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

export default UpdatePeluangUsaha;