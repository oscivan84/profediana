import React, { useState } from 'react';
import { Row, Col, Toast, ToastHeader, ToastBody, Card } from 'reactstrap';
import styled from 'styled-components';

const SplitPaneContainer = styled.div.attrs( ( props = { isSplit : false } ) => ({
    isSplit : props.isSplit
}) )`
    margin : 20px auto;
    display : grid;
    grid-template-columns : auto min-content;
    transition : grid-template-columns 0.3s;
    ${ props => props.isSplit ? 'grid-template-columns : 400px auto;' : '' }
`

const SplitedPane = ( { elements = [ { key:'default', title : 'Default', content : <>This is the content</> } ], data = [], childKey = 'key', ...props } ) => {
    const [ showedCol, setShowCol ] = useState( false )
    const [ selectedElement, setSelectedElement ] = useState( 0 )
    const toggleColumn = (index) => {
        setSelectedElement( index )
        if( selectedElement === index )
            setShowCol( !showedCol )
    }
    return (
        <Row>
            <Col>
                <SplitPaneContainer isSplit={ showedCol } >
                    <Col style={{ display : 'grid', maxHeight : '550px', overflow : 'auto', gridTemplateColumns : showedCol? '100%' : 'repeat(4, 1fr)', gap:'10px' }} >
                        { elements.map( (component, index) => <Toast key={component.key} id={component.key} onClick={()=>toggleColumn(index)} style={{minWidth : '150px'}} >
                            <ToastHeader>{component.title}</ToastHeader>
                            <ToastBody>{component.content}</ToastBody>
                        </Toast> ) }
                    </Col>
                    {
                        showedCol ? 
                        <Col style={{ maxHeight : '550px' }} >
                            <Card body color="dark">
                                {
                                    props.children ?
                                        React.cloneElement( props.children, { title : elements[selectedElement].title, data: data[selectedElement] } )
                                    :null
                                }
                            </Card>
                        </Col>
                        :null
                    }
                </SplitPaneContainer>
            </Col>
        </Row>
    )
}

export default SplitedPane