import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
        <div className="container p-4">
            <div className="row">
            <div className="col-md-6">
                <h5>Acerca de Nosotros</h5>
                <p>
                Somos una empresa dedicada a proporcionar alimentos saludables y nutritivos para gatos.
                Nuestra misión es ofrecer productos de alta calidad para mejorar la vida de las mascotas.
                </p>
            </div>

            <div className="col-md-3">
                <h5>Enlaces útiles</h5>
                <ul className="list-unstyled">
                <li><a href="#!" className="text-white">Inicio</a></li>
                <li><a href="#!" className="text-white">Productos</a></li>
                <li><a href="#!" className="text-white">Contacto</a></li>
                </ul>
            </div>

            <div className="col-md-3">
                <h5>Redes Sociales</h5>
                <ul className="list-unstyled">
                <li><a href="#!" className="text-white">Facebook</a></li>
                <li><a href="#!" className="text-white">Instagram</a></li>
                <li><a href="#!" className="text-white">Twitter</a></li>
                </ul>
            </div>
            </div>
        </div>

        <div className="text-center py-3 bg-secondary">
            &copy; 2024 CatFood. Todos los derechos reservados.
        </div>
        </footer>
    );
}

export default Footer;
