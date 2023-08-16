import React from "react";

export default function Name_Section() {
  return (
    <div>
      <>
        <h1>Himanshu Chandna</h1>
        <hr></hr>
        <div className="btn">
          <button type="button" className="btn btn-dark mx-5 ">
            Dark
          </button>
          <button type="button" className="btn btn-dark mx-5">
            Dark
          </button>
          <button type="button" className="btn btn-dark mx-5">
            Dark
          </button>
        </div>
        <div class="section">
          <p class="paragraph">Welcome to Himanshu Chandna's homepage.</p>
          <p class="paragraph">
            I'm a college student persuing my BS in Data Science from IITM and
            BCA from VIPS.
          </p>
          <button type="button" class="btn btn-outline-dark">
            VISIT
          </button>
          <button type="button" class="btn btn-outline-dark">
            CONTACT
          </button>

          <svg className="down-arrow-svg" alt="arrow-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="300"
            height="300"
          >
            <g id="_01_align_center" data-name="01 align center">
              <path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z" />
            </g>
          </svg>
        </div>
      </>
    </div>
  );
}
