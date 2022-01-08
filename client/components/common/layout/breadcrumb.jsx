import React from 'react';
import { User } from 'react-feather'
import Link from 'next/link'
import { Col } from 'react-bootstrap';

const Breadcrumb = ({ title = 'Titulo', parent = '/' }) => {

    return (
        <div className="page-title">
            <div className="row">
                <Col xs={6}>
                    <h3>{title}</h3>
                </Col>
                <Col xs={6}>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                <a><User/></a>
                            </Link>
                        </li>
                        <li className="breadcrumb-item">{parent}</li>
                        <li className="breadcrumb-item active">{title}</li>
                    </ol>
                </Col>
            </div>
        </div>
    )
}

export default Breadcrumb;