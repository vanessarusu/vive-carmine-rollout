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
    item.addEventListener("click", function () {
      allFloorplans.forEach(function (item) {
        if (item.id == postID) {
          createLightbox(item);
        } else {}
      });
    });
  }

  ;

  function getAllPosts() {
    var post = new wp.api.models.Floorplans();
    return post.fetch({
      data: {
        per_page: 40
      }
    }).done(function (data) {
      return allFloorplans = data;
    });
  }

  function createLightbox(post) {
    var body = document.querySelector("body");
    var content = post.id;
    var lightBoxImage = post.acf.floorplan_lightbox_image;
    var pdfDownload = post.acf.floorplan_pdf_download;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tLWxpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20tc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtLXN0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1aXRlcy1ncmlkLWxpZ2h0Ym94LmpzIl0sIm5hbWVzIjpbInBhZ2VJZHMiLCJzdWl0ZXMiLCJob21lIiwibG9jYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZ2wiLCJzdWl0ZXNHcmlkTGlnaHRib3giLCJpbml0IiwiY3MiLCJjdXN0b21TbGlkZXIiLCJmcyIsImZvcm1TdHlsaW5nIiwiY2wiLCJjdXN0b21MaWdodGJveCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGF1bmNoTGlnaHRib3giLCJkaXNtaXNzTGlnaHRib3giLCJsaWdodGJveEZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsInNsaWRlcklEIiwidGFyZ2V0Tm9kZSIsImNvbmZpZyIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY2FsbGJhY2siLCJtdXRhdGlvbkxpc3QiLCJvYnNlcnZlciIsIm11dGF0aW9uIiwidHlwZSIsIm4yc3MiLCJyZWFkeSIsInNsaWRlciIsInNsaWRlckVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5uZXJIVE1MIiwic2xpZGVzIiwibGVuZ3RoIiwiYW5pbWF0aW9uIiwiY3VycmVudFNsaWRlSW5kZXgiLCJuZXh0U2xpZGVJbmRleCIsImluZGV4IiwiY3VycmVudFNsaWRlIiwiZGlzY29ubmVjdCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImkiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnRhaW5zIiwiaiIsImFkZEVtcHlDbGFzcyIsImNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJodG1sIiwib3BlbkRyb3Bkb3duIiwiZmluZFNlbGVjdCIsIm9yaWdpbmFsU2VsZWN0IiwidXBkYXRlT3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVMYWJlbCIsImNsaWNrZWRFbCIsImxhYmVsVGV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tGb3JPdXRzaWRlQ2xpY2siLCJkZHMiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiZ3JpZEl0ZW1zIiwibGlnaHRib3hBY3RpdmUiLCJhbGxMaWdodGJveFBvc3RzIiwiYWxsRmxvb3JwbGFucyIsImdldEFsbFBvc3RzIiwiY29uZmlndXJlQ2xpY2tFdmVudCIsInBvc3RJRCIsInNwbGl0IiwiaWQiLCJjcmVhdGVMaWdodGJveCIsInBvc3QiLCJ3cCIsImFwaSIsIm1vZGVscyIsIkZsb29ycGxhbnMiLCJmZXRjaCIsImRhdGEiLCJwZXJfcGFnZSIsImRvbmUiLCJib2R5IiwiY29udGVudCIsImxpZ2h0Qm94SW1hZ2UiLCJhY2YiLCJmbG9vcnBsYW5fbGlnaHRib3hfaW1hZ2UiLCJwZGZEb3dubG9hZCIsImZsb29ycGxhbl9wZGZfZG93bmxvYWQiLCJtYXJrdXAiLCJ3aW5kb3ciLCJrZXlib2FyZERpc21pc3NMaWdodGJveCIsImtleUNvZGUiLCJsb2FkUHJvbWlzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUMsYUFBVztFQUVSLElBQUlBLE9BQU8sR0FBRztJQUNWQyxNQUFNLEVBQUUsS0FERTtJQUVWQyxJQUFJLEVBQUUsR0FGSTtJQUdWQyxRQUFRLEVBQUU7RUFIQSxDQUFkOztFQU1BLElBQUdDLFFBQVEsQ0FBQ0MsYUFBVCx3QkFBdUNMLE9BQU8sQ0FBQ0MsTUFBL0MsRUFBSCxFQUE2RDtJQUN6RCxJQUFNSyxHQUFHLEdBQUdDLHFFQUFrQixFQUE5QjtJQUNBRCxHQUFHLENBQUNFLElBQUo7RUFDSDs7RUFFRCxJQUFHSixRQUFRLENBQUNDLGFBQVQsd0JBQXVDTCxPQUFPLENBQUNFLElBQS9DLEVBQUgsRUFBMkQ7SUFDdkQsSUFBTU8sRUFBRSxHQUFHQyw4REFBWSxFQUF2QjtJQUNBRCxFQUFFLENBQUNELElBQUgsQ0FBUSxDQUFSO0VBQ0g7O0VBRUQsSUFBR0osUUFBUSxDQUFDQyxhQUFULHdCQUF1Q0wsT0FBTyxDQUFDRyxRQUEvQyxFQUFILEVBQStEO0lBQzNELElBQU1NLEdBQUUsR0FBR0MsOERBQVksRUFBdkI7O0lBQ0FELEdBQUUsQ0FBQ0QsSUFBSCxDQUFRLENBQVI7RUFDSDs7RUFFRCxJQUFNRyxFQUFFLEdBQUdDLDZEQUFXLEVBQXRCO0VBQ0EsSUFBTUMsRUFBRSxHQUFHQyxnRUFBYyxFQUF6QjtFQUVBSCxFQUFFLENBQUNILElBQUg7RUFDQUssRUFBRSxDQUFDTCxJQUFIO0VBRUFKLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsZ0JBQTFCLEVBQTRDQyxPQUE1QyxDQUFvRCxVQUFTQyxFQUFULEVBQWE7SUFDN0RBLEVBQUUsQ0FBQ0MsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBU0MsQ0FBVCxFQUFZO01BQ3JDQSxDQUFDLENBQUNDLGNBQUY7TUFDQUMsY0FBYztJQUNqQixDQUhEO0VBSUgsQ0FMRDtFQU9BakIsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixtQkFBMUIsRUFBK0NDLE9BQS9DLENBQXVELFVBQVNDLEVBQVQsRUFBYTtJQUNoRUEsRUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFTQyxDQUFULEVBQVk7TUFDckNBLENBQUMsQ0FBQ0MsY0FBRjtNQUNBRSxlQUFlO0lBQ2xCLENBSEQ7RUFJSCxDQUxEOztFQU9BLFNBQVNELGNBQVQsR0FBMEI7SUFDdEIsSUFBSUUsWUFBWSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQW5CO0lBQ0FELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixFQUErQm1CLFNBQS9CLENBQXlDQyxHQUF6QyxDQUE2QyxZQUE3QztJQUNBRixZQUFZLENBQUNDLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLGVBQTNCO0lBRUFyQixRQUFRLENBQUNjLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVNDLENBQVQsRUFBWTtNQUMzQyxJQUFHQSxDQUFDLENBQUNPLEdBQUYsSUFBUyxRQUFaLEVBQXNCO1FBQ2xCSixlQUFlO01BQ2xCO0lBQ0osQ0FKRDtJQU1BSyxJQUFJLENBQUNDLE1BQUwsQ0FBWUwsWUFBWixFQUEwQjtNQUN0Qk0sT0FBTyxFQUFFO0lBRGEsQ0FBMUIsRUFHQTtNQUNJQSxPQUFPLEVBQUUsQ0FEYjtNQUVJQyxRQUFRLEVBQUU7SUFGZCxDQUhBO0VBT0g7O0VBRUQsU0FBU1IsZUFBVCxHQUEyQjtJQUN2QlgsRUFBRSxDQUFDb0IsYUFBSDtJQUNBM0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCbUIsU0FBL0IsQ0FBeUNRLE1BQXpDLENBQWdELFlBQWhEO0lBQ0E1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NtQixTQUF4QyxDQUFrRFEsTUFBbEQsQ0FBeUQsZUFBekQ7RUFDSDs7RUFDREMsT0FBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7QUFDSCxDQXJFQSxHQUFELEM7Ozs7Ozs7Ozs7OztBQ05BO0FBQUEsSUFBTXBCLGNBQWMsR0FBSSxTQUFsQkEsY0FBa0IsR0FBVztFQUUvQixTQUFTcUIsaUJBQVQsR0FBNkI7SUFDekIvQixRQUFRLENBQUNXLGdCQUFULENBQTBCLGdCQUExQixFQUE0Q0MsT0FBNUMsQ0FBb0QsVUFBU0MsRUFBVCxFQUFhO01BQzdEQSxFQUFFLENBQUNDLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQVNDLENBQVQsRUFBWTtRQUVyQ0EsQ0FBQyxDQUFDQyxjQUFGO1FBQ0FDLGNBQWM7TUFDakIsQ0FKRDtJQUtILENBTkQ7SUFRQWpCLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsbUJBQTFCLEVBQStDQyxPQUEvQyxDQUF1RCxVQUFTQyxFQUFULEVBQWE7TUFDaEVBLEVBQUUsQ0FBQ0MsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBU0MsQ0FBVCxFQUFZO1FBQ3JDQSxDQUFDLENBQUNDLGNBQUY7UUFDQUUsZUFBZTtNQUNsQixDQUhEO0lBSUgsQ0FMRDtFQU1IOztFQUVELFNBQVNELGNBQVQsR0FBMEI7SUFDdEIsSUFBSUUsWUFBWSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQW5COztJQUVBLElBQUcsQ0FBQ2tCLFlBQUosRUFBa0I7TUFDZDtJQUNIOztJQUVEbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCbUIsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLFlBQTdDO0lBQ0FGLFlBQVksQ0FBQ0MsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsZUFBM0I7SUFFQXJCLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO01BQzNDLElBQUdBLENBQUMsQ0FBQ08sR0FBRixJQUFTLFFBQVosRUFBc0I7UUFDbEJKLGVBQWU7TUFDbEI7SUFDSixDQUpEO0lBTUFLLElBQUksQ0FBQ0MsTUFBTCxDQUFZTCxZQUFaLEVBQTBCO01BQ3RCTSxPQUFPLEVBQUU7SUFEYSxDQUExQixFQUdBO01BQ0lBLE9BQU8sRUFBRSxDQURiO01BRUlDLFFBQVEsRUFBRTtJQUZkLENBSEE7RUFPSDs7RUFFRCxTQUFTUixlQUFULEdBQTJCO0lBQ3ZCbEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCbUIsU0FBL0IsQ0FBeUNRLE1BQXpDLENBQWdELFlBQWhEO0lBQ0E1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NtQixTQUF4QyxDQUFrRFEsTUFBbEQsQ0FBeUQsZUFBekQ7RUFDSDs7RUFFRCxTQUFTeEIsSUFBVCxHQUFnQjtJQUNaMkIsaUJBQWlCO0VBQ3BCOztFQUVELE9BQU87SUFDSDNCLElBQUksRUFBRUE7RUFESCxDQUFQO0FBR0gsQ0F4REQ7O0FBMERlTSw2RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURJO0FBRUosSUFBTUosWUFBWSxHQUFJLFNBQWhCQSxZQUFnQixHQUFZO0VBRTlCLFNBQVNGLElBQVQsQ0FBYzRCLFFBQWQsRUFBd0I7SUFDcEIsSUFBR2hDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBSCxFQUErQztNQUMzQztJQUNIOztJQUVELElBQU1nQyxVQUFVLEdBQUdqQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQW5CO0lBQ0EsSUFBTWlDLE1BQU0sR0FBRztNQUFFQyxVQUFVLEVBQUUsSUFBZDtNQUFvQkMsU0FBUyxFQUFFLElBQS9CO01BQXFDQyxPQUFPLEVBQUU7SUFBOUMsQ0FBZjs7SUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxZQUFULEVBQXVCQyxRQUF2QixFQUFpQztNQUFBLDJDQUN2QkQsWUFEdUI7TUFBQTs7TUFBQTtRQUM5QyxvREFBcUM7VUFBQSxJQUExQkUsUUFBMEI7O1VBQ2pDLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxLQUFrQixXQUF0QixFQUFtQztZQUUvQixJQUFHMUMsUUFBUSxDQUFDQyxhQUFULGtCQUFpQytCLFFBQWpDLEVBQUgsRUFBaUQ7Y0FDN0NXLElBQUksQ0FBQ0MsS0FBTCxDQUFXWixRQUFYLEVBQXFCLFVBQVNhLE1BQVQsRUFBaUJDLGFBQWpCLEVBQWdDO2dCQUNqREMsVUFBVSxDQUFDLFlBQVc7a0JBQ3RCL0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHlCQUF2QixFQUFrRCtDLGtCQUFsRCxDQUFxRSxVQUFyRSxFQUFnRiw2SUFBaEY7a0JBQ0FoRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NnRCxTQUF4QyxHQUFvREosTUFBTSxDQUFDSyxNQUFQLENBQWNDLE1BQWxFO2tCQUNBbkQsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixFQUF5Q2dELFNBQXpDLEdBQXFELEdBQXJEO2tCQUNBSCxhQUFhLENBQUNoQyxnQkFBZCxDQUErQixvQkFBL0IsRUFDQSxVQUFTQyxDQUFULEVBQVlxQyxTQUFaLEVBQXVCQyxpQkFBdkIsRUFBMENDLGNBQTFDLEVBQTBEO29CQUN0RFAsVUFBVSxDQUFDLFlBQVc7c0JBQ2xCLElBQUlRLEtBQUssR0FBR1YsTUFBTSxDQUFDVyxZQUFQLENBQW9CRCxLQUFwQixHQUEwQixDQUF0QztzQkFDQXZELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUNnRCxTQUF6QyxHQUFxRE0sS0FBckQ7b0JBQ0gsQ0FIUyxFQUdQLEdBSE8sQ0FBVjtrQkFJSCxDQU5EO2dCQU9ILENBWGEsRUFXWCxDQVhXLENBQVY7Y0FZSCxDQWJEO2NBZUFmLFFBQVEsQ0FBQ2lCLFVBQVQ7WUFDSDtVQUNKO1FBQ0o7TUF2QjZDO1FBQUE7TUFBQTtRQUFBO01BQUE7SUF3QmpELENBeEJEOztJQTBCQSxJQUFNakIsUUFBUSxHQUFHLElBQUlrQixnQkFBSixDQUFxQnBCLFFBQXJCLENBQWpCO0lBRUFFLFFBQVEsQ0FBQ21CLE9BQVQsQ0FBaUIxQixVQUFqQixFQUE2QkMsTUFBN0I7RUFDSDs7RUFFRCxPQUFPO0lBQ0g5QixJQUFJLEVBQUVBO0VBREgsQ0FBUDtBQUdILENBNUNEOztBQThDZUUsMkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUEsSUFBTUUsV0FBVyxHQUFJLFNBQWZBLFdBQWUsR0FBWTtFQUVqQztFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQU1BLFNBQVNvRCxRQUFULEdBQW9CO0lBQ2hCLElBQUlDLFdBQVcsR0FBRzdELFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBbEI7O0lBRUEsSUFBRyxDQUFDa0QsV0FBVyxDQUFDVixNQUFoQixFQUF3QjtNQUNwQjtJQUNIOztJQUVELEtBQUksSUFBSVcsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRCxXQUFXLENBQUNWLE1BQS9CLEVBQXVDVyxDQUFDLEVBQXhDLEVBQTRDO01BQ3hDO01BQ0EsSUFBSUMsYUFBYSxHQUFHRixXQUFXLENBQUNDLENBQUQsQ0FBL0I7TUFDQSxJQUFJRSxRQUFRLEdBQUcsRUFBZjtNQUNBLElBQUlDLE9BQU8sR0FBR0osV0FBVyxDQUFDQyxDQUFELENBQVgsQ0FBZUcsT0FBN0I7TUFDQSxJQUFJQyxvQkFBb0IsR0FBR0gsYUFBYSxDQUFDRSxPQUFkLENBQXNCSixXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlSyxhQUFyQyxFQUFvREMsSUFBL0U7O01BRUEsSUFBR0wsYUFBYSxDQUFDRSxPQUFkLENBQXNCSixXQUFXLENBQUNDLENBQUQsQ0FBWCxDQUFlSyxhQUFyQyxFQUFvRC9DLFNBQXBELENBQThEaUQsUUFBOUQsQ0FBdUUsT0FBdkUsQ0FBSCxFQUFvRjtRQUNoRkgsb0JBQW9CLEdBQUcsRUFBdkI7TUFDUDs7TUFFRyxLQUFJLElBQUlJLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0wsT0FBTyxDQUFDZCxNQUEzQixFQUFtQ21CLENBQUMsRUFBcEMsRUFBd0M7UUFDcEMsSUFBSUMsWUFBWSxHQUFHTixPQUFPLENBQUNLLENBQUQsQ0FBUCxDQUFXRSxTQUFYLEtBQXlCLE9BQXpCLEdBQW1DLE9BQW5DLEdBQTZDLEVBQWhFO1FBQ0EsSUFBSUMsSUFBSSxHQUFHLDhCQUE2QkYsWUFBN0IsR0FBMkMscUNBQTNDLEdBQWlGUixhQUFhLENBQUNXLFlBQWQsQ0FBMkIsSUFBM0IsQ0FBakYsR0FBa0gsZ0JBQWxILEdBQW1JVCxPQUFPLENBQUNLLENBQUQsQ0FBUCxDQUFXSSxZQUFYLENBQXdCLE9BQXhCLENBQW5JLEdBQW9LLElBQXBLLEdBQXlLVCxPQUFPLENBQUNLLENBQUQsQ0FBUCxDQUFXckIsU0FBcEwsR0FBOEwsV0FBek07UUFDQWUsUUFBUSxJQUFJUyxJQUFaO01BQ0g7O01BRUQsSUFBSUUsSUFBSSxHQUFHLGdGQUE4RVQsb0JBQTlFLEdBQW1HLGlFQUFuRyxHQUFxS0YsUUFBckssR0FBOEssYUFBekw7TUFDQUgsV0FBVyxDQUFDQyxDQUFELENBQVgsQ0FBZWQsa0JBQWYsQ0FBa0MsVUFBbEMsRUFBOEMyQixJQUE5QztJQUNIOztJQUVEM0UsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixtQ0FBMUIsRUFBK0RDLE9BQS9ELENBQXVFLFVBQVNDLEVBQVQsRUFBYTtNQUNoRkEsRUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QjhELFlBQTdCO0lBQ0gsQ0FGRCxFQTVCZ0IsQ0FnQ2hCOztJQUNBNUUsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENDLE9BQTlDLENBQXNELFVBQVNDLEVBQVQsRUFBYTtNQUUvREEsRUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFTQyxDQUFULEVBQVk7UUFDckNBLENBQUMsQ0FBQ0MsY0FBRjtRQUNBLElBQUk2RCxVQUFVLEdBQUcsS0FBS0gsWUFBTCxDQUFrQixTQUFsQixDQUFqQjtRQUNBLElBQUlJLGNBQWMsR0FBRzlFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUFJNEUsVUFBM0IsQ0FBckI7UUFDQUUsb0JBQW9CLENBQUMsSUFBRCxFQUFPRCxjQUFQLENBQXBCO1FBQ0FFLFdBQVcsQ0FBQyxJQUFELEVBQU9GLGNBQVAsQ0FBWDtRQUNBbkQsYUFBYTtNQUNoQixDQVBEO0lBUUgsQ0FWRDtFQVdIOztFQUVELFNBQVNxRCxXQUFULENBQXFCQyxTQUFyQixFQUFnQ0gsY0FBaEMsRUFBZ0Q7SUFDNUMsSUFBSUksYUFBYSxHQUFHSixjQUFjLENBQUNLLGtCQUFmLENBQWtDbEYsYUFBbEMsQ0FBZ0Qsd0JBQWhELENBQXBCO0lBQ0FpRixhQUFhLENBQUNqQyxTQUFkLEdBQTBCZ0MsU0FBUyxDQUFDaEMsU0FBcEM7RUFDSDs7RUFFRCxTQUFTOEIsb0JBQVQsQ0FBOEJFLFNBQTlCLEVBQXlDSCxjQUF6QyxFQUF5RDtJQUNyRCxLQUFJLElBQUloQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdnQixjQUFjLENBQUNiLE9BQWYsQ0FBdUJkLE1BQTFDLEVBQWtEVyxDQUFDLEVBQW5ELEVBQXVEO01BQ25ELElBQUdnQixjQUFjLENBQUNiLE9BQWYsQ0FBdUJILENBQXZCLEVBQTBCWSxZQUExQixDQUF1QyxPQUF2QyxNQUFvRE8sU0FBUyxDQUFDUCxZQUFWLENBQXVCLFlBQXZCLENBQXZELEVBQTZGO1FBQ3pGSSxjQUFjLENBQUNiLE9BQWYsQ0FBdUJILENBQXZCLEVBQTBCc0IsWUFBMUIsQ0FBdUMsVUFBdkMsRUFBbUQsSUFBbkQ7TUFDSCxDQUZELE1BR0s7UUFDRE4sY0FBYyxDQUFDYixPQUFmLENBQXVCSCxDQUF2QixFQUEwQnVCLGVBQTFCLENBQTBDLFVBQTFDO01BQ0g7SUFDSjtFQUNKOztFQUVELFNBQVMxRCxhQUFULEdBQXlCO0lBQ3JCM0IsUUFBUSxDQUFDVyxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNDLE9BQTdDLENBQXFELFVBQVNDLEVBQVQsRUFBYTtNQUM5REEsRUFBRSxDQUFDTyxTQUFILENBQWFDLEdBQWIsQ0FBaUIsV0FBakI7TUFDQVIsRUFBRSxDQUFDTyxTQUFILENBQWFRLE1BQWIsQ0FBb0IsU0FBcEI7TUFDQTVCLFFBQVEsQ0FBQ3NGLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDQyxvQkFBdEM7TUFDQSxJQUFJQyxHQUFHLEdBQUd4RixRQUFRLENBQUNXLGdCQUFULENBQTBCLG1DQUExQixDQUFWOztNQUNBLEtBQUksSUFBSW1ELENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBRzBCLEdBQUcsQ0FBQ3JDLE1BQXJCLEVBQTZCVyxDQUFDLEVBQTlCLEVBQWtDO1FBQzlCMEIsR0FBRyxDQUFDMUIsQ0FBRCxDQUFILENBQU93QixtQkFBUCxDQUEyQixPQUEzQixFQUFvQzNELGFBQXBDO01BQ0g7SUFDSixDQVJEO0VBU0g7O0VBRUQsU0FBU2lELFlBQVQsR0FBd0I7SUFDcEIsS0FBS08sa0JBQUwsQ0FBd0IvRCxTQUF4QixDQUFrQ0MsR0FBbEMsQ0FBc0MsU0FBdEM7SUFDQXJCLFFBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUN5RSxvQkFBbkM7SUFDQSxJQUFJQyxHQUFHLEdBQUd4RixRQUFRLENBQUNXLGdCQUFULENBQTBCLG1DQUExQixDQUFWOztJQUNJLEtBQUksSUFBSW1ELENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBRzBCLEdBQUcsQ0FBQ3JDLE1BQXJCLEVBQTZCVyxDQUFDLEVBQTlCLEVBQWtDO01BQzlCMEIsR0FBRyxDQUFDMUIsQ0FBRCxDQUFILENBQU9oRCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2EsYUFBakM7SUFDSDtFQUNSOztFQUVELFNBQVM0RCxvQkFBVCxDQUE4QnhFLENBQTlCLEVBQWlDO0lBQzdCLElBQUdmLFFBQVEsQ0FBQ1csZ0JBQVQsQ0FBMEIseUJBQTFCLENBQUgsRUFBeUQ7TUFDckQsSUFBRyxFQUFFSSxDQUFDLENBQUMwRSxNQUFGLENBQVNDLE9BQVQsSUFBbUIsR0FBbkIsSUFBMEIzRSxDQUFDLENBQUMwRSxNQUFGLENBQVNDLE9BQVQsSUFBbUIsTUFBN0MsSUFBdUQzRSxDQUFDLENBQUMwRSxNQUFGLENBQVNDLE9BQVQsSUFBbUIsR0FBNUUsQ0FBSCxFQUFxRjtRQUNqRi9ELGFBQWE7TUFDaEI7SUFDSjtFQUNKOztFQUVELE9BQU87SUFDSHZCLElBQUksRUFBRXdELFFBREg7SUFFSGpDLGFBQWEsRUFBRUE7RUFGWixDQUFQO0FBSUMsQ0E5S0Q7O0FBZ0xlbkIsMEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDaExBO0FBQUEsSUFBTUwsa0JBQWtCLEdBQUksU0FBdEJBLGtCQUFzQixHQUFZO0VBRXBDLElBQUl3RixTQUFTLEdBQUczRixRQUFRLENBQUNXLGdCQUFULENBQTBCLGtCQUExQixDQUFoQjtFQUNBLElBQUlpRixjQUFjLEdBQUcsS0FBckI7RUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxFQUF2QjtFQUNBLElBQUlDLGFBQWEsR0FBR0MsV0FBVyxFQUEvQjs7RUFFQSxTQUFTQyxtQkFBVCxDQUE2QnZCLElBQTdCLEVBQW1DbEIsS0FBbkMsRUFBMEM7SUFDdEMsSUFBSTBDLE1BQU0sR0FBR3hCLElBQUksQ0FBQ0MsWUFBTCxDQUFrQixJQUFsQixFQUF3QndCLEtBQXhCLENBQThCLEdBQTlCLENBQWI7SUFDQUQsTUFBTSxHQUFHQSxNQUFNLENBQUNBLE1BQU0sQ0FBQzlDLE1BQVAsR0FBYyxDQUFmLENBQWY7SUFFQXNCLElBQUksQ0FBQzNELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7TUFDdENnRixhQUFhLENBQUNsRixPQUFkLENBQXNCLFVBQUE2RCxJQUFJLEVBQUk7UUFDMUIsSUFBSUEsSUFBSSxDQUFDMEIsRUFBTCxJQUFXRixNQUFmLEVBQXVCO1VBQ25CRyxjQUFjLENBQUMzQixJQUFELENBQWQ7UUFDSCxDQUZELE1BR0ssQ0FDSjtNQUNKLENBTkQ7SUFPSCxDQVJEO0VBU0g7O0VBQUE7O0VBR0QsU0FBU3NCLFdBQVQsR0FBdUI7SUFDbkIsSUFBSU0sSUFBSSxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxNQUFQLENBQWNDLFVBQWxCLEVBQVg7SUFFQSxPQUFPSixJQUFJLENBQUNLLEtBQUwsQ0FBVztNQUFFQyxJQUFJLEVBQUU7UUFBRUMsUUFBUSxFQUFFO01BQVo7SUFBUixDQUFYLEVBQXVDQyxJQUF2QyxDQUE0QyxVQUFDRixJQUFELEVBQVU7TUFDckQsT0FBT2IsYUFBYSxHQUFHYSxJQUF2QjtJQUNQLENBRk0sQ0FBUDtFQUdIOztFQUVELFNBQVNQLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0lBRXRCLElBQUlTLElBQUksR0FBRzlHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0lBQ0EsSUFBSThHLE9BQU8sR0FBR1YsSUFBSSxDQUFDRixFQUFuQjtJQUNBLElBQUlhLGFBQWEsR0FBR1gsSUFBSSxDQUFDWSxHQUFMLENBQVNDLHdCQUE3QjtJQUNBLElBQUlDLFdBQVcsR0FBR2QsSUFBSSxDQUFDWSxHQUFMLENBQVNHLHNCQUEzQjtJQUVBLElBQUlDLE1BQU0sOGJBTTBCTCxhQU4xQixnTkFTMkRHLFdBVDNELDJKQUFWO0lBYUFMLElBQUksQ0FBQzlELGtCQUFMLENBQXdCLFVBQXhCLEVBQW9DcUUsTUFBcEM7SUFDQVAsSUFBSSxDQUFDMUYsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO0lBQ0FyQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDYSxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFBb0VJLGVBQXBFO0lBQ0FvRyxNQUFNLENBQUN4RyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ3lHLHVCQUFqQztJQUNBLE9BQU8zQixjQUFjLEdBQUcsSUFBeEI7RUFDUDs7RUFFRCxTQUFTMUUsZUFBVCxHQUEyQjtJQUN2QixJQUFHMEUsY0FBSCxFQUFtQjtNQUNmNUYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ3FGLG1CQUExQyxDQUE4RCxPQUE5RCxFQUF1RXBFLGVBQXZFO01BQ0EsSUFBSTRGLElBQUksR0FBRzlHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO01BQ0FELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw4QkFBdkIsRUFBdUQyQixNQUF2RDtNQUNBa0YsSUFBSSxDQUFDMUYsU0FBTCxDQUFlUSxNQUFmLENBQXNCLFlBQXRCO01BQ0EwRixNQUFNLENBQUNoQyxtQkFBUCxDQUEyQixPQUEzQixFQUFvQ2lDLHVCQUFwQztJQUNIOztJQUNELE9BQU8zQixjQUFjLEdBQUcsS0FBeEI7RUFDSDs7RUFFRCxTQUFTMkIsdUJBQVQsQ0FBaUN4RyxDQUFqQyxFQUFvQztJQUNoQyxJQUFHQSxDQUFDLENBQUN5RyxPQUFGLElBQWEsRUFBaEIsRUFBb0I7TUFDaEJ0RyxlQUFlO0lBQ2xCO0VBQ0o7O0VBRUQsU0FBU2QsSUFBVCxHQUFnQjtJQUNaa0csRUFBRSxDQUFDQyxHQUFILENBQU9rQixXQUFQLENBQW1CWixJQUFuQixDQUF5QixVQUFTRixJQUFULEVBQWU7TUFDcENoQixTQUFTLENBQUMvRSxPQUFWLENBQWtCb0YsbUJBQWxCO0lBRUgsQ0FIRDtFQUlIOztFQUVELE9BQU87SUFDSDVGLElBQUksRUFBRUE7RUFESCxDQUFQO0FBR0gsQ0FyRkQ7O0FBdUZlRCxpRkFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1bmRsZS5qc1wiKTtcbiIsImltcG9ydCBmb3JtU3R5bGluZyBmcm9tICcuL2Zvcm0tc3R5bGluZyc7XG5pbXBvcnQgY3VzdG9tTGlnaHRib3ggZnJvbSBcIi4vY3VzdG9tLWxpZ2h0Ym94XCI7XG5cbmltcG9ydCBzdWl0ZXNHcmlkTGlnaHRib3ggZnJvbSAnLi9zdWl0ZXMtZ3JpZC1saWdodGJveCc7XG5pbXBvcnQgY3VzdG9tU2xpZGVyIGZyb20gJy4vY3VzdG9tLXNsaWRlcic7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIHZhciBwYWdlSWRzID0ge1xuICAgICAgICBzdWl0ZXM6IFwiMzQyXCIsXG4gICAgICAgIGhvbWU6ICcyJyxcbiAgICAgICAgbG9jYXRpb246ICczMDInXG4gICAgfVxuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5zdWl0ZXN9YCkpIHtcbiAgICAgICAgY29uc3Qgc2dsID0gc3VpdGVzR3JpZExpZ2h0Ym94KCk7XG4gICAgICAgIHNnbC5pbml0KCk7XG4gICAgfVxuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5ob21lfWApKSB7XG4gICAgICAgIGNvbnN0IGNzID0gY3VzdG9tU2xpZGVyKCk7XG4gICAgICAgIGNzLmluaXQoMik7XG4gICAgfVxuXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYm9keS5wYWdlLWlkLSR7cGFnZUlkcy5sb2NhdGlvbn1gKSkge1xuICAgICAgICBjb25zdCBjcyA9IGN1c3RvbVNsaWRlcigpO1xuICAgICAgICBjcy5pbml0KDQpO1xuICAgIH1cblxuICAgIGNvbnN0IGZzID0gZm9ybVN0eWxpbmcoKTtcbiAgICBjb25zdCBjbCA9IGN1c3RvbUxpZ2h0Ym94KCk7XG5cbiAgICBmcy5pbml0KCk7XG4gICAgY2wuaW5pdCgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLWxpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGF1bmNoTGlnaHRib3goKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHRib3gtZGlzbWlzcycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBsYXVuY2hMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIGxpZ2h0Ym94Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgbGlnaHRib3hGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihlLmtleSA9PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBnc2FwLmZyb21UbyhsaWdodGJveEZvcm0sIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMC4xNVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNtaXNzTGlnaHRib3goKSB7XG4gICAgICAgIGZzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ1dlYnNpdGUgZGV2ZWxvcG1lbnQgYnkgdmFuZXNzYXJ1c3UuY29tJylcbn1cblxuKCkpO1xuIiwiY29uc3QgY3VzdG9tTGlnaHRib3ggPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlZ2lzdGVyLWxpbmsnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGF1bmNoTGlnaHRib3goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpZ2h0Ym94LWRpc21pc3MnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGF1bmNoTGlnaHRib3goKSB7XG4gICAgICAgIHZhciBsaWdodGJveEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBpZighbGlnaHRib3hGb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICBsaWdodGJveEZvcm0uY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3BlbicpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0Ym94LW9wZW4nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tTGlnaHRib3g7IiwiICAgIC8vIHRoaXMgaGFzIGJlZW4gbW92ZWQgdG8gYmUgdGhlIGlubGluZSBjYWxsYmFjayBmdW5jdGlvbiB3aXRoaW4gdGhlIHBsdWdpbiBzZXR0aW5nc1xuXG5jb25zdCBjdXN0b21TbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIFxuICAgIGZ1bmN0aW9uIGluaXQoc2xpZGVySUQpIHtcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mbC1idWlsZGVyLWVkaXRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubjItc2VjdGlvbi1zbWFydHNsaWRlcicpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24obXV0YXRpb25MaXN0LCBvYnNlcnZlcikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbjItc3MtJHtzbGlkZXJJRH1gKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbjJzcy5yZWFkeShzbGlkZXJJRCwgZnVuY3Rpb24oc2xpZGVyLCBzbGlkZXJFbGVtZW50KSB7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0ZW5kLWFycm93LXByZXZpb3VzJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsJzxkaXYgY2xhc3M9XCJzbGlkZXItcGFnaW5hdGlvblwiPjxzcGFuIGNsYXNzPVwiY3VycmVudC1pbmRleFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImJ1bGxldFwiPiZidWxsOzwvc3Bhbj48c3BhbiBjbGFzcz1cInNsaWRlLWxlbmd0aFwiPjwvc3Bhbj48ZGl2PicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGUtbGVuZ3RoXCIpLmlubmVySFRNTCA9IHNsaWRlci5zbGlkZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1pbmRleFwiKS5pbm5lckhUTUwgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtYWluQW5pbWF0aW9uU3RhcnQnLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlLCBhbmltYXRpb24sIGN1cnJlbnRTbGlkZUluZGV4LCBuZXh0U2xpZGVJbmRleCkgeyAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzbGlkZXIuY3VycmVudFNsaWRlLmluZGV4KzE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtaW5kZXhcIikuaW5uZXJIVE1MID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tU2xpZGVyOyIsImNvbnN0IGZvcm1TdHlsaW5nID0gKGZ1bmN0aW9uICgpIHtcblxuLy8gICAgIGZ1bmN0aW9uIGRyb3Bkb3duKCkge1xuLy8gICAgICAgICB2YXIgc2VsZWN0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3Bmb3Jtcy1maWVsZC1zZWxlY3Qgc2VsZWN0Jyk7XG4gICAgICAgIFxuLy8gICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZWN0Tm9kZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgIC8vIHJ1biBmb3IgZWFjaCBzZWxlY3Qgbm9kZVxuLy8gICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3ROb2Rlc1tpXTtcbi8vICAgICAgICAgICAgIHZhciBsaU1hcmt1cCA9ICcnO1xuLy8gICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBzZWxlY3ROb2Rlc1tpXS5vcHRpb25zO1xuLy8gICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbi8vICAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxhIGhyZWY9XCIjXCJkYXRhLWRkPVwiJytjdXJyZW50U2VsZWN0LmdldEF0dHJpYnV0ZShcImlkXCIpKydcIiBkYXRhLXZhbHVlPVwiJytvcHRpb25zW2pdLmdldEF0dHJpYnV0ZSgndmFsdWUnKSsnXCI+JytvcHRpb25zW2pdLmlubmVySFRNTCsnPC9hPjwvbGk+Jztcbi8vICAgICAgICAgICAgICAgICBsaU1hcmt1cCArPSBpdGVtO1xuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCI+PHAgY2xhc3M9XCJzZWxlY3RlZC1vcHRpb25cIj48c3BhbiBjbGFzcz1cInRleHRcIj4nK2N1cnJlbnRTZWxlY3Rpb25UZXh0Kyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJhcnJvd1wiPjwvc3Bhbj48L3A+PHVsIGNsYXNzPVwiZGQtY29udGFpbmVyXCI+JytsaU1hcmt1cCsnPC91bD48L2Rpdj4nO1xuLy8gICAgICAgICAgICAgc2VsZWN0Tm9kZXNbaV0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGh0bWwpOyBcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkRyb3Bkb3duKTtcbi8vICAgICAgICAgfSlcblxuLy8gICAgICAgICAvLyBjbGljayBvbiBkcm9wZG93biBlbGVtZW50XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bi1pdGVtIGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbi8vICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIGZpbmRTZWxlY3QgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZCcpO1xuLy8gICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZmluZFNlbGVjdCk7XG4vLyAgICAgICAgICAgICAgICAgdXBkYXRlT3JpZ2luYWxTZWxlY3QodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuLy8gICAgICAgICAgICAgICAgIHVwZGF0ZUxhYmVsKHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbi8vICAgICAgICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4vLyAgICAgICAgICAgICB9KVxuLy8gICAgICAgICB9KTsgICAgICAgIFxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbi8vICAgICAgICAgdmFyIGxhYmVsVGV4dE5vZGUgPSBvcmlnaW5hbFNlbGVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLW9wdGlvbiAudGV4dCcpO1xuLy8gICAgICAgICBsYWJlbFRleHROb2RlLmlubmVySFRNTCA9IGNsaWNrZWRFbC5pbm5lckhUTUw7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlT3JpZ2luYWxTZWxlY3QoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuLy8gICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb3JpZ2luYWxTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgaWYob3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgPT09IGNsaWNrZWRFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKSkge1xuLy8gICAgICAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXInKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4vLyAgICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkZC1jbG9zZWQnKTtcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RkLW9wZW4nKTtcbi8vICAgICAgICAgfSlcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBvcGVuRHJvcGRvd24oKSB7XG4vLyAgICAgICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2RkLW9wZW4nKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBpbml0KCkge1xuLy8gICAgICAgICBkcm9wZG93bigpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIGluaXQ6IGluaXQsXG4vLyAgICAgICAgIGNsb3NlRHJvcGRvd246IGNsb3NlRHJvcGRvd25cbi8vICAgICB9XG4vLyB9KTtcblxuXG5cblxuXG5mdW5jdGlvbiBkcm9wZG93bigpIHtcbiAgICB2YXIgc2VsZWN0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcblxuICAgIGlmKCFzZWxlY3ROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZWN0Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gcnVuIGZvciBlYWNoIHNlbGVjdCBub2RlXG4gICAgICAgIHZhciBjdXJyZW50U2VsZWN0ID0gc2VsZWN0Tm9kZXNbaV07XG4gICAgICAgIHZhciBsaU1hcmt1cCA9ICcnO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHNlbGVjdE5vZGVzW2ldLm9wdGlvbnM7XG4gICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uVGV4dCA9IGN1cnJlbnRTZWxlY3Qub3B0aW9uc1tzZWxlY3ROb2Rlc1tpXS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuXG4gICAgICAgIGlmKGN1cnJlbnRTZWxlY3Qub3B0aW9uc1tzZWxlY3ROb2Rlc1tpXS5zZWxlY3RlZEluZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gJyc7XG4gICAgfVxuXG4gICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgYWRkRW1weUNsYXNzID0gb3B0aW9uc1tqXS5jbGFzc05hbWUgPT09ICdlbXB0eScgPyAnZW1wdHknIDogJyc7XG4gICAgICAgICAgICB2YXIgaXRlbSA9ICc8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtICcgK2FkZEVtcHlDbGFzcysgJ1wiPjxhIHRhYmluZGV4PVwiMFwiIGhyZWY9XCIjXCJkYXRhLWRkPVwiJytjdXJyZW50U2VsZWN0LmdldEF0dHJpYnV0ZShcImlkXCIpKydcIiBkYXRhLXZhbHVlPVwiJytvcHRpb25zW2pdLmdldEF0dHJpYnV0ZSgndmFsdWUnKSsnXCI+JytvcHRpb25zW2pdLmlubmVySFRNTCsnPC9hPjwvbGk+JztcbiAgICAgICAgICAgIGxpTWFya3VwICs9IGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCI+PHAgY2xhc3M9XCJzZWxlY3RlZC1vcHRpb25cIj48c3BhbiBjbGFzcz1cInRleHRcIj4nK2N1cnJlbnRTZWxlY3Rpb25UZXh0Kyc8L3NwYW4+PHNwYW4gY2xhc3M9XCJhcnJvd1wiPjwvc3Bhbj48L3A+PHVsIGNsYXNzPVwiZGQtY29udGFpbmVyXCI+JytsaU1hcmt1cCsnPC91bD48L2Rpdj4nO1xuICAgICAgICBzZWxlY3ROb2Rlc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7IFxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRHJvcGRvd24pO1xuICAgIH0pXG5cbiAgICAvLyBjbGljayBvbiBkcm9wZG93biBlbGVtZW50XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0gYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBmaW5kU2VsZWN0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGQnKTtcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrZmluZFNlbGVjdCk7XG4gICAgICAgICAgICB1cGRhdGVPcmlnaW5hbFNlbGVjdCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4gICAgICAgICAgICB1cGRhdGVMYWJlbCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHsgICAgICAgIFxuICAgIHZhciBsYWJlbFRleHROb2RlID0gb3JpZ2luYWxTZWxlY3QubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZC1vcHRpb24gLnRleHQnKTtcbiAgICBsYWJlbFRleHROb2RlLmlubmVySFRNTCA9IGNsaWNrZWRFbC5pbm5lckhUTUw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KGNsaWNrZWRFbCwgb3JpZ2luYWxTZWxlY3QpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgb3JpZ2luYWxTZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gY2xpY2tlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZURyb3Bkb3duKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lcicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZGQtY2xvc2VkJyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2RkLW9wZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0Zvck91dHNpZGVDbGljayk7XG4gICAgICAgIHZhciBkZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGkgPCBkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRkc1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gb3BlbkRyb3Bkb3duKCkge1xuICAgIHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2RkLW9wZW4nKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRm9yT3V0c2lkZUNsaWNrKTtcbiAgICB2YXIgZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJyk7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpIDwgZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3Bkb3duKTtcbiAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvck91dHNpZGVDbGljayhlKSB7XG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyLmRkLW9wZW4nKSkge1xuICAgICAgICBpZighKGUudGFyZ2V0LnRhZ05hbWUgPT0nQScgfHwgZS50YXJnZXQudGFnTmFtZSA9PSdTUEFOJyB8fCBlLnRhcmdldC50YWdOYW1lID09J1AnKSkge1xuICAgICAgICAgICAgY2xvc2VEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5yZXR1cm4ge1xuICAgIGluaXQ6IGRyb3Bkb3duLFxuICAgIGNsb3NlRHJvcGRvd246IGNsb3NlRHJvcGRvd25cbn1cbn0pOyBcblxuZXhwb3J0IGRlZmF1bHQgZm9ybVN0eWxpbmc7IiwiY29uc3Qgc3VpdGVzR3JpZExpZ2h0Ym94ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2VzZy1ncmlkLTMtMSBsaVwiKTtcbiAgICB2YXIgbGlnaHRib3hBY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgYWxsTGlnaHRib3hQb3N0cyA9IFtdO1xuICAgIHZhciBhbGxGbG9vcnBsYW5zID0gZ2V0QWxsUG9zdHMoKTtcblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZUNsaWNrRXZlbnQoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHBvc3RJRCA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwiaWRcIikuc3BsaXQoJy0nKTtcbiAgICAgICAgcG9zdElEID0gcG9zdElEW3Bvc3RJRC5sZW5ndGgtMV07XG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBhbGxGbG9vcnBsYW5zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gcG9zdElEKSB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxpZ2h0Ym94KGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTsgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgICAgICAgdmFyIHBvc3QgPSBuZXcgd3AuYXBpLm1vZGVscy5GbG9vcnBsYW5zKCk7XG5cbiAgICAgICAgcmV0dXJuIHBvc3QuZmV0Y2goeyBkYXRhOiB7IHBlcl9wYWdlOiA0MCB9IH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsRmxvb3JwbGFucyA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpZ2h0Ym94KHBvc3QpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcG9zdC5pZDtcbiAgICAgICAgICAgIHZhciBsaWdodEJveEltYWdlID0gcG9zdC5hY2YuZmxvb3JwbGFuX2xpZ2h0Ym94X2ltYWdlO1xuICAgICAgICAgICAgdmFyIHBkZkRvd25sb2FkID0gcG9zdC5hY2YuZmxvb3JwbGFuX3BkZl9kb3dubG9hZDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIG1hcmt1cCA9IGA8ZGl2IGlkPVwiZXNzZW50aWFsR3JpZEN1c3RvbUxpZ2h0Ym94XCIgY2xhc3M9XCJlc3NlbnRpYWwtZ3JpZC1jdXN0b20tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc21pc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PHNwYW4+PC9zcGFuPjxzcGFuPjwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtsaWdodEJveEltYWdlfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbC1idXR0b24gcm91bmRlZC1jb3JuZXJzXCIgaHJlZj1cIiR7cGRmRG93bmxvYWR9XCIgdGFyZ2V0PVwiYmxhbmtcIj5Eb3dubG9hZCBTdWl0ZSBQREY8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIG1hcmt1cCk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzbWlzcyBidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlib2FyZERpc21pc3NMaWdodGJveClcbiAgICAgICAgICAgIHJldHVybiBsaWdodGJveEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBpZihsaWdodGJveEFjdGl2ZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNtaXNzIGJ1dHRvblwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc21pc3NMaWdodGJveCk7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlc3NlbnRpYWxHcmlkQ3VzdG9tTGlnaHRib3hcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5Ym9hcmREaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaWdodGJveEFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGtleWJvYXJkRGlzbWlzc0xpZ2h0Ym94KGUpIHtcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDI3KSB7XG4gICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHdwLmFwaS5sb2FkUHJvbWlzZS5kb25lKCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBncmlkSXRlbXMuZm9yRWFjaChjb25maWd1cmVDbGlja0V2ZW50KTtcblxuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdWl0ZXNHcmlkTGlnaHRib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==