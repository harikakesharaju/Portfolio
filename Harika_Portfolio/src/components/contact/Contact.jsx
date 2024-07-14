import React from 'react'
import { getimgurl } from '../../utils'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
   <footer className={styles.con} id="contact">
    <div className={styles.txt}>
        <h2>Contact</h2>
        <p>Feel free to reach out.</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
        <img src={getimgurl("contact/email.png")} alt="emailicon" style={{"width":"6%","border-radius":"50%"}}></img>
        <a href="mailto:harikakesharaju@gmail.com">harikakesharaju@gmail.com</a>
        </li>
        <li  className={styles.link}>
        <img src={getimgurl("contact/linkedin.png")} alt="linkedinicon"style={{"width":"6%","border-radius":"50%","margin-bottom":"4px"}}></img>
        <a href="https://www.linkedin.com/in/harika-kesharaju-42b045210">linkedin.com/harika-kesharaju</a>
        </li>
        <li className={styles.link}>
        <img src={getimgurl("contact/git.png")} alt="githubicon" style={{"width":"4.5%","border-radius":"50%"}}></img>
        <a href="https://github.com/harikakesharaju">github.com/harikakesharaju</a>
        </li>
    </ul>
   </footer>
  )
}

export default Contact
