import React, {Component} from 'react';
import $ from 'jquery';
import RevSlider, { Slide, Caption } from 'react-rev-slider';

export class LandingSlider extends Component {

  constructor(props) {
    super(props)
    this.script = undefined;
  }

  componentDidMount() {
    const script = 
      'if ($("#rev_slider_20_1").revolution == undefined) {' +
        'revslider_showDoubleJqueryError("#rev_slider_20_1");' +
      '} else {' +
        '$("#rev_slider_20_1").show().revolution({' +
          'sliderType: "hero",' +
          'jsFileLocation: "../../revolution/js/",' +
          ' sliderLayout: "fullwidth",' +
          'dottedOverlay: "none",' +
          'delay: 9000,' +
          'navigation: {},' +
          'responsiveLevels: [1240, 1024, 778, 480],' +
          'gridwidth: [1240, 1024, 778, 480],' +
          'gridheight: [920, 700, 500, 500],' +
          'lazyType: "none",' +
          'parallax: {' +
            'type: "mouse",' +
            'origo: "slidercenter",' +
            'speed: 2000,' +
            'levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],' +
            '},' +
            'shadow: 0,' +
            'spinner: "off",' +
            'autoHeight: "off",' +
          'disableProgressBar: "on",' +
          'hideThumbsOnMobile: "off",' +
          'hideSliderAtLimit: 0,' +
          'hideCaptionAtLimit: 0,' +
          'hideAllCaptionAtLilmit: 0,' +
          'debugMode: false,' +
          'fallbacks: {' +
          'simplifyAll: "off",' +
              'disableFocusListener: false,' +
              '}' +
          '});' +
        '}'

    let script_tag = document.createElement('script');
    script_tag.type = 'text/javascript';
    script_tag.text = script;
    this.script = script_tag;
    document.body.appendChild(script_tag);
  }

  componentWillUnmount() {
    document.body.removeChild(this.script);
  }

