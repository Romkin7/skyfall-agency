import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ServicesComponent from "../components/Services";
import PricesComponent from "../components/Prices";
import "../assets/sass/main.scss";

const ServicePage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiServicepage.Seo}>
      <Hero
        background={data.strapiServicepage.Hero.background}
        title={data.strapiServicepage.Hero.title}
      />
      <section className="services my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h2 className="my-5">{data.strapiServicepage.title}</h2>
              <ServicesComponent services={data.allStrapiService.edges} />
            </div>
          </div>
        </div>
      </section>
      <section className="prices my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h2 className="my-5">{data.strapiServicepage.pricetitle}</h2>
              <PricesComponent prices={data.allStrapiPrice.edges} />
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
        background
      }
      title
      pricetitle
      id
      Seo {
        metaTitle
        metaDescription
      }
    }
    allStrapiService {
      edges {
        node {
          strapiId
          slug
          title
          description
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 500, height: 500)
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
          image {
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

export default ServicePage;
