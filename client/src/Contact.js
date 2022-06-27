import {React, useState} from "react";
import {send} from 'emailjs-com';
import me from './resources/me.jpg'



function Contact(){
  
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_nneflnb',
          'template_d1z0til',
          toSend,
          'iEcw87FEuPV4_isuH'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
          
          setToSend({
            from_name: '',
            message: '',
            reply_to: '',
          })
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

  return (
    <div
        style={{
            width: "90%",
            margin: "auto",
            backgroundColor: "#fff",
            boxShadow: "0.7em .5em 2em 0 grey",
            padding: "20px"

        }}>
        <h2
            style={{
                marginBottom:"20px"
            }}>Contact Me!</h2>
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                        marginRight: "60px",
                        width: "40%",
                        float: "right",
                        paddingTop: "30px",
                        
                    }}
        onSubmit={onSubmit}>
            <input
                type='text'
                name='from_name'
                placeholder='Name'
                value={toSend.from_name}
                onChange={handleChange}
                style={{marginBottom: "10px"}}
            />
            <input
                type='text'
                name='message'
                placeholder='Message'
                value={toSend.message}
                onChange={handleChange}
                style={{marginBottom: "10px", paddingBottom: "50px"}}
            />
            <input
                type='text'
                name='reply_to'
                placeholder='Email'
                value={toSend.reply_to}
                onChange={handleChange}
                style={{marginBottom: "10px"}}
            />
            <button type='submit'>Submit</button>
        </form>
        <img width={170} 
            height="auto"
            src={me}></img>
    </div>
  )
}

export default Contact;