import React, { Component } from 'react';
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

// import Bio from '../components/Bio'
// import Layout from '../components/Layout'
// import { rhythm } from '../utils/typography'

// import ScriptTag from 'react-script-tag';

import { LandingSlider } from '../components/LandingSlider';
import { LandingAbout } from '../components/LandingAbout';
import { LandingParallax } from '../components/LandingParallax';
import { LandingValues } from '../components/LandingValues';
import { LandingTeam } from '../components/LandingTeam';
import { CountDownParallax } from '../components/CountDownParallax';
import { LandingQuotes } from '../components/LandingQuotes';
import { LandingPress } from '../components/LandingPress';
import { LandingPartners } from '../components/LandingPartners';
import { Contact } from '../components/Contact';
import { Map } from '../components/Map';

import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';

export class Home extends Component {

  constructor(props) {
    super(props)
    this.loadedScripts = [];
  }

  loadScript(src) {
    const script = document.createElement("script");
    script.src = src; //+ '?cachebuster='+ new Date().getTime();
    script.async = false;
    this.loadedScripts.push(script);
    document.body.appendChild(script);
  }

  componentDidMount() {
    // Makes sure that when a plainPage is mounted for the first time through
    // a router it scrolls to the top.
    window.scrollTo(0, 0);

    this.loadScript("./wp-content/themes/ilymun-wp-theme/js/parallax.min.js");
    this.loadScript("./wp-content/themes/ilymun-wp-theme/js/landing/kinetic-v5.1.0.min.js");
    this.loadScript("./wp-content/themes/ilymun-wp-theme/js/landing/functions.js");
  }

  componentWillUnmount() {
    for (let script of this.loadedScripts) {
      document.body.removeChild(script);
    }

    this.loadedScripts = [];
  }

  render() {
    const home =
      <div id="home">
        <Navbar landing />

        <div id="content" class="site-content">
          <LandingSlider />
          <LandingAbout />
          <LandingParallax />
          <LandingValues />
          <LandingTeam />
          <CountDownParallax />
          <LandingQuotes />
          <LandingPress />
          <LandingPartners />
          <Contact />
          {/* <section id="map" style={{width: '100%', height: '500px'}}></section> */}
          <Map />
        </div>
        <Footer />
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/owl.carousel.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/parallax.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/kinetic-v5.1.0.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/functions.js")} /> */}
      </div>

    return home;
  }
}

export default Home

// class BlogIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const siteDescription = get(
//       this,
//       'props.data.site.siteMetadata.description'
//     )
//     const posts = get(this, 'props.data.allMarkdownRemark.edges')

//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <Helmet
//           htmlAttributes={{ lang: 'en' }}
//           meta={[{ name: 'description', content: siteDescription }]}
//           title={siteTitle}
//         />
//         <Bio />
//         {posts.map(({ node }) => {
//           const title = get(node, 'frontmatter.title') || node.fields.slug
//           return (
//             <div key={node.fields.slug}>
//               <h3
//                 style={{
//                   marginBottom: rhythm(1 / 4),
//                 }}
//               >
//                 <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//               <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
//             </div>
//           )
//         })}
//       </Layout>
//     )
//   }
// }

// export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
