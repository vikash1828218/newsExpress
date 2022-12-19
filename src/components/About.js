import React, { Component } from 'react'
import Loader from './Loader'
export default class About extends Component {

  constructor() {
    super();
    this.state = {
      loader: true
    }
  }

  componentDidMount() {
     document.title = this.props.category + '-' + this.props.channelName 
    setTimeout(() => {
      this.setState({
        loader: false
      })
    }, 400);

  }


  render() {

    let setCol = (mode) => {
      if (mode === 'light') {
        return { color: "black", backgroundColor: "white" };
      }
      else {
        return { color: "white", backgroundColor: "#3d3a3a" };
      }
    }


    const Style = {
      color: "black",
      backgroundColor: "#f4f4f4",
      marginTop: "8em"
    };



    return (
        <div className="container my-9" style={Style}>
          {this.state.loader && <Loader />}
          {!this.state.loader && <div className="accordion" id="accordionExample" style={Style}>
            <div className="accordion-item" style={setCol("dark")}>
              <h2 className="accordion-header" style={setCol("dark")} id="headingOne">
                <button className="accordion-button" style={setCol("dark")} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  About Us
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>{this.props.channelName}</strong> founded in 2022 is India’s leading English News Portal with the aim of reaching millions of Indians in India and significantly worldwide Indian Diaspora who are eager to stay in touch with India based news and stories in Hindi because of the varied contents presented in an eye pleasing design format. It has taken a prominent position in the web market and quickly progressing to capture the top slot. We also remain clung to the tree of journalistic ethics by serving the fresh news on the platter of absolute authenticity and our comments stand only as a guard so that all the users of our portal do not carried away from the truth.
                </div>
              </div>
            </div>
            <div className="accordion-item" style={setCol("dark")}>
              <h2 className="accordion-header" style={setCol("dark")} id="headingTwo">
                <button className="accordion-button collapsed" style={setCol("dark")} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Mission
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Our mission of helping you make the best decisions is our north star, guiding us to always serve your interests. It drives everything we do. And although we are a nearly 90-year-old company, we’ve been a leader in digital journalism for more than a decade. We operate with the mentality of a startup, stressing a flat management structure and a team-based operating approach.              </div>
              </div>
            </div>
            <div className="accordion-item" style={setCol("dark")}>
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={setCol("dark")} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Users and Customers
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  With the visitors growing leaps and bounds with each new day the no. of pages viewed in the portal increasing. Currently we have reach of 1.5 crore. page-views per month with 25 lac unique users/visitors across its news portals.              </div>
              </div>
            </div>
          </div>}
        </div>
    )
  }
}
