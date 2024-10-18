'use client';

import Script  from "next/script";
const Location=()=>{
  return (
    <div>
    <h1>Get Current Location</h1>
    <Script
    src="./location.js"
    onLoad={()=>console.log("Hello World")}
    />
    </div>
  );
}

export default Location;