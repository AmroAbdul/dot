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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HtmlTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvelteComponent; });
/* unused harmony export SvelteComponentDev */
/* unused harmony export SvelteElement */
/* unused harmony export action_destroyer */
/* unused harmony export add_attribute */
/* unused harmony export add_classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return add_flush_callback; });
/* unused harmony export add_location */
/* unused harmony export add_render_callback */
/* unused harmony export add_resize_listener */
/* unused harmony export add_transform */
/* unused harmony export afterUpdate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return append; });
/* unused harmony export append_dev */
/* unused harmony export assign */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return attr; });
/* unused harmony export attr_dev */
/* unused harmony export beforeUpdate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return binding_callbacks; });
/* unused harmony export blank_object */
/* unused harmony export bubble */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return check_outros; });
/* unused harmony export children */
/* unused harmony export claim_component */
/* unused harmony export claim_element */
/* unused harmony export claim_space */
/* unused harmony export claim_text */
/* unused harmony export clear_loops */
/* unused harmony export component_subscribe */
/* unused harmony export compute_rest_props */
/* unused harmony export compute_slots */
/* unused harmony export createEventDispatcher */
/* unused harmony export create_animation */
/* unused harmony export create_bidirectional_transition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return create_component; });
/* unused harmony export create_in_transition */
/* unused harmony export create_out_transition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return create_slot; });
/* unused harmony export create_ssr_component */
/* unused harmony export current_component */
/* unused harmony export custom_event */
/* unused harmony export dataset_dev */
/* unused harmony export debug */
/* unused harmony export destroy_block */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return destroy_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return destroy_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return detach; });
/* unused harmony export detach_after_dev */
/* unused harmony export detach_before_dev */
/* unused harmony export detach_between_dev */
/* unused harmony export detach_dev */
/* unused harmony export dirty_components */
/* unused harmony export dispatch_dev */
/* unused harmony export each */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return element; });
/* unused harmony export element_is */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return empty; });
/* unused harmony export escape */
/* unused harmony export escaped */
/* unused harmony export exclude_internal_props */
/* unused harmony export fix_and_destroy_block */
/* unused harmony export fix_and_outro_and_destroy_block */
/* unused harmony export fix_position */
/* unused harmony export flush */
/* unused harmony export getContext */
/* unused harmony export get_binding_group_value */
/* unused harmony export get_current_component */
/* unused harmony export get_slot_changes */
/* unused harmony export get_slot_context */
/* unused harmony export get_spread_object */
/* unused harmony export get_spread_update */
/* unused harmony export get_store_value */
/* unused harmony export globals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return group_outros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return handle_promise; });
/* unused harmony export has_prop */
/* unused harmony export identity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return insert; });
/* unused harmony export insert_dev */
/* unused harmony export intros */
/* unused harmony export invalid_attribute_name_character */
/* unused harmony export is_client */
/* unused harmony export is_crossorigin */
/* unused harmony export is_empty */
/* unused harmony export is_function */
/* unused harmony export is_promise */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return listen; });
/* unused harmony export listen_dev */
/* unused harmony export loop */
/* unused harmony export loop_guard */
/* unused harmony export missing_component */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return mount_component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return noop; });
/* unused harmony export not_equal */
/* unused harmony export now */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return null_to_empty; });
/* unused harmony export object_without_properties */
/* unused harmony export onDestroy */
/* unused harmony export onMount */
/* unused harmony export once */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return outro_and_destroy_block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return prevent_default; });
/* unused harmony export prop_dev */
/* unused harmony export query_selector_all */
/* unused harmony export raf */
/* unused harmony export run */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return run_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return safe_not_equal; });
/* unused harmony export schedule_update */
/* unused harmony export select_multiple_value */
/* unused harmony export select_option */
/* unused harmony export select_options */
/* unused harmony export select_value */
/* unused harmony export self */
/* unused harmony export setContext */
/* unused harmony export set_attributes */
/* unused harmony export set_current_component */
/* unused harmony export set_custom_element_data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return set_data; });
/* unused harmony export set_data_dev */
/* unused harmony export set_input_type */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return set_input_value; });
/* unused harmony export set_now */
/* unused harmony export set_raf */
/* unused harmony export set_store_value */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return set_style; });
/* unused harmony export set_svg_attributes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return space; });
/* unused harmony export spread */
/* unused harmony export stop_propagation */
/* unused harmony export subscribe */
/* unused harmony export svg_element */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return text; });
/* unused harmony export tick */
/* unused harmony export time_ranges_to_array */
/* unused harmony export to_number */
/* unused harmony export toggle_class */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return transition_in; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return transition_out; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return update_keyed_each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return update_slot; });
/* unused harmony export validate_component */
/* unused harmony export validate_each_argument */
/* unused harmony export validate_each_keys */
/* unused harmony export validate_slots */
/* unused harmony export validate_store */
/* unused harmony export xlink_attr */
function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
        loc: { file, line, column, char }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn
        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
        : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) {
            return lets;
        }
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for (let i = 0; i < len; i += 1) {
                merged[i] = $$scope.dirty[i] | lets[i];
            }
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
        if (k[0] !== '$')
            result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
        if (!keys.has(k) && k[0] !== '$')
            rest[k] = props[k];
    return rest;
}
function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
        result[key] = true;
    }
    return result;
}
function once(fn) {
    let ran = false;
    return function (...args) {
        if (ran)
            return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value = ret) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * For testing purposes only!
 */
function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}

function append(target, node) {
    target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
        if (iterations[i])
            iterations[i].d(detaching);
    }
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, { is });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for (const k in obj) {
        if (has_prop(obj, k)
            // @ts-ignore
            && exclude.indexOf(k) === -1) {
            // @ts-ignore
            target[k] = obj[k];
        }
    }
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function prevent_default(fn) {
    return function (event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function (event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function (event) {
        // @ts-ignore
        if (event.target === this)
            fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
        if (attributes[key] == null) {
            node.removeAttribute(key);
        }
        else if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key === '__value') {
            node.value = node[key] = attributes[key];
        }
        else if (descriptors[key] && descriptors[key].set) {
            node[key] = attributes[key];
        }
        else {
            attr(node, key, attributes[key]);
        }
    }
}
function set_svg_attributes(node, attributes) {
    for (const key in attributes) {
        attr(node, key, attributes[key]);
    }
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) {
        node[prop] = value;
    }
    else {
        attr(node, prop, value);
    }
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group, __value, checked) {
    const value = new Set();
    for (let i = 0; i < group.length; i += 1) {
        if (group[i].checked)
            value.add(group[i].__value);
    }
    if (!checked) {
        value.delete(__value);
    }
    return Array.from(value);
}
function to_number(value) {
    return value === '' ? null : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for (let i = 0; i < ranges.length; i += 1) {
        array.push({ start: ranges.start(i), end: ranges.end(i) });
    }
    return array;
}
function children(element) {
    return Array.from(element.childNodes);
}
function claim_element(nodes, name, attributes, svg) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeName === name) {
            let j = 0;
            const remove = [];
            while (j < node.attributes.length) {
                const attribute = node.attributes[j++];
                if (!attributes[attribute.name]) {
                    remove.push(attribute.name);
                }
            }
            for (let k = 0; k < remove.length; k++) {
                node.removeAttribute(remove[k]);
            }
            return nodes.splice(i, 1)[0];
        }
    }
    return svg ? svg_element(name) : element(name);
}
function claim_text(nodes, data) {
    for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (node.nodeType === 3) {
            node.data = '' + data;
            return nodes.splice(i, 1)[0];
        }
    }
    return text(data);
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function set_data(text, data) {
    data = '' + data;
    if (text.wholeText !== data)
        text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_input_type(input, type) {
    try {
        input.type = type;
    }
    catch (e) {
        // do nothing
    }
}
function set_style(node, key, value, important) {
    node.style.setProperty(key, value, important ? 'important' : '');
}
function select_option(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
}
function select_options(select, value) {
    for (let i = 0; i < select.options.length; i += 1) {
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), option => option.__value);
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) {
                void window.parent.document;
            }
        }
        catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    const z_index = (parseInt(computed_style.zIndex) || 0) - 1;
    if (computed_style.position === 'static') {
        node.style.position = 'relative';
    }
    const iframe = element('iframe');
    iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
        `overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${z_index};`);
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin = is_crossorigin();
    let unsubscribe;
    if (crossorigin) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, 'message', (event) => {
            if (event.source === iframe.contentWindow)
                fn();
        });
    }
    else {
        iframe.src = 'about:blank';
        iframe.onload = () => {
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return () => {
        if (crossorigin) {
            unsubscribe();
        }
        else if (unsubscribe && iframe.contentWindow) {
            unsubscribe();
        }
        detach(iframe);
    };
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor(anchor = null) {
        this.a = anchor;
        this.e = this.n = null;
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            this.e = element(target.nodeName);
            this.t = target;
            this.h(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for (let i = 0; i < this.n.length; i += 1) {
            insert(this.t, this.n[i], anchor);
        }
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}

const active_docs = new Set();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i--)
        hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for (let p = 0; p <= 1; p += step) {
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = node.ownerDocument;
    active_docs.add(doc);
    const stylesheet = doc.__svelte_stylesheet || (doc.__svelte_stylesheet = doc.head.appendChild(element('style')).sheet);
    const current_rules = doc.__svelte_rules || (doc.__svelte_rules = {});
    if (!current_rules[name]) {
        current_rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name
        ? anim => anim.indexOf(name) < 0 // remove specific animation
        : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active)
            clear_rules();
    }
}
function clear_rules() {
    raf(() => {
        if (active)
            return;
        active_docs.forEach(doc => {
            const stylesheet = doc.__svelte_stylesheet;
            let i = stylesheet.cssRules.length;
            while (i--)
                stylesheet.deleteRule(i);
            doc.__svelte_rules = {};
        });
        active_docs.clear();
    });
}

function create_animation(node, from, fn, params) {
    if (!from)
        return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom)
        return noop;
    const { delay = 0, duration = 300, easing = identity, 
    // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay, 
    // @ts-ignore todo:
    end = start_time + duration, tick = noop, css } = fn(node, { from, to }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) {
            name = create_rule(node, 0, 1, duration, delay, easing, css);
        }
        if (!delay) {
            started = true;
        }
    }
    function stop() {
        if (css)
            delete_rule(node, name);
        running = false;
    }
    loop(now => {
        if (!started && now >= start_time) {
            started = true;
        }
        if (started && now >= end) {
            tick(1, 0);
            stop();
        }
        if (!running) {
            return false;
        }
        if (started) {
            const p = now - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick(t, 1 - t);
        }
        return true;
    });
    start();
    tick(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width, height } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error('Function called outside component initialization');
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const intros = { enabled: false };
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}

