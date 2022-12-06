import React from "react";

const Footer = () => {
  return (
    <footer className="footer full-size">
      <div className="footer-top full-size">
        <div className="footer-top-left full-size">
          <div className="ftl-left">
            <div className="ftl-left-1">
              <div className="ftl-customer-care">
                <h3 className="ftl-header">Customer Care</h3>
                <div className="ftl-items">Help Center</div>
                <div className="ftl-items">How to Buy</div>
                <div className="ftl-items">Returns & refunds</div>
                <div className="ftl-items">Contact Us</div>
                <div className="ftl-items">Terms & Conditions</div>
              </div>
              <div className="ftl-earn-with-daraz">
                <h3 className="ftl-header">Earn With Daraz</h3>
                <div className="ftl-items">Daraz University</div>
                <div className="ftl-items">Sell on Daraz</div>
                <div className="ftl-items">Code of Conduct</div>
                <div className="ftl-items">
                  Join the Daraz Affiliate Program
                </div>
              </div>
            </div>
          </div>
          <div className="ftr-right">
            <div className="ftr-daraz">
              <h3 className="ftl-header">Daraz</h3>
              <div className="ftl-items">About Daraz</div>
              <div className="ftl-items">Digital Payments</div>
              <div className="ftl-items">Daraz Blog</div>
              <div className="ftl-items">Amar Daraz</div>
              <div className="ftl-items">dMart</div>
              <div className="ftl-items">Privacy Policy</div>
              <div className="ftl-items">Daraz App</div>
              <div className="ftl-items">Daraz Exclusives</div>
              <div className="ftl-items">Hungrynaki Food Delivery</div>
              <div className="ftl-items">BD Cricket Live</div>
            </div>
          </div>
        </div>
        <div className="footer-top-right">
          {/* <div className="ftr-payment-method">
              <div className="ftr-payment-header">
                <h3>Paymen tMethod</h3>
              </div>
              <div className="ftr-pm-icons"></div>
            </div>
            <div className="ftr-flags">Flags</div> */}
          <div className="ftr-more-platform">
            <div className="ftr-m-top">
              <div className="ftr-qr-code">
                <img
                  src="/daraz-qr-code.png"
                  alt="daraz-qr-code"
                  className="daraz-qr-code"
                />
              </div>
              <div className="ftr-t-right">
                <img
                  src="/daraz-sort-logo.png"
                  alt="daraz-sort-logo"
                  className="daraz-sort-logo "
                />
                <div>Happy Shopping</div>
                <div>Download App</div>
              </div>
            </div>
            <div className="ftr-m-bottom">
              <img
                src="/google-play.jpg"
                alt="googleplay"
                style={{ borderRadius: "10px" }}
              />
              <img
                src="/app-store.jpg"
                alt="appstore"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-mid">Mid</div>
      <div className="footer-bottom">Bottom</div> */}
    </footer>
  );
};

export default Footer;
