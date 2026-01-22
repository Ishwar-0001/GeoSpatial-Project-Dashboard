import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useMemo } from "react";
import L from "leaflet";

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
});

const activeIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconSize: [30, 45],
});

function FlyToMarker({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) map.flyTo(position, 8);
  }, [position, map]);

  return null;
}

export default function MapView({ rows, selectedId, onSelect }) {
  const selectedRow = rows.find((r) => r.id === selectedId);

  const markers = useMemo(
    () =>
      rows.map((row) => (
        <Marker
          key={row.id}
          position={[row.latitude, row.longitude]}
          icon={row.id === selectedId ? activeIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelect(row.id),
          }}
        >
          <Popup>
            <strong>{row.projectName}</strong>
            <br />
            {row.status}
          </Popup>
        </Marker>
      )),
    [rows, selectedId, onSelect]
  );

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers}
      {selectedRow && (
        <FlyToMarker
          position={[selectedRow.latitude, selectedRow.longitude]}
        />
      )}
    </MapContainer>
  );
}
