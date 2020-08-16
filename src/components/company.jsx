import React, { Component } from 'react';
import { Card, Dropdown, Divider, Tab, List } from 'semantic-ui-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import axios from 'axios';
import '../styles/company.scss';

const panes2 = [
    {
        menuItem: 'Chart',
        render: () => <Tab.Pane className='tab-options' attached={true}>
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
    { key: 'Ashokley', text: 'Ashokley Industries', value: 'Ashokey' },
    { key: 'Cipla', text: 'Cipla Industries', value: 'Ciple' },
    { key: 'Reliance', text: 'Reliance Industries', value: 'Reliance' },
    { key: 'Tatasteel', text: 'TataSteel Industries', value: 'TataSteel' },
    { key: 'Eichermotors', text: 'Eichermotors Industries', value: 'Eichermotors' }
]

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

class Company extends Component {
    constructor(props) {
        super(props)
        this.state = {
            company: [],
        }
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/ashokley/year/`)
        .then(res => {
            const stock = res.data;
            console.log(stock);
            this.setState({
                company: stock,
            });
        })
    }

    render() {
        return (
            <>
                <div className="bottom-card">
                    <Card className='company-data-card'>
                        <Card.Content>
                            <Card.Header className='header-1'>
                                <Dropdown placeholder='Ashokley Industries' className='dropdown-1' selection options={options} /><br></br><br></br>
                                <span className='head'>CHARTS</span>
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
                            <Card.Description className='desc-2'>
                                <AreaChart width={1100} height={250} data={this.state.company}
                                    margin={{ top: 30, right: 30, left: 50, bottom: 10 }}>
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
                                    <XAxis dataKey="Date" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="Adj_close" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
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