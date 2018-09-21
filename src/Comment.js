import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
  render(props){
    return (
      <div class="row comment rounded">
        <div className="col-md-9">
          <p>{this.props.content.content} -<em>{this.props.content.userId.name}</em></p>
        </div>
        <div className="col-md-3">
          <button className="btn btn-warning" type="button"> Edit </button>
          <button className="btn btn-danger" type="button" onClick={(e) => this.props.handleDelete(e,this.props.content._id, this.props.index)}> Delete </button>
        </div>
      </div>
    )
  }
}

export default Comment;
