import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class navBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span style={this.props.logoStyle}>{this.props.title}</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active Hover" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item dropBox" to="/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item dropBox" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item dropBox" to="/health">Health</Link></li>
                  <li><Link className="dropdown-item dropBox" to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item dropBox" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item dropBox" to="/technology">Technology</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active Hover" aria-current="page" to="/about">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <span className="my-2 my-lg-0 mx-1" style={{ color: "whitesmoke", textAlign: "center" }}>
          {new Date().toGMTString().slice(0, 25)}
        </span>
      </nav>
    )
  }
}
