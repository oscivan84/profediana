import React, { useEffect, useMemo, useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import RoleRequest from '../../../request/auth/roleRequest';
import { translate } from 'react-switch-lang'
import { setRoles, addRoles, setRole } from '../../../redux/thunks/roleThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import RoleEdit from './roleEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import RoleCreate from './roleCreate'
import RoleItem from './roleItem'
import RoleListMethods from './roleListMethods';
import useRequest from '../../../hook/useRequest'

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
    METHODS: "METHODS"
}

const RoleList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { roles } = useSelector(state => state.role)

    // states
    const [option, setOption] = useState(options.LIST);

    // request
    const roleRequest = new RoleRequest({ translate: t })
    const request = useRequest({ handle: roleRequest.index } , (data, add) => {
        let result = add ? addRoles : setRoles; 
        dispatch(result(data));
    });

    const handleQuerySearch = (target) => {
        request.setQuerySearch(target?.value)
    }

    const handleSearch = () => {
        request.setIsRefresh(true);
    }

    const handleEdit = (role = {}) => {
        setOption(options.EDIT)
        dispatch(setRole(role))
    }

    const handleSetting = (role = {}) => {
        setOption(options.METHODS)
        dispatch(setRole(role));
    }

    const toggle = () => {
        setOption("")
    }

    // vaciar role
    useEffect(() => {
        if (!option) dispatch(setRole({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option])

    return (
        <>
            <SizingTable isLoading={request.loading}
                disabled={!request.canNext}
                isData={roles.length}
                title={
                    <HeaderList start={roles.length}
                        total={request.total}
                        disabled={request.loading}
                        querySearch={request.query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    />
                }
                headers={["#", "Nombre", "Descripción", "Acciones"]}
                onDown={() => setPage(prev => prev + 1)}
            >
                {roles.map((d, index) => 
                    <RoleItem key={`list-item-${new ObjectId().toHexString()}`}
                        onEdit={handleEdit}
                        onSetting={handleSetting}
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
            <RoleCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <RoleEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
            {/* setting */}
            <RoleListMethods isOpen={option == options.METHODS}
                toggle={toggle}
            />
        </>
    )
}

export default translate(RoleList);