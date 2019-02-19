import React from 'react'
import Article from './Article'

const ArticleList = ({ articles, removeArticle }) => {
  return (
    <div>
      {articles.map(article => <Article key={article.id} article={article} removeArticle={removeArticle} />)}
    </div>
  )
}

export default ArticleList