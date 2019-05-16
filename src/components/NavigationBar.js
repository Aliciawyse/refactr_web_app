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
      <header className={this.props.whiteText ? "header base-style-2 white-color" : "header base-style-2"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="brand-logo">
                <a className="eventex-brand" to="index.html" />
              </div>
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
                      <Link className="nav-link" activeClassName="active" to="/schedule">
                        Schedule
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        activeClassName="active"
                        to="/sessions"
                        rel="noreferrer noopener"
                      >
                        Sessions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        activeClassName="active"
                        to="/#call-for-sponsors"
                        rel="noreferrer noopener"
                      >
                        Sponsors
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" activeClassName="active" to="/travel">
                        Travel
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        activeClassName="active"
                        to="https://shop.refactr.tech"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item d-lg-none ">
                      <Link
                        className="nav-link"
                        activeClassName="active"
                        to="https://tickets.connectevents.io/events/rtech2019/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Tickets
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            {/* /col end*/}
            <div className="col-lg-2 d-none d-lg-block">
              <ul>
                <li className="header-ticket">
                  <Link
                    className="pr-0"
                    to="https://tickets.connectevents.io/events/rtech2019/"
                  >
                    Tickets
                  </Link>
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
