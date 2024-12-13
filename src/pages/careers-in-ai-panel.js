import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Preparing for a Career in AI | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script>
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText />
      <div className="about-us-area pad-head bg-ai-careers parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="section-title text-center">
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Conference Synopsis Area Start Here*/}
      <div className="conference-synopsis-area about pad100">
        <div className="container">
          <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="inner-content">
            <div className="section-title">
              <div className="title-text pl text-center">
                <h2>Preparing for a Career in AI</h2>
              </div>
            </div>

            <p style={{color:'#444'}}>By <a href="https://twitter.com/Jhoie__">Joy Victor</a><br />
               May 23, 2024 | 7:01 AM</p>
            <p style={{fontSize: '1.4em', color:'#444'}}>
            Earlier this year, we shared the news we’d begin hosting meetups, panels, code jams, social events, and workshops to further build and invest in our community. Our first event was a panel discussing 'Preparing for a Career in Artificial Intelligence (AI)' with a cross-functional group of leaders in the AI space–from Engineering, to Developer Advocacy to Product.
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>
            The panel featured a diverse group of leaders in the AI space, with our very own Beth Laing, moderating.
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>
              <ul>
                <li>Jerome Hardaway: A software engineer at Microsoft and the Executive Director of Vets Who Code, a project helping veterans learn software engineering using AI.</li>
                <li>Cecelia Martinez: Lead developer advocate at OutSystems, an AI-driven low-code platform, and an active member of Atlanta’s tech community, especially supporting the LGBTQ+ community.</li>
                <li>Jairobe McPherson: A cloud engineer at Google with a focus on AI and Machine Learning (ML) solutions for government clients.</li>
                <li>Neel Shivdasani: Product lead for the AI division at Automattic, the company behind WordPress and Tumblr, and he organizes AI-focused meetups in Atlanta.</li>
              </ul>            
            </p>

            <p className="text-center">
            <div class="elfsight-app-5141ac8b-fee3-4b7e-b1e4-60e7e8a47c52" data-elfsight-app-lazy></div>
            </p>

            

            <p style={{fontSize: '1.4em', color:'#444'}}>
            <h4>AI Career Journeys</h4>
            The panelists shared how they got into AI. Jerome Hardaway noted that his entry into AI was a result of a natural progression from his data and Python work into AI, while Cecelia Martinez described herself as a late adopter who only accepted AI as tools became more accessible. Jairobe McPherson and Neel Shivdasani got into AI due to the organic integration of AI into their existing tech careers.            
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>
            <h4>Different Roles in AI</h4>
            The panel mentioned a plethora of AI roles, both new and soon-to-popular in coming years. They include; AI ethicists, AI engineers, Cost Efficiency Managers, MLOps professionals, AI Evangelists, UX Researchers, and Technical Consultants. They also highlighted that specialty roles might also exist in the future, such as software marketers, designers, or copywriters who specialize in AI.
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>
            <h4>Breaking into AI</h4>
            For those without a tech background, Cecelia recommended using AI to learn AI concepts, while Jerome advised starting with prompt engineering on ChatGPT Plus as a low-hanging fruit. Jairobe said to focus on solving problems rather than just the technology, and Neel encouraged utilizing domain expertise to apply AI solutions.</p>
            
            {/* <p style={{fontSize: '1.4em', color:'#444'}}>For those of you who may not be able to join the many protests happening throughout the country, there’s still plenty more work to be done. Check out the “Additional Reading” list below for ideas on how you can contribute to this moment.
            </p>

            <p className="text-center">
              <img
              className="img-fluid mt30"
              src="https://pbs.twimg.com/media/EZZDSbZWkAA08Xt.jpg"
              alt="Protesting Safely: What to Wear, What To Bring, What You Shouldn't Bring"
              width="600"
              height="600"
            />
            <div class="elfsight-app-6674cb7f-a0f6-49e5-b868-85496477723d" data-elfsight-app-lazy></div>
          </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>REFACTR.TECH has, in our minds, always been more than a tech conference. It has been our way of fostering a tech industry that doesn’t exist yet—a tech industry that is inclusive, at all levels, of the wide range of diversity we see in the people who use the products we build. It has been our way to protest the tech companies, communities and events that pay little more than lip service to inclusion and intersectionality. It has been our way to highlight those who would typically be relegated to the margins and lift up their voices—to show the tech industry who we could be together. Showing our unwavering, uncompromising support for Black people, not only at this crucial juncture, but at all times, is who we are. 
            </p> 

            <p style={{color:'#444'}}>
            <h3>Additional Reading</h3>

            <p style={{fontSize: '1.4em'}}>
              1. <a href="https://twitter.com/OfficialMLK3/status/1266040838628560898?s=20"> Quote from Dr. Martin Luther King Jr.</a> <br />
              2. <a href="https://threadreaderapp.com/thread/1266895545022287872.html">List of Bail Funds [Twitter Thread]</a> <br />
              3. <a href="https://docs.google.com/document/d/1BRlF2_zhNe86SGgHa6-VlBO-QgirITwCTugSfKie5Fs/preview?pru=AAABcn_l3SU*c3tOXrxTuKSSI_RAYTrAIw">Anti-racism Resources</a> <br />
              4. <a href="https://witanddelight.com/2020/05/how-white-people-can-be-better-allies-to-the-black-community/?utm_source=hootsuite&utm_medium=&utm_term=&utm_content=&utm_campaign=">How White People can Be Better Allies to the Black Community</a> <br />
              5. <a href="https://twitter.com/nmsanchez/status/1266787400228847616?s=20">Understanding Tech’s Role in White Supremacy [Twitter Thread]</a> <br />
            </p> */}
            
            <h3>Related REFACTR Sessions</h3>

            <p>
            <div class="elfsight-app-75c1babc-742a-4253-903a-230bde5645af" data-elfsight-app-lazy></div>
            </p>

            
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>


          

        </div>
        {/* /container end*/}
      </div>
    </div>
    <Footer />
  </div>
);
