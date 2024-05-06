import React from 'react';

function Youtube(props) {
    return (
        <>
            <div class="w-11/12">
                <iframe
                    className="mx-auto mobile:w-full mobile:h-72 lg:w-8/12 lg:h-96"
                    src={props.src} // Ganti VIDEO_ID dengan ID video YouTube yang Anda inginkan
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div >
        </>
    );
}

export default Youtube;
