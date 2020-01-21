import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            name: '', 
            seismic: 'UofT Seismic Design Team',
            msg: 'Shoot us a message',
            user_msg:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if(event.target.id === 'email'){
            this.setState({email: event.target.value});
        }else if(event.target.id === 'name'){
            this.setState({name: event.target.value});
        }else{
            this.setState({user_msg: event.target.value});
        }
    }
    
    handleSubmit (event) {

        if(this.state.email === "" || this.state.name === "" || !this.state.email.includes('@') || this.state.user_msg === ""){
            this.setState({msg: 'please enter valid information'});
        }else{
            const templateId = 'contact_msg';
            const serviceId = 'seismic_design_team';
            this.sendFeedback(serviceId, templateId, {message_html: this.state.user_msg, to_name: this.state.seismic, from_name: this.state.name, reply_to: this.state.email})
            this.setState({
                email: '',
                name: '',
                user_msg: '',
                msg: 'Thanks for your interest! 😊'
            })
        }
    }

    sendFeedback (serviceId, templateId, variables) {
        window.emailjs.send(
            serviceId, templateId,
            variables
            ).then(res => {
            console.log('Email successfully sent!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {
        return <div>
        <AppNavbar/>
        <Container fluid className="col-lg-10 body-content">
            <div className="big-font text-dark">
                Contact Us
            </div>
            <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-8 text-center body-content">
                    <h3 className="text-center font-weight-bold">Sponsor our Team</h3>
                    <p>
                        Our team is filled with bright and hardworking individuals who would greatly benefit from your contributions.
                        They allow us to learn, teach and achieve incredible accomplishments. To learn more email <u>ut.seismic@gmail.com</u> and download our package below.
                        You can find all our amazing sponsors (past and present) <a href="/sponsors">here</a>
                    </p>
                    <a className="btn btn-success" href="https://drive.google.com/open?id=1ekYx_3XvOHeRmc_0jS6GNdMBgcd_6GZo">Sponsorship Package</a>
                </div>
            </div>
                <div className="row mt-5">
                    <div className="col-md-8 text-center body-content">
                        <form>
                            <div className="form-group">
                                <h3 className="font-weight-bold"> {this.state.msg} </h3>
                                <h6> <u>Note:</u> this form won't put you on our contact list but if you scroll down, there is a section to enter our mailing list</h6>
                                <input 
                                    type="textbox" 
                                    className="form-control mb-2" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Michael Collins"
                                    id="name"
                                    name="test-mailing"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.name}/>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    aria-describedby="emailHelp" 
                                    placeholder="email123@gmail.com"
                                    id="email"
                                    name="test-mailing"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.email}/>
                                <textarea
                                    rows="5" 
                                    className="form-control mt-2" 
                                    aria-describedby="emailHelp" 
                                    placeholder="I was wondering ... "
                                    id="user_msg"
                                    name="test-mailing"
                                    onChange={this.handleChange}
                                    required
                                    value={this.state.user_msg}/>
                            </div>
                            <input type="button" value="Send Message" className="btn btn-secondary" onClick={this.handleSubmit} />
                        </form>
                    </div>
                </div>
            </div>         
        </Container>
        <Footer/>
    </div>;
    }
}