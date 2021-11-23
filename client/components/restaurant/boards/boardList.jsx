import React, { useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import BoardRequest from '../../../request/restaurant/boardRequest';
import { translate } from 'react-switch-lang'
import { setBoards, addBoards, setBoard } from '../../../redux/thunks/boardThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import BoardEdit from './boardEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import BoardCreate from './boardCreate'
import BoardItem from './boardItem'
import useRequest from '../../../hook/useRequest'
import RestaurantSelect from '../restaurant/restaurantSelect';

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
}

const BoardList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { boards } = useSelector(state => state.board)
    const { restaurant } = useSelector(state => state.restaurant)

    // states
    const [option, setOption] = useState(options.LIST);

    const handleData = (data, add) => {
        let result = add ? addBoards : setBoards; 
        dispatch(result(data));
    }

    // request
    const boardRequest = new BoardRequest({ translate: t })
    const request = useRequest({ 
        handle: boardRequest.index,
        query: { restaurant_id: restaurant?.id || '' }
    }, handleData);

    const handleQuerySearch = (target) => {
        request.setQuerySearch(target?.value)
    }

    const handleSearch = () => {
        request.setIsRefresh(true);
    }

    const handleEdit = (editBoard = {}) => {
        setOption(options.EDIT)
        dispatch(setBoard(editBoard))
    }

    const toggle = () => {
        setOption("")
    }

    return (
        <>
            <SizingTable isLoading={request.loading}
                disabled={!request.canNext}
                isData={boards.length}
                title={
                    <HeaderList start={boards.length}
                        total={request.total}
                        disabled={request.loading}
                        querySearch={request.query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    >
                        <div className="col-md-3">
                            <RestaurantSelect
                                onSelect={() => request.setIsRefresh(true)}
                            />
                        </div>
                    </HeaderList>
                }
                headers={["#", "Numero", "Posición", "Disponible", "Restaurante", "Estado", "Acciones"]}
                onDown={() => request.nextPage()}
            >
                {boards.map((d, index) => 
                    <BoardItem key={`list-item-${new ObjectId().toHexString()}`}
                        onEdit={handleEdit}
                        data={d}
                        index={index}
                    />
                )}
            </SizingTable>
            {/* create person */}
            <FloatButton 
                icon={<Plus/>}
                color="success"
                onClick={() => setOption(options.CREATE)}
            />
            <BoardCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <BoardEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
        </>
    )
}

export default translate(BoardList);