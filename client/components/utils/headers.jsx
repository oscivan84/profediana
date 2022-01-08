import React from 'react';
import { Input, Button, Row, Col } from 'reactstrap'
import { Search } from 'react-feather'

export const HeaderList = ({ start = 1, total = 1, querySearch = '', disabled = false, children = null, onChange = null, onClick = null }) => {

    return (
        <Row>
            <Col md={1} className="mb-1">
                <h6>{start}/{total}</h6>
            </Col>
            <Col xs={10} md={5} className="mb-1">
                <Input onChange={({ target }) => typeof onChange == 'function' ? onChange(target) : null}
                    name="query_search"
                    disabled={disabled}
                    value={querySearch}
                />
            </Col>

            {children}
            
            <Col md={1} xs={2} className="mb-1">
                <Button size="xs" block
                    color="primary"
                    className="pt-1"
                    disabled={disabled}
                    onClick={(e) => typeof onClick == 'function' ? onClick(e) : null}
                >
                    <Search/>
                </Button>
            </Col>
        </Row>
    )
}