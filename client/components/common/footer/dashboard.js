import React from 'react';
import { Col, Row } from 'react-bootstrap';

const FooterDashboard = () => {

    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col className="footer-copyright text-center">
                        <p className="mb-0">Copyright 2021 © Profesora Diana </p>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default FooterDashboard;