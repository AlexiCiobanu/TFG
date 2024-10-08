import React from 'react';
import './ArticleCard.css';

function ArticleCard({ title, description, onClick }) {
  return (
    <div className="article-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ArticleCard;
