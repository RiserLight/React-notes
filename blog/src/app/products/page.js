import Button from "./Button";
import './styles.css';

const Products = async () => {
  const postss = await fetch("https://dummyjson.com/posts");
  const data = await postss.json();
  const { posts } = data;
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {posts.map((item) => (
          <div key={item.id}>
            <li>{item.title}</li>
            <Button msg={item.userId}>Alert</Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Products;
