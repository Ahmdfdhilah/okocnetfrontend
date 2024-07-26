import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const CreateEvent = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        judulEvent: '',
        tanggalEvent: '',
        hargaEvent: '',
        pointEvent: '',
        urlPendaftaran: '',
        deskripsiEvent: [],
        tempatEvent: '',
        quotaEvent: '',
        durasiEvent: '',
        narasumber: '',
        contactPerson: '',
        publishedAt: new Date().toISOString().slice(0, 16),
        file: null,
    });

    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });

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
        setFormData({
            ...formData,
            deskripsiEvent: [...formData.deskripsiEvent, ''],
        });
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = formData.deskripsiEvent.map((deskripsi, i) => (i === index ? value : deskripsi));
        setFormData({
            ...formData,
            deskripsiEvent: updatedDescriptions,
        });
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = formData.deskripsiEvent.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            deskripsiEvent: updatedDescriptions,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!formData.judulEvent.trim()) {
            errors.judulEvent = 'Judul Event harus diisi';
            valid = false;
        }
        if (!formData.tanggalEvent) {
            errors.tanggalEvent = 'Tanggal Event harus diisi';
            valid = false;
        }
        if (!formData.hargaEvent.trim()) {
            errors.hargaEvent = 'Harga Event harus diisi';
            valid = false;
        }
        if (!formData.pointEvent.trim()) {
            errors.pointEvent = 'Point Event harus diisi';
            valid = false;
        }
        if (!formData.urlPendaftaran.trim()) {
            errors.urlPendaftaran = 'URL Pendaftaran harus diisi';
            valid = false;
        }
        if (formData.deskripsiEvent.length === 0) {
            errors.deskripsiEvent = 'Deskripsi Event harus diisi';
            valid = false;
        }
        if (!formData.tempatEvent.trim()) {
            errors.tempatEvent = 'Tempat Event harus diisi';
            valid = false;
        }
        if (!formData.quotaEvent.trim()) {
            errors.quotaEvent = 'Quota Event harus diisi';
            valid = false;
        }
        if (!formData.durasiEvent.trim()) {
            errors.durasiEvent = 'Durasi Event harus diisi';
            valid = false;
        }
        if (!formData.narasumber.trim()) {
            errors.narasumber = 'Narasumber harus diisi';
            valid = false;
        }
        if (!formData.contactPerson.trim()) {
            errors.contactPerson = 'Contact Person harus diisi';
            valid = false;
        }
        if (!formData.file) {
            errors.file = 'Foto Event harus diunggah';
            valid = false;
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setModalAction(() => async () => {
            try {
                setLoading(true);
                const formDataToSend = new FormData();
                formDataToSend.append('file', formData.file);
                formDataToSend.append('judulEvent', formData.judulEvent);
                formDataToSend.append('tanggalEvent', formData.tanggalEvent);
                formDataToSend.append('hargaEvent', formData.hargaEvent);
                formDataToSend.append('pointEvent', formData.pointEvent);
                formDataToSend.append('urlPendaftaran', formData.urlPendaftaran);
                formData.deskripsiEvent.forEach((deskripsi, index) => {
                    formDataToSend.append(`deskripsiEvent[${index}]`, deskripsi);
                });
                formDataToSend.append('tempatEvent', formData.tempatEvent);
                formDataToSend.append('quotaEvent', formData.quotaEvent);
                formDataToSend.append('durasiEvent', formData.durasiEvent);
                formDataToSend.append('narasumber', formData.narasumber);
                formDataToSend.append('contactPerson', formData.contactPerson);
                formDataToSend.append('publishedAt', formData.publishedAt);

                await axios.post(`http://localhost:3000/events/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/event');
                setToast({ show: true, type: 'success', message: 'Event berhasil dibuat' });
            } catch (error) {
                console.error('Error creating event:', error);
                setToast({ show: true, type: 'error', message: 'Terjadi kesalahan saat membuat event' });
            } finally {
                setLoading(false);
            }
        });

        setModalTitle('Konfirmasi');
        setModalMessage('Apakah Anda yakin ingin membuat event ini?');
        setModalShow(true);
    };

    return (
        <>{loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h1 className="text-4xl font-bold mb-8 text-center">Create New Event</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data" className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
                    {/* Judul Event */}
                    <div className="mb-6">
                        <label htmlFor="judulEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Judul Event
                        </label>
                        <input
                            type="text"
                            id="judulEvent"
                            name="judulEvent"
                            value={formData.judulEvent}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.judulEvent ? 'border-red-500' : ''}`}
                        />
                        {formErrors.judulEvent && <p className="text-red-500 text-sm mt-1">{formErrors.judulEvent}</p>}
                    </div>

                    {/* Tanggal Event */}
                    <div className="mb-6">
                        <label htmlFor="tanggalEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Tanggal Event
                        </label>
                        <input
                            type="date"
                            id="tanggalEvent"
                            name="tanggalEvent"
                            value={formData.tanggalEvent}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.tanggalEvent ? 'border-red-500' : ''}`}
                        />
                        {formErrors.tanggalEvent && <p className="text-red-500 text-sm mt-1">{formErrors.tanggalEvent}</p>}
                    </div>

                    {/* Harga Event */}
                    <div className="mb-6">
                        <label htmlFor="hargaEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Harga Event
                        </label>
                        <input
                            type="number"
                            id="hargaEvent"
                            name="hargaEvent"
                            value={formData.hargaEvent}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.hargaEvent ? 'border-red-500' : ''}`}
                        />
                        {formErrors.hargaEvent && <p className="text-red-500 text-sm mt-1">{formErrors.hargaEvent}</p>}
                    </div>

                    {/* Point Event */}
                    <div className="mb-6">
                        <label htmlFor="pointEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Point Event
                        </label>
                        <input
                            type="number"
                            id="pointEvent"
                            name="pointEvent"
                            value={formData.pointEvent}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.pointEvent ? 'border-red-500' : ''}`}
                        />
                        {formErrors.pointEvent && <p className="text-red-500 text-sm mt-1">{formErrors.pointEvent}</p>}
                    </div>

                    {/* URL Pendaftaran */}
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
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.urlPendaftaran ? 'border-red-500' : ''}`}
                        />
                        {formErrors.urlPendaftaran && <p className="text-red-500 text-sm mt-1">{formErrors.urlPendaftaran}</p>}
                    </div>

                    {/* Deskripsi Event */}
                    <div className="mb-6">
                        <label htmlFor="deskripsiEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Deskripsi Event
                        </label>
                        {formData.deskripsiEvent.map((deskripsi, index) => (
                            <div key={index} className="flex items-center space-x-2 mb-2">
                                <input
                                    type="text"
                                    value={deskripsi}
                                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveDescription(index)}
                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={handleAddDescription}
                            className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add Description
                        </button>
                    </div>

                    {/* Tempat Event */}
                    <div className="mb-6">
                        <label htmlFor="tempatEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Tempat Event
                        </label>
                        <input
                            type="text"
                            id="tempatEvent"
                            name="tempatEvent"
                            value={formData.tempatEvent}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.tempatEvent ? 'border-red-500' : ''}`}
                        />
                        {formErrors.tempatEvent && <p className="text-red-500 text-sm mt-1">{formErrors.tempatEvent}</p>}
                    </div>

                    {/* Quota Event */}
                    <div className="mb-6">
                        <label htmlFor="quotaEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Quota Event
                        </label>
                        <input
                            type="text"
                            id="quotaEvent"
                            name="quotaEvent"
                            value={formData.quotaEvent}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.quotaEvent ? 'border-red-500' : ''}`}
                        />
                        {formErrors.quotaEvent && <p className="text-red-500 text-sm mt-1">{formErrors.quotaEvent}</p>}
                    </div>

                    {/* Durasi Event */}
                    <div className="mb-6">
                        <label htmlFor="durasiEvent" className="block text-lg font-medium text-gray-700 mb-2">
                            Durasi Event
                        </label>
                        <input
                            type="text"
                            id="durasiEvent"
                            name="durasiEvent"
                            value={formData.durasiEvent}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.durasiEvent ? 'border-red-500' : ''}`}
                        />
                        {formErrors.durasiEvent && <p className="text-red-500 text-sm mt-1">{formErrors.durasiEvent}</p>}
                    </div>

                    {/* Narasumber */}
                    <div className="mb-6">
                        <label htmlFor="narasumber" className="block text-lg font-medium text-gray-700 mb-2">
                            Narasumber
                        </label>
                        <input
                            type="text"
                            id="narasumber"
                            name="narasumber"
                            value={formData.narasumber}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.narasumber ? 'border-red-500' : ''}`}
                        />
                        {formErrors.narasumber && <p className="text-red-500 text-sm mt-1">{formErrors.narasumber}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="contactPerson" className="block text-lg font-medium text-gray-700 mb-2">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            className={`mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${formErrors.narasumber ? 'border-red-500' : ''}`}
                        />
                        {formErrors.contactPerson && <p className="text-red-500 text-sm mt-1">{formErrors.contactPerson}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="poster" className="block text-lg font-medium text-gray-700 mb-2">
                            Foto
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="mt-2 block w-full text-sm text-gray-500"
                        />
                        {formErrors.poster && <p className="text-red-500 text-sm mt-1">{formErrors.file}</p>}
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

export default CreateEvent;