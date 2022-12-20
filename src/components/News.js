import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import PropType from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {

  static defaultProps = {
    category: 'in',
    pageSize: 9,
  }

  static propTypes = {
    category: PropType.string,
    pageSize: PropType.number
  }

  news = []
  identity = 1
  constructor() {
    super();
    this.state = {
      news: this.news,
      loading: false,
      pageNum: 1,
      totalResults: 1 // default value
    }
  }

  containerStyle = {
    marginTop: '3em',
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }

  navigatorStyle = {
    width: '60em',
    margin: 'auto',
    marginBottom: '3.5em'
  }

  newsUpdate = async () => {
    this.props.loaderPrg(10);
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=f6277503b399424fb61de192041d58e7&page=${this.state.pageNum}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.loaderPrg(40);
    let news = await data.json();
    this.props.loaderPrg(70);
    this.setState({
      news: news.articles,
      totalResults: news.totalResults,
      loading: false,
      topScroll: false
    })
    this.props.loaderPrg(100);
  }


  componentDidMount() {
    document.title = this.capiatalizeFirstIndex(this.props.category) + '-' + this.props.channelName
    this.newsUpdate();
  }


  capiatalizeFirstIndex = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchMoreData = async () => {
   this.setState({
      pageNum: this.state.pageNum + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=f6277503b399424fb61de192041d58e7&page=${this.state.pageNum}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let news = await data.json();;
    this.setState({
      news: this.state.news.concat(news.articles),
      topScroll: true
    })

  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }




  headstyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: '8em'
  }


  render() {

    return (
      <>

        <div style={this.headstyle}>
          <span style={this.props.logoStyle}>{this.props.channelName}</span>
          <span className="topHead"><u>&nbsp; - <strong>Top {this.capiatalizeFirstIndex(this.props.category) === "General" ? "" : this.capiatalizeFirstIndex(this.props.category)} Headlines</strong></u></span>
        </div>
        <InfiniteScroll
          dataLength={this.state.news.length}
          next={this.fetchMoreData}
          hasMore={this.state.news.length <= this.state.totalResults}
          loader={<Loader />}
          scrollableTarget="scrollableDiv"
        >
          <div className='container' style={this.containerStyle} >
            {this.state.news.map((element) => {
              if (element.title != null && element.description != null && element.url != null && element.urlToImage != null) {
                return <NewsItem key={this.identity++} title={element.title} description={element.description} url={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name} />
              }
            })}
          </div>
        </InfiniteScroll>
        {this.state.topScroll && <span id="topScroller" onClick={this.scrollToTop}>TOP &#8593;</span>}
      </>
    )
  }
}
