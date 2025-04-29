import React, { useState, useEffect, FC } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

interface MarkerData {
  coordinates: [number, number];
  title: string;
}

const MapComponent: FC = () => {
  const [markerData, setMarkerData] = useState<MarkerData | null>({
    coordinates: [-6.180058596033731, 106.81129804350759],
    title: "DPRKP DKI Jakarta",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleMarkerClick = () => {
    const googleMapsUrl = `https://maps.app.goo.gl/7rMtXsPyqfyAn5Tp6`;
    window.open(googleMapsUrl, "_blank");
  };

  const ZoomHandler: FC = () => {
    const map = useMap();
    const flyToMarker = (coordinates: [number, number], zoom: number) => {
      if (coordinates && typeof coordinates[0] !== "undefined") {
        map.flyTo(coordinates, zoom, {
          animate: true,
          duration: 1.5,
        });
      }
    };
    useMapEvents({
      zoomend: () => {
        setLoading(false);
      },
    });

    useEffect(() => {
      if (markerData) {
        if (
          markerData.coordinates &&
          typeof markerData.coordinates[0] !== "undefined"
        ) {
          flyToMarker(markerData.coordinates, 15);
        }
      }
    }, [markerData]);
    return null;
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      <MapContainer
        center={[-6.180058596033731, 106.81129804350759]}
        zoom={10}
        style={{ height: "200px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markerData && markerData.coordinates && (
          <Marker
            position={markerData.coordinates}
            eventHandlers={{ click: handleMarkerClick }}
          ></Marker>
        )}
        <ZoomHandler />
      </MapContainer>
    </>
  );
};

export default MapComponent;