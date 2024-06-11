import React from 'react';
import ModalHeader from "@img/Modal7Top.jpg";

const ModalStep2 = ({ onNext }) => {
    return (
        <>
            <div>
                <img src={ModalHeader} alt='' className='mb-8'></img>
                <button
                    type="button"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={onNext}
                >
                    Lewati
                </button>
            </div>
        </>
    );
};

export default ModalStep2;
