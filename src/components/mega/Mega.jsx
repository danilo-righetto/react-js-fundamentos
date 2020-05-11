import React, { useState } from 'react'

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumeros).fill(0));

    function gerarNumerosNaoContido(array){
        const max = 60
        const min = 1
        const novoNumero = parseInt(Math.random() * (max - min)) + min;
        return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero;
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdeNumeros)
        .fill(0)
        .reduce(a => [...a, gerarNumerosNaoContido(a)], [])
        .sort((a, b) => a - b)
        setNumeros(novoArray);
    }
    return (
        <>
            <h2>Mega Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    );
}