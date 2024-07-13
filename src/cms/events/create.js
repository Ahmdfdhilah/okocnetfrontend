import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const CreateEvent = () => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);

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

    const [formErrors, setFormErrors] = useState({
        judulEvent: '',
        tanggalEvent: '',
        hargaEvent: '',
        pointEvent: '',
        urlPendaftaran: '',
        deskripsiEvent: '',
        tempatEvent: '',
        quotaEvent: '',
        durasiEvent: '',
        narasumber: '',
        contactPerson: '',
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
        const updatedDescriptions = [...formData.deskripsiEvent, ''];
        setFormData({
            ...formData,
            deskripsiEvent: updatedDescriptions,
        });
    };

    const handleDescriptionChange = (index, value) => {
        const updatedDescriptions = [...formData.deskripsiEvent];
        updatedDescriptions[index] = value;
        setFormData({
            ...formData,
            deskripsiEvent: updatedDescriptions,
        });
    };

    const handleRemoveDescription = (index) => {
        const updatedDescriptions = [...formData.deskripsiEvent];
        updatedDescriptions.splice(index, 1);
        setFormData({
            ...formData,
            deskripsiEvent: updatedDescriptions,
        });
    };

    const validateForm = () => {
        let valid = true;
        const errors = {
            judulEvent: '',
            tanggalEvent: '',
            hargaEvent: '',
            pointEvent: '',
            urlPendaftaran: '',
            deskripsiEvent: '',
            tempatEvent: '',
            quotaEvent: '',
            durasiEvent: '',
            narasumber: '',
            contactPerson: '',
            file: '',
        };
    
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
    

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
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

            await axios.post(`https://sole-debi-crytonexa-deb22e0b.koyeb.app/events/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/admin/event');
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Create New Event</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
                {/* Judul Event */}
                <div className="mb-4">
                    <label htmlFor="judulEvent" className="block text-sm font-medium text-gray-700">
                        Judul Event
                    </label>
                    <input
                        type="text"
                        id="judulEvent"
                        name="judulEvent"
                        value={formData.judulEvent}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.judulEvent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.judulEvent && <p className="text-red-500 text-sm mt-1">{formErrors.judulEvent}</p>}
                </div>

                {/* Tanggal Event */}
                <div className="mb-4">
                    <label htmlFor="tanggalEvent" className="block text-sm font-medium text-gray-700">
                        Tanggal Event
                    </label>
                    <input
                        type="date"
                        id="tanggalEvent"
                        name="tanggalEvent"
                        value={formData.tanggalEvent}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.tanggalEvent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.tanggalEvent && <p className="text-red-500 text-sm mt-1">{formErrors.tanggalEvent}</p>}
                </div>

                {/* Harga Event */}
                <div className="mb-4">
                    <label htmlFor="hargaEvent" className="block text-sm font-medium text-gray-700">
                        Harga Event
                    </label>
                    <input
                        type="number"
                        id="hargaEvent"
                        name="hargaEvent"
                        value={formData.hargaEvent}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.hargaEvent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.hargaEvent && <p className="text-red-500 text-sm mt-1">{formErrors.hargaEvent}</p>}
                </div>

                {/* Point Event */}
                <div className="mb-4">
                    <label htmlFor="pointEvent" className="block text-sm font-medium text-gray-700">
                        Point Event
                    </label>
                    <input
                        type="number"
                        id="pointEvent"
                        name="pointEvent"
                        value={formData.pointEvent}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.pointEvent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.pointEvent && <p className="text-red-500 text-sm mt-1">{formErrors.pointEvent}</p>}
                </div>

                {/* URL Pendaftaran */}
                <div className="mb-4">
                    <label htmlFor="urlPendaftaran" className="block text-sm font-medium text-gray-700">
                        URL Pendaftaran
                    </label>
                    <input
                        type="text"
                        id="urlPendaftaran"
                        name="urlPendaftaran"
                        value={formData.urlPendaftaran}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.urlPendaftaran ? 'border-red-500' : ''}`}
                    />
                    {formErrors.urlPendaftaran && <p className="text-red-500 text-sm mt-1">{formErrors.urlPendaftaran}</p>}
                </div>

                {/* Deskripsi Event */}
                <div className="mb-4">
                    <label htmlFor="deskripsiEvent" className="block text-sm font-medium text-gray-700">
                        Deskripsi Event
                    </label>
                    {formData.deskripsiEvent.map((deskripsi, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                value={deskripsi}
                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                </div>

                {/* Tempat Event */}
                <div className="mb-4">
                    <label htmlFor="tempatEvent" className="block text-sm font-medium text-gray-700">
                        Tempat Event
                    </label>
                    <input
                        type="text"
                        id="tempatEvent"
                        name="tempatEvent"
                        value={formData.tempatEvent}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.tempatEvent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.tempatEvent && <p className="text-red-500 text-sm mt-1">{formErrors.tempatEvent}</p>}
                </div>

                {/* Quota Event */}
                <div className="mb-4">
                    <label htmlFor="quotaEvent" className="block text-sm font-medium text-gray-700">
                        Quota Event
                    </label>
                    <input
                        type="text"
                        id="quotaEvent"
                        name="quotaEvent"
                        value={formData.quotaEvent}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.quotaEvent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.quotaEvent && <p className="text-red-500 text-sm mt-1">{formErrors.quotaEvent}</p>}
                </div>

                {/* Durasi Event */}
                <div className="mb-4">
                    <label htmlFor="durasiEvent" className="block text-sm font-medium text-gray-700">
                        Durasi Event
                    </label>
                    <input
                        type="text"
                        id="durasiEvent"
                        name="durasiEvent"
                        value={formData.durasiEvent}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.durasiEvent ? 'border-red-500' : ''}`}
                    />
                    {formErrors.durasiEvent && <p className="text-red-500 text-sm mt-1">{formErrors.durasiEvent}</p>}
                </div>

                {/* Narasumber */}
                <div className="mb-4">
                    <label htmlFor="narasumber" className="block text-sm font-medium text-gray-700">
                        Narasumber
                    </label>
                    <input
                        type="text"
                        id="narasumber"
                        name="narasumber"
                        value={formData.narasumber}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.narasumber ? 'border-red-500' : ''}`}
                    />
                    {formErrors.narasumber && <p className="text-red-500 text-sm mt-1">{formErrors.narasumber}</p>}
                </div>

                {/* Contact Person */}
                <div className="mb-4">
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                        Contact Person
                    </label>
                    <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formErrors.contactPerson ? 'border-red-500' : ''}`}
                    />
                    {formErrors.contactPerson && <p className="text-red-500 text-sm mt-1">{formErrors.contactPerson}</p>}
                </div>

                {/* Foto Event */}
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        Foto Event
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

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateEvent;