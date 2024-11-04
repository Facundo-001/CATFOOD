import React from 'react';
import '../Colors/productos.css';

const Productos = () => {
    // Array de productos simulados
    const productos = [
        { id: 1, imagen: "https://hiperlibertad.vtexassets.com/arquivos/ids/176058-800-auto?v=637533400564870000&width=800&height=auto&aspect=true", titulo: "Producto 1", descripcion: "none :3", precio: "$10.00" },
        { id: 2, imagen: "https://http2.mlstatic.com/D_NQ_NP_668678-MLA74357942166_022024-O.webp", titulo: "Producto 2", descripcion: "none :3", precio: "$15.00" },
        { id: 3, imagen: "https://http2.mlstatic.com/D_NQ_NP_766412-MLU70044953130_062023-O.webp", titulo: "Producto 3", descripcion: "none :3", precio: "$20.00" },
        { id: 4, imagen: "https://www.golocan.com.ar/wp-content/uploads/2023/05/BENEFIT-GATO-ADULTO-e1684337632212.png", titulo: "Producto 4", descripcion: "none :3", precio: "$25.00" },
        { id: 5, imagen: "https://hoplatam.com/img/productos/gatos/adultos.png", titulo: "Producto 5", descripcion: "none :3", precio: "$30.00" },
        { id: 6, imagen: "https://lavaquita.co/cdn/shop/products/supermercados_la_vaquita_supervaquita_purina_gasty_sabores_caseros_pescado_arroz_espinaca_gatos_1500g_512x512.jpg?v=1632338289", titulo: "Producto 6", descripcion: "none :3", precio: "$35.00" },
    ];

    return (
        <div className='container m-auto bg-dark mt-5'>
            <h2 className='p-3 text-white' style={{ borderBlockEnd: "1px solid #222" }}>Alimento de gato adulto</h2>
            <div className="row">
                {productos.map((producto) => (
                    <div key={producto.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="card bg-body h-100">
                            <img src={producto.imagen} alt={producto.titulo} className="card-img-top producto-imagen" style={{ height: '150px', objectFit: 'contain' }} />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{producto.titulo}</h5>
                                <p className="card-text">{producto.descripcion}</p>
                                <p className="card-text">{producto.precio}</p>
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
