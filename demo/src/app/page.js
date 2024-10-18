import AddUsers from "./components/AddUsers";
import DisplayUserList from "./components/DisplayUserList";
const Home=()=>{
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      rowGap:30
    }}>
    <AddUsers/>
    <DisplayUserList/>
    </div>
  );
}

export default Home;