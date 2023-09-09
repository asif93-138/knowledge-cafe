import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Article.css';

const Article = (props) => {

    const {image, name, title, userimg, time} = props.article;
    const addToContainer = props.addToContainer;
    return (
        <div className='article'>
            <img src={image} />
            <div id='user'>
               <div className='user'>
                  <img id='userimg' src={userimg} />
                  <div id='userdt'>
                    <h5>{name}</h5>
                    <small>March 26 (5 days ago)</small>
                  </div>
              </div>
              <small>{time} mins to read  <button type='button' onClick={() => {props.bookMark(props.article)}}><FontAwesomeIcon icon={faBookmark} /></button></small>
            </div>
            <h2>{title}</h2>
            <button onClick={() => addToContainer(props.article)}>Mark as read</button>
        </div>
    );
};

export default Article;