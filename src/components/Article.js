import React, { Component } from 'react'

class Article extends Component {

  state = {
    isInEditMode: false
  }

  toggleEditMode = () => {
    this.setState({ isInEditMode: !this.state.isInEditMode })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggleEditMode()}>Edit</button>
        {
          this.state.isInEditMode ?
            <span>Edit mode</span>
            :
            <span>{this.props.article.quantity} {this.props.article.name}</span>
        }
        <button onClick={() => this.props.removeArticle(this.props.article)}>Delete</button>
      </div>
    )
  }
}


export default Article