import React from 'react';
import Link from 'gatsby-link';
import logo from "../img/logonou.png";
import styles from "./navbar.module.css";

const Navbar = (props) =>{
	return(
			<div className={styles.nav}>
      	    <Link to="/"><img src={logo}/></Link>
            <Link to="/about/">about</Link>
			</div>
		)
}
		
export default Navbar;