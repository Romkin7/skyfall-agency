import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import List from "../components/List";
import Form from "../components/Form";
import Hero from "../components/Hero";
import "../assets/sass/main.scss";
import SocilaLinks from "../components/SocialLinks";

const ContactPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiContactpage.Seo}>
      <Hero
        background={data.strapiContactpage.Hero.background}
        title={data.strapiContactpage.Hero.title}
        content={data.strapiContactpage.Hero.content}
        link={data.strapiContactpage.Hero.link}
        color="black"
      />
      <section className="services my-5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-5">
              <h2>{data.strapiContactpage.Contactinfo.title}</h2>
              <List listItemData={data.strapiContactpage.Contactinfo} />
              <SocilaLinks
                socialLinks={data.allStrapiSociallink.edges}
                side="start"
              />
            </div>
            <div className="col-7">
              <Form
                formData={data.strapiContactpage.Contactform}
                services={data.strapiContactpage.Contactform.services}
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
    allStrapiSociallink {
      edges {
        node {
          href
          iconname
        }
      }
    }
    strapiContactpage {
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
      Contactinfo {
        title
        subtitle
        address
        link {
          id
          href
          text
          value
        }
      }
      Contactform {
        services {
          values {
            id
            value
            text
          }
        }
        Inputcomponent {
          id
          inputtype
          inputlabel
          htmlfor
          required
          disabled
          readonly
          name
        }
        Button {
          id
          text
          type
          disabled
        }
      }
      Seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

export default ContactPage;
