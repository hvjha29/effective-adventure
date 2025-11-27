type LatLngTuple = [number, number];
'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MapPage() {
  return (
    <main className="content-wrapper">
      <h1>Trip Map</h1>
      <p>Here’s everywhere we’ve been — from bougie brunch spots to chaotic bachelorette adventures.</p>
      <div style={{ height: "500px", width: "100%", marginTop: "20px" }}>
        // @ts-ignore
        <MapContainer
          center={[41.0082, 28.9784]} // Default center: Istanbul
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", borderRadius: "12px" }}
        >
          <TileLayer
            attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[40.9902, 29.0281]}>
          <Popup>Çiya Sofrası — Chef’s Table famous lunch spot.</Popup>
          </Marker>

          <Marker position={[41.0164, 28.9709]}>
          <Popup>Spice Bazaar — Self-guided chaos and too many spices.</Popup>
          </Marker>

          <Marker position={[41.0256, 28.9742]}>
          <Popup>Galata Tower — We skipped the lines because we’re smart.</Popup>
          </Marker>

          <Marker position={[41.0310, 28.9766]}>
          <Popup>Pera Palace — Atatürk’s room hits emotionally.</Popup>
          </Marker>

          <Marker position={[41.0115, 28.9834]}>
          <Popup>Topkapi Palace — The cultural redemption arc.</Popup>
          </Marker>

          <Marker position={[41.0054, 28.9768]}>
          <Popup>Blue Mosque — Stunning as always.</Popup>
          </Marker>
          
          <Marker position={[40.9929, 29.0270]}>
            <Popup>
              Kadıköy Pier — Where the ferry madness began.
            </Popup>
          </Marker>

        </MapContainer>
      </div>
    </main>
  );
}

