import React, { useMemo, useState } from 'react';
import { Card, CardHeader, CardFooter, Col } from 'reactstrap';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import SearchReciver from './searchReceiver';
import ModalCamera from './modalCamera';
import { Row, Button } from 'react-bootstrap';
import { Mail, MapPin, PhoneCall } from 'react-feather';


const Receiver = () => {

  const { receiver } = useSelector(state => state.invoice);

  const defaultImage = require(`../../../assets/images/social-app/post-1.png`)

  const changeImage = ['Student'];

  const [showCamera, setShowCamera] = useState(false);

  const isReceiver = useMemo(() => {
    return Object.keys(receiver || {}).length ? true : false;
  }, [receiver]);

  const isChangeImage = useMemo(() => {
    return changeImage.includes(receiver?.receiverType);
  }, [receiver?.receiverType])

  const renderInfo = () => (
    <Row>
      <Col xs={12} lg={2} className="py-3 text-center">
        <Image body
          className="img-fluid"
          src={receiver.displayImage || defaultImage}
          alt="image"
        />
        {isChangeImage
        ? (
            <Button color="light"
            size="sm"
              onClick={() => setShowCamera(true)}>
              Tomar Foto
            </Button>
        )
        : null}
      </Col>
      <Col xs={12} lg={10} className="mt-4">
      <h3 className='text-capitalize'>{receiver?.displayTitle}</h3>
      <span className="my-2">{receiver?.displayType}</span>
      <h6 className="d-flex mt-3"><Mail size="16" className="mr-3"/>{receiver?.displayEmail}</h6>
      <h6 className="d-flex"><PhoneCall size="16" className="mr-3"/>{receiver?.displayPhone}</h6>
      <h6 className="d-flex"><MapPin size="16" className="mr-3"/>{receiver?.displayAddress}</h6>
      </Col>
      {/* modal para tomar foto */}
      {showCamera ? <ModalCamera onToggle={() => setShowCamera(false)} /> : null}
    </Row>
  );

  return (
    <Card className="custom-card" style={{ overflow: 'auto', minHeight: '100%' }}>
      <CardHeader>
        <SearchReciver />
      </CardHeader>
      {isReceiver ? renderInfo() : null}
    </Card>
  )
}

export default Receiver;