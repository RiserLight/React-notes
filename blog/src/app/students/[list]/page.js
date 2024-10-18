'use client';

const List=(params)=>{
  const {params:{list}}=params;
  return (
    <div>
    <h1>Hello {list}</h1>
    </div>
  );
}

export default List;