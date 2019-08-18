import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css';
import './Navbar.css';
import $ from 'jquery';
// import './wp-content/themes/ilymun-wp-theme/js/jquery.bootstrap-autohidingnavbar.min.js';

export class Navbar extends Component {
  resize = () => this.forceUpdate();

  constructor (props){
    super (props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.handleScroll);
    
    // Navbar change on scroll
    $(document).on('scroll', () => this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (this.props.landing) {
      // $('.navbar').css('background-color', 'rgba(255,255,255,'+($(document).scrollTop() / 500) +')');
      let scrollPosition = $(document).scrollTop();
      if (scrollPosition >= $('.upper-navbar').height()) {
          $('.navbar').removeClass('navbar-static-top');
          $('.navbar').addClass('navbar-fixed-top');
          $('.navbar').addClass('navbar-sm');
          if ($(window).width() < 992) {
              // http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
              // $(".navbar").autoHidingNavbar();
          }
      } else {
          $('.navbar').removeClass('navbar-fixed-top');
          $('.navbar').addClass('navbar-static-top');
          $('.navbar').removeClass('navbar-sm');
      }
    }
  }

  render() {
    const upperNavBar =
      <div class="container upper-navbar">
        <div class="row">
          <div class="col-md-3">
            <p>
              <i class="fa fa-envelope"></i> <a href="mailto:support@ilymun.org">support@ilymun.org</a>
            </p>
          </div>
          <div class="col-md-2">
            <p>
              <i class="fa fa-phone"></i> <a href="tel:+33478696006">+33 4 78 69 60 06</a>
            </p>
          </div>
          <div class="col-md-3">
            <p>
              <a class="fa fa-facebook link" href="https://www.facebook.com/internationallyonmun"></a>
              <a class="fa fa-instagram link" href="https://www.instagram.com/_ilymun/"></a>
              <a class="fa fa-youtube-play link" href="https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA"></a>
            </p>
          </div>
          <div class="col-md-4">
            <p>
              <i class="fa fa-calendar"></i> Next Event in: <span id="top-time"></span>
            </p>
          </div>
        </div>
      </div>

    const navBar =
      <nav className={"navbar " + (this.props.landing ? 'navbar-static-top' : 'navbar-fixed-top navbar-sm')}>
        <div class="container">
          <div class="navbar-header">
            <span class="tablet-navbar">{/*<!-- Something that appears only on tablets: next event? -->*/}</span>
            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
              <i class="fa fa-bars"></i>
            </button>
            {/* <!-- TODO: Make Logo Pop-out on hover to let people know it is clickable --> */}
            <Link to="/"><a class="navbar-brand" href="/"><img src={require("./wp-content/themes/ilymun-wp-theme/images/logo.png")} alt="" /></a></Link>
          </div>

          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              {/* <!-- <li class="active"><a href="#">Home</a></li> --> */}
              <li class="dropdown">
                <a class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">About <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><Link to="/about">The Conference</Link></li>
                  <li><Link to="/committees/">Committees & Issues Debated</Link></li>
                  <li><Link to="/action-assembly/">Action Assembly</Link></li>
                  <li><Link to="/international-court-of-justice/">International Court of Justice</Link></li>
                  {/* <!--<li><a href="/program">Programme</a></li>--> */}
                  {/* <li><a class="scroll" href="/#team">Team</a></li> */}
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Get Ready <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  {/* <!--<li><a href="/country-fact-sheets">Country Fact Sheets</a></li>--> */}
                  <li><Link to="/debate-help/">How to Act & Debate</Link></li>
                  <li><Link to="/dress/">How to Dress</Link></li>
                  {/* <!--<li><a href="/social-events">Social Events</a></li>--> */}
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Press<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="https://medium.com/ilymun">Articles</a></li>
                  <li><a href="https://www.facebook.com/pg/internationallyonmun/photos/">Gallery</a></li>
                  <li><a href="https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA">Videos</a></li>
                  {/* <li><a href="/school-photos/">School Photos</a></li> */}
                </ul>
              </li>
              {/* <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Partners<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><Link href="/partners/">Partners</Link></li>
                  <li><Link href="/other-muns/">Other MUNs</Link></li>
                </ul>
              </li> */}
              <li><Link to="/other-muns/">Other MUNs</Link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              {/* <li><Link to Con><a class="scroll" href="/#contact-us">Contact Us</a></Link></li> */}
              <li><Link to="/fund">Help Fund</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    return (
      <div>
        {this.props.landing ? upperNavBar : ""}
        {navBar}
      </div>);
  }
}

Navbar.defaultProps = {
  landing: false
};