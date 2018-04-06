import React from 'react';

const WineSearcher = () => (
  <div style="width:375px;height:57px;padding:10px;margin:0 auto;background-color:#9B9B9B;vertical-align:middle;box-sizing:border-box;">
    <form name="searchform" method="GET" action="https://www.wine-searcher.com/wine-select.lml">
      
      <input type="hidden" name="Xfromsearch" value="Y">
        <div style="float:right;width:49px;height:37px;border-radius:0px 2px 2px 0px;box-sizing:border-box;">
          <button style="display:inline-block;background:none repeat scroll 0 0 #0076D6;height:37px;width:100%;padding:0;border:medium none;border-radius:0px 2px 2px 0px;box-sizing:border-box;" name="searchbutton" tabindex="3" onclick="return search_button_click();">
            <span style="cursor:pointer;display:block;">
              <svg width="20px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-373.000000, -2884.000000)" fill-rule="nonzero" fill="#FFF">
                    <g transform="translate(373.000000, 2884.000000)">
                      <path d="M16.8627451,33.4788235 C12.4709804,33.4987373 8.25058824,31.7707843 5.13333333,28.6764706 C2.01447059,25.5821176 0.255686431,21.3741176 0.243529529,16.9823529 C0.229742863,12.5890196 1.96533333,8.37176471 5.06431373,5.25882353 C8.1632549,2.14607843 12.3729412,0.39372549 16.7662745,0.389019608 C21.1580392,0.382901961 25.3737255,2.12309804 28.4803922,5.22823529 C31.588549,8.33180392 33.334902,12.5443137 33.3333333,16.9376471 C33.3379294,21.312549 31.6054118,25.5113725 28.5188235,28.6133333 C25.4305882,31.7138039 21.2396078,33.4631373 16.8627451,33.4784314 L16.8627451,33.4788235 Z M16.8627451,5.21607843 C13.75,5.19463529 10.7552941,6.414 8.54156863,8.60301961 C6.32784314,10.7920392 5.0765098,13.7716471 5.06270588,16.8841961 C5.04891765,19.9984706 6.27439216,22.9885098 8.46803922,25.1975294 C10.6616863,27.4064706 13.6441176,28.6518824 16.7586275,28.658 C19.8713725,28.6656588 22.8601961,27.4340392 25.0629412,25.2342745 C27.2672941,23.0360392 28.506549,20.0503529 28.506549,16.9378039 C28.5126784,13.8403922 27.2917647,10.8656471 25.1088627,8.66878431 C22.9259608,6.47054902 19.9602353,5.22976471 16.8629804,5.21596078 L16.8627451,5.21607843 Z" id="Fill-1"> </path>
                      <polygon points="36.1996078 39.6078431 25.78 29.2509804 29.1929804 25.8349412 39.6082745 36.1918039"> </polygon>
                    </g>
                  </g>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <div style="text-align:left;width:355px;border-radius:2px 0px 0px 2px;box-sizing:border-box;">
          <div style="float:right;width:75px;box-sizing:border-box;">
            <input style="font-size:14px;font-family:Verdana;height:37px;width:100%;background:#fff;padding-left:10px;padding-right:10px;margin:0;outline:0 none;box-sizing:border-box;border:0 none" type="text" size="4" maxlength="4" id="Xvintage" name="Xvintage" value="" tabindex="2" title="Vintage (use 'NV' for non-vintage). Leave blank to search all vintages." placeholder="Vintage"> 
        </div>
            <div style="text-align:left;width:231px;overflow:visible;margin:0;background:#fff;border-radius:2px 0px 0px 2px;position:relative;box-sizing:border-box;">
              <input style="font-size:14px;font-family:Verdana;height:37px;border-radius:2px 0px 0px 2px;border:0 none;outline:none;padding-left:45px;padding-right:10px;vertical-align:top;width:99%;text-overflow:ellipsis;background:#fff;background-image:url('#|static1_url|#/images/logo_splash.png');background-repeat:no-repeat;background-size:25px 14px;background-position:10px;position:relative;box-sizing:border-box;" type="text" maxlength="100" name="Xwinename" id="Xwinename" value="" tabindex="1" title="Search phrase" placeholder="Type any wine name" autocomplete="off" spellcheck="false" dir="auto" >
                <div style="border-right:1px solid #999;height:25px;width:1px;position:absolute;right:-0.5px;top:5px"> </div> 
        </div>
            </div>
    </form>
        </div>

        )