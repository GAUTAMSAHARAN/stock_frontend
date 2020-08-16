import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, Tab, Button, Checkbox, Form } from 'semantic-ui-react'
import '../styles/login.scss';
import apiClient from '../config/apiclient';
import { Route, Switch, Redirect } from "react-router-dom";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';





class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signup: {
                username: '',
                first_name: '',
                password: '',
                email: '',
            },
            login: {
                password: '',
                email: '',
            },
        }
        this.onChange = this.onChange.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this.logInSubmit = this.logInSubmit.bind(this)
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({
          login: {...this.state.login, [name]: value}
        })
    }

    onChange2 = e => {
        const { name, value } = e.target
        this.setState({
          signup: {...this.state.signup, [name]: value}
        })
    }

    logInSubmit(){
        const values = this.state.login
        apiClient.post(`/user/login/`,values)
        .then(res => {
            if(res.data.token != undefined){
              console.log(res.data.token);
              sessionStorage.setItem("token", res.data.token);
              sessionStorage.setItem('IsLoggedIn', true);
              this.props.history.push("/app"); }
        })
        .catch(function (error) {
            throw error;
            console.log(error);
        });
    }

    signUpSubmit(){
        const values = this.state.signup
        apiClient.post(`/user/`,values)
        .then(res => {
            if(res.data.token != undefined){
                console.log(res.data);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem('IsLoggedIn', true);
                return <Redirect to={"/app"} />
            }
        })
        .catch(function (error) {
            throw error;
            console.log(error);
        });     
    }

    panes = [
        {
            menuItem: 'Register', render: () => <Tab.Pane className='panel'>
                <Form>
                    <Form.Field>
                        <label>Name</label>
                        <input placeholder='Name' name='first_name' onChange={(e)=> this.onChange2(e)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='username' name='username' onChange={(e) => this.onChange2(e)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='email' name='email' onChange={(e) => this.onChange2(e)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='password' name='password' onChange={(e) => this.onChange2(e)} />
                    </Form.Field>
                    <Button className='button-submit' onClick={() => this.signUpSubmit()} type='submit'>Register</Button>
                </Form>
            </Tab.Pane>
        },
        { menuItem: 'Log In', render: () => <Tab.Pane className='panel'>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' name='email' onChange={(e) => this.onChange(e)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='password' name='password' onChange={(e) => this.onChange(e)} />
                    </Form.Field>
                    <Button className='button-submit' onClick={() => this.logInSubmit()} type='submit'>Log In</Button>
                </Form>
        </Tab.Pane> },
    ]





    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' }}>
                        <div className="box">
                            <div className="login-heading">Stock</div>
                            <div className="login-desc">Flipr hackathon web development 5.0</div>
                            <Card className='login-card'>
                                <Card.Content>
                                    <Card.Description>
                                        <Tab panes={this.panes} />
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </div>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default LogIn;