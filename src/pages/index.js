import React from "react"
//import { Link } from "gatsby"

import Layout from "../layouts/index"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `tutorial`, `react`]} />
    <h1>Welcome</h1>
    <p>This is a simple site for a Gatsby crash course.</p>
  </Layout>
)

export default IndexPage
