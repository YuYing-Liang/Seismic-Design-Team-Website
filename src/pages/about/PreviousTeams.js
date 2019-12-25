import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
            <div className="big-font text-dark">
                Media
            </div>
            <br/><br/><br/><br/>
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
            </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}
