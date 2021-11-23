import React, { useEffect, useMemo, useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import UserRequest from '../../../request/auth/userRequest';
import { translate } from 'react-switch-lang'
import { setUsers, addUsers, setUser } from '../../../redux/thunks/userThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import UserEdit from './userEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import UserCreate from './userCreate'
import UserItem from './userItem'
import useRequest from '../../../hook/useRequest'

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
}

const UserList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user)

    // states
    const [option, setOption] = useState(options.LIST);

    // request
    const userRequest = new UserRequest({ translate: t })
    const request = useRequest({ handle: userRequest.index }, (data, add) => {
        let result = add ? addUsers : setUsers; 
        dispatch(result(data));
    });

    const handleQuerySearch = (target) => {
        request.setQuerySearch(target?.value)
    }

    const handleSearch = () => {
        request.setIsRefresh(true);
    }

    const handleEdit = (user = {}) => {
        setOption(options.EDIT)
        dispatch(setUser(user))
    }

    const toggle = () => {
        setOption("")
    }

    return (
        <>
            <SizingTable isLoading={request.loading}
                disabled={!request.canNext}
                isData={users.length}
                title={
                    <HeaderList start={users.length}
                        total={request.total}
                        disabled={request.loading}
                        querySearch={request.query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    />
                }
                headers={["#", "Email", "Username", "Acciones"]}
                onDown={() => setPage(prev => prev + 1)}
            >
                {users.map((d, index) => 
                    <UserItem key={`list-item-${new ObjectId().toHexString()}`}
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
            <UserCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <UserEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
        </>
    )
}

export default translate(UserList);