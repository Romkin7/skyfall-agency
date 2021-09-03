import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiNavitem {
          edges {
            node {
              strapiId
              href
              linktext
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light nav">
            <div class="container-fluid">
              <Link to="/" class="navbar-brand nav--brand">
                {data.strapiGlobal.siteName}
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
                Menu
              </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {data.allStrapiNavitem.edges.map((navItem) => {
                  return (
                    <li key={navItem.node.id} className="nav-item">
                      <Link className="nav-link" to={navItem.node.href}>
                        {navItem.node.linktext}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )}
  />
);

export default Nav;
