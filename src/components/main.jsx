import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../styles/main.scss';
import StockIndex from './stockindex';
import Company from './company';
import { Route, Switch, Redirect } from "react-router-dom";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


class Main extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this)
    }

    logout(){
        sessionStorage.setItem('IsLoggedIn', false);
        sessionStorage.removeItem('token');
        this.props.history.push("/"); 
     }

    render(){

        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Typography component="div" style={{ backgroundColor: 'white', height: 'fit-content' }}>
                <PowerSettingsNewIcon className='logout' onClick={() => this.logout()} />
                        <StockIndex />
                        <Company />
                    </Typography>
                </Container>
            </React.Fragment >
        )
    }
}

export default Main;