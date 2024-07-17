import React, { useEffect, useState } from "react";
import axios from "axios";

const MitraList = () => {
    const [mitras, setMitras] = useState([]);

    useEffect(() => {
        const fetchMitras = async () => {
            try {
                const response = await axios.get("https://okocenet-72f35a89c2ef.herokuapp.com/mitras");
                setMitras(response.data.data); 
            } catch (error) {
                console.error("Error fetching mitras:", error);
            }
        };

        fetchMitras();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-6 justify-items-center mobile:grid-cols-1 mobile:px-10 md:grid-cols-4 lg:p-10">
            {mitras.map((mitra) => (
                <div key={mitra.id}>
                    <img
                        className="h-auto max-w-full rounded-lg shadow-md"
                        src={`http://localhost:3000${mitra.foto}`}
                        alt={mitra.nama} 
                    />
                </div>
            ))}
        </div>
    );
};

export default MitraList;
