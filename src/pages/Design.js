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
            <Description align="left" title="Testing" description="
            Because balsa wood is not a typical building material, it is necessary to understand the structural properties of the wood.
            To do so, a number of small-scale tests were conducted to verify such properties.
            This includes a three point bending test, tensile coupon testing, and connections testing, all of which offered valuable insight into the material strength of balsa wood and how the analysis model could be calibrated."
            />
        
            <ImageRow   image1="construction.jpg" caption1="design"
                        image3="shaketable_3.jpg" caption3="shaketable"
                        image2="Photo11.jpg" caption2="design"/>
            
            <div className="row m-4">
                <div className="col-lg www-des">
                    <p> Most importantly, a full-scale shaketable test is also essential for understanding the fundamental vibrational properties of the structure.
                    Using the small shaketable at the University of Toronto, we are able to perform sine-sweep tests to find the fundamental period as well as the damping ratio of a particular structure.</p>
                    <p>With this information in hand, we are therefore able to effectively calibrate our analysis model to match the structural properties measured from these tests.</p>
                </div>
            </div>

            <hr/>

            <Description align="left" title="Analysis" description="
            Our analysis approach includes using both industry-standard structural analysis software and in-house scripts to visualize the most critically loaded members.
            A line model of the structure is first created in SAP2000, which is then used to run linear time history analysis as well as classical modal analysis."
            />

            <ImageRow   image1="graph.jpg" caption1="design"
                        image2="Photo4.png" caption2="shaketable"
                        image3="Photo6.jpg" caption3="design"/>

            <div className="row m-4">
                <div className="col-lg www-des">
                    <p> The analysis results from SAP2000 are then exported using a MATLAB and Excel VBA script to independently highlight the members that are loaded most closely to capacity.
                        This is done by comparing the demand to the measured structural capacity from previous material testing.</p>
                </div>
            </div>

            <hr/>

            <Description align="left" title="Construc tion" description="
            Construction of the tower entails a great deal of teamwork and dedication.
            The key structural members are fabricated and assembled first using a full-height jig as shown below."
            />

            <ImageRow   image1="Photo5.jpg" caption1="design"
                        image2="Photo7.jpg" caption2="shaketable"
                        image3="Photo10.jpg" caption3="design"/>

            <div className="row m-4 mb-5">
                <div className="col-lg www-des">
                    <p> Inner structural floor plans and external braces are thereafter added to the structure.
                        The last step is to add the architectural elements to fulfil the form of the design.
                        Last but not least, the construction of the shipping crate ensures the structure can be safely transported to the competition site.</p>
                </div>
            </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}
