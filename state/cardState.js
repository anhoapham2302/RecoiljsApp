import {atom, selector} from 'recoil';

export const cartState = atom({
    key: 'cart',
    default: [],
});

export const addToCart = (cart, item) => {
    const newCart = [...cart];
    const foundIdex = cart.findIndex(x => x.id === item.id);

    if(foundIdex >= 0){
        newCart[foundIdex] = {
            ...cart[foundIdex],
            quantity: cart[foundIdex].quantity + 1,
        }
        return newCart;
    }

    newCart.push({
        id: item.id,
        product: item,
        quantity: 1,
    })
    return newCart;
}

export const cartTotal = selector({
    key: 'cartTotal',
    get: ({get}) =>{
        const cart = get(cartState);

        return cart.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
})