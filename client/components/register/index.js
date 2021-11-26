import React from 'react';
import { Row, Col } from 'reactstrap';
import RegisterForm from './form';
import { useSelector } from 'react-redux';

const Register = () => {

  const { mode } = useSelector(state => state.screen);

  return (
    <Row className="m-0 mt-5">
      <Col xs="12" className="p-0">
          <div>
            
            <div className="login-card block" 
                style={{  
                    background: '#F7CAC9', 
                    height: 'auto',
                    paddingTop: mode == 'xs' ? "2em" : "10em"
                }}
            >
                <RegisterForm/>
            </div>     
          </div>    
      </Col>
    </Row>
  )
}

export default Register;