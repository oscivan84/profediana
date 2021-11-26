import React from 'react';
import { Edit, Trash2 } from 'react-feather'
import { deleteUsers } from '../../../redux/thunks/userThunk'
import Show from '../../utils/show'
import Swal from 'sweetalert2';
import { translate } from 'react-switch-lang'
import UserRequest from '../../../request/auth/userRequest'
import { useDispatch, useSelector } from 'react-redux'

const UserItem = ({ t, data, index, onEdit = null }) => {

    const userRequest = new UserRequest({ translate: t })

    // redux
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const handleEdit = (person) => {
        if (typeof onEdit == 'function') onEdit(person);
    }

    const handleDelete = async (id) => {
        await userRequest.delete(id)
        .then(() =>  dispatch(deleteUsers(id)))
        .catch(err => Swal.fire({ icon: 'error', text: err.message }))
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data?.email}</td>
            <td>{data?.username}</td>
            <td className="text-center">
                <Edit onClick={() => handleEdit(data)}
                    size="20"
                    className="text-success cursor-pointer mr-2"
                />
                <Show condicion={user.id != data.id}>
                    <Trash2 onClick={() => handleDelete(data.id)}
                        size="20"
                        className="text-danger cursor-pointer"
                    />
                </Show>
            </td>
        </tr>
    )
}

export default translate(UserItem);