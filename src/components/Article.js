import React, { Component } from 'react'

class Article extends Component {
  render() {
    return (
      <div key={this.props.article.id}>
        <button onClick={() => this.props.editArticle()}>Edit</button>
        {this.props.article.quantity} {this.props.article.name}
        <button onClick={() => this.props.removeArticle(this.props.article)}>Delete</button>
      </div>
    )
  }
}


export default Article