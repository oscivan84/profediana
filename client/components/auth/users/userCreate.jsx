import React, { useEffect, useState } from 'react';
import { SimpleModal } from '../../utils/modals'
import UserForm from './userForm';
import { Button } from 'reactstrap'
import UserRequest from '../../../request/auth/userRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../../redux/thunks/userThunk'

const UserCreate = ({ t, isOpen = false, toggle = null }) => {

    const userRequest = new UserRequest({ translate: t });

    // redux
    const dispatch = useDispatch()

    const [current_loading, setCurrentLoading] = useState(false)
    const [form, setForm] = useState({})

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSave = async () => {
        setCurrentLoading(true);
        await userRequest.store(form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los datos se guardarón correctamente!' });
            setForm({});
            dispatch(addUsers([data]))
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
        <SimpleModal title={"Create User"}
            size="lg"
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
            <UserForm form={form}
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(UserCreate)