"use client";
const Button = ({ children, msg }) => {
  return (
    <div>
      <button onClick={()=>alert(msg)}>{children}</button>
    </div>
  );
};

export default Button;
