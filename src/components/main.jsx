import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Card, Dropdown, Divider, Tab, List } from 'semantic-ui-react'
import '../styles/main.scss';


const panes = [
    {
        menuItem: 'Overview',
        render: () => <Tab.Pane attached={false}>
            <div className="box">
                <div className="left">
                    <List divided relaxed className='overview-list'>
                        <List.Item>
                            <List.Content className='list-item'>
                                <div className="title">Open</div>
                                <div className="value">11,353.30</div>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content className='list-item'>
                                <div className="title">Previous Close</div>
                                <div className="value">11,353.30</div>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content className='list-item'>
                                <div className="title">Day High</div>
                                <div className="value">11,353.30</div>
                            </List.Content>
                        </List.Item>
                    </List>
                </div>
                <div className="right">
                <List divided relaxed className='overview-list'>
                        <List.Item>
                            <List.Content className='list-item'>
                                <div className="title">Day Low</div>
                                <div className="value">11,353.30</div>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content className='list-item'>
                                <div className="title">52 Week High</div>
                                <div className="value">11,353.30</div>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <List.Content className='list-item'>
                                <div className="title">52 Week Low</div>
                                <div className="value">11,353.30</div>
                            </List.Content>
                        </List.Item>
                    </List>
                </div>
            </div>
        </Tab.Pane>,
    },
]

const panes2 = [
    {
      menuItem: 'Chart',
      render: () => <Tab.Pane className='tab-options'  attached={true}>
          <div className="options">
              <div>1D</div>
              <div>1W</div>
              <div>1M</div>
              <div>3M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>2Y</div>
              <div>5Y</div>
              <div>ALL</div>
          </div>
      </Tab.Pane>,
    },
  ]

const options = [
    { key: 'NSE', text: 'NSE', value: 'NSE' },
    { key: 'BSE', text: 'BSE', value: 'BSE' },
]

const options2 = [
    {}
]

const Main = () => {
    const [activeItem, setActiveItem] = useState('overview')
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: 'white', height: 'fit-content' }}>
                    <div className="top">
                        <div className="heading"><span>Stock Stuff</span><br></br>Full stack webapplication for flipr hackathon 5.0 </div>
                        <Card className='top-card'>
                            <Card.Content>
                                <Card.Header className='head'><span>NSE</span><br></br>NIFTY 50</Card.Header>
                                <Card.Description className='data'>
                                    <div className="current">11,325.10</div>
                                    <div className="previous">
                                        <span>Prev Close</span><br></br>11,300.45
                                    </div>
                                </Card.Description>
                            </Card.Content>
                            <Card.Header className='bottom'>
                            </Card.Header>
                        </Card>
                    </div>
                    <div className="middle">
                        <Card className='stock-data-card'>
                            <Card.Content>
                                <Card.Header className='header-1'>
                                    <Dropdown placeholder='NSE' selection options={options} /><br></br><br></br>
                                    <span>NIFTY 50</span> 
                                </Card.Header>
                                <Divider section />
                                <Card.Description className='desc-1'>
                                    <div className="left">
                                        <span className="value">11,323.85</span><br></br>
                                        <span className="analysis">23.40(0.21%)</span><br></br>
                                        <span className="date">As on 14 Aug, 2020 10:46 IST</span>
                                    </div>
                                    <div className="right">
                                        <div className="day">
                                            <span>Day Range</span><br></br>
                                            <div className="values"><span>11,315.25</span><span>11,361.40</span></div>
                                            <div className="bar">
                                                <div className='text'>L</div>
                                                <div className='line'></div>
                                                <div className='text'>H</div>
                                            </div>
                                        </div>
                                        <div className="year">
                                            <span>52 week Range</span><br></br>
                                            <div className="values"><span>11,315.25</span><span>11,361.40</span></div>
                                            <div className="bar">
                                                <div className='text'>L</div>
                                                <div className='line'></div>
                                                <div className='text' >H</div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Description>
                                <Divider section />
                                <Card.Description className='desc-2'>
                                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="bottom-card">
                    <Card className='company-data-card'>
                            <Card.Content>
                                <Card.Header className='header-1'>
                                    <Dropdown placeholder='NSE' className='dropdown-1' selection options={options} /><br></br><br></br>
                                    <span>CHARTS</span> 
                                </Card.Header>
                                <Card.Description className='desc-1'>
                                <Tab menu={{ secondary: true, pointing: true }} panes={panes2} />
                                <div className="info-box">
                                    <div className="info-date">27 Jan 2020</div>
                                    <div><span>Open:</span> 1500.67</div>
                                    <div><span>High:</span> 1490.87</div>
                                    <div><span>Low:</span> 1490.87</div>
                                    <div><span>Close:</span> 1492.40</div>
                                    <div><span>Volume:</span> 6178447</div>
                                </div>
                                </Card.Description>
                                <Card.Description>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </div>
                </Typography>
            </Container>
        </React.Fragment >
    );
}

export default Main;