import React from "react";
import { Cart } from "../../container";
import { shallow, ShallowWrapper } from "enzyme";

const cart = {
    Qnt: 4,
    id: 0,
    img: "https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg",
    name: "OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)",
    price: 37999,
    rating: [1, 1, 1],
}
describe('cart rendering',()=>{
    let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeEach(() => {
        // handleaddtocart = jest.fn();
        wrapper = shallow(<Cart ShopingCart={[cart]} />);    
      });
    test('render',() => {
        expect(()=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            wrapper
        }).not.toThrowError()
    })
    test('inc operation',() => {
        // const { getByTestId } = render(<Cart ShopingCart={[cart]} />);
        // const incrementButton = getByTestId('increment');
        // incrementButton.click();
        // expect(wrapper.find('.rating').length).toEqual(4);
        
        // const button = wrapper.find(Button).first();
        // button.simulate('click');
        // expect(wrapper.find('.rating').length).toEqual(4);
    })
    test('render the data',() => {
        expect(wrapper.find('.rating').length).toEqual(3);
    })
})