let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(() => {
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) {
        run_all(outros.c);
    }
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block))
            return;
        outroing.add(block);
        outros.c.push(() => {
            outroing.delete(block);
            if (callback) {
                if (detach)
                    block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = { duration: 0 };
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task)
            task.abort();
        running = true;
        add_render_callback(() => dispatch(node, true, 'start'));
        task = loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start() {
            if (started)
                return;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            }
            else {
                go();
            }
        },
        invalidate() {
            started = false;
        },
        end() {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        if (css)
            animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(() => dispatch(node, false, 'start'));
        loop(now => {
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) {
                        // this will result in `end()` being called,
                        // so we don't need to clean up here
                        run_all(group.c);
                    }
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) {
        wait().then(() => {
            // @ts-ignore
            config = config();
            go();
        });
    }
    else {
        go();
    }
    return {
        end(reset) {
            if (reset && config.tick) {
                config.tick(1, 0);
            }
            if (running) {
                if (animation_name)
                    delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name)
            delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) {
            pending_program = program;
        }
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b)
                tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(() => dispatch(node, b, 'start'));
            loop(now => {
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) {
                                // intro — we can tidy up immediately
                                clear_animation();
                            }
                            else {
                                // outro — needs to be coordinated
                                if (!--running_program.group.r)
                                    run_all(running_program.group.c);
                            }
                        }
                        running_program = null;
                    }
                    else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run(b) {
            if (is_function(config)) {
                wait().then(() => {
                    // @ts-ignore
                    config = config();
                    go(b);
                });
            }
            else {
                go(b);
            }
        },
        end() {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}

function handle_promise(promise, info) {
    const token = info.token = {};
    function update(type, index, key, value) {
        if (info.token !== token)
            return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) {
                info.blocks.forEach((block, i) => {
                    if (i !== index && block) {
                        group_outros();
                        transition_out(block, 1, 1, () => {
                            info.blocks[i] = null;
                        });
                        check_outros();
                    }
                });
            }
            else {
                info.block.d(1);
            }
            block.c();
            transition_in(block, 1);
            block.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block;
        if (info.blocks)
            info.blocks[index] = block;
        if (needs_flush) {
            flush();
        }
    }
    if (is_promise(promise)) {
        const current_component = get_current_component();
        promise.then(value => {
            set_current_component(current_component);
            update(info.then, 1, info.value, value);
            set_current_component(null);
        }, error => {
            set_current_component(current_component);
            update(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) {
                throw error;
            }
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update(info.pending, 0);
            return true;
        }
    }
    else {
        if (info.current !== info.then) {
            update(info.then, 1, info.value, promise);
            return true;
        }
        info.resolved = promise;
    }
}

const globals = (typeof window !== 'undefined'
    ? window
    : typeof globalThis !== 'undefined'
        ? globalThis
        : global);

function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, () => {
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while (i--)
        old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while (i--) {
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        }
        else if (dynamic) {
            block.p(child_ctx, dirty);
        }
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes)
            deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while (o && n) {
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        }
        else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        }
        else if (!lookup.has(new_key) || will_move.has(new_key)) {
            insert(new_block);
        }
        else if (did_move.has(old_key)) {
            o--;
        }
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert(new_block);
        }
        else {
            will_move.add(old_key);
            o--;
        }
    }
    while (o--) {
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key))
            destroy(old_block, lookup);
    }
    while (n)
        insert(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for (let i = 0; i < list.length; i++) {
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) {
            throw new Error('Cannot have duplicate keys in a keyed each');
        }
        keys.add(key);
    }
}

function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for (const key in o) {
                if (!(key in n))
                    to_null_out[key] = 1;
            }
            for (const key in n) {
                if (!accounted_for[key]) {
                    update[key] = n[key];
                    accounted_for[key] = 1;
                }
            }
            levels[i] = n;
        }
        else {
            for (const key in o) {
                accounted_for[key] = 1;
            }
        }
    }
    for (const key in to_null_out) {
        if (!(key in update))
            update[key] = undefined;
    }
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}

// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);

const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, classes_to_add) {
    const attributes = Object.assign({}, ...args);
    if (classes_to_add) {
        if (attributes.class == null) {
            attributes.class = classes_to_add;
        }
        else {
            attributes.class += ' ' + classes_to_add;
        }
    }
    let str = '';
    Object.keys(attributes).forEach(name => {
        if (invalid_attribute_name_character.test(name))
            return;
        const value = attributes[name];
        if (value === true)
            str += ' ' + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value)
                str += ' ' + name;
        }
        else if (value != null) {
            str += ` ${name}="${String(value).replace(/"/g, '&#34;').replace(/'/g, '&#39;')}"`;
        }
    });
    return str;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : '';
}

function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const prop_values = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, prop_values, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    };
}
class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
        callbacks.push(callback);
        return () => {
            const index = callbacks.indexOf(callback);
            if (index !== -1)
                callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}

