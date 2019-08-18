import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export class Contact extends Component {
  render() {
    const contact =
      <section id="contact-us">
        <div class="white-bg angular last section-padding">
          <div class="top-angle"></div>
          <div class="container">
          <ScrollAnimation animateIn="slideInRight" animateOnce>
            <div class="section-head">
              <h2 class="section-title">Contact</h2>
              <p class="section-description">
                  The ILYMUN team is always available to help you out. Looking for more information? Have any questions about ILYMUN? Don't hesitate to contact us.
              </p>
            </div>
          </ScrollAnimation>
            <div class="row">
            <ScrollAnimation animateIn="bounceInUp" animateOnce>
              <div class="col-md-8 col-sm-12 col-xs-12 col-md-offset-2">
                <form id="contact-form" action="send-email" method="post">
                  <h3 style={{textAlign: 'center'}}>Send us a Message</h3>
                  <div class="row">
                    <div class="col-md-4">
                      <input class="input" placeholder="Your Name" id="name-input" />
                    </div>
                    <div class="col-md-4">
                      <input class="input" placeholder="Your Email" id="email-input" />
                    </div>
                    <div class="col-md-4">
                      <input class="input" placeholder="Subject" id="subject-input" />
                    </div>
                  </div>
                  <textarea class="input thick" placeholder="Your message to us" id="message-input"></textarea>
                  <button type="submit" class="button" style={{marginTop: '10px', float: 'right'}}><i class="fa fa-paper-plane-o"></i> Send</button>
                </form>
              </div>
            </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

    return contact;
  }
}