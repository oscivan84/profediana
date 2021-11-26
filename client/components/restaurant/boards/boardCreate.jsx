import React, { useEffect, useState } from 'react';
import { SimpleModal } from '../../utils/modals'
import BoardForm from './boardForm';
import { Button } from 'reactstrap'
import BoardRequest from '../../../request/restaurant/boardRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { addBoards } from '../../../redux/thunks/boardThunk'

const ProductCreate = ({ t, isOpen = false, toggle = null }) => {

    const boardRequest = new BoardRequest({ translate: t });

    // redux
    const dispatch = useDispatch()

    const [current_loading, setCurrentLoading] = useState(false)
    const [form, setForm] = useState({})

    const handleInput = ({ name, value }) => {
        setForm(prev => ({ ...prev, [name]: value }));
    }

    const handleSave = async () => {
        setCurrentLoading(true);
        await boardRequest.store(form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los datos se guardarón correctamente!' });
            setForm({});
            dispatch(addBoards([data]))
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
        <SimpleModal title={"Create Board"}
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
            <BoardForm form={form}
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(ProductCreate)