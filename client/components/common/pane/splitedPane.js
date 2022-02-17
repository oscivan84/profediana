import React, { useState } from 'react';
import { Row, Col, Toast, ToastHeader, ToastBody, Card } from 'reactstrap';

const SplitedPane = ( { indexes = [ { key:'default', title : 'Default', content : <>This is the content</> } ] , ...props } ) => {
    const [ showedCol, setShowCol ] = useState( false )
    const toggleColumn = (e) => {
        setShowCol( !showedCol )
    }
    return (
        <Row>
            <Col style={{ margin : '20px auto', display : 'grid', gridTemplateColumns : showedCol? '400px auto':'100%' }} >
                <Col style={{ display : 'grid', gridTemplateColumns : showedCol? '100%' : 'repeat(4, 1fr)', gap:'10px' }} >
                    { indexes.map( component => <Toast key={component.key} id={component.key} onClick={toggleColumn} >
                        <ToastHeader>{component.title}</ToastHeader>
                        <ToastBody>{component.content}</ToastBody>
                    </Toast> ) }
                </Col>
                {
                    showedCol ?
                        <Col>
                            <Card body color="dark">
                                {props.children}
                            </Card>
                        </Col> 
                    :null
                }
            </Col>
        </Row>
    )
}

export default SplitedPane