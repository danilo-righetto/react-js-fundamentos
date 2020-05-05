import React from 'react'
import Filho from './Filho'

export default props => 
    <div>
        <h2>Componente Pai</h2>
        <Filho {...props}>João</Filho>
        <Filho sobrenome="Souza">Maria</Filho>
        <Filho sobrenome="Toledo">José</Filho>
    </div>