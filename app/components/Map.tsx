'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import type { LatLngExpression, Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect, useRef } from "react";

interface MapProps {
    center: LatLngExpression;
    markers: { pos: LatLngExpression; label: string }[];
    zoom?: number;
    selectedIndex?: number | null;
}

function MapController({ center, zoom, selectedIndex, markers }: { center: LatLngExpression, zoom: number, selectedIndex?: number | null, markers: { pos: LatLngExpression }[] }) {
    const map = useMap();

    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);

    useEffect(() => {
        if (selectedIndex !== undefined && selectedIndex !== null && markers[selectedIndex]) {
            map.flyTo(markers[selectedIndex].pos, 14);
        }
    }, [selectedIndex, markers, map]);

    return null;
}

export default function Map({ center, markers, zoom = 12, selectedIndex }: MapProps) {
    const markerRefs = useRef<(LeafletMarker | null)[]>([]);

    useEffect(() => {
        if (selectedIndex !== undefined && selectedIndex !== null && markerRefs.current[selectedIndex]) {
            markerRefs.current[selectedIndex]?.openPopup();
        }
    }, [selectedIndex]);

    return (
        <div style={{ height: "300px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
            <MapContainer
                center={center}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController center={center} zoom={zoom} selectedIndex={selectedIndex} markers={markers} />

                {markers.map((m, i) => (
                    <Marker
                        key={i}
                        position={m.pos}
                        ref={(ref) => { markerRefs.current[i] = ref; }}
                    >
                        <Popup>{m.label}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
