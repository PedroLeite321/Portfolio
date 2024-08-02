import React, { useState } from 'react'; 
import myProfile from './assets/profile_images/myProfile.jpeg'
import ProfileLoading from './components/profile.loading'
import './styles/index.css'
import './styles/desktop/desktop_landscape.css'
import './styles/desktop/desktop_portrait.css'
import './styles/mobile/mobile.portrait.css'
import './styles/mobile/mobile_landscape.css'
import './styles/mobile/mobile.portrait.css'



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProfileLoading />
    </>
  )
}

export default App
