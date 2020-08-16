import React, { Component } from 'react';
import apiClient from '../config/apiclient';
import { Card, Dropdown, Divider, Tab, List } from 'semantic-ui-react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import '../styles/stock.scss';



const options = [
    { key: 'NSE', text: 'NSE', value: 'NSE' },
    { key: 'BSE', text: 'BSE', value: 'BSE' },
]

class StockIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: [],
            previous: [],
            year: [],
            title: 'NIFTY 50',
            url: 'NSE',
        }
        this.changeUrl = this.changeUrl.bind(this)
        this.round = this.round.bind(this)
        this.position = this.position.bind(this)
    }

    componentDidMount() {
        apiClient.get(`/nifty/niftydata/`)
        .then(res => {
            const stock = res.data;
            this.setState({
                current: stock.current,
                previous: stock.previous,
                year: stock.year[0],
                title: 'NIFTY 50',
            });
        })
    }

    round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    position(base, value){
        return (value/base)*100;
    }

    panes = [
        {
            menuItem: 'Overview',
            render: () => <Tab.Pane attached={false}>
                <div className="box">
                    <div className="left">
                        <List divided relaxed className='overview-list'>
                            <List.Item>
                                <List.Content className='list-item'>
                                    <div className="title">Open</div>
                                    <div className="value">{this.round(this.state.current.Open, 2).toLocaleString('en')}</div>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content className='list-item'>
                                    <div className="title">Previous Close</div>
                                    <div className="value">{this.round(this.state.previous.Close, 2).toLocaleString('en')}</div>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content className='list-item'>
                                    <div className="title">Day High</div>
                                    <div className="value">{this.round(this.state.current.High,2).toLocaleString('en')}</div>
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                    <div className="right">
                        <List divided relaxed className='overview-list'>
                            <List.Item>
                                <List.Content className='list-item'>
                                    <div className="title">Day Low</div>
                                    <div className="value">{this.round(this.state.current.Low,2).toLocaleString('en')}</div>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content className='list-item'>
                                    <div className="title">52 Week High</div>
                                    <div className="value">{this.round(this.state.year.High,2).toLocaleString('en')}</div>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content className='list-item'>
                                    <div className="title">52 Week Low</div>
                                    <div className="value">{this.round(this.state.year.Low,2).toLocaleString('en')}</div>
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                </div>
            </Tab.Pane>,
        },
    ]

    changeUrl = (event, {value}) => {
        console.log(value)
        switch(value){
            case 'NSE':
                console.log('hello')
                apiClient.get(`/nifty/niftydata/`)
                    .then(res => {
                        const stock = res.data;
                        this.setState({
                            current: stock.current,
                            previous: stock.previous,
                            year: stock.year[0],
                            title: 'NIFTY 50',
                            url: value,
                        });
                    })
                break;
            case 'BSE':
                console.log('hello')
                apiClient.get(`/sensex/data/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        current: stock.current,
                        previous: stock.previous,
                        year: stock.year[0],
                        title: 'SENSEX',
                        url: value,
                    });
                })
                break;
            default:
                apiClient.get(`/nifty/niftydata/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        current: stock.current,
                        previous: stock.previous,
                        year: stock.year[0],
                        title: 'NIFTY 50',
                        url: value,
                    });
                })
        }

    }

    render() {
        return (
            <>
                <div className="top">
                    <div className="heading"><span>Stock Stuff</span><br></br>Full stack webapplication for flipr hackathon 5.0 </div>
                    <Card className='top-card'>
                        <Card.Content>
        <Card.Header className='head'><span>NSE</span><br></br>{this.state.title}</Card.Header>
                            <Card.Description className='data'>
        <div className="current">{this.round(this.state.current.Adj_close,2).toLocaleString('en')}</div>
                                <div className="previous">
                                    <span>Prev Close</span><br></br>{this.round(this.state.previous.Close,2).toLocaleString('en')}
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
                                <Dropdown placeholder='NSE' selection options={options} onChange={this.changeUrl} /><br></br><br></br>
                                <span>{this.state.title}</span>
                            </Card.Header>
                            <Divider section />
                            <Card.Description className='desc-1'>
                                <div className="left">
                                    <span className="value">{this.round(this.state.current.Adj_close,2).toLocaleString('en')}</span><br></br>
        <span className="analysis">{ (this.state.current.Adj_close - this.state.previous.Adj_close) > 0 ? <ArrowDropUpIcon style={{ fontSize: 40}} /> : <ArrowDropDownIcon style={{ fontSize: 40}} />}{Math.abs(this.round(this.state.current.Adj_close - this.state.previous.Adj_close,2)).toLocaleString('en')}({Math.abs(this.round((this.state.current.Adj_close - this.state.previous.Adj_close) / this.state.previous.Adj_close,4)).toLocaleString('en')}%)</span><br></br>
                                    <span className="date">As on 13 Aug, 2020 10:46 IST</span>
                                </div>
                                <div className="right">
                                    <div className="day">
                                        <span>Day Range</span><br></br>
                                        <div className="values"><span>{this.round(this.state.current.Low,2).toLocaleString('en')}</span><span>{this.round(this.state.current.High,2).toLocaleString('en')}</span></div>
                                        <div className="bar">
                                            <div className='text'>L</div>
                                            <div className='line'><div className="ball" style={{marginLeft: this.position(this.state.current.High-this.state.current.Low, this.state.current.Adj_close-this.state.current.Low) + '%'}} ></div></div>
                                            <div className='text'>H</div>
                                        </div>
                                    </div>
                                    <div className="year">
                                        <span>52 week Range</span><br></br>
                                        <div className="values"><span>{this.round(this.state.year.Low,2).toLocaleString('en')}</span><span>{this.round(this.state.year.High,2).toLocaleString('en')}</span></div>
                                        <div className="bar">
                                            <div className='text'>L</div>
                                            <div className='line'><div className="ball" style={{marginLeft: this.position(this.state.year.High-this.state.year.Low, this.state.current.Adj_close-this.state.year.Low) + '%'}} ></div></div>
                                            <div className='text' >H</div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Description>
                            <Divider section />
                            <Card.Description className='desc-2'>
                                <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </>
        )
    }
}


export default StockIndex;