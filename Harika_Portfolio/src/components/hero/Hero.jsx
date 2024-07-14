import React from 'react'
import { getimgurl } from '../../utils'
import styles from "./Hero.module.css"

const Hero = () => {
  return <section className={styles.con}>
    <div className={styles.txt}>
        <h1 className={styles.title}>Hi, I am Harika Kesharaju</h1>
    <p className={styles.des}>I am a student.Reach out if you'd like to know more.</p>
    <a className={styles.mail} href="mailto:harikakesharaju@gmail.com">Contact Me</a>
    </div>
    <img className={styles.hero} src={getimgurl("hero/hero.png")} alt="hero image"></img>
    <div className={styles.topbar}></div>
    <div className={styles.bottombar}></div>
  </section>
}

export default Hero

//rafc for this type of boiler plate code
