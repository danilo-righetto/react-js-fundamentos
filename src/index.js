import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

ReactDOM.render(
  <div>
    <ComFilhos>
      <ul>
        <li>Ana</li>
        <li>Carlos</li>
        <li>Danilo</li>
      </ul>
    </ComFilhos>
    {/* <Primeiro></Primeiro>
    <ComParametro 
      titulo="Esse é o titulo" 
      subtitulo="Esse é o subtitulo" /> */}
  </div>,
  document.getElementById('root')
);