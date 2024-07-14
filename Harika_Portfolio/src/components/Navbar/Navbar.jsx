import React,{useState} from 'react'
import styles from './Navbar.module.css'
import {getimgurl} from "../../utils.js"

function Navbar() {
    const [mopen,setmopen]=useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menubtn} style={{width:"27px"}} 
            src={mopen?getimgurl("nav/menuclose.png"):
                getimgurl("nav/menuicon.png")} 
                onClick={()=>setmopen(!mopen)}
                alt='nav'></img>
            <ul className={`${styles.menuit} ${mopen && styles.mopen}`} 
            onClick={()=>setmopen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
