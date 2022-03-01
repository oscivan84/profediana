import React from 'react';
import { Col, Card } from 'reactstrap'

const LeftCard = ( props ) => <>
    <Col md="4" className='mb-2'>
        <Card className="custom-card" style={{ overflow: 'auto', minHeight: '100%' }}>
            {props.children}
        </Card>
    </Col>
</>;

export default LeftCard