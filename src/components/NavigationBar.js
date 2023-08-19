import React, { Component } from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag"
export default class NavigationBar extends Component {
  state = {
    openNav: false
  };

  toggleNav = () => {
    this.setState({ openNav: !this.state.openNav });
  };
  render() {
    return (
      <header className={this.props.whiteText ? "header base-style-2 white-color" : "header base-style-2"}
              style={{backgroundColor: this.props.homepage ? "#4E29D1": "transparent"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-1">
              {/*<div className="brand-logo">*/}
              {/*  <a className="eventex-brand" to="index.html" />*/}
              {/*</div>*/}
            </div>
            {/* /col end*/}
            <div className="col-lg-9">


              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.toggleNav}
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa fa-bars" />
                  </span>
                </button>
                <div
                  className={
                    this.state.openNav ? "" : "collapse navbar-collapse"
                  }
                >
                
                <a href="/" className="img-fluid col-3"> 
                  <img
                  style={{paddingTop: '0px'}}
                  src="/img/logo/refactr-logo.svg"
                  alt="Conference location: Atlanta"
                  />
                </a>
                
                <ul className={"navbar-nav ml-auto"}>

                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/">
                        Home
                        <span className="sr-only">(current)</span>
                      </Link>
                </li>*/}
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/about">
                        About
                      </Link>
              </li>

                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/workshops">
                        Workshops
                      </Link>
                    </li>*/}
              
                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/schedule">
                        Schedule
                      </Link>
                  </li>*/}

                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/speakers">
                        Speakers
                      </Link>
                </li>*/}

                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/sponsors">
                        Past Sponsors
                      </Link>
              </li>*/}

                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/sessions">
                        2021 Sessions
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/sponsors">
                        2021 Sponsors
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/workshops">
                        Workshops
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/careerfair">
                        Career Fair
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/jobs">
                        Jobs
                      </Link>
                    </li>*/}
                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/travel">
                        Travel
                      </Link>
                  </li>*/}

                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/covid-policy">
                        COVID Policy
                      </Link>
                    </li>

                    
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/code-of-conduct">
                        Code of Conduct
                      </Link>
                     </li>
                    
                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/workshops">
                        Workshops
                      </Link>
                </li>
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/sessions">
                        Sessions
                      </Link>
                    </li>*/}
                    
                    
                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/sponsors">
                        Sponsors
                      </Link>
                    </li>
                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/travel">
                        Travel
                      </Link>
                      </li>*/}
                    
                    <li className="nav-item d-lg-none ">
                      <OutboundLink
                        className="nav-link"
                        href="https://reg.connectevents.io/ConnectEvents/rtech2023/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Tickets
                      </OutboundLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* /col end*/}
           <div className="col-lg-2 d-none d-lg-block">
              <ul>
                <li className="header-ticket">
                  <OutboundLink
                    className="pr-0"
                    href="https://reg.connectevents.io/ConnectEvents/rtech2023/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tickets
                  </OutboundLink>
                </li>
              </ul>
                    </div>
            {/* /col end*/}
          </div>
          {/* /row end*/}
        </div>
        {/* container end*/}
      </header>
    );
  }
}
