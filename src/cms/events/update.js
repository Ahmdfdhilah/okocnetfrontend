import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import Toast from '../../components/Toast';
import ConfirmationModal from '../../components/ConfirmationModal';
import Loading from '../../components/Loading';

const UpdateEvent = () => {
    const navigate = useNavigate();
    const { userId, token } = useContext(AuthContext);
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

    const [formErrors, setFormErrors] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [modalAction, setModalAction] = useState(null);
    const [toast, setToast] = useState({ show: false, type: '', message: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3000/events/${id}`);
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
            } finally {
                setLoading(false);
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
        const errors = {};

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setModalAction(() => async () => {
            try {
                setLoading(true);
                const formDataToSend = new FormData();
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
                formDataToSend.append('file', formData.file);

                await axios.put(`http://localhost:3000/events/${id}/${userId}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    }
                });

                navigate('/admin/event');
                setToast({ show: true, type: 'success', message: 'Event updated successfully' });
            } catch (error) {
                console.error('Error updating data:', error);
                setToast({ show: true, type: 'error', message: 'Error updating event' });
            } finally {
                setLoading(false);
            }
        });
        setModalTitle('Confirm');
        setModalMessage('Are you sure you want to update this event?');
        setModalShow(true);
    };

    return (
        <>
            {loading && <Loading />}
            <div className="container mx-auto py-10 mt-32">
                <h2 className="text-4xl font-bold mb-8 text-center">Update Event</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-6">
                        <label htmlFor="judulEvent" className="block text-lg font-medium text-gray-800">
                            Judul Event
                        </label>
                        <input
                            type="text"
                            id="judulEvent"
                            name="judulEvent"
                            value={formData.judulEvent}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.judulEvent && <p className="text-red-500 text-sm mt-2">{formErrors.judulEvent}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="tanggalEvent" className="block text-lg font-medium text-gray-800">
                            Tanggal Event
                        </label>
                        <input
                            type="datetime-local"
                            id="tanggalEvent"
                            name="tanggalEvent"
                            value={formData.tanggalEvent}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.tanggalEvent && <p className="text-red-500 text-sm mt-2">{formErrors.tanggalEvent}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="hargaEvent" className="block text-lg font-medium text-gray-800">
                            Harga Event
                        </label>
                        <input
                            type="number"
                            id="hargaEvent"
                            name="hargaEvent"
                            value={formData.hargaEvent}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.hargaEvent && <p className="text-red-500 text-sm mt-2">{formErrors.hargaEvent}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="pointEvent" className="block text-lg font-medium text-gray-800">
                            Point Event
                        </label>
                        <input
                            type="number"
                            id="pointEvent"
                            name="pointEvent"
                            value={formData.pointEvent}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.pointEvent && <p className="text-red-500 text-sm mt-2">{formErrors.pointEvent}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="urlPendaftaran" className="block text-lg font-medium text-gray-800">
                            URL Pendaftaran
                        </label>
                        <input
                            type="text"
                            id="urlPendaftaran"
                            name="urlPendaftaran"
                            value={formData.urlPendaftaran}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.urlPendaftaran && <p className="text-red-500 text-sm mt-2">{formErrors.urlPendaftaran}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="tempatEvent" className="block text-lg font-medium text-gray-800">
                            Tempat Event
                        </label>
                        <input
                            type="text"
                            id="tempatEvent"
                            name="tempatEvent"
                            value={formData.tempatEvent}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.tempatEvent && <p className="text-red-500 text-sm mt-2">{formErrors.tempatEvent}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="quotaEvent" className="block text-lg font-medium text-gray-800">
                            Quota Event
                        </label>
                        <input
                            type="text"
                            id="quotaEvent"
                            name="quotaEvent"
                            value={formData.quotaEvent}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.quotaEvent && <p className="text-red-500 text-sm mt-2">{formErrors.quotaEvent}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="durasiEvent" className="block text-lg font-medium text-gray-800">
                            Durasi Event
                        </label>
                        <input
                            type="text"
                            id="durasiEvent"
                            name="durasiEvent"
                            value={formData.durasiEvent}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.durasiEvent && <p className="text-red-500 text-sm mt-2">{formErrors.durasiEvent}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="narasumber" className="block text-lg font-medium text-gray-800">
                            Narasumber
                        </label>
                        <input
                            type="text"
                            id="narasumber"
                            name="narasumber"
                            value={formData.narasumber}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.narasumber && <p className="text-red-500 text-sm mt-2">{formErrors.narasumber}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="contactPerson" className="block text-lg font-medium text-gray-800">
                            Contact Person
                        </label>
                        <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                        {formErrors.contactPerson && <p className="text-red-500 text-sm mt-2">{formErrors.contactPerson}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-800">
                            File
                        </label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
                        />
                    </div>

                    {/* Deskripsi Event */}
                    <div className="mb-6">
                        <label htmlFor="deskripsiEvent" className="block text-lg font-medium text-gray-800">
                            Deskripsi Event
                        </label>
                        {formData.deskripsiEvent.map((deskripsi, index) => (
                            <div key={index} className="flex items-center space-x-2 mb-2">
                                <input
                                    type="text"
                                    value={deskripsi}
                                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
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

export default UpdateEvent;