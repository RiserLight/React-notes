'use client';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

const Login=()=>{
  const router=useRouter();

  return(
    <div>
    <h1>Login Page</h1>
    <Link href="/">Go to Home Page</Link>
    <button onClick={()=>router.push('/')}>Go to Home Page</button>
    </div>
   
  );
}

export default Login;