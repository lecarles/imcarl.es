import React from "react";
import styles from "./index.module.css";
import Link from 'gatsby-link';


export default () => (
  <content>
  <div className={styles.wrapper}>
	 <div className={styles.bgline}>
	  	<svg height="810" width="810">
	        <line className={styles.str} x1="100" y1="200" x2="850" y2="850"/>
	    </svg>
	  </div>

	<div className={styles.picture}><Link to="/visoren/">.</Link></div>  
  	<div className={styles.project}> <Link to="/visoren/">
  		<h2>visoren fest 5</h2> 
   	 	<h3>_Brand Identity _Digital </h3>
    	<p>Work for the Visoren Music Festival, held in Gandia and organized by the Students' Residence and the University.</p> 
	</Link>
  	</div>

		<svg className={styles.next} height="130" width="130">
	        
	        <circle className={styles.str} cx="63" cy="63" r="54"/>
	        <line className={styles.str} x1="40" y1="63" x2="80" y2="63"/>
	        
	        <line className={styles.str} x1="68" y1="83" x2="83" y2="61"/>
	        <line className={styles.str} x1="68" y1="43" x2="83" y2="65"/>
	    </svg>

	    <svg className={styles.page} height="130" width="130">
	        
	        <circle className={styles.str} cx="63" cy="63" r="54"/>
	        <p>1/5</p>

	    </svg>

  </div>
  </content>
);