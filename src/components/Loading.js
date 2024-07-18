import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="text-center text-white">
                <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold mr-1">Loading</span>
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;
