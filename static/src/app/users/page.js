import { getUsers } from "@/service/getUsers";
import Link from 'next/link';

const Users=async ()=>{
  const data=await getUsers();
  return (
    <div>
    <h1>User List</h1>
    {
      data.map((item)=>(
        <div key={item.id}>
        <Link href={`users/${item.id}`}>{item.name}</Link>
        </div> 
      ))
    }
    </div>
  );
}

export default Users;