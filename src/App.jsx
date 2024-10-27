import React from 'react'
import NavBar from './modulos/NavBar'
import Carrusel from './modulos/content/Carrusel'
import Footer from './modulos/Footer'
import Productos from './modulos/content/productos'


const App = () => {
  return (
    <div>
      <NavBar />
        {/* contenido */}
        <div className='mt-5'>
          <Carrusel />
          <Productos />
        </div>
        <Footer />
    </div>
  )
}

export default App