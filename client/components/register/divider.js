import {Badge, Row, Col} from 'reactstrap';

const Divider = ({title}) => {
    return (
        <Row>
            <Col lg={1}><Badge>{title}</Badge></Col>
            <Col lg={11}><hr/></Col>
        </Row>
    )
}
export default Divider;