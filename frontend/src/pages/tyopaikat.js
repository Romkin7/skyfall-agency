import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Position from "../components/Position";
import "../assets/sass/main.scss";

const EmployeePage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiEmployeepage.Seo}>
      <Hero
        background={data.strapiEmployeepage.Hero.background}
        content={data.strapiEmployeepage.Hero.content}
        title={data.strapiServicepage.Hero.title}
      />
      <section className="positions my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              {data.allStrapiPosition.edges.map((postion) => {
                return (
                  <Position key={postion.node.id} position={postion.node} />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiEmployeepage {
      Hero {
        title
        content
        background
      }
      Seo {
        metaTitle
        metaDescription
      }
    }
    allStrapiPosition {
      edges {
        node {
          strapiId
          slug
          title
          description
        }
      }
    }
  }
`;

export default EmployeePage;
