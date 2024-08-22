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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__(10);
var crossvent = __webpack_require__(17);
var classes = __webpack_require__(20);
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__(11);
var debounce = __webpack_require__(12);

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__(13);

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(14).setImmediate))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(15);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(16)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__(18);
var eventmap = __webpack_require__(19);
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/storage/config-handler.ts
var config_handler = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/dragula/dragula.js
var dragula = __webpack_require__(8);
var dragula_default = /*#__PURE__*/__webpack_require__.n(dragula);

// CONCATENATED MODULE: ./src/options/utils.ts


const dragHandleClass = "drag-handle";
//TODO: Migrate to svelte-dnd-action after https://github.com/isaacHagoel/svelte-dnd-action/issues/86
function setupDragAndDrop(d) {
    const div = d.querySelector("div");
    const dragAndDropHandler = dragula_default()([div], {
        moves: (_el, _container, handle) => Boolean(handle && handle.classList.contains(dragHandleClass)),
    });
    dragAndDropHandler.on("drop", updateSiteIdsOrder);
    async function updateSiteIdsOrder() {
        const orderedSitesWithId = [
            ...d.querySelectorAll("div input[type=checkbox]"),
        ].map((input) => input.name);
        await Object(config_handler["e" /* setOrderedSiteIds */])(orderedSitesWithId);
    }
    return div;
}

// EXTERNAL MODULE: ./node_modules/svelte/internal/index.mjs
var internal = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/webextension-polyfill-ts/lib/index.js
var lib = __webpack_require__(1);

// EXTERNAL MODULE: ./src/popup/sites-manipulation-helper.ts
var sites_manipulation_helper = __webpack_require__(4);

// CONCATENATED MODULE: ./src/options/components/UrlTemplateForm.svelte
/* src/options/components/UrlTemplateForm.svelte generated by Svelte v3.29.4 */






function add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-fek4hl-style";
	style.textContent = "form.svelte-fek4hl{margin-top:10px}input.svelte-fek4hl{display:block;margin-bottom:5px}";
	Object(internal["c" /* append */])(document.head, style);
}

function create_fragment(ctx) {
	let form;
	let fieldset;
	let legend;
	let t1;
	let label0;
	let t2_value = lib["browser"].i18n.getMessage("config_pattern_name") + "";
	let t2;
	let t3;
	let input0;
	let t4;
	let label1;
	let t5_value = lib["browser"].i18n.getMessage("config_pattern_urlTemplate") + "";
	let t5;
	let t6;
	let input1;
	let t7;
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			form = Object(internal["m" /* element */])("form");
			fieldset = Object(internal["m" /* element */])("fieldset");
			legend = Object(internal["m" /* element */])("legend");
			legend.textContent = `${lib["browser"].i18n.getMessage("config_pattern_formTitle")}`;
			t1 = Object(internal["D" /* space */])();
			label0 = Object(internal["m" /* element */])("label");
			t2 = Object(internal["E" /* text */])(t2_value);
			t3 = Object(internal["D" /* space */])();
			input0 = Object(internal["m" /* element */])("input");
			t4 = Object(internal["D" /* space */])();
			label1 = Object(internal["m" /* element */])("label");
			t5 = Object(internal["E" /* text */])(t5_value);
			t6 = Object(internal["D" /* space */])();
			input1 = Object(internal["m" /* element */])("input");
			t7 = Object(internal["D" /* space */])();
			button = Object(internal["m" /* element */])("button");
			button.textContent = `${lib["browser"].i18n.getMessage("config_pattern_createOption")}`;
			Object(internal["d" /* attr */])(input0, "type", "text");
			input0.required = true;
			Object(internal["d" /* attr */])(input0, "class", "svelte-fek4hl");
			Object(internal["d" /* attr */])(input1, "type", "url");
			input1.required = true;
			Object(internal["d" /* attr */])(input1, "placeholder", urlTemplatePlaceholder);
			Object(internal["d" /* attr */])(input1, "pattern", /*urlTemplatePattern*/ ctx[2]);
			Object(internal["d" /* attr */])(input1, "class", "svelte-fek4hl");
			Object(internal["d" /* attr */])(button, "type", "submit");
			Object(internal["d" /* attr */])(form, "action", "#");
			Object(internal["d" /* attr */])(form, "class", "svelte-fek4hl");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, form, anchor);
			Object(internal["c" /* append */])(form, fieldset);
			Object(internal["c" /* append */])(fieldset, legend);
			Object(internal["c" /* append */])(fieldset, t1);
			Object(internal["c" /* append */])(fieldset, label0);
			Object(internal["c" /* append */])(label0, t2);
			Object(internal["c" /* append */])(label0, t3);
			Object(internal["c" /* append */])(label0, input0);
			Object(internal["B" /* set_input_value */])(input0, /*linkName*/ ctx[0]);
			Object(internal["c" /* append */])(fieldset, t4);
			Object(internal["c" /* append */])(fieldset, label1);
			Object(internal["c" /* append */])(label1, t5);
			Object(internal["c" /* append */])(label1, t6);
			Object(internal["c" /* append */])(label1, input1);
			Object(internal["B" /* set_input_value */])(input1, /*linkUrlTemplate*/ ctx[1]);
			Object(internal["c" /* append */])(fieldset, t7);
			Object(internal["c" /* append */])(fieldset, button);

			if (!mounted) {
				dispose = [
					Object(internal["s" /* listen */])(input0, "input", /*input0_input_handler*/ ctx[4]),
					Object(internal["s" /* listen */])(input1, "input", /*input1_input_handler*/ ctx[5]),
					Object(internal["s" /* listen */])(form, "submit", /*onFormSubmit*/ ctx[3])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*linkName*/ 1 && input0.value !== /*linkName*/ ctx[0]) {
				Object(internal["B" /* set_input_value */])(input0, /*linkName*/ ctx[0]);
			}

			if (dirty & /*linkUrlTemplate*/ 2) {
				Object(internal["B" /* set_input_value */])(input1, /*linkUrlTemplate*/ ctx[1]);
			}
		},
		i: internal["u" /* noop */],
		o: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(form);
			mounted = false;
			Object(internal["y" /* run_all */])(dispose);
		}
	};
}

