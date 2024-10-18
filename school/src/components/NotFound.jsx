const NotFound = () => {
  return (
    <div style={{
      backgroundColor:"#E6E6E6",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <img  
      src="./images/not-found.svg"
      height="320"
      />
      <h1 
      style={{
        color:"#6B62FF"
      }}
      >Page not found !</h1>
    </div>
  );
};

export default NotFound;
