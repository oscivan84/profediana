import React from 'react';
import { Input, Button } from 'reactstrap'
import { Search } from 'react-feather'

export const HeaderList = ({ start = 1, total = 1, querySearch = '', disabled = false, children = null, onChange = null, onClick = null }) => {

    return (
        <div className="row">
            <div className="col-md-1 mb-1">
                <h6>{start}/{total}</h6>
            </div>
            <div className="col-md-5 mb-1 col-10">
                <Input onChange={({ target }) => typeof onChange == 'function' ? onChange(target) : null}
                    name="query_search"
                    disabled={disabled}
                    value={querySearch}
                />
            </div>

            {children}
            
            <div className="col-md-1 mb-1 col-2">
                <Button size="xs" block
                    color="primary"
                    className="pt-1"
                    disabled={disabled}
                    onClick={(e) => typeof onClick == 'function' ? onClick(e) : null}
                >
                    <Search/>
                </Button>
            </div>
        </div>
    )
}