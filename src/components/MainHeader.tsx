

import React from 'react';
import profileImage from "../assets/profile_images/myProfile.jpeg";

const MainHeader = () => {
  return (
    <div className='main__header__container'>
      <div className="header__wrapper">
        <div className="wrap__introduction__content">
          <header className="main__header">
            <h1>Pedro Kauã de Barros Leite</h1>
          </header>
          <section className="about__me__container">
            <p>Olá, me chamo Pedro Kauã de Barros Leite. Sou um analista de suporte técnico que gosta de programar como hobby, e que tem a intenção de fazer deste sua principal renda, se possível. A momento, estou em busca do meu primeiro emprego como desenvolvedor front-end. E claro, mais conhecimento e desafios.</p>
          </section>
        </div> 
        <picture className='profile__picture__container'>
          <img className='teste' src={profileImage} alt="Minha foto" />
        </picture>
      </div>
    </div>
  );
};

export default MainHeader;
