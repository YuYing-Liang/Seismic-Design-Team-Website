import React, { Component } from 'react';

export default class ImageRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image1: this.props.image1.trim(),
          image2: this.props.image2.trim(),
          image3: this.props.image3.trim(),
        };
    }

    render() {
        return <div className="row m-4">
            <div className="col-md-4">
                <img className="image-row" src={require('../images/Design/' + this.state.image1)} alt={this.props.caption1}/>
            </div>
            <div className="col-md-4">
                <img className="image-row" src={require('../images/Design/' + this.state.image2)} alt={this.props.caption2}/>
            </div>
            <div className="col-md-4">
                <img className="image-row" src={require('../images/Design/' + this.state.image3)} alt={this.props.caption3}/>
            </div>
        </div>;
    }
}