import React, { useState } from 'react';
import ModalStep1 from './ModalStep1';
import ModalStep2 from './ModalStep2';
import ModalStep3 from './ModalStep3';

const Modal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
        console.log('Step:', step + 1);  // Debugging log
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
            <div className="relative w-full max-w-md p-4 bg-white rounded-lg shadow-lg bg-gray-600 animate-fade-up animate-once animate-delay-[20ms]">
                <div className="flex items-center justify-between p-4 border-b-2 rounded-t dark:border-gray-600">
                    <div className="">
                        <h3 className="text-xl font-semibold text-black">
                            {step === 1 ? <> <p className='text-center mobile:ml-8 lg:ml-20'>SELAMAT DATANG <br /> DI OK OCE INDONESIA!</p></> : step === 2 ? 'ALUR 7 TOP OK OCE INDONESIA' : 'EVENT TERBARU OK OCE INDONESIA'}
                        </h3>
                    </div>
                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={onClose}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    {step === 1 ? (
                        <ModalStep1 onNext={handleNext} />
                    ) : step === 2 ? (
                        <ModalStep2 onNext={handleNext} onClose={onClose} />
                    ) : (
                        <ModalStep3 onClose={onClose} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
