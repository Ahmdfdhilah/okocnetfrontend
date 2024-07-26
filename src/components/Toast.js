import React, { useEffect, useState } from 'react';

const Toast = ({ message, type, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (message) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                onClose();
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            setShow(false);
        }
    }, [message, onClose]);

    let bgColor = 'bg-green-500';
    if (type === 'error') {
        bgColor = 'bg-red-500';
    } else if (type === 'info') {
        bgColor = 'bg-blue-500';
    }

    return (
        show && (
            <div className={`fixed bottom-10 right-10 p-4 rounded-lg text-white ${bgColor} shadow-lg z-50`}>
                <p>{message}</p>
            </div>
        )
    );
};

export default Toast;