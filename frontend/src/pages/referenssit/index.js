import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import ReferenceComponent from "../../components/References";
import "../../assets/sass/main.scss";

const ReferencePage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiReferencepage.Seo}>
      <Hero
        background={data.strapiReferencepage.Hero.background}
        title={data.strapiReferencepage.Hero.title}
        color="black"
      />
      <section className="references my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h2 className="my-5">{data.strapiReferencepage.title}</h2>
              <ReferenceComponent references={data.allStrapiReference.edges} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiReferencepage {
      Hero {
        title
        background
      }
      id
      Seo {
        metaTitle
        metaDescription
      }
    }
    allStrapiReference {
      edges {
        node {
          strapiId
          slug
          title
          content
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
  }
`;

export default ReferencePage;
