import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Gallery from './Gallery';
import PhotoForm from './PhotoForm';

import {getPhotos, savePhoto, deletePhoto} from '../api/dataDB';

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
    savePhoto(photo, result => {
      const currentPhotos = this.state.photos;
      currentPhotos.push(result);
      this.setState({photos: currentPhotos});
    });
  }

  removePhoto(photoId) {
    deletePhoto(photoId);

    const currentPhotos = this.state.photos;
    const indexToDelete = currentPhotos.findIndex(
      function(photo) {
        return photo._id == photoId;
      }
    );

    currentPhotos.splice(indexToDelete, 1);
    this.setState({photos: currentPhotos});
  }

  render() {
    const photos = this.state.photos;

    return(
      <div>

        <div className='row'>
          <div className='col-lg-12'>
            <Header />
            <Menu />
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='well'>
              <PhotoForm
                handleAddPhoto={::this.addPhoto}
                photos={photos}
                handleDeletePhoto={::this.removePhoto} />
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