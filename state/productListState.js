import {atom} from 'recoil';

export const productListState = atom({
    key: 'productList',
    default: [
        {id: 1, title: 'Smart Phone', price: 15000000},
        {id: 2, title: 'Smart Watch', price: 10000000},
        {id: 3, title: 'Laptop Gaming', price: 3000000},
    ]
})