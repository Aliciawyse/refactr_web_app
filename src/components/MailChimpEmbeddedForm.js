import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import * as styles from './EmailListForm.module.scss';

const EmailListForm = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    e.currentTarget.value = "";

    addToMailchimp(email)
      .then((data) => {
        console.log(data);

        if(data.result == "success"){
            // alert("Thanks! We'll keep you posted!");
            toast.success("Thanks! We'll keep you posted!", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
              });
             
        }else{
          toast.error( "There was an error. Try signing up here instead: https://t.co/yhkBLVFUjv", {
            position: "bottom-center",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false
            });
        }

      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
        console.log(error);
        
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (

    <div>
        <form onSubmit={handleSubmit} id="mc_embed_signup_scroll" className="sub-btn">
            <input 
                type="text" 
                placeholder="Your email address " 
                name="email" 
                className="required email" 
                onChange={handleEmailChange}
                id="mce-EMAIL"
                />
                
            <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>
        </form>

        
    </div>

  );
};

export default EmailListForm;