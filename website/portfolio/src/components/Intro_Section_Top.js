import React from 'react';
import profileImage from "./Profile_photo.jpg";

export default function Intro_Section_Top() {
  return (
    <div>

        

        <div className="profile-intro">
            <div class="photo">    
              <img class="profile" src={profileImage} alt="Profile"></img>
            </div>
            <div class="profile-desc">
              <p className="profile-intro">Hi, I'm Himanshu Chandna.</p>
                <div class="profile_social_btn">
                  <button type="button" class="redirect_btn7">Linkedin</button>
                  <button type="button" class="redirect_btn7">Github</button>
                </div>
            </div>
        </div>
        
        

    </div>
  )
}
