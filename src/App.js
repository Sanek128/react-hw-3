// import logo from './logo.svg';
import React from 'react'
import './App.css';
import ControledForma from './ControledForma';
import Forma from './Forma';
import FormId from './FormId';
import FormByName from './FormByName';

function App() {
  return (
    <div className="mainDiv">
      {/* <Forma/> */}
      {/* <ControledForma/> */}
      <FormId/>
      <FormByName/>
    </div>
  );
}

export default App;
