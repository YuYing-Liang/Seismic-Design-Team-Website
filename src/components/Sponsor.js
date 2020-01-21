import React, { Component } from 'react';

export default class Sponsor extends Component {

  render() {
    let imgSrc = this.props.image !== "" ? require('../images/Sponsors/' + this.props.image) : "";
    return <div className="row m-5">
    <div className="card mb-3 profile border-0">
        <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img" src={imgSrc} alt={this.props.sponsor}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                  <h5 className="card-title"><b>{this.props.sponsor}</b></h5>
                  <p className="card-text">{this.props.des}</p>
                  <p className="card-text"><a className="btn btn-info" href={this.props.link}>Read More</a></p>
              </div>
            </div>
        </div>
    </div>
  </div>;
  }
}