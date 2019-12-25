import React, { Component } from 'react';
import Sponsor from '../../components/Sponsor';

export default class SkuleSponsors extends Component {

  render() {
    return (
    <div>
        <h1 className="text-center text-info font-weight-bold"> Skule Sponsors </h1>
        <Sponsor image="skule.png" sponsor="UofT Engineering Society" des="Our home 😊" link="http://skule.ca/"/>
        <Sponsor image="eng-sci.jpg" sponsor="Department of Engineering Science" des="" link="http://engsci.utoronto.ca/"/>
        <Sponsor image="civ_eng.png" sponsor="Department of Civil Engineering" des="" link="http://civil.engineering.utoronto.ca/"/>
    </div>);
  }
}