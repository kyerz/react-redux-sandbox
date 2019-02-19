import React from 'react'

const Article = ({ article, removeArticle, editArticle }) => {
  return (
    <div key={article.id}>
      <button onClick={() => editArticle()}>test editArticle</button>
      {article.quantity} {article.name}
      <button onClick={() => removeArticle(article)}>Delete</button>
    </div>
  )
}

export default Article