import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import "../assets/sass/main.scss";

const CompanyPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiCompanypage.Seo}>
      <Hero
        background={data.strapiCompanypage.Hero.background}
        title={data.strapiCompanypage.Hero.title}
        content={data.strapiCompanypage.Hero.content}
        link={data.strapiCompanypage.Hero.link}
      />
      <section className="services my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h2 className="my-5">{data.strapiCompanypage.Main.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.strapiCompanypage.Main.content,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiCompanypage {
      Hero {
        title
        background
        content
      }
      Main {
        title
        id
        content
      }
      Seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

export default CompanyPage;
