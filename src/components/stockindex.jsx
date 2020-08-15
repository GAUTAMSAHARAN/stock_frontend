import React, {useState} from 'react';
import { Card, Dropdown, Divider, Tab, List } from 'semantic-ui-react'
import '../styles/stock.scss';

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

const options = [
    { key: 'NSE', text: 'NSE', value: 'NSE' },
    { key: 'BSE', text: 'BSE', value: 'BSE' },
]

const StockIndex = () => {
    const [activeItem, setActiveItem] = useState('overview')
    return(
      <>
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
      </>
    )
}

export default StockIndex;