import { useEffect } from 'react';
import useRequest from '../../../hook/useRequest';
import { Input } from 'reactstrap'
import RestaurantRequest from '../../../request/restaurant/restaurantRequest'
import Show from '../../utils/show';
import { useDispatch, useSelector } from 'react-redux'
import { setRestaurant, setRestaurants, addRestaurants, findRestaurant } from '../../../redux/thunks/restaurantThunk'

const RestaurantSelect = ({ onSelect = null }) => {

    // redux
    const dispatch = useDispatch();
    const { restaurant, restaurants } = useSelector(state => state.restaurant);

    const handleData = (data, add) => {
        let result = add ? addRestaurants : setRestaurants
        dispatch(result(data));
    }

    // request
    const restaurantRequest = new RestaurantRequest();
    const request = useRequest({ 
        handle: restaurantRequest.index, 
        query: { perPage: 100 } 
    }, handleData);

    const handleChange = ({ name, value }) => {
        if (value == 'update') {
            request.setIsRefresh(true);
            dispatch(setRestaurant({}));
        } else if (value) {
            dispatch(findRestaurant(value));
        } else {
            dispatch(setRestaurant({}));
        }
        // enviar el valor al padre
        if (typeof onSelect == 'function') onSelect(name, value)
    }

    useEffect(() => {
        if (restaurants.length) request.nextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [restaurants.length]);

    return (
        <Input type="select"
            name="restaurant_id"
            onChange={({ target }) => handleChange(target)}
            value={restaurant?.id || ''}
            disabled={request.loading}
        >
            <option value="">{request.loading ? 'Cargando...' : 'Seleccionar'}</option>
            {/* data */}
            {restaurants.map(d => 
                <option value={d.id} key={`item-select-${d.id}`}>{d.name}</option>    
            )}
            {/* loading */}
            <Show condicion={!request.loading}>
                <option value="update">
                    Actualizar
                </option>
            </Show>
        </Input>
    )
}

export default RestaurantSelect;