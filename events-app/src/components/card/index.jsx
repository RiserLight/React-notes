import Button from "./button";
import Circle from "./circle";
import React from "react";
import {useState} from 'react';

import './style.css';
 
const Card = ({ content="Step 1" }) => {
  const [step,setStep]=useState(1);

  const onPrevious=()=>{
    if(step>1) setStep((prev)=>prev-1);
  }

  const onNext=()=>{
    if(step<3) setStep((prev)=>prev+1);
  }
  return (
    <div className="main-div">
      <div className="circle-div">
        <Circle number={1} step={step} />
        <Circle number={2} step={step}/>
        <Circle number={3} step={step}/>
      </div>
      <div className="content">{content}</div>
      <div className="bottom">
        <Button text="previous" onClick={onPrevious}/>
        <Button text="next" onClick={onNext} />
      </div>
    </div>
  );
};

export default Card;