function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.29.4' }, detail)));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', { target, node });
    append(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', { target, node, anchor });
    insert(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', { node });
    detach(node);
}
function detach_between_dev(before, after) {
    while (before.nextSibling && before.nextSibling !== after) {
        detach_dev(before.nextSibling);
    }
}
function detach_before_dev(after) {
    while (after.previousSibling) {
        detach_dev(after.previousSibling);
    }
}
function detach_after_dev(before) {
    while (before.nextSibling) {
        detach_dev(before.nextSibling);
    }
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default)
        modifiers.push('preventDefault');
    if (has_stop_propagation)
        modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
    const dispose = listen(node, event, handler, options);
    return () => {
        dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null)
        dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
    else
        dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', { node, property, value });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev('SvelteDOMSetDataset', { node, property, value });
}
function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data)
        return;
    dispatch_dev('SvelteDOMSetData', { node: text, data });
    text.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
            msg += ' You can use a spread to convert this iterable into an array.';
        }
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot)) {
        if (!~keys.indexOf(slot_key)) {
            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
        }
    }
}
class SvelteComponentDev extends SvelteComponent {
    constructor(options) {
        if (!options || (!options.target && !options.$$inline)) {
            throw new Error("'target' is a required option");
        }
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = () => {
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() { }
    $inject_state() { }
}
function loop_guard(timeout) {
    const start = Date.now();
    return () => {
        if (Date.now() - start > timeout) {
            throw new Error('Infinite loop detected');
        }
    };
}




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

// if not in a browser, assume we're in a test, return a dummy
if (typeof window === "undefined") exports.browser = {};
else exports.browser = __webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateStoredConfig; });
/* unused harmony export setStoredConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addNewUrlPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteUrlPattern; });
/* unused harmony export getOrderedSiteIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setOrderedSiteIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getSitesConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSiteConfiguration; });
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sites_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


// needs fallback https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync#Browser_compatibility
const storage = webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.sync || webextension_polyfill_ts__WEBPACK_IMPORTED_MODULE_0__["browser"].storage.local;
const getConfigKey = (siteId) => `site_${siteId}`;
function getDefaultEnabledAttribute(siteId) {
    if (_sites_configuration__WEBPACK_IMPORTED_MODULE_1__[/* Sites */ "a"][siteId] && _sites_configuration__WEBPACK_IMPORTED_MODULE_1__[/* Sites */ "a"][siteId].disabledByDefault) {
        return false;
    }
    else {
        return true;
    }
}
async function getStoredConfig(siteId) {
    const key = getConfigKey(siteId);
    const storedObject = await storage.get(key);
    if (typeof storedObject === "object" && storedObject &&
        typeof storedObject[key] === "object" && storedObject[key]) {
        const s = storedObject[key];
        const siteConfig = {
            isEnabled: typeof s.isEnabled !== "undefined" ? s.isEnabled : getDefaultEnabledAttribute(siteId),
            customName: s.customName,
            customPattern: s.customPattern,
        };
        return siteConfig;
    }
    else {
        return {
            isEnabled: getDefaultEnabledAttribute(siteId),
        };
    }
}
async function updateStoredConfig(siteId, config) {
    const oldConfig = await getStoredConfig(siteId);
    await setStoredConfig(siteId, {
        ...oldConfig,
        ...config
    });
}
async function setStoredConfig(siteId, config) {
    const newConfig = {
        [getConfigKey(siteId)]: config,
    };
    await storage.set(newConfig);
}
async function addNewUrlPattern(name, urlPattern, isEnabled = true) {
    const timestamp = Date.now();
    const siteId = encodeURIComponent(`${timestamp}_${urlPattern.url}`);
    await setStoredConfig(siteId, {
        isEnabled,
        customName: name,
        customPattern: urlPattern,
    });
    await setOrderedSiteIds([siteId].concat(await getOrderedSiteIds()));
}
;
async function deleteUrlPattern(siteId) {
    await setOrderedSiteIds((await getOrderedSiteIds()).filter(id => id !== siteId));
    await storage.remove(getConfigKey(siteId));
}
const siteIdsOrderKey = 'sites-order';
const defaultSiteIdsOrder = Object.keys(_sites_configuration__WEBPACK_IMPORTED_MODULE_1__[/* Sites */ "a"]);
async function getOrderedSiteIds() {
    const storedObject = await storage.get(siteIdsOrderKey);
    if (typeof storedObject === 'object' && storedObject && storedObject[siteIdsOrderKey] instanceof Array) {
        const storedSitesIdOrder = storedObject[siteIdsOrderKey];
        const newSites = defaultSiteIdsOrder.filter((s) => !storedSitesIdOrder.includes(s));
        if (newSites.length > 0) {
            const newOrder = storedSitesIdOrder.concat(newSites);
            await setOrderedSiteIds(newOrder);
            return newOrder;
        }
        else {
            return storedSitesIdOrder;
        }
    }
    else {
        await setOrderedSiteIds(defaultSiteIdsOrder);
        return defaultSiteIdsOrder;
    }
}
async function setOrderedSiteIds(orderedSiteIds) {
    await storage.set({
        [siteIdsOrderKey]: orderedSiteIds,
    });
}
async function getSitesConfiguration() {
    const orderedSiteIds = await getOrderedSiteIds();
    return await Promise.all(orderedSiteIds.map(async (siteId) => getSiteConfiguration(siteId)));
}
async function getSiteConfiguration(siteId) {
    const storedConfig = await getStoredConfig(siteId);
    return {
        id: siteId,
        ...storedConfig,
        defaultConfiguration: _sites_configuration__WEBPACK_IMPORTED_MODULE_1__[/* Sites */ "a"][siteId],
    };
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sites; });
const urlPattern1 = { ordered: "/", unordered: { zoom: "zoom", lat: "lat", lon: "lon" } };
const Sites = {
    openstreetmap: {
        link: "www.openstreetmap.org",
        //icon: "www.openstreetmap.org/favicon.ico", // TODO: I will need to pre-download this because otherwise I need additional security permissions in the CSP
        paramOpts: [
            { ordered: "/node/{nodeId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/node/{nodeId}" },
            { ordered: "/way/{wayId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/way/{wayId}" },
            { ordered: "/relation/{relationId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/relation/{relationId}" },
            { ordered: "/changeset/{changesetId}#map={zoom}/{lat}/{lon}" },
            { ordered: "/changeset/{changesetId}" },
            { ordered: "/user/{userName}/traces/{tracesId}" },
            { ordered: "/user/someone/traces/{tracesId}" },
            { ordered: "/user/{userName}" },
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "/", unordered: { lat: "mlat", lon: "mlon" } }
        ],
        extractors: {
            getAttributesFromPage: (window) => {
                // e.g. https://www.openstreetmap.org/edit?editor=id#map=18/-7.57646/110.94519 or http://www.openstreetmap.org/way/263290462?locale=pt#map=17/-26.30144/-48.84531
                const matches = window.location.hash.match(/#map=([0-9.]+)\/([0-9.-]+)\/([0-9.-]+)/);
                if (matches) {
                    const [, zoom, lat, lon] = matches;
                    if (zoom && lat && lon) {
                        return { zoom, lat, lon };
                    }
                }
                return {};
            }
        }
    },
    ideditor: {
        link: "www.openstreetmap.org/edit",
        paramOpts: [
            { ordered: "?editor=id#map={zoom}/{lat}/{lon}" },
            { ordered: "?editor=id&way={wayId}" },
            { ordered: "way={wayId}" },
            { ordered: "?editor=id&node={nodeId}" },
            { ordered: "node={nodeId}" },
            { ordered: "?editor=id&relation={relationId}" },
            { ordered: "relation={relationId}" },
            { ordered: "?editor=id&changeset={changesetId}" },
            { ordered: "changeset={changesetId}" },
        ],
    },
    opencyclemap: {
        link: "www.opencyclemap.org",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    hotmap: {
        link: "map.hotosm.org",
        httpOnly: true,
        paramOpts: [
            { ordered: "/#{zoom}/{lat}/{lon}" },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ],
    },
    openseamap: {
        link: "map.openseamap.org",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: openLayers_getPermalink()
        },
    },
    opensnowmap: {
        link: "www.opensnowmap.org",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    sentinelhub: {
        link: "apps.sentinel-hub.com",
        paramOpts: [
            { ordered: "/sentinel-playground/", unordered: { "lat": "lat", "lon": "lng", "zoom": "zoom" } },
            { ordered: "/eo-browser/", unordered: { "lat": "lat", "lon": "lng", "zoom": "zoom" } },
        ],
    },
    mapcompare: {
        link: "mc.bbbike.org",
        paramOpts: [
            { ordered: "/mc/", unordered: urlPattern1.unordered },
        ],
        extractors: {
            getPermalink: getPermalinkBySelector('[id*=permalink i] a'),
        },
    },
    openstreetbrowser: {
        link: "openstreetbrowser.org",
        maxZoom: 20,
        paramOpts: [
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "map={zoom}/{lat}/{lon}" },
        ],
    },
    osmcha: {
        link: 'osmcha.org',
        paramOpts: [
            { ordered: "/changesets/{changesetId}" },
            { ordered: "/?filters=%7B%22users%22:[%7B%22label%22:%22%22,%22value%22:%22{userName}%22%7D]%7D" },
        ],
    },
    pewuosmhistory: {
        link: 'pewu.github.io',
        paramOpts: [
            { ordered: '/osm-history/#/node/{nodeId}' },
            { ordered: '/osm-history/#/way/{wayId}' },
            { ordered: '/osm-history/#/relation/{relationId}' },
        ]
    },
    osmdeephistory: {
        link: "osmlab.github.io/osm-deep-history",
        paramOpts: [
            { ordered: "/#/node/{nodeId}" },
            { ordered: "/#/way/{wayId}" },
            { ordered: "/#/relation/{relationId}" }
        ]
    },
    deepdiff: {
        link: "osm.mapki.com",
        httpOnly: true,
        paramOpts: [
            { ordered: "/history/node.php", unordered: { nodeId: "id" } },
            { ordered: "/history/way.php", unordered: { wayId: "id" } },
            { ordered: "/history/relation.php", unordered: { relationId: "id" } }
        ]
    },
    osmhistoryviewer: {
        link: "osmhv.openstreetmap.de",
        paramOpts: [
            { ordered: "/changeset.jsp", unordered: { changesetId: "id" } },
            { ordered: "/blame.jsp", unordered: { relationId: "id" } }
        ],
        extractors: {
        //TODO: getValues - we can get userName if it's a changeset analysis and maybe map coordinates on both cases
        },
    },
    overpassapi: {
        link: "overpass-api.de/achavi",
        paramOpts: [
            { ordered: "/", unordered: { changesetId: "changeset", zoom: "zoom", lat: "lat", lon: "lon" } },
            { ordered: "/", unordered: { changesetId: "changeset" } }
        ],
        extractors: {
            getPermalink: openLayers_getPermalink(),
        },
    },
    howdidyoucontribute: {
        link: "hdyc.neis-one.org",
        paramOpts: [
            { ordered: "/?{userName}" }
        ],
        extractors: {
            getPermalink: getPermalinkBySelector('a[href*="//hdyc.neis-one.org/?"]'),
        },
    },
    osmchangeviz: {
        link: "resultmaps.neis-one.org",
        paramOpts: [
            { ordered: "/osm-change-viz?c={changesetId}" },
            { ordered: "/osm-change-viz.php?c={changesetId}" },
        ]
    },
    openptmap: {
        link: "www.openptmap.org",
        httpOnly: true,
        paramOpts: [urlPattern1],
        maxZoom: 17,
        extractors: {
            getPermalink: openLayers_getPermalink()
        },
    },
    opnvkarte: {
        link: "xn--pnvkarte-m4a.de",
        paramOpts: [
            { ordered: "/#{lon};{lat};{zoom}" },
            urlPattern1,
        ],
        extractors: {
            getPermalink: getPermalinkBySelector("a#editLink"),
        },
    },
    stamen: {
        link: "maps.stamen.com",
        httpOnly: true,
        paramOpts: [
            { ordered: "/#toner/{zoom}/{lat}/{lon}" },
            { ordered: "/#terrain/{zoom}/{lat}/{lon}" },
            { ordered: "/#watercolor/{zoom}/{lat}/{lon}" },
            { ordered: "/{zoom}/{lat}/{lon}" },
        ]
    },
    f4map: {
        link: "demo.f4map.com",
        paramOpts: [
            { ordered: "/#lat={lat}&lon={lon}&zoom={zoom}" } //there are other attributes that can be added if another website with 3D rendering shows up: &camera.theta=57.319&camera.phi=-2.005
        ]
    },
    osmbuildings: {
        link: "osmbuildings.org",
        paramOpts: [
            urlPattern1,
        ],
        disabledByDefault: true,
    },
    openlevelup: {
        link: "openlevelup.net",
        paramOpts: [
            { ordered: "/#{zoom}/{lat}/{lon}" },
            { ordered: "/old/", unordered: { "zoom": "z", "lat": "lat", "lon": "lon" } },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ],
    },
    indoorequal: {
        link: "indoorequal.org",
        paramOpts: [
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "map={zoom}/{lat}/{lon}" },
        ],
        zoomAdjustment: +1,
    },
    umap: {
        link: "umap.openstreetmap.fr",
        paramOpts: [
            { ordered: "/map/new/#{zoom}/{lat}/{lon}" },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ],
        extractors: {
            getAttributesFromPage: (window) => {
                const url = new URL(window.document.location.href);
                if (url) {
                    const matchArray = url.hash.match(/#([0-9.]+)\/([0-9.-]+)\/([0-9.-]+)/);
                    if (matchArray) {
                        const [, zoom, lat, lon] = matchArray;
                        if (typeof zoom === "string" && typeof lat === "string" && typeof lon === "string") {
                            return { zoom, lat, lon };
                        }
                    }
                }
                return {};
            },
        },
    },
    openstreetcam: {
        link: 'openstreetcam.org',
        paramOpts: [
            { ordered: '/map/@{lat},{lon},{zoom}z' },
            { ordered: '@{lat},{lon},{zoom}z' },
        ],
        zoomAdjustment: +1,
    },
    mapillary: {
        link: "www.mapillary.com",
        paramOpts: [
            { ordered: "/app", unordered: { zoom: "z", lat: "lat", lon: "lng" } }
        ],
        zoomAdjustment: +1,
    },
    opentopomap: {
        link: "www.opentopomap.org",
        paramOpts: [
            { ordered: "/#map={zoom}/{lat}/{lon}" },
            { ordered: "/#marker={zoom}/{lat}/{lon}" },
            { ordered: "{zoom}/{lat}/{lon}" },
        ],
    },
    historicmap: {
        link: "gk.historic.place/historische_objekte",
        paramOpts: [urlPattern1],
        maxZoom: 19,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    openinframap: {
        link: 'openinframap.org',
        paramOpts: [
            { ordered: '/#{zoom}/{lat}/{lon}' },
            { ordered: '#{zoom}/{lat}/{lon}' },
        ],
        zoomAdjustment: +1,
    },
    bingmaps: {
        link: "www.bing.com",
        paramOpts: [
            { ordered: "/maps?cp={lat}~{lon}&lvl={zoom}" },
            { ordered: "cp={lat}~{lon}&lvl={zoom}" },
        ],
        extractors: {
            getAttributesFromPage: (window) => {
                // Known bug:
                // If the user enters into bing.com/maps (i.e. without parameters) and doesn't move the
                //    map around at least once, this script won't be able to extract any information.
                if (window.history && window.history.state && window.history.state) {
                    // wrappedJSObject is a security feature from Firefox
                    const whs = window.history.state.wrappedJSObject || window.history.state;
                    if (whs && whs.state && whs.state.MapModeStateHistory) {
                        const m = whs.state.MapModeStateHistory;
                        if (m.level && typeof m.level === "number" && m.centerPoint && m.centerPoint.latitude && m.centerPoint.longitude
                            && typeof m.centerPoint.latitude === "number" && typeof m.centerPoint.longitude === "number") {
                            return {
                                lat: m.centerPoint.latitude.toString(),
                                lon: m.centerPoint.longitude.toString(),
                                zoom: m.level.toString(),
                            };
                        }
                    }
                }
                return {};
            }
        },
    },
    googlemaps: {
        link: "www.google.com",
        domainRegexp: /\.google\.(com?|cat|xxx|(com?\.)?[a-z]{2})$/,
        paramOpts: [
            { ordered: "/maps/@{lat},{lon},{zoom}z" },
            { ordered: "@{lat},{lon},{zoom}z" },
            { ordered: "/maps/search/{lat},{lon}" },
            { ordered: "@{lat},{lon}," },
        ]
    },
    waze: {
        link: "www.waze.com",
        paramOpts: [
            { ordered: "/livemap/directions?latlng={lat}%2C{lon}" },
            { ordered: "/en/livemap/directions?latlng={lat}%2C{lon}" },
            { ordered: "latlng={lat}%2C{lon}" },
            { ordered: "/editor", unordered: { lat: "lat", lon: "lon", zoom: "zoom" } },
        ],
        zoomAdjustment: +12,
        extractors: {
            getPermalink: getPermalinkBySelector("a.permalink"),
            getAttributesFromPage: (window) => {
                const latLngElement = window.document.querySelector('.wm-attribution-control__latlng');
                if (latLngElement) {
                    // works in "livemap" page i.e. https://www.waze.com/livemap/directions?latlng=52.514%2C13.429
                    const latLngText = latLngElement.textContent;
                    if (latLngText) {
                        const [lat, lon] = latLngText.split(" | ");
                        if (lat && lon)
                            return {
                                lat,
                                lon,
                                zoom: '3',
                            };
                    }
                }
                ;
                return {};
            },
        },
    },
    stravaglobal: {
        link: "www.strava.com",
        paramOpts: [
            { ordered: "/heatmap#{zoom}/{lon}/{lat}/hot/all" },
            { ordered: "#{zoom}/{lon}/{lat}" },
        ],
        disabledByDefault: true,
    },
    level0: {
        link: "level0.osmz.ru",
        httpOnly: true,
        paramOpts: [
            { ordered: "/?url=n{nodeId}" },
            { ordered: "/?url=w{wayId}!" },
            { ordered: "/?url=r{relationId}" },
            { ordered: "/?url=map={zoom}/{lat}/{lon}" },
        ],
        disabledByDefault: true,
    },
    osmrelationanalyzer: {
        link: "ra.osmsurround.org",
        httpOnly: true,
        paramOpts: [
            { ordered: "/analyzeRelation", unordered: { relationId: "relationId" } }
        ],
        extractors: {
        //TODO: getValues - we can get userName if it's a changeset analysis and maybe map coordinates on both cases
        },
    },
    osmroutemanager: {
        link: "osmrm.openstreetmap.de",
        paramOpts: [
            { ordered: "/relation.jsp", unordered: { relationId: "id" } }
        ],
        extractors: {
        //TODO: getValues - get user that change this relation for the last time
        },
        disabledByDefault: true,
    },
    osmose: {
        link: "osmose.openstreetmap.fr/map",
        paramOpts: [
            { ordered: "/#zoom={zoom}&lat={lat}&lon={lon}" },
            { ordered: "zoom={zoom}&lat={lat}&lon={lon}" },
        ],
        extractors: {
            getPermalink: getPermalinkBySelector("[class*=permalink] a"),
        },
    },
    osminspector: {
        link: "tools.geofabrik.de/osmi",
        paramOpts: [urlPattern1],
        maxZoom: 18,
        extractors: {
            getPermalink: getPermalinkBySelector("a#permalink")
        },
    },
    osmchangetiles: {
        link: "resultmaps.neis-one.org",
        paramOpts: [
            { ordered: "/osm-change-tiles#{zoom}/{lat}/{lon}" },
            { ordered: "#{zoom}/{lat}/{lon}" },
        ]
    },
    missingmaps: {
        link: "www.missingmaps.org",
        paramOpts: [
            { ordered: "/users/#/{userName}" },
            { ordered: "/users/#/{userName}/badges" },
        ],
    },
    osmlanevisualizer: {
        link: "osm.mueschelsoft.de/lanes",
        paramOpts: [
            { ordered: "/", unordered: { "relationId": "relid" } },
            { ordered: "/", unordered: { "wayId": "wayid" } },
        ],
        httpOnly: true,
        disabledByDefault: true,
    },
};
function getPermalinkBySelector(selector) {
    return function (document) {
        const permalink = document.querySelector(selector);
        return permalink && permalink.href;
    };
}
function openLayers_getPermalink() {
    return getPermalinkBySelector("[id*=Permalink] a");
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findSiteCandidates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pickWinningCandidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRelevantSites; });
/* harmony import */ var lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0__);

