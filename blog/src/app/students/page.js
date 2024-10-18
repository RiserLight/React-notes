"use client";
import Link from "next/link";

const Students = () => {
  return (
    <div>
      <ul>
        <Link href="/students/Atul">Atul</Link>
        <Link href="/students/Bumbum">Bumbum</Link>
        <Link href="/students/Rahul">Rahul</Link>
        <Link href="/students/Shivam">Shivam</Link>
      </ul>
    </div>
  );
};

export default Students;
