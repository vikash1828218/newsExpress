import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let sliceNews = (string, isTitle) => {
      let arr = string.split(' ');
      while (arr.length > 15) {
        arr.pop();
      }
      return isTitle === true ? arr.join(' ') : arr.join(' ') + '....'
    }


    let { title, description, url, imageUrl, author, date, source } = this.props

    return (
      <>
        <div className="card mx-4 my-3 rounded" style={{ width: "18rem" }}>
          <span className="badge badge" style={{ position: 'absolute', right: "0em", top: "-1em", backgroundColor: "rgb(246, 33, 33)" }}>{source}</span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><strong>{sliceNews(title, true)}</strong></h5>
            <p className="card-text">{sliceNews(description, false)}</p>
            <div style={{ fontSize: "small" }}>By {author ? author : "Unknown"} on {new Date(date).toGMTString().length > 0 ? new Date(date).toGMTString() : "Date not found"}</div>
            <a href={url} target='_blank' rel="noreferrer" className="btn btn-dark my-2">Read More</a>
          </div>
        </div>
      </>
    )
  }
}
