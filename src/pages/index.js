import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>This is Oliver De La Via's gatsby hello world project.</p>
    <p>I love creating things and solving problems.</p>
    <p>This will be my first hackathon.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
