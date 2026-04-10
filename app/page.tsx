

import "./home.css"
export default function Home() {
  return (
    <>
       <div className="container">
          <p className="text-center note">Note: Hover the component to view the animation & Click the arrow icon</p>

          <div className="main-container">
            <div className="title-section">
              <p className="p2">Your SkillShikshya Journey</p>
              <p className="p3"><span>Step</span> In. <span>Skill</span> Up. <span>Stand</span> Out.🚀</p>
            </div>

            <div className="sub-container">
                <div className="box box1">
                  <div className="card-details">
                    <div className="left-img"><img className="img1" src="/Group.png" alt="" /></div>
                    <div className="content">
                        <div className="top">
                          <h3>Start With Clarity</h3>
                          <p>Step into a better learning path</p>
                        </div>
                        <div className="bottom">
                          <p>Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="box box2">
                  <div className="card-details">
                    <div className="right-side">
                        <div className="top">
                          <h3>Learn by Doing</h3>
                          <p>Practical skills, real projects.</p>
                        </div>
                        <div className="bottom">
                          <p>Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.</p>
                        </div>
                    </div>
                    <div className="right-img"><img className="img2" src="/group3.png" alt="" /></div>
                  </div>
                </div>
                <div className="box box3">
                  <div className="card-details">
                    <div className="left-img"><img className="img3" src="/Group2.png" alt="" /></div>
                    <div className="content">
                        <div className="top">
                          <h3>Get Mentored & Supported</h3>
                          <p>You're not learning alone.</p>
                        </div>
                        <div className="bottom">
                          <p>Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="box box4">
                  <div className="card-details">
                    <div className="right-side">
                        <div className="top">
                          <h3>Achieve & Showcase</h3>
                          <p>Build your portfolio, get job-ready.</p>
                        </div>
                        <div className="bottom">
                          <p>Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.</p>
                        </div>
                    </div>
                    <div className="right-img"><img className="img4" src="/group4.png" alt="" /></div>
                  </div>
                </div>
            </div>
          </div>
       </div>
    </>
  );
}
