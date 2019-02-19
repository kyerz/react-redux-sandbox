import React from 'react'

const Article = ({ article, removeArticle }) => {
  return (
    <div key={article.id}>
      {article.quantity} {article.name}
      <button onClick={() => removeArticle(article)}>Delete</button>
    </div>
  )
}

export default Article