import { SET_SEARCH_CLICKED,SET_USER_OBJECT, SET_CATEGORY_CLICKED,SET_ALL_PRODUCTS,SET_FILTER_VISIBLE,SET_TAB,SET_PRODUCT_NAME,SET_ARROW_ROTATE,SET_IMAGE_CLICKED,SET_SIGN_UP_VISIBLE,SET_NUMBER_CART_ITEMS,SET_ADD_ITEM,SET_AUTHENTICATED_USER } from "./actions";

const initialState = {
    click:false,
    cat:'',
    c:false,
    filter:false,
    tab:false,
    product:'',
    arrow:false,
    images:[],
    user:'',
    modal:false,
    cart:0,
    a:-1,
    yes:false
}

export default function userReducer(state=initialState,action){
    switch(action.type){
        case SET_USER_OBJECT:
            return{...state, user:action.payload}
            case SET_SIGN_UP_VISIBLE:
                return{...state, modal:action.payload}
        case SET_SEARCH_CLICKED:
            return{...state, click:action.payload}
        case SET_CATEGORY_CLICKED:
            return{...state, cat:action.payload}
            case SET_ALL_PRODUCTS:
                return{...state, c:action.payload}
                case SET_FILTER_VISIBLE:
                    return{...state, filter:action.payload}
                    case SET_TAB:
                    return{...state, tab:action.payload}
            case SET_PRODUCT_NAME:
                return{...state,product:action.payload}
            case SET_ARROW_ROTATE:
                return{...state, arrow:action.payload}
            case SET_IMAGE_CLICKED:
                return{...state, images: [action.payload, ...state.images]}
                case SET_NUMBER_CART_ITEMS:
                    return{...state, cart:action.payload}
                    case SET_ADD_ITEM:
                        return{...state, a:action.payload}     
                        case SET_AUTHENTICATED_USER:
                            return{...state, yes:action.payload}      
            default:
                return state
    }
}