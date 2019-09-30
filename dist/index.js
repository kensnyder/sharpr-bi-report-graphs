"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "UzOB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.xhtml = void 0;
    var t = "http://www.w3.org/1999/xhtml";
    exports.xhtml = t;
    var w = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: t,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };
    exports.default = w;
  }, {}],
  "OLJ5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./namespaces"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r += "",
          s = t.indexOf(":");
      return s >= 0 && "xmlns" !== (t = r.slice(0, s)) && (r = r.slice(s + 1)), e.default.hasOwnProperty(t) ? {
        space: e.default[t],
        local: r
      } : r;
    }
  }, {
    "./namespaces": "UzOB"
  }],
  "EIjt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = n(require("./namespace")),
        t = require("./namespaces");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return function () {
        var n = this.ownerDocument,
            r = this.namespaceURI;
        return r === t.xhtml && n.documentElement.namespaceURI === t.xhtml ? n.createElement(e) : n.createElementNS(r, e);
      };
    }

    function u(e) {
      return function () {
        return this.ownerDocument.createElementNS(e.space, e.local);
      };
    }

    function a(t) {
      var n = (0, e.default)(t);
      return (n.local ? u : r)(n);
    }
  }, {
    "./namespace": "OLJ5",
    "./namespaces": "UzOB"
  }],
  "xs2I": [function (require, module, exports) {
    "use strict";

    function e() {}

    function t(t) {
      return null == t ? e : function () {
        return this.querySelector(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "LRy5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var e = require("./index"),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function _(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var _ = this._groups, a = _.length, n = new Array(a), u = 0; u < a; ++u) {
        for (var o, i, l = _[u], d = l.length, s = n[u] = new Array(d), f = 0; f < d; ++f) {
          (o = l[f]) && (i = r.call(o, o.__data__, f, l)) && ("__data__" in o && (i.__data__ = o.__data__), s[f] = i);
        }
      }

      return new e.Selection(n, this._parents);
    }
  }, {
    "./index": "jpDG",
    "../selector": "xs2I"
  }],
  "+mHY": [function (require, module, exports) {
    "use strict";

    function e() {
      return [];
    }

    function t(t) {
      return null == t ? e : function () {
        return this.querySelectorAll(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "ijGs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("./index"),
        t = r(require("../selectorAll"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      "function" != typeof r && (r = (0, t.default)(r));

      for (var u = this._groups, l = u.length, n = [], o = [], s = 0; s < l; ++s) {
        for (var a, f = u[s], i = f.length, _ = 0; _ < i; ++_) {
          (a = f[_]) && (n.push(r.call(a, a.__data__, _, f)), o.push(a));
        }
      }

      return new e.Selection(n, o);
    }
  }, {
    "./index": "jpDG",
    "../selectorAll": "+mHY"
  }],
  "4PkZ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        return this.matches(e);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hrVj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var e = require("./index"),
        r = t(require("../matcher"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t) {
      "function" != typeof t && (t = (0, r.default)(t));

      for (var n = this._groups, u = n.length, a = new Array(u), o = 0; o < u; ++o) {
        for (var i, l = n[o], s = l.length, f = a[o] = [], _ = 0; _ < s; ++_) {
          (i = l[_]) && t.call(i, i.__data__, _, l) && f.push(i);
        }
      }

      return new e.Selection(a, this._parents);
    }
  }, {
    "./index": "jpDG",
    "../matcher": "4PkZ"
  }],
  "NmjR": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return new Array(e.length);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "wXei": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.EnterNode = o;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      return new t.Selection(this._enter || this._groups.map(e.default), this._parents);
    }

    function o(e, t) {
      this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
    }

    o.prototype = {
      constructor: o,
      appendChild: function appendChild(e) {
        return this._parent.insertBefore(e, this._next);
      },
      insertBefore: function insertBefore(e, t) {
        return this._parent.insertBefore(e, t);
      },
      querySelector: function querySelector(e) {
        return this._parent.querySelector(e);
      },
      querySelectorAll: function querySelectorAll(e) {
        return this._parent.querySelectorAll(e);
      }
    };
  }, {
    "./sparse": "NmjR",
    "./index": "jpDG"
  }],
  "H3qE": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        return e;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "8QmP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./index"),
        r = require("./enter"),
        n = t(require("../constant"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = "$";

    function o(e, n, t, a, o, _) {
      for (var l, i = 0, u = n.length, f = _.length; i < f; ++i) {
        (l = n[i]) ? (l.__data__ = _[i], a[i] = l) : t[i] = new r.EnterNode(e, _[i]);
      }

      for (; i < u; ++i) {
        (l = n[i]) && (o[i] = l);
      }
    }

    function _(e, n, t, o, _, l, i) {
      var u,
          f,
          c,
          s = {},
          d = n.length,
          h = l.length,
          w = new Array(d);

      for (u = 0; u < d; ++u) {
        (f = n[u]) && (w[u] = c = a + i.call(f, f.__data__, u, n), c in s ? _[u] = f : s[c] = f);
      }

      for (u = 0; u < h; ++u) {
        (f = s[c = a + i.call(e, l[u], u, l)]) ? (o[u] = f, f.__data__ = l[u], s[c] = null) : t[u] = new r.EnterNode(e, l[u]);
      }

      for (u = 0; u < d; ++u) {
        (f = n[u]) && s[w[u]] === f && (_[u] = f);
      }
    }

    function l(r, t) {
      if (!r) return v = new Array(this.size()), d = -1, this.each(function (e) {
        v[++d] = e;
      }), v;
      var a = t ? _ : o,
          l = this._parents,
          i = this._groups;
      "function" != typeof r && (r = (0, n.default)(r));

      for (var u = i.length, f = new Array(u), c = new Array(u), s = new Array(u), d = 0; d < u; ++d) {
        var h = l[d],
            w = i[d],
            y = w.length,
            v = r.call(h, h && h.__data__, d, l),
            g = v.length,
            A = c[d] = new Array(g),
            p = f[d] = new Array(g);
        a(h, w, A, p, s[d] = new Array(y), v, t);

        for (var x, q, E = 0, M = 0; E < g; ++E) {
          if (x = A[E]) {
            for (E >= M && (M = E + 1); !(q = p[M]) && ++M < g;) {
              ;
            }

            x._next = q || null;
          }
        }
      }

      return (f = new e.Selection(f, l))._enter = c, f._exit = s, f;
    }
  }, {
    "./index": "jpDG",
    "./enter": "wXei",
    "../constant": "H3qE"
  }],
  "tchs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = r(require("./sparse")),
        t = require("./index");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return new t.Selection(this._exit || this._groups.map(e.default), this._parents);
    }
  }, {
    "./sparse": "NmjR",
    "./index": "jpDG"
  }],
  "oO6z": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      var n = this.enter(),
          o = this,
          u = this.exit();
      return n = "function" == typeof e ? e(n) : n.append(e + ""), null != t && (o = t(o)), null == r ? u.remove() : r(u), n && o ? n.merge(o).order() : o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "1i+5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./index");

    function r(r) {
      for (var t = this._groups, n = r._groups, o = t.length, s = n.length, a = Math.min(o, s), i = new Array(o), u = 0; u < a; ++u) {
        for (var l, f = t[u], h = n[u], p = f.length, g = i[u] = new Array(p), _ = 0; _ < p; ++_) {
          (l = f[_] || h[_]) && (g[_] = l);
        }
      }

      for (; u < o; ++u) {
        i[u] = t[u];
      }

      return new e.Selection(i, this._parents);
    }
  }, {
    "./index": "jpDG"
  }],
  "RepQ": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this._groups, t = -1, r = e.length; ++t < r;) {
        for (var o, n = e[t], s = n.length - 1, i = n[s]; --s >= 0;) {
          (o = n[s]) && (i && 4 ^ o.compareDocumentPosition(i) && i.parentNode.insertBefore(o, i), i = o);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "D8yW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var r = require("./index");

    function e(e) {
      function n(r, t) {
        return r && t ? e(r.__data__, t.__data__) : !r - !t;
      }

      e || (e = t);

      for (var a = this._groups, o = a.length, u = new Array(o), _ = 0; _ < o; ++_) {
        for (var i, s = a[_], d = s.length, f = u[_] = new Array(d), c = 0; c < d; ++c) {
          (i = s[c]) && (f[c] = i);
        }

        f.sort(n);
      }

      return new r.Selection(u, this._parents).order();
    }

    function t(r, e) {
      return r < e ? -1 : r > e ? 1 : r >= e ? 0 : NaN;
    }
  }, {
    "./index": "jpDG"
  }],
  "+pbQ": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = arguments[0];
      return arguments[0] = this, e.apply(null, arguments), this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "kO0T": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = new Array(this.size()),
          t = -1;
      return this.each(function () {
        e[++t] = this;
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "84xF": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this._groups, r = 0, t = e.length; r < t; ++r) {
        for (var u = e[r], n = 0, o = u.length; n < o; ++n) {
          var l = u[n];
          if (l) return l;
        }
      }

      return null;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "w9fp": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = 0;
      return this.each(function () {
        ++e;
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "UF+O": [function (require, module, exports) {
    "use strict";

    function e() {
      return !this.node();
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "q4XW": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t = this._groups, r = 0, o = t.length; r < o; ++r) {
        for (var s, a = t[r], l = 0, u = a.length; l < u; ++l) {
          (s = a[l]) && e.call(s, s.__data__, l, a);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Tdf9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var t = e(require("../namespace"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      return function () {
        this.removeAttribute(t);
      };
    }

    function u(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function r(t, e) {
      return function () {
        this.setAttribute(t, e);
      };
    }

    function i(t, e) {
      return function () {
        this.setAttributeNS(t.space, t.local, e);
      };
    }

    function o(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
      };
    }

    function c(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
      };
    }

    function l(e, l) {
      var a = (0, t.default)(e);

      if (arguments.length < 2) {
        var s = this.node();
        return a.local ? s.getAttributeNS(a.space, a.local) : s.getAttribute(a);
      }

      return this.each((null == l ? a.local ? u : n : "function" == typeof l ? a.local ? c : o : a.local ? i : r)(a, l));
    }
  }, {
    "../namespace": "OLJ5"
  }],
  "D1dR": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "3VXj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o, exports.styleValue = l;
    var e = t(require("../window"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return function () {
        this.style.removeProperty(e);
      };
    }

    function n(e, t, r) {
      return function () {
        this.style.setProperty(e, t, r);
      };
    }

    function u(e, t, r) {
      return function () {
        var n = t.apply(this, arguments);
        null == n ? this.style.removeProperty(e) : this.style.setProperty(e, n, r);
      };
    }

    function o(e, t, o) {
      return arguments.length > 1 ? this.each((null == t ? r : "function" == typeof t ? u : n)(e, t, null == o ? "" : o)) : l(this.node(), e);
    }

    function l(t, r) {
      return t.style.getPropertyValue(r) || (0, e.default)(t).getComputedStyle(t, null).getPropertyValue(r);
    }
  }, {
    "../window": "D1dR"
  }],
  "Q/OW": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return function () {
        delete this[t];
      };
    }

    function e(t, e) {
      return function () {
        this[t] = e;
      };
    }

    function n(t, e) {
      return function () {
        var n = e.apply(this, arguments);
        null == n ? delete this[t] : this[t] = n;
      };
    }

    function u(u, i) {
      return arguments.length > 1 ? this.each((null == i ? t : "function" == typeof i ? n : e)(u, i)) : this.node()[u];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
  }, {}],
  "+rtN": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t.trim().split(/^|\s+/);
    }

    function n(t) {
      return t.classList || new e(t);
    }

    function e(n) {
      this._node = n, this._names = t(n.getAttribute("class") || "");
    }

    function i(t, e) {
      for (var i = n(t), s = -1, r = e.length; ++s < r;) {
        i.add(e[s]);
      }
    }

    function s(t, e) {
      for (var i = n(t), s = -1, r = e.length; ++s < r;) {
        i.remove(e[s]);
      }
    }

    function r(t) {
      return function () {
        i(this, t);
      };
    }

    function o(t) {
      return function () {
        s(this, t);
      };
    }

    function u(t, n) {
      return function () {
        (n.apply(this, arguments) ? i : s)(this, t);
      };
    }

    function f(e, i) {
      var s = t(e + "");

      if (arguments.length < 2) {
        for (var f = n(this.node()), c = -1, a = s.length; ++c < a;) {
          if (!f.contains(s[c])) return !1;
        }

        return !0;
      }

      return this.each(("function" == typeof i ? u : i ? r : o)(s, i));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f, e.prototype = {
      add: function add(t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function remove(t) {
        var n = this._names.indexOf(t);

        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function contains(t) {
        return this._names.indexOf(t) >= 0;
      }
    };
  }, {}],
  "hAJ3": [function (require, module, exports) {
    "use strict";

    function t() {
      this.textContent = "";
    }

    function n(t) {
      return function () {
        this.textContent = t;
      };
    }

    function e(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? "" : n;
      };
    }

    function o(o) {
      return arguments.length ? this.each(null == o ? t : ("function" == typeof o ? e : n)(o)) : this.node().textContent;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
  }, {}],
  "FiSM": [function (require, module, exports) {
    "use strict";

    function n() {
      this.innerHTML = "";
    }

    function t(n) {
      return function () {
        this.innerHTML = n;
      };
    }

    function e(n) {
      return function () {
        var t = n.apply(this, arguments);
        this.innerHTML = null == t ? "" : t;
      };
    }

    function i(i) {
      return arguments.length ? this.each(null == i ? n : ("function" == typeof i ? e : t)(i)) : this.node().innerHTML;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;
  }, {}],
  "gvi7": [function (require, module, exports) {
    "use strict";

    function e() {
      this.nextSibling && this.parentNode.appendChild(this);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "gv/5": [function (require, module, exports) {
    "use strict";

    function e() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "efv1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../creator"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      var r = "function" == typeof t ? t : (0, e.default)(t);
      return this.select(function () {
        return this.appendChild(r.apply(this, arguments));
      });
    }
  }, {
    "../creator": "EIjt"
  }],
  "6ILQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = r(require("../creator")),
        t = r(require("../selector"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      return null;
    }

    function n(r, n) {
      var l = "function" == typeof r ? r : (0, e.default)(r),
          o = null == n ? u : "function" == typeof n ? n : (0, t.default)(n);
      return this.select(function () {
        return this.insertBefore(l.apply(this, arguments), o.apply(this, arguments) || null);
      });
    }
  }, {
    "../creator": "EIjt",
    "../selector": "xs2I"
  }],
  "quBB": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = this.parentNode;
      e && e.removeChild(this);
    }

    function t() {
      return this.each(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "UpcG": [function (require, module, exports) {
    "use strict";

    function e() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }

    function t() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }

    function n(n) {
      return this.select(n ? t : e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "fuQ8": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return arguments.length ? this.property("__data__", e) : this.node().__data__;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "j4rF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.customEvent = p, exports.event = void 0;
    var e = {},
        t = null;

    if (exports.event = t, "undefined" != typeof document) {
      var n = document.documentElement;
      "onmouseenter" in n || (e = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      });
    }

    function r(e, t, n) {
      return e = i(e, t, n), function (t) {
        var n = t.relatedTarget;
        n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t);
      };
    }

    function i(e, n, r) {
      return function (i) {
        var o = t;
        exports.event = t = i;

        try {
          e.call(this, this.__data__, n, r);
        } finally {
          exports.event = t = o;
        }
      };
    }

    function o(e) {
      return e.trim().split(/^|\s+/).map(function (e) {
        var t = "",
            n = e.indexOf(".");
        return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
          type: e,
          name: t
        };
      });
    }

    function s(e) {
      return function () {
        var t = this.__on;

        if (t) {
          for (var n, r = 0, i = -1, o = t.length; r < o; ++r) {
            n = t[r], e.type && n.type !== e.type || n.name !== e.name ? t[++i] = n : this.removeEventListener(n.type, n.listener, n.capture);
          }

          ++i ? t.length = i : delete this.__on;
        }
      };
    }

    function u(t, n, o) {
      var s = e.hasOwnProperty(t.type) ? r : i;
      return function (e, r, i) {
        var u,
            a = this.__on,
            p = s(n, r, i);
        if (a) for (var l = 0, v = a.length; l < v; ++l) {
          if ((u = a[l]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = p, u.capture = o), void (u.value = n);
        }
        this.addEventListener(t.type, p, o), u = {
          type: t.type,
          name: t.name,
          value: n,
          listener: p,
          capture: o
        }, a ? a.push(u) : this.__on = [u];
      };
    }

    function a(e, t, n) {
      var r,
          i,
          a = o(e + ""),
          p = a.length;

      if (!(arguments.length < 2)) {
        for (l = t ? u : s, null == n && (n = !1), r = 0; r < p; ++r) {
          this.each(l(a[r], t, n));
        }

        return this;
      }

      var l = this.node().__on;

      if (l) for (var v, f = 0, c = l.length; f < c; ++f) {
        for (r = 0, v = l[f]; r < p; ++r) {
          if ((i = a[r]).type === v.type && i.name === v.name) return v.value;
        }
      }
    }

    function p(e, n, r, i) {
      var o = t;
      e.sourceEvent = t, exports.event = t = e;

      try {
        return n.apply(r, i);
      } finally {
        exports.event = t = o;
      }
    }
  }, {}],
  "enVu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var t = e(require("../window"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(e, n, u) {
      var i = (0, t.default)(e),
          r = i.CustomEvent;
      "function" == typeof r ? r = new r(n, u) : (r = i.document.createEvent("Event"), u ? (r.initEvent(n, u.bubbles, u.cancelable), r.detail = u.detail) : r.initEvent(n, !1, !1)), e.dispatchEvent(r);
    }

    function u(t, e) {
      return function () {
        return n(this, t, e);
      };
    }

    function i(t, e) {
      return function () {
        return n(this, t, e.apply(this, arguments));
      };
    }

    function r(t, e) {
      return this.each(("function" == typeof e ? i : u)(t, e));
    }
  }, {
    "../window": "D1dR"
  }],
  "jpDG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Selection = B, exports.default = exports.root = void 0;

    var e = S(require("./select")),
        r = S(require("./selectAll")),
        t = S(require("./filter")),
        u = S(require("./data")),
        l = S(require("./enter")),
        a = S(require("./exit")),
        d = S(require("./join")),
        i = S(require("./merge")),
        o = S(require("./order")),
        f = S(require("./sort")),
        s = S(require("./call")),
        n = S(require("./nodes")),
        q = S(require("./node")),
        p = S(require("./size")),
        c = S(require("./empty")),
        m = S(require("./each")),
        x = S(require("./attr")),
        y = S(require("./style")),
        h = S(require("./property")),
        v = S(require("./classed")),
        _ = S(require("./text")),
        g = S(require("./html")),
        j = S(require("./raise")),
        w = S(require("./lower")),
        z = S(require("./append")),
        A = S(require("./insert")),
        M = S(require("./remove")),
        b = S(require("./clone")),
        E = S(require("./datum")),
        O = S(require("./on")),
        P = S(require("./dispatch"));

    function S(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var k = [null];

    function B(e, r) {
      this._groups = e, this._parents = r;
    }

    function C() {
      return new B([[document.documentElement]], k);
    }

    exports.root = k, B.prototype = C.prototype = {
      constructor: B,
      select: e.default,
      selectAll: r.default,
      filter: t.default,
      data: u.default,
      enter: l.default,
      exit: a.default,
      join: d.default,
      merge: i.default,
      order: o.default,
      sort: f.default,
      call: s.default,
      nodes: n.default,
      node: q.default,
      size: p.default,
      empty: c.default,
      each: m.default,
      attr: x.default,
      style: y.default,
      property: h.default,
      classed: v.default,
      text: _.default,
      html: g.default,
      raise: j.default,
      lower: w.default,
      append: z.default,
      insert: A.default,
      remove: M.default,
      clone: b.default,
      datum: E.default,
      on: O.default,
      dispatch: P.default
    };
    var D = C;
    exports.default = D;
  }, {
    "./select": "LRy5",
    "./selectAll": "ijGs",
    "./filter": "hrVj",
    "./data": "8QmP",
    "./enter": "wXei",
    "./exit": "tchs",
    "./join": "oO6z",
    "./merge": "1i+5",
    "./order": "RepQ",
    "./sort": "D8yW",
    "./call": "+pbQ",
    "./nodes": "kO0T",
    "./node": "84xF",
    "./size": "w9fp",
    "./empty": "UF+O",
    "./each": "q4XW",
    "./attr": "Tdf9",
    "./style": "3VXj",
    "./property": "Q/OW",
    "./classed": "+rtN",
    "./text": "hAJ3",
    "./html": "FiSM",
    "./raise": "gvi7",
    "./lower": "gv/5",
    "./append": "efv1",
    "./insert": "6ILQ",
    "./remove": "quBB",
    "./clone": "UpcG",
    "./datum": "fuQ8",
    "./on": "j4rF",
    "./dispatch": "enVu"
  }],
  "i/TO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([[document.querySelector(t)]], [document.documentElement]) : new e.Selection([[t]], e.root);
    }
  }, {
    "./selection/index": "jpDG"
  }],
  "tmZ+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = r(require("./creator")),
        t = r(require("./select"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      return (0, t.default)((0, e.default)(r).call(document.documentElement));
    }
  }, {
    "./creator": "EIjt",
    "./select": "i/TO"
  }],
  "JuPP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var t = 0;

    function e() {
      return new r();
    }

    function r() {
      this._ = "@" + (++t).toString(36);
    }

    r.prototype = e.prototype = {
      constructor: r,
      get: function get(t) {
        for (var e = this._; !(e in t);) {
          if (!(t = t.parentNode)) return;
        }

        return t[e];
      },
      set: function set(t, e) {
        return t[this._] = e;
      },
      remove: function remove(t) {
        return this._ in t && delete t[this._];
      },
      toString: function toString() {
        return this._;
      }
    };
  }, {}],
  "mu9P": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./selection/on");

    function r() {
      for (var r, t = e.event; r = t.sourceEvent;) {
        t = r;
      }

      return t;
    }
  }, {
    "./selection/on": "j4rF"
  }],
  "9ZIl": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var n = e.ownerSVGElement || e;

      if (n.createSVGPoint) {
        var r = n.createSVGPoint();
        return r.x = t.clientX, r.y = t.clientY, [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y];
      }

      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "lbxf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./sourceEvent")),
        u = r(require("./point"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = (0, e.default)();
      return t.changedTouches && (t = t.changedTouches[0]), (0, u.default)(r, t);
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "9ZIl"
  }],
  "7/to": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./selection/index");

    function t(t) {
      return "string" == typeof t ? new e.Selection([document.querySelectorAll(t)], [document.documentElement]) : new e.Selection([null == t ? [] : t], e.root);
    }
  }, {
    "./selection/index": "jpDG"
  }],
  "3Mh7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u, n) {
      arguments.length < 3 && (n = u, u = (0, e.default)().changedTouches);

      for (var i, l = 0, o = u ? u.length : 0; l < o; ++l) {
        if ((i = u[l]).identifier === n) return (0, r.default)(t, i);
      }

      return null;
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "9ZIl"
  }],
  "RG1U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./sourceEvent")),
        r = t(require("./point"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      null == u && (u = (0, e.default)().touches);

      for (var n = 0, o = u ? u.length : 0, l = new Array(o); n < o; ++n) {
        l[n] = (0, r.default)(t, u[n]);
      }

      return l;
    }
  }, {
    "./sourceEvent": "mu9P",
    "./point": "9ZIl"
  }],
  "lm1C": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "create", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "creator", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "local", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "matcher", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "mouse", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "namespace", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "namespaces", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "clientPoint", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "select", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "selectAll", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "selection", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "selector", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "selectorAll", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "style", {
      enumerable: !0,
      get: function get() {
        return d.styleValue;
      }
    }), Object.defineProperty(exports, "touch", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "touches", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "window", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "event", {
      enumerable: !0,
      get: function get() {
        return x.event;
      }
    }), Object.defineProperty(exports, "customEvent", {
      enumerable: !0,
      get: function get() {
        return x.customEvent;
      }
    });

    var e = P(require("./create")),
        t = P(require("./creator")),
        r = P(require("./local")),
        n = P(require("./matcher")),
        u = P(require("./mouse")),
        o = P(require("./namespace")),
        c = P(require("./namespaces")),
        i = P(require("./point")),
        l = P(require("./select")),
        f = P(require("./selectAll")),
        a = P(require("./selection/index")),
        s = P(require("./selector")),
        p = P(require("./selectorAll")),
        d = require("./selection/style"),
        b = P(require("./touch")),
        m = P(require("./touches")),
        y = P(require("./window")),
        x = require("./selection/on");

    function P(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./create": "tmZ+",
    "./creator": "EIjt",
    "./local": "JuPP",
    "./matcher": "4PkZ",
    "./mouse": "lbxf",
    "./namespace": "OLJ5",
    "./namespaces": "UzOB",
    "./point": "9ZIl",
    "./select": "i/TO",
    "./selectAll": "7/to",
    "./selection/index": "jpDG",
    "./selector": "xs2I",
    "./selectorAll": "+mHY",
    "./selection/style": "3VXj",
    "./touch": "3Mh7",
    "./touches": "RG1U",
    "./window": "D1dR",
    "./selection/on": "j4rF"
  }],
  "C/lH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var n = {
      value: function value() {}
    };

    function r() {
      for (var n, r = 0, t = arguments.length, o = {}; r < t; ++r) {
        if (!(n = arguments[r] + "") || n in o) throw new Error("illegal type: " + n);
        o[n] = [];
      }

      return new e(o);
    }

    function e(n) {
      this._ = n;
    }

    function t(n, r) {
      return n.trim().split(/^|\s+/).map(function (n) {
        var e = "",
            t = n.indexOf(".");
        if (t >= 0 && (e = n.slice(t + 1), n = n.slice(0, t)), n && !r.hasOwnProperty(n)) throw new Error("unknown type: " + n);
        return {
          type: n,
          name: e
        };
      });
    }

    function o(n, r) {
      for (var e, t = 0, o = n.length; t < o; ++t) {
        if ((e = n[t]).name === r) return e.value;
      }
    }

    function i(r, e, t) {
      for (var o = 0, i = r.length; o < i; ++o) {
        if (r[o].name === e) {
          r[o] = n, r = r.slice(0, o).concat(r.slice(o + 1));
          break;
        }
      }

      return null != t && r.push({
        name: e,
        value: t
      }), r;
    }

    e.prototype = r.prototype = {
      constructor: e,
      on: function on(n, r) {
        var e,
            l = this._,
            a = t(n + "", l),
            f = -1,
            u = a.length;

        if (!(arguments.length < 2)) {
          if (null != r && "function" != typeof r) throw new Error("invalid callback: " + r);

          for (; ++f < u;) {
            if (e = (n = a[f]).type) l[e] = i(l[e], n.name, r);else if (null == r) for (e in l) {
              l[e] = i(l[e], n.name, null);
            }
          }

          return this;
        }

        for (; ++f < u;) {
          if ((e = (n = a[f]).type) && (e = o(l[e], n.name))) return e;
        }
      },
      copy: function copy() {
        var n = {},
            r = this._;

        for (var t in r) {
          n[t] = r[t].slice();
        }

        return new e(n);
      },
      call: function call(n, r) {
        if ((e = arguments.length - 2) > 0) for (var e, t, o = new Array(e), i = 0; i < e; ++i) {
          o[i] = arguments[i + 2];
        }
        if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);

        for (i = 0, e = (t = this._[n]).length; i < e; ++i) {
          t[i].value.apply(r, o);
        }
      },
      apply: function apply(n, r, e) {
        if (!this._.hasOwnProperty(n)) throw new Error("unknown type: " + n);

        for (var t = this._[n], o = 0, i = t.length; o < i; ++o) {
          t[o].value.apply(r, e);
        }
      }
    };
    var l = r;
    exports.default = l;
  }, {}],
  "UU/c": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "dispatch", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./dispatch"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./dispatch": "C/lH"
  }],
  "9v2Y": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.now = f, exports.Timer = m, exports.timer = p, exports.timerFlush = w;
    var t,
        n,
        e = 0,
        o = 0,
        i = 0,
        r = 1e3,
        l = 0,
        c = 0,
        s = 0,
        u = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
        a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
      setTimeout(t, 17);
    };

    function f() {
      return c || (a(_), c = u.now() + s);
    }

    function _() {
      c = 0;
    }

    function m() {
      this._call = this._time = this._next = null;
    }

    function p(t, n, e) {
      var o = new m();
      return o.restart(t, n, e), o;
    }

    function w() {
      f(), ++e;

      for (var n, o = t; o;) {
        (n = c - o._time) >= 0 && o._call.call(null, n), o = o._next;
      }

      --e;
    }

    function h() {
      c = (l = u.now()) + s, e = o = 0;

      try {
        w();
      } finally {
        e = 0, y(), c = 0;
      }
    }

    function x() {
      var t = u.now(),
          n = t - l;
      n > r && (s -= n, l = t);
    }

    function y() {
      for (var e, o, i = t, r = 1 / 0; i;) {
        i._call ? (r > i._time && (r = i._time), e = i, i = i._next) : (o = i._next, i._next = null, i = e ? e._next = o : t = o);
      }

      n = e, v(r);
    }

    function v(t) {
      e || (o && (o = clearTimeout(o)), t - c > 24 ? (t < 1 / 0 && (o = setTimeout(h, t - u.now() - s)), i && (i = clearInterval(i))) : (i || (l = u.now(), i = setInterval(x, r)), e = 1, a(h)));
    }

    m.prototype = p.prototype = {
      constructor: m,
      restart: function restart(e, o, i) {
        if ("function" != typeof e) throw new TypeError("callback is not a function");
        i = (null == i ? f() : +i) + (null == o ? 0 : +o), this._next || n === this || (n ? n._next = this : t = this, n = this), this._call = e, this._time = i, v();
      },
      stop: function stop() {
        this._call && (this._call = null, this._time = 1 / 0, v());
      }
    };
  }, {}],
  "iEU7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./timer");

    function r(r, t, u) {
      var n = new e.Timer();
      return t = null == t ? 0 : +t, n.restart(function (e) {
        n.stop(), r(e + t);
      }, t, u), n;
    }
  }, {
    "./timer": "9v2Y"
  }],
  "B8zX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./timer");

    function r(r, t, n) {
      var u = new e.Timer(),
          s = t;
      return null == t ? (u.restart(r, t, n), u) : (t = +t, n = null == n ? (0, e.now)() : +n, u.restart(function e(a) {
        a += s, u.restart(e, s += t, n), r(a);
      }, t, n), u);
    }
  }, {
    "./timer": "9v2Y"
  }],
  "CBES": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "now", {
      enumerable: !0,
      get: function get() {
        return e.now;
      }
    }), Object.defineProperty(exports, "timer", {
      enumerable: !0,
      get: function get() {
        return e.timer;
      }
    }), Object.defineProperty(exports, "timerFlush", {
      enumerable: !0,
      get: function get() {
        return e.timerFlush;
      }
    }), Object.defineProperty(exports, "timeout", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interval", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    });

    var e = require("./timer"),
        t = n(require("./timeout")),
        r = n(require("./interval"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./timer": "9v2Y",
    "./timeout": "iEU7",
    "./interval": "B8zX"
  }],
  "GDz/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p, exports.init = _, exports.set = c, exports.get = f, exports.ENDED = exports.ENDING = exports.RUNNING = exports.STARTED = exports.STARTING = exports.SCHEDULED = exports.CREATED = void 0;

    var t = require("d3-dispatch"),
        e = require("d3-timer"),
        r = (0, t.dispatch)("start", "end", "cancel", "interrupt"),
        a = [],
        n = 0;

    exports.CREATED = n;
    var o = 1;
    exports.SCHEDULED = o;
    var i = 2;
    exports.STARTING = i;
    var s = 3;
    exports.STARTED = s;
    var l = 4;
    exports.RUNNING = l;
    var u = 5;
    exports.ENDING = u;
    var d = 6;

    function p(t, e, o, i, s, l) {
      var u = t.__transition;

      if (u) {
        if (o in u) return;
      } else t.__transition = {};

      x(t, o, {
        name: e,
        index: i,
        group: s,
        on: r,
        tween: a,
        time: l.time,
        delay: l.delay,
        duration: l.duration,
        ease: l.ease,
        timer: null,
        state: n
      });
    }

    function _(t, e) {
      var r = f(t, e);
      if (r.state > n) throw new Error("too late; already scheduled");
      return r;
    }

    function c(t, e) {
      var r = f(t, e);
      if (r.state > s) throw new Error("too late; already running");
      return r;
    }

    function f(t, e) {
      var r = t.__transition;
      if (!r || !(r = r[e])) throw new Error("transition not found");
      return r;
    }

    function x(t, r, a) {
      var n,
          p = t.__transition;

      function _(u) {
        var x, m, E, v;
        if (a.state !== o) return f();

        for (x in p) {
          if ((v = p[x]).name === a.name) {
            if (v.state === s) return (0, e.timeout)(_);
            v.state === l ? (v.state = d, v.timer.stop(), v.on.call("interrupt", t, t.__data__, v.index, v.group), delete p[x]) : +x < r && (v.state = d, v.timer.stop(), v.on.call("cancel", t, t.__data__, v.index, v.group), delete p[x]);
          }
        }

        if ((0, e.timeout)(function () {
          a.state === s && (a.state = l, a.timer.restart(c, a.delay, a.time), c(u));
        }), a.state = i, a.on.call("start", t, t.__data__, a.index, a.group), a.state === i) {
          for (a.state = s, n = new Array(E = a.tween.length), x = 0, m = -1; x < E; ++x) {
            (v = a.tween[x].value.call(t, t.__data__, a.index, a.group)) && (n[++m] = v);
          }

          n.length = m + 1;
        }
      }

      function c(e) {
        for (var r = e < a.duration ? a.ease.call(null, e / a.duration) : (a.timer.restart(f), a.state = u, 1), o = -1, i = n.length; ++o < i;) {
          n[o].call(t, r);
        }

        a.state === u && (a.on.call("end", t, t.__data__, a.index, a.group), f());
      }

      function f() {
        for (var e in a.state = d, a.timer.stop(), delete p[r], p) {
          return;
        }

        delete t.__transition;
      }

      p[r] = a, a.timer = (0, e.timer)(function (t) {
        a.state = o, a.timer.restart(_, a.delay, a.time), a.delay <= t && _(t - a.delay);
      }, 0, a.time);
    }

    exports.ENDED = d;
  }, {
    "d3-dispatch": "UU/c",
    "d3-timer": "CBES"
  }],
  "+xAn": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./transition/schedule");

    function t(t, n) {
      var r,
          a,
          i,
          l = t.__transition,
          s = !0;

      if (l) {
        for (i in n = null == n ? null : n + "", l) {
          (r = l[i]).name === n ? (a = r.state > e.STARTING && r.state < e.ENDING, r.state = e.ENDED, r.timer.stop(), r.on.call(a ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete l[i]) : s = !1;
        }

        s && delete t.__transition;
      }
    }
  }, {
    "./transition/schedule": "GDz/"
  }],
  "JwzZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../interrupt"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return this.each(function () {
        (0, e.default)(this, t);
      });
    }
  }, {
    "../interrupt": "+xAn"
  }],
  "CSb3": [function (require, module, exports) {
    "use strict";

    function t(t, e, r) {
      t.prototype = e.prototype = r, r.constructor = t;
    }

    function e(t, e) {
      var r = Object.create(t.prototype);

      for (var o in e) {
        r[o] = e[o];
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.extend = e;
  }, {}],
  "UAf0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Color = n, exports.default = k, exports.rgbConvert = M, exports.rgb = N, exports.Rgb = O, exports.hslConvert = P, exports.hsl = $, exports.brighter = exports.darker = void 0;
    var e = r(require("./define.js"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function r(e) {
      if (e && e.__esModule) return e;
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {};

      if (null != e) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var a in e) {
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a];
          }
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function n() {}

    var i = .7;
    exports.darker = i;
    var a = 1 / i;
    exports.brighter = a;
    var o = "\\s*([+-]?\\d+)\\s*",
        s = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        h = /^#([0-9a-f]{3,8})$/,
        u = new RegExp("^rgb\\(" + [o, o, o] + "\\)$"),
        g = new RegExp("^rgb\\(" + [l, l, l] + "\\)$"),
        c = new RegExp("^rgba\\(" + [o, o, o, s] + "\\)$"),
        d = new RegExp("^rgba\\(" + [l, l, l, s] + "\\)$"),
        p = new RegExp("^hsl\\(" + [s, l, l] + "\\)$"),
        b = new RegExp("^hsla\\(" + [s, l, l, s] + "\\)$"),
        f = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };

    function m() {
      return this.rgb().formatHex();
    }

    function y() {
      return P(this).formatHsl();
    }

    function w() {
      return this.rgb().formatRgb();
    }

    function k(e) {
      var t, r;
      return e = (e + "").trim().toLowerCase(), (t = h.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), 6 === r ? x(t) : 3 === r ? new O(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1) : 8 === r ? new O(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255) : 4 === r ? new O(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255) : null) : (t = u.exec(e)) ? new O(t[1], t[2], t[3], 1) : (t = g.exec(e)) ? new O(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1) : (t = c.exec(e)) ? v(t[1], t[2], t[3], t[4]) : (t = d.exec(e)) ? v(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]) : (t = p.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, 1) : (t = b.exec(e)) ? E(t[1], t[2] / 100, t[3] / 100, t[4]) : f.hasOwnProperty(e) ? x(f[e]) : "transparent" === e ? new O(NaN, NaN, NaN, 0) : null;
    }

    function x(e) {
      return new O(e >> 16 & 255, e >> 8 & 255, 255 & e, 1);
    }

    function v(e, t, r, n) {
      return n <= 0 && (e = t = r = NaN), new O(e, t, r, n);
    }

    function M(e) {
      return e instanceof n || (e = k(e)), e ? new O((e = e.rgb()).r, e.g, e.b, e.opacity) : new O();
    }

    function N(e, t, r, n) {
      return 1 === arguments.length ? M(e) : new O(e, t, r, null == n ? 1 : n);
    }

    function O(e, t, r, n) {
      this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
    }

    function q() {
      return "#" + j(this.r) + j(this.g) + j(this.b);
    }

    function R() {
      var e = this.opacity;
      return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === e ? ")" : ", " + e + ")");
    }

    function j(e) {
      return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16);
    }

    function E(e, t, r, n) {
      return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new H(e, t, r, n);
    }

    function P(e) {
      if (e instanceof H) return new H(e.h, e.s, e.l, e.opacity);
      if (e instanceof n || (e = k(e)), !e) return new H();
      if (e instanceof H) return e;
      var t = (e = e.rgb()).r / 255,
          r = e.g / 255,
          i = e.b / 255,
          a = Math.min(t, r, i),
          o = Math.max(t, r, i),
          s = NaN,
          l = o - a,
          h = (o + a) / 2;
      return l ? (s = t === o ? (r - i) / l + 6 * (r < i) : r === o ? (i - t) / l + 2 : (t - r) / l + 4, l /= h < .5 ? o + a : 2 - o - a, s *= 60) : l = h > 0 && h < 1 ? 0 : s, new H(s, l, h, e.opacity);
    }

    function $(e, t, r, n) {
      return 1 === arguments.length ? P(e) : new H(e, t, r, null == n ? 1 : n);
    }

    function H(e, t, r, n) {
      this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
    }

    function C(e, t, r) {
      return 255 * (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t);
    }

    (0, e.default)(n, k, {
      copy: function copy(e) {
        return Object.assign(new this.constructor(), this, e);
      },
      displayable: function displayable() {
        return this.rgb().displayable();
      },
      hex: m,
      formatHex: m,
      formatHsl: y,
      formatRgb: w,
      toString: w
    }), (0, e.default)(O, N, (0, e.extend)(n, {
      brighter: function brighter(e) {
        return e = null == e ? a : Math.pow(a, e), new O(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      darker: function darker(e) {
        return e = null == e ? i : Math.pow(i, e), new O(this.r * e, this.g * e, this.b * e, this.opacity);
      },
      rgb: function rgb() {
        return this;
      },
      displayable: function displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
      },
      hex: q,
      formatHex: q,
      formatRgb: R,
      toString: R
    })), (0, e.default)(H, $, (0, e.extend)(n, {
      brighter: function brighter(e) {
        return e = null == e ? a : Math.pow(a, e), new H(this.h, this.s, this.l * e, this.opacity);
      },
      darker: function darker(e) {
        return e = null == e ? i : Math.pow(i, e), new H(this.h, this.s, this.l * e, this.opacity);
      },
      rgb: function rgb() {
        var e = this.h % 360 + 360 * (this.h < 0),
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            n = r + (r < .5 ? r : 1 - r) * t,
            i = 2 * r - n;
        return new O(C(e >= 240 ? e - 240 : e + 120, i, n), C(e, i, n), C(e < 120 ? e + 240 : e - 120, i, n), this.opacity);
      },
      displayable: function displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      },
      formatHsl: function formatHsl() {
        var e = this.opacity;
        return (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === e ? ")" : ", " + e + ")");
      }
    }));
  }, {
    "./define.js": "CSb3"
  }],
  "8ykI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rad2deg = exports.deg2rad = void 0;
    var e = Math.PI / 180;
    exports.deg2rad = e;
    var r = 180 / Math.PI;
    exports.rad2deg = r;
  }, {}],
  "n21X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.gray = b, exports.default = w, exports.Lab = y, exports.lch = j, exports.hcl = x, exports.Hcl = O;

    var t = i(require("./define.js")),
        n = require("./color.js"),
        r = require("./math.js");

    function e() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return e = function e() {
        return t;
      }, t;
    }

    function i(t) {
      if (t && t.__esModule) return t;
      var n = e();
      if (n && n.has(t)) return n.get(t);
      var r = {};

      if (null != t) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var a in t) {
          if (Object.prototype.hasOwnProperty.call(t, a)) {
            var o = i ? Object.getOwnPropertyDescriptor(t, a) : null;
            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = t[a];
          }
        }
      }

      return r.default = t, n && n.set(t, r), r;
    }

    var a = 18,
        o = .96422,
        u = 1,
        c = .82521,
        s = 4 / 29,
        l = 6 / 29,
        h = 3 * l * l,
        f = l * l * l;

    function p(t) {
      if (t instanceof y) return new y(t.l, t.a, t.b, t.opacity);
      if (t instanceof O) return P(t);
      t instanceof n.Rgb || (t = (0, n.rgbConvert)(t));
      var r,
          e,
          i = M(t.r),
          a = M(t.g),
          s = M(t.b),
          l = g((.2225045 * i + .7168786 * a + .0606169 * s) / u);
      return i === a && a === s ? r = e = l : (r = g((.4360747 * i + .3850649 * a + .1430804 * s) / o), e = g((.0139322 * i + .0971045 * a + .7141733 * s) / c)), new y(116 * l - 16, 500 * (r - l), 200 * (l - e), t.opacity);
    }

    function b(t, n) {
      return new y(t, 0, 0, null == n ? 1 : n);
    }

    function w(t, n, r, e) {
      return 1 === arguments.length ? p(t) : new y(t, n, r, null == e ? 1 : e);
    }

    function y(t, n, r, e) {
      this.l = +t, this.a = +n, this.b = +r, this.opacity = +e;
    }

    function g(t) {
      return t > f ? Math.pow(t, 1 / 3) : t / h + s;
    }

    function d(t) {
      return t > l ? t * t * t : h * (t - s);
    }

    function v(t) {
      return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
    }

    function M(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    }

    function N(t) {
      if (t instanceof O) return new O(t.h, t.c, t.l, t.opacity);
      if (t instanceof y || (t = p(t)), 0 === t.a && 0 === t.b) return new O(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
      var n = Math.atan2(t.b, t.a) * r.rad2deg;
      return new O(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }

    function j(t, n, r, e) {
      return 1 === arguments.length ? N(t) : new O(r, n, t, null == e ? 1 : e);
    }

    function x(t, n, r, e) {
      return 1 === arguments.length ? N(t) : new O(t, n, r, null == e ? 1 : e);
    }

    function O(t, n, r, e) {
      this.h = +t, this.c = +n, this.l = +r, this.opacity = +e;
    }

    function P(t) {
      if (isNaN(t.h)) return new y(t.l, 0, 0, t.opacity);
      var n = t.h * r.deg2rad;
      return new y(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }

    (0, t.default)(y, w, (0, t.extend)(n.Color, {
      brighter: function brighter(t) {
        return new y(this.l + a * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      darker: function darker(t) {
        return new y(this.l - a * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      rgb: function rgb() {
        var t = (this.l + 16) / 116,
            r = isNaN(this.a) ? t : t + this.a / 500,
            e = isNaN(this.b) ? t : t - this.b / 200;
        return r = o * d(r), t = u * d(t), e = c * d(e), new n.Rgb(v(3.1338561 * r - 1.6168667 * t - .4906146 * e), v(-.9787684 * r + 1.9161415 * t + .033454 * e), v(.0719453 * r - .2289914 * t + 1.4052427 * e), this.opacity);
      }
    })), (0, t.default)(O, x, (0, t.extend)(n.Color, {
      brighter: function brighter(t) {
        return new O(this.h, this.c, this.l + a * (null == t ? 1 : t), this.opacity);
      },
      darker: function darker(t) {
        return new O(this.h, this.c, this.l - a * (null == t ? 1 : t), this.opacity);
      },
      rgb: function rgb() {
        return P(this).rgb();
      }
    }));
  }, {
    "./define.js": "CSb3",
    "./color.js": "UAf0",
    "./math.js": "8ykI"
  }],
  "aDX2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d, exports.Cubehelix = b;

    var t = i(require("./define.js")),
        e = require("./color.js"),
        r = require("./math.js");

    function n() {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap();
      return n = function n() {
        return t;
      }, t;
    }

    function i(t) {
      if (t && t.__esModule) return t;
      var e = n();
      if (e && e.has(t)) return e.get(t);
      var r = {};

      if (null != t) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var s in t) {
          if (Object.prototype.hasOwnProperty.call(t, s)) {
            var a = i ? Object.getOwnPropertyDescriptor(t, s) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, s, a) : r[s] = t[s];
          }
        }
      }

      return r.default = t, e && e.set(t, r), r;
    }

    var s = -.14861,
        a = 1.78277,
        o = -.29227,
        u = -.90649,
        h = 1.97294,
        c = h * u,
        l = h * a,
        f = a * o - u * s;

    function p(t) {
      if (t instanceof b) return new b(t.h, t.s, t.l, t.opacity);
      t instanceof e.Rgb || (t = (0, e.rgbConvert)(t));
      var n = t.r / 255,
          i = t.g / 255,
          s = t.b / 255,
          a = (f * s + c * n - l * i) / (f + c - l),
          p = s - a,
          d = (h * (i - a) - o * p) / u,
          g = Math.sqrt(d * d + p * p) / (h * a * (1 - a)),
          y = g ? Math.atan2(d, p) * r.rad2deg - 120 : NaN;
      return new b(y < 0 ? y + 360 : y, g, a, t.opacity);
    }

    function d(t, e, r, n) {
      return 1 === arguments.length ? p(t) : new b(t, e, r, null == n ? 1 : n);
    }

    function b(t, e, r, n) {
      this.h = +t, this.s = +e, this.l = +r, this.opacity = +n;
    }

    (0, t.default)(b, d, (0, t.extend)(e.Color, {
      brighter: function brighter(t) {
        return t = null == t ? e.brighter : Math.pow(e.brighter, t), new b(this.h, this.s, this.l * t, this.opacity);
      },
      darker: function darker(t) {
        return t = null == t ? e.darker : Math.pow(e.darker, t), new b(this.h, this.s, this.l * t, this.opacity);
      },
      rgb: function rgb() {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * r.deg2rad,
            n = +this.l,
            i = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            c = Math.cos(t),
            l = Math.sin(t);
        return new e.Rgb(255 * (n + i * (s * c + a * l)), 255 * (n + i * (o * c + u * l)), 255 * (n + i * (h * c)), this.opacity);
      }
    }));
  }, {
    "./define.js": "CSb3",
    "./color.js": "UAf0",
    "./math.js": "8ykI"
  }],
  "4TJ2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "color", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "rgb", {
      enumerable: !0,
      get: function get() {
        return e.rgb;
      }
    }), Object.defineProperty(exports, "hsl", {
      enumerable: !0,
      get: function get() {
        return e.hsl;
      }
    }), Object.defineProperty(exports, "lab", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "hcl", {
      enumerable: !0,
      get: function get() {
        return r.hcl;
      }
    }), Object.defineProperty(exports, "lch", {
      enumerable: !0,
      get: function get() {
        return r.lch;
      }
    }), Object.defineProperty(exports, "gray", {
      enumerable: !0,
      get: function get() {
        return r.gray;
      }
    }), Object.defineProperty(exports, "cubehelix", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    });
    var e = o(require("./color.js")),
        r = o(require("./lab.js")),
        t = n(require("./cubehelix.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      var r = u();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var c = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            c && (c.get || c.set) ? Object.defineProperty(t, o, c) : t[o] = e[o];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }
  }, {
    "./color.js": "UAf0",
    "./lab.js": "n21X",
    "./cubehelix.js": "aDX2"
  }],
  "mIuw": [function (require, module, exports) {
    "use strict";

    function e(e, r, t, n, o) {
      var u = e * e,
          s = u * e;
      return ((1 - 3 * e + 3 * u - s) * r + (4 - 6 * u + 3 * s) * t + (1 + 3 * e + 3 * u - 3 * s) * n + s * o) / 6;
    }

    function r(r) {
      var t = r.length - 1;
      return function (n) {
        var o = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t),
            u = r[o],
            s = r[o + 1],
            a = o > 0 ? r[o - 1] : 2 * u - s,
            f = o < t - 1 ? r[o + 2] : 2 * s - u;
        return e((n - o / t) * t, a, u, s, f);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.basis = e, exports.default = r;
  }, {}],
  "t9MF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./basis");

    function r(r) {
      var t = r.length;
      return function (s) {
        var u = Math.floor(((s %= 1) < 0 ? ++s : s) * t),
            a = r[(u + t - 1) % t],
            n = r[u % t],
            o = r[(u + 1) % t],
            i = r[(u + 2) % t];
        return (0, e.basis)((s - u / t) * t, a, n, o, i);
      };
    }
  }, {
    "./basis": "mIuw"
  }],
  "OW+9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hue = u, exports.gamma = o, exports.default = a;
    var t = e(require("./constant"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t, e) {
      return function (n) {
        return t + n * e;
      };
    }

    function r(t, e, n) {
      return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
        return Math.pow(t + r * e, n);
      };
    }

    function u(e, r) {
      var u = r - e;
      return u ? n(e, u > 180 || u < -180 ? u - 360 * Math.round(u / 360) : u) : (0, t.default)(isNaN(e) ? r : e);
    }

    function o(e) {
      return 1 == (e = +e) ? a : function (n, u) {
        return u - n ? r(n, u, e) : (0, t.default)(isNaN(n) ? u : n);
      };
    }

    function a(e, r) {
      var u = r - e;
      return u ? n(e, u) : (0, t.default)(isNaN(e) ? r : e);
    }
  }, {
    "./constant": "H3qE"
  }],
  "hw5o": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.rgbBasisClosed = exports.rgbBasis = exports.default = void 0;

    var r = require("d3-color"),
        e = u(require("./basis")),
        t = u(require("./basisClosed")),
        n = a(require("./color"));

    function o() {
      if ("function" != typeof WeakMap) return null;
      var r = new WeakMap();
      return o = function o() {
        return r;
      }, r;
    }

    function a(r) {
      if (r && r.__esModule) return r;
      var e = o();
      if (e && e.has(r)) return e.get(r);
      var t = {};

      if (null != r) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var a in r) {
          if (Object.prototype.hasOwnProperty.call(r, a)) {
            var u = n ? Object.getOwnPropertyDescriptor(r, a) : null;
            u && (u.get || u.set) ? Object.defineProperty(t, a, u) : t[a] = r[a];
          }
        }
      }

      return t.default = r, e && e.set(r, t), t;
    }

    function u(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    var i = function e(t) {
      var o = (0, n.gamma)(t);

      function a(e, t) {
        var a = o((e = (0, r.rgb)(e)).r, (t = (0, r.rgb)(t)).r),
            u = o(e.g, t.g),
            i = o(e.b, t.b),
            s = (0, n.default)(e.opacity, t.opacity);
        return function (r) {
          return e.r = a(r), e.g = u(r), e.b = i(r), e.opacity = s(r), e + "";
        };
      }

      return a.gamma = e, a;
    }(1);

    function s(e) {
      return function (t) {
        var n,
            o,
            a = t.length,
            u = new Array(a),
            i = new Array(a),
            s = new Array(a);

        for (n = 0; n < a; ++n) {
          o = (0, r.rgb)(t[n]), u[n] = o.r || 0, i[n] = o.g || 0, s[n] = o.b || 0;
        }

        return u = e(u), i = e(i), s = e(s), o.opacity = 1, function (r) {
          return o.r = u(r), o.g = i(r), o.b = s(r), o + "";
        };
      };
    }

    exports.default = i;
    var f = s(e.default);
    exports.rgbBasis = f;
    var c = s(t.default);
    exports.rgbBasisClosed = c;
  }, {
    "d3-color": "4TJ2",
    "./basis": "mIuw",
    "./basisClosed": "t9MF",
    "./color": "OW+9"
  }],
  "j6Kl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./value"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var n,
          u = t ? t.length : 0,
          o = r ? Math.min(u, r.length) : 0,
          a = new Array(o),
          f = new Array(u);

      for (n = 0; n < o; ++n) {
        a[n] = (0, e.default)(r[n], t[n]);
      }

      for (; n < u; ++n) {
        f[n] = t[n];
      }

      return function (e) {
        for (n = 0; n < o; ++n) {
          f[n] = a[n](e);
        }

        return f;
      };
    }
  }, {
    "./value": "5ONG"
  }],
  "npIv": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = new Date();
      return t -= e = +e, function (n) {
        return r.setTime(e + t * n), r;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "eUtU": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return t -= e = +e, function (r) {
        return e + t * r;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "9Ci2": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./value"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r) {
      var u,
          n = {},
          o = {};

      for (u in null !== t && "object" == _typeof(t) || (t = {}), null !== r && "object" == _typeof(r) || (r = {}), r) {
        u in t ? n[u] = (0, e.default)(t[u], r[u]) : o[u] = r[u];
      }

      return function (e) {
        for (u in n) {
          o[u] = n[u](e);
        }

        return o;
      };
    }
  }, {
    "./value": "5ONG"
  }],
  "WNxQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;
    var e = n(require("./number"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        t = new RegExp(r.source, "g");

    function u(e) {
      return function () {
        return e;
      };
    }

    function i(e) {
      return function (n) {
        return e(n) + "";
      };
    }

    function l(n, l) {
      var o,
          c,
          d,
          f = r.lastIndex = t.lastIndex = 0,
          s = -1,
          x = [],
          a = [];

      for (n += "", l += ""; (o = r.exec(n)) && (c = t.exec(l));) {
        (d = c.index) > f && (d = l.slice(f, d), x[s] ? x[s] += d : x[++s] = d), (o = o[0]) === (c = c[0]) ? x[s] ? x[s] += c : x[++s] = c : (x[++s] = null, a.push({
          i: s,
          x: (0, e.default)(o, c)
        })), f = t.lastIndex;
      }

      return f < l.length && (d = l.slice(f), x[s] ? x[s] += d : x[++s] = d), x.length < 2 ? a[0] ? i(a[0].x) : u(l) : (l = a.length, function (e) {
        for (var n, r = 0; r < l; ++r) {
          x[(n = a[r]).i] = n.x(e);
        }

        return x.join("");
      });
    }
  }, {
    "./number": "eUtU"
  }],
  "5ONG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("d3-color"),
        r = i(require("./rgb")),
        t = i(require("./array")),
        u = i(require("./date")),
        a = i(require("./number")),
        o = i(require("./object")),
        n = i(require("./string")),
        f = i(require("./constant"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(i, l) {
      var d,
          c = _typeof(l);

      return null == l || "boolean" === c ? (0, f.default)(l) : ("number" === c ? a.default : "string" === c ? (d = (0, e.color)(l)) ? (l = d, r.default) : n.default : l instanceof e.color ? r.default : l instanceof Date ? u.default : Array.isArray(l) ? t.default : "function" != typeof l.valueOf && "function" != typeof l.toString || isNaN(l) ? o.default : a.default)(i, l);
    }
  }, {
    "d3-color": "4TJ2",
    "./rgb": "hw5o",
    "./array": "j6Kl",
    "./date": "npIv",
    "./number": "eUtU",
    "./object": "9Ci2",
    "./string": "WNxQ",
    "./constant": "H3qE"
  }],
  "9iFP": [function (require, module, exports) {
    "use strict";

    function t(t) {
      var e = t.length;
      return function (r) {
        return t[Math.max(0, Math.min(e - 1, Math.floor(r * e)))];
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "/lYd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./color");

    function r(r, t) {
      var o = (0, e.hue)(+r, +t);
      return function (e) {
        var r = o(e);
        return r - 360 * Math.floor(r / 360);
      };
    }
  }, {
    "./color": "OW+9"
  }],
  "8Ehv": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return t -= e = +e, function (r) {
        return Math.round(e + t * r);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "sFbg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.identity = void 0;
    var t = 180 / Math.PI,
        e = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };

    function a(e, a, r, s, n, l) {
      var o, i, c;
      return (o = Math.sqrt(e * e + a * a)) && (e /= o, a /= o), (c = e * r + a * s) && (r -= e * c, s -= a * c), (i = Math.sqrt(r * r + s * s)) && (r /= i, s /= i, c /= i), e * s < a * r && (e = -e, a = -a, c = -c, o = -o), {
        translateX: n,
        translateY: l,
        rotate: Math.atan2(a, e) * t,
        skewX: Math.atan(c) * t,
        scaleX: o,
        scaleY: i
      };
    }

    exports.identity = e;
  }, {}],
  "igaz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.parseCss = i, exports.parseSvg = l;
    var e,
        t,
        r,
        n,
        o = a(require("./decompose"));

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    function a(e) {
      if (e && e.__esModule) return e;
      var t = u();
      if (t && t.has(e)) return t.get(e);
      var r = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
          }
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function i(n) {
      return "none" === n ? o.identity : (e || (e = document.createElement("DIV"), t = document.documentElement, r = document.defaultView), e.style.transform = n, n = r.getComputedStyle(t.appendChild(e), null).getPropertyValue("transform"), t.removeChild(e), n = n.slice(7, -1).split(","), (0, o.default)(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5]));
    }

    function l(e) {
      return null == e ? o.identity : (n || (n = document.createElementNS("http://www.w3.org/2000/svg", "g")), n.setAttribute("transform", e), (e = n.transform.baseVal.consolidate()) ? (e = e.matrix, (0, o.default)(e.a, e.b, e.c, e.d, e.e, e.f)) : o.identity);
    }
  }, {
    "./decompose": "sFbg"
  }],
  "/tUK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.interpolateTransformSvg = exports.interpolateTransformCss = void 0;

    var e = r(require("../number")),
        t = require("./parse");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(t, r, s, n) {
      function a(e) {
        return e.length ? e.pop() + " " : "";
      }

      return function (u, l) {
        var o = [],
            p = [];
        return u = t(u), l = t(l), function (t, n, a, u, l, o) {
          if (t !== a || n !== u) {
            var p = l.push("translate(", null, r, null, s);
            o.push({
              i: p - 4,
              x: (0, e.default)(t, a)
            }, {
              i: p - 2,
              x: (0, e.default)(n, u)
            });
          } else (a || u) && l.push("translate(" + a + r + u + s);
        }(u.translateX, u.translateY, l.translateX, l.translateY, o, p), function (t, r, s, u) {
          t !== r ? (t - r > 180 ? r += 360 : r - t > 180 && (t += 360), u.push({
            i: s.push(a(s) + "rotate(", null, n) - 2,
            x: (0, e.default)(t, r)
          })) : r && s.push(a(s) + "rotate(" + r + n);
        }(u.rotate, l.rotate, o, p), function (t, r, s, u) {
          t !== r ? u.push({
            i: s.push(a(s) + "skewX(", null, n) - 2,
            x: (0, e.default)(t, r)
          }) : r && s.push(a(s) + "skewX(" + r + n);
        }(u.skewX, l.skewX, o, p), function (t, r, s, n, u, l) {
          if (t !== s || r !== n) {
            var o = u.push(a(u) + "scale(", null, ",", null, ")");
            l.push({
              i: o - 4,
              x: (0, e.default)(t, s)
            }, {
              i: o - 2,
              x: (0, e.default)(r, n)
            });
          } else 1 === s && 1 === n || u.push(a(u) + "scale(" + s + "," + n + ")");
        }(u.scaleX, u.scaleY, l.scaleX, l.scaleY, o, p), u = l = null, function (e) {
          for (var t, r = -1, s = p.length; ++r < s;) {
            o[(t = p[r]).i] = t.x(e);
          }

          return o.join("");
        };
      };
    }

    var n = s(t.parseCss, "px, ", "px)", "deg)");
    exports.interpolateTransformCss = n;
    var a = s(t.parseSvg, ", ", ")", ")");
    exports.interpolateTransformSvg = a;
  }, {
    "../number": "eUtU",
    "./parse": "igaz"
  }],
  "MbcF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = M;
    var t = Math.SQRT2,
        e = 2,
        r = 4,
        n = 1e-12;

    function a(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }

    function u(t) {
      return ((t = Math.exp(t)) - 1 / t) / 2;
    }

    function o(t) {
      return ((t = Math.exp(2 * t)) - 1) / (t + 1);
    }

    function M(M, h) {
      var i,
          f,
          s = M[0],
          c = M[1],
          l = M[2],
          p = h[0],
          x = h[1],
          v = h[2],
          d = p - s,
          g = x - c,
          q = d * d + g * g;
      if (q < n) f = Math.log(v / l) / t, i = function i(e) {
        return [s + e * d, c + e * g, l * Math.exp(t * e * f)];
      };else {
        var _ = Math.sqrt(q),
            b = (v * v - l * l + r * q) / (2 * l * e * _),
            j = (v * v - l * l - r * q) / (2 * v * e * _),
            y = Math.log(Math.sqrt(b * b + 1) - b),
            O = Math.log(Math.sqrt(j * j + 1) - j);

        f = (O - y) / t, i = function i(r) {
          var n = r * f,
              M = a(y),
              h = l / (e * _) * (M * o(t * n + y) - u(y));
          return [s + h * d, c + h * g, l * M / a(t * n + y)];
        };
      }
      return i.duration = 1e3 * f, i;
    }
  }, {}],
  "BrWg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hslLong = exports.default = void 0;

    var e = require("d3-color"),
        r = n(require("./color"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {};

      if (null != e) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            a && (a.get || a.set) ? Object.defineProperty(n, u, a) : n[u] = e[u];
          }
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function o(t) {
      return function (n, o) {
        var u = t((n = (0, e.hsl)(n)).h, (o = (0, e.hsl)(o)).h),
            a = (0, r.default)(n.s, o.s),
            l = (0, r.default)(n.l, o.l),
            i = (0, r.default)(n.opacity, o.opacity);
        return function (e) {
          return n.h = u(e), n.s = a(e), n.l = l(e), n.opacity = i(e), n + "";
        };
      };
    }

    var u = o(r.hue);
    exports.default = u;
    var a = o(r.default);
    exports.hslLong = a;
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "5HCN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = require("d3-color"),
        t = r(require("./color"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r, u) {
      var a = (0, t.default)((r = (0, e.lab)(r)).l, (u = (0, e.lab)(u)).l),
          l = (0, t.default)(r.a, u.a),
          o = (0, t.default)(r.b, u.b),
          c = (0, t.default)(r.opacity, u.opacity);
      return function (e) {
        return r.l = a(e), r.a = l(e), r.b = o(e), r.opacity = c(e), r + "";
      };
    }
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "9VIl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hclLong = exports.default = void 0;

    var e = require("d3-color"),
        r = n(require("./color"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {};

      if (null != e) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var c = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            c && (c.get || c.set) ? Object.defineProperty(n, u, c) : n[u] = e[u];
          }
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function o(t) {
      return function (n, o) {
        var u = t((n = (0, e.hcl)(n)).h, (o = (0, e.hcl)(o)).h),
            c = (0, r.default)(n.c, o.c),
            a = (0, r.default)(n.l, o.l),
            l = (0, r.default)(n.opacity, o.opacity);
        return function (e) {
          return n.h = u(e), n.c = c(e), n.l = a(e), n.opacity = l(e), n + "";
        };
      };
    }

    var u = o(r.hue);
    exports.default = u;
    var c = o(r.default);
    exports.hclLong = c;
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "NOHm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cubehelixLong = exports.default = void 0;

    var e = require("d3-color"),
        r = n(require("./color"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {};

      if (null != e) {
        var u = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var a = u ? Object.getOwnPropertyDescriptor(e, o) : null;
            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o];
          }
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function u(t) {
      return function n(u) {
        function o(n, o) {
          var a = t((n = (0, e.cubehelix)(n)).h, (o = (0, e.cubehelix)(o)).h),
              i = (0, r.default)(n.s, o.s),
              c = (0, r.default)(n.l, o.l),
              l = (0, r.default)(n.opacity, o.opacity);
          return function (e) {
            return n.h = a(e), n.s = i(e), n.l = c(Math.pow(e, u)), n.opacity = l(e), n + "";
          };
        }

        return u = +u, o.gamma = n, o;
      }(1);
    }

    var o = u(r.hue);
    exports.default = o;
    var a = u(r.default);
    exports.cubehelixLong = a;
  }, {
    "d3-color": "4TJ2",
    "./color": "OW+9"
  }],
  "nlPb": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = 0, n = r.length - 1, a = r[0], o = new Array(n < 0 ? 0 : n); t < n;) {
        o[t] = e(a, a = r[++t]);
      }

      return function (e) {
        var r = Math.max(0, Math.min(n - 1, Math.floor(e *= n)));
        return o[r](e - r);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "g3ua": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      for (var t = new Array(r), o = 0; o < r; ++o) {
        t[o] = e(o / (r - 1));
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "mkGF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "interpolate", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "interpolateArray", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "interpolateBasis", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interpolateBasisClosed", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "interpolateDate", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "interpolateDiscrete", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "interpolateHue", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "interpolateNumber", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "interpolateObject", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "interpolateRound", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "interpolateString", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "interpolateTransformCss", {
      enumerable: !0,
      get: function get() {
        return c.interpolateTransformCss;
      }
    }), Object.defineProperty(exports, "interpolateTransformSvg", {
      enumerable: !0,
      get: function get() {
        return c.interpolateTransformSvg;
      }
    }), Object.defineProperty(exports, "interpolateZoom", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "interpolateRgb", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "interpolateRgbBasis", {
      enumerable: !0,
      get: function get() {
        return s.rgbBasis;
      }
    }), Object.defineProperty(exports, "interpolateRgbBasisClosed", {
      enumerable: !0,
      get: function get() {
        return s.rgbBasisClosed;
      }
    }), Object.defineProperty(exports, "interpolateHsl", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "interpolateHslLong", {
      enumerable: !0,
      get: function get() {
        return d.hslLong;
      }
    }), Object.defineProperty(exports, "interpolateLab", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "interpolateHcl", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "interpolateHclLong", {
      enumerable: !0,
      get: function get() {
        return y.hclLong;
      }
    }), Object.defineProperty(exports, "interpolateCubehelix", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "interpolateCubehelixLong", {
      enumerable: !0,
      get: function get() {
        return O.cubehelixLong;
      }
    }), Object.defineProperty(exports, "piecewise", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "quantize", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    });

    var e = q(require("./value")),
        r = q(require("./array")),
        t = q(require("./basis")),
        n = q(require("./basisClosed")),
        u = q(require("./date")),
        o = q(require("./discrete")),
        i = q(require("./hue")),
        a = q(require("./number")),
        l = q(require("./object")),
        p = q(require("./round")),
        f = q(require("./string")),
        c = require("./transform/index"),
        b = q(require("./zoom")),
        s = P(require("./rgb")),
        d = P(require("./hsl")),
        g = q(require("./lab")),
        y = P(require("./hcl")),
        O = P(require("./cubehelix")),
        m = q(require("./piecewise")),
        j = q(require("./quantize"));

    function x() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return x = function x() {
        return e;
      }, e;
    }

    function P(e) {
      if (e && e.__esModule) return e;
      var r = x();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
            o && (o.get || o.set) ? Object.defineProperty(t, u, o) : t[u] = e[u];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function q(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./value": "5ONG",
    "./array": "j6Kl",
    "./basis": "mIuw",
    "./basisClosed": "t9MF",
    "./date": "npIv",
    "./discrete": "9iFP",
    "./hue": "/lYd",
    "./number": "eUtU",
    "./object": "9Ci2",
    "./round": "8Ehv",
    "./string": "WNxQ",
    "./transform/index": "/tUK",
    "./zoom": "MbcF",
    "./rgb": "hw5o",
    "./hsl": "BrWg",
    "./lab": "5HCN",
    "./hcl": "9VIl",
    "./cubehelix": "NOHm",
    "./piecewise": "nlPb",
    "./quantize": "g3ua"
  }],
  "CgJV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r, exports.tweenValue = i;

    var e = require("./schedule");

    function t(t, n) {
      var r, i;
      return function () {
        var u = (0, e.set)(this, t),
            a = u.tween;
        if (a !== r) for (var f = 0, l = (i = r = a).length; f < l; ++f) {
          if (i[f].name === n) {
            (i = i.slice()).splice(f, 1);
            break;
          }
        }
        u.tween = i;
      };
    }

    function n(t, n, r) {
      var i, u;
      if ("function" != typeof r) throw new Error();
      return function () {
        var a = (0, e.set)(this, t),
            f = a.tween;

        if (f !== i) {
          u = (i = f).slice();

          for (var l = {
            name: n,
            value: r
          }, o = 0, s = u.length; o < s; ++o) {
            if (u[o].name === n) {
              u[o] = l;
              break;
            }
          }

          o === s && u.push(l);
        }

        a.tween = u;
      };
    }

    function r(r, i) {
      var u = this._id;

      if (r += "", arguments.length < 2) {
        for (var a, f = (0, e.get)(this.node(), u).tween, l = 0, o = f.length; l < o; ++l) {
          if ((a = f[l]).name === r) return a.value;
        }

        return null;
      }

      return this.each((null == i ? t : n)(u, r, i));
    }

    function i(t, n, r) {
      var i = t._id;
      return t.each(function () {
        var t = (0, e.set)(this, i);
        (t.value || (t.value = {}))[n] = r.apply(this, arguments);
      }), function (t) {
        return (0, e.get)(t, i).value[n];
      };
    }
  }, {
    "./schedule": "GDz/"
  }],
  "KSuB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-color"),
        r = require("d3-interpolate");

    function t(t, o) {
      var n;
      return ("number" == typeof o ? r.interpolateNumber : o instanceof e.color ? r.interpolateRgb : (n = (0, e.color)(o)) ? (o = n, r.interpolateRgb) : r.interpolateString)(t, o);
    }
  }, {
    "d3-color": "4TJ2",
    "d3-interpolate": "mkGF"
  }],
  "/e4S": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var t = require("d3-interpolate"),
        e = require("d3-selection"),
        r = require("./tween"),
        n = u(require("./interpolate"));

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return function () {
        this.removeAttribute(t);
      };
    }

    function l(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function o(t, e, r) {
      var n,
          u,
          i = r + "";
      return function () {
        var l = this.getAttribute(t);
        return l === i ? null : l === n ? u : u = e(n = l, r);
      };
    }

    function a(t, e, r) {
      var n,
          u,
          i = r + "";
      return function () {
        var l = this.getAttributeNS(t.space, t.local);
        return l === i ? null : l === n ? u : u = e(n = l, r);
      };
    }

    function c(t, e, r) {
      var n, u, i;
      return function () {
        var l,
            o,
            a = r(this);
        if (null != a) return (l = this.getAttribute(t)) === (o = a + "") ? null : l === n && o === u ? i : (u = o, i = e(n = l, a));
        this.removeAttribute(t);
      };
    }

    function s(t, e, r) {
      var n, u, i;
      return function () {
        var l,
            o,
            a = r(this);
        if (null != a) return (l = this.getAttributeNS(t.space, t.local)) === (o = a + "") ? null : l === n && o === u ? i : (u = o, i = e(n = l, a));
        this.removeAttributeNS(t.space, t.local);
      };
    }

    function f(u, f) {
      var v = (0, e.namespace)(u),
          h = "transform" === v ? t.interpolateTransformSvg : n.default;
      return this.attrTween(u, "function" == typeof f ? (v.local ? s : c)(v, h, (0, r.tweenValue)(this, "attr." + u, f)) : null == f ? (v.local ? l : i)(v) : (v.local ? a : o)(v, h, f));
    }
  }, {
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "./tween": "CgJV",
    "./interpolate": "KSuB"
  }],
  "L4WC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var t = require("d3-selection");

    function e(t, e) {
      return function (n) {
        this.setAttribute(t, e(n));
      };
    }

    function n(t, e) {
      return function (n) {
        this.setAttributeNS(t.space, t.local, e(n));
      };
    }

    function r(t, e) {
      var r, u;

      function i() {
        var i = e.apply(this, arguments);
        return i !== u && (r = (u = i) && n(t, i)), r;
      }

      return i._value = e, i;
    }

    function u(t, n) {
      var r, u;

      function i() {
        var i = n.apply(this, arguments);
        return i !== u && (r = (u = i) && e(t, i)), r;
      }

      return i._value = n, i;
    }

    function i(e, n) {
      var i = "attr." + e;
      if (arguments.length < 2) return (i = this.tween(i)) && i._value;
      if (null == n) return this.tween(i, null);
      if ("function" != typeof n) throw new Error();
      var a = (0, t.namespace)(e);
      return this.tween(i, (a.local ? r : u)(a, n));
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "1K26": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var t = require("./schedule");

    function e(e, i) {
      return function () {
        (0, t.init)(this, e).delay = +i.apply(this, arguments);
      };
    }

    function i(e, i) {
      return i = +i, function () {
        (0, t.init)(this, e).delay = i;
      };
    }

    function n(n) {
      var r = this._id;
      return arguments.length ? this.each(("function" == typeof n ? e : i)(r, n)) : (0, t.get)(this.node(), r).delay;
    }
  }, {
    "./schedule": "GDz/"
  }],
  "ZZtL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var t = require("./schedule");

    function e(e, n) {
      return function () {
        (0, t.set)(this, e).duration = +n.apply(this, arguments);
      };
    }

    function n(e, n) {
      return n = +n, function () {
        (0, t.set)(this, e).duration = n;
      };
    }

    function i(i) {
      var r = this._id;
      return arguments.length ? this.each(("function" == typeof i ? e : n)(r, i)) : (0, t.get)(this.node(), r).duration;
    }
  }, {
    "./schedule": "GDz/"
  }],
  "6pgS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./schedule");

    function t(t, r) {
      if ("function" != typeof r) throw new Error();
      return function () {
        (0, e.set)(this, t).ease = r;
      };
    }

    function r(r) {
      var n = this._id;
      return arguments.length ? this.each(t(n, r)) : (0, e.get)(this.node(), n).ease;
    }
  }, {
    "./schedule": "GDz/"
  }],
  "0QDl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("d3-selection"),
        r = require("./index");

    function t(t) {
      "function" != typeof t && (t = (0, e.matcher)(t));

      for (var n = this._groups, i = n.length, s = new Array(i), a = 0; a < i; ++a) {
        for (var o, u = n[a], _ = u.length, h = s[a] = [], l = 0; l < _; ++l) {
          (o = u[l]) && t.call(o, o.__data__, l, u) && h.push(o);
        }
      }

      return new r.Transition(s, this._parents, this._name, this._id);
    }
  }, {
    "d3-selection": "lm1C",
    "./index": "J3C7"
  }],
  "Z2Q+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var r = require("./index");

    function e(e) {
      if (e._id !== this._id) throw new Error();

      for (var t = this._groups, i = e._groups, n = t.length, s = i.length, o = Math.min(n, s), a = new Array(n), h = 0; h < o; ++h) {
        for (var u, _ = t[h], d = i[h], f = _.length, l = a[h] = new Array(f), p = 0; p < f; ++p) {
          (u = _[p] || d[p]) && (l[p] = u);
        }
      }

      for (; h < n; ++h) {
        a[h] = t[h];
      }

      return new r.Transition(a, this._parents, this._name, this._id);
    }
  }, {
    "./index": "J3C7"
  }],
  "VZes": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("./schedule");

    function t(e) {
      return (e + "").trim().split(/^|\s+/).every(function (e) {
        var t = e.indexOf(".");
        return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
      });
    }

    function n(n, r, i) {
      var o,
          s,
          u = t(r) ? e.init : e.set;
      return function () {
        var e = u(this, n),
            t = e.on;
        t !== o && (s = (o = t).copy()).on(r, i), e.on = s;
      };
    }

    function r(t, r) {
      var i = this._id;
      return arguments.length < 2 ? (0, e.get)(this.node(), i).on.on(t) : this.each(n(i, t, r));
    }
  }, {
    "./schedule": "GDz/"
  }],
  "FS2t": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function () {
        var t = this.parentNode;

        for (var r in this.__transition) {
          if (+r !== e) return;
        }

        t && t.removeChild(this);
      };
    }

    function t() {
      return this.on("end.remove", e(this._id));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "Xvwr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("d3-selection"),
        r = require("./index"),
        t = a(require("./schedule"));

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function a(e) {
      if (e && e.__esModule) return e;
      var r = n();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var a = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            o && (o.get || o.set) ? Object.defineProperty(t, i, o) : t[i] = e[i];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function i(n) {
      var a = this._name,
          i = this._id;
      "function" != typeof n && (n = (0, e.selector)(n));

      for (var o = this._groups, u = o.length, _ = new Array(u), f = 0; f < u; ++f) {
        for (var s, l, c = o[f], p = c.length, d = _[f] = new Array(p), v = 0; v < p; ++v) {
          (s = c[v]) && (l = n.call(s, s.__data__, v, c)) && ("__data__" in s && (l.__data__ = s.__data__), d[v] = l, (0, t.default)(d[v], a, i, v, d, (0, t.get)(s, i)));
        }
      }

      return new r.Transition(_, this._parents, a, i);
    }
  }, {
    "d3-selection": "lm1C",
    "./index": "J3C7",
    "./schedule": "GDz/"
  }],
  "DOdJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("d3-selection"),
        r = require("./index"),
        t = i(require("./schedule"));

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function i(e) {
      if (e && e.__esModule) return e;
      var r = n();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var u = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            u && (u.get || u.set) ? Object.defineProperty(t, o, u) : t[o] = e[o];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function o(n) {
      var i = this._name,
          o = this._id;
      "function" != typeof n && (n = (0, e.selectorAll)(n));

      for (var u = this._groups, a = u.length, f = [], l = [], s = 0; s < a; ++s) {
        for (var c, p = u[s], d = p.length, v = 0; v < d; ++v) {
          if (c = p[v]) {
            for (var h, _ = n.call(c, c.__data__, v, p), g = (0, t.get)(c, o), y = 0, O = _.length; y < O; ++y) {
              (h = _[y]) && (0, t.default)(h, i, o, y, _, g);
            }

            f.push(_), l.push(c);
          }
        }
      }

      return new r.Transition(f, l, i, o);
    }
  }, {
    "d3-selection": "lm1C",
    "./index": "J3C7",
    "./schedule": "GDz/"
  }],
  "bQR7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var e = require("d3-selection"),
        t = e.selection.prototype.constructor;

    function r() {
      return new t(this._groups, this._parents);
    }
  }, {
    "d3-selection": "lm1C"
  }],
  "gXfd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var e = require("d3-interpolate"),
        t = require("d3-selection"),
        n = require("./schedule"),
        r = require("./tween"),
        u = s(require("./interpolate"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e, n) {
      var r, u, s;
      return function () {
        var l = (0, t.style)(this, e),
            i = (this.style.removeProperty(e), (0, t.style)(this, e));
        return l === i ? null : l === r && i === u ? s : s = n(r = l, u = i);
      };
    }

    function i(e) {
      return function () {
        this.style.removeProperty(e);
      };
    }

    function o(e, n, r) {
      var u,
          s,
          l = r + "";
      return function () {
        var i = (0, t.style)(this, e);
        return i === l ? null : i === u ? s : s = n(u = i, r);
      };
    }

    function a(e, n, r) {
      var u, s, l;
      return function () {
        var i = (0, t.style)(this, e),
            o = r(this),
            a = o + "";
        return null == o && (this.style.removeProperty(e), a = o = (0, t.style)(this, e)), i === a ? null : i === u && a === s ? l : (s = a, l = n(u = i, o));
      };
    }

    function y(e, t) {
      var r,
          u,
          s,
          l,
          o = "style." + t,
          a = "end." + o;
      return function () {
        var y = (0, n.set)(this, e),
            f = y.on,
            c = null == y.value[o] ? l || (l = i(t)) : void 0;
        f === r && s === c || (u = (r = f).copy()).on(a, s = c), y.on = u;
      };
    }

    function f(t, n, s) {
      var f = "transform" == (t += "") ? e.interpolateTransformCss : u.default;
      return null == n ? this.styleTween(t, l(t, f)).on("end.style." + t, i(t)) : "function" == typeof n ? this.styleTween(t, a(t, f, (0, r.tweenValue)(this, "style." + t, n))).each(y(this._id, t)) : this.styleTween(t, o(t, f, n), s).on("end.style." + t, null);
    }
  }, {
    "d3-interpolate": "mkGF",
    "d3-selection": "lm1C",
    "./schedule": "GDz/",
    "./tween": "CgJV",
    "./interpolate": "KSuB"
  }],
  "SCZW": [function (require, module, exports) {
    "use strict";

    function t(t, e, n) {
      return function (r) {
        this.style.setProperty(t, e(r), n);
      };
    }

    function e(e, n, r) {
      var u, i;

      function l() {
        var l = n.apply(this, arguments);
        return l !== i && (u = (i = l) && t(e, l, r)), u;
      }

      return l._value = n, l;
    }

    function n(t, n, r) {
      var u = "style." + (t += "");
      if (arguments.length < 2) return (u = this.tween(u)) && u._value;
      if (null == n) return this.tween(u, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(u, e(t, n, null == r ? "" : r));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
  }, {}],
  "HTlb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var t = require("./tween");

    function e(t) {
      return function () {
        this.textContent = t;
      };
    }

    function n(t) {
      return function () {
        var e = t(this);
        this.textContent = null == e ? "" : e;
      };
    }

    function u(u) {
      return this.tween("text", "function" == typeof u ? n((0, t.tweenValue)(this, "text", u)) : e(null == u ? "" : u + ""));
    }
  }, {
    "./tween": "CgJV"
  }],
  "rWxz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("./index"),
        r = n(require("./schedule"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {};

      if (null != e) {
        var i = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var a in e) {
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
            u && (u.get || u.set) ? Object.defineProperty(n, a, u) : n[a] = e[a];
          }
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function i() {
      for (var t = this._name, n = this._id, i = (0, e.newId)(), a = this._groups, u = a.length, o = 0; o < u; ++o) {
        for (var s, f = a[o], l = f.length, d = 0; d < l; ++d) {
          if (s = f[d]) {
            var p = (0, r.get)(s, n);
            (0, r.default)(s, t, i, d, f, {
              time: p.time + p.delay + p.duration,
              delay: 0,
              duration: p.duration,
              ease: p.ease
            });
          }
        }
      }

      return new e.Transition(a, this._parents, t, i);
    }
  }, {
    "./index": "J3C7",
    "./schedule": "GDz/"
  }],
  "13+g": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./schedule");

    function t() {
      var t,
          u,
          n = this,
          r = n._id,
          s = n.size();
      return new Promise(function (i, o) {
        var c = {
          value: o
        },
            a = {
          value: function value() {
            0 == --s && i();
          }
        };
        n.each(function () {
          var n = (0, e.set)(this, r),
              s = n.on;
          s !== t && ((u = (t = s).copy())._.cancel.push(c), u._.interrupt.push(c), u._.end.push(a)), n.on = u;
        });
      });
    }
  }, {
    "./schedule": "GDz/"
  }],
  "J3C7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.Transition = x, exports.default = T, exports.newId = g;

    var e = require("d3-selection"),
        t = h(require("./attr")),
        r = h(require("./attrTween")),
        u = h(require("./delay")),
        i = h(require("./duration")),
        l = h(require("./ease")),
        n = h(require("./filter")),
        a = h(require("./merge")),
        o = h(require("./on")),
        s = h(require("./remove")),
        d = h(require("./select")),
        f = h(require("./selectAll")),
        c = h(require("./selection")),
        q = h(require("./style")),
        p = h(require("./styleTween")),
        y = h(require("./text")),
        _ = h(require("./transition")),
        m = h(require("./tween")),
        w = h(require("./end"));

    function h(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var v = 0;

    function x(e, t, r, u) {
      this._groups = e, this._parents = t, this._name = r, this._id = u;
    }

    function T(t) {
      return (0, e.selection)().transition(t);
    }

    function g() {
      return ++v;
    }

    var z = e.selection.prototype;
    x.prototype = T.prototype = {
      constructor: x,
      select: d.default,
      selectAll: f.default,
      filter: n.default,
      merge: a.default,
      selection: c.default,
      transition: _.default,
      call: z.call,
      nodes: z.nodes,
      node: z.node,
      size: z.size,
      empty: z.empty,
      each: z.each,
      on: o.default,
      attr: t.default,
      attrTween: r.default,
      style: q.default,
      styleTween: p.default,
      text: y.default,
      remove: s.default,
      tween: m.default,
      delay: u.default,
      duration: i.default,
      ease: l.default,
      end: w.default
    };
  }, {
    "d3-selection": "lm1C",
    "./attr": "/e4S",
    "./attrTween": "L4WC",
    "./delay": "1K26",
    "./duration": "ZZtL",
    "./ease": "6pgS",
    "./filter": "0QDl",
    "./merge": "Z2Q+",
    "./on": "VZes",
    "./remove": "FS2t",
    "./select": "Xvwr",
    "./selectAll": "DOdJ",
    "./selection": "bQR7",
    "./style": "gXfd",
    "./styleTween": "SCZW",
    "./text": "HTlb",
    "./transition": "rWxz",
    "./tween": "CgJV",
    "./end": "13+g"
  }],
  "fXiu": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linear = e;
  }, {}],
  "GaS5": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t * t;
    }

    function e(t) {
      return t * (2 - t);
    }

    function u(t) {
      return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.quadIn = t, exports.quadOut = e, exports.quadInOut = u;
  }, {}],
  "PA7e": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t * t * t;
    }

    function e(t) {
      return --t * t * t + 1;
    }

    function u(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.cubicIn = t, exports.cubicOut = e, exports.cubicInOut = u;
  }, {}],
  "ECJi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.polyInOut = exports.polyOut = exports.polyIn = void 0;

    var t = 3,
        n = function t(n) {
      function o(t) {
        return Math.pow(t, n);
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyIn = n;

    var o = function t(n) {
      function o(t) {
        return 1 - Math.pow(1 - t, n);
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyOut = o;

    var e = function t(n) {
      function o(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
      }

      return n = +n, o.exponent = t, o;
    }(t);

    exports.polyInOut = e;
  }, {}],
  "sZZb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.sinIn = e, exports.sinOut = r, exports.sinInOut = s;
    var t = Math.PI,
        n = t / 2;

    function e(t) {
      return 1 - Math.cos(t * n);
    }

    function r(t) {
      return Math.sin(t * n);
    }

    function s(n) {
      return (1 - Math.cos(t * n)) / 2;
    }
  }, {}],
  "rYq8": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return Math.pow(2, 10 * t - 10);
    }

    function e(t) {
      return 1 - Math.pow(2, -10 * t);
    }

    function o(t) {
      return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.expIn = t, exports.expOut = e, exports.expInOut = o;
  }, {}],
  "1+hE": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return 1 - Math.sqrt(1 - t * t);
    }

    function r(t) {
      return Math.sqrt(1 - --t * t);
    }

    function e(t) {
      return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.circleIn = t, exports.circleOut = r, exports.circleInOut = e;
  }, {}],
  "MKsh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.bounceIn = b, exports.bounceOut = f, exports.bounceInOut = x;
    var e = 4 / 11,
        t = 6 / 11,
        n = 8 / 11,
        r = .75,
        u = 9 / 11,
        o = 10 / 11,
        c = .9375,
        s = 21 / 22,
        i = 63 / 64,
        p = 1 / e / e;

    function b(e) {
      return 1 - f(1 - e);
    }

    function f(b) {
      return (b = +b) < e ? p * b * b : b < n ? p * (b -= t) * b + r : b < o ? p * (b -= u) * b + c : p * (b -= s) * b + i;
    }

    function x(e) {
      return ((e *= 2) <= 1 ? 1 - f(1 - e) : f(e - 1) + 1) / 2;
    }
  }, {}],
  "fCsL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.backInOut = exports.backOut = exports.backIn = void 0;

    var t = 1.70158,
        r = function t(r) {
      function o(t) {
        return t * t * ((r + 1) * t - r);
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backIn = r;

    var o = function t(r) {
      function o(t) {
        return --t * t * ((r + 1) * t + r) + 1;
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backOut = o;

    var e = function t(r) {
      function o(t) {
        return ((t *= 2) < 1 ? t * t * ((r + 1) * t - r) : (t -= 2) * t * ((r + 1) * t + r) + 2) / 2;
      }

      return r = +r, o.overshoot = t, o;
    }(t);

    exports.backInOut = e;
  }, {}],
  "xolo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.elasticInOut = exports.elasticOut = exports.elasticIn = void 0;

    var t = 2 * Math.PI,
        n = 1,
        r = .3,
        e = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return r * Math.pow(2, 10 * --t) * Math.sin((a - t) / e);
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticIn = e;

    var a = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return 1 - r * Math.pow(2, -10 * (t = +t)) * Math.sin((t + a) / e);
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticOut = a;

    var i = function n(r, e) {
      var a = Math.asin(1 / (r = Math.max(1, r))) * (e /= t);

      function i(t) {
        return ((t = 2 * t - 1) < 0 ? r * Math.pow(2, 10 * t) * Math.sin((a - t) / e) : 2 - r * Math.pow(2, -10 * t) * Math.sin((a + t) / e)) / 2;
      }

      return i.amplitude = function (r) {
        return n(r, e * t);
      }, i.period = function (t) {
        return n(r, t);
      }, i;
    }(n, r);

    exports.elasticInOut = i;
  }, {}],
  "CFyW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "easeLinear", {
      enumerable: !0,
      get: function get() {
        return e.linear;
      }
    }), Object.defineProperty(exports, "easeQuad", {
      enumerable: !0,
      get: function get() {
        return t.quadInOut;
      }
    }), Object.defineProperty(exports, "easeQuadIn", {
      enumerable: !0,
      get: function get() {
        return t.quadIn;
      }
    }), Object.defineProperty(exports, "easeQuadOut", {
      enumerable: !0,
      get: function get() {
        return t.quadOut;
      }
    }), Object.defineProperty(exports, "easeQuadInOut", {
      enumerable: !0,
      get: function get() {
        return t.quadInOut;
      }
    }), Object.defineProperty(exports, "easeCubic", {
      enumerable: !0,
      get: function get() {
        return r.cubicInOut;
      }
    }), Object.defineProperty(exports, "easeCubicIn", {
      enumerable: !0,
      get: function get() {
        return r.cubicIn;
      }
    }), Object.defineProperty(exports, "easeCubicOut", {
      enumerable: !0,
      get: function get() {
        return r.cubicOut;
      }
    }), Object.defineProperty(exports, "easeCubicInOut", {
      enumerable: !0,
      get: function get() {
        return r.cubicInOut;
      }
    }), Object.defineProperty(exports, "easePoly", {
      enumerable: !0,
      get: function get() {
        return n.polyInOut;
      }
    }), Object.defineProperty(exports, "easePolyIn", {
      enumerable: !0,
      get: function get() {
        return n.polyIn;
      }
    }), Object.defineProperty(exports, "easePolyOut", {
      enumerable: !0,
      get: function get() {
        return n.polyOut;
      }
    }), Object.defineProperty(exports, "easePolyInOut", {
      enumerable: !0,
      get: function get() {
        return n.polyInOut;
      }
    }), Object.defineProperty(exports, "easeSin", {
      enumerable: !0,
      get: function get() {
        return u.sinInOut;
      }
    }), Object.defineProperty(exports, "easeSinIn", {
      enumerable: !0,
      get: function get() {
        return u.sinIn;
      }
    }), Object.defineProperty(exports, "easeSinOut", {
      enumerable: !0,
      get: function get() {
        return u.sinOut;
      }
    }), Object.defineProperty(exports, "easeSinInOut", {
      enumerable: !0,
      get: function get() {
        return u.sinInOut;
      }
    }), Object.defineProperty(exports, "easeExp", {
      enumerable: !0,
      get: function get() {
        return o.expInOut;
      }
    }), Object.defineProperty(exports, "easeExpIn", {
      enumerable: !0,
      get: function get() {
        return o.expIn;
      }
    }), Object.defineProperty(exports, "easeExpOut", {
      enumerable: !0,
      get: function get() {
        return o.expOut;
      }
    }), Object.defineProperty(exports, "easeExpInOut", {
      enumerable: !0,
      get: function get() {
        return o.expInOut;
      }
    }), Object.defineProperty(exports, "easeCircle", {
      enumerable: !0,
      get: function get() {
        return c.circleInOut;
      }
    }), Object.defineProperty(exports, "easeCircleIn", {
      enumerable: !0,
      get: function get() {
        return c.circleIn;
      }
    }), Object.defineProperty(exports, "easeCircleOut", {
      enumerable: !0,
      get: function get() {
        return c.circleOut;
      }
    }), Object.defineProperty(exports, "easeCircleInOut", {
      enumerable: !0,
      get: function get() {
        return c.circleInOut;
      }
    }), Object.defineProperty(exports, "easeBounce", {
      enumerable: !0,
      get: function get() {
        return i.bounceOut;
      }
    }), Object.defineProperty(exports, "easeBounceIn", {
      enumerable: !0,
      get: function get() {
        return i.bounceIn;
      }
    }), Object.defineProperty(exports, "easeBounceOut", {
      enumerable: !0,
      get: function get() {
        return i.bounceOut;
      }
    }), Object.defineProperty(exports, "easeBounceInOut", {
      enumerable: !0,
      get: function get() {
        return i.bounceInOut;
      }
    }), Object.defineProperty(exports, "easeBack", {
      enumerable: !0,
      get: function get() {
        return a.backInOut;
      }
    }), Object.defineProperty(exports, "easeBackIn", {
      enumerable: !0,
      get: function get() {
        return a.backIn;
      }
    }), Object.defineProperty(exports, "easeBackOut", {
      enumerable: !0,
      get: function get() {
        return a.backOut;
      }
    }), Object.defineProperty(exports, "easeBackInOut", {
      enumerable: !0,
      get: function get() {
        return a.backInOut;
      }
    }), Object.defineProperty(exports, "easeElastic", {
      enumerable: !0,
      get: function get() {
        return b.elasticOut;
      }
    }), Object.defineProperty(exports, "easeElasticIn", {
      enumerable: !0,
      get: function get() {
        return b.elasticIn;
      }
    }), Object.defineProperty(exports, "easeElasticOut", {
      enumerable: !0,
      get: function get() {
        return b.elasticOut;
      }
    }), Object.defineProperty(exports, "easeElasticInOut", {
      enumerable: !0,
      get: function get() {
        return b.elasticInOut;
      }
    });

    var e = require("./linear"),
        t = require("./quad"),
        r = require("./cubic"),
        n = require("./poly"),
        u = require("./sin"),
        o = require("./exp"),
        c = require("./circle"),
        i = require("./bounce"),
        a = require("./back"),
        b = require("./elastic");
  }, {
    "./linear": "fXiu",
    "./quad": "GaS5",
    "./cubic": "PA7e",
    "./poly": "ECJi",
    "./sin": "sZZb",
    "./exp": "rYq8",
    "./circle": "1+hE",
    "./bounce": "MKsh",
    "./back": "fCsL",
    "./elastic": "xolo"
  }],
  "CNir": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("../transition/index"),
        r = i(require("../transition/schedule")),
        n = require("d3-ease"),
        t = require("d3-timer");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = {
      time: null,
      delay: 0,
      duration: 250,
      ease: n.easeCubicInOut
    };

    function a(e, r) {
      for (var n; !(n = e.__transition) || !(n = n[r]);) {
        if (!(e = e.parentNode)) return u.time = (0, t.now)(), u;
      }

      return n;
    }

    function o(n) {
      var i, o;
      n instanceof e.Transition ? (i = n._id, n = n._name) : (i = (0, e.newId)(), (o = u).time = (0, t.now)(), n = null == n ? null : n + "");

      for (var s = this._groups, l = s.length, d = 0; d < l; ++d) {
        for (var f, _ = s[d], c = _.length, v = 0; v < c; ++v) {
          (f = _[v]) && (0, r.default)(f, n, i, v, _, o || a(f, i));
        }
      }

      return new e.Transition(s, this._parents, n, i);
    }
  }, {
    "../transition/index": "J3C7",
    "../transition/schedule": "GDz/",
    "d3-ease": "CFyW",
    "d3-timer": "CBES"
  }],
  "uhVG": [function (require, module, exports) {
    "use strict";

    var e = require("d3-selection"),
        t = i(require("./interrupt")),
        r = i(require("./transition"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    e.selection.prototype.interrupt = t.default, e.selection.prototype.transition = r.default;
  }, {
    "d3-selection": "lm1C",
    "./interrupt": "JwzZ",
    "./transition": "CNir"
  }],
  "zz7H": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./transition/index"),
        n = require("./transition/schedule"),
        r = [null];

    function t(t, i) {
      var u,
          l,
          s = t.__transition;
      if (s) for (l in i = null == i ? null : i + "", s) {
        if ((u = s[l]).state > n.SCHEDULED && u.name === i) return new e.Transition([[t]], r, i, +l);
      }
      return null;
    }
  }, {
    "./transition/index": "J3C7",
    "./transition/schedule": "GDz/"
  }],
  "Fcbi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "transition", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "active", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "interrupt", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), require("./selection/index");
    var e = n(require("./transition/index")),
        t = n(require("./active")),
        r = n(require("./interrupt"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./selection/index": "uhVG",
    "./transition/index": "J3C7",
    "./active": "zz7H",
    "./interrupt": "+xAn"
  }],
  "xsMK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getColor = t;
    var e = ["F05A24", "EF4E4A", "EE3F65", "EC297B", "E3236C", "D91C5C", "BC1E60", "9E1F63", "992271", "952480", "90278E", "7A2A8F", "652D90", "502980", "3B2671", "262261", "27286D", "292D78", "2A3384", "2B388F", "2A4F9F", "2965AF", "277CC0", "2692D0", "25A9E0"],
        l = [[0, 4, 10, 18, 24], [0, 3, 6, 9, 11, 13, 15, 18, 20, 24], [0, 3, 4, 6, 7, 9, 11, 13, 14, 15, 17, 18, 20, 22, 24], [0, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]];

    function t(t, r) {
      for (var n = null, E = null, F = 0, o = l; F < o.length; F++) {
        var u = o[F];
        u.length >= r && (n = u, E = t);
      }

      return null === n && (E = t % (n = l[l.length - 1]).length), "#" + e[n[E]];
    }
  }, {}],
  "xUTH": [function (require, module, exports) {
    "use strict";

    function t(t, o) {
      return n(t) || e(t, o) || r();
    }

    function r() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function e(t, r) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
        var e = [],
            n = !0,
            o = !1,
            i = void 0;

        try {
          for (var l, u = t[Symbol.iterator](); !(n = (l = u.next()).done) && (e.push(l.value), !r || e.length !== r); n = !0) {
            ;
          }
        } catch (a) {
          o = !0, i = a;
        } finally {
          try {
            n || null == u.return || u.return();
          } finally {
            if (o) throw i;
          }
        }

        return e;
      }
    }

    function n(t) {
      if (Array.isArray(t)) return t;
    }

    function o(r) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      r = Number(r);
      var n = t((r = null !== e ? r.toFixed(e) : String(r)).split("."), 2),
          o = n[0],
          i = n[1];
      return (o = o.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")) + (i = i && i.length ? "." + i : "");
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.numberFormat = o;
  }, {}],
  "Z1JN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.roboto100 = void 0;
    var A = "\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,\n    U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'),\n    url(data:font/woff2;base64,d09GMgABAAAAAAMUAA4AAAAABdgAAALBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiYbcBw2BmAAWBEMCoIYgXgLEAABNgIkAxwEIAWCeAcgG7UEAI7EOEZxiRkf8fC9P81z3xfQyMvMQaQus22oc+UuRCQZtNbmVeOltyqmmEV8z6UiqVMSsdIZOB1vXwd2L+nAJvpsn2B2bqULNKV/wGMKBMrOtXPG10rQDxGSOqALn4IQQkINNYFAxTgzwUVLzu5AHTxPF0EdczoRQJ2435RBCUKzKRAnHNZlRBEIOQmhJOkkiB5K/AKEUNifpJ3WCTpQBapglWsAyHLb/cuTvz8/EaLvuZO97EgCIfZ5QGPp2ss9Fn1X24MFDY4U70/68T0CuRn5o/opCIC8l4AgUKFmCeoH5IpB39XNpm350XMC1EAvgDqfJgUhKTl9j7WAIqijjLngEKhP6uYBCVkuC8u0bymU29cvaDn3ApaPnrArc3yckFnm0rdeq1z/RRaXvftm9YbX37bkii9c9Fly6duv/x9fZhfsTNhW2VH1+uZRbW/EsFb5o63Z4V0IFdtfvvjsv+o5nz6Wxe5rY3dm1S8nvHT1gL8ffuKPsbuHv/Li1QP/efjxJ/55+JpBL6wvVed89nF1VvvXnz238uEtd39Wnt1R/snb7pk2s/PDoya9PX/GydmZh8b3PrP6/EtgiOASKMo3riKh8Xrzu3znfJtAGtih7f533trbMuv3UvcSaP2p/Rjg9djw9z+D/n+9nCudAcoSCIonNmqUh1TgjXkLBGqK2Y0O+YD4hvwm32m1q/z9jdcFim7RxYOQAHWS1EFYoOSIgMiVsQfuXOjikUvqzhxnb+McuLwhPriCLn5Ordvk10IKlUfHYbBMBS0NzUgW7CmOECIiPZK9qc0uiUQFN52BkXkPYSB0NuJdzQ3FK4VJUXCHxZFrHTFbRC90DxndzRyFrKA1o6mtb/yf+f40rOpsdyKlGqlDzldV80L14g2LqFHoGHUizhtCZiAMdWeO1rYu3NqqaqlpCADN471TAAA=)\n      format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,\n    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n";
    exports.roboto100 = A;
  }, {}],
  "pTFy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.roboto400 = void 0;
    var A = "\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,\n    U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n    url(data:font/woff2;base64,d09GMgABAAAAAAMcAA4AAAAABdQAAALIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiYbcBw2BmAAWBEMCoIYgXsLEAABNgIkAxwEIAWCdAcgG7QEAB4HuUnzSsxYfoQjHr636//XPj09rr4PUEToO4IRQRHJlBgf/nKvtf1oamttuvHbwyKKIA440WqDfeCcvOaBRdtIBzbRsjUOrG390v1OEaV+MDndbbsEe4CJ6bp/iJAUgC4UykIICU00BQJ1IyWo586v9UDtOea0AbX/oWQN6pBdlx0oami1BOLgfacd9AiEkoRQlXSiRg8spQAhlPu7qad8NB/EQzzGHwNAVjozLpaTX5GPgeh7bmVv2S8BEOVMoLZgRbOIVN9lvLDsf/arXJH0o7gWSpPzO/VDUyFZLyoBoE5OpdYPKOWDvstaLS755UMCNEEvgDwDEmUhqap1924DFVCghungAFCgCXJAGn4p29N0KMrV9sVxbUcft1jpD95qOygOjkx18odf1s/9+uP1ccon3zTO++oj60/7eIUfrvX6iH/8JxuOm5psrO/X8N66tb8Y9qz8zmezfVuhqbQ/dd6R/8ZR31yfxbazY1tm5aU3vX/R9MoNd95au/HSifHagW9fMqt+86131G+8aOZ7j0f2RqdH7n+zU/rt4H/e7vPQw68U6V/dO11+2Kxv58+nbuq/6sYt6dgVvVLkru2PMIR6PlTk/z1Dwv+jW/MV+fsCaWCHc37YPHxH29Tfqt2r4Nkf2w8H3ovVv/7tv/dqI6uHgZoEgsoh/zepLfq75/+LayMpAACV7Hx7AYh/yE92ZNbPPn/+/9EUqLhIFz0aAQqSNIhWoGo/KlGqYTtMNjRtZ5PCQd3srlsSNjfEgy3r5b1rYa2POfYOnk6W5hYuaB4ubk/Qivaq4htEXLYjcYymbWzQOpXmOTI1cUac3BAyh4490V6Ouedn5q42BCcDxMnZ0t4OzcPBzSso+ovx4BuT7KZ2Vj15EOGE7qGD4GA1kgXCob4TAWewJBHYfVPizKmmLCuvoSvPzsPBRQW0DiIDAAAAAA==)\n      format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n    url(data:font/woff2;base64,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)\n      format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,\n    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto'), local('Roboto-Regular'),\n    url(data:font/woff2;base64,d09GMgABAAAAACsIAA4AAAAAVHAAACqxAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGmQbmWQcg3wGYACHbBEMCvAE2SYLg3IAATYCJAOHYAQgBYJ0ByAbL0azoqzvUpziv07gxlB4DbUXLomlMJ2KzM681XQRJRADNl/GTXHdO/QLHl1szuTaToSWEZLMEjzfn7xzlXyzfbWxlrGnkXNAc7tfMaIGYhSgYBQtLSlRLdGjQnLQo0toGfSGSpSiEmXRYtBmHOm0ZmTJMKO1Hohqbu+qB1rtKnYuQE6iAxZMs0o6KWkfoWjv+++olO3AP9Pz7LzqbyIwEBpQr8EBzu2bVJtA58gmjph8C7KhpijuvXb/c1pwSYSuq6zR3aY/jEh4VHt+Ts0ogjsehf3/15W2uvNXtuRV4JtY5oS36MKdzxn7pExRpaikJ2kV6c/fwYDG5nFAHtPMrmPAnQlMACsgrgi5ShdXoZLLlARFly51lxahKJvoqGaE0YqmlGWpfk+OtbSOoukdc1hrEEZCYJRRPGi7j8/+6JKgsACwMRQGfGQhlFlDhAiBiBYNESsWgoQEkSQJIkUaRK0GKP2+QCBQwAhgDARIECEQYBgBsjBrrq1pCMf2CCF6wLF9iE7ucOxAO38vOAYDiP8QSAfsRfQCPJCABAMFZAz1JkQRDLBuulrFqlgSSTfLSJkt22UtaWYWFGfZzsfy2SyZNbNXjpoPOysFezG378XCVi+WixTZolkFyi0MDa9iJc8eU7bLSEaocg26bosPGDUBAgmxHyAQqjBwGDHhwOec8y646BoBwkSIEiNOkhQZsm5Qo06TDj36DBgzZc6CFRv5ChQp1m/AoCHDRowaM+6hRyZMmzFrzrwX1m14bdOWbTt27dn32RdfffMdQjyew5DESQqBDC4vcEFwBDcBbMGFEFz4wtjVwQ8Qx0k5VqjEDlWCGjRgAKMrNo63zGKbebxnJUFaEBcGlxKgzBzI2CCGMIwRjJovW/EKS1jGClbNtXasYwOvsYlt7GAXe9g3D9r2AR/xyfwc730pIyxi8PBAa6CYYhEd5bDEY4FkbJKKXTKx7AUCTARKsOdj+omdhoeJ54yji0WM8xz0Co/zokMLKdIlRSUMZpzksWfLG+xwAFjBhB3BYsOib+BcjX0ShAUs4hmer/UwHDaMLmIlgUq8pwqoQQNGZCBIM3E+NgWKIhQHa0GwDmzgNTbNr9h8w/e1MlKJXapQgwaMkIY1rGMDr7F5w2jqWJkSYoEdjgGCbWAHu9jD/lqx2CIOAYUoQRk5il0LWMAinuH5Whlp4qYD3Ss2iCgmkcECo20n2AF2sYf9O452JoaZxgGLWIXGHG/Jxxd2foyiHvthvA0RnSmzYIgN+iawxBSFgXoiNo7nTA1RV+kZd4XH02c+chVIMSgpBpTGHERBUCDUMUNYYIRqujCgPdfndMIRVfM4w+N1m7assbaNnXzSmxYOvbbb2qZorAbiryC+MMFaJzvodlVyhAwST78PRIOh9Me6/AAi2PgeU40bBQqxd9miA0C83b8mYO79x+Z9f1+p4au6T/G+/Zjt/efmvf8k52PWxxOjS+TWhP2+7ea8b1tvqzfk5Pv2ubwYyOP+Xvec79qLqupptwrsCDHWRh8wy8Vb2ONKEDxJVEKUtll2aV9ZW+R6N8u5bJHayDjHHViDPygfiQ0cvMuxZEDs9PbC3cMM4o3T4p2S2IHNtn5ERsUszr5/baRh93IsIZb6quN/joAxhxTxrPDyXUVgX7GC65LRWz64jxHi+x1vV0P053wexzmFNXH3gh20wT1a+Bqhl4tRF/SGpyQ2iZSg1OEnWerZW95rodVsk0dxEb9vRuw+vDc9apPva2KeoHi2zbr2++Yr0oV6GsQr1ThhLM444RoHwzmCjaMQHgganwswLhNBT5wsAmUqjlITfoJmy5P0GDrFmPMyb3mGJWtnJbc8J1+J88ru6lX9Nl2zZZ+Rz76zgCJmATvMDrPjOG6Bo/Dzo85xduc54gLHusoZXOOMBDgXYY4Q4ZzEOTMJzkCSHyPFj5DmbGQ4E1nOSpnj3OR0VMJDDjbDAxPrwzAARzMM6ZxtxgF6C5zAitOz5iySBV36Fx1WCHE8DYwOKwE/rowf198SMWAUytgdYzduAta0eYgFzzF4IS2ZvLQKZ63lIes24W21x9i2D50kcnpf04fJZOyMPeLEriEXpc04BS6LUC4pR7nKDxPmKKIc5XrIQmAzBkbPDjEOxsoYGRtRF6tBaKhASGNohonQjMARJpyJWYglMAkew0fMYsFRUjlKWntErjxclDJ2xsnYGWfE6QEEFzCcQJHJUIyeMYJuwiaERoa2MPzAJ1iGl+y/dLZciX9dLyY6WThcAd1q2ytzg/ka+oa85tr68n2lN9LR7Ke5sbwx31xHK9pSXyPjqDM/wAxqYsEkNOxB9TsBUOdMt+fB3p5w+b/lWQKEDnR1tgPpS6Zw09oHejt4gPHBAZ5EsAQSOgowlAMlas1t8MDuCSAzN4HNWaqISChm2yck+INATlOyYFqEXAbUBBb1iWmspRaKV5Lc6AnWwHXVCV3MvaqbYem9OOACtA4nQNyKQYO6oLIM7tClIsHIXZPG4K4WzVpRtGnXoTNvLXHs6e4Wyo+/Hr2oaPrcg4LgdBIolfQyYEG7rMIgzVqbUV52y2ut1dBjwDy0Deid52ydTXRUQA7E3xf+gb37RQFuyNWAunyj4MYNDV7EDAfd2rc3BpBugUmpwLrkYOGBkSJVaNai35gpbx34jwgmg3wvY/llXupQ3EO5h3NP4D7GfYqbl5ufW5hbkluJ25+7mYeXl/Dv////+w8wErcKlVrcNWDctHc+JMGkjzd8PPcR7hPjF+KWuGGMb206GUPYYxDE/4KfN2Se5JX6+/D/rv87PyKvJfUPO2bttkhhgg2v3WLl6ur31eNWspEmdyHgKVgeWBMHb2E6/64+ZbR+U7+pP/wYsRYseua5F+LEe+mVJctWrCJJ+K19pxMlOfDBR598luwLJkC2Dja6CJIceYGCDkehqtfgflyLO7CHeicewF14EIfgIfl4TT4BOBZPyhcb5UuAB/GyfEMCb+ItHIe38T5exwf4ECfgI3yOd+QXgJPwJX7ER+pPOBk/4w98jT/xF07B3/J/RTkAnKaG8puRFtOcrqfNlS00Zxj5PkIt5CdAc5aR39GcbeT3NOcYXdaca3RDNecZ3XDNBXo3XpmguVDvpijTNBfr3QxlFs1lRje75kqjm1tzld4triyh+V3vllOW11xtdGtqrjW6IzXXGd0dmuuN2WbX3GDMPk5zozEIzW1G/M27fXmdjYeK/ylt4q9C+okQbeRH2sQ19PKTOAW6NpFPWx+BhYY0ompAhWhDlvrNBBLdVAdU1GZFgPIv3XotlM2GAFXDHoGyUMXUVpJROQCk9ZKhGxGXvBzhgqfcgDS2WuCryWZVDdI6V4RLLd+hTNfH/FAAd90W33ALHNi68TiNIYig5UOxnzktRZZOAK345+0vG+9MTI6GsmHKOJTnnvxoE5oYS0Mj4CCp+9J5m691DHZx7MdlpaXxmI/IrWSF1RJ8Pm9zAfwX8zZzK8OsOcPUsHhgopLksZL6syVz8OejbR8QmTcuxdJO1lg0YeMVE0S4esMciydeWAFYUMhDsZ0aTVUmVjEKXJAol+3dfroY7WI6nFDJefXVfLj3+lMSGvPqefZa2GJCNQ57N056MFCWlqLrl4rMjLBiiwxTBHIrqQZw+O+scKCBcNVdY4fcsFTMDQI4oJowbskgPmbXUlHxYXvjgXDwdlkxEo8zoe2LtJDuSG/O+42EmEwLVDerTd561XCH0kU75+7Og7z0y5Wf2riVRO/tTKOepZMLJ0fazH2MlZ0YO9VjWbOrI07W45UFPUqMKAg96oSoOrxgHi5ykN0NrY9CKK4/JmHZE6pthPvOjaadnvPas/9abUSDFbzEd96GqU0loKo9xucbkXAk9oXvluOzwkHjL1K8o4aEgTzqDFE4V8FLy8sRDJOnFJ1fqCbD0w7XQXV4S4Ba0DILDYj74/pivdAGejOSt9JteLv06Q3Eyt4N88FwFEQ5iJaxHySKndtI/615sNetEPKc1xq2ONrV6QUoUeAY+kYWuooF5DiZb9OWgOY5zw26nSSBVm6F6mSmaOd+WzFebCm8gtMhrP+PdKv/esV349/H+apOxqf+Pzf1cd7SXLx3/Ovbax8mJFzQTbXEovw5jXZ9NWfsV2uKpisJpf2ng6GDlbYr7WOaEdUC4BSTdDzA+jgGJ//oss+NI1ZmZOhHcJvcDkMvciSVufbfqqEG90fVMaaTqpYEbbEPOyFGQoFCFftRwIotBe4TnmKGFDPtyVRkfL2g9a/YubBwpCJYzqk89/x0obLv2uwBixODju0V9TGYfWtMR27TZ+aPmhrcPzmrmAvKiV7Va62yeeg2CxNqV6B3gG6+hNl420/Vnsp0L947hcYOYUF0M3indNtOn6kH0+Mu06b2Lgm3RUqexFa4uKamnNHfXL6kvL1Du9uU7nK2v7Lcp6Dk9dvhDmTP4iBUMISi/DGmqCJEluqEUt6hglkdaItv/ywF7uSW+Siqohx7LkJgZulg5sRlofZ1aX6n3vy0Konw0oCHLe8oHBwEFwBXhsuVcxMDLqi/lC1Fudwpgwv/Kn8qiOHku0kbt9c16AhnxD1CnkoTNvUtnTMYqHuQlgMFYyMb4TdYsYTMy8Mdn4J7uQ7dJWFFAx5NlOr+XlVv4Y8agkGU4kJMAql91054Y4eYNjWelw15OllF11adHro0kOlsKj9YdqjUAzifeHHXFa4X4ZPu1reE7z0YhezKNCWCgtwy6HTNLKWm/4vaNRjlxhU3glWJx0C+rtwaWttjQMgdIW1qwL5Dh9zjPq1zS8gVvShFLh2zqtso0SZypUfFywbPNmxtyXPrTqAM8Xa4MiPEqsBmivNxu4oZuDCdwHHcfMhpe1jldVe6n+wUY3Al1JOZISR32SG0I9XTs083jMshSqNAg+QxylnlyoZY+SrYiVUfYBq7EOk7kH9ii4aQR6QUFxS4OzVpY1GqsrEjaXGoF0sL5dLhtFlDqAjbWbSzghA2qADpmnd5ocfdHgUsLkzXDJnGrMD1mQx4s7uhFgSZ6cVUqv1KvNZfmwRf2/q1S8fe4HCmwMSVXnT672F7ipX9R1F7/sr/P6yPIXJNzL5azNkEk0gZXfbWrsqLdAfhzRZ3MLcva8hZF/9Xwi+vetRTWwgN1dWsgL66PTZLhrfX2SRDjJILR7TF4XwQh9s5RZNp2RAna+TnAiIOt6W5Wgk3bf6m7GH6QGK+DRJ/itwMzRAu5pFEAdUNyVNUsbxPyKvHUEKjfhWvxqYUaFznu62/14l01p4L+qGWArcE0joajrWGqL8st42GyVp05xYiGJ6LSrU0nmzZzUm8sam3NtYMCiqFwvmR3hWeuZO7KBtelS6qlE9Xj4x4B5czHUOPZMFX5WRFAwooNLxjz9fzL05AuR4+5aw4SO0gN1Ah4ljZBHp+w3pD6sMhz6EsmsS2Yx3PwKUX+TibC9YMprOYP/Ezqsc12iLSV72b7tZpGfPcFLOj8/jxnovpr9vyhSpt/6LFj2mb6FO8zclttsw8MZ3KC2eTXw6GfpQ3eZDUOea8x+uCIl6o6sRQ/0GXAjKacMzzyOpWFSs3u4K+6/A4u1XU794rPExtFvGiYvlCdp9ToIUk1L/uEtdIqO9TuklbOGHZhA2abFkjsYT25obROmVT5nTUXNRC6JiysCQ08ijgBRR92tpzFgmV5/2VjTr5EEaes++6QpAk5odzUtBGuPdKy0WkXti9kwas4GnzTHhdlpMiL4vqXiqR7qv5+y/lY9HQAsQEvHgMStoX0fROqcmXurYNpzBMQ7M1ZsHp/jCZ/ffsGgMBYWhS3uDOc+OxglB3cnbjviDR+M8N1rZvxTZpes6qS2bblIYYZa638OBTvinakght6Zqj+r3qo/mqPieZZ721P6fjM9iwaZ5D3jQbgh1stExeS1jbvpxujPMjgKWMoJ0sAUvHHqMceMAY9LoSjVglIlZoMC+qg/lDQ0y5Blc8PMLNQz3cgN0o+KSTN+ylMieU88KfQrxOIfnq8g6S6JXsUCkn9crJouCVjB2epLxb2GE96feaqRmlvPj2KsWDaHSQZVREgdC83NB0Zc2DmVqOV7lLdVy0nae9afF3iEERoV634oIF7BsDdUvdGiaedhP6c/qpbLNvx6gpmbmk2NwIwOUUxNY2xMbXNCaqxNXWRsc01KYk4bRNHNVVjO2M1LSNnHKMnPTPdFyLra3H1dWlqJgQI6ljdX4AqRrZG6nrGDuoqZjaG/745CJ/2Z/oIg+OJFf/1hp/2wB5skrtcF993vDdeFPTHC89N23FGMXo8rr/Zd3UjxVbopr8mJLzArK+qJ4d4m1fT1cbGhNYkIY688Y2gBygr3hN0FhW0cFUU9/GC1gXMjm9o2ElF+K0N4LLDwyilPlCMr1pj/EnwDAm9bhhg78Nn0+cWnDLjgGIKa36F3wwi1Xl9ykMoH1ArnLPmriUnLTT4feJVd03CiwGzupnV8yu5F3xxpsU0lue97ySL2Q+yhJmRT3dcSTcHC68Zs5rzXtCe7L/D7qBBvE8LipWMejkuq5MJ/tHwHTqff57INsKkImtAldbiGlACS/nx10pA7kqT+Vlqd2tVRG00Hf55et7O8uXURK9TDuxi+T06AVk+fxu4lpKUtwc6jW8oM34J9azj50EYVr892vekYZlRsSkTL/kgpJU6iPU9xePd+bbnrGfj699BUcchFJikNx4IvzP0xN9qS1/Nocnt14M2YS2uV4K4otpvT3yvy+C5W6aX25SJCktJfZ2cUIWkgLidlsT+RP6NP18z/PDH0fPfR4fnTCBpy/UFrabtC6luskmjm/h1tY/oV4Ofl5gu9fKFk6ODIzOai3OKqPEhSiJ0IHI17ZS3mfo/98na8TY8QcbjPPrX5gnZ9Byf1WyjOv1MTNkm3LfU0ZKnZWvQiLSe3LzMnpBwUiVr0t1iC/3CGfBc5AdEfEkNthd8xWI6wu6/291evbP2r3AqPu+ArbXvBs8eneeDQ7sPqP3swktKvyVl/8jKy02Jjud3fGYJ4nk7x2XuBKXuJKUAsIbURJKFQa2kbQwp7XELK+tx2GJz38oHBZr0CHpY86WnNtEf33L/tOqxPeMgXp36euQ0GxaYW76ANDF+v4ZEeYJyxLmCR0BmeqrCpUKcgoVCiDYnpyDeiBqF5olahc2AI6FSKBgkqZBDMnA2tPVM9D1Vpi7BRWp3Bjrvj870dZa2eDhrqpbMCA9i3/yeFR+Y/z47HBXn0idqGGyvnp65jvCE5aaYNSDbFe92xd1ZIUvEN5m+6asYjsIcTfztR9dH+sIYvjK+J3swT8wY955qf0scfGJoOsv57X2WsZjjITl7rD9g58Oqy135NZ9mNN0802lvZzOWOOvfAuXCyjYA+mZcPvEsDHeUUo97wJltP3owfd6aAAsZWlvf3jgll+Jw8UA7sTeqJG/q+/F65lkSEXJoXSnbhTyRuZFeASneJBPgFb05LG3p37to8R8xVIfZwjT17S+P4zi2hw80lJbnNc7zfo7bW/0cHtFY8bxjh4up/jBmboyUXhoNamrEv+dYYRZlBAwsfKN47/Rj/eEBQRkUZVBmOXSUsBSssvm5oNAeijWIXYAsBRS2dgnB9Aa6FdzxbtQ2jlq84SRidtqQq5cm4fen1oYEOXmHRxjAQj6usrd71F5TVVFr4QNdKNgsHKlUk/7AeIKcRCCvniIINBFGaSb+bUz8+Lj8sOBiMSUmKCsXCDBsZq23t0bb3CaNPVeOoa/+spbcC1pL/ULFhmEY4coJ0dqrsKf2ZVfZ3c4uVmcfXK+gGB7vavT68wr8/b2gyov6pUvzs79oJvVsEiWpaujNNPXZ4kjT11nM+UZGptbGerJcgsPEPQUZ1/3NCfqq/vv2VNU2mMW1B9wkZDE/Ng4esDy+dE8fvO7cYlZUXVGUkx1cTrKEXQJDXPxAsFG6McxwUKfVdh19e9AYWgoSyz0A/KE60EXlH5Nn/YX0x9oGmvZ90Nm4xt+dTEx61GMoJEr02Tm1jlyfXZ4QgU5H/jBKPHbzbXJgmbC2lLetl/U45DBuLq8wvSycG+zvFA3pyeh9tXebRzz7/LQxNTx24NxQwXVBZVhi7n+oBZAmAcsoR+whLmyW6B+h7ICTwH7ipXn4DiCrK89eFnWcreyurml7BUk/zuGaZvlGaU08nRRZmBj4nj/+WYC+kcVe/aPc62nhlnObA5yHaK0Ekb4uLy4vDj8+Vq5sJQBOK8YY3ll4/HM4vKm03Xn66+fLT+ZWQfH+bCXL087ZJ4eOM1P6BKIl8iXns0Q3IxhL/ueBtxd7/sBl9hfEAJ0vSGAiqdQ+HFXKAB5UaF+FFowmPkTaxCO1fTdX2++uHj7wmITSETl5+TnwMmal+UI3yqc/0+vFxXfUfGkM6UBaFudRnZ+RF+HeAcVmh4xb8QksG+Ohq7+lMtnwvYl1aTYjFdlJdNw3MTPDhRQ7D9eXx546p2BD28EHFBlvJOT1y6gezH3M58m9eg0zBs2dMZnPwWZGIfsIDqzVoxlQN2Ig9cyhh9Ol/l9fZ6Q0/3hBV1LK51LOsk1rWhi4Exf4SOw5vu5c7X/gVe0CBVw0Ij380oYu7cr/KMX15s/RaLoln7UL2hOzJ8BTY4lDu5PvJWhf5bSo+e2DqG1ltHl7SPJ9gk6QvI+JgnTBL8Jn/wq9qxTLHSpCUXwrqmJ3OR9l3q/UW6NPve9qLmdiz3xHfldE9jw/d26ODjmlYIPauCe/fFxNmDVQdLYxiswqzkhLz/Zyuv2wINtQeqnntzphFa9sn3DosaE/BngNOgJzRs1QcU8pj4Bfxdvb/MEGz4tNBVwQAUjqiR1/NQVT48I8zAPd+DslOwRPy4jmPNdRFZOwaCPcOqyl6hY2d4CqF/8gsNVr7rSPlDXYb1meCHgBRjl3wjAUSOJCQpMmXit1yKq1WwT6IgNXqBO+LsSI5wTQhmcJ2mju++6FYq4qJLA0SmJTQgrfmjXf7CSYM5fHv53JYm8zCb4j7ks+NdaStYSm+AfKr6z9kVq2p2l8fb6pdSkuhcgv8H+ff3K4KhPOD0VsC8b8EE+KY+GN/hwveie4rnEeoMcrH52U3zJLFjz/d86PzrgFUXn0QjYl1SMdxBt5L3An146Wslc/B3jTIJJehWpdB4u+OXkCXbLFQFVshMVbp5RJ3YfBHhOa/joH5GqMdD2041f62nt3byfQ9OM8rR38jVRUXRV5JRpMtIPNsl8d5caM27hU2NLxVgmexBdIw3hSIAcboI8US4vKifPHZanyqEcHpGbXD5KHsWBUJS7e+RMS+dDGBmg9n17OK9cykGVpMCHX2zDN+4fUZJMOxIneR+UKv4rtBSVo1Myj81PhA0tksdRI9nLbHCRdfhiLny7e5D83I7Lg3fxZ87PnGcevHZci7DHwjp8aey4yLoj8xKvElMeh7WLBo/jec8jZ69OgEReSL5FIp/BUc1CkVgI8qQItm/eG/88nzn/aRrpvrvWLsRHnFY4NvG61rTW7M0kivBUHhSZcwH3IBcIvybkcPRL7zoNOvW2Hh+bVuAjUgTb1qB39mA+c/7zxL3O9buCoP2Zvoz2PEn1tkh9ttqZi9oGbtYVSEXP0xTNlButFT8HNa39bKChqR7mOYeYcjXD76OhFuOYHUxn2oqNGH1IPrpF3W7nGT++dGb+0QkK9wZ1NZerfw6bOxGVolfbgCfdqyIZ82UowZdqBQvGIDZ4uqU7pRV49PiXvYcPlufa+t0jw7xdowsj8OgbpaD0wacsdmaqLDo+IZqUnOpcPDHpXZWVF52QlVsaNDxSFpyTH5uYV+hZ9XjEqSydHJsgiQoLI84Nh2wMh/rMhtE8I8E+vsNBC/cDeDqOCucteE1hI5TuKIUrKQwqyIbL3pGNoJNV/DlkMR+mHX5I+0YDlczW+1RDJQGVBMd69Nimz8PryuLJPk+pSExHXkniHX9bszSXaZmua/1elkXetC4TeYGbCY61DOMr79HrT6kRdUUp6RVEe+XrOiS5Uzr1Kj62ElGnGs0Oqx/TIag7Kt8U1YmTP65H0eIwcFQ2TfYAnJHFjob8un3LRQ//T0H5k1Fhc0VZ6b3Zbi/Kg9niiqbq3CwHa0MLa/ekMN9g9yRrS0sDp3+xzeVnCXfk2O+Un21uLOUh1FZWcNSUnSE2TNDM1Mei1MZoZhOjHSbq02Oj6pNdJuA60GakYRQVFB3m7F0b1OwhkhCurC0qXMHo3BSdFF+YTpK2O6prEXrJ5Bwt3UcfTGWFrUFqPYiGj6+8AWbPsfPEMVuuqaKSo76Ep7mphJuj+BHU/0U/TY+zsD4mIuy2XIggFMoYY9ky56jcrDZEdOvtEhXERF5MTUvaMRmE3nBVkCsAf3bAJafYzSWryNUtK9fFNTf33yExtZsSkmrqYtfVtT3U1eB8trFHvkdZXVl0fnRpHSfnZ8UCRWgsMvG4dNTDSVnwj7TGTQ2JUmJtNr4w0svFzc1AuzWDDGw5twzVVaQFrmzdlFAXulBqXxUanlQc7HJd2Vz+SM55sltDeGLcnQj3sivaUoo3VaWEfYsRU+AYgzVGvlw4JCIZAlW3iv3HZfK5aZJ1eKIlqTFbV3Uhmt0VIOEN3+L/Li7Q/3vLDFgKZD3/ZbKqXrtLTIeTHQXHsuzKfcg4Nx1j4WuXf9rhT8fDflGp2TPxKHt/AtDVOJT1DRUV9w3UqpfTBkXuD96pwjra+hoaWBOdtB1sfQ30bDwRW9CoA9fzkTYBPQMM9pyefkRPx3AfCypSsfa4Z2ThYUdL+V0PH3mtrAHpQMpduVw8gQE+4MdiK/LEduM6ltJT0MGxqJ2veogwaMQe/PDUEpiqqumoaAeGqmqrsmUtz9KMuu5lpfTrapti9GyL0slv7/e7GOyV7vJidvitmrSyf4k0hE9GzuGLXeoZxUQnr9p07GoFdZm7r8fwGvia3wjZl/3c5MJS+A5nv3IJHIwconv7miBBAyyFeo/3UHp5XnBYeV4CgBLVZHpym9Y50l4ecXtCWVjduo9slKBZPtHWrdd5yeJiESvpkqi7j5W+iJrNvSzjJD2z5ElDa2c305d8oL3GiU3okDNat0qr62vOL91oWV41cvcMdXFN8dTrIZA/dvb5teoL6stqtxi7zr6DLb/nuNaWB7k5wRr7NxJKg2/45KmWqh3a2/RHUjwNtFwtRdEifjmNbMnHTsfFZ4Gw8qEfdIVWZf5/npFJCa+igldJ2d7vJ6Ojq4N9rw2lpr7IVrXvj4k17xYQL9sXvZt8L0rVARfLfJgpWdUys/JBXWrtcFREwXovKMyavu19ayMRHKUWYhqqHlz9mdAa+qUO/bOWTPayuqCaHe70ZKhQrizs72pihosRr1pOuMPEk5xesSFbL+OuVdXkuhdOnd3GXgatLgoptS+poEBcV88/XQVVzCd2SDxII5okDXwyQLeNk1j1NzeFBRpFm5PZ/uZVhTdw3PzZ8EuuNAizrCJ33NeJOd2DxaNlcBOZlJgb2gZb/orgvy8T05Me+ks7yDkNE32mtv7u+E/iGqpHSPeC3NUiEmO/JjzxlnWQsR/zIS3RXfvXi+8pf5aSVL442V3xPDmhckFhetEht+pQEsuxiMRcEHDcZyjMbchpKGT6yuoDvAFRJmH+FpahAc2hIb2hIepG1xQUBQUU5e0VlASF5JVB+M2SR2i85YUOW5nmExfKBMNw7sEpVmf8bCR4Tl8SV7wCbG85XFUsI1FZib3+t2zHgT6Hy0XFMhpFzuiJAQfbMUg95qJqHonKDKQ6Otk/gtTLLirmiagCKrXGw3526UbT40ircbedBnw1xsTL29LC18OKz8TT09rKy8sUTvIhqWn8sRz8cWnA4td1Y28WT0fSkHSo8nT+p4vi/AoWJZyMQg91zNzxd+LhKA86GfzjxFksY3t4e1J7RDs99sSpz26kUxyVHrxeNZQJbN/tiKikKJB5w5OSJJKSmGR+1IecTk73OWr+ZTz7ocXDHL0YkG1PUcxXhIkE885adk0+uu/TKH2qOFzQN8jFzd16mbzcpDa4iwtjHcI4NB/OuiedIbXLWyMQmvt72pwuSgP2OTVB3UuGXoVY4ephvUJeeckZymjKokp2raG/k3HqXg3yJH2pz1Nnj+/wlNyHj5IvrqvxW5DUo2rzcjPKk5HIx4TsSxK3RWwspczlrlpoPjKfaJxQ78D0IlwsO+6XpliePlg6P58uUarKb0lLKW6C8vTqopaUtPwmpKQEN5Acj+7oGEqJQ3cCfiLufw/pXHSPcW8obQjCOgVjK8O2VnkYwTtGMHMlzupQg9wJ9aj0xJDw8gxSSG0E1rGY3j5aXkVdSVZLU12tEXhjT8WyMyJcL1U0iYGkjCD/ssK4lNo7+cLTy6+fYCIyhTUvsfIa6hvekNHSDr+pATU0S1qtZdZojDskKwQGiiVLxrqVB7OVB0eQm4Ka7a/AX6BzXkBEJF1P4qiIloTsDXUJEVENicj6dZtycH1T4Oo7n1kevq6iJOcUmJoUGVJVHp1UXIPK/ktSOWxv58XahZZaX7gpbaCtIy2lYaAor6YF499A/sDtfycMPX/pn7+PSuzwY6fiDq19/AdgboQ/APoI8f34OWewOh2HbYQEL//nX1yelOKfxytGQlyR3EA+bolXu6DElekIfMgpedF2NbuOFBYt7dlcTjWnfJNShMCNtRLMxW668zZoPi9XfeYJcGtvOeM8fwiY+UkR8IIRUCpIN1idq2DthERl/SLFFOQ+UDi4fOAuLlEpapvarnaonayL44B9wtz4kOcqJYEk1pQckPqT0z0anWF0SR7SzU8Jk5x0kzw7Z4ak2fjOLsxV8jspQHJASk5Ol9PDzQi7kqwUdckBRJPTQ66HW/hIIWvZbynsJNdP4qpw43qWnG5nZIZ3S9pGPh2XkBJYUy4lsTw5INGS0430cPNFysizxJRyNt0CyDxIO8IxetIPLntk7I9xURvLFE2yrxilCtnshqrGR4GqJg2bHBNi53cPl6UjZW6P0pn/wQiY7tKc56/JA2EMKX0rE7tJA9NsSjVg1k0Gct8GUmR7enawAmmGw8ZVM2bcZCZ2zT1VliGtpNlxZqW5bWUxZwQMpxQMQIGrrVhBb/EO0P9U3RA4Kb4uz6rkwmAlGZm13pJfHEvHDRWU4NLFCLRz20JX8DS8L//71qc6p2za8MoUvY+eKJcqmPuOg3TlyqQDuCC+zqQZYrk4faXQzWkpba+LAt7CIqgDjOOmdpMMcQc6QXk6VsuZydW3C18+nZlR3U6ANrMv9tTEu23vN7x9MgUNlPC8jWgAde2+AlTS/V8D6Vh3FwrIm0GPLayNheLOfbr8LdOG0PEKjN2Hnk4cms72xf2VuhWm8RNb5H5jBfXeoniegLPdA1it7crR/IosWA6U/narNivB5/pgPXU9MQbSPu0/fATyMtD/v4gFce/lr9lGpILyYdtlgRMwIj2AVqm+bVSifpbqgw2Ta6DxR3HAdk3nyuNvfEol5DMwF61cSeX5T0CeY9zbivsFNqzSv+OPDgHAYz/7VQBeX/q//Tr+d2GowBA/YCgUQAL9AwdMAEPXy2j/1Km5c7Wev0oqR4X078sLmkdDRSZLrHuCaiSvtsS1/uSUnDjne+LzQ/yF6ERNop2ynMyi+PJxGUUT4anAD2iEFawhiiLEQQs+T7Rj+oCU2lyo7FSro4J6FamM0+hf49bEnai/NTRRQe2GhpoqgYc71E9o67yCfEVPdSPaMKGi3bf3R4Ot5SiBjan2xHrWPfW1n24dI9gEpLbDTvSPkmkYkKiTWOsE43xaVlF1Xp4Y+mJKrpTA5BAS1ZxnjZBaBVjWWDZVhlUeJx3ckG11kZo+Sktb0T8sWPSjkj4aUqrbUxMyWCjHqWxyl4L7jpair64SyxqeHhoule8ulEe4JDBNxnLps1bEHM1XrHNFKdWWa61l0TrxwIWxph3Z9T3zYsqpp8aiZMsug25VL7d76uENNUrPf8XUm+zyAQW6Y7I5RlhNVFS2KGYu2ek3f0ShpRoPZsCttsSoJ0q3J8G7PKLUD41Po8SMxBew0tTWISm9QdqVIrJmUqmJLGqJ3PRLcb+SS1+JXRnRkFuElDFhlROk66CAK2yrqurdkJEK2coNCaR8Z/M8l/yKdB50rqhdcjOXk2/xwMM1K9Wk8gGxGsmmIeBcs9RXL6drCune/NMygCFLsXQ0CAV0IQsxWMAYktCB2r7SlSCmE3OnNyt0jKt7QQx02OdnBJlYg4aix1Z6gXk1YRwBqcQ6YlbdjJhGLOuU9U2/GtPk6U2l+xhWE8ZxlUjsIqDZSrOYRmBeCPAXbzgXQ9hHyiiQoeaEgwBD3IKGVHoAO4NyJIKJ9UgUFm6N6NZGDIzE4hc8EueEsgfKwhCNIm8+QhC5cubCHzchAgQvJjcV3pZyD05rVePFwdVA3odHWl9V+DUFTiZ2QhTYI0dX/cibPcGfZCqdBfBgl4OxSeTHVXgZxtW5wq6TsmOv11H27sqBTFf68yHp2oUFBVfjwIcqHbhwcrUExI5rkSuHDi+y9Kav0aRGkTJtBpRdsaJNILE4vXDjqAIA)\n      format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,\n    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,\n    U+FEFF, U+FFFD;\n}\n";
    exports.roboto400 = A;
  }, {}],
  "fdMH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getFontCss = e;

    var o = require("../fonts/roboto-100.css.js"),
        t = require("../fonts/roboto-400.css.js"),
        s = {
      "roboto-100": {
        base64: o.roboto100,
        import: "https://fonts.googleapis.com/css?family=Roboto:100"
      },
      "roboto-400": {
        base64: t.roboto400,
        import: "https://fonts.googleapis.com/css?family=Roboto:400"
      }
    },
        r = !!window.FontFace;

    function e(o) {
      return o.map(function (o) {
        var t = s[o];
        if (!t) throw new Error('getFontCss(names): Unknown font "'.concat(o, '"'));
        return r ? t.base64 : "@import url(".concat(t.import, ");");
      }).join("\n");
    }
  }, {
    "../fonts/roboto-100.css.js": "Z1JN",
    "../fonts/roboto-400.css.js": "pTFy"
  }],
  "0Zyt": [function (require, module, exports) {
    "use strict";

    function r(r) {
      return n(r) || t(r) || e();
    }

    function e() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function t(r) {
      if (Symbol.iterator in Object(r) || "[object Arguments]" === Object.prototype.toString.call(r)) return Array.from(r);
    }

    function n(r) {
      if (Array.isArray(r)) {
        for (var e = 0, t = new Array(r.length); e < r.length; e++) {
          t[e] = r[e];
        }

        return t;
      }
    }

    function o(e) {
      "string" == typeof e && (e = document.querySelector(e)), e.innerHTML = "", r(document.querySelectorAll(".sh-chart-tip-outer")).forEach(function (r) {
        r.parentNode.removeChild(r);
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.clearChart = o;
  }, {}],
  "aSqH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.barHorizontal = i;

    var t = require("d3-selection");

    require("d3-transition");

    var n = require("./helpers/getColor.js"),
        r = require("./helpers/numberFormat.js"),
        a = require("./helpers/getFontCss.js"),
        e = require("./helpers/clearChart.js"),
        o = "\n".concat((0, a.getFontCss)(["roboto-400"]), "\n.chart-label {\n  font-family: Roboto, sans-serif;\n  font-size: 13px;\n  fill: #555;\n}\n.chart-value {\n  font-family: Roboto, sans-serif;\n  font-size: 13px;\n}\n.links {\n  display: none;\n  color: #999;\n}\n.group:hover .links {\n  display: block;\n}\n");

    function i(a) {
      var i = a.width,
          s = a.data,
          c = a.links,
          u = a.onClick,
          p = a.withinElement,
          f = a.linkColor,
          h = void 0 === f ? "#EE5834" : f,
          d = a.minSpacing,
          v = void 0 === d ? 45 : d,
          y = a.maxSpacing,
          g = void 0 === y ? 55 : y,
          x = a.maxHeight,
          m = void 0 === x ? 550 : x,
          b = a.animationDuration,
          k = void 0 === b ? 500 : b,
          C = a.animationOffset,
          q = void 0 === C ? 40 : C,
          j = l(v, g)(m / s.length),
          w = s.length * j,
          E = s[0].value,
          F = 13 * ((0, r.numberFormat)(E).length + 2) * .5,
          z = (i - F) / E;
      s.forEach(function (t, r) {
        t.color = (0, n.getColor)(r, s.length);
      }), (0, e.clearChart)(p);

      var M = function (t) {
        return t.selectAll("g").data(s).enter().append("g").attr("class", "group").attr("transform", function (t, n) {
          return "translate(0, ".concat(n * j, ")");
        });
      }(function (n) {
        var r = (0, t.select)(n).append("svg").attr("class", "sh-chart-bar-horizontal").attr("width", i).attr("height", w);
        return r.append("style").text(o), r;
      }(p));

      !function (t) {
        var n = t.append("rect");
        n.attr("class", "hover-area").attr("x", 0).attr("y", 0).attr("width", "100%").attr("height", j - 8).attr("fill", "transparent"), u && (n.style("cursor", "pointer"), n.on("click", u));
      }(M), function (t) {
        var n = t.append("text").attr("class", "chart-label").attr("x", 0).attr("y", 16);
        n.append("tspan").text(function (t) {
          return t.label;
        }), c.length && function (t) {
          var n = t.append("tspan").attr("class", "links").attr("dx", "12");
          c.forEach(function (t, r) {
            n.append("tspan").text(t.text).attr("fill", h).style("cursor", "pointer").on("click", t.onClick), r < c.length - 1 && n.append("tspan").text(" | ");
          });
        }(n);
      }(M), function (t) {
        t.append("rect").attr("class", "chart-bar").attr("x", 0).attr("y", 24).attr("width", function (t) {
          return t.value * z;
        }).attr("height", 6).attr("fill", function (t) {
          return t.color;
        }).style("opacity", 0).style("transform", "scaleX(0.25)").transition().duration(k).delay(function (t, n) {
          return q * n;
        }).style("opacity", 1).style("transform", "scaleX(1)");
      }(M), function (t) {
        t.append("text").attr("class", "chart-value").attr("x", function (t) {
          return t.value * z + 6;
        }).attr("y", 32).text(function (t) {
          return (0, r.numberFormat)(t.value);
        }).attr("fill", function (t, r) {
          return (0, n.getColor)(r, s.length);
        }).style("opacity", 0).transition().duration(k).delay(function (t, n) {
          return q * n;
        }).style("opacity", 1);
      }(M);
    }

    function l(t, n) {
      return function (r) {
        return Math.round(Math.max(t, Math.min(n, r)));
      };
    }
  }, {
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "./helpers/getColor.js": "xsMK",
    "./helpers/numberFormat.js": "xUTH",
    "./helpers/getFontCss.js": "fdMH",
    "./helpers/clearChart.js": "0Zyt"
  }],
  "5A6F": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "raOJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = n(require("./ascending.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e) {
      return 1 === e.length && (e = r(e)), {
        left: function left(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) < 0 ? r = l + 1 : u = l;
          }

          return r;
        },
        right: function right(n, t, r, u) {
          for (null == r && (r = 0), null == u && (u = n.length); r < u;) {
            var l = r + u >>> 1;
            e(n[l], t) > 0 ? u = l : r = l + 1;
          }

          return r;
        }
      };
    }

    function r(n) {
      return function (t, r) {
        return (0, e.default)(n(t), r);
      };
    }
  }, {
    "./ascending.js": "5A6F"
  }],
  "VX/h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.bisectLeft = exports.bisectRight = void 0;
    var e = r(require("./ascending.js")),
        t = r(require("./bisector.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = (0, t.default)(e.default),
        i = s.right;
    exports.bisectRight = i;
    var o = s.left;
    exports.bisectLeft = o;
    var u = i;
    exports.default = u;
  }, {
    "./ascending.js": "5A6F",
    "./bisector.js": "raOJ"
  }],
  "1nH3": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var l = 0;

      if (void 0 === t) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var o = _step.value;
            null != o && (o = +o) >= o && ++l;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      } else {
        var _o = -1;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = e[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var r = _step2.value;
            null != (r = t(r, ++_o, e)) && (r = +r) >= r && ++l;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      return l;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "9JGh": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return 0 | t.length;
    }

    function e(t) {
      return !(t > 0);
    }

    function n(t) {
      return "object" != _typeof(t) || "length" in t ? t : Array.from(t);
    }

    function r(t) {
      return function (e) {
        return t.apply(void 0, _toConsumableArray(e));
      };
    }

    function o() {
      for (var _len = arguments.length, o = new Array(_len), _key = 0; _key < _len; _key++) {
        o[_key] = arguments[_key];
      }

      var u = "function" == typeof o[o.length - 1] && r(o.pop()),
          f = (o = o.map(n)).map(t),
          i = o.length - 1,
          p = new Array(i + 1).fill(0),
          c = [];
      if (i < 0 || f.some(e)) return c;

      for (;;) {
        c.push(p.map(function (t, e) {
          return o[e][t];
        }));
        var _t = i;

        for (; ++p[_t] === f[_t];) {
          if (0 === _t) return u ? c.map(u) : c;
          p[_t--] = 0;
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
  }, {}],
  "wjXp": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "IBjk": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var l,
          o = 0,
          f = 0,
          r = 0;

      if (void 0 === t) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = e[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var u = _step3.value;
            null != u && (u = +u) >= u && (r += (l = u - f) * (u - (f += l / ++o)));
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      } else {
        var _u = -1;

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = e[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var i = _step4.value;
            null != (i = t(i, ++_u, e)) && (i = +i) >= i && (r += (l = i - f) * (i - (f += l / ++o)));
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      }

      if (o > 1) return r / (o - 1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "JPBu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./variance.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r) {
      var u = (0, e.default)(t, r);
      return u ? Math.sqrt(u) : u;
    }
  }, {
    "./variance.js": "IBjk"
  }],
  "tlMU": [function (require, module, exports) {
    "use strict";

    function e(e, o) {
      var t, l;

      if (void 0 === o) {
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
          for (var _iterator5 = e[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var r = _step5.value;
            null != r && (void 0 === t ? r >= r && (t = l = r) : (t > r && (t = r), l < r && (l = r)));
          }
        } catch (err) {
          _didIteratorError5 = true;
          _iteratorError5 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
              _iterator5.return();
            }
          } finally {
            if (_didIteratorError5) {
              throw _iteratorError5;
            }
          }
        }
      } else {
        var _r = -1;

        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = e[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var f = _step6.value;
            null != (f = o(f, ++_r, e)) && (void 0 === t ? f >= f && (t = l = f) : (t > f && (t = f), l < f && (l = f)));
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }
      }

      return [t, l];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "nPOL": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "5Q7X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r, exports.groups = n, exports.rollup = u, exports.rollups = o;
    var t = e(require("./identity.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function r(e) {
      for (var _len2 = arguments.length, r = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        r[_key2 - 1] = arguments[_key2];
      }

      return f(e, t.default, t.default, r);
    }

    function n(e) {
      for (var _len3 = arguments.length, r = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        r[_key3 - 1] = arguments[_key3];
      }

      return f(e, Array.from, t.default, r);
    }

    function u(e, r) {
      for (var _len4 = arguments.length, n = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        n[_key4 - 2] = arguments[_key4];
      }

      return f(e, t.default, r, n);
    }

    function o(t, e) {
      for (var _len5 = arguments.length, r = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
        r[_key5 - 2] = arguments[_key5];
      }

      return f(t, Array.from, e, r);
    }

    function f(t, e, r, n) {
      return function t(u, o) {
        if (o >= n.length) return r(u);
        var f = new Map(),
            s = n[o++];
        var l = -1;
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = u[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var _e = _step7.value;

            var _t2 = s(_e, ++l, u),
                _r2 = f.get(_t2);

            _r2 ? _r2.push(_e) : f.set(_t2, [_e]);
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }

        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = f[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var _step8$value = _slicedToArray(_step8.value, 2),
                _e2 = _step8$value[0],
                _r3 = _step8$value[1];

            f.set(_e2, t(_r3, o));
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return e(f);
      }(t, 0);
    }
  }, {
    "./identity.js": "nPOL"
  }],
  "+OA0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.map = exports.slice = void 0;
    var e = Array.prototype,
        r = e.slice;
    exports.slice = r;
    var p = e.map;
    exports.map = p;
  }, {}],
  "M4+6": [function (require, module, exports) {
    "use strict";

    function e(e, t, r) {
      e = +e, t = +t, r = (n = arguments.length) < 2 ? (t = e, e = 0, 1) : n < 3 ? 1 : +r;

      for (var a = -1, n = 0 | Math.max(0, Math.ceil((t - e) / r)), o = new Array(n); ++a < n;) {
        o[a] = e + a * r;
      }

      return o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "nJNY": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.tickIncrement = o, exports.tickStep = M;
    var t = Math.sqrt(50),
        r = Math.sqrt(10),
        a = Math.sqrt(2);

    function e(t, r, a) {
      var e,
          M,
          h,
          i,
          n = -1;
      if (a = +a, (t = +t) === (r = +r) && a > 0) return [t];
      if ((e = r < t) && (M = t, t = r, r = M), 0 === (i = o(t, r, a)) || !isFinite(i)) return [];
      if (i > 0) for (t = Math.ceil(t / i), r = Math.floor(r / i), h = new Array(M = Math.ceil(r - t + 1)); ++n < M;) {
        h[n] = (t + n) * i;
      } else for (t = Math.floor(t * i), r = Math.ceil(r * i), h = new Array(M = Math.ceil(t - r + 1)); ++n < M;) {
        h[n] = (t - n) / i;
      }
      return e && h.reverse(), h;
    }

    function o(e, o, M) {
      var h = (o - e) / Math.max(0, M),
          i = Math.floor(Math.log(h) / Math.LN10),
          n = h / Math.pow(10, i);
      return i >= 0 ? (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (n >= t ? 10 : n >= r ? 5 : n >= a ? 2 : 1);
    }

    function M(e, o, M) {
      var h = Math.abs(o - e) / Math.max(0, M),
          i = Math.pow(10, Math.floor(Math.log(h) / Math.LN10)),
          n = h / i;
      return n >= t ? i *= 10 : n >= r ? i *= 5 : n >= a && (i *= 2), o < e ? -i : i;
    }
  }, {}],
  "Pg/U": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return Math.ceil(Math.log(e.length) / Math.LN2) + 1;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "oE+j": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var r = require("./array.js"),
        e = o(require("./bisect.js")),
        t = o(require("./constant.js")),
        u = o(require("./extent.js")),
        n = o(require("./identity.js")),
        a = o(require("./range.js")),
        f = require("./ticks.js"),
        i = o(require("./threshold/sturges.js"));

    function o(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function s() {
      var o = n.default,
          s = u.default,
          l = i.default;

      function c(r) {
        Array.isArray(r) || (r = Array.from(r));
        var t,
            u,
            n = r.length,
            i = new Array(n);

        for (t = 0; t < n; ++t) {
          i[t] = o(r[t], t, r);
        }

        var c = s(i),
            d = c[0],
            y = c[1],
            h = l(i, d, y);
        Array.isArray(h) || (h = (0, f.tickStep)(d, y, h), h = (0, a.default)(Math.ceil(d / h) * h, y, h));

        for (var p = h.length; h[0] <= d;) {
          h.shift(), --p;
        }

        for (; h[p - 1] > y;) {
          h.pop(), --p;
        }

        var j,
            A = new Array(p + 1);

        for (t = 0; t <= p; ++t) {
          (j = A[t] = []).x0 = t > 0 ? h[t - 1] : d, j.x1 = t < p ? h[t] : y;
        }

        for (t = 0; t < n; ++t) {
          d <= (u = i[t]) && u <= y && A[(0, e.default)(h, u, 0, p)].push(r[t]);
        }

        return A;
      }

      return c.value = function (r) {
        return arguments.length ? (o = "function" == typeof r ? r : (0, t.default)(r), c) : o;
      }, c.domain = function (r) {
        return arguments.length ? (s = "function" == typeof r ? r : (0, t.default)([r[0], r[1]]), c) : s;
      }, c.thresholds = function (e) {
        return arguments.length ? (l = "function" == typeof e ? e : Array.isArray(e) ? (0, t.default)(r.slice.call(e)) : (0, t.default)(e), c) : l;
      }, c;
    }
  }, {
    "./array.js": "+OA0",
    "./bisect.js": "VX/h",
    "./constant.js": "H3qE",
    "./extent.js": "tlMU",
    "./identity.js": "nPOL",
    "./range.js": "M4+6",
    "./ticks.js": "nJNY",
    "./threshold/sturges.js": "Pg/U"
  }],
  "9fz/": [function (require, module, exports) {
    "use strict";

    var _marked =
    /*#__PURE__*/
    regeneratorRuntime.mark(l);

    function e(e) {
      return null === e ? NaN : +e;
    }

    function l(e, l) {
      var _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, t, _t3, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, o;

      return regeneratorRuntime.wrap(function l$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(void 0 === l)) {
                _context.next = 31;
                break;
              }

              _iteratorNormalCompletion9 = true;
              _didIteratorError9 = false;
              _iteratorError9 = undefined;
              _context.prev = 4;
              _iterator9 = e[Symbol.iterator]();

            case 6:
              if (_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done) {
                _context.next = 15;
                break;
              }

              t = _step9.value;
              _context.t0 = null != t && (t = +t) >= t;

              if (!_context.t0) {
                _context.next = 12;
                break;
              }

              _context.next = 12;
              return t;

            case 12:
              _iteratorNormalCompletion9 = true;
              _context.next = 6;
              break;

            case 15:
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t1 = _context["catch"](4);
              _didIteratorError9 = true;
              _iteratorError9 = _context.t1;

            case 21:
              _context.prev = 21;
              _context.prev = 22;

              if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                _iterator9.return();
              }

            case 24:
              _context.prev = 24;

              if (!_didIteratorError9) {
                _context.next = 27;
                break;
              }

              throw _iteratorError9;

            case 27:
              return _context.finish(24);

            case 28:
              return _context.finish(21);

            case 29:
              _context.next = 60;
              break;

            case 31:
              _t3 = -1;
              _iteratorNormalCompletion10 = true;
              _didIteratorError10 = false;
              _iteratorError10 = undefined;
              _context.prev = 35;
              _iterator10 = e[Symbol.iterator]();

            case 37:
              if (_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done) {
                _context.next = 46;
                break;
              }

              o = _step10.value;
              _context.t2 = null != (o = l(o, ++_t3, e)) && (o = +o) >= o;

              if (!_context.t2) {
                _context.next = 43;
                break;
              }

              _context.next = 43;
              return o;

            case 43:
              _iteratorNormalCompletion10 = true;
              _context.next = 37;
              break;

            case 46:
              _context.next = 52;
              break;

            case 48:
              _context.prev = 48;
              _context.t3 = _context["catch"](35);
              _didIteratorError10 = true;
              _iteratorError10 = _context.t3;

            case 52:
              _context.prev = 52;
              _context.prev = 53;

              if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                _iterator10.return();
              }

            case 55:
              _context.prev = 55;

              if (!_didIteratorError10) {
                _context.next = 58;
                break;
              }

              throw _iteratorError10;

            case 58:
              return _context.finish(55);

            case 59:
              return _context.finish(52);

            case 60:
            case "end":
              return _context.stop();
          }
        }
      }, _marked, null, [[4, 17, 21, 29], [22,, 24, 28], [35, 48, 52, 60], [53,, 55, 59]]);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.numbers = l;
  }, {}],
  "9qox": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o, exports.quantileSorted = f;
    var e = u(require("./ascending.js")),
        r = n(require("./number.js"));

    function t() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return t = function t() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      var r = t();
      if (r && r.has(e)) return r.get(e);
      var n = {};

      if (null != e) {
        var u = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var f = u ? Object.getOwnPropertyDescriptor(e, o) : null;
            f && (f.get || f.set) ? Object.defineProperty(n, o, f) : n[o] = e[o];
          }
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(t, n, u) {
      return f(Float64Array.from((0, r.numbers)(t, u)).sort(e.default), n);
    }

    function f(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : r.default;

      if (u = e.length) {
        if ((t = +t) <= 0 || u < 2) return +n(e[0], 0, e);
        if (t >= 1) return +n(e[u - 1], u - 1, e);
        var u,
            o = (u - 1) * t,
            f = Math.floor(o),
            a = +n(e[f], f, e);
        return a + (+n(e[f + 1], f + 1, e) - a) * (o - f);
      }
    }
  }, {
    "./ascending.js": "5A6F",
    "./number.js": "9fz/"
  }],
  "a8Ry": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("../array.js"),
        r = a(require("../ascending.js")),
        t = a(require("../number.js")),
        u = a(require("../quantile.js"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(a, l, n) {
      return a = e.map.call(a, t.default).sort(r.default), Math.ceil((n - l) / (2 * ((0, u.default)(a, .75) - (0, u.default)(a, .25)) * Math.pow(a.length, -1 / 3)));
    }
  }, {
    "../array.js": "+OA0",
    "../ascending.js": "5A6F",
    "../number.js": "9fz/",
    "../quantile.js": "9qox"
  }],
  "VlA4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("../deviation.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r, u) {
      return Math.ceil((u - r) / (3.5 * (0, e.default)(t) * Math.pow(t.length, -1 / 3)));
    }
  }, {
    "../deviation.js": "JPBu"
  }],
  "8Rao": [function (require, module, exports) {
    "use strict";

    function e(e, o) {
      var t;

      if (void 0 === o) {
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = e[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var l = _step11.value;
            null != l && (t < l || void 0 === t && l >= l) && (t = l);
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
              _iterator11.return();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }
      } else {
        var _l = -1;

        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
          for (var _iterator12 = e[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var r = _step12.value;
            null != (r = o(r, ++_l, e)) && (t < r || void 0 === t && r >= r) && (t = r);
          }
        } catch (err) {
          _didIteratorError12 = true;
          _iteratorError12 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
              _iterator12.return();
            }
          } finally {
            if (_didIteratorError12) {
              throw _iteratorError12;
            }
          }
        }
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "o4HH": [function (require, module, exports) {
    "use strict";

    function e(e, o) {
      var t,
          l = -1,
          r = -1;

      if (void 0 === o) {
        var _iteratorNormalCompletion13 = true;
        var _didIteratorError13 = false;
        var _iteratorError13 = undefined;

        try {
          for (var _iterator13 = e[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
            var f = _step13.value;
            ++r, null != f && (t < f || void 0 === t && f >= f) && (t = f, l = r);
          }
        } catch (err) {
          _didIteratorError13 = true;
          _iteratorError13 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
              _iterator13.return();
            }
          } finally {
            if (_didIteratorError13) {
              throw _iteratorError13;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = e[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var _f = _step14.value;
            null != (_f = o(_f, ++r, e)) && (t < _f || void 0 === t && _f >= _f) && (t = _f, l = r);
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
              _iterator14.return();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }
      }

      return l;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "hoEE": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var l = 0,
          o = 0;

      if (void 0 === t) {
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = e[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var f = _step15.value;
            null != f && (f = +f) >= f && (++l, o += f);
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
              _iterator15.return();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }
      } else {
        var _f2 = -1;

        var _iteratorNormalCompletion16 = true;
        var _didIteratorError16 = false;
        var _iteratorError16 = undefined;

        try {
          for (var _iterator16 = e[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
            var r = _step16.value;
            null != (r = t(r, ++_f2, e)) && (r = +r) >= r && (++l, o += r);
          }
        } catch (err) {
          _didIteratorError16 = true;
          _iteratorError16 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
              _iterator16.return();
            }
          } finally {
            if (_didIteratorError16) {
              throw _iteratorError16;
            }
          }
        }
      }

      if (l) return o / l;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "0Dxt": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var t = e(require("./ascending.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function o(e, n) {
      var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var f = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.length - 1;
      var u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : t.default;

      for (; f > a;) {
        if (f - a > 600) {
          var _t5 = f - a + 1,
              _r4 = n - a + 1,
              _s2 = Math.log(_t5),
              _l2 = .5 * Math.exp(2 * _s2 / 3),
              c = .5 * Math.sqrt(_s2 * _l2 * (_t5 - _l2) / _t5) * (_r4 - _t5 / 2 < 0 ? -1 : 1);

          o(e, n, Math.max(a, Math.floor(n - _r4 * _l2 / _t5 + c)), Math.min(f, Math.floor(n + (_t5 - _r4) * _l2 / _t5 + c)), u);
        }

        var _t4 = e[n];
        var s = a,
            l = f;

        for (r(e, a, n), u(e[f], _t4) > 0 && r(e, a, f); s < l;) {
          for (r(e, s, l), ++s, --l; u(e[s], _t4) < 0;) {
            ++s;
          }

          for (; u(e[l], _t4) > 0;) {
            --l;
          }
        }

        0 === u(e[a], _t4) ? r(e, a, l) : r(e, ++l, f), l <= n && (a = l + 1), n <= l && (f = l - 1);
      }

      return e;
    }

    function r(t, e, o) {
      var r = t[e];
      t[e] = t[o], t[o] = r;
    }
  }, {
    "./ascending.js": "5A6F"
  }],
  "FMd1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var e = require("./number.js"),
        r = u(require("./quantile.js")),
        t = u(require("./quickselect.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(u, n) {
      if (!(u = Float64Array.from((0, e.numbers)(u, n))).length) return;
      var l = u.length,
          s = l >> 1;
      return (0, t.default)(u, s - 1, 0), 0 == (1 & l) && (0, t.default)(u, s, s), (0, r.default)(u, .5);
    }
  }, {
    "./number.js": "9fz/",
    "./quantile.js": "9qox",
    "./quickselect.js": "0Dxt"
  }],
  "0SAj": [function (require, module, exports) {
    "use strict";

    var _marked2 =
    /*#__PURE__*/
    regeneratorRuntime.mark(e);

    function e(e) {
      var _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _r5;

      return regeneratorRuntime.wrap(function e$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _iteratorNormalCompletion17 = true;
              _didIteratorError17 = false;
              _iteratorError17 = undefined;
              _context2.prev = 3;
              _iterator17 = e[Symbol.iterator]();

            case 5:
              if (_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done) {
                _context2.next = 11;
                break;
              }

              _r5 = _step17.value;
              return _context2.delegateYield(_r5, "t0", 8);

            case 8:
              _iteratorNormalCompletion17 = true;
              _context2.next = 5;
              break;

            case 11:
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t1 = _context2["catch"](3);
              _didIteratorError17 = true;
              _iteratorError17 = _context2.t1;

            case 17:
              _context2.prev = 17;
              _context2.prev = 18;

              if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                _iterator17.return();
              }

            case 20:
              _context2.prev = 20;

              if (!_didIteratorError17) {
                _context2.next = 23;
                break;
              }

              throw _iteratorError17;

            case 23:
              return _context2.finish(20);

            case 24:
              return _context2.finish(17);

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _marked2, null, [[3, 13, 17, 25], [18,, 20, 24]]);
    }

    function r(r) {
      return Array.from(e(r));
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
  }, {}],
  "WLfU": [function (require, module, exports) {
    "use strict";

    function e(e, o) {
      var t;

      if (void 0 === o) {
        var _iteratorNormalCompletion18 = true;
        var _didIteratorError18 = false;
        var _iteratorError18 = undefined;

        try {
          for (var _iterator18 = e[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
            var l = _step18.value;
            null != l && (t > l || void 0 === t && l >= l) && (t = l);
          }
        } catch (err) {
          _didIteratorError18 = true;
          _iteratorError18 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
              _iterator18.return();
            }
          } finally {
            if (_didIteratorError18) {
              throw _iteratorError18;
            }
          }
        }
      } else {
        var _l3 = -1;

        var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = e[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var r = _step19.value;
            null != (r = o(r, ++_l3, e)) && (t > r || void 0 === t && r >= r) && (t = r);
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
              _iterator19.return();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "qBXv": [function (require, module, exports) {
    "use strict";

    function e(e, o) {
      var t,
          l = -1,
          r = -1;

      if (void 0 === o) {
        var _iteratorNormalCompletion20 = true;
        var _didIteratorError20 = false;
        var _iteratorError20 = undefined;

        try {
          for (var _iterator20 = e[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var f = _step20.value;
            ++r, null != f && (t > f || void 0 === t && f >= f) && (t = f, l = r);
          }
        } catch (err) {
          _didIteratorError20 = true;
          _iteratorError20 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
              _iterator20.return();
            }
          } finally {
            if (_didIteratorError20) {
              throw _iteratorError20;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion21 = true;
        var _didIteratorError21 = false;
        var _iteratorError21 = undefined;

        try {
          for (var _iterator21 = e[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
            var _f3 = _step21.value;
            null != (_f3 = o(_f3, ++r, e)) && (t > _f3 || void 0 === t && _f3 >= _f3) && (t = _f3, l = r);
          }
        } catch (err) {
          _didIteratorError21 = true;
          _iteratorError21 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
              _iterator21.return();
            }
          } finally {
            if (_didIteratorError21) {
              throw _iteratorError21;
            }
          }
        }
      }

      return l;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "0aKl": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : t;
      var o = [];
      var n,
          s = !1;
      var _iteratorNormalCompletion22 = true;
      var _didIteratorError22 = false;
      var _iteratorError22 = undefined;

      try {
        for (var _iterator22 = e[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
          var _t6 = _step22.value;
          s && o.push(r(n, _t6)), n = _t6, s = !0;
        }
      } catch (err) {
        _didIteratorError22 = true;
        _iteratorError22 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
            _iterator22.return();
          }
        } finally {
          if (_didIteratorError22) {
            throw _iteratorError22;
          }
        }
      }

      return o;
    }

    function t(e, t) {
      return [e, t];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.pair = t;
  }, {}],
  "4V5Z": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      return Array.from(r, function (r) {
        return e[r];
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "FcEW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var e = t(require("./ascending.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(t) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.default;
      var r,
          u = !1;

      if (1 === o.length) {
        var f;
        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = t[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var n = _step23.value;

            var _t7 = o(n);

            (u ? (0, e.default)(_t7, f) < 0 : 0 === (0, e.default)(_t7, _t7)) && (r = n, f = _t7, u = !0);
          }
        } catch (err) {
          _didIteratorError23 = true;
          _iteratorError23 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
              _iterator23.return();
            }
          } finally {
            if (_didIteratorError23) {
              throw _iteratorError23;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion24 = true;
        var _didIteratorError24 = false;
        var _iteratorError24 = undefined;

        try {
          for (var _iterator24 = t[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
            var _e3 = _step24.value;
            (u ? o(_e3, r) < 0 : 0 === o(_e3, _e3)) && (r = _e3, u = !0);
          }
        } catch (err) {
          _didIteratorError24 = true;
          _iteratorError24 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
              _iterator24.return();
            }
          } finally {
            if (_didIteratorError24) {
              throw _iteratorError24;
            }
          }
        }
      }

      return r;
    }
  }, {
    "./ascending.js": "5A6F"
  }],
  "WaFY": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = r(require("./ascending.js")),
        t = r(require("./minIndex.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.default;
      if (1 === u.length) return (0, t.default)(r, u);
      var n,
          f = -1,
          o = -1;
      var _iteratorNormalCompletion25 = true;
      var _didIteratorError25 = false;
      var _iteratorError25 = undefined;

      try {
        for (var _iterator25 = r[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
          var _e4 = _step25.value;
          ++o, (f < 0 ? 0 === u(_e4, _e4) : u(_e4, n) < 0) && (n = _e4, f = o);
        }
      } catch (err) {
        _didIteratorError25 = true;
        _iteratorError25 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
            _iterator25.return();
          }
        } finally {
          if (_didIteratorError25) {
            throw _iteratorError25;
          }
        }
      }

      return f;
    }
  }, {
    "./ascending.js": "5A6F",
    "./minIndex.js": "qBXv"
  }],
  "ieMY": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var e = t(require("./ascending.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(t) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.default;
      var r,
          u = !1;

      if (1 === o.length) {
        var f;
        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = t[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var n = _step26.value;

            var _t8 = o(n);

            (u ? (0, e.default)(_t8, f) > 0 : 0 === (0, e.default)(_t8, _t8)) && (r = n, f = _t8, u = !0);
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26.return != null) {
              _iterator26.return();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }
      } else {
        var _iteratorNormalCompletion27 = true;
        var _didIteratorError27 = false;
        var _iteratorError27 = undefined;

        try {
          for (var _iterator27 = t[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
            var _e5 = _step27.value;
            (u ? o(_e5, r) > 0 : 0 === o(_e5, _e5)) && (r = _e5, u = !0);
          }
        } catch (err) {
          _didIteratorError27 = true;
          _iteratorError27 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion27 && _iterator27.return != null) {
              _iterator27.return();
            }
          } finally {
            if (_didIteratorError27) {
              throw _iteratorError27;
            }
          }
        }
      }

      return r;
    }
  }, {
    "./ascending.js": "5A6F"
  }],
  "fBcN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = r(require("./ascending.js")),
        t = r(require("./maxIndex.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(r) {
      var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e.default;
      if (1 === u.length) return (0, t.default)(r, u);
      var n,
          f = -1,
          o = -1;
      var _iteratorNormalCompletion28 = true;
      var _didIteratorError28 = false;
      var _iteratorError28 = undefined;

      try {
        for (var _iterator28 = r[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
          var _e6 = _step28.value;
          ++o, (f < 0 ? 0 === u(_e6, _e6) : u(_e6, n) > 0) && (n = _e6, f = o);
        }
      } catch (err) {
        _didIteratorError28 = true;
        _iteratorError28 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion28 && _iterator28.return != null) {
            _iterator28.return();
          }
        } finally {
          if (_didIteratorError28) {
            throw _iteratorError28;
          }
        }
      }

      return f;
    }
  }, {
    "./ascending.js": "5A6F",
    "./maxIndex.js": "o4HH"
  }],
  "/c8h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./leastIndex.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r) {
      var u = (0, e.default)(t, r);
      return u < 0 ? void 0 : u;
    }
  }, {
    "./leastIndex.js": "WaFY"
  }],
  "Z0Nc": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e.length;

      for (var o, n, u = r - (t = +t); u;) {
        n = Math.random() * u-- | 0, o = e[u + t], e[u + t] = e[n + t], e[n + t] = o;
      }

      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "O7Vy": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var o = 0;

      if (void 0 === t) {
        var _iteratorNormalCompletion29 = true;
        var _didIteratorError29 = false;
        var _iteratorError29 = undefined;

        try {
          for (var _iterator29 = e[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
            var r = _step29.value;
            (r = +r) && (o += r);
          }
        } catch (err) {
          _didIteratorError29 = true;
          _iteratorError29 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion29 && _iterator29.return != null) {
              _iterator29.return();
            }
          } finally {
            if (_didIteratorError29) {
              throw _iteratorError29;
            }
          }
        }
      } else {
        var _r6 = -1;

        var _iteratorNormalCompletion30 = true;
        var _didIteratorError30 = false;
        var _iteratorError30 = undefined;

        try {
          for (var _iterator30 = e[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
            var f = _step30.value;
            (f = +t(f, ++_r6, e)) && (o += f);
          }
        } catch (err) {
          _didIteratorError30 = true;
          _iteratorError30 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion30 && _iterator30.return != null) {
              _iterator30.return();
            }
          } finally {
            if (_didIteratorError30) {
              throw _iteratorError30;
            }
          }
        }
      }

      return o;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "pk0a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./min.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      if (!(o = r.length)) return [];

      for (var t = -1, u = (0, e.default)(r, n), f = new Array(u); ++t < u;) {
        for (var o, a = -1, i = f[t] = new Array(o); ++a < o;) {
          i[a] = r[a][t];
        }
      }

      return f;
    }

    function n(e) {
      return e.length;
    }
  }, {
    "./min.js": "WLfU"
  }],
  "oAxq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./transpose.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      return (0, e.default)(arguments);
    }
  }, {
    "./transpose.js": "pk0a"
  }],
  "cBuZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "bisect", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "bisectRight", {
      enumerable: !0,
      get: function get() {
        return e.bisectRight;
      }
    }), Object.defineProperty(exports, "bisectLeft", {
      enumerable: !0,
      get: function get() {
        return e.bisectLeft;
      }
    }), Object.defineProperty(exports, "ascending", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "bisector", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "count", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "cross", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "descending", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "deviation", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "extent", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "group", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "groups", {
      enumerable: !0,
      get: function get() {
        return s.groups;
      }
    }), Object.defineProperty(exports, "rollup", {
      enumerable: !0,
      get: function get() {
        return s.rollup;
      }
    }), Object.defineProperty(exports, "rollups", {
      enumerable: !0,
      get: function get() {
        return s.rollups;
      }
    }), Object.defineProperty(exports, "bin", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "histogram", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "thresholdFreedmanDiaconis", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "thresholdScott", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "thresholdSturges", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "max", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "maxIndex", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "mean", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "median", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "merge", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "min", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "minIndex", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "pairs", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "permute", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "quantile", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "quantileSorted", {
      enumerable: !0,
      get: function get() {
        return q.quantileSorted;
      }
    }), Object.defineProperty(exports, "quickselect", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "range", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "least", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "leastIndex", {
      enumerable: !0,
      get: function get() {
        return I.default;
      }
    }), Object.defineProperty(exports, "greatest", {
      enumerable: !0,
      get: function get() {
        return S.default;
      }
    }), Object.defineProperty(exports, "greatestIndex", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "scan", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "shuffle", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    }), Object.defineProperty(exports, "sum", {
      enumerable: !0,
      get: function get() {
        return D.default;
      }
    }), Object.defineProperty(exports, "ticks", {
      enumerable: !0,
      get: function get() {
        return z.default;
      }
    }), Object.defineProperty(exports, "tickIncrement", {
      enumerable: !0,
      get: function get() {
        return z.tickIncrement;
      }
    }), Object.defineProperty(exports, "tickStep", {
      enumerable: !0,
      get: function get() {
        return z.tickStep;
      }
    }), Object.defineProperty(exports, "transpose", {
      enumerable: !0,
      get: function get() {
        return L.default;
      }
    }), Object.defineProperty(exports, "variance", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "zip", {
      enumerable: !0,
      get: function get() {
        return W.default;
      }
    });

    var e = B(require("./bisect.js")),
        r = F(require("./ascending.js")),
        t = F(require("./bisector.js")),
        n = F(require("./count.js")),
        u = F(require("./cross.js")),
        i = F(require("./descending.js")),
        o = F(require("./deviation.js")),
        f = F(require("./extent.js")),
        s = B(require("./group.js")),
        c = F(require("./bin.js")),
        a = F(require("./threshold/freedmanDiaconis.js")),
        l = F(require("./threshold/scott.js")),
        p = F(require("./threshold/sturges.js")),
        d = F(require("./max.js")),
        b = F(require("./maxIndex.js")),
        j = F(require("./mean.js")),
        g = F(require("./median.js")),
        m = F(require("./merge.js")),
        x = F(require("./min.js")),
        O = F(require("./minIndex.js")),
        y = F(require("./pairs.js")),
        P = F(require("./permute.js")),
        q = B(require("./quantile.js")),
        h = F(require("./quickselect.js")),
        v = F(require("./range.js")),
        k = F(require("./least.js")),
        I = F(require("./leastIndex.js")),
        S = F(require("./greatest.js")),
        _ = F(require("./greatestIndex.js")),
        M = F(require("./scan.js")),
        w = F(require("./shuffle.js")),
        D = F(require("./sum.js")),
        z = B(require("./ticks.js")),
        L = F(require("./transpose.js")),
        R = F(require("./variance.js")),
        W = F(require("./zip.js"));

    function F(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function A() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return A = function A() {
        return e;
      }, e;
    }

    function B(e) {
      if (e && e.__esModule) return e;
      var r = A();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }
  }, {
    "./bisect.js": "VX/h",
    "./ascending.js": "5A6F",
    "./bisector.js": "raOJ",
    "./count.js": "1nH3",
    "./cross.js": "9JGh",
    "./descending.js": "wjXp",
    "./deviation.js": "JPBu",
    "./extent.js": "tlMU",
    "./group.js": "5Q7X",
    "./bin.js": "oE+j",
    "./threshold/freedmanDiaconis.js": "a8Ry",
    "./threshold/scott.js": "VlA4",
    "./threshold/sturges.js": "Pg/U",
    "./max.js": "8Rao",
    "./maxIndex.js": "o4HH",
    "./mean.js": "hoEE",
    "./median.js": "FMd1",
    "./merge.js": "0SAj",
    "./min.js": "WLfU",
    "./minIndex.js": "qBXv",
    "./pairs.js": "0aKl",
    "./permute.js": "4V5Z",
    "./quantile.js": "9qox",
    "./quickselect.js": "0Dxt",
    "./range.js": "M4+6",
    "./least.js": "FcEW",
    "./leastIndex.js": "WaFY",
    "./greatest.js": "ieMY",
    "./greatestIndex.js": "fBcN",
    "./scan.js": "/c8h",
    "./shuffle.js": "Z0Nc",
    "./sum.js": "O7Vy",
    "./ticks.js": "nJNY",
    "./transpose.js": "pk0a",
    "./variance.js": "IBjk",
    "./zip.js": "oAxq"
  }],
  "aZlr": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      switch (arguments.length) {
        case 0:
          break;

        case 1:
          this.range(e);
          break;

        default:
          this.range(t).domain(e);
      }

      return this;
    }

    function t(e, t) {
      switch (arguments.length) {
        case 0:
          break;

        case 1:
          this.interpolator(e);
          break;

        default:
          this.interpolator(t).domain(e);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.initRange = e, exports.initInterpolator = t;
  }, {}],
  "ELIM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e, exports.implicit = void 0;

    var n = require("./init.js");

    var t = Symbol("implicit");

    function e() {
      var r = new Map(),
          i = [],
          o = [],
          u = t;

      function s(n) {
        var e = n + "",
            s = r.get(e);

        if (!s) {
          if (u !== t) return u;
          r.set(e, s = i.push(n));
        }

        return o[(s - 1) % o.length];
      }

      return s.domain = function (n) {
        if (!arguments.length) return i.slice();
        i = [], r = new Map();
        var _iteratorNormalCompletion31 = true;
        var _didIteratorError31 = false;
        var _iteratorError31 = undefined;

        try {
          for (var _iterator31 = n[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
            var _t9 = _step31.value;

            var _n2 = _t9 + "";

            r.has(_n2) || r.set(_n2, i.push(_t9));
          }
        } catch (err) {
          _didIteratorError31 = true;
          _iteratorError31 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion31 && _iterator31.return != null) {
              _iterator31.return();
            }
          } finally {
            if (_didIteratorError31) {
              throw _iteratorError31;
            }
          }
        }

        return s;
      }, s.range = function (n) {
        return arguments.length ? (o = Array.from(n), s) : o.slice();
      }, s.unknown = function (n) {
        return arguments.length ? (u = n, s) : u;
      }, s.copy = function () {
        return e(i, o).unknown(u);
      }, n.initRange.apply(s, arguments), s;
    }

    exports.implicit = t;
  }, {
    "./init.js": "aZlr"
  }],
  "rJZF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u, exports.point = a;

    var n = require("d3-array"),
        r = require("./init.js"),
        e = t(require("./ordinal.js"));

    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function u() {
      var t,
          i,
          a = (0, e.default)().unknown(void 0),
          d = a.domain,
          o = a.range,
          g = 0,
          l = 1,
          p = !1,
          c = 0,
          f = 0,
          h = .5;

      function s() {
        var r = d().length,
            e = l < g,
            u = e ? l : g,
            a = e ? g : l;
        t = (a - u) / Math.max(1, r - c + 2 * f), p && (t = Math.floor(t)), u += (a - u - t * (r - c)) * h, i = t * (1 - c), p && (u = Math.round(u), i = Math.round(i));
        var s = (0, n.range)(r).map(function (n) {
          return u + t * n;
        });
        return o(e ? s.reverse() : s);
      }

      return delete a.unknown, a.domain = function (n) {
        return arguments.length ? (d(n), s()) : d();
      }, a.range = function (n) {
        var _n3, _n4;

        return arguments.length ? ((_n3 = n, _n4 = _slicedToArray(_n3, 2), g = _n4[0], l = _n4[1], _n3), g = +g, l = +l, s()) : [g, l];
      }, a.rangeRound = function (n) {
        var _n5, _n6;

        return (_n5 = n, _n6 = _slicedToArray(_n5, 2), g = _n6[0], l = _n6[1], _n5), g = +g, l = +l, p = !0, s();
      }, a.bandwidth = function () {
        return i;
      }, a.step = function () {
        return t;
      }, a.round = function (n) {
        return arguments.length ? (p = !!n, s()) : p;
      }, a.padding = function (n) {
        return arguments.length ? (c = Math.min(1, f = +n), s()) : c;
      }, a.paddingInner = function (n) {
        return arguments.length ? (c = Math.min(1, n), s()) : c;
      }, a.paddingOuter = function (n) {
        return arguments.length ? (f = +n, s()) : f;
      }, a.align = function (n) {
        return arguments.length ? (h = Math.max(0, Math.min(1, n)), s()) : h;
      }, a.copy = function () {
        return u(d(), [g, l]).round(p).paddingInner(c).paddingOuter(f).align(h);
      }, r.initRange.apply(s(), arguments);
    }

    function i(n) {
      var r = n.copy;
      return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function () {
        return i(r());
      }, n;
    }

    function a() {
      return i(u.apply(null, arguments).paddingInner(1));
    }
  }, {
    "d3-array": "cBuZ",
    "./init.js": "aZlr",
    "./ordinal.js": "ELIM"
  }],
  "zRWI": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return +e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "ZpMB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.identity = i, exports.copy = s, exports.transformer = p, exports.default = m;

    var n = require("d3-array"),
        r = require("d3-interpolate"),
        e = u(require("./constant.js")),
        t = u(require("./number.js"));

    function u(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var o = [0, 1];

    function i(n) {
      return n;
    }

    function a(n, r) {
      return (r -= n = +n) ? function (e) {
        return (e - n) / r;
      } : (0, e.default)(isNaN(r) ? NaN : .5);
    }

    function c(n, r) {
      var e;
      return n > r && (e = n, n = r, r = e), function (e) {
        return Math.max(n, Math.min(r, e));
      };
    }

    function f(n, r, e) {
      var t = n[0],
          u = n[1],
          o = r[0],
          i = r[1];
      return u < t ? (t = a(u, t), o = e(i, o)) : (t = a(t, u), o = e(o, i)), function (n) {
        return o(t(n));
      };
    }

    function l(r, e, t) {
      var u = Math.min(r.length, e.length) - 1,
          o = new Array(u),
          i = new Array(u),
          c = -1;

      for (r[u] < r[0] && (r = r.slice().reverse(), e = e.slice().reverse()); ++c < u;) {
        o[c] = a(r[c], r[c + 1]), i[c] = t(e[c], e[c + 1]);
      }

      return function (e) {
        var t = (0, n.bisect)(r, e, 1, u) - 1;
        return i[t](o[t](e));
      };
    }

    function s(n, r) {
      return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown());
    }

    function p() {
      var n,
          e,
          u,
          a,
          s,
          p,
          m = o,
          d = o,
          g = r.interpolate,
          h = i;

      function v() {
        var n = Math.min(m.length, d.length);
        return h !== i && (h = c(m[0], m[n - 1])), a = n > 2 ? l : f, s = p = null, y;
      }

      function y(r) {
        return isNaN(r = +r) ? u : (s || (s = a(m.map(n), d, g)))(n(h(r)));
      }

      return y.invert = function (t) {
        return h(e((p || (p = a(d, m.map(n), r.interpolateNumber)))(t)));
      }, y.domain = function (n) {
        return arguments.length ? (m = Array.from(n, t.default), v()) : m.slice();
      }, y.range = function (n) {
        return arguments.length ? (d = Array.from(n), v()) : d.slice();
      }, y.rangeRound = function (n) {
        return d = Array.from(n), g = r.interpolateRound, v();
      }, y.clamp = function (n) {
        return arguments.length ? (h = !!n || i, v()) : h !== i;
      }, y.interpolate = function (n) {
        return arguments.length ? (g = n, v()) : g;
      }, y.unknown = function (n) {
        return arguments.length ? (u = n, y) : u;
      }, function (r, t) {
        return n = r, e = t, v();
      };
    }

    function m() {
      return p()(i, i);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-interpolate": "mkGF",
    "./constant.js": "H3qE",
    "./number.js": "zRWI"
  }],
  "c+Jh": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
      var n,
          l = e.slice(0, n);
      return [l.length > 1 ? l[0] + l.slice(2) : l, +e.slice(n + 1)];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "m3FQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./formatDecimal.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return (t = (0, e.default)(Math.abs(t))) ? t[1] : NaN;
    }
  }, {
    "./formatDecimal.js": "c+Jh"
  }],
  "e1cc": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return function (r, n) {
        for (var u = r.length, s = [], o = 0, i = e[0], a = 0; u > 0 && i > 0 && (a + i + 1 > n && (i = Math.max(1, n - a)), s.push(r.substring(u -= i, u + i)), !((a += i + 1) > n));) {
          i = e[o = (o + 1) % e.length];
        }

        return s.reverse().join(t);
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Wswx": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return function (t) {
        return t.replace(/[0-9]/g, function (t) {
          return e[+t];
        });
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "gePe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.FormatSpecifier = o;
    var i = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function t(t) {
      if (!(s = i.exec(t))) throw new Error("invalid format: " + t);
      var s;
      return new o({
        fill: s[1],
        align: s[2],
        sign: s[3],
        symbol: s[4],
        zero: s[5],
        width: s[6],
        comma: s[7],
        precision: s[8] && s[8].slice(1),
        trim: s[9],
        type: s[10]
      });
    }

    function o(i) {
      this.fill = void 0 === i.fill ? " " : i.fill + "", this.align = void 0 === i.align ? ">" : i.align + "", this.sign = void 0 === i.sign ? "-" : i.sign + "", this.symbol = void 0 === i.symbol ? "" : i.symbol + "", this.zero = !!i.zero, this.width = void 0 === i.width ? void 0 : +i.width, this.comma = !!i.comma, this.precision = void 0 === i.precision ? void 0 : +i.precision, this.trim = !!i.trim, this.type = void 0 === i.type ? "" : i.type + "";
    }

    t.prototype = o.prototype, o.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
    };
  }, {}],
  "dWsa": [function (require, module, exports) {
    "use strict";

    function e(e) {
      e: for (var r, t = e.length, s = 1, a = -1; s < t; ++s) {
        switch (e[s]) {
          case ".":
            a = r = s;
            break;

          case "0":
            0 === a && (a = s), r = s;
            break;

          default:
            if (a > 0) {
              if (!+e[s]) break e;
              a = 0;
            }

        }
      }

      return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "KTGF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n, exports.prefixExponent = void 0;
    var e,
        r = t(require("./formatDecimal.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t, n) {
      var o = (0, r.default)(t, n);
      if (!o) return t + "";
      var a = o[0],
          i = o[1],
          u = i - (exports.prefixExponent = e = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          f = a.length;
      return u === f ? a : u > f ? a + new Array(u - f + 1).join("0") : u > 0 ? a.slice(0, u) + "." + a.slice(u) : "0." + new Array(1 - u).join("0") + (0, r.default)(t, Math.max(0, n + u - 1))[0];
    }

    exports.prefixExponent = e;
  }, {
    "./formatDecimal.js": "c+Jh"
  }],
  "e8g/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./formatDecimal.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      var n = (0, e.default)(r, t);
      if (!n) return r + "";
      var u = n[0],
          a = n[1];
      return a < 0 ? "0." + new Array(-a).join("0") + u : u.length > a + 1 ? u.slice(0, a + 1) + "." + u.slice(a + 1) : u + new Array(a - u.length + 2).join("0");
    }
  }, {
    "./formatDecimal.js": "c+Jh"
  }],
  "uFUO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = n(require("./formatPrefixAuto.js")),
        r = n(require("./formatRounded.js"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var e = {
      "%": function _(t, r) {
        return (100 * t).toFixed(r);
      },
      b: function b(t) {
        return Math.round(t).toString(2);
      },
      c: function c(t) {
        return t + "";
      },
      d: function d(t) {
        return Math.round(t).toString(10);
      },
      e: function e(t, r) {
        return t.toExponential(r);
      },
      f: function f(t, r) {
        return t.toFixed(r);
      },
      g: function g(t, r) {
        return t.toPrecision(r);
      },
      o: function o(t) {
        return Math.round(t).toString(8);
      },
      p: function p(t, n) {
        return (0, r.default)(100 * t, n);
      },
      r: r.default,
      s: t.default,
      X: function X(t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function x(t) {
        return Math.round(t).toString(16);
      }
    };
    exports.default = e;
  }, {
    "./formatPrefixAuto.js": "KTGF",
    "./formatRounded.js": "e8g/"
  }],
  "QWQX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var e = s(require("./exponent.js")),
        r = s(require("./formatGroup.js")),
        t = s(require("./formatNumerals.js")),
        a = s(require("./formatSpecifier.js")),
        i = s(require("./formatTrim.js")),
        n = s(require("./formatTypes.js")),
        o = require("./formatPrefixAuto.js"),
        u = s(require("./identity.js"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var l = Array.prototype.map,
        f = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

    function c(s) {
      var c = void 0 === s.grouping || void 0 === s.thousands ? u.default : (0, r.default)(l.call(s.grouping, Number), s.thousands + ""),
          d = void 0 === s.currency ? "" : s.currency[0] + "",
          m = void 0 === s.currency ? "" : s.currency[1] + "",
          p = void 0 === s.decimal ? "." : s.decimal + "",
          h = void 0 === s.numerals ? u.default : (0, t.default)(l.call(s.numerals, String)),
          v = void 0 === s.percent ? "%" : s.percent + "",
          g = void 0 === s.minus ? "-" : s.minus + "",
          y = void 0 === s.nan ? "NaN" : s.nan + "";

      function M(e) {
        var r = (e = (0, a.default)(e)).fill,
            t = e.align,
            u = e.sign,
            s = e.symbol,
            l = e.zero,
            M = e.width,
            x = e.comma,
            j = e.precision,
            b = e.trim,
            q = e.type;
        "n" === q ? (x = !0, q = "g") : n.default[q] || (void 0 === j && (j = 12), b = !0, q = "g"), (l || "0" === r && "=" === t) && (l = !0, r = "0", t = "=");
        var N = "$" === s ? d : "#" === s && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "",
            k = "$" === s ? m : /[%p]/.test(q) ? v : "",
            w = n.default[q],
            A = /[defgprs%]/.test(q);

        function P(e) {
          var a,
              n,
              s,
              d = N,
              m = k;
          if ("c" === q) m = w(e) + m, e = "";else {
            var v = (e = +e) < 0;
            if (e = isNaN(e) ? y : w(Math.abs(e), j), b && (e = (0, i.default)(e)), v && 0 == +e && (v = !1), d = (v ? "(" === u ? u : g : "-" === u || "(" === u ? "" : u) + d, m = ("s" === q ? f[8 + o.prefixExponent / 3] : "") + m + (v && "(" === u ? ")" : ""), A) for (a = -1, n = e.length; ++a < n;) {
              if (48 > (s = e.charCodeAt(a)) || s > 57) {
                m = (46 === s ? p + e.slice(a + 1) : e.slice(a)) + m, e = e.slice(0, a);
                break;
              }
            }
          }
          x && !l && (e = c(e, 1 / 0));

          var P = d.length + e.length + m.length,
              _ = P < M ? new Array(M - P + 1).join(r) : "";

          switch (x && l && (e = c(_ + e, _.length ? M - m.length : 1 / 0), _ = ""), t) {
            case "<":
              e = d + e + m + _;
              break;

            case "=":
              e = d + _ + e + m;
              break;

            case "^":
              e = _.slice(0, P = _.length >> 1) + d + e + m + _.slice(P);
              break;

            default:
              e = _ + d + e + m;
          }

          return h(e);
        }

        return j = void 0 === j ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j)), P.toString = function () {
          return e + "";
        }, P;
      }

      return {
        format: M,
        formatPrefix: function formatPrefix(r, t) {
          var i = M(((r = (0, a.default)(r)).type = "f", r)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(t) / 3))),
              o = Math.pow(10, -n),
              u = f[8 + n / 3];
          return function (e) {
            return i(o * e) + u;
          };
        }
      };
    }
  }, {
    "./exponent.js": "m3FQ",
    "./formatGroup.js": "e1cc",
    "./formatNumerals.js": "Wswx",
    "./formatSpecifier.js": "gePe",
    "./formatTrim.js": "dWsa",
    "./formatTypes.js": "uFUO",
    "./formatPrefixAuto.js": "KTGF",
    "./identity.js": "nPOL"
  }],
  "y/m0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.formatPrefix = exports.format = void 0;
    var r,
        e,
        t,
        o = f(require("./locale.js"));

    function f(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function a(f) {
      return r = (0, o.default)(f), exports.format = e = r.format, exports.formatPrefix = t = r.formatPrefix, r;
    }

    exports.format = e, exports.formatPrefix = t, a({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""],
      minus: "-"
    });
  }, {
    "./locale.js": "QWQX"
  }],
  "QL8u": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = t(require("./exponent.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      return Math.max(0, -(0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent.js": "m3FQ"
  }],
  "DzQJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;
    var e = t(require("./exponent.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(t, a) {
      return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor((0, e.default)(a) / 3))) - (0, e.default)(Math.abs(t)));
    }
  }, {
    "./exponent.js": "m3FQ"
  }],
  "4afb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;
    var e = t(require("./exponent.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(t, u) {
      return t = Math.abs(t), u = Math.abs(u) - t, Math.max(0, (0, e.default)(u) - (0, e.default)(t)) + 1;
    }
  }, {
    "./exponent.js": "m3FQ"
  }],
  "4gWe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "formatDefaultLocale", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "format", {
      enumerable: !0,
      get: function get() {
        return e.format;
      }
    }), Object.defineProperty(exports, "formatPrefix", {
      enumerable: !0,
      get: function get() {
        return e.formatPrefix;
      }
    }), Object.defineProperty(exports, "formatLocale", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "formatSpecifier", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "FormatSpecifier", {
      enumerable: !0,
      get: function get() {
        return t.FormatSpecifier;
      }
    }), Object.defineProperty(exports, "precisionFixed", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "precisionPrefix", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "precisionRound", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    });
    var e = a(require("./defaultLocale.js")),
        r = u(require("./locale.js")),
        t = a(require("./formatSpecifier.js")),
        n = u(require("./precisionFixed.js")),
        o = u(require("./precisionPrefix.js")),
        i = u(require("./precisionRound.js"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return f = function f() {
        return e;
      }, e;
    }

    function a(e) {
      if (e && e.__esModule) return e;
      var r = f();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            i && (i.get || i.set) ? Object.defineProperty(t, o, i) : t[o] = e[o];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }
  }, {
    "./defaultLocale.js": "y/m0",
    "./locale.js": "QWQX",
    "./formatSpecifier.js": "gePe",
    "./precisionFixed.js": "QL8u",
    "./precisionPrefix.js": "DzQJ",
    "./precisionRound.js": "4afb"
  }],
  "m0SA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = require("d3-array"),
        r = require("d3-format");

    function a(a, i, s, t) {
      var c,
          n = (0, e.tickStep)(a, i, s);

      switch ((t = (0, r.formatSpecifier)(null == t ? ",f" : t)).type) {
        case "s":
          var o = Math.max(Math.abs(a), Math.abs(i));
          return null != t.precision || isNaN(c = (0, r.precisionPrefix)(n, o)) || (t.precision = c), (0, r.formatPrefix)(t, o);

        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != t.precision || isNaN(c = (0, r.precisionRound)(n, Math.max(Math.abs(a), Math.abs(i)))) || (t.precision = c - ("e" === t.type));
          break;

        case "f":
        case "%":
          null != t.precision || isNaN(c = (0, r.precisionFixed)(n)) || (t.precision = c - 2 * ("%" === t.type));
      }

      return (0, r.format)(t);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-format": "4gWe"
  }],
  "VMtl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linearish = a, exports.default = c;

    var e = require("d3-array"),
        t = o(require("./continuous.js")),
        r = require("./init.js"),
        n = i(require("./tickFormat.js"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      var t = u();
      if (t && t.has(e)) return t.get(e);
      var r = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            o && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = e[i];
          }
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function a(t) {
      var r = t.domain;
      return t.ticks = function (t) {
        var n = r();
        return (0, e.ticks)(n[0], n[n.length - 1], null == t ? 10 : t);
      }, t.tickFormat = function (e, t) {
        var i = r();
        return (0, n.default)(i[0], i[i.length - 1], null == e ? 10 : e, t);
      }, t.nice = function (n) {
        null == n && (n = 10);
        var i,
            u = r(),
            o = 0,
            a = u.length - 1,
            c = u[o],
            l = u[a];
        return l < c && (i = c, c = l, l = i, i = o, o = a, a = i), (i = (0, e.tickIncrement)(c, l, n)) > 0 ? (c = Math.floor(c / i) * i, l = Math.ceil(l / i) * i, i = (0, e.tickIncrement)(c, l, n)) : i < 0 && (c = Math.ceil(c * i) / i, l = Math.floor(l * i) / i, i = (0, e.tickIncrement)(c, l, n)), i > 0 ? (u[o] = Math.floor(c / i) * i, u[a] = Math.ceil(l / i) * i, r(u)) : i < 0 && (u[o] = Math.ceil(c * i) / i, u[a] = Math.floor(l * i) / i, r(u)), t;
      }, t;
    }

    function c() {
      var e = (0, t.default)();
      return e.copy = function () {
        return (0, t.copy)(e, c());
      }, r.initRange.apply(e, arguments), a(e);
    }
  }, {
    "d3-array": "cBuZ",
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr",
    "./tickFormat.js": "m0SA"
  }],
  "eP89": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = require("./linear.js"),
        n = r(require("./number.js"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var u;

      function i(e) {
        return isNaN(e = +e) ? u : e;
      }

      return i.invert = i, i.domain = i.range = function (e) {
        return arguments.length ? (r = Array.from(e, n.default), i) : r.slice();
      }, i.unknown = function (e) {
        return arguments.length ? (u = e, i) : u;
      }, i.copy = function () {
        return t(r).unknown(u);
      }, r = arguments.length ? Array.from(r, n.default) : [0, 1], (0, e.linearish)(i);
    }
  }, {
    "./linear.js": "VMtl",
    "./number.js": "zRWI"
  }],
  "gRJQ": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r,
          l = 0,
          o = (e = e.slice()).length - 1,
          s = e[l],
          u = e[o];
      return u < s && (r = l, l = o, o = r, r = s, s = u, u = r), e[l] = t.floor(s), e[o] = t.ceil(u), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "X3YW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.loggish = p, exports.default = g;

    var t = require("d3-array"),
        n = require("d3-format"),
        r = o(require("./nice.js")),
        e = require("./continuous.js"),
        u = require("./init.js");

    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return Math.log(t);
    }

    function a(t) {
      return Math.exp(t);
    }

    function f(t) {
      return -Math.log(-t);
    }

    function c(t) {
      return -Math.exp(-t);
    }

    function l(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    }

    function h(t) {
      return 10 === t ? l : t === Math.E ? Math.exp : function (n) {
        return Math.pow(t, n);
      };
    }

    function s(t) {
      return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
        return Math.log(n) / t;
      });
    }

    function M(t) {
      return function (n) {
        return -t(-n);
      };
    }

    function p(e) {
      var u,
          o,
          l = e(i, a),
          p = l.domain,
          g = 10;

      function d() {
        return u = s(g), o = h(g), p()[0] < 0 ? (u = M(u), o = M(o), e(f, c)) : e(i, a), l;
      }

      return l.base = function (t) {
        return arguments.length ? (g = +t, d()) : g;
      }, l.domain = function (t) {
        return arguments.length ? (p(t), d()) : p();
      }, l.ticks = function (n) {
        var r,
            e = p(),
            i = e[0],
            a = e[e.length - 1];
        (r = a < i) && (h = i, i = a, a = h);
        var f,
            c,
            l,
            h = u(i),
            s = u(a),
            M = null == n ? 10 : +n,
            d = [];

        if (!(g % 1) && s - h < M) {
          if (h = Math.floor(h), s = Math.ceil(s), i > 0) {
            for (; h <= s; ++h) {
              for (c = 1, f = o(h); c < g; ++c) {
                if (!((l = f * c) < i)) {
                  if (l > a) break;
                  d.push(l);
                }
              }
            }
          } else for (; h <= s; ++h) {
            for (c = g - 1, f = o(h); c >= 1; --c) {
              if (!((l = f * c) < i)) {
                if (l > a) break;
                d.push(l);
              }
            }
          }

          d.length || (d = (0, t.ticks)(i, a, M));
        } else d = (0, t.ticks)(h, s, Math.min(s - h, M)).map(o);

        return r ? d.reverse() : d;
      }, l.tickFormat = function (t, r) {
        if (null == r && (r = 10 === g ? ".0e" : ","), "function" != typeof r && (r = (0, n.format)(r)), t === 1 / 0) return r;
        null == t && (t = 10);
        var e = Math.max(1, g * t / l.ticks().length);
        return function (t) {
          var n = t / o(Math.round(u(t)));
          return n * g < g - .5 && (n *= g), n <= e ? r(t) : "";
        };
      }, l.nice = function () {
        return p((0, r.default)(p(), {
          floor: function floor(t) {
            return o(Math.floor(u(t)));
          },
          ceil: function ceil(t) {
            return o(Math.ceil(u(t)));
          }
        }));
      }, l;
    }

    function g() {
      var t = p((0, e.transformer)()).domain([1, 10]);
      return t.copy = function () {
        return (0, e.copy)(t, g()).base(t.base());
      }, u.initRange.apply(t, arguments), t;
    }
  }, {
    "d3-array": "cBuZ",
    "d3-format": "4gWe",
    "./nice.js": "gRJQ",
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr"
  }],
  "Prec": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.symlogish = i, exports.default = o;

    var n = require("./linear.js"),
        t = require("./continuous.js"),
        r = require("./init.js");

    function e(n) {
      return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / n));
      };
    }

    function u(n) {
      return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * n;
      };
    }

    function i(t) {
      var r = 1,
          i = t(e(r), u(r));
      return i.constant = function (n) {
        return arguments.length ? t(e(r = +n), u(r)) : r;
      }, (0, n.linearish)(i);
    }

    function o() {
      var n = i((0, t.transformer)());
      return n.copy = function () {
        return (0, t.copy)(n, o()).constant(n.constant());
      }, r.initRange.apply(n, arguments);
    }
  }, {
    "./linear.js": "VMtl",
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr"
  }],
  "/yse": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.powish = o, exports.default = p, exports.sqrt = s;

    var t = require("./linear.js"),
        n = require("./continuous.js"),
        e = require("./init.js");

    function r(t) {
      return function (n) {
        return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
      };
    }

    function i(t) {
      return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
    }

    function u(t) {
      return t < 0 ? -t * t : t * t;
    }

    function o(e) {
      var o = e(n.identity, n.identity),
          p = 1;
      return o.exponent = function (t) {
        return arguments.length ? 1 === (p = +t) ? e(n.identity, n.identity) : .5 === p ? e(i, u) : e(r(p), r(1 / p)) : p;
      }, (0, t.linearish)(o);
    }

    function p() {
      var t = o((0, n.transformer)());
      return t.copy = function () {
        return (0, n.copy)(t, p()).exponent(t.exponent());
      }, e.initRange.apply(t, arguments), t;
    }

    function s() {
      return p.apply(null, arguments).exponent(.5);
    }
  }, {
    "./linear.js": "VMtl",
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr"
  }],
  "OJb5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var n = u(require("./continuous.js")),
        r = require("./init.js"),
        e = require("./linear.js"),
        t = u(require("./number.js"));

    function u(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function i(n) {
      return Math.sign(n) * n * n;
    }

    function a(n) {
      return Math.sign(n) * Math.sqrt(Math.abs(n));
    }

    function o() {
      var u,
          c = (0, n.default)(),
          l = [0, 1],
          f = !1;

      function s(n) {
        var r = a(c(n));
        return isNaN(r) ? u : f ? Math.round(r) : r;
      }

      return s.invert = function (n) {
        return c.invert(i(n));
      }, s.domain = function (n) {
        return arguments.length ? (c.domain(n), s) : c.domain();
      }, s.range = function (n) {
        return arguments.length ? (c.range((l = Array.from(n, t.default)).map(i)), s) : l.slice();
      }, s.rangeRound = function (n) {
        return s.range(n).round(!0);
      }, s.round = function (n) {
        return arguments.length ? (f = !!n, s) : f;
      }, s.clamp = function (n) {
        return arguments.length ? (c.clamp(n), s) : c.clamp();
      }, s.unknown = function (n) {
        return arguments.length ? (u = n, s) : u;
      }, s.copy = function () {
        return o(c.domain(), l).round(f).clamp(c.clamp()).unknown(u);
      }, r.initRange.apply(s, arguments), (0, e.linearish)(s);
    }
  }, {
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr",
    "./linear.js": "VMtl",
    "./number.js": "zRWI"
  }],
  "fsZk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = require("d3-array"),
        e = require("./init.js");

    function r() {
      var t,
          i = [],
          u = [],
          a = [];

      function o() {
        var e = 0,
            r = Math.max(1, u.length);

        for (a = new Array(r - 1); ++e < r;) {
          a[e - 1] = (0, n.quantile)(i, e / r);
        }

        return l;
      }

      function l(e) {
        return isNaN(e = +e) ? t : u[(0, n.bisect)(a, e)];
      }

      return l.invertExtent = function (n) {
        var e = u.indexOf(n);
        return e < 0 ? [NaN, NaN] : [e > 0 ? a[e - 1] : i[0], e < a.length ? a[e] : i[i.length - 1]];
      }, l.domain = function (e) {
        if (!arguments.length) return i.slice();
        i = [];
        var _iteratorNormalCompletion32 = true;
        var _didIteratorError32 = false;
        var _iteratorError32 = undefined;

        try {
          for (var _iterator32 = e[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
            var _n7 = _step32.value;
            null == _n7 || isNaN(_n7 = +_n7) || i.push(_n7);
          }
        } catch (err) {
          _didIteratorError32 = true;
          _iteratorError32 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion32 && _iterator32.return != null) {
              _iterator32.return();
            }
          } finally {
            if (_didIteratorError32) {
              throw _iteratorError32;
            }
          }
        }

        return i.sort(n.ascending), o();
      }, l.range = function (n) {
        return arguments.length ? (u = Array.from(n), o()) : u.slice();
      }, l.unknown = function (n) {
        return arguments.length ? (t = n, l) : t;
      }, l.quantiles = function () {
        return a.slice();
      }, l.copy = function () {
        return r().domain(i).range(u).unknown(t);
      }, e.initRange.apply(l, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./init.js": "aZlr"
  }],
  "8Z2c": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var n = require("d3-array"),
        r = require("./linear.js"),
        e = require("./init.js");

    function t() {
      var i,
          u = 0,
          o = 1,
          a = 1,
          c = [.5],
          f = [0, 1];

      function l(r) {
        return r <= r ? f[(0, n.bisect)(c, r, 0, a)] : i;
      }

      function s() {
        var n = -1;

        for (c = new Array(a); ++n < a;) {
          c[n] = ((n + 1) * o - (n - a) * u) / (a + 1);
        }

        return l;
      }

      return l.domain = function (n) {
        var _n8, _n9;

        return arguments.length ? ((_n8 = n, _n9 = _slicedToArray(_n8, 2), u = _n9[0], o = _n9[1], _n8), u = +u, o = +o, s()) : [u, o];
      }, l.range = function (n) {
        return arguments.length ? (a = (f = Array.from(n)).length - 1, s()) : f.slice();
      }, l.invertExtent = function (n) {
        var r = f.indexOf(n);
        return r < 0 ? [NaN, NaN] : r < 1 ? [u, c[0]] : r >= a ? [c[a - 1], o] : [c[r - 1], c[r]];
      }, l.unknown = function (n) {
        return arguments.length ? (i = n, l) : l;
      }, l.thresholds = function () {
        return c.slice();
      }, l.copy = function () {
        return t().domain([u, o]).range(f).unknown(i);
      }, e.initRange.apply((0, r.linearish)(l), arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./linear.js": "VMtl",
    "./init.js": "aZlr"
  }],
  "odYE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;

    var n = require("d3-array"),
        e = require("./init.js");

    function r() {
      var t,
          i = [.5],
          u = [0, 1],
          o = 1;

      function a(e) {
        return e <= e ? u[(0, n.bisect)(i, e, 0, o)] : t;
      }

      return a.domain = function (n) {
        return arguments.length ? (i = Array.from(n), o = Math.min(i.length, u.length - 1), a) : i.slice();
      }, a.range = function (n) {
        return arguments.length ? (u = Array.from(n), o = Math.min(i.length, u.length - 1), a) : u.slice();
      }, a.invertExtent = function (n) {
        var e = u.indexOf(n);
        return [i[e - 1], i[e]];
      }, a.unknown = function (n) {
        return arguments.length ? (t = n, a) : t;
      }, a.copy = function () {
        return r().domain(i).range(u).unknown(t);
      }, e.initRange.apply(a, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./init.js": "aZlr"
  }],
  "gsab": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = new Date(),
        n = new Date();

    function t(r, o, u, f) {
      function i(e) {
        return r(e = 0 === arguments.length ? new Date() : new Date(+e)), e;
      }

      return i.floor = function (e) {
        return r(e = new Date(+e)), e;
      }, i.ceil = function (e) {
        return r(e = new Date(e - 1)), o(e, 1), r(e), e;
      }, i.round = function (e) {
        var n = i(e),
            t = i.ceil(e);
        return e - n < t - e ? n : t;
      }, i.offset = function (e, n) {
        return o(e = new Date(+e), null == n ? 1 : Math.floor(n)), e;
      }, i.range = function (e, n, t) {
        var u,
            f = [];
        if (e = i.ceil(e), t = null == t ? 1 : Math.floor(t), !(e < n && t > 0)) return f;

        do {
          f.push(u = new Date(+e)), o(e, t), r(e);
        } while (u < e && e < n);

        return f;
      }, i.filter = function (e) {
        return t(function (n) {
          if (n >= n) for (; r(n), !e(n);) {
            n.setTime(n - 1);
          }
        }, function (n, t) {
          if (n >= n) if (t < 0) for (; ++t <= 0;) {
            for (; o(n, -1), !e(n);) {
              ;
            }
          } else for (; --t >= 0;) {
            for (; o(n, 1), !e(n);) {
              ;
            }
          }
        });
      }, u && (i.count = function (t, o) {
        return e.setTime(+t), n.setTime(+o), r(e), r(n), Math.floor(u(e, n));
      }, i.every = function (e) {
        return e = Math.floor(e), isFinite(e) && e > 0 ? e > 1 ? i.filter(f ? function (n) {
          return f(n) % e == 0;
        } : function (n) {
          return i.count(0, n) % e == 0;
        }) : i : null;
      }), i;
    }
  }, {}],
  "r4Yr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.milliseconds = exports.default = void 0;
    var e = t(require("./interval.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = (0, e.default)(function () {}, function (e, t) {
      e.setTime(+e + t);
    }, function (e, t) {
      return t - e;
    });

    n.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? (0, e.default)(function (e) {
        e.setTime(Math.floor(e / t) * t);
      }, function (e, n) {
        e.setTime(+e + n * t);
      }, function (e, n) {
        return (n - e) / t;
      }) : n : null;
    };

    var r = n;
    exports.default = r;
    var i = n.range;
    exports.milliseconds = i;
  }, {
    "./interval.js": "gsab"
  }],
  "EMi+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.durationWeek = exports.durationDay = exports.durationHour = exports.durationMinute = exports.durationSecond = void 0;
    var e = 1e3;
    exports.durationSecond = e;
    var r = 6e4;
    exports.durationMinute = r;
    var o = 36e5;
    exports.durationHour = o;
    var t = 864e5;
    exports.durationDay = t;
    var a = 6048e5;
    exports.durationWeek = a;
  }, {}],
  "K4G6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.seconds = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var n = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds());
    }, function (e, r) {
      e.setTime(+e + r * t.durationSecond);
    }, function (e, r) {
      return (r - e) / t.durationSecond;
    }, function (e) {
      return e.getUTCSeconds();
    }),
        o = n;
    exports.default = o;
    var u = n.range;
    exports.seconds = u;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "sObl": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.minutes = exports.default = void 0;

    var e = n(require("./interval.js")),
        t = require("./duration.js");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond);
    }, function (e, n) {
      e.setTime(+e + n * t.durationMinute);
    }, function (e, n) {
      return (n - e) / t.durationMinute;
    }, function (e) {
      return e.getMinutes();
    }),
        u = r;
    exports.default = u;
    var i = r.range;
    exports.minutes = i;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "wPv4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hours = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setTime(e - e.getMilliseconds() - e.getSeconds() * t.durationSecond - e.getMinutes() * t.durationMinute);
    }, function (e, r) {
      e.setTime(+e + r * t.durationHour);
    }, function (e, r) {
      return (r - e) / t.durationHour;
    }, function (e) {
      return e.getHours();
    }),
        o = u;
    exports.default = o;
    var n = u.range;
    exports.hours = n;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "bZ++": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.days = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setDate(e.getDate() + t);
    }, function (e, r) {
      return (r - e - (r.getTimezoneOffset() - e.getTimezoneOffset()) * t.durationMinute) / t.durationDay;
    }, function (e) {
      return e.getDate() - 1;
    }),
        n = u;
    exports.default = n;
    var o = u.range;
    exports.days = o;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "6SUb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.saturdays = exports.fridays = exports.thursdays = exports.wednesdays = exports.tuesdays = exports.mondays = exports.sundays = exports.saturday = exports.friday = exports.thursday = exports.wednesday = exports.tuesday = exports.monday = exports.sunday = void 0;

    var e = s(require("./interval.js")),
        r = require("./duration.js");

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(s) {
      return (0, e.default)(function (e) {
        e.setDate(e.getDate() - (e.getDay() + 7 - s) % 7), e.setHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setDate(e.getDate() + 7 * r);
      }, function (e, s) {
        return (s - e - (s.getTimezoneOffset() - e.getTimezoneOffset()) * r.durationMinute) / r.durationWeek;
      });
    }

    var a = t(0);
    exports.sunday = a;
    var o = t(1);
    exports.monday = o;
    var d = t(2);
    exports.tuesday = d;
    var n = t(3);
    exports.wednesday = n;
    var u = t(4);
    exports.thursday = u;
    var p = t(5);
    exports.friday = p;
    var y = t(6);
    exports.saturday = y;
    var x = a.range;
    exports.sundays = x;
    var i = o.range;
    exports.mondays = i;
    var v = d.range;
    exports.tuesdays = v;
    var f = n.range;
    exports.wednesdays = f;
    var g = u.range;
    exports.thursdays = g;
    var c = p.range;
    exports.fridays = c;
    var l = y.range;
    exports.saturdays = l;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "XpbA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.months = exports.default = void 0;
    var t = e(require("./interval.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = (0, t.default)(function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setMonth(t.getMonth() + e);
    }, function (t, e) {
      return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
    }, function (t) {
      return t.getMonth();
    }),
        n = r;
    exports.default = n;
    var o = r.range;
    exports.months = o;
  }, {
    "./interval.js": "gsab"
  }],
  "djmh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.years = exports.default = void 0;
    var e = t(require("./interval.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setFullYear(e.getFullYear() + t);
    }, function (e, t) {
      return t.getFullYear() - e.getFullYear();
    }, function (e) {
      return e.getFullYear();
    });

    r.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function (e) {
        e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setFullYear(e.getFullYear() + r * t);
      }) : null;
    };

    var u = r;
    exports.default = u;
    var l = r.range;
    exports.years = l;
  }, {
    "./interval.js": "gsab"
  }],
  "c3Ah": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcMinutes = exports.default = void 0;

    var e = u(require("./interval.js")),
        t = require("./duration.js");

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setUTCSeconds(0, 0);
    }, function (e, u) {
      e.setTime(+e + u * t.durationMinute);
    }, function (e, u) {
      return (u - e) / t.durationMinute;
    }, function (e) {
      return e.getUTCMinutes();
    }),
        n = r;
    exports.default = n;
    var i = r.range;
    exports.utcMinutes = i;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "sGav": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcHours = exports.default = void 0;

    var e = t(require("./interval.js")),
        r = require("./duration.js");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setUTCMinutes(0, 0, 0);
    }, function (e, t) {
      e.setTime(+e + t * r.durationHour);
    }, function (e, t) {
      return (t - e) / r.durationHour;
    }, function (e) {
      return e.getUTCHours();
    }),
        o = u;
    exports.default = o;
    var n = u.range;
    exports.utcHours = n;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "ns65": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcDays = exports.default = void 0;

    var e = r(require("./interval.js")),
        t = require("./duration.js");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, e.default)(function (e) {
      e.setUTCHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setUTCDate(e.getUTCDate() + t);
    }, function (e, r) {
      return (r - e) / t.durationDay;
    }, function (e) {
      return e.getUTCDate() - 1;
    }),
        a = u;
    exports.default = a;
    var n = u.range;
    exports.utcDays = n;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "/HsO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcSaturdays = exports.utcFridays = exports.utcThursdays = exports.utcWednesdays = exports.utcTuesdays = exports.utcMondays = exports.utcSundays = exports.utcSaturday = exports.utcFriday = exports.utcThursday = exports.utcWednesday = exports.utcTuesday = exports.utcMonday = exports.utcSunday = void 0;

    var t = r(require("./interval.js")),
        e = require("./duration.js");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function a(r) {
      return (0, t.default)(function (t) {
        t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - r) % 7), t.setUTCHours(0, 0, 0, 0);
      }, function (t, e) {
        t.setUTCDate(t.getUTCDate() + 7 * e);
      }, function (t, r) {
        return (r - t) / e.durationWeek;
      });
    }

    var s = a(0);
    exports.utcSunday = s;
    var u = a(1);
    exports.utcMonday = u;
    var o = a(2);
    exports.utcTuesday = o;
    var d = a(3);
    exports.utcWednesday = d;
    var n = a(4);
    exports.utcThursday = n;
    var c = a(5);
    exports.utcFriday = c;
    var p = a(6);
    exports.utcSaturday = p;
    var y = s.range;
    exports.utcSundays = y;
    var x = u.range;
    exports.utcMondays = x;
    var v = o.range;
    exports.utcTuesdays = v;
    var i = d.range;
    exports.utcWednesdays = i;
    var T = n.range;
    exports.utcThursdays = T;
    var g = c.range;
    exports.utcFridays = g;
    var f = p.range;
    exports.utcSaturdays = f;
  }, {
    "./interval.js": "gsab",
    "./duration.js": "EMi+"
  }],
  "KWFc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcMonths = exports.default = void 0;
    var t = e(require("./interval.js"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var r = (0, t.default)(function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setUTCMonth(t.getUTCMonth() + e);
    }, function (t, e) {
      return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
    }, function (t) {
      return t.getUTCMonth();
    }),
        n = r;
    exports.default = n;
    var o = r.range;
    exports.utcMonths = o;
  }, {
    "./interval.js": "gsab"
  }],
  "LM11": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.utcYears = exports.default = void 0;
    var e = t(require("./interval.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = (0, e.default)(function (e) {
      e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
    }, function (e, t) {
      e.setUTCFullYear(e.getUTCFullYear() + t);
    }, function (e, t) {
      return t.getUTCFullYear() - e.getUTCFullYear();
    }, function (e) {
      return e.getUTCFullYear();
    });

    r.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? (0, e.default)(function (e) {
        e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
      }, function (e, r) {
        e.setUTCFullYear(e.getUTCFullYear() + r * t);
      }) : null;
    };

    var u = r;
    exports.default = u;
    var l = r.range;
    exports.utcYears = l;
  }, {
    "./interval.js": "gsab"
  }],
  "F00f": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "timeInterval", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "timeMillisecond", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "timeMilliseconds", {
      enumerable: !0,
      get: function get() {
        return t.milliseconds;
      }
    }), Object.defineProperty(exports, "utcMillisecond", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "utcMilliseconds", {
      enumerable: !0,
      get: function get() {
        return t.milliseconds;
      }
    }), Object.defineProperty(exports, "timeSecond", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "timeSeconds", {
      enumerable: !0,
      get: function get() {
        return r.seconds;
      }
    }), Object.defineProperty(exports, "utcSecond", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "utcSeconds", {
      enumerable: !0,
      get: function get() {
        return r.seconds;
      }
    }), Object.defineProperty(exports, "timeMinute", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "timeMinutes", {
      enumerable: !0,
      get: function get() {
        return n.minutes;
      }
    }), Object.defineProperty(exports, "timeHour", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "timeHours", {
      enumerable: !0,
      get: function get() {
        return u.hours;
      }
    }), Object.defineProperty(exports, "timeDay", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "timeDays", {
      enumerable: !0,
      get: function get() {
        return o.days;
      }
    }), Object.defineProperty(exports, "timeWeek", {
      enumerable: !0,
      get: function get() {
        return i.sunday;
      }
    }), Object.defineProperty(exports, "timeWeeks", {
      enumerable: !0,
      get: function get() {
        return i.sundays;
      }
    }), Object.defineProperty(exports, "timeSunday", {
      enumerable: !0,
      get: function get() {
        return i.sunday;
      }
    }), Object.defineProperty(exports, "timeSundays", {
      enumerable: !0,
      get: function get() {
        return i.sundays;
      }
    }), Object.defineProperty(exports, "timeMonday", {
      enumerable: !0,
      get: function get() {
        return i.monday;
      }
    }), Object.defineProperty(exports, "timeMondays", {
      enumerable: !0,
      get: function get() {
        return i.mondays;
      }
    }), Object.defineProperty(exports, "timeTuesday", {
      enumerable: !0,
      get: function get() {
        return i.tuesday;
      }
    }), Object.defineProperty(exports, "timeTuesdays", {
      enumerable: !0,
      get: function get() {
        return i.tuesdays;
      }
    }), Object.defineProperty(exports, "timeWednesday", {
      enumerable: !0,
      get: function get() {
        return i.wednesday;
      }
    }), Object.defineProperty(exports, "timeWednesdays", {
      enumerable: !0,
      get: function get() {
        return i.wednesdays;
      }
    }), Object.defineProperty(exports, "timeThursday", {
      enumerable: !0,
      get: function get() {
        return i.thursday;
      }
    }), Object.defineProperty(exports, "timeThursdays", {
      enumerable: !0,
      get: function get() {
        return i.thursdays;
      }
    }), Object.defineProperty(exports, "timeFriday", {
      enumerable: !0,
      get: function get() {
        return i.friday;
      }
    }), Object.defineProperty(exports, "timeFridays", {
      enumerable: !0,
      get: function get() {
        return i.fridays;
      }
    }), Object.defineProperty(exports, "timeSaturday", {
      enumerable: !0,
      get: function get() {
        return i.saturday;
      }
    }), Object.defineProperty(exports, "timeSaturdays", {
      enumerable: !0,
      get: function get() {
        return i.saturdays;
      }
    }), Object.defineProperty(exports, "timeMonth", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "timeMonths", {
      enumerable: !0,
      get: function get() {
        return c.months;
      }
    }), Object.defineProperty(exports, "timeYear", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "timeYears", {
      enumerable: !0,
      get: function get() {
        return s.years;
      }
    }), Object.defineProperty(exports, "utcMinute", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "utcMinutes", {
      enumerable: !0,
      get: function get() {
        return a.utcMinutes;
      }
    }), Object.defineProperty(exports, "utcHour", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "utcHours", {
      enumerable: !0,
      get: function get() {
        return d.utcHours;
      }
    }), Object.defineProperty(exports, "utcDay", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "utcDays", {
      enumerable: !0,
      get: function get() {
        return f.utcDays;
      }
    }), Object.defineProperty(exports, "utcWeek", {
      enumerable: !0,
      get: function get() {
        return y.utcSunday;
      }
    }), Object.defineProperty(exports, "utcWeeks", {
      enumerable: !0,
      get: function get() {
        return y.utcSundays;
      }
    }), Object.defineProperty(exports, "utcSunday", {
      enumerable: !0,
      get: function get() {
        return y.utcSunday;
      }
    }), Object.defineProperty(exports, "utcSundays", {
      enumerable: !0,
      get: function get() {
        return y.utcSundays;
      }
    }), Object.defineProperty(exports, "utcMonday", {
      enumerable: !0,
      get: function get() {
        return y.utcMonday;
      }
    }), Object.defineProperty(exports, "utcMondays", {
      enumerable: !0,
      get: function get() {
        return y.utcMondays;
      }
    }), Object.defineProperty(exports, "utcTuesday", {
      enumerable: !0,
      get: function get() {
        return y.utcTuesday;
      }
    }), Object.defineProperty(exports, "utcTuesdays", {
      enumerable: !0,
      get: function get() {
        return y.utcTuesdays;
      }
    }), Object.defineProperty(exports, "utcWednesday", {
      enumerable: !0,
      get: function get() {
        return y.utcWednesday;
      }
    }), Object.defineProperty(exports, "utcWednesdays", {
      enumerable: !0,
      get: function get() {
        return y.utcWednesdays;
      }
    }), Object.defineProperty(exports, "utcThursday", {
      enumerable: !0,
      get: function get() {
        return y.utcThursday;
      }
    }), Object.defineProperty(exports, "utcThursdays", {
      enumerable: !0,
      get: function get() {
        return y.utcThursdays;
      }
    }), Object.defineProperty(exports, "utcFriday", {
      enumerable: !0,
      get: function get() {
        return y.utcFriday;
      }
    }), Object.defineProperty(exports, "utcFridays", {
      enumerable: !0,
      get: function get() {
        return y.utcFridays;
      }
    }), Object.defineProperty(exports, "utcSaturday", {
      enumerable: !0,
      get: function get() {
        return y.utcSaturday;
      }
    }), Object.defineProperty(exports, "utcSaturdays", {
      enumerable: !0,
      get: function get() {
        return y.utcSaturdays;
      }
    }), Object.defineProperty(exports, "utcMonth", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "utcMonths", {
      enumerable: !0,
      get: function get() {
        return p.utcMonths;
      }
    }), Object.defineProperty(exports, "utcYear", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "utcYears", {
      enumerable: !0,
      get: function get() {
        return b.utcYears;
      }
    });

    var e = j(require("./interval.js")),
        t = m(require("./millisecond.js")),
        r = m(require("./second.js")),
        n = m(require("./minute.js")),
        u = m(require("./hour.js")),
        o = m(require("./day.js")),
        i = require("./week.js"),
        c = m(require("./month.js")),
        s = m(require("./year.js")),
        a = m(require("./utcMinute.js")),
        d = m(require("./utcHour.js")),
        f = m(require("./utcDay.js")),
        y = require("./utcWeek.js"),
        p = m(require("./utcMonth.js")),
        b = m(require("./utcYear.js"));

    function l() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return l = function l() {
        return e;
      }, e;
    }

    function m(e) {
      if (e && e.__esModule) return e;
      var t = l();
      if (t && t.has(e)) return t.get(e);
      var r = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
            o && (o.get || o.set) ? Object.defineProperty(r, u, o) : r[u] = e[u];
          }
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function j(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./interval.js": "gsab",
    "./millisecond.js": "r4Yr",
    "./second.js": "K4G6",
    "./minute.js": "sObl",
    "./hour.js": "wPv4",
    "./day.js": "bZ++",
    "./week.js": "6SUb",
    "./month.js": "XpbA",
    "./year.js": "djmh",
    "./utcMinute.js": "c3Ah",
    "./utcHour.js": "sGav",
    "./utcDay.js": "ns65",
    "./utcWeek.js": "/HsO",
    "./utcMonth.js": "KWFc",
    "./utcYear.js": "LM11"
  }],
  "rf9h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var n = require("d3-time");

    function t(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(-1, n.m, n.d, n.H, n.M, n.S, n.L);
        return t.setFullYear(n.y), t;
      }

      return new Date(n.y, n.m, n.d, n.H, n.M, n.S, n.L);
    }

    function e(n) {
      if (0 <= n.y && n.y < 100) {
        var t = new Date(Date.UTC(-1, n.m, n.d, n.H, n.M, n.S, n.L));
        return t.setUTCFullYear(n.y), t;
      }

      return new Date(Date.UTC(n.y, n.m, n.d, n.H, n.M, n.S, n.L));
    }

    function r(n) {
      return {
        y: n,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      };
    }

    function u(u) {
      var i = u.dateTime,
          o = u.date,
          a = u.time,
          f = u.periods,
          l = u.days,
          vn = u.shortDays,
          mn = u.months,
          Cn = u.shortMonths,
          Dn = g(f),
          Tn = s(f),
          xn = g(l),
          Mn = s(l),
          Un = g(vn),
          wn = s(vn),
          Yn = g(mn),
          Hn = s(mn),
          pn = g(Cn),
          Sn = s(Cn),
          Ln = {
        a: function a(n) {
          return vn[n.getDay()];
        },
        A: function A(n) {
          return l[n.getDay()];
        },
        b: function b(n) {
          return Cn[n.getMonth()];
        },
        B: function B(n) {
          return mn[n.getMonth()];
        },
        c: null,
        d: F,
        e: F,
        f: X,
        H: V,
        I: W,
        j: j,
        L: Q,
        m: b,
        M: B,
        p: function p(n) {
          return f[+(n.getHours() >= 12)];
        },
        Q: yn,
        s: dn,
        S: I,
        u: _,
        U: O,
        V: P,
        w: $,
        W: q,
        x: null,
        X: null,
        y: z,
        Y: E,
        Z: R,
        "%": hn
      },
          An = {
        a: function a(n) {
          return vn[n.getUTCDay()];
        },
        A: function A(n) {
          return l[n.getUTCDay()];
        },
        b: function b(n) {
          return Cn[n.getUTCMonth()];
        },
        B: function B(n) {
          return mn[n.getUTCMonth()];
        },
        c: null,
        d: k,
        e: k,
        f: nn,
        H: G,
        I: J,
        j: K,
        L: N,
        m: tn,
        M: en,
        p: function p(n) {
          return f[+(n.getUTCHours() >= 12)];
        },
        Q: yn,
        s: dn,
        S: rn,
        u: un,
        U: cn,
        V: on,
        w: an,
        W: fn,
        x: null,
        X: null,
        y: ln,
        Y: gn,
        Z: sn,
        "%": hn
      },
          Zn = {
        a: function a(n, t, e) {
          var r = Un.exec(t.slice(e));
          return r ? (n.w = wn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        A: function A(n, t, e) {
          var r = xn.exec(t.slice(e));
          return r ? (n.w = Mn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        b: function b(n, t, e) {
          var r = pn.exec(t.slice(e));
          return r ? (n.m = Sn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        B: function B(n, t, e) {
          var r = Yn.exec(t.slice(e));
          return r ? (n.m = Hn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        c: function c(n, t, e) {
          return Wn(n, i, t, e);
        },
        d: M,
        e: M,
        f: S,
        H: w,
        I: w,
        j: U,
        L: p,
        m: x,
        M: Y,
        p: function p(n, t, e) {
          var r = Dn.exec(t.slice(e));
          return r ? (n.p = Tn[r[0].toLowerCase()], e + r[0].length) : -1;
        },
        Q: A,
        s: Z,
        S: H,
        u: y,
        U: d,
        V: v,
        w: h,
        W: m,
        x: function x(n, t, e) {
          return Wn(n, o, t, e);
        },
        X: function X(n, t, e) {
          return Wn(n, a, t, e);
        },
        y: D,
        Y: C,
        Z: T,
        "%": L
      };

      function Fn(n, t) {
        return function (e) {
          var r,
              u,
              i,
              o = [],
              a = -1,
              f = 0,
              l = n.length;

          for (e instanceof Date || (e = new Date(+e)); ++a < l;) {
            37 === n.charCodeAt(a) && (o.push(n.slice(f, a)), null != (u = c[r = n.charAt(++a)]) ? r = n.charAt(++a) : u = "e" === r ? " " : "0", (i = t[r]) && (r = i(e, u)), o.push(r), f = a + 1);
          }

          return o.push(n.slice(f, a)), o.join("");
        };
      }

      function Vn(t, u) {
        return function (c) {
          var i,
              o,
              a = r(1900);
          if (Wn(a, t, c += "", 0) != c.length) return null;
          if ("Q" in a) return new Date(a.Q);

          if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
            if (a.V < 1 || a.V > 53) return null;
            "w" in a || (a.w = 1), "Z" in a ? (o = (i = e(r(a.y))).getUTCDay(), i = o > 4 || 0 === o ? n.utcMonday.ceil(i) : (0, n.utcMonday)(i), i = n.utcDay.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (o = (i = u(r(a.y))).getDay(), i = o > 4 || 0 === o ? n.timeMonday.ceil(i) : (0, n.timeMonday)(i), i = n.timeDay.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7);
          } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), o = "Z" in a ? e(r(a.y)).getUTCDay() : u(r(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (o + 5) % 7 : a.w + 7 * a.U - (o + 6) % 7);

          return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, e(a)) : u(a);
        };
      }

      function Wn(n, t, e, r) {
        for (var u, i, o = 0, a = t.length, f = e.length; o < a;) {
          if (r >= f) return -1;

          if (37 === (u = t.charCodeAt(o++))) {
            if (u = t.charAt(o++), !(i = Zn[u in c ? t.charAt(o++) : u]) || (r = i(n, e, r)) < 0) return -1;
          } else if (u != e.charCodeAt(r++)) return -1;
        }

        return r;
      }

      return Ln.x = Fn(o, Ln), Ln.X = Fn(a, Ln), Ln.c = Fn(i, Ln), An.x = Fn(o, An), An.X = Fn(a, An), An.c = Fn(i, An), {
        format: function format(n) {
          var t = Fn(n += "", Ln);
          return t.toString = function () {
            return n;
          }, t;
        },
        parse: function parse(n) {
          var e = Vn(n += "", t);
          return e.toString = function () {
            return n;
          }, e;
        },
        utcFormat: function utcFormat(n) {
          var t = Fn(n += "", An);
          return t.toString = function () {
            return n;
          }, t;
        },
        utcParse: function utcParse(n) {
          var t = Vn(n, e);
          return t.toString = function () {
            return n;
          }, t;
        }
      };
    }

    var c = {
      "-": "",
      _: " ",
      0: "0"
    },
        i = /^\s*\d+/,
        o = /^%/,
        a = /[\\^$*+?|[\]().{}]/g;

    function f(n, t, e) {
      var r = n < 0 ? "-" : "",
          u = (r ? -n : n) + "",
          c = u.length;
      return r + (c < e ? new Array(e - c + 1).join(t) + u : u);
    }

    function l(n) {
      return n.replace(a, "\\$&");
    }

    function g(n) {
      return new RegExp("^(?:" + n.map(l).join("|") + ")", "i");
    }

    function s(n) {
      for (var t = {}, e = -1, r = n.length; ++e < r;) {
        t[n[e].toLowerCase()] = e;
      }

      return t;
    }

    function h(n, t, e) {
      var r = i.exec(t.slice(e, e + 1));
      return r ? (n.w = +r[0], e + r[0].length) : -1;
    }

    function y(n, t, e) {
      var r = i.exec(t.slice(e, e + 1));
      return r ? (n.u = +r[0], e + r[0].length) : -1;
    }

    function d(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.U = +r[0], e + r[0].length) : -1;
    }

    function v(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.V = +r[0], e + r[0].length) : -1;
    }

    function m(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.W = +r[0], e + r[0].length) : -1;
    }

    function C(n, t, e) {
      var r = i.exec(t.slice(e, e + 4));
      return r ? (n.y = +r[0], e + r[0].length) : -1;
    }

    function D(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
    }

    function T(n, t, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(e, e + 6));
      return r ? (n.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
    }

    function x(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.m = r[0] - 1, e + r[0].length) : -1;
    }

    function M(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.d = +r[0], e + r[0].length) : -1;
    }

    function U(n, t, e) {
      var r = i.exec(t.slice(e, e + 3));
      return r ? (n.m = 0, n.d = +r[0], e + r[0].length) : -1;
    }

    function w(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.H = +r[0], e + r[0].length) : -1;
    }

    function Y(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.M = +r[0], e + r[0].length) : -1;
    }

    function H(n, t, e) {
      var r = i.exec(t.slice(e, e + 2));
      return r ? (n.S = +r[0], e + r[0].length) : -1;
    }

    function p(n, t, e) {
      var r = i.exec(t.slice(e, e + 3));
      return r ? (n.L = +r[0], e + r[0].length) : -1;
    }

    function S(n, t, e) {
      var r = i.exec(t.slice(e, e + 6));
      return r ? (n.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
    }

    function L(n, t, e) {
      var r = o.exec(t.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }

    function A(n, t, e) {
      var r = i.exec(t.slice(e));
      return r ? (n.Q = +r[0], e + r[0].length) : -1;
    }

    function Z(n, t, e) {
      var r = i.exec(t.slice(e));
      return r ? (n.Q = 1e3 * +r[0], e + r[0].length) : -1;
    }

    function F(n, t) {
      return f(n.getDate(), t, 2);
    }

    function V(n, t) {
      return f(n.getHours(), t, 2);
    }

    function W(n, t) {
      return f(n.getHours() % 12 || 12, t, 2);
    }

    function j(t, e) {
      return f(1 + n.timeDay.count((0, n.timeYear)(t), t), e, 3);
    }

    function Q(n, t) {
      return f(n.getMilliseconds(), t, 3);
    }

    function X(n, t) {
      return Q(n, t) + "000";
    }

    function b(n, t) {
      return f(n.getMonth() + 1, t, 2);
    }

    function B(n, t) {
      return f(n.getMinutes(), t, 2);
    }

    function I(n, t) {
      return f(n.getSeconds(), t, 2);
    }

    function _(n) {
      var t = n.getDay();
      return 0 === t ? 7 : t;
    }

    function O(t, e) {
      return f(n.timeSunday.count((0, n.timeYear)(t), t), e, 2);
    }

    function P(t, e) {
      var r = t.getDay();
      return t = r >= 4 || 0 === r ? (0, n.timeThursday)(t) : n.timeThursday.ceil(t), f(n.timeThursday.count((0, n.timeYear)(t), t) + (4 === (0, n.timeYear)(t).getDay()), e, 2);
    }

    function $(n) {
      return n.getDay();
    }

    function q(t, e) {
      return f(n.timeMonday.count((0, n.timeYear)(t), t), e, 2);
    }

    function z(n, t) {
      return f(n.getFullYear() % 100, t, 2);
    }

    function E(n, t) {
      return f(n.getFullYear() % 1e4, t, 4);
    }

    function R(n) {
      var t = n.getTimezoneOffset();
      return (t > 0 ? "-" : (t *= -1, "+")) + f(t / 60 | 0, "0", 2) + f(t % 60, "0", 2);
    }

    function k(n, t) {
      return f(n.getUTCDate(), t, 2);
    }

    function G(n, t) {
      return f(n.getUTCHours(), t, 2);
    }

    function J(n, t) {
      return f(n.getUTCHours() % 12 || 12, t, 2);
    }

    function K(t, e) {
      return f(1 + n.utcDay.count((0, n.utcYear)(t), t), e, 3);
    }

    function N(n, t) {
      return f(n.getUTCMilliseconds(), t, 3);
    }

    function nn(n, t) {
      return N(n, t) + "000";
    }

    function tn(n, t) {
      return f(n.getUTCMonth() + 1, t, 2);
    }

    function en(n, t) {
      return f(n.getUTCMinutes(), t, 2);
    }

    function rn(n, t) {
      return f(n.getUTCSeconds(), t, 2);
    }

    function un(n) {
      var t = n.getUTCDay();
      return 0 === t ? 7 : t;
    }

    function cn(t, e) {
      return f(n.utcSunday.count((0, n.utcYear)(t), t), e, 2);
    }

    function on(t, e) {
      var r = t.getUTCDay();
      return t = r >= 4 || 0 === r ? (0, n.utcThursday)(t) : n.utcThursday.ceil(t), f(n.utcThursday.count((0, n.utcYear)(t), t) + (4 === (0, n.utcYear)(t).getUTCDay()), e, 2);
    }

    function an(n) {
      return n.getUTCDay();
    }

    function fn(t, e) {
      return f(n.utcMonday.count((0, n.utcYear)(t), t), e, 2);
    }

    function ln(n, t) {
      return f(n.getUTCFullYear() % 100, t, 2);
    }

    function gn(n, t) {
      return f(n.getUTCFullYear() % 1e4, t, 4);
    }

    function sn() {
      return "+0000";
    }

    function hn() {
      return "%";
    }

    function yn(n) {
      return +n;
    }

    function dn(n) {
      return Math.floor(+n / 1e3);
    }
  }, {
    "d3-time": "F00f"
  }],
  "LmVV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p, exports.utcParse = exports.utcFormat = exports.timeParse = exports.timeFormat = void 0;
    var e,
        t,
        r,
        a,
        o,
        s = u(require("./locale"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function p(u) {
      return e = (0, s.default)(u), exports.timeFormat = t = e.format, exports.timeParse = r = e.parse, exports.utcFormat = a = e.utcFormat, exports.utcParse = o = e.utcParse, e;
    }

    exports.timeFormat = t, exports.timeParse = r, exports.utcFormat = a, exports.utcParse = o, p({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
  }, {
    "./locale": "rf9h"
  }],
  "UFnF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.isoSpecifier = void 0;

    var e = require("./defaultLocale"),
        t = "%Y-%m-%dT%H:%M:%S.%LZ";

    function r(e) {
      return e.toISOString();
    }

    exports.isoSpecifier = t;
    var o = Date.prototype.toISOString ? r : (0, e.utcFormat)(t),
        i = o;
    exports.default = i;
  }, {
    "./defaultLocale": "LmVV"
  }],
  "hAdq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("./isoFormat"),
        r = require("./defaultLocale");

    function t(e) {
      var r = new Date(e);
      return isNaN(r) ? null : r;
    }

    var a = +new Date("2000-01-01T00:00:00.000Z") ? t : (0, r.utcParse)(e.isoSpecifier),
        u = a;
    exports.default = u;
  }, {
    "./isoFormat": "UFnF",
    "./defaultLocale": "LmVV"
  }],
  "+7zs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "timeFormatDefaultLocale", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "timeFormat", {
      enumerable: !0,
      get: function get() {
        return e.timeFormat;
      }
    }), Object.defineProperty(exports, "timeParse", {
      enumerable: !0,
      get: function get() {
        return e.timeParse;
      }
    }), Object.defineProperty(exports, "utcFormat", {
      enumerable: !0,
      get: function get() {
        return e.utcFormat;
      }
    }), Object.defineProperty(exports, "utcParse", {
      enumerable: !0,
      get: function get() {
        return e.utcParse;
      }
    }), Object.defineProperty(exports, "timeFormatLocale", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "isoFormat", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "isoParse", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    });
    var e = a(require("./defaultLocale")),
        t = o(require("./locale")),
        r = o(require("./isoFormat")),
        n = o(require("./isoParse"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return u = function u() {
        return e;
      }, e;
    }

    function a(e) {
      if (e && e.__esModule) return e;
      var t = u();
      if (t && t.has(e)) return t.get(e);
      var r = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in e) {
          if (Object.prototype.hasOwnProperty.call(e, o)) {
            var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o];
          }
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }
  }, {
    "./defaultLocale": "LmVV",
    "./locale": "rf9h",
    "./isoFormat": "UFnF",
    "./isoParse": "hAdq"
  }],
  "QHrh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.calendar = M, exports.default = b;

    var e = require("d3-array"),
        t = require("d3-time"),
        r = require("d3-time-format"),
        n = c(require("./continuous.js")),
        i = require("./init.js"),
        u = a(require("./nice.js"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return o = function o() {
        return e;
      }, e;
    }

    function c(e) {
      if (e && e.__esModule) return e;
      var t = o();
      if (t && t.has(e)) return t.get(e);
      var r = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var i in e) {
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var u = n ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set) ? Object.defineProperty(r, i, u) : r[i] = e[i];
          }
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    var f = 1e3,
        l = 60 * f,
        p = 60 * l,
        s = 24 * p,
        d = 7 * s,
        m = 30 * s,
        v = 365 * s;

    function y(e) {
      return new Date(e);
    }

    function g(e) {
      return e instanceof Date ? +e : +new Date(+e);
    }

    function M(t, r, i, a, o, c, b, h, j) {
      var w = (0, n.default)(),
          D = w.invert,
          O = w.domain,
          k = j(".%L"),
          q = j(":%S"),
          P = j("%I:%M"),
          _ = j("%I %p"),
          x = j("%a %d"),
          S = j("%b %d"),
          W = j("%B"),
          F = j("%Y"),
          I = [[b, 1, f], [b, 5, 5 * f], [b, 15, 15 * f], [b, 30, 30 * f], [c, 1, l], [c, 5, 5 * l], [c, 15, 15 * l], [c, 30, 30 * l], [o, 1, p], [o, 3, 3 * p], [o, 6, 6 * p], [o, 12, 12 * p], [a, 1, s], [a, 2, 2 * s], [i, 1, d], [r, 1, m], [r, 3, 3 * m], [t, 1, v]];

      function Y(e) {
        return (b(e) < e ? k : c(e) < e ? q : o(e) < e ? P : a(e) < e ? _ : r(e) < e ? i(e) < e ? x : S : t(e) < e ? W : F)(e);
      }

      function A(r, n, i) {
        if (null == r && (r = 10), "number" == typeof r) {
          var u,
              a = Math.abs(i - n) / r,
              o = (0, e.bisector)(function (e) {
            return e[2];
          }).right(I, a);
          return o === I.length ? (u = (0, e.tickStep)(n / v, i / v, r), r = t) : o ? (u = (o = I[a / I[o - 1][2] < I[o][2] / a ? o - 1 : o])[1], r = o[0]) : (u = Math.max((0, e.tickStep)(n, i, r), 1), r = h), r.every(u);
        }

        return r;
      }

      return w.invert = function (e) {
        return new Date(D(e));
      }, w.domain = function (e) {
        return arguments.length ? O(Array.from(e, g)) : O().map(y);
      }, w.ticks = function (e) {
        var t,
            r = O(),
            n = r[0],
            i = r[r.length - 1],
            u = i < n;
        return u && (t = n, n = i, i = t), t = (t = A(e, n, i)) ? t.range(n, i + 1) : [], u ? t.reverse() : t;
      }, w.tickFormat = function (e, t) {
        return null == t ? Y : j(t);
      }, w.nice = function (e) {
        var t = O();
        return (e = A(e, t[0], t[t.length - 1])) ? O((0, u.default)(t, e)) : w;
      }, w.copy = function () {
        return (0, n.copy)(w, M(t, r, i, a, o, c, b, h, j));
      }, w;
    }

    function b() {
      return i.initRange.apply(M(t.timeYear, t.timeMonth, t.timeWeek, t.timeDay, t.timeHour, t.timeMinute, t.timeSecond, t.timeMillisecond, r.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "d3-time": "F00f",
    "d3-time-format": "+7zs",
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr",
    "./nice.js": "gRJQ"
  }],
  "D6Mr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("./time.js"),
        t = require("d3-time-format"),
        r = require("d3-time"),
        u = require("./init.js");

    function i() {
      return u.initRange.apply((0, e.calendar)(r.utcYear, r.utcMonth, r.utcWeek, r.utcDay, r.utcHour, r.utcMinute, r.utcSecond, r.utcMillisecond, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
    }
  }, {
    "./time.js": "QHrh",
    "d3-time-format": "+7zs",
    "d3-time": "F00f",
    "./init.js": "aZlr"
  }],
  "O1DZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.copy = a, exports.default = p, exports.sequentialLog = l, exports.sequentialSymlog = s, exports.sequentialPow = c, exports.sequentialSqrt = f;

    var n = require("./continuous.js"),
        t = require("./init.js"),
        r = require("./linear.js"),
        e = require("./log.js"),
        o = require("./symlog.js"),
        i = require("./pow.js");

    function u() {
      var t,
          r,
          e,
          o,
          i,
          u = 0,
          a = 1,
          p = n.identity,
          l = !1;

      function s(n) {
        return isNaN(n = +n) ? i : p(0 === e ? .5 : (n = (o(n) - t) * e, l ? Math.max(0, Math.min(1, n)) : n));
      }

      return s.domain = function (n) {
        var _n10, _n11;

        return arguments.length ? ((_n10 = n, _n11 = _slicedToArray(_n10, 2), u = _n11[0], a = _n11[1], _n10), t = o(u = +u), r = o(a = +a), e = t === r ? 0 : 1 / (r - t), s) : [u, a];
      }, s.clamp = function (n) {
        return arguments.length ? (l = !!n, s) : l;
      }, s.interpolator = function (n) {
        return arguments.length ? (p = n, s) : p;
      }, s.range = function () {
        return [p(0), p(1)];
      }, s.unknown = function (n) {
        return arguments.length ? (i = n, s) : i;
      }, function (n) {
        return o = n, t = n(u), r = n(a), e = t === r ? 0 : 1 / (r - t), s;
      };
    }

    function a(n, t) {
      return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown());
    }

    function p() {
      var e = (0, r.linearish)(u()(n.identity));
      return e.copy = function () {
        return a(e, p());
      }, t.initInterpolator.apply(e, arguments);
    }

    function l() {
      var n = (0, e.loggish)(u()).domain([1, 10]);
      return n.copy = function () {
        return a(n, l()).base(n.base());
      }, t.initInterpolator.apply(n, arguments);
    }

    function s() {
      var n = (0, o.symlogish)(u());
      return n.copy = function () {
        return a(n, s()).constant(n.constant());
      }, t.initInterpolator.apply(n, arguments);
    }

    function c() {
      var n = (0, i.powish)(u());
      return n.copy = function () {
        return a(n, c()).exponent(n.exponent());
      }, t.initInterpolator.apply(n, arguments);
    }

    function f() {
      return c.apply(null, arguments).exponent(.5);
    }
  }, {
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr",
    "./linear.js": "VMtl",
    "./log.js": "X3YW",
    "./symlog.js": "Prec",
    "./pow.js": "/yse"
  }],
  "Y40z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var n = require("d3-array"),
        e = require("./continuous.js"),
        r = require("./init.js");

    function t() {
      var i = [],
          u = e.identity;

      function o(e) {
        if (!isNaN(e = +e)) return u(((0, n.bisect)(i, e, 1) - 1) / (i.length - 1));
      }

      return o.domain = function (e) {
        if (!arguments.length) return i.slice();
        i = [];
        var _iteratorNormalCompletion33 = true;
        var _didIteratorError33 = false;
        var _iteratorError33 = undefined;

        try {
          for (var _iterator33 = e[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
            var _n12 = _step33.value;
            null == _n12 || isNaN(_n12 = +_n12) || i.push(_n12);
          }
        } catch (err) {
          _didIteratorError33 = true;
          _iteratorError33 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion33 && _iterator33.return != null) {
              _iterator33.return();
            }
          } finally {
            if (_didIteratorError33) {
              throw _iteratorError33;
            }
          }
        }

        return i.sort(n.ascending), o;
      }, o.interpolator = function (n) {
        return arguments.length ? (u = n, o) : u;
      }, o.range = function () {
        return i.map(function (n, e) {
          return u(e / (i.length - 1));
        });
      }, o.copy = function () {
        return t(u).domain(i);
      }, r.initInterpolator.apply(o, arguments);
    }
  }, {
    "d3-array": "cBuZ",
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr"
  }],
  "shE4": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.divergingLog = c, exports.divergingSymlog = s, exports.divergingPow = l, exports.divergingSqrt = g;

    var n = require("./continuous.js"),
        r = require("./init.js"),
        t = require("./linear.js"),
        e = require("./log.js"),
        o = require("./sequential.js"),
        i = require("./symlog.js"),
        u = require("./pow.js");

    function p() {
      var r,
          t,
          e,
          o,
          i,
          u,
          p,
          a = 0,
          c = .5,
          s = 1,
          l = 1,
          g = n.identity,
          f = !1;

      function y(n) {
        return isNaN(n = +n) ? p : (n = .5 + ((n = +u(n)) - t) * (l * n < l * t ? o : i), g(f ? Math.max(0, Math.min(1, n)) : n));
      }

      return y.domain = function (n) {
        var _n13, _n14;

        return arguments.length ? ((_n13 = n, _n14 = _slicedToArray(_n13, 3), a = _n14[0], c = _n14[1], s = _n14[2], _n13), r = u(a = +a), t = u(c = +c), e = u(s = +s), o = r === t ? 0 : .5 / (t - r), i = t === e ? 0 : .5 / (e - t), l = t < r ? -1 : 1, y) : [a, c, s];
      }, y.clamp = function (n) {
        return arguments.length ? (f = !!n, y) : f;
      }, y.interpolator = function (n) {
        return arguments.length ? (g = n, y) : g;
      }, y.range = function () {
        return [g(0), g(.5), g(1)];
      }, y.unknown = function (n) {
        return arguments.length ? (p = n, y) : p;
      }, function (n) {
        return u = n, r = n(a), t = n(c), e = n(s), o = r === t ? 0 : .5 / (t - r), i = t === e ? 0 : .5 / (e - t), l = t < r ? -1 : 1, y;
      };
    }

    function a() {
      var e = (0, t.linearish)(p()(n.identity));
      return e.copy = function () {
        return (0, o.copy)(e, a());
      }, r.initInterpolator.apply(e, arguments);
    }

    function c() {
      var n = (0, e.loggish)(p()).domain([.1, 1, 10]);
      return n.copy = function () {
        return (0, o.copy)(n, c()).base(n.base());
      }, r.initInterpolator.apply(n, arguments);
    }

    function s() {
      var n = (0, i.symlogish)(p());
      return n.copy = function () {
        return (0, o.copy)(n, s()).constant(n.constant());
      }, r.initInterpolator.apply(n, arguments);
    }

    function l() {
      var n = (0, u.powish)(p());
      return n.copy = function () {
        return (0, o.copy)(n, l()).exponent(n.exponent());
      }, r.initInterpolator.apply(n, arguments);
    }

    function g() {
      return l.apply(null, arguments).exponent(.5);
    }
  }, {
    "./continuous.js": "ZpMB",
    "./init.js": "aZlr",
    "./linear.js": "VMtl",
    "./log.js": "X3YW",
    "./sequential.js": "O1DZ",
    "./symlog.js": "Prec",
    "./pow.js": "/yse"
  }],
  "zt+a": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "scaleBand", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "scalePoint", {
      enumerable: !0,
      get: function get() {
        return e.point;
      }
    }), Object.defineProperty(exports, "scaleIdentity", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "scaleLinear", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "scaleLog", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "scaleSymlog", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "scaleOrdinal", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "scaleImplicit", {
      enumerable: !0,
      get: function get() {
        return i.implicit;
      }
    }), Object.defineProperty(exports, "scalePow", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "scaleSqrt", {
      enumerable: !0,
      get: function get() {
        return o.sqrt;
      }
    }), Object.defineProperty(exports, "scaleRadial", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "scaleQuantile", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "scaleQuantize", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "scaleThreshold", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "scaleTime", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "scaleUtc", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "scaleSequential", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "scaleSequentialLog", {
      enumerable: !0,
      get: function get() {
        return d.sequentialLog;
      }
    }), Object.defineProperty(exports, "scaleSequentialPow", {
      enumerable: !0,
      get: function get() {
        return d.sequentialPow;
      }
    }), Object.defineProperty(exports, "scaleSequentialSqrt", {
      enumerable: !0,
      get: function get() {
        return d.sequentialSqrt;
      }
    }), Object.defineProperty(exports, "scaleSequentialSymlog", {
      enumerable: !0,
      get: function get() {
        return d.sequentialSymlog;
      }
    }), Object.defineProperty(exports, "scaleSequentialQuantile", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "scaleDiverging", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "scaleDivergingLog", {
      enumerable: !0,
      get: function get() {
        return b.divergingLog;
      }
    }), Object.defineProperty(exports, "scaleDivergingPow", {
      enumerable: !0,
      get: function get() {
        return b.divergingPow;
      }
    }), Object.defineProperty(exports, "scaleDivergingSqrt", {
      enumerable: !0,
      get: function get() {
        return b.divergingSqrt;
      }
    }), Object.defineProperty(exports, "scaleDivergingSymlog", {
      enumerable: !0,
      get: function get() {
        return b.divergingSymlog;
      }
    }), Object.defineProperty(exports, "tickFormat", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    });
    var e = P(require("./band.js")),
        r = y(require("./identity.js")),
        t = y(require("./linear.js")),
        n = y(require("./log.js")),
        u = y(require("./symlog.js")),
        i = P(require("./ordinal.js")),
        o = P(require("./pow.js")),
        a = y(require("./radial.js")),
        l = y(require("./quantile.js")),
        c = y(require("./quantize.js")),
        s = y(require("./threshold.js")),
        f = y(require("./time.js")),
        p = y(require("./utcTime.js")),
        d = P(require("./sequential.js")),
        g = y(require("./sequentialQuantile.js")),
        b = P(require("./diverging.js")),
        j = y(require("./tickFormat.js"));

    function y(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function m() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return m = function m() {
        return e;
      }, e;
    }

    function P(e) {
      if (e && e.__esModule) return e;
      var r = m();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }
  }, {
    "./band.js": "rJZF",
    "./identity.js": "eP89",
    "./linear.js": "VMtl",
    "./log.js": "X3YW",
    "./symlog.js": "Prec",
    "./ordinal.js": "ELIM",
    "./pow.js": "/yse",
    "./radial.js": "OJb5",
    "./quantile.js": "fsZk",
    "./quantize.js": "8Z2c",
    "./threshold.js": "odYE",
    "./time.js": "QHrh",
    "./utcTime.js": "D6Mr",
    "./sequential.js": "O1DZ",
    "./sequentialQuantile.js": "Y40z",
    "./diverging.js": "shE4",
    "./tickFormat.js": "m0SA"
  }],
  "yemg": [function (require, module, exports) {
    "use strict";

    function t(t, e, o, n, r) {
      var s = t.length;
      var c = 0,
          i = 0;

      for (var l = 0; l < s; l++) {
        var p = t[l],
            u = e(p),
            a = o(p),
            d = r(u);
        c += Math.pow(a - d, 2), i += Math.pow(a - n / s, 2);
      }

      return 1 - c / i;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.determination = t;
  }, {}],
  "UFyd": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;

    var t = require("./utils/determination");

    function e() {
      var e,
          n = function n(t) {
        return t[0];
      },
          r = function r(t) {
        return t[1];
      };

      function i(i) {
        var u = i.length,
            l = 0,
            o = 0,
            c = 0,
            s = 0,
            a = 0,
            d = e ? +e[0] : 1 / 0,
            f = e ? +e[1] : -1 / 0;

        for (var _t10 = 0; _t10 < u; _t10++) {
          var _u2 = i[_t10],
              _g = n(_u2, _t10, i),
              _h = r(_u2, _t10, i);

          null != _g && isFinite(_g) && null != _h && isFinite(_h) && (l++, o += _g, c += _h, s += _g * _h, a += _g * _g, e || (_g < d && (d = _g), _g > f && (f = _g)));
        }

        var g = ((u = l) * s - o * c) / (u * a - o * o),
            h = (c - g * o) / u,
            p = function p(t) {
          return g * t + h;
        },
            m = (0, t.determination)(i, n, r, c, p),
            x = [[d, d * g + h], [f, f * g + h]];

        return x.a = g, x.b = h, x.predict = p, x.rSquared = m, x;
      }

      return i.domain = function (t) {
        return arguments.length ? (e = t, i) : e;
      }, i.x = function (t) {
        return arguments.length ? (n = t, i) : n;
      }, i.y = function (t) {
        return arguments.length ? (r = t, i) : r;
      }, i;
    }
  }, {
    "./utils/determination": "yemg"
  }],
  "nYdR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.barVertical = o;

    var t = require("d3-selection");

    require("d3-transition");

    var a = require("d3-scale"),
        r = require("./helpers/numberFormat.js"),
        e = require("./helpers/getFontCss.js"),
        n = require("./helpers/clearChart.js"),
        i = l(require("d3-regression/src/linear.js"));

    function l(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = "\n".concat((0, e.getFontCss)(["roboto-400"]), "\ntext {\n  font-family: Roboto, sans-serif;\n  font-size: 13px;\n  fill: #555;\n}\n.chart-axis-line,\n.chart-tick {\n  fill: #595959;\n}\n.bar-group .chart-value {\n  display: none;\n}\n.bar-group:hover .chart-value {\n  display: block;\n}\n.regression-line {\n  stroke: #666;\n  stroke-dasharray: 6 4;\n  stroke-width: 2;\n}\n");

    function o(e) {
      var l = e.data,
          o = e.color,
          s = e.height,
          u = e.width,
          h = e.onClick,
          d = e.withinElement,
          p = e.animationDuration,
          f = void 0 === p ? 500 : p,
          x = e.animationOffset,
          y = void 0 === x ? 40 : x,
          v = 13,
          m = .75 * v,
          b = 4,
          g = 3 * b,
          k = b + v + m + 5,
          w = 5,
          q = l.map(function (t) {
        return t.value;
      }),
          F = Math.max.apply(null, q),
          j = String((0, r.numberFormat)(F)).length * v / 2 + 7,
          C = j + 2 * b,
          _ = 16 + g,
          M = u - j - 4 * b,
          A = s - k - _,
          O = _ + A,
          Y = (M - (b * l.length - 1)) / l.length,
          z = A / F;

      (0, n.clearChart)(d);

      var D = function (a) {
        var r = (0, t.select)(a).append("svg").attr("class", "sh-chart-bar-vertical").attr("width", u).attr("height", s);
        return r.append("style").text(c), r;
      }(d),
          E = function (t) {
        return t.selectAll("g").data(l).enter().append("g").attr("class", "bar-group").attr("transform", function (t, a) {
          var r = a * (Y + b) + C + b / 2,
              e = _;
          return "translate(".concat(r, ", ").concat(e, ")");
        }).style("cursor", h ? "pointer" : "default").on("click", h);
      }(D);

      !function (t) {
        t.append("rect").attr("class", "chart-bar").attr("x", 0).attr("y", function (t) {
          return (F - t.value) * z;
        }).attr("width", Y).attr("height", function (t) {
          return t.value * z;
        }).attr("fill", o).style("transform-origin", "0 ".concat(A, "px")).style("opacity", 0).style("transform", "scaleY(0.25)").transition().duration(f).delay(function (t, a) {
          return y * a;
        }).style("opacity", 1).style("transform", "scaleY(1)");
      }(E), function (t) {
        t.append("rect").attr("class", "chart-tick").attr("x", Y / 2 + 1).attr("y", A + b).attr("width", 1).attr("height", 8);
      }(E), function (t) {
        t.append("text").attr("class", "chart-axis-label chart-x-axis-label").attr("x", Y / 2 + 1).attr("y", A + b + m + v).attr("text-anchor", "middle").text(function (t) {
          return t.label;
        });
      }(E), function (t) {
        t.append("rect").attr("class", "chart-axis-line chart-x-axis-line").attr("x", C - b).attr("y", O + b).attr("width", M + 2 * b).attr("height", 1);
      }(D), function (t) {
        t.append("text").attr("class", "chart-value").attr("x", Y / 2 - .5).attr("y", function (t) {
          return (F - t.value) * z - g;
        }).attr("width", Y).attr("text-anchor", "middle").text(function (t) {
          return (0, r.numberFormat)(t.value);
        }).attr("fill", "#777").style("opacity", 0).transition().duration(f).delay(function (t, a) {
          return y * a;
        }).style("opacity", 1);
      }(E), function (t) {
        var e = (0, a.scaleLinear)().domain([0, F]).nice().ticks(w + 1).map(function (t) {
          return t > 1.02 * F ? {
            label: "",
            value: t
          } : {
            label: (0, r.numberFormat)(t),
            value: t
          };
        }),
            n = O + v / 2 + 1;
        t.selectAll(".chart-y-axis-label").data(e).enter().append("text").attr("class", "chart-axis-label chart-y-axis-label").attr("text-anchor", "end").attr("x", C - 3 * b).attr("y", function (t) {
          return n - t.value * z;
        }).text(function (t) {
          return t.label;
        });
      }(D), function (t) {
        var a = l.map(function (t, a) {
          return [a, t.value];
        }),
            r = (0, i.default)().domain([0, q.length])(a);
        t.append("line").attr("class", "regression-line").attr("x1", C + b + Y / 2).attr("y1", _ + (A - r[0][1] * z)).attr("x2", C + M - b - Y / 2).attr("y2", _ + (A - r[1][1] * z));
      }(D);
    }
  }, {
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "d3-scale": "zt+a",
    "./helpers/numberFormat.js": "xUTH",
    "./helpers/getFontCss.js": "fdMH",
    "./helpers/clearChart.js": "0Zyt",
    "d3-regression/src/linear.js": "UFyd"
  }],
  "brcY": [function (require, module, exports) {
    "use strict";

    function n(n, r) {
      return n.parent === r.parent ? 1 : 2;
    }

    function r(n) {
      return n.reduce(e, 0) / n.length;
    }

    function e(n, r) {
      return n + r.x;
    }

    function t(n) {
      return 1 + n.reduce(u, 0);
    }

    function u(n, r) {
      return Math.max(n, r.y);
    }

    function c(n) {
      for (var r; r = n.children;) {
        n = r[0];
      }

      return n;
    }

    function i(n) {
      for (var r; r = n.children;) {
        n = r[r.length - 1];
      }

      return n;
    }

    function o() {
      var e = n,
          u = 1,
          o = 1,
          f = !1;

      function a(n) {
        var a,
            l = 0;
        n.eachAfter(function (n) {
          var u = n.children;
          u ? (n.x = r(u), n.y = t(u)) : (n.x = a ? l += e(n, a) : 0, n.y = 0, a = n);
        });
        var x = c(n),
            h = i(n),
            y = x.x - e(x, h) / 2,
            d = h.x + e(h, x) / 2;
        return n.eachAfter(f ? function (r) {
          r.x = (r.x - n.x) * u, r.y = (n.y - r.y) * o;
        } : function (r) {
          r.x = (r.x - y) / (d - y) * u, r.y = (1 - (n.y ? r.y / n.y : 1)) * o;
        });
      }

      return a.separation = function (n) {
        return arguments.length ? (e = n, a) : e;
      }, a.size = function (n) {
        return arguments.length ? (f = !1, u = +n[0], o = +n[1], a) : f ? null : [u, o];
      }, a.nodeSize = function (n) {
        return arguments.length ? (f = !0, u = +n[0], o = +n[1], a) : f ? [u, o] : null;
      }, a;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
  }, {}],
  "7jJj": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var t = 0,
          r = e.children,
          u = r && r.length;
      if (u) for (; --u >= 0;) {
        t += r[u].value;
      } else t = 1;
      e.value = t;
    }

    function t() {
      return this.eachAfter(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "YN75": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r,
          t,
          o,
          s,
          i = this,
          h = [i];

      do {
        for (r = h.reverse(), h = []; i = r.pop();) {
          if (e(i), t = i.children) for (o = 0, s = t.length; o < s; ++o) {
            h.push(t[o]);
          }
        }
      } while (h.length);

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "b04E": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var t, r, o = this, s = [o]; o = s.pop();) {
        if (e(o), t = o.children) for (r = t.length - 1; r >= 0; --r) {
          s.push(t[r]);
        }
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "oHKJ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r, t, o, p = this, s = [p], u = []; p = s.pop();) {
        if (u.push(p), r = p.children) for (t = 0, o = r.length; t < o; ++t) {
          s.push(r[t]);
        }
      }

      for (; p = u.pop();) {
        e(p);
      }

      return this;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "Btd4": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return this.eachAfter(function (t) {
        for (var r = +e(t.data) || 0, u = t.children, a = u && u.length; --a >= 0;) {
          r += u[a].value;
        }

        t.value = r;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "q7tv": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return this.eachBefore(function (t) {
        t.children && t.children.sort(e);
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "5x0Y": [function (require, module, exports) {
    "use strict";

    function r(r) {
      for (var t = this, o = e(t, r), p = [t]; t !== o;) {
        t = t.parent, p.push(t);
      }

      for (var n = p.length; r !== o;) {
        p.splice(n, 0, r), r = r.parent;
      }

      return p;
    }

    function e(r, e) {
      if (r === e) return r;
      var t = r.ancestors(),
          o = e.ancestors(),
          p = null;

      for (r = t.pop(), e = o.pop(); r === e;) {
        p = r, r = t.pop(), e = o.pop();
      }

      return p;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
  }, {}],
  "fOge": [function (require, module, exports) {
    "use strict";

    function e() {
      for (var e = this, t = [e]; e = e.parent;) {
        t.push(e);
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "chHE": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.each(function (t) {
        e.push(t);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "+Res": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = [];
      return this.eachBefore(function (t) {
        t.children || e.push(t);
      }), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "gBUX": [function (require, module, exports) {
    "use strict";

    function e() {
      var e = this,
          t = [];
      return e.each(function (r) {
        r !== e && t.push({
          source: r.parent,
          target: r
        });
      }), t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "LCo+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c, exports.computeHeight = v, exports.Node = g;
    var e = s(require("./count")),
        t = s(require("./each")),
        r = s(require("./eachBefore")),
        a = s(require("./eachAfter")),
        u = s(require("./sum")),
        n = s(require("./sort")),
        o = s(require("./path")),
        i = s(require("./ancestors")),
        d = s(require("./descendants")),
        l = s(require("./leaves")),
        h = s(require("./links"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e, t) {
      var r,
          a,
          u,
          n,
          o,
          i = new g(e),
          d = +e.value && (i.value = e.value),
          l = [i];

      for (null == t && (t = p); r = l.pop();) {
        if (d && (r.value = +r.data.value), (u = t(r.data)) && (o = u.length)) for (r.children = new Array(o), n = o - 1; n >= 0; --n) {
          l.push(a = r.children[n] = new g(u[n])), a.parent = r, a.depth = r.depth + 1;
        }
      }

      return i.eachBefore(v);
    }

    function f() {
      return c(this).eachBefore(q);
    }

    function p(e) {
      return e.children;
    }

    function q(e) {
      e.data = e.data.data;
    }

    function v(e) {
      var t = 0;

      do {
        e.height = t;
      } while ((e = e.parent) && e.height < ++t);
    }

    function g(e) {
      this.data = e, this.depth = this.height = 0, this.parent = null;
    }

    g.prototype = c.prototype = {
      constructor: g,
      count: e.default,
      each: t.default,
      eachAfter: a.default,
      eachBefore: r.default,
      sum: u.default,
      sort: n.default,
      path: o.default,
      ancestors: i.default,
      descendants: d.default,
      leaves: l.default,
      links: h.default,
      copy: f
    };
  }, {
    "./count": "7jJj",
    "./each": "YN75",
    "./eachBefore": "b04E",
    "./eachAfter": "oHKJ",
    "./sum": "Btd4",
    "./sort": "q7tv",
    "./path": "5x0Y",
    "./ancestors": "fOge",
    "./descendants": "chHE",
    "./leaves": "+Res",
    "./links": "gBUX"
  }],
  "Wl9w": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.shuffle = r, exports.slice = void 0;
    var e = Array.prototype.slice;

    function r(e) {
      for (var r, t, o = e.length; o;) {
        t = Math.random() * o-- | 0, r = e[o], e[o] = e[t], e[t] = r;
      }

      return e;
    }

    exports.slice = e;
  }, {}],
  "ZzhU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var r = require("../array");

    function t(t) {
      for (var n, f, a = 0, i = (t = (0, r.shuffle)(r.slice.call(t))).length, c = []; a < i;) {
        n = t[a], f && u(f, n) ? ++a : (f = o(c = e(c, n)), a = 0);
      }

      return f;
    }

    function e(r, t) {
      var e, u;
      if (f(t, r)) return [t];

      for (e = 0; e < r.length; ++e) {
        if (n(t, r[e]) && f(i(r[e], t), r)) return [r[e], t];
      }

      for (e = 0; e < r.length - 1; ++e) {
        for (u = e + 1; u < r.length; ++u) {
          if (n(i(r[e], r[u]), t) && n(i(r[e], t), r[u]) && n(i(r[u], t), r[e]) && f(c(r[e], r[u], t), r)) return [r[e], r[u], t];
        }
      }

      throw new Error();
    }

    function n(r, t) {
      var e = r.r - t.r,
          n = t.x - r.x,
          u = t.y - r.y;
      return e < 0 || e * e < n * n + u * u;
    }

    function u(r, t) {
      var e = r.r - t.r + 1e-6,
          n = t.x - r.x,
          u = t.y - r.y;
      return e > 0 && e * e > n * n + u * u;
    }

    function f(r, t) {
      for (var e = 0; e < t.length; ++e) {
        if (!u(r, t[e])) return !1;
      }

      return !0;
    }

    function o(r) {
      switch (r.length) {
        case 1:
          return a(r[0]);

        case 2:
          return i(r[0], r[1]);

        case 3:
          return c(r[0], r[1], r[2]);
      }
    }

    function a(r) {
      return {
        x: r.x,
        y: r.y,
        r: r.r
      };
    }

    function i(r, t) {
      var e = r.x,
          n = r.y,
          u = r.r,
          f = t.x,
          o = t.y,
          a = t.r,
          i = f - e,
          c = o - n,
          x = a - u,
          y = Math.sqrt(i * i + c * c);
      return {
        x: (e + f + i / y * x) / 2,
        y: (n + o + c / y * x) / 2,
        r: (y + u + a) / 2
      };
    }

    function c(r, t, e) {
      var n = r.x,
          u = r.y,
          f = r.r,
          o = t.x,
          a = t.y,
          i = t.r,
          c = e.x,
          x = e.y,
          y = e.r,
          l = n - o,
          s = n - c,
          h = u - a,
          v = u - x,
          g = i - f,
          d = y - f,
          p = n * n + u * u - f * f,
          q = p - o * o - a * a + i * i,
          w = p - c * c - x * x + y * y,
          M = s * h - l * v,
          _ = (h * w - v * q) / (2 * M) - n,
          b = (v * g - h * d) / M,
          j = (s * q - l * w) / (2 * M) - u,
          E = (l * d - s * g) / M,
          O = b * b + E * E - 1,
          P = 2 * (f + _ * b + j * E),
          k = _ * _ + j * j - f * f,
          m = -(O ? (P + Math.sqrt(P * P - 4 * O * k)) / (2 * O) : k / P);

      return {
        x: n + _ + b * m,
        y: u + j + E * m,
        r: m
      };
    }
  }, {
    "../array": "Wl9w"
  }],
  "efS5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.packEnclose = i, exports.default = o;
    var r = e(require("./enclose"));

    function e(r) {
      return r && r.__esModule ? r : {
        default: r
      };
    }

    function t(r, e, t) {
      var n,
          u,
          x,
          i,
          o = r.x - e.x,
          s = r.y - e.y,
          f = o * o + s * s;
      f ? (u = e.r + t.r, u *= u, i = r.r + t.r, u > (i *= i) ? (n = (f + i - u) / (2 * f), x = Math.sqrt(Math.max(0, i / f - n * n)), t.x = r.x - n * o - x * s, t.y = r.y - n * s + x * o) : (n = (f + u - i) / (2 * f), x = Math.sqrt(Math.max(0, u / f - n * n)), t.x = e.x + n * o - x * s, t.y = e.y + n * s + x * o)) : (t.x = e.x + t.r, t.y = e.y);
    }

    function n(r, e) {
      var t = r.r + e.r - 1e-6,
          n = e.x - r.x,
          u = e.y - r.y;
      return t > 0 && t * t > n * n + u * u;
    }

    function u(r) {
      var e = r._,
          t = r.next._,
          n = e.r + t.r,
          u = (e.x * t.r + t.x * e.r) / n,
          x = (e.y * t.r + t.y * e.r) / n;
      return u * u + x * x;
    }

    function x(r) {
      this._ = r, this.next = null, this.previous = null;
    }

    function i(e) {
      if (!(f = e.length)) return 0;

      var i, o, s, f, _, y, a, p, v, l, c;

      if ((i = e[0]).x = 0, i.y = 0, !(f > 1)) return i.r;
      if (o = e[1], i.x = -o.r, o.x = i.r, o.y = 0, !(f > 2)) return i.r + o.r;
      t(o, i, s = e[2]), i = new x(i), o = new x(o), s = new x(s), i.next = s.previous = o, o.next = i.previous = s, s.next = o.previous = i;

      r: for (a = 3; a < f; ++a) {
        t(i._, o._, s = e[a]), s = new x(s), p = o.next, v = i.previous, l = o._.r, c = i._.r;

        do {
          if (l <= c) {
            if (n(p._, s._)) {
              o = p, i.next = o, o.previous = i, --a;
              continue r;
            }

            l += p._.r, p = p.next;
          } else {
            if (n(v._, s._)) {
              (i = v).next = o, o.previous = i, --a;
              continue r;
            }

            c += v._.r, v = v.previous;
          }
        } while (p !== v.next);

        for (s.previous = i, s.next = o, i.next = o.previous = o = s, _ = u(i); (s = s.next) !== o;) {
          (y = u(s)) < _ && (i = s, _ = y);
        }

        o = i.next;
      }

      for (i = [o._], s = o; (s = s.next) !== o;) {
        i.push(s._);
      }

      for (s = (0, r.default)(i), a = 0; a < f; ++a) {
        (i = e[a]).x -= s.x, i.y -= s.y;
      }

      return s.r;
    }

    function o(r) {
      return i(r), r;
    }
  }, {
    "./enclose": "ZzhU"
  }],
  "OleL": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return null == e ? null : r(e);
    }

    function r(e) {
      if ("function" != typeof e) throw new Error();
      return e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.optional = e, exports.required = r;
  }, {}],
  "k/YM": [function (require, module, exports) {
    "use strict";

    function e() {
      return 0;
    }

    function t(e) {
      return function () {
        return e;
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.constantZero = e, exports.default = t;
  }, {}],
  "aVuj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("./siblings"),
        r = require("../accessors"),
        t = o(require("../constant"));

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function o(e) {
      if (e && e.__esModule) return e;
      var r = n();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
            i && (i.get || i.set) ? Object.defineProperty(t, u, i) : t[u] = e[u];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function u(e) {
      return Math.sqrt(e.value);
    }

    function i() {
      var e = null,
          n = 1,
          o = 1,
          i = t.constantZero;

      function l(r) {
        return r.x = n / 2, r.y = o / 2, e ? r.eachBefore(a(e)).eachAfter(c(i, .5)).eachBefore(f(1)) : r.eachBefore(a(u)).eachAfter(c(t.constantZero, 1)).eachAfter(c(i, r.r / Math.min(n, o))).eachBefore(f(Math.min(n, o) / (2 * r.r))), r;
      }

      return l.radius = function (t) {
        return arguments.length ? (e = (0, r.optional)(t), l) : e;
      }, l.size = function (e) {
        return arguments.length ? (n = +e[0], o = +e[1], l) : [n, o];
      }, l.padding = function (e) {
        return arguments.length ? (i = "function" == typeof e ? e : (0, t.default)(+e), l) : i;
      }, l;
    }

    function a(e) {
      return function (r) {
        r.children || (r.r = Math.max(0, +e(r) || 0));
      };
    }

    function c(r, t) {
      return function (n) {
        if (o = n.children) {
          var o,
              u,
              i,
              a = o.length,
              c = r(n) * t || 0;
          if (c) for (u = 0; u < a; ++u) {
            o[u].r += c;
          }
          if (i = (0, e.packEnclose)(o), c) for (u = 0; u < a; ++u) {
            o[u].r -= c;
          }
          n.r = i + c;
        }
      };
    }

    function f(e) {
      return function (r) {
        var t = r.parent;
        r.r *= e, t && (r.x = t.x + e * r.x, r.y = t.y + e * r.y);
      };
    }
  }, {
    "./siblings": "efS5",
    "../accessors": "OleL",
    "../constant": "k/YM"
  }],
  "PETl": [function (require, module, exports) {
    "use strict";

    function t(t) {
      t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
  }, {}],
  "L3aV": [function (require, module, exports) {
    "use strict";

    function e(e, t, l, r, u) {
      for (var a, o = e.children, n = -1, s = o.length, v = e.value && (r - t) / e.value; ++n < s;) {
        (a = o[n]).y0 = l, a.y1 = u, a.x0 = t, a.x1 = t += a.value * v;
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "h/+W": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;
    var e = t(require("./treemap/round")),
        r = t(require("./treemap/dice"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      var t = 1,
          n = 1,
          u = 0,
          i = !1;

      function o(o) {
        var d = o.height + 1;
        return o.x0 = o.y0 = u, o.x1 = t, o.y1 = n / d, o.eachBefore(function (e, t) {
          return function (n) {
            n.children && (0, r.default)(n, n.x0, e * (n.depth + 1) / t, n.x1, e * (n.depth + 2) / t);
            var i = n.x0,
                o = n.y0,
                d = n.x1 - u,
                f = n.y1 - u;
            d < i && (i = d = (i + d) / 2), f < o && (o = f = (o + f) / 2), n.x0 = i, n.y0 = o, n.x1 = d, n.y1 = f;
          };
        }(n, d)), i && o.eachBefore(e.default), o;
      }

      return o.round = function (e) {
        return arguments.length ? (i = !!e, o) : i;
      }, o.size = function (e) {
        return arguments.length ? (t = +e[0], n = +e[1], o) : [t, n];
      }, o.padding = function (e) {
        return arguments.length ? (u = +e, o) : u;
      }, o;
    }
  }, {
    "./treemap/round": "PETl",
    "./treemap/dice": "L3aV"
  }],
  "bJDQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var r = require("./accessors"),
        e = require("./hierarchy/index"),
        n = "$",
        t = {
      depth: -1
    },
        o = {};

    function i(r) {
      return r.id;
    }

    function u(r) {
      return r.parentId;
    }

    function c() {
      var c = i,
          h = u;

      function f(r) {
        var i,
            u,
            f,
            l,
            d,
            a,
            p,
            s = r.length,
            w = new Array(s),
            g = {};

        for (u = 0; u < s; ++u) {
          i = r[u], d = w[u] = new e.Node(i), null != (a = c(i, u, r)) && (a += "") && (g[p = n + (d.id = a)] = p in g ? o : d);
        }

        for (u = 0; u < s; ++u) {
          if (d = w[u], null != (a = h(r[u], u, r)) && (a += "")) {
            if (!(l = g[n + a])) throw new Error("missing: " + a);
            if (l === o) throw new Error("ambiguous: " + a);
            l.children ? l.children.push(d) : l.children = [d], d.parent = l;
          } else {
            if (f) throw new Error("multiple roots");
            f = d;
          }
        }

        if (!f) throw new Error("no root");
        if (f.parent = t, f.eachBefore(function (r) {
          r.depth = r.parent.depth + 1, --s;
        }).eachBefore(e.computeHeight), f.parent = null, s > 0) throw new Error("cycle");
        return f;
      }

      return f.id = function (e) {
        return arguments.length ? (c = (0, r.required)(e), f) : c;
      }, f.parentId = function (e) {
        return arguments.length ? (h = (0, r.required)(e), f) : h;
      }, f;
    }
  }, {
    "./accessors": "OleL",
    "./hierarchy/index": "LCo+"
  }],
  "7nrL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("./hierarchy/index");

    function e(n, e) {
      return n.parent === e.parent ? 1 : 2;
    }

    function t(n) {
      var e = n.children;
      return e ? e[0] : n.t;
    }

    function r(n) {
      var e = n.children;
      return e ? e[e.length - 1] : n.t;
    }

    function i(n, e, t) {
      var r = t / (e.i - n.i);
      e.c -= r, e.s += t, n.c += r, e.z += t, e.m += t;
    }

    function u(n) {
      for (var e, t = 0, r = 0, i = n.children, u = i.length; --u >= 0;) {
        (e = i[u]).z += t, e.m += t, t += e.s + (r += e.c);
      }
    }

    function c(n, e, t) {
      return n.a.parent === e.parent ? n.a : t;
    }

    function a(n, e) {
      this._ = n, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = e;
    }

    function h(n) {
      for (var e, t, r, i, u, c = new a(n, 0), h = [c]; e = h.pop();) {
        if (r = e._.children) for (e.children = new Array(u = r.length), i = u - 1; i >= 0; --i) {
          h.push(t = e.children[i] = new a(r[i], i)), t.parent = e;
        }
      }

      return (c.parent = new a(null, 0)).children = [c], c;
    }

    function l() {
      var n = e,
          a = 1,
          l = 1,
          o = null;

      function f(e) {
        var t = h(e);
        if (t.eachAfter(p), t.parent.m = -t.z, t.eachBefore(s), o) e.eachBefore(d);else {
          var r = e,
              i = e,
              u = e;
          e.eachBefore(function (n) {
            n.x < r.x && (r = n), n.x > i.x && (i = n), n.depth > u.depth && (u = n);
          });
          var c = r === i ? 1 : n(r, i) / 2,
              f = c - r.x,
              m = a / (i.x + c + f),
              z = l / (u.depth || 1);
          e.eachBefore(function (n) {
            n.x = (n.x + f) * m, n.y = n.depth * z;
          });
        }
        return e;
      }

      function p(e) {
        var a = e.children,
            h = e.parent.children,
            l = e.i ? h[e.i - 1] : null;

        if (a) {
          u(e);
          var o = (a[0].z + a[a.length - 1].z) / 2;
          l ? (e.z = l.z + n(e._, l._), e.m = e.z - o) : e.z = o;
        } else l && (e.z = l.z + n(e._, l._));

        e.parent.A = function (e, u, a) {
          if (u) {
            for (var h, l = e, o = e, f = u, p = l.parent.children[0], s = l.m, d = o.m, m = f.m, z = p.m; f = r(f), l = t(l), f && l;) {
              p = t(p), (o = r(o)).a = e, (h = f.z + m - l.z - s + n(f._, l._)) > 0 && (i(c(f, e, a), e, h), s += h, d += h), m += f.m, s += l.m, z += p.m, d += o.m;
            }

            f && !r(o) && (o.t = f, o.m += m - d), l && !t(p) && (p.t = l, p.m += s - z, a = e);
          }

          return a;
        }(e, l, e.parent.A || h[0]);
      }

      function s(n) {
        n._.x = n.z + n.parent.m, n.m += n.parent.m;
      }

      function d(n) {
        n.x *= a, n.y = n.depth * l;
      }

      return f.separation = function (e) {
        return arguments.length ? (n = e, f) : n;
      }, f.size = function (n) {
        return arguments.length ? (o = !1, a = +n[0], l = +n[1], f) : o ? null : [a, l];
      }, f.nodeSize = function (n) {
        return arguments.length ? (o = !0, a = +n[0], l = +n[1], f) : o ? [a, l] : null;
      }, f;
    }

    a.prototype = Object.create(n.Node.prototype);
  }, {
    "./hierarchy/index": "LCo+"
  }],
  "RVbL": [function (require, module, exports) {
    "use strict";

    function e(e, t, l, r, u) {
      for (var a, o = e.children, n = -1, s = o.length, v = e.value && (u - l) / e.value; ++n < s;) {
        (a = o[n]).x0 = t, a.x1 = r, a.y0 = l, a.y1 = l += a.value * v;
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "jyLZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.squarifyRatio = a, exports.default = exports.phi = void 0;
    var e = t(require("./dice")),
        r = t(require("./slice"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (1 + Math.sqrt(5)) / 2;

    function a(t, u, a, i, o, l) {
      for (var n, d, f, s, c, h, p, v, x, M, q, _ = [], m = u.children, b = 0, y = 0, g = m.length, j = u.value; b < g;) {
        f = o - a, s = l - i;

        do {
          c = m[y++].value;
        } while (!c && y < g);

        for (h = p = c, q = c * c * (M = Math.max(s / f, f / s) / (j * t)), x = Math.max(p / q, q / h); y < g; ++y) {
          if (c += d = m[y].value, d < h && (h = d), d > p && (p = d), q = c * c * M, (v = Math.max(p / q, q / h)) > x) {
            c -= d;
            break;
          }

          x = v;
        }

        _.push(n = {
          value: c,
          dice: f < s,
          children: m.slice(b, y)
        }), n.dice ? (0, e.default)(n, a, i, o, j ? i += s * c / j : l) : (0, r.default)(n, a, i, j ? a += f * c / j : o, l), j -= c, b = y;
      }

      return _;
    }

    exports.phi = u;

    var i = function e(r) {
      function t(e, t, u, i, o) {
        a(r, e, t, u, i, o);
      }

      return t.ratio = function (r) {
        return e((r = +r) > 1 ? r : 1);
      }, t;
    }(u);

    exports.default = i;
  }, {
    "./dice": "L3aV",
    "./slice": "RVbL"
  }],
  "3cC5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = i(require("./round")),
        e = i(require("./squarify")),
        t = require("../accessors"),
        r = o(require("../constant"));

    function u() {
      if ("function" != typeof WeakMap) return null;
      var n = new WeakMap();
      return u = function u() {
        return n;
      }, n;
    }

    function o(n) {
      if (n && n.__esModule) return n;
      var e = u();
      if (e && e.has(n)) return e.get(n);
      var t = {};

      if (null != n) {
        var r = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var o in n) {
          if (Object.prototype.hasOwnProperty.call(n, o)) {
            var i = r ? Object.getOwnPropertyDescriptor(n, o) : null;
            i && (i.get || i.set) ? Object.defineProperty(t, o, i) : t[o] = n[o];
          }
        }
      }

      return t.default = n, e && e.set(n, t), t;
    }

    function i(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function f() {
      var u = e.default,
          o = !1,
          i = 1,
          f = 1,
          a = [0],
          d = r.constantZero,
          c = r.constantZero,
          p = r.constantZero,
          l = r.constantZero,
          g = r.constantZero;

      function s(e) {
        return e.x0 = e.y0 = 0, e.x1 = i, e.y1 = f, e.eachBefore(y), a = [0], o && e.eachBefore(n.default), e;
      }

      function y(n) {
        var e = a[n.depth],
            t = n.x0 + e,
            r = n.y0 + e,
            o = n.x1 - e,
            i = n.y1 - e;
        o < t && (t = o = (t + o) / 2), i < r && (r = i = (r + i) / 2), n.x0 = t, n.y0 = r, n.x1 = o, n.y1 = i, n.children && (e = a[n.depth + 1] = d(n) / 2, t += g(n) - e, r += c(n) - e, (o -= p(n) - e) < t && (t = o = (t + o) / 2), (i -= l(n) - e) < r && (r = i = (r + i) / 2), u(n, t, r, o, i));
      }

      return s.round = function (n) {
        return arguments.length ? (o = !!n, s) : o;
      }, s.size = function (n) {
        return arguments.length ? (i = +n[0], f = +n[1], s) : [i, f];
      }, s.tile = function (n) {
        return arguments.length ? (u = (0, t.required)(n), s) : u;
      }, s.padding = function (n) {
        return arguments.length ? s.paddingInner(n).paddingOuter(n) : s.paddingInner();
      }, s.paddingInner = function (n) {
        return arguments.length ? (d = "function" == typeof n ? n : (0, r.default)(+n), s) : d;
      }, s.paddingOuter = function (n) {
        return arguments.length ? s.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : s.paddingTop();
      }, s.paddingTop = function (n) {
        return arguments.length ? (c = "function" == typeof n ? n : (0, r.default)(+n), s) : c;
      }, s.paddingRight = function (n) {
        return arguments.length ? (p = "function" == typeof n ? n : (0, r.default)(+n), s) : p;
      }, s.paddingBottom = function (n) {
        return arguments.length ? (l = "function" == typeof n ? n : (0, r.default)(+n), s) : l;
      }, s.paddingLeft = function (n) {
        return arguments.length ? (g = "function" == typeof n ? n : (0, r.default)(+n), s) : g;
      }, s;
    }
  }, {
    "./round": "PETl",
    "./squarify": "jyLZ",
    "../accessors": "OleL",
    "../constant": "k/YM"
  }],
  "cDuG": [function (require, module, exports) {
    "use strict";

    function e(e, r, a, t, v) {
      var n,
          o,
          u = e.children,
          f = u.length,
          i = new Array(f + 1);

      for (i[0] = o = n = 0; n < f; ++n) {
        i[n + 1] = o += u[n].value;
      }

      !function e(r, a, t, v, n, o, f) {
        if (r >= a - 1) {
          var l = u[r];
          return l.x0 = v, l.y0 = n, l.x1 = o, void (l.y1 = f);
        }

        var s = i[r],
            c = t / 2 + s,
            d = r + 1,
            x = a - 1;

        for (; d < x;) {
          var y = d + x >>> 1;
          i[y] < c ? d = y + 1 : x = y;
        }

        c - i[d - 1] < i[d] - c && r + 1 < d && --d;
        var p = i[d] - s,
            h = t - p;

        if (o - v > f - n) {
          var _ = (v * h + o * p) / t;

          e(r, d, p, v, n, _, f), e(d, a, h, _, n, o, f);
        } else {
          var b = (n * h + f * p) / t;
          e(r, d, p, v, n, o, b), e(d, a, h, v, b, o, f);
        }
      }(0, f, e.value, r, a, t, v);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "dACy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = r;
    var e = u(require("./dice")),
        t = u(require("./slice"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(u, r, d, i, l) {
      (1 & u.depth ? t.default : e.default)(u, r, d, i, l);
    }
  }, {
    "./dice": "L3aV",
    "./slice": "RVbL"
  }],
  "GrWc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = t(require("./dice")),
        r = t(require("./slice")),
        u = require("./squarify");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = function t(a) {
      function i(t, i, l, f, o) {
        if ((n = t._squarify) && n.ratio === a) for (var n, s, d, v, c, q = -1, _ = n.length, p = t.value; ++q < _;) {
          for (d = (s = n[q]).children, v = s.value = 0, c = d.length; v < c; ++v) {
            s.value += d[v].value;
          }

          s.dice ? (0, e.default)(s, i, l, f, l += (o - l) * s.value / p) : (0, r.default)(s, i, l, i += (f - i) * s.value / p, o), p -= s.value;
        } else t._squarify = n = (0, u.squarifyRatio)(a, t, i, l, f, o), n.ratio = a;
      }

      return i.ratio = function (e) {
        return t((e = +e) > 1 ? e : 1);
      }, i;
    }(u.phi);

    exports.default = a;
  }, {
    "./dice": "L3aV",
    "./slice": "RVbL",
    "./squarify": "jyLZ"
  }],
  "wNQE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "cluster", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "hierarchy", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "pack", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "packSiblings", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "packEnclose", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "partition", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "stratify", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "tree", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "treemap", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "treemapBinary", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "treemapDice", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "treemapSlice", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "treemapSliceDice", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "treemapSquarify", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "treemapResquarify", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    });
    var e = m(require("./cluster")),
        r = m(require("./hierarchy/index")),
        t = m(require("./pack/index")),
        n = m(require("./pack/siblings")),
        u = m(require("./pack/enclose")),
        i = m(require("./partition")),
        a = m(require("./stratify")),
        f = m(require("./tree")),
        o = m(require("./treemap/index")),
        p = m(require("./treemap/binary")),
        c = m(require("./treemap/dice")),
        l = m(require("./treemap/slice")),
        d = m(require("./treemap/sliceDice")),
        b = m(require("./treemap/squarify")),
        s = m(require("./treemap/resquarify"));

    function m(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./cluster": "brcY",
    "./hierarchy/index": "LCo+",
    "./pack/index": "aVuj",
    "./pack/siblings": "efS5",
    "./pack/enclose": "ZzhU",
    "./partition": "h/+W",
    "./stratify": "bJDQ",
    "./tree": "7nrL",
    "./treemap/index": "3cC5",
    "./treemap/binary": "cDuG",
    "./treemap/dice": "L3aV",
    "./treemap/slice": "RVbL",
    "./treemap/sliceDice": "dACy",
    "./treemap/squarify": "jyLZ",
    "./treemap/resquarify": "GrWc"
  }],
  "wD+C": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = exports.prefix = void 0;
    var t = "$";

    function r() {}

    function e(t, e) {
      var i = new r();
      if (t instanceof r) t.each(function (t, r) {
        i.set(r, t);
      });else if (Array.isArray(t)) {
        var n,
            s = -1,
            o = t.length;
        if (null == e) for (; ++s < o;) {
          i.set(s, t[s]);
        } else for (; ++s < o;) {
          i.set(e(n = t[s], s, t), n);
        }
      } else if (t) for (var u in t) {
        i.set(u, t[u]);
      }
      return i;
    }

    exports.prefix = t, r.prototype = e.prototype = {
      constructor: r,
      has: function has(r) {
        return t + r in this;
      },
      get: function get(r) {
        return this[t + r];
      },
      set: function set(r, e) {
        return this[t + r] = e, this;
      },
      remove: function remove(r) {
        var e = t + r;
        return e in this && delete this[e];
      },
      clear: function clear() {
        for (var r in this) {
          r[0] === t && delete this[r];
        }
      },
      keys: function keys() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push(e.slice(1));
        }

        return r;
      },
      values: function values() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push(this[e]);
        }

        return r;
      },
      entries: function entries() {
        var r = [];

        for (var e in this) {
          e[0] === t && r.push({
            key: e.slice(1),
            value: this[e]
          });
        }

        return r;
      },
      size: function size() {
        var r = 0;

        for (var e in this) {
          e[0] === t && ++r;
        }

        return r;
      },
      empty: function empty() {
        for (var r in this) {
          if (r[0] === t) return !1;
        }

        return !0;
      },
      each: function each(r) {
        for (var e in this) {
          e[0] === t && r(this[e], e.slice(1), this);
        }
      }
    };
    var i = e;
    exports.default = i;
  }, {}],
  "6TaN": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
    var n = t(require("./map"));

    function t(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function e() {
      var t,
          e,
          i,
          l = [],
          c = [];

      function s(u, r, o, f) {
        if (r >= l.length) return null != t && u.sort(t), null != e ? e(u) : u;

        for (var i, c, a, h = -1, p = u.length, d = l[r++], g = (0, n.default)(), v = o(); ++h < p;) {
          (a = g.get(i = d(c = u[h]) + "")) ? a.push(c) : g.set(i, [c]);
        }

        return g.each(function (n, t) {
          f(v, t, s(n, r, o, f));
        }), v;
      }

      return i = {
        object: function object(n) {
          return s(n, 0, u, r);
        },
        map: function map(n) {
          return s(n, 0, o, f);
        },
        entries: function entries(n) {
          return function n(t, u) {
            if (++u > l.length) return t;
            var r,
                o = c[u - 1];
            return null != e && u >= l.length ? r = t.entries() : (r = [], t.each(function (t, e) {
              r.push({
                key: e,
                values: n(t, u)
              });
            })), null != o ? r.sort(function (n, t) {
              return o(n.key, t.key);
            }) : r;
          }(s(n, 0, o, f), 0);
        },
        key: function key(n) {
          return l.push(n), i;
        },
        sortKeys: function sortKeys(n) {
          return c[l.length - 1] = n, i;
        },
        sortValues: function sortValues(n) {
          return t = n, i;
        },
        rollup: function rollup(n) {
          return e = n, i;
        }
      };
    }

    function u() {
      return {};
    }

    function r(n, t, e) {
      n[t] = e;
    }

    function o() {
      return (0, n.default)();
    }

    function f(n, t, e) {
      n.set(t, e);
    }
  }, {
    "./map": "wD+C"
  }],
  "/fgw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./map"));

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function t(e) {
      if (e && e.__esModule) return e;
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {};

      if (null != e) {
        var o = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var a in e) {
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
            i && (i.get || i.set) ? Object.defineProperty(n, a, i) : n[a] = e[a];
          }
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }

    function n() {}

    var o = e.default.prototype;

    function a(e, r) {
      var t = new n();
      if (e instanceof n) e.each(function (e) {
        t.add(e);
      });else if (e) {
        var o = -1,
            a = e.length;
        if (null == r) for (; ++o < a;) {
          t.add(e[o]);
        } else for (; ++o < a;) {
          t.add(r(e[o], o, e));
        }
      }
      return t;
    }

    n.prototype = a.prototype = {
      constructor: n,
      has: o.has,
      add: function add(r) {
        return r += "", this[e.prefix + r] = r, this;
      },
      remove: o.remove,
      clear: o.clear,
      values: o.keys,
      size: o.size,
      empty: o.empty,
      each: o.each
    };
    var i = a;
    exports.default = i;
  }, {
    "./map": "wD+C"
  }],
  "S/tS": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push(t);
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "wANB": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push(e[t]);
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "u9ZW": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var r = [];

      for (var t in e) {
        r.push({
          key: t,
          value: e[t]
        });
      }

      return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "qqV1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "nest", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "set", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "map", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "keys", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "values", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "entries", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    });
    var e = o(require("./nest")),
        r = o(require("./set")),
        t = o(require("./map")),
        u = o(require("./keys")),
        n = o(require("./values")),
        i = o(require("./entries"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./nest": "6TaN",
    "./set": "/fgw",
    "./map": "wD+C",
    "./keys": "S/tS",
    "./values": "wANB",
    "./entries": "u9ZW"
  }],
  "TLCm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = n;

    var t = require("d3-collection"),
        e = require("d3-selection");

    function n() {
      var n = function n() {
        return "n";
      },
          r = function r() {
        return [0, 0];
      },
          o = function o() {
        return " ";
      },
          l = document.body,
          i = y(),
          s = null,
          u = null,
          f = null;

      function a(t) {
        var e;
        e = t.node(), (s = e ? "svg" === e.tagName.toLowerCase() ? e : e.ownerSVGElement : null) && (u = s.createSVGPoint(), l.appendChild(i));
      }

      a.show = function () {
        var t = Array.prototype.slice.call(arguments);
        t[t.length - 1] instanceof SVGElement && (f = t.pop());
        var e,
            i = o.apply(this, t),
            s = r.apply(this, t),
            u = n.apply(this, t),
            y = h(),
            d = p.length,
            m = document.documentElement.scrollTop || l.scrollTop,
            x = document.documentElement.scrollLeft || l.scrollLeft;

        for (y.html(i).style("opacity", 1).style("pointer-events", "all"); d--;) {
          y.classed(p[d], !1);
        }

        return e = c.get(u).apply(this), y.classed(u, !0).style("top", e.top + s[0] + m + "px").style("left", e.left + s[1] + x + "px"), a;
      }, a.hide = function () {
        return h().style("opacity", 0).style("pointer-events", "none"), a;
      }, a.attr = function (t, n) {
        if (arguments.length < 2 && "string" == typeof t) return h().attr(t);
        var r = Array.prototype.slice.call(arguments);
        return e.selection.prototype.attr.apply(h(), r), a;
      }, a.style = function (t, n) {
        if (arguments.length < 2 && "string" == typeof t) return h().style(t);
        var r = Array.prototype.slice.call(arguments);
        return e.selection.prototype.style.apply(h(), r), a;
      }, a.direction = function (t) {
        return arguments.length ? (n = null == t ? t : m(t), a) : n;
      }, a.offset = function (t) {
        return arguments.length ? (r = null == t ? t : m(t), a) : r;
      }, a.html = function (t) {
        return arguments.length ? (o = null == t ? t : m(t), a) : o;
      }, a.rootElement = function (t) {
        return arguments.length ? (l = null == t ? t : m(t), a) : l;
      }, a.destroy = function () {
        return i && (h().remove(), i = null), a;
      };
      var c = (0, t.map)({
        n: function n() {
          var t = d(this);
          return {
            top: t.n.y - i.offsetHeight,
            left: t.n.x - i.offsetWidth / 2
          };
        },
        s: function s() {
          var t = d(this);
          return {
            top: t.s.y,
            left: t.s.x - i.offsetWidth / 2
          };
        },
        e: function e() {
          var t = d(this);
          return {
            top: t.e.y - i.offsetHeight / 2,
            left: t.e.x
          };
        },
        w: function w() {
          var t = d(this);
          return {
            top: t.w.y - i.offsetHeight / 2,
            left: t.w.x - i.offsetWidth
          };
        },
        nw: function nw() {
          var t = d(this);
          return {
            top: t.nw.y - i.offsetHeight,
            left: t.nw.x - i.offsetWidth
          };
        },
        ne: function ne() {
          var t = d(this);
          return {
            top: t.ne.y - i.offsetHeight,
            left: t.ne.x
          };
        },
        sw: function sw() {
          var t = d(this);
          return {
            top: t.sw.y,
            left: t.sw.x - i.offsetWidth
          };
        },
        se: function se() {
          var t = d(this);
          return {
            top: t.se.y,
            left: t.se.x
          };
        }
      }),
          p = c.keys();

      function y() {
        var t = (0, e.select)(document.createElement("div"));
        return t.style("position", "absolute").style("top", 0).style("opacity", 0).style("pointer-events", "none").style("box-sizing", "border-box"), t.node();
      }

      function h() {
        return null == i && (i = y(), l.appendChild(i)), (0, e.select)(i);
      }

      function d(t) {
        for (var e = f || t; null == e.getScreenCTM && null != e.parentNode;) {
          e = e.parentNode;
        }

        var n = {},
            r = e.getScreenCTM(),
            o = e.getBBox(),
            l = o.width,
            i = o.height,
            s = o.x,
            a = o.y;
        return u.x = s, u.y = a, n.nw = u.matrixTransform(r), u.x += l, n.ne = u.matrixTransform(r), u.y += i, n.se = u.matrixTransform(r), u.x -= l, n.sw = u.matrixTransform(r), u.y -= i / 2, n.w = u.matrixTransform(r), u.x += l, n.e = u.matrixTransform(r), u.x -= l / 2, u.y -= i / 2, n.n = u.matrixTransform(r), u.y += i, n.s = u.matrixTransform(r), n;
      }

      function m(t) {
        return "function" == typeof t ? t : function () {
          return t;
        };
      }

      return a;
    }
  }, {
    "d3-collection": "qqV1",
    "d3-selection": "lm1C"
  }],
  "XIkb": [function (require, module, exports) {}, {}],
  "lqyP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.bubbles = h;

    var t = require("d3-selection");

    require("d3-transition");

    var e = require("d3-hierarchy"),
        n = i(require("d3-tip")),
        r = require("./helpers/getColor.js"),
        a = require("./helpers/numberFormat.js"),
        o = require("./helpers/getFontCss.js"),
        l = require("./helpers/clearChart.js");

    function i(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function c(t) {
      return f(t) || s(t) || u();
    }

    function u() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function s(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }

    function f(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    }

    require("./tooltip.css");

    var d = "\n".concat((0, o.getFontCss)(["roboto-100", "roboto-400"]), "\ntext {\n  font-family: Roboto, sans-serif;\n\tfill: white;\n\tpointer-events: none;\n}\n.bubble-label {\n  text-align: center;\n  font-family: Roboto, Arial;\n  font-weight: 400;\n  line-height: 1.2;\n  user-select: none;\n}\n.bubble-value {\n  color: rgba(255, 255, 255, 0.8);\n  font-weight: 300;\n  user-select: none;\n}\n"),
        b = /.+ Version\/.+ Safari\/.+/.test(navigator.userAgent);

    function h(o) {
      var i = o.data,
          u = o.width,
          s = o.onClick,
          f = o.withinElement,
          h = o.animationDuration,
          y = void 0 === h ? 500 : h,
          p = o.animationOffset,
          v = void 0 === p ? 40 : p,
          m = b ? 0 : -8,
          g = i.map(function (t) {
        return t.value;
      }),
          x = Math.min.apply(null, g),
          C = Math.max.apply(null, g);
      i.forEach(function (t, e) {
        t.color = (0, r.getColor)(e, i.length), t.actualCount = t.value, t.value < C / 40 && (t.value = C / 40);
      });
      var w = F(12, 25),
          q = F(10, 16);
      (0, l.clearChart)(f);

      var A,
          j = function () {
        var e = (0, t.select)(f).append("svg").attr("width", u).attr("height", u).attr("class", "sh-chart-bubbles");
        return e.append("style").text(d), e;
      }(),
          M = function (t) {
        var n = (0, e.pack)().size([u, u]).padding(0),
            r = (0, e.hierarchy)({
          children: i
        }).sum(function (t) {
          return t.value;
        });
        return n(r), r;
      }(),
          S = function (t, e) {
        var n = t.selectAll(".bubble-container").data(e.children).enter().append("g").attr("class", "bubble-container").attr("transform", function (t) {
          return "translate(".concat(t.x, " ").concat(t.y, ")");
        });
        return n.append("circle").attr("class", "bubble").attr("r", function (t) {
          return t.r;
        }).style("fill", function (t) {
          return t.data.color;
        }).on("click", function (t, e) {
          return s(t.data, e);
        }).style("opacity", 0).style("transform", "scale(0.80)").transition().duration(y).delay(function (t, e) {
          return v * e;
        }).style("opacity", 1).style("transform", "scale(1)"), n;
      }(j, M);

      function E(t) {
        return .94 * t.previousSibling.getBoundingClientRect().width / t.getBoundingClientRect().width;
      }

      function F(t, e) {
        return function (n) {
          var r = (e - t) / (C - x),
              a = Math.min(e, Math.round(n.value * r) + t);
          return "".concat(a, "px");
        };
      }

      !function (t) {
        var e = new n.default();
        e.attr("class", "sh-chart-tip-outer").offset([-38, 0]).html(function (t, e) {
          var n = (0, r.getColor)(e, g.length);
          return '\n\t\t\t\t\t<div class="sh-chart-tip" style="background-color: '.concat(n, '">\n\t\t\t\t\t\t').concat(t.data.label, " (").concat((0, a.numberFormat)(t.data.actualCount), ')\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="sh-chart-stem" style="border-color: ').concat(n, ' transparent transparent transparent"></div>\n\t\t\t\t');
        }), t.on("mouseover", e.show).on("mouseout", e.hide).call(e);
      }(S), function (t) {
        t.append("text").attr("class", "bubble-label").attr("dy", "0").style("text-anchor", "middle").style("font-size", w).text(function (t) {
          return t.data.label;
        }).style("opacity", 0).style("transform", "rotate(".concat(m, "deg)")).transition().duration(y).delay(function (t, e) {
          return v * e;
        }).style("opacity", 1).style("transform", "rotate(0)"), t.append("text").attr("class", "bubble-amount").attr("dy", "1.2em").style("text-anchor", "middle").style("font-weight", "100").style("font-size", q).text(function (t) {
          return (0, a.numberFormat)(t.data.actualCount);
        }).style("opacity", 0).style("transform", "rotate(".concat(m, "deg)")).transition().duration(y).delay(function (t, e) {
          return v * e;
        }).style("opacity", 1).style("transform", "rotate(0)");
      }(S), c((A = j.node()).querySelectorAll(".bubble-label")).forEach(function (t) {
        var e = t.textContent,
            n = E(t);

        if (n < .94) {
          var r = Math.floor(n * (e.length + 1)) - 1;
          r >= 6 ? (t.textContent = e.slice(0, r) + "...", r >= 8 && E(t) < .94 && (t.textContent = e.slice(0, r - 2) + "...")) : t.textContent = "";
        }
      }), c(A.querySelectorAll(".bubble-amount")).forEach(function (t) {
        var e = t.previousSibling;
        "" === e.textContent && (t.textContent = "");
      });
    }
  }, {
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "d3-hierarchy": "wNQE",
    "d3-tip": "TLCm",
    "./helpers/getColor.js": "xsMK",
    "./helpers/numberFormat.js": "xUTH",
    "./helpers/getFontCss.js": "fdMH",
    "./helpers/clearChart.js": "0Zyt",
    "./tooltip.css": "XIkb"
  }],
  "E5FC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = Math.PI,
        i = 2 * t,
        s = 1e-6,
        h = i - s;

    function _() {
      this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
    }

    function n() {
      return new _();
    }

    _.prototype = n.prototype = {
      constructor: _,
      moveTo: function moveTo(t, i) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i);
      },
      closePath: function closePath() {
        null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
      },
      lineTo: function lineTo(t, i) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +i);
      },
      quadraticCurveTo: function quadraticCurveTo(t, i, s, h) {
        this._ += "Q" + +t + "," + +i + "," + (this._x1 = +s) + "," + (this._y1 = +h);
      },
      bezierCurveTo: function bezierCurveTo(t, i, s, h, _, n) {
        this._ += "C" + +t + "," + +i + "," + +s + "," + +h + "," + (this._x1 = +_) + "," + (this._y1 = +n);
      },
      arcTo: function arcTo(i, h, _, n, e) {
        i = +i, h = +h, _ = +_, n = +n, e = +e;
        var r = this._x1,
            o = this._y1,
            a = _ - i,
            u = n - h,
            x = r - i,
            c = o - h,
            y = x * x + c * c;
        if (e < 0) throw new Error("negative radius: " + e);
        if (null === this._x1) this._ += "M" + (this._x1 = i) + "," + (this._y1 = h);else if (y > s) {
          if (Math.abs(c * a - u * x) > s && e) {
            var f = _ - r,
                M = n - o,
                l = a * a + u * u,
                v = f * f + M * M,
                d = Math.sqrt(l),
                p = Math.sqrt(y),
                b = e * Math.tan((t - Math.acos((l + y - v) / (2 * d * p))) / 2),
                w = b / p,
                T = b / d;
            Math.abs(w - 1) > s && (this._ += "L" + (i + w * x) + "," + (h + w * c)), this._ += "A" + e + "," + e + ",0,0," + +(c * f > x * M) + "," + (this._x1 = i + T * a) + "," + (this._y1 = h + T * u);
          } else this._ += "L" + (this._x1 = i) + "," + (this._y1 = h);
        } else ;
      },
      arc: function arc(_, n, e, r, o, a) {
        _ = +_, n = +n, a = !!a;
        var u = (e = +e) * Math.cos(r),
            x = e * Math.sin(r),
            c = _ + u,
            y = n + x,
            f = 1 ^ a,
            M = a ? r - o : o - r;
        if (e < 0) throw new Error("negative radius: " + e);
        null === this._x1 ? this._ += "M" + c + "," + y : (Math.abs(this._x1 - c) > s || Math.abs(this._y1 - y) > s) && (this._ += "L" + c + "," + y), e && (M < 0 && (M = M % i + i), M > h ? this._ += "A" + e + "," + e + ",0,1," + f + "," + (_ - u) + "," + (n - x) + "A" + e + "," + e + ",0,1," + f + "," + (this._x1 = c) + "," + (this._y1 = y) : M > s && (this._ += "A" + e + "," + e + ",0," + +(M >= t) + "," + f + "," + (this._x1 = _ + e * Math.cos(o)) + "," + (this._y1 = n + e * Math.sin(o))));
      },
      rect: function rect(t, i, s, h) {
        this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +i) + "h" + +s + "v" + +h + "h" + -s + "Z";
      },
      toString: function toString() {
        return this._;
      }
    };
    var e = n;
    exports.default = e;
  }, {}],
  "dz42": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "path", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./path"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./path": "E5FC"
  }],
  "9R8v": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.acos = h, exports.asin = M, exports.tau = exports.halfPi = exports.pi = exports.epsilon = exports.sqrt = exports.sin = exports.min = exports.max = exports.cos = exports.atan2 = exports.abs = void 0;
    var t = Math.abs;
    exports.abs = t;
    var r = Math.atan2;
    exports.atan2 = r;
    var s = Math.cos;
    exports.cos = s;
    var a = Math.max;
    exports.max = a;
    var e = Math.min;
    exports.min = e;
    var o = Math.sin;
    exports.sin = o;
    var p = Math.sqrt;
    exports.sqrt = p;
    var x = 1e-12;
    exports.epsilon = x;
    var n = Math.PI;
    exports.pi = n;
    var i = n / 2;
    exports.halfPi = i;
    var v = 2 * n;

    function h(t) {
      return t > 1 ? 0 : t < -1 ? n : Math.acos(t);
    }

    function M(t) {
      return t >= 1 ? i : t <= -1 ? -i : Math.asin(t);
    }

    exports.tau = v;
  }, {}],
  "TV07": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = require("d3-path"),
        t = a(require("./constant")),
        e = require("./math");

    function a(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function i(n) {
      return n.innerRadius;
    }

    function r(n) {
      return n.outerRadius;
    }

    function o(n) {
      return n.startAngle;
    }

    function c(n) {
      return n.endAngle;
    }

    function u(n) {
      return n && n.padAngle;
    }

    function l(n, t, a, i, r, o, c, u) {
      var l = a - n,
          s = i - t,
          f = c - r,
          p = u - o,
          y = p * l - f * s;
      if (!(y * y < e.epsilon)) return [n + (y = (f * (t - o) - p * (n - r)) / y) * l, t + y * s];
    }

    function s(n, t, a, i, r, o, c) {
      var u = n - a,
          l = t - i,
          s = (c ? o : -o) / (0, e.sqrt)(u * u + l * l),
          f = s * l,
          p = -s * u,
          y = n + f,
          x = t + p,
          d = a + f,
          h = i + p,
          v = (y + d) / 2,
          g = (x + h) / 2,
          m = d - y,
          q = h - x,
          T = m * m + q * q,
          A = r - o,
          R = y * h - d * x,
          P = (q < 0 ? -1 : 1) * (0, e.sqrt)((0, e.max)(0, A * A * T - R * R)),
          _ = (R * q - m * P) / T,
          b = (-R * m - q * P) / T,
          M = (R * q + m * P) / T,
          j = (-R * m + q * P) / T,
          O = _ - v,
          k = b - g,
          w = M - v,
          z = j - g;

      return O * O + k * k > w * w + z * z && (_ = M, b = j), {
        cx: _,
        cy: b,
        x01: -f,
        y01: -p,
        x11: _ * (r / A - 1),
        y11: b * (r / A - 1)
      };
    }

    function f() {
      var a = i,
          f = r,
          p = (0, t.default)(0),
          y = null,
          x = o,
          d = c,
          h = u,
          v = null;

      function g() {
        var t,
            i,
            r = +a.apply(this, arguments),
            o = +f.apply(this, arguments),
            c = x.apply(this, arguments) - e.halfPi,
            u = d.apply(this, arguments) - e.halfPi,
            g = (0, e.abs)(u - c),
            m = u > c;
        if (v || (v = t = (0, n.path)()), o < r && (i = o, o = r, r = i), o > e.epsilon) {
          if (g > e.tau - e.epsilon) v.moveTo(o * (0, e.cos)(c), o * (0, e.sin)(c)), v.arc(0, 0, o, c, u, !m), r > e.epsilon && (v.moveTo(r * (0, e.cos)(u), r * (0, e.sin)(u)), v.arc(0, 0, r, u, c, m));else {
            var q,
                T,
                A = c,
                R = u,
                P = c,
                _ = u,
                b = g,
                M = g,
                j = h.apply(this, arguments) / 2,
                O = j > e.epsilon && (y ? +y.apply(this, arguments) : (0, e.sqrt)(r * r + o * o)),
                k = (0, e.min)((0, e.abs)(o - r) / 2, +p.apply(this, arguments)),
                w = k,
                z = k;

            if (O > e.epsilon) {
              var B = (0, e.asin)(O / r * (0, e.sin)(j)),
                  C = (0, e.asin)(O / o * (0, e.sin)(j));
              (b -= 2 * B) > e.epsilon ? (P += B *= m ? 1 : -1, _ -= B) : (b = 0, P = _ = (c + u) / 2), (M -= 2 * C) > e.epsilon ? (A += C *= m ? 1 : -1, R -= C) : (M = 0, A = R = (c + u) / 2);
            }

            var D = o * (0, e.cos)(A),
                E = o * (0, e.sin)(A),
                F = r * (0, e.cos)(_),
                G = r * (0, e.sin)(_);

            if (k > e.epsilon) {
              var H,
                  I = o * (0, e.cos)(R),
                  J = o * (0, e.sin)(R),
                  K = r * (0, e.cos)(P),
                  L = r * (0, e.sin)(P);

              if (g < e.pi && (H = l(D, E, K, L, I, J, F, G))) {
                var N = D - H[0],
                    Q = E - H[1],
                    S = I - H[0],
                    U = J - H[1],
                    V = 1 / (0, e.sin)((0, e.acos)((N * S + Q * U) / ((0, e.sqrt)(N * N + Q * Q) * (0, e.sqrt)(S * S + U * U))) / 2),
                    W = (0, e.sqrt)(H[0] * H[0] + H[1] * H[1]);
                w = (0, e.min)(k, (r - W) / (V - 1)), z = (0, e.min)(k, (o - W) / (V + 1));
              }
            }

            M > e.epsilon ? z > e.epsilon ? (q = s(K, L, D, E, o, z, m), T = s(I, J, F, G, o, z, m), v.moveTo(q.cx + q.x01, q.cy + q.y01), z < k ? v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, z, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, o, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), !m), v.arc(T.cx, T.cy, z, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : (v.moveTo(D, E), v.arc(0, 0, o, A, R, !m)) : v.moveTo(D, E), r > e.epsilon && b > e.epsilon ? w > e.epsilon ? (q = s(F, G, I, J, r, -w, m), T = s(D, E, K, L, r, -w, m), v.lineTo(q.cx + q.x01, q.cy + q.y01), w < k ? v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(T.y01, T.x01), !m) : (v.arc(q.cx, q.cy, w, (0, e.atan2)(q.y01, q.x01), (0, e.atan2)(q.y11, q.x11), !m), v.arc(0, 0, r, (0, e.atan2)(q.cy + q.y11, q.cx + q.x11), (0, e.atan2)(T.cy + T.y11, T.cx + T.x11), m), v.arc(T.cx, T.cy, w, (0, e.atan2)(T.y11, T.x11), (0, e.atan2)(T.y01, T.x01), !m))) : v.arc(0, 0, r, _, P, m) : v.lineTo(F, G);
          }
        } else v.moveTo(0, 0);
        if (v.closePath(), t) return v = null, t + "" || null;
      }

      return g.centroid = function () {
        var n = (+a.apply(this, arguments) + +f.apply(this, arguments)) / 2,
            t = (+x.apply(this, arguments) + +d.apply(this, arguments)) / 2 - e.pi / 2;
        return [(0, e.cos)(t) * n, (0, e.sin)(t) * n];
      }, g.innerRadius = function (n) {
        return arguments.length ? (a = "function" == typeof n ? n : (0, t.default)(+n), g) : a;
      }, g.outerRadius = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), g) : f;
      }, g.cornerRadius = function (n) {
        return arguments.length ? (p = "function" == typeof n ? n : (0, t.default)(+n), g) : p;
      }, g.padRadius = function (n) {
        return arguments.length ? (y = null == n ? null : "function" == typeof n ? n : (0, t.default)(+n), g) : y;
      }, g.startAngle = function (n) {
        return arguments.length ? (x = "function" == typeof n ? n : (0, t.default)(+n), g) : x;
      }, g.endAngle = function (n) {
        return arguments.length ? (d = "function" == typeof n ? n : (0, t.default)(+n), g) : d;
      }, g.padAngle = function (n) {
        return arguments.length ? (h = "function" == typeof n ? n : (0, t.default)(+n), g) : h;
      }, g.context = function (n) {
        return arguments.length ? (v = null == n ? null : n, g) : v;
      }, g;
    }
  }, {
    "d3-path": "dz42",
    "./constant": "H3qE",
    "./math": "9R8v"
  }],
  "4VCF": [function (require, module, exports) {
    "use strict";

    function t(t) {
      this._context = t;
    }

    function i(i) {
      return new t(i);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, i) {
        switch (t = +t, i = +i, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
            break;

          case 1:
            this._point = 2;

          default:
            this._context.lineTo(t, i);

        }
      }
    };
  }, {}],
  "aLIe": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e[0];
    }

    function t(e) {
      return e[1];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.x = e, exports.y = t;
  }, {}],
  "Ume/": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var n = require("d3-path"),
        e = r(require("./constant")),
        t = r(require("./curve/linear")),
        u = require("./point");

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function l() {
      var r = u.x,
          l = u.y,
          f = (0, e.default)(!0),
          i = null,
          o = t.default,
          c = null;

      function a(e) {
        var t,
            u,
            a,
            d = e.length,
            p = !1;

        for (null == i && (c = o(a = (0, n.path)())), t = 0; t <= d; ++t) {
          !(t < d && f(u = e[t], t, e)) === p && ((p = !p) ? c.lineStart() : c.lineEnd()), p && c.point(+r(u, t, e), +l(u, t, e));
        }

        if (a) return c = null, a + "" || null;
      }

      return a.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), a) : r;
      }, a.y = function (n) {
        return arguments.length ? (l = "function" == typeof n ? n : (0, e.default)(+n), a) : l;
      }, a.defined = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, e.default)(!!n), a) : f;
      }, a.curve = function (n) {
        return arguments.length ? (o = n, null != i && (c = o(i)), a) : o;
      }, a.context = function (n) {
        return arguments.length ? (null == n ? i = c = null : c = o(i = n), a) : i;
      }, a;
    }
  }, {
    "d3-path": "dz42",
    "./constant": "H3qE",
    "./curve/linear": "4VCF",
    "./point": "aLIe"
  }],
  "UWil": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var n = require("d3-path"),
        e = r(require("./constant")),
        t = r(require("./curve/linear")),
        u = r(require("./line")),
        l = require("./point");

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    function f() {
      var r = l.x,
          f = null,
          i = (0, e.default)(0),
          o = l.y,
          c = (0, e.default)(!0),
          a = null,
          d = t.default,
          y = null;

      function p(e) {
        var t,
            u,
            l,
            p,
            h,
            x = e.length,
            g = !1,
            s = new Array(x),
            v = new Array(x);

        for (null == a && (y = d(h = (0, n.path)())), t = 0; t <= x; ++t) {
          if (!(t < x && c(p = e[t], t, e)) === g) if (g = !g) u = t, y.areaStart(), y.lineStart();else {
            for (y.lineEnd(), y.lineStart(), l = t - 1; l >= u; --l) {
              y.point(s[l], v[l]);
            }

            y.lineEnd(), y.areaEnd();
          }
          g && (s[t] = +r(p, t, e), v[t] = +i(p, t, e), y.point(f ? +f(p, t, e) : s[t], o ? +o(p, t, e) : v[t]));
        }

        if (h) return y = null, h + "" || null;
      }

      function h() {
        return (0, u.default)().defined(c).curve(d).context(a);
      }

      return p.x = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), f = null, p) : r;
      }, p.x0 = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, e.default)(+n), p) : r;
      }, p.x1 = function (n) {
        return arguments.length ? (f = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : f;
      }, p.y = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), o = null, p) : i;
      }, p.y0 = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, e.default)(+n), p) : i;
      }, p.y1 = function (n) {
        return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : (0, e.default)(+n), p) : o;
      }, p.lineX0 = p.lineY0 = function () {
        return h().x(r).y(i);
      }, p.lineY1 = function () {
        return h().x(r).y(o);
      }, p.lineX1 = function () {
        return h().x(f).y(i);
      }, p.defined = function (n) {
        return arguments.length ? (c = "function" == typeof n ? n : (0, e.default)(!!n), p) : c;
      }, p.curve = function (n) {
        return arguments.length ? (d = n, null != a && (y = d(a)), p) : d;
      }, p.context = function (n) {
        return arguments.length ? (null == n ? a = y = null : y = d(a = n), p) : a;
      }, p;
    }
  }, {
    "d3-path": "dz42",
    "./constant": "H3qE",
    "./curve/linear": "4VCF",
    "./line": "Ume/",
    "./point": "aLIe"
  }],
  "5OJY": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var t = r(require("./constant")),
        n = r(require("./descending")),
        e = r(require("./identity")),
        u = require("./math");

    function r(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function l() {
      var r = e.default,
          l = n.default,
          a = null,
          f = (0, t.default)(0),
          o = (0, t.default)(u.tau),
          i = (0, t.default)(0);

      function d(t) {
        var n,
            e,
            d,
            c,
            s,
            h = t.length,
            p = 0,
            g = new Array(h),
            y = new Array(h),
            A = +f.apply(this, arguments),
            v = Math.min(u.tau, Math.max(-u.tau, o.apply(this, arguments) - A)),
            M = Math.min(Math.abs(v) / h, i.apply(this, arguments)),
            m = M * (v < 0 ? -1 : 1);

        for (n = 0; n < h; ++n) {
          (s = y[g[n] = n] = +r(t[n], n, t)) > 0 && (p += s);
        }

        for (null != l ? g.sort(function (t, n) {
          return l(y[t], y[n]);
        }) : null != a && g.sort(function (n, e) {
          return a(t[n], t[e]);
        }), n = 0, d = p ? (v - h * m) / p : 0; n < h; ++n, A = c) {
          e = g[n], c = A + ((s = y[e]) > 0 ? s * d : 0) + m, y[e] = {
            data: t[e],
            index: n,
            value: s,
            startAngle: A,
            endAngle: c,
            padAngle: M
          };
        }

        return y;
      }

      return d.value = function (n) {
        return arguments.length ? (r = "function" == typeof n ? n : (0, t.default)(+n), d) : r;
      }, d.sortValues = function (t) {
        return arguments.length ? (l = t, a = null, d) : l;
      }, d.sort = function (t) {
        return arguments.length ? (a = t, l = null, d) : a;
      }, d.startAngle = function (n) {
        return arguments.length ? (f = "function" == typeof n ? n : (0, t.default)(+n), d) : f;
      }, d.endAngle = function (n) {
        return arguments.length ? (o = "function" == typeof n ? n : (0, t.default)(+n), d) : o;
      }, d.padAngle = function (n) {
        return arguments.length ? (i = "function" == typeof n ? n : (0, t.default)(+n), d) : i;
      }, d;
    }
  }, {
    "./constant": "H3qE",
    "./descending": "wjXp",
    "./identity": "nPOL",
    "./math": "9R8v"
  }],
  "m9TD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.curveRadialLinear = void 0;
    var e = t(require("./linear"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = i(e.default);

    function n(e) {
      this._curve = e;
    }

    function i(e) {
      function t(t) {
        return new n(e(t));
      }

      return t._curve = e, t;
    }

    exports.curveRadialLinear = r, n.prototype = {
      areaStart: function areaStart() {
        this._curve.areaStart();
      },
      areaEnd: function areaEnd() {
        this._curve.areaEnd();
      },
      lineStart: function lineStart() {
        this._curve.lineStart();
      },
      lineEnd: function lineEnd() {
        this._curve.lineEnd();
      },
      point: function point(e, t) {
        this._curve.point(t * Math.sin(e), t * -Math.cos(e));
      }
    };
  }, {
    "./linear": "4VCF"
  }],
  "p8dR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.lineRadial = a, exports.default = i;
    var e = u(require("./curve/radial")),
        r = t(require("./line"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function u(e) {
      if (e && e.__esModule) return e;
      var r = n();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var u = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var a in e) {
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            var i = u ? Object.getOwnPropertyDescriptor(e, a) : null;
            i && (i.get || i.set) ? Object.defineProperty(t, a, i) : t[a] = e[a];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function a(r) {
      var t = r.curve;
      return r.angle = r.x, delete r.x, r.radius = r.y, delete r.y, r.curve = function (r) {
        return arguments.length ? t((0, e.default)(r)) : t()._curve;
      }, r;
    }

    function i() {
      return a((0, r.default)().curve(e.curveRadialLinear));
    }
  }, {
    "./curve/radial": "m9TD",
    "./line": "Ume/"
  }],
  "7HIq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = u;

    var e = l(require("./curve/radial")),
        r = t(require("./area")),
        n = require("./lineRadial");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return i = function i() {
        return e;
      }, e;
    }

    function l(e) {
      if (e && e.__esModule) return e;
      var r = i();
      if (r && r.has(e)) return r.get(e);
      var n = {};

      if (null != e) {
        var t = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var l in e) {
          if (Object.prototype.hasOwnProperty.call(e, l)) {
            var u = t ? Object.getOwnPropertyDescriptor(e, l) : null;
            u && (u.get || u.set) ? Object.defineProperty(n, l, u) : n[l] = e[l];
          }
        }
      }

      return n.default = e, r && r.set(e, n), n;
    }

    function u() {
      var t = (0, r.default)().curve(e.curveRadialLinear),
          i = t.curve,
          l = t.lineX0,
          u = t.lineX1,
          a = t.lineY0,
          d = t.lineY1;
      return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
        return (0, n.lineRadial)(l());
      }, delete t.lineX0, t.lineEndAngle = function () {
        return (0, n.lineRadial)(u());
      }, delete t.lineX1, t.lineInnerRadius = function () {
        return (0, n.lineRadial)(a());
      }, delete t.lineY0, t.lineOuterRadius = function () {
        return (0, n.lineRadial)(d());
      }, delete t.lineY1, t.curve = function (r) {
        return arguments.length ? i((0, e.default)(r)) : i()._curve;
      }, t;
    }
  }, {
    "./curve/radial": "m9TD",
    "./area": "UWil",
    "./lineRadial": "p8dR"
  }],
  "wQOf": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      return [(t = +t) * Math.cos(e -= Math.PI / 2), t * Math.sin(e)];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "brsM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.slice = void 0;
    var e = Array.prototype.slice;
    exports.slice = e;
  }, {}],
  "CMsX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.linkHorizontal = s, exports.linkVertical = d, exports.linkRadial = y;

    var e = require("d3-path"),
        t = require("../array"),
        n = i(require("../constant")),
        r = require("../point"),
        u = i(require("../pointRadial"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e) {
      return e.source;
    }

    function o(e) {
      return e.target;
    }

    function a(u) {
      var i = l,
          a = o,
          f = r.x,
          c = r.y,
          p = null;

      function s() {
        var n,
            r = t.slice.call(arguments),
            l = i.apply(this, r),
            o = a.apply(this, r);
        if (p || (p = n = (0, e.path)()), u(p, +f.apply(this, (r[0] = l, r)), +c.apply(this, r), +f.apply(this, (r[0] = o, r)), +c.apply(this, r)), n) return p = null, n + "" || null;
      }

      return s.source = function (e) {
        return arguments.length ? (i = e, s) : i;
      }, s.target = function (e) {
        return arguments.length ? (a = e, s) : a;
      }, s.x = function (e) {
        return arguments.length ? (f = "function" == typeof e ? e : (0, n.default)(+e), s) : f;
      }, s.y = function (e) {
        return arguments.length ? (c = "function" == typeof e ? e : (0, n.default)(+e), s) : c;
      }, s.context = function (e) {
        return arguments.length ? (p = null == e ? null : e, s) : p;
      }, s;
    }

    function f(e, t, n, r, u) {
      e.moveTo(t, n), e.bezierCurveTo(t = (t + r) / 2, n, t, u, r, u);
    }

    function c(e, t, n, r, u) {
      e.moveTo(t, n), e.bezierCurveTo(t, n = (n + u) / 2, r, n, r, u);
    }

    function p(e, t, n, r, i) {
      var l = (0, u.default)(t, n),
          o = (0, u.default)(t, n = (n + i) / 2),
          a = (0, u.default)(r, n),
          f = (0, u.default)(r, i);
      e.moveTo(l[0], l[1]), e.bezierCurveTo(o[0], o[1], a[0], a[1], f[0], f[1]);
    }

    function s() {
      return a(f);
    }

    function d() {
      return a(c);
    }

    function y() {
      var e = a(p);
      return e.angle = e.x, delete e.x, e.radius = e.y, delete e.y, e;
    }
  }, {
    "d3-path": "dz42",
    "../array": "brsM",
    "../constant": "H3qE",
    "../point": "aLIe",
    "../pointRadial": "wQOf"
  }],
  "NEs3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../math"),
        t = {
      draw: function draw(t, r) {
        var a = Math.sqrt(r / e.pi);
        t.moveTo(a, 0), t.arc(0, 0, a, 0, e.tau);
      }
    };

    exports.default = t;
  }, {
    "../math": "9R8v"
  }],
  "57OD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      draw: function draw(e, o) {
        var l = Math.sqrt(o / 5) / 2;
        e.moveTo(-3 * l, -l), e.lineTo(-l, -l), e.lineTo(-l, -3 * l), e.lineTo(l, -3 * l), e.lineTo(l, -l), e.lineTo(3 * l, -l), e.lineTo(3 * l, l), e.lineTo(l, l), e.lineTo(l, 3 * l), e.lineTo(-l, 3 * l), e.lineTo(-l, l), e.lineTo(-3 * l, l), e.closePath();
      }
    };
    exports.default = e;
  }, {}],
  "nSnU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = Math.sqrt(1 / 3),
        t = 2 * e,
        o = {
      draw: function draw(o, r) {
        var a = Math.sqrt(r / t),
            s = a * e;
        o.moveTo(0, -a), o.lineTo(s, 0), o.lineTo(0, a), o.lineTo(-s, 0), o.closePath();
      }
    };
    exports.default = o;
  }, {}],
  "3SkC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("../math"),
        a = .8908130915292852,
        e = Math.sin(t.pi / 10) / Math.sin(7 * t.pi / 10),
        o = Math.sin(t.tau / 10) * e,
        r = -Math.cos(t.tau / 10) * e,
        i = {
      draw: function draw(e, i) {
        var s = Math.sqrt(i * a),
            n = o * s,
            u = r * s;
        e.moveTo(0, -s), e.lineTo(n, u);

        for (var h = 1; h < 5; ++h) {
          var l = t.tau * h / 5,
              M = Math.cos(l),
              v = Math.sin(l);
          e.lineTo(v * s, -M * s), e.lineTo(M * n - v * u, v * n + M * u);
        }

        e.closePath();
      }
    };

    exports.default = i;
  }, {
    "../math": "9R8v"
  }],
  "lQ43": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      draw: function draw(e, t) {
        var r = Math.sqrt(t),
            a = -r / 2;
        e.rect(a, a, r, r);
      }
    };
    exports.default = e;
  }, {}],
  "Z5S+": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = Math.sqrt(3),
        t = {
      draw: function draw(t, o) {
        var r = -Math.sqrt(o / (3 * e));
        t.moveTo(0, 2 * r), t.lineTo(-e * r, -r), t.lineTo(e * r, -r), t.closePath();
      }
    };
    exports.default = t;
  }, {}],
  "JWBh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = -.5,
        o = Math.sqrt(3) / 2,
        t = 1 / Math.sqrt(12),
        l = 3 * (t / 2 + 1),
        i = {
      draw: function draw(i, r) {
        var n = Math.sqrt(r / l),
            a = n / 2,
            s = n * t,
            T = a,
            d = n * t + n,
            u = -T,
            v = d;
        i.moveTo(a, s), i.lineTo(T, d), i.lineTo(u, v), i.lineTo(e * a - o * s, o * a + e * s), i.lineTo(e * T - o * d, o * T + e * d), i.lineTo(e * u - o * v, o * u + e * v), i.lineTo(e * a + o * s, e * s - o * a), i.lineTo(e * T + o * d, e * d - o * T), i.lineTo(e * u + o * v, e * v - o * u), i.closePath();
      }
    };
    exports.default = i;
  }, {}],
  "XBPQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = d, exports.symbols = void 0;

    var e = require("d3-path"),
        t = s(require("./symbol/circle")),
        r = s(require("./symbol/cross")),
        u = s(require("./symbol/diamond")),
        l = s(require("./symbol/star")),
        n = s(require("./symbol/square")),
        o = s(require("./symbol/triangle")),
        a = s(require("./symbol/wye")),
        i = s(require("./constant"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var f = [t.default, r.default, u.default, n.default, l.default, o.default, a.default];

    function d() {
      var r = (0, i.default)(t.default),
          u = (0, i.default)(64),
          l = null;

      function n() {
        var t;
        if (l || (l = t = (0, e.path)()), r.apply(this, arguments).draw(l, +u.apply(this, arguments)), t) return l = null, t + "" || null;
      }

      return n.type = function (e) {
        return arguments.length ? (r = "function" == typeof e ? e : (0, i.default)(e), n) : r;
      }, n.size = function (e) {
        return arguments.length ? (u = "function" == typeof e ? e : (0, i.default)(+e), n) : u;
      }, n.context = function (e) {
        return arguments.length ? (l = null == e ? null : e, n) : l;
      }, n;
    }

    exports.symbols = f;
  }, {
    "d3-path": "dz42",
    "./symbol/circle": "NEs3",
    "./symbol/cross": "57OD",
    "./symbol/diamond": "nSnU",
    "./symbol/star": "3SkC",
    "./symbol/square": "lQ43",
    "./symbol/triangle": "Z5S+",
    "./symbol/wye": "JWBh",
    "./constant": "H3qE"
  }],
  "eWqU": [function (require, module, exports) {
    "use strict";

    function e() {}

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "XakR": [function (require, module, exports) {
    "use strict";

    function t(t, i, s) {
      t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + i) / 6, (t._y0 + 4 * t._y1 + s) / 6);
    }

    function i(t) {
      this._context = t;
    }

    function s(t) {
      return new i(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = t, exports.Basis = i, exports.default = s, i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 3:
            t(this, this._x1, this._y1);

          case 2:
            this._context.lineTo(this._x1, this._y1);

        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);

          default:
            t(this, i, s);
        }

        this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {}],
  "WkDE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = _;

    var t = s(require("../noop")),
        i = require("./basis");

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t) {
      this._context = t;
    }

    function _(t) {
      return new h(t);
    }

    h.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;

          case 2:
            this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
            break;

          case 3:
            this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        }
      },
      point: function point(t, s) {
        switch (t = +t, s = +s, this._point) {
          case 0:
            this._point = 1, this._x2 = t, this._y2 = s;
            break;

          case 1:
            this._point = 2, this._x3 = t, this._y3 = s;
            break;

          case 2:
            this._point = 3, this._x4 = t, this._y4 = s, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + s) / 6);
            break;

          default:
            (0, i.point)(this, t, s);
        }

        this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {
    "../noop": "eWqU",
    "./basis": "XakR"
  }],
  "+5Gg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var t = require("./basis");

    function i(t) {
      this._context = t;
    }

    function s(t) {
      return new i(t);
    }

    i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + i) / 6,
                n = (this._y0 + 4 * this._y1 + s) / 6;
            this._line ? this._context.lineTo(e, n) : this._context.moveTo(e, n);
            break;

          case 3:
            this._point = 4;

          default:
            (0, t.point)(this, i, s);
        }

        this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = s;
      }
    };
  }, {
    "./basis": "XakR"
  }],
  "eh91": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./basis");

    function i(i, s) {
      this._basis = new t.Basis(i), this._beta = s;
    }

    i.prototype = {
      lineStart: function lineStart() {
        this._x = [], this._y = [], this._basis.lineStart();
      },
      lineEnd: function lineEnd() {
        var t = this._x,
            i = this._y,
            s = t.length - 1;
        if (s > 0) for (var e, n = t[0], a = i[0], r = t[s] - n, h = i[s] - a, u = -1; ++u <= s;) {
          e = u / s, this._basis.point(this._beta * t[u] + (1 - this._beta) * (n + e * r), this._beta * i[u] + (1 - this._beta) * (a + e * h));
        }
        this._x = this._y = null, this._basis.lineEnd();
      },
      point: function point(t, i) {
        this._x.push(+t), this._y.push(+i);
      }
    };

    var s = function s(e) {
      function n(s) {
        return 1 === e ? new t.Basis(s) : new i(s, e);
      }

      return n.beta = function (t) {
        return s(+t);
      }, n;
    }(.85);

    exports.default = s;
  }, {
    "./basis": "XakR"
  }],
  "fNTp": [function (require, module, exports) {
    "use strict";

    function t(t, i, s) {
      t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - i), t._y2 + t._k * (t._y1 - s), t._x2, t._y2);
    }

    function i(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = t, exports.Cardinal = i, exports.default = void 0, i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);

            break;

          case 3:
            t(this, this._x1, this._y1);
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(i, s) : this._context.moveTo(i, s);
            break;

          case 1:
            this._point = 2, this._x1 = i, this._y1 = s;
            break;

          case 2:
            this._point = 3;

          default:
            t(this, i, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var s = function t(s) {
      function _(t) {
        return new i(t, s);
      }

      return _.tension = function (i) {
        return t(+i);
      }, _;
    }(0);

    exports.default = s;
  }, {}],
  "euEz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.CardinalClosed = h, exports.default = void 0;

    var t = s(require("../noop")),
        i = require("./cardinal");

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    h.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;

          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;

          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      },
      point: function point(t, s) {
        switch (t = +t, s = +s, this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = s;
            break;

          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = s);
            break;

          case 2:
            this._point = 3, this._x5 = t, this._y5 = s;
            break;

          default:
            (0, i.point)(this, t, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var e = function t(i) {
      function s(t) {
        return new h(t, i);
      }

      return s.tension = function (i) {
        return t(+i);
      }, s;
    }(0);

    exports.default = e;
  }, {
    "../noop": "eWqU",
    "./cardinal": "fNTp"
  }],
  "it46": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.CardinalOpen = i, exports.default = void 0;

    var t = require("./cardinal");

    function i(t, i) {
      this._context = t, this._k = (1 - i) / 6;
    }

    i.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(i, s) {
        switch (i = +i, s = +s, this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;

          case 3:
            this._point = 4;

          default:
            (0, t.point)(this, i, s);
        }

        this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = s;
      }
    };

    var s = function t(s) {
      function n(t) {
        return new i(t, s);
      }

      return n.tension = function (i) {
        return t(+i);
      }, n;
    }(0);

    exports.default = s;
  }, {
    "./cardinal": "fNTp"
  }],
  "oWDJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.point = i, exports.default = void 0;

    var _ = require("../math"),
        t = require("./cardinal");

    function i(t, i, a) {
      var s = t._x1,
          h = t._y1,
          l = t._x2,
          n = t._y2;

      if (t._l01_a > _.epsilon) {
        var e = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
            o = 3 * t._l01_a * (t._l01_a + t._l12_a);
        s = (s * e - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / o, h = (h * e - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / o;
      }

      if (t._l23_a > _.epsilon) {
        var r = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
            c = 3 * t._l23_a * (t._l23_a + t._l12_a);
        l = (l * r + t._x1 * t._l23_2a - i * t._l12_2a) / c, n = (n * r + t._y1 * t._l23_2a - a * t._l12_2a) / c;
      }

      t._context.bezierCurveTo(s, h, l, n, t._x2, t._y2);
    }

    function a(_, t) {
      this._context = _, this._alpha = t;
    }

    a.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);

            break;

          case 3:
            this.point(this._x2, this._y2);
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(_, t) {
        if (_ = +_, t = +t, this._point) {
          var a = this._x2 - _,
              s = this._y2 - t;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(a * a + s * s, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(_, t) : this._context.moveTo(_, t);
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3;

          default:
            i(this, _, t);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = _, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
      }
    };

    var s = function _(i) {
      function s(_) {
        return i ? new a(_, i) : new t.Cardinal(_, 0);
      }

      return s.alpha = function (t) {
        return _(+t);
      }, s;
    }(.5);

    exports.default = s;
  }, {
    "../math": "9R8v",
    "./cardinal": "fNTp"
  }],
  "41Cs": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./cardinalClosed"),
        i = _(require("../noop")),
        s = require("./catmullRom");

    function _(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function h(t, i) {
      this._context = t, this._alpha = i;
    }

    h.prototype = {
      areaStart: i.default,
      areaEnd: i.default,
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;

          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;

          case 3:
            this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        }
      },
      point: function point(t, i) {
        if (t = +t, i = +i, this._point) {
          var _ = this._x2 - t,
              h = this._y2 - i;

          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(_ * _ + h * h, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1, this._x3 = t, this._y3 = i;
            break;

          case 1:
            this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = i);
            break;

          case 2:
            this._point = 3, this._x5 = t, this._y5 = i;
            break;

          default:
            (0, s.point)(this, t, i);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = i;
      }
    };

    var e = function i(s) {
      function _(i) {
        return s ? new h(i, s) : new t.CardinalClosed(i, 0);
      }

      return _.alpha = function (t) {
        return i(+t);
      }, _;
    }(.5);

    exports.default = e;
  }, {
    "./cardinalClosed": "euEz",
    "../noop": "eWqU",
    "./catmullRom": "oWDJ"
  }],
  "Vf6b": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("./cardinalOpen"),
        i = require("./catmullRom");

    function _(t, i) {
      this._context = t, this._alpha = i;
    }

    _.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
      },
      lineEnd: function lineEnd() {
        (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, _) {
        if (t = +t, _ = +_, this._point) {
          var s = this._x2 - t,
              h = this._y2 - _;
          this._l23_a = Math.sqrt(this._l23_2a = Math.pow(s * s + h * h, this._alpha));
        }

        switch (this._point) {
          case 0:
            this._point = 1;
            break;

          case 1:
            this._point = 2;
            break;

          case 2:
            this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
            break;

          case 3:
            this._point = 4;

          default:
            (0, i.point)(this, t, _);
        }

        this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = _;
      }
    };

    var s = function i(s) {
      function h(i) {
        return s ? new _(i, s) : new t.CardinalOpen(i, 0);
      }

      return h.alpha = function (t) {
        return i(+t);
      }, h;
    }(.5);

    exports.default = s;
  }, {
    "./cardinalOpen": "it46",
    "./catmullRom": "oWDJ"
  }],
  "QDqS": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;
    var t = e(require("../noop"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function n(t) {
      this._context = t;
    }

    function o(t) {
      return new n(t);
    }

    n.prototype = {
      areaStart: t.default,
      areaEnd: t.default,
      lineStart: function lineStart() {
        this._point = 0;
      },
      lineEnd: function lineEnd() {
        this._point && this._context.closePath();
      },
      point: function point(t, e) {
        t = +t, e = +e, this._point ? this._context.lineTo(t, e) : (this._point = 1, this._context.moveTo(t, e));
      }
    };
  }, {
    "../noop": "eWqU"
  }],
  "7Vae": [function (require, module, exports) {
    "use strict";

    function t(t) {
      return t < 0 ? -1 : 1;
    }

    function i(i, n, e) {
      var o = i._x1 - i._x0,
          s = n - i._x1,
          h = (i._y1 - i._y0) / (o || s < 0 && -0),
          _ = (e - i._y1) / (s || o < 0 && -0),
          c = (h * s + _ * o) / (o + s);

      return (t(h) + t(_)) * Math.min(Math.abs(h), Math.abs(_), .5 * Math.abs(c)) || 0;
    }

    function n(t, i) {
      var n = t._x1 - t._x0;
      return n ? (3 * (t._y1 - t._y0) / n - i) / 2 : i;
    }

    function e(t, i, n) {
      var e = t._x0,
          o = t._y0,
          s = t._x1,
          h = t._y1,
          _ = (s - e) / 3;

      t._context.bezierCurveTo(e + _, o + _ * i, s - _, h - _ * n, s, h);
    }

    function o(t) {
      this._context = t;
    }

    function s(t) {
      this._context = new h(t);
    }

    function h(t) {
      this._context = t;
    }

    function _(t) {
      return new o(t);
    }

    function c(t) {
      return new s(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.monotoneX = _, exports.monotoneY = c, o.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);

            break;

          case 3:
            e(this, this._t0, n(this, this._t0));
        }

        (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
      },
      point: function point(t, o) {
        var s = NaN;

        if (o = +o, (t = +t) !== this._x1 || o !== this._y1) {
          switch (this._point) {
            case 0:
              this._point = 1, this._line ? this._context.lineTo(t, o) : this._context.moveTo(t, o);
              break;

            case 1:
              this._point = 2;
              break;

            case 2:
              this._point = 3, e(this, n(this, s = i(this, t, o)), s);
              break;

            default:
              e(this, this._t0, s = i(this, t, o));
          }

          this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = o, this._t0 = s;
        }
      }
    }, (s.prototype = Object.create(o.prototype)).point = function (t, i) {
      o.prototype.point.call(this, i, t);
    }, h.prototype = {
      moveTo: function moveTo(t, i) {
        this._context.moveTo(i, t);
      },
      closePath: function closePath() {
        this._context.closePath();
      },
      lineTo: function lineTo(t, i) {
        this._context.lineTo(i, t);
      },
      bezierCurveTo: function bezierCurveTo(t, i, n, e, o, s) {
        this._context.bezierCurveTo(i, t, e, n, s, o);
      }
    };
  }, {}],
  "0T3B": [function (require, module, exports) {
    "use strict";

    function t(t) {
      this._context = t;
    }

    function e(t) {
      var e,
          i,
          n = t.length - 1,
          o = new Array(n),
          r = new Array(n),
          s = new Array(n);

      for (o[0] = 0, r[0] = 2, s[0] = t[0] + 2 * t[1], e = 1; e < n - 1; ++e) {
        o[e] = 1, r[e] = 4, s[e] = 4 * t[e] + 2 * t[e + 1];
      }

      for (o[n - 1] = 2, r[n - 1] = 7, s[n - 1] = 8 * t[n - 1] + t[n], e = 1; e < n; ++e) {
        i = o[e] / r[e - 1], r[e] -= i, s[e] -= i * s[e - 1];
      }

      for (o[n - 1] = s[n - 1] / r[n - 1], e = n - 2; e >= 0; --e) {
        o[e] = (s[e] - o[e + 1]) / r[e];
      }

      for (r[n - 1] = (t[n] + o[n - 1]) / 2, e = 0; e < n - 1; ++e) {
        r[e] = 2 * t[e + 1] - o[e + 1];
      }

      return [o, r];
    }

    function i(e) {
      return new t(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x = [], this._y = [];
      },
      lineEnd: function lineEnd() {
        var t = this._x,
            i = this._y,
            n = t.length;
        if (n) if (this._line ? this._context.lineTo(t[0], i[0]) : this._context.moveTo(t[0], i[0]), 2 === n) this._context.lineTo(t[1], i[1]);else for (var o = e(t), r = e(i), s = 0, h = 1; h < n; ++s, ++h) {
          this._context.bezierCurveTo(o[0][s], r[0][s], o[1][s], r[1][s], t[h], i[h]);
        }
        (this._line || 0 !== this._line && 1 === n) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
      },
      point: function point(t, e) {
        this._x.push(+t), this._y.push(+e);
      }
    };
  }, {}],
  "UYn4": [function (require, module, exports) {
    "use strict";

    function t(t, i) {
      this._context = t, this._t = i;
    }

    function i(i) {
      return new t(i, .5);
    }

    function e(i) {
      return new t(i, 0);
    }

    function n(i) {
      return new t(i, 1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i, exports.stepBefore = e, exports.stepAfter = n, t.prototype = {
      areaStart: function areaStart() {
        this._line = 0;
      },
      areaEnd: function areaEnd() {
        this._line = NaN;
      },
      lineStart: function lineStart() {
        this._x = this._y = NaN, this._point = 0;
      },
      lineEnd: function lineEnd() {
        0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
      },
      point: function point(t, i) {
        switch (t = +t, i = +i, this._point) {
          case 0:
            this._point = 1, this._line ? this._context.lineTo(t, i) : this._context.moveTo(t, i);
            break;

          case 1:
            this._point = 2;

          default:
            if (this._t <= 0) this._context.lineTo(this._x, i), this._context.lineTo(t, i);else {
              var e = this._x * (1 - this._t) + t * this._t;
              this._context.lineTo(e, this._y), this._context.lineTo(e, i);
            }
        }

        this._x = t, this._y = i;
      }
    };
  }, {}],
  "x5Mk": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((f = e.length) > 1) for (var r, o, f, s = 1, i = e[t[0]], l = i.length; s < f; ++s) {
        for (o = i, i = e[t[s]], r = 0; r < l; ++r) {
          i[r][1] += i[r][0] = isNaN(o[r][1]) ? o[r][0] : o[r][1];
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "0IgC": [function (require, module, exports) {
    "use strict";

    function e(e) {
      for (var r = e.length, t = new Array(r); --r >= 0;) {
        t[r] = r;
      }

      return t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "S7q8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("./array"),
        t = u(require("./constant")),
        n = u(require("./offset/none")),
        r = u(require("./order/none"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function f(e, t) {
      return e[t];
    }

    function l() {
      var u = (0, t.default)([]),
          l = r.default,
          o = n.default,
          a = f;

      function i(e) {
        var t,
            n,
            r = u.apply(this, arguments),
            f = e.length,
            i = r.length,
            c = new Array(i);

        for (t = 0; t < i; ++t) {
          for (var d, s = r[t], y = c[t] = new Array(f), p = 0; p < f; ++p) {
            y[p] = d = [0, +a(e[p], s, p, e)], d.data = e[p];
          }

          y.key = s;
        }

        for (t = 0, n = l(c); t < i; ++t) {
          c[n[t]].index = t;
        }

        return o(c, n), c;
      }

      return i.keys = function (n) {
        return arguments.length ? (u = "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : u;
      }, i.value = function (e) {
        return arguments.length ? (a = "function" == typeof e ? e : (0, t.default)(+e), i) : a;
      }, i.order = function (n) {
        return arguments.length ? (l = null == n ? r.default : "function" == typeof n ? n : (0, t.default)(e.slice.call(n)), i) : l;
      }, i.offset = function (e) {
        return arguments.length ? (o = null == e ? n.default : e, i) : o;
      }, i;
    }
  }, {
    "./array": "brsM",
    "./constant": "H3qE",
    "./offset/none": "x5Mk",
    "./order/none": "0IgC"
  }],
  "2jY6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((o = r.length) > 0) {
        for (var f, o, u, n = 0, l = r[0].length; n < l; ++n) {
          for (u = f = 0; f < o; ++f) {
            u += r[f][n][1] || 0;
          }

          if (u) for (f = 0; f < o; ++f) {
            r[f][n][1] /= u;
          }
        }

        (0, e.default)(r, t);
      }
    }
  }, {
    "./none": "x5Mk"
  }],
  "P+6Q": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      if ((s = e.length) > 0) for (var r, o, f, l, n, s, u = 0, i = e[t[0]].length; u < i; ++u) {
        for (l = n = 0, r = 0; r < s; ++r) {
          (f = (o = e[t[r]][u])[1] - o[0]) >= 0 ? (o[0] = l, o[1] = l += f) : f < 0 ? (o[1] = n, o[0] = n += f) : o[0] = l;
        }
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "sf4d": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((u = r.length) > 0) {
        for (var u, n = 0, o = r[t[0]], f = o.length; n < f; ++n) {
          for (var l = 0, a = 0; l < u; ++l) {
            a += r[l][n][1] || 0;
          }

          o[n][1] += o[n][0] = -a / 2;
        }

        (0, e.default)(r, t);
      }
    }
  }, {
    "./none": "x5Mk"
  }],
  "EH71": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r, t) {
      if ((f = r.length) > 0 && (u = (o = r[t[0]]).length) > 0) {
        for (var o, u, f, n = 0, a = 1; a < u; ++a) {
          for (var l = 0, d = 0, i = 0; l < f; ++l) {
            for (var s = r[t[l]], v = s[a][1] || 0, c = (v - (s[a - 1][1] || 0)) / 2, _ = 0; _ < l; ++_) {
              var p = r[t[_]];
              c += (p[a][1] || 0) - (p[a - 1][1] || 0);
            }

            d += v, i += c * v;
          }

          o[a - 1][1] += o[a - 1][0] = n, d && (n -= i / d);
        }

        o[a - 1][1] += o[a - 1][0] = n, (0, e.default)(r, t);
      }
    }
  }, {
    "./none": "x5Mk"
  }],
  "zyBr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r.map(n);
      return (0, e.default)(r).sort(function (e, r) {
        return t[e] - t[r];
      });
    }

    function n(e) {
      for (var r, t = -1, n = 0, u = e.length, o = -1 / 0; ++t < u;) {
        (r = +e[t][1]) > o && (o = r, n = t);
      }

      return n;
    }
  }, {
    "./none": "0IgC"
  }],
  "4koe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t, exports.sum = u;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      var t = r.map(u);
      return (0, e.default)(r).sort(function (e, r) {
        return t[e] - t[r];
      });
    }

    function u(e) {
      for (var r, t = 0, u = -1, n = e.length; ++u < n;) {
        (r = +e[u][1]) && (t += r);
      }

      return t;
    }
  }, {
    "./none": "0IgC"
  }],
  "i2th": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./ascending"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      return (0, e.default)(r).reverse();
    }
  }, {
    "./ascending": "4koe"
  }],
  "msEL": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;

    var e = u(require("./appearance")),
        r = require("./ascending");

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(u) {
      var t,
          a,
          n = u.length,
          s = u.map(r.sum),
          o = (0, e.default)(u),
          c = 0,
          p = 0,
          d = [],
          f = [];

      for (t = 0; t < n; ++t) {
        a = o[t], c < p ? (c += s[a], d.push(a)) : (p += s[a], f.push(a));
      }

      return f.reverse().concat(d);
    }
  }, {
    "./appearance": "zyBr",
    "./ascending": "4koe"
  }],
  "w5Iz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = t;
    var e = r(require("./none"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(r) {
      return (0, e.default)(r).reverse();
    }
  }, {
    "./none": "0IgC"
  }],
  "pW+U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "arc", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "area", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "line", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "pie", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "areaRadial", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "radialArea", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "lineRadial", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "radialLine", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "pointRadial", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "linkHorizontal", {
      enumerable: !0,
      get: function get() {
        return a.linkHorizontal;
      }
    }), Object.defineProperty(exports, "linkVertical", {
      enumerable: !0,
      get: function get() {
        return a.linkVertical;
      }
    }), Object.defineProperty(exports, "linkRadial", {
      enumerable: !0,
      get: function get() {
        return a.linkRadial;
      }
    }), Object.defineProperty(exports, "symbol", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "symbols", {
      enumerable: !0,
      get: function get() {
        return l.symbols;
      }
    }), Object.defineProperty(exports, "symbolCircle", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "symbolCross", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "symbolDiamond", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "symbolSquare", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "symbolStar", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "symbolTriangle", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "symbolWye", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "curveBasisClosed", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "curveBasisOpen", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "curveBasis", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "curveBundle", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "curveCardinalClosed", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "curveCardinalOpen", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "curveCardinal", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRomClosed", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRomOpen", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "curveCatmullRom", {
      enumerable: !0,
      get: function get() {
        return C.default;
      }
    }), Object.defineProperty(exports, "curveLinearClosed", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "curveLinear", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "curveMonotoneX", {
      enumerable: !0,
      get: function get() {
        return w.monotoneX;
      }
    }), Object.defineProperty(exports, "curveMonotoneY", {
      enumerable: !0,
      get: function get() {
        return w.monotoneY;
      }
    }), Object.defineProperty(exports, "curveNatural", {
      enumerable: !0,
      get: function get() {
        return B.default;
      }
    }), Object.defineProperty(exports, "curveStep", {
      enumerable: !0,
      get: function get() {
        return S.default;
      }
    }), Object.defineProperty(exports, "curveStepAfter", {
      enumerable: !0,
      get: function get() {
        return S.stepAfter;
      }
    }), Object.defineProperty(exports, "curveStepBefore", {
      enumerable: !0,
      get: function get() {
        return S.stepBefore;
      }
    }), Object.defineProperty(exports, "stack", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "stackOffsetExpand", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "stackOffsetDiverging", {
      enumerable: !0,
      get: function get() {
        return D.default;
      }
    }), Object.defineProperty(exports, "stackOffsetNone", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "stackOffsetSilhouette", {
      enumerable: !0,
      get: function get() {
        return W.default;
      }
    }), Object.defineProperty(exports, "stackOffsetWiggle", {
      enumerable: !0,
      get: function get() {
        return L.default;
      }
    }), Object.defineProperty(exports, "stackOrderAppearance", {
      enumerable: !0,
      get: function get() {
        return N.default;
      }
    }), Object.defineProperty(exports, "stackOrderAscending", {
      enumerable: !0,
      get: function get() {
        return z.default;
      }
    }), Object.defineProperty(exports, "stackOrderDescending", {
      enumerable: !0,
      get: function get() {
        return H.default;
      }
    }), Object.defineProperty(exports, "stackOrderInsideOut", {
      enumerable: !0,
      get: function get() {
        return V.default;
      }
    }), Object.defineProperty(exports, "stackOrderNone", {
      enumerable: !0,
      get: function get() {
        return X.default;
      }
    }), Object.defineProperty(exports, "stackOrderReverse", {
      enumerable: !0,
      get: function get() {
        return Y.default;
      }
    });

    var e = T(require("./arc")),
        r = T(require("./area")),
        t = T(require("./line")),
        n = T(require("./pie")),
        u = T(require("./areaRadial")),
        o = T(require("./lineRadial")),
        i = T(require("./pointRadial")),
        a = require("./link/index"),
        l = I(require("./symbol")),
        f = T(require("./symbol/circle")),
        c = T(require("./symbol/cross")),
        d = T(require("./symbol/diamond")),
        s = T(require("./symbol/square")),
        p = T(require("./symbol/star")),
        b = T(require("./symbol/triangle")),
        m = T(require("./symbol/wye")),
        y = T(require("./curve/basisClosed")),
        O = T(require("./curve/basisOpen")),
        g = T(require("./curve/basis")),
        j = T(require("./curve/bundle")),
        P = T(require("./curve/cardinalClosed")),
        x = T(require("./curve/cardinalOpen")),
        q = T(require("./curve/cardinal")),
        v = T(require("./curve/catmullRomClosed")),
        k = T(require("./curve/catmullRomOpen")),
        C = T(require("./curve/catmullRom")),
        R = T(require("./curve/linearClosed")),
        M = T(require("./curve/linear")),
        w = require("./curve/monotone"),
        B = T(require("./curve/natural")),
        S = I(require("./curve/step")),
        _ = T(require("./stack")),
        A = T(require("./offset/expand")),
        D = T(require("./offset/diverging")),
        h = T(require("./offset/none")),
        W = T(require("./offset/silhouette")),
        L = T(require("./offset/wiggle")),
        N = T(require("./order/appearance")),
        z = T(require("./order/ascending")),
        H = T(require("./order/descending")),
        V = T(require("./order/insideOut")),
        X = T(require("./order/none")),
        Y = T(require("./order/reverse"));

    function E() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return E = function E() {
        return e;
      }, e;
    }

    function I(e) {
      if (e && e.__esModule) return e;
      var r = E();
      if (r && r.has(e)) return r.get(e);
      var t = {};

      if (null != e) {
        var n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var u in e) {
          if (Object.prototype.hasOwnProperty.call(e, u)) {
            var o = n ? Object.getOwnPropertyDescriptor(e, u) : null;
            o && (o.get || o.set) ? Object.defineProperty(t, u, o) : t[u] = e[u];
          }
        }
      }

      return t.default = e, r && r.set(e, t), t;
    }

    function T(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./arc": "TV07",
    "./area": "UWil",
    "./line": "Ume/",
    "./pie": "5OJY",
    "./areaRadial": "7HIq",
    "./lineRadial": "p8dR",
    "./pointRadial": "wQOf",
    "./link/index": "CMsX",
    "./symbol": "XBPQ",
    "./symbol/circle": "NEs3",
    "./symbol/cross": "57OD",
    "./symbol/diamond": "nSnU",
    "./symbol/square": "lQ43",
    "./symbol/star": "3SkC",
    "./symbol/triangle": "Z5S+",
    "./symbol/wye": "JWBh",
    "./curve/basisClosed": "WkDE",
    "./curve/basisOpen": "+5Gg",
    "./curve/basis": "XakR",
    "./curve/bundle": "eh91",
    "./curve/cardinalClosed": "euEz",
    "./curve/cardinalOpen": "it46",
    "./curve/cardinal": "fNTp",
    "./curve/catmullRomClosed": "41Cs",
    "./curve/catmullRomOpen": "Vf6b",
    "./curve/catmullRom": "oWDJ",
    "./curve/linearClosed": "QDqS",
    "./curve/linear": "4VCF",
    "./curve/monotone": "7Vae",
    "./curve/natural": "0T3B",
    "./curve/step": "UYn4",
    "./stack": "S7q8",
    "./offset/expand": "2jY6",
    "./offset/diverging": "P+6Q",
    "./offset/none": "x5Mk",
    "./offset/silhouette": "sf4d",
    "./offset/wiggle": "EH71",
    "./order/appearance": "zyBr",
    "./order/ascending": "4koe",
    "./order/descending": "i2th",
    "./order/insideOut": "msEL",
    "./order/none": "0IgC",
    "./order/reverse": "w5Iz"
  }],
  "1DHq": [function (require, module, exports) {
    var define;
    var global = arguments[3];
    var n,
        t = arguments[3];
    !function (t, e) {
      "object" == _typeof(exports) && "undefined" != typeof module ? e(exports, require("d3-array"), require("d3-scale")) : "function" == typeof n && n.amd ? n(["exports", "d3-array", "d3-scale"], e) : e(t.d3 = {}, t.d3, t.d3);
    }(this, function (n, t, e) {
      "use strict";

      function r(n) {
        var t,
            e,
            r,
            i,
            a,
            u,
            o,
            d,
            f,
            c,
            l = n.width,
            g = n.height,
            s = n.data,
            h = n.justTest,
            x = n.xMax,
            y = n.xIndex,
            p = n.x,
            m = n.y1,
            v = n.y0;

        for (r = 0; r < s.length && !((e = (t = p(u = s[r])) + l) > x); r++) {
          for (i = y(e), f = -1 / 0, c = 1 / 0, a = r; a <= i && ((d = v(u = s[a])) < c && (c = d), (o = m(u)) > f && (f = o), !(c - f < g)); a++) {
            ;
          }

          if (c - f >= g) return !!h || {
            x: t,
            y: f,
            width: l,
            height: g
          };
        }

        return !1;
      }

      function i() {
        return ["translate(" + this.xTranslate + "," + this.yTranslate + ")", "scale(" + this.scale + ")"].join(" ");
      }

      n.areaLabel = function (n) {
        var a,
            u,
            o,
            d,
            f,
            c = 2,
            l = .01,
            g = 100,
            s = !0,
            h = 800,
            x = 0,
            y = 0,
            p = 0,
            m = 0;

        function v(n) {
          return u(n) - o(n);
        }

        function T(n, t, e) {
          var r = d(n, t, 0, n.length - 1),
              i = n[r - 1],
              u = n[r],
              o = a(i),
              f = e(i),
              c = (t - o) / (a(u) - o);
          return f * (1 - c) + e(u) * c;
        }

        function j(n) {
          var j = this.getBBox(),
              I = 1 + x + y,
              w = 1 + p + m,
              b = j.width * I,
              B = j.height * w,
              L = b / B,
              M = t.max(n, v),
              R = t.extent(n, a),
              q = {
            justTest: !0,
            xMax: R[1]
          };

          if (s) {
            var S = e.scaleLinear().domain([0, h - 1]).range(R),
                X = t.range(h).map(function (t) {
              var e = S(t);
              return {
                x: e,
                y0: T(n, e, u),
                y1: T(n, e, o)
              };
            });
            q.xIndex = function (n) {
              return Math.ceil(S.invert(n));
            }, q.data = X, q.x = function (n) {
              return n.x;
            }, q.y0 = function (n) {
              return n.y0;
            }, q.y1 = function (n) {
              return n.y1;
            };
          } else q.xIndex = function (t) {
            return d(n, t);
          }, q.data = n, q.x = a, q.y0 = u, q.y1 = o;

          var Y = function (n, t, e, r, i) {
            var a, u, o;

            for (a = 0; a < i; a++) {
              if ((o = e(u = (n + t) / 2)) && (t - n) / 2 < r) return f = a, u;
              o ? n = u : t = u;
            }

            return null;
          }(c, M, function (n) {
            return q.height = n, q.width = L * n, r(q);
          }, l, g);

          if (null === Y) return {
            failed: !0,
            numIterations: g,
            scale: 0,
            xTranslate: 0,
            yTranslate: 0,
            toString: i
          };
          q.justTest = !1;

          var _ = r(q),
              H = _.x + _.width / I * x,
              O = _.y + _.height / w * p;

          return _.scale = Y / B, _.xTranslate = H - _.scale * j.x, _.yTranslate = O - _.scale * j.y, _.toString = i, _.numIterations = f, _;
        }

        return j.x = function (n) {
          return arguments.length ? (a = n, d = t.bisector(a).right, j) : a;
        }, j.y0 = function (n) {
          return arguments.length ? (u = n, j) : u;
        }, j.y1 = function (n) {
          return arguments.length ? (o = n, j) : o;
        }, j.area = function (n) {
          return j.x(n.x()).y0(n.y0()).y1(n.y1());
        }, j.minHeight = function (n) {
          return arguments.length ? (c = +n, j) : c;
        }, j.epsilon = function (n) {
          return arguments.length ? (l = +n, j) : l;
        }, j.maxIterations = function (n) {
          return arguments.length ? (g = +n, j) : g;
        }, j.interpolate = function (n) {
          return arguments.length ? (s = +n, j) : s;
        }, j.interpolateResolution = function (n) {
          return arguments.length ? (h = +n, j) : h;
        }, j.paddingLeft = function (n) {
          return arguments.length ? (x = +n, j) : x;
        }, j.paddingRight = function (n) {
          return arguments.length ? (y = +n, j) : y;
        }, j.paddingTop = function (n) {
          return arguments.length ? (p = +n, j) : p;
        }, j.paddingBottom = function (n) {
          return arguments.length ? (m = +n, j) : m;
        }, j.paddingX = function (n) {
          return j.paddingLeft(n).paddingRight(n);
        }, j.paddingY = function (n) {
          return j.paddingTop(n).paddingBottom(n);
        }, j.padding = function (n) {
          return j.paddingX(n).paddingY(n);
        }, n && j.area(n), j;
      }, Object.defineProperty(n, "__esModule", {
        value: !0
      });
    });
  }, {
    "d3-array": "cBuZ",
    "d3-scale": "zt+a"
  }],
  "kb6z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.stream = h;

    var t = require("d3-selection");

    require("d3-transition");

    var e = require("d3-shape"),
        a = require("d3-scale"),
        r = require("d3-area-label"),
        n = c(require("d3-tip")),
        s = require("./helpers/numberFormat.js"),
        l = require("./helpers/getFontCss.js"),
        i = require("./helpers/clearChart.js"),
        o = require("./helpers/getColor.js");

    function c(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    require("./tooltip.css");

    var u = "\n".concat((0, l.getFontCss)(["roboto-100", "roboto-400"]), "\ntext {\n  font-family: Roboto, sans-serif;\n  font-size: 13px;\n  fill: #555;\n}\n.area-label {\n  fill: rgba(255,255,255,0.75);\n  pointer-events: none;\n}\n.chart-x-axis-line,\n.chart-tick {\n  fill: #595959;\n}\n");

    function h(l) {
      var c = l.width,
          h = l.height,
          d = l.series,
          f = l.withinElement,
          p = l.animationDuration,
          m = void 0 === p ? 500 : p,
          y = l.animationOffset,
          v = void 0 === y ? 40 : y,
          g = 50,
          x = g / 2,
          b = (c - g) / (d.dates.length - 1),
          k = 20;
      (0, i.clearChart)(f);

      var q,
          M = function () {
        var e = (0, t.select)(f).append("svg").attr("width", c).attr("height", h).attr("class", "sh-chart-stream");
        return e.append("style").text(u), e;
      }(),
          w = function (t) {
        var e = [];
        return e.keys = [], e.colors = [], t.items.forEach(function (t) {
          t.values.forEach(function (a, r) {
            e[r] || (e[r] = {
              time: r
            }), e[r][t.label] = a;
          }), e.keys.push(t.label);
        }), e;
      }(d),
          C = function () {
        var t = {
          index: null,
          element: null,
          enter: function enter(e, a) {
            t.index = a, t.element = this;
          },
          leave: function leave() {
            t.index = null, t.element = null;
          }
        };
        return t;
      }();

      !function () {
        var t = (0, e.stack)().offset(e.stackOffsetWiggle),
            n = (0, a.scaleLinear)(),
            s = (0, a.scaleLinear)(),
            l = (0, e.area)().x(function (t) {
          return n(function (t) {
            return t.time;
          }(t.data));
        }).y0(function (t) {
          return s(t[0]);
        }).y1(function (t) {
          return s(t[1]);
        }).curve(e.curveBasis);
        t.keys(w.keys);
        var i = t(w);
        n.domain([0, w.length - 1]).range([x, c - x]);

        var u = function u(t, e) {
          var a = Math.abs(w.keys.length / 2 - e);
          return Math.floor(a) * v;
        };

        s.domain([Math.min.apply(Math, i[0].map(function (t) {
          return t[0];
        })), Math.max.apply(Math, i[i.length - 1].map(function (t) {
          return t[1];
        }))]).range([h - k, 0]);
        var d = M.selectAll("path").data(i);
        d.enter().append("path").on("mouseenter", C.enter).merge(d).on("mouseleave", C.leave).attr("fill", function (t, e) {
          return (0, o.getColor)(e, w.keys.length + 1);
        }).attr("stroke", function (t, e) {
          return (0, o.getColor)(e, w.keys.length + 1);
        }).attr("stroke-width", .5).attr("d", l).style("transform-origin", "50% 50%").style("opacity", 0).style("transform", "scaleY(0)").transition().duration(m).delay(u).style("opacity", 1).style("transform", "scaleY(1)");
        var f = M.selectAll(".area-label").data(i);
        f.enter().append("text").attr("class", "area-label").merge(f).text(function (t) {
          return t.key;
        }).attr("transform", (0, r.areaLabel)(l)).style("opacity", 0).transition().delay(function (t, e) {
          return u(t, e) + v * w.keys.length / 2;
        }).style("opacity", 1);
      }(), M.selectAll(".date-tick").data(d.dates).enter().append("rect").attr("class", "chart-tick").attr("x", function (t, e) {
        return e * b + x;
      }).attr("y", h - k).attr("width", 1).attr("height", 7), M.append("rect").attr("class", "chart-axis-line chart-x-axis-line").attr("x", x).attr("y", h - k).attr("width", c - g).attr("height", 1), M.selectAll(".date-label").data(d.dates).enter().append("text").attr("class", "chart-axis-label chart-x-axis-label").attr("x", function (t, e) {
        return e * b + x;
      }).attr("y", h).attr("text-anchor", "middle").text(function (t, e) {
        return d.dates.length > c / g && e % 2 ? "" : t;
      }), q = new n.default(), M.call(q), q.attr("class", "sh-chart-tip-outer").html(function (t) {
        var e = t.label,
            a = t.date,
            r = t.amount,
            n = (0, o.getColor)(C.index, w.keys.length + 1);
        return '\n          <div class="sh-chart-tip" style="background-color: '.concat(n, '">\n           <span class="sh-chart-tip-date">').concat(a, ':</span>\n           <span style="sh-chart-tip-amount">').concat(e, " (").concat((0, s.numberFormat)(r), ')</span>\n          </div>\n          <div class="sh-chart-stem" style="border-color: ').concat(n, ' transparent transparent transparent"></div>\n        ');
      }), M.node().addEventListener("mousemove", function (t) {
        var e = d.items[C.index],
            a = t.offsetX;
        if (e) {
          if (a < x || a > c - x) q.hide();else {
            var r = e.label,
                n = Math.round((a - x) / b),
                s = d.dates[n],
                l = d.items[C.index].values[n];
            q.offset([0, a - c / 2]), q.show({
              label: r,
              date: s,
              amount: l
            }, C.element);
          }
        } else q.hide();
      });
    }
  }, {
    "d3-selection": "lm1C",
    "d3-transition": "Fcbi",
    "d3-shape": "pW+U",
    "d3-scale": "zt+a",
    "d3-area-label": "1DHq",
    "d3-tip": "TLCm",
    "./helpers/numberFormat.js": "xUTH",
    "./helpers/getFontCss.js": "fdMH",
    "./helpers/clearChart.js": "0Zyt",
    "./helpers/getColor.js": "xsMK",
    "./tooltip.css": "XIkb"
  }],
  "97BZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "barHorizontal", {
      enumerable: !0,
      get: function get() {
        return e.barHorizontal;
      }
    }), Object.defineProperty(exports, "barVertical", {
      enumerable: !0,
      get: function get() {
        return r.barVertical;
      }
    }), Object.defineProperty(exports, "bubbles", {
      enumerable: !0,
      get: function get() {
        return t.bubbles;
      }
    }), Object.defineProperty(exports, "stream", {
      enumerable: !0,
      get: function get() {
        return a.stream;
      }
    }), Object.defineProperty(exports, "clearChart", {
      enumerable: !0,
      get: function get() {
        return s.clearChart;
      }
    });

    var e = require("./src/charts/barHorizontal.js"),
        r = require("./src/charts/barVertical.js"),
        t = require("./src/charts/bubbles.js"),
        a = require("./src/charts/stream.js"),
        s = require("./src/charts/helpers/clearChart.js");
  }, {
    "./src/charts/barHorizontal.js": "aSqH",
    "./src/charts/barVertical.js": "nYdR",
    "./src/charts/bubbles.js": "lqyP",
    "./src/charts/stream.js": "kb6z",
    "./src/charts/helpers/clearChart.js": "0Zyt"
  }]
}, {}, ["97BZ"], null);
