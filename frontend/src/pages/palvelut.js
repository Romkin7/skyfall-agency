import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import ServicesComponent from "../components/Services";
import "../assets/sass/main.scss";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiServicepage.Seo}>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-10">
              <h1>{data.strapiServicepage.Hero.title}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-10">
            <h2>{data.strapiServicepage.title}</h2>
            <ServicesComponent services={data.allStrapiService.edges} />
            <div className="col-10 col-md-10"></div>
          </div>
        </div>
      </section>
      <section className="prices">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-10 col-md-10">
            <h2>{data.strapiServicepage.pricetitle}</h2>
            <ServicesComponent prices={data.allStrapPrice.edges} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiServicepage {
      Hero {
        title
      }
      title
      pricetitle
      id
      Seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiService {
      edges {
        node {
          strapiId
          slug
          title
          description
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
          }
        }
      }
    }
    allStrapiPrice {
      edges {
        node {
          strapiId
          slug
          title
          content
          price
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, height: 500)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
