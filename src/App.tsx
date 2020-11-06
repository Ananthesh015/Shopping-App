import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import { Header, HeaderContainer, HeaderLogo, HeaderCart, Home, Cart  } from "./container";
import { products, ICart } from "./Data/Productinfo";
function App() {
  const [Qnt, setQnt] = useState<number>(1)
  const [_, setRating] = useState([1])
  const [cart, setcart] = useState<Array<any>>([])
  const [TotalAmount, setTotalAmount] = useState<number>(0)

  const handleaddtocart = (Id:number) =>{
      let addedItem:ICart | any  = products.find(item=> item.id === Id)
      let existed_item = cart.find(item=> Id === item.id)
      setQnt(1);
      if(existed_item){
            existed_item.Qnt += 1;
      }else{
            setQnt((Qnt) => Qnt+1)
            let Amount = TotalAmount;
            Amount += addedItem.price;
            setTotalAmount(Amount)
            setcart( [...cart,{ ...addedItem, Qnt}])  
      }
  }

  const handleremovefromcart = (id:number) =>{

    
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
  let Items:ICart | any= cart.find(item=> item.id === ProductId)
  let addedItem:ICart | any  = products.find(item=> item.id === ProductId)
  Items.Qnt += 1;
  setQnt(Items.Qnt)
  let Amount = TotalAmount;
  Amount += addedItem.price;
  setTotalAmount(Amount)
  }

 const decreaseproductqnt = (ProductId:any) => {
  let Items:ICart | any= cart.find(item=> item.id === ProductId)
  let addedItem:ICart | any  = products.find(item=> item.id === ProductId)
  Items.Qnt -= 1;
  setQnt(Items.Qnt)
  let Amount = TotalAmount;
  Amount -= addedItem.price;
  setTotalAmount(Amount)
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
      <BrowserRouter>
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
      </BrowserRouter>
    </div>  

  );
}

export default App;

 