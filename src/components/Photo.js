import React from 'react';

export default class Photo extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src="/images/photos/1.jpg" alt="Salta/Jujuy 2011" />
            <div className="caption">
              <h3>Salta/Jujuy 2011</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}