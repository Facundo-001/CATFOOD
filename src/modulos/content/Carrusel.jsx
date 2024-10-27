import React from 'react'

const Carrusel = () => {
    return (
        // https://static.ultima-affinity.com/catalog/8410650818719/3d-Pack/mediumImage
        <div className='w-75 mx-auto'> {/* Centrar el carrusel */}
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner rounded-3">
                    <div className="carousel-item active bg-dark">
                        <img 
                            src="https://static.ultima-affinity.com/catalog/8410650818719/3d-Pack/mediumImage" 
                            className="d-block w-100" 
                            alt="..." 
                            style={{ height: '400px', objectFit: 'contain' }} // Controlar la altura y mantener la relación de aspecto
                        />
                    </div>
                    <div className="carousel-item bg-dark">
                        <img 
                            src="https://premierpet.com.br/es/wp-content/uploads/sites/4/2022/04/montagem-linha-premier-gatos.png" // Cambia esta URL por la imagen que desees
                            className="d-block w-100" 
                            alt="..." 
                            style={{ height: '400px', objectFit: 'contain' }} 
                        />
                    </div>
                    <div className="carousel-item bg-dark">
                        <img 
                            src="https://http2.mlstatic.com/D_NQ_NP_901657-MLU75358374659_032024-O.webp" // Cambia esta URL por la imagen que desees
                            className="d-block w-100" 
                            alt="..." 
                            style={{ height: '400px', objectFit: 'contain' }} 
                        />
                    </div>
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#carouselExampleAutoplaying" 
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#carouselExampleAutoplaying" 
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carrusel