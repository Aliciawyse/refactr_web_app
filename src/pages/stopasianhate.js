import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default ({ data }) => (
  <div>
    <Helmet>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>Stop Asian Hate | REFACTR.TECH</title>
      <meta name="author" content="iThemesLab" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Helmet>
    <div className="main-container">
      <NavigationBar whiteText />
      <div className="about-us-area pad-head bg-sah parallax">
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
                <h2>Stop Asian Hate.</h2>
              </div>
            </div>
            <p style={{color:'#444'}}>By <a href="https://www.linkedin.com/in/inakstanley/">INA STANLEY</a><br />
               March 23, 2021 | 9:58 PM</p>
            <p style={{fontSize: '1.4em', color:'#444'}}>
            We at REFACTR.TECH stand in strength and solidarity with our AAPI family. At a time when we should be coming together to heal from the tragedies and hardships of the last year, another of our communities has been left reeling from senseless hatred and violence rooted in racism. The fear and pain being felt across our country are all too familiar, and we know that silence in a time such as this can be not only deafening but also devastating. We want you to know that you are not invisible to us. We see you. We hear you. We hurt with and for you. And we will continue to stand with and for you.
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>The stigmatization created and perpetuated by far-right extremists during the early days of the pandemic has brought about a dangerous level of hypervisibility for the AAPI community. That hypervisibility has, as it often does for minorities, resulted in ongoing harassment and hate crimes against individuals, families, and businesses. Too many from the Asian community have expressed their frustration at their communities being left out of larger discussions about racism, disenfranchisement, and discrimination in this country. We want to take this moment to shine a light on not just recent issues, but historic issues facing our AAPI family.
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>We know that protests and civic unrest can bring about change. The founding of our country was built on such unrest. As we begin Pride Month, I’m reminded of how the Stonewall riots, led primarily by Black and Latinx youth, ushered in a new era in the fight for LGBTQ+ rights. So as you demand justice in the streets across America, we ask that you do your best to preserve your health and your safety. 
            </p>

            <p style={{fontSize: '1.4em', color:'#444'}}>Issues of racism and discrimination against people of Asian descent are not only a modern-day problem. Dating back to the mid 1800’s, Chinese immigrants were used as cheap labor replacements for slaves, but never considered welcomed citizens. The prejudice and discrimination of the 1800’s continued throughout history, leading to the interrment of thousands of Japanese-Americans in camps in the early 1940’s where living conditions were extremely poor and assets were frozen with no explanation, on up to the 2000’s, when constant misidentification and prejudice has led to acts of violence against South Asians who were mistaken for Middle Eastern individuals who are often wrongly associated with terrorism. This past year Asians were again at the front lines, being wrongly accused of being the cause of the coronavirus pandemic. The far-right rhetoric pushing this idea has led to random and violent rants and attacks on Asian-Americans. Through all of this, Asians have been expected to be the “model minority.” As a group, members of the AAPI community have been valued and protected mainly in connection to their usefulness to white Americans, rather than being valued and protected for who they are and what they contribute to this country. Many individuals of Asian descent have spoken out about how this proximity to whiteness has caused fractures in beliefs, values, and political ideas within their own communities.</p>
            
            
            <p style={{fontSize: '1.4em', color:'#444'}}>As Americans we share this country with people from all nationalities and walks of life. The people we share this country with deserve to feel safe and free to live their lives, build their businesses, and contribute to their communities. We feel that a threat to the freedoms and safety of AAPI family is a threat to the freedoms of all. We can all do our part to protect and uplift our fellow Asian-American and Pacific Islander friends, colleagues, and loved ones by seeking ways to help their voices be heard. Reach out to those in your community to offer a listening ear. Get to know your neighbors to help break down barriers. Hold your senators, members of Congress, and state officials responsible for passing legislation to standardize the definition of hate crimes as well as the penalties for such crimes. Be willing to speak out against the poor treatment of those within the AAPI community when you see, hear, or read about it. Support organizations that fight for civil rights. Allyship comes in many forms, and there is something that each and every one of us can do.</p>

   

            <p style={{color:'#444'}}>
            <h3>More Ways to Help:</h3>

            <p style={{fontSize: '1.4em'}}>
              1. <a href="https://www.harpersbazaar.com/culture/politics/a35862857/stop-asian-hate-organizations-to-support/">Organizations to Support in the Fight Against Asian Hate</a> <br />
              2. <a href="https://www.rollingstone.com/culture/culture-news/asian-american-racism-violence-1127876/">What You Can Do About Anti-Asian Violence: ‘We Are Part of This Country,’ Activists Say</a> <br />
              3. <a href="https://www.cnbc.com/2021/03/18/how-to-take-action-against-anti-asian-racism.html">How to take action against anti-Asian racism at work and in your personal life</a> <br />
              4. <a href="https://www.today.com/news/how-be-ally-aapi-community-combat-anti-asian-racism-t212292">How to be an ally to AAPI community and combat anti-Asian racism</a> <br />
              5. <a href="https://gen-medium-com.cdn.ampproject.org/c/s/gen.medium.com/amp/p/22a972793e4">Anti-Asian Violence Must Be a Bigger Part of America’s Racial Discourse</a> <br />
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
