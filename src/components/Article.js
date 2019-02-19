import React, { Component } from 'react'

class Article extends Component {

  state = {
    isInEditMode: false
  }

  toggleEditMode = () => {
    this.setState({ isInEditMode: !this.state.isInEditMode })
  }

  handleEditQuantity = (event, article) => {
    article.quantity = event.target.value
    this.props.editArticle(article)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleEditMode()}>Edit</button>
        {
          this.state.isInEditMode ?
            <span>
              <input type="number" value={this.props.article.quantity} onChange={event => this.handleEditQuantity(event, this.props.article)} />
            </span>
            :
            <span>{this.props.article.quantity} {this.props.article.name}</span>
        }
        <button onClick={() => this.props.removeArticle(this.props.article)}>Delete</button>
      </div>
    )
  }
}


export default Article