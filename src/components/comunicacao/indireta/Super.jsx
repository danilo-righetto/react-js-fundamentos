import React, { useState } from 'react'
import Sub from './Sub'

export default (props) => {

    // usando destructuring
    const [num, setNum] = useState(0);
    const [texto, setTexto] = useState('Valor');

    function quandoClicar(valorGerado, texto){
        console.log('Ação!!!')
        console.log(valorGerado)
        setNum(valorGerado)
        setTexto(texto)
    }
    return (
        <div>
            <h2>Componente Super - {texto}: {num}</h2>
            <Sub onClicar={quandoClicar}>Componente SUB</Sub>
        </div>
    );
}
