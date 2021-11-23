import React, { useEffect, useState } from 'react';
import { SimpleModal } from '../../utils/modals'
import RoleItemMethod from './roleItemMethod';
import RoleRequest from '../../../request/auth/roleRequest'
import { translate } from 'react-switch-lang'
import { useDispatch, useSelector } from 'react-redux'
import { setMethods } from '../../../redux/thunks/roleThunk'
import ObjectId from 'bson-objectid'

const RoleListMethods = ({ t, isOpen = false, toggle = null }) => {

    const roleRequest = new RoleRequest({ translate: t });

    // redux
    const dispatch = useDispatch()
    const { role } = useSelector(state => state.role);

    const [current_loading, setCurrentLoading] = useState(false)
    const [is_error, setIsError] = useState(false)
    const [is_refresh, setIsRefresh] = useState(false);
   
    const getMethodsToRole = async () => {
        setCurrentLoading(true)
        await roleRequest.methods(role.id)
        .then(({ data }) => {
            dispatch(setMethods(data.data));
            setIsError(false);
        }).catch(err => setIsError(true))
        setCurrentLoading(false)
    }

    useEffect(() => {
        if (role?.id) setIsRefresh(true);
    }, [role?.id])

    useEffect(() => {
        if (is_refresh) getMethodsToRole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_refresh])

    useEffect(() => {
        if (is_refresh) setIsRefresh(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_refresh]);

    return (
        <SimpleModal title={"List Methods to Role"}
            size="xl"
            isOpen={isOpen}
            toggle={toggle}
            centered
        >
            <div>
                <h5>Role: <span className="badge badge-primary">{role?.name}</span></h5>
                <hr />
            </div>
            <div className="mt-3">
                <div className="row">
                    {role?.methods?.map(m => 
                        <div className="col-6 mb-3" key={`item-${new ObjectId().toHexString()}`}>
                            <RoleItemMethod method={m}/>
                        </div>
                    )}
                </div>
            </div>
        </SimpleModal>
    )
}

export default translate(RoleListMethods)