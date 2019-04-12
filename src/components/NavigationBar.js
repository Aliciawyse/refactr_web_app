import React, { Component } from "react";

export default class NavigationBar extends Component {
  state = {
    openNav: false
  }

  toggleNav = () => {
    this.setState({ openNav: !this.state.openNav})
  }
  render() {
    return (
      <header className="header base-style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="brand-logo">
                <a className="eventex-brand" href="index.html">
                </a>
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
                  className={this.state.openNav ? '' : 'collapse navbar-collapse'}
                >
                  <ul className={'navbar-nav ml-auto'}>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Home 
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        About
                      </a>
                      </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/code-of-conduct">
                        Code of Conduct
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        href="/speakers"
                        rel="noreferrer noopener"
                      >
                        Speakers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://shop.refactr.tech"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Shop
                      </a>
                    </li>
                    <li className="nav-item d-lg-none ">
                      <a
                        className="nav-link"
                        href="https://tickets.connectevents.io/events/rtech2019/"
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
                    href="https://tickets.connectevents.io/events/rtech2019/"
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