const urlTemplatePlaceholder = "https://www.openstreetmap.org/#map={zoom}/{latitude}/{longitude}";

function instance($$self, $$props, $$invalidate) {
	const urlTemplatePattern = (/([^{}]+\{(zoom|latitude|longitude|osm_(user_name|tag_key|tag_value|(changeset|node|way|relation)_id))\})+[^{}]*/).source; // must contain curly braces; but only with known parameters
	let linkName = "";
	let linkUrlTemplate = "";

	async function onFormSubmit(event) {
		event.preventDefault(); // needed to ensure this async function executes completely
		const urlPattern = { tag: "user-v1", url: linkUrlTemplate };
		await Object(config_handler["a" /* addNewUrlPattern */])(linkName, urlPattern);
		window.location.reload();
	}

	function input0_input_handler() {
		linkName = this.value;
		$$invalidate(0, linkName);
	}

	function input1_input_handler() {
		linkUrlTemplate = this.value;
		$$invalidate(1, linkUrlTemplate);
	}

	return [
		linkName,
		linkUrlTemplate,
		urlTemplatePattern,
		onFormSubmit,
		input0_input_handler,
		input1_input_handler
	];
}

class UrlTemplateForm_svelte_UrlTemplateForm extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-fek4hl-style")) add_css();
		Object(internal["q" /* init */])(this, options, instance, create_fragment, internal["z" /* safe_not_equal */], {});
	}
}

/* harmony default export */ var UrlTemplateForm_svelte = (UrlTemplateForm_svelte_UrlTemplateForm);
// CONCATENATED MODULE: ./src/options/components/ConfigurableLine.svelte
/* src/options/components/ConfigurableLine.svelte generated by Svelte v3.29.4 */







function ConfigurableLine_svelte_add_css() {
	var style = Object(internal["m" /* element */])("style");
	style.id = "svelte-dk2c-style";
	style.textContent = "label.svelte-dk2c{display:flex;padding:1px 0 1px;align-items:center}img.svelte-dk2c{height:100%;touch-action:none}input[type=\"checkbox\"].svelte-dk2c{margin-left:0}input[type=\"text\"].svelte-dk2c{width:100%;margin-right:2px}button.save.svelte-dk2c,button.edit.svelte-dk2c{margin-left:auto}button.delete.svelte-dk2c{margin-left:2px}div.deleted.svelte-dk2c{text-align:center;background-color:#f0f0f0;border-radius:2px;cursor:pointer;padding:3px;margin:1px 0}";
	Object(internal["c" /* append */])(document.head, style);
}

