import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Markdown from "react-markdown";

export const query = graphql`
  query ReferenceQuery($slug: String!) {
    strapiReference(slug: { eq: $slug }) {
      strapiId
      title
      content
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

const OneReferencePage = ({ data }) => {
  const reference = data.strapiReference;
  const seo = {
    metaTitle: reference.title,
    metaDescription: reference.description,
    shareImage: reference.image,
    reference: true,
  };

  return (
    <Layout seo={seo}>
      <Hero title={reference.title} color="black" />
      <section className="my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <Markdown source={reference.content} escapeHtml={false} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OneReferencePage;
