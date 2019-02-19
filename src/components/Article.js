import React from 'react'

const Article = ({ article }) => {
  return (
    <div key={article.id}>{article.quantity} {article.name}</div>
  )
}

export default Article