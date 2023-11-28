import React from 'react'
import noimg from "../assets/noimg.jpg"
const NewsCard = ({news}) => {
  return (
    <div class="card mb-3 rounded-0 shadow-sm p-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img style={{height : '100%'}} src={news.urlToImage? news.urlToImage : noimg} class="img-fluid" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{news.title}</h5>
          <p class="card-text">{news.description}</p>
          <p class="card-text"><small class="text-body-secondary">{news.author}</small></p>
          <a target='_blank' href={news.url} className="btn btn-success rounded-0 float-end">Read Full News</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewsCard
