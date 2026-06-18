import { Link } from "react-router-dom";

// import React from 'react'

function Home() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundImage:
            'url("https://ai-r-builder-dec25.vercel.app/landing.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="row container-fluid">
          <div className="col-4"></div>
          <div
            className="col-4 rounded shadow p-5 text-center text-light"
            style={{ backgroundColor: "rgba(151,152,143,0.7)" }}
          >
            <h3>
              Designed To Get Hired. Your Skills, Your Story, Your Next Job -
              All In One.
            </h3>
            <Link
              to={"/step"}
              style={{ backgroundColor: "black" }}
              className="btn text-light"
            >
              Make Your Resume With Ai
            </Link>
          </div>
          <div className="col-4"></div>
        </div>
      </div>

      <div className="container mb-5">
        <h1 className="text-center my-5 font-bolder">
          What's Ai ResumeBuilder
        </h1>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <p>
              An AI rBuilder is a web application that helps users create
              professional resumes quickly and efficiently using artificial
              intelligence. Traditional resume creation can be time-consuming
              and difficult, especially for freshers who may not know the
              correct format or keywords required for modern recruitment
              systems.
            </p>
            <p>
              The system can suggest job-specific keywords, professional
              summaries, and skill recommendations to make the resume more
              effective and ATS (Applicant Tracking System) friendly.
            </p>
            <p>
              The main goal of the AI rBuilder is to simplify the resume
              creation process and help job seekers build professional,
              well-structured resumes in a few minutes. Users can edit content,
              preview their resume, and download it in formats such as PDF.
            </p>
            <p>
              This type of system is especially useful for students & fresh
              graduates, who want to create high-quality resumes that increase
              their chances of getting shortlisted for job interviews.
            </p>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <img
              src="https://ai-r-builder-dec25.vercel.app/resume.png"
              alt=""
              width={"100%"}
              height={"500px"}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1698047681432-006d2449c631?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjByZXN1bWV8ZW58MHx8MHx8fDA%3D")',
          height: "80vh",
          backgroundPosition: "cover",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="container mb-5">
        <h1 className="text-center my-5">Testimony</h1>
        <div className="row align-items-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h5>Trusted by professionals worldwide.</h5>
            <p>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p>
              In fact, users who used LiveCareer reported getting hired an average of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-lg-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid3.png" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://img.freepik.com/premium-photo/girl-happy-portrait-user-profile-by-ai_1119669-10.jpg" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://tse3.mm.bing.net/th/id/OIP.wPWx97qT9JbAIeh4t6TDVQHaHa?pid=Api&P=0&h=180" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://img.freepik.com/premium-photo/design-professional-profile-picture-with-sharp-focus-natural-lighting-clean-neutral-background_880763-20280.jpg?w=1060" alt="" className="w-100 p-2"/>
              </div>
               <div className="col-lg-3">
                <img src="https://tse2.mm.bing.net/th/id/OIP.4oYqJqInuQd2TAlPPdggLgHaHa?pid=Api&P=0&h=180" alt="" className="w-100 p-2"/>
              </div>  

            </div>
          </div>
          
        </div>

      </div>
    </>
  );
}

export default Home;
