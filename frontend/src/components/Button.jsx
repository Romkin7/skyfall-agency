import React from "react";
import { Link } from "gatsby";
import ArrowIcon from "./Icons/ArrowIcon";
import LoadingIcon from "./Icons/LoadingIcon";

const Button = ({
  type,
  size,
  children,
  disabled,
  link,
  href,
  loading,
  clickHandler,
}) => {
  return (
    <div className="form-group mt-3">
      {link ? (
        <Link to={href} className={`button button--${size}`}>
          {children}
          <ArrowIcon />
        </Link>
      ) : loading ? (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
        >
          {children}
          <LoadingIcon />
        </button>
      ) : type === "submit" ? (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
        >
          {children}
          <ArrowIcon />
        </button>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className={`button button--${size}`}
          onClick={clickHandler}
        >
          {children}
          <ArrowIcon />
        </button>
      )}
    </div>
  );
};

export default Button;
