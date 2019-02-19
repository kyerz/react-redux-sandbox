import React from 'react'
import Article from './Article'

const ArticleList = ({ articles, removeArticle, editArticle }) => {
  return (
    <div>
      {articles.map(article =>
        <div className="article-container" key={article.id}>
          <Article article={article} removeArticle={removeArticle} editArticle={editArticle} />
        </div>
      )}
    </div>
  )
}

export default ArticleList