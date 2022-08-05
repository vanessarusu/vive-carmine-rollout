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
    var postID = item.getAttribute("id").split('-');
    postID = postID[postID.length - 1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tLWxpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20tc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtLXN0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1aXRlcy1ncmlkLWxpZ2h0Ym94LmpzIl0sIm5hbWVzIjpbInBhZ2VJZHMiLCJzdWl0ZXMiLCJob21lIiwibG9jYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZ2wiLCJzdWl0ZXNHcmlkTGlnaHRib3giLCJpbml0IiwiY3MiLCJjdXN0b21TbGlkZXIiLCJmcyIsImZvcm1TdHlsaW5nIiwiY2wiLCJjdXN0b21MaWdodGJveCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGF1bmNoTGlnaHRib3giLCJkaXNtaXNzTGlnaHRib3giLCJsaWdodGJveEZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsInNsaWRlcklEIiwidGFyZ2V0Tm9kZSIsImNvbmZpZyIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY2FsbGJhY2siLCJtdXRhdGlvbkxpc3QiLCJvYnNlcnZlciIsIm11dGF0aW9uIiwidHlwZSIsIm4yc3MiLCJyZWFkeSIsInNsaWRlciIsInNsaWRlckVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5uZXJIVE1MIiwic2xpZGVzIiwibGVuZ3RoIiwiYW5pbWF0aW9uIiwiY3VycmVudFNsaWRlSW5kZXgiLCJuZXh0U2xpZGVJbmRleCIsImluZGV4IiwiY3VycmVudFNsaWRlIiwiZGlzY29ubmVjdCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImkiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnRhaW5zIiwiaiIsImFkZEVtcHlDbGFzcyIsImNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJodG1sIiwib3BlbkRyb3Bkb3duIiwiZmluZFNlbGVjdCIsIm9yaWdpbmFsU2VsZWN0IiwidXBkYXRlT3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVMYWJlbCIsImNsaWNrZWRFbCIsImxhYmVsVGV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tGb3JPdXRzaWRlQ2xpY2siLCJkZHMiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiZ3JpZEl0ZW1zIiwibGlnaHRib3hBY3RpdmUiLCJhbGxMaWdodGJveFBvc3RzIiwiYWxsRmxvb3JwbGFucyIsImdldEFsbFBvc3RzIiwiY29uZmlndXJlQ2xpY2tFdmVudCIsInBvc3RJRCIsInNwbGl0IiwiaWQiLCJOdW1iZXIiLCJjcmVhdGVMaWdodGJveCIsIndwIiwiYXBpIiwibG9hZFByb21pc2UiLCJkb25lIiwicG9zdCIsIm1vZGVscyIsIkZsb29ycGxhbnMiLCJmZXRjaCIsImRhdGEiLCJwZXJfcGFnZSIsImJvZHkiLCJjb250ZW50IiwibGlnaHRCb3hJbWFnZSIsImFjZiIsImZsb29ycGxhbl9saWdodGJveF9pbWFnZSIsInBkZkRvd25sb2FkIiwiZmxvb3JwbGFuX3BkZl9kb3dubG9hZCIsIm1hcmt1cCIsIndpbmRvdyIsImtleWJvYXJkRGlzbWlzc0xp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RSxlQUFULEdBQTJCO0lBQ3ZCLElBQUcwRSxjQUFILEVBQW1CO01BQ2Y1RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDcUYsbUJBQTFDLENBQThELE9BQTlELEVBQXVFcEUsZUFBdkU7TUFDQSxJQUFJOEYsSUFBSSxHQUFHaEgsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVg7TUFDQUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLDhCQUF2QixFQUF1RDJCLE1BQXZEO01BQ0FvRixJQUFJLENBQUM1RixTQUFMLENBQWVRLE1BQWYsQ0FBc0IsWUFBdEI7TUFDQTRGLE1BQU0sQ0FBQ2xDLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DbUMsdUJBQXBDO0lBQ0g7O0lBQ0QsT0FBTzdCLGNBQWMsR0FBRyxLQUF4QjtFQUNIOztFQUVELFNBQVM2Qix1QkFBVCxDQUFpQzFHLENBQWpDLEVBQW9DO0lBQ2hDLElBQUdBLENBQUMsQ0FBQzJHLE9BQUYsSUFBYSxFQUFoQixFQUFvQjtNQUNoQnhHLGVBQWU7SUFDbEI7RUFDSjs7RUFFRCxTQUFTZCxJQUFULEdBQWdCO0lBQ1prRyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsV0FBUCxDQUFtQkMsSUFBbkIsQ0FBeUIsVUFBU0ssSUFBVCxFQUFlO01BQ3BDbkIsU0FBUyxDQUFDL0UsT0FBVixDQUFrQm9GLG1CQUFsQjtJQUVILENBSEQ7RUFJSDs7RUFFRCxPQUFPO0lBQ0g1RixJQUFJLEVBQUVBO0VBREgsQ0FBUDtBQUdILENBN0hEOztBQStIZUQsaUZBQWYsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJpbXBvcnQgZm9ybVN0eWxpbmcgZnJvbSAnLi9mb3JtLXN0eWxpbmcnO1xuaW1wb3J0IGN1c3RvbUxpZ2h0Ym94IGZyb20gXCIuL2N1c3RvbS1saWdodGJveFwiO1xuXG5pbXBvcnQgc3VpdGVzR3JpZExpZ2h0Ym94IGZyb20gJy4vc3VpdGVzLWdyaWQtbGlnaHRib3gnO1xuaW1wb3J0IGN1c3RvbVNsaWRlciBmcm9tICcuL2N1c3RvbS1zbGlkZXInO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcGFnZUlkcyA9IHtcbiAgICAgICAgc3VpdGVzOiBcIjM0MlwiLFxuICAgICAgICBob21lOiAnMicsXG4gICAgICAgIGxvY2F0aW9uOiAnMzAyJ1xuICAgIH1cblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMuc3VpdGVzfWApKSB7XG4gICAgICAgIGNvbnN0IHNnbCA9IHN1aXRlc0dyaWRMaWdodGJveCgpO1xuICAgICAgICBzZ2wuaW5pdCgpO1xuICAgIH1cblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMuaG9tZX1gKSkge1xuICAgICAgICBjb25zdCBjcyA9IGN1c3RvbVNsaWRlcigpO1xuICAgICAgICBjcy5pbml0KDIpO1xuICAgIH1cblxuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJvZHkucGFnZS1pZC0ke3BhZ2VJZHMubG9jYXRpb259YCkpIHtcbiAgICAgICAgY29uc3QgY3MgPSBjdXN0b21TbGlkZXIoKTtcbiAgICAgICAgY3MuaW5pdCg0KTtcbiAgICB9XG5cbiAgICBjb25zdCBmcyA9IGZvcm1TdHlsaW5nKCk7XG4gICAgY29uc3QgY2wgPSBjdXN0b21MaWdodGJveCgpO1xuXG4gICAgZnMuaW5pdCgpO1xuICAgIGNsLmluaXQoKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWdpc3Rlci1saW5rJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxhdW5jaExpZ2h0Ym94KCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Ym94LWRpc21pc3MnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbGF1bmNoTGlnaHRib3goKSB7XG4gICAgICAgIHZhciBsaWdodGJveEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGxpZ2h0Ym94Rm9ybS5jbGFzc0xpc3QuYWRkKCdsaWdodGJveC1vcGVuJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC5mcm9tVG8obGlnaHRib3hGb3JtLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMTVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBmcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodGJveC1vcGVuJyk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdXZWJzaXRlIGRldmVsb3BtZW50IGJ5IHZhbmVzc2FydXN1LmNvbScpXG59XG5cbigpKTtcbiIsImNvbnN0IGN1c3RvbUxpZ2h0Ym94ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWdpc3Rlci1saW5rJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGxhdW5jaExpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWdodGJveC1kaXNtaXNzJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxhdW5jaExpZ2h0Ym94KCkge1xuICAgICAgICB2YXIgbGlnaHRib3hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpO1xuICAgICAgICBcbiAgICAgICAgaWYoIWxpZ2h0Ym94Rm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgbGlnaHRib3hGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihlLmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBnc2FwLmZyb21UbyhsaWdodGJveEZvcm0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4xNVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzTGlnaHRib3goKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdsaWdodGJveC1vcGVuJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUxpZ2h0Ym94OyIsIiAgICAvLyB0aGlzIGhhcyBiZWVuIG1vdmVkIHRvIGJlIHRoZSBpbmxpbmUgY2FsbGJhY2sgZnVuY3Rpb24gd2l0aGluIHRoZSBwbHVnaW4gc2V0dGluZ3NcblxuY29uc3QgY3VzdG9tU2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBcbiAgICBmdW5jdGlvbiBpbml0KHNsaWRlcklEKSB7XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmwtYnVpbGRlci1lZGl0XCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm4yLXNlY3Rpb24tc21hcnRzbGlkZXInKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcblxuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKG11dGF0aW9uTGlzdCwgb2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI24yLXNzLSR7c2xpZGVySUR9YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4yc3MucmVhZHkoc2xpZGVySUQsIGZ1bmN0aW9uKHNsaWRlciwgc2xpZGVyRWxlbWVudCkgeyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dGVuZC1hcnJvdy1wcmV2aW91cycpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCc8ZGl2IGNsYXNzPVwic2xpZGVyLXBhZ2luYXRpb25cIj48c3BhbiBjbGFzcz1cImN1cnJlbnQtaW5kZXhcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJidWxsZXRcIj4mYnVsbDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJzbGlkZS1sZW5ndGhcIj48L3NwYW4+PGRpdj4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlLWxlbmd0aFwiKS5pbm5lckhUTUwgPSBzbGlkZXIuc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtaW5kZXhcIikuaW5uZXJIVE1MID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbWFpbkFuaW1hdGlvblN0YXJ0JywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZSwgYW5pbWF0aW9uLCBjdXJyZW50U2xpZGVJbmRleCwgbmV4dFNsaWRlSW5kZXgpIHsgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2xpZGVyLmN1cnJlbnRTbGlkZS5pbmRleCsxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWluZGV4XCIpLmlubmVySFRNTCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbVNsaWRlcjsiLCJjb25zdCBmb3JtU3R5bGluZyA9IChmdW5jdGlvbiAoKSB7XG5cbi8vICAgICBmdW5jdGlvbiBkcm9wZG93bigpIHtcbi8vICAgICAgICAgdmFyIHNlbGVjdE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndwZm9ybXMtZmllbGQtc2VsZWN0IHNlbGVjdCcpO1xuICAgICAgICBcbi8vICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNlbGVjdE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICAvLyBydW4gZm9yIGVhY2ggc2VsZWN0IG5vZGVcbi8vICAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0ID0gc2VsZWN0Tm9kZXNbaV07XG4vLyAgICAgICAgICAgICB2YXIgbGlNYXJrdXAgPSAnJztcbi8vICAgICAgICAgICAgIHZhciBvcHRpb25zID0gc2VsZWN0Tm9kZXNbaV0ub3B0aW9ucztcbi8vICAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uVGV4dCA9IGN1cnJlbnRTZWxlY3Qub3B0aW9uc1tzZWxlY3ROb2Rlc1tpXS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXG4vLyAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuLy8gICAgICAgICAgICAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj48YSBocmVmPVwiI1wiZGF0YS1kZD1cIicrY3VycmVudFNlbGVjdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSsnXCIgZGF0YS12YWx1ZT1cIicrb3B0aW9uc1tqXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykrJ1wiPicrb3B0aW9uc1tqXS5pbm5lckhUTUwrJzwvYT48L2xpPic7XG4vLyAgICAgICAgICAgICAgICAgbGlNYXJrdXAgKz0gaXRlbTtcbi8vICAgICAgICAgICAgIH1cblxuLy8gICAgICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImN1c3RvbS1kcm9wZG93blwiPjxwIGNsYXNzPVwic2VsZWN0ZWQtb3B0aW9uXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JytjdXJyZW50U2VsZWN0aW9uVGV4dCsnPC9zcGFuPjxzcGFuIGNsYXNzPVwiYXJyb3dcIj48L3NwYW4+PC9wPjx1bCBjbGFzcz1cImRkLWNvbnRhaW5lclwiPicrbGlNYXJrdXArJzwvdWw+PC9kaXY+Jztcbi8vICAgICAgICAgICAgIHNlbGVjdE5vZGVzW2ldLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTsgXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ecm9wZG93bik7XG4vLyAgICAgICAgIH0pXG5cbi8vICAgICAgICAgLy8gY2xpY2sgb24gZHJvcGRvd24gZWxlbWVudFxuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbSBhJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4vLyAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBmaW5kU2VsZWN0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGQnKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2ZpbmRTZWxlY3QpO1xuLy8gICAgICAgICAgICAgICAgIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGVMYWJlbCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4vLyAgICAgICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfSk7ICAgICAgICBcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiB1cGRhdGVMYWJlbChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4vLyAgICAgICAgIHZhciBsYWJlbFRleHROb2RlID0gb3JpZ2luYWxTZWxlY3QubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1vcHRpb24gLnRleHQnKTtcbi8vICAgICAgICAgbGFiZWxUZXh0Tm9kZS5pbm5lckhUTUwgPSBjbGlja2VkRWwuaW5uZXJIVE1MO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbi8vICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIGlmKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSBjbGlja2VkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpIHtcbi8vICAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGQtY2xvc2VkJyk7XG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkZC1vcGVuJyk7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gb3BlbkRyb3Bkb3duKCkge1xuLy8gICAgICAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdkZC1vcGVuJyk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gaW5pdCgpIHtcbi8vICAgICAgICAgZHJvcGRvd24oKTtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBpbml0OiBpbml0LFxuLy8gICAgICAgICBjbG9zZURyb3Bkb3duOiBjbG9zZURyb3Bkb3duXG4vLyAgICAgfVxuLy8gfSk7XG5cblxuXG5cblxuZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4gICAgdmFyIHNlbGVjdE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XG5cbiAgICBpZighc2VsZWN0Tm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHNlbGVjdE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIHJ1biBmb3IgZWFjaCBzZWxlY3Qgbm9kZVxuICAgICAgICB2YXIgY3VycmVudFNlbGVjdCA9IHNlbGVjdE5vZGVzW2ldO1xuICAgICAgICB2YXIgbGlNYXJrdXAgPSAnJztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBzZWxlY3ROb2Rlc1tpXS5vcHRpb25zO1xuICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvblRleHQgPSBjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0udGV4dDtcblxuICAgICAgICBpZihjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2VsZWN0aW9uVGV4dCA9ICcnO1xuICAgIH1cblxuICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgdmFyIGFkZEVtcHlDbGFzcyA9IG9wdGlvbnNbal0uY2xhc3NOYW1lID09PSAnZW1wdHknID8gJ2VtcHR5JyA6ICcnO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbSAnICthZGRFbXB5Q2xhc3MrICdcIj48YSB0YWJpbmRleD1cIjBcIiBocmVmPVwiI1wiZGF0YS1kZD1cIicrY3VycmVudFNlbGVjdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSsnXCIgZGF0YS12YWx1ZT1cIicrb3B0aW9uc1tqXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykrJ1wiPicrb3B0aW9uc1tqXS5pbm5lckhUTUwrJzwvYT48L2xpPic7XG4gICAgICAgICAgICBsaU1hcmt1cCArPSBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImN1c3RvbS1kcm9wZG93blwiPjxwIGNsYXNzPVwic2VsZWN0ZWQtb3B0aW9uXCI+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+JytjdXJyZW50U2VsZWN0aW9uVGV4dCsnPC9zcGFuPjxzcGFuIGNsYXNzPVwiYXJyb3dcIj48L3NwYW4+PC9wPjx1bCBjbGFzcz1cImRkLWNvbnRhaW5lclwiPicrbGlNYXJrdXArJzwvdWw+PC9kaXY+JztcbiAgICAgICAgc2VsZWN0Tm9kZXNbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpOyBcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRyb3Bkb3duKTtcbiAgICB9KVxuXG4gICAgLy8gY2xpY2sgb24gZHJvcGRvd24gZWxlbWVudFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtIGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG5cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZmluZFNlbGVjdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWRkJyk7XG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2ZpbmRTZWxlY3QpO1xuICAgICAgICAgICAgdXBkYXRlT3JpZ2luYWxTZWxlY3QodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuICAgICAgICAgICAgdXBkYXRlTGFiZWwodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVMYWJlbChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7ICAgICAgICBcbiAgICB2YXIgbGFiZWxUZXh0Tm9kZSA9IG9yaWdpbmFsU2VsZWN0Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtb3B0aW9uIC50ZXh0Jyk7XG4gICAgbGFiZWxUZXh0Tm9kZS5pbm5lckhUTUwgPSBjbGlja2VkRWwuaW5uZXJIVE1MO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVPcmlnaW5hbFNlbGVjdChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYob3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT09IGNsaWNrZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSkge1xuICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VEcm9wZG93bigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXInKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RkLWNsb3NlZCcpO1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkZC1vcGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tGb3JPdXRzaWRlQ2xpY2spO1xuICAgICAgICB2YXIgZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJyk7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3Bkb3duKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9wZW5Ecm9wZG93bigpIHtcbiAgICB0aGlzLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdkZC1vcGVuJyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Zvck91dHNpZGVDbGljayk7XG4gICAgdmFyIGRkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpO1xuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wZG93bik7XG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JPdXRzaWRlQ2xpY2soZSkge1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lci5kZC1vcGVuJykpIHtcbiAgICAgICAgaWYoIShlLnRhcmdldC50YWdOYW1lID09J0EnIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT0nU1BBTicgfHwgZS50YXJnZXQudGFnTmFtZSA9PSdQJykpIHtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxucmV0dXJuIHtcbiAgICBpbml0OiBkcm9wZG93bixcbiAgICBjbG9zZURyb3Bkb3duOiBjbG9zZURyb3Bkb3duXG59XG59KTsgXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1TdHlsaW5nOyIsImNvbnN0IHN1aXRlc0dyaWRMaWdodGJveCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICBcblxuXG4gICAgdmFyIGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZXNnLWdyaWQtMy0xIGxpXCIpO1xuICAgIHZhciBsaWdodGJveEFjdGl2ZSA9IGZhbHNlO1xuICAgIHZhciBhbGxMaWdodGJveFBvc3RzID0gW107XG4gICAgdmFyIGFsbEZsb29ycGxhbnMgPSBnZXRBbGxQb3N0cygpO1xuXG5cbiAgICBcblxuXG4gICAgXG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVDbGlja0V2ZW50KGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBwb3N0SUQgPSBpdGVtLmdldEF0dHJpYnV0ZShcImlkXCIpLnNwbGl0KCctJyk7XG4gICAgICAgIHBvc3RJRCA9IHBvc3RJRFtwb3N0SUQubGVuZ3RoLTFdO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxGbG9vcnBsYW5zKTtcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGkgPCBhbGxGbG9vcnBsYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsbEZsb29ycGxhbnNbaV0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhOdW1iZXIocG9zdElEKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFsbEZsb29ycGxhbnNbaV0uaWQgPT09IE51bWJlcihwb3N0SUQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaWdodGJveChhbGxGbG9vcnBsYW5zW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWxsRmxvb3JwbGFucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaXRlbS5pZCA9PSBwb3N0SUQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNyZWF0ZUxpZ2h0Ym94KGl0ZW0pO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gfSk7ICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIFxuICAgIH07XG5cblxuICAgIGZ1bmN0aW9uIGdldEFsbFBvc3RzKCkge1xuXG4gICAgICAgIHdwLmFwaS5sb2FkUHJvbWlzZS5kb25lKCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgdmFyIHBvc3QgPSBuZXcgd3AuYXBpLm1vZGVscy5GbG9vcnBsYW5zKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwb3N0LmZldGNoKHsgZGF0YTogeyBwZXJfcGFnZTogNDAgfSB9KS5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7IFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxsRmxvb3JwbGFucyA9IGRhdGE7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gKTtcblxuXG4gICAgICAgIC8vIHZhciBwb3N0ID0gbmV3IHdwLmFwaS5tb2RlbHMuRmxvb3JwbGFucygpO1xuXG4gICAgICAgIC8vIHJldHVybiBwb3N0LmZldGNoKHsgZGF0YTogeyBwZXJfcGFnZTogNDAgfSB9KS5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTsgXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGFsbEZsb29ycGxhbnMgPSBkYXRhO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaWdodGJveChwb3N0KSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHBvc3QuaWQ7XG4gICAgICAgICAgICB2YXIgbGlnaHRCb3hJbWFnZSA9IHBvc3QuYWNmLmZsb29ycGxhbl9saWdodGJveF9pbWFnZSB8fCBudWxsO1xuICAgICAgICAgICAgdmFyIHBkZkRvd25sb2FkID0gcG9zdC5hY2YuZmxvb3JwbGFuX3BkZl9kb3dubG9hZCB8fCBudWxsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbWFya3VwID0gYDxkaXYgaWQ9XCJlc3NlbnRpYWxHcmlkQ3VzdG9tTGlnaHRib3hcIiBjbGFzcz1cImVzc2VudGlhbC1ncmlkLWN1c3RvbS1tb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzbWlzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48c3Bhbj48L3NwYW4+PHNwYW4+PC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2xpZ2h0Qm94SW1hZ2V9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImZsLWJ1dHRvbiByb3VuZGVkLWNvcm5lcnNcIiBocmVmPVwiJHtwZGZEb3dubG9hZH1cIiB0YXJnZXQ9XCJibGFua1wiPkRvd25sb2FkIFN1aXRlIFBERjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgbWFya3VwKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNtaXNzIGJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc21pc3NMaWdodGJveCk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleWJvYXJkRGlzbWlzc0xpZ2h0Ym94KVxuICAgICAgICAgICAgcmV0dXJuIGxpZ2h0Ym94QWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzTGlnaHRib3goKSB7XG4gICAgICAgIGlmKGxpZ2h0Ym94QWN0aXZlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc21pc3MgYnV0dG9uXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzbWlzc0xpZ2h0Ym94KTtcbiAgICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vzc2VudGlhbEdyaWRDdXN0b21MaWdodGJveFwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlib2FyZERpc21pc3NMaWdodGJveCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpZ2h0Ym94QWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5Ym9hcmREaXNtaXNzTGlnaHRib3goZSkge1xuICAgICAgICBpZihlLmtleUNvZGUgPT0gMjcpIHtcbiAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgd3AuYXBpLmxvYWRQcm9taXNlLmRvbmUoIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGdyaWRJdGVtcy5mb3JFYWNoKGNvbmZpZ3VyZUNsaWNrRXZlbnQpO1xuXG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBpbml0XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN1aXRlc0dyaWRMaWdodGJveDsiXSwic291cmNlUm9vdCI6IiJ9