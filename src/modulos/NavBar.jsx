import React from 'react'
import "./Colors/StyleBar.css"

const NavBar = () => {
    return (
        <header>
            <nav className="navbar" style={{backgroundColor: "#8F47C2"}}>
                <div className="container-fluid navbar-expand-lg navbar-dark">
                    <a className="navbar-brand letra-bonita" href="#">
                        {/* <img alt="Logo" src="https://pbs.twimg.com/profile_images/1547217154247991298/aDsvaEc2_400x400.jpg" width="34" height="34" className="d-inline-block align-text-top"></img> */}
                        CAT FOOD
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse item-lista" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item item-lista">
                                <a className="nav-link link-luz" aria-current="page" href="#">Contactame</a>
                            </li>
                            <li className="nav-item item-lista">
                                <a className="nav-link link-luz" href="#">Como alimentar a los gatitos</a>
                            </li>
                            <li className="nav-item dropdown item-lista">
                                <a className="nav-link link-luz dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex ms-auto">
                                <button type="button" className="btn btn-primary position-relative">
                                    <ion-icon name="notifications"></ion-icon>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        0
                                        <span className="visually-hidden">New alerts</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
