import React from 'react';
import { Edit, Trash2 } from 'react-feather'
import { deletePeople } from '../../../redux/thunks/peopleThunk'
import Show from '../../utils/show'
import Swal from 'sweetalert2';
import { translate } from 'react-switch-lang'
import PeopleRequest from '../../../request/auth/peopleRequest'
import { useDispatch, useSelector } from 'react-redux'

const PersonItem = ({ t, person, index, onEdit = null }) => {

    const peopleRequest = new PeopleRequest({ translate: t })

    // redux
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const handleEdit = (person) => {
        if (typeof onEdit == 'function') onEdit(person);
    }

    const handleDelete = async (id) => {
        await peopleRequest.delete(id)
        .then(() =>  dispatch(deletePeople(id)))
        .catch(err => Swal.fire({ icon: 'error', text: err.message }))
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{person?.fullname}</td>
            <td>{person?.document_number}</td>
            <td>{person?.age}</td>
            <td>{person?.gender}</td>
            <td>{person?.date_birth}</td>
            <td className="text-center">
                <Edit onClick={() => handleEdit(person)}
                    size="20"
                    className="text-success cursor-pointer mr-2"
                />
                <Show condicion={user.person_id != person.id}>
                    <Trash2 onClick={() => handleDelete(person.id)}
                        size="20"
                        className="text-danger cursor-pointer"
                    />
                </Show>
            </td>
        </tr>
    )
}

export default translate(PersonItem);