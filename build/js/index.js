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

eval("$(document).ready(function () {\n  // Slider\n  $('.owl-carousel').owlCarousel({\n    loop: true,\n    margin: 10,\n    nav: false,\n    responsive: {\n      0: {\n        items: 1\n      },\n      600: {\n        items: 1\n      },\n      1000: {\n        items: 1\n      }\n    }\n  }); // Scroll Down\n\n  $(\".go_to\").click(function (e) {\n    e.preventDefault();\n    var scroll_el = $(this).attr(\"href\");\n\n    if ($(scroll_el).length != 0) {\n      $('html, body').animate({\n        scrollTop: $(scroll_el).offset().top\n      }, 250);\n    }\n\n    return false;\n  }); // Timer \n\n  function getDate() {\n    var today = new Date();\n    var h = today.getHours();\n    var m = today.getMinutes();\n\n    if (m < 10) {\n      m = \"0\" + m;\n    }\n\n    if (h < 10) {\n      h = \"0\" + h;\n    }\n\n    $(\".timer span\").text(h + \":\" + m);\n    setInterval(function () {\n      getDate();\n    }, 30000);\n  }\n\n  getDate(); // Modal window\n\n  $(\".modal\").each(function () {\n    $(this).wrap('<div class=\"overlay\"></div>');\n  });\n  $(\".open-modal\").on('click', function (e) {\n    e.preventDefault();\n    e.stopImmediatePropagation;\n    var $this = $(this),\n        modal = $($this).data(\"modal\");\n    $(modal).parents(\".overlay\").addClass(\"open\");\n    setTimeout(function () {\n      $(modal).addClass(\"open\");\n    }, 350);\n    $(document).on('click', function (e) {\n      var target = $(e.target);\n\n      if ($(target).hasClass(\"overlay\")) {\n        $(target).find(\".modal\").each(function () {\n          $(this).removeClass(\"open\");\n        });\n        setTimeout(function () {\n          $(target).removeClass(\"open\");\n        }, 350);\n      }\n    });\n  });\n  $(\".close-modal\").on('click', function (e) {\n    e.preventDefault();\n    e.stopImmediatePropagation;\n    var $this = $(this),\n        modal = $($this).data(\"modal\");\n    $(modal).removeClass(\"open\");\n    setTimeout(function () {\n      $(modal).parents(\".overlay\").removeClass(\"open\");\n    }, 350);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm93bENhcm91c2VsIiwibG9vcCIsIm1hcmdpbiIsIm5hdiIsInJlc3BvbnNpdmUiLCJpdGVtcyIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsX2VsIiwiYXR0ciIsImxlbmd0aCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJnZXREYXRlIiwidG9kYXkiLCJEYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJ0ZXh0Iiwic2V0SW50ZXJ2YWwiLCJlYWNoIiwid3JhcCIsIm9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiJHRoaXMiLCJtb2RhbCIsImRhdGEiLCJwYXJlbnRzIiwiYWRkQ2xhc3MiLCJzZXRUaW1lb3V0IiwidGFyZ2V0IiwiaGFzQ2xhc3MiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekI7QUFDQUYsR0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkcsV0FBbkIsQ0FBK0I7QUFDM0JDLFFBQUksRUFBRSxJQURxQjtBQUUzQkMsVUFBTSxFQUFFLEVBRm1CO0FBRzNCQyxPQUFHLEVBQUUsS0FIc0I7QUFJM0JDLGNBQVUsRUFBQztBQUNQLFNBQUU7QUFDRUMsYUFBSyxFQUFDO0FBRFIsT0FESztBQUlQLFdBQUk7QUFDQUEsYUFBSyxFQUFDO0FBRE4sT0FKRztBQU9QLFlBQUs7QUFDREEsYUFBSyxFQUFDO0FBREw7QUFQRTtBQUpnQixHQUEvQixFQUZ5QixDQW1CekI7O0FBQ0FSLEdBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWVMsS0FBWixDQUFrQixVQUFTQyxDQUFULEVBQVk7QUFDMUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlDLFNBQVMsR0FB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QUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUNxQix3QkFBRjtBQUVBLFFBQUlDLEtBQUssR0FBR2hDLENBQUMsQ0FBQyxJQUFELENBQWI7QUFBQSxRQUNRaUMsS0FBSyxHQUFHakMsQ0FBQyxDQUFDZ0MsS0FBRCxDQUFELENBQVNFLElBQVQsQ0FBYyxPQUFkLENBRGhCO0FBR0FsQyxLQUFDLENBQUNpQyxLQUFELENBQUQsQ0FBU1EsV0FBVCxDQUFxQixNQUFyQjtBQUNBSixjQUFVLENBQUMsWUFBVTtBQUNqQnJDLE9BQUMsQ0FBQ2lDLEtBQUQsQ0FBRCxDQUFTRSxPQUFULENBQWlCLFVBQWpCLEVBQTZCTSxXQUE3QixDQUF5QyxNQUF6QztBQUNILEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxHQVhEO0FBWUgsQ0E1RkQiLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyBTbGlkZXJcbiAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBtYXJnaW46IDEwLFxuICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOntcbiAgICAgICAgICAgIDA6e1xuICAgICAgICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICA2MDA6e1xuICAgICAgICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOntcbiAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNjcm9sbCBEb3duXG4gICAgJChcIi5nb190b1wiKS5jbGljayhmdW5jdGlvbihlKSB7IFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBzY3JvbGxfZWwgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xuICAgICAgICBpZigkKHNjcm9sbF9lbCkubGVuZ3RoICE9IDApIHsgXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJChzY3JvbGxfZWwpLm9mZnNldCgpLnRvcCB9LCAyNTApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIFRpbWVyIFxuICAgIGZ1bmN0aW9uIGdldERhdGUoKSB7XG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBoID0gdG9kYXkuZ2V0SG91cnMoKTtcbiAgICAgICAgdmFyIG0gPSB0b2RheS5nZXRNaW51dGVzKCk7XG4gICAgICAgIGlmKG0gPCAxMCkge1xuICAgICAgICAgICAgbSA9IFwiMFwiICsgbTtcbiAgICAgICAgfVxuICAgICAgICBpZihoIDwgMTApIHtcbiAgICAgICAgICAgIGggPSBcIjBcIiArIGg7XG4gICAgICAgIH1cbiAgICAgICAgJChcIi50aW1lciBzcGFuXCIpLnRleHQoaCArIFwiOlwiKyBtKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBnZXREYXRlKClcbiAgICAgICAgfSwgMzAwMDApOyAgICAgICAgXG4gICAgfVxuICAgIGdldERhdGUoKTtcblxuICAgIC8vIE1vZGFsIHdpbmRvd1xuICAgICQoXCIubW9kYWxcIikuZWFjaCggZnVuY3Rpb24oKSB7IFxuICAgICAgICAkKHRoaXMpLndyYXAoJzxkaXYgY2xhc3M9XCJvdmVybGF5XCI+PC9kaXY+JylcbiAgICB9KTtcbiAgICBcbiAgICAkKFwiLm9wZW4tbW9kYWxcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb247XG4gICAgICAgIFxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIG1vZGFsID0gJCgkdGhpcykuZGF0YShcIm1vZGFsXCIpO1xuICAgICAgICBcbiAgICAgICAgJChtb2RhbCkucGFyZW50cyhcIi5vdmVybGF5XCIpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJChtb2RhbCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICB9LCAzNTApO1xuICAgICAgICBcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICgkKHRhcmdldCkuaGFzQ2xhc3MoXCJvdmVybGF5XCIpKXtcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkuZmluZChcIi5tb2RhbFwiKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgICAgICAgICB9LCAzNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9KTtcbiAgICBcbiAgICAkKFwiLmNsb3NlLW1vZGFsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uO1xuICAgICAgICBcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBtb2RhbCA9ICQoJHRoaXMpLmRhdGEoXCJtb2RhbFwiKTtcbiAgICAgICAgXG4gICAgICAgICQobW9kYWwpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1x0XG4gICAgICAgICAgICAkKG1vZGFsKS5wYXJlbnRzKFwiLm92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICB9LCAzNTApOyAgICBcbiAgICB9KTtcbn0pO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });