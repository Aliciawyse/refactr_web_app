import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Black Lives Matter | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar />
      <div className="about-us-area pad-head bg-blm parallax">
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
                <h2>Black Lives Matter.</h2>
              </div>
            </div>
            <p style={{color:'#333'}}>By <a href="https://twitter.com/ericastanley">ERICA STANLEY</a><br />
               June 1, 2020 | 9:17 PM</p>
            <p style={{fontSize: '1.4em', color:'#333'}}>
            We at REFACTR.TECH stand unequivocally with Black people, #BlackLivesMatter protestors and those advocating for justice for Black people. 
            In the wake of a seemingly incessant stream of tragic events over a span of weeks — weeks that saw a long-delayed response to 
            Ahmaud Arbery’s murder, Breonna Taylor’s killing in her home at the hands of police, MPD’s use of excessive force in the killing of 
            George Floyd, and a host of injustices against Black people—we are hurt, angry and tired. 
            It is a heavy, generations-deep exhaustion many don’t understand.
            </p>
            <p className="text-center">
            <iframe width="600" height="338" src="https://www.youtube.com/embed/OCUlE5ldPvM" frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>My father grew up during the ‘50s and ‘60s. His was the first generation of Black students to integrate schools in the South. He was a teenager when Malcolm X was assassinated. He was a young adult when Martin Luther King Jr. was assassinated. He protested. His family and community leaders marched in pursuit of Civil Rights. Heartbroken over recent events, he told me they did that then so their children and grandchildren wouldn’t have to. And yet here we are, in 2020, fighting to just be, to exist without fear of becoming the next hashtag. If a “riot is the language of the unheard <sup>1</sup>,” know that we hear you and we amplify your voices.
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>We know that protests and civic unrest can bring about change. The founding of our country was built on such unrest. As we begin Pride Month, I’m reminded of how the Stonewall riots, led primarily by Black and Latinx youth, ushered in a new era in the fight for LGBTQ+ rights. So as you demand justice in the streets across America, we ask that you do your best to preserve your health and your safety. 
            </p>
            
            <p className="text-center">
              <img
              className="img-fluid mt30"
              src="https://pbs.twimg.com/media/EZZDSbZWkAA08Xt.jpg"
              alt="Protesting Safely: What to Wear, What To Bring, What You Shouldn't Bring"
              width="600"
              height="600"
            />
          </p>
            <p style={{fontSize: '1.4em', color:'#333'}}>For those of you who may not be able to join the many protests happening throughout the country, there’s still plenty more work to be done. Check out the “Additional Reading” list below for ideas on how you can contribute to this moment.
            </p>

            <p style={{fontSize: '1.4em', color:'#333'}}>REFACTR.TECH has, in our minds, always been more than a tech conference. It has been our way of fostering a tech industry that doesn’t exist yet—a tech industry that is inclusive, at all levels, of the wide range of diversity we see in the people who use the products we build. It has been our way to protest the tech companies, communities and events that pay little more than lip service to inclusion and intersectionality. It has been our way to highlight those who would typically be relegated to the margins and lift up their voices—to show the tech industry who we could be together. Showing our unwavering, uncompromising support for Black people, not only at this crucial juncture, but at all times, is who we are. 
            </p> 

            <p style={{color:'#333'}}>
            <h3>Additional Reading</h3>

            <p style={{fontSize: '1.4em'}}>
              1. <a href="https://twitter.com/OfficialMLK3/status/1266040838628560898?s=20"> Quote from Dr. Martin Luther King Jr.</a> <br />
              2. <a href="https://threadreaderapp.com/thread/1266895545022287872.html">List of Bail Funds [Twitter Thread]</a> <br />
              3. <a href="https://docs.google.com/document/d/1BRlF2_zhNe86SGgHa6-VlBO-QgirITwCTugSfKie5Fs/preview?pru=AAABcn_l3SU*c3tOXrxTuKSSI_RAYTrAIw">Anti-racism Resources</a> <br />
              4. <a href="https://witanddelight.com/2020/05/how-white-people-can-be-better-allies-to-the-black-community/?utm_source=hootsuite&utm_medium=&utm_term=&utm_content=&utm_campaign=">How White People can Be Better Allies to the Black Community</a> <br />
              5. <a href="https://twitter.com/nmsanchez/status/1266787400228847616?s=20">Understanding Tech’s Role in White Supremacy [Twitter Thread]</a> <br />
            </p>          
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
