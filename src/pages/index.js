import React from "react";
import styles from "./indexhi.module.css";
import Link from 'gatsby-link';


export default () => (
  <div className={styles.wrapper}>
 
  	<div className={styles.project}>
  		
      <div className={styles.bgline}>
        <svg height="125" width="125">
          <line className={styles.str} x1="2" y1="2" x2="120" y2="100"/>
        </svg>
      </div>

      <h2>hi!</h2> 

    	<p>I’m <mark>Carles Ibáñez</mark>, 20 year old audiovisual communication student, freelance designer, and Marshall McLuhan fanboy</p>

      <p>I’m currently programming this personal page/portfolio, come back later to see how it turned out!</p>

      <p>meanwhile you can check my <a href="../img/carles_pf.pdf">pdf portfolio</a>, visit my behance or email me at carles2612@gmail.com</p>
  	</div>



  </div>

);