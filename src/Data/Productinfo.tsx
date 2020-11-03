import React from 'react';

export interface IProduct{
    id: number;
    name: string;
    description: string;
    rating: Array<number>;
    price: number;
}
export interface ICart extends IProduct{
    Qnt?: number;
    TotalAmount?: number;
}
export const products=[
    {
        id:0,
        name:'OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)',
        rating:[1,1,1],
        price : 37999,
        img: 'https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg'
    },
    {
        id:1,
        name:'Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)',
        rating:[1,1,1,1],
        price : 12499.00,
        img: 'https://m.media-amazon.com/images/I/71QLvGIAq5L._AC_UY218_.jpg'
    },
    {
        id:2,
        name:'Apple iPhone 11 (64GB) - Black (Includes EarPods,Adapter)',
        rating:[1,1],
        price : 51100,
        img: 'https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg'
    },
    {
      id:3,
      name:'realme Buds Wireless Pro ANC Yellow',
      rating:[1,1,1,1],
      price : 3000,
      img: 'https://m.media-amazon.com/images/I/51lE6XYtNxL._AC_UY218_.jpg'
  },
  ]