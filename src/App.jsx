import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

import Navbar from './components/Navbar'
import About from './components/About'
import Main from './components/Main'
import Experience from './components/Experience'

function App() {

  return (
  <div className={styles.App}>
    <Navbar />
    <Main />
    <About />
    <Experience />
  </div>
  )
}

export default App
