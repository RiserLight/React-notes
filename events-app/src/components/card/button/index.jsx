import './style.css';

const Button=({text})=>{
  return (
    <button className='btn' style={{width:text===''}}>{text}</button>
  );
}

export default Button;