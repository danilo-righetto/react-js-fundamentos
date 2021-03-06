import './App.css'
import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) => (
  <div className="App">
    <h1>Fundamentos ReactJS</h1>
    <div className="Cards">
    <Card titulo="#11 - Mega Sena" color="#2F9599">
        <Mega qtdeNumeros={8}></Mega>
      </Card>
      <Card titulo="#10 - Contador" color="#FECEAB">
        <Contador passo={10} valor={1000}></Contador>
      </Card>
      <Card titulo="#09 - Form" color="#99B898">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação Indireta" color="#6C5B7B">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#45ADA8">
        <Pai sobrenome="Freitas Melo"></Pai>
      </Card>
      <Card titulo="#06 - Condicional Com If" color="#FA6900">
        <CondicionalComIf numero={12}></CondicionalComIf>
      </Card>
      <Card titulo="#05 - Condicional" color="#A7226E">
        <Condicional numero={11}></Condicional>
      </Card>
      <Card titulo="#04 - Repetição" color="#EC2049">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#03 - Componente com Filhos" color="#F26B38">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Carlos</li>
            <li>Danilo</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componente com Parametro" color="#F7DB4F">
        <ComParametro
          titulo="Esse é o titulo"
          subtitulo="Esse é o subtitulo" />
      </Card>
      <Card titulo="#01 - Primeiro componente" color="#2F9599">
        <Primeiro />
      </Card>
    </div>
  </div>
);