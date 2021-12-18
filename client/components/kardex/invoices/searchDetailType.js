import React, { useState } from 'react';
import { SelectDefault } from '../../common/select';
import { useDispatch } from 'react-redux';
import DetailRequest from '../../../request/kardex/detailRequest';
import { format } from 'currency-formatter';
import { setDetails } from '../../../redux/thunks/kardex/invoiceThunk';
import ModalBarcode from './modalBarcode';
import ButtonCamera from '../../common/camera/buttonCamera';

const SearchDetailType = () => {

  const detailRequest = new DetailRequest();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const displayProduct = (obj) => {
    return {
      detailableId: obj.id,
      detailableType: 'Product',
      objectId: `Product:${obj.id}`,
      value: obj.id,
      label: `${obj.code} | ${obj.name} ; Precio: ${format(obj.salePrice, { locale: 'co-CO' })} [Producto]`,
      displayName: obj.name,
      displayPrice: obj.salePrice,
      displayAmount: 0,
    }
  }

  const handleItem = (item = {}, type) => {
    const formatter = {
      Product: displayProduct,
    }
    // result
    const currentFormatter = formatter[type];
    if (typeof currentFormatter != 'function') return false;
    return currentFormatter(item);
  }

  const handleSearch = (querySearch = '') => {
    if (querySearch.length < 3) return;
    setLoading(true);
    detailRequest.searchType({ querySearch })
    .then(res => {
      const tempData = [...res.data];
      const newData = [];
      tempData.forEach(d => {
        const items = [...d.data.items];
        items.forEach(i => {
          const newItem = handleItem(i, d.type);
          if (!newItem) return;
          newData.push(newItem);  
        });
      });
      setData(newData);
      setLoading(false);
    }).catch(() => setLoading(false))
  }

  const handleSelectDetail = (newDetail = {}) => {
    const isDetail = Object.keys(newDetail || {}).length;
    if (!isDetail) return;
    const serialize = JSON.parse(JSON.stringify(newDetail));
    dispatch(setDetails(serialize));
  }

  const handleSelectBarcode = ({ type, obj }) => {
    const newItem = handleItem(obj, type);
    handleSelectDetail(newItem);
  }

  return (
    <>
      <div style={{ zIndex: 99 }} className='mb-5'>
        <div className='row'>
          <div className='col-10'>
            <SelectDefault placeholder="Buscar Producto..."
              isSearchable={true}
              isLoading={loading}
              onInputChange={handleSearch}
              options={data}
              isClearable={true}
              onChange={handleSelectDetail}
            />
          </div>    

          <div className='col-md-2'>
            <ButtonCamera onToggle={() => setIsModal(true)} stop={true}/>
          </div>  
        </div>
      </div>
      {isModal 
        ? <ModalBarcode 
            onToggle={() => setIsModal(false)}
            onResult={handleSelectBarcode}
          /> 
        : null}
    </>
  )
};

export default SearchDetailType;