import React, { useState } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
import SubHeader from "../components/shared/SubHeader"

export default function Forms () {
  const history = useHistory();

  const [companyName, setCompanyName] = useState('');
  const [companyFantasyName, setCompanyFantasyName] = useState('');
  const [companyRegistration, setCompanyRegistration] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAdress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [otherInformation, setOtherInformation] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();

        if (companyName.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Razão Social'.`);
          return;
        }

        if (companyFantasyName.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Nome fantasia'.`);
          return;
        }

        if (companyRegistration.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'CNPJ'.`);
          return;
        }
        
        if (companyEmail.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'E-mail'.`);
          return;
        }
        
        if (zipCode.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'CEP'.`);
          return;
        }
        
        if (address.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Endereço'.`);
          return;
        }
        
        if (addressNumber.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Número'.`);
          return;
        }
        
        if (neighborhood.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Bairro'.`);
          return;
        }
        
        if (city.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Cidade'.`);
          return;
        }
        
        if (latitude.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Latitude.`);
          return;
        }
        
        if (longitude.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Longitude'.`);
          return;
        }
      try{
        await fetch('http://localhost:3333/empresas', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            companyName,
            companyFantasyName,
            companyRegistration,
            companyEmail,
            zipCode, 
            address,
            addressNumber,
            neighborhood,
            city,
            otherInformation,
            longitude,
            latitude, 
          })
        });
        alert('Sucesso! Parabéns, mais uma empresa cadastrada!');
        history.push('/');
      } catch (error) {
        alert('Que pena! Tivemos um problema em nosso servidor, mas já estamos trabalhando nisto! Tente novamente mais tarde.')
      }
    }

  return ( 
    <form className="container-companyForm" onSubmit={ handleChange }>
      <div className>
        <SubHeader 
          pageTitle="Nova Empresa"
          btnDescription="Salvar"
        />
      </div>
      <hr/>
      <div className="container-1">
        <div className="container-1">
          <label for="companyName" className="s1">Razão Social</label>
          <input 
            type="text" 
            className="companyName s2"
            name="companyName"
            value={ companyName }
            onChange={ (e) => setCompanyName(e.target.value)}
          />
          <label 
          className="s1"
          for="companyFantasyName">Nome fantasia</label>
          <input 
            type="text"
            className="companyFantasyName s2" 
            name="companyFantasyName"
            value={ companyFantasyName }
            onChange={ (e) => setCompanyFantasyName(e.target.value)}
          />
        </div>
        <div className="container-1">
          <label
          className="s1"
          for="companyRegistration">CNPJ</label>
          <input 
            type="text"
            className="companyRegistration s2"
            name="companyRegistration"
            value={ companyRegistration }
            onChange={ (e) => setCompanyRegistration(e.target.value)}
          />
          
          <label
          className="s1"
          for="companyEmail">E-mail</label>
          <input 
            type="text" 
            className="companyEmail s2"
            name="companyEmail"
            value={ companyEmail }
            onChange={ (e) => setCompanyEmail(e.target.value)}
          />
        </div>
        <div className="container-1">
          <label 
          className="s1"
          for="zipCode">CEP</label>
          <input 
            type="text"
            className="zipCode s2"
            name="zipCode"
            value={ zipCode }
            onChange={ (e) => setZipCode(e.target.value)}
          />
          <label 
          className="s1"
          for="address">Endereço</label>
          <input
            type="text"
            className="adress s2"
            name="adress"
            value={ address }
            onChange={ (e) => setAdress(e.target.value)}
          />
          <div className="container-1">
            <label
            className="s1"
            for="addressNumber">Número</label>
            <input
              type="text"
              className="addressNumber s2"
              name="addressNumber"
              value={ addressNumber }
              onChange={ (e) => setAddressNumber(e.target.value)}
            />
            <label
            className="s1"
            for="neighborhood">Bairro</label>
            <input
              type="text"
              className="neighborhood s2"
              name="neighborhood"
              value={ neighborhood }
              onChange={ (e) => setNeighborhood(e.target.value)}
            />
            <label
            className="s1"
            for="city">Cidade</label>
            <input
              type="text"
              className="city s2"
              name="city"
              value={ city }
              onChange={ (e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="container-1">
          <label
          className="s1"
          for="otherInformation">Complemento</label>
          <input 
            type="text"
            className="otherInformation s2" 
            name="otherInformation"
            value={ otherInformation }
            onChange={ (e) => setOtherInformation(e.target.value)}
            />
          </div>
        <div className="container-1">
          <label 
          className="s1"
          for="latitude">Latitude</label>
          <input 
            type="text"
            className="latitude s2"
            name="latitude"
            value={ latitude }
            onChange={ (e) => setLatitude(e.target.value)}
          />
          <label
          className="s1"
          for="longitude">Longitude</label>
          <input 
            type="text"
            className="longitude s2"
            name="longitude"
            value={ longitude }
            onChange={ (e) => setLongitude(e.target.value)}
          />
        </div>
      </div>
    </form>
  )
}
