import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'reactstrap';
import $ from 'jquery';

export default class Media extends Component {

    constructor(props) {
        super(props);
        this.state = {
          images: [...Array(15).keys()].map(x => {
            return <div className="mb-3 pics animation">
                        <img className="img-fluid" src={require('../images/Gallery/comp/' + (x+1) + '.jpg')} alt=""/>
                    </div>
            })
        };
        this.onClick = this.onClick.bind(this);
      }
    
      onClick(e){
        const name = e.target.id
        const numImages = 15;
        this.setState({
            images: [...Array(numImages).keys()].map(x => {
                return <div className="mb-3 pics animation">
                            <img className="img-fluid" src={require('../images/Gallery/' + name.trim() + "/" + (x+1) + '.jpg')} alt=""/>
                        </div>
                })
        })
        $('.sponsor-tab').removeClass().addClass('nav-link non-active sponsor-tab')
        $('#' + name).removeClass('non-active').addClass('active')
      }

    render() {
        return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="big-font text-dark">
                    Media
                </div>
                <br/><br/><br/><br/>
                <div className="card text-center mb-5">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <button id="comp" className="nav-link active sponsor-tab" onClick={this.onClick}>competition</button>
                        </li>
                        <li className="nav-item">
                            <button id="build" className="nav-link non-active sponsor-tab" onClick={this.onClick}>build season</button>
                        </li>
                        <li className="nav-item">
                            <button id="fun" className="nav-link non-active sponsor-tab" onClick={this.onClick}>fun times</button>                        </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="gallery" id="gallery">
                            {this.state.images}
                        </div>
                    </div>
                </div>
            </Container>
            <Footer/>
        </div>
        );
    }
}