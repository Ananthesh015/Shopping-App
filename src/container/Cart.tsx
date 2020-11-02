import React, { useEffect, useState } from 'react';
// import { BrowserContainer, BrowserCard } from "../container/browser";
import { Container, Card, Button, QntButton } from "../component/browser";
interface ICart {
    ShopingCart: Array<any>;
    // Quanty: number;
    TotalAmount: number;
    incRating: (id:number) => void;
    decRating: (id:number) => void;
    increaseqnt: (id:number) => void;
    decreaseqnt: (id:number) => void;
}
export const Cart:React.FC<ICart> = ({ShopingCart, incRating, decRating, increaseqnt, decreaseqnt, TotalAmount, ...props}:ICart) => {
    console.log(ShopingCart)
    console.log(TotalAmount)
    // console.log(Quanty)
    // const [count, setcount] = useState(0)
    // const [_, setRating] = useState([1])
    // const [__, setQnt] = useState(0)
    const [editrating, seteditrating] = useState(false)
    useEffect(() => {
        console.log("componentDidmount")
        // return () => {
        //     console.log("componentWilunmount")
        // }
    })
    const increaserating = (productrating:any) => {

            // let newrating = productrating;
            // newrating.push(1)
            // setRating(newrating)
            incRating && incRating(productrating)
        
    }
    const decreaserating = (productrating:any) => {
       
            // let newrating = productrating;
            // newrating.pop()
            // setRating(newrating)
            decRating && decRating(productrating)
        
    }
    const increaseproductqnt = (ProductId:any) => {
        // setcount((count:number) => count = count+1)
        // let Items:ICart | any= ShopingCart.find(item=> item.id === ProductId)
        // Items.Qnt += 1;
        // setQnt(Items.Qnt)
        increaseqnt && increaseqnt(ProductId)
        // console.log("addedItem",Items)
        // handleaddtocart && handleaddtocart (ProductId)
        // console.log(ProductId)
        
    }
    const decreaseproductqnt = (ProductId:any) => {
        // setcount((count:number) => count = count-1)
        // handleremovefromcart && handleremovefromcart(ProducttId)
        // let Items:ICart | any= ShopingCart.find(item=> item.id === ProductId)
        // Items.Qnt -= 1;
        // setQnt(Items.Qnt)
        decreaseqnt && decreaseqnt(ProductId)
        // console.log("removeditem",Items)
        
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
                        {product.rating.length <= 4 && <Button onClick={() => increaserating((product.rating))} > + </Button> } 
                            {product.rating
                                .map((_:any, i:any) =>(
                                    <p key={i} >&#11088;</p>
                                ))
                            }
                        {product.rating.length > 1 && <Button onClick={() => decreaserating((product.rating))}> - </Button> }
                    </div> 
                    <div className="product__rating">
                        <QntButton onClick={() => increaseproductqnt(product.id)} > + </QntButton>
                            <h5>{product.Qnt}</h5>
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