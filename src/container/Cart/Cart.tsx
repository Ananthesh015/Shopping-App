import React, { useEffect, useState } from 'react';
import { Container, Card, Button, QntButton } from "../../component/Home";
interface ICart {
    ShopingCart: Array<any>;
    TotalAmount?: number;
    incRating?: (id:number) => void;
    decRating?: (id:number) => void;
    increaseqnt?: (id:number) => void;
    decreaseqnt?: (id:number) => void;
}
export const incId = 'incrating';
export const Cart:React.FC<ICart> = ({ShopingCart, incRating, decRating, increaseqnt, decreaseqnt, TotalAmount, ...props}:ICart) => {
    // console.log(ShopingCart)
    // console.log(TotalAmount)
    const [editrating, seteditrating] = useState(false)
    useEffect(() => {
        // console.log("componentDidmount")
    })
    const increaserating = (productrating:any) => {
            console.log("clicked inc")
            incRating && incRating(productrating)   
    }
    const decreaserating = (productrating:any) => {
            decRating && decRating(productrating)
    }
    const increaseproductqnt = (ProductId:any) => {
        increaseqnt && increaseqnt(ProductId)  
    }
    const decreaseproductqnt = (ProductId:any) => {
        decreaseqnt && decreaseqnt(ProductId)  
    }
    return (
        <>
            <h1>Cart List</h1>
            <Container>
                {ShopingCart.map((product,i) =>  <Card key={product.id}>
                    <img src={product.img} alt=""/>   
                    <h4>{product.name}</h4>
                    <p className="product__price">
                        <small>₹</small>
                        <strong>{product.price}</strong>
                    </p>
                    <div className="product__rating" onClick={() => seteditrating(!editrating)}>
                        {product.rating.length <= 4 && <Button  onClick={() => increaserating((product.rating))} data-testid={'increment'} > + </Button> } 
                            {product.rating
                                .map((_:any, i:any) =>(
                                    <p  className='rating'  key={i} >&#11088;</p>
                                ))
                            }
                        {product.rating.length > 1 && <Button onClick={() => decreaserating((product.rating))}> - </Button> }
                    </div> 
                    <div className="product__rating">
                        <QntButton onClick={() => increaseproductqnt(product.id)} > + </QntButton>
                            <h5 className='Qnt'>{product.Qnt}</h5>
                        <QntButton onClick={() => decreaseproductqnt(product.id)}> - </QntButton>
                    </div>
                    <div>
                    <h4>
                        {}
                    </h4>
                    </div>
                </Card>)} 
            </Container>
            <Card  style={{margin: 'auto'}} >
                Total Amount: {TotalAmount}
            </Card>
        </>
    );
};