import myProfile from '../assets/profile_images/myProfile.jpeg'

function ProfileLoading() {
  
  return (
    <div className='introduction__page'>
      <div className="loading__screen__5s profile__borders">
        <picture className="glowing__profile">
          <img className='profile__image__area glow__area' src={myProfile} alt="Pedro's own photo" />
        </picture>
      </div>
      <header className='welcoming__header'>
        <h1>Olá, seja bem-vindo ao meu portfolio.</h1>
      </header>
    </div>
  )
}

export default ProfileLoading
