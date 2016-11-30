import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class Wish extends React.Component {
  upvoted() {
    const upvotes = this.props.data.upvotes + 1;
    console.log(this.props.id);
    axios.patch(`/api/wishList/${this.props.id + 1}`, {
      upvotes: upvotes
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      return err;
    })
    const wish = this.props.data;
    this.props.upVote(wish);


  }

  downVoted() {
    const upvotes = this.props.data.upvotes - 1;
    axios.patch(`/api/wishList/${this.props.id + 1}`, {
      upvotes: upvotes
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      return err;
    })
    const wish = this.props.data;
    this.props.downVote(wish);
  }

  // check if the title matching the wish has a lesson asscociated. If it is
  // does show, show read button, otherwise, hide
  componentDidMount() {
    axios.get('/api/lessons/')
  }

  render() {
    return (
     <div className="row wish-container">
       <div className="col s12">
         <div className="row">
           <div className="col s4">
               <div className="arrow-up" onClick={this.upvoted.bind(this)}></div>
               <p className="upvote-count">{this.props.data.upvotes}</p>
               <div className="arrow-down" onClick={this.downVoted.bind(this)}></div>
           </div>
           <div className="col s7">
             <h4 className="wish-question"><strong>{this.props.data.question}</strong></h4>
             <p><strong>Category:</strong> {this.props.data.category}</p>
           </div>
         </div>
         <div className="row">
           {/* <div className="col s4 offset-s2 btn">
             read
           </div> */}
           <div className="col s4 offset-s1 btn">
             <Link to={`/write-answer/${this.props.id + 1}`}>Write</Link>
           </div>
         </div>
       </div>
     </div>
   )
 }
}
