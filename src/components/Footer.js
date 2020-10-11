import React from "react";
import FooterContent from "./FooterContent";

const Footer = () => {
  const [content] = React.useState([
    {
      title: "customer support",
      links: [
        "contact us",
        "help & FAQs",
        "shipping & returns",
        "order status",
        "order history",
      ],
    },
    {
      title: "shop with us",
      links: ["brands A-Z", "gift cards", "SMS updates"],
    },
    {
      title: "services",
      links: ["credit", "finacial servies", "product care"],
    },
    {
      title: "about us",
      links: ["careers", "services", "become an affiliate"],
    },
  ]);
  return (
    <section className="footer">
      <div className="footer-content">
        {content.map((item, i) => {
          return <FooterContent key={i} {...item} />;
        })}
      </div>
      <div className="copyright">© 2020 Music Supreme</div>
    </section>
  );
};

export default Footer;
