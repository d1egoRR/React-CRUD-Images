import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav nav-pills">
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}