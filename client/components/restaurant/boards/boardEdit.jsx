import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap'
import BoardForm from './boardForm'
import { SimpleModal } from '../../utils/modals'
import { useDispatch, useSelector } from 'react-redux'
import { editBoard, editBoards } from '../../../redux/thunks/boardThunk';
import BoardRequest from '../../../request/restaurant/boardRequest'
import { translate } from 'react-switch-lang'
import Swal from 'sweetalert2';
import Show from '../../utils/show'

const BoardEdit = ({ t, isOpen = false, toggle = null }) => {

    const boardRequest = new BoardRequest({ translate: t })
    
    // redux
    const dispatch = useDispatch();
    const { board } = useSelector(state => state.board);

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
        await boardRequest.update(board.id, form)
        .then(async ({ data }) => {
            await Swal.fire({ icon: 'success', text: 'Los cambios se guardaron correctamente' })
            dispatch(editBoard(data))
            dispatch(editBoards(data))
            setIsEdit(false)
        }).catch(err => Swal.fire({ icon: 'error', text: err.message }))
        setCurrentLoading(false);
    }

    useEffect(() => {
        if (!is_edit && board) setForm(Object.assign({}, board));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_edit, board])

    return (
        <SimpleModal title={"Edit Board"}
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
            <BoardForm form={form}
                isEdit
                disabled={current_loading}
                onChange={handleInput}
            />
        </SimpleModal>
    )
}

export default translate(BoardEdit);