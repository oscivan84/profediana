import React, { useMemo } from 'react';
import { Card, CardHeader, CardFooter, Col } from 'reactstrap';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import SearchReciver from './searchReceiver';

const Receiver = ()  => {

  const { receiver } = useSelector(state => state.invoice);

  const defaultImage = require(`../../../assets/images/social-app/post-1.png`)

  const isReceiver = useMemo(() => {
    return Object.keys(receiver || {}).length ? true : false;
  }, [receiver]);

  const renderInfo = () => (
    <>
      <div className="card-profile mt-4" style={{ zIndex: 0 }}>
        <Image body 
          className="image-receiver"
          src={receiver.displayImage || defaultImage} 
          alt="image" 
        />
      </div>
      <ul className="card-social">
        <li>
          [{receiver?.displayType}]
        </li>
      </ul>
      <div className="text-center profile-details mt-3">
        <h4 className='text-capitalize'>{receiver?.displayTitle}</h4>
        <h6 className='mb-0'>{receiver?.displayEmail}</h6>
        <h6>{receiver?.displayPhone}</h6>
      </div>
      <CardFooter className="row">
        <Col sm="12 col-4">
          <h6>{receiver?.displayAddress}</h6>
        </Col>
      </CardFooter>
    </>
  );

  return (
    <Card className="custom-card" style={{ overflow: 'auto', minHeight: '100%' }}>
      <CardHeader>
        <SearchReciver/>
      </CardHeader>
      {isReceiver ? renderInfo() : null}
    </Card>
  )
}

export default Receiver;