import React from "react";
import { Home } from "./Home";
import {  shallow, ShallowWrapper } from 'enzyme'
import { AddToCartButton, Card } from "../../component/Home";
import { products } from "../../Data/Productinfo";
describe('homecomponent',()=>{
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    // let handleaddtocart: jest.Mock<any, any> | ((id: number) => void) | undefined;
    beforeEach(() => {
        // handleaddtocart = jest.fn();
        wrapper = shallow(<Home products={products} />);    
      });
    test('render',()=>{
        expect(()=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            wrapper
        }).not.toThrowError()
    })
    test('render data with button',()=>{
        
        const Button = wrapper.find(AddToCartButton);
        expect(wrapper.find(Card).length).toEqual(4);   
        expect(Button.first().text()).toEqual('Add to Basket');
    })
    // test('Add requires  prop', () => {
    //     // expect(wrapper.props().handleaddtocart).toBeDefined();
    //     expect(wrapper.prop('handleaddtocart')).toEqual('handleaddtocart')
    // });
})