import { MapContainer, TileLayer  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className="relative z-0">
      <MapContainer
        center={[39.46065528327018, -0.38188461978603605]}
        zoom={8}
        style={{ height: '700px', width: '100%' }}
        className='relative'
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default Map;