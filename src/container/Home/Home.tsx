import  React, { useState } from "react";
import { AddToCartButton, Container, Card } from "../../component/Home";

interface IProduct{
  id: number;
  name: string;
  rating: Array<number>;
  price: number;
  img: string;
}
interface IProps {
    products: Array<IProduct>;
    cartdetails?: Array<any>;
    handleaddtocart?: (id:number) => void;
    handleremovefromcart?: (id:number) => void;
}
export const handlecartId = 'Text-test';
export const TextId = 'Text-test';

export const Home:React.FC<IProps> = ({products,handleaddtocart}:IProps) =>{
    const [editrating, seteditrating] = useState(false)
    return(
        <Container>
            {products.map((product,i) =>  <Card className="myClass" key={product.id}>
                <div style={{height: "60%"}} >
                    <img src={product.img} alt=""/>   
                </div>
                <h4>{product.name}</h4>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{product.price}</strong>
                </p>
                <div className="product__rating"  onClick={() => seteditrating(!editrating)}>
                    {/* {product.rating.length <= 4 && <Button onClick={() => increaserating((product.rating))} > + </Button> }  */}
                        {product.rating
                            .map((_, i) =>(
                                <p key={i} >&#11088;</p>
                            ))
                        }
                    {/* {product.rating.length > 1 && <Button onClick={() => decreaserating((product.rating))}> - </Button> } */}
                </div> 
                <AddToCartButton data-testid={TextId} aria-hidden="true" role="tab" onClick={() => handleaddtocart && handleaddtocart (i)} >Add to Basket</AddToCartButton>
            </Card>)} 
        </Container>
                
    )
}