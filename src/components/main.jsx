import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../styles/main.scss';
import StockIndex from './stockindex';
import Company from './company';
import Short from './popup';

const Main = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'white', height: 'fit-content' }}>
                    <Short />
                    <StockIndex />
                    <Company />
                </Typography>
            </Container>
        </React.Fragment >
    );
}

export default Main;