import React from 'react';
import ArticleCard from './ArticleCard';
import './Articles.css'; // Asegúrate de que esta línea esté aquí

function Articles() {
  const articles = [
    {
      title: "Artículo 1",
      description: "Descripción del artículo 1",
    },
    {
      title: "Artículo 2",
      description: "Descripción del artículo 2",
    },
    {
      title: "Artículo 3",
      description: "Descripción del artículo 3",
    },
  ];

  const handleArticleClick = (articleTitle) => {
    alert(`Has clicado en: ${articleTitle}`);
  };

  return (
    <div className="container">
      <h2>Artículos Médicos</h2>
      <p>Aquí podrás encontrar varios artículos médicos.</p>
      <div className="article-list">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            onClick={() => handleArticleClick(article.title)}
          />
        ))}
      </div>

     
    </div>
  );
}

export default Articles;
