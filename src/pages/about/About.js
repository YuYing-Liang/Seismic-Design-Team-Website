import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Profile from '../../components/Profile';
// import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <div className="parallax team"> 
          <div className="big-font bottom-quote" id="team">
            The Team
          </div>
        </div>
        <Container fluid>
          <div className="p-4">
            <div className="row mt-5 mb-5 mr-2 ml-2">
              <div className="col-lg card">
                <div className="card-body">
                  <p>
                  The University of Toronto Seismic Design Team (UTSD) is comprised of both engineering and architectural undergraduates who collaborate on designing, building, and analyzing a scaled balsa wood model of a high rise structure.
                  <br/><br/>
                  In the annual EERI Undergraduate Seismic Design Competition (SDC), the team will be judged on the structural model’s seismic performance, delivery of an oral presentation, poster design, architectural design and general workmanship.
                  Collectively, all of these criteria are captured in a final score called the Final Annual Building Income (FABI) which is used to determine the winner.
                  <br/><br/>
                  By designing a robust yet cost effective structure, UTSD team members are given an excellent hands-on opportunity to learn the basic principles of structural and seismic engineering in an out of classroom environment.
                  Scroll down to learn more about the team this year!
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg text-center">
                <h1> Meet the Team! </h1>
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <Profile image="Daniel_2018.jpg" memberName="Daniel Pekar" role="Team Captain" blurb="Daniel is the 2020 UTSD Team Captain. He's excited for his fourth year on the team and is looking forward to leading a highly innovative team this upcoming year. His biggest fears are overlooked rule violations and torsional modes."/>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Senior DnA Leads </h2>
              <div className="row">
                <Profile image="no_head_shot.jpg" memberName="Shuocheng (Shirley) Zhang" role="Senior DnA Lead" blurb="I'm a third year Civil Engineering student interested in building/bridge design and structural dynamics. The U of T Seismic Team allowed me to meet like-minded individuals and put theoretical knowledge into practice."/>
                <Profile image="Liam_2018.jpg" memberName="Liam Ma" role="Senior DnA Lead" blurb="I joined the Seismic Design Team because it is a great team-building experience where we apply course content and skills towards the design of a great final product - a tower that can withstand lots of shaking! This year, I'm looking forward to using topology optimization to improve the design of our towers. There is always something new to explore when you're on the team, so the fun never ends!"/>
                <Profile image="Kota_2018.jpg" memberName="Kota Abe" role="Senior DnA Lead" blurb="I'm a civil engineering student on PEY. I joined seismic because most of our structural engineering courses are theoretical and I wanted to build something physical."/>
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Junior DnA Leads </h2>
              <div className="row">
                <Profile image="no_head_shot.jpg" memberName="Karen Rojas Avila" role="Junior DnA" blurb=""/>
                <Profile image="no_head_shot.jpg" memberName="Alex Vespa" role="Junior DnA Lead" blurb="I'm a third year civil engineering student interested in structural engineering. I joined seismic to learn more about tower design and using structural analysis software. In my free time I enjoy playing guitar and soccer."/>
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Construction Leads </h2>
              <div className="row">
                <Profile image="no_head_shot.jpg" memberName="Rain Luo" role="Construction Lead" blurb="Hi! I’m one of the three construction leads for this year’s seismic team. I look forward to working on this fun design project with all of you, and to most importantly, make new friends that have the same interests as me. I promise I don’t bite so come say hi when you see me."/>
                <Profile image="Kaison_2018.jpg" memberName="Kaison Cheung" role="Construction Lead" blurb="I’m a second year civil engineering student. I like seismic because I enjoy the hands-on experience and it is exciting to see a beautiful structure being built!"/>
                <Profile image="no_head_shot.jpg" memberName="Michael Metallo" role="Construction Lead" blurb="I joined seismic in order to gain a better understanding of structural engineering, and to learn more about the process behind efficient construction.  Seismic provides a great opportunity for anyone in civil engineering to learn about building construction in a fun team environment."/>
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Cool People </h2>
              <div className="row">
                <Profile image="yuying.jpg" memberName="YuYing Liang" role="Webmaster" blurb="I'm a 2nd year EngSci student who doesn't know a lot about structural design and hope to learn more about it!😁 I enjoy coding, making websites and bubble tea 😋"/>
                <Profile image="no_head_shot.jpg" memberName="Mei " role="Architecture Lead" blurb=""/>
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}
