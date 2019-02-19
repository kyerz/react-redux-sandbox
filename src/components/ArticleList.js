import React from 'react'
import Article from './Article'

const ArticleList = ({ articles, removeArticle, editArticle }) => {
  return (
    <div>
      {articles.map(article => <Article key={article.id} article={article} removeArticle={removeArticle} editArticle={editArticle} />)}
    </div>
  )
}

export default ArticleList