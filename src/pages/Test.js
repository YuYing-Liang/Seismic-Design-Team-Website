import React, { Component } from 'react';
import ReactGoogleSheets from 'react-google-sheets';

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sheetLoaded: false,
    }
  }
  render() {
    return (
      <ReactGoogleSheets 
        clientId={"129213578818-rot99enk8b34kv1gerirvun1jnjpvihq.apps.googleusercontent.com"}
        apiKey={"AIzaSyCmEOeGGRHN2kIQbQoAhVNoplcIc6itNoY"}
        spreadsheetId={"1_v72LT4hKceJfjsA-sibgshOTbtT6mgXETlV0aMR-FM"}
        afterLoading={() => this.setState({sheetLoaded: true})}
      >
        {this.state.sheetLoaded ? 
          <div>
            {/* Access Data */}
            {console.log('Your sheet data : ', this.props.getSheetsData("Mailing List"))}
            {/* Update Data */}
            <button onClick={() => {
              this.props.updateCell(
                'Sheet1', // sheetName
                'E', // column
                13, // row
                'Apple', // value
                null, // successCallback
                (error) => {
                  console.log('error', error)
                } // errorCallback
              );
            }}>update cell!</button>
          </div>
          :
          'loading...'
        }
      </ReactGoogleSheets>
    )
  }
}
 
export default ReactGoogleSheets.connect(Test);