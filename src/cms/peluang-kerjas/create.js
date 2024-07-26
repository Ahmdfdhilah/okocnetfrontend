import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Loading from '../../components/Loading';
import ConfirmationModal from '../../components/ConfirmationModal';

const CreatePeluangKerja = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        file: null,
        publishedAt: new Date().toISOString().slice(0, 16),
        judulKerja: '',
        lokasiKerja: '',
        kategoriKerja: '',
        tentangProgram: '',
        benefitProgram: '',
        jobdescKerja: '',
        kriteriaPeserta: '',
        urlPendaftaran: '',
        periodePendaftaran: '',
        sistemKerja: '',
    });

    const [formErrors, setFormErrors] = useState({
        file: '',
        judulKerja: '',
        lokasiKerja: '',
        kategoriKerja: '',
        tentangProgram: '',
        benefitProgram: '',
        jobdescKerja: '',
        kriteriaPeserta: '',
        urlPendaftaran: '',
        periodePendaftaran: '',
        sistemKerja: '',
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

    const validateForm = () => {
        let valid = true;
        const errors = {
            file: '',
            judulKerja: '',
            lokasiKerja: '',
            kategoriKerja: '',
            tentangProgram: '',
            benefitProgram: '',
            jobdescKerja: '',
            kriteriaPeserta: '',
            urlPendaftaran: '',
            periodePendaftaran: '',
            sistemKerja: '',
        };

        if (!formData.file) {
            errors.file = 'Foto harus diunggah';
            valid = false;
        }
        if (!formData.judulKerja.trim()) {
            errors.judulKerja = 'Judul Kerja harus diisi';
            valid = false;
        }
        if (!formData.lokasiKerja.trim()) {
            errors.lokasiKerja = 'Lokasi Kerja harus diisi';
            valid = false;
        }
        if (!formData.kategoriKerja.trim()) {
            errors.kategoriKerja = 'Kategori Kerja harus diisi';
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
        if (!formData.jobdescKerja.trim()) {
            errors.jobdescKerja = 'Jobdesc Kerja harus diisi';
            valid = false;
        }
        if (!formData.kriteriaPeserta.trim()) {
            errors.kriteriaPeserta = 'Kriteria Peserta harus diisi';
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
        if (!formData.sistemKerja) {
            errors.sistemKerja = 'Sistem Kerja harus dipilih';
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
                formDataToSend.append('file', formData.file);
                formDataToSend.append('judulKerja', formData.judulKerja);
                formDataToSend.append('lokasiKerja', formData.lokasiKerja);
                formDataToSend.append('kategoriKerja', formData.kategoriKerja);
                formDataToSend.append('tentangProgram', formData.tentangProgram);
                formDataToSend.append('benefitProgram', formData.benefitProgram);
                formDataToSend.append('jobdescKerja', formData.jobdescKerja);
                formDataToSend.append('kriteriaPeserta', formData.kriteriaPeserta);
                formDataToSend.append('urlPendaftaran', formData.urlPendaftaran);
                formDataToSend.append('periodePendaftaran', formData.periodePendaftaran);
                formDataToSend.append('sistemKerja', formData.sistemKerja);
                formDataToSend.append('publishedAt', new Date().toISOString().slice(0, 16));

                await axios.post(`http://localhost:3000/peluang-kerjas/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/peluang-kerja');
            } catch (error) {
                console.error('Error creating data:', error);
            }
        });
        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat peluang kerja ini?');
        setModalShow(true);
    };

    return (
        <>
        {loading && <Loading />}
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Create New Peluang Kerja</h1>
            <form onSubmit={onSubmit} encType="multipart/form-data" className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="file" className="block text-lg font-medium text-gray-700 mb-2">
                        Foto Kerja
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.file ? 'border-red-500' : ''}`}
                    />
                    {formErrors.file && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="nama" className="block text-lg font-medium text-gray-700 mb-2">
                        Judul Kerja
                    </label>
                    <input
                        type="text"
                        id="nama"
                        name="judulKerja" // Change name to match formData key
                        value={formData.judulKerja}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulKerja ? 'border-red-500' : ''}`}
                        placeholder="Masukkan judul kerja"
                    />
                    {formErrors.judulKerja && <p className="text-red-500 text-sm mt-1">{formErrors.judulKerja}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="lokasiKerja" className="block text-lg font-medium text-gray-700 mb-2">
                        Lokasi Kerja
                    </label>
                    <input
                        type="text"
                        id="lokasiKerja"
                        name="lokasiKerja"
                        value={formData.lokasiKerja}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.lokasiKerja ? 'border-red-500' : ''}`}
                        placeholder="Masukkan lokasi kerja"
                    />
                    {formErrors.lokasiKerja && <p className="text-red-500 text-sm mt-1">{formErrors.lokasiKerja}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="kategoriKerja" className="block text-lg font-medium text-gray-700 mb-2">
                        Kategori Kerja
                    </label>
                    <input
                        type="text"
                        id="kategoriKerja"
                        name="kategoriKerja"
                        value={formData.kategoriKerja}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kategoriKerja ? 'border-red-500' : ''}`}
                        placeholder="Masukkan kategori kerja"
                    />
                    {formErrors.kategoriKerja && <p className="text-red-500 text-sm mt-1">{formErrors.kategoriKerja}</p>}
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
                        placeholder="Deskripsi tentang program kerja"
                    />
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
                        placeholder="Deskripsi manfaat dari program kerja"
                    />
                    {formErrors.benefitProgram && <p className="text-red-500 text-sm mt-1">{formErrors.benefitProgram}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="jobdescKerja" className="block text-lg font-medium text-gray-700 mb-2">
                        Jobdesc Kerja
                    </label>
                    <textarea
                        id="jobdescKerja"
                        name="jobdescKerja"
                        rows="3"
                        value={formData.jobdescKerja}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.jobdescKerja ? 'border-red-500' : ''}`}
                        placeholder="Deskripsi tugas dari pekerjaan"
                    />
                    {formErrors.jobdescKerja && <p className="text-red-500 text-sm mt-1">{formErrors.jobdescKerja}</p>}
                </div>

                <div className="mb-6">
                    <label htmlFor="kriteriaPeserta" className="block text-lg font-medium text-gray-700 mb-2">
                        Kriteria Peserta
                    </label>
                    <textarea
                        id="kriteriaPeserta"
                        name="kriteriaPeserta"
                        rows="3"
                        value={formData.kriteriaPeserta}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.kriteriaPeserta ? 'border-red-500' : ''}`}
                        placeholder="Deskripsi kriteria peserta yang dibutuhkan"
                    />
                    {formErrors.kriteriaPeserta && <p className="text-red-500 text-sm mt-1">{formErrors.kriteriaPeserta}</p>}
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

                <div className="mb-6">
                    <label htmlFor="sistemKerja" className="block text-lg font-medium text-gray-700 mb-2">
                        Sistem Kerja
                    </label>
                    <select
                        id="sistemKerja"
                        name="sistemKerja"
                        value={formData.sistemKerja}
                        onChange={handleInputChange}
                        className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.sistemKerja ? 'border-red-500' : ''}`}
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Volunteer">Volunteer</option>
                    </select>
                    {formErrors.sistemKerja && <p className="text-red-500 text-sm mt-1">{formErrors.sistemKerja}</p>}
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

export default CreatePeluangKerja;