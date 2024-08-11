import React, { useState } from 'react'; 

import MainHeader from './components/MainHeader';
import NavBar from './components/NavBar';
import MyProjects from './components/MyProjects';
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
      <NavBar />
      <MainHeader />
      <MyProjects />
      
    </>
  )
}

export default App