const naturalNumberRegExp = "[0-9]+";
const decimalNumberRegExp = "[0-9.-]+";
const positiveDecimalNumberRegExp = "[0-9.]+";
const InfoRegExp = {
    nodeId: naturalNumberRegExp,
    wayId: naturalNumberRegExp,
    relationId: naturalNumberRegExp,
    tracesId: naturalNumberRegExp,
    userName: "[^#?\/]+",
    changesetId: naturalNumberRegExp,
    zoom: positiveDecimalNumberRegExp,
    lat: decimalNumberRegExp,
    lon: decimalNumberRegExp,
    key: "[^#?\/=]+",
    value: "[^#?\/]+",
};
//TODO: should I add support for route information? (start, intermediary and end points, and maybe transport mode)
function findSiteCandidates(sitesConfiguration, url) {
    if (!url)
        return [];
    const hostname = (new URL(url).hostname);
    if (!hostname)
        return [];
    return sitesConfiguration
        .filter((site) => {
        if (site.customPattern && site.customPattern.url) {
            return site.customPattern.url.includes(hostname);
        }
        else if (site.defaultConfiguration) {
            if (site.defaultConfiguration.domainRegexp) {
                return site.defaultConfiguration.domainRegexp.test(hostname);
            }
            else {
                return site.defaultConfiguration.link.includes(hostname);
            }
        }
        else
            return false;
    })
        .map(site => site.id);
}
function pickWinningCandidate(sitesConfiguration, results, currentTabUrl) {
    if (results.length === 0) {
        return undefined;
    }
    const [head, ...tail] = results;
    let extractedAttributes = {};
    let detectedPattern;
    let site;
    if (head.siteId) {
        site = sitesConfiguration.find((site) => head.siteId === site.id);
    }
    else
        site = undefined;
    if (site) {
        if (head.permalink) {
            extractedAttributes = extractAttributesFromUrl(head.permalink, site);
        }
        if (Object.keys(extractedAttributes).length === 0) {
            extractedAttributes = extractAttributesFromUrl(currentTabUrl, site);
        }
    }
    else {
        [detectedPattern, extractedAttributes] = detectAndExtractAttributesFromUrl(head.permalink || currentTabUrl);
    }
    const allExtractedAttributes = Object.assign(extractedAttributes, head.additionalAttributes);
    if (Object.values(allExtractedAttributes).length === 0) {
        return pickWinningCandidate(sitesConfiguration, tail, currentTabUrl);
    }
    else {
        return {
            siteId: head.siteId,
            attributes: withAdjustedZoom(site, allExtractedAttributes),
            detectedPattern,
        };
    }
}
function withAdjustedZoom(config, extractedAttributes) {
    if (extractedAttributes.zoom && config && config.defaultConfiguration && config.defaultConfiguration.zoomAdjustment) {
        const nZoom = Number(extractedAttributes.zoom);
        return {
            ...extractedAttributes,
            zoom: (nZoom + config.defaultConfiguration.zoomAdjustment).toString(),
        };
    }
    else {
        return extractedAttributes;
    }
}
function getRelevantSites(sitesConfiguration, currentSiteId, retrievedAttributes) {
    return sitesConfiguration.map(function (site) {
        if (site.id == currentSiteId || !site.isEnabled)
            return undefined;
        const { id, customName } = site;
        if (site.defaultConfiguration) {
            const chosenOption = site.defaultConfiguration.paramOpts.find(function (paramOpt) {
                const [orderedParameters, unorderedParameters] = extractParametersFromParamOpt(paramOpt);
                const necessaryParameters = orderedParameters.concat(unorderedParameters);
                return necessaryParameters.every(param => retrievedAttributes[param] !== undefined);
            });
            let attributes = retrievedAttributes;
            if (retrievedAttributes.zoom) {
                attributes = { ...retrievedAttributes, zoom: reviewZoom(site.defaultConfiguration, retrievedAttributes.zoom) };
            }
            if (chosenOption) {
                const path = applyParametersToUrl(chosenOption, attributes);
                const protocol = site.defaultConfiguration.httpOnly ? 'http' : 'https';
                return {
                    id,
                    customName,
                    url: `${protocol}://${site.defaultConfiguration.link}${path}`,
                };
            }
        }
        else {
            if (site.customPattern) {
                const url = applyParametersToUrlPattern(site.customPattern, retrievedAttributes);
                if (url) {
                    return { id, customName, url };
                }
            }
        }
        return undefined;
    }).filter((s) => Boolean(s));
}
const userUrlParametersMap = {
    zoom: 'zoom', latitude: 'lat', longitude: 'lon', osm_changeset_id: 'changesetId', osm_user_name: 'userName',
    osm_tag_key: 'key', osm_tag_value: 'value', osm_node_id: 'nodeId', osm_way_id: 'wayId', osm_relation_id: 'relationId',
};
function applyParametersToUrlPattern(urlPattern, retrievedAttributes) {
    const { zoom, lat, lon } = retrievedAttributes;
    if (urlPattern.tag === 'user-v1') {
        let { url } = urlPattern;
        const parameters = extractBracetParameters(url.toLowerCase());
        const hasNecessaryParameters = parameters.every(key => userUrlParametersMap[key] in retrievedAttributes);
        if (!hasNecessaryParameters)
            return undefined;
        parameters.forEach(function (key) {
            url = url.replace('{' + key + '}', retrievedAttributes[userUrlParametersMap[key]]);
        });
        return url;
    }
    else if (!zoom || !lat || !lon) {
        return undefined;
    }
    const urlObj = new URL(urlPattern.url);
    if (urlPattern.tag === 'hash-2') {
        const matchArray = urlObj.hash.match(/(#[a-z=]*)([0-9.]+)(\/)([0-9.-]+)(\/)([0-9.-]+)(.*)/);
        if (!matchArray)
            return undefined;
        const [, prefix, /*zoom*/ , separator1, /*lat*/ , separator2, /*lon*/ , suffix] = matchArray;
        urlObj.hash = `${prefix}${retrievedAttributes.zoom}${separator1}${retrievedAttributes.lat}${separator2}${retrievedAttributes.lon}${suffix}`;
        return urlObj.toString();
    }
    else if (urlPattern.tag === 'qs') {
        Object.entries(urlPattern.querystringSubst).forEach(([osmAttribute, querystringParameter]) => {
            urlObj.searchParams.set(querystringParameter, retrievedAttributes[osmAttribute]);
        });
        return urlObj.toString();
    }
    else if (urlPattern.tag === 'hash-1') {
        const auxUrl = new URL(urlObj.toString());
        auxUrl.search = '?' + auxUrl.hash.substring(1);
        Object.entries(urlPattern.hashParametersSubst).forEach(([osmAttribute, hashParameter]) => {
            auxUrl.searchParams.set(hashParameter, retrievedAttributes[osmAttribute]);
        });
        urlObj.hash = '#' + auxUrl.search.substring(1);
        return urlObj.toString();
    }
    const _exhaustivenessCheck = urlPattern;
    return _exhaustivenessCheck;
}
function detectAndExtractAttributesFromUrl(url) {
    const urlObj = new URL(url);
    const osmLikePatternExtraction = extractOsmPatternExtraction(urlObj);
    if (osmLikePatternExtraction) {
        const osmLikePattern = {
            tag: 'hash-2',
            url: url,
        };
        return [osmLikePattern, osmLikePatternExtraction];
    }
    let { zoom, lat, lon } = {};
    const sp = urlObj.searchParams;
    if ((sp.has(zoom = 'zoom') || sp.has(zoom = 'z')) &&
        (sp.has(lat = 'lat') || sp.has(lat = 'y')) &&
        (sp.has(lon = 'lon') || sp.has(lon = 'lng') || sp.has(lon = 'x'))) {
        const qsPattern = {
            tag: 'qs',
            querystringSubst: { zoom, lat, lon },
            url,
        };
        return [qsPattern, extractAttributesFromUrlPattern(urlObj, qsPattern)];
    }
    const auxUrl = new URL(urlObj.toString());
    auxUrl.search = '?' + auxUrl.hash.substring(1);
    const auxSp = auxUrl.searchParams;
    if ((auxSp.has(zoom = 'zoom') || auxSp.has(zoom = 'z')) &&
        (auxSp.has(lat = 'lat') || auxSp.has(lat = 'y')) &&
        (auxSp.has(lon = 'lon') || auxSp.has(lon = 'lng') || auxSp.has(lon = 'x'))) {
        const hashPattern = {
            tag: 'hash-1',
            hashParametersSubst: { zoom, lat, lon },
            url,
        };
        return [hashPattern, extractAttributesFromUrlPattern(urlObj, hashPattern)];
    }
    return [, {}];
}
function extractAttributesFromUrlPattern(url, urlPattern) {
    if (urlPattern.tag === 'hash-2') {
        const attributes = extractOsmPatternExtraction(url);
        return attributes || {};
    }
    else if (urlPattern.tag === 'qs') {
        const zoom = url.searchParams.get(urlPattern.querystringSubst.zoom);
        const lat = url.searchParams.get(urlPattern.querystringSubst.lat);
        const lon = url.searchParams.get(urlPattern.querystringSubst.lon);
        if (zoom && lat && lon) {
            return { zoom, lat, lon };
        }
        else
            return {};
    }
    else if (urlPattern.tag === 'hash-1') {
        const auxUrl = new URL(url.toString());
        auxUrl.search = '?' + auxUrl.hash.substring(1);
        const zoom = auxUrl.searchParams.get(urlPattern.hashParametersSubst.zoom);
        const lat = auxUrl.searchParams.get(urlPattern.hashParametersSubst.lat);
        const lon = auxUrl.searchParams.get(urlPattern.hashParametersSubst.lon);
        if (zoom && lat && lon) {
            return { zoom, lat, lon };
        }
        else
            return {};
    }
    else if (urlPattern.tag === 'user-v1') {
        const parameters = extractBracetParameters(urlPattern.url);
        let wipRegexp = lodash_escaperegexp__WEBPACK_IMPORTED_MODULE_0___default()(urlPattern.url);
        parameters.forEach((parameter) => {
            const targetRegexp = InfoRegExp[userUrlParametersMap[parameter]];
            wipRegexp = wipRegexp.replace(`\\{${parameter}\\}`, `(${targetRegexp})`);
        });
        const regexp = new RegExp(wipRegexp);
        const match = regexp.exec(url.toString());
        if (match) {
            const extractedAttributes = {};
            parameters.forEach(function (parameter, index) {
                extractedAttributes[userUrlParametersMap[parameter]] = match[index + 1];
            });
            return extractedAttributes;
        }
        return {};
    }
    const _exhaustivenessCheck = urlPattern;
    return _exhaustivenessCheck;
}
function extractAttributesFromUrl(url, siteConfig) {
    if (siteConfig.customPattern) {
        return extractAttributesFromUrlPattern(new URL(url), siteConfig.customPattern);
    }
    else if (siteConfig.defaultConfiguration) {
        const config = siteConfig.defaultConfiguration;
        for (let i = 0; i < config.paramOpts.length; i++) {
            let extractedAttributes = {};
            const [orderedParameters] = extractParametersFromParamOpt(config.paramOpts[i]);
            let partialUrl = config.paramOpts[i].ordered;
            partialUrl = partialUrl.replace(/([.?^$])/g, '\\$1'); // escape regex special characters TODO: add more and review location in code
            orderedParameters.forEach(function (parameter) {
                partialUrl = partialUrl.replace(`{${parameter}}`, `(${InfoRegExp[parameter]})`);
            });
            const orderedPartRegExp = new RegExp(partialUrl);
            const orderedMatch = orderedPartRegExp.exec(url);
            if (orderedMatch) {
                const unorderedParametersMap = config.paramOpts[i].unordered || {};
                const matchesUnordered = Object.entries(unorderedParametersMap).every(function ([key, value]) {
                    const unorderedPartXRegExp = new RegExp(`${value}=(${InfoRegExp[key]})`);
                    const unorderedMatch = unorderedPartXRegExp.exec(url);
                    if (!unorderedMatch) {
                        return false;
                    }
                    else {
                        extractedAttributes[key] = unorderedMatch[1];
                        return true;
                    }
                });
                if (matchesUnordered) {
                    orderedParameters.forEach(function (orderedParameter, index) {
                        extractedAttributes[orderedParameter] = orderedMatch[index + 1];
                    });
                    return extractedAttributes;
                }
                else {
                    extractedAttributes = {};
                }
            }
        }
    }
    return {};
}
function extractOsmPatternExtraction(url) {
    const matchArray = url.hash.match(/#[a-z=]*([0-9.]+)\/([0-9.-]+)\/([0-9.-]+)/);
    if (matchArray) {
        const [, zoom, lat, lon] = matchArray;
        if (zoom && lat && lon) {
            return { zoom, lat, lon };
        }
    }
    return undefined;
}
function extractParametersFromParamOpt(paramOpt) {
    return [
        extractBracetParameters(paramOpt.ordered),
        paramOpt.unordered ? Object.keys(paramOpt.unordered) : [],
    ];
}
function extractBracetParameters(s) {
    const fieldGetterRegExp = /\{([^\}]+)\}/g;
    const parametersFound = [];
    let match;
    while (match = fieldGetterRegExp.exec(s)) {
        const attributeNameWithoutBraces = match[1];
        parametersFound.push(attributeNameWithoutBraces);
    }
    return parametersFound;
}
/* gets an "interpolable" string and applies the parameters from an object into it, returning a new string */
function applyParametersToUrl(option, retrievedAttributes) {
    let url = option.ordered;
    const encodedAttributes = {};
    Object.keys(retrievedAttributes).forEach(function (key) {
        encodedAttributes[key] = encodeURIComponent(retrievedAttributes[key]);
        url = url.replace('{' + key + '}', encodedAttributes[key]);
    });
    if (option.unordered) {
        const urlQueryParameters = Object.entries(option.unordered).map(function ([key, value]) {
            return value + '=' + encodedAttributes[key];
        });
        url += '?' + urlQueryParameters.join('&'); // TODO: be mindful of whether there is an '?' or '#' already
    }
    return url;
}
function reviewZoom(site, zoom) {
    if (site) {
        const { maxZoom, zoomAdjustment } = site;
        let nZoom = Number(zoom);
        if (zoomAdjustment) {
            nZoom = nZoom - zoomAdjustment;
        }
        if (maxZoom) {
            nZoom = Math.min(nZoom, maxZoom);
        }
        return nZoom.toString();
    }
    else {
        return zoom;
    }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.7.0 - Tue Nov 10 2020 20:24:04 */

  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */

  /* vim: set sts=2 sw=2 et tw=80: */

  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (typeof browser === "undefined" || Object.getPrototypeOf(browser) !== Object.prototype) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
    const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.

    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };

      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }
      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */


      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }

        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }

          return super.get(key);
        }

      }
      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */


      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };
      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.rejection
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function}
       *        The generated callback function.
       */


      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(extensionAPIs.runtime.lastError);
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };

      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";
      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxResolvedArgs
       *        The maximum number of arguments which may be passed to the
       *        callback created by the wrapped async function.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */


      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }

          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }

          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args); // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.

                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };
      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */


      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }

        });
      };

      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */

      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },

          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }

            if (!(prop in target)) {
              return undefined;
            }

            let value = target[prop];

            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.
              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,

                get() {
                  return target[prop];
                },

                set(value) {
                  target[prop] = value;
                }

              });
              return value;
            }

            cache[prop] = value;
            return value;
          },

          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }

            return true;
          },

          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },

          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }

        }; // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.

        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };
      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */


      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },

        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },

        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }

      }); // Keep track if the deprecation warning has been logged at least once.


      let loggedSendResponseDeprecationWarning = false;
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }
        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */


        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              if (!loggedSendResponseDeprecationWarning) {
                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);
                loggedSendResponseDeprecationWarning = true;
              }

              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;

          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }

          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.

          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          } // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).


          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;

              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }

              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          }; // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.


          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          } // Let Chrome know that the listener is replying.


          return true;
        };
      });

      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(extensionAPIs.runtime.lastError);
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };

      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };

      const staticWrappers = {
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id) {
      throw new Error("This script should only be loaded in a browser extension.");
    } // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.


    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/webextension-polyfill-ts/lib/index.js
