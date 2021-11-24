import React from 'react';
import { Input } from 'reactstrap'
import { X } from 'react-feather';

const InputEdit = () => {
  return (
    <Input type='number'/>
  )
}

const Item = () => {

  return (
    <tr>
      <td width="40%">Producto #1</td>
      <td width="70px">234</td>
      <td width="70px">
        <InputEdit/>
      </td>
      <td>
        100
      </td>
      <td className='text-center'>
        <X className='cursor-pointer text-danger'/>
      </td>
    </tr>
  )
}

export default Item;