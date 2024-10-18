
import Laoding from "./loading";

const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};

const User = async () => {
  const data = await fetchData();
  return (
    <div>
      {data.length===0 &&<Laoding />}
      <h1>User Page</h1>
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default User;

export const generateMetadata = () => {
  return {
    title: "User Page",
  };
};
