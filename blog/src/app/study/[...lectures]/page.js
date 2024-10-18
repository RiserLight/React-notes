"use client";

const LecturesList=(params)=>{
  const {params:{lectures}}=params;
  const [day,number]=lectures;
  return (
    <div>
    <h1>Day :{day}</h1>
    <h4>Lecture Number : {number}</h4>
    </div>
  );
}

export default LecturesList;