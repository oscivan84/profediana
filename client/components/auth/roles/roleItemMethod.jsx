import React, { useState } from 'react';
import { SimpleBoards } from '../../utils/cardBoards';
import RoleRequest from '../../../request/auth/roleRequest'
import { translate } from 'react-switch-lang'
import { deleteMethods } from '../../../redux/thunks/roleThunk'
import { useSelector, useDispatch } from 'react-redux'
import Swal from 'sweetalert2';

const RoleItemMethod = ({ t, method = {} }) => {

    const [current_loading, setCurrentLoading] = useState(false);

    const roleRequest = new RoleRequest({ translate: t });

    // redux
    const dispatch = useDispatch()
    const { role } = useSelector(state => state.role);

    const boardOptions = [
        { key: "delete", text: "Eliminar" }
    ]

    const handleDeleteMethod = async () => {
        setCurrentLoading(true)
        await roleRequest.detachMethod(role.id, { method_id: method.id })
        .then(() => dispatch(deleteMethods(method?.id)))
        .catch(err => Swal.fire({ icon: 'error', text: err.message }))
        setCurrentLoading(false)
    }

    const onOption = async (opt) => {
        switch (opt.key) {
            case 'delete':
                handleDeleteMethod()
                return;
        }
    }

    return (
        <SimpleBoards
            priority={method?.required ? 'Requerido': 'Libre'}
            priorityClassName={method?.required ? 'danger' : 'primary'}
            title={method?.name}
            description={`${method?.system?.name} - ${method?.action_type}`}
            options={method.required ? boardOptions : []}
            onOption={onOption}
        />
    )
}

export default translate(RoleItemMethod);