import React from 'react'
import Head from 'next/head'

function ContactMe() {
  return (
    <div>
        
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
      
      </Head>
      
    <div className="contactMe">
    
      <h1>Contact Me </h1>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">Enter Your Massege</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      <br></br>
      <button className="btn highlighted-btn" type="submit">Submit</button>
    
    
    </div>
    
    </div>
    </div>

  )
}

export default ContactMe