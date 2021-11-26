import { combineReducers } from 'redux';
import { screeenReducer } from './screenThunk';
import { languageReducer } from './languageThunk';
import { authReducer } from './authThunk'
import { peopleReducer } from './peopleThunk'
import { userReducer } from './userThunk'
import { roleReducer } from './roleThunk';
import { productReducer } from './productThunk'
import { restaurantReducer } from './restaurantThunk'
import { boardReducer } from './boardThunk' 
import { invoiceReducer } from './kardex/invoiceThunk';

const rootReducer = combineReducers({
    screen: screeenReducer,
    language: languageReducer,
    auth: authReducer,
    people: peopleReducer,
    user: userReducer,
    role: roleReducer,
    product: productReducer,
    restaurant: restaurantReducer,
    board: boardReducer,
    invoice: invoiceReducer,
});

export default rootReducer;