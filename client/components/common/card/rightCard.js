import React from 'react';
import { Col, Card } from 'reactstrap'

const RightCard = ( props ) => <>
    <Col md="8" className='mb-2'>
        <Card className="custom-card" style={{ overflow: 'auto', minHeight: '300px' }} >
            {props.children}
        </Card>
    </Col>
</>;

export default RightCard