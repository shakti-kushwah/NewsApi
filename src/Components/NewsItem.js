import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, discription, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <div style={{display: 'flex', justifyContent:'flex-end', position: 'absolute', right: '0'}}>
                        <span className='badge rounded-pill bg-danger'> {source} </span> 
                    </div>

                    <img 
                        src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/09/16/1600x900/Yashobhoomi--the-India-International-Convention-an_1694829649280_1694829667137.jpg" : imageUrl} className="card-img-top" alt="..."
                    />

                    <div className="card-body">
                        <h5 className="card-title"> {title} </h5>
                        <p className="card-text"> {discription} </p>
                        <p className='card-text'><small className='text-muted'> By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark"> Read More </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
