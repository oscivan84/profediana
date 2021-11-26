import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap'
import UserForm from './userForm'
import { SimpleModal } from '../../utils/modals'
import { useDispatch, useSelector } from 'react-redux'
import { editUser, editUsers } from '../../../redux/thunks/userThunk'
import { editUser as authEditUser } from '../../../redux/thunks/authThunk'
import UserRequest from '../../../request/auth/userRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2';
import Show from '../../utils/show'

const UserEdit = ({ t, isOpen = false, toggle = null }) => {

    const userRequest = new UserRequest({ translate: t })
    
    // redux
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user); 
    const { auth } = useSelector(state => state);

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
        await userRequest.update(user.id, form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los cambios se guardaron correctamente' })
            dispatch(editUser(data))
            dispatch(editUsers(data))
            setIsEdit(false)
            if (auth.user.id == user.id) dispatch(authEditUser(data))
        }).catch(err => Swal.fire({ icon: 'error', text: err.message }))
        setCurrentLoading(false);
    }

    useEffect(() => {
        if (!is_edit && user) setForm(Object.assign({}, user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_edit, user])

    return (
        <SimpleModal title={"Edit Person"}
            size="lg"
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
            <UserForm form={form}
                isEdit
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(UserEdit);