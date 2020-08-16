import React, { Component } from 'react';
import { Card, Dropdown, Divider, Tab, List } from 'semantic-ui-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import axios from 'axios';
import apiClient from '../config/apiclient';
import moment from 'moment';
import '../styles/company.scss';



const options = [
    { key: 'Ashokley', text: 'Ashokley Industries', value: 'Ashokey' },
    { key: 'Cipla', text: 'Cipla Industries', value: 'Ciple' },
    { key: 'Reliance', text: 'Reliance Industries', value: 'Reliance' },
    { key: 'Tatasteel', text: 'TataSteel Industries', value: 'TataSteel' },
    { key: 'Eichermotors', text: 'Eichermotors Industries', value: 'Eichermotors' }
]


class Company extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: [],
            nameL: 'ashokley',
        }
        this.formatXAxis = this.formatXAxis.bind(this)
        this.changeUrl = this.changeUrl.bind(this)
    }

    componentDidMount() {
        apiClient.get(`/ashokley/year/`)
            .then(res => {
                const stock = res.data;
                console.log(stock);
                this.setState({
                    company: stock,
                    name: 'ashokley',
                    active: 'year',
                });
            })
    }

    formatXAxis(tickItem) {
        return moment(tickItem).format('DD MMM')
    }


    changeCustomUrl(string){
        switch(string){
            case 'day':
                apiClient.get(`/${this.state.name}/day/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'day',
                    });
                })
                break;
            case 'oneWeek':
                apiClient.get(`/${this.state.name}/week/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'week',
                    });
                })
                break;
            case 'oneMonth':
                apiClient.get(`/${this.state.name}/month/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'month',
                    });
                })
                break;
            case 'threeMonth':
                apiClient.get(`/${this.state.name}/threemonth/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'threemonth',
                    });
                })
                break; 
            case 'sixMonth':
                apiClient.get(`/${this.state.name}/sixmonth/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'sixmonth',
                    });
                })
                break;
            case 'oneYear':
                apiClient.get(`/${this.state.name}/year/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'year',
                    });
                })
                break;
            case 'fiveYear':
                apiClient.get(`/${this.state.name}/fiveyear/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'fiveyear',
                    });
                })
                break;
            case 'all':
                apiClient.get(`/${this.state.name}/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'all',
                    });
                })
                break;
            default:
                apiClient.get(`/${this.state.name}/`)
                .then(res => {
                    const stock = res.data;
                    this.setState({
                        company: stock,
                        active: 'all',
                    });
                })
        }
    }

    panes2 = [
        {
            menuItem: 'Chart',
            render: () => <Tab.Pane className='tab-options' attached={true}>
                <div className="options">
                    <div className={this.state.active == 'day' ? 'active': ''} onClick={(event) => this.changeCustomUrl('day')} >1D</div>
                    <div className={this.state.active == 'week' ? 'active': ''} onClick={(event) => this.changeCustomUrl('oneWeek')}>1W</div>
                    <div className={this.state.active == 'month' ? 'active': ''} onClick={(event) =>this.changeCustomUrl('oneMonth')}>1M</div>
                    <div className={this.state.active == 'threemonth' ? 'active': ''} onClick={(event) => this.changeCustomUrl('threeMonth')} >3M</div>
                    <div className={this.state.active == 'sixmonth' ? 'active': ''} onClick={(event) => this.changeCustomUrl('sixMonth')} >6M</div>
                    <div className={this.state.active == 'year' ? 'active': ''} onClick={(event) => this.changeCustomUrl('oneYear')} >1Y</div>
                    <div className={this.state.active == 'twoyear' ? 'active': ''} onClick={(event) => this.changeCustomUrl('twoYear')} >2Y</div>
                    <div className={this.state.active == 'fiveyear' ? 'active': ''} onClick={(event) => this.changeCustomUrl('fiveYear')}>5Y</div>
                    <div className={this.state.active == 'all' ? 'active': ''} onClick={(event) => this.changeCustomUrl('all')}>ALL</div>
                </div>
            </Tab.Pane>,
        },
    ]
    changeUrl = (event, { value }) => {
        console.log(value)
        switch (value) {
            case 'Cipla':
                apiClient.get(`/cipla/${this.state.active}/`)
                .then(res => {
                    const stock = res.data;
                    console.log(stock);
                    this.setState({
                        company: stock,
                        name: 'cipla',
                    });
                })
                break;
            case 'Reliance':
                console.log('hello')
                apiClient.get(`/reliance/${this.state.active}/`)
                .then(res => {
                    const stock = res.data;
                    console.log(stock);
                    this.setState({
                        company: stock,
                        name: 'reliance',
                    });
                })
                break;
            case 'Tatasteel':
                console.log('hello')
                apiClient.get(`/tatasteel/${this.state.active}/`)
                .then(res => {
                    const stock = res.data;
                    console.log(stock);
                    this.setState({
                        company: stock,
                        name: 'tatasteel',
                    });
                })
                break;
            case 'Eichermotors':
                console.log('hello')
                apiClient.get(`/eichermotors/${this.state.active}/`)
                .then(res => {
                    const stock = res.data;
                    console.log(stock);
                    this.setState({
                        company: stock,
                        name: 'eichermotors',
                    });
                })
                break;
            case 'Ashokley':
                    apiClient.get(`/ashokley/${this.state.active}/`)
                    .then(res => {
                        const stock = res.data;
                        console.log(stock);
                        this.setState({
                            company: stock,
                            name: 'askokley',
                        });
                    })
                    break;
            default:
                apiClient.get(`/ashokley/${this.state.active}/`)
                .then(res => {
                    const stock = res.data;
                    console.log(stock);
                    this.setState({
                        company: stock,
                        name: 'ashokley',
                    });
                })
        }

    }
    render() {
        return (
            <>
                <div className="bottom-card">
                    <Card className='company-data-card'>
                        <Card.Content>
                            <Card.Header className='header-1'>
                                <Dropdown placeholder='Ashokley Industries' onChange={this.changeUrl} className='dropdown-1' selection options={options} /><br></br><br></br>
                                <span className='head'>CHARTS</span>
                            </Card.Header>
                            <Card.Description className='desc-1'>
                                <Tab menu={{ secondary: true, pointing: true }} panes={this.panes2} />
                                <div className="info-box">
                                    <div className="info-date">27 Jan 2020</div>
                                    <div><span>Open:</span> 1500.67</div>
                                    <div><span>High:</span> 1490.87</div>
                                    <div><span>Low:</span> 1490.87</div>
                                    <div><span>Close:</span> 1492.40</div>
                                    <div><span>Volume:</span> 6178447</div>
                                </div>
                            </Card.Description>
                            <Card.Description className='desc-2'>
                                <AreaChart width={1500} height={250} data={this.state.company}
                                    margin={{ top: 30, right: 30, left: 0, bottom: 10 }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis
                                        dataKey="Date"
                                        tickFormatter={this.formatXAxis}
                                    />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Close" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                </AreaChart>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </div>
            </>
        )
    }
}


export default Company;