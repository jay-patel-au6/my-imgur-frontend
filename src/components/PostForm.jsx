import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newPost } from './../actions/appActions'

class PostFrom extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        const form = new FormData(event.target)
        this.props.newPost(form)
    }

    render() {
        return (
            <>
            <h3>Post a new image</h3>
            <form onSubmit={this.handleSubmit}>
                <input required onChange={this.handleChange} value={this.state.title || ''} name="title" id="titleNewPost" placeholder="Title"></input>
                <input required type='file' accept="image/png, image/jpeg, image/jpg, image/gif" name="upload" id="fileInputPost" multiple placeholder="Upload Images"></input>
                <input onChange={this.handleChange} value={this.state.details || ''} name="details" id="detailsNewPost" placeholder="Details"></input>
                <input type="submit" value="Post"/>
            </form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        errorName: state.userReducer.errorName,
        errorMsg: state.userReducer.errorMsg,
        error: state.userReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newPost: (formData) => dispatch(newPost(formData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFrom)
