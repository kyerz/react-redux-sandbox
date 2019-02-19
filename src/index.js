import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'TEST':
      console.log('TEST reducer')
      return state
    default:
      return state
  }
}

const store = createStore(combineReducers({ mock: articlesReducer }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))