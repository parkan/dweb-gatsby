import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Voice from './Voice'
// import DbService from '../services/db-service';
import ScrollService from '../services/scroll-service';

// Get page number, organize masonry layout
export default function Voices() {

  const VOICES_PER_PAGE = 9;
  const RENDER_TIMEOUT = 200;

  let timeouts = [];

  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [page, setPage] = useState(1);
  const [voices, setVoices] = useState([]);

  // const dbService = new DbService();
  const scrollService = new ScrollService();

  var voicesLoadedEvent = new Event('voicesLoaded'); // Это событие используется в Layout.js

  const data = useStaticQuery(
    graphql`
      query {
        allWordpressWpVoices {
          nodes {
            acf {
              author
              date
              intro
              link
              voice_category {
                name
              }
              image {
                localFile {
                  url
                }
              }
            }
            title
            wordpress_id
          }
        }
        wordpressAcfOptions {
          options {
            voices_header
            voices_intro
          }
        }
      }
    `
  )

  const voicesAll = data.allWordpressWpVoices.nodes;
  const options = data.wordpressAcfOptions.options;

  // const loadVoices = async function() {
  //   setLoading(true);
  //   scrollService.saveScroll(); // Save scroll position
  //   dbService
  //     .getVoices(VOICES_PER_PAGE, page)
  //     .then((voices) => onVoicesReceived(voices))  // Restore scroll position
  //     .then(() => masonryRestart());
  //   // .catch(onError);
  // }

  const loadVoices = function() {
    scrollService.saveScroll(); // Save scroll position
    let newVoices = voicesAll.slice(0, VOICES_PER_PAGE * page);
    setVoices(newVoices);
    if (VOICES_PER_PAGE * page > voicesAll.length) setFinished(true);
    setPage(page + 1);
    masonryRestart();
  }

  // const onVoicesReceived = async function (newVoices) {
  //   setVoices([...voices, ...newVoices.json]);
  //   if (newVoices.pagesCount <= page){
  //     setTimeout(() => {
  //       setFinished(true);
  //     }, RENDER_TIMEOUT);
  //   }
  //   setPage(page + 1);
  // };

  const onVoicesDisplayed = () => {
    if (typeof window === `undefined`) return;
    scrollService.restoreY();
    setLoading(false);
    window.dispatchEvent(voicesLoadedEvent);
  }

  useEffect(() => {
    loadVoices();
  }, []);

  const masonryOptions = {
    sm: {
      minWidth: 0,
      colsCount: 1,
      colsWidth: 100,
      gapsWidth: 0,
      unit: '%'
    },
    md: {
      minWidth: 768,
      colsCount: 2,
      colsWidth: 336,
      gapsWidth: 30,
      unit: 'px'
    },
    lg: {
      minWidth: 992,
      colsCount: 2,
      colsWidth: 375,
      gapsWidth: 24,
      unit: 'px'
    },
    xl: {
      minWidth: 1280,
      colsCount: 3,
      colsWidth: 322,
      gapsWidth: 30,
      unit: 'px'
    },
    xxl: {
      minWidth: 1450,
      colsCount: 3,
      colsWidth: 388,
      gapsWidth: 35,
      unit: 'px'
    }
  };

  let currentOptions = {};

  const masonrySetMinWidth = (obj, width, unit) => {
    var old_width = obj.style.minWidth;
    if (parseInt(old_width) < parseInt(width)) {
      obj.style.minWidth = width + unit;
    }
  }

  const masonrySetMinHeight = (obj, height) => {
    // console.log("h="+height);
    var old_height = parseInt(obj.style.minHeight);
    if (isNaN(old_height)) old_height = 0;
    // console.log(obj.style);
    // console.log("parent height="+parseInt(old_height));
    if (parseInt(old_height) < parseInt(height)) {
      obj.style.minHeight = height + 'px';
    }
  }

  const masonryGetCurrentOptions = () => {
    if (typeof window === `undefined`) return;
    for (var key in masonryOptions) {
      var el = masonryOptions[key];
      if (el.minWidth < window.innerWidth) {
        currentOptions = el;
      } else {
        break;
      }
    }
  }

  const masonryInit = (masonryParent) => {
    if (masonryParent == null) return;
    var children = masonryParent.children;
    if (children.length > 0) {
      masonryGetCurrentOptions();
      masonryParent.style.minHeight = '0px';
      var cols_offset = [],
        index = 0,
        i = 0;
      while (i < children.length) {
        index = i;
        var el = children[i];
        // console.log('============');
        // console.log(children);
        // console.log(currentOptions);
        if (typeof el == 'undefined') continue;
        // console.log(index);
        // console.log(cols_offset);
        if (index < currentOptions.colsCount) {
          el.style.width = currentOptions.colsWidth + currentOptions.unit;
          el.style.top = 'unset';
          el.style.left = index * (currentOptions.colsWidth + currentOptions.gapsWidth) + currentOptions.unit;
          // console.log(el);
          cols_offset[index] = el.offsetHeight;
          masonrySetMinWidth(masonryParent, (index + 1) * currentOptions.colsWidth + index * currentOptions.gapsWidth, currentOptions.unit);
          masonrySetMinHeight(masonryParent, cols_offset[index]);
        } else {
          // console.log(cols_offset);
          var min = Math.min(...cols_offset);
          // console.log('min='+min);
          index = cols_offset.indexOf(min);
          el.style.width = currentOptions.colsWidth + currentOptions.unit;
          el.style.top = cols_offset[index] + 'px';
          el.style.left = index * (currentOptions.colsWidth + currentOptions.gapsWidth) + currentOptions.unit;
          cols_offset[index] = cols_offset[index] + el.offsetHeight;
          masonrySetMinWidth(masonryParent, index * currentOptions.colsWidth + (index - 1) * currentOptions.gapsWidth, currentOptions.unit);
          masonrySetMinHeight(masonryParent, cols_offset[index]);
        }
        i++;
      };
    }
    onVoicesDisplayed();
  }

  const masonryRestart = () => {
    if (typeof window === `undefined`) return;
    timeouts.forEach(timeout => clearTimeout(timeout));
    const firstTimeout = setTimeout(function () {
      masonryInit(document.getElementById("masonry"));
      window.addEventListener('resize', () => {
        scrollService.saveScroll(); // Save scroll position
        masonryInit(document.getElementById("masonry"));
      }); // pass "this" as "navbar" parameter inside the function
    }, RENDER_TIMEOUT);
    timeouts.push(firstTimeout);
  }

  return (
    <div className="voices" id="voices">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-xs-12">
            <div className="header" dangerouslySetInnerHTML={{__html: options.voices_header}}></div>
            <div className="header-notice voices__notice" dangerouslySetInnerHTML={{__html: options.voices_intro}}></div>
            <div>
              <div className="masonry" id="masonry" style={{ minHeight: 0 }}>
                  {Object.entries(voices).map(([key, voice]) => {
                      return (
                          <Voice
                              voice={voice}
                              key={"voice_"+voice.wordpress_id}
                              i={key}
                          />
                      )
                  })}
              </div>
              <div className="voices__footer">
                <a 
                  className={"show-more voices__show-more " + ((loading || finished) && "d-none")}
                  onClick={loadVoices}
                  >
                  show more
                </a>
                <div className={"voices__loader " + ((!loading || finished) && "d-none")}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
