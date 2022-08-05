/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-styling */ "./src/js/form-styling.js");
/* harmony import */ var _custom_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-lightbox */ "./src/js/custom-lightbox.js");
/* harmony import */ var _suites_grid_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suites-grid-lightbox */ "./src/js/suites-grid-lightbox.js");
/* harmony import */ var _custom_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-slider */ "./src/js/custom-slider.js");





(function () {
  var pageIds = {
    suites: "342",
    home: '2',
    location: '302'
  };

  if (document.querySelector("body.page-id-".concat(pageIds.suites))) {
    var sgl = Object(_suites_grid_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"])();
    sgl.init();
  }

  if (document.querySelector("body.page-id-".concat(pageIds.home))) {
    var cs = Object(_custom_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
    cs.init(2);
  }

  if (document.querySelector("body.page-id-".concat(pageIds.location))) {
    var _cs = Object(_custom_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();

    _cs.init(4);
  }

  var fs = Object(_form_styling__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var cl = Object(_custom_lightbox__WEBPACK_IMPORTED_MODULE_1__["default"])();
  fs.init();
  cl.init();
  document.querySelectorAll('.register-link').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      launchLightbox();
    });
  });
  document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      dismissLightbox();
    });
  });

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');
    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    fs.closeDropdown();
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }

  console.log('Website development by vanessarusu.com');
})();

/***/ }),

/***/ "./src/js/custom-lightbox.js":
/*!***********************************!*\
  !*** ./src/js/custom-lightbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var customLightbox = function customLightbox() {
  function addEventListeners() {
    document.querySelectorAll('.register-link').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        launchLightbox();
      });
    });
    document.querySelectorAll('.lightbox-dismiss').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        dismissLightbox();
      });
    });
  }

  function launchLightbox() {
    var lightboxForm = document.querySelector('#lightboxForm');

    if (!lightboxForm) {
      return;
    }

    document.querySelector('body').classList.add('modal-open');
    lightboxForm.classList.add('lightbox-open');
    document.addEventListener("keyup", function (e) {
      if (e.key == 'Escape') {
        dismissLightbox();
      }
    });
    gsap.fromTo(lightboxForm, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.15
    });
  }

  function dismissLightbox() {
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('#lightboxForm').classList.remove('lightbox-open');
  }

  function init() {
    addEventListeners();
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (customLightbox);

/***/ }),

/***/ "./src/js/custom-slider.js":
/*!*********************************!*\
  !*** ./src/js/custom-slider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// this has been moved to be the inline callback function within the plugin settings
var customSlider = function customSlider() {
  function init(sliderID) {
    if (document.querySelector(".fl-builder-edit")) {
      return;
    }

    var targetNode = document.querySelector('.n2-section-smartslider');
    var config = {
      attributes: true,
      childList: true,
      subtree: true
    };

    var callback = function callback(mutationList, observer) {
      var _iterator = _createForOfIteratorHelper(mutationList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutation = _step.value;

          if (mutation.type === 'childList') {
            if (document.querySelector("#n2-ss-".concat(sliderID))) {
              n2ss.ready(sliderID, function (slider, sliderElement) {
                setTimeout(function () {
                  document.querySelector('.nextend-arrow-previous').insertAdjacentHTML('afterend', '<div class="slider-pagination"><span class="current-index"></span><span class="bullet">&bull;</span><span class="slide-length"></span><div>');
                  document.querySelector(".slide-length").innerHTML = slider.slides.length;
                  document.querySelector(".current-index").innerHTML = '1';
                  sliderElement.addEventListener('mainAnimationStart', function (e, animation, currentSlideIndex, nextSlideIndex) {
                    setTimeout(function () {
                      var index = slider.currentSlide.index + 1;
                      document.querySelector(".current-index").innerHTML = index;
                    }, 500);
                  });
                }, 0);
              });
              observer.disconnect();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (customSlider);

/***/ }),

/***/ "./src/js/form-styling.js":
/*!********************************!*\
  !*** ./src/js/form-styling.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var formStyling = function formStyling() {
  //     function dropdown() {
  //         var selectNodes = document.querySelectorAll('.wpforms-field-select select');
  //         for(var i = 0; i < selectNodes.length; i++) {
  //             // run for each select node
  //             var currentSelect = selectNodes[i];
  //             var liMarkup = '';
  //             var options = selectNodes[i].options;
  //             var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;
  //             for(var j = 0; j < options.length; j++) {
  //                 var item = '<li class="dropdown-item"><a href="#"data-dd="'+currentSelect.getAttribute("id")+'" data-value="'+options[j].getAttribute('value')+'">'+options[j].innerHTML+'</a></li>';
  //                 liMarkup += item;
  //             }
  //             var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">'+currentSelectionText+'</span><span class="arrow"></span></p><ul class="dd-container">'+liMarkup+'</ul></div>';
  //             selectNodes[i].insertAdjacentHTML('afterend', html); 
  //         }
  //         document.querySelectorAll('.custom-dropdown .selected-option').forEach(function(el) {
  //             el.addEventListener('click', openDropdown);
  //         })
  //         // click on dropdown element
  //         document.querySelectorAll('.dropdown-item a').forEach(function(el) {
  //             el.addEventListener('click', function(e) {
  //                 e.preventDefault();
  //                 var findSelect = this.getAttribute('data-dd');
  //                 var originalSelect = document.querySelector("#"+findSelect);
  //                 updateOriginalSelect(this, originalSelect);
  //                 updateLabel(this, originalSelect);
  //                 closeDropdown();
  //             })
  //         });        
  //     }
  //     function updateLabel(clickedEl, originalSelect) {
  //         var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
  //         labelTextNode.innerHTML = clickedEl.innerHTML;
  //     }
  //     function updateOriginalSelect(clickedEl, originalSelect) {
  //         for(var i = 0; i < originalSelect.options.length; i++) {
  //             if(originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
  //                 originalSelect.options[i].setAttribute('selected', true);
  //             }
  //             else {
  //                 originalSelect.options[i].removeAttribute('selected');
  //             }
  //         }
  //     }
  //     function closeDropdown() {
  //         document.querySelectorAll('ul.dd-container').forEach(function(el) {
  //             el.classList.add('dd-closed');
  //             el.classList.remove('dd-open');
  //         })
  //     }
  //     function openDropdown() {
  //         this.nextElementSibling.classList.add('dd-open');
  //     }
  //     function init() {
  //         dropdown();
  //     }
  //     return {
  //         init: init,
  //         closeDropdown: closeDropdown
  //     }
  // });
  function dropdown() {
    var selectNodes = document.querySelectorAll('select');

    if (!selectNodes.length) {
      return;
    }

    for (var i = 0; i < selectNodes.length; i++) {
      // run for each select node
      var currentSelect = selectNodes[i];
      var liMarkup = '';
      var options = selectNodes[i].options;
      var currentSelectionText = currentSelect.options[selectNodes[i].selectedIndex].text;

      if (currentSelect.options[selectNodes[i].selectedIndex].classList.contains('empty')) {
        currentSelectionText = '';
      }

      for (var j = 0; j < options.length; j++) {
        var addEmpyClass = options[j].className === 'empty' ? 'empty' : '';
        var item = '<li class="dropdown-item ' + addEmpyClass + '"><a tabindex="0" href="#"data-dd="' + currentSelect.getAttribute("id") + '" data-value="' + options[j].getAttribute('value') + '">' + options[j].innerHTML + '</a></li>';
        liMarkup += item;
      }

      var html = '<div class="custom-dropdown"><p class="selected-option"><span class="text">' + currentSelectionText + '</span><span class="arrow"></span></p><ul class="dd-container">' + liMarkup + '</ul></div>';
      selectNodes[i].insertAdjacentHTML('afterend', html);
    }

    document.querySelectorAll('.custom-dropdown .selected-option').forEach(function (el) {
      el.addEventListener('click', openDropdown);
    }); // click on dropdown element

    document.querySelectorAll('.dropdown-item a').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var findSelect = this.getAttribute('data-dd');
        var originalSelect = document.querySelector("#" + findSelect);
        updateOriginalSelect(this, originalSelect);
        updateLabel(this, originalSelect);
        closeDropdown();
      });
    });
  }

  function updateLabel(clickedEl, originalSelect) {
    var labelTextNode = originalSelect.nextElementSibling.querySelector('.selected-option .text');
    labelTextNode.innerHTML = clickedEl.innerHTML;
  }

  function updateOriginalSelect(clickedEl, originalSelect) {
    for (var i = 0; i < originalSelect.options.length; i++) {
      if (originalSelect.options[i].getAttribute('value') === clickedEl.getAttribute('data-value')) {
        originalSelect.options[i].setAttribute('selected', true);
      } else {
        originalSelect.options[i].removeAttribute('selected');
      }
    }
  }

  function closeDropdown() {
    document.querySelectorAll('ul.dd-container').forEach(function (el) {
      el.classList.add('dd-closed');
      el.classList.remove('dd-open');
      document.removeEventListener('click', checkForOutsideClick);
      var dds = document.querySelectorAll('.custom-dropdown .selected-option');

      for (var i = 0; i < dds.length; i++) {
        dds[i].removeEventListener('click', closeDropdown);
      }
    });
  }

  function openDropdown() {
    this.nextElementSibling.classList.add('dd-open');
    document.addEventListener('click', checkForOutsideClick);
    var dds = document.querySelectorAll('.custom-dropdown .selected-option');

    for (var i = 0; i < dds.length; i++) {
      dds[i].addEventListener('click', closeDropdown);
    }
  }

  function checkForOutsideClick(e) {
    if (document.querySelectorAll('ul.dd-container.dd-open')) {
      if (!(e.target.tagName == 'A' || e.target.tagName == 'SPAN' || e.target.tagName == 'P')) {
        closeDropdown();
      }
    }
  }

  return {
    init: dropdown,
    closeDropdown: closeDropdown
  };
};

/* harmony default export */ __webpack_exports__["default"] = (formStyling);

