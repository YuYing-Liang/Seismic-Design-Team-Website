import React, { Component } from 'react';
import AppNavbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container } from 'reactstrap';
import PastTeams from '../../components/PastTeams';

export default class PreviousTeams extends Component {

  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid className="col-lg-10 body-content">
            <div className="big-font text-dark">
              Team Alumni
            </div>
            <br/><br/>
            <div className="mt-2 mb-5">
              <PastTeams year="2019" img="https://gravitylab.nz/wp-content/uploads/2018/11/OnboardYourTeam-011.jpg"/>
              <PastTeams year="2018" img="https://i.pinimg.com/originals/e9/86/d8/e986d84d458dbf78014805424ecdab3f.png"/>
              <PastTeams year="2017" img="http://www.mbuguanjihia.com/wp-content/uploads/2018/08/Teams_Mbugua-Njihia.png"/>
              <PastTeams year="2016" img="https://images.squarespace-cdn.com/content/v1/5b6a1ca95417fc8b395b5d7d/1555504922784-MHQU7XYH7PUVD0X5JBR4/ke17ZwdGBToddI8pDm48kLPswmMOqQZ9-Q6KHLjvbpZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcaEU9usEQgaPMYSSHCLDdjcUDfwtSR5qjoqJbWx-aCIZDqXZYzu2fuaodM4POSZ4w/custom-illustration-gratitudes-01.png?format=1500w"/>
            </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}
