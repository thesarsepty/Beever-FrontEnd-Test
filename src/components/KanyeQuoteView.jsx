import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuotes, setFavourites } from '../store/action'
// import { quoteAPI } from "../provider/api";

export default function KanyeQuoteView() {
  const [selectedFav, setSelectedFav] = useState([])
  const dispatch = useDispatch()
  const quote = useSelector(state => state.quote)
  const favourites = useSelector(state => state.favorites)

   useEffect(() => {
    dispatch(setQuotes())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleFavourite = async (quote) => {
    setSelectedFav(state => [...state, quote])
  }

  useEffect(() => {
    dispatch(setFavourites(selectedFav))
  }, [dispatch, selectedFav])
  

  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>
      <h3>{quote}</h3>
      <button onClick={() => dispatch(setQuotes())}>Get Quote</button>
      <button onClick= {() => handleFavourite(quote)}>Add Favorite</button>
      {favourites.length > 0 && favourites.map((quote, idx) => {
        return(<h5 key={idx}>{quote}</h5>)
      })

      }
    </section>  
  );
}
