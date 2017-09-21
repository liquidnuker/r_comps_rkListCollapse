webpackJsonp([0],{

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rklc1_listItems = function (_React$Component) {
  _inherits(Rklc1_listItems, _React$Component);

  function Rklc1_listItems(props) {
    _classCallCheck(this, Rklc1_listItems);

    var _this = _possibleConstructorReturn(this, (Rklc1_listItems.__proto__ || Object.getPrototypeOf(Rklc1_listItems)).call(this, props));

    _this.state = {
      items: [{
        itemName: "item1"
      }, {
        itemName: "item2"
      }, {
        itemName: "item3"
      }]
    };

    // binders    
    return _this;
  }

  _createClass(Rklc1_listItems, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "ul",
        null,
        this.state.items.map(function (i) {
          return React.createElement(
            "li",
            { className: "rkListCollapse101_content",
              key: i.itemName },
            i.itemName
          );
        })
      );
    }
  }]);

  return Rklc1_listItems;
}(React.Component);

function Rklc1_listToggle(props) {
  if (props.pr_collapse === true) {
    return React.createElement(Rklc1_listItems, null);
  } else {
    return null;
  }
}

function Rklc1_iconToggle(props) {
  if (props.pr_collapse === true) {
    return React.createElement(
      "span",
      { className: "rkListCollapse101_icon" },
      React.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M19 13H5v-2h14v2z" })
      )
    );
  } else {
    return React.createElement(
      "span",
      { className: "rkListCollapse101_icon" },
      React.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
      )
    );
  }
}

var Rklc1_container = function (_React$Component2) {
  _inherits(Rklc1_container, _React$Component2);

  function Rklc1_container(props) {
    _classCallCheck(this, Rklc1_container);

    var _this2 = _possibleConstructorReturn(this, (Rklc1_container.__proto__ || Object.getPrototypeOf(Rklc1_container)).call(this, props));

    _this2.state = {
      collapse: false
    };

    // binders 
    return _this2;
  }

  // lifecycle hooks

  // methods


  _createClass(Rklc1_container, [{
    key: "toggleCollapse",
    value: function toggleCollapse() {
      this.setState(function (prevState) {
        return {
          collapse: !prevState.collapse
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "nav",
        { className: "rkListCollapse101" },
        React.createElement(
          "header",
          { onClick: function onClick() {
              _this3.toggleCollapse();
            } },
          React.createElement(Rklc1_iconToggle, { pr_collapse: this.state.collapse }),
          React.createElement(
            "p",
            null,
            "Items:"
          )
        ),
        React.createElement(Rklc1_listToggle, { pr_collapse: this.state.collapse })
      );
    }
  }]);

  return Rklc1_container;
}(React.Component);

exports.default = Rklc1_container;

/***/ })

});