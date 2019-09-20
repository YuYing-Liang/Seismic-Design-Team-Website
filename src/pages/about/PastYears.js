import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// import ImageRow from '../../components/ImageRow';
import Description from '../../components/Description';
import { Container } from 'reactstrap';

export default class PastYears extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
            <div className="big-font text-dark">
                Past Competitions
            </div>
            <br/><br/><br/>
            <Description align="left" title="2016" description="
            In our inaugural year competing in the EERI Seismic Design Competition, we learned a great deal about constructing and designing a balsa wood structure to withstand ground motions of varying intensities.
            Our design this year consisted of an integrated structural and architectural systems in order to blend into the architectural scene of San Francisco."
            />
            
            <div className="row m-4">
                <div className="col-lg www-des">
                    <p> A total of seven undergraduate engineering students travelled to San Francisco, CA to compete in the 12th Annual EERI Seismic Design Competition alongside top engineering schools from all over the world.
                        A huge thank you goes out to UBC alumni as well as the graduate students from the University of Toronto for giving us a head start in understanding the competition and structural design!
                    </p>
                    <p>See below for a summary of our team’s performance:</p>
                </div>
            </div>

            <hr/>

            <Description align="left" title="2017" description="
            This year our team achieved a number of significant milestones in terms of construction and design based on our experience from the previous year.
            Firstly, we were able to completely restructure our construction process by employing the use of a full height jig in order to maximize consistency throughout the structure."
            />

            <div className="row m-4">
                <div className="col-lg www-des">
                    <p> With this faster and more efficient construction process, our team was able to construct a full scaled prototype to test at the University of Toronto.
                        Special thanks goes out to Professor Christopoulos and Professor Kwon for graciously allowing the team to use the shaketable and to Dr. Reza Hessabi for teaching our team on how to operate the shaketable.
                    </p>
                    <p>
                        The results from these shaketable tests were essential for calibrating our analysis model as well as for deriving the fundamental modal properties of our design.
                        Once our analysis model had been properly calibrated, we were able to optimize the design of the structure through seeking the most cost-effective cross-sectional width of our tubular design that can still allow for architectural flexibility.
                    </p>                
                    <p>This parametric study was conducted using a script written in Excel VBA alongside the SAP2000 oAPI plugin.
                        The results of our analysis and collaboration with architectural students accumulated to the design of the Aqua tower.
                    </p>
                </div>
            </div>

            <div className="row m-4">
                <div className="col-lg www-des">
                    <p> A total of six engineering undergraduate students travelled to the Portland, OR to compete in the 13th Annual EERI Seismic Design Competition.
                    </p>
                    <p>    
                        It was a pleasure competing alongside some of the top engineering schools from around the world while meeting new and old fellow engineering peers who share the same passion and enthusiasm for seismic engineering as us.
                    </p>
                </div>
            </div>
            <hr/>

            <Description align="left" title="2018" description="This year our team achieved a number of significant milestones in terms of construction and design based on our experience from the previous year.
            Firstly, we were able to completely restructure our construction process by employing the use of a full height jig in order to maximize consistency throughout the structure."
            />

            <div className="row m-4 mb-5">
                <div className="col-lg www-des">
                    <p> 
                        laksdjfsldsldkfn
                    </p>
                </div>
            </div>

            <hr/>

            <Description align="left" title="2019" description="This year our team achieved a number of significant milestones in terms of construction and design based on our experience from the previous year.
            Firstly, we were able to completely restructure our construction process by employing the use of a full height jig in order to maximize consistency throughout the structure."
            />

            <div className="row m-4 mb-5">
                <div className="col-lg www-des">
                    <p> 
                        laksdjfsldsldkfn
                    </p>
                </div>
            </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}
