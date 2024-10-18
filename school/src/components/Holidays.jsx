import Navbar from "./navbar";
import Footer from "./Footer";

const holidays=[{
  title:"Summer Vacation",
  duration:"1 Months",
  date:"10-04-24"
},
{
  title:"Rainy Vacation",
  duration:"1 Months",
  date:"10-06-24"
},
{
  title:"Spring Vacation",
  duration:"1 Months",
  date:"10-07-24"
},
{
  title:"Winter Vacation",
  duration:"1 Months",
  date:"10-08-24"
},
]
const Holidays = () => {
  return (
    <div>
      <Navbar />
      <div style={{
        width:"60%",
        margin:"0 auto",
        padding:"64px 0"
      }}>
      <h1 style={{
        textAlign:"center"
      }}>Your Holiday's</h1>
      <table style={{width:"100%"}}>
      <thead>
      <tr style={{
        background:"#ddd"
      }}>
      <th style={{padding:14}}>S/No</th>
      <th>Title</th>
      <th>Duration</th>
      <th>Date</th>
      </tr>
      </thead>
      <tbody>
      {
        holidays.length>0 && holidays.map((holiday,index)=>(
          <tr style={{
            textAlign:"center"
          }}>
          <td style={{padding:14,borderBottom:"1 px solid #ddd"}}>{index+1}</td>
          <td style={{padding:14,borderBottom:"1 px solid #ddd"}}>{holiday.title}</td>
          <td style={{padding:14,borderBottom:"1 px solid #ddd"}}>{holiday.duration}</td>
          <td style={{padding:14,borderBottom:"1 px solid #ddd"}}>{holiday.date}</td>
          </tr>
        )
        )
      }
      </tbody>
      </table>
      </div>
      <Footer />
    </div>
  );
};

export default Holidays;
