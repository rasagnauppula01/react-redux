import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from './redux/actions';
import { useEffect } from 'react';
import axios from 'axios';
import { addNewProduct, getProductAction } from './redux/products/action';

function App() {
  const {profile,ticket,productListing}=useSelector(state=>state)
  // console.log(reduxStore,"reduxStore")
  const dispatch=useDispatch()
  const handleClick=()=>{

    dispatch(incrementAction())
  };

  const handleDecrementClick=()=>{
    dispatch(decrementAction());
  };

  const handleResetClick = () => {
    dispatch(resetAction());
  }


  useEffect(()=>{
    fetchData()


  },[])

  async function fetchData(){
    const result=await axios.get("https://dummyjson.com/products")
    
    dispatch(getProductAction(result.data.products))
    
    console.log(result);
  }

  const addNew=()=>{
    const newProduct={
      
        "id": 1,
        "title": "iPhone 15",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
    
    }
    dispatch(addNewProduct(newProduct))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{profile.name}</h3>
        <p>
          {ticket.count}
        </p>
        <button onClick={handleClick}>Increment counter</button> <br></br>
        <button onClick={handleDecrementClick}>Decrement counter</button> <br></br>
        <button onClick={handleResetClick}>Reset counter</button>
        <button onClick={addNew}>Add new iphone 16</button>
        {
          productListing.products.length>0 &&
          productListing.products.map(eachObject=><h3>{eachObject.title}</h3>)
        }
      </header>
    </div>
  );
}

export default App;
