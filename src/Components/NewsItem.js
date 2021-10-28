import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let{title,description,imageUrl,newsUrl,name,time}=this.props;
        return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-warning " style={{left:'50%',zIndex:'1'}}>
    {name}
    
  </span>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}....</p>
    <a href={newsUrl} className="btn btn-warning btn-sm">Read More</a>
    <p className="card-text">{new Date(time).toGMTString()}</p>
  </div>
</div>
                
            </div>
        )
    }
}

export default NewsItem
