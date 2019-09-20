import React, { Component } from 'react';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      text: this.props.text,
      eventName: this.props.eventName,
      date: this.props.date,
      location: this.props.location
    };
  }

  render() {
    return <div className="row m-5">
    <div className="card mb-3 profile">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img" src={require('../images/Events/' + this.state.image)} alt={this.state.eventName}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><b>{this.state.eventName}</b></h5>
            <p className="card-text">{this.state.date}&emsp;&emsp;&emsp;&emsp;<u>{this.state.location}</u></p>
            <p className="card-text">{this.state.text}</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
  }
}