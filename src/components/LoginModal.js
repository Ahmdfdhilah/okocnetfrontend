import React from 'react';

const LoginModal = ({ show, handleClose, title, message }) => {
    return (
        <>
            {show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-1/3">
                        <div className="flex justify-between items-center border-b p-4">
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <button
                                className="text-black close-modal focus:outline-none"
                                onClick={handleClose}
                            >
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="p-4">
                            {message}
                        </div>
                        <div className="flex justify-end border-t p-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginModal;