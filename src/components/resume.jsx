import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
        <br></br>
          <h2>Resume</h2>
          <p>Full Stack Web Developer with experience in developing front-end website architecture, creating servers and databases for functionality, ensuring responsiveness of applications, designing and developing APIs, and ensuring cross-platform optimization. Proficient in HTML, CSS, JavaScript, and Node. Adept at collaborating with graphic designers to create visually appealing web designs.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Andrew Breytenbach</h4>
              <p><em>Full Stack Web Developer with a passion for solving complex problems and delivering exceptional user experiences.</em></p>
              <ul>
                <li>Charleston, SC</li>
                <li>(224) 409-6724</li>
                <li>andrewmartinbreytenbach@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Full Stack Web Developer Bootcamp</h4>
              <h5>2023</h5>
              <p><em>UNC-Chapel Hill, Chapel Hill, NC</em></p>
              <p>This part-time coding program curriculum covers front end and back end technologies. Completing the program has given the skills needed to become a full stack web developer.</p>
            </div>
            <div className="resume-item">
              <h4>Master of Divinity</h4>
              <h5>2019 - 2021</h5>
              <p><em>Southeastern Baptist Theological Seminary, Wake Forest, NC</em></p>
              <p>The Master of Divinity program is designed to provide students with a deep understanding of the Christian faith, including its history, theology, and practical application. The program includes courses in biblical studies, church history, theology, ethics, homiletics, and pastoral care, as well as practical ministry experience. It has given me the skills and knowledge needed to serve as a leader in Christian ministry, including preaching, teaching, counseling, and pastoral care.</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Arts, Accounting</h4>
              <h5>2015 - 2019</h5>
              <p><em>Indiana Wesleyan University, Marion, IN</em></p>
              <p>This accounting degree program encompasses a comprehensive range of accounting principles and practices, including financial accounting, managerial accounting, taxation, auditing, and accounting information systems. By completing this program, I possess the essential skills and knowledge required to pursue a career as a professional accountant.</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Assistant Manager & CrossFit Coach</h4>
              <h5>2022</h5>
              <p><em>United Fitness CrossFit, Raleigh, NC</em></p>
              <ul>
                <li>Led and supervised group coaching sessions, providing live feedback and cues for improved performance.</li>
                <li>Developed and maintained professional relationships with clients to enhance their gym experience and ensure continued involvement.</li>
                <li>Actively engaged in professional development and continuing education.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Young Adults Director</h4>
              <h5>2020 - 2022</h5>
              <p><em>The Summit Church, Durham, NC</em></p>
              <ul>
                <li>Launched a ministry for young adults (20s and 30s) across all church campuses.</li>
                <li>Recruited and led a team of guest services coordinator, social media/event coordinator, worship leader, and volunteers.</li>
                <li>Planned, executed, and preached at biweekly ministry gatherings, midweek Bible studies, retreats, and short-term mission trips.</li>
                <li>Wrote and edited a weekly digital email to 1,000 subscribers about current issues and upcoming events related to the ministry.</li>
                <li>Provided administrative and operational support to the senior pastor (JD Greear) at SBC conferences and events.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Inventory Control and Strategic Operations Associate</h4>
              <h5>2018-2019</h5>
              <p><em>Slingshot, Marion, IN</em></p>
              <ul>
                <li>Oversaw a returns process with vendors/suppliers and generated $760,000 in company revenue.</li>
                <li>Collaborated with Accounting, Information Technology, and Product Development teams on various projects.</li>
                <li>Conducted data analysis using SQL queries and databases to improve warehouse efficiency.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
