import { useState } from "react";

const Login = () => {
  const [password,setPassword]=useState("password");
  
  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      <img src="./images/signup.jpg" className="h-full w-fit" />
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold ml-4">New User</h1>
        <p className="text-lg text-gray-600 ml-4">
          Create your account to start shopping
        </p>
        <form>
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-1 ml-4 ">Email</label>
            <input
              required
              type="email"
              placeholder="example@gmail.com"
              name="email"
              className="p-3 border border-gray-300 rounded ml-4 w-11/12 mb-4"
            />
          </div>
          <div className="flex flex-col relative">
            <label className="font-semibold text-lg mb-1 ml-4">Password</label>
            <input
              required
              type="password"
              placeholder="*************"
              name="password"
              className="p-3 border border-gray-300 rounded ml-4 w-11/12 mb-4"
            />
            <button type="button" className="absolute top-11 right-12 w-8 h-8 rounded-full hover:bg-blue-200 hover:text-blue-400 bg-slate-200" onClick={()=>setPassword(password==='password'?"text":"password")}>
            {
              password==="password"? (<i className="ri-eye-line"></i>): (<i className="ri-eye-off-line"></i>)
            }
            </button>

            <button className="py-3 px-8 rounded bg-blue-600 text-white font-semibold hover:bg-rose-600 w-fit ml-4">Login</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
