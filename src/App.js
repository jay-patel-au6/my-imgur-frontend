import React, { Component } from 'react';
import './App.scss';
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { dashboard, logout } from './actions/userActions'

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav>
                    <div>
                        <h1><NavLink to='/'>Imgur</NavLink></h1>
                    </div>
                    {this.props.user ? (
                        <div>
                            <h3>User: {this.props.user.userName}</h3>
                        </div>
                    ) : null}
                    <div>
                        {!this.props.user ? <NavLink to='/register'>Register</NavLink> : null}
                        {!this.props.user ? <NavLink to='/login'>Login</NavLink> : null}
                        {this.props.user ? <button onClick={this.props.logout}>Logout</button> : null}
                    </div>
                </nav>
                <div>
                    {/* <Switch> */}
                        <Route exact path='/register' component={RegisterPage}></Route>
                        <Route exact path='/login' component={LoginPage}></Route>
                        <Route       path='/' component={HomePage}></Route>
                        {/* <Redirect to='/'/> */}
                    {/* </Switch> */}
                </div>
            </div>
        );
        
    }

    componentDidMount() {
        this.props.dashboard()
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
        dashboard: () => dispatch(dashboard()),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
