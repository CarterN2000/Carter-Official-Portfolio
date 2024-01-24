import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useState } from 'react'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
                <Link className={`${styles.link} ${styles.homeLink}`} to='/'>Carter's Porfolio</Link>
                <div className={styles.linkList}>
                    <Link className={styles.link} to='/about'>About</Link>
                    <Link className={styles.link} to='/projects'>Projects</Link>
                    <Link className={styles.link} to='/contact'>Contact Me</Link>
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