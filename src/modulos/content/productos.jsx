import React from 'react';
import '../Colors/productos.css';

const Productos = () => {
    const productos = [
        { id: 1, imagen: "https://hiperlibertad.vtexassets.com/arquivos/ids/176058-800-auto?v=637533400564870000&width=800&height=auto&aspect=true", titulo: "Sabrosito", descripcion: "Alimento balanceado que ofrece proteínas de alta calidad y vitaminas esenciales para mantener la energía y vitalidad del gato adulto.", precio: "$30.000", stock: "Stock: 10" },
        { id: 2, imagen: "https://http2.mlstatic.com/D_NQ_NP_668678-MLA74357942166_022024-O.webp", titulo: "Infinity", descripcion: "Formulación premium con alto contenido de omega-3 y omega-6 para un pelaje sano, ideal para gatos activos y de interior.", precio: "$25.000", stock: "Stock: 5" },
        { id: 3, imagen: "https://http2.mlstatic.com/D_NQ_NP_766412-MLU70044953130_062023-O.webp", titulo: "Agility", descripcion: "Alimento diseñado para gatos adultos activos, con nutrientes que promueven la agilidad y el fortalecimiento de músculos y articulaciones.", precio: "$34.000", stock: "Stock: 3" },
        { id: 4, imagen: "https://www.golocan.com.ar/wp-content/uploads/2023/05/BENEFIT-GATO-ADULTO-e1684337632212.png", titulo: "Benefit", descripcion: "Con un alto contenido de fibra y antioxidantes, este alimento apoya la salud digestiva y el sistema inmunológico de los gatos adultos.", precio: "$39.000", stock: "Stock: 10" },
        { id: 5, imagen: "https://hoplatam.com/img/productos/gatos/adultos.png", titulo: "Hop!", descripcion: "Formulado con proteínas de alta calidad y minerales esenciales para fortalecer los huesos y mantener un peso saludable.", precio: "$30.000", stock: "Stock: 6" },
        { id: 6, imagen: "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_purina_gasty_sabores_caseros_pescado_arroz_espinaca_gatos_1500g_512x512.jpg?v=1632338289", titulo: "Gatsy", descripcion: "Receta casera de pescado, arroz y espinaca para un sabor delicioso, con vitaminas y minerales que mejoran la salud ósea y digestiva.", precio: "$65.000", stock: "Stock: 2" }
    ];

    return (
        <div className='container m-auto bg-dark mt-5 rounded-3'>
            <h2 className='p-3 text-white' style={{ borderBottom: "1px solid #fff" }}>Alimento de gato adulto</h2>
            <div className="productos-row overflow-auto">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto-card">
                        <div className="card bg-body h-100">
                            <img src={producto.imagen} alt={producto.titulo} className="card-img-top producto-imagen" style={{ height: '150px', objectFit: 'contain' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{producto.titulo}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p>{producto.stock}</p>
                                <h5 className="card-text">{producto.precio}</h5>
                                <button className="btn btn-primary mt-auto">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="productos-row overflow-auto">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto-card">
                        <div className="card bg-body h-100">
                            <img src={producto.imagen} alt={producto.titulo} className="card-img-top producto-imagen" style={{ height: '150px', objectFit: 'contain' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{producto.titulo}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p>{producto.stock}</p>
                                <h5 className="card-text">{producto.precio}</h5>
                                <button className="btn btn-primary mt-auto">Comprar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;
