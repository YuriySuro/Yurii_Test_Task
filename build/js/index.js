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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  // Slider\n  $('.owl-carousel').owlCarousel({\n    loop: true,\n    margin: 10,\n    nav: false,\n    responsive: {\n      0: {\n        items: 1\n      },\n      600: {\n        items: 1\n      },\n      1000: {\n        items: 1\n      }\n    }\n  }); // Modal window\n\n  $(\".modal\").each(function () {\n    $(this).wrap('<div class=\"overlay\"></div>');\n  });\n  $(\".open-modal\").on('click', function (e) {\n    e.preventDefault();\n    e.stopImmediatePropagation;\n    var $this = $(this),\n        modal = $($this).data(\"modal\");\n    $(modal).parents(\".overlay\").addClass(\"open\");\n    setTimeout(function () {\n      $(modal).addClass(\"open\");\n    }, 350);\n    $(document).on('click', function (e) {\n      var target = $(e.target);\n\n      if ($(target).hasClass(\"overlay\")) {\n        $(target).find(\".modal\").each(function () {\n          $(this).removeClass(\"open\");\n        });\n        setTimeout(function () {\n          $(target).removeClass(\"open\");\n        }, 350);\n      }\n    });\n  });\n  $(\".close-modal\").on('click', function (e) {\n    e.preventDefault();\n    e.stopImmediatePropagation;\n    var $this = $(this),\n        modal = $($this).data(\"modal\");\n    $(modal).removeClass(\"open\");\n    setTimeout(function () {\n      $(modal).parents(\".overlay\").removeClass(\"open\");\n    }, 350);\n  }); // Scroll Down\n\n  $(\".go_to\").click(function (e) {\n    e.preventDefault();\n    var scroll_el = $(this).attr(\"href\");\n\n    if ($(scroll_el).length != 0) {\n      $('html, body').animate({\n        scrollTop: $(scroll_el).offset().top\n      }, 250);\n    }\n\n    return false;\n  }); // Timer \n\n  function getDate() {\n    var today = new Date();\n    var h = today.getHours();\n    var m = today.getMinutes();\n\n    if (m < 10) {\n      m = \"0\" + m;\n    }\n\n    if (h < 10) {\n      h = \"0\" + h;\n    }\n\n    $(\".timer span\").text(h + \":\" + m);\n    setInterval(function () {\n      getDate();\n    }, 1000);\n  }\n\n  getDate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImVhY2giLCJ3cmFwIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCIkdGhpcyIsIm1vZGFsIiwiZGF0YSIsInBhcmVudHMiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsImZpbmQiLCJyZW1vdmVDbGFzcyIsImNsaWNrIiwic2Nyb2xsX2VsIiwiYXR0ciIsImxlbmd0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJnZXREYXRlIiwidG9kYXkiLCJEYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJ0ZXh0Iiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekI7QUFDQUYsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkcsV0FBbkIsQ0FBK0I7QUFDM0JDLFFBQUksRUFBRSxJQURxQjtBQUUzQkMsVUFBTSxFQUFFLEVBRm1CO0FBRzNCQyxPQUFHLEVBQUUsS0FIc0I7QUFJM0JDLGNBQVUsRUFBQztBQUNQLFNBQUU7QUFDRUMsYUFBSyxFQUFDO0FBRFIsT0FESztBQUlQLFdBQUk7QUFDQUEsYUFBSyxFQUFDO0FBRE4sT0FKRztBQU9QLFlBQUs7QUFDREEsYUFBSyxFQUFDO0FBREw7QUFQRTtBQUpnQixHQUEvQixFQUZ5QixDQW1CekI7O0FBQ0FSLEdBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWVMsSUFBWixDQUFrQixZQUFVO0FBQ3hCVCxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSw2QkFBYjtBQUNI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TixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHSixLQUFLLENBQUNLLFVBQU4sRUFBUjs7QUFDQSxRQUFHRCxDQUFDLEdBQUcsRUFBUCxFQUFXO0FBQ1BBLE9BQUMsR0FBRyxNQUFNQSxDQUFWO0FBQ0g7O0FBQ0QsUUFBR0YsQ0FBQyxHQUFHLEVBQVAsRUFBVztBQUNQQSxPQUFDLEdBQUcsTUFBTUEsQ0FBVjtBQUNIOztBQUNEcEMsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQndDLElBQWpCLENBQXNCSixDQUFDLEdBQUcsR0FBSixHQUFTRSxDQUEvQjtBQUNBRyxlQUFXLENBQUMsWUFBVztBQUNuQlIsYUFBTztBQUNWLEtBRlUsRUFFUixJQUZRLENBQVg7QUFHSDs7QUFDREEsU0FBTztBQUNWLENBN0ZEIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gU2xpZGVyXG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgbWFyZ2luOiAxMCxcbiAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTp7XG4gICAgICAgICAgICAwOntcbiAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgNjAwOntcbiAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMTAwMDp7XG4gICAgICAgICAgICAgICAgaXRlbXM6MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBNb2RhbCB3aW5kb3dcbiAgICAkKFwiLm1vZGFsXCIpLmVhY2goIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykud3JhcCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKVxuICAgIH0pO1xuICAgIFxuICAgICQoXCIub3Blbi1tb2RhbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjtcbiAgICAgICAgXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgbW9kYWwgPSAkKCR0aGlzKS5kYXRhKFwibW9kYWxcIik7XG4gICAgICAgIFxuICAgICAgICAkKG1vZGFsKS5wYXJlbnRzKFwiLm92ZXJsYXlcIikuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKG1vZGFsKS5hZGRDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgIH0sIDM1MCk7XG4gICAgICAgIFxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCQodGFyZ2V0KS5oYXNDbGFzcyhcIm92ZXJsYXlcIikpe1xuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5maW5kKFwiLm1vZGFsXCIpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRhcmdldCkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIH0sIDM1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH0pO1xuICAgIFxuICAgICQoXCIuY2xvc2UtbW9kYWxcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb247XG4gICAgICAgIFxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIG1vZGFsID0gJCgkdGhpcykuZGF0YShcIm1vZGFsXCIpO1xuICAgICAgICBcbiAgICAgICAgJChtb2RhbCkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHRcbiAgICAgICAgICAgICQobW9kYWwpLnBhcmVudHMoXCIub3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XG4gICAgICAgIH0sIDM1MCk7XG4gICAgICAgIFxuICAgIH0pO1xuXG4gICAgLy8gU2Nyb2xsIERvd25cbiAgICAkKFwiLmdvX3RvXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHsgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIHNjcm9sbF9lbCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gICAgICAgIGlmKCQoc2Nyb2xsX2VsKS5sZW5ndGggIT0gMCkgeyBcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKHNjcm9sbF9lbCkub2Zmc2V0KCkudG9wIH0sIDI1MCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gVGltZXIgXG4gICAgZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGggPSB0b2RheS5nZXRIb3VycygpO1xuICAgICAgICB2YXIgbSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcbiAgICAgICAgaWYobSA8IDEwKSB7XG4gICAgICAgICAgICBtID0gXCIwXCIgKyBtO1xuICAgICAgICB9XG4gICAgICAgIGlmKGggPCAxMCkge1xuICAgICAgICAgICAgaCA9IFwiMFwiICsgaDtcbiAgICAgICAgfVxuICAgICAgICAkKFwiLnRpbWVyIHNwYW5cIikudGV4dChoICsgXCI6XCIrIG0pO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGdldERhdGUoKVxuICAgICAgICB9LCAxMDAwKTsgICAgICAgIFxuICAgIH1cbiAgICBnZXREYXRlKCk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });