import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Loadable from 'react-loadable'

// Esta constante se utiliza mucho ya que nos permite configurar un componente de loade, mientras se esta cargando el componente lo que va a hacer es de que nos va a mostrar un texto de cargando o nos va a mostrar otro componente de loading  
const Loader = x => Loadable ({ 
  loadiing : () => 'Cargando...',
  loader: x
})

const Prueba = Loader(() => import ('./components/Prueba'))
const Invoices = Loader(() => import('./components/Invoices'))
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
//yarn add react-loadable