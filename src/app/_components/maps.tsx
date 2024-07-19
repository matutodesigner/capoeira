import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Maps() {
  return (
    <MapContainer
      center={[-21.9188294, -42.72227]}
      zoom={8}
      className=" h-96 w-full"
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-21.9188294, -42.72227]}>
        <Popup>
          Além Paraíba-MG <br />
          (matriz)
        </Popup>
      </Marker>
      <Marker position={[-21.7579233, -42.8209389]}>
        <Popup>Santo Antônio do Aventureiro - MG</Popup>
      </Marker>
      <Marker position={[-21.8657564, -43.023796]}>
        <Popup>Mar de Espanha - MG</Popup>
      </Marker>
      <Marker position={[-22.0002004, -42.9463035]}>
        <Popup>Sapucaia - RJ</Popup>
      </Marker>

      <Marker position={[-22.0232144, -42.3969464]}>
        <Popup>Cordeiro - RJ</Popup>
      </Marker>
      <Marker position={[-22.7852022, -43.3903683]}>
        <Popup>São João de Meriti - RJ</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Maps
