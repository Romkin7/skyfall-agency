import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
          color
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
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark nav">
          <div className="container-fluid">
            <Link
              to="/"
              className={
                "navbar-brand nav--brand nav--brand--" + data.strapiGlobal.color
              }
            >
              {data.strapiGlobal.siteName}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              Menu
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {data.allStrapiNavitem.edges.map((navItem) => {
                return (
                  <li key={navItem.node.id} className="nav-item">
                    <Link
                      className={
                        "nav-link nav--link nav--link--" +
                        data.strapiGlobal.color
                      }
                      to={navItem.node.href}
                    >
                      {navItem.node.linktext}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    )}
  />
);

export default Nav;
