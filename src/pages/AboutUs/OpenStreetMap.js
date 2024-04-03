import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import AvgIcon from "../../images/icon/map.svg";

export default function Map() {
  const newIcon = new L.Icon({
    iconUrl: AvgIcon,
    iconRetinaUrl: AvgIcon,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });
  return (
    <MapContainer
      center={[25.76223780295944, -80.19810798220898]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker
        position={[25.76223780295944, -80.19810798220898]}
        icon={newIcon}
      />
    </MapContainer>
  );
}
