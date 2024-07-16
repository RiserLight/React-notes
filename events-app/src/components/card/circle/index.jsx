import './style.css';

const Circle=({number,step})=>{
 const css={};
  if (step===number) css['backgroundColor']="purple"
  return (
    <div className='circle' style={css}>{number}</div>
  );
}

export default Circle;