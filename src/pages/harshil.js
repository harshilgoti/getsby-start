import React from "react"
 import { Link } from "gatsby"

// import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Harshil" />
    <h1>Hi Harshil</h1>
    <p>Welcome to your Dentek Material Hub.</p>
    
    {/* <p>Now go build something great.</p> */}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    {/* <Link to="/harshil/">Harshil</Link> */}
  </div>
)

export default IndexPage
