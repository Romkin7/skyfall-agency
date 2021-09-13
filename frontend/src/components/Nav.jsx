import React, { useEffect, useState } from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => {
  const [active, setActive] = useState(() => 0);
  const [color, setColor] = useState(() => "black");
  const [bacground, setBackground] = useState(() => false);
  const [open, setOpen] = useState(() => false);

  useEffect(() => {
    if (typeof window !== "undefined" && !active) {
      const activeColor =
        window.location.pathname === "/"
          ? "white"
          : window.location.pathname === "/palvelut"
          ? "white"
          : "black";
      const activeItem =
        window.location.pathname === "/yhteystiedot"
          ? 5
          : window.location.pathname.split("/").includes("referenssit")
          ? 4
          : window.location.pathname === "/tyopaikat"
          ? 3
          : window.location.pathname === "/yrityksille"
          ? 2
          : window.location.pathname === "/palvelut"
          ? 1
          : 0;
      setActive(() => activeItem);
      setColor(() => activeColor);
    }
    return;
  }, [setActive, active]);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setBackground(() => true);
    } else {
      setBackground(() => false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
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
          <nav
            className={`navbar navbar-expand-lg navbar-dark ${
              bacground && color === "black"
                ? "bg-light"
                : open && color === "black"
                ? "bg-light"
                : bacground && color === "white"
                ? "bg-dark"
                : open && color === "white"
                ? "bg-dark"
                : "nav--transparent"
            } nav`}
          >
            <div className="container-fluid">
              <Link
                to="/"
                onClick={() => setActive(0)}
                className={"navbar-brand nav--brand nav--brand--" + color}
              >
                {data.strapiGlobal.siteName}
              </Link>
              <button
                onClick={() => setOpen(!open)}
                className={"navbar-toggler nav--toggle nav--toggle--" + color}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  fill={color}
                  className="bi bi-list nav--toggle--icon"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <span>Menu</span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse nav--collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav--collapse--menu">
                {data.allStrapiNavitem.edges.map((navItem) => {
                  return (
                    <li key={navItem.node.strapiId} className="nav-item">
                      <Link
                        className={`nav-link nav--link nav--link--${color} nav--link--${
                          navItem.node.strapiId === active ? "active" : ""
                        }
                        `}
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
};

export default Nav;
