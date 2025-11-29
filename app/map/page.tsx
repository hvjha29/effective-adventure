'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MapPage() {
  const istanbulCenter: LatLngExpression = [41.0082, 28.9784];

  const markers: { pos: LatLngExpression; label: string }[] = [
    { pos: [40.9902, 29.0281], label: "Çiya Sofrası" },
    { pos: [41.0164, 28.9709], label: "Spice Bazaar" },
    { pos: [41.0256, 28.9742], label: "Galata Tower" },
    { pos: [41.0310, 28.9766], label: "Pera Palace" },
    { pos: [41.0115, 28.9834], label: "Topkapı Palace" },
    { pos: [41.0054, 28.9768], label: "Blue Mosque" },
  ];

  return (
    <main className="content-wrapper">
      <h1>Trip Map</h1>
      <p>All the important (and chaotic) spots from our adventures.</p>

      <div style={{ height: "500px", width: "100%", marginTop: "20px" }}>
        <MapContainer
          center={istanbulCenter}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", borderRadius: "12px" }}
        >
          <TileLayer
            attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map((m, i) => (
            <Marker key={i} position={m.pos}>
              <Popup>{m.label}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
}
