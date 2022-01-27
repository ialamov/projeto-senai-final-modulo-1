import React, { useState, useEffect } from "react";
import '../App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Header from "../components/shared/Header";
import SubHeader from "../components/shared/SubHeader"


function  Map() {
  const [ apiCompanies, setApiCompanies ] = useState();

  useEffect(() => {
    async function apiDataCompanies () {
      try {
      const data = await fetch('http://localhost:3333/empresas')
      const dataJson = await data.json();
      setApiCompanies(dataJson);
      } catch (erro) {
        alert('Que pena! Tivemos um problema em nosso servidor, mas já estamos trabalhando nisto! Tente novamente mais tarde.')
      }
    }
    apiDataCompanies();
  }, [])

  return (
    <div>
      <Header />
      <div id="map">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>


            {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {
                apiCompanies.map(item => ( 
                  <Marker position={[item.latitude, item.longitude]}>
                    <Popup>
                      <p>Nome: {item.name}</p>
                    </Popup>
                  </Marker>
                ))
              }
            </MapContainer> */}
          {/* </div> */}
    </div>
  )
}

export default Map;