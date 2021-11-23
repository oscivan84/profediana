import React, { useState } from 'react';
import SizingTable from '../../tables/sizingTable'
import ProductRequest from '../../../request/restaurant/productRequest';
import { translate } from 'react-switch-lang'
import { setProducts, addProducts, setProduct } from '../../../redux/thunks/productThunk'
import { useDispatch, useSelector } from 'react-redux';
import ObjectId from 'bson-objectid'
import { HeaderList } from '../../utils/headers'
import ProductEdit from './productEdit'
import { FloatButton } from '../../utils/buttons'
import { Plus } from 'react-feather'
import ProductCreate from './productCreate'
import ProductItem from './productItem'
import useRequest from '../../../hook/useRequest'
import RestaurantSelect from '../restaurant/restaurantSelect';

const options = {
    CREATE: "CREATE",
    EDIT: "EDIT",
}

const ProductList = ({ t }) => {

    // redux
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product)
    const { restaurant } = useSelector(state => state.restaurant)

    // states
    const [option, setOption] = useState(options.LIST);

    const handleData = (data, add) => {
        let result = add ? addProducts : setProducts; 
        dispatch(result(data));
    }

    // request
    const productRequest = new ProductRequest({ translate: t })
    const request = useRequest({ 
        handle: productRequest.index,
        query: { restaurant_id: restaurant?.id || '' }
    }, handleData);

    const handleQuerySearch = (target) => {
        request.setQuerySearch(target?.value)
    }

    const handleSearch = () => {
        request.setIsRefresh(true);
    }

    const handleEdit = (editProduct = {}) => {
        setOption(options.EDIT)
        dispatch(setProduct(editProduct))
    }

    const toggle = () => {
        setOption("")
    }

    return (
        <>
            <SizingTable isLoading={request.loading}
                disabled={!request.canNext}
                isData={products.length}
                title={
                    <HeaderList start={products.length}
                        total={request.total}
                        disabled={request.loading}
                        querySearch={request.query_search}
                        onChange={handleQuerySearch}
                        onClick={handleSearch}
                    >
                        <div className="col-md-3">
                            <RestaurantSelect
                                onSelect={() => request.setIsRefresh(true)}
                            />
                        </div>
                    </HeaderList>
                }
                headers={["#", "Code", "Nombre", "Precio", "Cantidad", "Restaurante", "Estado", "Acciones"]}
                onDown={() => request.nextPage()}
            >
                {products.map((d, index) => 
                    <ProductItem key={`list-item-${new ObjectId().toHexString()}`}
                        onEdit={handleEdit}
                        data={d}
                        index={index}
                    />
                )}
            </SizingTable>
            {/* create person */}
            <FloatButton 
                icon={<Plus/>}
                color="success"
                onClick={() => setOption(options.CREATE)}
            />
            <ProductCreate isOpen={option == options.CREATE} 
                toggle={toggle}
            />
            {/* edit */}
            <ProductEdit isOpen={option == options.EDIT}
                toggle={toggle}
            />
        </>
    )
}

export default translate(ProductList);