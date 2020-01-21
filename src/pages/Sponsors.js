import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'reactstrap';
import SkuleSponsors from './sponsors/SkuleSponsors';
import Sponsors201617 from './sponsors/Sponsors201617';
import Sponsors2018 from './sponsors/Sponsors2018';
import Sponsors2019 from './sponsors/Sponsors2019';
import Sponsors2020 from './sponsors/Sponsors2020';
import $ from 'jquery';

export default class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sponsorCollection: <Sponsors2020/>
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    const year = e.target.id
    if(year === "2020"){
      this.setState({
        sponsorCollection: <Sponsors2020/>
      })
    }else if(year === '2019'){
      this.setState({
        sponsorCollection: <Sponsors2019/>
      })
    }else if(year === '2018'){
      this.setState({
        sponsorCollection: <Sponsors2018/>
      })
    }else{
      this.setState({
        sponsorCollection: <Sponsors201617/>
      })
    }
    $('.sponsor-tab').removeClass().addClass('nav-link non-active sponsor-tab')
    $('#' + year).removeClass('non-active').addClass('active')
  }
  
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid className="col-lg-10 body-content">
          <div className="big-font text-dark">
            Sponsors
          </div>
          <br/><br/>
          <div className="row">
              <div className="card mb-5">
              <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                  <li className="nav-item">
                    <button id="2020" className="nav-link active sponsor-tab" onClick={this.onClick}>2020</button>
                  </li>
                  <li className="nav-item">
                    <button id="2019" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2019</button>
                  </li>
                  <li className="nav-item">
                    <button id="2018" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2018</button>
                  </li>
                  <li className="nav-item">
                    <button id="2017" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2017</button>
                  </li>
                  <li className="nav-item">
                    <button id="2016" className="nav-link non-active sponsor-tab" onClick={this.onClick}>2016</button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {this.state.sponsorCollection}
              </div>
            </div>
            <div className="container row">
              <SkuleSponsors/>
            </div>
            </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}