import React from 'react';
import Photo from './Photo';

export default class Gallery extends React.Component {
  render() {
    const photos = this.props.photos.map(function(photo, index) {
      return <Photo
        key={index}
        photo={photo.img}
        caption={photo.caption}
        />;
    });

    return (
      <div className="row">

          <div className='photo-columns'>
            {photos}
        </div>
      </div>
    );
  }
}