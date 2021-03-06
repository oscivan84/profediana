import React from 'react'
import { Row, Col } from 'reactstrap'
import FormLogin from '../components/auth/formLogin';
import { guest } from '../helpers/authServerSideProps';
import { LayoutHero } from '../components/common/layout';
import { connect } from 'react-redux'

const PageLogin = () => {

    return (
        <LayoutHero>
            <Row className="m-0">
                <Col xs="12" className="p-0">
                    <div>
                        <div className="login-card block"
                            style={{  background: '#F7CAC9', height: 'auto' }}
                        >
                            <FormLogin/>
                        </div>    
                    </div>    
                </Col>
            </Row>
        </LayoutHero>
    )
}

export const getServerSideProps = guest('Login')

export default connect(state => state)(PageLogin);