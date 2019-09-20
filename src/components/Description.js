import React, { Component } from 'react';

export default class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: this.props.description.split(".")
    };
  }

  render() {
    let para = this.state.sections.map((s) => {
      return <p>{s.trim() === "" ? s : s += '.'}</p>
    });
    return (this.props.align === "left") ? (
    <div className="row m-4">
      <div className="card des">
        <div className="row no-gutters">
          <div className="col-md-4">
            <h1 className="big-font">
              <div className="text-primary">
                {this.props.title.split(' ')[0]}
              </div>
              {this.props.title.replace(this.props.title.split(' ')[0], '')}
            </h1>
          </div>
          <div className="col-md-8">
            <div className="card-body www-des">
              {para}
            </div>
          </div>
        </div>
      </div>
    </div>
    ) : (
      <div className="row m-4">
      <div className="card des">
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="card-body www-des">
              {para}
            </div>
          </div>
          <div className="col-md-4">
            <h1 className="big-font">{this.props.title}</h1>
          </div>
        </div>
      </div>
    </div>
    );
  }
}