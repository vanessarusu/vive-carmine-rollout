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
    var post = new wp.api.models.Floorplans();
    return post.fetch({
      data: {
        per_page: 40
      }
    }).done(function (data) {
      console.log(data);
      return allFloorplans = data;
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3VzdG9tLWxpZ2h0Ym94LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jdXN0b20tc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9mb3JtLXN0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N1aXRlcy1ncmlkLWxpZ2h0Ym94LmpzIl0sIm5hbWVzIjpbInBhZ2VJZHMiLCJzdWl0ZXMiLCJob21lIiwibG9jYXRpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZ2wiLCJzdWl0ZXNHcmlkTGlnaHRib3giLCJpbml0IiwiY3MiLCJjdXN0b21TbGlkZXIiLCJmcyIsImZvcm1TdHlsaW5nIiwiY2wiLCJjdXN0b21MaWdodGJveCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGF1bmNoTGlnaHRib3giLCJkaXNtaXNzTGlnaHRib3giLCJsaWdodGJveEZvcm0iLCJjbGFzc0xpc3QiLCJhZGQiLCJrZXkiLCJnc2FwIiwiZnJvbVRvIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVycyIsInNsaWRlcklEIiwidGFyZ2V0Tm9kZSIsImNvbmZpZyIsImF0dHJpYnV0ZXMiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY2FsbGJhY2siLCJtdXRhdGlvbkxpc3QiLCJvYnNlcnZlciIsIm11dGF0aW9uIiwidHlwZSIsIm4yc3MiLCJyZWFkeSIsInNsaWRlciIsInNsaWRlckVsZW1lbnQiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5uZXJIVE1MIiwic2xpZGVzIiwibGVuZ3RoIiwiYW5pbWF0aW9uIiwiY3VycmVudFNsaWRlSW5kZXgiLCJuZXh0U2xpZGVJbmRleCIsImluZGV4IiwiY3VycmVudFNsaWRlIiwiZGlzY29ubmVjdCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZHJvcGRvd24iLCJzZWxlY3ROb2RlcyIsImkiLCJjdXJyZW50U2VsZWN0IiwibGlNYXJrdXAiLCJvcHRpb25zIiwiY3VycmVudFNlbGVjdGlvblRleHQiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImNvbnRhaW5zIiwiaiIsImFkZEVtcHlDbGFzcyIsImNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJodG1sIiwib3BlbkRyb3Bkb3duIiwiZmluZFNlbGVjdCIsIm9yaWdpbmFsU2VsZWN0IiwidXBkYXRlT3JpZ2luYWxTZWxlY3QiLCJ1cGRhdGVMYWJlbCIsImNsaWNrZWRFbCIsImxhYmVsVGV4dE5vZGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tGb3JPdXRzaWRlQ2xpY2siLCJkZHMiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwiZ3JpZEl0ZW1zIiwibGlnaHRib3hBY3RpdmUiLCJhbGxMaWdodGJveFBvc3RzIiwiYWxsRmxvb3JwbGFucyIsImdldEFsbFBvc3RzIiwiY29uZmlndXJlQ2xpY2tFdmVudCIsInBvc3RJRCIsInNwbGl0IiwiaWQiLCJOdW1iZXIiLCJjcmVhdGVMaWdodGJveCIsInBvc3QiLCJ3cCIsImFwaSIsIm1vZGVscyIsIkZsb29ycGxhbnMiLCJmZXRjaCIsImRhdGEiLCJwZXJfcGFnZSIsImRvbmUiLCJib2R5IiwiY29udGVudCIsImxpZ2h0Qm94SW1hZ2UiLCJhY2YiLCJmbG9vcnBsYW5fbGlnaHRib3hfaW1hZ2UiLCJwZGZEb3dubG9hZCIsImZsb29ycGxhbl9wZGZfZG93bmxvYWQiLCJtYXJrdXAiLCJ3aW5kb3ciLCJrZXlib2FyZERpc21pc3NMaWdodGJveCIsImtleUNv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QXVFcEUsZUFBdkU7TUFDQSxJQUFJNkYsSUFBSSxHQUFHL0csUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQVg7TUFDQUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLDhCQUF2QixFQUF1RDJCLE1BQXZEO01BQ0FtRixJQUFJLENBQUMzRixTQUFMLENBQWVRLE1BQWYsQ0FBc0IsWUFBdEI7TUFDQTJGLE1BQU0sQ0FBQ2pDLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9Da0MsdUJBQXBDO0lBQ0g7O0lBQ0QsT0FBTzVCLGNBQWMsR0FBRyxLQUF4QjtFQUNIOztFQUVELFNBQVM0Qix1QkFBVCxDQUFpQ3pHLENBQWpDLEVBQW9DO0lBQ2hDLElBQUdBLENBQUMsQ0FBQzBHLE9BQUYsSUFBYSxFQUFoQixFQUFvQjtNQUNoQnZHLGVBQWU7SUFDbEI7RUFDSjs7RUFFRCxTQUFTZCxJQUFULEdBQWdCO0lBQ1ptRyxFQUFFLENBQUNDLEdBQUgsQ0FBT2tCLFdBQVAsQ0FBbUJaLElBQW5CLENBQXlCLFVBQVNGLElBQVQsRUFBZTtNQUNwQ2pCLFNBQVMsQ0FBQy9FLE9BQVYsQ0FBa0JvRixtQkFBbEI7SUFFSCxDQUhEO0VBSUg7O0VBRUQsT0FBTztJQUNINUYsSUFBSSxFQUFFQTtFQURILENBQVA7QUFHSCxDQXRHRDs7QUF3R2VELGlGQUFmLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVuZGxlLmpzXCIpO1xuIiwiaW1wb3J0IGZvcm1TdHlsaW5nIGZyb20gJy4vZm9ybS1zdHlsaW5nJztcbmltcG9ydCBjdXN0b21MaWdodGJveCBmcm9tIFwiLi9jdXN0b20tbGlnaHRib3hcIjtcblxuaW1wb3J0IHN1aXRlc0dyaWRMaWdodGJveCBmcm9tICcuL3N1aXRlcy1ncmlkLWxpZ2h0Ym94JztcbmltcG9ydCBjdXN0b21TbGlkZXIgZnJvbSAnLi9jdXN0b20tc2xpZGVyJztcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHBhZ2VJZHMgPSB7XG4gICAgICAgIHN1aXRlczogXCIzNDJcIixcbiAgICAgICAgaG9tZTogJzInLFxuICAgICAgICBsb2NhdGlvbjogJzMwMidcbiAgICB9XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5LnBhZ2UtaWQtJHtwYWdlSWRzLnN1aXRlc31gKSkge1xuICAgICAgICBjb25zdCBzZ2wgPSBzdWl0ZXNHcmlkTGlnaHRib3goKTtcbiAgICAgICAgc2dsLmluaXQoKTtcbiAgICB9XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5LnBhZ2UtaWQtJHtwYWdlSWRzLmhvbWV9YCkpIHtcbiAgICAgICAgY29uc3QgY3MgPSBjdXN0b21TbGlkZXIoKTtcbiAgICAgICAgY3MuaW5pdCgyKTtcbiAgICB9XG5cbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBib2R5LnBhZ2UtaWQtJHtwYWdlSWRzLmxvY2F0aW9ufWApKSB7XG4gICAgICAgIGNvbnN0IGNzID0gY3VzdG9tU2xpZGVyKCk7XG4gICAgICAgIGNzLmluaXQoNCk7XG4gICAgfVxuXG4gICAgY29uc3QgZnMgPSBmb3JtU3R5bGluZygpO1xuICAgIGNvbnN0IGNsID0gY3VzdG9tTGlnaHRib3goKTtcblxuICAgIGZzLmluaXQoKTtcbiAgICBjbC5pbml0KCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWdodGJveC1kaXNtaXNzJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRpc21pc3NMaWdodGJveCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGxhdW5jaExpZ2h0Ym94KCkge1xuICAgICAgICB2YXIgbGlnaHRib3hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0Ym94Rm9ybScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xuICAgICAgICBsaWdodGJveEZvcm0uY2xhc3NMaXN0LmFkZCgnbGlnaHRib3gtb3BlbicpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmKGUua2V5ID09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdzYXAuZnJvbVRvKGxpZ2h0Ym94Rm9ybSwge1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjE1XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgZnMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnV2Vic2l0ZSBkZXZlbG9wbWVudCBieSB2YW5lc3NhcnVzdS5jb20nKVxufVxuXG4oKSk7XG4iLCJjb25zdCBjdXN0b21MaWdodGJveCA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVnaXN0ZXItbGluaycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsYXVuY2hMaWdodGJveCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlnaHRib3gtZGlzbWlzcycpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsYXVuY2hMaWdodGJveCgpIHtcbiAgICAgICAgdmFyIGxpZ2h0Ym94Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaWdodGJveEZvcm0nKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFsaWdodGJveEZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgIGxpZ2h0Ym94Rm9ybS5jbGFzc0xpc3QuYWRkKCdsaWdodGJveC1vcGVuJyk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYoZS5rZXkgPT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBkaXNtaXNzTGlnaHRib3goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ3NhcC5mcm9tVG8obGlnaHRib3hGb3JtLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMTVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzbWlzc0xpZ2h0Ym94KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlnaHRib3hGb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHRib3gtb3BlbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21MaWdodGJveDsiLCIgICAgLy8gdGhpcyBoYXMgYmVlbiBtb3ZlZCB0byBiZSB0aGUgaW5saW5lIGNhbGxiYWNrIGZ1bmN0aW9uIHdpdGhpbiB0aGUgcGx1Z2luIHNldHRpbmdzXG5cbmNvbnN0IGN1c3RvbVNsaWRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgXG4gICAgZnVuY3Rpb24gaW5pdChzbGlkZXJJRCkge1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZsLWJ1aWxkZXItZWRpdFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uMi1zZWN0aW9uLXNtYXJ0c2xpZGVyJyk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihtdXRhdGlvbkxpc3QsIG9ic2VydmVyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuMi1zcy0ke3NsaWRlcklEfWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuMnNzLnJlYWR5KHNsaWRlcklELCBmdW5jdGlvbihzbGlkZXIsIHNsaWRlckVsZW1lbnQpIHsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRlbmQtYXJyb3ctcHJldmlvdXMnKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywnPGRpdiBjbGFzcz1cInNsaWRlci1wYWdpbmF0aW9uXCI+PHNwYW4gY2xhc3M9XCJjdXJyZW50LWluZGV4XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiYnVsbGV0XCI+JmJ1bGw7PC9zcGFuPjxzcGFuIGNsYXNzPVwic2xpZGUtbGVuZ3RoXCI+PC9zcGFuPjxkaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZS1sZW5ndGhcIikuaW5uZXJIVE1MID0gc2xpZGVyLnNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWluZGV4XCIpLmlubmVySFRNTCA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21haW5BbmltYXRpb25TdGFydCcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGUsIGFuaW1hdGlvbiwgY3VycmVudFNsaWRlSW5kZXgsIG5leHRTbGlkZUluZGV4KSB7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNsaWRlci5jdXJyZW50U2xpZGUuaW5kZXgrMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1pbmRleFwiKS5pbm5lckhUTUwgPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcblxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21TbGlkZXI7IiwiY29uc3QgZm9ybVN0eWxpbmcgPSAoZnVuY3Rpb24gKCkge1xuXG4vLyAgICAgZnVuY3Rpb24gZHJvcGRvd24oKSB7XG4vLyAgICAgICAgIHZhciBzZWxlY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cGZvcm1zLWZpZWxkLXNlbGVjdCBzZWxlY3QnKTtcbiAgICAgICAgXG4vLyAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgICAgICAgLy8gcnVuIGZvciBlYWNoIHNlbGVjdCBub2RlXG4vLyAgICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdCA9IHNlbGVjdE5vZGVzW2ldO1xuLy8gICAgICAgICAgICAgdmFyIGxpTWFya3VwID0gJyc7XG4vLyAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHNlbGVjdE5vZGVzW2ldLm9wdGlvbnM7XG4vLyAgICAgICAgICAgICB2YXIgY3VycmVudFNlbGVjdGlvblRleHQgPSBjdXJyZW50U2VsZWN0Lm9wdGlvbnNbc2VsZWN0Tm9kZXNbaV0uc2VsZWN0ZWRJbmRleF0udGV4dDtcblxuLy8gICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbi8vICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICc8bGkgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+PGEgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuLy8gICAgICAgICAgICAgICAgIGxpTWFya3VwICs9IGl0ZW07XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4vLyAgICAgICAgICAgICBzZWxlY3ROb2Rlc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgaHRtbCk7IFxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuRHJvcGRvd24pO1xuLy8gICAgICAgICB9KVxuXG4vLyAgICAgICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0gYScpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuLy8gICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgICAgICB2YXIgZmluZFNlbGVjdCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLWRkJyk7XG4vLyAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitmaW5kU2VsZWN0KTtcbi8vICAgICAgICAgICAgICAgICB1cGRhdGVPcmlnaW5hbFNlbGVjdCh0aGlzLCBvcmlnaW5hbFNlbGVjdCk7XG4vLyAgICAgICAgICAgICAgICAgdXBkYXRlTGFiZWwodGhpcywgb3JpZ2luYWxTZWxlY3QpO1xuLy8gICAgICAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgIH0pOyAgICAgICAgXG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuLy8gICAgICAgICB2YXIgbGFiZWxUZXh0Tm9kZSA9IG9yaWdpbmFsU2VsZWN0Lm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQtb3B0aW9uIC50ZXh0Jyk7XG4vLyAgICAgICAgIGxhYmVsVGV4dE5vZGUuaW5uZXJIVE1MID0gY2xpY2tlZEVsLmlubmVySFRNTDtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiB1cGRhdGVPcmlnaW5hbFNlbGVjdChjbGlja2VkRWwsIG9yaWdpbmFsU2VsZWN0KSB7XG4vLyAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgICAgICBpZihvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLmdldEF0dHJpYnV0ZSgndmFsdWUnKSA9PT0gY2xpY2tlZEVsLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpKSB7XG4vLyAgICAgICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgdHJ1ZSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICBvcmlnaW5hbFNlbGVjdC5vcHRpb25zW2ldLnJlbW92ZUF0dHJpYnV0ZSgnc2VsZWN0ZWQnKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4vLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLmRkLWNvbnRhaW5lcicpLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbi8vICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2RkLWNsb3NlZCcpO1xuLy8gICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGQtb3BlbicpO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIG9wZW5Ecm9wZG93bigpIHtcbi8vICAgICAgICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZGQtb3BlbicpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4vLyAgICAgICAgIGRyb3Bkb3duKCk7XG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgaW5pdDogaW5pdCxcbi8vICAgICAgICAgY2xvc2VEcm9wZG93bjogY2xvc2VEcm9wZG93blxuLy8gICAgIH1cbi8vIH0pO1xuXG5cblxuXG5cbmZ1bmN0aW9uIGRyb3Bkb3duKCkge1xuICAgIHZhciBzZWxlY3ROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xuXG4gICAgaWYoIXNlbGVjdE5vZGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzZWxlY3ROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBydW4gZm9yIGVhY2ggc2VsZWN0IG5vZGVcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3QgPSBzZWxlY3ROb2Rlc1tpXTtcbiAgICAgICAgdmFyIGxpTWFya3VwID0gJyc7XG4gICAgICAgIHZhciBvcHRpb25zID0gc2VsZWN0Tm9kZXNbaV0ub3B0aW9ucztcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3Rpb25UZXh0ID0gY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG5cbiAgICAgICAgaWYoY3VycmVudFNlbGVjdC5vcHRpb25zW3NlbGVjdE5vZGVzW2ldLnNlbGVjdGVkSW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnZW1wdHknKSkge1xuICAgICAgICAgICAgY3VycmVudFNlbGVjdGlvblRleHQgPSAnJztcbiAgICB9XG5cbiAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBhZGRFbXB5Q2xhc3MgPSBvcHRpb25zW2pdLmNsYXNzTmFtZSA9PT0gJ2VtcHR5JyA/ICdlbXB0eScgOiAnJztcbiAgICAgICAgICAgIHZhciBpdGVtID0gJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gJyArYWRkRW1weUNsYXNzKyAnXCI+PGEgdGFiaW5kZXg9XCIwXCIgaHJlZj1cIiNcImRhdGEtZGQ9XCInK2N1cnJlbnRTZWxlY3QuZ2V0QXR0cmlidXRlKFwiaWRcIikrJ1wiIGRhdGEtdmFsdWU9XCInK29wdGlvbnNbal0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKydcIj4nK29wdGlvbnNbal0uaW5uZXJIVE1MKyc8L2E+PC9saT4nO1xuICAgICAgICAgICAgbGlNYXJrdXAgKz0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJjdXN0b20tZHJvcGRvd25cIj48cCBjbGFzcz1cInNlbGVjdGVkLW9wdGlvblwiPjxzcGFuIGNsYXNzPVwidGV4dFwiPicrY3VycmVudFNlbGVjdGlvblRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImFycm93XCI+PC9zcGFuPjwvcD48dWwgY2xhc3M9XCJkZC1jb250YWluZXJcIj4nK2xpTWFya3VwKyc8L3VsPjwvZGl2Pic7XG4gICAgICAgIHNlbGVjdE5vZGVzW2ldLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBodG1sKTsgXG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1kcm9wZG93biAuc2VsZWN0ZWQtb3B0aW9uJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Ecm9wZG93bik7XG4gICAgfSlcblxuICAgIC8vIGNsaWNrIG9uIGRyb3Bkb3duIGVsZW1lbnRcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taXRlbSBhJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGZpbmRTZWxlY3QgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS1kZCcpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIitmaW5kU2VsZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZU9yaWdpbmFsU2VsZWN0KHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgIHVwZGF0ZUxhYmVsKHRoaXMsIG9yaWdpbmFsU2VsZWN0KTtcbiAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGFiZWwoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkgeyAgICAgICAgXG4gICAgdmFyIGxhYmVsVGV4dE5vZGUgPSBvcmlnaW5hbFNlbGVjdC5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkLW9wdGlvbiAudGV4dCcpO1xuICAgIGxhYmVsVGV4dE5vZGUuaW5uZXJIVE1MID0gY2xpY2tlZEVsLmlubmVySFRNTDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlT3JpZ2luYWxTZWxlY3QoY2xpY2tlZEVsLCBvcmlnaW5hbFNlbGVjdCkge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbFNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uZ2V0QXR0cmlidXRlKCd2YWx1ZScpID09PSBjbGlja2VkRWwuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJykpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2VsZWN0Lm9wdGlvbnNbaV0uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3JpZ2luYWxTZWxlY3Qub3B0aW9uc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlRHJvcGRvd24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZGQtY29udGFpbmVyJykuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdkZC1jbG9zZWQnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGQtb3BlbicpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrRm9yT3V0c2lkZUNsaWNrKTtcbiAgICAgICAgdmFyIGRkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tZHJvcGRvd24gLnNlbGVjdGVkLW9wdGlvbicpO1xuICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGRkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VEcm9wZG93bik7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBvcGVuRHJvcGRvd24oKSB7XG4gICAgdGhpcy5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZGQtb3BlbicpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tGb3JPdXRzaWRlQ2xpY2spO1xuICAgIHZhciBkZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLWRyb3Bkb3duIC5zZWxlY3RlZC1vcHRpb24nKTtcbiAgICAgICAgZm9yKHZhciBpPTA7IGkgPCBkZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRkc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd24pO1xuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yT3V0c2lkZUNsaWNrKGUpIHtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5kZC1jb250YWluZXIuZGQtb3BlbicpKSB7XG4gICAgICAgIGlmKCEoZS50YXJnZXQudGFnTmFtZSA9PSdBJyB8fCBlLnRhcmdldC50YWdOYW1lID09J1NQQU4nIHx8IGUudGFyZ2V0LnRhZ05hbWUgPT0nUCcpKSB7XG4gICAgICAgICAgICBjbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnJldHVybiB7XG4gICAgaW5pdDogZHJvcGRvd24sXG4gICAgY2xvc2VEcm9wZG93bjogY2xvc2VEcm9wZG93blxufVxufSk7IFxuXG5leHBvcnQgZGVmYXVsdCBmb3JtU3R5bGluZzsiLCJjb25zdCBzdWl0ZXNHcmlkTGlnaHRib3ggPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZXNnLWdyaWQtMy0xIGxpXCIpO1xuICAgIHZhciBsaWdodGJveEFjdGl2ZSA9IGZhbHNlO1xuICAgIHZhciBhbGxMaWdodGJveFBvc3RzID0gW107XG4gICAgdmFyIGFsbEZsb29ycGxhbnMgPSBnZXRBbGxQb3N0cygpO1xuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlQ2xpY2tFdmVudChpdGVtLCBpbmRleCkge1xuICAgICAgICB2YXIgcG9zdElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS5zcGxpdCgnLScpO1xuICAgICAgICBwb3N0SUQgPSBwb3N0SURbcG9zdElELmxlbmd0aC0xXTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxsRmxvb3JwbGFucyk7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgYWxsRmxvb3JwbGFucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxGbG9vcnBsYW5zW2ldLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coTnVtYmVyKHBvc3RJRCkpO1xuICAgICAgICAgICAgICAgICAgICBpZihhbGxGbG9vcnBsYW5zW2ldLmlkID09PSBOdW1iZXIocG9zdElEKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGlnaHRib3goYWxsRmxvb3JwbGFuc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2gnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFsbEZsb29ycGxhbnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGl0ZW0uaWQgPT0gcG9zdElEKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjcmVhdGVMaWdodGJveChpdGVtKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pOyAgICAgICAgXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICBcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgICAgICAgdmFyIHBvc3QgPSBuZXcgd3AuYXBpLm1vZGVscy5GbG9vcnBsYW5zKCk7XG5cbiAgICAgICAgcmV0dXJuIHBvc3QuZmV0Y2goeyBkYXRhOiB7IHBlcl9wYWdlOiA0MCB9IH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpOyBcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxsRmxvb3JwbGFucyA9IGRhdGE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpZ2h0Ym94KHBvc3QpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcG9zdC5pZDtcbiAgICAgICAgICAgIHZhciBsaWdodEJveEltYWdlID0gcG9zdC5hY2YuZmxvb3JwbGFuX2xpZ2h0Ym94X2ltYWdlIHx8IG51bGw7XG4gICAgICAgICAgICB2YXIgcGRmRG93bmxvYWQgPSBwb3N0LmFjZi5mbG9vcnBsYW5fcGRmX2Rvd25sb2FkIHx8IG51bGw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBtYXJrdXAgPSBgPGRpdiBpZD1cImVzc2VudGlhbEdyaWRDdXN0b21MaWdodGJveFwiIGNsYXNzPVwiZXNzZW50aWFsLWdyaWQtY3VzdG9tLW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNtaXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPjxzcGFuPjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bGlnaHRCb3hJbWFnZX1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmwtYnV0dG9uIHJvdW5kZWQtY29ybmVyc1wiIGhyZWY9XCIke3BkZkRvd25sb2FkfVwiIHRhcmdldD1cImJsYW5rXCI+RG93bmxvYWQgU3VpdGUgUERGPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBtYXJrdXApO1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc21pc3MgYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzbWlzc0xpZ2h0Ym94KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5Ym9hcmREaXNtaXNzTGlnaHRib3gpXG4gICAgICAgICAgICByZXR1cm4gbGlnaHRib3hBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc21pc3NMaWdodGJveCgpIHtcbiAgICAgICAgaWYobGlnaHRib3hBY3RpdmUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzbWlzcyBidXR0b25cIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNtaXNzTGlnaHRib3gpO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXNzZW50aWFsR3JpZEN1c3RvbUxpZ2h0Ym94XCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleWJvYXJkRGlzbWlzc0xpZ2h0Ym94KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlnaHRib3hBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXlib2FyZERpc21pc3NMaWdodGJveChlKSB7XG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAyNykge1xuICAgICAgICAgICAgZGlzbWlzc0xpZ2h0Ym94KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB3cC5hcGkubG9hZFByb21pc2UuZG9uZSggZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgZ3JpZEl0ZW1zLmZvckVhY2goY29uZmlndXJlQ2xpY2tFdmVudCk7XG5cbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3VpdGVzR3JpZExpZ2h0Ym94OyJdLCJzb3VyY2VSb290IjoiIn0=