import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `purple` }}>
    <Link to="/about">About</Link>
    <Header/>
    <p>What a world.</p>
    <Footer/>
  </div>
)
