"use strict";var _createClass=function(){function a(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(n,e,t){return e&&a(n.prototype,e),t&&a(n,t),n}}();function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var a=1,b=2;function calc(n,e){return console.log(n+e),n+e}calc(a,b);var parent=function(){function t(n,e){_classCallCheck(this,t),this.x=n,this.y=e}return _createClass(t,[{key:"calc",value:function(){return console.log(this.x+this.y),this.x+this.y}}]),t}(),parents=new parent(2,3);parents.calc();