import React from 'react'
import { getimgurl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.con} id="about">
        <h2 className={styles.title}>About</h2>
        <p className={styles.abt}>Passionate about web development with a strong grasp of algorithms and data structures, eager to contribute to innovative projects in software engineering.</p>
        <div className={styles.txt}>
            <img className={styles.aboutimg} src={getimgurl("about/about.png")} alt="girl" style={{width:"35%"}}></img>
            <ul className={styles.aitems}>
                <li className={styles.aitem}><img src={getimgurl("about/edu.png")} alt="one" style={{width:"21%"}}></img>
                <div className={styles.out}>
                    <h3>Education</h3>  
                    <div className={styles.in}>
                        <h4>B.Tech in Computer Science and Engineering</h4>
                        <p>Jawaharlal Nehru Technological University Hyderabad</p>
                        <p>CGPA:9.3</p>
                        <p>Expected graduation date:May 2025</p>
                    </div>  
                    <div className={styles.in}>
                        <h4>Diploma in Computer Engineering</h4>
                        <p>Government Polytechnic,Masab Tank</p>
                        <p>CGPA:9.8</p>
                        <p>May 2022</p>
                    </div>
                </div>
                </li>
                <li  id="experience" className={styles.aitem}><img src={getimgurl("about/exp.png")} alt="one" style={{width:"21%"}}></img>
                <div className={styles.out}>
                    <h3>Experince</h3>  
                    <div  className={styles.in}>
                        <h4>Website Developer</h4>
                        <p>CRIMSON INNOVATIVE TECHNOLOGIES</p>
                        <p>Responsive website development using HTML, CSS, JS, BootstrapResponsive website development using HTML, CSS, JS, Bootstrap</p>
                        <p>2022</p>
                    </div>  
                    
                </div>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default About
