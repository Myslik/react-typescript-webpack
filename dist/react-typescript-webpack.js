/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var odata_1 = __webpack_require__(3);
	var grid_1 = __webpack_require__(4);
	var adapter = new odata_1.ODataAdapter({
	    uri: "http://services.odata.org/V4/OData/OData.svc/Products",
	    columns: [
	        { key: "ID", width: 70 },
	        { key: "Name", width: 140 },
	        { key: "Description", width: 250 }
	    ]
	});
	ReactDOM.render(React.createElement(grid_1.Grid, {adapter: adapter}), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var ODataAdapter = (function () {
	    function ODataAdapter(metadata) {
	        this.metadata = metadata;
	        if (metadata.columns.length < 1) {
	            throw "You need to provide at least one column definition";
	        }
	    }
	    ODataAdapter.prototype.getColumns = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            resolve(_this.metadata.columns);
	        });
	    };
	    ODataAdapter.prototype.handleResponse = function (response) {
	        var identifier = this.metadata.columns[0].key;
	        return response.value.map(function (i) {
	            i["id"] = i[identifier];
	            return i;
	        });
	    };
	    ODataAdapter.prototype.find = function () {
	        var _this = this;
	        var uri = this.metadata.uri;
	        return new Promise(function (resolve, reject) {
	            var request = new XMLHttpRequest();
	            request.open("GET", uri, true);
	            request.onload = function () {
	                if (request.status >= 200 && request.status < 400) {
	                    var response = JSON.parse(request.responseText);
	                    var entities = _this.handleResponse(response);
	                    resolve(entities);
	                }
	                else {
	                    reject();
	                }
	            };
	            request.onerror = function () {
	                reject();
	            };
	            request.send();
	        });
	    };
	    return ODataAdapter;
	}());
	exports.ODataAdapter = ODataAdapter;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var header_1 = __webpack_require__(5);
	var body_1 = __webpack_require__(7);
	var Grid = (function (_super) {
	    __extends(Grid, _super);
	    function Grid() {
	        _super.apply(this, arguments);
	    }
	    Grid.prototype.render = function () {
	        return (React.createElement("div", {className: "react-grid"}, React.createElement(header_1.Header, null), React.createElement(body_1.Body, null)));
	    };
	    return Grid;
	}(React.Component));
	exports.Grid = Grid;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var headerCell_1 = __webpack_require__(6);
	var Header = (function (_super) {
	    __extends(Header, _super);
	    function Header() {
	        _super.apply(this, arguments);
	    }
	    Header.prototype.render = function () {
	        return (React.createElement("div", {className: "header"}, React.createElement(headerCell_1.HeaderCell, {title: "Header Cell 1"}), React.createElement(headerCell_1.HeaderCell, {title: "Header Cell 2"})));
	    };
	    return Header;
	}(React.Component));
	exports.Header = Header;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var HeaderCell = (function (_super) {
	    __extends(HeaderCell, _super);
	    function HeaderCell() {
	        _super.apply(this, arguments);
	    }
	    HeaderCell.prototype.render = function () {
	        return (React.createElement("div", {className: "header-cell"}, this.props.title));
	    };
	    return HeaderCell;
	}(React.Component));
	exports.HeaderCell = HeaderCell;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var row_1 = __webpack_require__(8);
	var Body = (function (_super) {
	    __extends(Body, _super);
	    function Body() {
	        _super.apply(this, arguments);
	    }
	    Body.prototype.render = function () {
	        return (React.createElement("div", {className: "body"}, React.createElement(row_1.Row, null), React.createElement(row_1.Row, null)));
	    };
	    return Body;
	}(React.Component));
	exports.Body = Body;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var cell_1 = __webpack_require__(9);
	var Row = (function (_super) {
	    __extends(Row, _super);
	    function Row() {
	        _super.apply(this, arguments);
	    }
	    Row.prototype.render = function () {
	        return (React.createElement("div", {className: "row"}, React.createElement(cell_1.Cell, {value: "Cell 1"}), React.createElement(cell_1.Cell, {value: "Cell 2"})));
	    };
	    return Row;
	}(React.Component));
	exports.Row = Row;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Cell = (function (_super) {
	    __extends(Cell, _super);
	    function Cell() {
	        _super.apply(this, arguments);
	    }
	    Cell.prototype.render = function () {
	        return (React.createElement("div", {className: "cell"}, this.props.value));
	    };
	    return Cell;
	}(React.Component));
	exports.Cell = Cell;


/***/ }
/******/ ]);
//# sourceMappingURL=react-typescript-webpack.js.map