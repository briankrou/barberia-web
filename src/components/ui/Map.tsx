import React, { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const center = { lat: 4.614742685828124, lng: -74.0899769446689 };

const LocationMarker: React.FC = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Map: React.FC = () => {
  return (
    <MapContainer center={center} zoom={13} className="w-full h-[200px]  z-10">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          <div className="text-center">
            <h2 className="text-lg font-bold">Nuestra Barbería</h2>
            <p>Dirección: Calle Falsa 123, Bogotá</p>
            <p>Horario: Lunes a Viernes, 9am - 8pm</p>
            <p>Sábados, 9am - 6pm</p>
            <p>Teléfono: +57 123 456 7890</p>
          </div>
        </Popup>
      </Marker>
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
