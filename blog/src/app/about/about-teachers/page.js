'use client';
import Link from "next/link";
import {useRouter} from 'next/navigation';

const AboutTeachers = () => {
  const router=useRouter();

  return (
    <>
      <div>Welcome Teachers</div>
      <Link href="/about">Go to About page</Link>
      <button onClick={()=>router.push("/about")}>Go to About Page</button>
    </>
  );
};

export default AboutTeachers;
