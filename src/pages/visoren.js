import React, { Component } from "react";
import ReactDOM from 'react-dom';
import styles from "./style.module.css";
import Link from 'gatsby-link';
import ModalImage from 'react-modal-image'

import header from "../img/visoren/visorenheader.png";
import twitter from "../img/visoren/twittermockup.png";
import poster1 from "../img/visoren/cartel1.jpg";
import poster2 from "../img/visoren/cartel2.jpg";
import poster3 from "../img/visoren/cartel3.jpg";
import cami1 from "../img/visoren/shirt2.png";
import cami2 from "../img/visoren/shirt1.png";

class Visoren extends Component {

render () { 
  return(
    <div className={styles.wrapper}>
      <div className={styles.bgline}>
      	<svg height="1000" width="1000">
            <line className={styles.str} x1="100" y1="200" x2="800" y2="800"/>
        </svg>
      </div>
      
      <div className={styles.linkback}><Link to="/">_back to all</Link></div>
      
      <div className={styles.project}> 
      	<h2>visoren fest 5</h2> 
        <h3>_Brand Identity _Digital </h3>
        <p>Work for the Visoren Music Festival, held in Gandia and organized by the Students' Residence and the University.</p> 	
      </div>
      
 
      <img className={styles.header} src={header}/>    
    	<p className={styles.text1}><mark> It’s a space where all the campus’ bands can showcase their music, nevermind their style or their quality.</mark></p> 
      
      <div className={styles.posters}>
        <div id={styles.poster1}>
          <ModalImage id={styles.Modal} small={poster1} large={poster1} alt="poster first version"/>
        </div>

        <div id={styles.poster2}>
          <ModalImage small={poster2} large={poster2} />
        </div>

        <div id={styles.poster3}>
          <ModalImage small={poster3} large={poster3} />
        </div>
      </div>  


      	<p className={styles.text2}><mark>A composition of photos of previous editions was used to convey the ecletic, universitary feel of the festival; while celebrating its fifth aniversary by remembering its past editions.</mark> </p> 
      	<img className={styles.cami1} src={cami1}/>
      	<img className={styles.cami2} src={cami2}/>
    	   <img className={styles.twitter} src={twitter}/>
         <ul>
          <li><Link to="/">next project_</Link></li>
          <li><Link to="/">_previous project</Link></li>
         </ul>
    </div>
    );
  }

}

export default Visoren;