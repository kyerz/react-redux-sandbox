import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: '',
    quantity: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addArticle(this.state)
    this.setState({ name: '', quantity: 0 })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input className="article-quantity" type="number" placeholder="quantity" onChange={(e) => this.setState({ quantity: e.target.value })} value={this.state.quantity} />
        <input className="article-name" type="text" placeholder="article" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
        <button className="btn btn-info" type="submit">Add to cart</button>
      </form >
    )
  }
}

export default Form