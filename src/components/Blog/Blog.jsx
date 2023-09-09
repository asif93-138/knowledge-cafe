import React, { useEffect, useState } from 'react';
import './Blog.css';
import Article from '../Article/Article';
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [container, setContainer] = useState([]);
    useEffect( () => {
           fetch('generated.json')
           .then(res => res.json())
           .then(data => setArticles(data))
    }, []);
    const addToContainer = (article) => {
      const newContainer = [...container, article];
      setContainer(newContainer);
  }
  const [bookMarked, setBookMarked] = useState([]);
  function bookMark(data) {
    const arr = [...bookMarked, data];
    setBookMarked(arr);
    
}


    return (
        <div className='blog-container'>
            <div className='articles-container'>
              {
                articles.map(article => <Article
                   key={article.id}
                   article={article} bookMark={bookMark}
                   addToContainer={addToContainer}
                ></Article>)
              }
            </div>
            <div className='bookmark-container'>
                
                <Bookmark bookMarked={bookMarked} container={container}></Bookmark>
                
            </div>
        </div>
    );
};

export default Blog;