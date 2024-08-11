import React from "react";

const NavBar = () => {
    return(
        <>
            <nav className="main__page__navbar__container">
                <h2>Bem-Vindo ao Meu Porfolio</h2>
                <ul className="main__page__navbar">
                    <li className="navbar__item">Sobre mim</li>
                    <li className="navbar__item">Meus Projetos</li>
                    <li className="navbar__item">Contato</li>
                </ul>
                
            </nav>
        
        </>
    );
}

export default NavBar;