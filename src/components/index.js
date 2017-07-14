import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Gallery from './Gallery';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    const photos = [
      {img: '1.jpg', caption: 'Rhapsody - Legendary Tales'},
      {img: '2.jpg', caption: 'Rhapsody - Symphony from II'},
      {img: '3.jpg', caption: 'Luca Turilli - Prometheus'},
      {img: '4.jpg', caption: 'Rhapsody - Dark wings'},
      {img: '5.jpg', caption: 'Rhapsody - A rain flames'},
      {img: '6.jpg', caption: 'Rhapsody - Symphony from I'}];

    this.setState({photos});
  }

  render() {
    const photos = this.state.photos;

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
              <Gallery photos={photos}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}