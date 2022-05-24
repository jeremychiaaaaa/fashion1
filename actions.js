export const SET_SEARCH_CLICKED = 'SET_SEARCH_CLICKED'
export const SET_CATEGORY_CLICKED = 'SET_CATEGORY_CLICKED'
export const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS'
export const SET_FILTER_VISIBLE = 'SET_FILTER_VISIBLE'
export const SET_TAB = 'SET_TAB'
export const SET_PRODUCT_NAME = 'SET_PRODUCT_NAME'
export const SET_ARROW_ROTATE = 'SET_ARROW_ROTATE'
export const SET_IMAGE_CLICKED = 'SET_IMAGE_CLICKED'
export const SET_USER_OBJECT = 'SET_USER_OBJECT'
export const SET_SIGN_UP_VISIBLE = 'SET_SIGN_UP_VISIBLE'
export const SET_NUMBER_CART_ITEMS = 'SET_NUMBER_CART_ITEMS'
export const SET_ADD_ITEM = 'SET_ADD_ITEM'
export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'
export const setSearchClicked = click => dispatch => {
    dispatch({ type:SET_SEARCH_CLICKED,
    payload:click})
   
}
export const setCategoryClicked = cat => dispatch => {
    dispatch({
        type:SET_CATEGORY_CLICKED,
        payload:cat
    })
}
export const setClicked = c => dispatch => {
    dispatch({
        type:SET_ALL_PRODUCTS,
        payload:c
    })
}
export const setFilter = filter => dispatch => {
    dispatch({
        type:SET_FILTER_VISIBLE,
        payload:filter
    })
}
export const setTab = tab => dispatch => {
    dispatch({
        type:SET_TAB,
        payload:tab
    })
}
export const setProductName = product => dispatch => {
    dispatch({
        type:SET_PRODUCT_NAME,
        payload:product
    })
}
export const setArrow = arrow => dispatch => {
    dispatch({
        type:SET_ARROW_ROTATE,
        payload:arrow
    })
}
export const setImages = images => dispatch => {
    dispatch({
        type:SET_IMAGE_CLICKED,
        payload:images

    })

}
export const setUser = user => dispatch => {
    dispatch({
        type:SET_USER_OBJECT,
        payload:user
    })
}
export const setSignUp = modal => dispatch => {
    dispatch({
        type:SET_SIGN_UP_VISIBLE,
        payload:modal

    })
    
}
export const setNumberOfCartItems = cart => dispatch => {
    dispatch({
        type:SET_NUMBER_CART_ITEMS,
        payload:cart
    })
}
export const setAddItem = a => dispatch => {
    dispatch({
        type:SET_ADD_ITEM,
        payload:a
    })
}
export const setAuthenticaed = yes => dispatch => {
    dispatch({
        type:SET_AUTHENTICATED_USER,
        payload:yes
    })

}