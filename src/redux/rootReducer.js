import { combineReducers } from "redux";
import { productDetails , userDetails, protectedComponents} from "./reducer";


export default combineReducers({
    productDetails : productDetails,
    userDetails : userDetails,
    protectedComponents : protectedComponents
})