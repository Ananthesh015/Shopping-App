import  React, { useState } from "react";
import { AddToCartButton, Container, Card } from "../component/browser";

interface IProduct{
  id: number;
  name: string;
  rating: Array<number>;
  price: number;
  img: string;
}
interface IProps {
    products: Array<IProduct>;
    cartdetails: Array<any>;
    handleaddtocart: (id:number) => void;
    handleremovefromcart: (id:number) => void;
}

export const Home:React.FC<IProps> = ({cartdetails,products,handleaddtocart,handleremovefromcart}:IProps) =>{
    // const [count, setcount] = useState(0)
    // const [rating, setRating] = useState([ 1])
    const [editrating, seteditrating] = useState(false)
    // const increaserating = (productrating:any) => {

    //         let newrating = productrating;
    //         newrating.push(1)
    //         setRating(newrating)
        
    // }
    // const decreaserating = (productrating:any) => {
       
    //         let newrating = productrating;
    //         newrating.pop()
    //         setRating(newrating)
        
    // }
    return(
        <Container>
            {products.map((product,i) =>  <Card key={product.id}>
                <div style={{height: "60%"}} >
                    <img src={product.img} alt=""/>   
                </div>
                <h4>{product.name}</h4>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{product.price}</strong>
                </p>
                <div className="product__rating" onClick={() => seteditrating(!editrating)}>
                    {/* {product.rating.length <= 4 && <Button onClick={() => increaserating((product.rating))} > + </Button> }  */}
                        {product.rating
                            .map((_, i) =>(
                                <p key={i} >&#11088;</p>
                            ))
                        }
                    {/* {product.rating.length > 1 && <Button onClick={() => decreaserating((product.rating))}> - </Button> } */}
                </div> 
                {/* <div className="product__rating">
                    <QntButton onClick={() => increaseproductqnt(i)} > + </QntButton>
                        <h5>{count}</h5>
                    <QntButton onClick={() => decreaseproductqnt(i)}> - </QntButton>
                </div> */}
                <AddToCartButton onClick={() => handleaddtocart && handleaddtocart (i)} >Add to Basket</AddToCartButton>
            </Card>)}
        </Container>
                
    )
}