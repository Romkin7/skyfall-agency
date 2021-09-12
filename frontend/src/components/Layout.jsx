import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Nav from "./Nav";
import Seo from "./Seo";
import Footer from "./Footer";

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
          Seo {
            metaTitle
            metaDescription
            shareImage {
              url
            }
          }
        }
        allStrapiSociallink {
          edges {
            node {
              href
              iconname
            }
          }
        }
        strapiGlobal {
          Footer {
            title
            subtitle
            address
            link {
              id
              value
              href
              text
            }
            Linkbutton {
              textcontent
              href
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Nav />
        <main>{children}</main>
        <Footer
          footer={data.strapiGlobal.Footer}
          socialLinks={data.allStrapiSociallink.edges}
        />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
