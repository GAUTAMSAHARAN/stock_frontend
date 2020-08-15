import React from 'react';
import { Card, Dropdown, Divider, Tab, List } from 'semantic-ui-react'
import '../styles/popup.scss';

const Short = () => {
    return (
        <>
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
        </>
    )
}

export default Short;