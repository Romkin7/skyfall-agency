import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

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
