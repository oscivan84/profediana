import React, { useState } from 'react';
import { Card, CardHeader, CardFooter, Col } from 'reactstrap';
import Image from 'next/image';
import { SelectDefault } from '../../common/select';

const Receiver = ({
  name = "Oscar Diaz",
  email = "oscar.diaz@gmail.com",
  phone = "+51 999 999 999",
  address = "Js Sol naciente"
})  => {

  const [receiver, setReceiver] = useState();

  return (
    <Card className="custom-card" style={{ overflow: 'auto', minHeight: '100%' }}>
      <CardHeader>
        <div style={{ zIndex: 999 }}>
          <SelectDefault placeholder="Buscar comprador"/>
        </div>
      </CardHeader>
      <div className="card-profile mt-4" style={{ zIndex: 0 }}>
        <Image body 
          className="rounded-circle" 
          src={require(`../../../assets/images/social-app/post-1.png`)} alt="" 
        />
      </div>
      <ul className="card-social">
        <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
        <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
        <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
      </ul>
      <div className="text-center profile-details mt-3">
        <h4>{name}</h4>
        <h6 className='mb-0'>{email}</h6>
        <h6>{phone}</h6>
      </div>
      <CardFooter className="row">
        <Col sm="12 col-4">
          <h6>Dirección</h6>
          <h5 className="counter">{address}</h5>
        </Col>
      </CardFooter>
    </Card>
  )
}

export default Receiver;