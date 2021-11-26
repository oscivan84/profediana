import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap'
import PersonForm from './personForm'
import { SimpleModal } from '../../utils/modals'
import { useDispatch, useSelector } from 'react-redux'
import { editPeople, editPerson } from '../../../redux/thunks/peopleThunk'
import PeopleRequest from '../../../request/auth/peopleRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2';
import Show from '../../utils/show'

const PersonEdit = ({ t, isOpen = false, toggle = null }) => {

    const peopleRequest = new PeopleRequest({ translate: t })
    
    // redux
    const dispatch = useDispatch();
    const { person } = useSelector(state => state.people);

    // states
    const [form, setForm] = useState({});
    const [is_edit, setIsEdit] = useState(false);
    const [current_loading, setCurrentLoading] = useState(false);

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }))
        setIsEdit(true)
    }

    const handleCancel = () => setIsEdit(false);

    const handleUpdate = async () => {
        setCurrentLoading(true);
        await peopleRequest.update(person.id, form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los cambios se guardaron correctamente' })
            dispatch(editPerson(data))
            dispatch(editPeople(data))
            setIsEdit(false)
        }).catch(err => Swal.fire({ icon: 'error', text: err.message }))
        setCurrentLoading(false);
    }

    useEffect(() => {
        if (!is_edit && person) setForm(Object.assign({}, person))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_edit, person])

    return (
        <SimpleModal title={"Edit Person"}
            size="xl"
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
            <PersonForm form={form}
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(PersonEdit);