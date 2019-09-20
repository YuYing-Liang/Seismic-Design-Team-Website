import React, { Component } from 'react';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image.trim(),
      name: this.props.memberName,
      blurb: this.props.blurb,
      role: this.props.role
    };
  }

  render() {
    return (this.state.role !== "Team Captain") ? (
    <div className="col-md-4 mb-5">
        <div className="card profile">
            <h5 className="card-header"><b>{this.state.name}</b></h5>
            <img className="card-image-top" src={require('../images/Team/' + this.state.image)} alt={this.state.name}/>
            <div className="card-body">
              <h5 className="card-title"><u>{this.state.role}</u></h5>
              <p className="card-text">{this.state.blurb}</p>
            </div>
        </div>
    </div>) : (
      <div className="col-lg">
        <div className="card profile">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="card-img" src={require('../images/Team/' + this.state.image)} alt={this.state.name}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"><b>{this.state.name}</b></h5>
                <h5 className="card-title"><u>{this.state.role}</u></h5>
                <p className="card-text">{this.state.blurb}</p>
              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}