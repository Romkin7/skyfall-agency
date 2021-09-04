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
        background={data.strapiHomepage.hero.background}
        title={data.strapiHomepage.hero.title}
        content={data.strapiHomepage.hero.content}
        link={data.strapiHomepage.hero.link}
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
      hero {
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
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

export default IndexPage;
