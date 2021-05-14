import React from 'react';
import './footer-component.styles.css';

const Footer = () => (
  <div className="footer">
    <div className="legal"> © 2021 REXORA.Inc  </div>
    <div className="social">
      <a href = "https://www.instagram.com/rexoraedulabs/" class="fa fa-instagram w3-xxlarge"></a>
      <a href = "https://www.linkedin.com/company/rexoralabs/?originalSubdomain=in" class="fa fa-linkedin w3-xxlarge"></a>
      <a href = "#" class="fa fa-twitter w3-xxlarge"></a>
    </div>
  </div>
);
export default Footer;
