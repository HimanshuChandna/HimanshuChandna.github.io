import React from 'react'

export default function Contact() {
  return (
    <div>


        <>
        <div class="contact_container">
            <div class="Contact_sec">
            <h1 className='Contact_heading'>Contact</h1>
            <div class="underline"></div>
            <div class="contact_sub_heading">
            <p id="contact_sub_heading">Feel free to contact me for any question. For open source projects, please ping me through the ASK ME ANYTHING window given below. If you want to follow my work, reach me on Github, follow me on Twitter or send me an email at <a href="mailto:himanshuchandna0007@gmail.com?subject='Enter your subject here!'&body='Enter your query here!'" target="_blank" rel="noopener noreferrer"><span>himanshuchandna0007@gmail.com</span></a></p>
            </div>
            </div>
            {/* <div class="underline"></div> */}
            <div class="query_form">
            <form class="form">
                <h2 className='Contact_form_heading'>ASK ME ANYTHING</h2>
                <div class="underline"></div>
                <div class="Contact-form">
                <div class="mb-3">
                    <label for="Email" class="form-label" id="label_email">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                {/* <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Subject</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                </div> */}
                <div class="input-group">
                    <span class="input-group-text">Query</span>
                    <textarea class="form-control" aria-label="Query"></textarea>
                </div>
                <div class="form_sub_btn">
                    <button type="submit" id="form_sub_btn" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </form>
            </div>
            </div>
            {/* <div class="underline"></div> */}
            <div class="footer_div"></div>
            <div class="footer_btn_container">
                <a href="https://linkedin.com/in/mr-himanshu-chandna/" target="_blank" rel="noopener noreferrer" ><button type="button" id="footer_btns">
                    {/* Linkedin */}
                    <svg id="foot_linkedin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg>
                    </button></a>
                <a href="https://github.com/HimanshuChandna/" target="_blank" rel="noopener noreferrer" ><button type="button" id="footer_btns">
                    {/* Github */}
                    <svg id="foot_github" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
</svg>
                    </button></a>
                <a href="mailto:himanshuchandna0007@gmail.com?subject='Enter your subject here!'&body='Enter your query here!'" target="_blank" rel="noopener noreferrer" ><button type="button" id="footer_btns">
                    {/* Mail */}
                    <svg id="foot_mail" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-paper-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"/>
</svg>
                    </button></a>
            </div>
          
            <p id="footer_cr">Copyright © Himanshu Chandna 2023</p>
        
        </>


    </div>
  )
}
