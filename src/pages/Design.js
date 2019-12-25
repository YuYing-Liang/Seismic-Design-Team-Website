import React, { Component } from 'react';
import '../App.css';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Description from '../components/Description';
import { Container } from 'reactstrap';
import ImageRow from '../components/ImageRow';

export default class Design extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <div className="parallax design"> 
          <div className="bottom-quote big-font" id="design">Design</div>
        </div>
        <Container fluid>
          <br/><br/><br/><br/><br/><br/>
          <div className="container p-3">
            <Description align="left" title="Testing" description="
            A key aspect of any good design is experimental testing. These tests are important as they allow 
            for model calibration as well as a deeper understanding of the concepts and theories that underlie 
            the response of the tower."
            />
        
            {/*<ImageRow   image1="construction.jpg" caption1="design"
                        image3="shaketable_3.jpg" caption3="shaketable"
    image2="Photo11.jpg" caption2="design"/>*/}
            
            <div className="row m-4">
                <div className="col-lg www-des">
                    <h3><u>Small-scale Tests</u></h3>
                    <p> Balsa wood is not a typical building material, and as such numerous small-scale 
                      tests were conducted to obtain the relevant structural properties. These tests include 
                      three point bending tests, tensile coupon tests, connection tests, and base plate connection 
                      tests, all of which offered valuable insight into the material strength of the balsa wood and 
                      how the analytical model could be calibrated. </p>
                </div>
            </div>

            <div className="row m-4">
                <div className="col-lg www-des">
                    <h3><u>Large-scale Tests</u></h3>
                    <p> Fundamental to the UTSD’s approach are full-scale tests of the completed structure. 
                      These are essential to understanding the dynamic properties of the tower. 
                      Using the shake table at the University of Toronto, we are able to perform sine-sweep 
                      and free vibration tests to find the fundamental period and damping ratio of a particular
                      structure. With this information, our analytical models are calibrated to match the real 
                      life response.
                    </p>
                </div>
            </div>

            <hr/>

            <Description align="left" title="Analysis" description="Our analysis approach involves using both industry-standard structural analysis software and in-house scripts."/>

            <ImageRow   image2="graph.jpg" caption2="graph"
                        image1="Photo4.png" caption1="design"
                        image3="Photo11.jpg" caption3="design"/>

            <div className="row m-4">
                <div className="col-lg www-des">
                    <p> The team uses SAP2000 and S-Frame for structural analysis and then uses Python, MATLAB, and 
                      VBA for post processing and in depth understanding of the results. For example, a MATLAB script 
                      highlights the members that are loaded most closely to capacity</p>
                </div>
            </div>

            <hr/>

            <Description align="left" title="Construc tion" description="
              The creation of the tower requires a great deal of patience, care, teamwork, and dedication. 
              First, the tower design is fully detailed on AutoCAD including all floor plans, architectural pieces, 
              and connections. Then every piece is cut to approximate size and organized. The tower is then assembled 
              and glued one face at a time, with the floor plan assembled in parts as each face is attached at a right angle."
            />

            <ImageRow   image1="Photo5.jpg" caption1="design"
                        image2="Photo7.jpg" caption2="shaketable"
                        image3="Photo10.jpg" caption3="design"/>

            <div className="row m-4 mb-5">
                <div className="col-lg www-des">
                    <p> Starting in 2017, the team has been using a long wooden L-shaped prism, which has significantly improved quality and decreased construction time of the tower. In 2018, the team started cutting jigs using MDF and a CNC machine. These jigs are essentially a negative of one face of the tower and allowed for easy assembly and precise cutting of the columns, beams, and braces.</p>
                    <p>The final step once the four faces of the tower and glued and the structural floor plan is complete is to glue connections and gusset plates, architectural pieces, and finally use wood glue to firmly fix the tower onto a base plate and attach a roof plate on top.</p>
                </div>
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}
