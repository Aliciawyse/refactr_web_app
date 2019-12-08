import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default () => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Convince Your Boss | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    {/*Main Container Start Here*/}
    <div className="main-container">
      {/*Header Start Here*/}
      <NavigationBar whiteText/>
      {/*Header End Here*/}
      {/*About Us Area Start Here*/}
      <div className="about-us-area pad-head bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  <h2>Convince Your Boss</h2>
                </div>
                <ol className="breadcrumb">
                  <li>
                    <a href="/index">Home</a>
                  </li>
                  <li>|</li>
                  <li>Ways to Attend</li>
                </ol>
              </div>
            </div>
            {/* /col*/}
          </div>
          {/* /row*/}
        </div>
        {/*/ container*/}
      </div>
      {/*About Us Area End Here*/}
      {/*Code of Conduct Content Area Start Here*/}
      <div style={{ marginTop: "15px", marginBottom: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content" style={{ fontSize: "1.15em"}}>
                
              <h2>Trying to convince your boss to buy you a ticket to REFACTR.TECH?</h2> <h4>Let us help!</h4>

              <ol>
                <li style={{ listStyle: "decimal inside", padding: "10px", color: "#777", fontSize: "1.1em", fontFamily: "'Poppins', sans-serif"}}>Check with your manager to see if there is a 2019 training budget you can use, or if there are funds that will become available in 2020.
                </li>
                <li style={{ listStyle: "decimal inside", padding: "10px", color: "#777", fontSize: "1.1em", fontFamily: "'Poppins', sans-serif"}}>With the new year coming up, this is a good time to discuss a potential raise or bonus. If your company doesn't offer a training budget, this is a good time to negotiate an annual company-paid training allowance.
                </li>
                <li style={{ listStyle: "decimal  inside", padding: "10px", color: "#777", fontSize: "1.1em", fontFamily: "'Poppins', sans-serif"}}>Let your manager know that you will share what you learn at REFACTR.TECH with the rest of the team. You could also offer to give a talk to the company and share your experience or a technical topic you learned about.
                </li>
              </ol>

              <p>You can use the following letter as a blueprint and customize to include details about which sessions you plan to attend and which <a href="/speakers">speakers</a> you plan to meet!</p>

              <h5><i>Sample Letter:</i></h5>
              
              <p>Hello [boss&rsquo;s name here],</p>
              
              <p>I&rsquo;m reaching out to request your help to attend an amazing conference, <a href="/index">REFACTR.TECH</a> in Atlanta, GA on April 23 - 24, 2020 <i>[April 22 - 24, 2020 if you want to include a workshop]</i>. The 2nd annual <a href="/index">REFACTR.TECH</a> is a tech conference that focuses on creating an inclusive environment, featuring marginalized people, and allies doing amazing work.</p>
              
              <p>The conference provides content valuable to a wide range of experience levels and interests. Technical topics of interest from intermediate to senior developers, alongside beginner-friendly sessions and workshops, are all part of the event. It includes a combination of 3 <a href="/workshops">workshops</a>, 4 keynote sessions, and 50 track <a href="/speakers">sessions</a> to expand knowledge, hone technical skills, and make important connections.</p>
              
              <p>At <a href="/index">REFACTR.TECH</a> I will have the opportunity to highlight [your company name] while meeting amazing people. When I return, I&rsquo;ll be able to contribute to our expanding knowledge and skills as well as make a significant contribution to our company culture and the broader tech community. The cost of my attendance would be:</p>
              
              <p>Conference: <strong>$275 </strong><br/> 
              OR <br/> 
              Conference <i>plus workshop:</i> <strong>$400</strong></p>
              
              <p>Thank you for your consideration! I look forward to counting our company amongst forward-thinking, supportive and encouraging places to work.</p>
              
              <p>Looking forward to hearing from you, <br/>[Your Name]</p>


              </div>
            </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* /container end*/}
      </div>
      {/*Code of Conduct Content Area End Here*/}
      <Footer />
    </div>
  </div>
);
