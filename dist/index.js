(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.shBiReportGraphs = {}));
}(this, (function (exports) { 'use strict';

  var xhtml$1 = "http://www.w3.org/1999/xhtml";

  var namespaces$1 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml$1,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace$1(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces$1.hasOwnProperty(prefix) ? {space: namespaces$1[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit$1(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml$1 && document.documentElement.namespaceURI === xhtml$1
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }

  function creatorFixed$1(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator$1(name) {
    var fullname = namespace$1(name);
    return (fullname.local
        ? creatorFixed$1
        : creatorInherit$1)(fullname);
  }

  function none$3() {}

  function selector$1(selector) {
    return selector == null ? none$3 : function() {
      return this.querySelector(selector);
    };
  }

  function selection_select$1(select) {
    if (typeof select !== "function") select = selector$1(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection$2(subgroups, this._parents);
  }

  function array$2(x) {
    return typeof x === "object" && "length" in x
      ? x // Array, TypedArray, NodeList, array-like
      : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function empty$1() {
    return [];
  }

  function selectorAll$1(selector) {
    return selector == null ? empty$1 : function() {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function() {
      var group = select.apply(this, arguments);
      return group == null ? [] : array$2(group);
    };
  }

  function selection_selectAll$1(select) {
    if (typeof select === "function") select = arrayAll(select);
    else select = selectorAll$1(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection$2(subgroups, parents);
  }

  function matcher$1(selector) {
    return function() {
      return this.matches(selector);
    };
  }

  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;

  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }

  function childFirst() {
    return this.firstElementChild;
  }

  function selection_selectChild(match) {
    return this.select(match == null ? childFirst
        : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;

  function children() {
    return this.children;
  }

  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }

  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children
        : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter$1(match) {
    if (typeof match !== "function") match = matcher$1(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection$2(subgroups, this._parents);
  }

  function sparse$1(update) {
    return new Array(update.length);
  }

  function selection_enter$1() {
    return new Selection$2(this._enter || this._groups.map(sparse$1), this._parents);
  }

  function EnterNode$1(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode$1.prototype = {
    constructor: EnterNode$1,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };

  function constant$4(x) {
    return function() {
      return x;
    };
  }

  function bindIndex$1(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode$1(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey$1(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map,
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode$1(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
        exit[i] = node;
      }
    }
  }

  function datum(node) {
    return node.__data__;
  }

  function selection_data$1(value, key) {
    if (!arguments.length) return Array.from(this, datum);

    var bind = key ? bindKey$1 : bindIndex$1,
        parents = this._parents,
        groups = this._groups;

    if (typeof value !== "function") value = constant$4(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = array$2(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);

      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }

    update = new Selection$2(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  function selection_exit$1() {
    return new Selection$2(this._exit || this._groups.map(sparse$1), this._parents);
  }

  function selection_join$1(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge$1(selection) {
    if (!(selection instanceof Selection$2)) throw new Error("invalid merge");

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection$2(merges, this._parents);
  }

  function selection_order$1() {

    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort$1(compare) {
    if (!compare) compare = ascending$2;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }

    return new Selection$2(sortgroups, this._parents).order();
  }

  function ascending$2(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call$1() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes$1() {
    return Array.from(this);
  }

  function selection_node$1() {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size$1() {
    let size = 0;
    for (const node of this) ++size; // eslint-disable-line no-unused-vars
    return size;
  }

  function selection_empty$1() {
    return !this.node();
  }

  function selection_each$1(callback) {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove$2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$2(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS$2(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction$2(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS$2(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr$1(name, value) {
    var fullname = namespace$1(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }

    return this.each((value == null
        ? (fullname.local ? attrRemoveNS$2 : attrRemove$2) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS$2 : attrFunction$2)
        : (fullname.local ? attrConstantNS$2 : attrConstant$2)))(fullname, value));
  }

  function defaultView$1(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  }

  function styleRemove$2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$2(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction$2(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style$1(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove$2 : typeof value === "function"
              ? styleFunction$2
              : styleConstant$2)(name, value, priority == null ? "" : priority))
        : styleValue$1(this.node(), name);
  }

  function styleValue$1(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView$1(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove$1(name) {
    return function() {
      delete this[name];
    };
  }

  function propertyConstant$1(name, value) {
    return function() {
      this[name] = value;
    };
  }

  function propertyFunction$1(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }

  function selection_property$1(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove$1 : typeof value === "function"
            ? propertyFunction$1
            : propertyConstant$1)(name, value))
        : this.node()[name];
  }

  function classArray$1(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList$1(node) {
    return node.classList || new ClassList$1(node);
  }

  function ClassList$1(node) {
    this._node = node;
    this._names = classArray$1(node.getAttribute("class") || "");
  }

  ClassList$1.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd$1(node, names) {
    var list = classList$1(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }

  function classedRemove$1(node, names) {
    var list = classList$1(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }

  function classedTrue$1(names) {
    return function() {
      classedAdd$1(this, names);
    };
  }

  function classedFalse$1(names) {
    return function() {
      classedRemove$1(this, names);
    };
  }

  function classedFunction$1(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd$1 : classedRemove$1)(this, names);
    };
  }

  function selection_classed$1(name, value) {
    var names = classArray$1(name + "");

    if (arguments.length < 2) {
      var list = classList$1(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }

    return this.each((typeof value === "function"
        ? classedFunction$1 : value
        ? classedTrue$1
        : classedFalse$1)(names, value));
  }

  function textRemove$1() {
    this.textContent = "";
  }

  function textConstant$2(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction$2(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text$1(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove$1 : (typeof value === "function"
            ? textFunction$2
            : textConstant$2)(value))
        : this.node().textContent;
  }

  function htmlRemove$1() {
    this.innerHTML = "";
  }

  function htmlConstant$1(value) {
    return function() {
      this.innerHTML = value;
    };
  }

  function htmlFunction$1(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html$1(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove$1 : (typeof value === "function"
            ? htmlFunction$1
            : htmlConstant$1)(value))
        : this.node().innerHTML;
  }

  function raise$1() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise$1() {
    return this.each(raise$1);
  }

  function lower$1() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower$1() {
    return this.each(lower$1);
  }

  function selection_append$1(name) {
    var create = typeof name === "function" ? name : creator$1(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull$1() {
    return null;
  }

  function selection_insert$1(name, before) {
    var create = typeof name === "function" ? name : creator$1(name),
        select = before == null ? constantNull$1 : typeof before === "function" ? before : selector$1(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove$1() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove$1() {
    return this.each(remove$1);
  }

  function selection_cloneShallow$1() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep$1() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone$1(deep) {
    return this.select(deep ? selection_cloneDeep$1 : selection_cloneShallow$1);
  }

  function selection_datum$1(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  }

  function contextListener$1(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }

  function parseTypenames$2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }

  function onRemove$1(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }

  function onAdd$1(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener$1(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }

  function selection_on$1(typename, value, options) {
    var typenames = parseTypenames$2(typename + ""), i, n = typenames.length, t;

    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd$1 : onRemove$1;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
    return this;
  }

  function dispatchEvent$1(node, type, params) {
    var window = defaultView$1(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant$1(type, params) {
    return function() {
      return dispatchEvent$1(this, type, params);
    };
  }

  function dispatchFunction$1(type, params) {
    return function() {
      return dispatchEvent$1(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch$1(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction$1
        : dispatchConstant$1)(type, params));
  }

  function* selection_iterator() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) yield node;
      }
    }
  }

  var root$1 = [null];

  function Selection$2(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection$1() {
    return new Selection$2([[document.documentElement]], root$1);
  }

  function selection_selection() {
    return this;
  }

  Selection$2.prototype = selection$1.prototype = {
    constructor: Selection$2,
    select: selection_select$1,
    selectAll: selection_selectAll$1,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter$1,
    data: selection_data$1,
    enter: selection_enter$1,
    exit: selection_exit$1,
    join: selection_join$1,
    merge: selection_merge$1,
    selection: selection_selection,
    order: selection_order$1,
    sort: selection_sort$1,
    call: selection_call$1,
    nodes: selection_nodes$1,
    node: selection_node$1,
    size: selection_size$1,
    empty: selection_empty$1,
    each: selection_each$1,
    attr: selection_attr$1,
    style: selection_style$1,
    property: selection_property$1,
    classed: selection_classed$1,
    text: selection_text$1,
    html: selection_html$1,
    raise: selection_raise$1,
    lower: selection_lower$1,
    append: selection_append$1,
    insert: selection_insert$1,
    remove: selection_remove$1,
    clone: selection_clone$1,
    datum: selection_datum$1,
    on: selection_on$1,
    dispatch: selection_dispatch$1,
    [Symbol.iterator]: selection_iterator
  };

  function select$1(selector) {
    return typeof selector === "string"
        ? new Selection$2([[document.querySelector(selector)]], [document.documentElement])
        : new Selection$2([[selector]], root$1);
  }

  var noop = {value: function() {}};

  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }

  function Dispatch(_) {
    this._ = _;
  }

  function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {type: t, name: name};
    });
  }

  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._,
          T = parseTypenames$1(typename + "", _),
          t,
          i = -1,
          n = T.length;

      // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
        return;
      }

      // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
        else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
      }

      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _) copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
    }
  };

  function get$1(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }

  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null) type.push({name: name, value: callback});
    return type;
  }

  var frame = 0, // is an animation frame pending?
      timeout$1 = 0, // is a timeout pending?
      interval = 0, // are any timers active?
      pokeDelay = 1000, // how frequently we check for clock skew
      taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = typeof performance === "object" && performance.now ? performance : Date,
      setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };

  function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$1 = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout$1) timeout$1 = clearTimeout(timeout$1);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];

  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;

  function schedule(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index, // For context during callback.
      group: group, // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }

  function init(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }

  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }

  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }

  function create(node, id, self) {
    var schedules = node.__transition,
        tween;

    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);

    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time);

      // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }

    function start(elapsed) {
      var i, j, n, o;

      // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();

      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue;

        // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout(start);

        // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }

        // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }

      // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });

      // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED;

      // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }

    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;

      while (++i < n) {
        tween[i].call(node, t);
      }

      // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }

    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) return; // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }

  function interrupt(node, name) {
    var schedules = node.__transition,
        schedule,
        active,
        empty = true,
        i;

    if (!schedules) return;

    name = name == null ? null : name + "";

    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }

    if (empty) delete node.__transition;
  }

  function selection_interrupt(name) {
    return this.each(function() {
      interrupt(this, name);
    });
  }

  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }

  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) prototype[key] = definition[key];
    return prototype;
  }

  function Color() {}

  var darker = 0.7;
  var brighter = 1 / darker;

  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

  var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
  };

  define(Color, color, {
    copy: function(channels) {
      return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
      return this.rgb().displayable();
    },
    hex: color_formatHex, // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });

  function color_formatHex() {
    return this.rgb().formatHex();
  }

  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }

  function color_formatRgb() {
    return this.rgb().formatRgb();
  }

  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
        : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
        : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
        : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
        : null) // invalid hex
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
        : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
        : null;
  }

  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }

  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }

  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }

  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }

  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }

  define(Rgb, rgb, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
      return this;
    },
    displayable: function() {
      return (-0.5 <= this.r && this.r < 255.5)
          && (-0.5 <= this.g && this.g < 255.5)
          && (-0.5 <= this.b && this.b < 255.5)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));

  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }

  function rgb_formatRgb() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }

  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }

  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }

  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;
      else if (g === max) h = (b - r) / s + 2;
      else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }

  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }

  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }

  define(Hsl, hsl, extend(Color, {
    brighter: function(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s))
          && (0 <= this.l && this.l <= 1)
          && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl: function() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(")
          + (this.h || 0) + ", "
          + (this.s || 0) * 100 + "%, "
          + (this.l || 0) * 100 + "%"
          + (a === 1 ? ")" : ", " + a + ")");
    }
  }));

  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60
        : h < 180 ? m2
        : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
        : m1) * 255;
  }

  function constant$3(x) {
    return function() {
      return x;
    };
  }

  function linear$1(a, d) {
    return function(t) {
      return a + t * d;
    };
  }

  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }

  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant$3(isNaN(a) ? b : a);
    };
  }

  function nogamma(a, b) {
    var d = b - a;
    return d ? linear$1(a, d) : constant$3(isNaN(a) ? b : a);
  }

  var interpolateRgb = (function rgbGamma(y) {
    var color = gamma(y);

    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }

    rgb$1.gamma = rgbGamma;

    return rgb$1;
  })(1);

  function numberArray(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0,
        c = b.slice(),
        i;
    return function(t) {
      for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }

  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  function genericArray(a, b) {
    var nb = b ? b.length : 0,
        na = a ? Math.min(nb, a.length) : 0,
        x = new Array(na),
        c = new Array(nb),
        i;

    for (i = 0; i < na; ++i) x[i] = interpolate$1(a[i], b[i]);
    for (; i < nb; ++i) c[i] = b[i];

    return function(t) {
      for (i = 0; i < na; ++i) c[i] = x[i](t);
      return c;
    };
  }

  function date(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  function interpolateNumber(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  function object(a, b) {
    var i = {},
        c = {},
        k;

    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};

    for (k in b) {
      if (k in a) {
        i[k] = interpolate$1(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }

    return function(t) {
      for (k in i) c[k] = i[k](t);
      return c;
    };
  }

  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");

  function zero(b) {
    return function() {
      return b;
    };
  }

  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }

  function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
        am, // current match in a
        bm, // current match in b
        bs, // string preceding current number in b, if any
        i = -1, // index in s
        s = [], // string constants and placeholders
        q = []; // number interpolators

    // Coerce inputs to strings.
    a = a + "", b = b + "";

    // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a))
        && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) { // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else { // interpolate non-matching numbers
        s[++i] = null;
        q.push({i: i, x: interpolateNumber(am, bm)});
      }
      bi = reB.lastIndex;
    }

    // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }

    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? (q[0]
        ? one(q[0].x)
        : zero(b))
        : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
            return s.join("");
          });
  }

  function interpolate$1(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant$3(b)
        : (t === "number" ? interpolateNumber
        : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
        : b instanceof color ? interpolateRgb
        : b instanceof Date ? date
        : isNumberArray(b) ? numberArray
        : Array.isArray(b) ? genericArray
        : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
        : interpolateNumber)(a, b);
  }

  function interpolateRound(a, b) {
    return a = +a, b = +b, function(t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  var degrees = 180 / Math.PI;

  var identity$2 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };

  function decompose(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var cssNode,
      cssRoot,
      cssView,
      svgNode;

  function parseCss(value) {
    if (value === "none") return identity$2;
    if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
    cssNode.style.transform = value;
    value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
    cssRoot.removeChild(cssNode);
    value = value.slice(7, -1).split(",");
    return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
  }

  function parseSvg(value) {
    if (value == null) return identity$2;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  function interpolateTransform(parse, pxComma, pxParen, degParen) {

    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }

    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }

    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
        q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }

    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }

    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }

    return function(a, b) {
      var s = [], // string constants and placeholders
          q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }

  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  function tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }

      schedule.tween = tween1;
    };
  }

  function tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
      var schedule = set(this, id),
          tween = schedule.tween;

      // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n) tween1.push(t);
      }

      schedule.tween = tween1;
    };
  }

  function transition_tween(name, value) {
    var id = this._id;

    name += "";

    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }

    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }

  function tweenValue(transition, name, value) {
    var id = transition._id;

    transition.each(function() {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });

    return function(node) {
      return get(node, id).value[name];
    };
  }

  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber
        : b instanceof color ? interpolateRgb
        : (c = color(b)) ? (b = c, interpolateRgb)
        : interpolateString)(a, b);
  }

  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant$1(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrConstantNS$1(fullname, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function attrFunction$1(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function attrFunctionNS$1(fullname, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function transition_attr(name, value) {
    var fullname = namespace$1(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function"
        ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
        : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
        : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
  }

  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }

  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }

  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = namespace$1(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  function delayFunction(id, value) {
    return function() {
      init(this, id).delay = +value.apply(this, arguments);
    };
  }

  function delayConstant(id, value) {
    return value = +value, function() {
      init(this, id).delay = value;
    };
  }

  function transition_delay(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? delayFunction
            : delayConstant)(id, value))
        : get(this.node(), id).delay;
  }

  function durationFunction(id, value) {
    return function() {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }

  function durationConstant(id, value) {
    return value = +value, function() {
      set(this, id).duration = value;
    };
  }

  function transition_duration(value) {
    var id = this._id;

    return arguments.length
        ? this.each((typeof value === "function"
            ? durationFunction
            : durationConstant)(id, value))
        : get(this.node(), id).duration;
  }

  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
      set(this, id).ease = value;
    };
  }

  function transition_ease(value) {
    var id = this._id;

    return arguments.length
        ? this.each(easeConstant(id, value))
        : get(this.node(), id).ease;
  }

  function easeVarying(id, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error;
      set(this, id).ease = v;
    };
  }

  function transition_easeVarying(value) {
    if (typeof value !== "function") throw new Error;
    return this.each(easeVarying(this._id, value));
  }

  function transition_filter(match) {
    if (typeof match !== "function") match = matcher$1(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  function transition_merge(transition) {
    if (transition._id !== this._id) throw new Error;

    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Transition(merges, this._parents, this._name, this._id);
  }

  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }

  function onFunction(id, name, listener) {
    var on0, on1, sit = start(name) ? init : set;
    return function() {
      var schedule = sit(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

      schedule.on = on1;
    };
  }

  function transition_on(name, listener) {
    var id = this._id;

    return arguments.length < 2
        ? get(this.node(), id).on.on(name)
        : this.each(onFunction(id, name, listener));
  }

  function removeFunction(id) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition) if (+i !== id) return;
      if (parent) parent.removeChild(this);
    };
  }

  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }

  function transition_select(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selector$1(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }

    return new Transition(subgroups, this._parents, name, id);
  }

  function transition_selectAll(select) {
    var name = this._name,
        id = this._id;

    if (typeof select !== "function") select = selectorAll$1(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }

    return new Transition(subgroups, parents, name, id);
  }

  var Selection$1 = selection$1.prototype.constructor;

  function transition_selection() {
    return new Selection$1(this._groups, this._parents);
  }

  function styleNull(name, interpolate) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue$1(this, name),
          string1 = (this.style.removeProperty(name), styleValue$1(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }

  function styleRemove$1(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant$1(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function() {
      var string0 = styleValue$1(this, name);
      return string0 === string1 ? null
          : string0 === string00 ? interpolate0
          : interpolate0 = interpolate(string00 = string0, value1);
    };
  }

  function styleFunction$1(name, interpolate, value) {
    var string00,
        string10,
        interpolate0;
    return function() {
      var string0 = styleValue$1(this, name),
          value1 = value(this),
          string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue$1(this, name));
      return string0 === string1 ? null
          : string0 === string00 && string1 === string10 ? interpolate0
          : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }

  function styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
      var schedule = set(this, id),
          on = schedule.on,
          listener = schedule.value[key] == null ? remove || (remove = styleRemove$1(name)) : undefined;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

      schedule.on = on1;
    };
  }

  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this
        .styleTween(name, styleNull(name, i))
        .on("end.style." + name, styleRemove$1(name))
      : typeof value === "function" ? this
        .styleTween(name, styleFunction$1(name, i, tweenValue(this, "style." + name, value)))
        .each(styleMaybeRemove(this._id, name))
      : this
        .styleTween(name, styleConstant$1(name, i, value), priority)
        .on("end.style." + name, null);
  }

  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }

  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }

  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction$1(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }

  function transition_text(value) {
    return this.tween("text", typeof value === "function"
        ? textFunction$1(tweenValue(this, "text", value))
        : textConstant$1(value == null ? "" : value + ""));
  }

  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }

  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }

  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, textTween(value));
  }

  function transition_transition() {
    var name = this._name,
        id0 = this._id,
        id1 = newId();

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit.time + inherit.delay + inherit.duration,
            delay: 0,
            duration: inherit.duration,
            ease: inherit.ease
          });
        }
      }
    }

    return new Transition(groups, this._parents, name, id1);
  }

  function transition_end() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = {value: reject},
          end = {value: function() { if (--size === 0) resolve(); }};

      that.each(function() {
        var schedule = set(this, id),
            on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }

        schedule.on = on1;
      });

      // The selection was empty, resolve end immediately
      if (size === 0) resolve();
    });
  }

  var id = 0;

  function Transition(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
  }

  function newId() {
    return ++id;
  }

  var selection_prototype = selection$1.prototype;

  Transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  var defaultTiming = {
    time: null, // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };

  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id} not found`);
      }
    }
    return timing;
  }

  function selection_transition(name) {
    var id,
        timing;

    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }

    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }

    return new Transition(groups, this._parents, name, id);
  }

  selection$1.prototype.interrupt = selection_interrupt;
  selection$1.prototype.transition = selection_transition;

  /* prettier-ignore */
  const colorList = ['F05A24', 'EF4E4A', 'EE3F65', 'EC297B', 'E3236C', 'D91C5C', 'BC1E60', '9E1F63', '992271', '952480', '90278E', '7A2A8F', '652D90', '502980', '3B2671', '262261', '27286D', '292D78', '2A3384', '2B388F', '2A4F9F', '2965AF', '277CC0', '2692D0', '25A9E0'];
  /* prettier-ignore */
  const colorLookup = [
  	[0, 4, 10, 18, 24],
  	[0, 3, 6, 9, 11, 13, 15, 18, 20, 24],
  	[0, 3, 4, 6, 7, 9, 11, 13, 14, 15, 17, 18, 20, 22, 24],
  	[0, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24],
  	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  ];
  // get Sean's color scheme
  function getColor(idx, total) {
  	let colorIdx = null;
  	let itemIdx = null;

  	for (const idxList of colorLookup) {
  		if (idxList.length >= total) {
  			colorIdx = idxList;
  			itemIdx = idx;
  		}
  	}

  	if (colorIdx === null) {
  		colorIdx = colorLookup[colorLookup.length - 1];
  		itemIdx = idx % colorIdx.length;
  	}

  	return '#' + colorList[colorIdx[itemIdx]];
  }

  function numberFormat(number, precision = null) {
  	// cast to a number
  	number = Number(number);
  	if (precision !== null) {
  		// round to the given precision
  		number = number.toFixed(precision);
  	} else {
  		// or otherwise cast to a string
  		number = String(number);
  	}
  	// split apart the digits and decimals
  	let [digits, decimals] = number.split('.');
  	// add commas
  	digits = digits.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  	decimals = decimals && decimals.length ? '.' + decimals : '';
  	// reconstruct
  	return digits + decimals;
  }

  const roboto100 = `
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'), local('Roboto-Thin'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'), local('Roboto-Thin'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'), local('Roboto-Thin'),
    url(data:font/woff2;base64,d09GMgABAAAAAAMUAA4AAAAABdgAAALBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiYbcBw2BmAAWBEMCoIYgXgLEAABNgIkAxwEIAWCeAcgG7UEAI7EOEZxiRkf8fC9P81z3xfQyMvMQaQus22oc+UuRCQZtNbmVeOltyqmmEV8z6UiqVMSsdIZOB1vXwd2L+nAJvpsn2B2bqULNKV/wGMKBMrOtXPG10rQDxGSOqALn4IQQkINNYFAxTgzwUVLzu5AHTxPF0EdczoRQJ2435RBCUKzKRAnHNZlRBEIOQmhJOkkiB5K/AKEUNifpJ3WCTpQBapglWsAyHLb/cuTvz8/EaLvuZO97EgCIfZ5QGPp2ss9Fn1X24MFDY4U70/68T0CuRn5o/opCIC8l4AgUKFmCeoH5IpB39XNpm350XMC1EAvgDqfJgUhKTl9j7WAIqijjLngEKhP6uYBCVkuC8u0bymU29cvaDn3ApaPnrArc3yckFnm0rdeq1z/RRaXvftm9YbX37bkii9c9Fly6duv/x9fZhfsTNhW2VH1+uZRbW/EsFb5o63Z4V0IFdtfvvjsv+o5nz6Wxe5rY3dm1S8nvHT1gL8ffuKPsbuHv/Li1QP/efjxJ/55+JpBL6wvVed89nF1VvvXnz238uEtd39Wnt1R/snb7pk2s/PDoya9PX/GydmZh8b3PrP6/EtgiOASKMo3riKh8Xrzu3znfJtAGtih7f533trbMuv3UvcSaP2p/Rjg9djw9z+D/n+9nCudAcoSCIonNmqUh1TgjXkLBGqK2Y0O+YD4hvwm32m1q/z9jdcFim7RxYOQAHWS1EFYoOSIgMiVsQfuXOjikUvqzhxnb+McuLwhPriCLn5Ordvk10IKlUfHYbBMBS0NzUgW7CmOECIiPZK9qc0uiUQFN52BkXkPYSB0NuJdzQ3FK4VJUXCHxZFrHTFbRC90DxndzRyFrKA1o6mtb/yf+f40rOpsdyKlGqlDzldV80L14g2LqFHoGHUizhtCZiAMdWeO1rYu3NqqaqlpCADN471TAAA=)
      format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'), local('Roboto-Thin'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'), local('Roboto-Thin'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'), local('Roboto-Thin'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: local('Roboto Thin'), local('Roboto-Thin'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
`;

  const roboto400 = `
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(data:font/woff2;base64,d09GMgABAAAAAAMcAA4AAAAABdQAAALIAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGiYbcBw2BmAAWBEMCoIYgXsLEAABNgIkAxwEIAWCdAcgG7QEAB4HuUnzSsxYfoQjHr636//XPj09rr4PUEToO4IRQRHJlBgf/nKvtf1oamttuvHbwyKKIA440WqDfeCcvOaBRdtIBzbRsjUOrG390v1OEaV+MDndbbsEe4CJ6bp/iJAUgC4UykIICU00BQJ1IyWo586v9UDtOea0AbX/oWQN6pBdlx0oami1BOLgfacd9AiEkoRQlXSiRg8spQAhlPu7qad8NB/EQzzGHwNAVjozLpaTX5GPgeh7bmVv2S8BEOVMoLZgRbOIVN9lvLDsf/arXJH0o7gWSpPzO/VDUyFZLyoBoE5OpdYPKOWDvstaLS755UMCNEEvgDwDEmUhqap1924DFVCghungAFCgCXJAGn4p29N0KMrV9sVxbUcft1jpD95qOygOjkx18odf1s/9+uP1ccon3zTO++oj60/7eIUfrvX6iH/8JxuOm5psrO/X8N66tb8Y9qz8zmezfVuhqbQ/dd6R/8ZR31yfxbazY1tm5aU3vX/R9MoNd95au/HSifHagW9fMqt+86131G+8aOZ7j0f2RqdH7n+zU/rt4H/e7vPQw68U6V/dO11+2Kxv58+nbuq/6sYt6dgVvVLkru2PMIR6PlTk/z1Dwv+jW/MV+fsCaWCHc37YPHxH29Tfqt2r4Nkf2w8H3ovVv/7tv/dqI6uHgZoEgsoh/zepLfq75/+LayMpAACV7Hx7AYh/yE92ZNbPPn/+/9EUqLhIFz0aAQqSNIhWoGo/KlGqYTtMNjRtZ5PCQd3srlsSNjfEgy3r5b1rYa2POfYOnk6W5hYuaB4ubk/Qivaq4htEXLYjcYymbWzQOpXmOTI1cUac3BAyh4490V6Ouedn5q42BCcDxMnZ0t4OzcPBzSso+ovx4BuT7KZ2Vj15EOGE7qGD4GA1kgXCob4TAWewJBHYfVPizKmmLCuvoSvPzsPBRQW0DiIDAAAAAA==)
      format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(data:font/woff2;base64,d09GMgABAAAAAA04AA4AAAAAHeQAAAzjAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGi4bhU4cNgZgAIFMEQwKplChTAuCDgABNgIkA4QYBCAFgnQHIBtbGTOjdouTiovsv0owp9iaHfQFFGHSWOudV7e9tUY2e+yBOZblJ+aIWjoTBxQoCTOPdCC8gxFmaNvYp9P/PeZ4+H+7/9rnFh+mPqOnNqKxQsBBZAQJmP6Vjxgk3Y5GyFquH2ib/447QEyswOgfYidgF8MKrBr7+1bgjMj1bQ2LQlxGEI3NY4D2uBKb74d7Xa7d9zqFQyIUQhXhkrC37Trzg0zqNHqptbsGEAClzP5/a6ndvZl59+94grxvEpWSMG2EYVcldv/hwpSJbIWrqiRAWeFQIkpX6xrhVXwbur8XulwT/4g9inRHGmeToZA0gAmCZJ4SxGoNECGhj75AoGszN9jlVwZGwuD+qmIuDB4uTs+FwRPJpfkwgEH7RyAef7A4H2oEQi4h1JK9MKJExCR1ATALoH0IANoXANpLgPZTDuUwoD2dN5kGhLF31ivoPgD+9vEiQxZdXuGDRbPYgA3b5389D+TB4XyvZTq78jKTFBBUVovCzVnzG8V5yCb5/AJF/EIlk1/kfy/z0NhmZ6MLHZVdZof658pU1C9kC29jXNZUlcyOatawRqJCydAuO2oIQdQ3ydwR571rOaqysPDIm1xzKxuynCx3L19QnVPmjdWJSPHuWoNYZEdm22R8wAOhLF4pv3pqV/0hLLi4CLoLJZwBD93hDxZDPgLk5xY4XbpQMHYEFVbtFj8id/2NN2pJGSgiP3k3OTg5vnih/UMkhDqZnLyfHOKfol0Fv79zz3Ea7lxH0Lftu5oSyAO9qJoah1YzYA2IabDaHzNg3jP5WNkPNngmB5SDYJ1nckg5Dp7zL17o7JXnodRPsW1NgVcB0QcuAGkPyG+gOBukUwDF05bxPKM7d4pzEqsKtDH9m9utJ+9zl0ClMYVGsYNhOl1qT6XGKNS+/DSm1stP0KiepTmgyKhNUTBZjEyNqxxZqcFk5WSVpmXlG95U5VNZORK5d8jlRG7DXgrLLGhwNb8phURRTcuMhlDMs0CiqxP2s54l1/9FmHbVTXXX2Xe0qr6G0F+S1NdDXfGPbRqp6BuhTenaGeoJTjbRKEWZ1z1EedjuZP9D7hcg98P+S3Vr2m2EbxOLjJS2K0vELRVd2nI3EEyBBt/cq0ems05L2WL0hX9MNKvYjanm0iVctPlq+ou6SD+X85zFqrsQzkVn/fmtWyb+V6KLX7xyjKRIr5aM4jxtEokIYalCho8E9Q4vRMdi0WOpif9j91k407tNo9lblqM8QfUqM+xtUdPyCmZPm3C5vcvoyXHiQqIVm9S7RhRLLVWlO3voxFeTlfVEmuLYRYrtmDuqPaEzi5KM1kxrqB7SukxYGFTE/uHnasSbuqnmStLr/vveta+mbbfdZV4KlxT6aX0+UYOlQMXwROOJd2FYcNCyce61zJJPdYRtXkU+lbHtR3LtdK7MOXrvYakFfeY89WlsNvFKrYYt9CJK/W273YmiF66Qa625r0feEZJ8OHA+TLtGVV+d6C2OvYADyfXsz/9x3mRFQMRFaHoiEMnytYzyN1IVD6ZQhN2MsFFwObcqpZkn1l/CF/Uv4Utb1d98WQQ3wlQFdmtsDIh4z/iFixVQcRCI+EEI7V57ucONvIBvoCx2OyCnss93eUqu27BZcrHD49J+BD2jtGfnWSXCp8d/nNcWCE/IEn66dg6/DacQb8jpvdFEkHt3918f37hpambDxvEbkHaRd/26TmqXzkGd0wQ3wbF6oHfXNAW02esTiNEdMP3TCatu2DZ5cnvbWhD+vz0quaS4KLUhlSUMK+4XxZTvuSBEZ973GcVQP/JjRuL0Wbe7IpdjSpJhhdG3F/QD+/NrbARAgnV1SX6TeO9L66+7SbsHzjTioWPvwgc3NA+cg0DFm4q67/WnVv68uabmwjNlNOgWOrFV1JrSFGLlWRjTdFah5HjhwLR8t7Ysmd80DFECJ8Gytlke9794HjcX4o0nVv263dJxi2r5W2a88vvdtu6bVMufAont89f47XM3l7cu3uS3LFwDq+rc3NXnNm4/CqLvBXs+H73IGFMUOOHwqpE78o9Y0+ZemsxNfR/pfsUVWQF6aaZ5aob046Aohrs9oz7wF53be+4OpGxcr4soMSAxKBjc6+gdE9HUUUInIYTUPqdm1lMWel3h9AO/wENy/Ya3w8McUmJt/UIQySVpPXzahxJOK+97YoMOHFdHYrrhlT/vtnacaWphkt1Tq/sNTlv5tqxVGef9utPceVvW6sfu+9tXe9v8dQF1x+K1ttYUn/LXcalYMqm5Z+I8fvaQVC2ID6LnlX3RR/5GQj92bu/unkAZOJozJS9QnTfira/F4oJF2mvJob61vWuHpD9NFYJZw5Wq2W7puZ7KAWZAsB8zOIgF1o9uclc2JP61Lcl1g9Zf45Y8Um5lG9ughOOop/OPg7cZmIquweC1GIMWHG8cQMruG8qIcg0KCZQEJiwfeobHstjatmpgFdCJOGehqKn5cK2cQftgFz9WsJtt3LXhgqV0UDd6OqhHWlocXzsuttLDPo4S2sEm7czS2rHdfkR6xMHCSP4ysnw94OE6kQCXvlaOuHcfD2ovRtfqebdjCdUNMX7Ofp47pbzJMfzla//9UHf4oRuH7WmXxzSlsWmBCu6cZI+/eQxjHRetcTxLzrWhmaUM+HcOXzFZVFc/WczutvVz9WMEuNgdpQLPD/VUpTlPksI6e4K8rEKdvEkyYGa0iTNZ1ti0Ks/pt/Nz92Wdox2f4s/JYjqV+/+r/944XCmAk8OwqP6nGBwblt89OHDw/5H9BgvjtnD0ztOr+2Q8dwQxHfr56/72Z3n4yv76VOEScvfeT0jGgAGoQBM+IvaMSfMhCKEUS8E3xI4pcD4gWKo2kUClN8D83ZWAhr1GmIKG9QBV04MjQR9fgl7Wt0zow3K4ZupzycIAjoZmpkHeY2EIy0FKN+Se27NVoAHHwk7iblaCRr5QYQTPw0wYQUf7dWVd07puf2N4vUK2QY+VaWLcDNWEyTmr1F6UKGeV6guuJFFTfhAkpSxbke8WNEyAhAsaVgdUTQs6gzm+BK14LBN6sCacMvVivwl96A6/TP1EsjCAnjDJNGA/Ng3DqQJq70pk7YC4c295iY9gxbti8CP5sjSpzPr7a9zFkyxXR8qBB+lScnahBigV8rEExLighq8Y5+2o2hKPwmJQacl90TMyfxbulOp6iJH586BRquthSjbCqQTC9RAj7/wiHCRGQB8hY0SleC5ulaVUZSumu6v3Irh6z24xLqQRTzHOe1G1kQdhO740ehzLtElBASiCj+SLlDD8NWDyJExKdM2fFVPKgzegSjW5/GJ5SXX0T227q/eCUb1npxgXKBIuxnl3fmoj14M5tjR69G0WEe/5c4yp8ybAKGQPVcgutNpURiG7mALxj5IcfRNEIWu0BANb5hkW68TUxzpq10dJA89l6znlcY9AMa5k4cns53uVHPlX147KmesaP2B05tOlFbi8N93PJziUCrueeu46kj8Hz5reB3Lcx1rI8/S4coe83tSZ69pf2QUOsF1rUGv8tUfgSkplI+90RWQxlpnXvg3DLHBsE/4wwQCgEkMGTj2l+/Yl/+ee0aHgnfPWl3IiQgOI1Oeqz6Yfok3pYwORofyVl4GRn4E4hpEjIH7BjDNvfa0ucA0h5SqrECnvuBSrJAwYmzyYQwJ5L6SvrE91rZZGC88aLF/qoYhkSyh52Tei3EHyZlNnrms/2SG7BA+mjl3LNRMS28HqKQ32JbxpOPbwhrIGx+8x69YqzQP65jgB8hKuEPKSn3rFh1Z5aZuVI76k4gCpkNKBeBXecKeSYHQMwDrJmcPOnsWpnClQfJzeVSaU9UT1n6t9ifNOYRsOCKRls5bl78ScosvhWr0G+HlfeSMAuyL80HfN07soFnUJOhIIqifOSIPONR44cy2uFt6Oe7X50gBxslEqzqaV8639zOzaauVrgT+nyWWjsFTlnDzek1OHM67Y9U77dEqYbK/3MSqpFm+Wceq7kV3twemWsJ3480Fzi6ztHC+0GI/Td3H67KxfR8+q6Tfy+0PuGll4tD/K7gk1Pa6mZ9UtWyUHh0QJOEScL4HdsIVlD4wdY1tCgrzdolboQ90wfsOMmql3GjREjRZHCmvLIvJF9FtKwueD+icoovdSIq7lorGvKRyBV3WwXJGK26UhScuRBGoPyUROAe4i00LfXVrSeGzFzLViDq2w0pxKrRyNX29zg9C7oLCqODszq1TXysJyV6zLKtCJc9Mr+uWn0k3PksptH97ALmFmuh2ZXlyezZxGDy9IydRS9EycWcZN9qrRxcUl2Xb+cCp9vLW98+Ar2zddhVmOAxr5yEIn8x2pMOlOs3BlpnqaT6cXFGfOzs1OTc+XZpaUThjo580IjmCYDf2WLFCQnLQt)
      format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto'), local('Roboto-Regular'),
    url(data:font/woff2;base64,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)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
`;

  const knownFonts = {
    'roboto-100': {
      base64: roboto100,
      import: 'https://fonts.googleapis.com/css?family=Roboto:100'
    },
    'roboto-400': {
      base64: roboto400,
      import: 'https://fonts.googleapis.com/css?family=Roboto:400'
    }
  };

  // Woff2 happens to be supported by browsers that support FontFace
  // Except for Edge 14+ which supports woff2 but not FontFace
  // IE and Edge will get the flash of sans text while font loads
  const supportsWoff2 = !!window.FontFace;

  function getFontCss(names) {
    const cssLines = names.map(name => {
      const font = knownFonts[name];
      if (!font) {
        throw new Error(`getFontCss(names): Unknown font "${name}"`);
      }
      if (supportsWoff2) {
        return font.base64;
      } else {
        return `@import url(${font.import});`;
      }
    });
    return cssLines.join('\n');
  }

  /**
   * Clear out the chart area
   * @param {Element|String} element A DOM Element or selector to a DOM Element
   */
  function clearChart(element) {
    // remove svg
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    element.innerHTML = '';
    // remove any tooltips
    [...document.querySelectorAll('.sh-chart-tip-outer')].forEach(tip => {
      tip.parentNode.removeChild(tip);
    });
  }

  const css$4 = `
${getFontCss(['roboto-400'])}
.sh-chart-bar-horizontal .chart-label {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.sh-chart-bar-horizontal .chart-value {
  font-family: Roboto, sans-serif;
  font-size: 13px;
}
.sh-chart-bar-horizontal .links {
  display: none;
  color: #999;
}
.sh-chart-bar-horizontal .group:hover .links {
  display: block;
}
`;

  //
  // function to draw svg
  //
  function barHorizontal({
    width,
    data,
    links = [],
    onClick,
    withinElement,
    linkColor = '#EE5834',
    minSpacing = 45,
    maxSpacing = 55,
    maxHeight = 550,
    animationDuration = 500,
    animationOffset = 40
  }) {
    // setup variables
    const fontSize = 13;
    const spacing = between(minSpacing, maxSpacing)(maxHeight / data.length);
    const height = data.length * spacing;
    const highest = data[0].value;
    const highestWidth = (numberFormat(highest).length + 2) * fontSize * 0.5;
    const scaleAt = (width - highestWidth) / highest;
    // assign colors
    data.forEach((d, i) => {
      d.color = getColor(i, data.length);
    });
    // clear any existing chart
    clearChart(withinElement);
    // run it
    const svg = createSvg(withinElement);
    const groups = createGroups(svg);
    renderBarArea(groups);
    renderLabels(groups);
    renderBars(groups);
    renderNumbers(groups);
    // functions only below
    function createSvg(withinElement) {
      // create the svg and set its size
      const svg = select$1(withinElement)
        .append('svg')
        .attr('class', 'sh-chart-bar-horizontal')
        .attr('width', width)
        .attr('height', height);
      svg.append('style').text(css$4);
      return svg;
    }
    function createGroups(svg) {
      const root = svg.selectAll('g').data(data);
      // each element is a <g> group
      const groups = root
        .enter()
        .append('g')
        .attr('class', 'group')
        .attr('transform', (d, i) => `translate(0, ${i * spacing})`);
      return groups;
    }
    function renderBarArea(groups) {
      // hoverable area
      const rect = groups.append('rect');
      rect
        .attr('class', 'hover-area')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', '100%')
        .attr('height', spacing - 8)
        .attr('fill', 'transparent');
      // .attr('fill', 'rgba(0,0,0,0.1)')
      if (onClick) {
        rect.style('cursor', 'pointer');
        rect.on('click', onClick);
      }
    }
    function renderBars(groups) {
      // bar rectangles
      groups
        .append('rect')
        .attr('class', 'chart-bar')
        .attr('x', 0)
        .attr('y', 24)
        .attr('width', d => d.value * scaleAt)
        .attr('height', 6)
        .attr('fill', d => d.color)
        // pre-animation styles
        .style('opacity', 0)
        .style('transform', 'scaleX(0.25)')
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay((d, i) => animationOffset * i)
        // post-animation styles
        .style('opacity', 1)
        .style('transform', 'scaleX(1)');
    }
    function renderLabels(groups) {
      // labels above bars
      const label = groups
        .append('text')
        .attr('class', 'chart-label')
        .attr('x', 0)
        .attr('y', 16);
      // bar label
      label.append('tspan').text(d => d.label);
      if (links.length) {
        renderLinks(label);
      }
    }
    function renderNumbers(groups) {
      // numeric labels to right of bar rectangles
      groups
        .append('text')
        .attr('class', 'chart-value')
        .attr('x', d => d.value * scaleAt + 6)
        .attr('y', 32)
        .text(d => numberFormat(d.value))
        .attr('fill', (d, i) => getColor(i, data.length))
        // pre-animation styles
        .style('opacity', 0)
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay((d, i) => animationOffset * i)
        // post-animation styles
        .style('opacity', 1);
    }
    function renderLinks(label) {
      // area for preview | download | view trends links
      const linkArea = label
        .append('tspan')
        .attr('class', 'links')
        .attr('dx', '12');
      links.forEach((link, i) => {
        linkArea
          .append('tspan')
          .text(link.text)
          .attr('fill', linkColor)
          .style('cursor', 'pointer')
          .on('click', link.onClick);
        if (i < links.length - 1) {
          linkArea.append('tspan').text(' | ');
        }
      });
    }
  }

  //
  // functions only below
  //

  // get a function constrain a number between min and max
  function between(min, max) {
    return num => Math.round(Math.max(min, Math.min(max, num)));
  }

  function ascending$1(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function bisector(f) {
    let delta = f;
    let compare = f;

    if (f.length === 1) {
      delta = (d, x) => f(d) - x;
      compare = ascendingComparator(f);
    }

    function left(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    }

    function right(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        const mid = (lo + hi) >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }

    function center(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }

    return {left, center, right};
  }

  function ascendingComparator(f) {
    return (d, x) => ascending$1(f(d), x);
  }

  function number$1(x) {
    return x === null ? NaN : +x;
  }

  const ascendingBisect = bisector(ascending$1);
  const bisectRight = ascendingBisect.right;
  bisector(number$1).center;

  function extent(values, valueof) {
    let min;
    let max;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null) {
          if (min === undefined) {
            if (value >= value) min = max = value;
          } else {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
    return [min, max];
  }

  var e10 = Math.sqrt(50),
      e5 = Math.sqrt(10),
      e2 = Math.sqrt(2);

  function ticks(start, stop, count) {
    var reverse,
        i = -1,
        n,
        ticks,
        step;

    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [start];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

    if (step > 0) {
      let r0 = Math.round(start / step), r1 = Math.round(stop / step);
      if (r0 * step < start) ++r0;
      if (r1 * step > stop) --r1;
      ticks = new Array(n = r1 - r0 + 1);
      while (++i < n) ticks[i] = (r0 + i) * step;
    } else {
      step = -step;
      let r0 = Math.round(start * step), r1 = Math.round(stop * step);
      if (r0 / step < start) ++r0;
      if (r1 / step > stop) --r1;
      ticks = new Array(n = r1 - r0 + 1);
      while (++i < n) ticks[i] = (r0 + i) / step;
    }

    if (reverse) ticks.reverse();

    return ticks;
  }

  function tickIncrement(start, stop, count) {
    var step = (stop - start) / Math.max(0, count),
        power = Math.floor(Math.log(step) / Math.LN10),
        error = step / Math.pow(10, power);
    return power >= 0
        ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
        : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
  }

  function tickStep(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count),
        step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
        error = step0 / step1;
    if (error >= e10) step1 *= 10;
    else if (error >= e5) step1 *= 5;
    else if (error >= e2) step1 *= 2;
    return stop < start ? -step1 : step1;
  }

  function max(values, valueof) {
    let max;
    if (valueof === undefined) {
      for (const value of values) {
        if (value != null
            && (max < value || (max === undefined && value >= value))) {
          max = value;
        }
      }
    } else {
      let index = -1;
      for (let value of values) {
        if ((value = valueof(value, ++index, values)) != null
            && (max < value || (max === undefined && value >= value))) {
          max = value;
        }
      }
    }
    return max;
  }

  function range(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

    var i = -1,
        n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
        range = new Array(n);

    while (++i < n) {
      range[i] = start + i * step;
    }

    return range;
  }

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0: break;
      case 1: this.range(domain); break;
      default: this.range(range).domain(domain); break;
    }
    return this;
  }

  function constants(x) {
    return function() {
      return x;
    };
  }

  function number(x) {
    return +x;
  }

  var unit = [0, 1];

  function identity$1(x) {
    return x;
  }

  function normalize(a, b) {
    return (b -= (a = +a))
        ? function(x) { return (x - a) / b; }
        : constants(isNaN(b) ? NaN : 0.5);
  }

  function clamper(a, b) {
    var t;
    if (a > b) t = a, a = b, b = t;
    return function(x) { return Math.max(a, Math.min(b, x)); };
  }

  // normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
  // interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) { return r0(d0(x)); };
  }

  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1,
        d = new Array(j),
        r = new Array(j),
        i = -1;

    // Reverse descending domains.
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }

    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }

    return function(x) {
      var i = bisectRight(domain, x, 1, j) - 1;
      return r[i](d[i](x));
    };
  }

  function copy(source, target) {
    return target
        .domain(source.domain())
        .range(source.range())
        .interpolate(source.interpolate())
        .clamp(source.clamp())
        .unknown(source.unknown());
  }

  function transformer() {
    var domain = unit,
        range = unit,
        interpolate = interpolate$1,
        transform,
        untransform,
        unknown,
        clamp = identity$1,
        piecewise,
        output,
        input;

    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity$1) clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }

    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }

    scale.invert = function(y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber)))(y)));
    };

    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
    };

    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };

    scale.rangeRound = function(_) {
      return range = Array.from(_), interpolate = interpolateRound, rescale();
    };

    scale.clamp = function(_) {
      return arguments.length ? (clamp = _ ? true : identity$1, rescale()) : clamp !== identity$1;
    };

    scale.interpolate = function(_) {
      return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };

    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };

    return function(t, u) {
      transform = t, untransform = u;
      return rescale();
    };
  }

  function continuous() {
    return transformer()(identity$1, identity$1);
  }

  // Computes the decimal coefficient and exponent of the specified number x with
  // significant digits p, where x is positive and p is in [1, 21] or undefined.
  // For example, formatDecimal(1.23) returns ["123", 0].
  function formatDecimal(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);

    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  }

  function exponent(x) {
    return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
  }

  function formatGroup(grouping, thousands) {
    return function(value, width) {
      var i = value.length,
          t = [],
          j = 0,
          g = grouping[0],
          length = 0;

      while (i > 0 && g > 0) {
        if (length + g + 1 > width) g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width) break;
        g = grouping[j = (j + 1) % grouping.length];
      }

      return t.reverse().join(thousands);
    };
  }

  function formatNumerals(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // [[fill]align][sign][symbol][0][width][,][.precision][~][type]
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }

  formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
  }

  FormatSpecifier.prototype.toString = function() {
    return this.fill
        + this.align
        + this.sign
        + this.symbol
        + (this.zero ? "0" : "")
        + (this.width === undefined ? "" : Math.max(1, this.width | 0))
        + (this.comma ? "," : "")
        + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
        + (this.trim ? "~" : "")
        + this.type;
  };

  // Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
  function formatTrim(s) {
    out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".": i0 = i1 = i; break;
        case "0": if (i0 === 0) i0 = i; i1 = i; break;
        default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
      }
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  var prefixExponent;

  function formatPrefixAuto(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1],
        i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
        n = coefficient.length;
    return i === n ? coefficient
        : i > n ? coefficient + new Array(i - n + 1).join("0")
        : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
        : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
  }

  function formatRounded(x, p) {
    var d = formatDecimal(x, p);
    if (!d) return x + "";
    var coefficient = d[0],
        exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
        : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
        : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  var formatTypes = {
    "%": function(x, p) { return (x * 100).toFixed(p); },
    "b": function(x) { return Math.round(x).toString(2); },
    "c": function(x) { return x + ""; },
    "d": function(x) { return Math.round(x).toString(10); },
    "e": function(x, p) { return x.toExponential(p); },
    "f": function(x, p) { return x.toFixed(p); },
    "g": function(x, p) { return x.toPrecision(p); },
    "o": function(x) { return Math.round(x).toString(8); },
    "p": function(x, p) { return formatRounded(x * 100, p); },
    "r": formatRounded,
    "s": formatPrefixAuto,
    "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
    "x": function(x) { return Math.round(x).toString(16); }
  };

  function identity(x) {
    return x;
  }

  var map$1 = Array.prototype.map,
      prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

  function formatLocale(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? identity : formatGroup(map$1.call(locale.grouping, Number), locale.thousands + ""),
        currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
        currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
        decimal = locale.decimal === undefined ? "." : locale.decimal + "",
        numerals = locale.numerals === undefined ? identity : formatNumerals(map$1.call(locale.numerals, String)),
        percent = locale.percent === undefined ? "%" : locale.percent + "",
        minus = locale.minus === undefined ? "-" : locale.minus + "",
        nan = locale.nan === undefined ? "NaN" : locale.nan + "";

    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);

      var fill = specifier.fill,
          align = specifier.align,
          sign = specifier.sign,
          symbol = specifier.symbol,
          zero = specifier.zero,
          width = specifier.width,
          comma = specifier.comma,
          precision = specifier.precision,
          trim = specifier.trim,
          type = specifier.type;

      // The "n" type is an alias for ",g".
      if (type === "n") comma = true, type = "g";

      // The "" type, and any invalid type, is an alias for ".12~g".
      else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

      // If zero fill is specified, padding goes after sign and before digits.
      if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

      // Compute the prefix and suffix.
      // For SI-prefix, the suffix is lazily computed.
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
          suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

      // What format function should we use?
      // Is this an integer type?
      // Can this type generate exponential notation?
      var formatType = formatTypes[type],
          maybeSuffix = /[defgprs%]/.test(type);

      // Set the default precision if not specified,
      // or clamp the specified precision to the supported range.
      // For significant precision, it must be in [1, 21].
      // For fixed precision, it must be in [0, 20].
      precision = precision === undefined ? 6
          : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
          : Math.max(0, Math.min(20, precision));

      function format(value) {
        var valuePrefix = prefix,
            valueSuffix = suffix,
            i, n, c;

        if (type === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;

          // Perform the initial formatting.
          var valueNegative = value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

          // Trim insignificant zeros.
          if (trim) value = formatTrim(value);

          // If a negative value rounds to zero during formatting, treat as positive.
          if (valueNegative && +value === 0) valueNegative = false;

          // Compute the prefix and suffix.
          valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;

          valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

          // Break the formatted value into the integer “value” part that can be
          // grouped, and fractional or exponential “suffix” part that is not.
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }

        // If the fill character is not "0", grouping is applied before padding.
        if (comma && !zero) value = group(value, Infinity);

        // Compute the padding.
        var length = valuePrefix.length + value.length + valueSuffix.length,
            padding = length < width ? new Array(width - length + 1).join(fill) : "";

        // If the fill character is "0", grouping is applied after padding.
        if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

        // Reconstruct the final output based on the desired alignment.
        switch (align) {
          case "<": value = valuePrefix + value + valueSuffix + padding; break;
          case "=": value = valuePrefix + padding + value + valueSuffix; break;
          case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
          default: value = padding + valuePrefix + value + valueSuffix; break;
        }

        return numerals(value);
      }

      format.toString = function() {
        return specifier + "";
      };

      return format;
    }

    function formatPrefix(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
          e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
          k = Math.pow(10, -e),
          prefix = prefixes[8 + e / 3];
      return function(value) {
        return f(k * value) + prefix;
      };
    }

    return {
      format: newFormat,
      formatPrefix: formatPrefix
    };
  }

  var locale;
  var format;
  var formatPrefix;

  defaultLocale({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
    minus: "-"
  });

  function defaultLocale(definition) {
    locale = formatLocale(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  function precisionFixed(step) {
    return Math.max(0, -exponent(Math.abs(step)));
  }

  function precisionPrefix(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
  }

  function precisionRound(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, exponent(max) - exponent(step)) + 1;
  }

  function tickFormat(start, stop, count, specifier) {
    var step = tickStep(start, stop, count),
        precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  function linearish(scale) {
    var domain = scale.domain;

    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };

    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };

    scale.nice = function(count) {
      if (count == null) count = 10;

      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;

      if (stop < start) {
        step = start, start = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      
      while (maxIter-- > 0) {
        step = tickIncrement(start, stop, count);
        if (step === prestep) {
          d[i0] = start;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start = Math.floor(start / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start = Math.ceil(start * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }

      return scale;
    };

    return scale;
  }

  function linear() {
    var scale = continuous();

    scale.copy = function() {
      return copy(scale, linear());
    };

    initRange.apply(scale, arguments);

    return linearish(scale);
  }

  // Adapted from vega-statistics by Jeffrey Heer


  function visitPoints(data, x, y, cb){
    let iterations = 0;

    for (let i = 0, n = data.length; i < n; i++) {
      const d = data[i],
            dx = +x(d, i, data),
            dy = +y(d, i, data);

      if (dx != null && isFinite(dx) && dy != null && isFinite(dy)) {
        cb(dx, dy, iterations++);
      }
    }
  }

  // Given a dataset, x- and y-accessors, the mean center of the y values, and a predict function,
  // return the coefficient of determination, or R squared.
  function determination(data, x, y, uY, predict){
    let SSE = 0,
        SST = 0;
    
    visitPoints(data, x, y, (dx, dy) => {
      const sse = dy - predict(dx),
            sst = dy - uY;

      SSE += sse * sse;
      SST += sst * sst;
    });

    return 1 - SSE / SST;
  }

  // Ordinary Least Squares from vega-statistics by Jeffrey Heer
  // License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
  // Source: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/packages/vega-statistics/src/regression/ols.js
  function ols(uX, uY, uXY, uX2) {
    const delta = uX2 - uX * uX,
          slope = Math.abs(delta) < 1e-24 ? 0 : (uXY - uX * uY) / delta,
          intercept = uY - slope * uX;

    return [intercept, slope];
  }

  function regression(){
    let x = d => d[0],
        y = d => d[1],
        domain;

    function linear(data){
      let n = 0,
          X = 0, // sum of x
          Y = 0, // sum of y
          XY = 0, // sum of x * y
          X2 = 0, // sum of x * x
          xmin = domain ? +domain[0] : Infinity,
          xmax = domain ? +domain[1] : -Infinity;

      visitPoints(data, x, y, (dx, dy) => {
        ++n;
        X += (dx - X) / n;
        Y += (dy - Y) / n;
        XY += (dx * dy - XY) / n;
        X2 += (dx * dx - X2) / n;
        
        if (!domain){
          if (dx < xmin) xmin = dx;
          if (dx > xmax) xmax = dx;
        }
      });

      const [intercept, slope] = ols(X, Y, XY, X2),
          fn = x => slope * x + intercept,
          out = [[xmin, fn(xmin)], [xmax, fn(xmax)]];
      
      out.a = slope;
      out.b = intercept;
      out.predict = fn;
      out.rSquared = determination(data, x, y, Y, fn);

      return out;
    }

    linear.domain = function(arr){
      return arguments.length ? (domain = arr, linear) : domain;
    };

    linear.x = function(fn){
      return arguments.length ? (x = fn, linear) : x;
    };

    linear.y = function(fn){
      return arguments.length ? (y = fn, linear) : y;
    };

    return linear;
  }

  const css$3 = `
${getFontCss(['roboto-400'])}
.sh-chart-bar-vertical text {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.sh-chart-bar-vertical .chart-axis-line,
.sh-chart-bar-vertical .chart-tick {
  fill: #595959;
}
.sh-chart-bar-vertical .bar-group .chart-value {
  display: none;
}
.sh-chart-bar-vertical .bar-group:hover .chart-value {
  display: block;
}
.sh-chart-bar-vertical .regression-line {
  stroke: #666;
  stroke-dasharray: 6 4;
  stroke-width: 2;
}
`;

  function barVertical({
    data,
    color,
    height,
    width,
    onClick,
    withinElement,
    animationDuration = 500,
    animationOffset = 40
  }) {
    const fontSize = 13;
    const tickHeight = fontSize * 0.75;
    const barSpacing = 4;
    const barNumberPadding = barSpacing * 3;
    const xAxisAreaHeight = barSpacing + fontSize + tickHeight + 5;
    const yLabelFontHeight = 16;
    const numYAxisLabels = 5;
    const values = data.map(d => d.value);
    const highest = Math.max.apply(null, values);
    // const lowest = Math.max.apply(null, values);
    const highestWidth =
      (String(numberFormat(highest)).length * fontSize) / 2 + 7;
    // const scaleAt = ((width - highestWidth) / highest).toFixed(2);
    const barAreaLeft = highestWidth + barSpacing * 2;
    const barAreaTop = yLabelFontHeight + barNumberPadding;
    const barAreaWidth = width - highestWidth - barSpacing * 4;
    const barAreaHeight = height - xAxisAreaHeight - barAreaTop;
    const barAreaBottom = barAreaTop + barAreaHeight;
    const barWidth =
      (barAreaWidth - (barSpacing * data.length - 1)) / data.length;
    const barPxPerValue = barAreaHeight / highest;
    // clear any existing chart
    clearChart(withinElement);
    // run it
    const svg = createSvg(withinElement);
    // debug: highlight bar area
    // svg
    //   .append('rect')
    //   .attr('x', barAreaLeft)
    //   .attr('y', barAreaTop)
    //   .attr('width', barAreaWidth)
    //   .attr('height', barAreaHeight)
    //   .attr('fill', '#ccc');

    const groups = createGroups(svg);
    // renderBarArea(groups);
    // renderLabels(groups);
    renderBars(groups);
    renderBarTicks(groups);
    renderXAxisLabels(groups);
    renderXAxisLine(svg);
    renderNumbers(groups);
    renderYAxisLabels(svg);
    renderRegressionLine(svg);
    // functions only below
    function createSvg(withinElement) {
      // create the svg and set its size
      const svg = select$1(withinElement)
        .append('svg')
        .attr('class', 'sh-chart-bar-vertical')
        .attr('width', width)
        .attr('height', height);
      svg.append('style').text(css$3);
      return svg;
    }
    function createGroups(svg) {
      const root = svg.selectAll('g').data(data);
      // each element is a <g> group
      const groups = root
        .enter()
        .append('g')
        .attr('class', 'bar-group')
        .attr('transform', (d, i) => {
          const left = i * (barWidth + barSpacing) + barAreaLeft + barSpacing / 2;
          const top = barAreaTop;
          return `translate(${left}, ${top})`;
        })
        .style('cursor', onClick ? 'pointer' : 'default')
        .on('click', onClick);
      return groups;
    }
    function renderBars(groups) {
      // bar rectangles
      groups
        .append('rect')
        .attr('class', 'chart-bar')
        .attr('x', 0)
        .attr('y', d => (highest - d.value) * barPxPerValue)
        .attr('width', barWidth)
        .attr('height', d => d.value * barPxPerValue)
        .attr('fill', color)
        .style('transform-origin', `0 ${barAreaHeight}px`)
        // pre-animation styles
        .style('opacity', 0)
        .style('transform', 'scaleY(0.25)')
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay((d, i) => animationOffset * i)
        // post-animation styles
        .style('opacity', 1)
        .style('transform', 'scaleY(1)');
    }
    function renderXAxisLabels(groups) {
      // date labels
      groups
        .append('text')
        .attr('class', 'chart-axis-label chart-x-axis-label')
        .attr('x', barWidth / 2 + 1)
        .attr('y', barAreaHeight + barSpacing + tickHeight + fontSize)
        .attr('text-anchor', 'middle')
        .text(d => d.label);
    }
    function renderXAxisLine(svg) {
      // line above labels
      svg
        .append('rect')
        .attr('class', 'chart-axis-line chart-x-axis-line')
        .attr('x', barAreaLeft - barSpacing)
        .attr('y', barAreaBottom + barSpacing)
        .attr('width', barAreaWidth + barSpacing * 2)
        .attr('height', 1);
    }
    function renderBarTicks(groups) {
      // tick marks for date labels
      groups
        .append('rect')
        .attr('class', 'chart-tick')
        .attr('x', barWidth / 2 + 1)
        .attr('y', barAreaHeight + barSpacing)
        .attr('width', 1)
        .attr('height', 8);
    }
    function renderYAxisLabels(svg) {
      // numbers up left side
      const values = getYAxisValues();
      const bottom = barAreaBottom + fontSize / 2 + 1;
      svg
        .selectAll('.chart-y-axis-label')
        .data(values)
        .enter()
        .append('text')
        .attr('class', 'chart-axis-label chart-y-axis-label')
        .attr('text-anchor', 'end')
        .attr('x', barAreaLeft - barSpacing * 3)
        .attr('y', d => bottom - d.value * barPxPerValue)
        .text(d => d.label);
    }
    function getYAxisValues() {
      // get labels for numbers up left side
      const yScale = linear()
        .domain([0, highest])
        .nice();
      const ticks = yScale.ticks(numYAxisLabels + 1);
      const values = ticks.map(value => {
        if (value > highest * 1.02) {
          // too far off chart
          return { label: '', value };
        }
        return { label: numberFormat(value), value };
      });
      return values;
    }
    function renderNumbers(groups) {
      // numeric labels at top of of bar rectangles
      groups
        .append('text')
        .attr('class', 'chart-value')
        .attr('x', barWidth / 2 - 0.5)
        .attr('y', d => (highest - d.value) * barPxPerValue - barNumberPadding)
        .attr('width', barWidth)
        .attr('text-anchor', 'middle')
        .text(d => numberFormat(d.value))
        .attr('fill', '#777')
        // pre-animation styles
        .style('opacity', 0)
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay((d, i) => animationOffset * i)
        // post-animation styles
        .style('opacity', 1);
    }
    function renderRegressionLine(svg) {
      const regData = data.map((d, i) => [i, d.value]);
      const reg = regression().domain([0, values.length]);
      const result = reg(regData);
      svg
        .append('line')
        .attr('class', 'regression-line')
        .attr('x1', barAreaLeft + barSpacing + barWidth / 2)
        .attr('y1', barAreaTop + (barAreaHeight - result[0][1] * barPxPerValue))
        .attr('x2', barAreaLeft + barAreaWidth - barSpacing - barWidth / 2)
        .attr('y2', barAreaTop + (barAreaHeight - result[1][1] * barPxPerValue));
    }
  }

  function count(node) {
    var sum = 0,
        children = node.children,
        i = children && children.length;
    if (!i) sum = 1;
    else while (--i >= 0) sum += children[i].value;
    node.value = sum;
  }

  function node_count() {
    return this.eachAfter(count);
  }

  function node_each(callback, that) {
    let index = -1;
    for (const node of this) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }

  function node_eachBefore(callback, that) {
    var node = this, nodes = [node], children, i, index = -1;
    while (node = nodes.pop()) {
      callback.call(that, node, ++index, this);
      if (children = node.children) {
        for (i = children.length - 1; i >= 0; --i) {
          nodes.push(children[i]);
        }
      }
    }
    return this;
  }

  function node_eachAfter(callback, that) {
    var node = this, nodes = [node], next = [], children, i, n, index = -1;
    while (node = nodes.pop()) {
      next.push(node);
      if (children = node.children) {
        for (i = 0, n = children.length; i < n; ++i) {
          nodes.push(children[i]);
        }
      }
    }
    while (node = next.pop()) {
      callback.call(that, node, ++index, this);
    }
    return this;
  }

  function node_find(callback, that) {
    let index = -1;
    for (const node of this) {
      if (callback.call(that, node, ++index, this)) {
        return node;
      }
    }
  }

  function node_sum(value) {
    return this.eachAfter(function(node) {
      var sum = +value(node.data) || 0,
          children = node.children,
          i = children && children.length;
      while (--i >= 0) sum += children[i].value;
      node.value = sum;
    });
  }

  function node_sort(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  }

  function node_path(end) {
    var start = this,
        ancestor = leastCommonAncestor(start, end),
        nodes = [start];
    while (start !== ancestor) {
      start = start.parent;
      nodes.push(start);
    }
    var k = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k, 0, end);
      end = end.parent;
    }
    return nodes;
  }

  function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(),
        bNodes = b.ancestors(),
        c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while (a === b) {
      c = a;
      a = aNodes.pop();
      b = bNodes.pop();
    }
    return c;
  }

  function node_ancestors() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  }

  function node_descendants() {
    return Array.from(this);
  }

  function node_leaves() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  }

  function node_links() {
    var root = this, links = [];
    root.each(function(node) {
      if (node !== root) { // Don’t include the root’s parent, if any.
        links.push({source: node.parent, target: node});
      }
    });
    return links;
  }

  function* node_iterator() {
    var node = this, current, next = [node], children, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        yield node;
        if (children = node.children) {
          for (i = 0, n = children.length; i < n; ++i) {
            next.push(children[i]);
          }
        }
      }
    } while (next.length);
  }

  function hierarchy(data, children) {
    if (data instanceof Map) {
      data = [undefined, data];
      if (children === undefined) children = mapChildren;
    } else if (children === undefined) {
      children = objectChildren;
    }

    var root = new Node$1(data),
        node,
        nodes = [root],
        child,
        childs,
        i,
        n;

    while (node = nodes.pop()) {
      if ((childs = children(node.data)) && (n = (childs = Array.from(childs)).length)) {
        node.children = childs;
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = childs[i] = new Node$1(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }

    return root.eachBefore(computeHeight);
  }

  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }

  function objectChildren(d) {
    return d.children;
  }

  function mapChildren(d) {
    return Array.isArray(d) ? d[1] : null;
  }

  function copyData(node) {
    if (node.data.value !== undefined) node.value = node.data.value;
    node.data = node.data.data;
  }

  function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && (node.height < ++height));
  }

  function Node$1(data) {
    this.data = data;
    this.depth =
    this.height = 0;
    this.parent = null;
  }

  Node$1.prototype = hierarchy.prototype = {
    constructor: Node$1,
    count: node_count,
    each: node_each,
    eachAfter: node_eachAfter,
    eachBefore: node_eachBefore,
    find: node_find,
    sum: node_sum,
    sort: node_sort,
    path: node_path,
    ancestors: node_ancestors,
    descendants: node_descendants,
    leaves: node_leaves,
    links: node_links,
    copy: node_copy,
    [Symbol.iterator]: node_iterator
  };

  function array$1(x) {
    return typeof x === "object" && "length" in x
      ? x // Array, TypedArray, NodeList, array-like
      : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function shuffle(array) {
    var m = array.length,
        t,
        i;

    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  function enclose(circles) {
    var i = 0, n = (circles = shuffle(Array.from(circles))).length, B = [], p, e;

    while (i < n) {
      p = circles[i];
      if (e && enclosesWeak(e, p)) ++i;
      else e = encloseBasis(B = extendBasis(B, p)), i = 0;
    }

    return e;
  }

  function extendBasis(B, p) {
    var i, j;

    if (enclosesWeakAll(p, B)) return [p];

    // If we get here then B must have at least one element.
    for (i = 0; i < B.length; ++i) {
      if (enclosesNot(p, B[i])
          && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
        return [B[i], p];
      }
    }

    // If we get here then B must have at least two elements.
    for (i = 0; i < B.length - 1; ++i) {
      for (j = i + 1; j < B.length; ++j) {
        if (enclosesNot(encloseBasis2(B[i], B[j]), p)
            && enclosesNot(encloseBasis2(B[i], p), B[j])
            && enclosesNot(encloseBasis2(B[j], p), B[i])
            && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
          return [B[i], B[j], p];
        }
      }
    }

    // If we get here then something is very wrong.
    throw new Error;
  }

  function enclosesNot(a, b) {
    var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
  }

  function enclosesWeak(a, b) {
    var dr = a.r - b.r + Math.max(a.r, b.r, 1) * 1e-9, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }

  function enclosesWeakAll(a, B) {
    for (var i = 0; i < B.length; ++i) {
      if (!enclosesWeak(a, B[i])) {
        return false;
      }
    }
    return true;
  }

  function encloseBasis(B) {
    switch (B.length) {
      case 1: return encloseBasis1(B[0]);
      case 2: return encloseBasis2(B[0], B[1]);
      case 3: return encloseBasis3(B[0], B[1], B[2]);
    }
  }

  function encloseBasis1(a) {
    return {
      x: a.x,
      y: a.y,
      r: a.r
    };
  }

  function encloseBasis2(a, b) {
    var x1 = a.x, y1 = a.y, r1 = a.r,
        x2 = b.x, y2 = b.y, r2 = b.r,
        x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
        l = Math.sqrt(x21 * x21 + y21 * y21);
    return {
      x: (x1 + x2 + x21 / l * r21) / 2,
      y: (y1 + y2 + y21 / l * r21) / 2,
      r: (l + r1 + r2) / 2
    };
  }

  function encloseBasis3(a, b, c) {
    var x1 = a.x, y1 = a.y, r1 = a.r,
        x2 = b.x, y2 = b.y, r2 = b.r,
        x3 = c.x, y3 = c.y, r3 = c.r,
        a2 = x1 - x2,
        a3 = x1 - x3,
        b2 = y1 - y2,
        b3 = y1 - y3,
        c2 = r2 - r1,
        c3 = r3 - r1,
        d1 = x1 * x1 + y1 * y1 - r1 * r1,
        d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
        d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
        ab = a3 * b2 - a2 * b3,
        xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
        xb = (b3 * c2 - b2 * c3) / ab,
        ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
        yb = (a2 * c3 - a3 * c2) / ab,
        A = xb * xb + yb * yb - 1,
        B = 2 * (r1 + xa * xb + ya * yb),
        C = xa * xa + ya * ya - r1 * r1,
        r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
    return {
      x: x1 + xa + xb * r,
      y: y1 + ya + yb * r,
      r: r
    };
  }

  function place(b, a, c) {
    var dx = b.x - a.x, x, a2,
        dy = b.y - a.y, y, b2,
        d2 = dx * dx + dy * dy;
    if (d2) {
      a2 = a.r + c.r, a2 *= a2;
      b2 = b.r + c.r, b2 *= b2;
      if (a2 > b2) {
        x = (d2 + b2 - a2) / (2 * d2);
        y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
        c.x = b.x - x * dx - y * dy;
        c.y = b.y - x * dy + y * dx;
      } else {
        x = (d2 + a2 - b2) / (2 * d2);
        y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
        c.x = a.x + x * dx - y * dy;
        c.y = a.y + x * dy + y * dx;
      }
    } else {
      c.x = a.x + c.r;
      c.y = a.y;
    }
  }

  function intersects(a, b) {
    var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
  }

  function score(node) {
    var a = node._,
        b = node.next._,
        ab = a.r + b.r,
        dx = (a.x * b.r + b.x * a.r) / ab,
        dy = (a.y * b.r + b.y * a.r) / ab;
    return dx * dx + dy * dy;
  }

  function Node(circle) {
    this._ = circle;
    this.next = null;
    this.previous = null;
  }

  function packEnclose(circles) {
    if (!(n = (circles = array$1(circles)).length)) return 0;

    var a, b, c, n, aa, ca, i, j, k, sj, sk;

    // Place the first circle.
    a = circles[0], a.x = 0, a.y = 0;
    if (!(n > 1)) return a.r;

    // Place the second circle.
    b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
    if (!(n > 2)) return a.r + b.r;

    // Place the third circle.
    place(b, a, c = circles[2]);

    // Initialize the front-chain using the first three circles a, b and c.
    a = new Node(a), b = new Node(b), c = new Node(c);
    a.next = c.previous = b;
    b.next = a.previous = c;
    c.next = b.previous = a;

    // Attempt to place each remaining circle…
    pack: for (i = 3; i < n; ++i) {
      place(a._, b._, c = circles[i]), c = new Node(c);

      // Find the closest intersecting circle on the front-chain, if any.
      // “Closeness” is determined by linear distance along the front-chain.
      // “Ahead” or “behind” is likewise determined by linear distance.
      j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
      do {
        if (sj <= sk) {
          if (intersects(j._, c._)) {
            b = j, a.next = b, b.previous = a, --i;
            continue pack;
          }
          sj += j._.r, j = j.next;
        } else {
          if (intersects(k._, c._)) {
            a = k, a.next = b, b.previous = a, --i;
            continue pack;
          }
          sk += k._.r, k = k.previous;
        }
      } while (j !== k.next);

      // Success! Insert the new circle c between a and b.
      c.previous = a, c.next = b, a.next = b.previous = b = c;

      // Compute the new closest circle pair to the centroid.
      aa = score(a);
      while ((c = c.next) !== b) {
        if ((ca = score(c)) < aa) {
          a = c, aa = ca;
        }
      }
      b = a.next;
    }

    // Compute the enclosing circle of the front chain.
    a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = enclose(a);

    // Translate the circles to put the enclosing circle around the origin.
    for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

    return c.r;
  }

  function optional(f) {
    return f == null ? null : required(f);
  }

  function required(f) {
    if (typeof f !== "function") throw new Error;
    return f;
  }

  function constantZero() {
    return 0;
  }

  function constant$2(x) {
    return function() {
      return x;
    };
  }

  function defaultRadius(d) {
    return Math.sqrt(d.value);
  }

  function pack() {
    var radius = null,
        dx = 1,
        dy = 1,
        padding = constantZero;

    function pack(root) {
      root.x = dx / 2, root.y = dy / 2;
      if (radius) {
        root.eachBefore(radiusLeaf(radius))
            .eachAfter(packChildren(padding, 0.5))
            .eachBefore(translateChild(1));
      } else {
        root.eachBefore(radiusLeaf(defaultRadius))
            .eachAfter(packChildren(constantZero, 1))
            .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
            .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
      }
      return root;
    }

    pack.radius = function(x) {
      return arguments.length ? (radius = optional(x), pack) : radius;
    };

    pack.size = function(x) {
      return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
    };

    pack.padding = function(x) {
      return arguments.length ? (padding = typeof x === "function" ? x : constant$2(+x), pack) : padding;
    };

    return pack;
  }

  function radiusLeaf(radius) {
    return function(node) {
      if (!node.children) {
        node.r = Math.max(0, +radius(node) || 0);
      }
    };
  }

  function packChildren(padding, k) {
    return function(node) {
      if (children = node.children) {
        var children,
            i,
            n = children.length,
            r = padding(node) * k || 0,
            e;

        if (r) for (i = 0; i < n; ++i) children[i].r += r;
        e = packEnclose(children);
        if (r) for (i = 0; i < n; ++i) children[i].r -= r;
        node.r = e + r;
      }
    };
  }

  function translateChild(k) {
    return function(node) {
      var parent = node.parent;
      node.r *= k;
      if (parent) {
        node.x = parent.x + k * node.x;
        node.y = parent.y + k * node.y;
      }
    };
  }

  var prefix = "$";

  function Map$1() {}

  Map$1.prototype = map.prototype = {
    constructor: Map$1,
    has: function(key) {
      return (prefix + key) in this;
    },
    get: function(key) {
      return this[prefix + key];
    },
    set: function(key, value) {
      this[prefix + key] = value;
      return this;
    },
    remove: function(key) {
      var property = prefix + key;
      return property in this && delete this[property];
    },
    clear: function() {
      for (var property in this) if (property[0] === prefix) delete this[property];
    },
    keys: function() {
      var keys = [];
      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
      return keys;
    },
    values: function() {
      var values = [];
      for (var property in this) if (property[0] === prefix) values.push(this[property]);
      return values;
    },
    entries: function() {
      var entries = [];
      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
      return entries;
    },
    size: function() {
      var size = 0;
      for (var property in this) if (property[0] === prefix) ++size;
      return size;
    },
    empty: function() {
      for (var property in this) if (property[0] === prefix) return false;
      return true;
    },
    each: function(f) {
      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
    }
  };

  function map(object, f) {
    var map = new Map$1;

    // Copy constructor.
    if (object instanceof Map$1) object.each(function(value, key) { map.set(key, value); });

    // Index array by numeric index or specified key function.
    else if (Array.isArray(object)) {
      var i = -1,
          n = object.length,
          o;

      if (f == null) while (++i < n) map.set(i, object[i]);
      else while (++i < n) map.set(f(o = object[i], i, object), o);
    }

    // Convert object to map.
    else if (object) for (var key in object) map.set(key, object[key]);

    return map;
  }

  function Set() {}

  var proto = map.prototype;

  Set.prototype = {
    constructor: Set,
    has: proto.has,
    add: function(value) {
      value += "";
      this[prefix + value] = value;
      return this;
    },
    remove: proto.remove,
    clear: proto.clear,
    values: proto.keys,
    size: proto.size,
    empty: proto.empty,
    each: proto.each
  };

  var xhtml = "http://www.w3.org/1999/xhtml";

  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
  }

  function creatorInherit(name) {
    return function() {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml
          ? document.createElement(name)
          : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local
        ? creatorFixed
        : creatorInherit)(fullname);
  }

  function none$2() {}

  function selector(selector) {
    return selector == null ? none$2 : function() {
      return this.querySelector(selector);
    };
  }

  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function empty() {
    return [];
  }

  function selectorAll(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  function selection_selectAll(select) {
    if (typeof select !== "function") select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection(subgroups, parents);
  }

  function matcher(selector) {
    return function() {
      return this.matches(selector);
    };
  }

  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function sparse(update) {
    return new Array(update.length);
  }

  function selection_enter() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
  }

  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
    insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
    querySelector: function(selector) { return this._parent.querySelector(selector); },
    querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
  };

  function constant$1(x) {
    return function() {
      return x;
    };
  }

  var keyPrefix = "$"; // Protect against keys like “__proto__”.

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length;

    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = {},
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue;

    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) {
          exit[i] = node;
        } else {
          nodeByKeyValue[keyValue] = node;
        }
      }
    }

    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = keyPrefix + key.call(parent, data[i], i, data);
      if (node = nodeByKeyValue[keyValue]) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue[keyValue] = null;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }

    // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
        exit[i] = node;
      }
    }
  }

  function selection_data(value, key) {
    if (!value) {
      data = new Array(this.size()), j = -1;
      this.each(function(d) { data[++j] = d; });
      return data;
    }

    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;

    if (typeof value !== "function") value = constant$1(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = value.call(parent, parent && parent.__data__, j, parents),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);

      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

      // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength);
          previous._next = next || null;
        }
      }
    }

    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  function selection_exit() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove(); else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge(selection) {

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection(merges, this._parents);
  }

  function selection_order() {

    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort(compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }

    return new Selection(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function() { nodes[++i] = this; });
    return nodes;
  }

  function selection_node() {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size() {
    var size = 0;
    this.each(function() { ++size; });
    return size;
  }

  function selection_empty() {
    return !this.node();
  }

  function selection_each(callback) {

    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);
      else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
      else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr(name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local
          ? node.getAttributeNS(fullname.space, fullname.local)
          : node.getAttribute(fullname);
    }

    return this.each((value == null
        ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
        ? (fullname.local ? attrFunctionNS : attrFunction)
        : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
  }

  function defaultView(node) {
    return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
        || (node.document && node) // node is a Window
        || node.defaultView; // node is a Document
  }

  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);
      else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style(name, value, priority) {
    return arguments.length > 1
        ? this.each((value == null
              ? styleRemove : typeof value === "function"
              ? styleFunction
              : styleConstant)(name, value, priority == null ? "" : priority))
        : styleValue(this.node(), name);
  }

  function styleValue(node, name) {
    return node.style.getPropertyValue(name)
        || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];
      else this[name] = v;
    };
  }

  function selection_property(name, value) {
    return arguments.length > 1
        ? this.each((value == null
            ? propertyRemove : typeof value === "function"
            ? propertyFunction
            : propertyConstant)(name, value))
        : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.add(names[i]);
  }

  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n) list.remove(names[i]);
  }

  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed(name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n) if (!list.contains(names[i])) return false;
      return true;
    }

    return this.each((typeof value === "function"
        ? classedFunction : value
        ? classedTrue
        : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text(value) {
    return arguments.length
        ? this.each(value == null
            ? textRemove : (typeof value === "function"
            ? textFunction
            : textConstant)(value))
        : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html(value) {
    return arguments.length
        ? this.each(value == null
            ? htmlRemove : (typeof value === "function"
            ? htmlFunction
            : htmlConstant)(value))
        : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise() {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower() {
    return this.each(lower);
  }

  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove() {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum(value) {
    return arguments.length
        ? this.property("__data__", value)
        : this.node().__data__;
  }

  var filterEvents = {};

  if (typeof document !== "undefined") {
    var element = document.documentElement;
    if (!("onmouseenter" in element)) {
      filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
    }
  }

  function filterContextListener(listener, index, group) {
    listener = contextListener(listener, index, group);
    return function(event) {
      var related = event.relatedTarget;
      if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
        listener.call(this, event);
      }
    };
  }

  function contextListener(listener, index, group) {
    return function(event1) {
      try {
        listener.call(this, this.__data__, index, group);
      } finally {
      }
    };
  }

  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {type: t, name: name};
    });
  }

  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;
      else delete this.__on;
    };
  }

  function onAdd(typename, value, capture) {
    var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
    return function(d, i, group) {
      var on = this.__on, o, listener = wrap(value, i, group);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.capture);
          this.addEventListener(o.type, o.listener = listener, o.capture = capture);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, capture);
      o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
      if (!on) this.__on = [o];
      else on.push(o);
    };
  }

  function selection_on(typename, value, capture) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;
    if (capture == null) capture = false;
    for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch(type, params) {
    return this.each((typeof params === "function"
        ? dispatchFunction
        : dispatchConstant)(type, params));
  }

  var root = [null];

  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection() {
    return new Selection([[document.documentElement]], root);
  }

  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
  };

  function select(selector) {
    return typeof selector === "string"
        ? new Selection([[document.querySelector(selector)]], [document.documentElement])
        : new Selection([[selector]], root);
  }

  /**
   * d3.tip
   * Copyright (c) 2013-2017 Justin Palmer
   *
   * Tooltips for d3.js SVG visualizations
   */
  // Public - constructs a new tooltip
  //
  // Returns a tip
  function ToolTip() {
    var direction   = d3TipDirection,
        offset      = d3TipOffset,
        html        = d3TipHTML,
        rootElement = document.body,
        node        = initNode(),
        svg         = null,
        point       = null,
        target      = null;

    function tip(vis) {
      svg = getSVGNode(vis);
      if (!svg) return
      point = svg.createSVGPoint();
      rootElement.appendChild(node);
    }

    // Public - show the tooltip on the screen
    //
    // Returns a tip
    tip.show = function() {
      var args = Array.prototype.slice.call(arguments);
      if (args[args.length - 1] instanceof SVGElement) target = args.pop();

      var content = html.apply(this, args),
          poffset = offset.apply(this, args),
          dir     = direction.apply(this, args),
          nodel   = getNodeEl(),
          i       = directions.length,
          coords,
          scrollTop  = document.documentElement.scrollTop ||
        rootElement.scrollTop,
          scrollLeft = document.documentElement.scrollLeft ||
        rootElement.scrollLeft;

      nodel.html(content)
        .style('opacity', 1).style('pointer-events', 'all');

      while (i--) nodel.classed(directions[i], false);
      coords = directionCallbacks.get(dir).apply(this);
      nodel.classed(dir, true)
        .style('top', (coords.top + poffset[0]) + scrollTop + 'px')
        .style('left', (coords.left + poffset[1]) + scrollLeft + 'px');

      return tip
    };

    // Public - hide the tooltip
    //
    // Returns a tip
    tip.hide = function() {
      var nodel = getNodeEl();
      nodel.style('opacity', 0).style('pointer-events', 'none');
      return tip
    };

    // Public: Proxy attr calls to the d3 tip container.
    // Sets or gets attribute value.
    //
    // n - name of the attribute
    // v - value of the attribute
    //
    // Returns tip or attribute value
    // eslint-disable-next-line no-unused-vars
    tip.attr = function(n, v) {
      if (arguments.length < 2 && typeof n === 'string') {
        return getNodeEl().attr(n)
      }

      var args =  Array.prototype.slice.call(arguments);
      selection.prototype.attr.apply(getNodeEl(), args);
      return tip
    };

    // Public: Proxy style calls to the d3 tip container.
    // Sets or gets a style value.
    //
    // n - name of the property
    // v - value of the property
    //
    // Returns tip or style property value
    // eslint-disable-next-line no-unused-vars
    tip.style = function(n, v) {
      if (arguments.length < 2 && typeof n === 'string') {
        return getNodeEl().style(n)
      }

      var args = Array.prototype.slice.call(arguments);
      selection.prototype.style.apply(getNodeEl(), args);
      return tip
    };

    // Public: Set or get the direction of the tooltip
    //
    // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
    //     sw(southwest), ne(northeast) or se(southeast)
    //
    // Returns tip or direction
    tip.direction = function(v) {
      if (!arguments.length) return direction
      direction = v == null ? v : functor(v);

      return tip
    };

    // Public: Sets or gets the offset of the tip
    //
    // v - Array of [x, y] offset
    //
    // Returns offset or
    tip.offset = function(v) {
      if (!arguments.length) return offset
      offset = v == null ? v : functor(v);

      return tip
    };

    // Public: sets or gets the html value of the tooltip
    //
    // v - String value of the tip
    //
    // Returns html value or tip
    tip.html = function(v) {
      if (!arguments.length) return html
      html = v == null ? v : functor(v);

      return tip
    };

    // Public: sets or gets the root element anchor of the tooltip
    //
    // v - root element of the tooltip
    //
    // Returns root node of tip
    tip.rootElement = function(v) {
      if (!arguments.length) return rootElement
      rootElement = v == null ? v : functor(v);

      return tip
    };

    // Public: destroys the tooltip and removes it from the DOM
    //
    // Returns a tip
    tip.destroy = function() {
      if (node) {
        getNodeEl().remove();
        node = null;
      }
      return tip
    };

    function d3TipDirection() { return 'n' }
    function d3TipOffset() { return [0, 0] }
    function d3TipHTML() { return ' ' }

    var directionCallbacks = map({
          n:  directionNorth,
          s:  directionSouth,
          e:  directionEast,
          w:  directionWest,
          nw: directionNorthWest,
          ne: directionNorthEast,
          sw: directionSouthWest,
          se: directionSouthEast
        }),
        directions = directionCallbacks.keys();

    function directionNorth() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.n.y - node.offsetHeight,
        left: bbox.n.x - node.offsetWidth / 2
      }
    }

    function directionSouth() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.s.y,
        left: bbox.s.x - node.offsetWidth / 2
      }
    }

    function directionEast() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.e.y - node.offsetHeight / 2,
        left: bbox.e.x
      }
    }

    function directionWest() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.w.y - node.offsetHeight / 2,
        left: bbox.w.x - node.offsetWidth
      }
    }

    function directionNorthWest() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.nw.y - node.offsetHeight,
        left: bbox.nw.x - node.offsetWidth
      }
    }

    function directionNorthEast() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.ne.y - node.offsetHeight,
        left: bbox.ne.x
      }
    }

    function directionSouthWest() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.sw.y,
        left: bbox.sw.x - node.offsetWidth
      }
    }

    function directionSouthEast() {
      var bbox = getScreenBBox(this);
      return {
        top:  bbox.se.y,
        left: bbox.se.x
      }
    }

    function initNode() {
      var div = select(document.createElement('div'));
      div
        .style('position', 'absolute')
        .style('top', 0)
        .style('opacity', 0)
        .style('pointer-events', 'none')
        .style('box-sizing', 'border-box');

      return div.node()
    }

    function getSVGNode(element) {
      var svgNode = element.node();
      if (!svgNode) return null
      if (svgNode.tagName.toLowerCase() === 'svg') return svgNode
      return svgNode.ownerSVGElement
    }

    function getNodeEl() {
      if (node == null) {
        node = initNode();
        // re-add node to DOM
        rootElement.appendChild(node);
      }
      return select(node)
    }

    // Private - gets the screen coordinates of a shape
    //
    // Given a shape on the screen, will return an SVGPoint for the directions
    // n(north), s(south), e(east), w(west), ne(northeast), se(southeast),
    // nw(northwest), sw(southwest).
    //
    //    +-+-+
    //    |   |
    //    +   +
    //    |   |
    //    +-+-+
    //
    // Returns an Object {n, s, e, w, nw, sw, ne, se}
    function getScreenBBox(targetShape) {
      var targetel   = target || targetShape;

      while (targetel.getScreenCTM == null && targetel.parentNode != null) {
        targetel = targetel.parentNode;
      }

      var bbox       = {},
          matrix     = targetel.getScreenCTM(),
          tbbox      = targetel.getBBox(),
          width      = tbbox.width,
          height     = tbbox.height,
          x          = tbbox.x,
          y          = tbbox.y;

      point.x = x;
      point.y = y;
      bbox.nw = point.matrixTransform(matrix);
      point.x += width;
      bbox.ne = point.matrixTransform(matrix);
      point.y += height;
      bbox.se = point.matrixTransform(matrix);
      point.x -= width;
      bbox.sw = point.matrixTransform(matrix);
      point.y -= height / 2;
      bbox.w = point.matrixTransform(matrix);
      point.x += width;
      bbox.e = point.matrixTransform(matrix);
      point.x -= width / 2;
      point.y -= height / 2;
      bbox.n = point.matrixTransform(matrix);
      point.y += height;
      bbox.s = point.matrixTransform(matrix);

      return bbox
    }

    // Private - replace D3JS 3.X d3.functor() function
    function functor(v) {
      return typeof v === 'function' ? v : function() {
        return v
      }
    }

    return tip
  }

  const css$2 = `
.sh-chart-tip-outer {
  position: relative;
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.25));
}
.sh-chart-tip {
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 100;
  line-height: 1;
  padding: 16px 20px;
  /* background: rgba(0, 0, 0, 0.8); */
  color: #fff;
  border-radius: 6px;
}
.sh-chart-stem {
  width: 0;
  height: 0;
  position: absolute;
  bottom: -45px;
  left: 55%;
  border-style: solid;
  border-width: 48px 15px 0 0;
  transform: rotate(17deg);
  transform-origin: 100% 0;
  z-index: 2;
}
.sh-chart-tip-date {
  opacity: 0.66;
}
`;

  const style = document.createElement('style');
  style.textContent = css$2;

  const css$1 = `
${getFontCss(['roboto-100', 'roboto-400'])}
.sh-chart-bubbles text {
  font-family: Roboto, sans-serif;
	fill: white;
	pointer-events: none;
}
.sh-chart-bubbles .bubble-label {
  text-align: center;
  font-family: Roboto, Arial;
  font-weight: 400;
  line-height: 1.2;
  user-select: none;
}
.sh-chart-bubbles .bubble-value {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  user-select: none;
}
`;

  const hasSvgRotationBug = /.+ Version\/.+ Safari\/.+/.test(navigator.userAgent);

  function bubbles({
    data,
    width,
    onClick,
    withinElement,
    animationDuration = 500,
    animationOffset = 40
  }) {
    // options
    const rotateDeg = hasSvgRotationBug ? 0 : -8;
    // setup
    const values = data.map((d) => d.value);
    const min = Math.min.apply(null, values);
    const max = Math.max.apply(null, values);
    data.forEach((d, i) => {
      // specify the color of each bubble
      d.color = getColor(i, data.length);
      // make sure bubbles don't get too small visually
      // by giving them a minimum value
      d.actualCount = d.value;
      if (d.value < max / 40) {
        d.value = max / 40;
      }
    });
    // get font sizers
    const getFontSizeLabel = handleFontSizeBetween(12, 25);
    const getFontSizeAmount = handleFontSizeBetween(10, 16);
    // clear any existing chart
    clearChart(withinElement);
    // setup and render
    const svg = createSvg();
    const root = setupHierarchy();
    const bubbles = renderBubbles(svg, root);
    setupToolTips(bubbles);
    renderLabels(bubbles);
    truncateLongLabels();

    // functions only beyond this point
    function createSvg() {
      const svg = select$1(withinElement)
        .append('svg')
        .attr('width', width)
        .attr('height', width)
        .attr('class', 'sh-chart-bubbles');
      svg.append('style').text(css$1);
      return svg;
    }
    function setupHierarchy(svg) {
      const bubble = pack().size([width, width]).padding(0);
      const root = hierarchy({ children: data }).sum((d) => d.value);
      bubble(root);
      return root;
    }
    function renderBubbles(svg, root) {
      const bubbles = svg
        .selectAll('.bubble-container')
        .data(root.children)
        .enter()
        .append('g')
        .attr('class', 'bubble-container')
        .attr('transform', (d) => `translate(${d.x} ${d.y})`);
      bubbles
        .append('circle')
        .attr('class', 'bubble')
        .attr('r', (node) => node.r)
        .style('fill', (node) => node.data.color)
        // handling click
        .on('click', (node, i) => onClick(node.data, i))
        // pre-animation styles
        .style('opacity', 0)
        .style('transform', 'scale(0.80)')
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay((node, i) => animationOffset * i)
        // post-animation styles
        .style('opacity', 1)
        .style('transform', 'scale(1)');
      return bubbles;
    }
    function setupToolTips(bubbles) {
      // create new tooltip manager
      const tip = new ToolTip();
      tip
        .attr('class', 'sh-chart-tip-outer')
        .offset([-38, 0])
        .html((node, i) => {
          const color = getColor(i, values.length);
          return `
					<div class="sh-chart-tip" style="background-color: ${color}">
						${node.data.label} (${numberFormat(node.data.actualCount)})
					</div>
					<div class="sh-chart-stem" style="border-color: ${color} transparent transparent transparent"></div>
				`;
        });
      // apply tooltips to bubbles
      bubbles.on('mouseover', tip.show).on('mouseout', tip.hide).call(tip);
      return tip;
    }
    function renderLabels(bubbles) {
      bubbles
        .append('text')
        .attr('class', 'bubble-label')
        .attr('dy', '0')
        .style('text-anchor', 'middle')
        .style('font-size', getFontSizeLabel)
        .text((node) => node.data.label)
        // pre-animation styles
        .style('opacity', 0)
        .style('transform', `rotate(${rotateDeg}deg)`)
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay((node, i) => animationOffset * i)
        // post-animation styles
        .style('opacity', 1)
        .style('transform', 'rotate(0)');
      bubbles
        .append('text')
        .attr('class', 'bubble-amount')
        .attr('dy', '1.2em')
        .style('text-anchor', 'middle')
        .style('font-weight', '100')
        .style('font-size', getFontSizeAmount)
        .text((node) => numberFormat(node.data.actualCount))
        // pre-animation styles
        .style('opacity', 0)
        .style('transform', `rotate(${rotateDeg}deg)`)
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay((node, i) => animationOffset * i)
        // post-animation styles
        .style('opacity', 1)
        .style('transform', 'rotate(0)');
    }
    function truncateLongLabels() {
      const container = svg.node();
      const labels = container.querySelectorAll('.bubble-label');
      [...labels].forEach((label) => {
        const text = label.textContent;
        const ratio = circleLabelRatio(label);
        if (ratio < 0.94) {
          // require that we have at least 6 characters
          const keepChars = Math.floor(ratio * (text.length + 1)) - 1;
          if (keepChars >= 6) {
            label.textContent = text.slice(0, keepChars) + '...';
            if (keepChars >= 8 && circleLabelRatio(label) < 0.94) {
              label.textContent = text.slice(0, keepChars - 2) + '...';
            }
          } else {
            label.textContent = '';
          }
        }
      });
      const amounts = container.querySelectorAll('.bubble-amount');
      [...amounts].forEach((amount) => {
        const label = amount.previousSibling;
        if (label.textContent === '') {
          amount.textContent = '';
        }
      });
    }
    function circleLabelRatio(label) {
      const circle = label.previousSibling;
      const circleWidth = circle.getBoundingClientRect().width;
      const labelWidth = label.getBoundingClientRect().width;
      // 3% padding each side nets 0.94
      return (circleWidth * 0.94) / labelWidth;
    }
    function handleFontSizeBetween(minPx, maxPx) {
      return function (d) {
        const pxRange = maxPx - minPx;
        const dataRange = max - min;
        const ratio = pxRange / dataRange;
        const size = Math.min(maxPx, Math.round(d.value * ratio) + minPx);
        return `${size}px`;
      };
    }
  }

  var pi = Math.PI,
      tau = 2 * pi,
      epsilon = 1e-6,
      tauEpsilon = tau - epsilon;

  function Path() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
  }

  function path() {
    return new Path;
  }

  Path.prototype = path.prototype = {
    constructor: Path,
    moveTo: function(x, y) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
      if (this._x1 !== null) {
        this._x1 = this._x0, this._y1 = this._y0;
        this._ += "Z";
      }
    },
    lineTo: function(x, y) {
      this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
      this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
      this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
      var x0 = this._x1,
          y0 = this._y1,
          x21 = x2 - x1,
          y21 = y2 - y1,
          x01 = x0 - x1,
          y01 = y0 - y1,
          l01_2 = x01 * x01 + y01 * y01;

      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);

      // Is this path empty? Move to (x1,y1).
      if (this._x1 === null) {
        this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
      }

      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
      else if (!(l01_2 > epsilon));

      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
        this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
      }

      // Otherwise, draw an arc!
      else {
        var x20 = x2 - x0,
            y20 = y2 - y0,
            l21_2 = x21 * x21 + y21 * y21,
            l20_2 = x20 * x20 + y20 * y20,
            l21 = Math.sqrt(l21_2),
            l01 = Math.sqrt(l01_2),
            l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
            t01 = l / l01,
            t21 = l / l21;

        // If the start tangent is not coincident with (x0,y0), line to.
        if (Math.abs(t01 - 1) > epsilon) {
          this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
        }

        this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
      }
    },
    arc: function(x, y, r, a0, a1, ccw) {
      x = +x, y = +y, r = +r, ccw = !!ccw;
      var dx = r * Math.cos(a0),
          dy = r * Math.sin(a0),
          x0 = x + dx,
          y0 = y + dy,
          cw = 1 ^ ccw,
          da = ccw ? a0 - a1 : a1 - a0;

      // Is the radius negative? Error.
      if (r < 0) throw new Error("negative radius: " + r);

      // Is this path empty? Move to (x0,y0).
      if (this._x1 === null) {
        this._ += "M" + x0 + "," + y0;
      }

      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
        this._ += "L" + x0 + "," + y0;
      }

      // Is this arc empty? We’re done.
      if (!r) return;

      // Does the angle go the wrong way? Flip the direction.
      if (da < 0) da = da % tau + tau;

      // Is this a complete circle? Draw two arcs to complete the circle.
      if (da > tauEpsilon) {
        this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
      }

      // Is this arc non-empty? Draw an arc!
      else if (da > epsilon) {
        this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
      }
    },
    rect: function(x, y, w, h) {
      this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
    },
    toString: function() {
      return this._;
    }
  };

  function constant(x) {
    return function constant() {
      return x;
    };
  }

  function array(x) {
    return typeof x === "object" && "length" in x
      ? x // Array, TypedArray, NodeList, array-like
      : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function Linear(context) {
    this._context = context;
  }

  Linear.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._point = 0;
    },
    lineEnd: function() {
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; // proceed
        default: this._context.lineTo(x, y); break;
      }
    }
  };

  function curveLinear(context) {
    return new Linear(context);
  }

  function x(p) {
    return p[0];
  }

  function y(p) {
    return p[1];
  }

  function line(x$1, y$1) {
    var defined = constant(true),
        context = null,
        curve = curveLinear,
        output = null;

    x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant(x$1);
    y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant(y$1);

    function line(data) {
      var i,
          n = (data = array(data)).length,
          d,
          defined0 = false,
          buffer;

      if (context == null) output = curve(buffer = path());

      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) output.lineStart();
          else output.lineEnd();
        }
        if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
      }

      if (buffer) return output = null, buffer + "" || null;
    }

    line.x = function(_) {
      return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
    };

    line.y = function(_) {
      return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
    };

    line.defined = function(_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
    };

    line.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };

    line.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };

    return line;
  }

  function area(x0, y0, y1) {
    var x1 = null,
        defined = constant(true),
        context = null,
        curve = curveLinear,
        output = null;

    x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? x : constant(+x0);
    y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? constant(0) : constant(+y0);
    y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? y : constant(+y1);

    function area(data) {
      var i,
          j,
          k,
          n = (data = array(data)).length,
          d,
          defined0 = false,
          buffer,
          x0z = new Array(n),
          y0z = new Array(n);

      if (context == null) output = curve(buffer = path());

      for (i = 0; i <= n; ++i) {
        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
          if (defined0 = !defined0) {
            j = i;
            output.areaStart();
            output.lineStart();
          } else {
            output.lineEnd();
            output.lineStart();
            for (k = i - 1; k >= j; --k) {
              output.point(x0z[k], y0z[k]);
            }
            output.lineEnd();
            output.areaEnd();
          }
        }
        if (defined0) {
          x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
        }
      }

      if (buffer) return output = null, buffer + "" || null;
    }

    function arealine() {
      return line().defined(defined).curve(curve).context(context);
    }

    area.x = function(_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
    };

    area.x0 = function(_) {
      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
    };

    area.x1 = function(_) {
      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
    };

    area.y = function(_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
    };

    area.y0 = function(_) {
      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
    };

    area.y1 = function(_) {
      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
    };

    area.lineX0 =
    area.lineY0 = function() {
      return arealine().x(x0).y(y0);
    };

    area.lineY1 = function() {
      return arealine().x(x0).y(y1);
    };

    area.lineX1 = function() {
      return arealine().x(x1).y(y0);
    };

    area.defined = function(_) {
      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
    };

    area.curve = function(_) {
      return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };

    area.context = function(_) {
      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };

    return area;
  }

  function point(that, x, y) {
    that._context.bezierCurveTo(
      (2 * that._x0 + that._x1) / 3,
      (2 * that._y0 + that._y1) / 3,
      (that._x0 + 2 * that._x1) / 3,
      (that._y0 + 2 * that._y1) / 3,
      (that._x0 + 4 * that._x1 + x) / 6,
      (that._y0 + 4 * that._y1 + y) / 6
    );
  }

  function Basis(context) {
    this._context = context;
  }

  Basis.prototype = {
    areaStart: function() {
      this._line = 0;
    },
    areaEnd: function() {
      this._line = NaN;
    },
    lineStart: function() {
      this._x0 = this._x1 =
      this._y0 = this._y1 = NaN;
      this._point = 0;
    },
    lineEnd: function() {
      switch (this._point) {
        case 3: point(this, this._x1, this._y1); // proceed
        case 2: this._context.lineTo(this._x1, this._y1); break;
      }
      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
      this._line = 1 - this._line;
    },
    point: function(x, y) {
      x = +x, y = +y;
      switch (this._point) {
        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
        case 1: this._point = 2; break;
        case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
        default: point(this, x, y); break;
      }
      this._x0 = this._x1, this._x1 = x;
      this._y0 = this._y1, this._y1 = y;
    }
  };

  function curveBasis(context) {
    return new Basis(context);
  }

  function none$1(series, order) {
    if (!((n = series.length) > 1)) return;
    for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
      s0 = s1, s1 = series[order[i]];
      for (j = 0; j < m; ++j) {
        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
      }
    }
  }

  function none(series) {
    var n = series.length, o = new Array(n);
    while (--n >= 0) o[n] = n;
    return o;
  }

  function stackValue(d, key) {
    return d[key];
  }

  function stackSeries(key) {
    const series = [];
    series.key = key;
    return series;
  }

  function stack() {
    var keys = constant([]),
        order = none,
        offset = none$1,
        value = stackValue;

    function stack(data) {
      var sz = Array.from(keys.apply(this, arguments), stackSeries),
          i, n = sz.length, j = -1,
          oz;

      for (const d of data) {
        for (i = 0, ++j; i < n; ++i) {
          (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
        }
      }

      for (i = 0, oz = array(order(sz)); i < n; ++i) {
        sz[oz[i]].index = i;
      }

      offset(sz, oz);
      return sz;
    }

    stack.keys = function(_) {
      return arguments.length ? (keys = typeof _ === "function" ? _ : constant(Array.from(_)), stack) : keys;
    };

    stack.value = function(_) {
      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
    };

    stack.order = function(_) {
      return arguments.length ? (order = _ == null ? none : typeof _ === "function" ? _ : constant(Array.from(_)), stack) : order;
    };

    stack.offset = function(_) {
      return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
    };

    return stack;
  }

  function stackOffsetWiggle(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
        var si = series[order[i]],
            sij0 = si[j][1] || 0,
            sij1 = si[j - 1][1] || 0,
            s3 = (sij0 - sij1) / 2;
        for (var k = 0; k < i; ++k) {
          var sk = series[order[k]],
              skj0 = sk[j][1] || 0,
              skj1 = sk[j - 1][1] || 0;
          s3 += skj0 - skj1;
        }
        s1 += sij0, s2 += s3 * sij0;
      }
      s0[j - 1][1] += s0[j - 1][0] = y;
      if (s1) y -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    none$1(series, order);
  }

  // Determines whether or not a rectangle
  // of the given width and height
  // fits in side the given area.
  function fits(options) {

    // Internall variables.
    var x0, x1, i0, i1, j, d, top, bottom, ceiling, floor,

        // The width in pixels of the rectangle to test.
        width = options.width,

        // The height in pixels of the rectangle to test.
        height = options.height,

        // The data that defines the area to test against.
        data = options.data,

        // A boolean that indicates we're only interested
        // in a Boolean return value, not full solution details.
        justTest = options.justTest,

        // The maximum X value.
        xMax = options.xMax,

        // A function that returns the index in the data array
        // that comes before the X value passed into it.
        xIndex = options.xIndex,

        // The X value accessor.
        x = options.x,

        // The Y0 value accessor.
        y1 = options.y1,

        // The Y1 value accessor.
        y0 = options.y0;

    // Check if we can fit the rectangle at an X position
    // corresponding with one of the X values from the data.
    for(i0 = 0; i0 < data.length; i0++) {
      d = data[i0];

      // The left edge of the rectangle.
      x0 = x(d);

      // The right edge of the rectangle.
      x1 = x0 + width;

      // Don't go off the right edge of the area.
      if (x1 > xMax) {
        break;
      }
      
      // Test until we reach the rightmost X position
      // within the X positions of the data points.
      i1 = xIndex(x1);
      ceiling = -Infinity;
      floor = Infinity;
      for(j = i0; j <= i1; j++) {
        d = data[j];

        bottom = y0(d);
        if(bottom < floor) {
          floor = bottom;
        }

        top = y1(d);
        if(top > ceiling) {
          ceiling = top;
        }

        // Break as soon as we know the rectangle wil not fit.
        if ((floor - ceiling) < height) {
          break;
        }
      }

      // If the rectangle fits at the current x0 position,
      // the report that the rectangle indeed fits.
      if ((floor - ceiling) >= height) {

        // Avoid creating new objects unnecessarily while just testing.
        if (justTest) {
          return true;
        }

        // Output the full solution for use in label transform.
        return {
          x: x0,
          y: ceiling,
          width: width,
          height: height
        };
      }
    }
    return false;
  }

  // Returns a transform string that will
  // translate and scale the label to the computed position and size.
  function toTransformString() {
    return [
      'translate(' + this.xTranslate + ',' + this.yTranslate + ')',
      'scale(' + this.scale + ')'
    ].join(' ');
  }
  function areaLabel(area) {
    var x,
        y0,
        y1,
        bisectorX,
        minHeight = 2,
        epsilon = 0.01,
        maxIterations = 100,
        interpolate = true,
        interpolateResolution = 800,
        paddingLeft = 0,
        paddingRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        numIterations;

    // Gets the height of the area for a particular datum.
    function getHeight(d) {
      return y0(d) - y1(d);
    }

    // Finds the largest value that passes the test
    // within some epsilon tolerance.
    // https://en.wikipedia.org/wiki/Bisection_method#Algorithm
    function bisection(a, b, test, epsilon, maxIterations) {
      var i, c, passesTest, withinEpsilon;
      for(i = 0; i < maxIterations; i++){
        c = (a + b) / 2;
        passesTest = test(c);
        withinEpsilon = (b - a) / 2 < epsilon;

        // In our case, the returned value *must* pass the test,
        // so it's not enough only to check if the value is within epsilon.
        if ( passesTest && withinEpsilon) {
          numIterations = i;
          return c;
        }
        if (passesTest) {
          a = c;
        } else {
          b = c;
        }
      }
      return null;
    }
    
    function interpolateY(data, xValue, y) {
      var i = bisectorX(data, xValue, 0, data.length - 1),
          a = data[i - 1],
          b = data[i],
          ax = x(a),
          ay = y(a),
          bx = x(b),
          by = y(b),
          t = (xValue - ax) / (bx - ax);
      return ay * (1 - t) + by * t;
    }

    // Returns true if there is at least one rectangle
    // of the given aspect ratio and scale
    // that fits somewhere within the area.

    function my(data) {

      // The bounding box of the text label as-is.
      var box = this.getBBox();

      // Account for padding.
      var paddingFactorX = 1 + paddingLeft + paddingRight;
      var paddingFactorY = 1 + paddingTop + paddingBottom;
      var boxWidth = box.width * paddingFactorX;
      var boxHeight = box.height * paddingFactorY;

      // The aspect ratio of the text label bounding box.
      var aspect = boxWidth / boxHeight;

      // Compute maximum possible label bounding box height in pixels.
      var maxHeight = max(data, getHeight);

      // Compute the X extent once, to be reused for every height test.
      var xExtent = extent(data, x);

      // The test function for use in the bisection method.
      var options = {
        justTest: true,
        xMax: xExtent[1]
      };

      if (interpolate) {
        var interpolateResolutionScale = linear()
          .domain([0, interpolateResolution - 1])
          .range(xExtent);

        var interpolatedData = range(interpolateResolution)
          .map(function (i) {
            var xValue = interpolateResolutionScale(i);
            return {
              x: xValue,
              y0: interpolateY(data, xValue, y0),
              y1: interpolateY(data, xValue, y1)
            };
          });

        options.xIndex = function (x) {
          return Math.ceil(interpolateResolutionScale.invert(x));
        };
        options.data = interpolatedData;
        options.x = function (d) { return d.x; };
        options.y0 = function (d) { return d.y0; };
        options.y1 = function (d) { return d.y1; };
      } else {
        options.xIndex = function (x) {
          return bisectorX(data, x);
        },
        options.data = data;
        options.x = x;
        options.y0 = y0;
        options.y1 = y1;
      }

      var test = function (testHeight){
        options.height = testHeight;
        options.width = aspect * testHeight;
        return fits(options);
      };

      // Use the bisection method to find the largest height label that fits.
      var height = bisection(minHeight, maxHeight, test, epsilon, maxIterations);

      // If there's not any position that works,
      // return an object that will scale the label down to nothing,
      // and indicate that the algorithm failed.
      if (height === null) {
        return {
          failed: true,
          numIterations: maxIterations,
          scale: 0,
          xTranslate: 0,
          yTranslate: 0,
          toString: toTransformString
        };
      }

      // Get the (x, y, width, height) for the largest height label that fits.
      options.justTest = false;
      var fit = fits(options);

      // Account for padding.
      var xInner = fit.x + fit.width / paddingFactorX * paddingLeft;
      var yInner = fit.y + fit.height / paddingFactorY * paddingTop;

      // Compute the scale and translate.
      fit.scale = height / boxHeight;
      fit.xTranslate = xInner - fit.scale * box.x;
      fit.yTranslate = yInner - fit.scale * box.y;

      // Expose the toString method, which generates a transform string.
      fit.toString = toTransformString;

      // Expose how many iterations the bisection method took.
      fit.numIterations = numIterations;

      return fit;
    }

    my.x = function(_) {
      if (arguments.length) {
        x = _;
        bisectorX = bisector(x).right;
        return my;
      }
      return x;
    };

    my.y0 = function(_) {
      return arguments.length ? (y0 = _, my) : y0;
    };

    my.y1 = function(_) {
      return arguments.length ? (y1 = _, my) : y1;
    };

    my.area = function(area) {
      return my.x(area.x()).y0(area.y0()).y1(area.y1());
    };

    my.minHeight = function(_) {
      return arguments.length ? (minHeight = +_, my) : minHeight;
    };

    my.epsilon = function(_) {
      return arguments.length ? (epsilon = +_, my) : epsilon;
    };

    my.maxIterations = function(_) {
      return arguments.length ? (maxIterations = +_, my) : maxIterations;
    };

    my.interpolate = function(_) {
      return arguments.length ? (interpolate = +_, my) : interpolate;
    };

    my.interpolateResolution = function(_) {
      return arguments.length ? (interpolateResolution = +_, my) : interpolateResolution;
    };

    my.paddingLeft = function(_) {
      return arguments.length ? (paddingLeft = +_, my) : paddingLeft;
    };

    my.paddingRight = function(_) {
      return arguments.length ? (paddingRight = +_, my) : paddingRight;
    };

    my.paddingTop = function(_) {
      return arguments.length ? (paddingTop = +_, my) : paddingTop;
    };

    my.paddingBottom = function(_) {
      return arguments.length ? (paddingBottom = +_, my) : paddingBottom;
    };

    my.paddingX = function(_) {
      return my.paddingLeft(_).paddingRight(_);
    };

    my.paddingY = function(_) {
      return my.paddingTop(_).paddingBottom(_);
    };

    my.padding = function(_) {
      return my.paddingX(_).paddingY(_);
    };

    if (area) {
      my.area(area);
    }

    return my;
  }

  const css = `
${getFontCss(['roboto-100', 'roboto-400'])}
.sh-chart-stream text {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  fill: #555;
}
.sh-chart-stream .area-label {
  fill: rgba(255,255,255,0.75);
  pointer-events: none;
}
.sh-chart-stream .chart-x-axis-line,
.sh-chart-stream .chart-tick {
  fill: #595959;
}
`;

  function stream({
    width,
    height,
    series,
    withinElement,
    animationDuration = 500,
    animationOffset = 40
  }) {
    // setup constants
    const dataLabelWidth = 50;
    const sidePadding = dataLabelWidth / 2;
    const xInterval = (width - dataLabelWidth) / (series.dates.length - 1);
    const xAxisHeight = 20;
    // render
    clearChart(withinElement);
    const svg = createSvg();
    const data = formatSeriesData(series);
    const mouseAt = setupMouseAt();
    renderData();
    addXAxisTicks();
    addXAxisLine();
    addXAxisLabels();
    setupTooltips();

    // functions only beyond this point
    function formatSeriesData(series) {
      const data = [];
      data.keys = [];
      data.colors = [];
      series.items.forEach((item) => {
        item.values.forEach((value, i) => {
          if (!data[i]) {
            data[i] = { time: i };
          }
          data[i][item.label] = value;
        });
        data.keys.push(item.label);
      });
      return data;
    }

    function createSvg() {
      const svg = select$1(withinElement)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'sh-chart-stream');
      svg.append('style').text(css);
      return svg;
    }

    function setupMouseAt() {
      const mouseAt = {
        index: null,
        element: null,
        enter: function (d, i) {
          mouseAt.index = i;
          mouseAt.element = this;
        },
        leave: function () {
          mouseAt.index = null;
          mouseAt.element = null;
        }
      };
      return mouseAt;
    }

    function renderData() {
      const streamStack = stack().offset(stackOffsetWiggle);
      const xValue = (d) => d.time;
      const xScale = linear();
      const yScale = linear();

      const streamArea = area()
        .x((d) => xScale(xValue(d.data)))
        .y0((d) => yScale(d[0]))
        .y1((d) => yScale(d[1]))
        .curve(curveBasis);

      streamStack.keys(data.keys);
      const stacked = streamStack(data);
      xScale
        .domain([0, data.length - 1])
        .range([sidePadding, width - sidePadding]);

      const areaDelay = (d, i) => {
        const stepsFromMiddle = Math.abs(data.keys.length / 2 - i);
        return Math.floor(stepsFromMiddle) * animationOffset;
      };
      const labelDelay = (d, i) => {
        return areaDelay(d, i) + (animationOffset * data.keys.length) / 2;
      };

      yScale
        .domain([
          Math.min.apply(
            Math,
            stacked[0].map((d) => d[0])
          ),
          Math.max.apply(
            Math,
            stacked[stacked.length - 1].map((d) => d[1])
          )
        ])
        .range([height - xAxisHeight, 0]);

      // stacked areas
      const paths = svg.selectAll('path').data(stacked);
      paths
        .enter()
        .append('path')
        .on('mouseenter', mouseAt.enter)
        .merge(paths)
        .on('mouseleave', mouseAt.leave)
        .attr('fill', (d, i) => getColor(i, data.keys.length + 1))
        .attr('stroke', (d, i) => getColor(i, data.keys.length + 1))
        .attr('stroke-width', 0.5)
        .attr('d', streamArea)
        .style('transform-origin', '50% 50%')
        // animate these props
        .style('opacity', 0)
        .style('transform', 'scaleY(0)')
        // animation setup
        .transition()
        .duration(animationDuration)
        .delay(areaDelay)
        // post-animation styles
        .style('opacity', 1)
        .style('transform', 'scaleY(1)');

      // area labels
      const labels = svg.selectAll('.area-label').data(stacked);
      labels
        .enter()
        .append('text')
        .attr('class', 'area-label')
        .merge(labels)
        .text((d) => d.key)
        .attr('transform', areaLabel(streamArea))
        // animate these props
        .style('opacity', 0)
        // animation setup
        .transition()
        .delay(labelDelay)
        // post-animation styles
        .style('opacity', 1);
    }

    function addXAxisLabels() {
      // date labels
      const maybeDateLabel = (d, i) => {
        if (series.dates.length > width / dataLabelWidth && i % 2) {
          return '';
        }
        return d;
      };
      const dates = svg.selectAll('.date-label').data(series.dates);
      dates
        .enter()
        .append('text')
        .attr('class', 'chart-axis-label chart-x-axis-label')
        .attr('x', (d, i) => i * xInterval + sidePadding)
        .attr('y', height)
        .attr('text-anchor', 'middle')
        .text(maybeDateLabel);
    }

    function addXAxisTicks() {
      // tick marks for date labels
      const ticks = svg.selectAll('.date-tick').data(series.dates);
      ticks
        .enter()
        .append('rect')
        .attr('class', 'chart-tick')
        .attr('x', (d, i) => i * xInterval + sidePadding)
        .attr('y', height - xAxisHeight)
        .attr('width', 1)
        .attr('height', 7);
    }
    function addXAxisLine() {
      // line above labels
      svg
        .append('rect')
        .attr('class', 'chart-axis-line chart-x-axis-line')
        .attr('x', sidePadding)
        .attr('y', height - xAxisHeight)
        .attr('width', width - dataLabelWidth)
        .attr('height', 1);
    }
    function setupTooltips() {
      const tip = new ToolTip();
      svg.call(tip);
      tip.attr('class', 'sh-chart-tip-outer').html(({ label, date, amount }) => {
        const color = getColor(mouseAt.index, data.keys.length + 1);
        return `
          <div class="sh-chart-tip" style="background-color: ${color}">
           <span class="sh-chart-tip-date">${date}:</span>
           <span style="sh-chart-tip-amount">${label} (${numberFormat(
        amount
      )})</span>
          </div>
          <div class="sh-chart-stem" style="border-color: ${color} transparent transparent transparent"></div>
        `;
      });

      svg.node().addEventListener('mousemove', (evt) => {
        const item = series.items[mouseAt.index];
        const x = evt.offsetX;
        if (!item) {
          // too far up or down: hide tooltip
          tip.hide();
          return;
        }
        if (x < sidePadding || x > width - sidePadding) {
          // too far left or right: hide tooltop
          tip.hide();
          return;
        }
        const label = item.label;
        const idx = Math.round((x - sidePadding) / xInterval);
        const date = series.dates[idx];
        const amount = series.items[mouseAt.index].values[idx];
        tip.offset([0, x - width / 2]);
        tip.show({ label, date, amount }, mouseAt.element);
      });
    }
  }

  exports.barHorizontal = barHorizontal;
  exports.barVertical = barVertical;
  exports.bubbles = bubbles;
  exports.clearChart = clearChart;
  exports.stream = stream;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
