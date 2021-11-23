import React, { useEffect, useState } from 'react';
import { SimpleModal } from '../../utils/modals'
import RoleForm from './roleForm';
import { Button } from 'reactstrap'
import RoleRequest from '../../../request/auth/roleRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addRoles, addDefault } from '../../../redux/thunks/roleThunk'

const RoleCreate = ({ t, isOpen = false, toggle = null }) => {

    const roleRequest = new RoleRequest({ translate: t });

    // redux
    const dispatch = useDispatch()

    const [current_loading, setCurrentLoading] = useState(false)
    const [form, setForm] = useState({})

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSave = async () => {
        setCurrentLoading(true);
        await roleRequest.store(form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los datos se guardarón correctamente!' });
            setForm({});
            if (data.is_default) dispatch(addDefault(data))
            else dispatch(addRoles([data]))
            if (typeof toggle == 'function') toggle();
        }).catch(err => {
            Swal.fire({ icon: 'error', text: err.message });
        })
        setCurrentLoading(false);
    }

    useEffect(() => {
        if (!isOpen) setForm({});
    }, [isOpen])

    return (
        <SimpleModal title={"Create Role"}
            size="md"
            isOpen={isOpen}
            toggle={toggle}
            centered
            footer={
                <Button color="primary"
                    onClick={handleSave}
                    disabled={current_loading}
                >
                    Guardar
                </Button> 
            }
        >
            <RoleForm form={form}
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(RoleCreate)