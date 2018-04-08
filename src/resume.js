import React, { Component } from 'react';

import { Document, Page } from 'react-pdf/dist/entry.webpack';

import PDF from './pdf/JASON_GOEBEL-resume.pdf'

const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    padding: '10px',
    margin: '10px',
  },
}

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    }
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  buttonClickHandler = () => {
    console.log('BOOM')
  }

  render() {
    const { pageNumber } = this.state;

    return (
      <div className="Resume">
        <div style={styles.flex}>
          <a href="./pdf/" download="JASON_GOEBEL-resume.pdf">
            <button style={styles.button}>
              Download PDF
            </button>
          </a>
        </div>
        <div style={styles.flex}>
          <Document
            file={PDF}
            onLoadSuccess={this.onDocumentLoad}
            loading='LOADING RESUME'
          >
            <Page
              pageNumber={pageNumber} 
              width={1000}/>
          </Document>
        </div>
        
      </div>
    );
  }
}

export default Resume;