  render() {
    const LandingSlider = 
      <section id="main-slider">
        <article class="content">
          <div id="rev_slider_20_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" style={{margin: '0px auto', backgroundColor: 'transparent', padding: '0px', marginTop: '0px', marginBottom: '0px'}}>
            <div id="rev_slider_20_1" class="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.0.7">
              <ul>
                <li data-index="rs-68" data-transition="zoomout" data-slotamount="default"  data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="2000" data-rotate="0"  data-saveperformance="off"  data-title="Intro" data-description="">
                  <img src="./wp-content/themes/ilymun-wp-theme/images/index-slider.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" class="rev-slidebg" data-no-retina />

                  <div class="tp-caption tp-shape tp-shapewrapper   rs-parallaxlevel-0"
                    id="slide-68-layer-10"
                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']"
                          data-width="full"
                    data-height="full"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"

                    data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;"
                    data-transform_out="s:300;s:300;"
                    data-start="750"
                    data-basealign="slide"
                    data-responsive_offset="on"
                    data-responsive="off"

                    style={{zIndex: '5', backgroundColor: 'rgba(0, 0, 0, 0.40)', borderColor: 'rgba(0, 0, 0, 0.50)'}}>
                  </div>

                  <div class="tp-caption NotGeneric-Icon   tp-resizeme rs-parallaxlevel-0"
                    id="slide-68-layer-8"
                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']" data-voffset="['-66','-68','-78','-78']"
                          data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                      data-style_hover="cursor:default;"

                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"


                    style={{zIndex: '6', whiteSpace: 'nowrap'}}><i class="pe-7s-paper-plane"></i>
                  </div>

                  <div class="tp-caption NotGeneric-Title   tp-resizeme rs-parallaxlevel-0"
                    id="slide-68-layer-1"
                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']" data-voffset="['-30','-30','-52','-59']"
                          data-fontsize="['70','70','70','50']"
                    data-lineheight="['70','70','70','50']"
                    data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"

                    data-transform_in="z:0;rX:0deg;rY:0;rZ:0;sX:1.5;sY:1.5;skX:0;skY:0;opacity:0;s:1500;e:Power3.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:0px;"
                    data-mask_out="x:inherit;y:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"


                    style={{zIndex: '7', whiteSpace: 'nowrap'}}>ILYMUN 2019
                  </div>

                  <div class="tp-caption NotGeneric-SubTitle   tp-resizeme rs-parallaxlevel-0"
                    id="slide-68-layer-4"
                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']" data-voffset="['22','22','-28','-23']"
                          data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"

                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"


                    style={{zIndex: 8, whiteSpace: 'nowrap'}}>Inequalities: Bridging the Gaps
                  </div>
                                  
                  <div class="tp-caption NotGeneric-SubTitle   tp-resizeme rs-parallaxlevel-0"
                    id="slide-68-layer-4"
                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']" data-voffset="['124','124','80','65']"
                          data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"

                    data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1500;e:Power4.easeInOut;"
                    data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1000"
                    data-splitin="none"
                    data-splitout="none"
                    data-responsive_offset="on"


                    style={{zIndex: 8, whiteSpace: 'nowrap'}}>January 24, 25, 26
                  </div>

                  <div class="tp-caption NotGeneric-CallToAction rev-btn  rs-parallaxlevel-0"
                    id="slide-68-layer-7"
                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']" data-voffset="['178','178','132','112']"
                          data-width="none"
                    data-height="none"
                    data-whitespace="nowrap"
                    data-transform_idle="o:1;"
                      data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Power1.easeInOut;"
                      data-style_hover="c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);cursor:pointer;"

                    data-transform_in="y:50px;opacity:0;s:1500;e:Power4.easeInOut;"
                    data-transform_out="y:[175%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                    data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                    data-start="1250"
                    data-splitin="none"
                    data-splitout="none"
                    data-actions='[{"event":"click","action":"scrollbelow","offset":"0px"}]'
                    data-responsive_offset="on"
                    data-responsive="off"

                    style={{zIndex: 9, whiteSpace: 'nowrap', outline: 'none', boxShadow: 'none', boxSizing: 'border-box'}}>LEARN MORE
                  </div>
                </li>
                {/* <!-- <li data-transition="fade">

                  <img src="images/slide1.jpg"  alt=""  width="1920" height="1280">

                  <div class="tp-caption News-Title"
                      data-x="left" data-hoffset="80"
                      data-y="top" data-voffset="450"
                      data-whitespace="normal"
                      data-transform_idle="o:1;"
                      data-transform_in="o:0"
                      data-transform_out="o:0"
                      data-start="500">DISCOVER THE WILD</div>
                </li> --> */}
              </ul>
              <div class="tp-static-layers"></div>
              <div class="tp-bannertimer tp-bottom" style={{visibility: 'hidden !important'}}></div>
            </div>
          </div>
          {/* <script type="text/javascript">
            var tpj=jQuery;
            var revapi20;
            tpj(document).ready(function() {
              if(tpj("#rev_slider_20_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_20_1");
              }else{
                revapi20 = tpj("#rev_slider_20_1").show().revolution({
                  sliderType:"hero",
                  jsFileLocation:"../../revolution/js/",
                  sliderLayout:"fullwidth",
                  dottedOverlay:"none",
                  delay:9000,
                  navigation: {
                  },
                  responsiveLevels:[1240,1024,778,480],
                  gridwidth:[1240,1024,778,480],
                  gridheight:[920,700,500,500],
                  lazyType:"none",
                  parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:2000,
                    levels:[2,3,4,5,6,7,12,16,10,50],
                  },
                  shadow:0,
                  spinner:"off",
                  autoHeight:"off",
                  disableProgressBar:"on",
                  hideThumbsOnMobile:"off",
                  hideSliderAtLimit:0,
                  hideCaptionAtLimit:0,
                  hideAllCaptionAtLilmit:0,
                  debugMode:false,
                  fallbacks: {
                    simplifyAll:"off",
                    disableFocusListener:false,
                  }
                });
              }
            });
          </script> */}
        </article>
      </section>

    return LandingSlider;
  }
}