import React, { useEffect, useState } from 'react';
import { SimpleModal } from '../../utils/modals'
import PersonForm from './personForm';
import { Button } from 'reactstrap'
import PeopleRequest from '../../../request/auth/peopleRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addPeople } from '../../../redux/thunks/peopleThunk'

const PersonCreate = ({ t, isOpen = false, toggle = null }) => {

    const peopleRequest = new PeopleRequest({ translate: t });

    // redux
    const dispatch = useDispatch()

    const [current_loading, setCurrentLoading] = useState(false)
    const [form, setForm] = useState({})

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSave = async () => {
        setCurrentLoading(true);
        await peopleRequest.store(form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los datos se guardarón correctamente!' });
            setForm({});
            dispatch(addPeople([data]))
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
        <SimpleModal title={"Create Person"}
            size="xl"
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
            <PersonForm form={form}
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(PersonCreate)