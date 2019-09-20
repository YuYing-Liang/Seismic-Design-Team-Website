import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'reactstrap';

export default class Media extends Component {
  render() {
    const images = [...Array(10).keys()].map(x => {
        return <div className="mb-3 pics animation">
                    <img className="img-fluid" src={require('../images/Gallery/' + (x+1) + '.jpg')} alt=""/>
                </div>
    });
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
            <div className="big-font text-dark">
                Media
            </div>
            <br/><br/><br/><br/>
            <div class="card text-center mb-5">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <button className="nav-link active">Competition</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link non-active">build season</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link non-active">fun times</button>
                    </li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="gallery" id="gallery">
                        {images}
                    </div>
                </div>
            </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}