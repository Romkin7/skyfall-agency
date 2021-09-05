import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import "../assets/sass/main.scss";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.Seo}>
      <Hero
        background={data.strapiHomepage.Hero.background}
        title={data.strapiHomepage.Hero.title}
        content={data.strapiHomepage.Hero.content}
        link={data.strapiHomepage.Hero.link}
        landing={true}
      />
      <section className="services my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <h2 className="my-5">{data.strapiHomepage.Main.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.strapiHomepage.Main.content,
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
    strapiHomepage {
      Hero {
        title
        background
        content
        link {
          href
          id
          textcontent
        }
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

export default IndexPage;
