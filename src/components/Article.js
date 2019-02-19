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

  handleEditName = (event, article) => {
    article.name = event.target.value
    this.props.editArticle(article)
  }

  render() {
    return (
      <div>
        {
          this.state.isInEditMode ?
            <span>
              <input className="edit-number" type="number" value={this.props.article.quantity} onChange={event => this.handleEditQuantity(event, this.props.article)} />
              <input className="edit-name" type="text" value={this.props.article.name} onChange={event => this.handleEditName(event, this.props.article)}></input>
            </span>
            :
            <span>{this.props.article.quantity} {this.props.article.name}</span>
        }
        <button className="btn btn-success edit-btn" onClick={() => this.toggleEditMode()}>Edit</button>
        <button className="btn btn-danger" onClick={() => this.props.removeArticle(this.props.article)}>Delete</button>
      </div>
    )
  }
}


export default Article