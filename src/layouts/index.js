import React from "react";
import Link from "gatsby-link";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default ({ children }) => (
   <div>
   <Navbar></Navbar>

   {children()}
  </div>
);