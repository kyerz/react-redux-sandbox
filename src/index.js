import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'


const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      action.payload.id = Date.now()
      return [...state, action.payload]
    default:
      return state
  }
}

const store = createStore(combineReducers({ articles: articlesReducer }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))