var lib = __webpack_require__(1);

// CONCATENATED MODULE: ./src/popup/utils.ts

var KnownError;
(function (KnownError) {
    KnownError["NO_ACCESS"] = "noAccess";
    KnownError["INCOMPATIBLE_WEBSITE"] = "incompatibleWebsite";
    KnownError["NO_INFORMATION_EXTRACTED"] = "noInformationExtracted";
})(KnownError || (KnownError = {}));
function openLink(url) {
    lib["browser"].tabs.create({ url });
}

// EXTERNAL MODULE: ./src/popup/sites-manipulation-helper.ts
var sites_manipulation_helper = __webpack_require__(4);

// EXTERNAL MODULE: ./src/storage/config-handler.ts
var config_handler = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/svelte/internal/index.mjs
var internal = __webpack_require__(0);

// CONCATENATED MODULE: ./src/popup/components/ConfigurationLink.svelte
/* src/popup/components/ConfigurationLink.svelte generated by Svelte v3.29.4 */




function add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-14446mp-style";
	style.textContent = "span.svelte-14446mp{text-transform:lowercase;text-align:var(--i18n-align);display:block;cursor:pointer;font-size:smaller;background-color:#f0f0f0}";
	Object(internal["c" /* append */])(document.head, style);
}

function create_fragment(ctx) {
	let span;
	let t_value = lib["browser"].i18n.getMessage("configurationLink") + "";
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			span = Object(internal["m" /* element */])("span");
			t = Object(internal["E" /* text */])(t_value);
			Object(internal["d" /* attr */])(span, "role", "link");
			Object(internal["C" /* set_style */])(span, "--i18n-align", lib["browser"].i18n.getMessage("@@bidi_end_edge"));
			Object(internal["d" /* attr */])(span, "class", "svelte-14446mp");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, span, anchor);
			Object(internal["c" /* append */])(span, t);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(span, "click", /*click_handler*/ ctx[0]);
				mounted = true;
			}
		},
		p: internal["u" /* noop */],
		i: internal["u" /* noop */],
		o: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(span);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self) {
	const click_handler = () => lib["browser"].runtime.openOptionsPage();
	return [click_handler];
}

class ConfigurationLink_svelte_ConfigurationLink extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-14446mp-style")) add_css();
		Object(internal["q" /* init */])(this, options, instance, create_fragment, internal["z" /* safe_not_equal */], {});
	}
}

/* harmony default export */ var ConfigurationLink_svelte = (ConfigurationLink_svelte_ConfigurationLink);
// CONCATENATED MODULE: ./src/popup/components/InfoBox.svelte
/* src/popup/components/InfoBox.svelte generated by Svelte v3.29.4 */


function InfoBox_svelte_add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-urlwtp-style";
	style.textContent = "#info.svelte-urlwtp{text-align:center;padding:4px;min-width:200px;max-width:600px;white-space:pre-line}#info.svelte-urlwtp{border-bottom:1px solid lightgray}#info.svelte-urlwtp:only-child{border-bottom:none}";
	Object(internal["c" /* append */])(document.head, style);
}

