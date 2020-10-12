import React from "react";
import "./footer.css";

export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer className="mt-4 footer">
      <div className="container p-4">
        <div className="row">
          <div className="col">
            <div className="row">Developed with React</div>
            <div className="row">
              <p className="footer-p">
                Illustrations by{" "}
                <a
                  href="https://www.freepik.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freepik
                </a>
              </p>
            </div>
          </div>
          <div className="col text-right">&copy; Giovanni Prisco 2020</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
