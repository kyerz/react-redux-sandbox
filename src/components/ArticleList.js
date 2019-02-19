import React from 'react'

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map(article => <div key={article.id}>{article.quantity} {article.name}</div>)}
    </div>
  )
}

export default ArticleList