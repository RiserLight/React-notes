import {useState} from 'react';
import Swal from 'sweetalert2'
import Navbar from "./navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [fullname,setFullname]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFullname('');
    setMessage('');
    setEmail('');
    Swal.fire({
      title: 'Success',
      text: 'Will contact in future',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
  return (
    <div>
      <Navbar />
      <div style={{
        display:"flex",
        padding:64,
        gap:24
      }}>
      <img src="./images/contact.svg" width="50%" />
      <div style={{
        width:'50%'
      }}>
      <form style={{
        display:"flex",
        flexDirection:"column",
        gap:24
      }}
      onSubmit={(e)=>handleSubmit(e)}
      >
      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:8
      }}>
      <label style={{
        fontSize:18,
        fontWeight:500,
      }}>Fullname</label>
      <input
        value={fullname}
        required
        type="text"
        name="fullname"
        placeholder="Enter name here"
        style={{
          border:"1px solid #ccc",
          borderRadius:4,
          padding:14
        }}
        onChange={(e)=>setFullname(e.target.value)}
       />
      </div>
      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:8
      }}>
      <label style={{
        fontSize:18,
        fontWeight:500,
      }}>Email</label>
      <input
        value={email}
        required
        type="email"
        name="email"
        placeholder="example@gmail.com"
        style={{
          border:"1px solid #ccc",
          borderRadius:4,
          padding:14
        }}
        onChange={(e)=>setEmail(e.target.value)}
       />
      </div>
      
      <div style={{
        display:"flex",
        flexDirection:"column",
        gap:8
      }}>
      <label style={{
        fontSize:18,
        fontWeight:500,
      }}>Message</label>
      <textarea
        value={message}
        required
        type="text"
        name="message"
        placeholder="Write your query or message here"
        style={{
          border:"1px solid #ccc",
          borderRadius:4,
          padding:14
        }}
        onChange={(e)=>setMessage(e.target.value)}
        rows={4}
       />
      </div>
      <button style={{
        border:"none",
        width:"fit-content",
        padding:"14px 32px",
        borderRadius:4,
        backgroundColor:"#6B62FF",
        color:"white",
        fontWeight:600
      }}>SUBMIT</button>
      </form>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
