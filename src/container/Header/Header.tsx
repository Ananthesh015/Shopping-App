import React from 'react';
import { Background, Container, Logo, Cart, CartIcon  } from "../../component/Header";
import {BrowserRouter, Link} from "react-router-dom"

interface IProps{
    children:any

}

export const Header:React.FC<IProps & {}> = ({children, ...props}) =>(
    <Background {...props}>
        {children}
    </Background>
);

export const  HeaderContainer:React.FC<IProps & {}> = (props) =>  (
    <Container {...props}>
        {props.children}
    </Container>
);

export const HeaderLogo:React.FC<IProps & { }> = (props) => (
    <Link to={"/Home"} style={{textDecoration:"none",color:"black"}}>
        <Logo {...props}> 
        {props.children} 
        </Logo>
    </Link>
);
interface ICart {
    ShopingCart: Array<any>;
}
export const TextId = 'Text-test';

export const HeaderCart:React.FC<ICart> = ({ShopingCart}:ICart) => {
    return (
    // <BrowserRouter>
        <Link to={"/cart"} style={{textDecoration:"none",color:"black"}}>
            <Cart>
                {/* <CartIcon>
                <img src="C:\Users\SERP-Test1\Downloads\shopping-cart-solid.svg" alt={"cart-icon"} />
                </CartIcon> */}
                <h5 data-testid={TextId}>No of Products {ShopingCart.length}</h5>
            </Cart>
        </Link>
    // </BrowserRouter>
    );
};