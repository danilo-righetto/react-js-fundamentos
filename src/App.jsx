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

export default (props) => (
  <div className="App">
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
);