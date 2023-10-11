import "./FooterStyles.css";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <div className="copyright-social-container">
            <p className="copyright-text">
              MyBrain &copy; {year} All Rights Reserved by{" "}
              <a href="https://www.example.com">MyBrain</a>.
            </p>
            <ul className="social-icons">
              <li>
                <a className="instagram" href="https://www.instagram.com/mybrain.inc">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://www.linkedin.com/company/mybrain">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="gmail" href="mailto:mybrain.startup@gmail.com">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
