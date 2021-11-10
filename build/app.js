/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Scroll Animations\r\n// Info section\r\nconst infoText = document.getElementById('info-text');\r\nconst infoTitle = document.getElementById('info-title');\r\nconst infoImg = document.getElementById('info-img');\r\n\r\n// quote section variables\r\nconst quotes = Array.from(document.getElementsByClassName('quotes'))\r\n\r\ndocument.addEventListener('scroll', () => {\r\n    if (window.scrollY >= 440) {\r\n        infoText.classList.add('info-fix-text');\r\n        infoTitle.classList.add('info-fix-text');\r\n        infoImg.classList.add('info--img-fix')\r\n    }\r\n})\r\n\r\n//admin unlock \r\nconst adminForm = document.getElementById('admin-form');\r\nconst adminInput = document.getElementById('admin-key');\r\nconst addTestBtn = document.getElementById('add-test-btn');\r\n\r\nadminForm.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n    const key = 'shoky'\r\n    const value = adminInput.value;\r\n\r\n    if (value == key) {\r\n        addTestBtn.classList.remove('d-none');\r\n        adminInput.classList.add('d-none')\r\n    }\r\n})\r\n\r\n// JSON file\r\n\r\nconst xhr = new XMLHttpRequest;\r\nxhr.open('GET', '../quiz.json', true);\r\n\r\nxhr.onload = function () {\r\n    if (this.status === 200) {\r\n        const tests = JSON.parse(this.responseText);\r\n        console.log(tests);\r\n        console.log(this.responseText);\r\n    }\r\n}\r\nxhr.send()\n\n//# sourceURL=webpack://Briddle/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;