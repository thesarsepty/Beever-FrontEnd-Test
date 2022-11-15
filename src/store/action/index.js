import { SET_QUOTES, SET_FAVORITES, SET_MYQUOTES } from "../constant";
import { quoteAPI } from "../../provider/api";


export const setQuotes = () => {
  return async (dispatch) => {
    const response = await quoteAPI.get()
      dispatch ({
       type: SET_QUOTES,
       payload: response.data.quote
      
    })
  }
}

export const setFavourites = (quotes) => {
  return (dispatch) => {
    let uniqueChars = quotes.filter((element, index) => {
      return quotes.indexOf(element) === index;
    })
      dispatch({
        type: SET_FAVORITES,
        payload: uniqueChars
      })
  }
}

export const setMyQuotes = (quotes) => {
  return (dispatch) => {
    dispatch({
      type: SET_MYQUOTES,
      payload: quotes
    })
  }
}