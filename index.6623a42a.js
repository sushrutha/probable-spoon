// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3VWZ1":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5b295ead6623a42a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5yWxU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _brij = require("./brij");
var _brijDefault = parcelHelpers.interopDefault(_brij);
const brij = new (0, _brijDefault.default)({
    position: "bottom-right"
});
window.brij = brij;
console.log("Loaded Brij Widget");

},{"./brij":"flqkV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"flqkV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _feedback = require("./UI/feedback");
var _info = require("./UI/info");
var _oneTouchRegister = require("./UI/oneTouchRegister");
var _register = require("./UI/register");
class Brij {
    constructor({ position ="bottom-right" , type ="register"  } = {}){
        this.position = this.getPosition(position);
        this.show = false;
        this.api = "https://929f-2601-86-300-de10-24f2-ce5-17f-a2fb.ngrok.io/api";
        this.type = type;
        this.open = false;
        this.details = null;
        this.fetchDetails = null;
        this.fetchDetailsError = null;
        this.apiKey = null;
        this.initialize();
        this.createStyles();
        this.verifyAuth();
    }
    getPosition(position) {
        const [vertical, horizontal] = position.split("-");
        return {
            [vertical]: "30px",
            [horizontal]: "30px"
        };
    }
    initialize() {
        const container = document.createElement("div");
        container.style.position = "fixed";
        Object.keys(this.position).forEach((key)=>{
            container.style[key] = this.position[key];
        });
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container", "hidden");
        const chatTitle = document.createElement("h5");
        chatTitle.textContent = "BRIJ";
        this.messageContainer = document.createElement("div");
        this.messageContainer.classList.add("message-container", "hidden");
        this.createMessageContainerContent();
        buttonContainer.appendChild(chatTitle);
        buttonContainer.addEventListener("click", this.toggle.bind(this));
        container.appendChild(this.messageContainer);
        container.appendChild(buttonContainer);
        document.body.appendChild(container);
    }
    createStyles() {
        const styleTag = document.createElement("style");
        document.head.appendChild(styleTag);
        styleTag.innerHTML = `
            .icon {
                cursor: pointer;
                width: 70%;
                position: absolute;
                top: 9px;
                left: 9px;
                transition: transform 0.3s ease;
            }

            .hidden {
                transform: scale(0);
            }

            .button-container {
                background-color: rgb(112, 124, 224);
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .button-container:hover {
                background-color: rgb(112, 124, 224, 0.6);
            }

            .button-container h5 {
                color: white;
                text-align: center;
                justify-content: center;
                margin: 0;
                padding: 0;
                font-size: 16px;
                font-weight: 500;
            }

            .message-container {
                box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.2);
                width: 400px;
                right: -25px;
                bottom: 75px;
                max-height: 400px;
                position: absolute;
                transition: max-height 0.3s ease;
                font-family: Helvetica, Arial, sans-serif;
            }

            .message-container .content {
                margin: 20px 10px;
                border 1px solid #dbdbdb;
                padding: 10px;
                display: flex;
                background-color: #fff;
                flex-direction: column;
            }

            .message-container.hidden {
                max-height: 0px;
            }

            .message-container h3 {
                margin: 0;
                padding: 20px;
                color: #fff;
                background-color: rgb(112, 124, 224);
            }

            .message-container form * {
                margin: 5px 0
            }

            .message-container form input {
                padding: 10px;

            }

            .message-container form textarea {
                height: 100px;
                padding: 10px;
            }

            .message-container form textarea::placeholder {
                font-family: Helvetica, Arial, sans-serif;
            }

            .message-container form button {
                cursor: pointer;
                background-color: rgb(112, 124, 224);
                color: #fff;
                border: none;
                border-radius: 5px;
                padding: 10px;
            }

            .message-container form button:hover {
                background-color: rgb(112, 124, 224);
            }
        `;
    }
    createMessageContainerContent() {
        if (this.type === "register") (0, _register.createRegisterUIContainerContent)(this);
        else if (this.type === "feedback") (0, _feedback.createMessageUIContainerContent)(this);
        else if (this.type === "onetouch") (0, _oneTouchRegister.createOneTouchRegisterUIContainerContent)(this, {
            email: this.details ? this.details.email : "",
            product: this.details ? this.details.product : ""
        });
        else if (this.type === "info") (0, _info.createInfoUIContainerContent)(this);
    }
    submit(event) {
        event.preventDefault();
        const elements = event.target.elements;
        if (this.type === "register") (0, _register.handleSubmitRegisterUIContainerContent)(this, elements);
        else if (this.type === "feedback") (0, _feedback.handleMessageRegisterUIContainerContent)(this, elements);
        else if (this.type === "onetouch") (0, _oneTouchRegister.handleSubmitOneTouchRegisterUIContainerContent)(this, {
            email: this.details.email,
            product: this.details.product
        });
    }
    toggle() {
        this.open = !this.open;
        if (this.open) this.messageContainer.classList.remove("hidden");
        else {
            this.createMessageContainerContent();
            this.messageContainer.classList.add("hidden");
        }
    }
    isOpen() {
        return this.open;
    }
    setProductDetails(details) {
        this.details = details;
    }
    getProductDetails() {
        return this.details;
    }
    setType(type) {
        this.type = type;
    }
    getType() {
        return this.type;
    }
    showWidget() {
        this.show = true;
        const buttonContainer = document.querySelector(".button-container");
        buttonContainer.classList.remove("hidden");
    }
    hideWidget() {
        this.show = false;
        const buttonContainer = document.querySelector(".button-container");
        buttonContainer.classList.add("hidden");
    }
    isWidgetVisible() {
        return this.show;
    }
    verifyAuth() {
        const params = new URLSearchParams(window.location.search);
        console.log("inside verify auth");
        if (params.has("auth_token")) {
            const token = params.get("auth_token");
            const host = window.location.origin;
            const url = `${this.api}/verify?auth_token=${token}&host=${host}`;
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response)=>response.json()).then((res)=>{
                console.log("res", res);
                if (res.error !== undefined) this.fetchDetailsError = res.error;
                else this.fetchDetails = res.data;
                this.hideWidget();
                this.setType("info");
                (0, _info.createInfoUIContainerContent)(this);
                this.showWidget();
            });
        }
    }
    setApiKey(apiKey) {
        this.apiKey = apiKey;
    }
}
exports.default = Brij;

},{"./UI/feedback":"gL3FC","./UI/info":"ahQug","./UI/oneTouchRegister":"3SKAf","./UI/register":"9SgJk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gL3FC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMessageUIContainerContent", ()=>createMessageUIContainerContent);
parcelHelpers.export(exports, "handleMessageRegisterUIContainerContent", ()=>handleMessageRegisterUIContainerContent);
function createMessageUIContainerContent(widget) {
    widget.messageContainer.innerHTML = "";
    const title = document.createElement("h3");
    title.textContent = "Provide Feedback for this product...";
    const form = document.createElement("form");
    form.classList.add("content");
    const email = document.createElement("input");
    email.required = true;
    email.id = "email";
    email.type = "email";
    email.placeholder = "Enter your email address";
    const message = document.createElement("textarea");
    message.required = true;
    message.id = "message";
    message.placeholder = "Enter your message";
    const btn = document.createElement("button");
    btn.textContent = "Register";
    form.appendChild(email);
    form.appendChild(message);
    form.appendChild(btn);
    form.addEventListener("submit", widget.submit.bind(widget));
    widget.messageContainer.appendChild(title);
    widget.messageContainer.appendChild(form);
}
function handleMessageRegisterUIContainerContent(widget, elements) {
    const { email , message  } = elements;
    const data = {
        email: email.value,
        message: message.value
    };
    widget.messageContainer.innerHTML = "<h3>Your feedback is submitted. You will hear from us soon!</h3>";
    console.log(data);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ahQug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInfoUIContainerContent", ()=>createInfoUIContainerContent);
parcelHelpers.export(exports, "handleSubmitInfoUIContainerContent", ()=>handleSubmitInfoUIContainerContent);
function createInfoUIContainerContent(widget) {
    widget.messageContainer.innerHTML = "";
    const title = document.createElement("h3");
    title.textContent = "Product Info & Register...";
    const form = document.createElement("form");
    form.classList.add("content");
    const gtin = document.createElement("h3");
    gtin.textContent = "GTIN: " + widget.fetchDetails?.gtin;
    const poNumber = document.createElement("h3");
    poNumber.textContent = "PO Number: " + widget.fetchDetails?.poNumber;
    const serialNumber = document.createElement("h3");
    serialNumber.textContent = "Serial Number: " + widget.fetchDetails?.serialNumber;
    const email = document.createElement("input");
    email.required = true;
    email.id = "email";
    email.type = "email";
    email.placeholder = "Enter your email address";
    const btn = document.createElement("button");
    btn.textContent = "Register";
    if (widget.fetchDetailsError !== null) {
        const error = document.createElement("h3");
        error.textContent = widget.fetchDetailsError;
        form.appendChild(error);
    } else {
        form.appendChild(gtin);
        form.appendChild(poNumber);
        form.appendChild(serialNumber);
        form.appendChild(email);
        form.appendChild(btn);
        form.addEventListener("submit", widget.submit.bind(widget));
    }
    widget.messageContainer.appendChild(title);
    widget.messageContainer.appendChild(form);
}
function handleSubmitInfoUIContainerContent(widget, elements) {
    const { email  } = elements;
    const data = {
        email: email.value
    };
    widget.messageContainer.innerHTML = "<h3>Your product is registered. Check your email!</h3>";
    console.log(data);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3SKAf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createOneTouchRegisterUIContainerContent", ()=>createOneTouchRegisterUIContainerContent);
parcelHelpers.export(exports, "handleSubmitOneTouchRegisterUIContainerContent", ()=>handleSubmitOneTouchRegisterUIContainerContent);
function createOneTouchRegisterUIContainerContent(widget, details) {
    widget.messageContainer.innerHTML = "";
    console.log("details", details);
    const title = document.createElement("h3");
    title.textContent = `Register ${details.product}...`;
    const form = document.createElement("form");
    form.classList.add("content");
    const email = document.createElement("input");
    email.required = true;
    email.id = "email";
    email.type = "email";
    email.placeholder = details.email;
    email.disabled = true;
    //   email.classList.add('hidden');
    const btn = document.createElement("button");
    btn.textContent = "Register";
    form.appendChild(email);
    form.appendChild(btn);
    form.addEventListener("submit", widget.submit.bind(widget));
    widget.messageContainer.appendChild(title);
    widget.messageContainer.appendChild(form);
}
function handleSubmitOneTouchRegisterUIContainerContent(widget, elements) {
    const { email  } = elements;
    const data = {
        email: email.value
    };
    widget.messageContainer.innerHTML = "<h3>Your product is registered with Brij</h3>";
    console.log(data);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9SgJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRegisterUIContainerContent", ()=>createRegisterUIContainerContent);
parcelHelpers.export(exports, "handleSubmitRegisterUIContainerContent", ()=>handleSubmitRegisterUIContainerContent);
function createRegisterUIContainerContent(widget) {
    widget.messageContainer.innerHTML = "";
    const title = document.createElement("h3");
    title.textContent = "Register product...";
    const form = document.createElement("form");
    form.classList.add("content");
    const email = document.createElement("input");
    email.required = true;
    email.id = "email";
    email.type = "email";
    email.placeholder = "Enter your email address";
    const btn = document.createElement("button");
    btn.textContent = "Register";
    form.appendChild(email);
    form.appendChild(btn);
    form.addEventListener("submit", widget.submit.bind(widget));
    widget.messageContainer.appendChild(title);
    widget.messageContainer.appendChild(form);
}
function handleSubmitRegisterUIContainerContent(widget, elements) {
    const { email  } = elements;
    const data = {
        email: email.value
    };
    widget.messageContainer.innerHTML = "<h3>Your product is registered. Check your email!</h3>";
    console.log(data);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3VWZ1","5yWxU"], "5yWxU", "parcelRequire606f")

//# sourceMappingURL=index.6623a42a.js.map
