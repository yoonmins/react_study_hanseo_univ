import React from 'react';
import './task0924.css';

const Task0924 = () => {
  const images = [
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXFgLqvujcAvXFxmkBW3Y1U16pC6UAYA3xw&s',
      alt: 'github page',
      link: 'https://github.com/yoonmins',
    },
    {
      src: 'https://chayn.notion.site/images/meta/notion-wordmark.png',
      alt: 'resume page',
      link: 'https://www.example2.com',
    },
    {
      src: 'https://images.velog.io/images/sannim/post/1e00249b-8a5a-4cf1-b378-5c78c7614111/velog0.png',
      alt: 'tech blog',
      link: 'https://velog.io/@yoon_min/posts',
    },
  ];

  return (
    <div className="task0924-container">
      <h1>📂 React Task | 2024.09.24</h1>
      <h3>Go to my github, resum, blog✨</h3>
      <div className="task0924">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={image.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task0924;