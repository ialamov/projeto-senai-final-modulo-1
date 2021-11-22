import React from 'react';
import { useHistory } from 'react-router';
import '/Users/douglasialamov/Documents/SENAI/projetos/projeto-modulo-1-final/src/App.css';

export default function SubHeader(props) {
  const history = useHistory();
  return (
    <div className="container-subHeader">
      <div>
        <h1>{ props.pageTitle }</h1>
      </div>
      <div className="subBtn">
        <button 
          type="button"
          onClick={ () => history.push('/') }
        >
          Cancelar
        </button>
        <button 
          type="submit"
        >
          { props.btnDescription }
        </button>
      </div>
    </div>
  )
}
