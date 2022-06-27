import {React, useState} from "react";
import {send} from 'emailjs-com';



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
            backgroundColor: "white"
        }}>
        <h2>Contact Me!</h2>
        {/* <div> */}
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                        marginRight: "60px",
                        width: "40%",
                        float: "right",
                        padding: "20px"
                        
                    }}
        onSubmit={onSubmit}>
            <input
                type='text'
                name='from_name'
                placeholder='Your Name'
                value={toSend.from_name}
                onChange={handleChange}
                style={{marginBottom: "10px"}}
            />
            <input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
                style={{marginBottom: "10px", paddingBottom: "30px"}}
            />
            <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
                style={{marginBottom: "10px"}}
            />
            <button type='submit'>Submit</button>
        </form>
    {/* </div> */}
    </div>
  )
}

export default Contact;