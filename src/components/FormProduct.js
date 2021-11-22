import React, { useState } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
import SubHeader from "../components/shared/SubHeader"

export default function FormProduct() {
  const history = useHistory();

  const [imgproduct, setImgproduct] = useState('');
  const [productName, setProductName] = useState('');
  const [costs, setCosts] = useState('');
  const [description, setDescription] = useState('');
  const [supplier, setSupplier] = useState('');
  const [group, setGroup] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();

        if (imgproduct.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'URL da imagem'.`);
          return;
        }

        if (productName.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Nome'.`);
          return;
        }

        if (costs.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Custo unitário'.`);
          return;
        }
        
        if (description.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Descrição'.`);
          return;
        }
        
        if (supplier.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Fornecedor'.`);
          return;
        }
        
        if (group.length === 0) {
          alert(`Todos os campos devem ser preenchidos. Verifique o campo 'Grupo'.`);
          return;
        }
      try{
        await fetch('http://localhost:3333/produtos', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            imgproduct,
            productName,
            costs,
            description,
            supplier, 
            group,
          })
        });
        alert('Sucesso! Parabéns, mais um produto cadastrada!');
        history.push('/');
      } catch (error) {
        alert('Que pena! Tivemos um problema em nosso servidor, mas já estamos trabalhando nisto! Tente novamente mais tarde.')
      }
    }

  return (
    <form className="container-companyForm" onSubmit={ handleChange }>
      <div className>
        <SubHeader 
          pageTitle="Novo Produto"
          btnDescription="Salvar"
        />
      </div>
      <hr/>
      <div className="container-1 imgProduct">
        <img src={ imgproduct } alt={ productName } />
      </div>
      <div className="container-1">
        <div className="container-1">
          <label for="imgproduct" className="s1">URL da imagem</label>
          <input 
            type="text" 
            className="imgproduct s2"
            name="imgproduct"
            value={ imgproduct }
            onChange={ (e) => setImgproduct(e.target.value)}
          />
        </div>
        <div className="container-1">
          <div className="container-1">
            <label
            className="s1"
            for="productName">Nome</label>
            <input
              type="text"
              className="productName s2"
              name="productName"
              value={ productName }
              onChange={ (e) => setProductName(e.target.value)}
            />
          </div>
          <div className="container-1">
            <label
            className="s1"
            for="costs">Custo unitário</label>
            <input
              type="text"
              className="costs s2"
              name="costs"
              value={ costs }
              onChange={ (e) => setCosts(e.target.value)}
            />
          </div>
        </div>
        <div className="container-1">
          <label
          className="s1"
          for="description">Descrição</label>
          <input
            type="text"
            className="description s2"
            name="description"
            value={ description }
            onChange={ (e) => setDescription(e.target.value)}
          />
        </div>
          <div className="container-1">
            <label
            className="s1"
            for="supplier">Fornecedor</label>
            <input
              type="text"
              className="supplier s2"
              name="supplier"
              value={ supplier }
              onChange={ (e) => setSupplier(e.target.value)}
            />
            <label
            className="s1"
            for="group">Grupo</label>
            <input
              type="text"
              className="group s2"
              name="group"
              value={ group }
              onChange={ (e) => setGroup(e.target.value)}
            />
          </div>
        </div>
    </form>
  )
}
