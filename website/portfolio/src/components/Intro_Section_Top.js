import React from "react";
import profileImage from "./Profile_photo.jpg";

export default function Intro_Section_Top() {
  return (
    <div>
      <div class="Intro_container">
      <div className="profile-intro">
        <div class="photo">
          <img class="profile" src={profileImage} alt="Profile"></img>
        </div>
        <div class="profile-desc">
          <p id="profile-intro">Hi, I'm Himanshu Chandna. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div class="profile_social_btn">
            <a
              href="https://linkedin.com/in/mr-himanshu-chandna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="redirect_btn7">
                Linkedin
              </button>
            </a>
            <a
              href="https://github.com/HimanshuChandna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" class="redirect_btn7">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="test_timeline">
        <div class="test-1">
          <p>High School</p>
          <div class="time">{/* <hr></hr> */}</div>
          <p>Angels Public Sr. Sec. School</p>
        </div>

        <div class="comp_mark"></div>

        <div class="test-2">
          <p>BS in Data Science (Enrolled)</p>
          <div class="time">{/* <hr></hr> */}</div>
          <p>Indian Institute of Technology, Madras</p>
        </div>

        <div class="comp_mark">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
        </div>

        <div class="test-3">
          <p>Bachelor of Computer Applications (Enrolled)</p>
          <div class="time">{/* <hr></hr> */}</div>
          <p>Vivekanand Institute of Professional Studies</p>
        </div>

        {/* <div class="comp_mark"></div> */}
      </div>
    </div>
    </div>
  );
}
