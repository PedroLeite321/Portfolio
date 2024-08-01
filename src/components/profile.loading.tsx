import '../styles/App.css'
import myProfile from '../assets/profile_images/myProfile.jpeg'

function ProfileLoading() {
  
  return (
    <>
      <div className='introduction__page'>
        <div className="loading__screen__5s">
          <picture className="glowing__profile">
            <img className='profile__image__area glow__area' src={myProfile} alt="Pedro's own photo" />
            
          </picture>
        </div>
      </div>
    </>
  )
}

export default ProfileLoading
