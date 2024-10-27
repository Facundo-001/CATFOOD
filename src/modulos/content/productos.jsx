import React from 'react'
import '../Colors/productos.css';

const Productos = () => {
    // Array de productos simulados
    const productos = [
        { id: 1, imagen: "", titulo: "Producto 1",descripcion: "none :3", precio: "$10.00" },
        { id: 2, imagen: "", titulo: "Producto 2",descripcion: "none :3", precio: "$15.00" },
        { id: 3, imagen: "", titulo: "Producto 3",descripcion: "none :3", precio: "$20.00" },
        { id: 4, imagen: "", titulo: "Producto 4",descripcion: "none :3", precio: "$25.00" },
        { id: 5, imagen: "", titulo: "Producto 5",descripcion: "none :3", precio: "$30.00" },
        { id: 6, imagen: "", titulo: "Producto 6",descripcion: "none :3", precio: "$35.00" },
        // Puedes agregar más productos aquí
    ];

    return (
        <div className='m-5 rounded-5 p-0 bg-gris'>
            <h2 className='p-3 text-white' style={{borderBlockEnd: "1px solid #222"}}>Alimento de gato adulto</h2>
            <div className="productos-grid">    
                {productos.map((producto) => (
                    <div key={producto.id} className="producto-card bg-body">
                        <img src={producto.imagen} alt={producto.titulo} className="producto-imagen" />
                        <div className="producto-info">
                            <h5>{producto.titulo}</h5>
                            <p>{producto.descripcion}</p>
                            <p>{producto.precio}</p>
                        </div>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Productos;
