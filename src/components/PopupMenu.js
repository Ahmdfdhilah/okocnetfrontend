import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';


const PopupMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        // Buka modal secara otomatis ketika komponen dirender
        setIsModalOpen(true);
    }, []);

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100">
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </>
    )
}

export default PopupMenu;