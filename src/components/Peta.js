import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import Mapindo from "../PetaIndonesia.json";
import 'leaflet/dist/leaflet.css';

const Peta = () => {
    return (
        <MapContainer
            center={[-2.5, 118.0]}
            zoom={window.innerWidth <= 640 ? 3 : 5}
            style={{ background: 'white', height: '60vh', width: '80vw', margin: 'auto', marginTop: '2%', marginBottom: '5%', zIndex: '0' }}
            scrollWheelZoom={false}
            className="sm:zoom-3"
        >
            <GeoJSON
                data={Mapindo}
                style={() => ({
                    color: '#3388ff',
                    weight: 1,
                    fillColor: '#3388ff',
                    fillOpacity: 0.4
                })}
                onEachFeature={(feature, layer) => {
                    layer.bindTooltip(() => {
                        const name = feature.properties.NAME_1; // Ubah menjadi properti yang sesuai dengan data GeoJSON Anda
                        const user = feature.properties.USER; // Ubah menjadi properti yang sesuai dengan data GeoJSON Anda
                        const penggerak = feature.properties.GROUP; // Ubah menjadi properti yang sesuai dengan data GeoJSON Anda
                        return `<div><strong>${name}</strong></div><div>${penggerak}</div><div>${user}</div>`;
                    });
                    layer.on({
                        mouseover: (e) => {
                            const layer = e.target;
                            layer.setStyle({
                                fillOpacity: 1.0
                            });
                        },
                        mouseout: (e) => {
                            const layer = e.target;
                            layer.setStyle({
                                fillOpacity: 0.4
                            });
                        }
                    });
                }}
            />
        </MapContainer>
    );
};

export default Peta;
