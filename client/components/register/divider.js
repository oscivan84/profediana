import {Badge, Row, Col} from 'reactstrap';

const Divider = ({title}) => {
    return (
        <Row>
            <Col xs={4} lg={1}><Badge>{title}</Badge></Col>
            <Col xs={8} lg={11}><hr/></Col>
        </Row>
    )
}
export default Divider;