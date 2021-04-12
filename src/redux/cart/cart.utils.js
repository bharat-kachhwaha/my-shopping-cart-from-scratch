export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem){
        return changeQuantityFromCart(cartItems, cartItemToAdd.id, 1);
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}];
    
}
export const reduceItemFromCart = (cartItems, cartItemToReduce) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToReduce.id);
    if(existingCartItem.quantity === 1){
        return removeItemFromCart(cartItems, cartItemToReduce);
    }
    return changeQuantityFromCart(cartItems, cartItemToReduce.id, -1);
}
const changeQuantityFromCart = (cartItems, cartItemId, factor) => {
    return cartItems.map((cartItem) => {
        if(cartItem.id === cartItemId){
            return {...cartItem, quantity : cartItem.quantity + factor};
        }
        else {
            return cartItem;
        }
    });
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => 
    cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)