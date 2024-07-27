import React, { useEffect, useState } from "react";

const DeskripsiComponent = () => {
    const [deskripsi, setDeskripsi] = useState('');
    const [sosmeds, setSosmeds] = useState([]);

    useEffect(() => {
        const fetchDeskripsi = async () => {
            try {
                const response = await fetch('http://localhost:3000/deskripsi');
                if (!response.ok) {
                    throw new Error('Failed to fetch deskripsi');
                }
                const data = await response.json();
                setDeskripsi(data);
            } catch (error) {
                console.error('Error fetching deskripsi:', error);
            }
        };

        const fetchSosmeds = async () => {
            try {
                const response = await fetch('http://localhost:3000/sosmeds');
                if (!response.ok) {
                    throw new Error('Failed to fetch sosmeds');
                }
                const data = await response.json();
                setSosmeds(data.data);
            } catch (error) {
                console.error('Error fetching sosmeds:', error);
            }
        };

        fetchDeskripsi();
        fetchSosmeds();
    }, []);

    return (
        <div className="flex flex-col flex-grow mobile:mt-10 lg:ml-16">
            <div className="pb-5 mobile:mt-0">
                <h3
                    id="about-headline"
                    className="text-center lg:text-left text-sm leading-9 lg:text-5xl font-bold-700 text-black mobile:text-xl mobile:font-bold"
                >
                    {deskripsi.title}
                </h3>
            </div>
            <div className="pb-5">
                <h3 className="text-black text-justify font-light font-jost">{deskripsi.deskripsi}</h3>
            </div>
            <div className="flex items-center">
                <div className="font-jost font-semibold text-slate-600 mr-4">Share</div>
                {sosmeds.map((item) => (
                    <div className="mx-2" key={item.id}>
                        <a href={item.link} target="_blank">
                            <img src={`http://localhost:3000${item.foto}`} className="max-h-7 max-w-7 lg:max-h-12 lg:max-w-12" alt={item.nama} />

                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeskripsiComponent;