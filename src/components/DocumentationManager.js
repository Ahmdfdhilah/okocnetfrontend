import React, { useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import ConfirmationModal from './ConfirmationModal';

const DocumentationManager = ({ thementorId, dokumentasiUrls, onUpdate }) => {
    const { token } = React.useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const [toBeDeletedUrl, setToBeDeletedUrl] = useState(null);

    const handleDeleteConfirmation = (url) => {
        setToBeDeletedUrl(url);
        setModalShow(true);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/thementors/${thementorId}/dokumentasi`, {
                params: { dokumentasiUrl: toBeDeletedUrl },
                headers: { Authorization: `Bearer ${token}` }
            });
            onUpdate(); 
            setModalShow(false);
        } catch (error) {
            console.error('Error deleting dokumentasi:', error);
        }
    };

    const handleCancelDelete = () => {
        setModalShow(false);
    };

    return (
        <div>
            <div className="flex flex-wrap">
                {dokumentasiUrls.map((url, index) => (
                    <div key={index} className="relative inline-block m-2">
                        <img
                            src={`http://localhost:3000${url}`}
                            alt={`dokumentasi-${index}`}
                            className="h-24 w-24 rounded-full object-cover cursor-pointer"
                            onClick={() => handleDeleteConfirmation(url)}
                        />
                        <button
                            onClick={() => handleDeleteConfirmation(url)}
                            className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
            <ConfirmationModal
                show={modalShow}
                title="Hapus Dokumentasi"
                message="Apakah Anda yakin ingin menghapus dokumentasi ini?"
                onConfirm={handleDelete}
                onCancel={handleCancelDelete}
            />
        </div>
    );
};

export default DocumentationManager;