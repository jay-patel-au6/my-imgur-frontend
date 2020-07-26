import React, { Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions/userActions'

class RegisterPage extends Component {
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
        const body = {
            userName: event.target.userName.value,
            password: event.target.password.value,
            fullName: event.target.fullName.value,
        }
        this.setState({fullName: null, userName: null, password: null})
        this.props.register(body)
    }

    render() {
        return (
            <div className="RegisterPage">
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required onChange={this.handleChange} value={this.state.fullName || ''} name="fullName" type="text" placeholder="Full name"/>
                    <input required onChange={this.handleChange} value={this.state.userName || ''} name="userName" type="text" placeholder="New username"/>
                    <input required onChange={this.handleChange} value={this.state.password || ''} name="password" type="password" placeholder="create password"/>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        )
    }

    componentDidUpdate() {
        if(this.props.user) {
            console.log("registered!")
            this.props.history.replace('/')
        }
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
        register: body => dispatch(register(body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)