import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FormResetPassword from '../components/auth/formResetPassword';
import { guest } from '../helpers/authServerSideProps'
import { LayoutHero } from '../components/common/layout';

const PageResetPassword = () => {

    return (
        <LayoutHero>
            <Row className="m-0">
                <Col xs="12" className="p-0">
                    <div>
                        <div className="login-card"
                            style={{  background: '#F7CAC9', height: 'auto' }}
                        >
                            <FormResetPassword/>
                        </div>    
                    </div>    
                </Col>
            </Row>
        </LayoutHero>
    )
}

export const getServerSideProps = guest('Reset Password')

export default PageResetPassword;