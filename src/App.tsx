import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { Header, HeaderContainer, HeaderLogo, HeaderCart } from "./container/header";
import { Home } from "./container/home";
import { Cart } from "./container/Cart";
import { products, ICart } from "./Data/Productinfo";
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
