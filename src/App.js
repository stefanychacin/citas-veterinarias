import React, { Fragment, useState }from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Sweater from './component/sweater';
import Carrito from './component/CarritoDeCompra.js';


function App() {

  const [ sweaters, setSweters ] = useState ([
    { id: 1, nombre: 'Sweater de Hannah Montana', precio: '$500'},
    { id: 2, nombre:'Sweater de High School Musical', precio: '$700'},
    { id: 3, nombre: 'Sweater de Disney', precio: '$1000'}
  ]);

  const [ carrito, cargarAlCarrito ] = useState([])
  

  //const fecha = new Date().getFullYear();

  return (
  <Fragment>
    < Header 
        saludo = 'Bienvenido'
    />

     <h1>Sweaters disponibles</h1>
     {sweaters.map(sweater =>(
       <Sweater 
       key = {sweater.id}
       sweater = {sweater}
       sweaters = {sweaters}
       carrito = {carrito}
       cargarAlCarrito = {cargarAlCarrito}
       />
     ))}

     <Carrito
      carrito={carrito}
      cargarAlCarrito = {cargarAlCarrito}
      />

    < Footer/>
  </Fragment>
  );
}

export default App;
