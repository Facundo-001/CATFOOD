import React from 'react'
import NavBar from './modulos/NavBar'
import Carrusel from './modulos/content/Carrusel'
import Footer from './modulos/Footer'


const App = () => {
  return (
    <div>
      <NavBar />
        {/* contenido */}
        <div className='mt-5'>
          <Carrusel />
        </div>
        <Footer />
    </div>
  )
}

export default App