import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react';
// import * as styles from './EmailListForm.module.scss';

const EmailListForm = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        console.log(data.result);
        if(data.result == "success"){
            // alert("Thanks! We'll keep you posted!");
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