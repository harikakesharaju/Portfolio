import React from 'react';
import { getimgurl } from '../../utils';
import styles from "./Projectcard.module.css"

const Projectcard = ({ project: { title, imgsrc, description, skills, code } }) => {
  return (
    <div className={styles.con}>
      <img className={styles.img} src={getimgurl(imgsrc)} alt={`Image of ${title}`} style={{ width: "100%" }} />
      <h3 className={styles.title}>{title}</h3>
      <p  className={styles.des}>{description}</p>
      <ul  className={styles.skills}>
      {skills.map((skill, id) => (
  <li className={styles.skill} key={id}>{skill}</li>
))}

      </ul>
      <div  className={styles.links}>
        <a className={styles.link} href={code}>Code</a>
      </div>
    </div>
  );
};

export default Projectcard;
