import React, { Component } from 'react';

export default class PerformanceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.data.map(d => {
            let rankStr = d.rank.split(' ')[0];
            return (
                <tr>
                    <td>{d.name}</td>
                    <td className="text-right">{d.score}</td>
                    <td className="text-right"><b>{rankStr}</b>{d.rank.replace(rankStr, ' ')}</td>
                </tr>
            );
      })
    };
  }

  render() {
    return (
        <div className="container p-2">
            <table className="table table-bordered">
                <thead>
                    <tr className="table-info">
                        <th scope="col">Category</th>
                        <th scope="col">Result</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.rows}
                </tbody>
            </table>
        </div>);
  }
}