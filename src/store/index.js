import { createStore, applyMiddleware } from 'redux'
import { SET_QUOTES, SET_FAVORITES, SET_MYQUOTES } from './constant'
import ReduxThunk from 'redux-thunk'

const initialState = {
  quote: '',
  favorites: [],
  myQuotes: []
 
 }
 
 const reducer = (state = initialState, action) => {
   switch (action.type) {
     case SET_QUOTES : 
       return { ...state, quote: action.payload }
      
      case SET_FAVORITES : 
       return { ...state, favorites: action.payload } 

      case SET_MYQUOTES : 
       return { ...state, myQuotes: action.payload }  

     default:
       return state
  }
}

const middleware = applyMiddleware(ReduxThunk)

const store = createStore(reducer, middleware)
export default store


