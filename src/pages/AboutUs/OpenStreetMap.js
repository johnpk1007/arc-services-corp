import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import AvgIcon from "../../images/icon/map.svg";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

export default function Map() {
  const newIcon = new L.Icon({
    iconUrl: AvgIcon,
    iconRetinaUrl: AvgIcon,
    popupAnchor: [-0, -0],
    iconSize: [100, 100],
  });
  return (
    <MapContainer
      center={[25.76223780295944, -80.19810798220898]}
      zoom={11}
      scrollWheelZoom={false}
      maxZoom={13}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[25.76223780295944, -80.19810798220898]}
        icon={newIcon}
      />
    </MapContainer>
  );
}
