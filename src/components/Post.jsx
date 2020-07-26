import React, { Component } from 'react'
import './../styles/Post.scss'

export default class Post extends Component {
    render() {
        return (
            <div className="Post">
                <h3>{this.props.title}<span>By {this.props.uploadedBy.userName}</span></h3>
                <div className="postImgs">
                    {this.props.imgUrls.map(imgObj => <img key={imgObj._id} src={imgObj.url} alt={'An img for "' + this.props.title + '"'}></img>)}
                </div>
                <p className="postDetails">{this.props.details}</p>
            </div>
        )
    }
}
