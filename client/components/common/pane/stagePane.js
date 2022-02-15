import React, { useEffect, useState } from 'react';
import { Button, CardFooter, TabContent } from 'reactstrap';
import { LeftCard, RightCard } from '../card'

const StageButton = ({text, ...rest}) => (
    <Button
        style={{ width : '30%', margin : '10px 10px 0 0', float : 'right' }}
        color="primary"
        size="lg"
        {...rest}
    >
        {text}
    </Button>
);
const StageMarker = ({current, complete=false, pane, onClick }) => (
    <Button
        block
        color={ complete ? 'success' : 'primary' }
        size="lg"
        disabled={ current !== pane.key }
        onClick = { onClick }
        style = {{textAlign:'left'}}
    >
        <i className="fa fa-angle-right"></i>
        &nbsp;&nbsp;&nbsp;&nbsp;{pane.label}
    </Button>
);

export const StageController = ( { stages = 1, onFinnally = ()=>{}, onChangeStage = ( currentStage )=>{}, lockNext, lockBack } ) => {
    const [ currentStage, setStage ] = useState( 0 )
    const __NextStage = () => setStage( currentStage + 1 )
    const __LastStage = () => setStage( currentStage - 1 )
    const __Finnally = () => onFinnally() 
    useEffect( () => {
        onChangeStage( currentStage )
    }, [ currentStage ] )
    return (
        <CardFooter>
            {
                currentStage === stages - 1 ? 
                    <StageButton onClick={__Finnally} text={"Finalizar"} disabled={ lockNext } />
                :   <StageButton onClick={__NextStage} text={"Siguiente"} disabled={ lockNext } />
            }
            { currentStage > 0 ? <StageButton onClick={__LastStage} text={"Anterior"} disabled={ lockBack } /> : null }
        </CardFooter>
    )
};

const StagePane = ( {children, currentStage = 0, panes = [] } ) => {
    const [ tabActive, setTabActive ] = useState( panes[0] );
    useEffect( () => {
        setTabActive( panes[currentStage] )
    }, [currentStage] )
    return (
        <>
            <LeftCard>
                {
                    panes.map( (pane, index) => <StageMarker current={ tabActive.key } pane={pane} complete={currentStage > index} /> )
                }
            </LeftCard>
            <RightCard>
                <TabContent activeTab={tabActive.key} >
                    {children}
                </TabContent>
            </RightCard>
        </>
    )
};

export default StagePane