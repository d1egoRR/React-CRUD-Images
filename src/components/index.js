import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Photo from './Photo';

export default class MainComponent extends React.Component {
  render() {
    return(
      <div>

        <div className='row'>
          <div className='col-lg-12'>
            <Header />
            <Navbar />
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='well'>
              <Photo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}