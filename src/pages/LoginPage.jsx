import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/userActions'

class LoginPage extends Component {
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
        }
        this.setState({userName: null, password: null})
        this.props.login(body)
    }

    render() {
        return (
            <div className="LoginPage">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required onChange={this.handleChange} value={this.state.userName || ''} name="userName" type="text" placeholder="New username"/>
                    <input required onChange={this.handleChange} value={this.state.password || ''} name="password" type="password" placeholder="create password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }

    componentDidUpdate() {
        if(this.props.user) {
            console.log("logged in!")
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
        login: body => dispatch(login(body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)