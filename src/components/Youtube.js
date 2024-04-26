import React from 'react';

function Youtube(props) {
    return (
        <>
            <div>
                <iframe
                    width="800" // Atur lebar video sesuai kebutuhan Anda
                    height="400" // Atur tinggi video sesuai kebutuhan Anda
                    src={props.src} // Ganti VIDEO_ID dengan ID video YouTube yang Anda inginkan
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </>
    );
}

export default Youtube;
