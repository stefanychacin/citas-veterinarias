import React from 'react';
import './carritoDeCompras.css';
import Sweater from './sweater';


const Carrito = ({carrito, cargarAlCarrito}) => {
    return (  
        <div className="carritoDeCompras">
            <h2 >Tus selecciones</h2>
        {carrito.map( sweater => (
            <Sweater 
            key = {sweater.id}
            sweater = {sweater}
            carrito = {carrito}
            cargarAlCarrito = {cargarAlCarrito}
            />)
        )}
        </div>
    );
}
 
export default Carrito;