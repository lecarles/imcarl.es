import React, { Component } from "react";
import styles from "./style.module.css";
import ReactDOM from 'react-dom';
import cami1 from "../img/visoren/shirt2.png";

class AboutPage extends Component {

constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
      <p>About me.</p>
        <img src={cami1} onClick={this.handleOpenModal}/>
        <Modal 
           isOpen={this.state.showModal}
        >
        	<img src={cami1}/>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

export default AboutPage;