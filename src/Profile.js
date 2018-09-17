import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    if(this.props.user){
      return (

          <div className="container">
            <div className="row">
              <div className="col-2">
                <img src="http://www.facetheforce.today/random/400?r=1" className="img-thumbnail" alt=""/>
                <h2>Hello again, {this.props.user.name}!</h2>
                <h4>Your email is {this.props.user.email}</h4>
              </div>
              <Link to="/group">Your Groups</Link>
              <Link to="/groupnew">Make a new Group</Link>
            </div>
          </div>
        );
    }

    return(
      <div>
        <p>This is a profile page. You must be logged in to see it.</p>
        <p>Would you like to <a href="/login">Log In</a> or <a href="/signup">Sign up</a>?</p>
      </div>
      );
  }
}

export default Profile;
