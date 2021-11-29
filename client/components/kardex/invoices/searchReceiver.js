import React, { useState } from 'react';
import { SelectDefault } from '../../common/select';
import { useDispatch } from 'react-redux';
import InvoiceRequest from '../../../request/kardex/invoiceRequest';
import { setReceiver } from '../../../redux/thunks/kardex/invoiceThunk';

const SearchReceiver = () => {

  const invoiceRequest = new InvoiceRequest();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const displayStudent = (obj) => {
    return {
      value: obj.id,
      label: `${obj.name} ${obj.lastname} [Estudiante]`,
      type: 'Student',
      displayTitle: `${obj.name} ${obj.lastname}`.toLowerCase(),
      displayEmail: obj.email,
      displayPhone: obj.phone,
      displayAddress: obj.address,
      displayImage: require('../../../assets/images/kardex/student.png'),
    }
  }

  const displayCampus = (obj) => {
    return {
      value: obj.id,
      label: `${obj.name} [Campus]`,
      type: 'Campus',
      displayTitle: `${obj.name}`,
      displayAddress: obj.description,
      displayImage: require('../../../assets/images/kardex/campus.png')
    }
  }

  const displayUser = (obj) => {
    return {
      value: obj.id,
      label: `${obj.name} ${obj.lastname} [Usuario]`,
      type: 'User',
      displayTitle: `${obj.name} ${obj.lastname}`,
      displayEmail: obj.email,
      displayAddress: '---',
      displayImage: require('../../../assets/images/kardex/user.png'),
    }
  }

  const handleSearch = (querySearch = '') => {
    if (querySearch.length < 3) return;
    setLoading(true);
    invoiceRequest.searchReceiver({ querySearch })
    .then(res => {
      const tempData = [...res.data];
      const formatter = {
        User: displayUser,
        Campus: displayCampus,
        Student: displayStudent,
      }
      const newData = [];
      tempData.map(d => {
        const items = [...d.data.items];
        items.map(i => {
          const currentFormatter = formatter[d.type];
          if (typeof currentFormatter != 'function') return;
          newData.push(currentFormatter(i));  
        });
      });
      setData(newData);
      setLoading(false);
    }).catch(() => setLoading(false))
  }

  const selectReceiver = (newReceiver = {}) => {
    dispatch(setReceiver(newReceiver));
  }

  return (
    <div style={{ zIndex: 99 }}>
      <SelectDefault placeholder="Buscar comprador"
        isSearchable={true}
        isLoading={loading}
        onInputChange={handleSearch}
        options={data}
        isClearable={true}
        onChange={selectReceiver}
      />
    </div>
  )
};

export default SearchReceiver;