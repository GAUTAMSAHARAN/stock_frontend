import React from 'react';
import { Card, Dropdown, Divider, Tab, List } from 'semantic-ui-react'
import '../styles/company.scss';

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

const Company = () => {
    return (
        <>
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
        </>
    )
}

export default Company;