// (76:0) {#if siteConfig.customPattern || siteConfig.defaultConfiguration}
function create_if_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (!/*deleted*/ ctx[2]) return create_if_block_1;
		return create_else_block_1;
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

// (104:2) {:else}
function create_else_block_1(ctx) {
	let div;
	let t_value = lib["browser"].i18n.getMessage("config_linkDeleted", /*getSiteTitle*/ ctx[4](/*siteConfig*/ ctx[0])) + "";
	let t;
	let mounted;
	let dispose;

	return {
		c() {
			div = Object(internal["m" /* element */])("div");
			t = Object(internal["E" /* text */])(t_value);
			Object(internal["d" /* attr */])(div, "class", "deleted svelte-dk2c");
			Object(internal["d" /* attr */])(div, "role", "link");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, div, anchor);
			Object(internal["c" /* append */])(div, t);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(div, "click", /*restoreDeletedConfig*/ ctx[8]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*siteConfig*/ 1 && t_value !== (t_value = lib["browser"].i18n.getMessage("config_linkDeleted", /*getSiteTitle*/ ctx[4](/*siteConfig*/ ctx[0])) + "")) Object(internal["A" /* set_data */])(t, t_value);
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(div);
			mounted = false;
			dispose();
		}
	};
}

// (77:2) {#if !deleted}
function create_if_block_1(ctx) {
	let label;
	let img;
	let img_class_value;
	let img_src_value;
	let t0;
	let input;
	let input_name_value;
	let input_checked_value;
	let t1;
	let mounted;
	let dispose;

	function select_block_type_1(ctx, dirty) {
		if (/*siteConfig*/ ctx[0].id !== /*currentEditableLinkById*/ ctx[1]) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block = current_block_type(ctx);

	return {
		c() {
			label = Object(internal["m" /* element */])("label");
			img = Object(internal["m" /* element */])("img");
			t0 = Object(internal["D" /* space */])();
			input = Object(internal["m" /* element */])("input");
			t1 = Object(internal["D" /* space */])();
			if_block.c();
			Object(internal["d" /* attr */])(img, "alt", "");
			Object(internal["d" /* attr */])(img, "class", img_class_value = "" + (Object(internal["v" /* null_to_empty */])(dragHandleClass) + " svelte-dk2c"));
			if (img.src !== (img_src_value = dragHandleSrc)) Object(internal["d" /* attr */])(img, "src", img_src_value);
			Object(internal["d" /* attr */])(input, "type", "checkbox");
			Object(internal["d" /* attr */])(input, "name", input_name_value = /*siteConfig*/ ctx[0].id);
			input.checked = input_checked_value = /*siteConfig*/ ctx[0].isEnabled;
			Object(internal["d" /* attr */])(input, "class", "svelte-dk2c");
			Object(internal["d" /* attr */])(label, "class", "svelte-dk2c");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, label, anchor);
			Object(internal["c" /* append */])(label, img);
			Object(internal["c" /* append */])(label, t0);
			Object(internal["c" /* append */])(label, input);
			Object(internal["c" /* append */])(label, t1);
			if_block.m(label, null);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(input, "click", /*toggleIsEnabled*/ ctx[6]);
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*siteConfig*/ 1 && input_name_value !== (input_name_value = /*siteConfig*/ ctx[0].id)) {
				Object(internal["d" /* attr */])(input, "name", input_name_value);
			}

			if (dirty & /*siteConfig*/ 1 && input_checked_value !== (input_checked_value = /*siteConfig*/ ctx[0].isEnabled)) {
				input.checked = input_checked_value;
			}

			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(label, null);
				}
			}
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(label);
			if_block.d();
			mounted = false;
			dispose();
		}
	};
}

