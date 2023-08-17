import React from 'react'

export default function Contact() {
  return (
    <div>


        <>
        
            <h1>Contact</h1>
            <p>Feel free to contact me for any question. For open source projects, please ping me through the ASK ME ANYTHING window given below. If you want to follow my work, reach me on Github, follow me on Twitter or send me an email at himanshuchandna0007@gmail.com</p>
            <hr></hr>
            <form>
                <h1>ASK ME ANYTHING</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="input-group">
                    <span class="input-group-text">With textarea</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <hr></hr>
            <button type="button" class="btn btn-outline-dark">Linkedin</button>
            <button type="button" class="btn btn-outline-dark">Github</button>
            <button type="button" class="btn btn-outline-dark"><a href="mailto:himanshuchandna0007@gmail.com">Mail</a></button>
            <p>Copyright © Himanshu Chandna 2023</p>
        
        </>


    </div>
  )
}
