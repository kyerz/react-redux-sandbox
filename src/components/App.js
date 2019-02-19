import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Form from './Form'
import ArticleList from './ArticleList'


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Form addArticle={this.props.addArticle} />
        <ArticleList articles={this.props.articles} removeArticle={this.props.removeArticle} />
      </div>
    )
  }
}

const addArticleActionCreator = (article) => {
  return { type: 'ADD_ARTICLE', payload: article }
}

const removeArticleActionCreator = (article) => {
  return { type: 'REMOVE_ARTICLE', payload: article }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addArticle: (article) => {
      dispatch(addArticleActionCreator(article))
    },
    removeArticle: (article) => {
      dispatch(removeArticleActionCreator(article))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)