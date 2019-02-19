import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: '',
    quantity: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.addArticle(this.state)
    this.setState({ name: '', quantity: 0 })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" placeholder="quantity" onChange={(e) => this.setState({ quantity: e.target.value })} value={this.state.quantity} />
        <input type="text" placeholder="article" onChange={(e) => this.setState({ name: e.target.value })} value={this.state.name} />
        <button type="submit">Add to cart</button>
      </form >
    )
  }
}

export default Form