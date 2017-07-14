import React from 'react';
import Navbar from './Navbar';

export default class MainComponent extends React.Component {
  render() {
    return(
      <div>
        <div className="page-header">
          <h1>PERSONAL WEBSITE <small>d1egoRR</small></h1>
        </div>
        <Navbar />
      </div>
    );
  }
}