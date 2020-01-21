import React, { Component } from 'react';
import Sponsor from '../../components/Sponsor';

export default class Sponsors2020 extends Component {

  render() {
    return (
    <div>
        <h1 className="text-center text-info font-weight-bold"> Silver Sponsors </h1>
        <Sponsor    image="" 
                    sponsor="Stantec" 
                    des="Stantec is a modern engineering firm that focuses on designing for communities across the globe. They believe that communities provide a sense of place and belonging."
                    link="https://www.stantec.com/en/about/company-overview"/>
        <h1 className="text-center text-info font-weight-bold"> We would also like to thank </h1>
        <Sponsor    image="associated_engineering.jpg" 
                    sponsor="Associated Engineering" 
                    des="Associated Engineering is a firm committed to building communities that are vibrant, healthy, and efficient, support economic growth, and improve the environment. They are a uniquely Canadian, employee-owned company that brings global perspectives to their clients from their international experience and technical involvement." 
                    link="https://www.ae.ca/"/>
    </div>);
  }
}