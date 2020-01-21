import React, { Component } from 'react';

export default class PastTeams extends Component {
    render() {
        let members = this.props.members != null ? 
              this.props.members.map((m, i) => {
                return <li>{m}</li>
              }): ""
        return(
            <div className="row">
              <div className="body-content">
                <div className="card profile">
                  <img className="card-image-top" src={this.props.img} alt={this.props.year + "Team"}/>
                  <div className="card-body">
                    <h1 className="card-title font-weight-bold text-info">{this.props.year}</h1>
                    <div className="card-text">
                      <div className="row">
                        <div className="col-md-4">
                          <h5 className="font-weight-bold">Members</h5>
                          <ul>
                              {
                                members
                              }
                          </ul>
                        </div>
                        <div className="col-md-4">
                          <h5 className="font-weight-bold">Team Highlights</h5>
                          <p>
                              {this.props.highlights}
                          </p>
                        </div>
                        <div className="col-md-4">
                          <h5 className="font-weight-bold">Accomplishments</h5>
                          <p>
                              {this.props.accomplishments}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}