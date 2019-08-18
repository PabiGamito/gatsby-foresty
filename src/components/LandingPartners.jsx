import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class LandingPartners extends Component {
  render() {
    const partners = 
      <section id="partners">
        <div>
          <div class="blue-bg angular section-padding">
            <div class="top-angle"></div>
            <div class="container">
              <div style={{marginTop: '-50px'}}>
                <h2 class="plain-lg-title text-center" style={{color: 'white'}}><span>Our Partners</span></h2><br />
                <div class="row">
                  <p class="col-md-8 col-md-push-2 text-center" style={{color: 'white'}}>
                      A big thank you to all our partners who have been supporting International Lyon Model United Nations over the year. They make this event possible.
                  </p>
                </div><br />
              </div>
              <div class="section-content" style={{marginBottom: '100px'}}>
                <OwlCarousel
                  className="partners-slider"
                  loop={true}
                  margin={10}
                  autoplay={true}
                  nav={true}
                  responsive={{
                    0: {
                      items: 3
                    },
                    768: {
                        items: 4,
                        autoPlay: 5000
                    },
                    992: {
                        items: 7,
                        autoplay: false
                    }
                  }}
                >
                  <div><a href='https://www.boehringer-ingelheim.com/'><LazyLoad><img src={require('./images/partners/1.png')} /></LazyLoad></a></div>
                  <div><a href='http://www.media6.com/en/'><LazyLoad><img src={require('./images/partners/2.png')} /></LazyLoad></a></div>
                  <div><a href=' http://www.risofrance.fr/accueil.html'><LazyLoad><img src={require('./images/partners/3.png')} /></LazyLoad></a></div>
                  <div><LazyLoad><img src={require('./images/partners/4.png')} /></LazyLoad></div>
                  <div><a href='http://www.intonations.com/'><LazyLoad><img src={require('./images/partners/5.png')} /></LazyLoad></a></div>
                  <div><a href='http://www.mri-relocation.com/'><LazyLoad><img src={require('./images/partners/6.png')} /></LazyLoad></a></div>
                  <div><a href='https://csianglo.org/'><LazyLoad><img src={require('./images/partners/7.png')} /></LazyLoad></a></div>
                </OwlCarousel>
                {/* <div id="partners-slider">
                  <div><a href='https://www.boehringer-ingelheim.com/'><LazyLoad><img src={require('./images/partners/1.png')} /></LazyLoad></a></div>
                  <div><a href='http://www.media6.com/en/'><LazyLoad><img src={require('./images/partners/2.png')} /></LazyLoad></a></div>
                  <div><a href=' http://www.risofrance.fr/accueil.html'><LazyLoad><img src={require('./images/partners/3.png')} /></LazyLoad></a></div>
                  <div><LazyLoad><img src={require('./images/partners/4.png')} /></LazyLoad></div>
                  <div><a href='http://www.intonations.com/'><LazyLoad><img src={require('./images/partners/5.png')} /></LazyLoad></a></div>
                  <div><a href='http://www.mri-relocation.com/'><LazyLoad><img src={require('./images/partners/6.png')} /></LazyLoad></a></div>
                  <div><a href='https://csianglo.org/'><LazyLoad><img src={require('./images/partners/7.png')} /></LazyLoad></a></div>
                </div> */}
              </div>
            </div>
          </div>
          <div class="bottom-angle"></div>
        </div>
      </section>
    
    return partners;
  }
}