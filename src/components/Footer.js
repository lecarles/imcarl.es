import React from 'react';
import Link from 'gatsby-link';
import styles from "./navbar.module.css";
import logo from "../img/logonou.png";

const Footer = (props) =>{
	return(
			<footer className={styles.foot}>
      	    <p> (c) Carles Ibáñez, 2018. Cosas de footer tipicas</p>
			</footer>
		)
}
		
export default Footer;