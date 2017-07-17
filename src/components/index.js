import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Gallery from './Gallery';
import PhotoForm from './PhotoForm';

import {getPhotos, savePhoto} from '../api/dataDB';

export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    getPhotos(photos => {
      this.setState({photos: photos});
    });
  }

  addPhoto(photo) {
    savePhoto(photo, photos=> {
      this.setState({photos: photos});
    });
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
              <PhotoForm handleAddPhoto={::this.addPhoto} />
            </div>
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