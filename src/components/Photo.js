import React from 'react';

export default class Photo extends React.Component {
  render() {
    return (
      <div className='col-lg-4'>
        <div className="photo text-center">
          <div className="thumbnail">
            <img src={this.props.photo} alt={this.props.caption} />
            <div className="caption">
              <h3>{this.props.caption}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}