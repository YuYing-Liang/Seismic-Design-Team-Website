import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Event from '../components/Event';
import { Container } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Description from '../components/Description';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <div className="parallax home"> 
          <div className="left-quote big-font" id="welcome">Welcome</div>
          <div className="main-quote right-quote">
            <div className="card">
              <div className="card-header"> UofT Seismic Design Team</div>
              <div className="card-body">
                <h2 className="card-title font-weight-bold"> Seis·mic </h2>
                <i className="card-subtitle mb-2 text-muted"> /ˈsīzmik/ &emsp; &emsp; adjective</i>
                <div className="card-text">
                  relating to earthquakes or other vibrations of the earth and its crust.
                  <ul>
                    <li>relating to or denoting geological surveying methods involving vibrations produced artificially by explosions</li>
                    <li>of enormous proportions or effect.
                        <div className="text-muted">
                        "there are seismic pressures threatening you at skule"
                        </div></li>
                  </ul>
                </div>
                <AnchorLink href="#what" className="btn btn-dark">Learn More <span role="img" aria-label="down">🔽</span></AnchorLink>
              </div>
            </div>
          </div>
        </div>
        <Container fluid className="col-lg-10 body-content">
          <br/><br/><br/><br/><br/>

          <div id="what"></div>
          <Description align="left" title="What is Seismic?" description="The University of Toronto Seismic Design Team 
          (UTSD) aims to promote seismic engineering to the undergraduate engineering student body."/>

          <br/>

          <Description align="left" title="Who is Seismic?" description="UTSD consists of both undergraduate and graduate students from both the 
          engineering and architectural faculties collaborating to design a scale high rise structure out of balsa wood."/>

          <br/>

          <Description align="left" title="What do we do?" description="
              The team will compete in the Annual Seismic Design Competition hosted by the Earthquake Engineering Research Institute (EERI) in which universities from around the world test their structures on a shake table competing in seismic performance, predictions, and cost-analysis.
              The Seismic Design Team aims to represent Skule at a competition level while providing students with the chance to be involved in a multi-disciplinary, complex design challenge."/>
            
          <br/><br/>
          <Event image="construction.jpg" eventName="Construction Event!" date="Nov 6th and 7th [18:15-19:15]" location="Myhal Basement, UofT"
                 text="Do YOU want to build things with balsa wood? Yeah you do! Come out to our weekly construction build
                       events in our workshop so you can meet cool people who also like making things and learn new skills!"/>

          <Event image="kickoff-meeting.jpg" eventName="KickOff Meeting" date="Friday, September 20th, 2019 [18:00-18:30]" location="GB303, UofT"
                 text="Find out all the quaking details of our awesome team at our very exciting Kickoff Meeting.
                      You'll learn about the cool things we build out of wood and meet our cool team members. Seismic is
                      a GREAT way to get into structural engineering, even if your new to the concepts of structural design.
                      So 🅱️e there. Or 🅱️e Square."/>
          <Event image="club-fair.jpg" eventName="Club Fair" date="Wednesday, September 4th, 2019 [12-5pm]" location="Bahen Atrium, UofT"
                 text="Interested in Seismic Design Team? Want to become a member of the BEST design team at skule?
                      Then come on down to Bahen to start off the skule year by learning more about our team. 
                      We'll have you shook. 😉"/>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default Home;