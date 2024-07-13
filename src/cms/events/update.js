import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';

const UpdateEvent = () => {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const { id } = useParams(); 

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

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await axios.get(`https://sole-debi-crytonexa-deb22e0b.koyeb.app/events/${id}`);
                const eventData = response.data;

                const formattedDeskripsiEvent = eventData.deskripsiEvent.map(item => item.str);

                setFormData({
                    judulEvent: eventData.judulEvent,
                    tanggalEvent: eventData.tanggalEvent,
                    hargaEvent: eventData.hargaEvent,
                    pointEvent: eventData.pointEvent,
                    urlPendaftaran: eventData.urlPendaftaran,
                    deskripsiEvent: formattedDeskripsiEvent,
                    tempatEvent: eventData.tempatEvent,
                    quotaEvent: eventData.quotaEvent,
                    durasiEvent: eventData.durasiEvent,
                    narasumber: eventData.narasumber,
                    contactPerson: eventData.contactPerson,
                    file: null,
                });
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };

        fetchEventData();
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
        };

        if (!formData.judulEvent) {
            errors.judulEvent = 'Judul Event is required';
            valid = false;
        }
        if (!formData.tanggalEvent) {
            errors.tanggalEvent = 'Tanggal Event is required';
            valid = false;
        }
        if (!formData.hargaEvent) {
            errors.hargaEvent = 'Harga Event is required';
            valid = false;
        }
        if (!formData.pointEvent) {
            errors.pointEvent = 'Point Event is required';
            valid = false;
        }
        if (!formData.urlPendaftaran) {
            errors.urlPendaftaran = 'URL Pendaftaran is required';
            valid = false;
        }
        if (formData.deskripsiEvent.length === 0) {
            errors.deskripsiEvent = 'At least one deskripsiEvent is required';
            valid = false;
        }
        if (!formData.tempatEvent) {
            errors.tempatEvent = 'Tempat Event is required';
            valid = false;
        }
        if (!formData.quotaEvent) {
            errors.quotaEvent = 'Quota Event is required';
            valid = false;
        }
        if (!formData.durasiEvent) {
            errors.durasiEvent = 'Durasi Event is required';
            valid = false;
        }
        if (!formData.narasumber) {
            errors.narasumber = 'Narasumber is required';
            valid = false;
        }
        if (!formData.contactPerson) {
            errors.contactPerson = 'Contact Person is required';
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

            await axios.put(`https://sole-debi-crytonexa-deb22e0b.koyeb.app/events/${id}/${userId}`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            navigate('/admin/event');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-32 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Update Event</h2>
            <form onSubmit={onSubmit} encType="multipart/form-data">
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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.judulEvent && <p className="text-red-500 text-sm mt-1">{formErrors.judulEvent}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="tanggalEvent" className="block text-sm font-medium text-gray-700">
                        Tanggal Event
                    </label>
                    <input
                        type="datetime-local"
                        id="tanggalEvent"
                        name="tanggalEvent"
                        value={formData.tanggalEvent}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.tanggalEvent && <p className="text-red-500 text-sm mt-1">{formErrors.tanggalEvent}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.hargaEvent && <p className="text-red-500 text-sm mt-1">{formErrors.hargaEvent}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.pointEvent && <p className="text-red-500 text-sm mt-1">{formErrors.pointEvent}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.urlPendaftaran && <p className="text-red-500 text-sm mt-1">{formErrors.urlPendaftaran}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.tempatEvent && <p className="text-red-500 text-sm mt-1">{formErrors.tempatEvent}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.quotaEvent && <p className="text-red-500 text-sm mt-1">{formErrors.quotaEvent}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.durasiEvent && <p className="text-red-500 text-sm mt-1">{formErrors.durasiEvent}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.narasumber && <p className="text-red-500 text-sm mt-1">{formErrors.narasumber}</p>}
                </div>

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
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    {formErrors.contactPerson && <p className="text-red-500 text-sm mt-1">{formErrors.contactPerson}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                        File
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleFileChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
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
                    {formErrors.deskripsiEvent && <p className="text-red-500 text-sm mt-1">{formErrors.deskripsiEvent}</p>}
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

export default UpdateEvent;