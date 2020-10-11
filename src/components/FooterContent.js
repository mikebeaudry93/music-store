import React from "react";

const FooterContent = ({ title, links }) => {
  console.log(links);
  return (
    <div>
      <h4 className="footer-title">{title}</h4>
      {links.map((item, i) => {
        return (
          <div key={i} className="footer-links">
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default FooterContent;
