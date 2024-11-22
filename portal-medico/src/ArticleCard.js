import React, { useState } from 'react';

function ArticleCard({ title, description, fullText }) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <h3>{title}</h3>
      <p>{showFullText ? fullText : description}</p>
      <button onClick={toggleText} style={{
        padding: '8px 16px',
        marginTop: '8px',
        borderRadius: '4px',
        background: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}>
        {showFullText ? "Ver Menos" : "Ver Más"}
      </button>
    </div>
  );
}

export default ArticleCard;
