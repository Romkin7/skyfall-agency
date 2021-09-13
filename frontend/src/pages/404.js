import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

const NotFoundPage = () => (
  <Layout>
    <SEO
      seo={{
        metaTitle: "404: Not found",
        metaDescription: "Valitettavasti hakemaanne sivua ei löytynyt.",
      }}
    />
    <h1>Erorr 404, page not found!</h1>
    <p>Valitettavasti hakemaanne sivua ei löytynyt.</p>
    <a href="/">Palaa etusivulle</a>
  </Layout>
);

export default NotFoundPage;
