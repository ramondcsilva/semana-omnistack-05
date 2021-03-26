import React, {Component} from "react";

import like from "../like.svg";
import api from "../services/api";
import './Tweet.css';

export default class Tweet extends Component{

  handleLike = async () =>{
    const {_id} = this.props.tweet;

    await api.post(`likes/${_id}`);
  };


  render(){
    const {tweet} = tweet.props;

    return(
        <li className="tweet" > 
          <strong>{tweet.author}</strong>
          <p>{tweet.content}</p>
          <button type="button" >
            <img src="like" alt="Like"/>  
            {tweet.like}
          </button>
        </li>
    )
  }
}
 