import React from "react";

function Footer() {
  const data = new Date();
  let ano = data.getFullYear();

  return (
    <footer className="footer">
      <p className="footer p">Copyright ⓒ {ano}</p>
    </footer>
  );
}

export default Footer;
