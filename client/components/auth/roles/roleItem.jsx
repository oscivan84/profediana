import React from 'react';
import { Edit, Trash2, Sliders } from 'react-feather'
import { deleteRoles } from '../../../redux/thunks/roleThunk'
import Show from '../../utils/show'
import Swal from 'sweetalert2';
import { translate } from 'react-switch-lang'
import RoleRequest from '../../../request/auth/roleRequest'
import { useDispatch } from 'react-redux'

const RoleItem = ({ t, data, index, onEdit = null, onSetting = null }) => {

    const roleRequest = new RoleRequest({ translate: t })

    // redux
    const dispatch = useDispatch();

    const handleEdit = (person) => {
        if (typeof onEdit == 'function') onEdit(person);
    }

    const handleDelete = async (id) => {
        await roleRequest.delete(id)
        .then(() =>  dispatch(deleteRoles(id)))
        .catch(err => Swal.fire({ icon: 'error', text: err.message }))
    }

    const handleSetting = (role) => {
        if (typeof onSetting == 'function') onSetting(role); 
    } 

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data?.name}</td>
            <td>
                {data?.description}
                <span className="ml-5 badge badge-light">
                    {data?.is_default ? 'DEFAULT' : ''}
                </span></td>
            <td className="text-center">
                <Edit onClick={() => handleEdit(data)}
                    size="20"
                    className="text-success cursor-pointer mr-3"
                />
                <Sliders onClick={() => handleSetting(data)}
                    size="20"
                    className="cursor-pointer mr-3"
                />
                <Show condicion={!data?.is_default}>
                    <Trash2 onClick={() => handleDelete(data.id)}
                        size="20"
                        className="text-danger cursor-pointer mr-3"
                    />
                </Show>
            </td>
        </tr>
    )
}

export default translate(RoleItem);