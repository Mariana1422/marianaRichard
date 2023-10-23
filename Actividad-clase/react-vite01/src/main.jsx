import React from 'react'
import ReactDOM from 'react-dom/client'
import { TercerComponente } from './TercerComponente'
// import { SegundoComponente } from './SegundoComponente'
// import { PrimerComponente } from './PrimerComponente'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PrimerComponente /> */}

    {/* <SegundoComponente 
     titulo="Clase React SENA" 
     subtitulo="Vite"
     /> */}

     <TercerComponente value={100}/>
  </React.StrictMode>,
)
