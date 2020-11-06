import React from "react";
import { render } from '@testing-library/react';
import { HeaderCart, TextId } from "./Header";
describe('Cart  Functionality',()=>{
    test('render all the components',()=>{
        expect(() => {
            render(
            <HeaderCart ShopingCart={[]} />)
        }).not.toThrowError();
    })
    test('render',()=>{  
        const { getByTestId } = render( <HeaderCart ShopingCart={[]} />);
        expect(getByTestId(TextId)).toHaveTextContent('No of Products')
    })
})