function InfoBox_svelte_create_fragment(ctx) {
	let div;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = Object(internal["i" /* create_slot */])(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	return {
		c() {
			div = Object(internal["m" /* element */])("div");
			if (default_slot) default_slot.c();
			Object(internal["d" /* attr */])(div, "id", "info");
			Object(internal["d" /* attr */])(div, "class", "svelte-urlwtp");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					Object(internal["I" /* update_slot */])(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(default_slot, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(div);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function InfoBox_svelte_instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	return [$$scope, slots];
}

class InfoBox_svelte_InfoBox extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-urlwtp-style")) InfoBox_svelte_add_css();
		Object(internal["q" /* init */])(this, options, InfoBox_svelte_instance, InfoBox_svelte_create_fragment, internal["z" /* safe_not_equal */], {});
	}
}

/* harmony default export */ var InfoBox_svelte = (InfoBox_svelte_InfoBox);
// CONCATENATED MODULE: ./src/popup/components/BasicLinkCreationDialog.svelte
/* src/popup/components/BasicLinkCreationDialog.svelte generated by Svelte v3.29.4 */







function BasicLinkCreationDialog_svelte_add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-1770ie3-style";
	style.textContent = "button.svelte-1770ie3{display:block;margin:4px auto}";
	Object(internal["c" /* append */])(document.head, style);
}

// (22:0) {#if customUserOption}
function create_if_block(ctx) {
	let infobox;
	let current;

	infobox = new InfoBox_svelte({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(internal["h" /* create_component */])(infobox.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(infobox, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const infobox_changes = {};

			if (dirty & /*$$scope, optionCreated, customUserOption*/ 11) {
				infobox_changes.$$scope = { dirty, ctx };
			}

			infobox.$set(infobox_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(infobox.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(infobox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(infobox, detaching);
		}
	};
}

// (29:4) {:else}
function create_else_block(ctx) {
	let t_value = lib["browser"].i18n.getMessage("newOptionDetected_added", /*customUserOption*/ ctx[0] && /*customUserOption*/ ctx[0].defaultName) + "";
	let t;

	return {
		c() {
			t = Object(internal["E" /* text */])(t_value);
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, t, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*customUserOption*/ 1 && t_value !== (t_value = lib["browser"].i18n.getMessage("newOptionDetected_added", /*customUserOption*/ ctx[0] && /*customUserOption*/ ctx[0].defaultName) + "")) Object(internal["A" /* set_data */])(t, t_value);
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(t);
		}
	};
}

// (24:4) {#if !optionCreated}
function create_if_block_1(ctx) {
	let t0_value = lib["browser"].i18n.getMessage("newOptionDetected_notice") + "";
	let t0;
	let t1;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			t0 = Object(internal["E" /* text */])(t0_value);
			t1 = Object(internal["D" /* space */])();
			button = Object(internal["m" /* element */])("button");
			button.textContent = `${lib["browser"].i18n.getMessage("newOptionDetected_buttonText")}`;
			Object(internal["d" /* attr */])(button, "class", "svelte-1770ie3");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, t0, anchor);
			Object(internal["r" /* insert */])(target, t1, anchor);
			Object(internal["r" /* insert */])(target, button, anchor);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(button, "click", /*buttonClick*/ ctx[2]);
				mounted = true;
			}
		},
		p: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(t0);
			if (detaching) Object(internal["l" /* detach */])(t1);
			if (detaching) Object(internal["l" /* detach */])(button);
			mounted = false;
			dispose();
		}
	};
}

// (23:2) <InfoBox>
function create_default_slot(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (!/*optionCreated*/ ctx[1]) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = Object(internal["n" /* empty */])();
		},
		m(target, anchor) {
			if_block.m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d(detaching) {
			if_block.d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block_anchor);
		}
	};
}

function BasicLinkCreationDialog_svelte_create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*customUserOption*/ ctx[0] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = Object(internal["n" /* empty */])();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*customUserOption*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*customUserOption*/ 1) {
						Object(internal["F" /* transition_in */])(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					Object(internal["F" /* transition_in */])(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				Object(internal["o" /* group_outros */])();

				Object(internal["G" /* transition_out */])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(internal["g" /* check_outros */])();
			}
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(if_block);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block_anchor);
		}
	};
}

function BasicLinkCreationDialog_svelte_instance($$self, $$props, $$invalidate) {
	let { customUserOption } = $$props;
	let optionCreated = false;

	async function buttonClick() {
		if (customUserOption) {
			await Object(config_handler["a" /* addNewUrlPattern */])(customUserOption.defaultName, customUserOption.urlPattern);
			$$invalidate(1, optionCreated = true);
		}
	}

	$$self.$$set = $$props => {
		if ("customUserOption" in $$props) $$invalidate(0, customUserOption = $$props.customUserOption);
	};

	return [customUserOption, optionCreated, buttonClick];
}

class BasicLinkCreationDialog_svelte_BasicLinkCreationDialog extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1770ie3-style")) BasicLinkCreationDialog_svelte_add_css();
		Object(internal["q" /* init */])(this, options, BasicLinkCreationDialog_svelte_instance, BasicLinkCreationDialog_svelte_create_fragment, internal["z" /* safe_not_equal */], { customUserOption: 0 });
	}
}

/* harmony default export */ var BasicLinkCreationDialog_svelte = (BasicLinkCreationDialog_svelte_BasicLinkCreationDialog);
// CONCATENATED MODULE: ./src/popup/components/LinkList.svelte
/* src/popup/components/LinkList.svelte generated by Svelte v3.29.4 */







function LinkList_svelte_add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-1nnzmr-style";
	style.textContent = ".site.svelte-1nnzmr{padding:4px 16px;display:block;white-space:nowrap;text-decoration:inherit;color:inherit}.site.svelte-1nnzmr:hover{background-color:rgba(51, 7, 7, 0.08)}.site.svelte-1nnzmr:active{background-color:rgba(0, 0, 0, 0.1)}";
	Object(internal["c" /* append */])(document.head, style);
}

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	return child_ctx;
}

// (30:0) {:else}
function LinkList_svelte_create_else_block(ctx) {
	let infobox;
	let current;

	infobox = new InfoBox_svelte({
			props: {
				$$slots: { default: [LinkList_svelte_create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(internal["h" /* create_component */])(infobox.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(infobox, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const infobox_changes = {};

			if (dirty & /*$$scope*/ 32) {
				infobox_changes.$$scope = { dirty, ctx };
			}

			infobox.$set(infobox_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(infobox.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(infobox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(infobox, detaching);
		}
	};
}

// (31:2) <InfoBox>
function LinkList_svelte_create_default_slot(ctx) {
	let t_value = lib["browser"].i18n.getMessage("noEnabledCompatibleLinksFound") + "";
	let t;

	return {
		c() {
			t = Object(internal["E" /* text */])(t_value);
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, t, anchor);
		},
		p: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(t);
		}
	};
}

// (26:0) {#each siteLinks as site}
function create_each_block(ctx) {
	let a;
	let t0_value = (/*site*/ ctx[2].customName || lib["browser"].i18n.getMessage(`site_${/*site*/ ctx[2].id}`) || "???") + "";
	let t0;
	let t1;
	let a_id_value;
	let a_href_value;
	let mounted;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[1](/*site*/ ctx[2], ...args);
	}

	return {
		c() {
			a = Object(internal["m" /* element */])("a");
			t0 = Object(internal["E" /* text */])(t0_value);
			t1 = Object(internal["D" /* space */])();
			Object(internal["d" /* attr */])(a, "id", a_id_value = /*site*/ ctx[2].id);
			Object(internal["d" /* attr */])(a, "href", a_href_value = /*site*/ ctx[2].url);
			Object(internal["d" /* attr */])(a, "class", "site svelte-1nnzmr");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, a, anchor);
			Object(internal["c" /* append */])(a, t0);
			Object(internal["c" /* append */])(a, t1);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(a, "click", Object(internal["x" /* prevent_default */])(click_handler));
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*siteLinks*/ 1 && t0_value !== (t0_value = (/*site*/ ctx[2].customName || lib["browser"].i18n.getMessage(`site_${/*site*/ ctx[2].id}`) || "???") + "")) Object(internal["A" /* set_data */])(t0, t0_value);

			if (dirty & /*siteLinks*/ 1 && a_id_value !== (a_id_value = /*site*/ ctx[2].id)) {
				Object(internal["d" /* attr */])(a, "id", a_id_value);
			}

			if (dirty & /*siteLinks*/ 1 && a_href_value !== (a_href_value = /*site*/ ctx[2].url)) {
				Object(internal["d" /* attr */])(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(a);
			mounted = false;
			dispose();
		}
	};
}

function LinkList_svelte_create_fragment(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*siteLinks*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let each_1_else = null;

	if (!each_value.length) {
		each_1_else = LinkList_svelte_create_else_block(ctx);
	}

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = Object(internal["n" /* empty */])();

			if (each_1_else) {
				each_1_else.c();
			}
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			Object(internal["r" /* insert */])(target, each_1_anchor, anchor);

			if (each_1_else) {
				each_1_else.m(target, anchor);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*siteLinks, openLink, browser*/ 1) {
				each_value = /*siteLinks*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;

				if (!each_value.length && each_1_else) {
					each_1_else.p(ctx, dirty);
				} else if (!each_value.length) {
					each_1_else = LinkList_svelte_create_else_block(ctx);
					each_1_else.c();
					Object(internal["F" /* transition_in */])(each_1_else, 1);
					each_1_else.m(each_1_anchor.parentNode, each_1_anchor);
				} else if (each_1_else) {
					Object(internal["o" /* group_outros */])();

					Object(internal["G" /* transition_out */])(each_1_else, 1, 1, () => {
						each_1_else = null;
					});

					Object(internal["g" /* check_outros */])();
				}
			}
		},
		i: internal["u" /* noop */],
		o: internal["u" /* noop */],
		d(detaching) {
			Object(internal["k" /* destroy_each */])(each_blocks, detaching);
			if (detaching) Object(internal["l" /* detach */])(each_1_anchor);
			if (each_1_else) each_1_else.d(detaching);
		}
	};
}

function LinkList_svelte_instance($$self, $$props, $$invalidate) {
	let { siteLinks } = $$props;
	const click_handler = site => openLink(site.url);

	$$self.$$set = $$props => {
		if ("siteLinks" in $$props) $$invalidate(0, siteLinks = $$props.siteLinks);
	};

	return [siteLinks, click_handler];
}

class LinkList_svelte_LinkList extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-1nnzmr-style")) LinkList_svelte_add_css();
		Object(internal["q" /* init */])(this, options, LinkList_svelte_instance, LinkList_svelte_create_fragment, internal["z" /* safe_not_equal */], { siteLinks: 0 });
	}
}

/* harmony default export */ var LinkList_svelte = (LinkList_svelte_LinkList);
// CONCATENATED MODULE: ./src/popup/components/ErrorMessage.svelte
/* src/popup/components/ErrorMessage.svelte generated by Svelte v3.29.4 */






function ErrorMessage_svelte_create_default_slot(ctx) {
	let t0_value = /*errorMessage*/ ctx[0].firstPart + "";
	let t0;
	let t1;
	let a;
	let t2_value = /*errorMessage*/ ctx[0].linkText + "";
	let t2;
	let a_href_value;
	let t3;
	let t4_value = /*errorMessage*/ ctx[0].lastPart + "";
	let t4;
	let mounted;
	let dispose;

	return {
		c() {
			t0 = Object(internal["E" /* text */])(t0_value);
			t1 = Object(internal["D" /* space */])();
			a = Object(internal["m" /* element */])("a");
			t2 = Object(internal["E" /* text */])(t2_value);
			t3 = Object(internal["D" /* space */])();
			t4 = Object(internal["E" /* text */])(t4_value);
			Object(internal["d" /* attr */])(a, "href", a_href_value = /*errorMessage*/ ctx[0].linkHref);
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, t0, anchor);
			Object(internal["r" /* insert */])(target, t1, anchor);
			Object(internal["r" /* insert */])(target, a, anchor);
			Object(internal["c" /* append */])(a, t2);
			Object(internal["r" /* insert */])(target, t3, anchor);
			Object(internal["r" /* insert */])(target, t4, anchor);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(a, "click", Object(internal["x" /* prevent_default */])(/*click_handler*/ ctx[2]));
				mounted = true;
			}
		},
		p: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(t0);
			if (detaching) Object(internal["l" /* detach */])(t1);
			if (detaching) Object(internal["l" /* detach */])(a);
			if (detaching) Object(internal["l" /* detach */])(t3);
			if (detaching) Object(internal["l" /* detach */])(t4);
			mounted = false;
			dispose();
		}
	};
}

