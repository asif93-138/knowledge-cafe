import React from 'react';
import './Bookmark.css';
import BContent from '../BContent/BContent';

const Bookmark = (props) => {
  
    
  let total = 0;
  for (const article of props.container) {
      
      total = total + parseInt(article.time);
  }
    return (
        <div id='bookmark'>
               <div>
                  <h4 id='firstb' className='bookmarks1'>Spent time on read: {total} min</h4>
                </div>
                <div className='bookmarks2'>
                  <h4 className='headline'>Bookmarked Blogs: {props.bookMarked.length} </h4>
                 
                  {props.bookMarked.map(art => <BContent key={art.id} art={art} /> )}
                </div>
        </div>
    );
};

export default Bookmark;