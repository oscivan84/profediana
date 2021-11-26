import React from 'react';
import { Edit, Trash2 } from 'react-feather'
import { deleteBoards } from '../../../redux/thunks/boardThunk'
import Swal from 'sweetalert2';
import { translate } from 'react-switch-lang'
import BoardRequest from '../../../request/restaurant/boardRequest'
import { useDispatch } from 'react-redux'

const BoardItem = ({ t, data, index, onEdit = null }) => {

    const boardRequest = new BoardRequest({ translate: t })

    // redux
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (typeof onEdit == 'function') onEdit(data);
    }

    const handleDelete = async () => {
        await boardRequest.delete(data.id)
        .then(() =>  dispatch(deleteBoards(data.id)))
        .catch(err => Swal.fire({ icon: 'error', text: err.message }))
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data?.number}</td>
            <td>{data?.position}</td>
            <td>{data?.is_busy ? 'Si' : 'No'}</td>
            <td>{data?.restaurant?.name}</td>
            <td>
                <span className={`badge badge-${data?.state ? '' : 'danger'}`}>
                    {data?.state ? "Habilitado" : "Deshabilitado"}
                </span>
            </td>
            <td className="text-center">
                <Edit onClick={handleEdit}
                    size="20"
                    className="text-success cursor-pointer mr-2"
                />
                <Trash2 onClick={handleDelete}
                    size="20"
                    className="text-danger cursor-pointer"
                />
            </td>
        </tr>
    )
}

export default translate(BoardItem);