function ErrorMessage_svelte_create_fragment(ctx) {
	let infobox;
	let current;

	infobox = new InfoBox_svelte({
			props: {
				$$slots: { default: [ErrorMessage_svelte_create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(internal["h" /* create_component */])(infobox.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(infobox, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const infobox_changes = {};

			if (dirty & /*$$scope*/ 64) {
				infobox_changes.$$scope = { dirty, ctx };
			}

			infobox.$set(infobox_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(infobox.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(infobox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(infobox, detaching);
		}
	};
}

const linkPlaceholder = "__LINK__";
const linkText = "jgpacker/osm-smart-menu";

function ErrorMessage_svelte_instance($$self, $$props, $$invalidate) {
	let { error } = $$props;
	const text = lib["browser"].i18n.getMessage(`error_${error}`, linkPlaceholder);
	const [firstPart, lastPart] = text.split(linkPlaceholder);

	const errorMessage = {
		firstPart,
		linkText,
		linkHref: `https://github.com/${linkText}/blob/master/README.md#osm-smart-menu`,
		lastPart
	};

	const click_handler = () => openLink(errorMessage.linkHref);

	$$self.$$set = $$props => {
		if ("error" in $$props) $$invalidate(1, error = $$props.error);
	};

	return [errorMessage, error, click_handler];
}

class ErrorMessage_svelte_ErrorMessage extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		Object(internal["q" /* init */])(this, options, ErrorMessage_svelte_instance, ErrorMessage_svelte_create_fragment, internal["z" /* safe_not_equal */], { error: 1 });
	}
}

/* harmony default export */ var ErrorMessage_svelte = (ErrorMessage_svelte_ErrorMessage);
// CONCATENATED MODULE: ./src/popup/components/ShowEnabledLinksButton.svelte
/* src/popup/components/ShowEnabledLinksButton.svelte generated by Svelte v3.29.4 */






function ShowEnabledLinksButton_svelte_add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-zefv67-style";
	style.textContent = "button.svelte-zefv67{margin:5px auto;display:block;max-width:250px;text-align:center}div#fix-button-margin.svelte-zefv67{padding:0 5px}";
	Object(internal["c" /* append */])(document.head, style);
}

// (65:0) {#if restOfEnabledLinks.size > 0}
function ShowEnabledLinksButton_svelte_create_if_block(ctx) {
	let t;
	let current_block_type_index;
	let if_block1;
	let if_block1_anchor;
	let current;
	let if_block0 = /*currentlyShownLinks*/ ctx[2].length > 0 && create_if_block_2(ctx);
	const if_block_creators = [ShowEnabledLinksButton_svelte_create_if_block_1, ShowEnabledLinksButton_svelte_create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*enabledLinks*/ ctx[4]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if (if_block0) if_block0.c();
			t = Object(internal["D" /* space */])();
			if_block1.c();
			if_block1_anchor = Object(internal["n" /* empty */])();
		},
		m(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			Object(internal["r" /* insert */])(target, t, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block1_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			if (/*currentlyShownLinks*/ ctx[2].length > 0) {
				if (if_block0) {
					
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(t.parentNode, t);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(internal["o" /* group_outros */])();

				Object(internal["G" /* transition_out */])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(internal["g" /* check_outros */])();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				}

				Object(internal["F" /* transition_in */])(if_block1, 1);
				if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
			}
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(if_block1);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(if_block1);
			current = false;
		},
		d(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) Object(internal["l" /* detach */])(t);
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block1_anchor);
		}
	};
}

// (66:2) {#if currentlyShownLinks.length > 0}
function create_if_block_2(ctx) {
	let hr;

	return {
		c() {
			hr = Object(internal["m" /* element */])("hr");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, hr, anchor);
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(hr);
		}
	};
}

// (71:2) {:else}
function ShowEnabledLinksButton_svelte_create_else_block(ctx) {
	let div;
	let button;

	let t_value = lib["browser"].i18n.getMessage(/*currentlyShownLinks*/ ctx[2].length === 0
	? "button_showEnabledLinks"
	: "button_showOtherEnabledLinks") + "";

	let t;
	let mounted;
	let dispose;

	return {
		c() {
			div = Object(internal["m" /* element */])("div");
			button = Object(internal["m" /* element */])("button");
			t = Object(internal["E" /* text */])(t_value);
			Object(internal["d" /* attr */])(button, "class", "svelte-zefv67");
			Object(internal["d" /* attr */])(div, "id", "fix-button-margin");
			Object(internal["d" /* attr */])(div, "class", "svelte-zefv67");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, div, anchor);
			Object(internal["c" /* append */])(div, button);
			Object(internal["c" /* append */])(button, t);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(button, "click", /*click_handler*/ ctx[6]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*currentlyShownLinks*/ 4 && t_value !== (t_value = lib["browser"].i18n.getMessage(/*currentlyShownLinks*/ ctx[2].length === 0
			? "button_showEnabledLinks"
			: "button_showOtherEnabledLinks") + "")) Object(internal["A" /* set_data */])(t, t_value);
		},
		i: internal["u" /* noop */],
		o: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(div);
			mounted = false;
			dispose();
		}
	};
}

// (69:2) {#if enabledLinks}
function ShowEnabledLinksButton_svelte_create_if_block_1(ctx) {
	let linklist;
	let current;

	linklist = new LinkList_svelte({
			props: { siteLinks: /*enabledLinks*/ ctx[4] }
		});

	return {
		c() {
			Object(internal["h" /* create_component */])(linklist.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(linklist, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const linklist_changes = {};
			if (dirty & /*enabledLinks*/ 16) linklist_changes.siteLinks = /*enabledLinks*/ ctx[4];
			linklist.$set(linklist_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(linklist.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(linklist.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(linklist, detaching);
		}
	};
}

function ShowEnabledLinksButton_svelte_create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*restOfEnabledLinks*/ ctx[5].size > 0 && ShowEnabledLinksButton_svelte_create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = Object(internal["n" /* empty */])();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (/*restOfEnabledLinks*/ ctx[5].size > 0) if_block.p(ctx, dirty);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(if_block);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block_anchor);
		}
	};
}

function getEnabledLinks(config, currentSiteId, extractedParameters, restOfEnabledLinks) {
	const someMapParameters = {
		zoom: extractedParameters["zoom"] || "3",
		lat: extractedParameters["lat"] || "23.00",
		lon: extractedParameters["lon"] || "24.43"
	};

	const enabledMapLinks = Object(sites_manipulation_helper["b" /* getRelevantSites */])(config, currentSiteId, someMapParameters);

	const allParameters = {
		...someMapParameters,
		nodeId: "1",
		wayId: "1",
		relationId: "1",
		changesetId: "1",
		userName: "jgpacker",
		key: "amenity",
		value: "school",
		tracesId: "1",
		...extractedParameters
	};

	const allEnabledLinks = Object(sites_manipulation_helper["b" /* getRelevantSites */])(config, currentSiteId, allParameters);

	allEnabledLinks.forEach((link, linkIndex) => {
		const possibleMapLink = enabledMapLinks.find(mapLink => mapLink.id === link.id);

		if (possibleMapLink) {
			// prioritize the "map versions" of each link
			allEnabledLinks[linkIndex] = possibleMapLink;
		}
	});

	return allEnabledLinks.filter(link => restOfEnabledLinks.has(link.id));
}

function ShowEnabledLinksButton_svelte_instance($$self, $$props, $$invalidate) {
	
	
	
	let { config } = $$props;
	let { currentSiteId = undefined } = $$props;
	let { currentlyShownLinks = [] } = $$props;
	let { extractedParameters = {} } = $$props;
	let enabledLinks;
	const restOfEnabledLinks = new Set();

	config.forEach(linkConfig => {
		if (linkConfig.isEnabled && currentlyShownLinks.every(link => link.id !== linkConfig.id)) {
			restOfEnabledLinks.add(linkConfig.id);
		}
	});

	const click_handler = () => $$invalidate(4, enabledLinks = getEnabledLinks(config, currentSiteId, extractedParameters, restOfEnabledLinks));

	$$self.$$set = $$props => {
		if ("config" in $$props) $$invalidate(0, config = $$props.config);
		if ("currentSiteId" in $$props) $$invalidate(1, currentSiteId = $$props.currentSiteId);
		if ("currentlyShownLinks" in $$props) $$invalidate(2, currentlyShownLinks = $$props.currentlyShownLinks);
		if ("extractedParameters" in $$props) $$invalidate(3, extractedParameters = $$props.extractedParameters);
	};

	return [
		config,
		currentSiteId,
		currentlyShownLinks,
		extractedParameters,
		enabledLinks,
		restOfEnabledLinks,
		click_handler
	];
}

class ShowEnabledLinksButton_svelte_ShowEnabledLinksButton extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-zefv67-style")) ShowEnabledLinksButton_svelte_add_css();

		Object(internal["q" /* init */])(this, options, ShowEnabledLinksButton_svelte_instance, ShowEnabledLinksButton_svelte_create_fragment, internal["z" /* safe_not_equal */], {
			config: 0,
			currentSiteId: 1,
			currentlyShownLinks: 2,
			extractedParameters: 3
		});
	}
}

/* harmony default export */ var ShowEnabledLinksButton_svelte = (ShowEnabledLinksButton_svelte_ShowEnabledLinksButton);

// CONCATENATED MODULE: ./src/popup/App.svelte
/* src/popup/App.svelte generated by Svelte v3.29.4 */











function App_svelte_add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-sh3482-style";
	style.textContent = ".loading.svelte-sh3482::first-line{font-weight:bold}";
	Object(internal["c" /* append */])(document.head, style);
}

// (1:0) <script lang="ts">; import { browser }
function create_catch_block(ctx) {
	return {
		c: internal["u" /* noop */],
		m: internal["u" /* noop */],
		p: internal["u" /* noop */],
		i: internal["u" /* noop */],
		o: internal["u" /* noop */],
		d: internal["u" /* noop */]
	};
}

// (25:2) {:then sitesListOrError}
function create_then_block(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [App_svelte_create_if_block, App_svelte_create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if ("sitesList" in /*sitesListOrError*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			if_block.c();
			if_block_anchor = Object(internal["n" /* empty */])();
		},
		m(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				Object(internal["o" /* group_outros */])();

				Object(internal["G" /* transition_out */])(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				Object(internal["g" /* check_outros */])();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				Object(internal["F" /* transition_in */])(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(if_block);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(if_block);
			current = false;
		},
		d(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block_anchor);
		}
	};
}

// (35:4) {:else}
function App_svelte_create_else_block(ctx) {
	let errormessage;
	let t;
	let if_block_anchor;
	let current;

	errormessage = new ErrorMessage_svelte({
			props: { error: /*sitesListOrError*/ ctx[1].error }
		});

	let if_block = (/*sitesListOrError*/ ctx[1].error === KnownError.INCOMPATIBLE_WEBSITE || /*sitesListOrError*/ ctx[1].error === KnownError.NO_INFORMATION_EXTRACTED) && App_svelte_create_if_block_1(ctx);

	return {
		c() {
			Object(internal["h" /* create_component */])(errormessage.$$.fragment);
			t = Object(internal["D" /* space */])();
			if (if_block) if_block.c();
			if_block_anchor = Object(internal["n" /* empty */])();
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(errormessage, target, anchor);
			Object(internal["r" /* insert */])(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block_anchor, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const errormessage_changes = {};
			if (dirty & /*eventualSitesOrError*/ 1) errormessage_changes.error = /*sitesListOrError*/ ctx[1].error;
			errormessage.$set(errormessage_changes);

			if (/*sitesListOrError*/ ctx[1].error === KnownError.INCOMPATIBLE_WEBSITE || /*sitesListOrError*/ ctx[1].error === KnownError.NO_INFORMATION_EXTRACTED) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*eventualSitesOrError*/ 1) {
						Object(internal["F" /* transition_in */])(if_block, 1);
					}
				} else {
					if_block = App_svelte_create_if_block_1(ctx);
					if_block.c();
					Object(internal["F" /* transition_in */])(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				Object(internal["o" /* group_outros */])();

				Object(internal["G" /* transition_out */])(if_block, 1, 1, () => {
					if_block = null;
				});

				Object(internal["g" /* check_outros */])();
			}
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(errormessage.$$.fragment, local);
			Object(internal["F" /* transition_in */])(if_block);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(errormessage.$$.fragment, local);
			Object(internal["G" /* transition_out */])(if_block);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(errormessage, detaching);
			if (detaching) Object(internal["l" /* detach */])(t);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block_anchor);
		}
	};
}

