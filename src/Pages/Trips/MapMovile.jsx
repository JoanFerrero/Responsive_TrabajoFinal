import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const BotonConRecuadro = () => {
  const [mostrarRecuadro, setMostrarRecuadro] = useState(false);

  const markers = [
    { position: [39.46065528327018, -0.38188461978603605], content: 'Estacion Valencia', id: '2'},
    { position: [39.151116651506875, -0.4334163018824872], content: 'Estacion Alzira', id: '3'},
    { position: [38.360660311661505, -0.4998189921593576], content: 'Estacion Alicante' , id: '4'},
    { position: [40.17218651047807, -0.00400079934721462], content: 'Estacion Castellon', id: '5' },
    { position: [38.97005410954505, -0.18386601330819674], content: 'Estacion Gandia', id: '6' },
    { position: [38.990477382502384, -0.5221539650020443], content: 'Estacion Xàtiva', id: '7' },
    { position: [38.70061519042403, -0.48407936792019], content: 'Estacion Alcoy', id: '8' },
    { position: [39.680614116764914, -0.28112786095276093], content: 'Estacion Sagunto', id: '9' },
  ];

  return (
    <div className="flex justify-center sm:hidden">
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setMostrarRecuadro(!mostrarRecuadro)}
        >
          Mostrar Recuadro
        </button>
        {mostrarRecuadro && (
          <div className="fixed top-1/2 left-1/2 w-[20rem] h-[26rem] transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded-lg z-50 p-8">
            <MapContainer center={[39.46065528327018, -0.38188461978603605]} zoom={8} style={{ width: '100%', height: '350px' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {markers.map((marker, index) => (
                <Marker position={marker.position} key={index}>
                  <Popup >
                    {marker.content}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default BotonConRecuadro;