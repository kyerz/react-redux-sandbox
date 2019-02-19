import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Form from './Form'


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Form addArticle={this.props.addArticle} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: (article) => {
      dispatch({ type: 'ADD_ARTICLE', article })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)