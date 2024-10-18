'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Home() {
  const router=useRouter();
  return (
    <div style={{
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      rowGap:16

    }}>
    <h1>Basic Routing | Make New Page</h1>
    <User name="Rahul"/>
    <User name="Atul"/>
    <button onClick={()=>alert("Be alert")}>Be Alert</button>
    <Link href="/about">Go to About Page</Link>
    <Link href="/login">Go to Login Page</Link>
    <button onClick={()=>router.push('/about')}>Go to About Page</button>
    <button onClick={()=>router.push('/login')}>Go to Login Page</button>
    </div>
  )
}

const User = ({ name }) => {
  return <div>Hello {name}</div>;
};
