import React, { useState } from 'react';
import { SelectDefault } from '../../common/select';
import { useDispatch , useSelector } from 'react-redux';
import InvoiceRequest from '../../../request/kardex/invoiceRequest';

const SearchReceiver = () => {

  const invoiceRequest = new InvoiceRequest();
  const dispatch = useDispatch();
  const { receiver } = useSelector(state => state.invoice);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const displayUser = (obj) => {
    return {
      value: obj.id,
      label: `${obj.name} ${obj.lastname} [Estudiante]`,
      type: 'Student'
    }
  }

  const displayCampus = (obj) => {
    return {
      value: obj.id,
      label: `${obj.name} [Campus]`,
      type: 'Campus'
    }
  }

  const displayStudent = (obj) => {
    return {
      value: obj.id,
      label: `${obj.name} ${obj.lastname} [Usuario]`,
      type: 'User'
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

  return (
    <div style={{ zIndex: 99 }}>
      <SelectDefault placeholder="Buscar comprador"
        isSearchable={true}
        isLoading={loading}
        onInputChange={handleSearch}
        options={data}
        isClearable={true}
      />
    </div>
  )
};

export default SearchReceiver;