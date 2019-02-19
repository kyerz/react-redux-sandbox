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
        <div className="main-content">
          <Form addArticle={this.props.addArticle} />
          <ArticleList articles={this.props.articles} removeArticle={this.props.removeArticle} editArticle={this.props.editArticle} />
        </div>
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

const editArticleActionCreator = (article) => {
  return { type: 'EDIT_ARTICLE', payload: article }
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
    },
    editArticle: (article) => {
      dispatch(editArticleActionCreator(article))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)