// (26:4) {#if 'sitesList' in sitesListOrError}
function App_svelte_create_if_block(ctx) {
	let basiclinkcreationdialog;
	let t0;
	let linklist;
	let t1;
	let showenabledlinksbutton;
	let current;

	basiclinkcreationdialog = new BasicLinkCreationDialog_svelte({
			props: {
				customUserOption: /*sitesListOrError*/ ctx[1].customUserOption
			}
		});

	linklist = new LinkList_svelte({
			props: {
				siteLinks: /*sitesListOrError*/ ctx[1].sitesList
			}
		});

	showenabledlinksbutton = new ShowEnabledLinksButton_svelte({
			props: {
				config: /*sitesListOrError*/ ctx[1].config,
				currentSiteId: /*sitesListOrError*/ ctx[1].currentSiteId,
				currentlyShownLinks: /*sitesListOrError*/ ctx[1].sitesList,
				extractedParameters: /*sitesListOrError*/ ctx[1].extractedParameters
			}
		});

	return {
		c() {
			Object(internal["h" /* create_component */])(basiclinkcreationdialog.$$.fragment);
			t0 = Object(internal["D" /* space */])();
			Object(internal["h" /* create_component */])(linklist.$$.fragment);
			t1 = Object(internal["D" /* space */])();
			Object(internal["h" /* create_component */])(showenabledlinksbutton.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(basiclinkcreationdialog, target, anchor);
			Object(internal["r" /* insert */])(target, t0, anchor);
			Object(internal["t" /* mount_component */])(linklist, target, anchor);
			Object(internal["r" /* insert */])(target, t1, anchor);
			Object(internal["t" /* mount_component */])(showenabledlinksbutton, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const basiclinkcreationdialog_changes = {};
			if (dirty & /*eventualSitesOrError*/ 1) basiclinkcreationdialog_changes.customUserOption = /*sitesListOrError*/ ctx[1].customUserOption;
			basiclinkcreationdialog.$set(basiclinkcreationdialog_changes);
			const linklist_changes = {};
			if (dirty & /*eventualSitesOrError*/ 1) linklist_changes.siteLinks = /*sitesListOrError*/ ctx[1].sitesList;
			linklist.$set(linklist_changes);
			const showenabledlinksbutton_changes = {};
			if (dirty & /*eventualSitesOrError*/ 1) showenabledlinksbutton_changes.config = /*sitesListOrError*/ ctx[1].config;
			if (dirty & /*eventualSitesOrError*/ 1) showenabledlinksbutton_changes.currentSiteId = /*sitesListOrError*/ ctx[1].currentSiteId;
			if (dirty & /*eventualSitesOrError*/ 1) showenabledlinksbutton_changes.currentlyShownLinks = /*sitesListOrError*/ ctx[1].sitesList;
			if (dirty & /*eventualSitesOrError*/ 1) showenabledlinksbutton_changes.extractedParameters = /*sitesListOrError*/ ctx[1].extractedParameters;
			showenabledlinksbutton.$set(showenabledlinksbutton_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(basiclinkcreationdialog.$$.fragment, local);
			Object(internal["F" /* transition_in */])(linklist.$$.fragment, local);
			Object(internal["F" /* transition_in */])(showenabledlinksbutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(basiclinkcreationdialog.$$.fragment, local);
			Object(internal["G" /* transition_out */])(linklist.$$.fragment, local);
			Object(internal["G" /* transition_out */])(showenabledlinksbutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(basiclinkcreationdialog, detaching);
			if (detaching) Object(internal["l" /* detach */])(t0);
			Object(internal["j" /* destroy_component */])(linklist, detaching);
			if (detaching) Object(internal["l" /* detach */])(t1);
			Object(internal["j" /* destroy_component */])(showenabledlinksbutton, detaching);
		}
	};
}

// (37:6) {#if sitesListOrError.error === KnownError.INCOMPATIBLE_WEBSITE || sitesListOrError.error === KnownError.NO_INFORMATION_EXTRACTED}
function App_svelte_create_if_block_1(ctx) {
	let showenabledlinksbutton;
	let current;

	showenabledlinksbutton = new ShowEnabledLinksButton_svelte({
			props: {
				config: /*sitesListOrError*/ ctx[1].config
			}
		});

	return {
		c() {
			Object(internal["h" /* create_component */])(showenabledlinksbutton.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(showenabledlinksbutton, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const showenabledlinksbutton_changes = {};
			if (dirty & /*eventualSitesOrError*/ 1) showenabledlinksbutton_changes.config = /*sitesListOrError*/ ctx[1].config;
			showenabledlinksbutton.$set(showenabledlinksbutton_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(showenabledlinksbutton.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(showenabledlinksbutton.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(showenabledlinksbutton, detaching);
		}
	};
}

// (21:31)      <InfoBox>       <div class="loading">{browser.i18n.getMessage('loading')}
function create_pending_block(ctx) {
	let infobox;
	let current;

	infobox = new InfoBox_svelte({
			props: {
				$$slots: { default: [App_svelte_create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			Object(internal["h" /* create_component */])(infobox.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(infobox, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const infobox_changes = {};

			if (dirty & /*$$scope*/ 4) {
				infobox_changes.$$scope = { dirty, ctx };
			}

			infobox.$set(infobox_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(infobox.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(infobox.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(infobox, detaching);
		}
	};
}

// (22:4) <InfoBox>
function App_svelte_create_default_slot(ctx) {
	let div;

	return {
		c() {
			div = Object(internal["m" /* element */])("div");
			div.textContent = `${lib["browser"].i18n.getMessage("loading")}`;
			Object(internal["d" /* attr */])(div, "class", "loading svelte-sh3482");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, div, anchor);
		},
		p: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(div);
		}
	};
}

function App_svelte_create_fragment(ctx) {
	let configurationlink;
	let t;
	let div;
	let promise;
	let current;
	configurationlink = new ConfigurationLink_svelte({});

	let info = {
		ctx,
		current: null,
		token: null,
		hasCatch: false,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 1,
		blocks: [,,,]
	};

	Object(internal["p" /* handle_promise */])(promise = /*eventualSitesOrError*/ ctx[0], info);

	return {
		c() {
			Object(internal["h" /* create_component */])(configurationlink.$$.fragment);
			t = Object(internal["D" /* space */])();
			div = Object(internal["m" /* element */])("div");
			info.block.c();
		},
		m(target, anchor) {
			Object(internal["t" /* mount_component */])(configurationlink, target, anchor);
			Object(internal["r" /* insert */])(target, t, anchor);
			Object(internal["r" /* insert */])(target, div, anchor);
			info.block.m(div, info.anchor = null);
			info.mount = () => div;
			info.anchor = null;
			current = true;
		},
		p(new_ctx, [dirty]) {
			ctx = new_ctx;
			info.ctx = ctx;

			if (dirty & /*eventualSitesOrError*/ 1 && promise !== (promise = /*eventualSitesOrError*/ ctx[0]) && Object(internal["p" /* handle_promise */])(promise, info)) {
				
			} else {
				const child_ctx = ctx.slice();
				child_ctx[1] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(configurationlink.$$.fragment, local);
			Object(internal["F" /* transition_in */])(info.block);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(configurationlink.$$.fragment, local);

			for (let i = 0; i < 3; i += 1) {
				const block = info.blocks[i];
				Object(internal["G" /* transition_out */])(block);
			}

			current = false;
		},
		d(detaching) {
			Object(internal["j" /* destroy_component */])(configurationlink, detaching);
			if (detaching) Object(internal["l" /* detach */])(t);
			if (detaching) Object(internal["l" /* detach */])(div);
			info.block.d();
			info.token = null;
			info = null;
		}
	};
}

function App_svelte_instance($$self, $$props, $$invalidate) {
	
	let { eventualSitesOrError } = $$props;

	$$self.$$set = $$props => {
		if ("eventualSitesOrError" in $$props) $$invalidate(0, eventualSitesOrError = $$props.eventualSitesOrError);
	};

	return [eventualSitesOrError];
}

class App_svelte_App extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-sh3482-style")) App_svelte_add_css();
		Object(internal["q" /* init */])(this, options, App_svelte_instance, App_svelte_create_fragment, internal["z" /* safe_not_equal */], { eventualSitesOrError: 0 });
	}
}

/* harmony default export */ var App_svelte = (App_svelte_App);
// CONCATENATED MODULE: ./src/popup/main.ts




// @ts-expect-error

const eventualSitesOrError = getSitesOrError();
new App_svelte({
    target: document.body,
    props: { eventualSitesOrError },
});
async function getSitesOrError() {
    const config = await Object(config_handler["d" /* getSitesConfiguration */])();
    const tabs = await lib["browser"].tabs.query({ active: true, currentWindow: true });
    const currentTab = tabs[0];
    if (!currentTab || !currentTab.url || !currentTab.id) {
        const error = KnownError.NO_ACCESS;
        return { config, error };
    }
    const candidateSiteIds = Object(sites_manipulation_helper["a" /* findSiteCandidates */])(config, currentTab.url);
    const contentScriptResult = await getDataFromContentScript(currentTab.id, candidateSiteIds);
    const currentSite = contentScriptResult && Object(sites_manipulation_helper["c" /* pickWinningCandidate */])(config, contentScriptResult, currentTab.url);
    if (!currentSite) {
        const error = candidateSiteIds.length === 0
            ? KnownError.INCOMPATIBLE_WEBSITE
            : KnownError.NO_INFORMATION_EXTRACTED;
        return { config, error };
    }
    let customUserOption;
    if (currentSite.detectedPattern) {
        customUserOption = {
            urlPattern: currentSite.detectedPattern,
            defaultName: currentTab.title || '???',
        };
    }
    const sitesList = Object(sites_manipulation_helper["b" /* getRelevantSites */])(config, currentSite.siteId, currentSite.attributes);
    return {
        config,
        currentSiteId: currentSite.siteId,
        sitesList,
        customUserOption,
        extractedParameters: currentSite.attributes,
    };
}
async function getDataFromContentScript(tabId, candidateSiteIds) {
    try {
        await lib["browser"].tabs.executeScript(tabId, { file: "/injectable-content-script.js" });
        const message = { candidateSiteIds };
        return (await lib["browser"].tabs.sendMessage(tabId, message));
    }
    catch (e) {
        logUnexpectedError(e);
        return;
    }
}
function logUnexpectedError(e) {
    const errorPrefix = 'OSM WebExtension ERROR';
    if (e instanceof Error) {
        console.error(errorPrefix, e.message, e.stack);
    }
    else {
        console.error(errorPrefix, JSON.stringify(e));
    }
}


/***/ })
/******/ ]);