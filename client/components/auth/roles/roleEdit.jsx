import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap'
import RoleForm from './roleForm'
import { SimpleModal } from '../../utils/modals'
import { useDispatch, useSelector } from 'react-redux'
import { editRole, editRoles } from '../../../redux/thunks/roleThunk'
import RoleRequest from '../../../request/auth/roleRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2';
import Show from '../../utils/show'

const RoleEdit = ({ t, isOpen = false, toggle = null }) => {

    const roleRequest = new RoleRequest({ translate: t })
    
    // redux
    const dispatch = useDispatch();
    const { role } = useSelector(state => state.role); 

    // states
    const [form, setForm] = useState({});
    const [is_edit, setIsEdit] = useState(false);
    const [current_loading, setCurrentLoading] = useState(false);

    const handleInput = ({ name, value }, edit = true) => {
        setForm(prev => ({ ...prev, [name]: value }))
        setIsEdit(edit)
    }

    const handleCancel = () => setIsEdit(false);

    const handleUpdate = async () => {
        setCurrentLoading(true);
        await roleRequest.update(role.id, form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los cambios se guardaron correctamente' })
            dispatch(editRole(data))
            dispatch(editRoles(data))
            setIsEdit(false)
        }).catch(err => Swal.fire({ icon: 'error', text: err.message }))
        setCurrentLoading(false);
    }

    useEffect(() => {
        if (!is_edit && role) setForm(Object.assign({}, role));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_edit, role])

    return (
        <SimpleModal title={"Edit Person"}
            isOpen={isOpen}
            toggle={toggle}
            centered
            footer={
                <>
                    <Show condicion={is_edit}>
                        <Button color="light"
                            className="mr-1"
                            disabled={current_loading}
                            onClick={handleCancel}
                        >
                            Cancelar
                        </Button>
                    </Show>
                    <Button color="primary"
                        disabled={current_loading}
                        onClick={handleUpdate}
                    >
                        Actualizar
                    </Button>
                </>
            }
        >
            <RoleForm form={form}
                isEdit
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(RoleEdit);