import React from 'react'
import Head from 'next/head';
import Styles from "../styles/Profile.module.css"

export default function Profile() {
  return (
<div className='profile-container'>
  <Head>

  <link
    rel="stylesheet"
    type="text/css"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  />
  <link
  rel="stylesheet"
  type="text/css"
  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
/>
  <link
    href="//db.onlinewebfonts.com/c/157c6cc36dd65b1b2adc9e7f3329c761?family=Amazon+Ember"
    rel="stylesheet"
    type="text/css"
  /> 
  </Head>


 <div className='profile-parent'>
    <div className='profile-details'>
        <div className='colz'>
            <div className="colz-icon">

            <a href='https://www.linkedin.com/in/nnonni1/'>
            <i className='fa fa-linkedin'></i>
          </a>
          <a href='https://instagram.com/afnan4d_art?igshid=YmMyMTA2M2Y='>
            <i className='fa fa-instagram'></i>
          </a>
          <a href='https://mobile.twitter.com/Soft_codeKsa'>
            <i className='fa fa-twitter'></i>
          </a>
          <a href='https://github.com/nnonni1'>
            <i className='fa fa-github'></i>
          </a>
        
            </div>
         
         </div>
         <div className='profile-detailes-name'>
            <span className='primary-text'>
            {" "}
         Hello, I'M <span className='highlighted-text'>AFNAN AHMED</span>
          </span>
          </div>
        <div  className='profile-dtails-role'>
        
          <span className='pramary-text'>
           
          
            <spa className='profile-role-tagline'>
                specialized in building application whith front and back end operations and Wordpress
            </spa>
          </span>
         </div>        
         <div className="profile-options">

         <button className="btn primary-btn">
            {""}
            Hire Me {" "}
         </button>
        
         <a href="myCV.pdf" download="afnan myCV ">
        <button className="btn highlighted-btn">Get Resume</button>
        </a>
         </div>

         </div> 
         
         <div className="profile-picture">
            <div className="profile-picture-background">


            
            
            
            </div>   

         
        </div>

       </div>
      </div>

  
   );

}
