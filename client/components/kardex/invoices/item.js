import React, { useMemo } from 'react';
import { Input } from 'reactstrap'
import { X } from 'react-feather';
import { format} from 'currency-formatter';
import { useDispatch } from 'react-redux';  
import { editDetail, deleteDetail } from '../../../redux/thunks/kardex/invoiceThunk';

const Item = ({
  id,
  name = 'Producto #1',
  price = 0,
  amount = 0,
}) => {

  const dispatch = useDispatch();

  const total = useMemo(() => {
    return format(amount * price, { code: 'COP' });
  }, [amount, price]);

  const handleDelete = () => {
    dispatch(deleteDetail(id))
  }

  const handleEdit = ({ name, value }) => {
    dispatch(editDetail(id, { [name]: value }));
  }

  return (
    <tr>
      <td width="40%">{name}</td>
      <td width="70px">{price}</td>
      <td width="70px">
        <Input type='number'
          value={amount}
          name="displayAmount"
          onChange={({ target }) => handleEdit(target)}
        />
      </td>
      <td>{total}</td>
      <td className='text-center'>
        <X className='cursor-pointer text-danger'
          onClick={handleDelete}
        />
      </td>
    </tr>
  )
}

export default Item;