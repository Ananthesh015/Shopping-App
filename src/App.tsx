import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
// import { Button } from "./component/browser";
// import { Buttons } from "./component/header";
import { Header, HeaderContainer, HeaderLogo, HeaderCart } from "./container/header";
import { Home } from "./container/home";
import { Cart } from "./container/Cart";
interface IProduct{
  id: number;
  name: string;
  description: string;
  rating: Array<number>;
  price: number;
}
// interface IProducts{
//   Array<IProduct>
// }
interface ICart extends IProduct{
  Qnt?: number;
  TotalAmount?: number;
}
const products=[
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
function App() {
  const [Qnt, setQnt] = useState<number>(1)
  const [_, setRating] = useState([1])
  const [cart, setcart] = useState<Array<any>>([])
  const [TotalAmount, setTotalAmount] = useState<number>(0)

  const handleaddtocart = (Id:number) =>{
      //  console.log("app",Id)
      // let newId:any = cart.filter( (product) => product.id === Id)
      // let  {id,name,description,rating,price} = products[Id];
      let addedItem:ICart | any  = products.find(item=> item.id === Id)
      let existed_item = cart.find(item=> Id === item.id)
      setQnt(1);
      if(existed_item){
            existed_item.Qnt += 1;
            // existed_item.TotalAmount += existed_item.price;
            //  setcart( [...cart,{ ...addedItem,Qnt}] )
      }else{
            // setQnt(1)
            setQnt((Qnt) => Qnt+1)
            let Amount = TotalAmount;
            Amount += addedItem.price;
            setTotalAmount(Amount)
            // cart = [...cart,{ ...addedItem,Qnt}]
            setcart( [...cart,{ ...addedItem, Qnt}])
            // setQnt(1)
            // setcart( [...cart,{ ...addedItem,Qnt}] )  
      }
  }

  const handleremovefromcart = (id:number) =>{
    // let NewCartList = cart; 
    // // console.log(id)
    // NewCartList.splice(id,1)
    // setcart( NewCartList )
    // console.log(cart)
    
    console.log("index",id)

    let newCart = [...cart];

    if (id >= 0) {
      newCart.splice(id, 1);
      // setcart(newCart)
    } 
    else {
      console.warn(
        `Cant remove product (id: ${id}) as its not in basket!`
      )
    }
    console.log(cart)
 }
 const increaseproductqnt = (ProductId:any) => {
  // setcount((count:number) => count = count+1)
  let Items:ICart | any= cart.find(item=> item.id === ProductId)
  let addedItem:ICart | any  = products.find(item=> item.id === ProductId)
  Items.Qnt += 1;
  setQnt(Items.Qnt)
  let Amount = TotalAmount;
  Amount += addedItem.price;
  setTotalAmount(Amount)
  // console.log("addedItem",Items)
  // handleaddtocart && handleaddtocart (ProductId)
  // console.log(ProductId)
  
  }

 const decreaseproductqnt = (ProductId:any) => {
  // setcount((count:number) => count = count-1)
  // handleremovefromcart && handleremovefromcart(ProducttId)
  let Items:ICart | any= cart.find(item=> item.id === ProductId)
  let addedItem:ICart | any  = products.find(item=> item.id === ProductId)
  Items.Qnt -= 1;
  setQnt(Items.Qnt)
  let Amount = TotalAmount;
  Amount -= addedItem.price;
  setTotalAmount(Amount)
  // console.log("removeditem",Items)
  
  }
  const increaserating = (productrating:any) => {

    let newrating = productrating;
    newrating.push(1)
    setRating(newrating)
  }
  const decreaserating = (productrating:any) => {
        
    let newrating = productrating;
    newrating.pop()
    setRating(newrating)
  }
 
  return (
    <div className="App">
      <Router>
        <Header>
            <HeaderContainer>
              <HeaderLogo>Shopping Cart</HeaderLogo>
              <HeaderCart ShopingCart={cart}  />
            </HeaderContainer>
        </Header>
        <Switch>
          <Route  exact path="/" render={(props) =>  <Home {...props} handleaddtocart={handleaddtocart} handleremovefromcart={handleremovefromcart} products={products} cartdetails={cart} />}/>
          <Route  path="/home" render={(props) => <Home {...props} handleaddtocart={handleaddtocart} handleremovefromcart={handleremovefromcart} products={products} cartdetails={cart} />}/>
          <Route  path="/cart" render={(props) => <Cart {...props} ShopingCart={cart} TotalAmount={ TotalAmount } incRating={increaserating} decRating={decreaserating} increaseqnt={increaseproductqnt} decreaseqnt={decreaseproductqnt} />}/>
        </Switch>
      </Router>
    </div>  

  );
}

export default App;
