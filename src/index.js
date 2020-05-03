import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro 
      titulo="Esse é o titulo" 
      subtitulo="Esse é o subtitulo" />
  </div>,
  document.getElementById('root')
);