// (92:6) {:else}
function create_else_block(ctx) {
	let input;
	let t0;
	let button;
	let t2;
	let if_block_anchor;
	let mounted;
	let dispose;
	let if_block = /*siteConfig*/ ctx[0].customPattern && create_if_block_3(ctx);

	return {
		c() {
			input = Object(internal["m" /* element */])("input");
			t0 = Object(internal["D" /* space */])();
			button = Object(internal["m" /* element */])("button");
			button.textContent = `${lib["browser"].i18n.getMessage("config_saveButton")}`;
			t2 = Object(internal["D" /* space */])();
			if (if_block) if_block.c();
			if_block_anchor = Object(internal["n" /* empty */])();
			Object(internal["d" /* attr */])(input, "type", "text");
			Object(internal["d" /* attr */])(input, "class", "svelte-dk2c");
			Object(internal["d" /* attr */])(button, "class", "save svelte-dk2c");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, input, anchor);
			Object(internal["B" /* set_input_value */])(input, /*siteTitle*/ ctx[3]);
			Object(internal["r" /* insert */])(target, t0, anchor);
			Object(internal["r" /* insert */])(target, button, anchor);
			Object(internal["r" /* insert */])(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block_anchor, anchor);

			if (!mounted) {
				dispose = [
					Object(internal["s" /* listen */])(input, "input", /*input_input_handler*/ ctx[10]),
					Object(internal["s" /* listen */])(button, "click", /*updateTitle*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*siteTitle*/ 8 && input.value !== /*siteTitle*/ ctx[3]) {
				Object(internal["B" /* set_input_value */])(input, /*siteTitle*/ ctx[3]);
			}

			if (/*siteConfig*/ ctx[0].customPattern) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(input);
			if (detaching) Object(internal["l" /* detach */])(t0);
			if (detaching) Object(internal["l" /* detach */])(button);
			if (detaching) Object(internal["l" /* detach */])(t2);
			if (if_block) if_block.d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block_anchor);
			mounted = false;
			Object(internal["y" /* run_all */])(dispose);
		}
	};
}

// (85:6) {#if siteConfig.id !== currentEditableLinkById}
function create_if_block_2(ctx) {
	let t0_value = /*getSiteTitle*/ ctx[4](/*siteConfig*/ ctx[0]) + "";
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
			button.textContent = `${lib["browser"].i18n.getMessage("config_editButton")}`;
			Object(internal["d" /* attr */])(button, "class", "edit svelte-dk2c");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, t0, anchor);
			Object(internal["r" /* insert */])(target, t1, anchor);
			Object(internal["r" /* insert */])(target, button, anchor);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(button, "click", Object(internal["x" /* prevent_default */])(/*click_handler*/ ctx[9]));
				mounted = true;
			}
		},
		p(ctx, dirty) {
			if (dirty & /*siteConfig*/ 1 && t0_value !== (t0_value = /*getSiteTitle*/ ctx[4](/*siteConfig*/ ctx[0]) + "")) Object(internal["A" /* set_data */])(t0, t0_value);
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(t0);
			if (detaching) Object(internal["l" /* detach */])(t1);
			if (detaching) Object(internal["l" /* detach */])(button);
			mounted = false;
			dispose();
		}
	};
}

// (97:8) {#if siteConfig.customPattern}
function create_if_block_3(ctx) {
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			button = Object(internal["m" /* element */])("button");
			button.textContent = `${lib["browser"].i18n.getMessage("config_deleteButton")}`;
			Object(internal["d" /* attr */])(button, "class", "delete svelte-dk2c");
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, button, anchor);

			if (!mounted) {
				dispose = Object(internal["s" /* listen */])(button, "click", /*deleteConfig*/ ctx[7]);
				mounted = true;
			}
		},
		p: internal["u" /* noop */],
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(button);
			mounted = false;
			dispose();
		}
	};
}

function ConfigurableLine_svelte_create_fragment(ctx) {
	let if_block_anchor;
	let if_block = (/*siteConfig*/ ctx[0].customPattern || /*siteConfig*/ ctx[0].defaultConfiguration) && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = Object(internal["n" /* empty */])();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			Object(internal["r" /* insert */])(target, if_block_anchor, anchor);
		},
		p(ctx, [dirty]) {
			if (/*siteConfig*/ ctx[0].customPattern || /*siteConfig*/ ctx[0].defaultConfiguration) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: internal["u" /* noop */],
		o: internal["u" /* noop */],
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) Object(internal["l" /* detach */])(if_block_anchor);
		}
	};
}

