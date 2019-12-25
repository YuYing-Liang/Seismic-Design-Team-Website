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
              <Profile image="leads/daniel.jpg" memberName="Daniel Pekar" role="Team Captain" blurb="Daniel is the 2020 UTSD Team Captain. He's excited for his fourth year on the team and is looking forward to leading a highly innovative team this upcoming year. His biggest fears are overlooked rule violations and torsional modes."/>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Senior DnA Leads </h2>
              <div className="row">
                <Profile image="leads/shirley.jpg" memberName="Shuocheng (Shirley) Zhang" role="" blurb="Shirley is a third year Civil Engineering student interested in building/bridge design and structural dynamics. The U of T Seismic Team allowed her to meet like-minded individuals and put theoretical knowledge into practice."/>
                <Profile image="Liam_2018.jpg" memberName="Liam Ma" role="" blurb="Liam joined the Seismic Design Team because it is a great team-building experience where we apply course content and skills towards the design of a great final product - a tower that can withstand lots of shaking! This year, He is looking forward to using topology optimization to improve the design of our towers. There is always something new to explore when you're on the team, so the fun never ends!"/>
                <Profile image="leads/kota.jpg" memberName="Kota Abe" role="" blurb="Kota is a civil engineering student on PEY. He joined seismic because most of our structural engineering courses are theoretical and he wanted to build something physical."/>
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Junior DnA Leads </h2>
              <div className="row">
                <Profile image="leads/karen.jpg" memberName="Karen Rojas Avila" role="" blurb=""/>
                <Profile image="leads/alex.jpg" memberName="Alex Vespa" role="" blurb="Alex is a third year civil engineering student interested in structural engineering. He joined seismic to learn more about tower design and using structural analysis software. In his free time he enjoys playing guitar and soccer."/>
                <Profile image="leads/maher.jpg" memberName="Maher Absar" role="" blurb="Maher is currently a third-year student interested in structural engineering, design and construction of infrastructure.  He is excited to apply his engineering skills and see the results come to life as a top-notch balsa wood tower."/>
                <Profile image="leads/eliza.jpg" memberName="Eliza Van Weerdhuizen" role="" blurb="Eliza joined the Seismic Design Team to learn new skills and gain relevant experience outside of the classroom, including innovative techniques that aren’t part of the curriculum.  She is excited to be part of the team and work together to solve important and interesting challenges."/>
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> Construction Leads </h2>
              <div className="row">
                <Profile image="no_head_shot.jpg" memberName="Rain Luo" role="" blurb="Rain is one of the three construction leads for this year’s seismic team. He looks forward to working on this fun design project with everyone, and most importantly, make new friends that have the same interests as him. Rain is super friendly so come say hi when you see him."/>
                <Profile image="leads/kaison.jpg" memberName="Kaison Cheung" role="" blurb="Kaison is a second year civil engineering student. He likes seismic because he enjoys the hands-on experience and is always excited to see a beautiful structure being built!"/>
                <Profile image="leads/michael.jpg" memberName="Michael Metallo" role="" blurb="Michael joined seismic in order to gain a better understanding of structural engineering, and to learn more about the process behind efficient construction.  Seismic provides a great opportunity for anyone in civil engineering to learn about building construction in a fun team environment."/>
              </div>
            </div>
            <div className="row mb-5 mr-2 ml-2">
              <h2 className="big-font text-dark mb-5"> MultiMedia and Architecture </h2>
              <div className="row">
                <Profile image="leads/yuying.jpg" memberName="YuYing Liang" role="Webmaster" blurb="YuYing is a 2nd year EngSci student who doesn't know a lot about structural design and hopes to learn more about it!😁 She enjoys coding, making websites and bubble tea 😋"/>
                <Profile image="leads/mei.jpg" memberName="Meimenat Cheng" role="Architecture Lead" blurb="Mei is very excited to be working with such a wonderful team and she looks forward to interweaving architectural design into the seismic resilient structure!"/>
                <Profile image="leads/jinbo.jpg" memberName="Jinbo Yu" role="Media and Graphics" blurb="Jinbo is a third-year civil engineering student who is passionate about building design and earthquake engineering. He is currently doing his PEY. This year, he will be helping out with the team’s communication and outreach efforts."/>
                <Profile image="leads/bo.jpg" memberName="Bo Zhao" role="Media and Graphics" blurb="Bo joined Seismic Design mainly to learn more about structural analysis. Another reason why Bo joined was to continue to developing his skills in creating architectural 
renderings. He thought he was going to quit his hobby of making graphics coming to university, but now, Bo thinks he's going to need it more than ever :)."/>
                <Profile image="leads/aakash.jpg" memberName="Aakash Budhera" role="Finance Lead" blurb="Aakash is the new finance lead for the 2020 UofT Seismic design team. He is excited to support the team with new fundraising strategies. He joined Seismic because of his interest in CIV102 (don't tell the other Engscis), and to work with sponsors and donors."/>
              </div>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}
