import React from "react"
// import { graphql } from 'gatsby'
import { SpeakerCardList } from '../components/SpeakerCardList'
import Footer from "../components/footer"


export default class SpeakerPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          speakers: [],
          featured_speakers: [],
        };
      }
      
      componentDidMount() {
        fetch('')
        .then((resp) => resp.json())
        .then(data => {
           this.setState({ speakers: data.records });
        }).catch(err => {
          // Error 🙁
        });
      }
    
    render(){    
    
    return (
  <div>
        {/*Preloder*/}
        {/* <div className="loader">
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--dot" />
          <div className="loader--text" />
        </div> */}
        {/*Main Container Start Here*/}
        <div className="main-container">
          {/*Header Start Here*/}
          <header className="header base-style-2 white-color">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="brand-logo">
                    <a className="eventex-brand" href="/"><img src="/img/logo/logo-3.png?123" alt="logo" /></a>
                  </div>
                </div>
                {/* /col end*/}
                <div className="col-lg-8">
                  <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"><i className="fa fa-bars" /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/about">About</a>
                          {/*ul class="dropdown-menu animation  slideUpIn">
                                            <li>
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="pricing.html">Pricing</a>
                                            </li>
                                            <li>
                                                <a href="error-404.html">Error 404</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul*/}
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/code-of-conduct">Code of Conduct</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link " href="/speakers" rel="noreferrer noopener">Speakers</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="https://shop.refactr.tech" rel="noreferrer noopener" target="_blank">Shop</a>
                        </li>
                        <li className="nav-item d-lg-none ">
                          <a className="nav-link" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Tickets</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* /col end*/}
                <div className="col-lg-2 d-none d-lg-block">
                  <ul>
                    <li className="header-ticket">
                      <a className="pr-0" href="https://tickets.connectevents.io/events/rtech2019/" rel="noreferrer noopener" target="_blank">Tickets</a>
                    </li>
                  </ul>
                </div>
                {/* /col end*/}
              </div>
              {/* /row end*/}
            </div>
            {/* container end*/}
          </header>
          {/*Header End Here*/}
          {/*Speaker Area Start Here*/}
          <div className="about-us-area pad-head bg-about">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="about-content">
                    <div className="section-title text-center">
                      <h2>Speakers</h2>
                    </div>
                  </div>
                </div>
                {/* /col*/}
              </div>
              {/* /row*/}
            </div>
            {/*/ container*/}
          </div>
          {/*About Us Area End Here*/}
          {/*Privacy Policy Content Area Start Here*/}

{/*Whos Speaking Area Start Here*/}
          <div className="whos-speaking-area pad100">
            <div className="container">


              <div className="row mb50">
              
                {/*Whos Speaking Area End Here*/}

               <SpeakerCardList items={this.state.speakers}/>

                
                
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>
          {/*Whos Speaking Area End Here*/}



          <div style={{marginTop: '15px', marginBottom: '20px'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="inner-content">
                    
                  </div>
                </div>
                {/* /col end*/}
              </div>
              {/* /row end*/}
            </div>
            {/* /container end*/}
          </div>

        </div>
        {/*Main Container End Here*/}
        <Footer/>
      </div>
)
    }
}

