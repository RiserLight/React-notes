import { useState,useEffect } from "react";
import axios from 'axios';
const App=()=>{
  // const test=()=>{
  //   fetch('https://jsonplaceholder.typicode.com/posts')

  //   .then((response)=>response.json())

  //   .then((resposne)=>console.log("success ",resposne))

  //   .catch((error)=>console.log("error ",error))
  // }

  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [count,setCount]=useState(0);

  useEffect(()=>{
    test();
  },[]);

  const truncateText=(text,maxLength)=>{
    if (text.length>maxLength)
      return text.slice(0,maxLength)+"...";
    return text;
  }
  // const test=async ()=>{
  //   try{
  //     const response=await fetch('https://fakestoreapi.com/products');
  //     const data=await response.json();
  //     setProducts((prev)=>data);
  //     console.log("The products ",products);
  //   }
  //   catch(err){
  //     console.log("error ",err);
  //   }
  // }

  const test=async ()=>{
    setLoading(true)
    try{
      const {data}=await axios.get('https://fakestoreapi.com/products');
      setProducts((prev)=>data)
    }
    catch(error){
      console.log("error ",error);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    const timer=setInterval(()=>setCount((prev)=>prev+1),100);
    return ()=>{
      clearInterval(timer);
    }
  },[count])
  return (
    <div>
    <h1 style={{fontSize:100}}>Count : {count}</h1>
    <h1>CodingOtt</h1>
    {loading && <h1>Loading...</h1>}
    <button onClick={test}>Test</button>
    <div style={{
      width:"90%",
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap",
      margin:"0 auto",
      gap:32
    }}>
    {
      products.length >0 && products.map((product,index)=>(
        <div key={product.id} style={{
          width:'calc(25% - 32px)',
          borderRadius:4,
          boxShadow:"0 0 8px #ddd",
          textAlign:"center"
        }}>
        <h1 style={{fontSize:14}}>{product.title}</h1>
        <img src={product.image}  alt={product.title} width="30%"/>
        <p>{truncateText(product.description, 80)}</p>
        <p style={{textTransform:"capitalize" , marginTop:4}}>{product.category}</p>
        </div>
      ))
    }
    </div>
    </div>
  );
}

export default App;