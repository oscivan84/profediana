import React, { useMemo } from 'react';
import { Card, CardHeader ,Table, Button } from "reactstrap"
import ObjectId from 'bson-objectid'
import Show from '../../utils/show'
import { RefreshCw, ChevronsDown } from 'react-feather'
import Skeleton from 'react-loading-skeleton'

const LoadingSkeleton = ({ columns = 1 }) => {

    const rows = [1, 2 ,3 ,4];

    const arrayColumn = useMemo(() => {
        let payload = []
        for(let index = 1; index <= columns; index++) payload.push(index);
        return payload;
    }, [columns])

    return rows.map(() => 
        <tr key={`list-row-skeleton-${new ObjectId().toHexString()}`}>
            {arrayColumn.map(() => 
                <td key={`skelton-${new ObjectId().toHexString()}`}><Skeleton/></td>    
            )}
        </tr>
    )
}

const SizingTable = ({ 
    title = '', headers = ["#"], children = null, 
    isData = false, isLoading = false, disabled = false,
    onRefresh = null, onDown = null, content = null
}) => { 

    return (
        <Card>
            <CardHeader>
                {title}
            </CardHeader>
            {content}
            <div className="table-responsive">
                <Table size="xl">
                    <thead>
                        <tr>
                            {headers.map((h) => <th key={`header-${new ObjectId().toHexString()}`}>{h}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <Show condicion={!isLoading}
                            predeterminado={<LoadingSkeleton columns={headers.length}/>}
                        >
                            <Show condicion={!isData}
                                predeterminado={children}
                            >
                                <tr>
                                    <th colSpan={headers.length} className="text-center">
                                        No hay registros disponibles 
                                        <Button color="transparent" 
                                            className="ml-1 btn-pill btn-xs" 
                                            size="xs"
                                        >
                                            <RefreshCw className="text-primary"
                                                onClick={(e) => typeof onRefresh == 'function' ? onRefresh(e) : null}
                                            />
                                        </Button>
                                    </th>
                                </tr>
                            </Show>
                        </Show>
                        <tr>
                            <th colSpan={headers.length} className="text-center">
                                <Button color="transparent" 
                                    onClick={(e) => typeof onDown == 'function' ? onDown(e) : null}
                                    block
                                    disabled={isLoading || disabled}
                                >
                                    <ChevronsDown/>
                                </Button>
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Card>
    );
};

export default SizingTable;