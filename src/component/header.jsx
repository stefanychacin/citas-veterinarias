import React from 'react';

function Header( {saludo} ){
    const edad = 21;
    let mayorMenor;
        if (edad >= 21){
            mayorMenor = 'Eres mayor de edad'
        }else{
            mayorMenor = 'Eres menor de edad'
        }

    return (
        <div>
            <h1>{mayorMenor}</h1>
            <h1> {saludo} </h1>
        
        </div>
    );
}

export default Header;