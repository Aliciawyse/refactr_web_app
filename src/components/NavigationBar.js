import React, { Component } from "react";
import { Link } from "gatsby";
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
            <div className="col-lg-2">
              {/*<div className="brand-logo">*/}
              {/*  <a className="eventex-brand" to="index.html" />*/}
              {/*</div>*/}
            </div>
            {/* /col end*/}
            <div className="col-lg-8">
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
                  <ul className={"navbar-nav ml-auto"}>
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/">
                        Home
                        <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/speakers">
                        Speakers
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/workshops">
                        Workshops
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/sponsors">
                        Sponsors
                      </Link>
                    </li>
                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/careerfair">
                        Career Fair
                      </Link>
                </li>*/}
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/updates">
                        Updates
                      </Link>
                    </li>
                    {/*<li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/code-of-conduct">
                        Code of Conduct
                      </Link>
              </li>*/}
                    
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
                      <a
                        className="nav-link"
                        href="https://reg.connectevents.io/ConnectEvents/rtech2021/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Tickets
                      </a>
                </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* /col end*/}
            <div className="col-lg-2 d-none d-lg-block">
              <ul>
                <li className="header-ticket">
                  <a
                    className="pr-0"
                    href="https://reg.connectevents.io/ConnectEvents/rtech2021/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tickets
                  </a>
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