const dragHandleSrc = "/icons/drag_indicator-black.svg"; // from https://fonts.gstatic.com/s/i/materialicons/drag_indicator/v5/24px.svg?download=true

function ConfigurableLine_svelte_instance($$self, $$props, $$invalidate) {
	
	let { siteConfig } = $$props;
	let { currentEditableLinkById } = $$props;
	let deleted = false;
	let siteTitle = getSiteTitle(siteConfig);

	function getSiteTitle(siteConfig) {
		return siteConfig.customName || lib["browser"].i18n.getMessage(`site_${siteConfig.id}`) || "???";
	}

	async function updateTitle() {
		await Object(config_handler["f" /* updateStoredConfig */])(siteConfig.id, { customName: siteTitle });
		const newConfig = await Object(config_handler["c" /* getSiteConfiguration */])(siteConfig.id);
		$$invalidate(0, siteConfig = newConfig);
		$$invalidate(1, currentEditableLinkById = undefined);
	}

	async function toggleIsEnabled() {
		await Object(config_handler["f" /* updateStoredConfig */])(siteConfig.id, { isEnabled: !siteConfig.isEnabled });
		const newConfig = await Object(config_handler["c" /* getSiteConfiguration */])(siteConfig.id);
		$$invalidate(0, siteConfig = newConfig);
	}

	async function deleteConfig() {
		await Object(config_handler["b" /* deleteUrlPattern */])(siteConfig.id);
		$$invalidate(2, deleted = true);
	}

	async function restoreDeletedConfig() {
		await Object(config_handler["a" /* addNewUrlPattern */])(getSiteTitle(siteConfig), siteConfig.customPattern, siteConfig.isEnabled);

		// deleted = false; the restored website is added at the top of the list and the site ID changes...
		window.location.reload();
	}

	const click_handler = () => $$invalidate(1, currentEditableLinkById = siteConfig.id);

	function input_input_handler() {
		siteTitle = this.value;
		$$invalidate(3, siteTitle);
	}

	$$self.$$set = $$props => {
		if ("siteConfig" in $$props) $$invalidate(0, siteConfig = $$props.siteConfig);
		if ("currentEditableLinkById" in $$props) $$invalidate(1, currentEditableLinkById = $$props.currentEditableLinkById);
	};

	return [
		siteConfig,
		currentEditableLinkById,
		deleted,
		siteTitle,
		getSiteTitle,
		updateTitle,
		toggleIsEnabled,
		deleteConfig,
		restoreDeletedConfig,
		click_handler,
		input_input_handler
	];
}

class ConfigurableLine_svelte_ConfigurableLine extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		if (!document.getElementById("svelte-dk2c-style")) ConfigurableLine_svelte_add_css();

		Object(internal["q" /* init */])(this, options, ConfigurableLine_svelte_instance, ConfigurableLine_svelte_create_fragment, internal["z" /* safe_not_equal */], {
			siteConfig: 0,
			currentEditableLinkById: 1
		});
	}
}

/* harmony default export */ var ConfigurableLine_svelte = (ConfigurableLine_svelte_ConfigurableLine);
// CONCATENATED MODULE: ./src/options/App.svelte
/* src/options/App.svelte generated by Svelte v3.29.4 */





