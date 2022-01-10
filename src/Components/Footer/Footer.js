import React from 'react';
import './footer.modules.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__container">
          <div className="footer__socialNetwork">
            <div className="footer__imgLearnUkraniat">
              <img src="/static/images/footer/logo.png" alt="logo" />
              
            </div>
            <h5>Нам небайдуже майбутнє дітей та української мови.</h5>
            <div className="footer__icons">
              <a href="https://twitter.com/?lang=uk">
                <img src="/static/images/footer/social/twitter.png" alt="twitter" />
              </a>
              <a href="https://www.facebook.com/teach.in.ukrainian">
                <img src="/static/images/footer/social/facebook.png" alt="facebook" />
              </a>
              <a href="https://twitter.com/?lang=uk">
                <img src="/static/images/footer/social/-google-glass.png" alt="google" />
              </a>
              <a href="https://www.instagram.com/teach.in.ukrainian/">
                <img src="/static/images/footer/social/instagram.png" alt="instagram" />
              </a>
            </div>
            <p id="footer__copy">&copy; 2021 Design by Qubstudio & Development by SoftServe</p>
          </div>
          <div className="footer__partners">
            <h4 className="footer__headers">Наші партнери</h4>
            <div id="footer__logo">
              <img src="/static/images/footer/sponsors/soft_serve_logo.png" alt="Softserve" />
              <img src="/static/images/footer/sponsors/logo1.png" alt="sponsor" />
              <img src="/static/images/footer/sponsors/EDERA.svg" alt="EDERA" />
              <img src="/static/images/footer/sponsors/logo3.png" alt="e-mova" />
              <img src="/static/images/footer/sponsors/Kraina_FM.jpg" alt="Kraina_FM" />
              <img src="/static/images/footer/sponsors/prostir.jpg" alt="prostir_svobodi" />
              <img src="/static/images/footer/sponsors/ucf.svg" alt="ucf" />

            </div>
          </div>
          <div className="footer__helpProject">
            <h4 className="footer__headers">Як допомогти проєкту</h4>
            <p>Ініціатива потребує постійної фінансової підтримки, аби покривати щоденні витрати на роботу.</p>
            <button>Допомогти проекту</button>

          </div>

        </div>

      </footer>
    );
  }
}

export default Footer;
