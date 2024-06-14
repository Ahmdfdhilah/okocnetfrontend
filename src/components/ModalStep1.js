import React from 'react';

const ModalStep1 = ({ onNext }) => {
    return (
        <div className="space-y-4">
            <div className='mb-6'>
                <p className='text-xl text-black text-justify'>Lengkapi identitas data diri anda dengan menekan tombol "Masuk" dibawah ini, untuk memastikan anda mendapatkan pelayanan terbaik dan informasi terbaru dari kami!</p>
            </div>
            <a href='https://ecsys.okoce.net/'>
                <button
                    type="button"
                    className="w-full text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  hover:bg-red-700 dark:focus:ring-blue-800">
                    Masuk
                </button>
            </a>
            <button
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={onNext}
            >
                Lewati
            </button>
        </div>
    );
};

export default ModalStep1;
