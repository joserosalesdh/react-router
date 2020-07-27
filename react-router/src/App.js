import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Prueba from './components/Prueba'
import Invoices from './components/Invoices'

class App extends Component {
  render(){
    return (
      <div className="App">
       <Route exact path="/" component={Prueba}/> 
       <Route exact path="/invoices" component={Invoices}/> 
      </div>
    );
  }
  
}

export default App;

//Route recibe dos propiedades, path que es donde le indicamos en que ruta se va a renderizar el componente.. y tambien recibe la propiedad de component, pero con letra minuscula al que le pasamos en compoonen de prueba que creamos en al carpeta components