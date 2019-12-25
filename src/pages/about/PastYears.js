import React, { Component } from 'react';
import '../../App.css';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// import ImageRow from '../../components/ImageRow';
import Description from '../../components/Description';
import { Container } from 'reactstrap';
import PerformanceTable from '../../components/PerformanceTable';

export default class PastYears extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tables: {
                table2016:
                    [
                        {
                            name: "Communications Score",
                            score: '81%',
                            rank: '4th out of 33'
                        },
                        {
                            name: "Architecture Score",
                            score: '58%',
                            rank: '30th out of 33'
                        },
                        {
                            name: "Analysis Prediction (% Error)",
                            score: '100%',
                            rank: '18th out of 18'
                        },
                        {
                            name: "Annual Seismic Cost",
                            score: '$259,603',
                            rank: '7th out of 32'
                        },
                        {
                            name: "Final Annual Building Income",
                            score: '$262,377',
                            rank: '4th out of 33'
                        }
                    ],
                table2017:
                    [
                        {
                            name: "Communications Score",
                            score: '84%',
                            rank: '7th out of 33'
                        },
                        {
                            name: "Architecture Score",
                            score: '81%',
                            rank: '10th out of 33'
                        },
                        {
                            name: "Analysis Prediction (% Error)",
                            score: '23.5%',
                            rank: '3rd out of 15'
                        },
                        {
                            name: "Annual Seismic Cost",
                            score: '$66,183',
                            rank: '3rd out of 33'
                        },
                        {
                            name: "Final Annual Building Income",
                            score: '$448,593',
                            rank: '8th out of 33'
                        }
                    ],
                table2018:
                   [
                        {
                            name: "Communications Score",
                            score: 'None',
                            rank: '13th out of 38'
                        },
                        {
                            name: "Architecture Score",
                            score: 'None',
                            rank: '14th out of 39'
                        },
                        {
                            name: "Analysis Prediction (% Error)",
                            score: 'None',
                            rank: '7th out of 7'
                        },
                        {
                            name: "Annual Seismic Cost",
                            score: '$58,516',
                            rank: '10th out of 38'
                        },
                        {
                            name: "Final Annual Building Income",
                            score: '$42,711',
                            rank: '15th out of 38'
                        }
                    ],
                table2019:
                    [
                        {
                            name: "Communications Score",
                            score: '89.7%',
                            rank: '1st out of 34'
                        },
                        {
                            name: "Architecture Score",
                            score: '50%',
                            rank: '26th out of 35'
                        },
                        {
                            name: "Analysis Prediction (% Error)",
                            score: '90.6',
                            rank: '11th out of 16'
                        },
                        {
                            name: "Annual Seismic Cost",
                            score: '$278,666',
                            rank: '12th out of 34'
                        },
                        {
                            name: "Final Annual Building Income",
                            score: '$57,584',
                            rank: '7th out of 34'
                        }
                    ]
                }
        };
    }

    render() {
        return (
        <div>
            <AppNavbar/>
            <Container fluid>
                <div className="big-font text-dark">
                    Past Competitions
                </div>
                <br/><br/><br/>
                <div className="container p-3">
                    <Description align="left" title="2020" description="
                        We’re very excited to compete in San Diego this March and look forward to seeing how other 
                        teams have tackled the torsional irregularities this year!"/>

                    <Description align="left" title="2019" description=" In construction, stay tuned!"/>

                    {/*<div className="row m-4">
                        <div className="col-lg www-des">
                            <p>The 2018 challenge involved a smaller footprint and thinner member sizes, significantly increasing the 
                                difficulty. To combat this, the team used a similar parametric study to the 2017 tower and determined 
                                the optimal solution was to increase the size of the columns and use a built-up section to achieve a 
                                similar stiffness as previous years. </p>
                            
                            <p>Overall, the team was able to place well, placing in the top 10 for analysis and seismic cost and in the top 40% overall.</p>
                        </div>
                    </div>*/}

                    <div className="row m-4 mb-5">
                        <div className="col-lg www-des">
                            <PerformanceTable data={this.state.tables.table2019}/>
                        </div>
                    </div>

                    <hr/>

                    <Description align="left" title="2018" description="
                    This year provided significant challenges to the team as it was comprised solely of newer members in only 
                    their first or second year on the team. As such much of the knowledge had to be transferred and only with 
                    the guidance and help of previous team members and the UofT EERI Student Chapter was the team able to place
                     well. "/>

                    <div className="row m-4">
                        <div className="col-lg www-des">
                            <p>The 2018 challenge involved a smaller footprint and thinner member sizes, significantly increasing the 
                                difficulty. To combat this, the team used a similar parametric study to the 2017 tower and determined 
                                the optimal solution was to increase the size of the columns and use a built-up section to achieve a 
                                similar stiffness as previous years. </p>
                            
                            <p>Overall, the team was able to place well, placing in the top 10 for analysis and seismic cost and in the top 40% overall.</p>
                        </div>
                    </div>

                    <div className="row m-4 mb-5">
                        <div className="col-lg www-des">
                            <PerformanceTable data={this.state.tables.table2018}/>
                        </div>
                    </div>

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
                                Here was our performance this year:
                            </p>
                            <PerformanceTable data={this.state.tables.table2017}/>
                        </div>
                    </div>

                    <hr/>

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

                            <PerformanceTable data={this.state.tables.table2016}/>
                        </div>
                    </div>                    
                </div>
            </Container>
            <Footer/>
        </div>
        );
    }
}
