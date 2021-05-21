import React from 'react';

const Sweater = ({sweater, carrito, cargarAlCarrito, sweaters}) => {

    const {nombre, precio, id} = sweater;

    const carritoCompras = (id) => {
        const sweater = sweaters.filter(sweater => sweater.id === id)[0];
        cargarAlCarrito([
            ...carrito,
            sweater
        ]);}

    const eliminarDelCarrito = id => {
        const sweaters = carrito.filter(sweater => sweater.id !== id);
        cargarAlCarrito(sweaters)
    }


    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>{precio}</p>
             
            { sweaters
            ?
                (
                    <button 
                    type="button" 
                    onClick={() => carritoCompras(id) }
                    >Comprar</button>
                )
            :   (
                    <button 
                    type="button" 
                    onClick={() => eliminarDelCarrito(id) }
                     >Eliminar</button>
                )}
        </div>

     );
}
 
export default Sweater;