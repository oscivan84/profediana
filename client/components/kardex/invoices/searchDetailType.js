import React, { useState } from 'react';
import { SelectDefault } from '../../common/select';
import { useDispatch , useSelector } from 'react-redux';
import DetailRequest from '../../../request/kardex/detailRequest';
import { format } from 'currency-formatter';

const SearchDetailType = () => {

  const detailRequest = new DetailRequest();
  const dispatch = useDispatch();
  const { receiver } = useSelector(state => state.invoice);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const displayProduct = (obj) => {
    return {
      value: obj.id,
      label: `${obj.code} | ${obj.name} ; Precio: ${format(obj.sale_price, { locale: 'co-CO' })} [Producto]`,
      type: 'Product',
    }
  }

  const handleSearch = (querySearch = '') => {
    if (querySearch.length < 3) return;
    setLoading(true);
    detailRequest.searchType({ querySearch })
    .then(res => {
      const tempData = [...res.data];
      const formatter = {
        Product: displayProduct,
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
    <div style={{ zIndex: 99 }} className='mb-5'>
      <SelectDefault placeholder="Buscar Producto..."
        isSearchable={true}
        isLoading={loading}
        onInputChange={handleSearch}
        options={data}
        isClearable={true}
      />
    </div>
  )
};

export default SearchDetailType;