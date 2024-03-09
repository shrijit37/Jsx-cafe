import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items,setItems] = useState([]);
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian").then((res)=>{
      setItems(res.data.meals);
    }).catch((err)=>{console.log(err);});
  },[])


  const ItemList = items.map(({strMeal,strMealThumb,idMeal}) =>{
    return <section className="card">
      <img src={strMealThumb} alt="" />
      <section className="content">
        <p>{strMeal}</p>
        <p>Price : ₹ {Math.floor(Math.random()*1000)}</p>
      </section>
    </section>
  })

  return(
    <>
    <div className="logo">
      <h1 className='logo-text'>JSX Cafe</h1>
    </div>
    {ItemList}
    </>
  )
}

export default App;
