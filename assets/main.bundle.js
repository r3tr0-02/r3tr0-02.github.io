(() => {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __reExport = (target, module2, desc) => {
      if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames(module2))
          if (!__hasOwnProp.call(target, key) && key !== "default")
            __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
      }
      return target;
    };
    var __toModule = (module2) => {
      return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
    };
  
    // node_modules/htmx.org/dist/htmx.min.js
    var require_htmx_min = __commonJS({
      "node_modules/htmx.org/dist/htmx.min.js"(exports, module) {
        (function(e, t) {
          if (typeof define === "function" && define.amd) {
            define([], t);
          } else {
            e.htmx = t();
          }
        })(typeof self !== "undefined" ? self : exports, function() {
          return function() {
            "use strict";
            var k = { onLoad: t, process: rt, on: I, off: M, trigger: lt, ajax: $t, find: w, findAll: S, closest: L, values: function(e, t) {
              var r = Lt(e, t || "post");
              return r.values;
            }, remove: E, addClass: q, removeClass: R, toggleClass: C, takeClass: O, defineExtension: Qt, removeExtension: er, logAll: b, logger: null, useTemplateFragments: false, config: { historyEnabled: true, historyCacheSize: 10, refreshOnHistoryMiss: false, defaultSwapStyle: "innerHTML", defaultSwapDelay: 0, defaultSettleDelay: 20, includeIndicatorStyles: true, indicatorClass: "htmx-indicator", requestClass: "htmx-request", settlingClass: "htmx-settling", swappingClass: "htmx-swapping", allowEval: true, attributesToSettle: ["class", "style", "width", "height"], withCredentials: false, wsReconnectDelay: "full-jitter", disableSelector: "[hx-disable], [data-hx-disable]" }, parseInterval: f, _: e, createEventSource: function(e) {
              return new EventSource(e, { withCredentials: true });
            }, createWebSocket: function(e) {
              return new WebSocket(e, []);
            } };
            var r = ["get", "post", "put", "delete", "patch"];
            var n = r.map(function(e) {
              return "[hx-" + e + "], [data-hx-" + e + "]";
            }).join(", ");
            function f(e) {
              if (e == void 0) {
                return void 0;
              }
              if (e.slice(-2) == "ms") {
                return parseFloat(e.slice(0, -2)) || void 0;
              }
              if (e.slice(-1) == "s") {
                return parseFloat(e.slice(0, -1)) * 1e3 || void 0;
              }
              return parseFloat(e) || void 0;
            }
            function l(e, t) {
              return e.getAttribute && e.getAttribute(t);
            }
            function s(e, t) {
              return e.hasAttribute && (e.hasAttribute(t) || e.hasAttribute("data-" + t));
            }
            function D(e, t) {
              return l(e, t) || l(e, "data-" + t);
            }
            function c(e) {
              return e.parentElement;
            }
            function F() {
              return document;
            }
            function h(e, t) {
              if (t(e)) {
                return e;
              } else if (c(e)) {
                return h(c(e), t);
              } else {
                return null;
              }
            }
            function X(e, t) {
              var r = null;
              h(e, function(e2) {
                return r = D(e2, t);
              });
              return r;
            }
            function d(e, t) {
              var r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
              return r && r.call(e, t);
            }
            function i(e) {
              var t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
              var r = t.exec(e);
              if (r) {
                return r[1].toLowerCase();
              } else {
                return "";
              }
            }
            function o(e, t) {
              var r = new DOMParser();
              var n = r.parseFromString(e, "text/html");
              var i = n.body;
              while (t > 0) {
                t--;
                i = i.firstChild;
              }
              if (i == null) {
                i = F().createDocumentFragment();
              }
              return i;
            }
            function u(e) {
              if (k.config.useTemplateFragments) {
                var t = o("<body><template>" + e + "</template></body>", 0);
                return t.querySelector("template").content;
              } else {
                var r = i(e);
                switch (r) {
                  case "thead":
                  case "tbody":
                  case "tfoot":
                  case "colgroup":
                  case "caption":
                    return o("<table>" + e + "</table>", 1);
                  case "col":
                    return o("<table><colgroup>" + e + "</colgroup></table>", 2);
                  case "tr":
                    return o("<table><tbody>" + e + "</tbody></table>", 2);
                  case "td":
                  case "th":
                    return o("<table><tbody><tr>" + e + "</tr></tbody></table>", 3);
                  case "script":
                    return o("<div>" + e + "</div>", 1);
                  default:
                    return o(e, 0);
                }
              }
            }
            function P(e) {
              if (e) {
                e();
              }
            }
            function a(e, t) {
              return Object.prototype.toString.call(e) === "[object " + t + "]";
            }
            function v(e) {
              return a(e, "Function");
            }
            function g(e) {
              return a(e, "Object");
            }
            function U(e) {
              var t = "htmx-internal-data";
              var r = e[t];
              if (!r) {
                r = e[t] = {};
              }
              return r;
            }
            function p(e) {
              var t = [];
              if (e) {
                for (var r = 0; r < e.length; r++) {
                  t.push(e[r]);
                }
              }
              return t;
            }
            function j(e, t) {
              if (e) {
                for (var r = 0; r < e.length; r++) {
                  t(e[r]);
                }
              }
            }
            function m(e) {
              var t = e.getBoundingClientRect();
              var r = t.top;
              var n = t.bottom;
              return r < window.innerHeight && n >= 0;
            }
            function z(e) {
              return F().body.contains(e);
            }
            function y(e) {
              return e.trim().split(/\s+/);
            }
            function V(e, t) {
              for (var r in t) {
                if (t.hasOwnProperty(r)) {
                  e[r] = t[r];
                }
              }
              return e;
            }
            function x(e) {
              try {
                return JSON.parse(e);
              } catch (e2) {
                ut(e2);
                return null;
              }
            }
            function e(e) {
              return Ut(F().body, function() {
                return eval(e);
              });
            }
            function t(t) {
              var e = k.on("htmx:load", function(e2) {
                t(e2.detail.elt);
              });
              return e;
            }
            function b() {
              k.logger = function(e, t, r) {
                if (console) {
                  console.log(t, e, r);
                }
              };
            }
            function w(e, t) {
              if (t) {
                return e.querySelector(t);
              } else {
                return w(F(), e);
              }
            }
            function S(e, t) {
              if (t) {
                return e.querySelectorAll(t);
              } else {
                return S(F(), e);
              }
            }
            function E(e, t) {
              e = H(e);
              if (t) {
                setTimeout(function() {
                  E(e);
                }, t);
              } else {
                e.parentElement.removeChild(e);
              }
            }
            function q(e, t, r) {
              e = H(e);
              if (r) {
                setTimeout(function() {
                  q(e, t);
                }, r);
              } else {
                e.classList.add(t);
              }
            }
            function R(e, t, r) {
              e = H(e);
              if (r) {
                setTimeout(function() {
                  R(e, t);
                }, r);
              } else {
                e.classList.remove(t);
              }
            }
            function C(e, t) {
              e = H(e);
              e.classList.toggle(t);
            }
            function O(e, t) {
              e = H(e);
              j(e.parentElement.children, function(e2) {
                R(e2, t);
              });
              q(e, t);
            }
            function L(e, t) {
              e = H(e);
              if (e.closest) {
                return e.closest(t);
              } else {
                do {
                  if (e == null || d(e, t)) {
                    return e;
                  }
                } while (e = e && c(e));
              }
            }
            function A(e, t) {
              if (t.indexOf("closest ") === 0) {
                return [L(e, t.substr(8))];
              } else if (t.indexOf("find ") === 0) {
                return [w(e, t.substr(5))];
              } else {
                return F().querySelectorAll(t);
              }
            }
            function T(e, t) {
              return A(e, t)[0];
            }
            function H(e) {
              if (a(e, "String")) {
                return w(e);
              } else {
                return e;
              }
            }
            function N(e, t, r) {
              if (v(t)) {
                return { target: F().body, event: e, listener: t };
              } else {
                return { target: H(e), event: t, listener: r };
              }
            }
            function I(t, r, n) {
              rr(function() {
                var e2 = N(t, r, n);
                e2.target.addEventListener(e2.event, e2.listener);
              });
              var e = v(r);
              return e ? r : n;
            }
            function M(t, r, n) {
              rr(function() {
                var e = N(t, r, n);
                e.target.removeEventListener(e.event, e.listener);
              });
              return v(r) ? r : n;
            }
            function _(e) {
              var t = h(e, function(e2) {
                return D(e2, "hx-target") !== null;
              });
              if (t) {
                var r = D(t, "hx-target");
                if (r === "this") {
                  return t;
                } else {
                  return T(e, r);
                }
              } else {
                var n = U(e);
                if (n.boosted) {
                  return F().body;
                } else {
                  return e;
                }
              }
            }
            function B(e) {
              var t = k.config.attributesToSettle;
              for (var r = 0; r < t.length; r++) {
                if (e === t[r]) {
                  return true;
                }
              }
              return false;
            }
            function W(t, r) {
              j(t.attributes, function(e) {
                if (!r.hasAttribute(e.name) && B(e.name)) {
                  t.removeAttribute(e.name);
                }
              });
              j(r.attributes, function(e) {
                if (B(e.name)) {
                  t.setAttribute(e.name, e.value);
                }
              });
            }
            function $(e, t) {
              var r = tr(t);
              for (var n = 0; n < r.length; n++) {
                var i = r[n];
                try {
                  if (i.isInlineSwap(e)) {
                    return true;
                  }
                } catch (e2) {
                  ut(e2);
                }
              }
              return e === "outerHTML";
            }
            function J(e, t, r) {
              var n = "#" + t.id;
              var i = "outerHTML";
              if (e === "true") {
              } else if (e.indexOf(":") > 0) {
                i = e.substr(0, e.indexOf(":"));
                n = e.substr(e.indexOf(":") + 1, e.length);
              } else {
                i = e;
              }
              var o = F().querySelector(n);
              if (o) {
                var a;
                a = F().createDocumentFragment();
                a.appendChild(t);
                if (!$(i, o)) {
                  a = t;
                }
                le(i, o, o, a, r);
              } else {
                t.parentNode.removeChild(t);
                ot(F().body, "htmx:oobErrorNoTarget", { content: t });
              }
              return e;
            }
            function Z(e, r) {
              j(S(e, "[hx-swap-oob], [data-hx-swap-oob]"), function(e2) {
                var t = D(e2, "hx-swap-oob");
                if (t != null) {
                  J(t, e2, r);
                }
              });
            }
            function G(e) {
              j(S(e, "[hx-preserve], [data-hx-preserve]"), function(e2) {
                var t = D(e2, "id");
                var r = F().getElementById(t);
                if (r != null) {
                  e2.parentNode.replaceChild(r, e2);
                }
              });
            }
            function K(n, e, i) {
              j(e.querySelectorAll("[id]"), function(e2) {
                if (e2.id && e2.id.length > 0) {
                  var t = n.querySelector(e2.tagName + "[id='" + e2.id + "']");
                  if (t && t !== n) {
                    var r = e2.cloneNode();
                    W(e2, t);
                    i.tasks.push(function() {
                      W(e2, r);
                    });
                  }
                }
              });
            }
            function Y(e) {
              return function() {
                rt(e);
                Ye(e);
                Q(e);
                lt(e, "htmx:load");
              };
            }
            function Q(e) {
              var t = "[autofocus]";
              var r = d(e, t) ? e : e.querySelector(t);
              if (r != null) {
                r.focus();
              }
            }
            function ee(e, t, r, n) {
              K(e, r, n);
              while (r.childNodes.length > 0) {
                var i = r.firstChild;
                e.insertBefore(i, t);
                if (i.nodeType !== Node.TEXT_NODE && i.nodeType !== Node.COMMENT_NODE) {
                  n.tasks.push(Y(i));
                }
              }
            }
            function te(t) {
              var e = U(t);
              if (e.webSocket) {
                e.webSocket.close();
              }
              if (e.sseEventSource) {
                e.sseEventSource.close();
              }
              if (e.listenerInfos) {
                j(e.listenerInfos, function(e2) {
                  if (t !== e2.on) {
                    e2.on.removeEventListener(e2.trigger, e2.listener);
                  }
                });
              }
              if (t.children) {
                j(t.children, function(e2) {
                  te(e2);
                });
              }
            }
            function re(e, t, r) {
              if (e.tagName === "BODY") {
                return se(e, t, r);
              } else {
                var n = e.previousSibling;
                ee(c(e), e, t, r);
                if (n == null) {
                  var i = c(e).firstChild;
                } else {
                  var i = n.nextSibling;
                }
                U(e).replacedWith = i;
                r.elts = [];
                while (i && i !== e) {
                  if (i.nodeType === Node.ELEMENT_NODE) {
                    r.elts.push(i);
                  }
                  i = i.nextElementSibling;
                }
                te(e);
                c(e).removeChild(e);
              }
            }
            function ne(e, t, r) {
              return ee(e, e.firstChild, t, r);
            }
            function ie(e, t, r) {
              return ee(c(e), e, t, r);
            }
            function oe(e, t, r) {
              return ee(e, null, t, r);
            }
            function ae(e, t, r) {
              return ee(c(e), e.nextSibling, t, r);
            }
            function se(e, t, r) {
              var n = e.firstChild;
              ee(e, n, t, r);
              if (n) {
                while (n.nextSibling) {
                  te(n.nextSibling);
                  e.removeChild(n.nextSibling);
                }
                te(n);
                e.removeChild(n);
              }
            }
            function ue(e, t) {
              var r = X(e, "hx-select");
              if (r) {
                var n = F().createDocumentFragment();
                j(t.querySelectorAll(r), function(e2) {
                  n.appendChild(e2);
                });
                t = n;
              }
              return t;
            }
            function le(e, t, r, n, i) {
              switch (e) {
                case "none":
                  return;
                case "outerHTML":
                  re(r, n, i);
                  return;
                case "afterbegin":
                  ne(r, n, i);
                  return;
                case "beforebegin":
                  ie(r, n, i);
                  return;
                case "beforeend":
                  oe(r, n, i);
                  return;
                case "afterend":
                  ae(r, n, i);
                  return;
                default:
                  var o = tr(t);
                  for (var a = 0; a < o.length; a++) {
                    var s = o[a];
                    try {
                      var u = s.handleSwap(e, r, n, i);
                      if (u) {
                        if (typeof u.length !== "undefined") {
                          for (var l = 0; l < u.length; l++) {
                            var f = u[l];
                            if (f.nodeType !== Node.TEXT_NODE && f.nodeType !== Node.COMMENT_NODE) {
                              i.tasks.push(Y(f));
                            }
                          }
                        }
                        return;
                      }
                    } catch (e2) {
                      ut(e2);
                    }
                  }
                  se(r, n, i);
              }
            }
            var fe = /<title>([\s\S]+?)<\/title>/im;
            function ce(e) {
              if (e.indexOf("<title>") > -1 && (e.indexOf("<svg>") == -1 || e.indexOf("<title>") < e.indexOf("<svg>"))) {
                var t = fe.exec(e);
                if (t) {
                  return t[1];
                }
              }
            }
            function he(e, t, r, n, i) {
              var o = ce(n);
              if (o) {
                var a = w("title");
                if (a) {
                  a.innerHTML = o;
                } else {
                  window.document.title = o;
                }
              }
              var s = u(n);
              if (s) {
                Z(s, i);
                s = ue(r, s);
                G(s);
                return le(e, r, t, s, i);
              }
            }
            function de(e, t, r) {
              var n = e.getResponseHeader(t);
              if (n.indexOf("{") === 0) {
                var i = x(n);
                for (var o in i) {
                  if (i.hasOwnProperty(o)) {
                    var a = i[o];
                    if (!g(a)) {
                      a = { value: a };
                    }
                    lt(r, o, a);
                  }
                }
              } else {
                lt(r, n, []);
              }
            }
            var ve = /\s/;
            var ge = /[\s,]/;
            var pe = /[_$a-zA-Z]/;
            var me = /[_$a-zA-Z0-9]/;
            var ye = ['"', "'", "/"];
            var xe = /[^\s]/;
            function be(e) {
              var t = [];
              var r = 0;
              while (r < e.length) {
                if (pe.exec(e.charAt(r))) {
                  var n = r;
                  while (me.exec(e.charAt(r + 1))) {
                    r++;
                  }
                  t.push(e.substr(n, r - n + 1));
                } else if (ye.indexOf(e.charAt(r)) !== -1) {
                  var i = e.charAt(r);
                  var n = r;
                  r++;
                  while (r < e.length && e.charAt(r) !== i) {
                    if (e.charAt(r) === "\\") {
                      r++;
                    }
                    r++;
                  }
                  t.push(e.substr(n, r - n + 1));
                } else {
                  var o = e.charAt(r);
                  t.push(o);
                }
                r++;
              }
              return t;
            }
            function we(e, t, r) {
              return pe.exec(e.charAt(0)) && e !== "true" && e !== "false" && e !== "this" && e !== r && t !== ".";
            }
            function Se(e, t, r) {
              if (t[0] === "[") {
                t.shift();
                var n = 1;
                var i = " return (function(" + r + "){ return (";
                var o = null;
                while (t.length > 0) {
                  var a = t[0];
                  if (a === "]") {
                    n--;
                    if (n === 0) {
                      if (o === null) {
                        i = i + "true";
                      }
                      t.shift();
                      i += ")})";
                      try {
                        var s = Ut(e, function() {
                          return Function(i)();
                        }, function() {
                          return true;
                        });
                        s.source = i;
                        return s;
                      } catch (e2) {
                        ot(F().body, "htmx:syntax:error", { error: e2, source: i });
                        return null;
                      }
                    }
                  } else if (a === "[") {
                    n++;
                  }
                  if (we(a, o, r)) {
                    i += "((" + r + "." + a + ") ? (" + r + "." + a + ") : (window." + a + "))";
                  } else {
                    i = i + a;
                  }
                  o = t.shift();
                }
              }
            }
            function Ee(e, t) {
              var r = "";
              while (e.length > 0 && !e[0].match(t)) {
                r += e.shift();
              }
              return r;
            }
            var qe = "input, textarea, select";
            function Re(e) {
              var t = D(e, "hx-trigger");
              var r = [];
              if (t) {
                var n = be(t);
                do {
                  Ee(n, xe);
                  var i = n.length;
                  var o = Ee(n, /[,\[\s]/);
                  if (o !== "") {
                    if (o === "every") {
                      var a = { trigger: "every" };
                      Ee(n, xe);
                      a.pollInterval = f(Ee(n, ve));
                      r.push(a);
                    } else if (o.indexOf("sse:") === 0) {
                      r.push({ trigger: "sse", sseEvent: o.substr(4) });
                    } else {
                      var s = { trigger: o };
                      var u = Se(e, n, "event");
                      if (u) {
                        s.eventFilter = u;
                      }
                      while (n.length > 0 && n[0] !== ",") {
                        Ee(n, xe);
                        var l = n.shift();
                        if (l === "changed") {
                          s.changed = true;
                        } else if (l === "once") {
                          s.once = true;
                        } else if (l === "consume") {
                          s.consume = true;
                        } else if (l === "delay" && n[0] === ":") {
                          n.shift();
                          s.delay = f(Ee(n, ge));
                        } else if (l === "from" && n[0] === ":") {
                          n.shift();
                          s.from = Ee(n, ge);
                        } else if (l === "target" && n[0] === ":") {
                          n.shift();
                          s.target = Ee(n, ge);
                        } else if (l === "throttle" && n[0] === ":") {
                          n.shift();
                          s.throttle = f(Ee(n, ge));
                        } else if (l === "queue" && n[0] === ":") {
                          n.shift();
                          s.queue = Ee(n, ge);
                        } else if ((l === "root" || l === "threshold") && n[0] === ":") {
                          n.shift();
                          s[l] = Ee(n, ge);
                        } else {
                          ot(e, "htmx:syntax:error", { token: n.shift() });
                        }
                      }
                      r.push(s);
                    }
                  }
                  if (n.length === i) {
                    ot(e, "htmx:syntax:error", { token: n.shift() });
                  }
                  Ee(n, xe);
                } while (n[0] === "," && n.shift());
              }
              if (r.length > 0) {
                return r;
              } else if (d(e, "form")) {
                return [{ trigger: "submit" }];
              } else if (d(e, qe)) {
                return [{ trigger: "change" }];
              } else {
                return [{ trigger: "click" }];
              }
            }
            function Ce(e) {
              U(e).cancelled = true;
            }
            function Oe(e, t, r, n) {
              var i = U(e);
              i.timeout = setTimeout(function() {
                if (z(e) && i.cancelled !== true) {
                  Zt(t, r, e);
                  Oe(e, t, D(e, "hx-" + t), n);
                }
              }, n);
            }
            function Le(e) {
              return location.hostname === e.hostname && l(e, "href") && l(e, "href").indexOf("#") !== 0;
            }
            function Ae(t, r, e) {
              if (t.tagName === "A" && Le(t) || t.tagName === "FORM") {
                r.boosted = true;
                var n, i;
                if (t.tagName === "A") {
                  n = "get";
                  i = l(t, "href");
                  r.pushURL = true;
                } else {
                  var o = l(t, "method");
                  n = o ? o.toLowerCase() : "get";
                  if (n === "get") {
                    r.pushURL = true;
                  }
                  i = l(t, "action");
                }
                e.forEach(function(e2) {
                  Ie(t, n, i, r, e2, true);
                });
              }
            }
            function Te(e) {
              return e.tagName === "FORM" || d(e, 'input[type="submit"], button') && L(e, "form") !== null || e.tagName === "A" && e.href && (e.getAttribute("href") === "#" || e.getAttribute("href").indexOf("#") !== 0);
            }
            function He(e, t) {
              return U(e).boosted && e.tagName === "A" && t.type === "click" && (t.ctrlKey || t.metaKey);
            }
            function Ne(e, t) {
              var r = e.eventFilter;
              if (r) {
                try {
                  return r(t) !== true;
                } catch (e2) {
                  ot(F().body, "htmx:eventFilter:error", { error: e2, source: r.source });
                  return true;
                }
              }
              return false;
            }
            function Ie(n, i, o, e, a, s) {
              var u = n;
              if (a.from) {
                u = w(a.from);
              }
              var l = function(e2) {
                if (!z(n)) {
                  u.removeEventListener(a.trigger, l);
                  return;
                }
                if (He(n, e2)) {
                  return;
                }
                if (s || Te(n)) {
                  e2.preventDefault();
                }
                if (Ne(a, e2)) {
                  return;
                }
                var t = U(e2);
                t.triggerSpec = a;
                if (t.handledFor == null) {
                  t.handledFor = [];
                }
                var r = U(n);
                if (t.handledFor.indexOf(n) < 0) {
                  t.handledFor.push(n);
                  if (a.consume) {
                    e2.stopPropagation();
                  }
                  if (a.target && e2.target) {
                    if (!d(e2.target, a.target)) {
                      return;
                    }
                  }
                  if (a.once) {
                    if (r.triggeredOnce) {
                      return;
                    } else {
                      r.triggeredOnce = true;
                    }
                  }
                  if (a.changed) {
                    if (r.lastValue === n.value) {
                      return;
                    } else {
                      r.lastValue = n.value;
                    }
                  }
                  if (r.delayed) {
                    clearTimeout(r.delayed);
                  }
                  if (r.throttle) {
                    return;
                  }
                  if (a.throttle) {
                    if (!r.throttle) {
                      Zt(i, o, n, e2);
                      r.throttle = setTimeout(function() {
                        r.throttle = null;
                      }, a.throttle);
                    }
                  } else if (a.delay) {
                    r.delayed = setTimeout(function() {
                      Zt(i, o, n, e2);
                    }, a.delay);
                  } else {
                    Zt(i, o, n, e2);
                  }
                }
              };
              if (e.listenerInfos == null) {
                e.listenerInfos = [];
              }
              e.listenerInfos.push({ trigger: a.trigger, listener: l, on: u });
              u.addEventListener(a.trigger, l);
            }
            var Me = false;
            var ke = null;
            function De() {
              if (!ke) {
                ke = function() {
                  Me = true;
                };
                window.addEventListener("scroll", ke);
                setInterval(function() {
                  if (Me) {
                    Me = false;
                    j(F().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), function(e) {
                      Fe(e);
                    });
                  }
                }, 200);
              }
            }
            function Fe(e) {
              var t = U(e);
              if (!t.revealed && m(e)) {
                t.revealed = true;
                if (t.initialized) {
                  Zt(t.verb, t.path, e);
                } else {
                  e.addEventListener("htmx:afterProcessNode", function() {
                    Zt(t.verb, t.path, e);
                  }, { once: true });
                }
              }
            }
            function Xe(e, t, r) {
              var n = y(r);
              for (var i = 0; i < n.length; i++) {
                var o = n[i].split(/:(.+)/);
                if (o[0] === "connect") {
                  Pe(e, o[1], 0);
                }
                if (o[0] === "send") {
                  je(e);
                }
              }
            }
            function Pe(s, r, n) {
              if (!z(s)) {
                return;
              }
              if (r.indexOf("/") == 0) {
                var e = location.hostname + (location.port ? ":" + location.port : "");
                if (location.protocol == "https:") {
                  r = "wss://" + e + r;
                } else if (location.protocol == "http:") {
                  r = "ws://" + e + r;
                }
              }
              var t = k.createWebSocket(r);
              t.onerror = function(e2) {
                ot(s, "htmx:wsError", { error: e2, socket: t });
                Ue(s);
              };
              t.onclose = function(e2) {
                if ([1006, 1012, 1013].includes(e2.code)) {
                  var t2 = ze(n);
                  setTimeout(function() {
                    Pe(s, r, n + 1);
                  }, t2);
                }
              };
              t.onopen = function(e2) {
                n = 0;
              };
              U(s).webSocket = t;
              t.addEventListener("message", function(e2) {
                if (Ue(s)) {
                  return;
                }
                var t2 = e2.data;
                st(s, function(e3) {
                  t2 = e3.transformResponse(t2, null, s);
                });
                var r2 = Ft(s);
                var n2 = u(t2);
                var i = p(n2.children);
                for (var o = 0; o < i.length; o++) {
                  var a = i[o];
                  J(D(a, "hx-swap-oob") || "true", a, r2);
                }
                mt(r2.tasks);
              });
            }
            function Ue(e) {
              if (!z(e)) {
                U(e).webSocket.close();
                return true;
              }
            }
            function je(l) {
              var f = h(l, function(e) {
                return U(e).webSocket != null;
              });
              if (f) {
                l.addEventListener(Re(l)[0].trigger, function(e) {
                  var t = U(f).webSocket;
                  var r = Nt(l, f);
                  var n = Lt(l, "post");
                  var i = n.errors;
                  var o = n.values;
                  var a = Vt(l);
                  var s = V(o, a);
                  var u = It(s, l);
                  u["HEADERS"] = r;
                  if (i && i.length > 0) {
                    lt(l, "htmx:validation:halted", i);
                    return;
                  }
                  t.send(JSON.stringify(u));
                  if (Te(l)) {
                    e.preventDefault();
                  }
                });
              } else {
                ot(l, "htmx:noWebSocketSourceError");
              }
            }
            function ze(e) {
              var t = k.config.wsReconnectDelay;
              if (typeof t === "function") {
                return t(e);
              }
              if (t === "full-jitter") {
                var r = Math.min(e, 6);
                var n = 1e3 * Math.pow(2, r);
                return n * Math.random();
              }
              ut('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"');
            }
            function Ve(e, t, r) {
              var n = y(r);
              for (var i = 0; i < n.length; i++) {
                var o = n[i].split(/:(.+)/);
                if (o[0] === "connect") {
                  _e(e, o[1]);
                }
                if (o[0] === "swap") {
                  Be(e, o[1]);
                }
              }
            }
            function _e(t, e) {
              var r = k.createEventSource(e);
              r.onerror = function(e2) {
                ot(t, "htmx:sseError", { error: e2, source: r });
                $e(t);
              };
              U(t).sseEventSource = r;
            }
            function Be(o, a) {
              var s = h(o, Je);
              if (s) {
                var u = U(s).sseEventSource;
                var l = function(e) {
                  if ($e(s)) {
                    u.removeEventListener(a, l);
                    return;
                  }
                  var t = e.data;
                  st(o, function(e2) {
                    t = e2.transformResponse(t, null, o);
                  });
                  var r = kt(o);
                  var n = _(o);
                  var i = Ft(o);
                  he(r.swapStyle, o, n, t, i);
                  mt(i.tasks);
                  lt(o, "htmx:sseMessage", e);
                };
                U(o).sseListener = l;
                u.addEventListener(a, l);
              } else {
                ot(o, "htmx:noSSESourceError");
              }
            }
            function We(e, t, r, n) {
              var i = h(e, Je);
              if (i) {
                var o = U(i).sseEventSource;
                var a = function() {
                  if (!$e(i)) {
                    if (z(e)) {
                      Zt(t, r, e);
                    } else {
                      o.removeEventListener(n, a);
                    }
                  }
                };
                U(e).sseListener = a;
                o.addEventListener(n, a);
              } else {
                ot(e, "htmx:noSSESourceError");
              }
            }
            function $e(e) {
              if (!z(e)) {
                U(e).sseEventSource.close();
                return true;
              }
            }
            function Je(e) {
              return U(e).sseEventSource != null;
            }
            function Ze(e, t, r, n, i) {
              var o = function() {
                if (!n.loaded) {
                  n.loaded = true;
                  Zt(t, r, e);
                }
              };
              if (i) {
                setTimeout(o, i);
              } else {
                o();
              }
            }
            function Ge(o, a, e) {
              var t = false;
              j(r, function(n) {
                if (s(o, "hx-" + n)) {
                  var i = D(o, "hx-" + n);
                  t = true;
                  a.path = i;
                  a.verb = n;
                  e.forEach(function(e2) {
                    if (e2.sseEvent) {
                      We(o, n, i, e2.sseEvent);
                    } else if (e2.trigger === "revealed") {
                      De();
                      Fe(o);
                    } else if (e2.trigger === "intersect") {
                      var t2 = {};
                      if (e2.root) {
                        t2.root = T(e2.root);
                      }
                      if (e2.threshold) {
                        t2.threshold = parseFloat(e2.threshold);
                      }
                      var r = new IntersectionObserver(function(e3) {
                        for (var t3 = 0; t3 < e3.length; t3++) {
                          var r2 = e3[t3];
                          if (r2.isIntersecting) {
                            lt(o, "intersect");
                            break;
                          }
                        }
                      }, t2);
                      r.observe(o);
                      Ie(o, n, i, a, e2);
                    } else if (e2.trigger === "load") {
                      Ze(o, n, i, a, e2.delay);
                    } else if (e2.pollInterval) {
                      a.polling = true;
                      Oe(o, n, i, e2.pollInterval);
                    } else {
                      Ie(o, n, i, a, e2);
                    }
                  });
                }
              });
              return t;
            }
            function Ke(e) {
              if (e.type === "text/javascript" || e.type === "") {
                try {
                  Ut(e, function() {
                    (1, eval)(e.innerText);
                  });
                } catch (e2) {
                  ut(e2);
                }
              }
            }
            function Ye(e) {
              if (d(e, "script")) {
                Ke(e);
              }
              j(S(e, "script"), function(e2) {
                Ke(e2);
              });
            }
            function Qe() {
              return document.querySelector("[hx-boost], [data-hx-boost]");
            }
            function et(e) {
              if (e.querySelectorAll) {
                var t = Qe() ? ", a, form" : "";
                var r = e.querySelectorAll(n + t + ", [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws]");
                return r;
              } else {
                return [];
              }
            }
            function tt(e) {
              if (e.closest && e.closest(k.config.disableSelector)) {
                return;
              }
              var t = U(e);
              if (!t.initialized) {
                t.initialized = true;
                lt(e, "htmx:beforeProcessNode");
                if (e.value) {
                  t.lastValue = e.value;
                }
                var r = Re(e);
                var n = Ge(e, t, r);
                if (!n && X(e, "hx-boost") === "true") {
                  Ae(e, t, r);
                }
                var i = D(e, "hx-sse");
                if (i) {
                  Ve(e, t, i);
                }
                var o = D(e, "hx-ws");
                if (o) {
                  Xe(e, t, o);
                }
                lt(e, "htmx:afterProcessNode");
              }
            }
            function rt(e) {
              e = H(e);
              tt(e);
              j(et(e), function(e2) {
                tt(e2);
              });
            }
            function nt(e) {
              return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
            }
            function it(e, t) {
              var r;
              if (window.CustomEvent && typeof window.CustomEvent === "function") {
                r = new CustomEvent(e, { bubbles: true, cancelable: true, detail: t });
              } else {
                r = F().createEvent("CustomEvent");
                r.initCustomEvent(e, true, true, t);
              }
              return r;
            }
            function ot(e, t, r) {
              lt(e, t, V({ error: t }, r));
            }
            function at(e) {
              return e === "htmx:afterProcessNode";
            }
            function st(e, t) {
              j(tr(e), function(e2) {
                try {
                  t(e2);
                } catch (e3) {
                  ut(e3);
                }
              });
            }
            function ut(e) {
              if (console.error) {
                console.error(e);
              } else if (console.log) {
                console.log("ERROR: ", e);
              }
            }
            function lt(e, t, r) {
              e = H(e);
              if (r == null) {
                r = {};
              }
              r["elt"] = e;
              var n = it(t, r);
              if (k.logger && !at(t)) {
                k.logger(e, t, r);
              }
              if (r.error) {
                ut(r.error);
                lt(e, "htmx:error", { errorInfo: r });
              }
              var i = e.dispatchEvent(n);
              var o = nt(t);
              if (i && o !== t) {
                var a = it(o, n.detail);
                i = i && e.dispatchEvent(a);
              }
              st(e, function(e2) {
                i = i && e2.onEvent(t, n) !== false;
              });
              return i;
            }
            var ft = null;
            function ct() {
              var e = F().querySelector("[hx-history-elt],[data-hx-history-elt]");
              return e || F().body;
            }
            function ht(e, t, r, n) {
              var i = x(localStorage.getItem("htmx-history-cache")) || [];
              for (var o = 0; o < i.length; o++) {
                if (i[o].url === e) {
                  i.splice(o, 1);
                  break;
                }
              }
              i.push({ url: e, content: t, title: r, scroll: n });
              while (i.length > k.config.historyCacheSize) {
                i.shift();
              }
              while (i.length > 0) {
                try {
                  localStorage.setItem("htmx-history-cache", JSON.stringify(i));
                  break;
                } catch (e2) {
                  ot(F().body, "htmx:historyCacheError", { cause: e2, cache: i });
                  i.shift();
                }
              }
            }
            function dt(e) {
              var t = x(localStorage.getItem("htmx-history-cache")) || [];
              for (var r = 0; r < t.length; r++) {
                if (t[r].url === e) {
                  return t[r];
                }
              }
              return null;
            }
            function vt(e) {
              var t = k.config.requestClass;
              var r = e.cloneNode(true);
              j(S(r, "." + t), function(e2) {
                R(e2, t);
              });
              return r.innerHTML;
            }
            function gt() {
              var e = ct();
              var t = ft || location.pathname + location.search;
              lt(F().body, "htmx:beforeHistorySave", { path: t, historyElt: e });
              if (k.config.historyEnabled)
                history.replaceState({ htmx: true }, F().title, window.location.href);
              ht(t, vt(e), F().title, window.scrollY);
            }
            function pt(e) {
              if (k.config.historyEnabled)
                history.pushState({ htmx: true }, "", e);
              ft = e;
            }
            function mt(e) {
              j(e, function(e2) {
                e2.call();
              });
            }
            function yt(n) {
              var e = new XMLHttpRequest();
              var i = { path: n, xhr: e };
              lt(F().body, "htmx:historyCacheMiss", i);
              e.open("GET", n, true);
              e.setRequestHeader("HX-History-Restore-Request", "true");
              e.onload = function() {
                if (this.status >= 200 && this.status < 400) {
                  lt(F().body, "htmx:historyCacheMissLoad", i);
                  var e2 = u(this.response);
                  e2 = e2.querySelector("[hx-history-elt],[data-hx-history-elt]") || e2;
                  var t = ct();
                  var r = Ft(t);
                  se(t, e2, r);
                  mt(r.tasks);
                  ft = n;
                  lt(F().body, "htmx:historyRestore", { path: n });
                } else {
                  ot(F().body, "htmx:historyCacheMissLoadError", i);
                }
              };
              e.send();
            }
            function xt(e) {
              gt();
              e = e || location.pathname + location.search;
              var t = dt(e);
              if (t) {
                var r = u(t.content);
                var n = ct();
                var i = Ft(n);
                se(n, r, i);
                mt(i.tasks);
                document.title = t.title;
                window.scrollTo(0, t.scroll);
                ft = e;
                lt(F().body, "htmx:historyRestore", { path: e });
              } else {
                if (k.config.refreshOnHistoryMiss) {
                  window.location.reload(true);
                } else {
                  yt(e);
                }
              }
            }
            function bt(e) {
              var t = X(e, "hx-push-url");
              return t && t !== "false" || U(e).boosted && U(e).pushURL;
            }
            function wt(e) {
              var t = X(e, "hx-push-url");
              return t === "true" || t === "false" ? null : t;
            }
            function St(e) {
              var t = X(e, "hx-indicator");
              if (t) {
                var r = A(e, t);
              } else {
                r = [e];
              }
              j(r, function(e2) {
                e2.classList["add"].call(e2.classList, k.config.requestClass);
              });
              return r;
            }
            function Et(e) {
              j(e, function(e2) {
                e2.classList["remove"].call(e2.classList, k.config.requestClass);
              });
            }
            function qt(e, t) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                if (n.isSameNode(t)) {
                  return true;
                }
              }
              return false;
            }
            function Rt(e) {
              if (e.name === "" || e.name == null || e.disabled) {
                return false;
              }
              if (e.type === "button" || e.type === "submit" || e.tagName === "image" || e.tagName === "reset" || e.tagName === "file") {
                return false;
              }
              if (e.type === "checkbox" || e.type === "radio") {
                return e.checked;
              }
              return true;
            }
            function Ct(t, r, n, e, i) {
              if (e == null || qt(t, e)) {
                return;
              } else {
                t.push(e);
              }
              if (Rt(e)) {
                var o = l(e, "name");
                var a = e.value;
                if (e.multiple) {
                  a = p(e.querySelectorAll("option:checked")).map(function(e2) {
                    return e2.value;
                  });
                }
                if (e.files) {
                  a = p(e.files);
                }
                if (o != null && a != null) {
                  var s = r[o];
                  if (s) {
                    if (Array.isArray(s)) {
                      if (Array.isArray(a)) {
                        r[o] = s.concat(a);
                      } else {
                        s.push(a);
                      }
                    } else {
                      if (Array.isArray(a)) {
                        r[o] = [s].concat(a);
                      } else {
                        r[o] = [s, a];
                      }
                    }
                  } else {
                    r[o] = a;
                  }
                }
                if (i) {
                  Ot(e, n);
                }
              }
              if (d(e, "form")) {
                var u = e.elements;
                j(u, function(e2) {
                  Ct(t, r, n, e2, i);
                });
              }
            }
            function Ot(e, t) {
              if (e.willValidate) {
                lt(e, "htmx:validation:validate");
                if (!e.checkValidity()) {
                  t.push({ elt: e, message: e.validationMessage, validity: e.validity });
                  lt(e, "htmx:validation:failed", { message: e.validationMessage, validity: e.validity });
                }
              }
            }
            function Lt(e, t) {
              var r = [];
              var n = {};
              var i = {};
              var o = [];
              var a = d(e, "form") && e.noValidate !== true;
              if (t !== "get") {
                Ct(r, i, o, L(e, "form"), a);
              }
              Ct(r, n, o, e, a);
              var s = X(e, "hx-include");
              if (s) {
                var u = A(e, s);
                j(u, function(e2) {
                  Ct(r, n, o, e2, a);
                  if (!d(e2, "form")) {
                    j(e2.querySelectorAll(qe), function(e3) {
                      Ct(r, n, o, e3, a);
                    });
                  }
                });
              }
              n = V(n, i);
              return { errors: o, values: n };
            }
            function At(e, t, r) {
              if (e !== "") {
                e += "&";
              }
              e += encodeURIComponent(t) + "=" + encodeURIComponent(r);
              return e;
            }
            function Tt(e) {
              var t = "";
              for (var r in e) {
                if (e.hasOwnProperty(r)) {
                  var n = e[r];
                  if (Array.isArray(n)) {
                    j(n, function(e2) {
                      t = At(t, r, e2);
                    });
                  } else {
                    t = At(t, r, n);
                  }
                }
              }
              return t;
            }
            function Ht(e) {
              var t = new FormData();
              for (var r in e) {
                if (e.hasOwnProperty(r)) {
                  var n = e[r];
                  if (Array.isArray(n)) {
                    j(n, function(e2) {
                      t.append(r, e2);
                    });
                  } else {
                    t.append(r, n);
                  }
                }
              }
              return t;
            }
            function Nt(e, t, r) {
              var n = { "HX-Request": "true", "HX-Trigger": l(e, "id"), "HX-Trigger-Name": l(e, "name"), "HX-Target": D(t, "id"), "HX-Current-URL": F().location.href };
              Pt(e, "hx-headers", false, n);
              if (r !== void 0) {
                n["HX-Prompt"] = r;
              }
              return n;
            }
            function It(t, e) {
              var r = X(e, "hx-params");
              if (r) {
                if (r === "none") {
                  return {};
                } else if (r === "*") {
                  return t;
                } else if (r.indexOf("not ") === 0) {
                  j(r.substr(4).split(","), function(e2) {
                    e2 = e2.trim();
                    delete t[e2];
                  });
                  return t;
                } else {
                  var n = {};
                  j(r.split(","), function(e2) {
                    e2 = e2.trim();
                    n[e2] = t[e2];
                  });
                  return n;
                }
              } else {
                return t;
              }
            }
            function Mt(e) {
              return l(e, "href") && l(e, "href").indexOf("#") >= 0;
            }
            function kt(e) {
              var t = X(e, "hx-swap");
              var r = { swapStyle: U(e).boosted ? "innerHTML" : k.config.defaultSwapStyle, swapDelay: k.config.defaultSwapDelay, settleDelay: k.config.defaultSettleDelay };
              if (U(e).boosted && !Mt(e)) {
                r["show"] = "top";
              }
              if (t) {
                var n = y(t);
                if (n.length > 0) {
                  r["swapStyle"] = n[0];
                  for (var i = 1; i < n.length; i++) {
                    var o = n[i];
                    if (o.indexOf("swap:") === 0) {
                      r["swapDelay"] = f(o.substr(5));
                    }
                    if (o.indexOf("settle:") === 0) {
                      r["settleDelay"] = f(o.substr(7));
                    }
                    if (o.indexOf("scroll:") === 0) {
                      r["scroll"] = o.substr(7);
                    }
                    if (o.indexOf("show:") === 0) {
                      r["show"] = o.substr(5);
                    }
                  }
                }
              }
              return r;
            }
            function Dt(t, r, n) {
              var i = null;
              st(r, function(e) {
                if (i == null) {
                  i = e.encodeParameters(t, n, r);
                }
              });
              if (i != null) {
                return i;
              } else {
                if (X(r, "hx-encoding") === "multipart/form-data") {
                  return Ht(n);
                } else {
                  return Tt(n);
                }
              }
            }
            function Ft(e) {
              return { tasks: [], elts: [e] };
            }
            function Xt(e, t) {
              var r = e[0];
              var n = e[e.length - 1];
              if (t.scroll) {
                if (t.scroll === "top" && r) {
                  r.scrollTop = 0;
                }
                if (t.scroll === "bottom" && n) {
                  n.scrollTop = n.scrollHeight;
                }
              }
              if (t.show) {
                if (t.show === "top" && r) {
                  r.scrollIntoView(true);
                }
                if (t.show === "bottom" && n) {
                  n.scrollIntoView(false);
                }
              }
            }
            function Pt(e, t, r, n) {
              if (n == null) {
                n = {};
              }
              if (e == null) {
                return n;
              }
              var i = D(e, t);
              if (i) {
                var o = i.trim();
                var a = r;
                if (o.indexOf("javascript:") === 0) {
                  o = o.substr(11);
                  a = true;
                }
                if (o.indexOf("{") !== 0) {
                  o = "{" + o + "}";
                }
                var s;
                if (a) {
                  s = Ut(e, function() {
                    return Function("return (" + o + ")")();
                  }, {});
                } else {
                  s = x(o);
                }
                for (var u in s) {
                  if (s.hasOwnProperty(u)) {
                    if (n[u] == null) {
                      n[u] = s[u];
                    }
                  }
                }
              }
              return Pt(c(e), t, r, n);
            }
            function Ut(e, t, r) {
              if (k.config.allowEval) {
                return t();
              } else {
                ot(e, "htmx:evalDisallowedError");
                return r;
              }
            }
            function jt(e, t) {
              return Pt(e, "hx-vars", true, t);
            }
            function zt(e, t) {
              return Pt(e, "hx-vals", false, t);
            }
            function Vt(e) {
              return V(jt(e), zt(e));
            }
            function _t(t, r, n) {
              if (n !== null) {
                try {
                  t.setRequestHeader(r, n);
                } catch (e) {
                  t.setRequestHeader(r, encodeURIComponent(n));
                  t.setRequestHeader(r + "-URI-AutoEncoded", "true");
                }
              }
            }
            function Bt(t) {
              if (t.responseURL && typeof URL !== "undefined") {
                try {
                  var e = new URL(t.responseURL);
                  return e.pathname + e.search;
                } catch (e2) {
                  ot(F().body, "htmx:badResponseUrl", { url: t.responseURL });
                }
              }
            }
            function Wt(e, t) {
              return e.getAllResponseHeaders().match(t);
            }
            function $t(e, t, r) {
              if (r) {
                if (r instanceof Element || a(r, "String")) {
                  return Zt(e, t, null, null, { targetOverride: H(r) });
                } else {
                  return Zt(e, t, H(r.source), r.event, { handler: r.handler, headers: r.headers, values: r.values, targetOverride: H(r.target) });
                }
              } else {
                return Zt(e, t);
              }
            }
            function Jt(e) {
              var t = [];
              while (e) {
                t.push(e);
                e = e.parentElement;
              }
              return t;
            }
            function Zt(e, t, n, r, i) {
              var o = null;
              var a = null;
              i = i != null ? i : {};
              if (typeof Promise !== "undefined") {
                var s = new Promise(function(e2, t2) {
                  o = e2;
                  a = t2;
                });
              }
              if (n == null) {
                n = F().body;
              }
              var u = i.handler || Gt;
              if (!z(n)) {
                return;
              }
              var l = i.targetOverride || _(n);
              if (l == null) {
                ot(n, "htmx:targetError", { target: D(n, "hx-target") });
                return;
              }
              var f = U(n);
              if (f.requestInFlight) {
                var c = "last";
                var h = U(r);
                if (h && h.triggerSpec && h.triggerSpec.queue) {
                  c = h.triggerSpec.queue;
                }
                if (f.queuedRequests == null) {
                  f.queuedRequests = [];
                }
                if (c === "first" && f.queuedRequests.length === 0) {
                  f.queuedRequests.push(function() {
                    Zt(e, t, n, r);
                  });
                } else if (c === "all") {
                  f.queuedRequests.push(function() {
                    Zt(e, t, n, r);
                  });
                } else if (c === "last") {
                  f.queuedRequests = [];
                  f.queuedRequests.push(function() {
                    Zt(e, t, n, r);
                  });
                }
                return;
              } else {
                f.requestInFlight = true;
              }
              var d = function() {
                f.requestInFlight = false;
                if (f.queuedRequests != null && f.queuedRequests.length > 0) {
                  var e2 = f.queuedRequests.shift();
                  e2();
                }
              };
              var v = X(n, "hx-prompt");
              if (v) {
                var g = prompt(v);
                if (g === null || !lt(n, "htmx:prompt", { prompt: g, target: l })) {
                  P(o);
                  d();
                  return s;
                }
              }
              var p = X(n, "hx-confirm");
              if (p) {
                if (!confirm(p)) {
                  P(o);
                  d();
                  return s;
                }
              }
              var m = new XMLHttpRequest();
              var y = Nt(n, l, g);
              if (i.headers) {
                y = V(y, i.values);
              }
              var x = Lt(n, e);
              var b = x.errors;
              var w = x.values;
              if (i.values) {
                w = V(w, i.values);
              }
              var S = Vt(n);
              var E = V(w, S);
              var q = It(E, n);
              if (e !== "get" && X(n, "hx-encoding") == null) {
                y["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
              }
              if (t == null || t === "") {
                t = F().location.href;
              }
              var R = { parameters: q, unfilteredParameters: E, headers: y, target: l, verb: e, errors: b, path: t, triggeringEvent: r };
              if (!lt(n, "htmx:configRequest", R)) {
                P(o);
                d();
                return s;
              }
              t = R.path;
              e = R.verb;
              y = R.headers;
              q = R.parameters;
              b = R.errors;
              if (b && b.length > 0) {
                lt(n, "htmx:validation:halted", R);
                P(o);
                d();
                return s;
              }
              var C = t.split("#");
              var O = C[0];
              var L = C[1];
              if (e === "get") {
                var A = O;
                var T = Object.keys(q).length !== 0;
                if (T) {
                  if (A.indexOf("?") < 0) {
                    A += "?";
                  } else {
                    A += "&";
                  }
                  A += Tt(q);
                  if (L) {
                    A += "#" + L;
                  }
                }
                m.open("GET", A, true);
              } else {
                m.open(e.toUpperCase(), t, true);
              }
              m.overrideMimeType("text/html");
              m.withCredentials = k.config.withCredentials;
              for (var H in y) {
                if (y.hasOwnProperty(H)) {
                  var N = y[H];
                  _t(m, H, N);
                }
              }
              var I = { xhr: m, target: l, requestConfig: R, pathInfo: { path: t, finalPath: A, anchor: L } };
              m.onload = function() {
                try {
                  var e2 = Jt(n);
                  u(n, I);
                  Et(M);
                  lt(n, "htmx:afterRequest", I);
                  lt(n, "htmx:afterOnLoad", I);
                  if (!z(n)) {
                    var t2 = null;
                    while (e2.length > 0 && t2 == null) {
                      var r2 = e2.shift();
                      if (z(r2)) {
                        t2 = r2;
                      }
                    }
                    if (t2) {
                      lt(t2, "htmx:afterRequest", I);
                      lt(t2, "htmx:afterOnLoad", I);
                    }
                  }
                  P(o);
                  d();
                } catch (e3) {
                  ot(n, "htmx:onLoadError", V({ error: e3 }, I));
                  throw e3;
                }
              };
              m.onerror = function() {
                Et(M);
                ot(n, "htmx:afterRequest", I);
                ot(n, "htmx:sendError", I);
                P(a);
                d();
              };
              m.onabort = function() {
                Et(M);
                ot(n, "htmx:afterRequest", I);
                ot(n, "htmx:sendAbort", I);
                P(a);
                d();
              };
              if (!lt(n, "htmx:beforeRequest", I)) {
                P(o);
                d();
                return s;
              }
              var M = St(n);
              j(["loadstart", "loadend", "progress", "abort"], function(t2) {
                j([m, m.upload], function(e2) {
                  e2.addEventListener(t2, function(e3) {
                    lt(n, "htmx:xhr:" + t2, { lengthComputable: e3.lengthComputable, loaded: e3.loaded, total: e3.total });
                  });
                });
              });
              lt(n, "htmx:beforeSend", I);
              m.send(e === "get" ? null : Dt(m, n, q));
              return s;
            }
            function Gt(a, s) {
              var u = s.xhr;
              var l = s.target;
              if (!lt(a, "htmx:beforeOnLoad", s))
                return;
              if (Wt(u, /HX-Trigger:/i)) {
                de(u, "HX-Trigger", a);
              }
              if (Wt(u, /HX-Push:/i)) {
                var f = u.getResponseHeader("HX-Push");
              }
              if (Wt(u, /HX-Redirect:/i)) {
                window.location.href = u.getResponseHeader("HX-Redirect");
                return;
              }
              if (Wt(u, /HX-Refresh:/i)) {
                if (u.getResponseHeader("HX-Refresh") === "true") {
                  location.reload();
                  return;
                }
              }
              var c = bt(a) || f;
              if (u.status >= 200 && u.status < 400) {
                if (u.status === 286) {
                  Ce(a);
                }
                if (u.status !== 204) {
                  if (!lt(l, "htmx:beforeSwap", s))
                    return;
                  var h = u.response;
                  st(a, function(e2) {
                    h = e2.transformResponse(h, u, a);
                  });
                  if (c) {
                    gt();
                  }
                  var d = kt(a);
                  l.classList.add(k.config.swappingClass);
                  var e = function() {
                    try {
                      var e2 = document.activeElement;
                      var t = {};
                      try {
                        t = { elt: e2, start: e2 ? e2.selectionStart : null, end: e2 ? e2.selectionEnd : null };
                      } catch (e3) {
                      }
                      var r = Ft(l);
                      he(d.swapStyle, l, a, h, r);
                      if (t.elt && !z(t.elt) && t.elt.id) {
                        var n = document.getElementById(t.elt.id);
                        if (n) {
                          if (t.start && n.setSelectionRange) {
                            n.setSelectionRange(t.start, t.end);
                          }
                          n.focus();
                        }
                      }
                      l.classList.remove(k.config.swappingClass);
                      j(r.elts, function(e3) {
                        if (e3.classList) {
                          e3.classList.add(k.config.settlingClass);
                        }
                        lt(e3, "htmx:afterSwap", s);
                      });
                      if (s.pathInfo.anchor) {
                        location.hash = s.pathInfo.anchor;
                      }
                      if (Wt(u, /HX-Trigger-After-Swap:/i)) {
                        var i = a;
                        if (!z(a)) {
                          i = F().body;
                        }
                        de(u, "HX-Trigger-After-Swap", i);
                      }
                      var o = function() {
                        j(r.tasks, function(e4) {
                          e4.call();
                        });
                        j(r.elts, function(e4) {
                          if (e4.classList) {
                            e4.classList.remove(k.config.settlingClass);
                          }
                          lt(e4, "htmx:afterSettle", s);
                        });
                        if (c) {
                          var e3 = f || wt(a) || Bt(u) || s.pathInfo.finalPath || s.pathInfo.path;
                          pt(e3);
                          lt(F().body, "htmx:pushedIntoHistory", { path: e3 });
                        }
                        Xt(r.elts, d);
                        if (Wt(u, /HX-Trigger-After-Settle:/i)) {
                          var t2 = a;
                          if (!z(a)) {
                            t2 = F().body;
                          }
                          de(u, "HX-Trigger-After-Settle", t2);
                        }
                      };
                      if (d.settleDelay > 0) {
                        setTimeout(o, d.settleDelay);
                      } else {
                        o();
                      }
                    } catch (e3) {
                      ot(a, "htmx:swapError", s);
                      throw e3;
                    }
                  };
                  if (d.swapDelay > 0) {
                    setTimeout(e, d.swapDelay);
                  } else {
                    e();
                  }
                }
              } else {
                ot(a, "htmx:responseError", V({ error: "Response Status Error Code " + u.status + " from " + s.pathInfo.path }, s));
              }
            }
            var Kt = {};
            function Yt() {
              return { onEvent: function(e, t) {
                return true;
              }, transformResponse: function(e, t, r) {
                return e;
              }, isInlineSwap: function(e) {
                return false;
              }, handleSwap: function(e, t, r, n) {
                return false;
              }, encodeParameters: function(e, t, r) {
                return null;
              } };
            }
            function Qt(e, t) {
              Kt[e] = V(Yt(), t);
            }
            function er(e) {
              delete Kt[e];
            }
            function tr(e, r, n) {
              if (e == void 0) {
                return r;
              }
              if (r == void 0) {
                r = [];
              }
              if (n == void 0) {
                n = [];
              }
              var t = D(e, "hx-ext");
              if (t) {
                j(t.split(","), function(e2) {
                  e2 = e2.replace(/ /g, "");
                  if (e2.slice(0, 7) == "ignore:") {
                    n.push(e2.slice(7));
                    return;
                  }
                  if (n.indexOf(e2) < 0) {
                    var t2 = Kt[e2];
                    if (t2 && r.indexOf(t2) < 0) {
                      r.push(t2);
                    }
                  }
                });
              }
              return tr(c(e), r, n);
            }
            function rr(e) {
              if (F().readyState !== "loading") {
                e();
              } else {
                F().addEventListener("DOMContentLoaded", e);
              }
            }
            function nr() {
              if (k.config.includeIndicatorStyles !== false) {
                F().head.insertAdjacentHTML("beforeend", "<style>                      ." + k.config.indicatorClass + "{opacity:0;transition: opacity 200ms ease-in;}                      ." + k.config.requestClass + " ." + k.config.indicatorClass + "{opacity:1}                      ." + k.config.requestClass + "." + k.config.indicatorClass + "{opacity:1}                    </style>");
              }
            }
            function ir() {
              var e = F().querySelector('meta[name="htmx-config"]');
              if (e) {
                return x(e.content);
              } else {
                return null;
              }
            }
            function or() {
              var e = ir();
              if (e) {
                k.config = V(k.config, e);
              }
            }
            rr(function() {
              or();
              nr();
              var e = F().body;
              rt(e);
              window.onpopstate = function(e2) {
                if (e2.state && e2.state.htmx) {
                  xt();
                }
              };
              setTimeout(function() {
                lt(e, "htmx:load", {});
              }, 0);
            });
            return k;
          }();
        });
      }
    });
  
    // node_modules/lazysizes/lazysizes.js
    var require_lazysizes = __commonJS({
      "node_modules/lazysizes/lazysizes.js"(exports2, module2) {
        (function(window2, factory) {
          var lazySizes = factory(window2, window2.document, Date);
          window2.lazySizes = lazySizes;
          if (typeof module2 == "object" && module2.exports) {
            module2.exports = lazySizes;
          }
        })(typeof window != "undefined" ? window : {}, function l(window2, document2, Date2) {
          "use strict";
          var lazysizes, lazySizesCfg;
          (function() {
            var prop;
            var lazySizesDefaults = {
              lazyClass: "lazyload",
              loadedClass: "lazyloaded",
              loadingClass: "lazyloading",
              preloadClass: "lazypreload",
              errorClass: "lazyerror",
              autosizesClass: "lazyautosizes",
              fastLoadedClass: "ls-is-cached",
              iframeLoadMode: 0,
              srcAttr: "data-src",
              srcsetAttr: "data-srcset",
              sizesAttr: "data-sizes",
              minSize: 40,
              customMedia: {},
              init: true,
              expFactor: 1.5,
              hFac: 0.8,
              loadMode: 2,
              loadHidden: true,
              ricTimeout: 0,
              throttleDelay: 125
            };
            lazySizesCfg = window2.lazySizesConfig || window2.lazysizesConfig || {};
            for (prop in lazySizesDefaults) {
              if (!(prop in lazySizesCfg)) {
                lazySizesCfg[prop] = lazySizesDefaults[prop];
              }
            }
          })();
          if (!document2 || !document2.getElementsByClassName) {
            return {
              init: function() {
              },
              cfg: lazySizesCfg,
              noSupport: true
            };
          }
          var docElem = document2.documentElement;
          var supportPicture = window2.HTMLPictureElement;
          var _addEventListener = "addEventListener";
          var _getAttribute = "getAttribute";
          var addEventListener = window2[_addEventListener].bind(window2);
          var setTimeout2 = window2.setTimeout;
          var requestAnimationFrame2 = window2.requestAnimationFrame || setTimeout2;
          var requestIdleCallback = window2.requestIdleCallback;
          var regPicture = /^picture$/i;
          var loadEvents = ["load", "error", "lazyincluded", "_lazyloaded"];
          var regClassCache = {};
          var forEach = Array.prototype.forEach;
          var hasClass = function(ele, cls) {
            if (!regClassCache[cls]) {
              regClassCache[cls] = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            }
            return regClassCache[cls].test(ele[_getAttribute]("class") || "") && regClassCache[cls];
          };
          var addClass = function(ele, cls) {
            if (!hasClass(ele, cls)) {
              ele.setAttribute("class", (ele[_getAttribute]("class") || "").trim() + " " + cls);
            }
          };
          var removeClass = function(ele, cls) {
            var reg;
            if (reg = hasClass(ele, cls)) {
              ele.setAttribute("class", (ele[_getAttribute]("class") || "").replace(reg, " "));
            }
          };
          var addRemoveLoadEvents = function(dom, fn, add) {
            var action = add ? _addEventListener : "removeEventListener";
            if (add) {
              addRemoveLoadEvents(dom, fn);
            }
            loadEvents.forEach(function(evt) {
              dom[action](evt, fn);
            });
          };
          var triggerEvent = function(elem, name, detail, noBubbles, noCancelable) {
            var event = document2.createEvent("Event");
            if (!detail) {
              detail = {};
            }
            detail.instance = lazysizes;
            event.initEvent(name, !noBubbles, !noCancelable);
            event.detail = detail;
            elem.dispatchEvent(event);
            return event;
          };
          var updatePolyfill = function(el, full) {
            var polyfill;
            if (!supportPicture && (polyfill = window2.picturefill || lazySizesCfg.pf)) {
              if (full && full.src && !el[_getAttribute]("srcset")) {
                el.setAttribute("srcset", full.src);
              }
              polyfill({ reevaluate: true, elements: [el] });
            } else if (full && full.src) {
              el.src = full.src;
            }
          };
          var getCSS = function(elem, style) {
            return (getComputedStyle(elem, null) || {})[style];
          };
          var getWidth = function(elem, parent, width) {
            width = width || elem.offsetWidth;
            while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
              width = parent.offsetWidth;
              parent = parent.parentNode;
            }
            return width;
          };
          var rAF = function() {
            var running, waiting;
            var firstFns = [];
            var secondFns = [];
            var fns = firstFns;
            var run = function() {
              var runFns = fns;
              fns = firstFns.length ? secondFns : firstFns;
              running = true;
              waiting = false;
              while (runFns.length) {
                runFns.shift()();
              }
              running = false;
            };
            var rafBatch = function(fn, queue2) {
              if (running && !queue2) {
                fn.apply(this, arguments);
              } else {
                fns.push(fn);
                if (!waiting) {
                  waiting = true;
                  (document2.hidden ? setTimeout2 : requestAnimationFrame2)(run);
                }
              }
            };
            rafBatch._lsFlush = run;
            return rafBatch;
          }();
          var rAFIt = function(fn, simple) {
            return simple ? function() {
              rAF(fn);
            } : function() {
              var that = this;
              var args = arguments;
              rAF(function() {
                fn.apply(that, args);
              });
            };
          };
          var throttle2 = function(fn) {
            var running;
            var lastTime = 0;
            var gDelay = lazySizesCfg.throttleDelay;
            var rICTimeout = lazySizesCfg.ricTimeout;
            var run = function() {
              running = false;
              lastTime = Date2.now();
              fn();
            };
            var idleCallback = requestIdleCallback && rICTimeout > 49 ? function() {
              requestIdleCallback(run, { timeout: rICTimeout });
              if (rICTimeout !== lazySizesCfg.ricTimeout) {
                rICTimeout = lazySizesCfg.ricTimeout;
              }
            } : rAFIt(function() {
              setTimeout2(run);
            }, true);
            return function(isPriority) {
              var delay;
              if (isPriority = isPriority === true) {
                rICTimeout = 33;
              }
              if (running) {
                return;
              }
              running = true;
              delay = gDelay - (Date2.now() - lastTime);
              if (delay < 0) {
                delay = 0;
              }
              if (isPriority || delay < 9) {
                idleCallback();
              } else {
                setTimeout2(idleCallback, delay);
              }
            };
          };
          var debounce2 = function(func) {
            var timeout, timestamp;
            var wait = 99;
            var run = function() {
              timeout = null;
              func();
            };
            var later = function() {
              var last = Date2.now() - timestamp;
              if (last < wait) {
                setTimeout2(later, wait - last);
              } else {
                (requestIdleCallback || run)(run);
              }
            };
            return function() {
              timestamp = Date2.now();
              if (!timeout) {
                timeout = setTimeout2(later, wait);
              }
            };
          };
          var loader = function() {
            var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
            var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
            var regImg = /^img$/i;
            var regIframe = /^iframe$/i;
            var supportScroll = "onscroll" in window2 && !/(gle|ing)bot/.test(navigator.userAgent);
            var shrinkExpand = 0;
            var currentExpand = 0;
            var isLoading = 0;
            var lowRuns = -1;
            var resetPreloading = function(e) {
              isLoading--;
              if (!e || isLoading < 0 || !e.target) {
                isLoading = 0;
              }
            };
            var isVisible = function(elem) {
              if (isBodyHidden == null) {
                isBodyHidden = getCSS(document2.body, "visibility") == "hidden";
              }
              return isBodyHidden || !(getCSS(elem.parentNode, "visibility") == "hidden" && getCSS(elem, "visibility") == "hidden");
            };
            var isNestedVisible = function(elem, elemExpand) {
              var outerRect;
              var parent = elem;
              var visible = isVisible(elem);
              eLtop -= elemExpand;
              eLbottom += elemExpand;
              eLleft -= elemExpand;
              eLright += elemExpand;
              while (visible && (parent = parent.offsetParent) && parent != document2.body && parent != docElem) {
                visible = (getCSS(parent, "opacity") || 1) > 0;
                if (visible && getCSS(parent, "overflow") != "visible") {
                  outerRect = parent.getBoundingClientRect();
                  visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
                }
              }
              return visible;
            };
            var checkElements = function() {
              var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
              var lazyloadElems = lazysizes.elements;
              if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
                i = 0;
                lowRuns++;
                for (; i < eLlen; i++) {
                  if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
                    continue;
                  }
                  if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
                    unveilElement(lazyloadElems[i]);
                    continue;
                  }
                  if (!(elemExpandVal = lazyloadElems[i][_getAttribute]("data-expand")) || !(elemExpand = elemExpandVal * 1)) {
                    elemExpand = currentExpand;
                  }
                  if (!defaultExpand) {
                    defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
                    lazysizes._defEx = defaultExpand;
                    preloadExpand = defaultExpand * lazySizesCfg.expFactor;
                    hFac = lazySizesCfg.hFac;
                    isBodyHidden = null;
                    if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document2.hidden) {
                      currentExpand = preloadExpand;
                      lowRuns = 0;
                    } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
                      currentExpand = defaultExpand;
                    } else {
                      currentExpand = shrinkExpand;
                    }
                  }
                  if (beforeExpandVal !== elemExpand) {
                    eLvW = innerWidth + elemExpand * hFac;
                    elvH = innerHeight + elemExpand;
                    elemNegativeExpand = elemExpand * -1;
                    beforeExpandVal = elemExpand;
                  }
                  rect = lazyloadElems[i].getBoundingClientRect();
                  if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
                    unveilElement(lazyloadElems[i]);
                    loadedSomething = true;
                    if (isLoading > 9) {
                      break;
                    }
                  } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != "auto"))) {
                    autoLoadElem = preloadElems[0] || lazyloadElems[i];
                  }
                }
                if (autoLoadElem && !loadedSomething) {
                  unveilElement(autoLoadElem);
                }
              }
            };
            var throttledCheckElements = throttle2(checkElements);
            var switchLoadingClass = function(e) {
              var elem = e.target;
              if (elem._lazyCache) {
                delete elem._lazyCache;
                return;
              }
              resetPreloading(e);
              addClass(elem, lazySizesCfg.loadedClass);
              removeClass(elem, lazySizesCfg.loadingClass);
              addRemoveLoadEvents(elem, rafSwitchLoadingClass);
              triggerEvent(elem, "lazyloaded");
            };
            var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
            var rafSwitchLoadingClass = function(e) {
              rafedSwitchLoadingClass({ target: e.target });
            };
            var changeIframeSrc = function(elem, src) {
              var loadMode2 = elem.getAttribute("data-load-mode") || lazySizesCfg.iframeLoadMode;
              if (loadMode2 == 0) {
                elem.contentWindow.location.replace(src);
              } else if (loadMode2 == 1) {
                elem.src = src;
              }
            };
            var handleSources = function(source) {
              var customMedia;
              var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);
              if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]("data-media") || source[_getAttribute]("media")]) {
                source.setAttribute("media", customMedia);
              }
              if (sourceSrcset) {
                source.setAttribute("srcset", sourceSrcset);
              }
            };
            var lazyUnveil = rAFIt(function(elem, detail, isAuto, sizes, isImg) {
              var src, srcset, parent, isPicture, event, firesLoad;
              if (!(event = triggerEvent(elem, "lazybeforeunveil", detail)).defaultPrevented) {
                if (sizes) {
                  if (isAuto) {
                    addClass(elem, lazySizesCfg.autosizesClass);
                  } else {
                    elem.setAttribute("sizes", sizes);
                  }
                }
                srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
                src = elem[_getAttribute](lazySizesCfg.srcAttr);
                if (isImg) {
                  parent = elem.parentNode;
                  isPicture = parent && regPicture.test(parent.nodeName || "");
                }
                firesLoad = detail.firesLoad || "src" in elem && (srcset || src || isPicture);
                event = { target: elem };
                addClass(elem, lazySizesCfg.loadingClass);
                if (firesLoad) {
                  clearTimeout(resetPreloadingTimer);
                  resetPreloadingTimer = setTimeout2(resetPreloading, 2500);
                  addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
                }
                if (isPicture) {
                  forEach.call(parent.getElementsByTagName("source"), handleSources);
                }
                if (srcset) {
                  elem.setAttribute("srcset", srcset);
                } else if (src && !isPicture) {
                  if (regIframe.test(elem.nodeName)) {
                    changeIframeSrc(elem, src);
                  } else {
                    elem.src = src;
                  }
                }
                if (isImg && (srcset || isPicture)) {
                  updatePolyfill(elem, { src });
                }
              }
              if (elem._lazyRace) {
                delete elem._lazyRace;
              }
              removeClass(elem, lazySizesCfg.lazyClass);
              rAF(function() {
                var isLoaded = elem.complete && elem.naturalWidth > 1;
                if (!firesLoad || isLoaded) {
                  if (isLoaded) {
                    addClass(elem, lazySizesCfg.fastLoadedClass);
                  }
                  switchLoadingClass(event);
                  elem._lazyCache = true;
                  setTimeout2(function() {
                    if ("_lazyCache" in elem) {
                      delete elem._lazyCache;
                    }
                  }, 9);
                }
                if (elem.loading == "lazy") {
                  isLoading--;
                }
              }, true);
            });
            var unveilElement = function(elem) {
              if (elem._lazyRace) {
                return;
              }
              var detail;
              var isImg = regImg.test(elem.nodeName);
              var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]("sizes"));
              var isAuto = sizes == "auto";
              if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]("src") || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
                return;
              }
              detail = triggerEvent(elem, "lazyunveilread").detail;
              if (isAuto) {
                autoSizer.updateElem(elem, true, elem.offsetWidth);
              }
              elem._lazyRace = true;
              isLoading++;
              lazyUnveil(elem, detail, isAuto, sizes, isImg);
            };
            var afterScroll = debounce2(function() {
              lazySizesCfg.loadMode = 3;
              throttledCheckElements();
            });
            var altLoadmodeScrollListner = function() {
              if (lazySizesCfg.loadMode == 3) {
                lazySizesCfg.loadMode = 2;
              }
              afterScroll();
            };
            var onload = function() {
              if (isCompleted) {
                return;
              }
              if (Date2.now() - started < 999) {
                setTimeout2(onload, 999);
                return;
              }
              isCompleted = true;
              lazySizesCfg.loadMode = 3;
              throttledCheckElements();
              addEventListener("scroll", altLoadmodeScrollListner, true);
            };
            return {
              _: function() {
                started = Date2.now();
                lazysizes.elements = document2.getElementsByClassName(lazySizesCfg.lazyClass);
                preloadElems = document2.getElementsByClassName(lazySizesCfg.lazyClass + " " + lazySizesCfg.preloadClass);
                addEventListener("scroll", throttledCheckElements, true);
                addEventListener("resize", throttledCheckElements, true);
                addEventListener("pageshow", function(e) {
                  if (e.persisted) {
                    var loadingElements = document2.querySelectorAll("." + lazySizesCfg.loadingClass);
                    if (loadingElements.length && loadingElements.forEach) {
                      requestAnimationFrame2(function() {
                        loadingElements.forEach(function(img) {
                          if (img.complete) {
                            unveilElement(img);
                          }
                        });
                      });
                    }
                  }
                });
                if (window2.MutationObserver) {
                  new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
                } else {
                  docElem[_addEventListener]("DOMNodeInserted", throttledCheckElements, true);
                  docElem[_addEventListener]("DOMAttrModified", throttledCheckElements, true);
                  setInterval(throttledCheckElements, 999);
                }
                addEventListener("hashchange", throttledCheckElements, true);
                ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(name) {
                  document2[_addEventListener](name, throttledCheckElements, true);
                });
                if (/d$|^c/.test(document2.readyState)) {
                  onload();
                } else {
                  addEventListener("load", onload);
                  document2[_addEventListener]("DOMContentLoaded", throttledCheckElements);
                  setTimeout2(onload, 2e4);
                }
                if (lazysizes.elements.length) {
                  checkElements();
                  rAF._lsFlush();
                } else {
                  throttledCheckElements();
                }
              },
              checkElems: throttledCheckElements,
              unveil: unveilElement,
              _aLSL: altLoadmodeScrollListner
            };
          }();
          var autoSizer = function() {
            var autosizesElems;
            var sizeElement = rAFIt(function(elem, parent, event, width) {
              var sources, i, len;
              elem._lazysizesWidth = width;
              width += "px";
              elem.setAttribute("sizes", width);
              if (regPicture.test(parent.nodeName || "")) {
                sources = parent.getElementsByTagName("source");
                for (i = 0, len = sources.length; i < len; i++) {
                  sources[i].setAttribute("sizes", width);
                }
              }
              if (!event.detail.dataAttr) {
                updatePolyfill(elem, event.detail);
              }
            });
            var getSizeElement = function(elem, dataAttr, width) {
              var event;
              var parent = elem.parentNode;
              if (parent) {
                width = getWidth(elem, parent, width);
                event = triggerEvent(elem, "lazybeforesizes", { width, dataAttr: !!dataAttr });
                if (!event.defaultPrevented) {
                  width = event.detail.width;
                  if (width && width !== elem._lazysizesWidth) {
                    sizeElement(elem, parent, event, width);
                  }
                }
              }
            };
            var updateElementsSizes = function() {
              var i;
              var len = autosizesElems.length;
              if (len) {
                i = 0;
                for (; i < len; i++) {
                  getSizeElement(autosizesElems[i]);
                }
              }
            };
            var debouncedUpdateElementsSizes = debounce2(updateElementsSizes);
            return {
              _: function() {
                autosizesElems = document2.getElementsByClassName(lazySizesCfg.autosizesClass);
                addEventListener("resize", debouncedUpdateElementsSizes);
              },
              checkElems: debouncedUpdateElementsSizes,
              updateElem: getSizeElement
            };
          }();
          var init = function() {
            if (!init.i && document2.getElementsByClassName) {
              init.i = true;
              autoSizer._();
              loader._();
            }
          };
          setTimeout2(function() {
            if (lazySizesCfg.init) {
              init();
            }
          });
          lazysizes = {
            cfg: lazySizesCfg,
            autoSizer,
            loader,
            init,
            uP: updatePolyfill,
            aC: addClass,
            rC: removeClass,
            hC: hasClass,
            fire: triggerEvent,
            gW: getWidth,
            rAF
          };
          return lazysizes;
        });
      }
    });
  
    // node_modules/alpinejs/dist/module.esm.js
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
    var __commonJS2 = (callback, module2) => () => {
      if (!module2) {
        module2 = { exports: {} };
        callback(module2.exports, module2);
      }
      return module2.exports;
    };
    var __exportStar = (target, module2, desc) => {
      if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames2(module2))
          if (!__hasOwnProp2.call(target, key) && key !== "default")
            __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
      }
      return target;
    };
    var __toModule2 = (module2) => {
      return __exportStar(__markAsModule2(__defProp2(module2 != null ? __create2(__getProtoOf2(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
    };
    var require_shared_cjs = __commonJS2((exports2) => {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      function makeMap(str, expectsLowerCase) {
        const map = Object.create(null);
        const list = str.split(",");
        for (let i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }
        return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
      }
      var PatchFlagNames = {
        [1]: `TEXT`,
        [2]: `CLASS`,
        [4]: `STYLE`,
        [8]: `PROPS`,
        [16]: `FULL_PROPS`,
        [32]: `HYDRATE_EVENTS`,
        [64]: `STABLE_FRAGMENT`,
        [128]: `KEYED_FRAGMENT`,
        [256]: `UNKEYED_FRAGMENT`,
        [512]: `NEED_PATCH`,
        [1024]: `DYNAMIC_SLOTS`,
        [2048]: `DEV_ROOT_FRAGMENT`,
        [-1]: `HOISTED`,
        [-2]: `BAIL`
      };
      var slotFlagsText = {
        [1]: "STABLE",
        [2]: "DYNAMIC",
        [3]: "FORWARDED"
      };
      var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
      var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
      var range = 2;
      function generateCodeFrame(source, start2 = 0, end = source.length) {
        const lines = source.split(/\r?\n/);
        let count = 0;
        const res = [];
        for (let i = 0; i < lines.length; i++) {
          count += lines[i].length + 1;
          if (count >= start2) {
            for (let j = i - range; j <= i + range || end > count; j++) {
              if (j < 0 || j >= lines.length)
                continue;
              const line = j + 1;
              res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
              const lineLength = lines[j].length;
              if (j === i) {
                const pad = start2 - (count - lineLength) + 1;
                const length = Math.max(1, end > count ? lineLength - pad : end - start2);
                res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
              } else if (j > i) {
                if (end > count) {
                  const length = Math.max(Math.min(end - count, lineLength), 1);
                  res.push(`   |  ` + "^".repeat(length));
                }
                count += lineLength + 1;
              }
            }
            break;
          }
        }
        return res.join("\n");
      }
      var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
      var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
      var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
      var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
      var attrValidationCache = {};
      function isSSRSafeAttrName(name) {
        if (attrValidationCache.hasOwnProperty(name)) {
          return attrValidationCache[name];
        }
        const isUnsafe = unsafeAttrCharRE.test(name);
        if (isUnsafe) {
          console.error(`unsafe attribute name: ${name}`);
        }
        return attrValidationCache[name] = !isUnsafe;
      }
      var propsToAttrMap = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
      };
      var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
      var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
      function normalizeStyle(value) {
        if (isArray(value)) {
          const res = {};
          for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
            if (normalized) {
              for (const key in normalized) {
                res[key] = normalized[key];
              }
            }
          }
          return res;
        } else if (isObject(value)) {
          return value;
        }
      }
      var listDelimiterRE = /;(?![^(]*\))/g;
      var propertyDelimiterRE = /:(.+)/;
      function parseStringStyle(cssText) {
        const ret = {};
        cssText.split(listDelimiterRE).forEach((item) => {
          if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
          }
        });
        return ret;
      }
      function stringifyStyle(styles) {
        let ret = "";
        if (!styles) {
          return ret;
        }
        for (const key in styles) {
          const value = styles[key];
          const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
          if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
            ret += `${normalizedKey}:${value};`;
          }
        }
        return ret;
      }
      function normalizeClass(value) {
        let res = "";
        if (isString(value)) {
          res = value;
        } else if (isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
              res += normalized + " ";
            }
          }
        } else if (isObject(value)) {
          for (const name in value) {
            if (value[name]) {
              res += name + " ";
            }
          }
        }
        return res.trim();
      }
      var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
      var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
      var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
      var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
      var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
      var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
      var escapeRE = /["'&<>]/;
      function escapeHtml(string) {
        const str = "" + string;
        const match = escapeRE.exec(str);
        if (!match) {
          return str;
        }
        let html = "";
        let escaped;
        let index;
        let lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escaped = "&quot;";
              break;
            case 38:
              escaped = "&amp;";
              break;
            case 39:
              escaped = "&#39;";
              break;
            case 60:
              escaped = "&lt;";
              break;
            case 62:
              escaped = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
          }
          lastIndex = index + 1;
          html += escaped;
        }
        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
      }
      var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
      function escapeHtmlComment(src) {
        return src.replace(commentStripRE, "");
      }
      function looseCompareArrays(a, b) {
        if (a.length !== b.length)
          return false;
        let equal = true;
        for (let i = 0; equal && i < a.length; i++) {
          equal = looseEqual(a[i], b[i]);
        }
        return equal;
      }
      function looseEqual(a, b) {
        if (a === b)
          return true;
        let aValidType = isDate(a);
        let bValidType = isDate(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? a.getTime() === b.getTime() : false;
        }
        aValidType = isArray(a);
        bValidType = isArray(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? looseCompareArrays(a, b) : false;
        }
        aValidType = isObject(a);
        bValidType = isObject(b);
        if (aValidType || bValidType) {
          if (!aValidType || !bValidType) {
            return false;
          }
          const aKeysCount = Object.keys(a).length;
          const bKeysCount = Object.keys(b).length;
          if (aKeysCount !== bKeysCount) {
            return false;
          }
          for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
              return false;
            }
          }
        }
        return String(a) === String(b);
      }
      function looseIndexOf(arr2, val) {
        return arr2.findIndex((item) => looseEqual(item, val));
      }
      var toDisplayString = (val) => {
        return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
      };
      var replacer = (_key, val) => {
        if (isMap(val)) {
          return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            }, {})
          };
        } else if (isSet(val)) {
          return {
            [`Set(${val.size})`]: [...val.values()]
          };
        } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
          return String(val);
        }
        return val;
      };
      var babelParserDefaultPlugins = [
        "bigInt",
        "optionalChaining",
        "nullishCoalescingOperator"
      ];
      var EMPTY_OBJ = Object.freeze({});
      var EMPTY_ARR = Object.freeze([]);
      var NOOP = () => {
      };
      var NO = () => false;
      var onRE = /^on[^a-z]/;
      var isOn = (key) => onRE.test(key);
      var isModelListener = (key) => key.startsWith("onUpdate:");
      var extend = Object.assign;
      var remove = (arr2, el) => {
        const i = arr2.indexOf(el);
        if (i > -1) {
          arr2.splice(i, 1);
        }
      };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var hasOwn = (val, key) => hasOwnProperty.call(val, key);
      var isArray = Array.isArray;
      var isMap = (val) => toTypeString(val) === "[object Map]";
      var isSet = (val) => toTypeString(val) === "[object Set]";
      var isDate = (val) => val instanceof Date;
      var isFunction = (val) => typeof val === "function";
      var isString = (val) => typeof val === "string";
      var isSymbol = (val) => typeof val === "symbol";
      var isObject = (val) => val !== null && typeof val === "object";
      var isPromise = (val) => {
        return isObject(val) && isFunction(val.then) && isFunction(val.catch);
      };
      var objectToString = Object.prototype.toString;
      var toTypeString = (value) => objectToString.call(value);
      var toRawType = (value) => {
        return toTypeString(value).slice(8, -1);
      };
      var isPlainObject = (val) => toTypeString(val) === "[object Object]";
      var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
      var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
      var cacheStringFunction = (fn) => {
        const cache = Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      };
      var camelizeRE = /-(\w)/g;
      var camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
      });
      var hyphenateRE = /\B([A-Z])/g;
      var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
      var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
      var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
      var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
      var invokeArrayFns = (fns, arg) => {
        for (let i = 0; i < fns.length; i++) {
          fns[i](arg);
        }
      };
      var def = (obj, key, value) => {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
        });
      };
      var toNumber = (val) => {
        const n = parseFloat(val);
        return isNaN(n) ? val : n;
      };
      var _globalThis;
      var getGlobalThis = () => {
        return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      };
      exports2.EMPTY_ARR = EMPTY_ARR;
      exports2.EMPTY_OBJ = EMPTY_OBJ;
      exports2.NO = NO;
      exports2.NOOP = NOOP;
      exports2.PatchFlagNames = PatchFlagNames;
      exports2.babelParserDefaultPlugins = babelParserDefaultPlugins;
      exports2.camelize = camelize;
      exports2.capitalize = capitalize;
      exports2.def = def;
      exports2.escapeHtml = escapeHtml;
      exports2.escapeHtmlComment = escapeHtmlComment;
      exports2.extend = extend;
      exports2.generateCodeFrame = generateCodeFrame;
      exports2.getGlobalThis = getGlobalThis;
      exports2.hasChanged = hasChanged;
      exports2.hasOwn = hasOwn;
      exports2.hyphenate = hyphenate;
      exports2.invokeArrayFns = invokeArrayFns;
      exports2.isArray = isArray;
      exports2.isBooleanAttr = isBooleanAttr2;
      exports2.isDate = isDate;
      exports2.isFunction = isFunction;
      exports2.isGloballyWhitelisted = isGloballyWhitelisted;
      exports2.isHTMLTag = isHTMLTag;
      exports2.isIntegerKey = isIntegerKey;
      exports2.isKnownAttr = isKnownAttr;
      exports2.isMap = isMap;
      exports2.isModelListener = isModelListener;
      exports2.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
      exports2.isObject = isObject;
      exports2.isOn = isOn;
      exports2.isPlainObject = isPlainObject;
      exports2.isPromise = isPromise;
      exports2.isReservedProp = isReservedProp;
      exports2.isSSRSafeAttrName = isSSRSafeAttrName;
      exports2.isSVGTag = isSVGTag;
      exports2.isSet = isSet;
      exports2.isSpecialBooleanAttr = isSpecialBooleanAttr;
      exports2.isString = isString;
      exports2.isSymbol = isSymbol;
      exports2.isVoidTag = isVoidTag;
      exports2.looseEqual = looseEqual;
      exports2.looseIndexOf = looseIndexOf;
      exports2.makeMap = makeMap;
      exports2.normalizeClass = normalizeClass;
      exports2.normalizeStyle = normalizeStyle;
      exports2.objectToString = objectToString;
      exports2.parseStringStyle = parseStringStyle;
      exports2.propsToAttrMap = propsToAttrMap;
      exports2.remove = remove;
      exports2.slotFlagsText = slotFlagsText;
      exports2.stringifyStyle = stringifyStyle;
      exports2.toDisplayString = toDisplayString;
      exports2.toHandlerKey = toHandlerKey;
      exports2.toNumber = toNumber;
      exports2.toRawType = toRawType;
      exports2.toTypeString = toTypeString;
    });
    var require_shared = __commonJS2((exports2, module2) => {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_shared_cjs();
      }
    });
    var require_reactivity_cjs = __commonJS2((exports2) => {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      var shared = require_shared();
      var targetMap = new WeakMap();
      var effectStack = [];
      var activeEffect;
      var ITERATE_KEY = Symbol("iterate");
      var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
      function isEffect(fn) {
        return fn && fn._isEffect === true;
      }
      function effect3(fn, options = shared.EMPTY_OBJ) {
        if (isEffect(fn)) {
          fn = fn.raw;
        }
        const effect4 = createReactiveEffect(fn, options);
        if (!options.lazy) {
          effect4();
        }
        return effect4;
      }
      function stop2(effect4) {
        if (effect4.active) {
          cleanup(effect4);
          if (effect4.options.onStop) {
            effect4.options.onStop();
          }
          effect4.active = false;
        }
      }
      var uid = 0;
      function createReactiveEffect(fn, options) {
        const effect4 = function reactiveEffect() {
          if (!effect4.active) {
            return fn();
          }
          if (!effectStack.includes(effect4)) {
            cleanup(effect4);
            try {
              enableTracking();
              effectStack.push(effect4);
              activeEffect = effect4;
              return fn();
            } finally {
              effectStack.pop();
              resetTracking();
              activeEffect = effectStack[effectStack.length - 1];
            }
          }
        };
        effect4.id = uid++;
        effect4.allowRecurse = !!options.allowRecurse;
        effect4._isEffect = true;
        effect4.active = true;
        effect4.raw = fn;
        effect4.deps = [];
        effect4.options = options;
        return effect4;
      }
      function cleanup(effect4) {
        const { deps } = effect4;
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect4);
          }
          deps.length = 0;
        }
      }
      var shouldTrack = true;
      var trackStack = [];
      function pauseTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = false;
      }
      function enableTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = true;
      }
      function resetTracking() {
        const last = trackStack.pop();
        shouldTrack = last === void 0 ? true : last;
      }
      function track(target, type, key) {
        if (!shouldTrack || activeEffect === void 0) {
          return;
        }
        let depsMap = targetMap.get(target);
        if (!depsMap) {
          targetMap.set(target, depsMap = new Map());
        }
        let dep = depsMap.get(key);
        if (!dep) {
          depsMap.set(key, dep = new Set());
        }
        if (!dep.has(activeEffect)) {
          dep.add(activeEffect);
          activeEffect.deps.push(dep);
          if (activeEffect.options.onTrack) {
            activeEffect.options.onTrack({
              effect: activeEffect,
              target,
              type,
              key
            });
          }
        }
      }
      function trigger(target, type, key, newValue, oldValue, oldTarget) {
        const depsMap = targetMap.get(target);
        if (!depsMap) {
          return;
        }
        const effects = new Set();
        const add2 = (effectsToAdd) => {
          if (effectsToAdd) {
            effectsToAdd.forEach((effect4) => {
              if (effect4 !== activeEffect || effect4.allowRecurse) {
                effects.add(effect4);
              }
            });
          }
        };
        if (type === "clear") {
          depsMap.forEach(add2);
        } else if (key === "length" && shared.isArray(target)) {
          depsMap.forEach((dep, key2) => {
            if (key2 === "length" || key2 >= newValue) {
              add2(dep);
            }
          });
        } else {
          if (key !== void 0) {
            add2(depsMap.get(key));
          }
          switch (type) {
            case "add":
              if (!shared.isArray(target)) {
                add2(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              } else if (shared.isIntegerKey(key)) {
                add2(depsMap.get("length"));
              }
              break;
            case "delete":
              if (!shared.isArray(target)) {
                add2(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              }
              break;
            case "set":
              if (shared.isMap(target)) {
                add2(depsMap.get(ITERATE_KEY));
              }
              break;
          }
        }
        const run = (effect4) => {
          if (effect4.options.onTrigger) {
            effect4.options.onTrigger({
              effect: effect4,
              target,
              key,
              type,
              newValue,
              oldValue,
              oldTarget
            });
          }
          if (effect4.options.scheduler) {
            effect4.options.scheduler(effect4);
          } else {
            effect4();
          }
        };
        effects.forEach(run);
      }
      var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
      var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
      var get2 = /* @__PURE__ */ createGetter();
      var shallowGet = /* @__PURE__ */ createGetter(false, true);
      var readonlyGet = /* @__PURE__ */ createGetter(true);
      var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
      var arrayInstrumentations = {};
      ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
        const method = Array.prototype[key];
        arrayInstrumentations[key] = function(...args) {
          const arr2 = toRaw2(this);
          for (let i = 0, l = this.length; i < l; i++) {
            track(arr2, "get", i + "");
          }
          const res = method.apply(arr2, args);
          if (res === -1 || res === false) {
            return method.apply(arr2, args.map(toRaw2));
          } else {
            return res;
          }
        };
      });
      ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
        const method = Array.prototype[key];
        arrayInstrumentations[key] = function(...args) {
          pauseTracking();
          const res = method.apply(this, args);
          resetTracking();
          return res;
        };
      });
      function createGetter(isReadonly2 = false, shallow = false) {
        return function get3(target, key, receiver) {
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
            return target;
          }
          const targetIsArray = shared.isArray(target);
          if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
            return Reflect.get(arrayInstrumentations, key, receiver);
          }
          const res = Reflect.get(target, key, receiver);
          if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
          }
          if (!isReadonly2) {
            track(target, "get", key);
          }
          if (shallow) {
            return res;
          }
          if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
          }
          if (shared.isObject(res)) {
            return isReadonly2 ? readonly(res) : reactive3(res);
          }
          return res;
        };
      }
      var set2 = /* @__PURE__ */ createSetter();
      var shallowSet = /* @__PURE__ */ createSetter(true);
      function createSetter(shallow = false) {
        return function set3(target, key, value, receiver) {
          let oldValue = target[key];
          if (!shallow) {
            value = toRaw2(value);
            oldValue = toRaw2(oldValue);
            if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
              oldValue.value = value;
              return true;
            }
          }
          const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          if (target === toRaw2(receiver)) {
            if (!hadKey) {
              trigger(target, "add", key, value);
            } else if (shared.hasChanged(value, oldValue)) {
              trigger(target, "set", key, value, oldValue);
            }
          }
          return result;
        };
      }
      function deleteProperty(target, key) {
        const hadKey = shared.hasOwn(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      }
      function has(target, key) {
        const result = Reflect.has(target, key);
        if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
          track(target, "has", key);
        }
        return result;
      }
      function ownKeys(target) {
        track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
      }
      var mutableHandlers = {
        get: get2,
        set: set2,
        deleteProperty,
        has,
        ownKeys
      };
      var readonlyHandlers = {
        get: readonlyGet,
        set(target, key) {
          {
            console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        },
        deleteProperty(target, key) {
          {
            console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
          }
          return true;
        }
      };
      var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
        get: shallowGet,
        set: shallowSet
      });
      var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
        get: shallowReadonlyGet
      });
      var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
      var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
      var toShallow = (value) => value;
      var getProto = (v) => Reflect.getPrototypeOf(v);
      function get$1(target, key, isReadonly2 = false, isShallow = false) {
        target = target["__v_raw"];
        const rawTarget = toRaw2(target);
        const rawKey = toRaw2(key);
        if (key !== rawKey) {
          !isReadonly2 && track(rawTarget, "get", key);
        }
        !isReadonly2 && track(rawTarget, "get", rawKey);
        const { has: has2 } = getProto(rawTarget);
        const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
        if (has2.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has2.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      }
      function has$1(key, isReadonly2 = false) {
        const target = this["__v_raw"];
        const rawTarget = toRaw2(target);
        const rawKey = toRaw2(key);
        if (key !== rawKey) {
          !isReadonly2 && track(rawTarget, "has", key);
        }
        !isReadonly2 && track(rawTarget, "has", rawKey);
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      }
      function size(target, isReadonly2 = false) {
        target = target["__v_raw"];
        !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
      }
      function add(value) {
        value = toRaw2(value);
        const target = toRaw2(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      }
      function set$1(key, value) {
        value = toRaw2(value);
        const target = toRaw2(this);
        const { has: has2, get: get3 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw2(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get3.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      }
      function deleteEntry(key) {
        const target = toRaw2(this);
        const { has: has2, get: get3 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw2(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get3 ? get3.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      }
      function clear() {
        const target = toRaw2(this);
        const hadItems = target.size !== 0;
        const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
        const result = target.clear();
        if (hadItems) {
          trigger(target, "clear", void 0, void 0, oldTarget);
        }
        return result;
      }
      function createForEach(isReadonly2, isShallow) {
        return function forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw"];
          const rawTarget = toRaw2(target);
          const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
          return target.forEach((value, key) => {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
        };
      }
      function createIterableMethod(method, isReadonly2, isShallow) {
        return function(...args) {
          const target = this["__v_raw"];
          const rawTarget = toRaw2(target);
          const targetIsMap = shared.isMap(rawTarget);
          const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
          const isKeyOnly = method === "keys" && targetIsMap;
          const innerIterator = target[method](...args);
          const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
          !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
          return {
            next() {
              const { value, done } = innerIterator.next();
              return done ? { value, done } : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done
              };
            },
            [Symbol.iterator]() {
              return this;
            }
          };
        };
      }
      function createReadonlyMethod(type) {
        return function(...args) {
          {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
          }
          return type === "delete" ? false : this;
        };
      }
      var mutableInstrumentations = {
        get(key) {
          return get$1(this, key);
        },
        get size() {
          return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
      };
      var shallowInstrumentations = {
        get(key) {
          return get$1(this, key, false, true);
        },
        get size() {
          return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
      };
      var readonlyInstrumentations = {
        get(key) {
          return get$1(this, key, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
      };
      var shallowReadonlyInstrumentations = {
        get(key) {
          return get$1(this, key, true, true);
        },
        get size() {
          return size(this, true);
        },
        has(key) {
          return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
      };
      var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
      iteratorMethods.forEach((method) => {
        mutableInstrumentations[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations[method] = createIterableMethod(method, true, false);
        shallowInstrumentations[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
      });
      function createInstrumentationGetter(isReadonly2, shallow) {
        const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
        return (target, key, receiver) => {
          if (key === "__v_isReactive") {
            return !isReadonly2;
          } else if (key === "__v_isReadonly") {
            return isReadonly2;
          } else if (key === "__v_raw") {
            return target;
          }
          return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
        };
      }
      var mutableCollectionHandlers = {
        get: createInstrumentationGetter(false, false)
      };
      var shallowCollectionHandlers = {
        get: createInstrumentationGetter(false, true)
      };
      var readonlyCollectionHandlers = {
        get: createInstrumentationGetter(true, false)
      };
      var shallowReadonlyCollectionHandlers = {
        get: createInstrumentationGetter(true, true)
      };
      function checkIdentityKeys(target, has2, key) {
        const rawKey = toRaw2(key);
        if (rawKey !== key && has2.call(target, rawKey)) {
          const type = shared.toRawType(target);
          console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
        }
      }
      var reactiveMap = new WeakMap();
      var shallowReactiveMap = new WeakMap();
      var readonlyMap = new WeakMap();
      var shallowReadonlyMap = new WeakMap();
      function targetTypeMap(rawType) {
        switch (rawType) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }
      function getTargetType(value) {
        return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
      }
      function reactive3(target) {
        if (target && target["__v_isReadonly"]) {
          return target;
        }
        return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
      }
      function shallowReactive(target) {
        return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
      }
      function readonly(target) {
        return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
      }
      function shallowReadonly(target) {
        return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
      }
      function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
        if (!shared.isObject(target)) {
          {
            console.warn(`value cannot be made reactive: ${String(target)}`);
          }
          return target;
        }
        if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
          return target;
        }
        const existingProxy = proxyMap.get(target);
        if (existingProxy) {
          return existingProxy;
        }
        const targetType = getTargetType(target);
        if (targetType === 0) {
          return target;
        }
        const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
        proxyMap.set(target, proxy);
        return proxy;
      }
      function isReactive2(value) {
        if (isReadonly(value)) {
          return isReactive2(value["__v_raw"]);
        }
        return !!(value && value["__v_isReactive"]);
      }
      function isReadonly(value) {
        return !!(value && value["__v_isReadonly"]);
      }
      function isProxy(value) {
        return isReactive2(value) || isReadonly(value);
      }
      function toRaw2(observed) {
        return observed && toRaw2(observed["__v_raw"]) || observed;
      }
      function markRaw(value) {
        shared.def(value, "__v_skip", true);
        return value;
      }
      var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
      function isRef(r) {
        return Boolean(r && r.__v_isRef === true);
      }
      function ref(value) {
        return createRef(value);
      }
      function shallowRef(value) {
        return createRef(value, true);
      }
      var RefImpl = class {
        constructor(_rawValue, _shallow = false) {
          this._rawValue = _rawValue;
          this._shallow = _shallow;
          this.__v_isRef = true;
          this._value = _shallow ? _rawValue : convert(_rawValue);
        }
        get value() {
          track(toRaw2(this), "get", "value");
          return this._value;
        }
        set value(newVal) {
          if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
            this._rawValue = newVal;
            this._value = this._shallow ? newVal : convert(newVal);
            trigger(toRaw2(this), "set", "value", newVal);
          }
        }
      };
      function createRef(rawValue, shallow = false) {
        if (isRef(rawValue)) {
          return rawValue;
        }
        return new RefImpl(rawValue, shallow);
      }
      function triggerRef(ref2) {
        trigger(toRaw2(ref2), "set", "value", ref2.value);
      }
      function unref(ref2) {
        return isRef(ref2) ? ref2.value : ref2;
      }
      var shallowUnwrapHandlers = {
        get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
        set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef(oldValue) && !isRef(value)) {
            oldValue.value = value;
            return true;
          } else {
            return Reflect.set(target, key, value, receiver);
          }
        }
      };
      function proxyRefs(objectWithRefs) {
        return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
      }
      var CustomRefImpl = class {
        constructor(factory) {
          this.__v_isRef = true;
          const { get: get3, set: set3 } = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
          this._get = get3;
          this._set = set3;
        }
        get value() {
          return this._get();
        }
        set value(newVal) {
          this._set(newVal);
        }
      };
      function customRef(factory) {
        return new CustomRefImpl(factory);
      }
      function toRefs(object) {
        if (!isProxy(object)) {
          console.warn(`toRefs() expects a reactive object but received a plain one.`);
        }
        const ret = shared.isArray(object) ? new Array(object.length) : {};
        for (const key in object) {
          ret[key] = toRef(object, key);
        }
        return ret;
      }
      var ObjectRefImpl = class {
        constructor(_object, _key) {
          this._object = _object;
          this._key = _key;
          this.__v_isRef = true;
        }
        get value() {
          return this._object[this._key];
        }
        set value(newVal) {
          this._object[this._key] = newVal;
        }
      };
      function toRef(object, key) {
        return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
      }
      var ComputedRefImpl = class {
        constructor(getter, _setter, isReadonly2) {
          this._setter = _setter;
          this._dirty = true;
          this.__v_isRef = true;
          this.effect = effect3(getter, {
            lazy: true,
            scheduler: () => {
              if (!this._dirty) {
                this._dirty = true;
                trigger(toRaw2(this), "set", "value");
              }
            }
          });
          this["__v_isReadonly"] = isReadonly2;
        }
        get value() {
          const self2 = toRaw2(this);
          if (self2._dirty) {
            self2._value = this.effect();
            self2._dirty = false;
          }
          track(self2, "get", "value");
          return self2._value;
        }
        set value(newValue) {
          this._setter(newValue);
        }
      };
      function computed(getterOrOptions) {
        let getter;
        let setter;
        if (shared.isFunction(getterOrOptions)) {
          getter = getterOrOptions;
          setter = () => {
            console.warn("Write operation failed: computed value is readonly");
          };
        } else {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
        }
        return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
      }
      exports2.ITERATE_KEY = ITERATE_KEY;
      exports2.computed = computed;
      exports2.customRef = customRef;
      exports2.effect = effect3;
      exports2.enableTracking = enableTracking;
      exports2.isProxy = isProxy;
      exports2.isReactive = isReactive2;
      exports2.isReadonly = isReadonly;
      exports2.isRef = isRef;
      exports2.markRaw = markRaw;
      exports2.pauseTracking = pauseTracking;
      exports2.proxyRefs = proxyRefs;
      exports2.reactive = reactive3;
      exports2.readonly = readonly;
      exports2.ref = ref;
      exports2.resetTracking = resetTracking;
      exports2.shallowReactive = shallowReactive;
      exports2.shallowReadonly = shallowReadonly;
      exports2.shallowRef = shallowRef;
      exports2.stop = stop2;
      exports2.toRaw = toRaw2;
      exports2.toRef = toRef;
      exports2.toRefs = toRefs;
      exports2.track = track;
      exports2.trigger = trigger;
      exports2.triggerRef = triggerRef;
      exports2.unref = unref;
    });
    var require_reactivity = __commonJS2((exports2, module2) => {
      "use strict";
      if (false) {
        module2.exports = null;
      } else {
        module2.exports = require_reactivity_cjs();
      }
    });
    var flushPending = false;
    var flushing = false;
    var queue = [];
    function scheduler(callback) {
      queueJob(callback);
    }
    function queueJob(job) {
      if (!queue.includes(job))
        queue.push(job);
      queueFlush();
    }
    function queueFlush() {
      if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
      }
    }
    function flushJobs() {
      flushPending = false;
      flushing = true;
      for (let i = 0; i < queue.length; i++) {
        queue[i]();
      }
      queue.length = 0;
      flushing = false;
    }
    var reactive;
    var effect;
    var release;
    var raw;
    var shouldSchedule = true;
    function disableEffectScheduling(callback) {
      shouldSchedule = false;
      callback();
      shouldSchedule = true;
    }
    function setReactivityEngine(engine) {
      reactive = engine.reactive;
      release = engine.release;
      effect = (callback) => engine.effect(callback, { scheduler: (task) => {
        if (shouldSchedule) {
          scheduler(task);
        } else {
          task();
        }
      } });
      raw = engine.raw;
    }
    function overrideEffect(override) {
      effect = override;
    }
    function elementBoundEffect(el) {
      let cleanup = () => {
      };
      let wrappedEffect = (callback) => {
        let effectReference = effect(callback);
        if (!el._x_effects) {
          el._x_effects = new Set();
          el._x_runEffects = () => {
            el._x_effects.forEach((i) => i());
          };
        }
        el._x_effects.add(effectReference);
        cleanup = () => {
          if (effectReference === void 0)
            return;
          el._x_effects.delete(effectReference);
          release(effectReference);
        };
      };
      return [wrappedEffect, () => {
        cleanup();
      }];
    }
    var onAttributeAddeds = [];
    var onElRemoveds = [];
    var onElAddeds = [];
    function onElAdded(callback) {
      onElAddeds.push(callback);
    }
    function onElRemoved(callback) {
      onElRemoveds.push(callback);
    }
    function onAttributesAdded(callback) {
      onAttributeAddeds.push(callback);
    }
    function onAttributeRemoved(el, name, callback) {
      if (!el._x_attributeCleanups)
        el._x_attributeCleanups = {};
      if (!el._x_attributeCleanups[name])
        el._x_attributeCleanups[name] = [];
      el._x_attributeCleanups[name].push(callback);
    }
    function cleanupAttributes(el, names) {
      if (!el._x_attributeCleanups)
        return;
      Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
        (names === void 0 || names.includes(name)) && value.forEach((i) => i());
        delete el._x_attributeCleanups[name];
      });
    }
    var observer = new MutationObserver(onMutate);
    var currentlyObserving = false;
    function startObservingMutations() {
      observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
      currentlyObserving = true;
    }
    function stopObservingMutations() {
      observer.disconnect();
      currentlyObserving = false;
    }
    var recordQueue = [];
    var willProcessRecordQueue = false;
    function flushObserver() {
      recordQueue = recordQueue.concat(observer.takeRecords());
      if (recordQueue.length && !willProcessRecordQueue) {
        willProcessRecordQueue = true;
        queueMicrotask(() => {
          processRecordQueue();
          willProcessRecordQueue = false;
        });
      }
    }
    function processRecordQueue() {
      onMutate(recordQueue);
      recordQueue.length = 0;
    }
    function mutateDom(callback) {
      if (!currentlyObserving)
        return callback();
      flushObserver();
      stopObservingMutations();
      let result = callback();
      startObservingMutations();
      return result;
    }
    function onMutate(mutations) {
      let addedNodes = [];
      let removedNodes = [];
      let addedAttributes = new Map();
      let removedAttributes = new Map();
      for (let i = 0; i < mutations.length; i++) {
        if (mutations[i].target._x_ignoreMutationObserver)
          continue;
        if (mutations[i].type === "childList") {
          mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
          mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
        }
        if (mutations[i].type === "attributes") {
          let el = mutations[i].target;
          let name = mutations[i].attributeName;
          let oldValue = mutations[i].oldValue;
          let add = () => {
            if (!addedAttributes.has(el))
              addedAttributes.set(el, []);
            addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
          };
          let remove = () => {
            if (!removedAttributes.has(el))
              removedAttributes.set(el, []);
            removedAttributes.get(el).push(name);
          };
          if (el.hasAttribute(name) && oldValue === null) {
            add();
          } else if (el.hasAttribute(name)) {
            remove();
            add();
          } else {
            remove();
          }
        }
      }
      removedAttributes.forEach((attrs, el) => {
        cleanupAttributes(el, attrs);
      });
      addedAttributes.forEach((attrs, el) => {
        onAttributeAddeds.forEach((i) => i(el, attrs));
      });
      for (let node of addedNodes) {
        if (removedNodes.includes(node))
          continue;
        onElAddeds.forEach((i) => i(node));
      }
      for (let node of removedNodes) {
        if (addedNodes.includes(node))
          continue;
        onElRemoveds.forEach((i) => i(node));
      }
      addedNodes = null;
      removedNodes = null;
      addedAttributes = null;
      removedAttributes = null;
    }
    function addScopeToNode(node, data2, referenceNode) {
      node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
      return () => {
        node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
      };
    }
    function refreshScope(element, scope) {
      let existingScope = element._x_dataStack[0];
      Object.entries(scope).forEach(([key, value]) => {
        existingScope[key] = value;
      });
    }
    function closestDataStack(node) {
      if (node._x_dataStack)
        return node._x_dataStack;
      if (node instanceof ShadowRoot) {
        return closestDataStack(node.host);
      }
      if (!node.parentNode) {
        return [];
      }
      return closestDataStack(node.parentNode);
    }
    function mergeProxies(objects) {
      return new Proxy({}, {
        ownKeys: () => {
          return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
        },
        has: (target, name) => {
          return objects.some((obj) => obj.hasOwnProperty(name));
        },
        get: (target, name) => {
          return (objects.find((obj) => obj.hasOwnProperty(name)) || {})[name];
        },
        set: (target, name, value) => {
          let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
          if (closestObjectWithKey) {
            closestObjectWithKey[name] = value;
          } else {
            objects[objects.length - 1][name] = value;
          }
          return true;
        }
      });
    }
    function initInterceptors(data2) {
      let isObject = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
      let recurse = (obj, basePath = "") => {
        Object.entries(obj).forEach(([key, value]) => {
          let path = basePath === "" ? key : `${basePath}.${key}`;
          if (typeof value === "object" && value !== null && value._x_interceptor) {
            obj[key] = value.initialize(data2, path, key);
          } else {
            if (isObject(value) && value !== obj && !(value instanceof Element)) {
              recurse(value, path);
            }
          }
        });
      };
      return recurse(data2);
    }
    function interceptor(callback, mutateObj = () => {
    }) {
      let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize(data2, path, key) {
          return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
        }
      };
      mutateObj(obj);
      return (initialValue) => {
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
          let initialize = obj.initialize.bind(obj);
          obj.initialize = (data2, path, key) => {
            let innerValue = initialValue.initialize(data2, path, key);
            obj.initialValue = innerValue;
            return initialize(data2, path, key);
          };
        } else {
          obj.initialValue = initialValue;
        }
        return obj;
      };
    }
    function get(obj, path) {
      return path.split(".").reduce((carry, segment) => carry[segment], obj);
    }
    function set(obj, path, value) {
      if (typeof path === "string")
        path = path.split(".");
      if (path.length === 1)
        obj[path[0]] = value;
      else if (path.length === 0)
        throw error;
      else {
        if (obj[path[0]])
          return set(obj[path[0]], path.slice(1), value);
        else {
          obj[path[0]] = {};
          return set(obj[path[0]], path.slice(1), value);
        }
      }
    }
    var magics = {};
    function magic(name, callback) {
      magics[name] = callback;
    }
    function injectMagics(obj, el) {
      Object.entries(magics).forEach(([name, callback]) => {
        Object.defineProperty(obj, `$${name}`, {
          get() {
            return callback(el, { Alpine: alpine_default, interceptor });
          },
          enumerable: false
        });
      });
      return obj;
    }
    function evaluate(el, expression, extras = {}) {
      let result;
      evaluateLater(el, expression)((value) => result = value, extras);
      return result;
    }
    function evaluateLater(...args) {
      return theEvaluatorFunction(...args);
    }
    var theEvaluatorFunction = normalEvaluator;
    function setEvaluator(newEvaluator) {
      theEvaluatorFunction = newEvaluator;
    }
    function normalEvaluator(el, expression) {
      let overriddenMagics = {};
      injectMagics(overriddenMagics, el);
      let dataStack = [overriddenMagics, ...closestDataStack(el)];
      if (typeof expression === "function") {
        return generateEvaluatorFromFunction(dataStack, expression);
      }
      let evaluator = generateEvaluatorFromString(dataStack, expression);
      return tryCatch.bind(null, el, expression, evaluator);
    }
    function generateEvaluatorFromFunction(dataStack, func) {
      return (receiver = () => {
      }, { scope = {}, params = [] } = {}) => {
        let result = func.apply(mergeProxies([scope, ...dataStack]), params);
        runIfTypeOfFunction(receiver, result);
      };
    }
    var evaluatorMemo = {};
    function generateFunctionFromString(expression) {
      if (evaluatorMemo[expression]) {
        return evaluatorMemo[expression];
      }
      let AsyncFunction = Object.getPrototypeOf(async function() {
      }).constructor;
      let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)/.test(expression) ? `(() => { ${expression} })()` : expression;
      let func = new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
      evaluatorMemo[expression] = func;
      return func;
    }
    function generateEvaluatorFromString(dataStack, expression) {
      let func = generateFunctionFromString(expression);
      return (receiver = () => {
      }, { scope = {}, params = [] } = {}) => {
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([scope, ...dataStack]);
        let promise = func(func, completeScope);
        if (func.finished) {
          runIfTypeOfFunction(receiver, func.result, completeScope, params);
        } else {
          promise.then((result) => {
            runIfTypeOfFunction(receiver, result, completeScope, params);
          });
        }
      };
    }
    function runIfTypeOfFunction(receiver, value, scope, params) {
      if (typeof value === "function") {
        let result = value.apply(scope, params);
        if (result instanceof Promise) {
          result.then((i) => runIfTypeOfFunction(receiver, i, scope, params));
        } else {
          receiver(result);
        }
      } else {
        receiver(value);
      }
    }
    function tryCatch(el, expression, callback, ...args) {
      try {
        return callback(...args);
      } catch (e) {
        console.warn(`Alpine Expression Error: ${e.message}
  
  Expression: "${expression}"
  
  `, el);
        throw e;
      }
    }
    var prefixAsString = "x-";
    function prefix(subject = "") {
      return prefixAsString + subject;
    }
    function setPrefix(newPrefix) {
      prefixAsString = newPrefix;
    }
    var directiveHandlers = {};
    function directive(name, callback) {
      directiveHandlers[name] = callback;
    }
    function directives(el, attributes, originalAttributeOverride) {
      let transformedAttributeMap = {};
      let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
      return directives2.map((directive2) => {
        return getDirectiveHandler(el, directive2);
      });
    }
    var isDeferringHandlers = false;
    var directiveHandlerStack = [];
    function deferHandlingDirectives(callback) {
      isDeferringHandlers = true;
      let flushHandlers = () => {
        while (directiveHandlerStack.length)
          directiveHandlerStack.shift()();
      };
      let stopDeferring = () => {
        isDeferringHandlers = false;
        flushHandlers();
      };
      callback(flushHandlers);
      stopDeferring();
    }
    function getDirectiveHandler(el, directive2) {
      let noop = () => {
      };
      let handler3 = directiveHandlers[directive2.type] || noop;
      let cleanups = [];
      let cleanup = (callback) => cleanups.push(callback);
      let [effect3, cleanupEffect] = elementBoundEffect(el);
      cleanups.push(cleanupEffect);
      let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
      };
      let doCleanup = () => cleanups.forEach((i) => i());
      onAttributeRemoved(el, directive2.original, doCleanup);
      let fullHandler = () => {
        if (el._x_ignore || el._x_ignoreSelf)
          return;
        handler3.inline && handler3.inline(el, directive2, utilities);
        handler3 = handler3.bind(handler3, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStack.push(handler3) : handler3();
      };
      fullHandler.runCleanups = doCleanup;
      return fullHandler;
    }
    var startingWith = (subject, replacement) => ({ name, value }) => {
      if (name.startsWith(subject))
        name = name.replace(subject, replacement);
      return { name, value };
    };
    var into = (i) => i;
    function toTransformedAttributes(callback) {
      return ({ name, value }) => {
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
          return transform(carry);
        }, { name, value });
        if (newName !== name)
          callback(newName, name);
        return { name: newName, value: newValue };
      };
    }
    var attributeTransformers = [];
    function mapAttributes(callback) {
      attributeTransformers.push(callback);
    }
    function outNonAlpineAttributes({ name }) {
      return alpineAttributeRegex().test(name);
    }
    var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
    function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
      return ({ name, value }) => {
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
          type: typeMatch ? typeMatch[1] : null,
          value: valueMatch ? valueMatch[1] : null,
          modifiers: modifiers.map((i) => i.replace(".", "")),
          expression: value,
          original
        };
      };
    }
    var DEFAULT = "DEFAULT";
    var directiveOrder = [
      "ignore",
      "ref",
      "data",
      "bind",
      "init",
      "for",
      "model",
      "transition",
      "show",
      "if",
      DEFAULT,
      "element"
    ];
    function byPriority(a, b) {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    }
    function dispatch(el, name, detail = {}) {
      el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true
      }));
    }
    var tickStack = [];
    var isHolding = false;
    function nextTick(callback) {
      tickStack.push(callback);
      queueMicrotask(() => {
        isHolding || setTimeout(() => {
          releaseNextTicks();
        });
      });
    }
    function releaseNextTicks() {
      isHolding = false;
      while (tickStack.length)
        tickStack.shift()();
    }
    function holdNextTicks() {
      isHolding = true;
    }
    function walk(el, callback) {
      if (el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2) => walk(el2, callback));
        return;
      }
      let skip = false;
      callback(el, () => skip = true);
      if (skip)
        return;
      let node = el.firstElementChild;
      while (node) {
        walk(node, callback, false);
        node = node.nextElementSibling;
      }
    }
    function warn(message, ...args) {
      console.warn(`Alpine Warning: ${message}`, ...args);
    }
    function start() {
      if (!document.body)
        warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
      dispatch(document, "alpine:init");
      dispatch(document, "alpine:initializing");
      startObservingMutations();
      onElAdded((el) => initTree(el, walk));
      onElRemoved((el) => nextTick(() => destroyTree(el)));
      onAttributesAdded((el, attrs) => {
        directives(el, attrs).forEach((handle) => handle());
      });
      let outNestedComponents = (el) => !closestRoot(el.parentNode || closestRoot(el));
      Array.from(document.querySelectorAll(rootSelectors())).filter(outNestedComponents).forEach((el) => {
        initTree(el);
      });
      dispatch(document, "alpine:initialized");
    }
    var rootSelectorCallbacks = [];
    function rootSelectors() {
      return rootSelectorCallbacks.map((fn) => fn());
    }
    function addRootSelector(selectorCallback) {
      rootSelectorCallbacks.push(selectorCallback);
    }
    function closestRoot(el) {
      if (rootSelectors().some((selector) => el.matches(selector)))
        return el;
      if (!el.parentElement)
        return;
      return closestRoot(el.parentElement);
    }
    function isRoot(el) {
      return rootSelectors().some((selector) => el.matches(selector));
    }
    function initTree(el, walker = walk) {
      deferHandlingDirectives(() => {
        walker(el, (el2, skip) => {
          directives(el2, el2.attributes).forEach((handle) => handle());
          el2._x_ignore && skip();
        });
      });
    }
    function destroyTree(root) {
      walk(root, (el) => cleanupAttributes(el));
    }
    function plugin(callback) {
      callback(alpine_default);
    }
    var stores = {};
    var isReactive = false;
    function store(name, value) {
      if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
      }
      if (value === void 0) {
        return stores[name];
      }
      stores[name] = value;
      if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
        stores[name].init();
      }
    }
    function getStores() {
      return stores;
    }
    var isCloning = false;
    function skipDuringClone(callback) {
      return (...args) => isCloning || callback(...args);
    }
    function clone(oldEl, newEl) {
      newEl._x_dataStack = oldEl._x_dataStack;
      isCloning = true;
      dontRegisterReactiveSideEffects(() => {
        cloneTree(newEl);
      });
      isCloning = false;
    }
    function cloneTree(el) {
      let hasRunThroughFirstEl = false;
      let shallowWalker = (el2, callback) => {
        walk(el2, (el3, skip) => {
          if (hasRunThroughFirstEl && isRoot(el3))
            return skip();
          hasRunThroughFirstEl = true;
          callback(el3, skip);
        });
      };
      initTree(el, shallowWalker);
    }
    function dontRegisterReactiveSideEffects(callback) {
      let cache = effect;
      overrideEffect((callback2, el) => {
        let storedEffect = cache(callback2);
        release(storedEffect);
        return () => {
        };
      });
      callback();
      overrideEffect(cache);
    }
    var datas = {};
    function data(name, callback) {
      datas[name] = callback;
    }
    function getNamedDataProvider(name) {
      return datas[name];
    }
    var Alpine = {
      get reactive() {
        return reactive;
      },
      get release() {
        return release;
      },
      get effect() {
        return effect;
      },
      get raw() {
        return raw;
      },
      version: "3.1.0",
      disableEffectScheduling,
      setReactivityEngine,
      addRootSelector,
      mapAttributes,
      evaluateLater,
      setEvaluator,
      closestRoot,
      interceptor,
      mutateDom,
      directive,
      evaluate,
      nextTick,
      prefix: setPrefix,
      plugin,
      magic,
      store,
      start,
      clone,
      data
    };
    var alpine_default = Alpine;
    var import_reactivity9 = __toModule2(require_reactivity());
    magic("nextTick", () => nextTick);
    magic("dispatch", (el) => dispatch.bind(dispatch, el));
    magic("watch", (el) => (key, callback) => {
      let evaluate2 = evaluateLater(el, key);
      let firstTime = true;
      let oldValue;
      effect(() => evaluate2((value) => {
        let div = document.createElement("div");
        div.dataset.throwAway = value;
        if (!firstTime)
          callback(value, oldValue);
        oldValue = value;
        firstTime = false;
      }));
    });
    magic("store", getStores);
    magic("refs", (el) => closestRoot(el)._x_refs || {});
    magic("el", (el) => el);
    function setClasses(el, value) {
      if (Array.isArray(value)) {
        return setClassesFromString(el, value.join(" "));
      } else if (typeof value === "object" && value !== null) {
        return setClassesFromObject(el, value);
      }
      return setClassesFromString(el, value);
    }
    function setClassesFromString(el, classString) {
      let split = (classString2) => classString2.split(" ").filter(Boolean);
      let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
      let addClassesAndReturnUndo = (classes) => {
        el.classList.add(...classes);
        return () => {
          el.classList.remove(...classes);
        };
      };
      classString = classString === true ? classString = "" : classString || "";
      return addClassesAndReturnUndo(missingClasses(classString));
    }
    function setClassesFromObject(el, classObject) {
      let split = (classString) => classString.split(" ").filter(Boolean);
      let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
      let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
      let added = [];
      let removed = [];
      forRemove.forEach((i) => {
        if (el.classList.contains(i)) {
          el.classList.remove(i);
          removed.push(i);
        }
      });
      forAdd.forEach((i) => {
        if (!el.classList.contains(i)) {
          el.classList.add(i);
          added.push(i);
        }
      });
      return () => {
        removed.forEach((i) => el.classList.add(i));
        added.forEach((i) => el.classList.remove(i));
      };
    }
    function setStyles(el, value) {
      if (typeof value === "object" && value !== null) {
        return setStylesFromObject(el, value);
      }
      return setStylesFromString(el, value);
    }
    function setStylesFromObject(el, value) {
      let previousStyles = {};
      Object.entries(value).forEach(([key, value2]) => {
        previousStyles[key] = el.style[key];
        el.style[key] = value2;
      });
      setTimeout(() => {
        if (el.style.length === 0) {
          el.removeAttribute("style");
        }
      });
      return () => {
        setStyles(el, previousStyles);
      };
    }
    function setStylesFromString(el, value) {
      let cache = el.getAttribute("style", value);
      el.setAttribute("style", value);
      return () => {
        el.setAttribute("style", cache);
      };
    }
    function once(callback, fallback = () => {
    }) {
      let called = false;
      return function() {
        if (!called) {
          called = true;
          callback.apply(this, arguments);
        } else {
          fallback.apply(this, arguments);
        }
      };
    }
    directive("transition", (el, { value, modifiers, expression }) => {
      if (!expression) {
        registerTransitionsFromHelper(el, modifiers, value);
      } else {
        registerTransitionsFromClassString(el, expression, value);
      }
    });
    function registerTransitionsFromClassString(el, classString, stage) {
      registerTransitionObject(el, setClasses, "");
      let directiveStorageMap = {
        enter: (classes) => {
          el._x_transition.enter.during = classes;
        },
        "enter-start": (classes) => {
          el._x_transition.enter.start = classes;
        },
        "enter-end": (classes) => {
          el._x_transition.enter.end = classes;
        },
        leave: (classes) => {
          el._x_transition.leave.during = classes;
        },
        "leave-start": (classes) => {
          el._x_transition.leave.start = classes;
        },
        "leave-end": (classes) => {
          el._x_transition.leave.end = classes;
        }
      };
      directiveStorageMap[stage](classString);
    }
    function registerTransitionsFromHelper(el, modifiers, stage) {
      registerTransitionObject(el, setStyles);
      let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
      let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
      let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
      if (modifiers.includes("in") && !doesntSpecify) {
        modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
      }
      if (modifiers.includes("out") && !doesntSpecify) {
        modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
      }
      let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
      let wantsOpacity = wantsAll || modifiers.includes("opacity");
      let wantsScale = wantsAll || modifiers.includes("scale");
      let opacityValue = wantsOpacity ? 0 : 1;
      let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
      let delay = modifierValue(modifiers, "delay", 0);
      let origin = modifierValue(modifiers, "origin", "center");
      let property = "opacity, transform";
      let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
      let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
      let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      if (transitioningIn) {
        el._x_transition.enter.during = {
          transformOrigin: origin,
          transitionDelay: delay,
          transitionProperty: property,
          transitionDuration: `${durationIn}s`,
          transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
          opacity: opacityValue,
          transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
          opacity: 1,
          transform: `scale(1)`
        };
      }
      if (transitioningOut) {
        el._x_transition.leave.during = {
          transformOrigin: origin,
          transitionDelay: delay,
          transitionProperty: property,
          transitionDuration: `${durationOut}s`,
          transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
          opacity: 1,
          transform: `scale(1)`
        };
        el._x_transition.leave.end = {
          opacity: opacityValue,
          transform: `scale(${scaleValue})`
        };
      }
    }
    function registerTransitionObject(el, setFunction, defaultValue = {}) {
      if (!el._x_transition)
        el._x_transition = {
          enter: { during: defaultValue, start: defaultValue, end: defaultValue },
          leave: { during: defaultValue, start: defaultValue, end: defaultValue },
          in(before = () => {
          }, after = () => {
          }) {
            transition(el, setFunction, {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end,
              entering: true
            }, before, after);
          },
          out(before = () => {
          }, after = () => {
          }) {
            transition(el, setFunction, {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end,
              entering: false
            }, before, after);
          }
        };
    }
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
      let clickAwayCompatibleShow = () => requestAnimationFrame(show);
      if (value) {
        el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
      }
      el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
        el._x_transition.out(() => {
        }, () => resolve(hide));
        el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
      }) : Promise.resolve(hide);
      queueMicrotask(() => {
        let closest = closestHide(el);
        if (closest) {
          if (!closest._x_hideChildren)
            closest._x_hideChildren = [];
          closest._x_hideChildren.push(el);
        } else {
          queueMicrotask(() => {
            let hideAfterChildren = (el2) => {
              let carry = Promise.all([
                el2._x_hidePromise,
                ...(el2._x_hideChildren || []).map(hideAfterChildren)
              ]).then(([i]) => i());
              delete el2._x_hidePromise;
              delete el2._x_hideChildren;
              return carry;
            };
            hideAfterChildren(el).catch((e) => {
              if (!e.isFromCancelledTransition)
                throw e;
            });
          });
        }
      });
    };
    function closestHide(el) {
      let parent = el.parentNode;
      if (!parent)
        return;
      return parent._x_hidePromise ? parent : closestHide(parent);
    }
    function transition(el, setFunction, { during, start: start2, end, entering } = {}, before = () => {
    }, after = () => {
    }) {
      if (el._x_transitioning)
        el._x_transitioning.cancel();
      if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
      }
      let undoStart, undoDuring, undoEnd;
      performTransition(el, {
        start() {
          undoStart = setFunction(el, start2);
        },
        during() {
          undoDuring = setFunction(el, during);
        },
        before,
        end() {
          undoStart();
          undoEnd = setFunction(el, end);
        },
        after,
        cleanup() {
          undoDuring();
          undoEnd();
        }
      }, entering);
    }
    function performTransition(el, stages, entering) {
      let interrupted, reachedBefore, reachedEnd;
      let finish = once(() => {
        mutateDom(() => {
          interrupted = true;
          if (!reachedBefore)
            stages.before();
          if (!reachedEnd) {
            stages.end();
            releaseNextTicks();
          }
          stages.after();
          if (el.isConnected)
            stages.cleanup();
          delete el._x_transitioning;
        });
      });
      el._x_transitioning = {
        beforeCancels: [],
        beforeCancel(callback) {
          this.beforeCancels.push(callback);
        },
        cancel: once(function() {
          while (this.beforeCancels.length) {
            this.beforeCancels.shift()();
          }
          ;
          finish();
        }),
        finish,
        entering
      };
      mutateDom(() => {
        stages.start();
        stages.during();
      });
      holdNextTicks();
      requestAnimationFrame(() => {
        if (interrupted)
          return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0)
          duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(() => {
          stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(() => {
          if (interrupted)
            return;
          mutateDom(() => {
            stages.end();
          });
          releaseNextTicks();
          setTimeout(el._x_transitioning.finish, duration + delay);
          reachedEnd = true;
        });
      });
    }
    function modifierValue(modifiers, key, fallback) {
      if (modifiers.indexOf(key) === -1)
        return fallback;
      const rawValue = modifiers[modifiers.indexOf(key) + 1];
      if (!rawValue)
        return fallback;
      if (key === "scale") {
        if (isNaN(rawValue))
          return fallback;
      }
      if (key === "duration") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match)
          return match[1];
      }
      if (key === "origin") {
        if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
          return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
        }
      }
      return rawValue;
    }
    var handler = () => {
    };
    handler.inline = (el, { modifiers }, { cleanup }) => {
      modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
      cleanup(() => {
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
      });
    };
    directive("ignore", handler);
    directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
    function bind(el, name, value, modifiers = []) {
      if (!el._x_bindings)
        el._x_bindings = reactive({});
      el._x_bindings[name] = value;
      name = modifiers.includes("camel") ? camelCase(name) : name;
      switch (name) {
        case "value":
          bindInputValue(el, value);
          break;
        case "style":
          bindStyles(el, value);
          break;
        case "class":
          bindClasses(el, value);
          break;
        default:
          bindAttribute(el, name, value);
          break;
      }
    }
    function bindInputValue(el, value) {
      if (el.type === "radio") {
        if (el.attributes.value === void 0) {
          el.value = value;
        }
        if (window.fromModel) {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === "checkbox") {
        if (Number.isInteger(value)) {
          el.value = value;
        } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
          el.value = String(value);
        } else {
          if (Array.isArray(value)) {
            el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === "SELECT") {
        updateSelect(el, value);
      } else {
        if (el.value === value)
          return;
        el.value = value;
      }
    }
    function bindClasses(el, value) {
      if (el._x_undoAddedClasses)
        el._x_undoAddedClasses();
      el._x_undoAddedClasses = setClasses(el, value);
    }
    function bindStyles(el, value) {
      if (el._x_undoAddedStyles)
        el._x_undoAddedStyles();
      el._x_undoAddedStyles = setStyles(el, value);
    }
    function bindAttribute(el, name, value) {
      if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
        el.removeAttribute(name);
      } else {
        if (isBooleanAttr(name))
          value = name;
        setIfChanged(el, name, value);
      }
    }
    function setIfChanged(el, attrName, value) {
      if (el.getAttribute(attrName) != value) {
        el.setAttribute(attrName, value);
      }
    }
    function updateSelect(el, value) {
      const arrayWrappedValue = [].concat(value).map((value2) => {
        return value2 + "";
      });
      Array.from(el.options).forEach((option) => {
        option.selected = arrayWrappedValue.includes(option.value);
      });
    }
    function camelCase(subject) {
      return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
    }
    function checkedAttrLooseCompare(valueA, valueB) {
      return valueA == valueB;
    }
    function isBooleanAttr(attrName) {
      const booleanAttributes = [
        "disabled",
        "checked",
        "required",
        "readonly",
        "hidden",
        "open",
        "selected",
        "autofocus",
        "itemscope",
        "multiple",
        "novalidate",
        "allowfullscreen",
        "allowpaymentrequest",
        "formnovalidate",
        "autoplay",
        "controls",
        "loop",
        "muted",
        "playsinline",
        "default",
        "ismap",
        "reversed",
        "async",
        "defer",
        "nomodule"
      ];
      return booleanAttributes.includes(attrName);
    }
    function attributeShouldntBePreservedIfFalsy(name) {
      return !["aria-pressed", "aria-checked"].includes(name);
    }
    function on(el, event, modifiers, callback) {
      let listenerTarget = el;
      let handler3 = (e) => callback(e);
      let options = {};
      let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
      if (modifiers.includes("camel"))
        event = camelCase2(event);
      if (modifiers.includes("passive"))
        options.passive = true;
      if (modifiers.includes("window"))
        listenerTarget = window;
      if (modifiers.includes("document"))
        listenerTarget = document;
      if (modifiers.includes("prevent"))
        handler3 = wrapHandler(handler3, (next, e) => {
          e.preventDefault();
          next(e);
        });
      if (modifiers.includes("stop"))
        handler3 = wrapHandler(handler3, (next, e) => {
          e.stopPropagation();
          next(e);
        });
      if (modifiers.includes("self"))
        handler3 = wrapHandler(handler3, (next, e) => {
          e.target === el && next(e);
        });
      if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler3 = wrapHandler(handler3, (next, e) => {
          if (el.contains(e.target))
            return;
          if (el.offsetWidth < 1 && el.offsetHeight < 1)
            return;
          next(e);
        });
      }
      handler3 = wrapHandler(handler3, (next, e) => {
        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }
        next(e);
      });
      if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler3 = debounce(handler3, wait, this);
      }
      if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler3 = throttle(handler3, wait, this);
      }
      if (modifiers.includes("once")) {
        handler3 = wrapHandler(handler3, (next, e) => {
          next(e);
          listenerTarget.removeEventListener(event, handler3, options);
        });
      }
      listenerTarget.addEventListener(event, handler3, options);
      return () => {
        listenerTarget.removeEventListener(event, handler3, options);
      };
    }
    function camelCase2(subject) {
      return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
    }
    function debounce(func, wait) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    function throttle(func, limit) {
      let inThrottle;
      return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }
    function isNumeric(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function kebabCase(subject) {
      return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    }
    function isKeyEvent(event) {
      return ["keydown", "keyup"].includes(event);
    }
    function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
      let keyModifiers = modifiers.filter((i) => {
        return !["window", "document", "prevent", "stop", "once"].includes(i);
      });
      if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
      }
      if (keyModifiers.length === 0)
        return false;
      if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key))
        return false;
      const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
      const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
      keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
      if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
          if (modifier === "cmd" || modifier === "super")
            modifier = "meta";
          return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
          if (keyModifiers[0] === keyToModifier(e.key))
            return false;
        }
      }
      return true;
    }
    function keyToModifier(key) {
      switch (key) {
        case "/":
          return "slash";
        case " ":
        case "Spacebar":
          return "space";
        default:
          return key && kebabCase(key);
      }
    }
    directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup }) => {
      let evaluate2 = evaluateLater(el, expression);
      let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
      let evaluateAssignment = evaluateLater(el, assignmentExpression);
      var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
      let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
      let removeListener = on(el, event, modifiers, (e) => {
        evaluateAssignment(() => {
        }, { scope: {
          $event: e,
          rightSideOfExpression: assigmentFunction
        } });
      });
      cleanup(() => removeListener());
      el._x_forceModelUpdate = () => {
        evaluate2((value) => {
          if (value === void 0 && expression.match(/\./))
            value = "";
          window.fromModel = true;
          mutateDom(() => bind(el, "value", value));
          delete window.fromModel;
        });
      };
      effect3(() => {
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
          return;
        el._x_forceModelUpdate();
      });
    });
    function generateAssignmentFunction(el, modifiers, expression) {
      if (el.type === "radio") {
        mutateDom(() => {
          if (!el.hasAttribute("name"))
            el.setAttribute("name", expression);
        });
      }
      return (event, currentValue) => {
        return mutateDom(() => {
          if (event instanceof CustomEvent && event.detail !== void 0) {
            return event.detail;
          } else if (el.type === "checkbox") {
            if (Array.isArray(currentValue)) {
              let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
              return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
            } else {
              return event.target.checked;
            }
          } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
            return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
              let rawValue = option.value || option.text;
              return safeParseNumber(rawValue);
            }) : Array.from(event.target.selectedOptions).map((option) => {
              return option.value || option.text;
            });
          } else {
            let rawValue = event.target.value;
            return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
          }
        });
      };
    }
    function safeParseNumber(rawValue) {
      let number = rawValue ? parseFloat(rawValue) : null;
      return isNumeric2(number) ? number : rawValue;
    }
    function checkedAttrLooseCompare2(valueA, valueB) {
      return valueA == valueB;
    }
    function isNumeric2(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
    addRootSelector(() => `[${prefix("init")}]`);
    directive("init", skipDuringClone((el, { expression }) => evaluate(el, expression, {}, false)));
    directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
      let evaluate2 = evaluateLater2(expression);
      effect3(() => {
        evaluate2((value) => {
          mutateDom(() => {
            el.textContent = value;
          });
        });
      });
    });
    directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
      let evaluate2 = evaluateLater2(expression);
      effect3(() => {
        evaluate2((value) => {
          mutateDom(() => {
            el.innerHTML = value;
          });
        });
      });
    });
    mapAttributes(startingWith(":", into(prefix("bind:"))));
    directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
      if (!value)
        return applyBindingsObject(el, expression, original, effect3);
      if (value === "key")
        return storeKeyForXFor(el, expression);
      let evaluate2 = evaluateLater(el, expression);
      effect3(() => evaluate2((result) => {
        if (result === void 0 && expression.match(/\./))
          result = "";
        mutateDom(() => bind(el, value, result, modifiers));
      }));
    });
    function applyBindingsObject(el, expression, original, effect3) {
      let getBindings = evaluateLater(el, expression);
      let cleanupRunners = [];
      effect3(() => {
        while (cleanupRunners.length)
          cleanupRunners.pop()();
        getBindings((bindings) => {
          let attributes = Object.entries(bindings).map(([name, value]) => ({ name, value }));
          directives(el, attributes, original).map((handle) => {
            cleanupRunners.push(handle.runCleanups);
            handle();
          });
        });
      });
    }
    function storeKeyForXFor(el, expression) {
      el._x_keyExpression = expression;
    }
    addRootSelector(() => `[${prefix("data")}]`);
    directive("data", skipDuringClone((el, { expression }, { cleanup }) => {
      expression = expression === "" ? "{}" : expression;
      let dataProvider = getNamedDataProvider(expression);
      let data2 = {};
      if (dataProvider) {
        let magics2 = injectMagics({}, el);
        data2 = dataProvider.bind(magics2)();
      } else {
        data2 = evaluate(el, expression);
      }
      injectMagics(data2, el);
      let reactiveData = reactive(data2);
      initInterceptors(reactiveData);
      let undo = addScopeToNode(el, reactiveData);
      if (reactiveData["init"])
        reactiveData["init"]();
      cleanup(() => {
        undo();
        reactiveData["destroy"] && reactiveData["destroy"]();
      });
    }));
    directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
      let evaluate2 = evaluateLater(el, expression);
      let hide = () => mutateDom(() => {
        el.style.display = "none";
        el._x_isShown = false;
      });
      let show = () => mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
        el._x_isShown = true;
      });
      let clickAwayCompatibleShow = () => setTimeout(show);
      let toggle = once((value) => value ? show() : hide(), (value) => {
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
          el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        } else {
          value ? clickAwayCompatibleShow() : hide();
        }
      });
      let oldValue;
      let firstTime = true;
      effect3(() => evaluate2((value) => {
        if (!firstTime && value === oldValue)
          return;
        if (modifiers.includes("immediate"))
          value ? clickAwayCompatibleShow() : hide();
        toggle(value);
        oldValue = value;
        firstTime = false;
      }));
    });
    directive("for", (el, { expression }, { effect: effect3, cleanup }) => {
      let iteratorNames = parseForExpression(expression);
      let evaluateItems = evaluateLater(el, iteratorNames.items);
      let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
      el._x_prevKeys = [];
      el._x_lookup = {};
      effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
      cleanup(() => {
        Object.values(el._x_lookup).forEach((el2) => el2.remove());
        delete el._x_prevKeys;
        delete el._x_lookup;
      });
    });
    function loop(el, iteratorNames, evaluateItems, evaluateKey) {
      let isObject = (i) => typeof i === "object" && !Array.isArray(i);
      let templateEl = el;
      evaluateItems((items) => {
        if (isNumeric3(items) && items >= 0) {
          items = Array.from(Array(items).keys(), (i) => i + 1);
        }
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject(items)) {
          items = Object.entries(items).map(([key, value]) => {
            let scope = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope } });
            scopes.push(scope);
          });
        } else {
          for (let i = 0; i < items.length; i++) {
            let scope = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value) => keys.push(value), { scope: { index: i, ...scope } });
            scopes.push(scope);
          }
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for (let i = 0; i < prevKeys.length; i++) {
          let key = prevKeys[i];
          if (keys.indexOf(key) === -1)
            removes.push(key);
        }
        prevKeys = prevKeys.filter((key) => !removes.includes(key));
        let lastKey = "template";
        for (let i = 0; i < keys.length; i++) {
          let key = keys[i];
          let prevIndex = prevKeys.indexOf(key);
          if (prevIndex === -1) {
            prevKeys.splice(i, 0, key);
            adds.push([lastKey, i]);
          } else if (prevIndex !== i) {
            let keyInSpot = prevKeys.splice(i, 1)[0];
            let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
            prevKeys.splice(i, 0, keyForSpot);
            prevKeys.splice(prevIndex, 0, keyInSpot);
            moves.push([keyInSpot, keyForSpot]);
          } else {
            sames.push(key);
          }
          lastKey = key;
        }
        for (let i = 0; i < removes.length; i++) {
          let key = removes[i];
          lookup[key].remove();
          lookup[key] = null;
          delete lookup[key];
        }
        for (let i = 0; i < moves.length; i++) {
          let [keyInSpot, keyForSpot] = moves[i];
          let elInSpot = lookup[keyInSpot];
          let elForSpot = lookup[keyForSpot];
          let marker = document.createElement("div");
          mutateDom(() => {
            elForSpot.after(marker);
            elInSpot.after(elForSpot);
            marker.before(elInSpot);
            marker.remove();
          });
          refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
        }
        for (let i = 0; i < adds.length; i++) {
          let [lastKey2, index] = adds[i];
          let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
          let scope = scopes[index];
          let key = keys[index];
          let clone2 = document.importNode(templateEl.content, true).firstElementChild;
          addScopeToNode(clone2, reactive(scope), templateEl);
          initTree(clone2);
          mutateDom(() => {
            lastEl.after(clone2);
          });
          lookup[key] = clone2;
        }
        for (let i = 0; i < sames.length; i++) {
          refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
        }
        templateEl._x_prevKeys = keys;
      });
    }
    function parseForExpression(expression) {
      let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
      let stripParensRE = /^\s*\(|\)\s*$/g;
      let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
      let inMatch = expression.match(forAliasRE);
      if (!inMatch)
        return;
      let res = {};
      res.items = inMatch[2].trim();
      let item = inMatch[1].replace(stripParensRE, "").trim();
      let iteratorMatch = item.match(forIteratorRE);
      if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) {
          res.collection = iteratorMatch[2].trim();
        }
      } else {
        res.item = item;
      }
      return res;
    }
    function getIterationScopeVariables(iteratorNames, item, index, items) {
      let scopeVariables = {};
      if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
        names.forEach((name, i) => {
          scopeVariables[name] = item[i];
        });
      } else {
        scopeVariables[iteratorNames.item] = item;
      }
      if (iteratorNames.index)
        scopeVariables[iteratorNames.index] = index;
      if (iteratorNames.collection)
        scopeVariables[iteratorNames.collection] = items;
      return scopeVariables;
    }
    function isNumeric3(subject) {
      return !Array.isArray(subject) && !isNaN(subject);
    }
    function handler2() {
    }
    handler2.inline = (el, { expression }, { cleanup }) => {
      let root = closestRoot(el);
      if (!root._x_refs)
        root._x_refs = {};
      root._x_refs[expression] = el;
      cleanup(() => delete root._x_refs[expression]);
    };
    directive("ref", handler2);
    directive("if", (el, { expression }, { effect: effect3, cleanup }) => {
      let evaluate2 = evaluateLater(el, expression);
      let show = () => {
        if (el._x_currentIfEl)
          return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        initTree(clone2);
        mutateDom(() => el.after(clone2));
        el._x_currentIfEl = clone2;
        el._x_undoIf = () => {
          clone2.remove();
          delete el._x_currentIfEl;
        };
        return clone2;
      };
      let hide = () => el._x_undoIf?.() || delete el._x_undoIf;
      effect3(() => evaluate2((value) => {
        value ? show() : hide();
      }));
      cleanup(() => el._x_undoIf && el._x_undoIf());
    });
    mapAttributes(startingWith("@", into(prefix("on:"))));
    directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup }) => {
      let evaluate2 = expression ? evaluateLater(el, expression) : () => {
      };
      let removeListener = on(el, value, modifiers, (e) => {
        evaluate2(() => {
        }, { scope: { $event: e }, params: [e] });
      });
      cleanup(() => removeListener());
    }));
    alpine_default.setEvaluator(normalEvaluator);
    alpine_default.setReactivityEngine({ reactive: import_reactivity9.reactive, effect: import_reactivity9.effect, release: import_reactivity9.stop, raw: import_reactivity9.toRaw });
    var src_default = alpine_default;
    var module_default = src_default;
  
    // src/_bundle/main.js
    var import_htmx = __toModule(require_htmx_min());
    var import_lazysizes = __toModule(require_lazysizes());
    window.Alpine = module_default;
    window.addEventListener("DOMContentLoaded", () => {
      module_default.start();
    });
    document.body.addEventListener("htmx:afterSwap", () => {
      module_default.start();
    });
    window.addEventListener("alpine:initializing", () => {
      module_default.store("nav", {
        isOpen: false,
        close() {
          return this.isOpen = false;
        },
        open() {
          return this.isOpen = true;
        },
        toggle() {
          return this.isOpen = !this.isOpen;
        }
      });
    });
  })();
  