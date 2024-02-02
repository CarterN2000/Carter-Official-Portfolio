import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useState } from 'react'

const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
      });
    }
  };
  

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className={styles.navbar} id='topOfPage'>
                <Link className={`${styles.link} ${styles.homeLink}`} to='/' onClick={() => scrollToSection('topOfPage')}>Carter Nichols</Link>
                <div className={styles.linkList}>
                    <img className={styles.hamburgerButton} src={
                        menuOpen ? 'closeIcon.png' : 'menuIcon.png'
                    } alt="Icon" onClick={() => setMenuOpen(!menuOpen)} />
                    <div className={`${styles.hamburgerItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                        <Link className={styles.link} to='/about' onClick={() => scrollToSection('about')}>About</Link>
                        <Link className={styles.link} to='/experience' onClick={() => scrollToSection('experience')}>Experience</Link>
                        <Link className={styles.link} to='/projects' onClick={() => scrollToSection('projects')}>Projects</Link>
                        <Link className={styles.link} to='/contact' onClick={() => scrollToSection('contact')}>Contact Me</Link>
                    </div>
                </div>
        </nav>
    )
}


                {/* 
                <a href="/"> Carter's Portfolio</a>
                           <div className={styles.linkList}></div>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul> */}