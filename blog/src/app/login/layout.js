"use client";
import Link from "next/link";
import {usePathname} from 'next/navigation';

const Layout = ({ children }) => {
  const pathname=usePathname();
 
  return (
    <>
    {pathname!=='/login/teacher-login'?(
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ fontWeight: 600 }}>Login Navbar</div>
        <Link href="/login">Login Main</Link>
        <Link href="/login/student-login">Student Login</Link>
        <Link href="/login/teacher-login">Teacher Login</Link>
      </div>
    ):null
    }
      {children}
    </>
  );
};

export default Layout;
