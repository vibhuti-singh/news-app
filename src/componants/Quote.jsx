import React, { useContext, useEffect } from 'react'
import QuoteContext from './quotes/QuoteContext'
import { fetchQuote } from './quotes/QuoteAction'
import NewsContext from '../context/NewsContext'

const Quote = () => {
  const {allNews}= useContext(NewsContext)
  const {quoteData, quoteDispatch}=useContext(QuoteContext)
  const getQuote = async()=>{
    const data = await fetchQuote()
    quoteDispatch({
      type: "GET_QUOTE",
      payload : data
    })
  }

  useEffect(()=>{
    getQuote();
  },[allNews])
  if(!quoteData ){
    return
    <marquee className="display-6 my-3">loading...</marquee>
  }
  return (
   <marquee behavior="" direction="" className="display-6 my-3">
    {quoteData.content} — {quoteData.author}
   </marquee>
  )
}

export default Quote
