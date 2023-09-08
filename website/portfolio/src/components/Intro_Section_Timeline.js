import React from 'react'

export default function Intro_Section_Timeline() {
  return (
    <div>

        <>
        
            {/* <div className="timeline" id="upper-text">
                <p>High School</p>
                <p>BS in Data Science (Enrolled)</p>
                <p>Bachelor of Computer Applications (Enrolled)</p>
            </div>
            <div className="timeline" id="lower-text">
                <p>Angels Public Sr. Sec. School</p>
                <p>Indian Institute of Technology, Madras</p>
                <p>Vivekanand Institute of Professional Studies</p>
            </div> */}

            <div class="test_timeline">

              <div class="test-1">
               <p>High School</p>
                  <div class="time">
                    {/* <hr></hr> */}
                  </div>
                <p>Angels Public Sr. Sec. School</p>
              </div>

              <div class="comp_mark"></div>

              <div class="test-2">
                <p>BS in Data Science (Enrolled)</p>
                  <div class="time">
                   {/* <hr></hr> */}
                  </div>
                <p>Indian Institute of Technology, Madras</p>
              </div>

              <div class="comp_mark"></div>

              <div class="test-3">
                <p>Bachelor of Computer Applications (Enrolled)</p>
                  <div class="time">
                    {/* <hr></hr> */}
                  </div>
                <p>Vivekanand Institute of Professional Studies</p>
              </div>

              {/* <div class="comp_mark"></div> */}

            </div> 
        </>

    </div>
  )
}
