import React, { useState, useEffect } from "react";
import '../App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Header from "../components/shared/Header";
import MarkerClusterGroup from "react-leaflet-markercluster";


function  Map() {
  const [ apiCompanies, setApiCompanies ] = useState();

  useEffect(() => {
    async function apiDataCompanies () {
      try {
      const data = await fetch('http://localhost:3333/empresas')
      const dataJson = await data.json();
      setApiCompanies(dataJson);
      } catch (erro) {
        alert('Que pena! Tivemos um problema, mas já estamos trabalhando nisto! Tente novamente mais tarde.')
      }
    }
    apiDataCompanies();
  }, [])

  const test = () => {
    return (
      <MarkerClusterGroup
      spiderfyDistanceMultiplier={1}
      showCoverageOnHover={true}
      >
        {apiCompanies.map((companie, index) => (
          <Marker
            key={index}
            position={[companie.latitude, companie.longitude]}
          >
            <Popup>
              <h1>{companie.companyFantasyName}</h1>
              <p>{companie.address}</p>
              <p>{companie.addressNumber}</p>
              <p>{companie.city}</p>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    )
  }

  return (
    <div>
      <Header />
      <div className="container-map">
        <div id="map">
          <MapContainer center={[-27.548126271976365, -48.49779431491411]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {apiCompanies && test()}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default Map;