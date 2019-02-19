import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Form from './Form'


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Form />
        <button onClick={() => this.props.test()}>click</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mocks: state.mock
  }
}

const mapDispatchToProps = dispatch => {
  return {
    test: () => {
      dispatch({ type: 'TEST' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)