import React from 'react';
import { Edit, Trash2 } from 'react-feather'
import { deleteProducts } from '../../../redux/thunks/productThunk'
import Swal from 'sweetalert2';
import { translate } from 'react-switch-lang'
import ProductRequest from '../../../request/restaurant/productRequest'
import { useDispatch } from 'react-redux'

const UserItem = ({ t, data, index, onEdit = null }) => {

    const productRequest = new ProductRequest({ translate: t })

    // redux
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (typeof onEdit == 'function') onEdit(data);
    }

    const handleDelete = async () => {
        await productRequest.delete(data.id)
        .then(() =>  dispatch(deleteProducts(data.id)))
        .catch(err => Swal.fire({ icon: 'error', text: err.message }))
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data?.code}</td>
            <td>{data?.name}</td>
            <td>{data?.price}</td>
            <td>{data?.amount}</td>
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

export default translate(UserItem);