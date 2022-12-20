import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      progress: 0
    }
  }


  channelName = "newsExpress";


  logoStyle = {
    backgroundColor: "rgb(73 71 72)",
    color: "whitesmoke",
    fontWeight: "bolder",
    display: "inline-block",
    height: "1.8em",
    width: "7em",
    textAlign: "center",
    borderRadius: "7px",
    fontFamily: "'Lora', serif",
    fontSize: "25px",
    padding: "2px",
    boxShadow: "1px 1px gray",
    textShadow: "1px 1px rgb(112, 112, 112)"
  }

  settingState = (prg) => {
    this.setState({
      progress: prg
    })
  }


  
  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color='rgb(246, 33, 33)'
            height={2.8}
            progress={this.state.progress}
          />
          <NavBar title={this.channelName} logoStyle={this.logoStyle} />
          <Routes>
            <Route exact path="/" element={<News loaderPrg={this.settingState} key="general" category="general" channelName={this.channelName} logoStyle={this.logoStyle} />} />
            <Route exact path="/sports" element={<News loaderPrg={this.settingState} key="sports" category="sports" channelName={this.channelName} logoStyle={this.logoStyle} />} />
            <Route exact path="/entertainment" element={<News loaderPrg={this.settingState} key="entertainment" category="entertainment" channelName={this.channelName} logoStyle={this.logoStyle} />} />
            <Route exact path="/science" element={<News loaderPrg={this.settingState} key="science" category="science" channelName={this.channelName} logoStyle={this.logoStyle} />} />
            <Route exact path="/technology" element={<News loaderPrg={this.settingState} key="technology" category="technology" channelName={this.channelName} logoStyle={this.logoStyle} />} />
            <Route exact path="/business" element={<News loaderPrg={this.settingState} key="business" category="business" channelName={this.channelName} logoStyle={this.logoStyle} />} />
            <Route exact path="/health" element={<News loaderPrg={this.settingState} key="health" category="health" channelName={this.channelName} logoStyle={this.logoStyle} />} />
            <Route exact path="/about" element={<About category="Abou" channelName={this.channelName} key="about" />} />
          </Routes>
        </Router>
      </>
    )
  }
}
