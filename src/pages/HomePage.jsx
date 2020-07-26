import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostForm from '../components/PostForm'
import Post from './../components/Post'
import './../styles/HomePage.scss'

class HomePage extends Component {
    render() {
        return (
            <div className="HomePage">
                {this.props.user ? <PostForm/> : null}
                <h1>Enjoy Images!</h1>
                {this.props.posts ? (
                    <div className="posts">
                        {this.props.posts.map(post => <Post key={post._id}{...post}/>)}
                    </div>
                ) : null}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        posts: state.userReducer.posts,
        errorName: state.userReducer.errorName,
        errorMsg: state.userReducer.errorMsg,
        error: state.userReducer.error
    }
}

export default connect(mapStateToProps, null)(HomePage)