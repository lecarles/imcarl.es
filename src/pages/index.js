import React from "react";
import styles from "./indexhi.module.css";
import Link from 'gatsby-link';
import PDF from  "../img/carles_pf.pdf";

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

      <p>Meanwhile you can check out my <a href="https://drive.google.com/file/d/1s0mYfYw5vZqFjCkmCJfi7idIEA41qG9A/view?usp=sharing">pdf portfolio</a>, visit <a href="https://www.behance.net/carles261298d3">my behance</a> or email me at <a href="mailto:carles@kisd.de">carles@kisd.de</a></p>
  	</div>



  </div>

);
