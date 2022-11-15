import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMyQuotes } from '../store/action'

export default function PersonalQuoteView() {

  const [myQuote, setMyQuote] = useState('')
  const [quotesContainer, setQuotesContainer] = useState([])
  const dispatch = useDispatch()
  const myQuotes = useSelector(state => state.myQuotes)

  const onChangeInput = useCallback(({ target: { value } }) => {
    setMyQuote(value)
  }, [])
 
  const handleSubmit = (e) => {
    e.preventDefault()
      if (!quotesContainer.find(item => item === myQuote)){
        setQuotesContainer(state => [...state, myQuote])
        setMyQuote('')
      }
  }
 
  useEffect(() => {
    dispatch(setMyQuotes(quotesContainer))
  }, [dispatch, quotesContainer])
  
  return (
    <section style={{ textAlign: "center", marginTop: "60px" }}>
      <hr style={{ maxWidth: "30%" }} />
      <h2>My Quotes</h2>
      <form >
        <input
        value={myQuote}
        onChange={onChangeInput}
        />
        <button
          type={`submit`}
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
      {myQuotes.length > 0 && myQuotes.map((quote, idx) => {
        return (<p key={idx} style={{fontSize: '13px' }}>{quote}</p>)
      })
      }
    </section>
  );
}
