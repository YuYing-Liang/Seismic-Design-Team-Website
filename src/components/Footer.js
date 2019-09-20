import React, { Component } from 'react';

export default class AppNavbar extends Component {
  render() {
    return <footer className="footer" id="contact">
                <div className="row pt-3">
                    <div className="col-md">
                        <h5><b> Where to Find Us </b></h5>
                        <a href="https://goo.gl/maps/RLZP6CnBAhmEmBMbA"> University of Toronto </a>
                        <p>10 King’s College Road 
                            Toronto, Ontario, Canada M5S 3G4 
                            University of Toronto, St. George Campus
                        </p>
                    </div>
                    <div className="col-md">
                        <iframe id="map" width="250" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4307488268114!2d-79.39702318450202!3d43.66001057912108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b88edf158b%3A0x4513394276222c74!2s10%20King&#39;s%20College%20Rd%2C%20Toronto%2C%20ON%20M5S%203G8!5e0!3m2!1sen!2sca!4v1568431151124!5m2!1sen!2sca" title="location" style={{border:0}}></iframe>
                    </div>
                    {/*<div className="col-md">
                        Interested in learning more about the team and how you can get involved? Feel free to shoot us an email!
                        Make sure to leave a relevant subject line. <u> ut.seismic@gmail.com </u>
                    </div>*/}
                    <div className="col-md">
                        <form>
                            <div className="form-group">
                                <label> Want to learn more about our team and get involved? Sign up to our mailing list <span role="img" aria-label="">😃</span> </label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email123@gmail.com"/>
                            </div>
                            <button type="submit" className="btn btn-secondary">Subscribe!</button>
                        </form>
                    </div>
                    <div className="col-md">
                        <a href="https://www.facebook.com/UofTSeismic/">
                            <i className="fa fa-facebook fa-lg mr-3 mt-3" style={{fontSize: '48px'}}/>
                        </a>
                        <a href="https://www.linkedin.com/groups/8462685/profile">
                            <i className="fa fa-linkedin fa-lg mr-3 mt-3" style={{fontSize: '48px'}}/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCugrQkMvhnQnwLsrQ_8Cvxg">
                            <i className="fa fa-youtube fa-lg mr-3 mt-3" style={{fontSize: '48px'}}/>
                        </a>
                    </div>
                </div>
            </footer>;
  }
}