import React, { Component } from 'react'
import { Loading } from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    articles=[]
    
    static propTypes={
        country : PropTypes.string,
        cat : PropTypes.string,
        pageSize : PropTypes.number
    }
    
    
    constructor(){
        super();
        this.state={
            articles : this.articles,
            loading : false,
            page : 1,
            totalResults : 1
        }
       
    }
    async componentDidMount(){
        this.setState({loading: true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=cfc8f30deadf4adca8316793d439f9d3&pageSize=${this.props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults : parsedData.totalResults,loading:false})
        }
        handleNext=async()=>
        {
           

                this.setState({loading: true})
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=cfc8f30deadf4adca8316793d439f9d3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({articles: parsedData.articles,
            page:this.state.page+1,loading : false})

        
    }
        handlePrev=async()=>
        {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=cfc8f30deadf4adca8316793d439f9d3&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({articles: parsedData.articles,
            page : this.state.page-1,loading : false})

        }
        
    
    render() {
        return (
            <div className="container my-3 mx--3">
                <h2>NewsMonk Top Headlines</h2>
                {this.state.loading&&<Loading/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return  <div className="col-md-3" key={element.url}>
                        <NewsItem title={element.title} description={element.description} imageUrl= {element.urlToImage} newsUrl={element.url} name={element.source.name} time={element.publishedAt}/>
                        </div>
                    })}
                    </div>
                    <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handlePrev}>&#8592; Previous</button>
                    <button  disabled ={this.state.page +1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick={this.handleNext}>Next &#8594;</button>
                    </div>
               
               
            </div>
        )
    }
}

export default News