function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (9:2) {#each sitesConfig as siteConfig (siteConfig.id)}
function create_each_block(key_1, ctx) {
	let first;
	let configurableline;
	let updating_currentEditableLinkById;
	let current;

	function configurableline_currentEditableLinkById_binding(value) {
		/*configurableline_currentEditableLinkById_binding*/ ctx[2].call(null, value);
	}

	let configurableline_props = { siteConfig: /*siteConfig*/ ctx[3] };

	if (/*currentEditableLinkById*/ ctx[1] !== void 0) {
		configurableline_props.currentEditableLinkById = /*currentEditableLinkById*/ ctx[1];
	}

	configurableline = new ConfigurableLine_svelte({ props: configurableline_props });
	internal["f" /* binding_callbacks */].push(() => Object(internal["e" /* bind */])(configurableline, "currentEditableLinkById", configurableline_currentEditableLinkById_binding));

	return {
		key: key_1,
		first: null,
		c() {
			first = Object(internal["n" /* empty */])();
			Object(internal["h" /* create_component */])(configurableline.$$.fragment);
			this.first = first;
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, first, anchor);
			Object(internal["t" /* mount_component */])(configurableline, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const configurableline_changes = {};
			if (dirty & /*sitesConfig*/ 1) configurableline_changes.siteConfig = /*siteConfig*/ ctx[3];

			if (!updating_currentEditableLinkById && dirty & /*currentEditableLinkById*/ 2) {
				updating_currentEditableLinkById = true;
				configurableline_changes.currentEditableLinkById = /*currentEditableLinkById*/ ctx[1];
				Object(internal["b" /* add_flush_callback */])(() => updating_currentEditableLinkById = false);
			}

			configurableline.$set(configurableline_changes);
		},
		i(local) {
			if (current) return;
			Object(internal["F" /* transition_in */])(configurableline.$$.fragment, local);
			current = true;
		},
		o(local) {
			Object(internal["G" /* transition_out */])(configurableline.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(first);
			Object(internal["j" /* destroy_component */])(configurableline, detaching);
		}
	};
}

function App_svelte_create_fragment(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let t;
	let urltemplateform;
	let current;
	let each_value = /*sitesConfig*/ ctx[0];
	const get_key = ctx => /*siteConfig*/ ctx[3].id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	urltemplateform = new UrlTemplateForm_svelte({});

	return {
		c() {
			div = Object(internal["m" /* element */])("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = Object(internal["D" /* space */])();
			Object(internal["h" /* create_component */])(urltemplateform.$$.fragment);
		},
		m(target, anchor) {
			Object(internal["r" /* insert */])(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			Object(internal["r" /* insert */])(target, t, anchor);
			Object(internal["t" /* mount_component */])(urltemplateform, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*sitesConfig, currentEditableLinkById*/ 3) {
				const each_value = /*sitesConfig*/ ctx[0];
				Object(internal["o" /* group_outros */])();
				each_blocks = Object(internal["H" /* update_keyed_each */])(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, internal["w" /* outro_and_destroy_block */], create_each_block, null, get_each_context);
				Object(internal["g" /* check_outros */])();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				Object(internal["F" /* transition_in */])(each_blocks[i]);
			}

			Object(internal["F" /* transition_in */])(urltemplateform.$$.fragment, local);
			current = true;
		},
		o(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				Object(internal["G" /* transition_out */])(each_blocks[i]);
			}

			Object(internal["G" /* transition_out */])(urltemplateform.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) Object(internal["l" /* detach */])(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			if (detaching) Object(internal["l" /* detach */])(t);
			Object(internal["j" /* destroy_component */])(urltemplateform, detaching);
		}
	};
}

function App_svelte_instance($$self, $$props, $$invalidate) {
	
	let { sitesConfig } = $$props;
	let currentEditableLinkById;

	function configurableline_currentEditableLinkById_binding(value) {
		currentEditableLinkById = value;
		$$invalidate(1, currentEditableLinkById);
	}

	$$self.$$set = $$props => {
		if ("sitesConfig" in $$props) $$invalidate(0, sitesConfig = $$props.sitesConfig);
	};

	return [
		sitesConfig,
		currentEditableLinkById,
		configurableline_currentEditableLinkById_binding
	];
}

class App_svelte_App extends internal["a" /* SvelteComponent */] {
	constructor(options) {
		super();
		Object(internal["q" /* init */])(this, options, App_svelte_instance, App_svelte_create_fragment, internal["z" /* safe_not_equal */], { sitesConfig: 0 });
	}
}

/* harmony default export */ var App_svelte = (App_svelte_App);
// CONCATENATED MODULE: ./src/options/main.ts


// @ts-expect-error

Object(config_handler["d" /* getSitesConfiguration */])().then((sitesConfig) => {
    new App_svelte({
        target: document.body,
        props: {
            sitesConfig,
        },
    });
    setupDragAndDrop(document);
});


/***/ })
/******/ ]);