/***/ }),

/***/ "./src/js/suites-grid-lightbox.js":
/*!****************************************!*\
  !*** ./src/js/suites-grid-lightbox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var suitesGridLightbox = function suitesGridLightbox() {
  var gridItems = document.querySelectorAll("#esg-grid-3-1 li");
  var lightboxActive = false;
  var allLightboxPosts = [];
  var allFloorplans = getAllPosts();

  function configureClickEvent(item, index) {
    // var postID = item.getAttribute("id").split('-');
    var classes = Array.from(item.classList);
    var classID = Array.from(classes).filter(function (word) {
      return word.includes("eg-post-id-");
    });
    console.log(classID);
    var postID = classID[0].split('-');
    postID = postID[postID.length - 1];
    console.log(postID);
    setTimeout(function () {
      item.addEventListener("click", function () {
        console.log(allFloorplans);
        debugger;

        for (var i = 0; i < allFloorplans.length; i++) {
          console.log(allFloorplans[i].id);
          console.log(Number(postID));

          if (allFloorplans[i].id === Number(postID)) {
            createLightbox(allFloorplans[i]);
            console.log('match');
            return;
          }
        } // allFloorplans.forEach(item => {
        //     if (item.id == postID) {
        //         createLightbox(item);
        //     }
        //     else {
        //     }
        // });        

      });
    }, 2000);
  }

  ;

  function getAllPosts() {
    wp.api.loadPromise.done(function () {
      var post = new wp.api.models.Floorplans();
      return post.fetch({
        data: {
          per_page: 40
        }
      }).done(function (data) {
        console.log(data);
        return allFloorplans = data;
      });
    }); // var post = new wp.api.models.Floorplans();
    // return post.fetch({ data: { per_page: 40 } }).done((data) => {
    //     console.log(data); 
    //         return allFloorplans = data;
    // });
  }

  function createLightbox(post) {
    var body = document.querySelector("body");
    var content = post.id;
    var lightBoxImage = post.acf.floorplan_lightbox_image || null;
    var pdfDownload = post.acf.floorplan_pdf_download || null;
    var markup = "<div id=\"essentialGridCustomLightbox\" class=\"essential-grid-custom-modal\">\n                            <div class=\"content-container\">\n                                <div class=\"dismiss\">\n                                    <button><span></span><span></span></button>\n                                </div>\n                                <div class=\"image-container\">\n                                    <img src=\"".concat(lightBoxImage, "\" />\n                                </div>\n                                <div class=\"button-container\">\n                                    <a class=\"fl-button rounded-corners\" href=\"").concat(pdfDownload, "\" target=\"blank\">Download Suite PDF</a>\n                                </div>\n                            </div>\n                        </div>");
    body.insertAdjacentHTML('afterend', markup);
    body.classList.add('modal-open');
    document.querySelector(".dismiss button").addEventListener('click', dismissLightbox);
    window.addEventListener("keyup", keyboardDismissLightbox);
    return lightboxActive = true;
  }

  function dismissLightbox() {
    if (lightboxActive) {
      document.querySelector(".dismiss button").removeEventListener('click', dismissLightbox);
      var body = document.querySelector("body");
      document.querySelector("#essentialGridCustomLightbox").remove();
      body.classList.remove('modal-open');
      window.removeEventListener("keyup", keyboardDismissLightbox);
    }

    return lightboxActive = false;
  }

  function keyboardDismissLightbox(e) {
    if (e.keyCode == 27) {
      dismissLightbox();
    }
  }

  function init() {
    wp.api.loadPromise.done(function (data) {
      gridItems.forEach(configureClickEvent);
    });
  }

  return {
    init: init
  };
};

/* harmony default export */ __webpack_exports__["default"] = (suitesGridLightbox);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tLWxpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20tc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtLXN0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1aXRlcy1ncmlkLWxpZ2h0Ym94LmpzIl0sIm5hbWVzIjpbInBhZ2VJZHMiLCJzdWl0ZXMiLCJob21lIiwibG9jYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZ2wiLCJzdWl0ZXNHcmlkTGlnaHRib3giLCJpbml0IiwiY3MiLCJjdXN0b21TbGlkZXIiLCJmcyIsImZvcm1TdHlsaW5nIiwiY2wiLCJjdXN0b21MaWdodGJveCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGF1bmNoTGlnaHRib3giLCJkaXNtaXNzTGlnaHRib3giLCJsaWdodGJveEZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsInNsaWRlcklEIiwidGFyZ2V0Tm9kZSIsImNvbmZpZyIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY2FsbGJhY2siLCJtdXRhdGlvbkxpc3QiLCJvYnNlcnZlciIsIm11dGF0aW9uIiwidHlwZSIsIm4yc3MiLCJyZWFkeSIsInNsaWRlciIsInNsaWRlckVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5uZXJIVE1MIiwic2xpZGVzIiwibGVuZ3RoIiwiYW5pbWF0aW9uIiwiY3VycmVudFNsaWRlSW5kZXgiLCJuZXh0U2xpZGVJbmRleCIsImluZGV4IiwiY3VycmVudFNsaWRlIiwiZGlzY29ubmVjdCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImkiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnRhaW5zIiwiaiIsImFkZEVtcHlDbGFzcyIsImNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJodG1sIiwib3BlbkRyb3Bkb3duIiwiZmluZFNlbGVjdCIsIm9yaWdpbmFsU2VsZWN0IiwidXBkYXRlT3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVMYWJlbCIsImNsaWNrZWRFbCIsImxhYmVsVGV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tGb3JPdXRzaWRlQ2xpY2siLCJkZHMiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiZ3JpZEl0ZW1zIiwibGlnaHRib3hBY3RpdmUiLCJhbGxMaWdodGJveFBvc3RzIiwiYWxsRmxvb3JwbGFucyIsImdldEFsbFBvc3RzIiwiY29uZmlndXJlQ2xpY2tFdmVudCIsImNsYXNzZXMiLCJBcnJheSIsImZyb20iLCJjbGFzc0lEIiwiZmlsdGVyIiwid29yZCIsImluY2x1ZGVzIiwicG9zdElEIiwic3BsaXQiLCJpZCIsIk51bWJlciIsImNyZWF0ZUxpZ2h0Ym94Iiwid3AiLCJhcGkiLCJsb2FkUHJvbWlzZSIsImRvbmUiLCJwb3N0IiwibW9kZWxzIiwiRmxvb3JwbGFucyIsImZldGNoIiwiZGF0YSIsInBlcl9wYWdlIiwiYm9keSIsImNvbnRlbnQiLCJsaWdodEJveEltYWdlIiwiYWNmIiwiZmxvb3JwbGFuX2xpZ2h0Ym94X2ltYWdlIiwicGRmRG93bmxvYWQiLCJmbG9vcnBsYW5fcGRmX2Rvd25sb2FkIiwibWFya3VwIiwid2luZG93Iiwia2V5Ym9hcmREaXNtaXNzTGlnaHRib3giLCJrZXlDb2RlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQyxhQUFXO0VBRVIsSUFBSUEsT0FBTyxHQUFHO0lBQ1ZDLE1BQU0sRUFBRSxLQURFO0lBRVZDLElBQUksRUFBRSxHQUZJO0lBR1ZDLFFBQVEsRUFBRTtFQUhBLENBQWQ7O0VBTUEsSUFBR0MsUUFBUSxDQUFDQyxhQUFULHdCQUF1Q0wsT0FBTyxDQUFDQyxNQUEvQyxFQUFILEVBQTZEO0lBQ3pELElBQU1LLEdBQUcsR0FBR0MscUVBQWtCLEVBQTlCO0lBQ0FELEdBQUcsQ0FBQ0UsSUFBSjtFQUNIOztFQUVELElBQUdKLFFBQVEsQ0FBQ0MsYUFBVCx3QkFBdUNMLE9BQU8sQ0FBQ0UsSUFBL0MsRUFBSCxFQUEyRDtJQUN2RCxJQUFNTyxFQUFFLEdBQUdDLDhEQUFZLEVBQXZCO0lBQ0FELEVBQUUsQ0FBQ0QsSUFBSCxDQUFRLENBQVI7RUFDSDs7RUFFRCxJQUFHSixRQUFRLENBQUNDLGFBQVQsd0JBQXVDTCxPQUFPLENBQUNHLFFBQS9DLEVBQUgsRUFBK0Q7SUFDM0QsSUFBTU0sR0FBRSxHQUFHQyw4REFBWSxFQUF2Qjs7SUFDQUQsR0FBRSxDQUFDRCxJQUFILENBQVEsQ0FBUjtFQUNIOztFQUVELElBQU1HLEVBQUUsR0FBR0MsNkRBQVcsRUFBdEI7RUFDQSxJQUFNQyxFQUFFLEdBQUdDLGdFQUFjLEVBQXpCO0VBRUFILEVBQUUsQ0FBQ0gsSUFBSDtFQUNBSyxFQUFFLENBQUNMLElBQUg7RUFFQUosUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNENDLE9BQTVDLENBQW9ELFVBQVNDLEVBQVQsRUFBYTtJQUM3REEsRUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFTQyxDQUFULEVBQVk7TUFDckNBLENBQUMsQ0FBQ0MsY0FBRjtNQUNBQyxjQUFjO0lBQ2pCLENBSEQ7RUFJSCxDQUxEO0VBT0FqQixRQUFRLENBQUNXLGdCQUFULENBQTBCLG1CQUExQixFQUErQ0MsT0FBL0MsQ0FBdUQsVUFBU0MsRUFBVCxFQUFhO0lBQ2hFQSxFQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQVNDLENBQVQsRUFBWTtNQUNyQ0EsQ0FBQyxDQUFDQyxjQUFGO01BQ0FFLGVBQWU7SUFDbEIsQ0FIRDtFQUlILENBTEQ7O0VBT0EsU0FBU0QsY0FBVCxHQUEwQjtJQUN0QixJQUFJRSxZQUFZLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7SUFDQUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCbUIsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLFlBQTdDO0lBQ0FGLFlBQVksQ0FBQ0MsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsZUFBM0I7SUFFQXJCLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO01BQzNDLElBQUdBLENBQUMsQ0FBQ08sR0FBRixJQUFTLFFBQVosRUFBc0I7UUFDbEJKLGVBQWU7TUFDbEI7SUFDSixDQUpEO0lBTUFLLElBQUksQ0FBQ0MsTUFBTCxDQUFZTCxZQUFaLEVBQTBCO01BQ3RCTSxPQUFPLEVBQUU7SUFEYSxDQUExQixFQUdBO01BQ0lBLE9BQU8sRUFBRSxDQURiO01BRUlDLFFBQVEsRUFBRTtJQUZkLENBSEE7RUFPSDs7RUFFRCxTQUFTUixlQUFULEdBQTJCO0lBQ3ZCWCxFQUFFLENBQUNvQixhQUFIO0lBQ0EzQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JtQixTQUEvQixDQUF5Q1EsTUFBekMsQ0FBZ0QsWUFBaEQ7SUFDQTVCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q21CLFNBQXhDLENBQWtEUSxNQUFsRCxDQUF5RCxlQUF6RDtFQUNIOztFQUNEQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBWjtBQUNILENBckVBLEdBQUQsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQSxJQUFNcEIsY0FBYyxHQUFJLFNBQWxCQSxjQUFrQixHQUFXO0VBRS9CLFNBQVNxQixpQkFBVCxHQUE2QjtJQUN6Qi9CLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsZ0JBQTFCLEVBQTRDQyxPQUE1QyxDQUFvRCxVQUFTQyxFQUFULEVBQWE7TUFDN0RBLEVBQUUsQ0FBQ0MsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBU0MsQ0FBVCxFQUFZO1FBRXJDQSxDQUFDLENBQUNDLGNBQUY7UUFDQUMsY0FBYztNQUNqQixDQUpEO0lBS0gsQ0FORDtJQVFBakIsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixtQkFBMUIsRUFBK0NDLE9BQS9DLENBQXVELFVBQVNDLEVBQVQsRUFBYTtNQUNoRUEsRUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFTQyxDQUFULEVBQVk7UUFDckNBLENBQUMsQ0FBQ0MsY0FBRjtRQUNBRSxlQUFlO01BQ2xCLENBSEQ7SUFJSCxDQUxEO0VBTUg7O0VBRUQsU0FBU0QsY0FBVCxHQUEwQjtJQUN0QixJQUFJRSxZQUFZLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7O0lBRUEsSUFBRyxDQUFDa0IsWUFBSixFQUFrQjtNQUNkO0lBQ0g7O0lBRURuQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JtQixTQUEvQixDQUF5Q0MsR0FBekMsQ0FBNkMsWUFBN0M7SUFDQUYsWUFBWSxDQUFDQyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixlQUEzQjtJQUVBckIsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFTQyxDQUFULEVBQVk7TUFDM0MsSUFBR0EsQ0FBQyxDQUFDTyxHQUFGLElBQVMsUUFBWixFQUFzQjtRQUNsQkosZUFBZTtNQUNsQjtJQUNKLENBSkQ7SUFNQUssSUFBSSxDQUFDQyxNQUFMLENBQVlMLFlBQVosRUFBMEI7TUFDdEJNLE9BQU8sRUFBRTtJQURhLENBQTFCLEVBR0E7TUFDSUEsT0FBTyxFQUFFLENBRGI7TUFFSUMsUUFBUSxFQUFFO0lBRmQsQ0FIQTtFQU9IOztFQUVELFNBQVNSLGVBQVQsR0FBMkI7SUFDdkJsQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JtQixTQUEvQixDQUF5Q1EsTUFBekMsQ0FBZ0QsWUFBaEQ7SUFDQTVCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q21CLFNBQXhDLENBQWtEUSxNQUFsRCxDQUF5RCxlQUF6RDtFQUNIOztFQUVELFNBQVN4QixJQUFULEdBQWdCO0lBQ1oyQixpQkFBaUI7RUFDcEI7O0VBRUQsT0FBTztJQUNIM0IsSUFBSSxFQUFFQTtFQURILENBQVA7QUFHSCxDQXhERDs7QUEwRGVNLDZFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREk7QUFFSixJQUFNSixZQUFZLEdBQUksU0FBaEJBLFlBQWdCLEdBQVk7RUFFOUIsU0FBU0YsSUFBVCxDQUFjNEIsUUFBZCxFQUF3QjtJQUNwQixJQUFHaEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFILEVBQStDO01BQzNDO0lBQ0g7O0lBRUQsSUFBTWdDLFVBQVUsR0FBR2pDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBbkI7SUFDQSxJQUFNaUMsTUFBTSxHQUFHO01BQUVDLFVBQVUsRUFBRSxJQUFkO01BQW9CQyxTQUFTLEVBQUUsSUFBL0I7TUFBcUNDLE9BQU8sRUFBRTtJQUE5QyxDQUFmOztJQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNDLFlBQVQsRUFBdUJDLFFBQXZCLEVBQWlDO01BQUEsMkNBQ3ZCRCxZQUR1QjtNQUFBOztNQUFBO1FBQzlDLG9EQUFxQztVQUFBLElBQTFCRSxRQUEwQjs7VUFDakMsSUFBSUEsUUFBUSxDQUFDQyxJQUFULEtBQWtCLFdBQXRCLEVBQW1DO1lBRS9CLElBQUcxQyxRQUFRLENBQUNDLGFBQVQsa0JBQWlDK0IsUUFBakMsRUFBSCxFQUFpRDtjQUM3Q1csSUFBSSxDQUFDQyxLQUFMLENBQVdaLFFBQVgsRUFBcUIsVUFBU2EsTUFBVCxFQUFpQkMsYUFBakIsRUFBZ0M7Z0JBQ2pEQyxVQUFVLENBQUMsWUFBVztrQkFDdEIvQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLEVBQWtEK0Msa0JBQWxELENBQXFFLFVBQXJFLEVBQWdGLDZJQUFoRjtrQkFDQWhELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixFQUF3Q2dELFNBQXhDLEdBQW9ESixNQUFNLENBQUNLLE1BQVAsQ0FBY0MsTUFBbEU7a0JBQ0FuRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDZ0QsU0FBekMsR0FBcUQsR0FBckQ7a0JBQ0FILGFBQWEsQ0FBQ2hDLGdCQUFkLENBQStCLG9CQUEvQixFQUNBLFVBQVNDLENBQVQsRUFBWXFDLFNBQVosRUFBdUJDLGlCQUF2QixFQUEwQ0MsY0FBMUMsRUFBMEQ7b0JBQ3REUCxVQUFVLENBQUMsWUFBVztzQkFDbEIsSUFBSVEsS0FBSyxHQUFHVixNQUFNLENBQUNXLFlBQVAsQ0FBb0JELEtBQXBCLEdBQTBCLENBQXRDO3NCQUNBdkQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q2dELFNBQXpDLEdBQXFETSxLQUFyRDtvQkFDSCxDQUhTLEVBR1AsR0FITyxDQUFWO2tCQUlILENBTkQ7Z0JBT0gsQ0FYYSxFQVdYLENBWFcsQ0FBVjtjQVlILENBYkQ7Y0FlQWYsUUFBUSxDQUFDaUIsVUFBVDtZQUNIO1VBQ0o7UUFDSjtNQXZCNkM7UUFBQTtNQUFBO1FBQUE7TUFBQTtJQXdCakQsQ0F4QkQ7O0lBMEJBLElBQU1qQixRQUFRLEdBQUcsSUFBSWtCLGdCQUFKLENBQXFCcEIsUUFBckIsQ0FBakI7SUFFQUUsUUFBUSxDQUFDbUIsT0FBVCxDQUFpQjFCLFVBQWpCLEVBQTZCQyxNQUE3QjtFQUNIOztFQUVELE9BQU87SUFDSDlCLElBQUksRUFBRUE7RUFESCxDQUFQO0FBR0gsQ0E1Q0Q7O0FBOENlRSwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoREE7QUFBQSxJQUFNRSxXQUFXLEdBQUksU0FBZkEsV0FBZSxHQUFZO0VBRWpDO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBTUEsU0FBU29ELFFBQVQsR0FBb0I7SUFDaEIsSUFBSUMsV0FBVyxHQUFHN0QsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixRQUExQixDQUFsQjs7SUFFQSxJQUFHLENBQUNrRCxXQUFXLENBQUNWLE1BQWhCLEVBQXdCO01BQ3BCO0lBQ0g7O0lBRUQsS0FBSSxJQUFJVyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdELFdBQVcsQ0FBQ1YsTUFBL0IsRUFBdUNXLENBQUMsRUFBeEMsRUFBNEM7TUFDeEM7TUFDQSxJQUFJQyxhQUFhLEdBQUdGLFdBQVcsQ0FBQ0MsQ0FBRCxDQUEvQjtNQUNBLElBQUlFLFFBQVEsR0FBRyxFQUFmO01BQ0EsSUFBSUMsT0FBTyxHQUFHSixXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlRyxPQUE3QjtNQUNBLElBQUlDLG9CQUFvQixHQUFHSCxhQUFhLENBQUNFLE9BQWQsQ0FBc0JKLFdBQVcsQ0FBQ0MsQ0FBRCxDQUFYLENBQWVLLGFBQXJDLEVBQW9EQyxJQUEvRTs7TUFFQSxJQUFHTCxhQUFhLENBQUNFLE9BQWQsQ0FBc0JKLFdBQVcsQ0FBQ0MsQ0FBRCxDQUFYLENBQWVLLGFBQXJDLEVBQW9EL0MsU0FBcEQsQ0FBOERpRCxRQUE5RCxDQUF1RSxPQUF2RSxDQUFILEVBQW9GO1FBQ2hGSCxvQkFBb0IsR0FBRyxFQUF2QjtNQUNQOztNQUVHLEtBQUksSUFBSUksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHTCxPQUFPLENBQUNkLE1BQTNCLEVBQW1DbUIsQ0FBQyxFQUFwQyxFQUF3QztRQUNwQyxJQUFJQyxZQUFZLEdBQUdOLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFQLENBQVdFLFNBQVgsS0FBeUIsT0FBekIsR0FBbUMsT0FBbkMsR0FBNkMsRUFBaEU7UUFDQSxJQUFJQyxJQUFJLEdBQUcsOEJBQTZCRixZQUE3QixHQUEyQyxxQ0FBM0MsR0FBaUZSLGFBQWEsQ0FBQ1csWUFBZCxDQUEyQixJQUEzQixDQUFqRixHQUFrSCxnQkFBbEgsR0FBbUlULE9BQU8sQ0FBQ0ssQ0FBRCxDQUFQLENBQVdJLFlBQVgsQ0FBd0IsT0FBeEIsQ0FBbkksR0FBb0ssSUFBcEssR0FBeUtULE9BQU8sQ0FBQ0ssQ0FBRCxDQUFQLENBQVdyQixTQUFwTCxHQUE4TCxXQUF6TTtRQUNBZSxRQUFRLElBQUlTLElBQVo7TUFDSDs7TUFFRCxJQUFJRSxJQUFJLEdBQUcsZ0ZBQThFVCxvQkFBOUUsR0FBbUcsaUVBQW5HLEdBQXFLRixRQUFySyxHQUE4SyxhQUF6TDtNQUNBSCxXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlZCxrQkFBZixDQUFrQyxVQUFsQyxFQUE4QzJCLElBQTlDO0lBQ0g7O0lBRUQzRSxRQUFRLENBQUNXLGdCQUFULENBQTBCLG1DQUExQixFQUErREMsT0FBL0QsQ0FBdUUsVUFBU0MsRUFBVCxFQUFhO01BQ2hGQSxFQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCOEQsWUFBN0I7SUFDSCxDQUZELEVBNUJnQixDQWdDaEI7O0lBQ0E1RSxRQUFRLENBQUNXLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q0MsT0FBOUMsQ0FBc0QsVUFBU0MsRUFBVCxFQUFhO01BRS9EQSxFQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQVNDLENBQVQsRUFBWTtRQUNyQ0EsQ0FBQyxDQUFDQyxjQUFGO1FBQ0EsSUFBSTZELFVBQVUsR0FBRyxLQUFLSCxZQUFMLENBQWtCLFNBQWxCLENBQWpCO1FBQ0EsSUFBSUksY0FBYyxHQUFHOUUsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQUk0RSxVQUEzQixDQUFyQjtRQUNBRSxvQkFBb0IsQ0FBQyxJQUFELEVBQU9ELGNBQVAsQ0FBcEI7UUFDQUUsV0FBVyxDQUFDLElBQUQsRUFBT0YsY0FBUCxDQUFYO1FBQ0FuRCxhQUFhO01BQ2hCLENBUEQ7SUFRSCxDQVZEO0VBV0g7O0VBRUQsU0FBU3FELFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDSCxjQUFoQyxFQUFnRDtJQUM1QyxJQUFJSSxhQUFhLEdBQUdKLGNBQWMsQ0FBQ0ssa0JBQWYsQ0FBa0NsRixhQUFsQyxDQUFnRCx3QkFBaEQsQ0FBcEI7SUFDQWlGLGFBQWEsQ0FBQ2pDLFNBQWQsR0FBMEJnQyxTQUFTLENBQUNoQyxTQUFwQztFQUNIOztFQUVELFNBQVM4QixvQkFBVCxDQUE4QkUsU0FBOUIsRUFBeUNILGNBQXpDLEVBQXlEO0lBQ3JELEtBQUksSUFBSWhCLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2dCLGNBQWMsQ0FBQ2IsT0FBZixDQUF1QmQsTUFBMUMsRUFBa0RXLENBQUMsRUFBbkQsRUFBdUQ7TUFDbkQsSUFBR2dCLGNBQWMsQ0FBQ2IsT0FBZixDQUF1QkgsQ0FBdkIsRUFBMEJZLFlBQTFCLENBQXVDLE9BQXZDLE1BQW9ETyxTQUFTLENBQUNQLFlBQVYsQ0FBdUIsWUFBdkIsQ0FBdkQsRUFBNkY7UUFDekZJLGNBQWMsQ0FBQ2IsT0FBZixDQUF1QkgsQ0FBdkIsRUFBMEJzQixZQUExQixDQUF1QyxVQUF2QyxFQUFtRCxJQUFuRDtNQUNILENBRkQsTUFHSztRQUNETixjQUFjLENBQUNiLE9BQWYsQ0FBdUJILENBQXZCLEVBQTBCdUIsZUFBMUIsQ0FBMEMsVUFBMUM7TUFDSDtJQUNKO0VBQ0o7O0VBRUQsU0FBUzFELGFBQVQsR0FBeUI7SUFDckIzQixRQUFRLENBQUNXLGdCQUFULENBQTBCLGlCQUExQixFQUE2Q0MsT0FBN0MsQ0FBcUQsVUFBU0MsRUFBVCxFQUFhO01BQzlEQSxFQUFFLENBQUNPLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixXQUFqQjtNQUNBUixFQUFFLENBQUNPLFNBQUgsQ0FBYVEsTUFBYixDQUFvQixTQUFwQjtNQUNBNUIsUUFBUSxDQUFDc0YsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0NDLG9CQUF0QztNQUNBLElBQUlDLEdBQUcsR0FBR3hGLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsbUNBQTFCLENBQVY7O01BQ0EsS0FBSSxJQUFJbUQsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFHMEIsR0FBRyxDQUFDckMsTUFBckIsRUFBNkJXLENBQUMsRUFBOUIsRUFBa0M7UUFDOUIwQixHQUFHLENBQUMxQixDQUFELENBQUgsQ0FBT3dCLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DM0QsYUFBcEM7TUFDSDtJQUNKLENBUkQ7RUFTSDs7RUFFRCxTQUFTaUQsWUFBVCxHQUF3QjtJQUNwQixLQUFLTyxrQkFBTCxDQUF3Qi9ELFNBQXhCLENBQWtDQyxHQUFsQyxDQUFzQyxTQUF0QztJQUNBckIsUUFBUSxDQUFDYyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ3lFLG9CQUFuQztJQUNBLElBQUlDLEdBQUcsR0FBR3hGLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsbUNBQTFCLENBQVY7O0lBQ0ksS0FBSSxJQUFJbUQsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFHMEIsR0FBRyxDQUFDckMsTUFBckIsRUFBNkJXLENBQUMsRUFBOUIsRUFBa0M7TUFDOUIwQixHQUFHLENBQUMxQixDQUFELENBQUgsQ0FBT2hELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDYSxhQUFqQztJQUNIO0VBQ1I7O0VBRUQsU0FBUzRELG9CQUFULENBQThCeEUsQ0FBOUIsRUFBaUM7SUFDN0IsSUFBR2YsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQix5QkFBMUIsQ0FBSCxFQUF5RDtNQUNyRCxJQUFHLEVBQUVJLENBQUMsQ0FBQzBFLE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixHQUFuQixJQUEwQjNFLENBQUMsQ0FBQzBFLE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixNQUE3QyxJQUF1RDNFLENBQUMsQ0FBQzBFLE1BQUYsQ0FBU0MsT0FBVCxJQUFtQixHQUE1RSxDQUFILEVBQXFGO1FBQ2pGL0QsYUFBYTtNQUNoQjtJQUNKO0VBQ0o7O0VBRUQsT0FBTztJQUNIdkIsSUFBSSxFQUFFd0QsUUFESDtJQUVIakMsYUFBYSxFQUFFQTtFQUZaLENBQVA7QUFJQyxDQTlLRDs7QUFnTGVuQiwwRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoTEE7QUFBQSxJQUFNTCxrQkFBa0IsR0FBSSxTQUF0QkEsa0JBQXNCLEdBQVk7RUFLcEMsSUFBSXdGLFNBQVMsR0FBRzNGLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWhCO0VBQ0EsSUFBSWlGLGNBQWMsR0FBRyxLQUFyQjtFQUNBLElBQUlDLGdCQUFnQixHQUFHLEVBQXZCO0VBQ0EsSUFBSUMsYUFBYSxHQUFHQyxXQUFXLEVBQS9COztFQVFBLFNBQVNDLG1CQUFULENBQTZCdkIsSUFBN0IsRUFBbUNsQixLQUFuQyxFQUEwQztJQUN0QztJQUVBLElBQUkwQyxPQUFPLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXMUIsSUFBSSxDQUFDckQsU0FBaEIsQ0FBZDtJQUNBLElBQUlnRixPQUFPLEdBQUdGLEtBQUssQ0FBQ0MsSUFBTixDQUFXRixPQUFYLEVBQW9CSSxNQUFwQixDQUEyQixVQUFBQyxJQUFJO01BQUEsT0FBSUEsSUFBSSxDQUFDQyxRQUFMLENBQWMsYUFBZCxDQUFKO0lBQUEsQ0FBL0IsQ0FBZDtJQUNBMUUsT0FBTyxDQUFDQyxHQUFSLENBQVlzRSxPQUFaO0lBQ0EsSUFBSUksTUFBTSxHQUFHSixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLEtBQVgsQ0FBaUIsR0FBakIsQ0FBYjtJQUNBRCxNQUFNLEdBQUdBLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDckQsTUFBUCxHQUFjLENBQWYsQ0FBZjtJQUNBdEIsT0FBTyxDQUFDQyxHQUFSLENBQVkwRSxNQUFaO0lBQ0F6RCxVQUFVLENBQUMsWUFBVTtNQUNqQjBCLElBQUksQ0FBQzNELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7UUFDdENlLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0UsYUFBWjtRQUNBOztRQUNBLEtBQUssSUFBSWhDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBR2dDLGFBQWEsQ0FBQzNDLE1BQWhDLEVBQXdDVyxDQUFDLEVBQXpDLEVBQTZDO1VBQ3pDakMsT0FBTyxDQUFDQyxHQUFSLENBQVlnRSxhQUFhLENBQUNoQyxDQUFELENBQWIsQ0FBaUI0QyxFQUE3QjtVQUNBN0UsT0FBTyxDQUFDQyxHQUFSLENBQVk2RSxNQUFNLENBQUNILE1BQUQsQ0FBbEI7O1VBQ0EsSUFBR1YsYUFBYSxDQUFDaEMsQ0FBRCxDQUFiLENBQWlCNEMsRUFBakIsS0FBd0JDLE1BQU0sQ0FBQ0gsTUFBRCxDQUFqQyxFQUEyQztZQUN2Q0ksY0FBYyxDQUFDZCxhQUFhLENBQUNoQyxDQUFELENBQWQsQ0FBZDtZQUNBakMsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtZQUNBO1VBRUg7UUFDSixDQVpxQyxDQWF0QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7TUFDSCxDQXBCRDtJQXNCSCxDQXZCUyxFQXVCUCxJQXZCTyxDQUFWO0VBMEJIOztFQUFBOztFQUdELFNBQVNpRSxXQUFULEdBQXVCO0lBRW5CYyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsV0FBUCxDQUFtQkMsSUFBbkIsQ0FBeUIsWUFBVztNQUVoQyxJQUFJQyxJQUFJLEdBQUcsSUFBSUosRUFBRSxDQUFDQyxHQUFILENBQU9JLE1BQVAsQ0FBY0MsVUFBbEIsRUFBWDtNQUVBLE9BQU9GLElBQUksQ0FBQ0csS0FBTCxDQUFXO1FBQUVDLElBQUksRUFBRTtVQUFFQyxRQUFRLEVBQUU7UUFBWjtNQUFSLENBQVgsRUFBdUNOLElBQXZDLENBQTRDLFVBQUNLLElBQUQsRUFBVTtRQUN6RHhGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdUYsSUFBWjtRQUNJLE9BQU92QixhQUFhLEdBQUd1QixJQUF2QjtNQUNQLENBSE0sQ0FBUDtJQU1ILENBVkQsRUFGbUIsQ0FlbkI7SUFFQTtJQUNBO0lBQ0E7SUFDQTtFQUNIOztFQUVELFNBQVNULGNBQVQsQ0FBd0JLLElBQXhCLEVBQThCO0lBRXRCLElBQUlNLElBQUksR0FBR3ZILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0lBQ0EsSUFBSXVILE9BQU8sR0FBR1AsSUFBSSxDQUFDUCxFQUFuQjtJQUNBLElBQUllLGFBQWEsR0FBR1IsSUFBSSxDQUFDUyxHQUFMLENBQVNDLHdCQUFULElBQXFDLElBQXpEO0lBQ0EsSUFBSUMsV0FBVyxHQUFHWCxJQUFJLENBQUNTLEdBQUwsQ0FBU0csc0JBQVQsSUFBbUMsSUFBckQ7SUFFQSxJQUFJQyxNQUFNLDhiQU0wQkwsYUFOMUIsZ05BUzJERyxXQVQzRCwySkFBVjtJQWFBTCxJQUFJLENBQUN2RSxrQkFBTCxDQUF3QixVQUF4QixFQUFvQzhFLE1BQXBDO0lBQ0FQLElBQUksQ0FBQ25HLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixZQUFuQjtJQUNBckIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ2EsZ0JBQTFDLENBQTJELE9BQTNELEVBQW9FSSxlQUFwRTtJQUNBNkcsTUFBTSxDQUFDakgsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNrSCx1QkFBakM7SUFDQSxPQUFPcEMsY0FBYyxHQUFHLElBQXhCO0VBQ1A7O0VBRUQsU0FBUzFFLGVBQVQsR0FBMkI7SUFDdkIsSUFBRzBFLGNBQUgsRUFBbUI7TUFDZjVGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsRUFBMENxRixtQkFBMUMsQ0FBOEQsT0FBOUQsRUFBdUVwRSxlQUF2RTtNQUNBLElBQUlxRyxJQUFJLEdBQUd2SCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtNQUNBRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsOEJBQXZCLEVBQXVEMkIsTUFBdkQ7TUFDQTJGLElBQUksQ0FBQ25HLFNBQUwsQ0FBZVEsTUFBZixDQUFzQixZQUF0QjtNQUNBbUcsTUFBTSxDQUFDekMsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0MwQyx1QkFBcEM7SUFDSDs7SUFDRCxPQUFPcEMsY0FBYyxHQUFHLEtBQXhCO0VBQ0g7O0VBRUQsU0FBU29DLHVCQUFULENBQWlDakgsQ0FBakMsRUFBb0M7SUFDaEMsSUFBR0EsQ0FBQyxDQUFDa0gsT0FBRixJQUFhLEVBQWhCLEVBQW9CO01BQ2hCL0csZUFBZTtJQUNsQjtFQUNKOztFQUVELFNBQVNkLElBQVQsR0FBZ0I7SUFDWnlHLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxXQUFQLENBQW1CQyxJQUFuQixDQUF5QixVQUFTSyxJQUFULEVBQWU7TUFDcEMxQixTQUFTLENBQUMvRSxPQUFWLENBQWtCb0YsbUJBQWxCO0lBRUgsQ0FIRDtFQUlIOztFQUVELE9BQU87SUFDSDVGLElBQUksRUFBRUE7RUFESCxDQUFQO0FBR0gsQ0FuSUQ7O0FBcUllRCxpRkFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBmb3JtU3R5bGluZyBmcm9tICcuL2Zvcm0tc3R5bGluZyc7XG5pbXBvcnQgY3VzdG9tTGlnaHRib3ggZnJvbSBcIi4vY3VzdG9tLWxpZ2h0Ym94XCI7XG5cbmltcG9ydCBzdWl0ZXNHcmlkTGlnaHRib3ggZnJvbSAnLi9zdWl0ZXMtZ3JpZC1saWdodGJveCc7XG5pbXBvcnQgY3VzdG9tU2xpZGVyIGZyb20gJy4vY3VzdG9tLXNsaWRlcic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBwYWdlSWRzID0ge1xuICAgICAgICBzdWl0ZXM6IFwiMzQyXCIsXG4gICAgICAgIGhvbWU6ICcyJyxcbiAgICAgICAgbG9jYXRpb246ICczMDInXG4gICAgfVxuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5zdWl0ZXN9YCkpIHtcbiAgICAgICAgY29uc3Qgc2dsID0gc3VpdGVzR3JpZExpZ2h0Ym94KCk7XG4gICAgICAgIHNnbC5pbml0KCk7XG4gICAgfVxuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5ob21lfWApKSB7XG4gICAgICAgIGNvbnN0IGNzID0gY3VzdG9tU2xpZGVyKCk7XG4gICAgICAgIGNzLmluaXQoMik7XG4gICAgfVxuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5sb2NhdGlvbn1gKSkge1xuICAgICAgICBjb25zdCBjcyA9IGN1c3RvbVNsaWRlcigpO1xuICAgICAgICBjcy5pbml0KDQpO1xuICAgIH1cblxuICAgIGNvbnN0IGZzID0gZm9ybVN0eWxpbmcoKTtcbiAgICBjb25zdCBjbCA9IGN1c3RvbUxpZ2h0Ym94KCk7XG5cbiAgICBmcy5pbml0KCk7XG4gICAgY2wuaW5pdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLWxpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGF1bmNoTGlnaHRib3goKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHRib3gtZGlzbWlzcycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBsYXVuY2hMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIGxpZ2h0Ym94Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgbGlnaHRib3hGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihlLmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBnc2FwLmZyb21UbyhsaWdodGJveEZvcm0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4xNVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzTGlnaHRib3goKSB7XG4gICAgICAgIGZzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1dlYnNpdGUgZGV2ZWxvcG1lbnQgYnkgdmFuZXNzYXJ1c3UuY29tJylcbn1cblxuKCkpO1xuIiwiY29uc3QgY3VzdG9tTGlnaHRib3ggPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLWxpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGF1bmNoTGlnaHRib3goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Ym94LWRpc21pc3MnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF1bmNoTGlnaHRib3goKSB7XG4gICAgICAgIHZhciBsaWdodGJveEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBpZighbGlnaHRib3hGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICBsaWdodGJveEZvcm0uY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3BlbicpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tTGlnaHRib3g7IiwiICAgIC8vIHRoaXMgaGFzIGJlZW4gbW92ZWQgdG8gYmUgdGhlIGlubGluZSBjYWxsYmFjayBmdW5jdGlvbiB3aXRoaW4gdGhlIHBsdWdpbiBzZXR0aW5nc1xuXG5jb25zdCBjdXN0b21TbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIGZ1bmN0aW9uIGluaXQoc2xpZGVySUQpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbC1idWlsZGVyLWVkaXRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubjItc2VjdGlvbi1zbWFydHNsaWRlcicpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24obXV0YXRpb25MaXN0LCBvYnNlcnZlcikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbjItc3MtJHtzbGlkZXJJRH1gKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbjJzcy5yZWFkeShzbGlkZXJJRCwgZnVuY3Rpb24oc2xpZGVyLCBzbGlkZXJFbGVtZW50KSB7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0ZW5kLWFycm93LXByZXZpb3VzJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsJzxkaXYgY2xhc3M9XCJzbGlkZXItcGFnaW5hdGlvblwiPjxzcGFuIGNsYXNzPVwiY3VycmVudC1pbmRleFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImJ1bGxldFwiPiZidWxsOzwvc3Bhbj48c3BhbiBjbGFzcz1cInNsaWRlLWxlbmd0aFwiPjwvc3Bhbj48ZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtbGVuZ3RoXCIpLmlubmVySFRNTCA9IHNsaWRlci5zbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1pbmRleFwiKS5pbm5lckhUTUwgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtYWluQW5pbWF0aW9uU3RhcnQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlLCBhbmltYXRpb24sIGN1cnJlbnRTbGlkZUluZGV4LCBuZXh0U2xpZGVJbmRleCkgeyAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzbGlkZXIuY3VycmVudFNsaWRlLmluZGV4KzE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtaW5kZXhcIikuaW5uZXJIVE1MID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tU2xpZGVyOyIsImNvbnN0IGZvcm1TdHlsaW5nID0gKGZ1bmN0aW9uICgpIHtcblxuLy8gICAgIGZ1bmN0aW9uIGRyb3Bkb3duKCkge1xuLy8gICAgICAgICB2YXIgc2VsZWN0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3Bmb3Jtcy1maWVsZC1zZWxlY3Qgc2VsZWN0Jyk7XG4gICAgICAgIFxuLy8gICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZWN0Tm9kZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIC8vIHJ1biBmb3IgZWFjaCBzZWxlY3Qgbm9kZVxuLy8gICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3ROb2Rlc1tpXTtcbi8vICAgICAgICAgICAgIHZhciBsaU1hcmt1cCA9ICcnO1xuLy8gICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzZWxlY3ROb2Rlc1tpXS5vcHRpb25zO1xuLy8gICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbi8vICAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxhIGhyZWY9XCIjXCJkYXRhLWRkPVwiJytjdXJyZW50U2VsZWN0LmdldEF0dHJpYnV0ZShcImlkXCIpKydcIiBkYXRhLXZhbHVlPVwiJytvcHRpb25zW2pdLmdldEF0dHJpYnV0ZSgndmFsdWUnKSsnXCI+JytvcHRpb25zW2pdLmlubmVySFRNTCsnPC9hPjwvbGk+Jztcbi8vICAgICAgICAgICAgICAgICBsaU1hcmt1cCArPSBpdGVtO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCI+PHAgY2xhc3M9XCJzZWxlY3RlZC1vcHRpb25cIj48c3BhbiBjbGFzcz1cInRleHRcIj4nK2N1cnJlbnRTZWxlY3Rpb25UZXh0Kyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJhcnJvd1wiPjwvc3Bhbj48L3A+PHVsIGNsYXNzPVwiZGQtY29udGFpbmVyXCI+JytsaU1hcmt1cCsnPC91bD48L2Rpdj4nO1xuLy8gICAgICAgICAgICAgc2VsZWN0Tm9kZXNbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpOyBcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRyb3Bkb3duKTtcbi8vICAgICAgICAgfSlcblxuLy8gICAgICAgICAvLyBjbGljayBvbiBkcm9wZG93biBlbGVtZW50XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtIGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGZpbmRTZWxlY3QgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZCcpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZmluZFNlbGVjdCk7XG4vLyAgICAgICAgICAgICAgICAgdXBkYXRlT3JpZ2luYWxTZWxlY3QodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuLy8gICAgICAgICAgICAgICAgIHVwZGF0ZUxhYmVsKHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbi8vICAgICAgICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9KTsgICAgICAgIFxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbi8vICAgICAgICAgdmFyIGxhYmVsVGV4dE5vZGUgPSBvcmlnaW5hbFNlbGVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLW9wdGlvbiAudGV4dCcpO1xuLy8gICAgICAgICBsYWJlbFRleHROb2RlLmlubmVySFRNTCA9IGNsaWNrZWRFbC5pbm5lckhUTUw7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlT3JpZ2luYWxTZWxlY3QoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuLy8gICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb3JpZ2luYWxTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgaWYob3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT09IGNsaWNrZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSkge1xuLy8gICAgICAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXInKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkZC1jbG9zZWQnKTtcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RkLW9wZW4nKTtcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBvcGVuRHJvcGRvd24oKSB7XG4vLyAgICAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2RkLW9wZW4nKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBpbml0KCkge1xuLy8gICAgICAgICBkcm9wZG93bigpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGluaXQ6IGluaXQsXG4vLyAgICAgICAgIGNsb3NlRHJvcGRvd246IGNsb3NlRHJvcGRvd25cbi8vICAgICB9XG4vLyB9KTtcblxuXG5cblxuXG5mdW5jdGlvbiBkcm9wZG93bigpIHtcbiAgICB2YXIgc2VsZWN0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcblxuICAgIGlmKCFzZWxlY3ROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZWN0Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gcnVuIGZvciBlYWNoIHNlbGVjdCBub2RlXG4gICAgICAgIHZhciBjdXJyZW50U2VsZWN0ID0gc2VsZWN0Tm9kZXNbaV07XG4gICAgICAgIHZhciBsaU1hcmt1cCA9ICcnO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHNlbGVjdE5vZGVzW2ldLm9wdGlvbnM7XG4gICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uVGV4dCA9IGN1cnJlbnRTZWxlY3Qub3B0aW9uc1tzZWxlY3ROb2Rlc1tpXS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXG4gICAgICAgIGlmKGN1cnJlbnRTZWxlY3Qub3B0aW9uc1tzZWxlY3ROb2Rlc1tpXS5zZWxlY3RlZEluZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gJyc7XG4gICAgfVxuXG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgYWRkRW1weUNsYXNzID0gb3B0aW9uc1tqXS5jbGFzc05hbWUgPT09ICdlbXB0eScgPyAnZW1wdHknIDogJyc7XG4gICAgICAgICAgICB2YXIgaXRlbSA9ICc8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtICcgK2FkZEVtcHlDbGFzcysgJ1wiPjxhIHRhYmluZGV4PVwiMFwiIGhyZWY9XCIjXCJkYXRhLWRkPVwiJytjdXJyZW50U2VsZWN0LmdldEF0dHJpYnV0ZShcImlkXCIpKydcIiBkYXRhLXZhbHVlPVwiJytvcHRpb25zW2pdLmdldEF0dHJpYnV0ZSgndmFsdWUnKSsnXCI+JytvcHRpb25zW2pdLmlubmVySFRNTCsnPC9hPjwvbGk+JztcbiAgICAgICAgICAgIGxpTWFya3VwICs9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCI+PHAgY2xhc3M9XCJzZWxlY3RlZC1vcHRpb25cIj48c3BhbiBjbGFzcz1cInRleHRcIj4nK2N1cnJlbnRTZWxlY3Rpb25UZXh0Kyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJhcnJvd1wiPjwvc3Bhbj48L3A+PHVsIGNsYXNzPVwiZGQtY29udGFpbmVyXCI+JytsaU1hcmt1cCsnPC91bD48L2Rpdj4nO1xuICAgICAgICBzZWxlY3ROb2Rlc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7IFxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRHJvcGRvd24pO1xuICAgIH0pXG5cbiAgICAvLyBjbGljayBvbiBkcm9wZG93biBlbGVtZW50XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0gYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBmaW5kU2VsZWN0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGQnKTtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZmluZFNlbGVjdCk7XG4gICAgICAgICAgICB1cGRhdGVPcmlnaW5hbFNlbGVjdCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4gICAgICAgICAgICB1cGRhdGVMYWJlbCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHsgICAgICAgIFxuICAgIHZhciBsYWJlbFRleHROb2RlID0gb3JpZ2luYWxTZWxlY3QubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1vcHRpb24gLnRleHQnKTtcbiAgICBsYWJlbFRleHROb2RlLmlubmVySFRNTCA9IGNsaWNrZWRFbC5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgb3JpZ2luYWxTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gY2xpY2tlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lcicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGQtY2xvc2VkJyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RkLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Zvck91dHNpZGVDbGljayk7XG4gICAgICAgIHZhciBkZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGkgPCBkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRkc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb3BlbkRyb3Bkb3duKCkge1xuICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2RkLW9wZW4nKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRm9yT3V0c2lkZUNsaWNrKTtcbiAgICB2YXIgZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJyk7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3Bkb3duKTtcbiAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvck91dHNpZGVDbGljayhlKSB7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyLmRkLW9wZW4nKSkge1xuICAgICAgICBpZighKGUudGFyZ2V0LnRhZ05hbWUgPT0nQScgfHwgZS50YXJnZXQudGFnTmFtZSA9PSdTUEFOJyB8fCBlLnRhcmdldC50YWdOYW1lID09J1AnKSkge1xuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5yZXR1cm4ge1xuICAgIGluaXQ6IGRyb3Bkb3duLFxuICAgIGNsb3NlRHJvcGRvd246IGNsb3NlRHJvcGRvd25cbn1cbn0pOyBcblxuZXhwb3J0IGRlZmF1bHQgZm9ybVN0eWxpbmc7IiwiY29uc3Qgc3VpdGVzR3JpZExpZ2h0Ym94ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIFxuXG5cbiAgICB2YXIgZ3JpZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNlc2ctZ3JpZC0zLTEgbGlcIik7XG4gICAgdmFyIGxpZ2h0Ym94QWN0aXZlID0gZmFsc2U7XG4gICAgdmFyIGFsbExpZ2h0Ym94UG9zdHMgPSBbXTtcbiAgICB2YXIgYWxsRmxvb3JwbGFucyA9IGdldEFsbFBvc3RzKCk7XG5cblxuICAgIFxuXG5cbiAgICBcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZUNsaWNrRXZlbnQoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgLy8gdmFyIHBvc3RJRCA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiaWRcIikuc3BsaXQoJy0nKTtcbiAgICAgICAgXG4gICAgICAgIHZhciBjbGFzc2VzID0gQXJyYXkuZnJvbShpdGVtLmNsYXNzTGlzdCk7XG4gICAgICAgIHZhciBjbGFzc0lEID0gQXJyYXkuZnJvbShjbGFzc2VzKS5maWx0ZXIod29yZCA9PiB3b3JkLmluY2x1ZGVzKFwiZWctcG9zdC1pZC1cIikpO1xuICAgICAgICBjb25zb2xlLmxvZyhjbGFzc0lEKTtcbiAgICAgICAgdmFyIHBvc3RJRCA9IGNsYXNzSURbMF0uc3BsaXQoJy0nKTtcbiAgICAgICAgcG9zdElEID0gcG9zdElEW3Bvc3RJRC5sZW5ndGgtMV07XG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3RJRCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbEZsb29ycGxhbnMpO1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGFsbEZsb29ycGxhbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxsRmxvb3JwbGFuc1tpXS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE51bWJlcihwb3N0SUQpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWxsRmxvb3JwbGFuc1tpXS5pZCA9PT0gTnVtYmVyKHBvc3RJRCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxpZ2h0Ym94KGFsbEZsb29ycGxhbnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhbGxGbG9vcnBsYW5zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChpdGVtLmlkID09IHBvc3RJRCkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY3JlYXRlTGlnaHRib3goaXRlbSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9KTsgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgXG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsUG9zdHMoKSB7XG5cbiAgICAgICAgd3AuYXBpLmxvYWRQcm9taXNlLmRvbmUoIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgcG9zdCA9IG5ldyB3cC5hcGkubW9kZWxzLkZsb29ycGxhbnMoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBvc3QuZmV0Y2goeyBkYXRhOiB7IHBlcl9wYWdlOiA0MCB9IH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTsgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGxGbG9vcnBsYW5zID0gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSApO1xuXG5cbiAgICAgICAgLy8gdmFyIHBvc3QgPSBuZXcgd3AuYXBpLm1vZGVscy5GbG9vcnBsYW5zKCk7XG5cbiAgICAgICAgLy8gcmV0dXJuIHBvc3QuZmV0Y2goeyBkYXRhOiB7IHBlcl9wYWdlOiA0MCB9IH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpOyBcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYWxsRmxvb3JwbGFucyA9IGRhdGE7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpZ2h0Ym94KHBvc3QpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcG9zdC5pZDtcbiAgICAgICAgICAgIHZhciBsaWdodEJveEltYWdlID0gcG9zdC5hY2YuZmxvb3JwbGFuX2xpZ2h0Ym94X2ltYWdlIHx8IG51bGw7XG4gICAgICAgICAgICB2YXIgcGRmRG93bmxvYWQgPSBwb3N0LmFjZi5mbG9vcnBsYW5fcGRmX2Rvd25sb2FkIHx8IG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBtYXJrdXAgPSBgPGRpdiBpZD1cImVzc2VudGlhbEdyaWRDdXN0b21MaWdodGJveFwiIGNsYXNzPVwiZXNzZW50aWFsLWdyaWQtY3VzdG9tLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNtaXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bGlnaHRCb3hJbWFnZX1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmwtYnV0dG9uIHJvdW5kZWQtY29ybmVyc1wiIGhyZWY9XCIke3BkZkRvd25sb2FkfVwiIHRhcmdldD1cImJsYW5rXCI+RG93bmxvYWQgU3VpdGUgUERGPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBtYXJrdXApO1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc21pc3MgYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzbWlzc0xpZ2h0Ym94KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5Ym9hcmREaXNtaXNzTGlnaHRib3gpXG4gICAgICAgICAgICByZXR1cm4gbGlnaHRib3hBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgaWYobGlnaHRib3hBY3RpdmUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzbWlzcyBidXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXNzZW50aWFsR3JpZEN1c3RvbUxpZ2h0Ym94XCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleWJvYXJkRGlzbWlzc0xpZ2h0Ym94KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlnaHRib3hBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlib2FyZERpc21pc3NMaWdodGJveChlKSB7XG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAyNykge1xuICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB3cC5hcGkubG9hZFByb21pc2UuZG9uZSggZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgZ3JpZEl0ZW1zLmZvckVhY2goY29uZmlndXJlQ2xpY2tFdmVudCk7XG5cbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3VpdGVzR3JpZExpZ2h0Ym94OyJdLCJzb3VyY2VSb290IjoiIn0=