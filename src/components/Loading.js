import React from 'react';

const Loading = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
            <div className="flex justify-center items-center h-screen">
                <div className="flex flex-row gap-2">
                    <div className="w-4 h-4 rounded-full bg-black animate-bounce"></div>
                    <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;
