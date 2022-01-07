import {createRequire as __$$createRequireN} from 'module';var require=__$$createRequireN(import.meta.url);
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// dist/chunk-XGNVOI3D.js
import { createRequire as __$$createRequire } from "module";
var require2, __create, __defProp2, __getOwnPropDesc, __getOwnPropNames2, __getProtoOf, __hasOwnProp, __markAsModule, __require, __commonJS, __reExport, __toESM;
var init_chunk_XGNVOI3D = __esm({
  "dist/chunk-XGNVOI3D.js"() {
    init_client();
    require2 = __$$createRequire("file:///Users/egoist/dev/tsno/dist/chunk-XGNVOI3D.js");
    __create = Object.create;
    __defProp2 = Object.defineProperty;
    __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    __getOwnPropNames2 = Object.getOwnPropertyNames;
    __getProtoOf = Object.getPrototypeOf;
    __hasOwnProp = Object.prototype.hasOwnProperty;
    __markAsModule = (target) => __defProp2(target, "__esModule", { value: true });
    __require = /* @__PURE__ */ ((x2) => typeof require2 !== "undefined" ? require2 : typeof Proxy !== "undefined" ? new Proxy(x2, {
      get: (a, b) => (typeof require2 !== "undefined" ? require2 : a)[b]
    }) : x2)(function(x2) {
      if (typeof require2 !== "undefined")
        return require2.apply(this, arguments);
      throw new Error('Dynamic require of "' + x2 + '" is not supported');
    });
    __commonJS = (cb, mod) => function __require2() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    __reExport = (target, module, copyDefault, desc) => {
      if (module && typeof module === "object" || typeof module === "function") {
        for (let key of __getOwnPropNames2(module))
          if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
            __defProp2(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
      }
      return target;
    };
    __toESM = (module, isNodeMode) => {
      return __reExport(__markAsModule(__defProp2(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
    };
  }
});

// dist/chunk-FHDXXOKY.js
import { createRequire as __$$createRequire2 } from "module";
var require3, tty, isColorSupported, formatter, replaceClose, createColors, colors;
var init_chunk_FHDXXOKY = __esm({
  "dist/chunk-FHDXXOKY.js"() {
    init_client();
    init_chunk_XGNVOI3D();
    require3 = __$$createRequire2("file:///Users/egoist/dev/tsno/dist/chunk-FHDXXOKY.js");
    tty = __require("tty");
    isColorSupported = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
    formatter = (open, close, replace = open) => (input) => {
      let string = "" + input;
      let index = string.indexOf(close, open.length);
      return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
    replaceClose = (string, close, replace, index) => {
      let start = string.substring(0, index) + replace;
      let end = string.substring(index + close.length);
      let nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    createColors = (enabled = isColorSupported) => ({
      isColorSupported: enabled,
      reset: enabled ? (s2) => `[0m${s2}[0m` : String,
      bold: enabled ? formatter("[1m", "[22m", "[22m[1m") : String,
      dim: enabled ? formatter("[2m", "[22m", "[22m[2m") : String,
      italic: enabled ? formatter("[3m", "[23m") : String,
      underline: enabled ? formatter("[4m", "[24m") : String,
      inverse: enabled ? formatter("[7m", "[27m") : String,
      hidden: enabled ? formatter("[8m", "[28m") : String,
      strikethrough: enabled ? formatter("[9m", "[29m") : String,
      black: enabled ? formatter("[30m", "[39m") : String,
      red: enabled ? formatter("[31m", "[39m") : String,
      green: enabled ? formatter("[32m", "[39m") : String,
      yellow: enabled ? formatter("[33m", "[39m") : String,
      blue: enabled ? formatter("[34m", "[39m") : String,
      magenta: enabled ? formatter("[35m", "[39m") : String,
      cyan: enabled ? formatter("[36m", "[39m") : String,
      white: enabled ? formatter("[37m", "[39m") : String,
      gray: enabled ? formatter("[90m", "[39m") : String,
      bgBlack: enabled ? formatter("[40m", "[49m") : String,
      bgRed: enabled ? formatter("[41m", "[49m") : String,
      bgGreen: enabled ? formatter("[42m", "[49m") : String,
      bgYellow: enabled ? formatter("[43m", "[49m") : String,
      bgBlue: enabled ? formatter("[44m", "[49m") : String,
      bgMagenta: enabled ? formatter("[45m", "[49m") : String,
      bgCyan: enabled ? formatter("[46m", "[49m") : String,
      bgWhite: enabled ? formatter("[47m", "[49m") : String
    });
    colors = createColors();
  }
});

// dist/chunk-QTAX3BZC.js
import { createRequire as __$$createRequire3 } from "module";
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0;
      while (position !== part.size) {
        const chunk = part.slice(position, Math.min(part.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
function formDataToBlob(F2, B = fetch_blob_default) {
  var b = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c = [], p = `--${b}\r
Content-Disposition: form-data; name="`;
  F2.forEach((v, n) => typeof v == "string" ? c.push(p + e(n) + `"\r
\r
${v.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c.push(p + e(n) + `"; filename="${e(v.name, 1)}"\r
Content-Type: ${v.type || "application/octet-stream"}\r
\r
`, v, "\r\n"));
  c.push(`--${b}--`);
  return new B(c, { type: "multipart/form-data; boundary=" + b });
}
var require4, require_ponyfill_es2018, require_streams, import_streams, POOL_SIZE, _Blob, Blob2, fetch_blob_default, _File, File2, file_default, t, i, h, r, m, f, e, x, FormData;
var init_chunk_QTAX3BZC = __esm({
  "dist/chunk-QTAX3BZC.js"() {
    init_client();
    init_chunk_XGNVOI3D();
    require4 = __$$createRequire3("file:///Users/egoist/dev/tsno/dist/chunk-QTAX3BZC.js");
    require_ponyfill_es2018 = __commonJS({
      "node_modules/.pnpm/web-streams-polyfill@3.2.0/node_modules/web-streams-polyfill/dist/ponyfill.es2018.js"(exports, module) {
        (function(global2, factory) {
          typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.WebStreamsPolyfill = {}));
        })(exports, function(exports2) {
          "use strict";
          const SymbolPolyfill = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
          function noop2() {
            return void 0;
          }
          function getGlobals() {
            if (typeof self !== "undefined") {
              return self;
            } else if (typeof window !== "undefined") {
              return window;
            } else if (typeof global !== "undefined") {
              return global;
            }
            return void 0;
          }
          const globals = getGlobals();
          function typeIsObject(x2) {
            return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
          }
          const rethrowAssertionErrorRejection = noop2;
          const originalPromise = Promise;
          const originalPromiseThen = Promise.prototype.then;
          const originalPromiseResolve = Promise.resolve.bind(originalPromise);
          const originalPromiseReject = Promise.reject.bind(originalPromise);
          function newPromise(executor) {
            return new originalPromise(executor);
          }
          function promiseResolvedWith(value) {
            return originalPromiseResolve(value);
          }
          function promiseRejectedWith(reason) {
            return originalPromiseReject(reason);
          }
          function PerformPromiseThen(promise, onFulfilled, onRejected) {
            return originalPromiseThen.call(promise, onFulfilled, onRejected);
          }
          function uponPromise(promise, onFulfilled, onRejected) {
            PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
          }
          function uponFulfillment(promise, onFulfilled) {
            uponPromise(promise, onFulfilled);
          }
          function uponRejection(promise, onRejected) {
            uponPromise(promise, void 0, onRejected);
          }
          function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
            return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
          }
          function setPromiseIsHandledToTrue(promise) {
            PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
          }
          const queueMicrotask = (() => {
            const globalQueueMicrotask = globals && globals.queueMicrotask;
            if (typeof globalQueueMicrotask === "function") {
              return globalQueueMicrotask;
            }
            const resolvedPromise = promiseResolvedWith(void 0);
            return (fn) => PerformPromiseThen(resolvedPromise, fn);
          })();
          function reflectCall(F2, V, args) {
            if (typeof F2 !== "function") {
              throw new TypeError("Argument is not a function");
            }
            return Function.prototype.apply.call(F2, V, args);
          }
          function promiseCall(F2, V, args) {
            try {
              return promiseResolvedWith(reflectCall(F2, V, args));
            } catch (value) {
              return promiseRejectedWith(value);
            }
          }
          const QUEUE_MAX_ARRAY_SIZE = 16384;
          class SimpleQueue {
            constructor() {
              this._cursor = 0;
              this._size = 0;
              this._front = {
                _elements: [],
                _next: void 0
              };
              this._back = this._front;
              this._cursor = 0;
              this._size = 0;
            }
            get length() {
              return this._size;
            }
            push(element) {
              const oldBack = this._back;
              let newBack = oldBack;
              if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
                newBack = {
                  _elements: [],
                  _next: void 0
                };
              }
              oldBack._elements.push(element);
              if (newBack !== oldBack) {
                this._back = newBack;
                oldBack._next = newBack;
              }
              ++this._size;
            }
            shift() {
              const oldFront = this._front;
              let newFront = oldFront;
              const oldCursor = this._cursor;
              let newCursor = oldCursor + 1;
              const elements = oldFront._elements;
              const element = elements[oldCursor];
              if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
                newFront = oldFront._next;
                newCursor = 0;
              }
              --this._size;
              this._cursor = newCursor;
              if (oldFront !== newFront) {
                this._front = newFront;
              }
              elements[oldCursor] = void 0;
              return element;
            }
            forEach(callback) {
              let i2 = this._cursor;
              let node = this._front;
              let elements = node._elements;
              while (i2 !== elements.length || node._next !== void 0) {
                if (i2 === elements.length) {
                  node = node._next;
                  elements = node._elements;
                  i2 = 0;
                  if (elements.length === 0) {
                    break;
                  }
                }
                callback(elements[i2]);
                ++i2;
              }
            }
            peek() {
              const front = this._front;
              const cursor = this._cursor;
              return front._elements[cursor];
            }
          }
          function ReadableStreamReaderGenericInitialize(reader, stream) {
            reader._ownerReadableStream = stream;
            stream._reader = reader;
            if (stream._state === "readable") {
              defaultReaderClosedPromiseInitialize(reader);
            } else if (stream._state === "closed") {
              defaultReaderClosedPromiseInitializeAsResolved(reader);
            } else {
              defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
            }
          }
          function ReadableStreamReaderGenericCancel(reader, reason) {
            const stream = reader._ownerReadableStream;
            return ReadableStreamCancel(stream, reason);
          }
          function ReadableStreamReaderGenericRelease(reader) {
            if (reader._ownerReadableStream._state === "readable") {
              defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
            } else {
              defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
            }
            reader._ownerReadableStream._reader = void 0;
            reader._ownerReadableStream = void 0;
          }
          function readerLockException(name) {
            return new TypeError("Cannot " + name + " a stream using a released reader");
          }
          function defaultReaderClosedPromiseInitialize(reader) {
            reader._closedPromise = newPromise((resolve, reject) => {
              reader._closedPromise_resolve = resolve;
              reader._closedPromise_reject = reject;
            });
          }
          function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
            defaultReaderClosedPromiseInitialize(reader);
            defaultReaderClosedPromiseReject(reader, reason);
          }
          function defaultReaderClosedPromiseInitializeAsResolved(reader) {
            defaultReaderClosedPromiseInitialize(reader);
            defaultReaderClosedPromiseResolve(reader);
          }
          function defaultReaderClosedPromiseReject(reader, reason) {
            if (reader._closedPromise_reject === void 0) {
              return;
            }
            setPromiseIsHandledToTrue(reader._closedPromise);
            reader._closedPromise_reject(reason);
            reader._closedPromise_resolve = void 0;
            reader._closedPromise_reject = void 0;
          }
          function defaultReaderClosedPromiseResetToRejected(reader, reason) {
            defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
          }
          function defaultReaderClosedPromiseResolve(reader) {
            if (reader._closedPromise_resolve === void 0) {
              return;
            }
            reader._closedPromise_resolve(void 0);
            reader._closedPromise_resolve = void 0;
            reader._closedPromise_reject = void 0;
          }
          const AbortSteps = SymbolPolyfill("[[AbortSteps]]");
          const ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
          const CancelSteps = SymbolPolyfill("[[CancelSteps]]");
          const PullSteps = SymbolPolyfill("[[PullSteps]]");
          const NumberIsFinite = Number.isFinite || function(x2) {
            return typeof x2 === "number" && isFinite(x2);
          };
          const MathTrunc = Math.trunc || function(v) {
            return v < 0 ? Math.ceil(v) : Math.floor(v);
          };
          function isDictionary(x2) {
            return typeof x2 === "object" || typeof x2 === "function";
          }
          function assertDictionary(obj, context) {
            if (obj !== void 0 && !isDictionary(obj)) {
              throw new TypeError(`${context} is not an object.`);
            }
          }
          function assertFunction(x2, context) {
            if (typeof x2 !== "function") {
              throw new TypeError(`${context} is not a function.`);
            }
          }
          function isObject(x2) {
            return typeof x2 === "object" && x2 !== null || typeof x2 === "function";
          }
          function assertObject(x2, context) {
            if (!isObject(x2)) {
              throw new TypeError(`${context} is not an object.`);
            }
          }
          function assertRequiredArgument(x2, position, context) {
            if (x2 === void 0) {
              throw new TypeError(`Parameter ${position} is required in '${context}'.`);
            }
          }
          function assertRequiredField(x2, field, context) {
            if (x2 === void 0) {
              throw new TypeError(`${field} is required in '${context}'.`);
            }
          }
          function convertUnrestrictedDouble(value) {
            return Number(value);
          }
          function censorNegativeZero(x2) {
            return x2 === 0 ? 0 : x2;
          }
          function integerPart(x2) {
            return censorNegativeZero(MathTrunc(x2));
          }
          function convertUnsignedLongLongWithEnforceRange(value, context) {
            const lowerBound = 0;
            const upperBound = Number.MAX_SAFE_INTEGER;
            let x2 = Number(value);
            x2 = censorNegativeZero(x2);
            if (!NumberIsFinite(x2)) {
              throw new TypeError(`${context} is not a finite number`);
            }
            x2 = integerPart(x2);
            if (x2 < lowerBound || x2 > upperBound) {
              throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
            }
            if (!NumberIsFinite(x2) || x2 === 0) {
              return 0;
            }
            return x2;
          }
          function assertReadableStream(x2, context) {
            if (!IsReadableStream(x2)) {
              throw new TypeError(`${context} is not a ReadableStream.`);
            }
          }
          function AcquireReadableStreamDefaultReader(stream) {
            return new ReadableStreamDefaultReader(stream);
          }
          function ReadableStreamAddReadRequest(stream, readRequest) {
            stream._reader._readRequests.push(readRequest);
          }
          function ReadableStreamFulfillReadRequest(stream, chunk, done) {
            const reader = stream._reader;
            const readRequest = reader._readRequests.shift();
            if (done) {
              readRequest._closeSteps();
            } else {
              readRequest._chunkSteps(chunk);
            }
          }
          function ReadableStreamGetNumReadRequests(stream) {
            return stream._reader._readRequests.length;
          }
          function ReadableStreamHasDefaultReader(stream) {
            const reader = stream._reader;
            if (reader === void 0) {
              return false;
            }
            if (!IsReadableStreamDefaultReader(reader)) {
              return false;
            }
            return true;
          }
          class ReadableStreamDefaultReader {
            constructor(stream) {
              assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
              assertReadableStream(stream, "First parameter");
              if (IsReadableStreamLocked(stream)) {
                throw new TypeError("This stream has already been locked for exclusive reading by another reader");
              }
              ReadableStreamReaderGenericInitialize(this, stream);
              this._readRequests = new SimpleQueue();
            }
            get closed() {
              if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
              }
              return this._closedPromise;
            }
            cancel(reason = void 0) {
              if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
              }
              if (this._ownerReadableStream === void 0) {
                return promiseRejectedWith(readerLockException("cancel"));
              }
              return ReadableStreamReaderGenericCancel(this, reason);
            }
            read() {
              if (!IsReadableStreamDefaultReader(this)) {
                return promiseRejectedWith(defaultReaderBrandCheckException("read"));
              }
              if (this._ownerReadableStream === void 0) {
                return promiseRejectedWith(readerLockException("read from"));
              }
              let resolvePromise;
              let rejectPromise;
              const promise = newPromise((resolve, reject) => {
                resolvePromise = resolve;
                rejectPromise = reject;
              });
              const readRequest = {
                _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
                _closeSteps: () => resolvePromise({ value: void 0, done: true }),
                _errorSteps: (e2) => rejectPromise(e2)
              };
              ReadableStreamDefaultReaderRead(this, readRequest);
              return promise;
            }
            releaseLock() {
              if (!IsReadableStreamDefaultReader(this)) {
                throw defaultReaderBrandCheckException("releaseLock");
              }
              if (this._ownerReadableStream === void 0) {
                return;
              }
              if (this._readRequests.length > 0) {
                throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
              }
              ReadableStreamReaderGenericRelease(this);
            }
          }
          Object.defineProperties(ReadableStreamDefaultReader.prototype, {
            cancel: { enumerable: true },
            read: { enumerable: true },
            releaseLock: { enumerable: true },
            closed: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
              value: "ReadableStreamDefaultReader",
              configurable: true
            });
          }
          function IsReadableStreamDefaultReader(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_readRequests")) {
              return false;
            }
            return x2 instanceof ReadableStreamDefaultReader;
          }
          function ReadableStreamDefaultReaderRead(reader, readRequest) {
            const stream = reader._ownerReadableStream;
            stream._disturbed = true;
            if (stream._state === "closed") {
              readRequest._closeSteps();
            } else if (stream._state === "errored") {
              readRequest._errorSteps(stream._storedError);
            } else {
              stream._readableStreamController[PullSteps](readRequest);
            }
          }
          function defaultReaderBrandCheckException(name) {
            return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
          }
          const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
          }).prototype);
          class ReadableStreamAsyncIteratorImpl {
            constructor(reader, preventCancel) {
              this._ongoingPromise = void 0;
              this._isFinished = false;
              this._reader = reader;
              this._preventCancel = preventCancel;
            }
            next() {
              const nextSteps = () => this._nextSteps();
              this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
              return this._ongoingPromise;
            }
            return(value) {
              const returnSteps = () => this._returnSteps(value);
              return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
            }
            _nextSteps() {
              if (this._isFinished) {
                return Promise.resolve({ value: void 0, done: true });
              }
              const reader = this._reader;
              if (reader._ownerReadableStream === void 0) {
                return promiseRejectedWith(readerLockException("iterate"));
              }
              let resolvePromise;
              let rejectPromise;
              const promise = newPromise((resolve, reject) => {
                resolvePromise = resolve;
                rejectPromise = reject;
              });
              const readRequest = {
                _chunkSteps: (chunk) => {
                  this._ongoingPromise = void 0;
                  queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
                },
                _closeSteps: () => {
                  this._ongoingPromise = void 0;
                  this._isFinished = true;
                  ReadableStreamReaderGenericRelease(reader);
                  resolvePromise({ value: void 0, done: true });
                },
                _errorSteps: (reason) => {
                  this._ongoingPromise = void 0;
                  this._isFinished = true;
                  ReadableStreamReaderGenericRelease(reader);
                  rejectPromise(reason);
                }
              };
              ReadableStreamDefaultReaderRead(reader, readRequest);
              return promise;
            }
            _returnSteps(value) {
              if (this._isFinished) {
                return Promise.resolve({ value, done: true });
              }
              this._isFinished = true;
              const reader = this._reader;
              if (reader._ownerReadableStream === void 0) {
                return promiseRejectedWith(readerLockException("finish iterating"));
              }
              if (!this._preventCancel) {
                const result = ReadableStreamReaderGenericCancel(reader, value);
                ReadableStreamReaderGenericRelease(reader);
                return transformPromiseWith(result, () => ({ value, done: true }));
              }
              ReadableStreamReaderGenericRelease(reader);
              return promiseResolvedWith({ value, done: true });
            }
          }
          const ReadableStreamAsyncIteratorPrototype = {
            next() {
              if (!IsReadableStreamAsyncIterator(this)) {
                return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
              }
              return this._asyncIteratorImpl.next();
            },
            return(value) {
              if (!IsReadableStreamAsyncIterator(this)) {
                return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
              }
              return this._asyncIteratorImpl.return(value);
            }
          };
          if (AsyncIteratorPrototype !== void 0) {
            Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
          }
          function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
            const reader = AcquireReadableStreamDefaultReader(stream);
            const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
            const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
            iterator._asyncIteratorImpl = impl;
            return iterator;
          }
          function IsReadableStreamAsyncIterator(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_asyncIteratorImpl")) {
              return false;
            }
            try {
              return x2._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
            } catch (_a) {
              return false;
            }
          }
          function streamAsyncIteratorBrandCheckException(name) {
            return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
          }
          const NumberIsNaN = Number.isNaN || function(x2) {
            return x2 !== x2;
          };
          function CreateArrayFromList(elements) {
            return elements.slice();
          }
          function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
            new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
          }
          function TransferArrayBuffer(O) {
            return O;
          }
          function IsDetachedBuffer(O) {
            return false;
          }
          function ArrayBufferSlice(buffer, begin, end) {
            if (buffer.slice) {
              return buffer.slice(begin, end);
            }
            const length = end - begin;
            const slice = new ArrayBuffer(length);
            CopyDataBlockBytes(slice, 0, buffer, begin, length);
            return slice;
          }
          function IsNonNegativeNumber(v) {
            if (typeof v !== "number") {
              return false;
            }
            if (NumberIsNaN(v)) {
              return false;
            }
            if (v < 0) {
              return false;
            }
            return true;
          }
          function CloneAsUint8Array(O) {
            const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
            return new Uint8Array(buffer);
          }
          function DequeueValue(container) {
            const pair = container._queue.shift();
            container._queueTotalSize -= pair.size;
            if (container._queueTotalSize < 0) {
              container._queueTotalSize = 0;
            }
            return pair.value;
          }
          function EnqueueValueWithSize(container, value, size) {
            if (!IsNonNegativeNumber(size) || size === Infinity) {
              throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
            }
            container._queue.push({ value, size });
            container._queueTotalSize += size;
          }
          function PeekQueueValue(container) {
            const pair = container._queue.peek();
            return pair.value;
          }
          function ResetQueue(container) {
            container._queue = new SimpleQueue();
            container._queueTotalSize = 0;
          }
          class ReadableStreamBYOBRequest {
            constructor() {
              throw new TypeError("Illegal constructor");
            }
            get view() {
              if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException("view");
              }
              return this._view;
            }
            respond(bytesWritten) {
              if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException("respond");
              }
              assertRequiredArgument(bytesWritten, 1, "respond");
              bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
              if (this._associatedReadableByteStreamController === void 0) {
                throw new TypeError("This BYOB request has been invalidated");
              }
              if (IsDetachedBuffer(this._view.buffer))
                ;
              ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
            }
            respondWithNewView(view) {
              if (!IsReadableStreamBYOBRequest(this)) {
                throw byobRequestBrandCheckException("respondWithNewView");
              }
              assertRequiredArgument(view, 1, "respondWithNewView");
              if (!ArrayBuffer.isView(view)) {
                throw new TypeError("You can only respond with array buffer views");
              }
              if (this._associatedReadableByteStreamController === void 0) {
                throw new TypeError("This BYOB request has been invalidated");
              }
              if (IsDetachedBuffer(view.buffer))
                ;
              ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
            }
          }
          Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
            respond: { enumerable: true },
            respondWithNewView: { enumerable: true },
            view: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
              value: "ReadableStreamBYOBRequest",
              configurable: true
            });
          }
          class ReadableByteStreamController {
            constructor() {
              throw new TypeError("Illegal constructor");
            }
            get byobRequest() {
              if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException("byobRequest");
              }
              return ReadableByteStreamControllerGetBYOBRequest(this);
            }
            get desiredSize() {
              if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException("desiredSize");
              }
              return ReadableByteStreamControllerGetDesiredSize(this);
            }
            close() {
              if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException("close");
              }
              if (this._closeRequested) {
                throw new TypeError("The stream has already been closed; do not close it again!");
              }
              const state = this._controlledReadableByteStream._state;
              if (state !== "readable") {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
              }
              ReadableByteStreamControllerClose(this);
            }
            enqueue(chunk) {
              if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException("enqueue");
              }
              assertRequiredArgument(chunk, 1, "enqueue");
              if (!ArrayBuffer.isView(chunk)) {
                throw new TypeError("chunk must be an array buffer view");
              }
              if (chunk.byteLength === 0) {
                throw new TypeError("chunk must have non-zero byteLength");
              }
              if (chunk.buffer.byteLength === 0) {
                throw new TypeError(`chunk's buffer must have non-zero byteLength`);
              }
              if (this._closeRequested) {
                throw new TypeError("stream is closed or draining");
              }
              const state = this._controlledReadableByteStream._state;
              if (state !== "readable") {
                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
              }
              ReadableByteStreamControllerEnqueue(this, chunk);
            }
            error(e2 = void 0) {
              if (!IsReadableByteStreamController(this)) {
                throw byteStreamControllerBrandCheckException("error");
              }
              ReadableByteStreamControllerError(this, e2);
            }
            [CancelSteps](reason) {
              ReadableByteStreamControllerClearPendingPullIntos(this);
              ResetQueue(this);
              const result = this._cancelAlgorithm(reason);
              ReadableByteStreamControllerClearAlgorithms(this);
              return result;
            }
            [PullSteps](readRequest) {
              const stream = this._controlledReadableByteStream;
              if (this._queueTotalSize > 0) {
                const entry = this._queue.shift();
                this._queueTotalSize -= entry.byteLength;
                ReadableByteStreamControllerHandleQueueDrain(this);
                const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
                readRequest._chunkSteps(view);
                return;
              }
              const autoAllocateChunkSize = this._autoAllocateChunkSize;
              if (autoAllocateChunkSize !== void 0) {
                let buffer;
                try {
                  buffer = new ArrayBuffer(autoAllocateChunkSize);
                } catch (bufferE) {
                  readRequest._errorSteps(bufferE);
                  return;
                }
                const pullIntoDescriptor = {
                  buffer,
                  bufferByteLength: autoAllocateChunkSize,
                  byteOffset: 0,
                  byteLength: autoAllocateChunkSize,
                  bytesFilled: 0,
                  elementSize: 1,
                  viewConstructor: Uint8Array,
                  readerType: "default"
                };
                this._pendingPullIntos.push(pullIntoDescriptor);
              }
              ReadableStreamAddReadRequest(stream, readRequest);
              ReadableByteStreamControllerCallPullIfNeeded(this);
            }
          }
          Object.defineProperties(ReadableByteStreamController.prototype, {
            close: { enumerable: true },
            enqueue: { enumerable: true },
            error: { enumerable: true },
            byobRequest: { enumerable: true },
            desiredSize: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
              value: "ReadableByteStreamController",
              configurable: true
            });
          }
          function IsReadableByteStreamController(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableByteStream")) {
              return false;
            }
            return x2 instanceof ReadableByteStreamController;
          }
          function IsReadableStreamBYOBRequest(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_associatedReadableByteStreamController")) {
              return false;
            }
            return x2 instanceof ReadableStreamBYOBRequest;
          }
          function ReadableByteStreamControllerCallPullIfNeeded(controller) {
            const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
            if (!shouldPull) {
              return;
            }
            if (controller._pulling) {
              controller._pullAgain = true;
              return;
            }
            controller._pulling = true;
            const pullPromise = controller._pullAlgorithm();
            uponPromise(pullPromise, () => {
              controller._pulling = false;
              if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableByteStreamControllerCallPullIfNeeded(controller);
              }
            }, (e2) => {
              ReadableByteStreamControllerError(controller, e2);
            });
          }
          function ReadableByteStreamControllerClearPendingPullIntos(controller) {
            ReadableByteStreamControllerInvalidateBYOBRequest(controller);
            controller._pendingPullIntos = new SimpleQueue();
          }
          function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
            let done = false;
            if (stream._state === "closed") {
              done = true;
            }
            const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            if (pullIntoDescriptor.readerType === "default") {
              ReadableStreamFulfillReadRequest(stream, filledView, done);
            } else {
              ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
            }
          }
          function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
            const bytesFilled = pullIntoDescriptor.bytesFilled;
            const elementSize = pullIntoDescriptor.elementSize;
            return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
          }
          function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
            controller._queue.push({ buffer, byteOffset, byteLength });
            controller._queueTotalSize += byteLength;
          }
          function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
            const elementSize = pullIntoDescriptor.elementSize;
            const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
            const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
            const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
            const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
            let totalBytesToCopyRemaining = maxBytesToCopy;
            let ready = false;
            if (maxAlignedBytes > currentAlignedBytes) {
              totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
              ready = true;
            }
            const queue = controller._queue;
            while (totalBytesToCopyRemaining > 0) {
              const headOfQueue = queue.peek();
              const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
              const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
              CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
              if (headOfQueue.byteLength === bytesToCopy) {
                queue.shift();
              } else {
                headOfQueue.byteOffset += bytesToCopy;
                headOfQueue.byteLength -= bytesToCopy;
              }
              controller._queueTotalSize -= bytesToCopy;
              ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
              totalBytesToCopyRemaining -= bytesToCopy;
            }
            return ready;
          }
          function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
            pullIntoDescriptor.bytesFilled += size;
          }
          function ReadableByteStreamControllerHandleQueueDrain(controller) {
            if (controller._queueTotalSize === 0 && controller._closeRequested) {
              ReadableByteStreamControllerClearAlgorithms(controller);
              ReadableStreamClose(controller._controlledReadableByteStream);
            } else {
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }
          }
          function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
            if (controller._byobRequest === null) {
              return;
            }
            controller._byobRequest._associatedReadableByteStreamController = void 0;
            controller._byobRequest._view = null;
            controller._byobRequest = null;
          }
          function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
            while (controller._pendingPullIntos.length > 0) {
              if (controller._queueTotalSize === 0) {
                return;
              }
              const pullIntoDescriptor = controller._pendingPullIntos.peek();
              if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
              }
            }
          }
          function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
            const stream = controller._controlledReadableByteStream;
            let elementSize = 1;
            if (view.constructor !== DataView) {
              elementSize = view.constructor.BYTES_PER_ELEMENT;
            }
            const ctor = view.constructor;
            const buffer = TransferArrayBuffer(view.buffer);
            const pullIntoDescriptor = {
              buffer,
              bufferByteLength: buffer.byteLength,
              byteOffset: view.byteOffset,
              byteLength: view.byteLength,
              bytesFilled: 0,
              elementSize,
              viewConstructor: ctor,
              readerType: "byob"
            };
            if (controller._pendingPullIntos.length > 0) {
              controller._pendingPullIntos.push(pullIntoDescriptor);
              ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
              return;
            }
            if (stream._state === "closed") {
              const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
              readIntoRequest._closeSteps(emptyView);
              return;
            }
            if (controller._queueTotalSize > 0) {
              if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
                const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
                ReadableByteStreamControllerHandleQueueDrain(controller);
                readIntoRequest._chunkSteps(filledView);
                return;
              }
              if (controller._closeRequested) {
                const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
                ReadableByteStreamControllerError(controller, e2);
                readIntoRequest._errorSteps(e2);
                return;
              }
            }
            controller._pendingPullIntos.push(pullIntoDescriptor);
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
          function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
            const stream = controller._controlledReadableByteStream;
            if (ReadableStreamHasBYOBReader(stream)) {
              while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
                const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
                ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
              }
            }
          }
          function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
            if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
              return;
            }
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
            if (remainderSize > 0) {
              const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
              const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
              ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
            }
            pullIntoDescriptor.bytesFilled -= remainderSize;
            ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
          }
          function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            ReadableByteStreamControllerInvalidateBYOBRequest(controller);
            const state = controller._controlledReadableByteStream._state;
            if (state === "closed") {
              ReadableByteStreamControllerRespondInClosedState(controller);
            } else {
              ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
            }
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
          function ReadableByteStreamControllerShiftPendingPullInto(controller) {
            const descriptor = controller._pendingPullIntos.shift();
            return descriptor;
          }
          function ReadableByteStreamControllerShouldCallPull(controller) {
            const stream = controller._controlledReadableByteStream;
            if (stream._state !== "readable") {
              return false;
            }
            if (controller._closeRequested) {
              return false;
            }
            if (!controller._started) {
              return false;
            }
            if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
              return true;
            }
            if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
              return true;
            }
            const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
            if (desiredSize > 0) {
              return true;
            }
            return false;
          }
          function ReadableByteStreamControllerClearAlgorithms(controller) {
            controller._pullAlgorithm = void 0;
            controller._cancelAlgorithm = void 0;
          }
          function ReadableByteStreamControllerClose(controller) {
            const stream = controller._controlledReadableByteStream;
            if (controller._closeRequested || stream._state !== "readable") {
              return;
            }
            if (controller._queueTotalSize > 0) {
              controller._closeRequested = true;
              return;
            }
            if (controller._pendingPullIntos.length > 0) {
              const firstPendingPullInto = controller._pendingPullIntos.peek();
              if (firstPendingPullInto.bytesFilled > 0) {
                const e2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
                ReadableByteStreamControllerError(controller, e2);
                throw e2;
              }
            }
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamClose(stream);
          }
          function ReadableByteStreamControllerEnqueue(controller, chunk) {
            const stream = controller._controlledReadableByteStream;
            if (controller._closeRequested || stream._state !== "readable") {
              return;
            }
            const buffer = chunk.buffer;
            const byteOffset = chunk.byteOffset;
            const byteLength = chunk.byteLength;
            const transferredBuffer = TransferArrayBuffer(buffer);
            if (controller._pendingPullIntos.length > 0) {
              const firstPendingPullInto = controller._pendingPullIntos.peek();
              if (IsDetachedBuffer(firstPendingPullInto.buffer))
                ;
              firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
            }
            ReadableByteStreamControllerInvalidateBYOBRequest(controller);
            if (ReadableStreamHasDefaultReader(stream)) {
              if (ReadableStreamGetNumReadRequests(stream) === 0) {
                ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
              } else {
                if (controller._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerShiftPendingPullInto(controller);
                }
                const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
                ReadableStreamFulfillReadRequest(stream, transferredView, false);
              }
            } else if (ReadableStreamHasBYOBReader(stream)) {
              ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
              ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
            } else {
              ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
            }
            ReadableByteStreamControllerCallPullIfNeeded(controller);
          }
          function ReadableByteStreamControllerError(controller, e2) {
            const stream = controller._controlledReadableByteStream;
            if (stream._state !== "readable") {
              return;
            }
            ReadableByteStreamControllerClearPendingPullIntos(controller);
            ResetQueue(controller);
            ReadableByteStreamControllerClearAlgorithms(controller);
            ReadableStreamError(stream, e2);
          }
          function ReadableByteStreamControllerGetBYOBRequest(controller) {
            if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
              const firstDescriptor = controller._pendingPullIntos.peek();
              const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
              const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
              SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
              controller._byobRequest = byobRequest;
            }
            return controller._byobRequest;
          }
          function ReadableByteStreamControllerGetDesiredSize(controller) {
            const state = controller._controlledReadableByteStream._state;
            if (state === "errored") {
              return null;
            }
            if (state === "closed") {
              return 0;
            }
            return controller._strategyHWM - controller._queueTotalSize;
          }
          function ReadableByteStreamControllerRespond(controller, bytesWritten) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            const state = controller._controlledReadableByteStream._state;
            if (state === "closed") {
              if (bytesWritten !== 0) {
                throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
              }
            } else {
              if (bytesWritten === 0) {
                throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
              }
              if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
                throw new RangeError("bytesWritten out of range");
              }
            }
            firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
            ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
          }
          function ReadableByteStreamControllerRespondWithNewView(controller, view) {
            const firstDescriptor = controller._pendingPullIntos.peek();
            const state = controller._controlledReadableByteStream._state;
            if (state === "closed") {
              if (view.byteLength !== 0) {
                throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
              }
            } else {
              if (view.byteLength === 0) {
                throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
              }
            }
            if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
              throw new RangeError("The region specified by view does not match byobRequest");
            }
            if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
              throw new RangeError("The buffer of view has different capacity than byobRequest");
            }
            if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
              throw new RangeError("The region specified by view is larger than byobRequest");
            }
            const viewByteLength = view.byteLength;
            firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
            ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
          }
          function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
            controller._controlledReadableByteStream = stream;
            controller._pullAgain = false;
            controller._pulling = false;
            controller._byobRequest = null;
            controller._queue = controller._queueTotalSize = void 0;
            ResetQueue(controller);
            controller._closeRequested = false;
            controller._started = false;
            controller._strategyHWM = highWaterMark;
            controller._pullAlgorithm = pullAlgorithm;
            controller._cancelAlgorithm = cancelAlgorithm;
            controller._autoAllocateChunkSize = autoAllocateChunkSize;
            controller._pendingPullIntos = new SimpleQueue();
            stream._readableStreamController = controller;
            const startResult = startAlgorithm();
            uponPromise(promiseResolvedWith(startResult), () => {
              controller._started = true;
              ReadableByteStreamControllerCallPullIfNeeded(controller);
            }, (r2) => {
              ReadableByteStreamControllerError(controller, r2);
            });
          }
          function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
            const controller = Object.create(ReadableByteStreamController.prototype);
            let startAlgorithm = () => void 0;
            let pullAlgorithm = () => promiseResolvedWith(void 0);
            let cancelAlgorithm = () => promiseResolvedWith(void 0);
            if (underlyingByteSource.start !== void 0) {
              startAlgorithm = () => underlyingByteSource.start(controller);
            }
            if (underlyingByteSource.pull !== void 0) {
              pullAlgorithm = () => underlyingByteSource.pull(controller);
            }
            if (underlyingByteSource.cancel !== void 0) {
              cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
            }
            const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
            if (autoAllocateChunkSize === 0) {
              throw new TypeError("autoAllocateChunkSize must be greater than 0");
            }
            SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
          }
          function SetUpReadableStreamBYOBRequest(request, controller, view) {
            request._associatedReadableByteStreamController = controller;
            request._view = view;
          }
          function byobRequestBrandCheckException(name) {
            return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
          }
          function byteStreamControllerBrandCheckException(name) {
            return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
          }
          function AcquireReadableStreamBYOBReader(stream) {
            return new ReadableStreamBYOBReader(stream);
          }
          function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
            stream._reader._readIntoRequests.push(readIntoRequest);
          }
          function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
            const reader = stream._reader;
            const readIntoRequest = reader._readIntoRequests.shift();
            if (done) {
              readIntoRequest._closeSteps(chunk);
            } else {
              readIntoRequest._chunkSteps(chunk);
            }
          }
          function ReadableStreamGetNumReadIntoRequests(stream) {
            return stream._reader._readIntoRequests.length;
          }
          function ReadableStreamHasBYOBReader(stream) {
            const reader = stream._reader;
            if (reader === void 0) {
              return false;
            }
            if (!IsReadableStreamBYOBReader(reader)) {
              return false;
            }
            return true;
          }
          class ReadableStreamBYOBReader {
            constructor(stream) {
              assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
              assertReadableStream(stream, "First parameter");
              if (IsReadableStreamLocked(stream)) {
                throw new TypeError("This stream has already been locked for exclusive reading by another reader");
              }
              if (!IsReadableByteStreamController(stream._readableStreamController)) {
                throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
              }
              ReadableStreamReaderGenericInitialize(this, stream);
              this._readIntoRequests = new SimpleQueue();
            }
            get closed() {
              if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException("closed"));
              }
              return this._closedPromise;
            }
            cancel(reason = void 0) {
              if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
              }
              if (this._ownerReadableStream === void 0) {
                return promiseRejectedWith(readerLockException("cancel"));
              }
              return ReadableStreamReaderGenericCancel(this, reason);
            }
            read(view) {
              if (!IsReadableStreamBYOBReader(this)) {
                return promiseRejectedWith(byobReaderBrandCheckException("read"));
              }
              if (!ArrayBuffer.isView(view)) {
                return promiseRejectedWith(new TypeError("view must be an array buffer view"));
              }
              if (view.byteLength === 0) {
                return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
              }
              if (view.buffer.byteLength === 0) {
                return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
              }
              if (IsDetachedBuffer(view.buffer))
                ;
              if (this._ownerReadableStream === void 0) {
                return promiseRejectedWith(readerLockException("read from"));
              }
              let resolvePromise;
              let rejectPromise;
              const promise = newPromise((resolve, reject) => {
                resolvePromise = resolve;
                rejectPromise = reject;
              });
              const readIntoRequest = {
                _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
                _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
                _errorSteps: (e2) => rejectPromise(e2)
              };
              ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
              return promise;
            }
            releaseLock() {
              if (!IsReadableStreamBYOBReader(this)) {
                throw byobReaderBrandCheckException("releaseLock");
              }
              if (this._ownerReadableStream === void 0) {
                return;
              }
              if (this._readIntoRequests.length > 0) {
                throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
              }
              ReadableStreamReaderGenericRelease(this);
            }
          }
          Object.defineProperties(ReadableStreamBYOBReader.prototype, {
            cancel: { enumerable: true },
            read: { enumerable: true },
            releaseLock: { enumerable: true },
            closed: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
              value: "ReadableStreamBYOBReader",
              configurable: true
            });
          }
          function IsReadableStreamBYOBReader(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_readIntoRequests")) {
              return false;
            }
            return x2 instanceof ReadableStreamBYOBReader;
          }
          function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
            const stream = reader._ownerReadableStream;
            stream._disturbed = true;
            if (stream._state === "errored") {
              readIntoRequest._errorSteps(stream._storedError);
            } else {
              ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
            }
          }
          function byobReaderBrandCheckException(name) {
            return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
          }
          function ExtractHighWaterMark(strategy, defaultHWM) {
            const { highWaterMark } = strategy;
            if (highWaterMark === void 0) {
              return defaultHWM;
            }
            if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
              throw new RangeError("Invalid highWaterMark");
            }
            return highWaterMark;
          }
          function ExtractSizeAlgorithm(strategy) {
            const { size } = strategy;
            if (!size) {
              return () => 1;
            }
            return size;
          }
          function convertQueuingStrategy(init, context) {
            assertDictionary(init, context);
            const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
            const size = init === null || init === void 0 ? void 0 : init.size;
            return {
              highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
              size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
            };
          }
          function convertQueuingStrategySize(fn, context) {
            assertFunction(fn, context);
            return (chunk) => convertUnrestrictedDouble(fn(chunk));
          }
          function convertUnderlyingSink(original, context) {
            assertDictionary(original, context);
            const abort = original === null || original === void 0 ? void 0 : original.abort;
            const close = original === null || original === void 0 ? void 0 : original.close;
            const start = original === null || original === void 0 ? void 0 : original.start;
            const type = original === null || original === void 0 ? void 0 : original.type;
            const write = original === null || original === void 0 ? void 0 : original.write;
            return {
              abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
              close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
              start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
              write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
              type
            };
          }
          function convertUnderlyingSinkAbortCallback(fn, original, context) {
            assertFunction(fn, context);
            return (reason) => promiseCall(fn, original, [reason]);
          }
          function convertUnderlyingSinkCloseCallback(fn, original, context) {
            assertFunction(fn, context);
            return () => promiseCall(fn, original, []);
          }
          function convertUnderlyingSinkStartCallback(fn, original, context) {
            assertFunction(fn, context);
            return (controller) => reflectCall(fn, original, [controller]);
          }
          function convertUnderlyingSinkWriteCallback(fn, original, context) {
            assertFunction(fn, context);
            return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
          }
          function assertWritableStream(x2, context) {
            if (!IsWritableStream(x2)) {
              throw new TypeError(`${context} is not a WritableStream.`);
            }
          }
          function isAbortSignal2(value) {
            if (typeof value !== "object" || value === null) {
              return false;
            }
            try {
              return typeof value.aborted === "boolean";
            } catch (_a) {
              return false;
            }
          }
          const supportsAbortController = typeof AbortController === "function";
          function createAbortController() {
            if (supportsAbortController) {
              return new AbortController();
            }
            return void 0;
          }
          class WritableStream {
            constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
              if (rawUnderlyingSink === void 0) {
                rawUnderlyingSink = null;
              } else {
                assertObject(rawUnderlyingSink, "First parameter");
              }
              const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
              const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
              InitializeWritableStream(this);
              const type = underlyingSink.type;
              if (type !== void 0) {
                throw new RangeError("Invalid type is specified");
              }
              const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
              const highWaterMark = ExtractHighWaterMark(strategy, 1);
              SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
            }
            get locked() {
              if (!IsWritableStream(this)) {
                throw streamBrandCheckException$2("locked");
              }
              return IsWritableStreamLocked(this);
            }
            abort(reason = void 0) {
              if (!IsWritableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$2("abort"));
              }
              if (IsWritableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
              }
              return WritableStreamAbort(this, reason);
            }
            close() {
              if (!IsWritableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$2("close"));
              }
              if (IsWritableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
              }
              if (WritableStreamCloseQueuedOrInFlight(this)) {
                return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
              }
              return WritableStreamClose(this);
            }
            getWriter() {
              if (!IsWritableStream(this)) {
                throw streamBrandCheckException$2("getWriter");
              }
              return AcquireWritableStreamDefaultWriter(this);
            }
          }
          Object.defineProperties(WritableStream.prototype, {
            abort: { enumerable: true },
            close: { enumerable: true },
            getWriter: { enumerable: true },
            locked: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
              value: "WritableStream",
              configurable: true
            });
          }
          function AcquireWritableStreamDefaultWriter(stream) {
            return new WritableStreamDefaultWriter(stream);
          }
          function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
            const stream = Object.create(WritableStream.prototype);
            InitializeWritableStream(stream);
            const controller = Object.create(WritableStreamDefaultController.prototype);
            SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
            return stream;
          }
          function InitializeWritableStream(stream) {
            stream._state = "writable";
            stream._storedError = void 0;
            stream._writer = void 0;
            stream._writableStreamController = void 0;
            stream._writeRequests = new SimpleQueue();
            stream._inFlightWriteRequest = void 0;
            stream._closeRequest = void 0;
            stream._inFlightCloseRequest = void 0;
            stream._pendingAbortRequest = void 0;
            stream._backpressure = false;
          }
          function IsWritableStream(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_writableStreamController")) {
              return false;
            }
            return x2 instanceof WritableStream;
          }
          function IsWritableStreamLocked(stream) {
            if (stream._writer === void 0) {
              return false;
            }
            return true;
          }
          function WritableStreamAbort(stream, reason) {
            var _a;
            if (stream._state === "closed" || stream._state === "errored") {
              return promiseResolvedWith(void 0);
            }
            stream._writableStreamController._abortReason = reason;
            (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
            const state = stream._state;
            if (state === "closed" || state === "errored") {
              return promiseResolvedWith(void 0);
            }
            if (stream._pendingAbortRequest !== void 0) {
              return stream._pendingAbortRequest._promise;
            }
            let wasAlreadyErroring = false;
            if (state === "erroring") {
              wasAlreadyErroring = true;
              reason = void 0;
            }
            const promise = newPromise((resolve, reject) => {
              stream._pendingAbortRequest = {
                _promise: void 0,
                _resolve: resolve,
                _reject: reject,
                _reason: reason,
                _wasAlreadyErroring: wasAlreadyErroring
              };
            });
            stream._pendingAbortRequest._promise = promise;
            if (!wasAlreadyErroring) {
              WritableStreamStartErroring(stream, reason);
            }
            return promise;
          }
          function WritableStreamClose(stream) {
            const state = stream._state;
            if (state === "closed" || state === "errored") {
              return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
            }
            const promise = newPromise((resolve, reject) => {
              const closeRequest = {
                _resolve: resolve,
                _reject: reject
              };
              stream._closeRequest = closeRequest;
            });
            const writer = stream._writer;
            if (writer !== void 0 && stream._backpressure && state === "writable") {
              defaultWriterReadyPromiseResolve(writer);
            }
            WritableStreamDefaultControllerClose(stream._writableStreamController);
            return promise;
          }
          function WritableStreamAddWriteRequest(stream) {
            const promise = newPromise((resolve, reject) => {
              const writeRequest = {
                _resolve: resolve,
                _reject: reject
              };
              stream._writeRequests.push(writeRequest);
            });
            return promise;
          }
          function WritableStreamDealWithRejection(stream, error) {
            const state = stream._state;
            if (state === "writable") {
              WritableStreamStartErroring(stream, error);
              return;
            }
            WritableStreamFinishErroring(stream);
          }
          function WritableStreamStartErroring(stream, reason) {
            const controller = stream._writableStreamController;
            stream._state = "erroring";
            stream._storedError = reason;
            const writer = stream._writer;
            if (writer !== void 0) {
              WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
            }
            if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
              WritableStreamFinishErroring(stream);
            }
          }
          function WritableStreamFinishErroring(stream) {
            stream._state = "errored";
            stream._writableStreamController[ErrorSteps]();
            const storedError = stream._storedError;
            stream._writeRequests.forEach((writeRequest) => {
              writeRequest._reject(storedError);
            });
            stream._writeRequests = new SimpleQueue();
            if (stream._pendingAbortRequest === void 0) {
              WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
              return;
            }
            const abortRequest = stream._pendingAbortRequest;
            stream._pendingAbortRequest = void 0;
            if (abortRequest._wasAlreadyErroring) {
              abortRequest._reject(storedError);
              WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
              return;
            }
            const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
            uponPromise(promise, () => {
              abortRequest._resolve();
              WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            }, (reason) => {
              abortRequest._reject(reason);
              WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
            });
          }
          function WritableStreamFinishInFlightWrite(stream) {
            stream._inFlightWriteRequest._resolve(void 0);
            stream._inFlightWriteRequest = void 0;
          }
          function WritableStreamFinishInFlightWriteWithError(stream, error) {
            stream._inFlightWriteRequest._reject(error);
            stream._inFlightWriteRequest = void 0;
            WritableStreamDealWithRejection(stream, error);
          }
          function WritableStreamFinishInFlightClose(stream) {
            stream._inFlightCloseRequest._resolve(void 0);
            stream._inFlightCloseRequest = void 0;
            const state = stream._state;
            if (state === "erroring") {
              stream._storedError = void 0;
              if (stream._pendingAbortRequest !== void 0) {
                stream._pendingAbortRequest._resolve();
                stream._pendingAbortRequest = void 0;
              }
            }
            stream._state = "closed";
            const writer = stream._writer;
            if (writer !== void 0) {
              defaultWriterClosedPromiseResolve(writer);
            }
          }
          function WritableStreamFinishInFlightCloseWithError(stream, error) {
            stream._inFlightCloseRequest._reject(error);
            stream._inFlightCloseRequest = void 0;
            if (stream._pendingAbortRequest !== void 0) {
              stream._pendingAbortRequest._reject(error);
              stream._pendingAbortRequest = void 0;
            }
            WritableStreamDealWithRejection(stream, error);
          }
          function WritableStreamCloseQueuedOrInFlight(stream) {
            if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
              return false;
            }
            return true;
          }
          function WritableStreamHasOperationMarkedInFlight(stream) {
            if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
              return false;
            }
            return true;
          }
          function WritableStreamMarkCloseRequestInFlight(stream) {
            stream._inFlightCloseRequest = stream._closeRequest;
            stream._closeRequest = void 0;
          }
          function WritableStreamMarkFirstWriteRequestInFlight(stream) {
            stream._inFlightWriteRequest = stream._writeRequests.shift();
          }
          function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
            if (stream._closeRequest !== void 0) {
              stream._closeRequest._reject(stream._storedError);
              stream._closeRequest = void 0;
            }
            const writer = stream._writer;
            if (writer !== void 0) {
              defaultWriterClosedPromiseReject(writer, stream._storedError);
            }
          }
          function WritableStreamUpdateBackpressure(stream, backpressure) {
            const writer = stream._writer;
            if (writer !== void 0 && backpressure !== stream._backpressure) {
              if (backpressure) {
                defaultWriterReadyPromiseReset(writer);
              } else {
                defaultWriterReadyPromiseResolve(writer);
              }
            }
            stream._backpressure = backpressure;
          }
          class WritableStreamDefaultWriter {
            constructor(stream) {
              assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
              assertWritableStream(stream, "First parameter");
              if (IsWritableStreamLocked(stream)) {
                throw new TypeError("This stream has already been locked for exclusive writing by another writer");
              }
              this._ownerWritableStream = stream;
              stream._writer = this;
              const state = stream._state;
              if (state === "writable") {
                if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                  defaultWriterReadyPromiseInitialize(this);
                } else {
                  defaultWriterReadyPromiseInitializeAsResolved(this);
                }
                defaultWriterClosedPromiseInitialize(this);
              } else if (state === "erroring") {
                defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
                defaultWriterClosedPromiseInitialize(this);
              } else if (state === "closed") {
                defaultWriterReadyPromiseInitializeAsResolved(this);
                defaultWriterClosedPromiseInitializeAsResolved(this);
              } else {
                const storedError = stream._storedError;
                defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
                defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
              }
            }
            get closed() {
              if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
              }
              return this._closedPromise;
            }
            get desiredSize() {
              if (!IsWritableStreamDefaultWriter(this)) {
                throw defaultWriterBrandCheckException("desiredSize");
              }
              if (this._ownerWritableStream === void 0) {
                throw defaultWriterLockException("desiredSize");
              }
              return WritableStreamDefaultWriterGetDesiredSize(this);
            }
            get ready() {
              if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
              }
              return this._readyPromise;
            }
            abort(reason = void 0) {
              if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
              }
              if (this._ownerWritableStream === void 0) {
                return promiseRejectedWith(defaultWriterLockException("abort"));
              }
              return WritableStreamDefaultWriterAbort(this, reason);
            }
            close() {
              if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException("close"));
              }
              const stream = this._ownerWritableStream;
              if (stream === void 0) {
                return promiseRejectedWith(defaultWriterLockException("close"));
              }
              if (WritableStreamCloseQueuedOrInFlight(stream)) {
                return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
              }
              return WritableStreamDefaultWriterClose(this);
            }
            releaseLock() {
              if (!IsWritableStreamDefaultWriter(this)) {
                throw defaultWriterBrandCheckException("releaseLock");
              }
              const stream = this._ownerWritableStream;
              if (stream === void 0) {
                return;
              }
              WritableStreamDefaultWriterRelease(this);
            }
            write(chunk = void 0) {
              if (!IsWritableStreamDefaultWriter(this)) {
                return promiseRejectedWith(defaultWriterBrandCheckException("write"));
              }
              if (this._ownerWritableStream === void 0) {
                return promiseRejectedWith(defaultWriterLockException("write to"));
              }
              return WritableStreamDefaultWriterWrite(this, chunk);
            }
          }
          Object.defineProperties(WritableStreamDefaultWriter.prototype, {
            abort: { enumerable: true },
            close: { enumerable: true },
            releaseLock: { enumerable: true },
            write: { enumerable: true },
            closed: { enumerable: true },
            desiredSize: { enumerable: true },
            ready: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
              value: "WritableStreamDefaultWriter",
              configurable: true
            });
          }
          function IsWritableStreamDefaultWriter(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_ownerWritableStream")) {
              return false;
            }
            return x2 instanceof WritableStreamDefaultWriter;
          }
          function WritableStreamDefaultWriterAbort(writer, reason) {
            const stream = writer._ownerWritableStream;
            return WritableStreamAbort(stream, reason);
          }
          function WritableStreamDefaultWriterClose(writer) {
            const stream = writer._ownerWritableStream;
            return WritableStreamClose(stream);
          }
          function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
            const stream = writer._ownerWritableStream;
            const state = stream._state;
            if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
              return promiseResolvedWith(void 0);
            }
            if (state === "errored") {
              return promiseRejectedWith(stream._storedError);
            }
            return WritableStreamDefaultWriterClose(writer);
          }
          function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
            if (writer._closedPromiseState === "pending") {
              defaultWriterClosedPromiseReject(writer, error);
            } else {
              defaultWriterClosedPromiseResetToRejected(writer, error);
            }
          }
          function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
            if (writer._readyPromiseState === "pending") {
              defaultWriterReadyPromiseReject(writer, error);
            } else {
              defaultWriterReadyPromiseResetToRejected(writer, error);
            }
          }
          function WritableStreamDefaultWriterGetDesiredSize(writer) {
            const stream = writer._ownerWritableStream;
            const state = stream._state;
            if (state === "errored" || state === "erroring") {
              return null;
            }
            if (state === "closed") {
              return 0;
            }
            return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
          }
          function WritableStreamDefaultWriterRelease(writer) {
            const stream = writer._ownerWritableStream;
            const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
            WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
            stream._writer = void 0;
            writer._ownerWritableStream = void 0;
          }
          function WritableStreamDefaultWriterWrite(writer, chunk) {
            const stream = writer._ownerWritableStream;
            const controller = stream._writableStreamController;
            const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
            if (stream !== writer._ownerWritableStream) {
              return promiseRejectedWith(defaultWriterLockException("write to"));
            }
            const state = stream._state;
            if (state === "errored") {
              return promiseRejectedWith(stream._storedError);
            }
            if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
              return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
            }
            if (state === "erroring") {
              return promiseRejectedWith(stream._storedError);
            }
            const promise = WritableStreamAddWriteRequest(stream);
            WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
            return promise;
          }
          const closeSentinel = {};
          class WritableStreamDefaultController {
            constructor() {
              throw new TypeError("Illegal constructor");
            }
            get abortReason() {
              if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2("abortReason");
              }
              return this._abortReason;
            }
            get signal() {
              if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2("signal");
              }
              if (this._abortController === void 0) {
                throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
              }
              return this._abortController.signal;
            }
            error(e2 = void 0) {
              if (!IsWritableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$2("error");
              }
              const state = this._controlledWritableStream._state;
              if (state !== "writable") {
                return;
              }
              WritableStreamDefaultControllerError(this, e2);
            }
            [AbortSteps](reason) {
              const result = this._abortAlgorithm(reason);
              WritableStreamDefaultControllerClearAlgorithms(this);
              return result;
            }
            [ErrorSteps]() {
              ResetQueue(this);
            }
          }
          Object.defineProperties(WritableStreamDefaultController.prototype, {
            abortReason: { enumerable: true },
            signal: { enumerable: true },
            error: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
              value: "WritableStreamDefaultController",
              configurable: true
            });
          }
          function IsWritableStreamDefaultController(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_controlledWritableStream")) {
              return false;
            }
            return x2 instanceof WritableStreamDefaultController;
          }
          function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
            controller._controlledWritableStream = stream;
            stream._writableStreamController = controller;
            controller._queue = void 0;
            controller._queueTotalSize = void 0;
            ResetQueue(controller);
            controller._abortReason = void 0;
            controller._abortController = createAbortController();
            controller._started = false;
            controller._strategySizeAlgorithm = sizeAlgorithm;
            controller._strategyHWM = highWaterMark;
            controller._writeAlgorithm = writeAlgorithm;
            controller._closeAlgorithm = closeAlgorithm;
            controller._abortAlgorithm = abortAlgorithm;
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
            const startResult = startAlgorithm();
            const startPromise = promiseResolvedWith(startResult);
            uponPromise(startPromise, () => {
              controller._started = true;
              WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
            }, (r2) => {
              controller._started = true;
              WritableStreamDealWithRejection(stream, r2);
            });
          }
          function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
            const controller = Object.create(WritableStreamDefaultController.prototype);
            let startAlgorithm = () => void 0;
            let writeAlgorithm = () => promiseResolvedWith(void 0);
            let closeAlgorithm = () => promiseResolvedWith(void 0);
            let abortAlgorithm = () => promiseResolvedWith(void 0);
            if (underlyingSink.start !== void 0) {
              startAlgorithm = () => underlyingSink.start(controller);
            }
            if (underlyingSink.write !== void 0) {
              writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
            }
            if (underlyingSink.close !== void 0) {
              closeAlgorithm = () => underlyingSink.close();
            }
            if (underlyingSink.abort !== void 0) {
              abortAlgorithm = (reason) => underlyingSink.abort(reason);
            }
            SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
          }
          function WritableStreamDefaultControllerClearAlgorithms(controller) {
            controller._writeAlgorithm = void 0;
            controller._closeAlgorithm = void 0;
            controller._abortAlgorithm = void 0;
            controller._strategySizeAlgorithm = void 0;
          }
          function WritableStreamDefaultControllerClose(controller) {
            EnqueueValueWithSize(controller, closeSentinel, 0);
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }
          function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
            try {
              return controller._strategySizeAlgorithm(chunk);
            } catch (chunkSizeE) {
              WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
              return 1;
            }
          }
          function WritableStreamDefaultControllerGetDesiredSize(controller) {
            return controller._strategyHWM - controller._queueTotalSize;
          }
          function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
            try {
              EnqueueValueWithSize(controller, chunk, chunkSize);
            } catch (enqueueE) {
              WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
              return;
            }
            const stream = controller._controlledWritableStream;
            if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
              const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
              WritableStreamUpdateBackpressure(stream, backpressure);
            }
            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
          }
          function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
            const stream = controller._controlledWritableStream;
            if (!controller._started) {
              return;
            }
            if (stream._inFlightWriteRequest !== void 0) {
              return;
            }
            const state = stream._state;
            if (state === "erroring") {
              WritableStreamFinishErroring(stream);
              return;
            }
            if (controller._queue.length === 0) {
              return;
            }
            const value = PeekQueueValue(controller);
            if (value === closeSentinel) {
              WritableStreamDefaultControllerProcessClose(controller);
            } else {
              WritableStreamDefaultControllerProcessWrite(controller, value);
            }
          }
          function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
            if (controller._controlledWritableStream._state === "writable") {
              WritableStreamDefaultControllerError(controller, error);
            }
          }
          function WritableStreamDefaultControllerProcessClose(controller) {
            const stream = controller._controlledWritableStream;
            WritableStreamMarkCloseRequestInFlight(stream);
            DequeueValue(controller);
            const sinkClosePromise = controller._closeAlgorithm();
            WritableStreamDefaultControllerClearAlgorithms(controller);
            uponPromise(sinkClosePromise, () => {
              WritableStreamFinishInFlightClose(stream);
            }, (reason) => {
              WritableStreamFinishInFlightCloseWithError(stream, reason);
            });
          }
          function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
            const stream = controller._controlledWritableStream;
            WritableStreamMarkFirstWriteRequestInFlight(stream);
            const sinkWritePromise = controller._writeAlgorithm(chunk);
            uponPromise(sinkWritePromise, () => {
              WritableStreamFinishInFlightWrite(stream);
              const state = stream._state;
              DequeueValue(controller);
              if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
                const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
                WritableStreamUpdateBackpressure(stream, backpressure);
              }
              WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
            }, (reason) => {
              if (stream._state === "writable") {
                WritableStreamDefaultControllerClearAlgorithms(controller);
              }
              WritableStreamFinishInFlightWriteWithError(stream, reason);
            });
          }
          function WritableStreamDefaultControllerGetBackpressure(controller) {
            const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
            return desiredSize <= 0;
          }
          function WritableStreamDefaultControllerError(controller, error) {
            const stream = controller._controlledWritableStream;
            WritableStreamDefaultControllerClearAlgorithms(controller);
            WritableStreamStartErroring(stream, error);
          }
          function streamBrandCheckException$2(name) {
            return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
          }
          function defaultControllerBrandCheckException$2(name) {
            return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
          }
          function defaultWriterBrandCheckException(name) {
            return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
          }
          function defaultWriterLockException(name) {
            return new TypeError("Cannot " + name + " a stream using a released writer");
          }
          function defaultWriterClosedPromiseInitialize(writer) {
            writer._closedPromise = newPromise((resolve, reject) => {
              writer._closedPromise_resolve = resolve;
              writer._closedPromise_reject = reject;
              writer._closedPromiseState = "pending";
            });
          }
          function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
            defaultWriterClosedPromiseInitialize(writer);
            defaultWriterClosedPromiseReject(writer, reason);
          }
          function defaultWriterClosedPromiseInitializeAsResolved(writer) {
            defaultWriterClosedPromiseInitialize(writer);
            defaultWriterClosedPromiseResolve(writer);
          }
          function defaultWriterClosedPromiseReject(writer, reason) {
            if (writer._closedPromise_reject === void 0) {
              return;
            }
            setPromiseIsHandledToTrue(writer._closedPromise);
            writer._closedPromise_reject(reason);
            writer._closedPromise_resolve = void 0;
            writer._closedPromise_reject = void 0;
            writer._closedPromiseState = "rejected";
          }
          function defaultWriterClosedPromiseResetToRejected(writer, reason) {
            defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
          }
          function defaultWriterClosedPromiseResolve(writer) {
            if (writer._closedPromise_resolve === void 0) {
              return;
            }
            writer._closedPromise_resolve(void 0);
            writer._closedPromise_resolve = void 0;
            writer._closedPromise_reject = void 0;
            writer._closedPromiseState = "resolved";
          }
          function defaultWriterReadyPromiseInitialize(writer) {
            writer._readyPromise = newPromise((resolve, reject) => {
              writer._readyPromise_resolve = resolve;
              writer._readyPromise_reject = reject;
            });
            writer._readyPromiseState = "pending";
          }
          function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
            defaultWriterReadyPromiseInitialize(writer);
            defaultWriterReadyPromiseReject(writer, reason);
          }
          function defaultWriterReadyPromiseInitializeAsResolved(writer) {
            defaultWriterReadyPromiseInitialize(writer);
            defaultWriterReadyPromiseResolve(writer);
          }
          function defaultWriterReadyPromiseReject(writer, reason) {
            if (writer._readyPromise_reject === void 0) {
              return;
            }
            setPromiseIsHandledToTrue(writer._readyPromise);
            writer._readyPromise_reject(reason);
            writer._readyPromise_resolve = void 0;
            writer._readyPromise_reject = void 0;
            writer._readyPromiseState = "rejected";
          }
          function defaultWriterReadyPromiseReset(writer) {
            defaultWriterReadyPromiseInitialize(writer);
          }
          function defaultWriterReadyPromiseResetToRejected(writer, reason) {
            defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
          }
          function defaultWriterReadyPromiseResolve(writer) {
            if (writer._readyPromise_resolve === void 0) {
              return;
            }
            writer._readyPromise_resolve(void 0);
            writer._readyPromise_resolve = void 0;
            writer._readyPromise_reject = void 0;
            writer._readyPromiseState = "fulfilled";
          }
          const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
          function isDOMExceptionConstructor(ctor) {
            if (!(typeof ctor === "function" || typeof ctor === "object")) {
              return false;
            }
            try {
              new ctor();
              return true;
            } catch (_a) {
              return false;
            }
          }
          function createDOMExceptionPolyfill() {
            const ctor = function DOMException22(message, name) {
              this.message = message || "";
              this.name = name || "Error";
              if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
              }
            };
            ctor.prototype = Object.create(Error.prototype);
            Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
            return ctor;
          }
          const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
          function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
            const reader = AcquireReadableStreamDefaultReader(source);
            const writer = AcquireWritableStreamDefaultWriter(dest);
            source._disturbed = true;
            let shuttingDown = false;
            let currentWrite = promiseResolvedWith(void 0);
            return newPromise((resolve, reject) => {
              let abortAlgorithm;
              if (signal !== void 0) {
                abortAlgorithm = () => {
                  const error = new DOMException$1("Aborted", "AbortError");
                  const actions = [];
                  if (!preventAbort) {
                    actions.push(() => {
                      if (dest._state === "writable") {
                        return WritableStreamAbort(dest, error);
                      }
                      return promiseResolvedWith(void 0);
                    });
                  }
                  if (!preventCancel) {
                    actions.push(() => {
                      if (source._state === "readable") {
                        return ReadableStreamCancel(source, error);
                      }
                      return promiseResolvedWith(void 0);
                    });
                  }
                  shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error);
                };
                if (signal.aborted) {
                  abortAlgorithm();
                  return;
                }
                signal.addEventListener("abort", abortAlgorithm);
              }
              function pipeLoop() {
                return newPromise((resolveLoop, rejectLoop) => {
                  function next(done) {
                    if (done) {
                      resolveLoop();
                    } else {
                      PerformPromiseThen(pipeStep(), next, rejectLoop);
                    }
                  }
                  next(false);
                });
              }
              function pipeStep() {
                if (shuttingDown) {
                  return promiseResolvedWith(true);
                }
                return PerformPromiseThen(writer._readyPromise, () => {
                  return newPromise((resolveRead, rejectRead) => {
                    ReadableStreamDefaultReaderRead(reader, {
                      _chunkSteps: (chunk) => {
                        currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop2);
                        resolveRead(false);
                      },
                      _closeSteps: () => resolveRead(true),
                      _errorSteps: rejectRead
                    });
                  });
                });
              }
              isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
                if (!preventAbort) {
                  shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
                } else {
                  shutdown(true, storedError);
                }
              });
              isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
                if (!preventCancel) {
                  shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
                } else {
                  shutdown(true, storedError);
                }
              });
              isOrBecomesClosed(source, reader._closedPromise, () => {
                if (!preventClose) {
                  shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
                } else {
                  shutdown();
                }
              });
              if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
                const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
                if (!preventCancel) {
                  shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
                } else {
                  shutdown(true, destClosed);
                }
              }
              setPromiseIsHandledToTrue(pipeLoop());
              function waitForWritesToFinish() {
                const oldCurrentWrite = currentWrite;
                return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
              }
              function isOrBecomesErrored(stream, promise, action) {
                if (stream._state === "errored") {
                  action(stream._storedError);
                } else {
                  uponRejection(promise, action);
                }
              }
              function isOrBecomesClosed(stream, promise, action) {
                if (stream._state === "closed") {
                  action();
                } else {
                  uponFulfillment(promise, action);
                }
              }
              function shutdownWithAction(action, originalIsError, originalError) {
                if (shuttingDown) {
                  return;
                }
                shuttingDown = true;
                if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                  uponFulfillment(waitForWritesToFinish(), doTheRest);
                } else {
                  doTheRest();
                }
                function doTheRest() {
                  uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
                }
              }
              function shutdown(isError, error) {
                if (shuttingDown) {
                  return;
                }
                shuttingDown = true;
                if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
                  uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
                } else {
                  finalize(isError, error);
                }
              }
              function finalize(isError, error) {
                WritableStreamDefaultWriterRelease(writer);
                ReadableStreamReaderGenericRelease(reader);
                if (signal !== void 0) {
                  signal.removeEventListener("abort", abortAlgorithm);
                }
                if (isError) {
                  reject(error);
                } else {
                  resolve(void 0);
                }
              }
            });
          }
          class ReadableStreamDefaultController {
            constructor() {
              throw new TypeError("Illegal constructor");
            }
            get desiredSize() {
              if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1("desiredSize");
              }
              return ReadableStreamDefaultControllerGetDesiredSize(this);
            }
            close() {
              if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1("close");
              }
              if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                throw new TypeError("The stream is not in a state that permits close");
              }
              ReadableStreamDefaultControllerClose(this);
            }
            enqueue(chunk = void 0) {
              if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1("enqueue");
              }
              if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
                throw new TypeError("The stream is not in a state that permits enqueue");
              }
              return ReadableStreamDefaultControllerEnqueue(this, chunk);
            }
            error(e2 = void 0) {
              if (!IsReadableStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException$1("error");
              }
              ReadableStreamDefaultControllerError(this, e2);
            }
            [CancelSteps](reason) {
              ResetQueue(this);
              const result = this._cancelAlgorithm(reason);
              ReadableStreamDefaultControllerClearAlgorithms(this);
              return result;
            }
            [PullSteps](readRequest) {
              const stream = this._controlledReadableStream;
              if (this._queue.length > 0) {
                const chunk = DequeueValue(this);
                if (this._closeRequested && this._queue.length === 0) {
                  ReadableStreamDefaultControllerClearAlgorithms(this);
                  ReadableStreamClose(stream);
                } else {
                  ReadableStreamDefaultControllerCallPullIfNeeded(this);
                }
                readRequest._chunkSteps(chunk);
              } else {
                ReadableStreamAddReadRequest(stream, readRequest);
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
              }
            }
          }
          Object.defineProperties(ReadableStreamDefaultController.prototype, {
            close: { enumerable: true },
            enqueue: { enumerable: true },
            error: { enumerable: true },
            desiredSize: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
              value: "ReadableStreamDefaultController",
              configurable: true
            });
          }
          function IsReadableStreamDefaultController(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_controlledReadableStream")) {
              return false;
            }
            return x2 instanceof ReadableStreamDefaultController;
          }
          function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
            const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
            if (!shouldPull) {
              return;
            }
            if (controller._pulling) {
              controller._pullAgain = true;
              return;
            }
            controller._pulling = true;
            const pullPromise = controller._pullAlgorithm();
            uponPromise(pullPromise, () => {
              controller._pulling = false;
              if (controller._pullAgain) {
                controller._pullAgain = false;
                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
              }
            }, (e2) => {
              ReadableStreamDefaultControllerError(controller, e2);
            });
          }
          function ReadableStreamDefaultControllerShouldCallPull(controller) {
            const stream = controller._controlledReadableStream;
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
              return false;
            }
            if (!controller._started) {
              return false;
            }
            if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
              return true;
            }
            const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
            if (desiredSize > 0) {
              return true;
            }
            return false;
          }
          function ReadableStreamDefaultControllerClearAlgorithms(controller) {
            controller._pullAlgorithm = void 0;
            controller._cancelAlgorithm = void 0;
            controller._strategySizeAlgorithm = void 0;
          }
          function ReadableStreamDefaultControllerClose(controller) {
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
              return;
            }
            const stream = controller._controlledReadableStream;
            controller._closeRequested = true;
            if (controller._queue.length === 0) {
              ReadableStreamDefaultControllerClearAlgorithms(controller);
              ReadableStreamClose(stream);
            }
          }
          function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
              return;
            }
            const stream = controller._controlledReadableStream;
            if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
              ReadableStreamFulfillReadRequest(stream, chunk, false);
            } else {
              let chunkSize;
              try {
                chunkSize = controller._strategySizeAlgorithm(chunk);
              } catch (chunkSizeE) {
                ReadableStreamDefaultControllerError(controller, chunkSizeE);
                throw chunkSizeE;
              }
              try {
                EnqueueValueWithSize(controller, chunk, chunkSize);
              } catch (enqueueE) {
                ReadableStreamDefaultControllerError(controller, enqueueE);
                throw enqueueE;
              }
            }
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
          }
          function ReadableStreamDefaultControllerError(controller, e2) {
            const stream = controller._controlledReadableStream;
            if (stream._state !== "readable") {
              return;
            }
            ResetQueue(controller);
            ReadableStreamDefaultControllerClearAlgorithms(controller);
            ReadableStreamError(stream, e2);
          }
          function ReadableStreamDefaultControllerGetDesiredSize(controller) {
            const state = controller._controlledReadableStream._state;
            if (state === "errored") {
              return null;
            }
            if (state === "closed") {
              return 0;
            }
            return controller._strategyHWM - controller._queueTotalSize;
          }
          function ReadableStreamDefaultControllerHasBackpressure(controller) {
            if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
              return false;
            }
            return true;
          }
          function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
            const state = controller._controlledReadableStream._state;
            if (!controller._closeRequested && state === "readable") {
              return true;
            }
            return false;
          }
          function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
            controller._controlledReadableStream = stream;
            controller._queue = void 0;
            controller._queueTotalSize = void 0;
            ResetQueue(controller);
            controller._started = false;
            controller._closeRequested = false;
            controller._pullAgain = false;
            controller._pulling = false;
            controller._strategySizeAlgorithm = sizeAlgorithm;
            controller._strategyHWM = highWaterMark;
            controller._pullAlgorithm = pullAlgorithm;
            controller._cancelAlgorithm = cancelAlgorithm;
            stream._readableStreamController = controller;
            const startResult = startAlgorithm();
            uponPromise(promiseResolvedWith(startResult), () => {
              controller._started = true;
              ReadableStreamDefaultControllerCallPullIfNeeded(controller);
            }, (r2) => {
              ReadableStreamDefaultControllerError(controller, r2);
            });
          }
          function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
            const controller = Object.create(ReadableStreamDefaultController.prototype);
            let startAlgorithm = () => void 0;
            let pullAlgorithm = () => promiseResolvedWith(void 0);
            let cancelAlgorithm = () => promiseResolvedWith(void 0);
            if (underlyingSource.start !== void 0) {
              startAlgorithm = () => underlyingSource.start(controller);
            }
            if (underlyingSource.pull !== void 0) {
              pullAlgorithm = () => underlyingSource.pull(controller);
            }
            if (underlyingSource.cancel !== void 0) {
              cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
            }
            SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
          }
          function defaultControllerBrandCheckException$1(name) {
            return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
          }
          function ReadableStreamTee(stream, cloneForBranch2) {
            if (IsReadableByteStreamController(stream._readableStreamController)) {
              return ReadableByteStreamTee(stream);
            }
            return ReadableStreamDefaultTee(stream);
          }
          function ReadableStreamDefaultTee(stream, cloneForBranch2) {
            const reader = AcquireReadableStreamDefaultReader(stream);
            let reading = false;
            let readAgain = false;
            let canceled1 = false;
            let canceled2 = false;
            let reason1;
            let reason2;
            let branch1;
            let branch2;
            let resolveCancelPromise;
            const cancelPromise = newPromise((resolve) => {
              resolveCancelPromise = resolve;
            });
            function pullAlgorithm() {
              if (reading) {
                readAgain = true;
                return promiseResolvedWith(void 0);
              }
              reading = true;
              const readRequest = {
                _chunkSteps: (chunk) => {
                  queueMicrotask(() => {
                    readAgain = false;
                    const chunk1 = chunk;
                    const chunk2 = chunk;
                    if (!canceled1) {
                      ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                    }
                    if (!canceled2) {
                      ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                    }
                    reading = false;
                    if (readAgain) {
                      pullAlgorithm();
                    }
                  });
                },
                _closeSteps: () => {
                  reading = false;
                  if (!canceled1) {
                    ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                  }
                  if (!canceled2) {
                    ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                  }
                  if (!canceled1 || !canceled2) {
                    resolveCancelPromise(void 0);
                  }
                },
                _errorSteps: () => {
                  reading = false;
                }
              };
              ReadableStreamDefaultReaderRead(reader, readRequest);
              return promiseResolvedWith(void 0);
            }
            function cancel1Algorithm(reason) {
              canceled1 = true;
              reason1 = reason;
              if (canceled2) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
              }
              return cancelPromise;
            }
            function cancel2Algorithm(reason) {
              canceled2 = true;
              reason2 = reason;
              if (canceled1) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
              }
              return cancelPromise;
            }
            function startAlgorithm() {
            }
            branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
            branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
            uponRejection(reader._closedPromise, (r2) => {
              ReadableStreamDefaultControllerError(branch1._readableStreamController, r2);
              ReadableStreamDefaultControllerError(branch2._readableStreamController, r2);
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            });
            return [branch1, branch2];
          }
          function ReadableByteStreamTee(stream) {
            let reader = AcquireReadableStreamDefaultReader(stream);
            let reading = false;
            let readAgainForBranch1 = false;
            let readAgainForBranch2 = false;
            let canceled1 = false;
            let canceled2 = false;
            let reason1;
            let reason2;
            let branch1;
            let branch2;
            let resolveCancelPromise;
            const cancelPromise = newPromise((resolve) => {
              resolveCancelPromise = resolve;
            });
            function forwardReaderError(thisReader) {
              uponRejection(thisReader._closedPromise, (r2) => {
                if (thisReader !== reader) {
                  return;
                }
                ReadableByteStreamControllerError(branch1._readableStreamController, r2);
                ReadableByteStreamControllerError(branch2._readableStreamController, r2);
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(void 0);
                }
              });
            }
            function pullWithDefaultReader() {
              if (IsReadableStreamBYOBReader(reader)) {
                ReadableStreamReaderGenericRelease(reader);
                reader = AcquireReadableStreamDefaultReader(stream);
                forwardReaderError(reader);
              }
              const readRequest = {
                _chunkSteps: (chunk) => {
                  queueMicrotask(() => {
                    readAgainForBranch1 = false;
                    readAgainForBranch2 = false;
                    const chunk1 = chunk;
                    let chunk2 = chunk;
                    if (!canceled1 && !canceled2) {
                      try {
                        chunk2 = CloneAsUint8Array(chunk);
                      } catch (cloneE) {
                        ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                        ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                        resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                        return;
                      }
                    }
                    if (!canceled1) {
                      ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                    }
                    if (!canceled2) {
                      ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                    }
                    reading = false;
                    if (readAgainForBranch1) {
                      pull1Algorithm();
                    } else if (readAgainForBranch2) {
                      pull2Algorithm();
                    }
                  });
                },
                _closeSteps: () => {
                  reading = false;
                  if (!canceled1) {
                    ReadableByteStreamControllerClose(branch1._readableStreamController);
                  }
                  if (!canceled2) {
                    ReadableByteStreamControllerClose(branch2._readableStreamController);
                  }
                  if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                  }
                  if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                  }
                  if (!canceled1 || !canceled2) {
                    resolveCancelPromise(void 0);
                  }
                },
                _errorSteps: () => {
                  reading = false;
                }
              };
              ReadableStreamDefaultReaderRead(reader, readRequest);
            }
            function pullWithBYOBReader(view, forBranch2) {
              if (IsReadableStreamDefaultReader(reader)) {
                ReadableStreamReaderGenericRelease(reader);
                reader = AcquireReadableStreamBYOBReader(stream);
                forwardReaderError(reader);
              }
              const byobBranch = forBranch2 ? branch2 : branch1;
              const otherBranch = forBranch2 ? branch1 : branch2;
              const readIntoRequest = {
                _chunkSteps: (chunk) => {
                  queueMicrotask(() => {
                    readAgainForBranch1 = false;
                    readAgainForBranch2 = false;
                    const byobCanceled = forBranch2 ? canceled2 : canceled1;
                    const otherCanceled = forBranch2 ? canceled1 : canceled2;
                    if (!otherCanceled) {
                      let clonedChunk;
                      try {
                        clonedChunk = CloneAsUint8Array(chunk);
                      } catch (cloneE) {
                        ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                        ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                        resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                        return;
                      }
                      if (!byobCanceled) {
                        ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                      }
                      ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                    } else if (!byobCanceled) {
                      ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    reading = false;
                    if (readAgainForBranch1) {
                      pull1Algorithm();
                    } else if (readAgainForBranch2) {
                      pull2Algorithm();
                    }
                  });
                },
                _closeSteps: (chunk) => {
                  reading = false;
                  const byobCanceled = forBranch2 ? canceled2 : canceled1;
                  const otherCanceled = forBranch2 ? canceled1 : canceled2;
                  if (!byobCanceled) {
                    ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                  }
                  if (!otherCanceled) {
                    ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                  }
                  if (chunk !== void 0) {
                    if (!byobCanceled) {
                      ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                      ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                    }
                  }
                  if (!byobCanceled || !otherCanceled) {
                    resolveCancelPromise(void 0);
                  }
                },
                _errorSteps: () => {
                  reading = false;
                }
              };
              ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
            }
            function pull1Algorithm() {
              if (reading) {
                readAgainForBranch1 = true;
                return promiseResolvedWith(void 0);
              }
              reading = true;
              const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
              if (byobRequest === null) {
                pullWithDefaultReader();
              } else {
                pullWithBYOBReader(byobRequest._view, false);
              }
              return promiseResolvedWith(void 0);
            }
            function pull2Algorithm() {
              if (reading) {
                readAgainForBranch2 = true;
                return promiseResolvedWith(void 0);
              }
              reading = true;
              const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
              if (byobRequest === null) {
                pullWithDefaultReader();
              } else {
                pullWithBYOBReader(byobRequest._view, true);
              }
              return promiseResolvedWith(void 0);
            }
            function cancel1Algorithm(reason) {
              canceled1 = true;
              reason1 = reason;
              if (canceled2) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
              }
              return cancelPromise;
            }
            function cancel2Algorithm(reason) {
              canceled2 = true;
              reason2 = reason;
              if (canceled1) {
                const compositeReason = CreateArrayFromList([reason1, reason2]);
                const cancelResult = ReadableStreamCancel(stream, compositeReason);
                resolveCancelPromise(cancelResult);
              }
              return cancelPromise;
            }
            function startAlgorithm() {
              return;
            }
            branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
            branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
            forwardReaderError(reader);
            return [branch1, branch2];
          }
          function convertUnderlyingDefaultOrByteSource(source, context) {
            assertDictionary(source, context);
            const original = source;
            const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
            const cancel = original === null || original === void 0 ? void 0 : original.cancel;
            const pull = original === null || original === void 0 ? void 0 : original.pull;
            const start = original === null || original === void 0 ? void 0 : original.start;
            const type = original === null || original === void 0 ? void 0 : original.type;
            return {
              autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
              cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
              pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
              start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
              type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
            };
          }
          function convertUnderlyingSourceCancelCallback(fn, original, context) {
            assertFunction(fn, context);
            return (reason) => promiseCall(fn, original, [reason]);
          }
          function convertUnderlyingSourcePullCallback(fn, original, context) {
            assertFunction(fn, context);
            return (controller) => promiseCall(fn, original, [controller]);
          }
          function convertUnderlyingSourceStartCallback(fn, original, context) {
            assertFunction(fn, context);
            return (controller) => reflectCall(fn, original, [controller]);
          }
          function convertReadableStreamType(type, context) {
            type = `${type}`;
            if (type !== "bytes") {
              throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
            }
            return type;
          }
          function convertReaderOptions(options, context) {
            assertDictionary(options, context);
            const mode = options === null || options === void 0 ? void 0 : options.mode;
            return {
              mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
            };
          }
          function convertReadableStreamReaderMode(mode, context) {
            mode = `${mode}`;
            if (mode !== "byob") {
              throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
            }
            return mode;
          }
          function convertIteratorOptions(options, context) {
            assertDictionary(options, context);
            const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
            return { preventCancel: Boolean(preventCancel) };
          }
          function convertPipeOptions(options, context) {
            assertDictionary(options, context);
            const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
            const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
            const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
            const signal = options === null || options === void 0 ? void 0 : options.signal;
            if (signal !== void 0) {
              assertAbortSignal(signal, `${context} has member 'signal' that`);
            }
            return {
              preventAbort: Boolean(preventAbort),
              preventCancel: Boolean(preventCancel),
              preventClose: Boolean(preventClose),
              signal
            };
          }
          function assertAbortSignal(signal, context) {
            if (!isAbortSignal2(signal)) {
              throw new TypeError(`${context} is not an AbortSignal.`);
            }
          }
          function convertReadableWritablePair(pair, context) {
            assertDictionary(pair, context);
            const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
            assertRequiredField(readable, "readable", "ReadableWritablePair");
            assertReadableStream(readable, `${context} has member 'readable' that`);
            const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
            assertRequiredField(writable, "writable", "ReadableWritablePair");
            assertWritableStream(writable, `${context} has member 'writable' that`);
            return { readable, writable };
          }
          class ReadableStream2 {
            constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
              if (rawUnderlyingSource === void 0) {
                rawUnderlyingSource = null;
              } else {
                assertObject(rawUnderlyingSource, "First parameter");
              }
              const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
              const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
              InitializeReadableStream(this);
              if (underlyingSource.type === "bytes") {
                if (strategy.size !== void 0) {
                  throw new RangeError("The strategy for a byte stream cannot have a size function");
                }
                const highWaterMark = ExtractHighWaterMark(strategy, 0);
                SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
              } else {
                const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
                const highWaterMark = ExtractHighWaterMark(strategy, 1);
                SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
              }
            }
            get locked() {
              if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1("locked");
              }
              return IsReadableStreamLocked(this);
            }
            cancel(reason = void 0) {
              if (!IsReadableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$1("cancel"));
              }
              if (IsReadableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
              }
              return ReadableStreamCancel(this, reason);
            }
            getReader(rawOptions = void 0) {
              if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1("getReader");
              }
              const options = convertReaderOptions(rawOptions, "First parameter");
              if (options.mode === void 0) {
                return AcquireReadableStreamDefaultReader(this);
              }
              return AcquireReadableStreamBYOBReader(this);
            }
            pipeThrough(rawTransform, rawOptions = {}) {
              if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1("pipeThrough");
              }
              assertRequiredArgument(rawTransform, 1, "pipeThrough");
              const transform = convertReadableWritablePair(rawTransform, "First parameter");
              const options = convertPipeOptions(rawOptions, "Second parameter");
              if (IsReadableStreamLocked(this)) {
                throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
              }
              if (IsWritableStreamLocked(transform.writable)) {
                throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
              }
              const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
              setPromiseIsHandledToTrue(promise);
              return transform.readable;
            }
            pipeTo(destination, rawOptions = {}) {
              if (!IsReadableStream(this)) {
                return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
              }
              if (destination === void 0) {
                return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
              }
              if (!IsWritableStream(destination)) {
                return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
              }
              let options;
              try {
                options = convertPipeOptions(rawOptions, "Second parameter");
              } catch (e2) {
                return promiseRejectedWith(e2);
              }
              if (IsReadableStreamLocked(this)) {
                return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
              }
              if (IsWritableStreamLocked(destination)) {
                return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
              }
              return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
            }
            tee() {
              if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1("tee");
              }
              const branches = ReadableStreamTee(this);
              return CreateArrayFromList(branches);
            }
            values(rawOptions = void 0) {
              if (!IsReadableStream(this)) {
                throw streamBrandCheckException$1("values");
              }
              const options = convertIteratorOptions(rawOptions, "First parameter");
              return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
            }
          }
          Object.defineProperties(ReadableStream2.prototype, {
            cancel: { enumerable: true },
            getReader: { enumerable: true },
            pipeThrough: { enumerable: true },
            pipeTo: { enumerable: true },
            tee: { enumerable: true },
            values: { enumerable: true },
            locked: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.toStringTag, {
              value: "ReadableStream",
              configurable: true
            });
          }
          if (typeof SymbolPolyfill.asyncIterator === "symbol") {
            Object.defineProperty(ReadableStream2.prototype, SymbolPolyfill.asyncIterator, {
              value: ReadableStream2.prototype.values,
              writable: true,
              configurable: true
            });
          }
          function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
            const stream = Object.create(ReadableStream2.prototype);
            InitializeReadableStream(stream);
            const controller = Object.create(ReadableStreamDefaultController.prototype);
            SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
            return stream;
          }
          function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
            const stream = Object.create(ReadableStream2.prototype);
            InitializeReadableStream(stream);
            const controller = Object.create(ReadableByteStreamController.prototype);
            SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
            return stream;
          }
          function InitializeReadableStream(stream) {
            stream._state = "readable";
            stream._reader = void 0;
            stream._storedError = void 0;
            stream._disturbed = false;
          }
          function IsReadableStream(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_readableStreamController")) {
              return false;
            }
            return x2 instanceof ReadableStream2;
          }
          function IsReadableStreamLocked(stream) {
            if (stream._reader === void 0) {
              return false;
            }
            return true;
          }
          function ReadableStreamCancel(stream, reason) {
            stream._disturbed = true;
            if (stream._state === "closed") {
              return promiseResolvedWith(void 0);
            }
            if (stream._state === "errored") {
              return promiseRejectedWith(stream._storedError);
            }
            ReadableStreamClose(stream);
            const reader = stream._reader;
            if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
              reader._readIntoRequests.forEach((readIntoRequest) => {
                readIntoRequest._closeSteps(void 0);
              });
              reader._readIntoRequests = new SimpleQueue();
            }
            const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
            return transformPromiseWith(sourceCancelPromise, noop2);
          }
          function ReadableStreamClose(stream) {
            stream._state = "closed";
            const reader = stream._reader;
            if (reader === void 0) {
              return;
            }
            defaultReaderClosedPromiseResolve(reader);
            if (IsReadableStreamDefaultReader(reader)) {
              reader._readRequests.forEach((readRequest) => {
                readRequest._closeSteps();
              });
              reader._readRequests = new SimpleQueue();
            }
          }
          function ReadableStreamError(stream, e2) {
            stream._state = "errored";
            stream._storedError = e2;
            const reader = stream._reader;
            if (reader === void 0) {
              return;
            }
            defaultReaderClosedPromiseReject(reader, e2);
            if (IsReadableStreamDefaultReader(reader)) {
              reader._readRequests.forEach((readRequest) => {
                readRequest._errorSteps(e2);
              });
              reader._readRequests = new SimpleQueue();
            } else {
              reader._readIntoRequests.forEach((readIntoRequest) => {
                readIntoRequest._errorSteps(e2);
              });
              reader._readIntoRequests = new SimpleQueue();
            }
          }
          function streamBrandCheckException$1(name) {
            return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
          }
          function convertQueuingStrategyInit(init, context) {
            assertDictionary(init, context);
            const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
            assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
            return {
              highWaterMark: convertUnrestrictedDouble(highWaterMark)
            };
          }
          const byteLengthSizeFunction = (chunk) => {
            return chunk.byteLength;
          };
          Object.defineProperty(byteLengthSizeFunction, "name", {
            value: "size",
            configurable: true
          });
          class ByteLengthQueuingStrategy {
            constructor(options) {
              assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
              options = convertQueuingStrategyInit(options, "First parameter");
              this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
            }
            get highWaterMark() {
              if (!IsByteLengthQueuingStrategy(this)) {
                throw byteLengthBrandCheckException("highWaterMark");
              }
              return this._byteLengthQueuingStrategyHighWaterMark;
            }
            get size() {
              if (!IsByteLengthQueuingStrategy(this)) {
                throw byteLengthBrandCheckException("size");
              }
              return byteLengthSizeFunction;
            }
          }
          Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
            highWaterMark: { enumerable: true },
            size: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
              value: "ByteLengthQueuingStrategy",
              configurable: true
            });
          }
          function byteLengthBrandCheckException(name) {
            return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
          }
          function IsByteLengthQueuingStrategy(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_byteLengthQueuingStrategyHighWaterMark")) {
              return false;
            }
            return x2 instanceof ByteLengthQueuingStrategy;
          }
          const countSizeFunction = () => {
            return 1;
          };
          Object.defineProperty(countSizeFunction, "name", {
            value: "size",
            configurable: true
          });
          class CountQueuingStrategy {
            constructor(options) {
              assertRequiredArgument(options, 1, "CountQueuingStrategy");
              options = convertQueuingStrategyInit(options, "First parameter");
              this._countQueuingStrategyHighWaterMark = options.highWaterMark;
            }
            get highWaterMark() {
              if (!IsCountQueuingStrategy(this)) {
                throw countBrandCheckException("highWaterMark");
              }
              return this._countQueuingStrategyHighWaterMark;
            }
            get size() {
              if (!IsCountQueuingStrategy(this)) {
                throw countBrandCheckException("size");
              }
              return countSizeFunction;
            }
          }
          Object.defineProperties(CountQueuingStrategy.prototype, {
            highWaterMark: { enumerable: true },
            size: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
              value: "CountQueuingStrategy",
              configurable: true
            });
          }
          function countBrandCheckException(name) {
            return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
          }
          function IsCountQueuingStrategy(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_countQueuingStrategyHighWaterMark")) {
              return false;
            }
            return x2 instanceof CountQueuingStrategy;
          }
          function convertTransformer(original, context) {
            assertDictionary(original, context);
            const flush = original === null || original === void 0 ? void 0 : original.flush;
            const readableType = original === null || original === void 0 ? void 0 : original.readableType;
            const start = original === null || original === void 0 ? void 0 : original.start;
            const transform = original === null || original === void 0 ? void 0 : original.transform;
            const writableType = original === null || original === void 0 ? void 0 : original.writableType;
            return {
              flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
              readableType,
              start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
              transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
              writableType
            };
          }
          function convertTransformerFlushCallback(fn, original, context) {
            assertFunction(fn, context);
            return (controller) => promiseCall(fn, original, [controller]);
          }
          function convertTransformerStartCallback(fn, original, context) {
            assertFunction(fn, context);
            return (controller) => reflectCall(fn, original, [controller]);
          }
          function convertTransformerTransformCallback(fn, original, context) {
            assertFunction(fn, context);
            return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
          }
          class TransformStream {
            constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
              if (rawTransformer === void 0) {
                rawTransformer = null;
              }
              const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
              const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
              const transformer = convertTransformer(rawTransformer, "First parameter");
              if (transformer.readableType !== void 0) {
                throw new RangeError("Invalid readableType specified");
              }
              if (transformer.writableType !== void 0) {
                throw new RangeError("Invalid writableType specified");
              }
              const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
              const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
              const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
              const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
              let startPromise_resolve;
              const startPromise = newPromise((resolve) => {
                startPromise_resolve = resolve;
              });
              InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
              SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
              if (transformer.start !== void 0) {
                startPromise_resolve(transformer.start(this._transformStreamController));
              } else {
                startPromise_resolve(void 0);
              }
            }
            get readable() {
              if (!IsTransformStream(this)) {
                throw streamBrandCheckException("readable");
              }
              return this._readable;
            }
            get writable() {
              if (!IsTransformStream(this)) {
                throw streamBrandCheckException("writable");
              }
              return this._writable;
            }
          }
          Object.defineProperties(TransformStream.prototype, {
            readable: { enumerable: true },
            writable: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
              value: "TransformStream",
              configurable: true
            });
          }
          function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
            function startAlgorithm() {
              return startPromise;
            }
            function writeAlgorithm(chunk) {
              return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
            }
            function abortAlgorithm(reason) {
              return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
            }
            function closeAlgorithm() {
              return TransformStreamDefaultSinkCloseAlgorithm(stream);
            }
            stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
            function pullAlgorithm() {
              return TransformStreamDefaultSourcePullAlgorithm(stream);
            }
            function cancelAlgorithm(reason) {
              TransformStreamErrorWritableAndUnblockWrite(stream, reason);
              return promiseResolvedWith(void 0);
            }
            stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
            stream._backpressure = void 0;
            stream._backpressureChangePromise = void 0;
            stream._backpressureChangePromise_resolve = void 0;
            TransformStreamSetBackpressure(stream, true);
            stream._transformStreamController = void 0;
          }
          function IsTransformStream(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_transformStreamController")) {
              return false;
            }
            return x2 instanceof TransformStream;
          }
          function TransformStreamError(stream, e2) {
            ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e2);
            TransformStreamErrorWritableAndUnblockWrite(stream, e2);
          }
          function TransformStreamErrorWritableAndUnblockWrite(stream, e2) {
            TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
            WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e2);
            if (stream._backpressure) {
              TransformStreamSetBackpressure(stream, false);
            }
          }
          function TransformStreamSetBackpressure(stream, backpressure) {
            if (stream._backpressureChangePromise !== void 0) {
              stream._backpressureChangePromise_resolve();
            }
            stream._backpressureChangePromise = newPromise((resolve) => {
              stream._backpressureChangePromise_resolve = resolve;
            });
            stream._backpressure = backpressure;
          }
          class TransformStreamDefaultController {
            constructor() {
              throw new TypeError("Illegal constructor");
            }
            get desiredSize() {
              if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException("desiredSize");
              }
              const readableController = this._controlledTransformStream._readable._readableStreamController;
              return ReadableStreamDefaultControllerGetDesiredSize(readableController);
            }
            enqueue(chunk = void 0) {
              if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException("enqueue");
              }
              TransformStreamDefaultControllerEnqueue(this, chunk);
            }
            error(reason = void 0) {
              if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException("error");
              }
              TransformStreamDefaultControllerError(this, reason);
            }
            terminate() {
              if (!IsTransformStreamDefaultController(this)) {
                throw defaultControllerBrandCheckException("terminate");
              }
              TransformStreamDefaultControllerTerminate(this);
            }
          }
          Object.defineProperties(TransformStreamDefaultController.prototype, {
            enqueue: { enumerable: true },
            error: { enumerable: true },
            terminate: { enumerable: true },
            desiredSize: { enumerable: true }
          });
          if (typeof SymbolPolyfill.toStringTag === "symbol") {
            Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
              value: "TransformStreamDefaultController",
              configurable: true
            });
          }
          function IsTransformStreamDefaultController(x2) {
            if (!typeIsObject(x2)) {
              return false;
            }
            if (!Object.prototype.hasOwnProperty.call(x2, "_controlledTransformStream")) {
              return false;
            }
            return x2 instanceof TransformStreamDefaultController;
          }
          function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
            controller._controlledTransformStream = stream;
            stream._transformStreamController = controller;
            controller._transformAlgorithm = transformAlgorithm;
            controller._flushAlgorithm = flushAlgorithm;
          }
          function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
            const controller = Object.create(TransformStreamDefaultController.prototype);
            let transformAlgorithm = (chunk) => {
              try {
                TransformStreamDefaultControllerEnqueue(controller, chunk);
                return promiseResolvedWith(void 0);
              } catch (transformResultE) {
                return promiseRejectedWith(transformResultE);
              }
            };
            let flushAlgorithm = () => promiseResolvedWith(void 0);
            if (transformer.transform !== void 0) {
              transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
            }
            if (transformer.flush !== void 0) {
              flushAlgorithm = () => transformer.flush(controller);
            }
            SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
          }
          function TransformStreamDefaultControllerClearAlgorithms(controller) {
            controller._transformAlgorithm = void 0;
            controller._flushAlgorithm = void 0;
          }
          function TransformStreamDefaultControllerEnqueue(controller, chunk) {
            const stream = controller._controlledTransformStream;
            const readableController = stream._readable._readableStreamController;
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
              throw new TypeError("Readable side is not in a state that permits enqueue");
            }
            try {
              ReadableStreamDefaultControllerEnqueue(readableController, chunk);
            } catch (e2) {
              TransformStreamErrorWritableAndUnblockWrite(stream, e2);
              throw stream._readable._storedError;
            }
            const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
            if (backpressure !== stream._backpressure) {
              TransformStreamSetBackpressure(stream, true);
            }
          }
          function TransformStreamDefaultControllerError(controller, e2) {
            TransformStreamError(controller._controlledTransformStream, e2);
          }
          function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
            const transformPromise = controller._transformAlgorithm(chunk);
            return transformPromiseWith(transformPromise, void 0, (r2) => {
              TransformStreamError(controller._controlledTransformStream, r2);
              throw r2;
            });
          }
          function TransformStreamDefaultControllerTerminate(controller) {
            const stream = controller._controlledTransformStream;
            const readableController = stream._readable._readableStreamController;
            ReadableStreamDefaultControllerClose(readableController);
            const error = new TypeError("TransformStream terminated");
            TransformStreamErrorWritableAndUnblockWrite(stream, error);
          }
          function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
            const controller = stream._transformStreamController;
            if (stream._backpressure) {
              const backpressureChangePromise = stream._backpressureChangePromise;
              return transformPromiseWith(backpressureChangePromise, () => {
                const writable = stream._writable;
                const state = writable._state;
                if (state === "erroring") {
                  throw writable._storedError;
                }
                return TransformStreamDefaultControllerPerformTransform(controller, chunk);
              });
            }
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
          }
          function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
            TransformStreamError(stream, reason);
            return promiseResolvedWith(void 0);
          }
          function TransformStreamDefaultSinkCloseAlgorithm(stream) {
            const readable = stream._readable;
            const controller = stream._transformStreamController;
            const flushPromise = controller._flushAlgorithm();
            TransformStreamDefaultControllerClearAlgorithms(controller);
            return transformPromiseWith(flushPromise, () => {
              if (readable._state === "errored") {
                throw readable._storedError;
              }
              ReadableStreamDefaultControllerClose(readable._readableStreamController);
            }, (r2) => {
              TransformStreamError(stream, r2);
              throw readable._storedError;
            });
          }
          function TransformStreamDefaultSourcePullAlgorithm(stream) {
            TransformStreamSetBackpressure(stream, false);
            return stream._backpressureChangePromise;
          }
          function defaultControllerBrandCheckException(name) {
            return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
          }
          function streamBrandCheckException(name) {
            return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
          }
          exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
          exports2.CountQueuingStrategy = CountQueuingStrategy;
          exports2.ReadableByteStreamController = ReadableByteStreamController;
          exports2.ReadableStream = ReadableStream2;
          exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
          exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
          exports2.ReadableStreamDefaultController = ReadableStreamDefaultController;
          exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
          exports2.TransformStream = TransformStream;
          exports2.TransformStreamDefaultController = TransformStreamDefaultController;
          exports2.WritableStream = WritableStream;
          exports2.WritableStreamDefaultController = WritableStreamDefaultController;
          exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter;
          Object.defineProperty(exports2, "__esModule", { value: true });
        });
      }
    });
    require_streams = __commonJS({
      "node_modules/.pnpm/fetch-blob@3.1.3/node_modules/fetch-blob/streams.cjs"() {
        var POOL_SIZE2 = 65536;
        if (!globalThis.ReadableStream) {
          try {
            const process2 = __require("node:process");
            const { emitWarning } = process2;
            try {
              process2.emitWarning = () => {
              };
              Object.assign(globalThis, __require("node:stream/web"));
              process2.emitWarning = emitWarning;
            } catch (error) {
              process2.emitWarning = emitWarning;
              throw error;
            }
          } catch (error) {
            Object.assign(globalThis, require_ponyfill_es2018());
          }
        }
        try {
          const { Blob: Blob3 } = __require("buffer");
          if (Blob3 && !Blob3.prototype.stream) {
            Blob3.prototype.stream = function name(params) {
              let position = 0;
              const blob = this;
              return new ReadableStream({
                type: "bytes",
                async pull(ctrl) {
                  const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE2));
                  const buffer = await chunk.arrayBuffer();
                  position += buffer.byteLength;
                  ctrl.enqueue(new Uint8Array(buffer));
                  if (position === blob.size) {
                    ctrl.close();
                  }
                }
              });
            };
          }
        } catch (error) {
        }
      }
    });
    import_streams = __toESM(require_streams(), 1);
    POOL_SIZE = 65536;
    _Blob = class Blob {
      #parts = [];
      #type = "";
      #size = 0;
      constructor(blobParts = [], options = {}) {
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null)
          options = {};
        const encoder = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof Blob) {
            part = element;
          } else {
            part = encoder.encode(element);
          }
          this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
          this.#parts.push(part);
        }
        const type = options.type === void 0 ? "" : String(options.type);
        this.#type = /^[\x20-\x7E]*$/.test(type) ? type : "";
      }
      get size() {
        return this.#size;
      }
      get type() {
        return this.#type;
      }
      async text() {
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(this.#parts, false)) {
          str += decoder.decode(part, { stream: true });
        }
        str += decoder.decode();
        return str;
      }
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(this.#parts, false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it = toIterator(this.#parts, true);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = this.#parts;
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new Blob([], { type: String(type).toLowerCase() });
        blob.#size = span;
        blob.#parts = blobParts;
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    };
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob2 = _Blob;
    fetch_blob_default = Blob2;
    _File = class File extends fetch_blob_default {
      #lastModified = 0;
      #name = "";
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        if (options === null)
          options = {};
        const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
          this.#lastModified = lastModified;
        }
        this.#name = String(fileName);
      }
      get name() {
        return this.#name;
      }
      get lastModified() {
        return this.#lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
    };
    File2 = _File;
    file_default = File2;
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f = (a, b, c) => (a += "", /^(Blob|File)$/.test(b && b[t]) ? [(c = c !== void 0 ? c + "" : b[t] == "File" ? b.name : "blob", a), b.name !== c || b[t] == "blob" ? new file_default([b], c, b) : b] : [a, b + ""]);
    e = (c, f22) => (f22 ? c : c.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x = (n, a, e2) => {
      if (a.length < e2) {
        throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e2} arguments required, but only ${a.length} present.`);
      }
    };
    FormData = class FormData2 {
      #d = [];
      constructor(...a) {
        if (a.length)
          throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o) {
        return o && typeof o === "object" && o[t] === "FormData" && !m.some((m2) => typeof o[m2] != "function");
      }
      append(...a) {
        x("append", arguments, 2);
        this.#d.push(f(...a));
      }
      delete(a) {
        x("delete", arguments, 1);
        a += "";
        this.#d = this.#d.filter(([b]) => b !== a);
      }
      get(a) {
        x("get", arguments, 1);
        a += "";
        for (var b = this.#d, l = b.length, c = 0; c < l; c++)
          if (b[c][0] === a)
            return b[c][1];
        return null;
      }
      getAll(a, b) {
        x("getAll", arguments, 1);
        b = [];
        a += "";
        this.#d.forEach((c) => c[0] === a && b.push(c[1]));
        return b;
      }
      has(a) {
        x("has", arguments, 1);
        a += "";
        return this.#d.some((b) => b[0] === a);
      }
      forEach(a, b) {
        x("forEach", arguments, 1);
        for (var [c, d] of this)
          a.call(b, d, c, this);
      }
      set(...a) {
        x("set", arguments, 2);
        var b = [], c = true;
        a = f(...a);
        this.#d.forEach((d) => {
          d[0] === a[0] ? c && (c = !b.push(a)) : b.push(d);
        });
        c && b.push(a);
        this.#d = b;
      }
      *entries() {
        yield* this.#d;
      }
      *keys() {
        for (var [a] of this)
          yield a;
      }
      *values() {
        for (var [, a] of this)
          yield a;
      }
    };
  }
});

// dist/multipart-parser-5MYNFXEA.js
var multipart_parser_5MYNFXEA_exports = {};
__export(multipart_parser_5MYNFXEA_exports, {
  toFormData: () => toFormData
});
import { createRequire as __$$createRequire4 } from "module";
import { statSync, createReadStream, promises as fs } from "node:fs";
import { MessageChannel } from "node:worker_threads";
function _fileName(headerValue) {
  const m2 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m2) {
    return;
  }
  const match = m2[2] || m2[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m22, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m2 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m2) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m2[1] || m2[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file = new file_default(entryChunks, filename, { type: contentType });
    formData.append(entryName, file);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser.onPartBegin = function() {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function() {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m22 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m22) {
        entryName = m22[2] || m22[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var require5, stat, DOMException2, BlobDataItem, s, S, f2, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser;
var init_multipart_parser_5MYNFXEA = __esm({
  "dist/multipart-parser-5MYNFXEA.js"() {
    init_client();
    init_chunk_QTAX3BZC();
    require5 = __$$createRequire4("file:///Users/egoist/dev/tsno/dist/multipart-parser-5MYNFXEA.js");
    ({ stat } = fs);
    DOMException2 = globalThis.DOMException || (() => {
      const port = new MessageChannel().port1;
      const ab = new ArrayBuffer(0);
      try {
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        return err.constructor;
      }
    })();
    BlobDataItem = class {
      #path;
      #start;
      constructor(options) {
        this.#path = options.path;
        this.#start = options.start;
        this.size = options.size;
        this.lastModified = options.lastModified;
      }
      slice(start, end) {
        return new BlobDataItem({
          path: this.#path,
          lastModified: this.lastModified,
          size: end - start,
          start
        });
      }
      async *stream() {
        const { mtimeMs } = await stat(this.#path);
        if (mtimeMs > this.lastModified) {
          throw new DOMException2("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        }
        yield* createReadStream(this.#path, {
          start: this.#start,
          end: this.#start + this.size - 1
        });
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
    };
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f2 = 1;
    F = {
      PART_BOUNDARY: f2,
      LAST_BOUNDARY: f2 *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c) => c | 32;
    noop = () => {
    };
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i2 = 0; i2 < boundary.length; i2++) {
          ui8a[i2] = boundary.charCodeAt(i2);
          this.boundaryChars[ui8a[i2]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i2 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i2;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i2, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i2 = 0; i2 < length_; i2++) {
          c = data[i2];
          switch (state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c !== boundary[index + 2]) {
                index = -2;
              }
              if (c === boundary[index + 2]) {
                index++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S.HEADER_FIELD:
              if (c === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c === HYPHEN) {
                break;
              }
              if (c === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i2 += boundaryEnd;
                while (i2 < bufferLength && !(data[i2] in boundaryChars)) {
                  i2 += boundaryLength;
                }
                i2 -= boundaryEnd;
                c = data[i2];
              }
              if (index < boundary.length) {
                if (boundary[index] === c) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index = 0;
                  if (c === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i2--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// dist/src-4Q7Q67C3.js
var src_4Q7Q67C3_exports = {};
__export(src_4Q7Q67C3_exports, {
  AbortError: () => AbortError,
  FetchError: () => FetchError,
  Headers: () => Headers,
  Request: () => Request,
  Response: () => Response,
  default: () => fetch2,
  isRedirect: () => isRedirect
});
import { createRequire as __$$createRequire5 } from "module";
import http2 from "node:http";
import https from "node:https";
import zlib from "node:zlib";
import Stream2, { PassThrough as PassThrough2, pipeline as pump } from "node:stream";
import Stream, { PassThrough } from "node:stream";
import { types, deprecate } from "node:util";
import { types as types2 } from "node:util";
import http from "node:http";
import { format as formatUrl } from "node:url";
import { isIP } from "net";
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i2 = 1; i2 < meta.length; i2++) {
    if (meta[i2] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i2]}`;
      if (meta[i2].indexOf("charset=") === 0) {
        charset = meta[i2].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
async function consumeBody(data) {
  if (data[INTERNALS].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS].disturbed = true;
  if (data[INTERNALS].error) {
    throw data[INTERNALS].error;
  }
  const { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (!(body instanceof Stream)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error);
        throw error;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error) {
    const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, "system", error);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, "system", error);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
function stripURLForUseAsAReferrer(url, originOnly = false) {
  if (url == null) {
    return "no-referrer";
  }
  url = new URL(url);
  if (/^(about|blob|data):$/.test(url.protocol)) {
    return "no-referrer";
  }
  url.username = "";
  url.password = "";
  url.hash = "";
  if (originOnly) {
    url.pathname = "";
    url.search = "";
  }
  return url;
}
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url) {
  if (/^(http|ws)s:$/.test(url.protocol)) {
    return true;
  }
  const hostIp = url.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = isIP(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (/^(.+\.)*localhost$/.test(url.host)) {
    return false;
  }
  if (url.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url) {
  if (/^about:(blank|srcdoc)$/.test(url)) {
    return true;
  }
  if (url.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}
async function fetch2(url, options_) {
  return new Promise((resolve, reject) => {
    const request = new Request(url, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dist_default(request.url);
      const response2 = new Response(data, { headers: { "Content-Type": data.typeFull } });
      resolve(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? https : http2).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error = new AbortError("The operation was aborted.");
      reject(error);
      if (request.body && request.body instanceof Stream2.Readable) {
        request.body.destroy(error);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL, options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, "system", error));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error) => {
      response.body.destroy(error);
    });
    if (process.version < "v14") {
      request_.on("socket", (s2) => {
        let endedWithEventsCount;
        s2.prependListener("end", () => {
          endedWithEventsCount = s2._eventsCount;
        });
        s2.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s2._eventsCount && !hadError) {
            const error = new Error("Premature close");
            error.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              headers.set("Location", locationURL);
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream2.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = pump(response_, new PassThrough2(), reject);
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: zlib.Z_SYNC_FLUSH,
        finishFlush: zlib.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = pump(body, zlib.createGunzip(zlibOptions), reject);
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = pump(response_, new PassThrough2(), reject);
        raw.once("data", (chunk) => {
          body = (chunk[0] & 15) === 8 ? pump(body, zlib.createInflate(), reject) : pump(body, zlib.createInflateRaw(), reject);
          response = new Response(body, responseOptions);
          resolve(response);
        });
        return;
      }
      if (codings === "br") {
        body = pump(body, zlib.createBrotliDecompress(), reject);
        response = new Response(body, responseOptions);
        resolve(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve(response);
    });
    writeToStream(request_, request);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error = new Error("Premature close");
        error.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error);
      }
    };
    socket.prependListener("close", onSocketClose);
    request.on("abort", () => {
      socket.removeListener("close", onSocketClose);
    });
    socket.on("data", (buf) => {
      properLastChunkReceived = Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    });
  });
}
var require6, dist_default, FetchBaseError, FetchError, NAME, isURLSearchParameters, isBlob, isAbortSignal, INTERNALS, Body, clone, getNonSpecFormDataBoundary, extractContentType, getTotalBytes, writeToStream, validateHeaderName, validateHeaderValue, Headers, redirectStatus, isRedirect, INTERNALS2, Response, getSearch, ReferrerPolicy, DEFAULT_REFERRER_POLICY, INTERNALS3, isRequest, Request, getNodeRequestOptions, AbortError, supportedSchemas;
var init_src_4Q7Q67C3 = __esm({
  "dist/src-4Q7Q67C3.js"() {
    init_client();
    init_chunk_QTAX3BZC();
    require6 = __$$createRequire5("file:///Users/egoist/dev/tsno/dist/src-4Q7Q67C3.js");
    dist_default = dataUriToBuffer;
    FetchBaseError = class extends Error {
      constructor(message, type) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.type = type;
      }
      get name() {
        return this.constructor.name;
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
    };
    FetchError = class extends FetchBaseError {
      constructor(message, type, systemError) {
        super(message, type);
        if (systemError) {
          this.code = this.errno = systemError.code;
          this.erroredSysCall = systemError.syscall;
        }
      }
    };
    NAME = Symbol.toStringTag;
    isURLSearchParameters = (object) => {
      return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
    };
    isBlob = (object) => {
      return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
    };
    isAbortSignal = (object) => {
      return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
    };
    INTERNALS = Symbol("Body internals");
    Body = class {
      constructor(body, {
        size = 0
      } = {}) {
        let boundary = null;
        if (body === null) {
          body = null;
        } else if (isURLSearchParameters(body)) {
          body = Buffer.from(body.toString());
        } else if (isBlob(body)) {
        } else if (Buffer.isBuffer(body)) {
        } else if (types.isAnyArrayBuffer(body)) {
          body = Buffer.from(body);
        } else if (ArrayBuffer.isView(body)) {
          body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
        } else if (body instanceof Stream) {
        } else if (body instanceof FormData) {
          body = formDataToBlob(body);
          boundary = body.type.split("=")[1];
        } else {
          body = Buffer.from(String(body));
        }
        let stream = body;
        if (Buffer.isBuffer(body)) {
          stream = Stream.Readable.from(body);
        } else if (isBlob(body)) {
          stream = Stream.Readable.from(body.stream());
        }
        this[INTERNALS] = {
          body,
          stream,
          boundary,
          disturbed: false,
          error: null
        };
        this.size = size;
        if (body instanceof Stream) {
          body.on("error", (error_) => {
            const error = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
            this[INTERNALS].error = error;
          });
        }
      }
      get body() {
        return this[INTERNALS].stream;
      }
      get bodyUsed() {
        return this[INTERNALS].disturbed;
      }
      async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this);
        return buffer.slice(byteOffset, byteOffset + byteLength);
      }
      async formData() {
        const ct = this.headers.get("content-type");
        if (ct.startsWith("application/x-www-form-urlencoded")) {
          const formData = new FormData();
          const parameters = new URLSearchParams(await this.text());
          for (const [name, value] of parameters) {
            formData.append(name, value);
          }
          return formData;
        }
        const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser_5MYNFXEA(), multipart_parser_5MYNFXEA_exports));
        return toFormData2(this.body, ct);
      }
      async blob() {
        const ct = this.headers && this.headers.get("content-type") || this[INTERNALS].body && this[INTERNALS].body.type || "";
        const buf = await this.buffer();
        return new fetch_blob_default([buf], {
          type: ct
        });
      }
      async json() {
        const buffer = await consumeBody(this);
        return JSON.parse(buffer.toString());
      }
      async text() {
        const buffer = await consumeBody(this);
        return buffer.toString();
      }
      buffer() {
        return consumeBody(this);
      }
    };
    Body.prototype.buffer = deprecate(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    });
    clone = (instance, highWaterMark) => {
      let p1;
      let p2;
      let { body } = instance[INTERNALS];
      if (instance.bodyUsed) {
        throw new Error("cannot clone body after it is used");
      }
      if (body instanceof Stream && typeof body.getBoundary !== "function") {
        p1 = new PassThrough({ highWaterMark });
        p2 = new PassThrough({ highWaterMark });
        body.pipe(p1);
        body.pipe(p2);
        instance[INTERNALS].stream = p1;
        body = p2;
      }
      return body;
    };
    getNonSpecFormDataBoundary = deprecate((body) => body.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
    extractContentType = (body, request) => {
      if (body === null) {
        return null;
      }
      if (typeof body === "string") {
        return "text/plain;charset=UTF-8";
      }
      if (isURLSearchParameters(body)) {
        return "application/x-www-form-urlencoded;charset=UTF-8";
      }
      if (isBlob(body)) {
        return body.type || null;
      }
      if (Buffer.isBuffer(body) || types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
        return null;
      }
      if (body instanceof FormData) {
        return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
      }
      if (body && typeof body.getBoundary === "function") {
        return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
      }
      if (body instanceof Stream) {
        return null;
      }
      return "text/plain;charset=UTF-8";
    };
    getTotalBytes = (request) => {
      const { body } = request[INTERNALS];
      if (body === null) {
        return 0;
      }
      if (isBlob(body)) {
        return body.size;
      }
      if (Buffer.isBuffer(body)) {
        return body.length;
      }
      if (body && typeof body.getLengthSync === "function") {
        return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
      }
      return null;
    };
    writeToStream = (dest, { body }) => {
      if (body === null) {
        dest.end();
      } else {
        body.pipe(dest);
      }
    };
    validateHeaderName = typeof http.validateHeaderName === "function" ? http.validateHeaderName : (name) => {
      if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
        const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
        Object.defineProperty(error, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
        throw error;
      }
    };
    validateHeaderValue = typeof http.validateHeaderValue === "function" ? http.validateHeaderValue : (name, value) => {
      if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
        const error = new TypeError(`Invalid character in header content ["${name}"]`);
        Object.defineProperty(error, "code", { value: "ERR_INVALID_CHAR" });
        throw error;
      }
    };
    Headers = class extends URLSearchParams {
      constructor(init) {
        let result = [];
        if (init instanceof Headers) {
          const raw = init.raw();
          for (const [name, values] of Object.entries(raw)) {
            result.push(...values.map((value) => [name, value]));
          }
        } else if (init == null) {
        } else if (typeof init === "object" && !types2.isBoxedPrimitive(init)) {
          const method = init[Symbol.iterator];
          if (method == null) {
            result.push(...Object.entries(init));
          } else {
            if (typeof method !== "function") {
              throw new TypeError("Header pairs must be iterable");
            }
            result = [...init].map((pair) => {
              if (typeof pair !== "object" || types2.isBoxedPrimitive(pair)) {
                throw new TypeError("Each header pair must be an iterable object");
              }
              return [...pair];
            }).map((pair) => {
              if (pair.length !== 2) {
                throw new TypeError("Each header pair must be a name/value tuple");
              }
              return [...pair];
            });
          }
        } else {
          throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
        }
        result = result.length > 0 ? result.map(([name, value]) => {
          validateHeaderName(name);
          validateHeaderValue(name, String(value));
          return [String(name).toLowerCase(), String(value)];
        }) : void 0;
        super(result);
        return new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case "append":
              case "set":
                return (name, value) => {
                  validateHeaderName(name);
                  validateHeaderValue(name, String(value));
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase(), String(value));
                };
              case "delete":
              case "has":
              case "getAll":
                return (name) => {
                  validateHeaderName(name);
                  return URLSearchParams.prototype[p].call(target, String(name).toLowerCase());
                };
              case "keys":
                return () => {
                  target.sort();
                  return new Set(URLSearchParams.prototype.keys.call(target)).keys();
                };
              default:
                return Reflect.get(target, p, receiver);
            }
          }
        });
      }
      get [Symbol.toStringTag]() {
        return this.constructor.name;
      }
      toString() {
        return Object.prototype.toString.call(this);
      }
      get(name) {
        const values = this.getAll(name);
        if (values.length === 0) {
          return null;
        }
        let value = values.join(", ");
        if (/^content-encoding$/i.test(name)) {
          value = value.toLowerCase();
        }
        return value;
      }
      forEach(callback, thisArg = void 0) {
        for (const name of this.keys()) {
          Reflect.apply(callback, thisArg, [this.get(name), name, this]);
        }
      }
      *values() {
        for (const name of this.keys()) {
          yield this.get(name);
        }
      }
      *entries() {
        for (const name of this.keys()) {
          yield [name, this.get(name)];
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      raw() {
        return [...this.keys()].reduce((result, key) => {
          result[key] = this.getAll(key);
          return result;
        }, {});
      }
      [Symbol.for("nodejs.util.inspect.custom")]() {
        return [...this.keys()].reduce((result, key) => {
          const values = this.getAll(key);
          if (key === "host") {
            result[key] = values[0];
          } else {
            result[key] = values.length > 1 ? values : values[0];
          }
          return result;
        }, {});
      }
    };
    Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
      result[property] = { enumerable: true };
      return result;
    }, {}));
    redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
    isRedirect = (code) => {
      return redirectStatus.has(code);
    };
    INTERNALS2 = Symbol("Response internals");
    Response = class extends Body {
      constructor(body = null, options = {}) {
        super(body, options);
        const status = options.status != null ? options.status : 200;
        const headers = new Headers(options.headers);
        if (body !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(body, this);
          if (contentType) {
            headers.append("Content-Type", contentType);
          }
        }
        this[INTERNALS2] = {
          type: "default",
          url: options.url,
          status,
          statusText: options.statusText || "",
          headers,
          counter: options.counter,
          highWaterMark: options.highWaterMark
        };
      }
      get type() {
        return this[INTERNALS2].type;
      }
      get url() {
        return this[INTERNALS2].url || "";
      }
      get status() {
        return this[INTERNALS2].status;
      }
      get ok() {
        return this[INTERNALS2].status >= 200 && this[INTERNALS2].status < 300;
      }
      get redirected() {
        return this[INTERNALS2].counter > 0;
      }
      get statusText() {
        return this[INTERNALS2].statusText;
      }
      get headers() {
        return this[INTERNALS2].headers;
      }
      get highWaterMark() {
        return this[INTERNALS2].highWaterMark;
      }
      clone() {
        return new Response(clone(this, this.highWaterMark), {
          type: this.type,
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
          size: this.size,
          highWaterMark: this.highWaterMark
        });
      }
      static redirect(url, status = 302) {
        if (!isRedirect(status)) {
          throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        return new Response(null, {
          headers: {
            location: new URL(url).toString()
          },
          status
        });
      }
      static error() {
        const response = new Response(null, { status: 0, statusText: "" });
        response[INTERNALS2].type = "error";
        return response;
      }
      get [Symbol.toStringTag]() {
        return "Response";
      }
    };
    Object.defineProperties(Response.prototype, {
      type: { enumerable: true },
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    });
    getSearch = (parsedURL) => {
      if (parsedURL.search) {
        return parsedURL.search;
      }
      const lastOffset = parsedURL.href.length - 1;
      const hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
      return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
    };
    ReferrerPolicy = /* @__PURE__ */ new Set([
      "",
      "no-referrer",
      "no-referrer-when-downgrade",
      "same-origin",
      "origin",
      "strict-origin",
      "origin-when-cross-origin",
      "strict-origin-when-cross-origin",
      "unsafe-url"
    ]);
    DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
    INTERNALS3 = Symbol("Request internals");
    isRequest = (object) => {
      return typeof object === "object" && typeof object[INTERNALS3] === "object";
    };
    Request = class extends Body {
      constructor(input, init = {}) {
        let parsedURL;
        if (isRequest(input)) {
          parsedURL = new URL(input.url);
        } else {
          parsedURL = new URL(input);
          input = {};
        }
        if (parsedURL.username !== "" || parsedURL.password !== "") {
          throw new TypeError(`${parsedURL} is an url with embedded credentails.`);
        }
        let method = init.method || input.method || "GET";
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
          throw new TypeError("Request with GET/HEAD method cannot have body");
        }
        const inputBody = init.body ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        super(inputBody, {
          size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody !== null && !headers.has("Content-Type")) {
          const contentType = extractContentType(inputBody, this);
          if (contentType) {
            headers.set("Content-Type", contentType);
          }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ("signal" in init) {
          signal = init.signal;
        }
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
        }
        let referrer = init.referrer == null ? input.referrer : init.referrer;
        if (referrer === "") {
          referrer = "no-referrer";
        } else if (referrer) {
          const parsedReferrer = new URL(referrer);
          referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
        } else {
          referrer = void 0;
        }
        this[INTERNALS3] = {
          method,
          redirect: init.redirect || input.redirect || "follow",
          headers,
          parsedURL,
          signal,
          referrer
        };
        this.follow = init.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init.follow;
        this.compress = init.compress === void 0 ? input.compress === void 0 ? true : input.compress : init.compress;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
        this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
        this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;
        this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || "";
      }
      get method() {
        return this[INTERNALS3].method;
      }
      get url() {
        return formatUrl(this[INTERNALS3].parsedURL);
      }
      get headers() {
        return this[INTERNALS3].headers;
      }
      get redirect() {
        return this[INTERNALS3].redirect;
      }
      get signal() {
        return this[INTERNALS3].signal;
      }
      get referrer() {
        if (this[INTERNALS3].referrer === "no-referrer") {
          return "";
        }
        if (this[INTERNALS3].referrer === "client") {
          return "about:client";
        }
        if (this[INTERNALS3].referrer) {
          return this[INTERNALS3].referrer.toString();
        }
        return void 0;
      }
      get referrerPolicy() {
        return this[INTERNALS3].referrerPolicy;
      }
      set referrerPolicy(referrerPolicy) {
        this[INTERNALS3].referrerPolicy = validateReferrerPolicy(referrerPolicy);
      }
      clone() {
        return new Request(this);
      }
      get [Symbol.toStringTag]() {
        return "Request";
      }
    };
    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true },
      referrer: { enumerable: true },
      referrerPolicy: { enumerable: true }
    });
    getNodeRequestOptions = (request) => {
      const { parsedURL } = request[INTERNALS3];
      const headers = new Headers(request[INTERNALS3].headers);
      if (!headers.has("Accept")) {
        headers.set("Accept", "*/*");
      }
      let contentLengthValue = null;
      if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = "0";
      }
      if (request.body !== null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
          contentLengthValue = String(totalBytes);
        }
      }
      if (contentLengthValue) {
        headers.set("Content-Length", contentLengthValue);
      }
      if (request.referrerPolicy === "") {
        request.referrerPolicy = DEFAULT_REFERRER_POLICY;
      }
      if (request.referrer && request.referrer !== "no-referrer") {
        request[INTERNALS3].referrer = determineRequestsReferrer(request);
      } else {
        request[INTERNALS3].referrer = "no-referrer";
      }
      if (request[INTERNALS3].referrer instanceof URL) {
        headers.set("Referer", request.referrer);
      }
      if (!headers.has("User-Agent")) {
        headers.set("User-Agent", "node-fetch");
      }
      if (request.compress && !headers.has("Accept-Encoding")) {
        headers.set("Accept-Encoding", "gzip,deflate,br");
      }
      let { agent } = request;
      if (typeof agent === "function") {
        agent = agent(parsedURL);
      }
      if (!headers.has("Connection") && !agent) {
        headers.set("Connection", "close");
      }
      const search = getSearch(parsedURL);
      const options = {
        path: parsedURL.pathname + search,
        method: request.method,
        headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
      };
      return {
        parsedURL,
        options
      };
    };
    AbortError = class extends FetchBaseError {
      constructor(message, type = "aborted") {
        super(message, type);
      }
    };
    supportedSchemas = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
  }
});

// dist/client.js
import { createRequire as __$$createRequire6 } from "module";
var require7, fetch;
var init_client = __esm({
  "dist/client.js"() {
    init_chunk_FHDXXOKY();
    require7 = __$$createRequire6("file:///Users/egoist/dev/tsno/dist/client.js");
    fetch = (url, init) => Promise.resolve().then(() => (init_src_4Q7Q67C3(), src_4Q7Q67C3_exports)).then((res) => res.default(url, init));
  }
});

// examples/fetch-polyfill.ts
init_client();
fetch(`https://jsonplaceholder.typicode.com/todos/1`).then((res) => res.json()).then((json) => console.log(colors.green(JSON.stringify(json, null, 2))));
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9jaHVuay1YR05WT0kzRC5qcyIsICJkaXN0L2NodW5rLUZIRFhYT0tZLmpzIiwgImRpc3QvY2h1bmstUVRBWDNCWkMuanMiLCAiZGlzdC9tdWx0aXBhcnQtcGFyc2VyLTVNWU5GWEVBLmpzIiwgImRpc3Qvc3JjLTRRN1E2N0MzLmpzIiwgImRpc3QvY2xpZW50LmpzIiwgImV4YW1wbGVzL2ZldGNoLXBvbHlmaWxsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZVJlcXVpcmUgYXMgX18kJGNyZWF0ZVJlcXVpcmV9IGZyb20gJ21vZHVsZSc7dmFyIHJlcXVpcmU9X18kJGNyZWF0ZVJlcXVpcmUoXCJmaWxlOi8vL1VzZXJzL2Vnb2lzdC9kZXYvdHNuby9kaXN0L2NodW5rLVhHTlZPSTNELmpzXCIpO1xudmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcERlc2NzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbnZhciBfX3NwcmVhZFByb3BzID0gKGEsIGIpID0+IF9fZGVmUHJvcHMoYSwgX19nZXRPd25Qcm9wRGVzY3MoYikpO1xudmFyIF9fbWFya0FzTW9kdWxlID0gKHRhcmdldCkgPT4gX19kZWZQcm9wKHRhcmdldCwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgX19yZXF1aXJlID0gLyogQF9fUFVSRV9fICovICgoeCkgPT4gdHlwZW9mIHJlcXVpcmUgIT09IFwidW5kZWZpbmVkXCIgPyByZXF1aXJlIDogdHlwZW9mIFByb3h5ICE9PSBcInVuZGVmaW5lZFwiID8gbmV3IFByb3h5KHgsIHtcbiAgZ2V0OiAoYSwgYikgPT4gKHR5cGVvZiByZXF1aXJlICE9PSBcInVuZGVmaW5lZFwiID8gcmVxdWlyZSA6IGEpW2JdXG59KSA6IHgpKGZ1bmN0aW9uKHgpIHtcbiAgaWYgKHR5cGVvZiByZXF1aXJlICE9PSBcInVuZGVmaW5lZFwiKVxuICAgIHJldHVybiByZXF1aXJlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIHRocm93IG5ldyBFcnJvcignRHluYW1pYyByZXF1aXJlIG9mIFwiJyArIHggKyAnXCIgaXMgbm90IHN1cHBvcnRlZCcpO1xufSk7XG52YXIgX19vYmpSZXN0ID0gKHNvdXJjZSwgZXhjbHVkZSkgPT4ge1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChzb3VyY2UsIHByb3ApICYmIGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDApXG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gIGlmIChzb3VyY2UgIT0gbnVsbCAmJiBfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhzb3VyY2UpKSB7XG4gICAgICBpZiAoZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMCAmJiBfX3Byb3BJc0VudW0uY2FsbChzb3VyY2UsIHByb3ApKVxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbnZhciBfX2NvbW1vbkpTID0gKGNiLCBtb2QpID0+IGZ1bmN0aW9uIF9fcmVxdWlyZTIoKSB7XG4gIHJldHVybiBtb2QgfHwgKDAsIGNiW19fZ2V0T3duUHJvcE5hbWVzKGNiKVswXV0pKChtb2QgPSB7IGV4cG9ydHM6IHt9IH0pLmV4cG9ydHMsIG1vZCksIG1vZC5leHBvcnRzO1xufTtcbnZhciBfX3JlRXhwb3J0ID0gKHRhcmdldCwgbW9kdWxlLCBjb3B5RGVmYXVsdCwgZGVzYykgPT4ge1xuICBpZiAobW9kdWxlICYmIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG1vZHVsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKG1vZHVsZSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRhcmdldCwga2V5KSAmJiAoY29weURlZmF1bHQgfHwga2V5ICE9PSBcImRlZmF1bHRcIikpXG4gICAgICAgIF9fZGVmUHJvcCh0YXJnZXQsIGtleSwgeyBnZXQ6ICgpID0+IG1vZHVsZVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKG1vZHVsZSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59O1xudmFyIF9fdG9FU00gPSAobW9kdWxlLCBpc05vZGVNb2RlKSA9PiB7XG4gIHJldHVybiBfX3JlRXhwb3J0KF9fbWFya0FzTW9kdWxlKF9fZGVmUHJvcChtb2R1bGUgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2R1bGUpKSA6IHt9LCBcImRlZmF1bHRcIiwgIWlzTm9kZU1vZGUgJiYgbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID8geyBnZXQ6ICgpID0+IG1vZHVsZS5kZWZhdWx0LCBlbnVtZXJhYmxlOiB0cnVlIH0gOiB7IHZhbHVlOiBtb2R1bGUsIGVudW1lcmFibGU6IHRydWUgfSkpLCBtb2R1bGUpO1xufTtcblxuZXhwb3J0IHtcbiAgX19zcHJlYWRWYWx1ZXMsXG4gIF9fc3ByZWFkUHJvcHMsXG4gIF9fcmVxdWlyZSxcbiAgX19vYmpSZXN0LFxuICBfX2NvbW1vbkpTLFxuICBfX3RvRVNNXG59O1xuIiwgImltcG9ydCB7Y3JlYXRlUmVxdWlyZSBhcyBfXyQkY3JlYXRlUmVxdWlyZX0gZnJvbSAnbW9kdWxlJzt2YXIgcmVxdWlyZT1fXyQkY3JlYXRlUmVxdWlyZShcImZpbGU6Ly8vVXNlcnMvZWdvaXN0L2Rldi90c25vL2Rpc3QvY2h1bmstRkhEWFhPS1kuanNcIik7XG5pbXBvcnQge1xuICBfX3JlcXVpcmVcbn0gZnJvbSBcIi4vY2h1bmstWEdOVk9JM0QuanNcIjtcblxuLy8gc3JjL2NvbG9ycy50c1xudmFyIHR0eSA9IF9fcmVxdWlyZShcInR0eVwiKTtcbnZhciBpc0NvbG9yU3VwcG9ydGVkID0gIShcIk5PX0NPTE9SXCIgaW4gcHJvY2Vzcy5lbnYgfHwgcHJvY2Vzcy5hcmd2LmluY2x1ZGVzKFwiLS1uby1jb2xvclwiKSkgJiYgKFwiRk9SQ0VfQ09MT1JcIiBpbiBwcm9jZXNzLmVudiB8fCBwcm9jZXNzLmFyZ3YuaW5jbHVkZXMoXCItLWNvbG9yXCIpIHx8IHByb2Nlc3MucGxhdGZvcm0gPT09IFwid2luMzJcIiB8fCB0dHkuaXNhdHR5KDEpICYmIHByb2Nlc3MuZW52LlRFUk0gIT09IFwiZHVtYlwiIHx8IFwiQ0lcIiBpbiBwcm9jZXNzLmVudik7XG52YXIgZm9ybWF0dGVyID0gKG9wZW4sIGNsb3NlLCByZXBsYWNlID0gb3BlbikgPT4gKGlucHV0KSA9PiB7XG4gIGxldCBzdHJpbmcgPSBcIlwiICsgaW5wdXQ7XG4gIGxldCBpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlLCBvcGVuLmxlbmd0aCk7XG4gIHJldHVybiB+aW5kZXggPyBvcGVuICsgcmVwbGFjZUNsb3NlKHN0cmluZywgY2xvc2UsIHJlcGxhY2UsIGluZGV4KSArIGNsb3NlIDogb3BlbiArIHN0cmluZyArIGNsb3NlO1xufTtcbnZhciByZXBsYWNlQ2xvc2UgPSAoc3RyaW5nLCBjbG9zZSwgcmVwbGFjZSwgaW5kZXgpID0+IHtcbiAgbGV0IHN0YXJ0ID0gc3RyaW5nLnN1YnN0cmluZygwLCBpbmRleCkgKyByZXBsYWNlO1xuICBsZXQgZW5kID0gc3RyaW5nLnN1YnN0cmluZyhpbmRleCArIGNsb3NlLmxlbmd0aCk7XG4gIGxldCBuZXh0SW5kZXggPSBlbmQuaW5kZXhPZihjbG9zZSk7XG4gIHJldHVybiB+bmV4dEluZGV4ID8gc3RhcnQgKyByZXBsYWNlQ2xvc2UoZW5kLCBjbG9zZSwgcmVwbGFjZSwgbmV4dEluZGV4KSA6IHN0YXJ0ICsgZW5kO1xufTtcbnZhciBjcmVhdGVDb2xvcnMgPSAoZW5hYmxlZCA9IGlzQ29sb3JTdXBwb3J0ZWQpID0+ICh7XG4gIGlzQ29sb3JTdXBwb3J0ZWQ6IGVuYWJsZWQsXG4gIHJlc2V0OiBlbmFibGVkID8gKHMpID0+IGBcdTAwMUJbMG0ke3N9XHUwMDFCWzBtYCA6IFN0cmluZyxcbiAgYm9sZDogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQlsxbVwiLCBcIlx1MDAxQlsyMm1cIiwgXCJcdTAwMUJbMjJtXHUwMDFCWzFtXCIpIDogU3RyaW5nLFxuICBkaW06IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbMm1cIiwgXCJcdTAwMUJbMjJtXCIsIFwiXHUwMDFCWzIybVx1MDAxQlsybVwiKSA6IFN0cmluZyxcbiAgaXRhbGljOiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzNtXCIsIFwiXHUwMDFCWzIzbVwiKSA6IFN0cmluZyxcbiAgdW5kZXJsaW5lOiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzRtXCIsIFwiXHUwMDFCWzI0bVwiKSA6IFN0cmluZyxcbiAgaW52ZXJzZTogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQls3bVwiLCBcIlx1MDAxQlsyN21cIikgOiBTdHJpbmcsXG4gIGhpZGRlbjogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQls4bVwiLCBcIlx1MDAxQlsyOG1cIikgOiBTdHJpbmcsXG4gIHN0cmlrZXRocm91Z2g6IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbOW1cIiwgXCJcdTAwMUJbMjltXCIpIDogU3RyaW5nLFxuICBibGFjazogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQlszMG1cIiwgXCJcdTAwMUJbMzltXCIpIDogU3RyaW5nLFxuICByZWQ6IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbMzFtXCIsIFwiXHUwMDFCWzM5bVwiKSA6IFN0cmluZyxcbiAgZ3JlZW46IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbMzJtXCIsIFwiXHUwMDFCWzM5bVwiKSA6IFN0cmluZyxcbiAgeWVsbG93OiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzMzbVwiLCBcIlx1MDAxQlszOW1cIikgOiBTdHJpbmcsXG4gIGJsdWU6IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbMzRtXCIsIFwiXHUwMDFCWzM5bVwiKSA6IFN0cmluZyxcbiAgbWFnZW50YTogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQlszNW1cIiwgXCJcdTAwMUJbMzltXCIpIDogU3RyaW5nLFxuICBjeWFuOiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzM2bVwiLCBcIlx1MDAxQlszOW1cIikgOiBTdHJpbmcsXG4gIHdoaXRlOiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzM3bVwiLCBcIlx1MDAxQlszOW1cIikgOiBTdHJpbmcsXG4gIGdyYXk6IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbOTBtXCIsIFwiXHUwMDFCWzM5bVwiKSA6IFN0cmluZyxcbiAgYmdCbGFjazogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQls0MG1cIiwgXCJcdTAwMUJbNDltXCIpIDogU3RyaW5nLFxuICBiZ1JlZDogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQls0MW1cIiwgXCJcdTAwMUJbNDltXCIpIDogU3RyaW5nLFxuICBiZ0dyZWVuOiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzQybVwiLCBcIlx1MDAxQls0OW1cIikgOiBTdHJpbmcsXG4gIGJnWWVsbG93OiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzQzbVwiLCBcIlx1MDAxQls0OW1cIikgOiBTdHJpbmcsXG4gIGJnQmx1ZTogZW5hYmxlZCA/IGZvcm1hdHRlcihcIlx1MDAxQls0NG1cIiwgXCJcdTAwMUJbNDltXCIpIDogU3RyaW5nLFxuICBiZ01hZ2VudGE6IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbNDVtXCIsIFwiXHUwMDFCWzQ5bVwiKSA6IFN0cmluZyxcbiAgYmdDeWFuOiBlbmFibGVkID8gZm9ybWF0dGVyKFwiXHUwMDFCWzQ2bVwiLCBcIlx1MDAxQls0OW1cIikgOiBTdHJpbmcsXG4gIGJnV2hpdGU6IGVuYWJsZWQgPyBmb3JtYXR0ZXIoXCJcdTAwMUJbNDdtXCIsIFwiXHUwMDFCWzQ5bVwiKSA6IFN0cmluZ1xufSk7XG52YXIgY29sb3JzID0gY3JlYXRlQ29sb3JzKCk7XG5cbmV4cG9ydCB7XG4gIGNvbG9yc1xufTtcbiIsICJpbXBvcnQge2NyZWF0ZVJlcXVpcmUgYXMgX18kJGNyZWF0ZVJlcXVpcmV9IGZyb20gJ21vZHVsZSc7dmFyIHJlcXVpcmU9X18kJGNyZWF0ZVJlcXVpcmUoXCJmaWxlOi8vL1VzZXJzL2Vnb2lzdC9kZXYvdHNuby9kaXN0L2NodW5rLVFUQVgzQlpDLmpzXCIpO1xuaW1wb3J0IHtcbiAgX19jb21tb25KUyxcbiAgX19yZXF1aXJlLFxuICBfX3RvRVNNXG59IGZyb20gXCIuL2NodW5rLVhHTlZPSTNELmpzXCI7XG5cbi8vIG5vZGVfbW9kdWxlcy8ucG5wbS93ZWItc3RyZWFtcy1wb2x5ZmlsbEAzLjIuMC9ub2RlX21vZHVsZXMvd2ViLXN0cmVhbXMtcG9seWZpbGwvZGlzdC9wb255ZmlsbC5lczIwMTguanNcbnZhciByZXF1aXJlX3BvbnlmaWxsX2VzMjAxOCA9IF9fY29tbW9uSlMoe1xuICBcIm5vZGVfbW9kdWxlcy8ucG5wbS93ZWItc3RyZWFtcy1wb2x5ZmlsbEAzLjIuMC9ub2RlX21vZHVsZXMvd2ViLXN0cmVhbXMtcG9seWZpbGwvZGlzdC9wb255ZmlsbC5lczIwMTguanNcIihleHBvcnRzLCBtb2R1bGUpIHtcbiAgICAoZnVuY3Rpb24oZ2xvYmFsMiwgZmFjdG9yeSkge1xuICAgICAgdHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiA/IGZhY3RvcnkoZXhwb3J0cykgOiB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXCJleHBvcnRzXCJdLCBmYWN0b3J5KSA6IChnbG9iYWwyID0gdHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogZ2xvYmFsMiB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbDIuV2ViU3RyZWFtc1BvbHlmaWxsID0ge30pKTtcbiAgICB9KShleHBvcnRzLCBmdW5jdGlvbihleHBvcnRzMikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICBjb25zdCBTeW1ib2xQb2x5ZmlsbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gU3ltYm9sIDogKGRlc2NyaXB0aW9uKSA9PiBgU3ltYm9sKCR7ZGVzY3JpcHRpb259KWA7XG4gICAgICBmdW5jdGlvbiBub29wKCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZ2V0R2xvYmFscygpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdsb2JhbHMgPSBnZXRHbG9iYWxzKCk7XG4gICAgICBmdW5jdGlvbiB0eXBlSXNPYmplY3QoeDIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4MiA9PT0gXCJvYmplY3RcIiAmJiB4MiAhPT0gbnVsbCB8fCB0eXBlb2YgeDIgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJldGhyb3dBc3NlcnRpb25FcnJvclJlamVjdGlvbiA9IG5vb3A7XG4gICAgICBjb25zdCBvcmlnaW5hbFByb21pc2UgPSBQcm9taXNlO1xuICAgICAgY29uc3Qgb3JpZ2luYWxQcm9taXNlVGhlbiA9IFByb21pc2UucHJvdG90eXBlLnRoZW47XG4gICAgICBjb25zdCBvcmlnaW5hbFByb21pc2VSZXNvbHZlID0gUHJvbWlzZS5yZXNvbHZlLmJpbmQob3JpZ2luYWxQcm9taXNlKTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsUHJvbWlzZVJlamVjdCA9IFByb21pc2UucmVqZWN0LmJpbmQob3JpZ2luYWxQcm9taXNlKTtcbiAgICAgIGZ1bmN0aW9uIG5ld1Byb21pc2UoZXhlY3V0b3IpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBvcmlnaW5hbFByb21pc2UoZXhlY3V0b3IpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcHJvbWlzZVJlc29sdmVkV2l0aCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxQcm9taXNlUmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBwcm9taXNlUmVqZWN0ZWRXaXRoKHJlYXNvbikge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxQcm9taXNlUmVqZWN0KHJlYXNvbik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBQZXJmb3JtUHJvbWlzZVRoZW4ocHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUHJvbWlzZVRoZW4uY2FsbChwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB1cG9uUHJvbWlzZShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICBQZXJmb3JtUHJvbWlzZVRoZW4oUGVyZm9ybVByb21pc2VUaGVuKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSwgdm9pZCAwLCByZXRocm93QXNzZXJ0aW9uRXJyb3JSZWplY3Rpb24pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdXBvbkZ1bGZpbGxtZW50KHByb21pc2UsIG9uRnVsZmlsbGVkKSB7XG4gICAgICAgIHVwb25Qcm9taXNlKHByb21pc2UsIG9uRnVsZmlsbGVkKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHVwb25SZWplY3Rpb24ocHJvbWlzZSwgb25SZWplY3RlZCkge1xuICAgICAgICB1cG9uUHJvbWlzZShwcm9taXNlLCB2b2lkIDAsIG9uUmVqZWN0ZWQpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gdHJhbnNmb3JtUHJvbWlzZVdpdGgocHJvbWlzZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBQZXJmb3JtUHJvbWlzZVRoZW4ocHJvbWlzZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUocHJvbWlzZSkge1xuICAgICAgICBQZXJmb3JtUHJvbWlzZVRoZW4ocHJvbWlzZSwgdm9pZCAwLCByZXRocm93QXNzZXJ0aW9uRXJyb3JSZWplY3Rpb24pO1xuICAgICAgfVxuICAgICAgY29uc3QgcXVldWVNaWNyb3Rhc2sgPSAoKCkgPT4ge1xuICAgICAgICBjb25zdCBnbG9iYWxRdWV1ZU1pY3JvdGFzayA9IGdsb2JhbHMgJiYgZ2xvYmFscy5xdWV1ZU1pY3JvdGFzaztcbiAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWxRdWV1ZU1pY3JvdGFzayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGdsb2JhbFF1ZXVlTWljcm90YXNrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc29sdmVkUHJvbWlzZSA9IHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgcmV0dXJuIChmbikgPT4gUGVyZm9ybVByb21pc2VUaGVuKHJlc29sdmVkUHJvbWlzZSwgZm4pO1xuICAgICAgfSkoKTtcbiAgICAgIGZ1bmN0aW9uIHJlZmxlY3RDYWxsKEYsIFYsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKEYsIFYsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcHJvbWlzZUNhbGwoRiwgViwgYXJncykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHJlZmxlY3RDYWxsKEYsIFYsIGFyZ3MpKTtcbiAgICAgICAgfSBjYXRjaCAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IFFVRVVFX01BWF9BUlJBWV9TSVpFID0gMTYzODQ7XG4gICAgICBjbGFzcyBTaW1wbGVRdWV1ZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgIHRoaXMuX2N1cnNvciA9IDA7XG4gICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgdGhpcy5fZnJvbnQgPSB7XG4gICAgICAgICAgICBfZWxlbWVudHM6IFtdLFxuICAgICAgICAgICAgX25leHQ6IHZvaWQgMFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5fYmFjayA9IHRoaXMuX2Zyb250O1xuICAgICAgICAgIHRoaXMuX2N1cnNvciA9IDA7XG4gICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBwdXNoKGVsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBvbGRCYWNrID0gdGhpcy5fYmFjaztcbiAgICAgICAgICBsZXQgbmV3QmFjayA9IG9sZEJhY2s7XG4gICAgICAgICAgaWYgKG9sZEJhY2suX2VsZW1lbnRzLmxlbmd0aCA9PT0gUVVFVUVfTUFYX0FSUkFZX1NJWkUgLSAxKSB7XG4gICAgICAgICAgICBuZXdCYWNrID0ge1xuICAgICAgICAgICAgICBfZWxlbWVudHM6IFtdLFxuICAgICAgICAgICAgICBfbmV4dDogdm9pZCAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbGRCYWNrLl9lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIGlmIChuZXdCYWNrICE9PSBvbGRCYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9iYWNrID0gbmV3QmFjaztcbiAgICAgICAgICAgIG9sZEJhY2suX25leHQgPSBuZXdCYWNrO1xuICAgICAgICAgIH1cbiAgICAgICAgICArK3RoaXMuX3NpemU7XG4gICAgICAgIH1cbiAgICAgICAgc2hpZnQoKSB7XG4gICAgICAgICAgY29uc3Qgb2xkRnJvbnQgPSB0aGlzLl9mcm9udDtcbiAgICAgICAgICBsZXQgbmV3RnJvbnQgPSBvbGRGcm9udDtcbiAgICAgICAgICBjb25zdCBvbGRDdXJzb3IgPSB0aGlzLl9jdXJzb3I7XG4gICAgICAgICAgbGV0IG5ld0N1cnNvciA9IG9sZEN1cnNvciArIDE7XG4gICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBvbGRGcm9udC5fZWxlbWVudHM7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW29sZEN1cnNvcl07XG4gICAgICAgICAgaWYgKG5ld0N1cnNvciA9PT0gUVVFVUVfTUFYX0FSUkFZX1NJWkUpIHtcbiAgICAgICAgICAgIG5ld0Zyb250ID0gb2xkRnJvbnQuX25leHQ7XG4gICAgICAgICAgICBuZXdDdXJzb3IgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXRoaXMuX3NpemU7XG4gICAgICAgICAgdGhpcy5fY3Vyc29yID0gbmV3Q3Vyc29yO1xuICAgICAgICAgIGlmIChvbGRGcm9udCAhPT0gbmV3RnJvbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Zyb250ID0gbmV3RnJvbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnRzW29sZEN1cnNvcl0gPSB2b2lkIDA7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgICAgICAgIGxldCBpMiA9IHRoaXMuX2N1cnNvcjtcbiAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuX2Zyb250O1xuICAgICAgICAgIGxldCBlbGVtZW50cyA9IG5vZGUuX2VsZW1lbnRzO1xuICAgICAgICAgIHdoaWxlIChpMiAhPT0gZWxlbWVudHMubGVuZ3RoIHx8IG5vZGUuX25leHQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaWYgKGkyID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGUuX25leHQ7XG4gICAgICAgICAgICAgIGVsZW1lbnRzID0gbm9kZS5fZWxlbWVudHM7XG4gICAgICAgICAgICAgIGkyID0gMDtcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50c1tpMl0pO1xuICAgICAgICAgICAgKytpMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGVlaygpIHtcbiAgICAgICAgICBjb25zdCBmcm9udCA9IHRoaXMuX2Zyb250O1xuICAgICAgICAgIGNvbnN0IGN1cnNvciA9IHRoaXMuX2N1cnNvcjtcbiAgICAgICAgICByZXR1cm4gZnJvbnQuX2VsZW1lbnRzW2N1cnNvcl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY0luaXRpYWxpemUocmVhZGVyLCBzdHJlYW0pIHtcbiAgICAgICAgcmVhZGVyLl9vd25lclJlYWRhYmxlU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBzdHJlYW0uX3JlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09IFwicmVhZGFibGVcIikge1xuICAgICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZShyZWFkZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbS5fc3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1Jlc29sdmVkKHJlYWRlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZChyZWFkZXIsIHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNDYW5jZWwocmVhZGVyLCByZWFzb24pIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gcmVhZGVyLl9vd25lclJlYWRhYmxlU3RyZWFtO1xuICAgICAgICByZXR1cm4gUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCByZWFzb24pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljUmVsZWFzZShyZWFkZXIpIHtcbiAgICAgICAgaWYgKHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbS5fc3RhdGUgPT09IFwicmVhZGFibGVcIikge1xuICAgICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVqZWN0KHJlYWRlciwgbmV3IFR5cGVFcnJvcihgUmVhZGVyIHdhcyByZWxlYXNlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB1c2VkIHRvIG1vbml0b3IgdGhlIHN0cmVhbSdzIGNsb3NlZG5lc3NgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZXNldFRvUmVqZWN0ZWQocmVhZGVyLCBuZXcgVHlwZUVycm9yKGBSZWFkZXIgd2FzIHJlbGVhc2VkIGFuZCBjYW4gbm8gbG9uZ2VyIGJlIHVzZWQgdG8gbW9uaXRvciB0aGUgc3RyZWFtJ3MgY2xvc2VkbmVzc2ApKTtcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW0uX3JlYWRlciA9IHZvaWQgMDtcbiAgICAgICAgcmVhZGVyLl9vd25lclJlYWRhYmxlU3RyZWFtID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gcmVhZGVyTG9ja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IFwiICsgbmFtZSArIFwiIGEgc3RyZWFtIHVzaW5nIGEgcmVsZWFzZWQgcmVhZGVyXCIpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHJlYWRlcikge1xuICAgICAgICByZWFkZXIuX2Nsb3NlZFByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1JlamVjdGVkKHJlYWRlciwgcmVhc29uKSB7XG4gICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZShyZWFkZXIpO1xuICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlamVjdChyZWFkZXIsIHJlYXNvbik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1Jlc29sdmVkKHJlYWRlcikge1xuICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemUocmVhZGVyKTtcbiAgICAgICAgZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZXNvbHZlKHJlYWRlcik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlamVjdChyZWFkZXIsIHJlYXNvbikge1xuICAgICAgICBpZiAocmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFByb21pc2VJc0hhbmRsZWRUb1RydWUocmVhZGVyLl9jbG9zZWRQcm9taXNlKTtcbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdChyZWFzb24pO1xuICAgICAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVzZXRUb1JlamVjdGVkKHJlYWRlciwgcmVhc29uKSB7XG4gICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQocmVhZGVyLCByZWFzb24pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZGVmYXVsdFJlYWRlckNsb3NlZFByb21pc2VSZXNvbHZlKHJlYWRlcikge1xuICAgICAgICBpZiAocmVhZGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICByZWFkZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICAgICAgcmVhZGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IEFib3J0U3RlcHMgPSBTeW1ib2xQb2x5ZmlsbChcIltbQWJvcnRTdGVwc11dXCIpO1xuICAgICAgY29uc3QgRXJyb3JTdGVwcyA9IFN5bWJvbFBvbHlmaWxsKFwiW1tFcnJvclN0ZXBzXV1cIik7XG4gICAgICBjb25zdCBDYW5jZWxTdGVwcyA9IFN5bWJvbFBvbHlmaWxsKFwiW1tDYW5jZWxTdGVwc11dXCIpO1xuICAgICAgY29uc3QgUHVsbFN0ZXBzID0gU3ltYm9sUG9seWZpbGwoXCJbW1B1bGxTdGVwc11dXCIpO1xuICAgICAgY29uc3QgTnVtYmVySXNGaW5pdGUgPSBOdW1iZXIuaXNGaW5pdGUgfHwgZnVuY3Rpb24oeDIpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4MiA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh4Mik7XG4gICAgICB9O1xuICAgICAgY29uc3QgTWF0aFRydW5jID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiB2IDwgMCA/IE1hdGguY2VpbCh2KSA6IE1hdGguZmxvb3Iodik7XG4gICAgICB9O1xuICAgICAgZnVuY3Rpb24gaXNEaWN0aW9uYXJ5KHgyKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgeDIgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIHgyID09PSBcImZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBhc3NlcnREaWN0aW9uYXJ5KG9iaiwgY29udGV4dCkge1xuICAgICAgICBpZiAob2JqICE9PSB2b2lkIDAgJiYgIWlzRGljdGlvbmFyeShvYmopKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYW4gb2JqZWN0LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBhc3NlcnRGdW5jdGlvbih4MiwgY29udGV4dCkge1xuICAgICAgICBpZiAodHlwZW9mIHgyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2NvbnRleHR9IGlzIG5vdCBhIGZ1bmN0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBpc09iamVjdCh4Mikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHgyID09PSBcIm9iamVjdFwiICYmIHgyICE9PSBudWxsIHx8IHR5cGVvZiB4MiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYXNzZXJ0T2JqZWN0KHgyLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghaXNPYmplY3QoeDIpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtjb250ZXh0fSBpcyBub3QgYW4gb2JqZWN0LmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHgyLCBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgICAgICBpZiAoeDIgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFBhcmFtZXRlciAke3Bvc2l0aW9ufSBpcyByZXF1aXJlZCBpbiAnJHtjb250ZXh0fScuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGFzc2VydFJlcXVpcmVkRmllbGQoeDIsIGZpZWxkLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICh4MiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgJHtmaWVsZH0gaXMgcmVxdWlyZWQgaW4gJyR7Y29udGV4dH0nLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb252ZXJ0VW5yZXN0cmljdGVkRG91YmxlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY2Vuc29yTmVnYXRpdmVaZXJvKHgyKSB7XG4gICAgICAgIHJldHVybiB4MiA9PT0gMCA/IDAgOiB4MjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGludGVnZXJQYXJ0KHgyKSB7XG4gICAgICAgIHJldHVybiBjZW5zb3JOZWdhdGl2ZVplcm8oTWF0aFRydW5jKHgyKSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb252ZXJ0VW5zaWduZWRMb25nTG9uZ1dpdGhFbmZvcmNlUmFuZ2UodmFsdWUsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgbG93ZXJCb3VuZCA9IDA7XG4gICAgICAgIGNvbnN0IHVwcGVyQm91bmQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICAgICAgbGV0IHgyID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgeDIgPSBjZW5zb3JOZWdhdGl2ZVplcm8oeDIpO1xuICAgICAgICBpZiAoIU51bWJlcklzRmluaXRlKHgyKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGEgZmluaXRlIG51bWJlcmApO1xuICAgICAgICB9XG4gICAgICAgIHgyID0gaW50ZWdlclBhcnQoeDIpO1xuICAgICAgICBpZiAoeDIgPCBsb3dlckJvdW5kIHx8IHgyID4gdXBwZXJCb3VuZCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgb3V0c2lkZSB0aGUgYWNjZXB0ZWQgcmFuZ2Ugb2YgJHtsb3dlckJvdW5kfSB0byAke3VwcGVyQm91bmR9LCBpbmNsdXNpdmVgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU51bWJlcklzRmluaXRlKHgyKSB8fCB4MiA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4MjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGFzc2VydFJlYWRhYmxlU3RyZWFtKHgyLCBjb250ZXh0KSB7XG4gICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbSh4MikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2NvbnRleHR9IGlzIG5vdCBhIFJlYWRhYmxlU3RyZWFtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBBY3F1aXJlUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihzdHJlYW0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1BZGRSZWFkUmVxdWVzdChzdHJlYW0sIHJlYWRSZXF1ZXN0KSB7XG4gICAgICAgIHN0cmVhbS5fcmVhZGVyLl9yZWFkUmVxdWVzdHMucHVzaChyZWFkUmVxdWVzdCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkUmVxdWVzdChzdHJlYW0sIGNodW5rLCBkb25lKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgICAgICBjb25zdCByZWFkUmVxdWVzdCA9IHJlYWRlci5fcmVhZFJlcXVlc3RzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgcmVhZFJlcXVlc3QuX2Nsb3NlU3RlcHMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWFkUmVxdWVzdC5fY2h1bmtTdGVwcyhjaHVuayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtR2V0TnVtUmVhZFJlcXVlc3RzKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gc3RyZWFtLl9yZWFkZXIuX3JlYWRSZXF1ZXN0cy5sZW5ndGg7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUhhc0RlZmF1bHRSZWFkZXIoc3RyZWFtKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgICAgICBpZiAocmVhZGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihyZWFkZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY2xhc3MgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyIHtcbiAgICAgICAgY29uc3RydWN0b3Ioc3RyZWFtKSB7XG4gICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChzdHJlYW0sIDEsIFwiUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyXCIpO1xuICAgICAgICAgIGFzc2VydFJlYWRhYmxlU3RyZWFtKHN0cmVhbSwgXCJGaXJzdCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoaXMgc3RyZWFtIGhhcyBhbHJlYWR5IGJlZW4gbG9ja2VkIGZvciBleGNsdXNpdmUgcmVhZGluZyBieSBhbm90aGVyIHJlYWRlclwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljSW5pdGlhbGl6ZSh0aGlzLCBzdHJlYW0pO1xuICAgICAgICAgIHRoaXMuX3JlYWRSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJjbG9zZWRcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VkUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBjYW5jZWwocmVhc29uID0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJjYW5jZWxcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fb3duZXJSZWFkYWJsZVN0cmVhbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFkZXJMb2NrRXhjZXB0aW9uKFwiY2FuY2VsXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY0NhbmNlbCh0aGlzLCByZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJlYWQoKSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJyZWFkXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgocmVhZGVyTG9ja0V4Y2VwdGlvbihcInJlYWQgZnJvbVwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCByZXNvbHZlUHJvbWlzZTtcbiAgICAgICAgICBsZXQgcmVqZWN0UHJvbWlzZTtcbiAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3UHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlID0gcmVqZWN0O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnN0IHJlYWRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgX2NodW5rU3RlcHM6IChjaHVuaykgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogY2h1bmssIGRvbmU6IGZhbHNlIH0pLFxuICAgICAgICAgICAgX2Nsb3NlU3RlcHM6ICgpID0+IHJlc29sdmVQcm9taXNlKHsgdmFsdWU6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgIF9lcnJvclN0ZXBzOiAoZTIpID0+IHJlamVjdFByb21pc2UoZTIpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJSZWFkKHRoaXMsIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICByZWxlYXNlTG9jaygpIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBkZWZhdWx0UmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbihcInJlbGVhc2VMb2NrXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fb3duZXJSZWFkYWJsZVN0cmVhbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9yZWFkUmVxdWVzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRyaWVkIHRvIHJlbGVhc2UgYSByZWFkZXIgbG9jayB3aGVuIHRoYXQgcmVhZGVyIGhhcyBwZW5kaW5nIHJlYWQoKSBjYWxscyB1bi1zZXR0bGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIucHJvdG90eXBlLCB7XG4gICAgICAgIGNhbmNlbDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHJlYWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICByZWxlYXNlTG9jazogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGNsb3NlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogXCJSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJcIixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcih4Mikge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4MikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeDIsIFwiX3JlYWRSZXF1ZXN0c1wiKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDIgaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXI7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJSZWFkKHJlYWRlciwgcmVhZFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gcmVhZGVyLl9vd25lclJlYWRhYmxlU3RyZWFtO1xuICAgICAgICBzdHJlYW0uX2Rpc3R1cmJlZCA9IHRydWU7XG4gICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgcmVhZFJlcXVlc3QuX2Nsb3NlU3RlcHMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlYW0uX3N0YXRlID09PSBcImVycm9yZWRcIikge1xuICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9lcnJvclN0ZXBzKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0cmVhbS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyW1B1bGxTdGVwc10ocmVhZFJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0UmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcmApO1xuICAgICAgfVxuICAgICAgY29uc3QgQXN5bmNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICAgIH0pLnByb3RvdHlwZSk7XG4gICAgICBjbGFzcyBSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JJbXBsIHtcbiAgICAgICAgY29uc3RydWN0b3IocmVhZGVyLCBwcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgICAgdGhpcy5fb25nb2luZ1Byb21pc2UgPSB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5faXNGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3JlYWRlciA9IHJlYWRlcjtcbiAgICAgICAgICB0aGlzLl9wcmV2ZW50Q2FuY2VsID0gcHJldmVudENhbmNlbDtcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgIGNvbnN0IG5leHRTdGVwcyA9ICgpID0+IHRoaXMuX25leHRTdGVwcygpO1xuICAgICAgICAgIHRoaXMuX29uZ29pbmdQcm9taXNlID0gdGhpcy5fb25nb2luZ1Byb21pc2UgPyB0cmFuc2Zvcm1Qcm9taXNlV2l0aCh0aGlzLl9vbmdvaW5nUHJvbWlzZSwgbmV4dFN0ZXBzLCBuZXh0U3RlcHMpIDogbmV4dFN0ZXBzKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX29uZ29pbmdQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybih2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IHJldHVyblN0ZXBzID0gKCkgPT4gdGhpcy5fcmV0dXJuU3RlcHModmFsdWUpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9vbmdvaW5nUHJvbWlzZSA/IHRyYW5zZm9ybVByb21pc2VXaXRoKHRoaXMuX29uZ29pbmdQcm9taXNlLCByZXR1cm5TdGVwcywgcmV0dXJuU3RlcHMpIDogcmV0dXJuU3RlcHMoKTtcbiAgICAgICAgfVxuICAgICAgICBfbmV4dFN0ZXBzKCkge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0ZpbmlzaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHsgdmFsdWU6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gdGhpcy5fcmVhZGVyO1xuICAgICAgICAgIGlmIChyZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgocmVhZGVyTG9ja0V4Y2VwdGlvbihcIml0ZXJhdGVcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcmVzb2x2ZVByb21pc2U7XG4gICAgICAgICAgbGV0IHJlamVjdFByb21pc2U7XG4gICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZSA9IHJlamVjdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb25zdCByZWFkUmVxdWVzdCA9IHtcbiAgICAgICAgICAgIF9jaHVua1N0ZXBzOiAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25nb2luZ1Byb21pc2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHJlc29sdmVQcm9taXNlKHsgdmFsdWU6IGNodW5rLCBkb25lOiBmYWxzZSB9KSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2Nsb3NlU3RlcHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fb25nb2luZ1Byb21pc2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgIHRoaXMuX2lzRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgICAgICAgIHJlc29sdmVQcm9taXNlKHsgdmFsdWU6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfZXJyb3JTdGVwczogKHJlYXNvbikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9vbmdvaW5nUHJvbWlzZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgdGhpcy5faXNGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtUmVhZGVyR2VuZXJpY1JlbGVhc2UocmVhZGVyKTtcbiAgICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShyZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBfcmV0dXJuU3RlcHModmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5faXNGaW5pc2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7IHZhbHVlLCBkb25lOiB0cnVlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9pc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSB0aGlzLl9yZWFkZXI7XG4gICAgICAgICAgaWYgKHJlYWRlci5fb3duZXJSZWFkYWJsZVN0cmVhbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFkZXJMb2NrRXhjZXB0aW9uKFwiZmluaXNoIGl0ZXJhdGluZ1wiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGhpcy5fcHJldmVudENhbmNlbCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljQ2FuY2VsKHJlYWRlciwgdmFsdWUpO1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljUmVsZWFzZShyZWFkZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVByb21pc2VXaXRoKHJlc3VsdCwgKCkgPT4gKHsgdmFsdWUsIGRvbmU6IHRydWUgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgoeyB2YWx1ZSwgZG9uZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3QgUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yUHJvdG90eXBlID0ge1xuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3IodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUFzeW5jSXRlcmF0b3JCcmFuZENoZWNrRXhjZXB0aW9uKFwibmV4dFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLl9hc3luY0l0ZXJhdG9ySW1wbC5uZXh0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJldHVybih2YWx1ZSkge1xuICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3IodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUFzeW5jSXRlcmF0b3JCcmFuZENoZWNrRXhjZXB0aW9uKFwicmV0dXJuXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2FzeW5jSXRlcmF0b3JJbXBsLnJldHVybih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoQXN5bmNJdGVyYXRvclByb3RvdHlwZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3JQcm90b3R5cGUsIEFzeW5jSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gQWNxdWlyZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcihzdHJlYW0sIHByZXZlbnRDYW5jZWwpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gQWNxdWlyZVJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihzdHJlYW0pO1xuICAgICAgICBjb25zdCBpbXBsID0gbmV3IFJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvckltcGwocmVhZGVyLCBwcmV2ZW50Q2FuY2VsKTtcbiAgICAgICAgY29uc3QgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIGl0ZXJhdG9yLl9hc3luY0l0ZXJhdG9ySW1wbCA9IGltcGw7XG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yKHgyKSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgyKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4MiwgXCJfYXN5bmNJdGVyYXRvckltcGxcIikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4geDIuX2FzeW5jSXRlcmF0b3JJbXBsIGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9ySW1wbDtcbiAgICAgICAgfSBjYXRjaCAoX2EpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHN0cmVhbUFzeW5jSXRlcmF0b3JCcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvci4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBSZWFkYWJsZVN0ZWFtQXN5bmNJdGVyYXRvcmApO1xuICAgICAgfVxuICAgICAgY29uc3QgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24oeDIpIHtcbiAgICAgICAgcmV0dXJuIHgyICE9PSB4MjtcbiAgICAgIH07XG4gICAgICBmdW5jdGlvbiBDcmVhdGVBcnJheUZyb21MaXN0KGVsZW1lbnRzKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50cy5zbGljZSgpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gQ29weURhdGFCbG9ja0J5dGVzKGRlc3QsIGRlc3RPZmZzZXQsIHNyYywgc3JjT2Zmc2V0LCBuKSB7XG4gICAgICAgIG5ldyBVaW50OEFycmF5KGRlc3QpLnNldChuZXcgVWludDhBcnJheShzcmMsIHNyY09mZnNldCwgbiksIGRlc3RPZmZzZXQpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gVHJhbnNmZXJBcnJheUJ1ZmZlcihPKSB7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gSXNEZXRhY2hlZEJ1ZmZlcihPKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIEFycmF5QnVmZmVyU2xpY2UoYnVmZmVyLCBiZWdpbiwgZW5kKSB7XG4gICAgICAgIGlmIChidWZmZXIuc2xpY2UpIHtcbiAgICAgICAgICByZXR1cm4gYnVmZmVyLnNsaWNlKGJlZ2luLCBlbmQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGVuZCAtIGJlZ2luO1xuICAgICAgICBjb25zdCBzbGljZSA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICAgICAgICBDb3B5RGF0YUJsb2NrQnl0ZXMoc2xpY2UsIDAsIGJ1ZmZlciwgYmVnaW4sIGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBzbGljZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIElzTm9uTmVnYXRpdmVOdW1iZXIodikge1xuICAgICAgICBpZiAodHlwZW9mIHYgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE51bWJlcklzTmFOKHYpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIENsb25lQXNVaW50OEFycmF5KE8pIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gQXJyYXlCdWZmZXJTbGljZShPLmJ1ZmZlciwgTy5ieXRlT2Zmc2V0LCBPLmJ5dGVPZmZzZXQgKyBPLmJ5dGVMZW5ndGgpO1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIERlcXVldWVWYWx1ZShjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgcGFpciA9IGNvbnRhaW5lci5fcXVldWUuc2hpZnQoKTtcbiAgICAgICAgY29udGFpbmVyLl9xdWV1ZVRvdGFsU2l6ZSAtPSBwYWlyLnNpemU7XG4gICAgICAgIGlmIChjb250YWluZXIuX3F1ZXVlVG90YWxTaXplIDwgMCkge1xuICAgICAgICAgIGNvbnRhaW5lci5fcXVldWVUb3RhbFNpemUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWlyLnZhbHVlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gRW5xdWV1ZVZhbHVlV2l0aFNpemUoY29udGFpbmVyLCB2YWx1ZSwgc2l6ZSkge1xuICAgICAgICBpZiAoIUlzTm9uTmVnYXRpdmVOdW1iZXIoc2l6ZSkgfHwgc2l6ZSA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlNpemUgbXVzdCBiZSBhIGZpbml0ZSwgbm9uLU5hTiwgbm9uLW5lZ2F0aXZlIG51bWJlci5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLl9xdWV1ZS5wdXNoKHsgdmFsdWUsIHNpemUgfSk7XG4gICAgICAgIGNvbnRhaW5lci5fcXVldWVUb3RhbFNpemUgKz0gc2l6ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFBlZWtRdWV1ZVZhbHVlKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBwYWlyID0gY29udGFpbmVyLl9xdWV1ZS5wZWVrKCk7XG4gICAgICAgIHJldHVybiBwYWlyLnZhbHVlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVzZXRRdWV1ZShjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLl9xdWV1ZSA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICBjb250YWluZXIuX3F1ZXVlVG90YWxTaXplID0gMDtcbiAgICAgIH1cbiAgICAgIGNsYXNzIFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3Qge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSWxsZWdhbCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdmlldygpIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnlvYlJlcXVlc3RCcmFuZENoZWNrRXhjZXB0aW9uKFwidmlld1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXc7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uZChieXRlc1dyaXR0ZW4pIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnlvYlJlcXVlc3RCcmFuZENoZWNrRXhjZXB0aW9uKFwicmVzcG9uZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChieXRlc1dyaXR0ZW4sIDEsIFwicmVzcG9uZFwiKTtcbiAgICAgICAgICBieXRlc1dyaXR0ZW4gPSBjb252ZXJ0VW5zaWduZWRMb25nTG9uZ1dpdGhFbmZvcmNlUmFuZ2UoYnl0ZXNXcml0dGVuLCBcIkZpcnN0IHBhcmFtZXRlclwiKTtcbiAgICAgICAgICBpZiAodGhpcy5fYXNzb2NpYXRlZFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoaXMgQllPQiByZXF1ZXN0IGhhcyBiZWVuIGludmFsaWRhdGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoSXNEZXRhY2hlZEJ1ZmZlcih0aGlzLl92aWV3LmJ1ZmZlcikpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmQodGhpcy5fYXNzb2NpYXRlZFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzcG9uZFdpdGhOZXdWaWV3KHZpZXcpIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdCh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnlvYlJlcXVlc3RCcmFuZENoZWNrRXhjZXB0aW9uKFwicmVzcG9uZFdpdGhOZXdWaWV3XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHZpZXcsIDEsIFwicmVzcG9uZFdpdGhOZXdWaWV3XCIpO1xuICAgICAgICAgIGlmICghQXJyYXlCdWZmZXIuaXNWaWV3KHZpZXcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IGNhbiBvbmx5IHJlc3BvbmQgd2l0aCBhcnJheSBidWZmZXIgdmlld3NcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9hc3NvY2lhdGVkUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhpcyBCWU9CIHJlcXVlc3QgaGFzIGJlZW4gaW52YWxpZGF0ZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChJc0RldGFjaGVkQnVmZmVyKHZpZXcuYnVmZmVyKSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZFdpdGhOZXdWaWV3KHRoaXMuX2Fzc29jaWF0ZWRSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyLCB2aWV3KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdC5wcm90b3R5cGUsIHtcbiAgICAgICAgcmVzcG9uZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHJlc3BvbmRXaXRoTmV3VmlldzogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHZpZXc6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgIHZhbHVlOiBcIlJlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3RcIixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjbGFzcyBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIklsbGVnYWwgY29uc3RydWN0b3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGJ5b2JSZXF1ZXN0KCkge1xuICAgICAgICAgIGlmICghSXNSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJieW9iUmVxdWVzdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJHZXRCWU9CUmVxdWVzdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgZGVzaXJlZFNpemUoKSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGJ5dGVTdHJlYW1Db250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbihcImRlc2lyZWRTaXplXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldERlc2lyZWRTaXplKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgIGlmICghSXNSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBieXRlU3RyZWFtQ29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJjbG9zZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlUmVxdWVzdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIHN0cmVhbSBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZDsgZG8gbm90IGNsb3NlIGl0IGFnYWluIVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgICBpZiAoc3RhdGUgIT09IFwicmVhZGFibGVcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIHN0cmVhbSAoaW4gJHtzdGF0ZX0gc3RhdGUpIGlzIG5vdCBpbiB0aGUgcmVhZGFibGUgc3RhdGUgYW5kIGNhbm5vdCBiZSBjbG9zZWRgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsb3NlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoY2h1bmspIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnl0ZVN0cmVhbUNvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwiZW5xdWV1ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChjaHVuaywgMSwgXCJlbnF1ZXVlXCIpO1xuICAgICAgICAgIGlmICghQXJyYXlCdWZmZXIuaXNWaWV3KGNodW5rKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNodW5rIG11c3QgYmUgYW4gYXJyYXkgYnVmZmVyIHZpZXdcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaHVuay5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2h1bmsgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGhcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaHVuay5idWZmZXIuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY2h1bmsncyBidWZmZXIgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGhgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlUmVxdWVzdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwic3RyZWFtIGlzIGNsb3NlZCBvciBkcmFpbmluZ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgICBpZiAoc3RhdGUgIT09IFwicmVhZGFibGVcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIHN0cmVhbSAoaW4gJHtzdGF0ZX0gc3RhdGUpIGlzIG5vdCBpbiB0aGUgcmVhZGFibGUgc3RhdGUgYW5kIGNhbm5vdCBiZSBlbnF1ZXVlZCB0b2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRW5xdWV1ZSh0aGlzLCBjaHVuayk7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoZTIgPSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnl0ZVN0cmVhbUNvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwiZXJyb3JcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFcnJvcih0aGlzLCBlMik7XG4gICAgICAgIH1cbiAgICAgICAgW0NhbmNlbFN0ZXBzXShyZWFzb24pIHtcbiAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xlYXJQZW5kaW5nUHVsbEludG9zKHRoaXMpO1xuICAgICAgICAgIFJlc2V0UXVldWUodGhpcyk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY2FuY2VsQWxnb3JpdGhtKHJlYXNvbik7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyh0aGlzKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIFtQdWxsU3RlcHNdKHJlYWRSZXF1ZXN0KSB7XG4gICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbTtcbiAgICAgICAgICBpZiAodGhpcy5fcXVldWVUb3RhbFNpemUgPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMuX3F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZVRvdGFsU2l6ZSAtPSBlbnRyeS5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckhhbmRsZVF1ZXVlRHJhaW4odGhpcyk7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZW50cnkuYnVmZmVyLCBlbnRyeS5ieXRlT2Zmc2V0LCBlbnRyeS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9jaHVua1N0ZXBzKHZpZXcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhdXRvQWxsb2NhdGVDaHVua1NpemUgPSB0aGlzLl9hdXRvQWxsb2NhdGVDaHVua1NpemU7XG4gICAgICAgICAgaWYgKGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBsZXQgYnVmZmVyO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGF1dG9BbGxvY2F0ZUNodW5rU2l6ZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChidWZmZXJFKSB7XG4gICAgICAgICAgICAgIHJlYWRSZXF1ZXN0Ll9lcnJvclN0ZXBzKGJ1ZmZlckUpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwdWxsSW50b0Rlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICAgICAgYnVmZmVyQnl0ZUxlbmd0aDogYXV0b0FsbG9jYXRlQ2h1bmtTaXplLFxuICAgICAgICAgICAgICBieXRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICBieXRlTGVuZ3RoOiBhdXRvQWxsb2NhdGVDaHVua1NpemUsXG4gICAgICAgICAgICAgIGJ5dGVzRmlsbGVkOiAwLFxuICAgICAgICAgICAgICBlbGVtZW50U2l6ZTogMSxcbiAgICAgICAgICAgICAgdmlld0NvbnN0cnVjdG9yOiBVaW50OEFycmF5LFxuICAgICAgICAgICAgICByZWFkZXJUeXBlOiBcImRlZmF1bHRcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdQdWxsSW50b3MucHVzaChwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbUFkZFJlYWRSZXF1ZXN0KHN0cmVhbSwgcmVhZFJlcXVlc3QpO1xuICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyLnByb3RvdHlwZSwge1xuICAgICAgICBjbG9zZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGVucXVldWU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBlcnJvcjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGJ5b2JSZXF1ZXN0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZGVzaXJlZFNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgIHZhbHVlOiBcIlJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJcIixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoeDIpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgyLCBcIl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4MiBpbnN0YW5jZW9mIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtQllPQlJlcXVlc3QoeDIpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgyLCBcIl9hc3NvY2lhdGVkUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclwiKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDIgaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0O1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzaG91bGRQdWxsID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNob3VsZENhbGxQdWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICBpZiAoIXNob3VsZFB1bGwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX3B1bGxpbmcpIHtcbiAgICAgICAgICBjb250cm9sbGVyLl9wdWxsQWdhaW4gPSB0cnVlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgcHVsbFByb21pc2UgPSBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtKCk7XG4gICAgICAgIHVwb25Qcm9taXNlKHB1bGxQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgY29udHJvbGxlci5fcHVsbGluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChjb250cm9sbGVyLl9wdWxsQWdhaW4pIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuX3B1bGxBZ2FpbiA9IGZhbHNlO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAoZTIpID0+IHtcbiAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZTIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhclBlbmRpbmdQdWxsSW50b3MoY29udHJvbGxlcikge1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySW52YWxpZGF0ZUJZT0JSZXF1ZXN0KGNvbnRyb2xsZXIpO1xuICAgICAgICBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29tbWl0UHVsbEludG9EZXNjcmlwdG9yKHN0cmVhbSwgcHVsbEludG9EZXNjcmlwdG9yKSB7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsbGVkVmlldyA9IFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDb252ZXJ0UHVsbEludG9EZXNjcmlwdG9yKHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgIGlmIChwdWxsSW50b0Rlc2NyaXB0b3IucmVhZGVyVHlwZSA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkUmVxdWVzdChzdHJlYW0sIGZpbGxlZFZpZXcsIGRvbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRnVsZmlsbFJlYWRJbnRvUmVxdWVzdChzdHJlYW0sIGZpbGxlZFZpZXcsIGRvbmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29udmVydFB1bGxJbnRvRGVzY3JpcHRvcihwdWxsSW50b0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgY29uc3QgYnl0ZXNGaWxsZWQgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQ7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRTaXplID0gcHVsbEludG9EZXNjcmlwdG9yLmVsZW1lbnRTaXplO1xuICAgICAgICByZXR1cm4gbmV3IHB1bGxJbnRvRGVzY3JpcHRvci52aWV3Q29uc3RydWN0b3IocHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlciwgcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVPZmZzZXQsIGJ5dGVzRmlsbGVkIC8gZWxlbWVudFNpemUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDaHVua1RvUXVldWUoY29udHJvbGxlciwgYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX3F1ZXVlLnB1c2goeyBidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggfSk7XG4gICAgICAgIGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplICs9IGJ5dGVMZW5ndGg7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRmlsbFB1bGxJbnRvRGVzY3JpcHRvckZyb21RdWV1ZShjb250cm9sbGVyLCBwdWxsSW50b0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudFNpemUgPSBwdWxsSW50b0Rlc2NyaXB0b3IuZWxlbWVudFNpemU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBbGlnbmVkQnl0ZXMgPSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgLSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgJSBlbGVtZW50U2l6ZTtcbiAgICAgICAgY29uc3QgbWF4Qnl0ZXNUb0NvcHkgPSBNYXRoLm1pbihjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSwgcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVMZW5ndGggLSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQpO1xuICAgICAgICBjb25zdCBtYXhCeXRlc0ZpbGxlZCA9IHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCArIG1heEJ5dGVzVG9Db3B5O1xuICAgICAgICBjb25zdCBtYXhBbGlnbmVkQnl0ZXMgPSBtYXhCeXRlc0ZpbGxlZCAtIG1heEJ5dGVzRmlsbGVkICUgZWxlbWVudFNpemU7XG4gICAgICAgIGxldCB0b3RhbEJ5dGVzVG9Db3B5UmVtYWluaW5nID0gbWF4Qnl0ZXNUb0NvcHk7XG4gICAgICAgIGxldCByZWFkeSA9IGZhbHNlO1xuICAgICAgICBpZiAobWF4QWxpZ25lZEJ5dGVzID4gY3VycmVudEFsaWduZWRCeXRlcykge1xuICAgICAgICAgIHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcgPSBtYXhBbGlnbmVkQnl0ZXMgLSBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQ7XG4gICAgICAgICAgcmVhZHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gY29udHJvbGxlci5fcXVldWU7XG4gICAgICAgIHdoaWxlICh0b3RhbEJ5dGVzVG9Db3B5UmVtYWluaW5nID4gMCkge1xuICAgICAgICAgIGNvbnN0IGhlYWRPZlF1ZXVlID0gcXVldWUucGVlaygpO1xuICAgICAgICAgIGNvbnN0IGJ5dGVzVG9Db3B5ID0gTWF0aC5taW4odG90YWxCeXRlc1RvQ29weVJlbWFpbmluZywgaGVhZE9mUXVldWUuYnl0ZUxlbmd0aCk7XG4gICAgICAgICAgY29uc3QgZGVzdFN0YXJ0ID0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVPZmZzZXQgKyBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQ7XG4gICAgICAgICAgQ29weURhdGFCbG9ja0J5dGVzKHB1bGxJbnRvRGVzY3JpcHRvci5idWZmZXIsIGRlc3RTdGFydCwgaGVhZE9mUXVldWUuYnVmZmVyLCBoZWFkT2ZRdWV1ZS5ieXRlT2Zmc2V0LCBieXRlc1RvQ29weSk7XG4gICAgICAgICAgaWYgKGhlYWRPZlF1ZXVlLmJ5dGVMZW5ndGggPT09IGJ5dGVzVG9Db3B5KSB7XG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoZWFkT2ZRdWV1ZS5ieXRlT2Zmc2V0ICs9IGJ5dGVzVG9Db3B5O1xuICAgICAgICAgICAgaGVhZE9mUXVldWUuYnl0ZUxlbmd0aCAtPSBieXRlc1RvQ29weTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgLT0gYnl0ZXNUb0NvcHk7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckZpbGxIZWFkUHVsbEludG9EZXNjcmlwdG9yKGNvbnRyb2xsZXIsIGJ5dGVzVG9Db3B5LCBwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgIHRvdGFsQnl0ZXNUb0NvcHlSZW1haW5pbmcgLT0gYnl0ZXNUb0NvcHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWR5O1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckZpbGxIZWFkUHVsbEludG9EZXNjcmlwdG9yKGNvbnRyb2xsZXIsIHNpemUsIHB1bGxJbnRvRGVzY3JpcHRvcikge1xuICAgICAgICBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgKz0gc2l6ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJIYW5kbGVRdWV1ZURyYWluKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplID09PSAwICYmIGNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkKSB7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbUNsb3NlKGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySW52YWxpZGF0ZUJZT0JSZXF1ZXN0KGNvbnRyb2xsZXIpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX2J5b2JSZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRyb2xsZXIuX2J5b2JSZXF1ZXN0Ll9hc3NvY2lhdGVkUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlciA9IHZvaWQgMDtcbiAgICAgICAgY29udHJvbGxlci5fYnlvYlJlcXVlc3QuX3ZpZXcgPSBudWxsO1xuICAgICAgICBjb250cm9sbGVyLl9ieW9iUmVxdWVzdCA9IG51bGw7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUHJvY2Vzc1B1bGxJbnRvRGVzY3JpcHRvcnNVc2luZ1F1ZXVlKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwdWxsSW50b0Rlc2NyaXB0b3IgPSBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnBlZWsoKTtcbiAgICAgICAgICBpZiAoUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckZpbGxQdWxsSW50b0Rlc2NyaXB0b3JGcm9tUXVldWUoY29udHJvbGxlciwgcHVsbEludG9EZXNjcmlwdG9yKSkge1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNoaWZ0UGVuZGluZ1B1bGxJbnRvKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbW1pdFB1bGxJbnRvRGVzY3JpcHRvcihjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLCBwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclB1bGxJbnRvKGNvbnRyb2xsZXIsIHZpZXcsIHJlYWRJbnRvUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtO1xuICAgICAgICBsZXQgZWxlbWVudFNpemUgPSAxO1xuICAgICAgICBpZiAodmlldy5jb25zdHJ1Y3RvciAhPT0gRGF0YVZpZXcpIHtcbiAgICAgICAgICBlbGVtZW50U2l6ZSA9IHZpZXcuY29uc3RydWN0b3IuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3RvciA9IHZpZXcuY29uc3RydWN0b3I7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IFRyYW5zZmVyQXJyYXlCdWZmZXIodmlldy5idWZmZXIpO1xuICAgICAgICBjb25zdCBwdWxsSW50b0Rlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgYnVmZmVyLFxuICAgICAgICAgIGJ1ZmZlckJ5dGVMZW5ndGg6IGJ1ZmZlci5ieXRlTGVuZ3RoLFxuICAgICAgICAgIGJ5dGVPZmZzZXQ6IHZpZXcuYnl0ZU9mZnNldCxcbiAgICAgICAgICBieXRlTGVuZ3RoOiB2aWV3LmJ5dGVMZW5ndGgsXG4gICAgICAgICAgYnl0ZXNGaWxsZWQ6IDAsXG4gICAgICAgICAgZWxlbWVudFNpemUsXG4gICAgICAgICAgdmlld0NvbnN0cnVjdG9yOiBjdG9yLFxuICAgICAgICAgIHJlYWRlclR5cGU6IFwiYnlvYlwiXG4gICAgICAgIH07XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnB1c2gocHVsbEludG9EZXNjcmlwdG9yKTtcbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbUFkZFJlYWRJbnRvUmVxdWVzdChzdHJlYW0sIHJlYWRJbnRvUmVxdWVzdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgY29uc3QgZW1wdHlWaWV3ID0gbmV3IGN0b3IocHVsbEludG9EZXNjcmlwdG9yLmJ1ZmZlciwgcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVPZmZzZXQsIDApO1xuICAgICAgICAgIHJlYWRJbnRvUmVxdWVzdC5fY2xvc2VTdGVwcyhlbXB0eVZpZXcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbGxlci5fcXVldWVUb3RhbFNpemUgPiAwKSB7XG4gICAgICAgICAgaWYgKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGaWxsUHVsbEludG9EZXNjcmlwdG9yRnJvbVF1ZXVlKGNvbnRyb2xsZXIsIHB1bGxJbnRvRGVzY3JpcHRvcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxlZFZpZXcgPSBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29udmVydFB1bGxJbnRvRGVzY3JpcHRvcihwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckhhbmRsZVF1ZXVlRHJhaW4oY29udHJvbGxlcik7XG4gICAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2NodW5rU3RlcHMoZmlsbGVkVmlldyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCkge1xuICAgICAgICAgICAgY29uc3QgZTIgPSBuZXcgVHlwZUVycm9yKFwiSW5zdWZmaWNpZW50IGJ5dGVzIHRvIGZpbGwgZWxlbWVudHMgaW4gdGhlIGdpdmVuIGJ1ZmZlclwiKTtcbiAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlMik7XG4gICAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2Vycm9yU3RlcHMoZTIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnB1c2gocHVsbEludG9EZXNjcmlwdG9yKTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1BZGRSZWFkSW50b1JlcXVlc3Qoc3RyZWFtLCByZWFkSW50b1JlcXVlc3QpO1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW5DbG9zZWRTdGF0ZShjb250cm9sbGVyLCBmaXJzdERlc2NyaXB0b3IpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbTtcbiAgICAgICAgaWYgKFJlYWRhYmxlU3RyZWFtSGFzQllPQlJlYWRlcihzdHJlYW0pKSB7XG4gICAgICAgICAgd2hpbGUgKFJlYWRhYmxlU3RyZWFtR2V0TnVtUmVhZEludG9SZXF1ZXN0cyhzdHJlYW0pID4gMCkge1xuICAgICAgICAgICAgY29uc3QgcHVsbEludG9EZXNjcmlwdG9yID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNoaWZ0UGVuZGluZ1B1bGxJbnRvKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNvbW1pdFB1bGxJbnRvRGVzY3JpcHRvcihzdHJlYW0sIHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZEluUmVhZGFibGVTdGF0ZShjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4sIHB1bGxJbnRvRGVzY3JpcHRvcikge1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRmlsbEhlYWRQdWxsSW50b0Rlc2NyaXB0b3IoY29udHJvbGxlciwgYnl0ZXNXcml0dGVuLCBwdWxsSW50b0Rlc2NyaXB0b3IpO1xuICAgICAgICBpZiAocHVsbEludG9EZXNjcmlwdG9yLmJ5dGVzRmlsbGVkIDwgcHVsbEludG9EZXNjcmlwdG9yLmVsZW1lbnRTaXplKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJTaGlmdFBlbmRpbmdQdWxsSW50byhjb250cm9sbGVyKTtcbiAgICAgICAgY29uc3QgcmVtYWluZGVyU2l6ZSA9IHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCAlIHB1bGxJbnRvRGVzY3JpcHRvci5lbGVtZW50U2l6ZTtcbiAgICAgICAgaWYgKHJlbWFpbmRlclNpemUgPiAwKSB7XG4gICAgICAgICAgY29uc3QgZW5kID0gcHVsbEludG9EZXNjcmlwdG9yLmJ5dGVPZmZzZXQgKyBwdWxsSW50b0Rlc2NyaXB0b3IuYnl0ZXNGaWxsZWQ7XG4gICAgICAgICAgY29uc3QgcmVtYWluZGVyID0gQXJyYXlCdWZmZXJTbGljZShwdWxsSW50b0Rlc2NyaXB0b3IuYnVmZmVyLCBlbmQgLSByZW1haW5kZXJTaXplLCBlbmQpO1xuICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlQ2h1bmtUb1F1ZXVlKGNvbnRyb2xsZXIsIHJlbWFpbmRlciwgMCwgcmVtYWluZGVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHB1bGxJbnRvRGVzY3JpcHRvci5ieXRlc0ZpbGxlZCAtPSByZW1haW5kZXJTaXplO1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ29tbWl0UHVsbEludG9EZXNjcmlwdG9yKGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW0sIHB1bGxJbnRvRGVzY3JpcHRvcik7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJQcm9jZXNzUHVsbEludG9EZXNjcmlwdG9yc1VzaW5nUXVldWUoY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZEludGVybmFsKGNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbikge1xuICAgICAgICBjb25zdCBmaXJzdERlc2NyaXB0b3IgPSBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnBlZWsoKTtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckludmFsaWRhdGVCWU9CUmVxdWVzdChjb250cm9sbGVyKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRJbkNsb3NlZFN0YXRlKGNvbnRyb2xsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW5SZWFkYWJsZVN0YXRlKGNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbiwgZmlyc3REZXNjcmlwdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJTaGlmdFBlbmRpbmdQdWxsSW50byhjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclNob3VsZENhbGxQdWxsKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbTtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgIT09IFwicmVhZGFibGVcIikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb250cm9sbGVyLl9zdGFydGVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChSZWFkYWJsZVN0cmVhbUhhc0RlZmF1bHRSZWFkZXIoc3RyZWFtKSAmJiBSZWFkYWJsZVN0cmVhbUdldE51bVJlYWRSZXF1ZXN0cyhzdHJlYW0pID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSAmJiBSZWFkYWJsZVN0cmVhbUdldE51bVJlYWRJbnRvUmVxdWVzdHMoc3RyZWFtKSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXNpcmVkU2l6ZSA9IFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZShjb250cm9sbGVyKTtcbiAgICAgICAgaWYgKGRlc2lyZWRTaXplID4gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLl9wdWxsQWxnb3JpdGhtID0gdm9pZCAwO1xuICAgICAgICBjb250cm9sbGVyLl9jYW5jZWxBbGdvcml0aG0gPSB2b2lkIDA7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2xvc2UoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVCeXRlU3RyZWFtO1xuICAgICAgICBpZiAoY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgfHwgc3RyZWFtLl9zdGF0ZSAhPT0gXCJyZWFkYWJsZVwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA+IDApIHtcbiAgICAgICAgICBjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdFBlbmRpbmdQdWxsSW50byA9IGNvbnRyb2xsZXIuX3BlbmRpbmdQdWxsSW50b3MucGVlaygpO1xuICAgICAgICAgIGlmIChmaXJzdFBlbmRpbmdQdWxsSW50by5ieXRlc0ZpbGxlZCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGUyID0gbmV3IFR5cGVFcnJvcihcIkluc3VmZmljaWVudCBieXRlcyB0byBmaWxsIGVsZW1lbnRzIGluIHRoZSBnaXZlbiBidWZmZXJcIik7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZTIpO1xuICAgICAgICAgICAgdGhyb3cgZTI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtQ2xvc2Uoc3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlKGNvbnRyb2xsZXIsIGNodW5rKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9jbG9zZVJlcXVlc3RlZCB8fCBzdHJlYW0uX3N0YXRlICE9PSBcInJlYWRhYmxlXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVmZmVyID0gY2h1bmsuYnVmZmVyO1xuICAgICAgICBjb25zdCBieXRlT2Zmc2V0ID0gY2h1bmsuYnl0ZU9mZnNldDtcbiAgICAgICAgY29uc3QgYnl0ZUxlbmd0aCA9IGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgICAgIGNvbnN0IHRyYW5zZmVycmVkQnVmZmVyID0gVHJhbnNmZXJBcnJheUJ1ZmZlcihidWZmZXIpO1xuICAgICAgICBpZiAoY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZmlyc3RQZW5kaW5nUHVsbEludG8gPSBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnBlZWsoKTtcbiAgICAgICAgICBpZiAoSXNEZXRhY2hlZEJ1ZmZlcihmaXJzdFBlbmRpbmdQdWxsSW50by5idWZmZXIpKVxuICAgICAgICAgICAgO1xuICAgICAgICAgIGZpcnN0UGVuZGluZ1B1bGxJbnRvLmJ1ZmZlciA9IFRyYW5zZmVyQXJyYXlCdWZmZXIoZmlyc3RQZW5kaW5nUHVsbEludG8uYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVySW52YWxpZGF0ZUJZT0JSZXF1ZXN0KGNvbnRyb2xsZXIpO1xuICAgICAgICBpZiAoUmVhZGFibGVTdHJlYW1IYXNEZWZhdWx0UmVhZGVyKHN0cmVhbSkpIHtcbiAgICAgICAgICBpZiAoUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSA9PT0gMCkge1xuICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDaHVua1RvUXVldWUoY29udHJvbGxlciwgdHJhbnNmZXJyZWRCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJTaGlmdFBlbmRpbmdQdWxsSW50byhjb250cm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZmVycmVkVmlldyA9IG5ldyBVaW50OEFycmF5KHRyYW5zZmVycmVkQnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRnVsZmlsbFJlYWRSZXF1ZXN0KHN0cmVhbSwgdHJhbnNmZXJyZWRWaWV3LCBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFJlYWRhYmxlU3RyZWFtSGFzQllPQlJlYWRlcihzdHJlYW0pKSB7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDaHVua1RvUXVldWUoY29udHJvbGxlciwgdHJhbnNmZXJyZWRCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJQcm9jZXNzUHVsbEludG9EZXNjcmlwdG9yc1VzaW5nUXVldWUoY29udHJvbGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWVDaHVua1RvUXVldWUoY29udHJvbGxlciwgdHJhbnNmZXJyZWRCdWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGUyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW07XG4gICAgICAgIGlmIChzdHJlYW0uX3N0YXRlICE9PSBcInJlYWRhYmxlXCIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyUGVuZGluZ1B1bGxJbnRvcyhjb250cm9sbGVyKTtcbiAgICAgICAgUmVzZXRRdWV1ZShjb250cm9sbGVyKTtcbiAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhjb250cm9sbGVyKTtcbiAgICAgICAgUmVhZGFibGVTdHJlYW1FcnJvcihzdHJlYW0sIGUyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJHZXRCWU9CUmVxdWVzdChjb250cm9sbGVyKSB7XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9ieW9iUmVxdWVzdCA9PT0gbnVsbCAmJiBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBmaXJzdERlc2NyaXB0b3IgPSBjb250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLnBlZWsoKTtcbiAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoZmlyc3REZXNjcmlwdG9yLmJ1ZmZlciwgZmlyc3REZXNjcmlwdG9yLmJ5dGVPZmZzZXQgKyBmaXJzdERlc2NyaXB0b3IuYnl0ZXNGaWxsZWQsIGZpcnN0RGVzY3JpcHRvci5ieXRlTGVuZ3RoIC0gZmlyc3REZXNjcmlwdG9yLmJ5dGVzRmlsbGVkKTtcbiAgICAgICAgICBjb25zdCBieW9iUmVxdWVzdCA9IE9iamVjdC5jcmVhdGUoUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdC5wcm90b3R5cGUpO1xuICAgICAgICAgIFNldFVwUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdChieW9iUmVxdWVzdCwgY29udHJvbGxlciwgdmlldyk7XG4gICAgICAgICAgY29udHJvbGxlci5fYnlvYlJlcXVlc3QgPSBieW9iUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udHJvbGxlci5fYnlvYlJlcXVlc3Q7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyR2V0RGVzaXJlZFNpemUoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09IFwiZXJyb3JlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuX3N0cmF0ZWd5SFdNIC0gY29udHJvbGxlci5fcXVldWVUb3RhbFNpemU7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZChjb250cm9sbGVyLCBieXRlc1dyaXR0ZW4pIHtcbiAgICAgICAgY29uc3QgZmlyc3REZXNjcmlwdG9yID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgIGlmIChieXRlc1dyaXR0ZW4gIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJieXRlc1dyaXR0ZW4gbXVzdCBiZSAwIHdoZW4gY2FsbGluZyByZXNwb25kKCkgb24gYSBjbG9zZWQgc3RyZWFtXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoYnl0ZXNXcml0dGVuID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYnl0ZXNXcml0dGVuIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgd2hlbiBjYWxsaW5nIHJlc3BvbmQoKSBvbiBhIHJlYWRhYmxlIHN0cmVhbVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpcnN0RGVzY3JpcHRvci5ieXRlc0ZpbGxlZCArIGJ5dGVzV3JpdHRlbiA+IGZpcnN0RGVzY3JpcHRvci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcImJ5dGVzV3JpdHRlbiBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpcnN0RGVzY3JpcHRvci5idWZmZXIgPSBUcmFuc2ZlckFycmF5QnVmZmVyKGZpcnN0RGVzY3JpcHRvci5idWZmZXIpO1xuICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZEludGVybmFsKGNvbnRyb2xsZXIsIGJ5dGVzV3JpdHRlbik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZFdpdGhOZXdWaWV3KGNvbnRyb2xsZXIsIHZpZXcpIHtcbiAgICAgICAgY29uc3QgZmlyc3REZXNjcmlwdG9yID0gY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5wZWVrKCk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlQnl0ZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgIGlmICh2aWV3LmJ5dGVMZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgdmlldydzIGxlbmd0aCBtdXN0IGJlIDAgd2hlbiBjYWxsaW5nIHJlc3BvbmRXaXRoTmV3VmlldygpIG9uIGEgY2xvc2VkIHN0cmVhbVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHZpZXcuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSB2aWV3J3MgbGVuZ3RoIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgd2hlbiBjYWxsaW5nIHJlc3BvbmRXaXRoTmV3VmlldygpIG9uIGEgcmVhZGFibGUgc3RyZWFtXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3REZXNjcmlwdG9yLmJ5dGVPZmZzZXQgKyBmaXJzdERlc2NyaXB0b3IuYnl0ZXNGaWxsZWQgIT09IHZpZXcuYnl0ZU9mZnNldCkge1xuICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVGhlIHJlZ2lvbiBzcGVjaWZpZWQgYnkgdmlldyBkb2VzIG5vdCBtYXRjaCBieW9iUmVxdWVzdFwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlyc3REZXNjcmlwdG9yLmJ1ZmZlckJ5dGVMZW5ndGggIT09IHZpZXcuYnVmZmVyLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBidWZmZXIgb2YgdmlldyBoYXMgZGlmZmVyZW50IGNhcGFjaXR5IHRoYW4gYnlvYlJlcXVlc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpcnN0RGVzY3JpcHRvci5ieXRlc0ZpbGxlZCArIHZpZXcuYnl0ZUxlbmd0aCA+IGZpcnN0RGVzY3JpcHRvci5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUaGUgcmVnaW9uIHNwZWNpZmllZCBieSB2aWV3IGlzIGxhcmdlciB0aGFuIGJ5b2JSZXF1ZXN0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZpZXdCeXRlTGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoO1xuICAgICAgICBmaXJzdERlc2NyaXB0b3IuYnVmZmVyID0gVHJhbnNmZXJBcnJheUJ1ZmZlcih2aWV3LmJ1ZmZlcik7XG4gICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kSW50ZXJuYWwoY29udHJvbGxlciwgdmlld0J5dGVMZW5ndGgpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgYXV0b0FsbG9jYXRlQ2h1bmtTaXplKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZUJ5dGVTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIGNvbnRyb2xsZXIuX3B1bGxBZ2FpbiA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnRyb2xsZXIuX2J5b2JSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgY29udHJvbGxlci5fcXVldWUgPSBjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZSA9IHZvaWQgMDtcbiAgICAgICAgUmVzZXRRdWV1ZShjb250cm9sbGVyKTtcbiAgICAgICAgY29udHJvbGxlci5fY2xvc2VSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9zdHJhdGVneUhXTSA9IGhpZ2hXYXRlck1hcms7XG4gICAgICAgIGNvbnRyb2xsZXIuX3B1bGxBbGdvcml0aG0gPSBwdWxsQWxnb3JpdGhtO1xuICAgICAgICBjb250cm9sbGVyLl9jYW5jZWxBbGdvcml0aG0gPSBjYW5jZWxBbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX2F1dG9BbGxvY2F0ZUNodW5rU2l6ZSA9IGF1dG9BbGxvY2F0ZUNodW5rU2l6ZTtcbiAgICAgICAgY29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICBzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIGNvbnN0IHN0YXJ0UmVzdWx0ID0gc3RhcnRBbGdvcml0aG0oKTtcbiAgICAgICAgdXBvblByb21pc2UocHJvbWlzZVJlc29sdmVkV2l0aChzdGFydFJlc3VsdCksICgpID0+IHtcbiAgICAgICAgICBjb250cm9sbGVyLl9zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgICAgfSwgKHIyKSA9PiB7XG4gICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIHIyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBTZXRVcFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1NvdXJjZShzdHJlYW0sIHVuZGVybHlpbmdCeXRlU291cmNlLCBoaWdoV2F0ZXJNYXJrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlKTtcbiAgICAgICAgbGV0IHN0YXJ0QWxnb3JpdGhtID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgcHVsbEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgbGV0IGNhbmNlbEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdCeXRlU291cmNlLnN0YXJ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBzdGFydEFsZ29yaXRobSA9ICgpID0+IHVuZGVybHlpbmdCeXRlU291cmNlLnN0YXJ0KGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlcmx5aW5nQnl0ZVNvdXJjZS5wdWxsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBwdWxsQWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ0J5dGVTb3VyY2UucHVsbChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZXJseWluZ0J5dGVTb3VyY2UuY2FuY2VsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjYW5jZWxBbGdvcml0aG0gPSAocmVhc29uKSA9PiB1bmRlcmx5aW5nQnl0ZVNvdXJjZS5jYW5jZWwocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdXRvQWxsb2NhdGVDaHVua1NpemUgPSB1bmRlcmx5aW5nQnl0ZVNvdXJjZS5hdXRvQWxsb2NhdGVDaHVua1NpemU7XG4gICAgICAgIGlmIChhdXRvQWxsb2NhdGVDaHVua1NpemUgPT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXV0b0FsbG9jYXRlQ2h1bmtTaXplIG11c3QgYmUgZ3JlYXRlciB0aGFuIDBcIik7XG4gICAgICAgIH1cbiAgICAgICAgU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgYXV0b0FsbG9jYXRlQ2h1bmtTaXplKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFNldFVwUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdChyZXF1ZXN0LCBjb250cm9sbGVyLCB2aWV3KSB7XG4gICAgICAgIHJlcXVlc3QuX2Fzc29jaWF0ZWRSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgcmVxdWVzdC5fdmlldyA9IHZpZXc7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBieW9iUmVxdWVzdEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdC5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdGApO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYnl0ZVN0cmVhbUNvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJgKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIEFjcXVpcmVSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIoc3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHN0cmVhbSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUFkZFJlYWRJbnRvUmVxdWVzdChzdHJlYW0sIHJlYWRJbnRvUmVxdWVzdCkge1xuICAgICAgICBzdHJlYW0uX3JlYWRlci5fcmVhZEludG9SZXF1ZXN0cy5wdXNoKHJlYWRJbnRvUmVxdWVzdCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkSW50b1JlcXVlc3Qoc3RyZWFtLCBjaHVuaywgZG9uZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uX3JlYWRlcjtcbiAgICAgICAgY29uc3QgcmVhZEludG9SZXF1ZXN0ID0gcmVhZGVyLl9yZWFkSW50b1JlcXVlc3RzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgcmVhZEludG9SZXF1ZXN0Ll9jbG9zZVN0ZXBzKGNodW5rKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2NodW5rU3RlcHMoY2h1bmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUdldE51bVJlYWRJbnRvUmVxdWVzdHMoc3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBzdHJlYW0uX3JlYWRlci5fcmVhZEludG9SZXF1ZXN0cy5sZW5ndGg7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbUhhc0JZT0JSZWFkZXIoc3RyZWFtKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5fcmVhZGVyO1xuICAgICAgICBpZiAocmVhZGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcihyZWFkZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY2xhc3MgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyIHtcbiAgICAgICAgY29uc3RydWN0b3Ioc3RyZWFtKSB7XG4gICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChzdHJlYW0sIDEsIFwiUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyXCIpO1xuICAgICAgICAgIGFzc2VydFJlYWRhYmxlU3RyZWFtKHN0cmVhbSwgXCJGaXJzdCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoaXMgc3RyZWFtIGhhcyBhbHJlYWR5IGJlZW4gbG9ja2VkIGZvciBleGNsdXNpdmUgcmVhZGluZyBieSBhbm90aGVyIHJlYWRlclwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoc3RyZWFtLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNvbnN0cnVjdCBhIFJlYWRhYmxlU3RyZWFtQllPQlJlYWRlciBmb3IgYSBzdHJlYW0gbm90IGNvbnN0cnVjdGVkIHdpdGggYSBieXRlIHNvdXJjZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljSW5pdGlhbGl6ZSh0aGlzLCBzdHJlYW0pO1xuICAgICAgICAgIHRoaXMuX3JlYWRJbnRvUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgY2xvc2VkKCkge1xuICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGJ5b2JSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwiY2xvc2VkXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Nsb3NlZFByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2FuY2VsKHJlYXNvbiA9IHZvaWQgMCkge1xuICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGJ5b2JSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwiY2FuY2VsXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX293bmVyUmVhZGFibGVTdHJlYW0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgocmVhZGVyTG9ja0V4Y2VwdGlvbihcImNhbmNlbFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNDYW5jZWwodGhpcywgcmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICByZWFkKHZpZXcpIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChieW9iUmVhZGVyQnJhbmRDaGVja0V4Y2VwdGlvbihcInJlYWRcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIUFycmF5QnVmZmVyLmlzVmlldyh2aWV3KSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcihcInZpZXcgbXVzdCBiZSBhbiBhcnJheSBidWZmZXIgdmlld1wiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2aWV3LmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoXCJ2aWV3IG11c3QgaGF2ZSBub24temVybyBieXRlTGVuZ3RoXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZpZXcuYnVmZmVyLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoYHZpZXcncyBidWZmZXIgbXVzdCBoYXZlIG5vbi16ZXJvIGJ5dGVMZW5ndGhgKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChJc0RldGFjaGVkQnVmZmVyKHZpZXcuYnVmZmVyKSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgICBpZiAodGhpcy5fb3duZXJSZWFkYWJsZVN0cmVhbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChyZWFkZXJMb2NrRXhjZXB0aW9uKFwicmVhZCBmcm9tXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHJlc29sdmVQcm9taXNlO1xuICAgICAgICAgIGxldCByZWplY3RQcm9taXNlO1xuICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UgPSByZWplY3Q7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgcmVhZEludG9SZXF1ZXN0ID0ge1xuICAgICAgICAgICAgX2NodW5rU3RlcHM6IChjaHVuaykgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogY2h1bmssIGRvbmU6IGZhbHNlIH0pLFxuICAgICAgICAgICAgX2Nsb3NlU3RlcHM6IChjaHVuaykgPT4gcmVzb2x2ZVByb21pc2UoeyB2YWx1ZTogY2h1bmssIGRvbmU6IHRydWUgfSksXG4gICAgICAgICAgICBfZXJyb3JTdGVwczogKGUyKSA9PiByZWplY3RQcm9taXNlKGUyKVxuICAgICAgICAgIH07XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyUmVhZCh0aGlzLCB2aWV3LCByZWFkSW50b1JlcXVlc3QpO1xuICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHJlbGVhc2VMb2NrKCkge1xuICAgICAgICAgIGlmICghSXNSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGJ5b2JSZWFkZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwicmVsZWFzZUxvY2tcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLl9vd25lclJlYWRhYmxlU3RyZWFtID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX3JlYWRJbnRvUmVxdWVzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRyaWVkIHRvIHJlbGVhc2UgYSByZWFkZXIgbG9jayB3aGVuIHRoYXQgcmVhZGVyIGhhcyBwZW5kaW5nIHJlYWQoKSBjYWxscyB1bi1zZXR0bGVkXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIucHJvdG90eXBlLCB7XG4gICAgICAgIGNhbmNlbDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHJlYWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICByZWxlYXNlTG9jazogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGNsb3NlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZyA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogXCJSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXJcIixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcih4Mikge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4MikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeDIsIFwiX3JlYWRJbnRvUmVxdWVzdHNcIikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHgyIGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyUmVhZChyZWFkZXIsIHZpZXcsIHJlYWRJbnRvUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSByZWFkZXIuX293bmVyUmVhZGFibGVTdHJlYW07XG4gICAgICAgIHN0cmVhbS5fZGlzdHVyYmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09IFwiZXJyb3JlZFwiKSB7XG4gICAgICAgICAgcmVhZEludG9SZXF1ZXN0Ll9lcnJvclN0ZXBzKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJQdWxsSW50byhzdHJlYW0uX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgdmlldywgcmVhZEludG9SZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYnlvYlJlYWRlckJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyLnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXJgKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHN0cmF0ZWd5LCBkZWZhdWx0SFdNKSB7XG4gICAgICAgIGNvbnN0IHsgaGlnaFdhdGVyTWFyayB9ID0gc3RyYXRlZ3k7XG4gICAgICAgIGlmIChoaWdoV2F0ZXJNYXJrID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdEhXTTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTnVtYmVySXNOYU4oaGlnaFdhdGVyTWFyaykgfHwgaGlnaFdhdGVyTWFyayA8IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgaGlnaFdhdGVyTWFya1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGlnaFdhdGVyTWFyaztcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIEV4dHJhY3RTaXplQWxnb3JpdGhtKHN0cmF0ZWd5KSB7XG4gICAgICAgIGNvbnN0IHsgc2l6ZSB9ID0gc3RyYXRlZ3k7XG4gICAgICAgIGlmICghc2l6ZSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFF1ZXVpbmdTdHJhdGVneShpbml0LCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkoaW5pdCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGhpZ2hXYXRlck1hcmsgPSBpbml0ID09PSBudWxsIHx8IGluaXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluaXQuaGlnaFdhdGVyTWFyaztcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGluaXQgPT09IG51bGwgfHwgaW5pdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5pdC5zaXplO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhpZ2hXYXRlck1hcms6IGhpZ2hXYXRlck1hcmsgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnZlcnRVbnJlc3RyaWN0ZWREb3VibGUoaGlnaFdhdGVyTWFyayksXG4gICAgICAgICAgc2l6ZTogc2l6ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udmVydFF1ZXVpbmdTdHJhdGVneVNpemUoc2l6ZSwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnc2l6ZScgdGhhdGApXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5U2l6ZShmbiwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY2h1bmspID0+IGNvbnZlcnRVbnJlc3RyaWN0ZWREb3VibGUoZm4oY2h1bmspKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU2luayhvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnREaWN0aW9uYXJ5KG9yaWdpbmFsLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgYWJvcnQgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuYWJvcnQ7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLmNsb3NlO1xuICAgICAgICBjb25zdCBzdGFydCA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5zdGFydDtcbiAgICAgICAgY29uc3QgdHlwZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC50eXBlO1xuICAgICAgICBjb25zdCB3cml0ZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC53cml0ZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBhYm9ydDogYWJvcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnZlcnRVbmRlcmx5aW5nU2lua0Fib3J0Q2FsbGJhY2soYWJvcnQsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdhYm9ydCcgdGhhdGApLFxuICAgICAgICAgIGNsb3NlOiBjbG9zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udmVydFVuZGVybHlpbmdTaW5rQ2xvc2VDYWxsYmFjayhjbG9zZSwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ2Nsb3NlJyB0aGF0YCksXG4gICAgICAgICAgc3RhcnQ6IHN0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb252ZXJ0VW5kZXJseWluZ1NpbmtTdGFydENhbGxiYWNrKHN0YXJ0LCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnc3RhcnQnIHRoYXRgKSxcbiAgICAgICAgICB3cml0ZTogd3JpdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnZlcnRVbmRlcmx5aW5nU2lua1dyaXRlQ2FsbGJhY2sod3JpdGUsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICd3cml0ZScgdGhhdGApLFxuICAgICAgICAgIHR5cGVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU2lua0Fib3J0Q2FsbGJhY2soZm4sIG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydEZ1bmN0aW9uKGZuLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIChyZWFzb24pID0+IHByb21pc2VDYWxsKGZuLCBvcmlnaW5hbCwgW3JlYXNvbl0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFVuZGVybHlpbmdTaW5rQ2xvc2VDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gKCkgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbXSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NpbmtTdGFydENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcmVmbGVjdENhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFVuZGVybHlpbmdTaW5rV3JpdGVDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gKGNodW5rLCBjb250cm9sbGVyKSA9PiBwcm9taXNlQ2FsbChmbiwgb3JpZ2luYWwsIFtjaHVuaywgY29udHJvbGxlcl0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYXNzZXJ0V3JpdGFibGVTdHJlYW0oeDIsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtKHgyKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gaXMgbm90IGEgV3JpdGFibGVTdHJlYW0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGlzQWJvcnRTaWduYWwodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUuYWJvcnRlZCA9PT0gXCJib29sZWFuXCI7XG4gICAgICAgIH0gY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBzdXBwb3J0c0Fib3J0Q29udHJvbGxlciA9IHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFib3J0Q29udHJvbGxlcigpIHtcbiAgICAgICAgaWYgKHN1cHBvcnRzQWJvcnRDb250cm9sbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfVxuICAgICAgY2xhc3MgV3JpdGFibGVTdHJlYW0ge1xuICAgICAgICBjb25zdHJ1Y3RvcihyYXdVbmRlcmx5aW5nU2luayA9IHt9LCByYXdTdHJhdGVneSA9IHt9KSB7XG4gICAgICAgICAgaWYgKHJhd1VuZGVybHlpbmdTaW5rID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJhd1VuZGVybHlpbmdTaW5rID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXNzZXJ0T2JqZWN0KHJhd1VuZGVybHlpbmdTaW5rLCBcIkZpcnN0IHBhcmFtZXRlclwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPSBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5KHJhd1N0cmF0ZWd5LCBcIlNlY29uZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgY29uc3QgdW5kZXJseWluZ1NpbmsgPSBjb252ZXJ0VW5kZXJseWluZ1NpbmsocmF3VW5kZXJseWluZ1NpbmssIFwiRmlyc3QgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgIEluaXRpYWxpemVXcml0YWJsZVN0cmVhbSh0aGlzKTtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdW5kZXJseWluZ1NpbmsudHlwZTtcbiAgICAgICAgICBpZiAodHlwZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdHlwZSBpcyBzcGVjaWZpZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHNpemVBbGdvcml0aG0gPSBFeHRyYWN0U2l6ZUFsZ29yaXRobShzdHJhdGVneSk7XG4gICAgICAgICAgY29uc3QgaGlnaFdhdGVyTWFyayA9IEV4dHJhY3RIaWdoV2F0ZXJNYXJrKHN0cmF0ZWd5LCAxKTtcbiAgICAgICAgICBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1NpbmsodGhpcywgdW5kZXJseWluZ1NpbmssIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgICAgICB9XG4gICAgICAgIGdldCBsb2NrZWQoKSB7XG4gICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDIoXCJsb2NrZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBJc1dyaXRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGFib3J0KHJlYXNvbiA9IHZvaWQgMCkge1xuICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQyKFwiYWJvcnRcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoSXNXcml0YWJsZVN0cmVhbUxvY2tlZCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhYm9ydCBhIHN0cmVhbSB0aGF0IGFscmVhZHkgaGFzIGEgd3JpdGVyXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQWJvcnQodGhpcywgcmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMihcImNsb3NlXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKElzV3JpdGFibGVTdHJlYW1Mb2NrZWQodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2xvc2UgYSBzdHJlYW0gdGhhdCBhbHJlYWR5IGhhcyBhIHdyaXRlclwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodCh0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjbG9zZSBhbiBhbHJlYWR5LWNsb3Npbmcgc3RyZWFtXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQ2xvc2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0V3JpdGVyKCkge1xuICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQyKFwiZ2V0V3JpdGVyXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gQWNxdWlyZVdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoV3JpdGFibGVTdHJlYW0ucHJvdG90eXBlLCB7XG4gICAgICAgIGFib3J0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgY2xvc2U6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBnZXRXcml0ZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBsb2NrZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RyZWFtLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogXCJXcml0YWJsZVN0cmVhbVwiLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIEFjcXVpcmVXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIoc3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBuZXcgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHN0cmVhbSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBDcmVhdGVXcml0YWJsZVN0cmVhbShzdGFydEFsZ29yaXRobSwgd3JpdGVBbGdvcml0aG0sIGNsb3NlQWxnb3JpdGhtLCBhYm9ydEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyayA9IDEsIHNpemVBbGdvcml0aG0gPSAoKSA9PiAxKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IE9iamVjdC5jcmVhdGUoV3JpdGFibGVTdHJlYW0ucHJvdG90eXBlKTtcbiAgICAgICAgSW5pdGlhbGl6ZVdyaXRhYmxlU3RyZWFtKHN0cmVhbSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlKTtcbiAgICAgICAgU2V0VXBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHdyaXRlQWxnb3JpdGhtLCBjbG9zZUFsZ29yaXRobSwgYWJvcnRBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gSW5pdGlhbGl6ZVdyaXRhYmxlU3RyZWFtKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uX3N0YXRlID0gXCJ3cml0YWJsZVwiO1xuICAgICAgICBzdHJlYW0uX3N0b3JlZEVycm9yID0gdm9pZCAwO1xuICAgICAgICBzdHJlYW0uX3dyaXRlciA9IHZvaWQgMDtcbiAgICAgICAgc3RyZWFtLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXIgPSB2b2lkIDA7XG4gICAgICAgIHN0cmVhbS5fd3JpdGVSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0ID0gdm9pZCAwO1xuICAgICAgICBzdHJlYW0uX2Nsb3NlUmVxdWVzdCA9IHZvaWQgMDtcbiAgICAgICAgc3RyZWFtLl9pbkZsaWdodENsb3NlUmVxdWVzdCA9IHZvaWQgMDtcbiAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID0gdm9pZCAwO1xuICAgICAgICBzdHJlYW0uX2JhY2twcmVzc3VyZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gSXNXcml0YWJsZVN0cmVhbSh4Mikge1xuICAgICAgICBpZiAoIXR5cGVJc09iamVjdCh4MikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeDIsIFwiX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlclwiKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDIgaW5zdGFuY2VvZiBXcml0YWJsZVN0cmVhbTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIElzV3JpdGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0uX3dyaXRlciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1BYm9ydChzdHJlYW0sIHJlYXNvbikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSBcImNsb3NlZFwiIHx8IHN0cmVhbS5fc3RhdGUgPT09IFwiZXJyb3JlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlci5fYWJvcnRSZWFzb24gPSByZWFzb247XG4gICAgICAgIChfYSA9IHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyLl9hYm9ydENvbnRyb2xsZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hYm9ydCgpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJjbG9zZWRcIiB8fCBzdGF0ZSA9PT0gXCJlcnJvcmVkXCIpIHtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybiBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QuX3Byb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHdhc0FscmVhZHlFcnJvcmluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoc3RhdGUgPT09IFwiZXJyb3JpbmdcIikge1xuICAgICAgICAgIHdhc0FscmVhZHlFcnJvcmluZyA9IHRydWU7XG4gICAgICAgICAgcmVhc29uID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgPSB7XG4gICAgICAgICAgICBfcHJvbWlzZTogdm9pZCAwLFxuICAgICAgICAgICAgX3Jlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICBfcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgICBfcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICBfd2FzQWxyZWFkeUVycm9yaW5nOiB3YXNBbHJlYWR5RXJyb3JpbmdcbiAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0Ll9wcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgaWYgKCF3YXNBbHJlYWR5RXJyb3JpbmcpIHtcbiAgICAgICAgICBXcml0YWJsZVN0cmVhbVN0YXJ0RXJyb3Jpbmcoc3RyZWFtLCByZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1DbG9zZShzdHJlYW0pIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09IFwiY2xvc2VkXCIgfHwgc3RhdGUgPT09IFwiZXJyb3JlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcihgVGhlIHN0cmVhbSAoaW4gJHtzdGF0ZX0gc3RhdGUpIGlzIG5vdCBpbiB0aGUgd3JpdGFibGUgc3RhdGUgYW5kIGNhbm5vdCBiZSBjbG9zZWRgKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNsb3NlUmVxdWVzdCA9IHtcbiAgICAgICAgICAgIF9yZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgX3JlamVjdDogcmVqZWN0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzdHJlYW0uX2Nsb3NlUmVxdWVzdCA9IGNsb3NlUmVxdWVzdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IHN0cmVhbS5fd3JpdGVyO1xuICAgICAgICBpZiAod3JpdGVyICE9PSB2b2lkIDAgJiYgc3RyZWFtLl9iYWNrcHJlc3N1cmUgJiYgc3RhdGUgPT09IFwid3JpdGFibGVcIikge1xuICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNvbHZlKHdyaXRlcik7XG4gICAgICAgIH1cbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbUFkZFdyaXRlUmVxdWVzdChzdHJlYW0pIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyaXRlUmVxdWVzdCA9IHtcbiAgICAgICAgICAgIF9yZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgICAgX3JlamVjdDogcmVqZWN0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzdHJlYW0uX3dyaXRlUmVxdWVzdHMucHVzaCh3cml0ZVJlcXVlc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlYWxXaXRoUmVqZWN0aW9uKHN0cmVhbSwgZXJyb3IpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09IFwid3JpdGFibGVcIikge1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtU3RhcnRFcnJvcmluZyhzdHJlYW0sIGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hFcnJvcmluZyhzdHJlYW0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1TdGFydEVycm9yaW5nKHN0cmVhbSwgcmVhc29uKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlcjtcbiAgICAgICAgc3RyZWFtLl9zdGF0ZSA9IFwiZXJyb3JpbmdcIjtcbiAgICAgICAgc3RyZWFtLl9zdG9yZWRFcnJvciA9IHJlYXNvbjtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gc3RyZWFtLl93cml0ZXI7XG4gICAgICAgIGlmICh3cml0ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckVuc3VyZVJlYWR5UHJvbWlzZVJlamVjdGVkKHdyaXRlciwgcmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVdyaXRhYmxlU3RyZWFtSGFzT3BlcmF0aW9uTWFya2VkSW5GbGlnaHQoc3RyZWFtKSAmJiBjb250cm9sbGVyLl9zdGFydGVkKSB7XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1GaW5pc2hFcnJvcmluZyhzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbUZpbmlzaEVycm9yaW5nKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uX3N0YXRlID0gXCJlcnJvcmVkXCI7XG4gICAgICAgIHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyW0Vycm9yU3RlcHNdKCk7XG4gICAgICAgIGNvbnN0IHN0b3JlZEVycm9yID0gc3RyZWFtLl9zdG9yZWRFcnJvcjtcbiAgICAgICAgc3RyZWFtLl93cml0ZVJlcXVlc3RzLmZvckVhY2goKHdyaXRlUmVxdWVzdCkgPT4ge1xuICAgICAgICAgIHdyaXRlUmVxdWVzdC5fcmVqZWN0KHN0b3JlZEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN0cmVhbS5fd3JpdGVSZXF1ZXN0cyA9IG5ldyBTaW1wbGVRdWV1ZSgpO1xuICAgICAgICBpZiAoc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICBXcml0YWJsZVN0cmVhbVJlamVjdENsb3NlQW5kQ2xvc2VkUHJvbWlzZUlmTmVlZGVkKHN0cmVhbSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFib3J0UmVxdWVzdCA9IHN0cmVhbS5fcGVuZGluZ0Fib3J0UmVxdWVzdDtcbiAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0ID0gdm9pZCAwO1xuICAgICAgICBpZiAoYWJvcnRSZXF1ZXN0Ll93YXNBbHJlYWR5RXJyb3JpbmcpIHtcbiAgICAgICAgICBhYm9ydFJlcXVlc3QuX3JlamVjdChzdG9yZWRFcnJvcik7XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1SZWplY3RDbG9zZUFuZENsb3NlZFByb21pc2VJZk5lZWRlZChzdHJlYW0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcm9taXNlID0gc3RyZWFtLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXJbQWJvcnRTdGVwc10oYWJvcnRSZXF1ZXN0Ll9yZWFzb24pO1xuICAgICAgICB1cG9uUHJvbWlzZShwcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgYWJvcnRSZXF1ZXN0Ll9yZXNvbHZlKCk7XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1SZWplY3RDbG9zZUFuZENsb3NlZFByb21pc2VJZk5lZWRlZChzdHJlYW0pO1xuICAgICAgICB9LCAocmVhc29uKSA9PiB7XG4gICAgICAgICAgYWJvcnRSZXF1ZXN0Ll9yZWplY3QocmVhc29uKTtcbiAgICAgICAgICBXcml0YWJsZVN0cmVhbVJlamVjdENsb3NlQW5kQ2xvc2VkUHJvbWlzZUlmTmVlZGVkKHN0cmVhbSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodFdyaXRlKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0Ll9yZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRXcml0ZVJlcXVlc3QgPSB2b2lkIDA7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbUZpbmlzaEluRmxpZ2h0V3JpdGVXaXRoRXJyb3Ioc3RyZWFtLCBlcnJvcikge1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0Ll9yZWplY3QoZXJyb3IpO1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0V3JpdGVSZXF1ZXN0ID0gdm9pZCAwO1xuICAgICAgICBXcml0YWJsZVN0cmVhbURlYWxXaXRoUmVqZWN0aW9uKHN0cmVhbSwgZXJyb3IpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1GaW5pc2hJbkZsaWdodENsb3NlKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0Ll9yZXNvbHZlKHZvaWQgMCk7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QgPSB2b2lkIDA7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBcImVycm9yaW5nXCIpIHtcbiAgICAgICAgICBzdHJlYW0uX3N0b3JlZEVycm9yID0gdm9pZCAwO1xuICAgICAgICAgIGlmIChzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3RyZWFtLl9wZW5kaW5nQWJvcnRSZXF1ZXN0Ll9yZXNvbHZlKCk7XG4gICAgICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgPSB2b2lkIDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5fc3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBzdHJlYW0uX3dyaXRlcjtcbiAgICAgICAgaWYgKHdyaXRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VSZXNvbHZlKHdyaXRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRDbG9zZVdpdGhFcnJvcihzdHJlYW0sIGVycm9yKSB7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QuX3JlamVjdChlcnJvcik7XG4gICAgICAgIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QgPSB2b2lkIDA7XG4gICAgICAgIGlmIChzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHN0cmVhbS5fcGVuZGluZ0Fib3J0UmVxdWVzdC5fcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICBzdHJlYW0uX3BlbmRpbmdBYm9ydFJlcXVlc3QgPSB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgICAgV3JpdGFibGVTdHJlYW1EZWFsV2l0aFJlamVjdGlvbihzdHJlYW0sIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtQ2xvc2VRdWV1ZWRPckluRmxpZ2h0KHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtLl9jbG9zZVJlcXVlc3QgPT09IHZvaWQgMCAmJiBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbUhhc09wZXJhdGlvbk1hcmtlZEluRmxpZ2h0KHN0cmVhbSkge1xuICAgICAgICBpZiAoc3RyZWFtLl9pbkZsaWdodFdyaXRlUmVxdWVzdCA9PT0gdm9pZCAwICYmIHN0cmVhbS5faW5GbGlnaHRDbG9zZVJlcXVlc3QgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtTWFya0Nsb3NlUmVxdWVzdEluRmxpZ2h0KHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uX2luRmxpZ2h0Q2xvc2VSZXF1ZXN0ID0gc3RyZWFtLl9jbG9zZVJlcXVlc3Q7XG4gICAgICAgIHN0cmVhbS5fY2xvc2VSZXF1ZXN0ID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1NYXJrRmlyc3RXcml0ZVJlcXVlc3RJbkZsaWdodChzdHJlYW0pIHtcbiAgICAgICAgc3RyZWFtLl9pbkZsaWdodFdyaXRlUmVxdWVzdCA9IHN0cmVhbS5fd3JpdGVSZXF1ZXN0cy5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1SZWplY3RDbG9zZUFuZENsb3NlZFByb21pc2VJZk5lZWRlZChzdHJlYW0pIHtcbiAgICAgICAgaWYgKHN0cmVhbS5fY2xvc2VSZXF1ZXN0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBzdHJlYW0uX2Nsb3NlUmVxdWVzdC5fcmVqZWN0KHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICAgIHN0cmVhbS5fY2xvc2VSZXF1ZXN0ID0gdm9pZCAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdyaXRlciA9IHN0cmVhbS5fd3JpdGVyO1xuICAgICAgICBpZiAod3JpdGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlamVjdCh3cml0ZXIsIHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbVVwZGF0ZUJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSkge1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBzdHJlYW0uX3dyaXRlcjtcbiAgICAgICAgaWYgKHdyaXRlciAhPT0gdm9pZCAwICYmIGJhY2twcmVzc3VyZSAhPT0gc3RyZWFtLl9iYWNrcHJlc3N1cmUpIHtcbiAgICAgICAgICBpZiAoYmFja3ByZXNzdXJlKSB7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVzZXQod3JpdGVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc29sdmUod3JpdGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmUgPSBiYWNrcHJlc3N1cmU7XG4gICAgICB9XG4gICAgICBjbGFzcyBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcihzdHJlYW0pIHtcbiAgICAgICAgICBhc3NlcnRSZXF1aXJlZEFyZ3VtZW50KHN0cmVhbSwgMSwgXCJXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJcIik7XG4gICAgICAgICAgYXNzZXJ0V3JpdGFibGVTdHJlYW0oc3RyZWFtLCBcIkZpcnN0IHBhcmFtZXRlclwiKTtcbiAgICAgICAgICBpZiAoSXNXcml0YWJsZVN0cmVhbUxvY2tlZChzdHJlYW0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhpcyBzdHJlYW0gaGFzIGFscmVhZHkgYmVlbiBsb2NrZWQgZm9yIGV4Y2x1c2l2ZSB3cml0aW5nIGJ5IGFub3RoZXIgd3JpdGVyXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9vd25lcldyaXRhYmxlU3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgIHN0cmVhbS5fd3JpdGVyID0gdGhpcztcbiAgICAgICAgICBjb25zdCBzdGF0ZSA9IHN0cmVhbS5fc3RhdGU7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBcIndyaXRhYmxlXCIpIHtcbiAgICAgICAgICAgIGlmICghV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoc3RyZWFtKSAmJiBzdHJlYW0uX2JhY2twcmVzc3VyZSkge1xuICAgICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZXNvbHZlZCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcImVycm9yaW5nXCIpIHtcbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZCh0aGlzLCBzdHJlYW0uX3N0b3JlZEVycm9yKTtcbiAgICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZSh0aGlzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQodGhpcyk7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZUluaXRpYWxpemVBc1Jlc29sdmVkKHRoaXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdG9yZWRFcnJvciA9IHN0cmVhbS5fc3RvcmVkRXJyb3I7XG4gICAgICAgICAgICBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQodGhpcywgc3RvcmVkRXJyb3IpO1xuICAgICAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplQXNSZWplY3RlZCh0aGlzLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldCBjbG9zZWQoKSB7XG4gICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJjbG9zZWRcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2xvc2VkUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgZGVzaXJlZFNpemUoKSB7XG4gICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJkZXNpcmVkU2l6ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX293bmVyV3JpdGFibGVTdHJlYW0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdFdyaXRlckxvY2tFeGNlcHRpb24oXCJkZXNpcmVkU2l6ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckdldERlc2lyZWRTaXplKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGdldCByZWFkeSgpIHtcbiAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyQnJhbmRDaGVja0V4Y2VwdGlvbihcInJlYWR5XCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5UHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBhYm9ydChyZWFzb24gPSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyQnJhbmRDaGVja0V4Y2VwdGlvbihcImFib3J0XCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuX293bmVyV3JpdGFibGVTdHJlYW0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckxvY2tFeGNlcHRpb24oXCJhYm9ydFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJBYm9ydCh0aGlzLCByZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIGNsb3NlKCkge1xuICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwiY2xvc2VcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLl9vd25lcldyaXRhYmxlU3RyZWFtO1xuICAgICAgICAgIGlmIChzdHJlYW0gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoZGVmYXVsdFdyaXRlckxvY2tFeGNlcHRpb24oXCJjbG9zZVwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNsb3NlIGFuIGFscmVhZHktY2xvc2luZyBzdHJlYW1cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2UodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVsZWFzZUxvY2soKSB7XG4gICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdFdyaXRlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJyZWxlYXNlTG9ja1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgICBpZiAoc3RyZWFtID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyUmVsZWFzZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB3cml0ZShjaHVuayA9IHZvaWQgMCkge1xuICAgICAgICAgIGlmICghSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwid3JpdGVcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fb3duZXJXcml0YWJsZVN0cmVhbSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbihcIndyaXRlIHRvXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcldyaXRlKHRoaXMsIGNodW5rKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyLnByb3RvdHlwZSwge1xuICAgICAgICBhYm9ydDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGNsb3NlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgcmVsZWFzZUxvY2s6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICB3cml0ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGNsb3NlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGRlc2lyZWRTaXplOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgcmVhZHk6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgdmFsdWU6IFwiV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyXCIsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gSXNXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXIoeDIpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgyLCBcIl9vd25lcldyaXRhYmxlU3RyZWFtXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4MiBpbnN0YW5jZW9mIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckFib3J0KHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQWJvcnQoc3RyZWFtLCByZWFzb24pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyQ2xvc2Uod3JpdGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgcmV0dXJuIFdyaXRhYmxlU3RyZWFtQ2xvc2Uoc3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckNsb3NlV2l0aEVycm9yUHJvcGFnYXRpb24od3JpdGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoc3RyZWFtKSB8fCBzdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlID09PSBcImVycm9yZWRcIikge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJDbG9zZSh3cml0ZXIpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyRW5zdXJlQ2xvc2VkUHJvbWlzZVJlamVjdGVkKHdyaXRlciwgZXJyb3IpIHtcbiAgICAgICAgaWYgKHdyaXRlci5fY2xvc2VkUHJvbWlzZVN0YXRlID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVqZWN0KHdyaXRlciwgZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVzZXRUb1JlamVjdGVkKHdyaXRlciwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJFbnN1cmVSZWFkeVByb21pc2VSZWplY3RlZCh3cml0ZXIsIGVycm9yKSB7XG4gICAgICAgIGlmICh3cml0ZXIuX3JlYWR5UHJvbWlzZVN0YXRlID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZWplY3Qod3JpdGVyLCBlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlc2V0VG9SZWplY3RlZCh3cml0ZXIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyR2V0RGVzaXJlZFNpemUod3JpdGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoc3RhdGUgPT09IFwiZXJyb3JlZFwiIHx8IHN0YXRlID09PSBcImVycm9yaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlclJlbGVhc2Uod3JpdGVyKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbTtcbiAgICAgICAgY29uc3QgcmVsZWFzZWRFcnJvciA9IG5ldyBUeXBlRXJyb3IoYFdyaXRlciB3YXMgcmVsZWFzZWQgYW5kIGNhbiBubyBsb25nZXIgYmUgdXNlZCB0byBtb25pdG9yIHRoZSBzdHJlYW0ncyBjbG9zZWRuZXNzYCk7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckVuc3VyZVJlYWR5UHJvbWlzZVJlamVjdGVkKHdyaXRlciwgcmVsZWFzZWRFcnJvcik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlckVuc3VyZUNsb3NlZFByb21pc2VSZWplY3RlZCh3cml0ZXIsIHJlbGVhc2VkRXJyb3IpO1xuICAgICAgICBzdHJlYW0uX3dyaXRlciA9IHZvaWQgMDtcbiAgICAgICAgd3JpdGVyLl9vd25lcldyaXRhYmxlU3RyZWFtID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyV3JpdGUod3JpdGVyLCBjaHVuaykge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSB3cml0ZXIuX293bmVyV3JpdGFibGVTdHJlYW07XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBzdHJlYW0uX3dyaXRhYmxlU3RyZWFtQ29udHJvbGxlcjtcbiAgICAgICAgY29uc3QgY2h1bmtTaXplID0gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldENodW5rU2l6ZShjb250cm9sbGVyLCBjaHVuayk7XG4gICAgICAgIGlmIChzdHJlYW0gIT09IHdyaXRlci5fb3duZXJXcml0YWJsZVN0cmVhbSkge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGRlZmF1bHRXcml0ZXJMb2NrRXhjZXB0aW9uKFwid3JpdGUgdG9cIikpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBcImVycm9yZWRcIikge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pIHx8IHN0YXRlID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgobmV3IFR5cGVFcnJvcihcIlRoZSBzdHJlYW0gaXMgY2xvc2luZyBvciBjbG9zZWQgYW5kIGNhbm5vdCBiZSB3cml0dGVuIHRvXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IFwiZXJyb3JpbmdcIikge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBXcml0YWJsZVN0cmVhbUFkZFdyaXRlUmVxdWVzdChzdHJlYW0pO1xuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyV3JpdGUoY29udHJvbGxlciwgY2h1bmssIGNodW5rU2l6ZSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgY29uc3QgY2xvc2VTZW50aW5lbCA9IHt9O1xuICAgICAgY2xhc3MgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldCBhYm9ydFJlYXNvbigpIHtcbiAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDIoXCJhYm9ydFJlYXNvblwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Fib3J0UmVhc29uO1xuICAgICAgICB9XG4gICAgICAgIGdldCBzaWduYWwoKSB7XG4gICAgICAgICAgaWYgKCFJc1dyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQyKFwic2lnbmFsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fYWJvcnRDb250cm9sbGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZS5zaWduYWwgaXMgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2Fib3J0Q29udHJvbGxlci5zaWduYWw7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoZTIgPSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDIoXCJlcnJvclwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW0uX3N0YXRlO1xuICAgICAgICAgIGlmIChzdGF0ZSAhPT0gXCJ3cml0YWJsZVwiKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcih0aGlzLCBlMik7XG4gICAgICAgIH1cbiAgICAgICAgW0Fib3J0U3RlcHNdKHJlYXNvbikge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2Fib3J0QWxnb3JpdGhtKHJlYXNvbik7XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyh0aGlzKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIFtFcnJvclN0ZXBzXSgpIHtcbiAgICAgICAgICBSZXNldFF1ZXVlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwge1xuICAgICAgICBhYm9ydFJlYXNvbjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIHNpZ25hbDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGVycm9yOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogXCJXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyXCIsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gSXNXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHgyKSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgyKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4MiwgXCJfY29udHJvbGxlZFdyaXRhYmxlU3RyZWFtXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4MiBpbnN0YW5jZW9mIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXI7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgd3JpdGVBbGdvcml0aG0sIGNsb3NlQWxnb3JpdGhtLCBhYm9ydEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSkge1xuICAgICAgICBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHN0cmVhbS5fd3JpdGFibGVTdHJlYW1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgY29udHJvbGxlci5fcXVldWUgPSB2b2lkIDA7XG4gICAgICAgIGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplID0gdm9pZCAwO1xuICAgICAgICBSZXNldFF1ZXVlKGNvbnRyb2xsZXIpO1xuICAgICAgICBjb250cm9sbGVyLl9hYm9ydFJlYXNvbiA9IHZvaWQgMDtcbiAgICAgICAgY29udHJvbGxlci5fYWJvcnRDb250cm9sbGVyID0gY3JlYXRlQWJvcnRDb250cm9sbGVyKCk7XG4gICAgICAgIGNvbnRyb2xsZXIuX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtID0gc2l6ZUFsZ29yaXRobTtcbiAgICAgICAgY29udHJvbGxlci5fc3RyYXRlZ3lIV00gPSBoaWdoV2F0ZXJNYXJrO1xuICAgICAgICBjb250cm9sbGVyLl93cml0ZUFsZ29yaXRobSA9IHdyaXRlQWxnb3JpdGhtO1xuICAgICAgICBjb250cm9sbGVyLl9jbG9zZUFsZ29yaXRobSA9IGNsb3NlQWxnb3JpdGhtO1xuICAgICAgICBjb250cm9sbGVyLl9hYm9ydEFsZ29yaXRobSA9IGFib3J0QWxnb3JpdGhtO1xuICAgICAgICBjb25zdCBiYWNrcHJlc3N1cmUgPSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0QmFja3ByZXNzdXJlKGNvbnRyb2xsZXIpO1xuICAgICAgICBXcml0YWJsZVN0cmVhbVVwZGF0ZUJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0UmVzdWx0ID0gc3RhcnRBbGdvcml0aG0oKTtcbiAgICAgICAgY29uc3Qgc3RhcnRQcm9taXNlID0gcHJvbWlzZVJlc29sdmVkV2l0aChzdGFydFJlc3VsdCk7XG4gICAgICAgIHVwb25Qcm9taXNlKHN0YXJ0UHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgIGNvbnRyb2xsZXIuX3N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgICAgfSwgKHIyKSA9PiB7XG4gICAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWFsV2l0aFJlamVjdGlvbihzdHJlYW0sIHIyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJGcm9tVW5kZXJseWluZ1Npbmsoc3RyZWFtLCB1bmRlcmx5aW5nU2luaywgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSkge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgICAgIGxldCBzdGFydEFsZ29yaXRobSA9ICgpID0+IHZvaWQgMDtcbiAgICAgICAgbGV0IHdyaXRlQWxnb3JpdGhtID0gKCkgPT4gcHJvbWlzZVJlc29sdmVkV2l0aCh2b2lkIDApO1xuICAgICAgICBsZXQgY2xvc2VBbGdvcml0aG0gPSAoKSA9PiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgIGxldCBhYm9ydEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdTaW5rLnN0YXJ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBzdGFydEFsZ29yaXRobSA9ICgpID0+IHVuZGVybHlpbmdTaW5rLnN0YXJ0KGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlcmx5aW5nU2luay53cml0ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgd3JpdGVBbGdvcml0aG0gPSAoY2h1bmspID0+IHVuZGVybHlpbmdTaW5rLndyaXRlKGNodW5rLCBjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZXJseWluZ1NpbmsuY2xvc2UgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNsb3NlQWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ1NpbmsuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZXJseWluZ1NpbmsuYWJvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGFib3J0QWxnb3JpdGhtID0gKHJlYXNvbikgPT4gdW5kZXJseWluZ1NpbmsuYWJvcnQocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBTZXRVcFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgd3JpdGVBbGdvcml0aG0sIGNsb3NlQWxnb3JpdGhtLCBhYm9ydEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5fd3JpdGVBbGdvcml0aG0gPSB2b2lkIDA7XG4gICAgICAgIGNvbnRyb2xsZXIuX2Nsb3NlQWxnb3JpdGhtID0gdm9pZCAwO1xuICAgICAgICBjb250cm9sbGVyLl9hYm9ydEFsZ29yaXRobSA9IHZvaWQgMDtcbiAgICAgICAgY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgRW5xdWV1ZVZhbHVlV2l0aFNpemUoY29udHJvbGxlciwgY2xvc2VTZW50aW5lbCwgMCk7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXRDaHVua1NpemUoY29udHJvbGxlciwgY2h1bmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtKGNodW5rKTtcbiAgICAgICAgfSBjYXRjaCAoY2h1bmtTaXplRSkge1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcklmTmVlZGVkKGNvbnRyb2xsZXIsIGNodW5rU2l6ZUUpO1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0RGVzaXJlZFNpemUoY29udHJvbGxlcikge1xuICAgICAgICByZXR1cm4gY29udHJvbGxlci5fc3RyYXRlZ3lIV00gLSBjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJXcml0ZShjb250cm9sbGVyLCBjaHVuaywgY2h1bmtTaXplKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRW5xdWV1ZVZhbHVlV2l0aFNpemUoY29udHJvbGxlciwgY2h1bmssIGNodW5rU2l6ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVucXVldWVFKSB7XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQoY29udHJvbGxlciwgZW5xdWV1ZUUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgICAgIGlmICghV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoc3RyZWFtKSAmJiBzdHJlYW0uX3N0YXRlID09PSBcIndyaXRhYmxlXCIpIHtcbiAgICAgICAgICBjb25zdCBiYWNrcHJlc3N1cmUgPSBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0QmFja3ByZXNzdXJlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtVXBkYXRlQmFja3ByZXNzdXJlKHN0cmVhbSwgYmFja3ByZXNzdXJlKTtcbiAgICAgICAgfVxuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQWR2YW5jZVF1ZXVlSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQWR2YW5jZVF1ZXVlSWZOZWVkZWQoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgICAgIGlmICghY29udHJvbGxlci5fc3RhcnRlZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyZWFtLl9pbkZsaWdodFdyaXRlUmVxdWVzdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlID09PSBcImVycm9yaW5nXCIpIHtcbiAgICAgICAgICBXcml0YWJsZVN0cmVhbUZpbmlzaEVycm9yaW5nKHN0cmVhbSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFsdWUgPSBQZWVrUXVldWVWYWx1ZShjb250cm9sbGVyKTtcbiAgICAgICAgaWYgKHZhbHVlID09PSBjbG9zZVNlbnRpbmVsKSB7XG4gICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclByb2Nlc3NDbG9zZShjb250cm9sbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyUHJvY2Vzc1dyaXRlKGNvbnRyb2xsZXIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9ySWZOZWVkZWQoY29udHJvbGxlciwgZXJyb3IpIHtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRXcml0YWJsZVN0cmVhbS5fc3RhdGUgPT09IFwid3JpdGFibGVcIikge1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJQcm9jZXNzQ2xvc2UoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtTWFya0Nsb3NlUmVxdWVzdEluRmxpZ2h0KHN0cmVhbSk7XG4gICAgICAgIERlcXVldWVWYWx1ZShjb250cm9sbGVyKTtcbiAgICAgICAgY29uc3Qgc2lua0Nsb3NlUHJvbWlzZSA9IGNvbnRyb2xsZXIuX2Nsb3NlQWxnb3JpdGhtKCk7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgIHVwb25Qcm9taXNlKHNpbmtDbG9zZVByb21pc2UsICgpID0+IHtcbiAgICAgICAgICBXcml0YWJsZVN0cmVhbUZpbmlzaEluRmxpZ2h0Q2xvc2Uoc3RyZWFtKTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRDbG9zZVdpdGhFcnJvcihzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclByb2Nlc3NXcml0ZShjb250cm9sbGVyLCBjaHVuaykge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtTWFya0ZpcnN0V3JpdGVSZXF1ZXN0SW5GbGlnaHQoc3RyZWFtKTtcbiAgICAgICAgY29uc3Qgc2lua1dyaXRlUHJvbWlzZSA9IGNvbnRyb2xsZXIuX3dyaXRlQWxnb3JpdGhtKGNodW5rKTtcbiAgICAgICAgdXBvblByb21pc2Uoc2lua1dyaXRlUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRXcml0ZShzdHJlYW0pO1xuICAgICAgICAgIGNvbnN0IHN0YXRlID0gc3RyZWFtLl9zdGF0ZTtcbiAgICAgICAgICBEZXF1ZXVlVmFsdWUoY29udHJvbGxlcik7XG4gICAgICAgICAgaWYgKCFXcml0YWJsZVN0cmVhbUNsb3NlUXVldWVkT3JJbkZsaWdodChzdHJlYW0pICYmIHN0YXRlID09PSBcIndyaXRhYmxlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2twcmVzc3VyZSA9IFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXRCYWNrcHJlc3N1cmUoY29udHJvbGxlcik7XG4gICAgICAgICAgICBXcml0YWJsZVN0cmVhbVVwZGF0ZUJhY2twcmVzc3VyZShzdHJlYW0sIGJhY2twcmVzc3VyZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJBZHZhbmNlUXVldWVJZk5lZWRlZChjb250cm9sbGVyKTtcbiAgICAgICAgfSwgKHJlYXNvbikgPT4ge1xuICAgICAgICAgIGlmIChzdHJlYW0uX3N0YXRlID09PSBcIndyaXRhYmxlXCIpIHtcbiAgICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFdyaXRhYmxlU3RyZWFtRmluaXNoSW5GbGlnaHRXcml0ZVdpdGhFcnJvcihzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldEJhY2twcmVzc3VyZShjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnN0IGRlc2lyZWRTaXplID0gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckdldERlc2lyZWRTaXplKGNvbnRyb2xsZXIpO1xuICAgICAgICByZXR1cm4gZGVzaXJlZFNpemUgPD0gMDtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlcnJvcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkV3JpdGFibGVTdHJlYW07XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgIFdyaXRhYmxlU3RyZWFtU3RhcnRFcnJvcmluZyhzdHJlYW0sIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBXcml0YWJsZVN0cmVhbS5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgV3JpdGFibGVTdHJlYW1gKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFdyaXRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJgKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJCcmFuZENoZWNrRXhjZXB0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlci5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyYCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyTG9ja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IFwiICsgbmFtZSArIFwiIGEgc3RyZWFtIHVzaW5nIGEgcmVsZWFzZWQgd3JpdGVyXCIpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHdyaXRlcikge1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VTdGF0ZSA9IFwicGVuZGluZ1wiO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQod3JpdGVyLCByZWFzb24pIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VJbml0aWFsaXplKHdyaXRlcik7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVqZWN0KHdyaXRlciwgcmVhc29uKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQod3JpdGVyKSB7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZSh3cml0ZXIpO1xuICAgICAgICBkZWZhdWx0V3JpdGVyQ2xvc2VkUHJvbWlzZVJlc29sdmUod3JpdGVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVqZWN0KHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGlmICh3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0ID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJvbWlzZUlzSGFuZGxlZFRvVHJ1ZSh3cml0ZXIuX2Nsb3NlZFByb21pc2UpO1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIHdyaXRlci5fY2xvc2VkUHJvbWlzZV9yZXNvbHZlID0gdm9pZCAwO1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVqZWN0ID0gdm9pZCAwO1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VTdGF0ZSA9IFwicmVqZWN0ZWRcIjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlUmVzZXRUb1JlamVjdGVkKHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJDbG9zZWRQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQod3JpdGVyLCByZWFzb24pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gZGVmYXVsdFdyaXRlckNsb3NlZFByb21pc2VSZXNvbHZlKHdyaXRlcikge1xuICAgICAgICBpZiAod3JpdGVyLl9jbG9zZWRQcm9taXNlX3Jlc29sdmUgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICB3cml0ZXIuX2Nsb3NlZFByb21pc2VfcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICAgICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlX3JlamVjdCA9IHZvaWQgMDtcbiAgICAgICAgd3JpdGVyLl9jbG9zZWRQcm9taXNlU3RhdGUgPSBcInJlc29sdmVkXCI7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZSh3cml0ZXIpIHtcbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZVN0YXRlID0gXCJwZW5kaW5nXCI7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVqZWN0ZWQod3JpdGVyLCByZWFzb24pIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemUod3JpdGVyKTtcbiAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZVJlamVjdCh3cml0ZXIsIHJlYXNvbik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlSW5pdGlhbGl6ZUFzUmVzb2x2ZWQod3JpdGVyKSB7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VJbml0aWFsaXplKHdyaXRlcik7XG4gICAgICAgIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNvbHZlKHdyaXRlcik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBkZWZhdWx0V3JpdGVyUmVhZHlQcm9taXNlUmVqZWN0KHdyaXRlciwgcmVhc29uKSB7XG4gICAgICAgIGlmICh3cml0ZXIuX3JlYWR5UHJvbWlzZV9yZWplY3QgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRQcm9taXNlSXNIYW5kbGVkVG9UcnVlKHdyaXRlci5fcmVhZHlQcm9taXNlKTtcbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlX3Jlc29sdmUgPSB2b2lkIDA7XG4gICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlX3JlamVjdCA9IHZvaWQgMDtcbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2VTdGF0ZSA9IFwicmVqZWN0ZWRcIjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNldCh3cml0ZXIpIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemUod3JpdGVyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNldFRvUmVqZWN0ZWQod3JpdGVyLCByZWFzb24pIHtcbiAgICAgICAgZGVmYXVsdFdyaXRlclJlYWR5UHJvbWlzZUluaXRpYWxpemVBc1JlamVjdGVkKHdyaXRlciwgcmVhc29uKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRXcml0ZXJSZWFkeVByb21pc2VSZXNvbHZlKHdyaXRlcikge1xuICAgICAgICBpZiAod3JpdGVyLl9yZWFkeVByb21pc2VfcmVzb2x2ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdyaXRlci5fcmVhZHlQcm9taXNlX3Jlc29sdmUodm9pZCAwKTtcbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICAgICAgd3JpdGVyLl9yZWFkeVByb21pc2VfcmVqZWN0ID0gdm9pZCAwO1xuICAgICAgICB3cml0ZXIuX3JlYWR5UHJvbWlzZVN0YXRlID0gXCJmdWxmaWxsZWRcIjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IE5hdGl2ZURPTUV4Y2VwdGlvbiA9IHR5cGVvZiBET01FeGNlcHRpb24gIT09IFwidW5kZWZpbmVkXCIgPyBET01FeGNlcHRpb24gOiB2b2lkIDA7XG4gICAgICBmdW5jdGlvbiBpc0RPTUV4Y2VwdGlvbkNvbnN0cnVjdG9yKGN0b3IpIHtcbiAgICAgICAgaWYgKCEodHlwZW9mIGN0b3IgPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgY3RvciA9PT0gXCJvYmplY3RcIikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgY3RvcigpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChfYSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY3JlYXRlRE9NRXhjZXB0aW9uUG9seWZpbGwoKSB7XG4gICAgICAgIGNvbnN0IGN0b3IgPSBmdW5jdGlvbiBET01FeGNlcHRpb24yKG1lc3NhZ2UsIG5hbWUpIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8IFwiXCI7XG4gICAgICAgICAgdGhpcy5uYW1lID0gbmFtZSB8fCBcIkVycm9yXCI7XG4gICAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3Rvci5wcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgeyB2YWx1ZTogY3Rvciwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIGN0b3I7XG4gICAgICB9XG4gICAgICBjb25zdCBET01FeGNlcHRpb24kMSA9IGlzRE9NRXhjZXB0aW9uQ29uc3RydWN0b3IoTmF0aXZlRE9NRXhjZXB0aW9uKSA/IE5hdGl2ZURPTUV4Y2VwdGlvbiA6IGNyZWF0ZURPTUV4Y2VwdGlvblBvbHlmaWxsKCk7XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbVBpcGVUbyhzb3VyY2UsIGRlc3QsIHByZXZlbnRDbG9zZSwgcHJldmVudEFib3J0LCBwcmV2ZW50Q2FuY2VsLCBzaWduYWwpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gQWNxdWlyZVJlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihzb3VyY2UpO1xuICAgICAgICBjb25zdCB3cml0ZXIgPSBBY3F1aXJlV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyKGRlc3QpO1xuICAgICAgICBzb3VyY2UuX2Rpc3R1cmJlZCA9IHRydWU7XG4gICAgICAgIGxldCBzaHV0dGluZ0Rvd24gPSBmYWxzZTtcbiAgICAgICAgbGV0IGN1cnJlbnRXcml0ZSA9IHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGxldCBhYm9ydEFsZ29yaXRobTtcbiAgICAgICAgICBpZiAoc2lnbmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGFib3J0QWxnb3JpdGhtID0gKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBET01FeGNlcHRpb24kMShcIkFib3J0ZWRcIiwgXCJBYm9ydEVycm9yXCIpO1xuICAgICAgICAgICAgICBjb25zdCBhY3Rpb25zID0gW107XG4gICAgICAgICAgICAgIGlmICghcHJldmVudEFib3J0KSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChkZXN0Ll9zdGF0ZSA9PT0gXCJ3cml0YWJsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBXcml0YWJsZVN0cmVhbUFib3J0KGRlc3QsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2UuX3N0YXRlID09PSBcInJlYWRhYmxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHNvdXJjZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzaHV0ZG93bldpdGhBY3Rpb24oKCkgPT4gUHJvbWlzZS5hbGwoYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gYWN0aW9uKCkpKSwgdHJ1ZSwgZXJyb3IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xuICAgICAgICAgICAgICBhYm9ydEFsZ29yaXRobSgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0QWxnb3JpdGhtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gcGlwZUxvb3AoKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3UHJvbWlzZSgocmVzb2x2ZUxvb3AsIHJlamVjdExvb3ApID0+IHtcbiAgICAgICAgICAgICAgZnVuY3Rpb24gbmV4dChkb25lKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVMb29wKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIFBlcmZvcm1Qcm9taXNlVGhlbihwaXBlU3RlcCgpLCBuZXh0LCByZWplY3RMb29wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmV4dChmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gcGlwZVN0ZXAoKSB7XG4gICAgICAgICAgICBpZiAoc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFBlcmZvcm1Qcm9taXNlVGhlbih3cml0ZXIuX3JlYWR5UHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvbWlzZSgocmVzb2x2ZVJlYWQsIHJlamVjdFJlYWQpID0+IHtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXJSZWFkKHJlYWRlciwge1xuICAgICAgICAgICAgICAgICAgX2NodW5rU3RlcHM6IChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50V3JpdGUgPSBQZXJmb3JtUHJvbWlzZVRoZW4oV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyV3JpdGUod3JpdGVyLCBjaHVuayksIHZvaWQgMCwgbm9vcCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVSZWFkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfY2xvc2VTdGVwczogKCkgPT4gcmVzb2x2ZVJlYWQodHJ1ZSksXG4gICAgICAgICAgICAgICAgICBfZXJyb3JTdGVwczogcmVqZWN0UmVhZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpc09yQmVjb21lc0Vycm9yZWQoc291cmNlLCByZWFkZXIuX2Nsb3NlZFByb21pc2UsIChzdG9yZWRFcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2ZW50QWJvcnQpIHtcbiAgICAgICAgICAgICAgc2h1dGRvd25XaXRoQWN0aW9uKCgpID0+IFdyaXRhYmxlU3RyZWFtQWJvcnQoZGVzdCwgc3RvcmVkRXJyb3IpLCB0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaHV0ZG93bih0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaXNPckJlY29tZXNFcnJvcmVkKGRlc3QsIHdyaXRlci5fY2xvc2VkUHJvbWlzZSwgKHN0b3JlZEVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByZXZlbnRDYW5jZWwpIHtcbiAgICAgICAgICAgICAgc2h1dGRvd25XaXRoQWN0aW9uKCgpID0+IFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHNvdXJjZSwgc3RvcmVkRXJyb3IpLCB0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzaHV0ZG93bih0cnVlLCBzdG9yZWRFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaXNPckJlY29tZXNDbG9zZWQoc291cmNlLCByZWFkZXIuX2Nsb3NlZFByb21pc2UsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghcHJldmVudENsb3NlKSB7XG4gICAgICAgICAgICAgIHNodXRkb3duV2l0aEFjdGlvbigoKSA9PiBXcml0YWJsZVN0cmVhbURlZmF1bHRXcml0ZXJDbG9zZVdpdGhFcnJvclByb3BhZ2F0aW9uKHdyaXRlcikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2h1dGRvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoZGVzdCkgfHwgZGVzdC5fc3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc3RDbG9zZWQgPSBuZXcgVHlwZUVycm9yKFwidGhlIGRlc3RpbmF0aW9uIHdyaXRhYmxlIHN0cmVhbSBjbG9zZWQgYmVmb3JlIGFsbCBkYXRhIGNvdWxkIGJlIHBpcGVkIHRvIGl0XCIpO1xuICAgICAgICAgICAgaWYgKCFwcmV2ZW50Q2FuY2VsKSB7XG4gICAgICAgICAgICAgIHNodXRkb3duV2l0aEFjdGlvbigoKSA9PiBSZWFkYWJsZVN0cmVhbUNhbmNlbChzb3VyY2UsIGRlc3RDbG9zZWQpLCB0cnVlLCBkZXN0Q2xvc2VkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNodXRkb3duKHRydWUsIGRlc3RDbG9zZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBzZXRQcm9taXNlSXNIYW5kbGVkVG9UcnVlKHBpcGVMb29wKCkpO1xuICAgICAgICAgIGZ1bmN0aW9uIHdhaXRGb3JXcml0ZXNUb0ZpbmlzaCgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9sZEN1cnJlbnRXcml0ZSA9IGN1cnJlbnRXcml0ZTtcbiAgICAgICAgICAgIHJldHVybiBQZXJmb3JtUHJvbWlzZVRoZW4oY3VycmVudFdyaXRlLCAoKSA9PiBvbGRDdXJyZW50V3JpdGUgIT09IGN1cnJlbnRXcml0ZSA/IHdhaXRGb3JXcml0ZXNUb0ZpbmlzaCgpIDogdm9pZCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gaXNPckJlY29tZXNFcnJvcmVkKHN0cmVhbSwgcHJvbWlzZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gXCJlcnJvcmVkXCIpIHtcbiAgICAgICAgICAgICAgYWN0aW9uKHN0cmVhbS5fc3RvcmVkRXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXBvblJlamVjdGlvbihwcm9taXNlLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbiBpc09yQmVjb21lc0Nsb3NlZChzdHJlYW0sIHByb21pc2UsIGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1cG9uRnVsZmlsbG1lbnQocHJvbWlzZSwgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb24gc2h1dGRvd25XaXRoQWN0aW9uKGFjdGlvbiwgb3JpZ2luYWxJc0Vycm9yLCBvcmlnaW5hbEVycm9yKSB7XG4gICAgICAgICAgICBpZiAoc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNodXR0aW5nRG93biA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZGVzdC5fc3RhdGUgPT09IFwid3JpdGFibGVcIiAmJiAhV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoZGVzdCkpIHtcbiAgICAgICAgICAgICAgdXBvbkZ1bGZpbGxtZW50KHdhaXRGb3JXcml0ZXNUb0ZpbmlzaCgpLCBkb1RoZVJlc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZG9UaGVSZXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBkb1RoZVJlc3QoKSB7XG4gICAgICAgICAgICAgIHVwb25Qcm9taXNlKGFjdGlvbigpLCAoKSA9PiBmaW5hbGl6ZShvcmlnaW5hbElzRXJyb3IsIG9yaWdpbmFsRXJyb3IpLCAobmV3RXJyb3IpID0+IGZpbmFsaXplKHRydWUsIG5ld0Vycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bmN0aW9uIHNodXRkb3duKGlzRXJyb3IsIGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNodXR0aW5nRG93biA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZGVzdC5fc3RhdGUgPT09IFwid3JpdGFibGVcIiAmJiAhV3JpdGFibGVTdHJlYW1DbG9zZVF1ZXVlZE9ySW5GbGlnaHQoZGVzdCkpIHtcbiAgICAgICAgICAgICAgdXBvbkZ1bGZpbGxtZW50KHdhaXRGb3JXcml0ZXNUb0ZpbmlzaCgpLCAoKSA9PiBmaW5hbGl6ZShpc0Vycm9yLCBlcnJvcikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZmluYWxpemUoaXNFcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbiBmaW5hbGl6ZShpc0Vycm9yLCBlcnJvcikge1xuICAgICAgICAgICAgV3JpdGFibGVTdHJlYW1EZWZhdWx0V3JpdGVyUmVsZWFzZSh3cml0ZXIpO1xuICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1SZWFkZXJHZW5lcmljUmVsZWFzZShyZWFkZXIpO1xuICAgICAgICAgICAgaWYgKHNpZ25hbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgYWJvcnRBbGdvcml0aG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodm9pZCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgY2xhc3MgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldCBkZXNpcmVkU2l6ZSgpIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJkZXNpcmVkU2l6ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJHZXREZXNpcmVkU2l6ZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjbG9zZSgpIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJjbG9zZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGUgc3RyZWFtIGlzIG5vdCBpbiBhIHN0YXRlIHRoYXQgcGVybWl0cyBjbG9zZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVucXVldWUoY2h1bmsgPSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJlbnF1ZXVlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIVJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYW5DbG9zZU9yRW5xdWV1ZSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZSBzdHJlYW0gaXMgbm90IGluIGEgc3RhdGUgdGhhdCBwZXJtaXRzIGVucXVldWVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZSh0aGlzLCBjaHVuayk7XG4gICAgICAgIH1cbiAgICAgICAgZXJyb3IoZTIgPSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJlcnJvclwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKHRoaXMsIGUyKTtcbiAgICAgICAgfVxuICAgICAgICBbQ2FuY2VsU3RlcHNdKHJlYXNvbikge1xuICAgICAgICAgIFJlc2V0UXVldWUodGhpcyk7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5fY2FuY2VsQWxnb3JpdGhtKHJlYXNvbik7XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyh0aGlzKTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIFtQdWxsU3RlcHNdKHJlYWRSZXF1ZXN0KSB7XG4gICAgICAgICAgY29uc3Qgc3RyZWFtID0gdGhpcy5fY29udHJvbGxlZFJlYWRhYmxlU3RyZWFtO1xuICAgICAgICAgIGlmICh0aGlzLl9xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjaHVuayA9IERlcXVldWVWYWx1ZSh0aGlzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZVJlcXVlc3RlZCAmJiB0aGlzLl9xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyh0aGlzKTtcbiAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFkUmVxdWVzdC5fY2h1bmtTdGVwcyhjaHVuayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtQWRkUmVhZFJlcXVlc3Qoc3RyZWFtLCByZWFkUmVxdWVzdCk7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FsbFB1bGxJZk5lZWRlZCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLCB7XG4gICAgICAgIGNsb3NlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZW5xdWV1ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGVycm9yOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZGVzaXJlZFNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLCBTeW1ib2xQb2x5ZmlsbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgIHZhbHVlOiBcIlJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJcIixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoeDIpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgyLCBcIl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW1cIikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHgyIGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc2hvdWxkUHVsbCA9IFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJTaG91bGRDYWxsUHVsbChjb250cm9sbGVyKTtcbiAgICAgICAgaWYgKCFzaG91bGRQdWxsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250cm9sbGVyLl9wdWxsaW5nKSB7XG4gICAgICAgICAgY29udHJvbGxlci5fcHVsbEFnYWluID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29udHJvbGxlci5fcHVsbGluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHB1bGxQcm9taXNlID0gY29udHJvbGxlci5fcHVsbEFsZ29yaXRobSgpO1xuICAgICAgICB1cG9uUHJvbWlzZShwdWxsUHJvbWlzZSwgKCkgPT4ge1xuICAgICAgICAgIGNvbnRyb2xsZXIuX3B1bGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoY29udHJvbGxlci5fcHVsbEFnYWluKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLl9wdWxsQWdhaW4gPSBmYWxzZTtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYWxsUHVsbElmTmVlZGVkKGNvbnRyb2xsZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgKGUyKSA9PiB7XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKGNvbnRyb2xsZXIsIGUyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyU2hvdWxkQ2FsbFB1bGwoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW07XG4gICAgICAgIGlmICghUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbkNsb3NlT3JFbnF1ZXVlKGNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29udHJvbGxlci5fc3RhcnRlZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbUxvY2tlZChzdHJlYW0pICYmIFJlYWRhYmxlU3RyZWFtR2V0TnVtUmVhZFJlcXVlc3RzKHN0cmVhbSkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzaXJlZFNpemUgPSBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0RGVzaXJlZFNpemUoY29udHJvbGxlcik7XG4gICAgICAgIGlmIChkZXNpcmVkU2l6ZSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5fcHVsbEFsZ29yaXRobSA9IHZvaWQgMDtcbiAgICAgICAgY29udHJvbGxlci5fY2FuY2VsQWxnb3JpdGhtID0gdm9pZCAwO1xuICAgICAgICBjb250cm9sbGVyLl9zdHJhdGVneVNpemVBbGdvcml0aG0gPSB2b2lkIDA7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xvc2UoY29udHJvbGxlcikge1xuICAgICAgICBpZiAoIVJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYW5DbG9zZU9yRW5xdWV1ZShjb250cm9sbGVyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW07XG4gICAgICAgIGNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGNvbnRyb2xsZXIuX3F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRW5xdWV1ZShjb250cm9sbGVyLCBjaHVuaykge1xuICAgICAgICBpZiAoIVJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDYW5DbG9zZU9yRW5xdWV1ZShjb250cm9sbGVyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW07XG4gICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHN0cmVhbSkgJiYgUmVhZGFibGVTdHJlYW1HZXROdW1SZWFkUmVxdWVzdHMoc3RyZWFtKSA+IDApIHtcbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbUZ1bGZpbGxSZWFkUmVxdWVzdChzdHJlYW0sIGNodW5rLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNodW5rU2l6ZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2h1bmtTaXplID0gY29udHJvbGxlci5fc3RyYXRlZ3lTaXplQWxnb3JpdGhtKGNodW5rKTtcbiAgICAgICAgICB9IGNhdGNoIChjaHVua1NpemVFKSB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgY2h1bmtTaXplRSk7XG4gICAgICAgICAgICB0aHJvdyBjaHVua1NpemVFO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgRW5xdWV1ZVZhbHVlV2l0aFNpemUoY29udHJvbGxlciwgY2h1bmssIGNodW5rU2l6ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZW5xdWV1ZUUpIHtcbiAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCBlbnF1ZXVlRSk7XG4gICAgICAgICAgICB0aHJvdyBlbnF1ZXVlRTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZTIpIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gY29udHJvbGxlci5fY29udHJvbGxlZFJlYWRhYmxlU3RyZWFtO1xuICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSAhPT0gXCJyZWFkYWJsZVwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFJlc2V0UXVldWUoY29udHJvbGxlcik7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcik7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRXJyb3Ioc3RyZWFtLCBlMik7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0RGVzaXJlZFNpemUoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZVN0cmVhbS5fc3RhdGU7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJlcnJvcmVkXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udHJvbGxlci5fc3RyYXRlZ3lIV00gLSBjb250cm9sbGVyLl9xdWV1ZVRvdGFsU2l6ZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJIYXNCYWNrcHJlc3N1cmUoY29udHJvbGxlcikge1xuICAgICAgICBpZiAoUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlclNob3VsZENhbGxQdWxsKGNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbkNsb3NlT3JFbnF1ZXVlKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBjb250cm9sbGVyLl9jb250cm9sbGVkUmVhZGFibGVTdHJlYW0uX3N0YXRlO1xuICAgICAgICBpZiAoIWNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkICYmIHN0YXRlID09PSBcInJlYWRhYmxlXCIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBTZXRVcFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtLCBoaWdoV2F0ZXJNYXJrLCBzaXplQWxnb3JpdGhtKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRSZWFkYWJsZVN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgY29udHJvbGxlci5fcXVldWUgPSB2b2lkIDA7XG4gICAgICAgIGNvbnRyb2xsZXIuX3F1ZXVlVG90YWxTaXplID0gdm9pZCAwO1xuICAgICAgICBSZXNldFF1ZXVlKGNvbnRyb2xsZXIpO1xuICAgICAgICBjb250cm9sbGVyLl9zdGFydGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnRyb2xsZXIuX2Nsb3NlUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnRyb2xsZXIuX3B1bGxBZ2FpbiA9IGZhbHNlO1xuICAgICAgICBjb250cm9sbGVyLl9wdWxsaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnRyb2xsZXIuX3N0cmF0ZWd5U2l6ZUFsZ29yaXRobSA9IHNpemVBbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX3N0cmF0ZWd5SFdNID0gaGlnaFdhdGVyTWFyaztcbiAgICAgICAgY29udHJvbGxlci5fcHVsbEFsZ29yaXRobSA9IHB1bGxBbGdvcml0aG07XG4gICAgICAgIGNvbnRyb2xsZXIuX2NhbmNlbEFsZ29yaXRobSA9IGNhbmNlbEFsZ29yaXRobTtcbiAgICAgICAgc3RyZWFtLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICBjb25zdCBzdGFydFJlc3VsdCA9IHN0YXJ0QWxnb3JpdGhtKCk7XG4gICAgICAgIHVwb25Qcm9taXNlKHByb21pc2VSZXNvbHZlZFdpdGgoc3RhcnRSZXN1bHQpLCAoKSA9PiB7XG4gICAgICAgICAgY29udHJvbGxlci5fc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNhbGxQdWxsSWZOZWVkZWQoY29udHJvbGxlcik7XG4gICAgICAgIH0sIChyMikgPT4ge1xuICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihjb250cm9sbGVyLCByMik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gU2V0VXBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRnJvbVVuZGVybHlpbmdTb3VyY2Uoc3RyZWFtLCB1bmRlcmx5aW5nU291cmNlLCBoaWdoV2F0ZXJNYXJrLCBzaXplQWxnb3JpdGhtKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlKTtcbiAgICAgICAgbGV0IHN0YXJ0QWxnb3JpdGhtID0gKCkgPT4gdm9pZCAwO1xuICAgICAgICBsZXQgcHVsbEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgbGV0IGNhbmNlbEFsZ29yaXRobSA9ICgpID0+IHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgaWYgKHVuZGVybHlpbmdTb3VyY2Uuc3RhcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHN0YXJ0QWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ1NvdXJjZS5zdGFydChjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodW5kZXJseWluZ1NvdXJjZS5wdWxsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBwdWxsQWxnb3JpdGhtID0gKCkgPT4gdW5kZXJseWluZ1NvdXJjZS5wdWxsKGNvbnRyb2xsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1bmRlcmx5aW5nU291cmNlLmNhbmNlbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2FuY2VsQWxnb3JpdGhtID0gKHJlYXNvbikgPT4gdW5kZXJseWluZ1NvdXJjZS5jYW5jZWwocmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICBTZXRVcFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoc3RyZWFtLCBjb250cm9sbGVyLCBzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsQWxnb3JpdGhtLCBoaWdoV2F0ZXJNYXJrLCBzaXplQWxnb3JpdGhtKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbiQxKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJgKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtVGVlKHN0cmVhbSwgY2xvbmVGb3JCcmFuY2gyKSB7XG4gICAgICAgIGlmIChJc1JlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIoc3RyZWFtLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWRhYmxlQnl0ZVN0cmVhbVRlZShzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbURlZmF1bHRUZWUoc3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRGVmYXVsdFRlZShzdHJlYW0sIGNsb25lRm9yQnJhbmNoMikge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBBY3F1aXJlUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHN0cmVhbSk7XG4gICAgICAgIGxldCByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCByZWFkQWdhaW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGNhbmNlbGVkMSA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FuY2VsZWQyID0gZmFsc2U7XG4gICAgICAgIGxldCByZWFzb24xO1xuICAgICAgICBsZXQgcmVhc29uMjtcbiAgICAgICAgbGV0IGJyYW5jaDE7XG4gICAgICAgIGxldCBicmFuY2gyO1xuICAgICAgICBsZXQgcmVzb2x2ZUNhbmNlbFByb21pc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gcHVsbEFsZ29yaXRobSgpIHtcbiAgICAgICAgICBpZiAocmVhZGluZykge1xuICAgICAgICAgICAgcmVhZEFnYWluID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IHJlYWRSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgX2NodW5rU3RlcHM6IChjaHVuaykgPT4ge1xuICAgICAgICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVhZEFnYWluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsxID0gY2h1bms7XG4gICAgICAgICAgICAgICAgY29uc3QgY2h1bmsyID0gY2h1bms7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZDEpIHtcbiAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKGJyYW5jaDEuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2h1bmsxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2h1bmsyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkQWdhaW4pIHtcbiAgICAgICAgICAgICAgICAgIHB1bGxBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9jbG9zZVN0ZXBzOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKCFjYW5jZWxlZDEpIHtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xvc2UoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMikge1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShicmFuY2gyLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghY2FuY2VsZWQxIHx8ICFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZSh2b2lkIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2Vycm9yU3RlcHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbDFBbGdvcml0aG0ocmVhc29uKSB7XG4gICAgICAgICAgY2FuY2VsZWQxID0gdHJ1ZTtcbiAgICAgICAgICByZWFzb24xID0gcmVhc29uO1xuICAgICAgICAgIGlmIChjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvc2l0ZVJlYXNvbiA9IENyZWF0ZUFycmF5RnJvbUxpc3QoW3JlYXNvbjEsIHJlYXNvbjJdKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbFJlc3VsdCA9IFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHN0cmVhbSwgY29tcG9zaXRlUmVhc29uKTtcbiAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKGNhbmNlbFJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYW5jZWxQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNhbmNlbDJBbGdvcml0aG0ocmVhc29uKSB7XG4gICAgICAgICAgY2FuY2VsZWQyID0gdHJ1ZTtcbiAgICAgICAgICByZWFzb24yID0gcmVhc29uO1xuICAgICAgICAgIGlmIChjYW5jZWxlZDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvc2l0ZVJlYXNvbiA9IENyZWF0ZUFycmF5RnJvbUxpc3QoW3JlYXNvbjEsIHJlYXNvbjJdKTtcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbFJlc3VsdCA9IFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHN0cmVhbSwgY29tcG9zaXRlUmVhc29uKTtcbiAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKGNhbmNlbFJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjYW5jZWxQcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QWxnb3JpdGhtKCkge1xuICAgICAgICB9XG4gICAgICAgIGJyYW5jaDEgPSBDcmVhdGVSZWFkYWJsZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsMUFsZ29yaXRobSk7XG4gICAgICAgIGJyYW5jaDIgPSBDcmVhdGVSZWFkYWJsZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbEFsZ29yaXRobSwgY2FuY2VsMkFsZ29yaXRobSk7XG4gICAgICAgIHVwb25SZWplY3Rpb24ocmVhZGVyLl9jbG9zZWRQcm9taXNlLCAocjIpID0+IHtcbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCByMik7XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVycm9yKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgcjIpO1xuICAgICAgICAgIGlmICghY2FuY2VsZWQxIHx8ICFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKHZvaWQgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFticmFuY2gxLCBicmFuY2gyXTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlQnl0ZVN0cmVhbVRlZShzdHJlYW0pIHtcbiAgICAgICAgbGV0IHJlYWRlciA9IEFjcXVpcmVSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIoc3RyZWFtKTtcbiAgICAgICAgbGV0IHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlYWRBZ2FpbkZvckJyYW5jaDEgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlYWRBZ2FpbkZvckJyYW5jaDIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNhbmNlbGVkMSA9IGZhbHNlO1xuICAgICAgICBsZXQgY2FuY2VsZWQyID0gZmFsc2U7XG4gICAgICAgIGxldCByZWFzb24xO1xuICAgICAgICBsZXQgcmVhc29uMjtcbiAgICAgICAgbGV0IGJyYW5jaDE7XG4gICAgICAgIGxldCBicmFuY2gyO1xuICAgICAgICBsZXQgcmVzb2x2ZUNhbmNlbFByb21pc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gZm9yd2FyZFJlYWRlckVycm9yKHRoaXNSZWFkZXIpIHtcbiAgICAgICAgICB1cG9uUmVqZWN0aW9uKHRoaXNSZWFkZXIuX2Nsb3NlZFByb21pc2UsIChyMikgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXNSZWFkZXIgIT09IHJlYWRlcikge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCByMik7XG4gICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoYnJhbmNoMi5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCByMik7XG4gICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSB8fCAhY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKHZvaWQgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcHVsbFdpdGhEZWZhdWx0UmVhZGVyKCkge1xuICAgICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtQllPQlJlYWRlcihyZWFkZXIpKSB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgICAgICByZWFkZXIgPSBBY3F1aXJlUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHN0cmVhbSk7XG4gICAgICAgICAgICBmb3J3YXJkUmVhZGVyRXJyb3IocmVhZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVhZFJlcXVlc3QgPSB7XG4gICAgICAgICAgICBfY2h1bmtTdGVwczogKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWFkQWdhaW5Gb3JCcmFuY2gxID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmVhZEFnYWluRm9yQnJhbmNoMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rMSA9IGNodW5rO1xuICAgICAgICAgICAgICAgIGxldCBjaHVuazIgPSBjaHVuaztcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSAmJiAhY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjaHVuazIgPSBDbG9uZUFzVWludDhBcnJheShjaHVuayk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChjbG9uZUUpIHtcbiAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGJyYW5jaDEuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2xvbmVFKTtcbiAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVycm9yKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2xvbmVFKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UoUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCBjbG9uZUUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSkge1xuICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWUoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjaHVuazEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMikge1xuICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckVucXVldWUoYnJhbmNoMi5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjaHVuazIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWRBZ2FpbkZvckJyYW5jaDEpIHtcbiAgICAgICAgICAgICAgICAgIHB1bGwxQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZWFkQWdhaW5Gb3JCcmFuY2gyKSB7XG4gICAgICAgICAgICAgICAgICBwdWxsMkFsZ29yaXRobSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2Nsb3NlU3RlcHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoIWNhbmNlbGVkMSkge1xuICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJDbG9zZShicmFuY2gxLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsb3NlKGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGJyYW5jaDEuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlci5fcGVuZGluZ1B1bGxJbnRvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmQoYnJhbmNoMS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoYnJhbmNoMi5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyUmVzcG9uZChicmFuY2gyLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICghY2FuY2VsZWQxIHx8ICFjYW5jZWxlZDIpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZSh2b2lkIDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX2Vycm9yU3RlcHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgcmVhZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyUmVhZChyZWFkZXIsIHJlYWRSZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwdWxsV2l0aEJZT0JSZWFkZXIodmlldywgZm9yQnJhbmNoMikge1xuICAgICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtRGVmYXVsdFJlYWRlcihyZWFkZXIpKSB7XG4gICAgICAgICAgICBSZWFkYWJsZVN0cmVhbVJlYWRlckdlbmVyaWNSZWxlYXNlKHJlYWRlcik7XG4gICAgICAgICAgICByZWFkZXIgPSBBY3F1aXJlUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHN0cmVhbSk7XG4gICAgICAgICAgICBmb3J3YXJkUmVhZGVyRXJyb3IocmVhZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgYnlvYkJyYW5jaCA9IGZvckJyYW5jaDIgPyBicmFuY2gyIDogYnJhbmNoMTtcbiAgICAgICAgICBjb25zdCBvdGhlckJyYW5jaCA9IGZvckJyYW5jaDIgPyBicmFuY2gxIDogYnJhbmNoMjtcbiAgICAgICAgICBjb25zdCByZWFkSW50b1JlcXVlc3QgPSB7XG4gICAgICAgICAgICBfY2h1bmtTdGVwczogKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWFkQWdhaW5Gb3JCcmFuY2gxID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmVhZEFnYWluRm9yQnJhbmNoMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ5b2JDYW5jZWxlZCA9IGZvckJyYW5jaDIgPyBjYW5jZWxlZDIgOiBjYW5jZWxlZDE7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3RoZXJDYW5jZWxlZCA9IGZvckJyYW5jaDIgPyBjYW5jZWxlZDEgOiBjYW5jZWxlZDI7XG4gICAgICAgICAgICAgICAgaWYgKCFvdGhlckNhbmNlbGVkKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY2xvbmVkQ2h1bms7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRDaHVuayA9IENsb25lQXNVaW50OEFycmF5KGNodW5rKTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGNsb25lRSkge1xuICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3IoYnlvYkJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjbG9uZUUpO1xuICAgICAgICAgICAgICAgICAgICBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRXJyb3Iob3RoZXJCcmFuY2guX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlciwgY2xvbmVFKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZUNhbmNlbFByb21pc2UoUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCBjbG9uZUUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCFieW9iQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlclJlc3BvbmRXaXRoTmV3VmlldyhieW9iQnJhbmNoLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIGNodW5rKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJFbnF1ZXVlKG90aGVyQnJhbmNoLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIGNsb25lZENodW5rKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFieW9iQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kV2l0aE5ld1ZpZXcoYnlvYkJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZEFnYWluRm9yQnJhbmNoMSkge1xuICAgICAgICAgICAgICAgICAgcHVsbDFBbGdvcml0aG0oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlYWRBZ2FpbkZvckJyYW5jaDIpIHtcbiAgICAgICAgICAgICAgICAgIHB1bGwyQWxnb3JpdGhtKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfY2xvc2VTdGVwczogKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgIHJlYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgY29uc3QgYnlvYkNhbmNlbGVkID0gZm9yQnJhbmNoMiA/IGNhbmNlbGVkMiA6IGNhbmNlbGVkMTtcbiAgICAgICAgICAgICAgY29uc3Qgb3RoZXJDYW5jZWxlZCA9IGZvckJyYW5jaDIgPyBjYW5jZWxlZDEgOiBjYW5jZWxlZDI7XG4gICAgICAgICAgICAgIGlmICghYnlvYkNhbmNlbGVkKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsb3NlKGJ5b2JCcmFuY2guX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKCFvdGhlckNhbmNlbGVkKSB7XG4gICAgICAgICAgICAgICAgUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckNsb3NlKG90aGVyQnJhbmNoLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjaHVuayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFieW9iQ2FuY2VsZWQpIHtcbiAgICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kV2l0aE5ld1ZpZXcoYnlvYkJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLCBjaHVuayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghb3RoZXJDYW5jZWxlZCAmJiBvdGhlckJyYW5jaC5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyLl9wZW5kaW5nUHVsbEludG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJSZXNwb25kKG90aGVyQnJhbmNoLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWJ5b2JDYW5jZWxlZCB8fCAhb3RoZXJDYW5jZWxlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVDYW5jZWxQcm9taXNlKHZvaWQgMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfZXJyb3JTdGVwczogKCkgPT4ge1xuICAgICAgICAgICAgICByZWFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXJSZWFkKHJlYWRlciwgdmlldywgcmVhZEludG9SZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwdWxsMUFsZ29yaXRobSgpIHtcbiAgICAgICAgICBpZiAocmVhZGluZykge1xuICAgICAgICAgICAgcmVhZEFnYWluRm9yQnJhbmNoMSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh2b2lkIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWFkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBieW9iUmVxdWVzdCA9IFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXJHZXRCWU9CUmVxdWVzdChicmFuY2gxLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICAgIGlmIChieW9iUmVxdWVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcHVsbFdpdGhEZWZhdWx0UmVhZGVyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB1bGxXaXRoQllPQlJlYWRlcihieW9iUmVxdWVzdC5fdmlldywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmVkV2l0aCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHB1bGwyQWxnb3JpdGhtKCkge1xuICAgICAgICAgIGlmIChyZWFkaW5nKSB7XG4gICAgICAgICAgICByZWFkQWdhaW5Gb3JCcmFuY2gyID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGJ5b2JSZXF1ZXN0ID0gUmVhZGFibGVCeXRlU3RyZWFtQ29udHJvbGxlckdldEJZT0JSZXF1ZXN0KGJyYW5jaDIuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcik7XG4gICAgICAgICAgaWYgKGJ5b2JSZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBwdWxsV2l0aERlZmF1bHRSZWFkZXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHVsbFdpdGhCWU9CUmVhZGVyKGJ5b2JSZXF1ZXN0Ll92aWV3LCB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYW5jZWwxQWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICAgIGNhbmNlbGVkMSA9IHRydWU7XG4gICAgICAgICAgcmVhc29uMSA9IHJlYXNvbjtcbiAgICAgICAgICBpZiAoY2FuY2VsZWQyKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb3NpdGVSZWFzb24gPSBDcmVhdGVBcnJheUZyb21MaXN0KFtyZWFzb24xLCByZWFzb24yXSk7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxSZXN1bHQgPSBSZWFkYWJsZVN0cmVhbUNhbmNlbChzdHJlYW0sIGNvbXBvc2l0ZVJlYXNvbik7XG4gICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZShjYW5jZWxSZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2FuY2VsUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYW5jZWwyQWxnb3JpdGhtKHJlYXNvbikge1xuICAgICAgICAgIGNhbmNlbGVkMiA9IHRydWU7XG4gICAgICAgICAgcmVhc29uMiA9IHJlYXNvbjtcbiAgICAgICAgICBpZiAoY2FuY2VsZWQxKSB7XG4gICAgICAgICAgICBjb25zdCBjb21wb3NpdGVSZWFzb24gPSBDcmVhdGVBcnJheUZyb21MaXN0KFtyZWFzb24xLCByZWFzb24yXSk7XG4gICAgICAgICAgICBjb25zdCBjYW5jZWxSZXN1bHQgPSBSZWFkYWJsZVN0cmVhbUNhbmNlbChzdHJlYW0sIGNvbXBvc2l0ZVJlYXNvbik7XG4gICAgICAgICAgICByZXNvbHZlQ2FuY2VsUHJvbWlzZShjYW5jZWxSZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2FuY2VsUHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdGFydEFsZ29yaXRobSgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnJhbmNoMSA9IENyZWF0ZVJlYWRhYmxlQnl0ZVN0cmVhbShzdGFydEFsZ29yaXRobSwgcHVsbDFBbGdvcml0aG0sIGNhbmNlbDFBbGdvcml0aG0pO1xuICAgICAgICBicmFuY2gyID0gQ3JlYXRlUmVhZGFibGVCeXRlU3RyZWFtKHN0YXJ0QWxnb3JpdGhtLCBwdWxsMkFsZ29yaXRobSwgY2FuY2VsMkFsZ29yaXRobSk7XG4gICAgICAgIGZvcndhcmRSZWFkZXJFcnJvcihyZWFkZXIpO1xuICAgICAgICByZXR1cm4gW2JyYW5jaDEsIGJyYW5jaDJdO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFVuZGVybHlpbmdEZWZhdWx0T3JCeXRlU291cmNlKHNvdXJjZSwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnREaWN0aW9uYXJ5KHNvdXJjZSwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsID0gc291cmNlO1xuICAgICAgICBjb25zdCBhdXRvQWxsb2NhdGVDaHVua1NpemUgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuYXV0b0FsbG9jYXRlQ2h1bmtTaXplO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuY2FuY2VsO1xuICAgICAgICBjb25zdCBwdWxsID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLnB1bGw7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLnN0YXJ0O1xuICAgICAgICBjb25zdCB0eXBlID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLnR5cGU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYXV0b0FsbG9jYXRlQ2h1bmtTaXplOiBhdXRvQWxsb2NhdGVDaHVua1NpemUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnZlcnRVbnNpZ25lZExvbmdMb25nV2l0aEVuZm9yY2VSYW5nZShhdXRvQWxsb2NhdGVDaHVua1NpemUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ2F1dG9BbGxvY2F0ZUNodW5rU2l6ZScgdGhhdGApLFxuICAgICAgICAgIGNhbmNlbDogY2FuY2VsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZUNhbmNlbENhbGxiYWNrKGNhbmNlbCwgb3JpZ2luYWwsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ2NhbmNlbCcgdGhhdGApLFxuICAgICAgICAgIHB1bGw6IHB1bGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnZlcnRVbmRlcmx5aW5nU291cmNlUHVsbENhbGxiYWNrKHB1bGwsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdwdWxsJyB0aGF0YCksXG4gICAgICAgICAgc3RhcnQ6IHN0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZVN0YXJ0Q2FsbGJhY2soc3RhcnQsIG9yaWdpbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzdGFydCcgdGhhdGApLFxuICAgICAgICAgIHR5cGU6IHR5cGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnZlcnRSZWFkYWJsZVN0cmVhbVR5cGUodHlwZSwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAndHlwZScgdGhhdGApXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb252ZXJ0VW5kZXJseWluZ1NvdXJjZUNhbmNlbENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAocmVhc29uKSA9PiBwcm9taXNlQ2FsbChmbiwgb3JpZ2luYWwsIFtyZWFzb25dKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRVbmRlcmx5aW5nU291cmNlUHVsbENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFVuZGVybHlpbmdTb3VyY2VTdGFydENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcmVmbGVjdENhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFJlYWRhYmxlU3RyZWFtVHlwZSh0eXBlLCBjb250ZXh0KSB7XG4gICAgICAgIHR5cGUgPSBgJHt0eXBlfWA7XG4gICAgICAgIGlmICh0eXBlICE9PSBcImJ5dGVzXCIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2NvbnRleHR9ICcke3R5cGV9JyBpcyBub3QgYSB2YWxpZCBlbnVtZXJhdGlvbiB2YWx1ZSBmb3IgUmVhZGFibGVTdHJlYW1UeXBlYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb252ZXJ0UmVhZGVyT3B0aW9ucyhvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkob3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubW9kZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtb2RlOiBtb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb252ZXJ0UmVhZGFibGVTdHJlYW1SZWFkZXJNb2RlKG1vZGUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ21vZGUnIHRoYXRgKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFJlYWRhYmxlU3RyZWFtUmVhZGVyTW9kZShtb2RlLCBjb250ZXh0KSB7XG4gICAgICAgIG1vZGUgPSBgJHttb2RlfWA7XG4gICAgICAgIGlmIChtb2RlICE9PSBcImJ5b2JcIikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7Y29udGV4dH0gJyR7bW9kZX0nIGlzIG5vdCBhIHZhbGlkIGVudW1lcmF0aW9uIHZhbHVlIGZvciBSZWFkYWJsZVN0cmVhbVJlYWRlck1vZGVgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRJdGVyYXRvck9wdGlvbnMob3B0aW9ucywgY29udGV4dCkge1xuICAgICAgICBhc3NlcnREaWN0aW9uYXJ5KG9wdGlvbnMsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBwcmV2ZW50Q2FuY2VsID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnByZXZlbnRDYW5jZWw7XG4gICAgICAgIHJldHVybiB7IHByZXZlbnRDYW5jZWw6IEJvb2xlYW4ocHJldmVudENhbmNlbCkgfTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRQaXBlT3B0aW9ucyhvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkob3B0aW9ucywgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IHByZXZlbnRBYm9ydCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5wcmV2ZW50QWJvcnQ7XG4gICAgICAgIGNvbnN0IHByZXZlbnRDYW5jZWwgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucHJldmVudENhbmNlbDtcbiAgICAgICAgY29uc3QgcHJldmVudENsb3NlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnByZXZlbnRDbG9zZTtcbiAgICAgICAgY29uc3Qgc2lnbmFsID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnNpZ25hbDtcbiAgICAgICAgaWYgKHNpZ25hbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgYXNzZXJ0QWJvcnRTaWduYWwoc2lnbmFsLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICdzaWduYWwnIHRoYXRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZXZlbnRBYm9ydDogQm9vbGVhbihwcmV2ZW50QWJvcnQpLFxuICAgICAgICAgIHByZXZlbnRDYW5jZWw6IEJvb2xlYW4ocHJldmVudENhbmNlbCksXG4gICAgICAgICAgcHJldmVudENsb3NlOiBCb29sZWFuKHByZXZlbnRDbG9zZSksXG4gICAgICAgICAgc2lnbmFsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBhc3NlcnRBYm9ydFNpZ25hbChzaWduYWwsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFpc0Fib3J0U2lnbmFsKHNpZ25hbCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke2NvbnRleHR9IGlzIG5vdCBhbiBBYm9ydFNpZ25hbC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFJlYWRhYmxlV3JpdGFibGVQYWlyKHBhaXIsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RGljdGlvbmFyeShwYWlyLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgcmVhZGFibGUgPSBwYWlyID09PSBudWxsIHx8IHBhaXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhaXIucmVhZGFibGU7XG4gICAgICAgIGFzc2VydFJlcXVpcmVkRmllbGQocmVhZGFibGUsIFwicmVhZGFibGVcIiwgXCJSZWFkYWJsZVdyaXRhYmxlUGFpclwiKTtcbiAgICAgICAgYXNzZXJ0UmVhZGFibGVTdHJlYW0ocmVhZGFibGUsIGAke2NvbnRleHR9IGhhcyBtZW1iZXIgJ3JlYWRhYmxlJyB0aGF0YCk7XG4gICAgICAgIGNvbnN0IHdyaXRhYmxlID0gcGFpciA9PT0gbnVsbCB8fCBwYWlyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYWlyLndyaXRhYmxlO1xuICAgICAgICBhc3NlcnRSZXF1aXJlZEZpZWxkKHdyaXRhYmxlLCBcIndyaXRhYmxlXCIsIFwiUmVhZGFibGVXcml0YWJsZVBhaXJcIik7XG4gICAgICAgIGFzc2VydFdyaXRhYmxlU3RyZWFtKHdyaXRhYmxlLCBgJHtjb250ZXh0fSBoYXMgbWVtYmVyICd3cml0YWJsZScgdGhhdGApO1xuICAgICAgICByZXR1cm4geyByZWFkYWJsZSwgd3JpdGFibGUgfTtcbiAgICAgIH1cbiAgICAgIGNsYXNzIFJlYWRhYmxlU3RyZWFtMiB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJhd1VuZGVybHlpbmdTb3VyY2UgPSB7fSwgcmF3U3RyYXRlZ3kgPSB7fSkge1xuICAgICAgICAgIGlmIChyYXdVbmRlcmx5aW5nU291cmNlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJhd1VuZGVybHlpbmdTb3VyY2UgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3NlcnRPYmplY3QocmF3VW5kZXJseWluZ1NvdXJjZSwgXCJGaXJzdCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gY29udmVydFF1ZXVpbmdTdHJhdGVneShyYXdTdHJhdGVneSwgXCJTZWNvbmQgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgIGNvbnN0IHVuZGVybHlpbmdTb3VyY2UgPSBjb252ZXJ0VW5kZXJseWluZ0RlZmF1bHRPckJ5dGVTb3VyY2UocmF3VW5kZXJseWluZ1NvdXJjZSwgXCJGaXJzdCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgSW5pdGlhbGl6ZVJlYWRhYmxlU3RyZWFtKHRoaXMpO1xuICAgICAgICAgIGlmICh1bmRlcmx5aW5nU291cmNlLnR5cGUgPT09IFwiYnl0ZXNcIikge1xuICAgICAgICAgICAgaWYgKHN0cmF0ZWd5LnNpemUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlRoZSBzdHJhdGVneSBmb3IgYSBieXRlIHN0cmVhbSBjYW5ub3QgaGF2ZSBhIHNpemUgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoaWdoV2F0ZXJNYXJrID0gRXh0cmFjdEhpZ2hXYXRlck1hcmsoc3RyYXRlZ3ksIDApO1xuICAgICAgICAgICAgU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyRnJvbVVuZGVybHlpbmdTb3VyY2UodGhpcywgdW5kZXJseWluZ1NvdXJjZSwgaGlnaFdhdGVyTWFyayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNpemVBbGdvcml0aG0gPSBFeHRyYWN0U2l6ZUFsZ29yaXRobShzdHJhdGVneSk7XG4gICAgICAgICAgICBjb25zdCBoaWdoV2F0ZXJNYXJrID0gRXh0cmFjdEhpZ2hXYXRlck1hcmsoc3RyYXRlZ3ksIDEpO1xuICAgICAgICAgICAgU2V0VXBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRnJvbVVuZGVybHlpbmdTb3VyY2UodGhpcywgdW5kZXJseWluZ1NvdXJjZSwgaGlnaFdhdGVyTWFyaywgc2l6ZUFsZ29yaXRobSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdldCBsb2NrZWQoKSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJsb2NrZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNhbmNlbChyZWFzb24gPSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMShcImNhbmNlbFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChJc1JlYWRhYmxlU3RyZWFtTG9ja2VkKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbmNlbCBhIHN0cmVhbSB0aGF0IGFscmVhZHkgaGFzIGEgcmVhZGVyXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFJlYWRhYmxlU3RyZWFtQ2FuY2VsKHRoaXMsIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmVhZGVyKHJhd09wdGlvbnMgPSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoIUlzUmVhZGFibGVTdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24kMShcImdldFJlYWRlclwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnZlcnRSZWFkZXJPcHRpb25zKHJhd09wdGlvbnMsIFwiRmlyc3QgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgIGlmIChvcHRpb25zLm1vZGUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIEFjcXVpcmVSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBBY3F1aXJlUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHBpcGVUaHJvdWdoKHJhd1RyYW5zZm9ybSwgcmF3T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJwaXBlVGhyb3VnaFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYXNzZXJ0UmVxdWlyZWRBcmd1bWVudChyYXdUcmFuc2Zvcm0sIDEsIFwicGlwZVRocm91Z2hcIik7XG4gICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gY29udmVydFJlYWRhYmxlV3JpdGFibGVQYWlyKHJhd1RyYW5zZm9ybSwgXCJGaXJzdCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNvbnZlcnRQaXBlT3B0aW9ucyhyYXdPcHRpb25zLCBcIlNlY29uZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRocm91Z2ggY2Fubm90IGJlIHVzZWQgb24gYSBsb2NrZWQgUmVhZGFibGVTdHJlYW1cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChJc1dyaXRhYmxlU3RyZWFtTG9ja2VkKHRyYW5zZm9ybS53cml0YWJsZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRocm91Z2ggY2Fubm90IGJlIHVzZWQgb24gYSBsb2NrZWQgV3JpdGFibGVTdHJlYW1cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBSZWFkYWJsZVN0cmVhbVBpcGVUbyh0aGlzLCB0cmFuc2Zvcm0ud3JpdGFibGUsIG9wdGlvbnMucHJldmVudENsb3NlLCBvcHRpb25zLnByZXZlbnRBYm9ydCwgb3B0aW9ucy5wcmV2ZW50Q2FuY2VsLCBvcHRpb25zLnNpZ25hbCk7XG4gICAgICAgICAgc2V0UHJvbWlzZUlzSGFuZGxlZFRvVHJ1ZShwcm9taXNlKTtcbiAgICAgICAgICByZXR1cm4gdHJhbnNmb3JtLnJlYWRhYmxlO1xuICAgICAgICB9XG4gICAgICAgIHBpcGVUbyhkZXN0aW5hdGlvbiwgcmF3T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJwaXBlVG9cIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoYFBhcmFtZXRlciAxIGlzIHJlcXVpcmVkIGluICdwaXBlVG8nLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIUlzV3JpdGFibGVTdHJlYW0oZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKGBSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRvJ3MgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFdyaXRhYmxlU3RyZWFtYCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgb3B0aW9ucztcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IGNvbnZlcnRQaXBlT3B0aW9ucyhyYXdPcHRpb25zLCBcIlNlY29uZCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZTIpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKGUyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1Mb2NrZWQodGhpcykpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVqZWN0ZWRXaXRoKG5ldyBUeXBlRXJyb3IoXCJSZWFkYWJsZVN0cmVhbS5wcm90b3R5cGUucGlwZVRvIGNhbm5vdCBiZSB1c2VkIG9uIGEgbG9ja2VkIFJlYWRhYmxlU3RyZWFtXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKElzV3JpdGFibGVTdHJlYW1Mb2NrZWQoZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZVJlamVjdGVkV2l0aChuZXcgVHlwZUVycm9yKFwiUmVhZGFibGVTdHJlYW0ucHJvdG90eXBlLnBpcGVUbyBjYW5ub3QgYmUgdXNlZCBvbiBhIGxvY2tlZCBXcml0YWJsZVN0cmVhbVwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbVBpcGVUbyh0aGlzLCBkZXN0aW5hdGlvbiwgb3B0aW9ucy5wcmV2ZW50Q2xvc2UsIG9wdGlvbnMucHJldmVudEFib3J0LCBvcHRpb25zLnByZXZlbnRDYW5jZWwsIG9wdGlvbnMuc2lnbmFsKTtcbiAgICAgICAgfVxuICAgICAgICB0ZWUoKSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJ0ZWVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGJyYW5jaGVzID0gUmVhZGFibGVTdHJlYW1UZWUodGhpcyk7XG4gICAgICAgICAgcmV0dXJuIENyZWF0ZUFycmF5RnJvbUxpc3QoYnJhbmNoZXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlcyhyYXdPcHRpb25zID0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKCFJc1JlYWRhYmxlU3RyZWFtKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBzdHJlYW1CcmFuZENoZWNrRXhjZXB0aW9uJDEoXCJ2YWx1ZXNcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjb252ZXJ0SXRlcmF0b3JPcHRpb25zKHJhd09wdGlvbnMsIFwiRmlyc3QgcGFyYW1ldGVyXCIpO1xuICAgICAgICAgIHJldHVybiBBY3F1aXJlUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yKHRoaXMsIG9wdGlvbnMucHJldmVudENhbmNlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlYWRhYmxlU3RyZWFtMi5wcm90b3R5cGUsIHtcbiAgICAgICAgY2FuY2VsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZ2V0UmVhZGVyOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgcGlwZVRocm91Z2g6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBwaXBlVG86IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICB0ZWU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICB2YWx1ZXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBsb2NrZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtMi5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgdmFsdWU6IFwiUmVhZGFibGVTdHJlYW1cIixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLmFzeW5jSXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlU3RyZWFtMi5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLmFzeW5jSXRlcmF0b3IsIHtcbiAgICAgICAgICB2YWx1ZTogUmVhZGFibGVTdHJlYW0yLnByb3RvdHlwZS52YWx1ZXMsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gQ3JlYXRlUmVhZGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgaGlnaFdhdGVyTWFyayA9IDEsIHNpemVBbGdvcml0aG0gPSAoKSA9PiAxKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IE9iamVjdC5jcmVhdGUoUmVhZGFibGVTdHJlYW0yLnByb3RvdHlwZSk7XG4gICAgICAgIEluaXRpYWxpemVSZWFkYWJsZVN0cmVhbShzdHJlYW0pO1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gT2JqZWN0LmNyZWF0ZShSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgICAgIFNldFVwUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHN0YXJ0QWxnb3JpdGhtLCBwdWxsQWxnb3JpdGhtLCBjYW5jZWxBbGdvcml0aG0sIGhpZ2hXYXRlck1hcmssIHNpemVBbGdvcml0aG0pO1xuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gQ3JlYXRlUmVhZGFibGVCeXRlU3RyZWFtKHN0YXJ0QWxnb3JpdGhtLCBwdWxsQWxnb3JpdGhtLCBjYW5jZWxBbGdvcml0aG0pIHtcbiAgICAgICAgY29uc3Qgc3RyZWFtID0gT2JqZWN0LmNyZWF0ZShSZWFkYWJsZVN0cmVhbTIucHJvdG90eXBlKTtcbiAgICAgICAgSW5pdGlhbGl6ZVJlYWRhYmxlU3RyZWFtKHN0cmVhbSk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIucHJvdG90eXBlKTtcbiAgICAgICAgU2V0VXBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyKHN0cmVhbSwgY29udHJvbGxlciwgc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgMCwgdm9pZCAwKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIEluaXRpYWxpemVSZWFkYWJsZVN0cmVhbShzdHJlYW0pIHtcbiAgICAgICAgc3RyZWFtLl9zdGF0ZSA9IFwicmVhZGFibGVcIjtcbiAgICAgICAgc3RyZWFtLl9yZWFkZXIgPSB2b2lkIDA7XG4gICAgICAgIHN0cmVhbS5fc3RvcmVkRXJyb3IgPSB2b2lkIDA7XG4gICAgICAgIHN0cmVhbS5fZGlzdHVyYmVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBJc1JlYWRhYmxlU3RyZWFtKHgyKSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgyKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4MiwgXCJfcmVhZGFibGVTdHJlYW1Db250cm9sbGVyXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4MiBpbnN0YW5jZW9mIFJlYWRhYmxlU3RyZWFtMjtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIElzUmVhZGFibGVTdHJlYW1Mb2NrZWQoc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0uX3JlYWRlciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gUmVhZGFibGVTdHJlYW1DYW5jZWwoc3RyZWFtLCByZWFzb24pIHtcbiAgICAgICAgc3RyZWFtLl9kaXN0dXJiZWQgPSB0cnVlO1xuICAgICAgICBpZiAoc3RyZWFtLl9zdGF0ZSA9PT0gXCJjbG9zZWRcIikge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cmVhbS5fc3RhdGUgPT09IFwiZXJyb3JlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgoc3RyZWFtLl9zdG9yZWRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgUmVhZGFibGVTdHJlYW1DbG9zZShzdHJlYW0pO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uX3JlYWRlcjtcbiAgICAgICAgaWYgKHJlYWRlciAhPT0gdm9pZCAwICYmIElzUmVhZGFibGVTdHJlYW1CWU9CUmVhZGVyKHJlYWRlcikpIHtcbiAgICAgICAgICByZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHMuZm9yRWFjaCgocmVhZEludG9SZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICByZWFkSW50b1JlcXVlc3QuX2Nsb3NlU3RlcHModm9pZCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzb3VyY2VDYW5jZWxQcm9taXNlID0gc3RyZWFtLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXJbQ2FuY2VsU3RlcHNdKHJlYXNvbik7XG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aChzb3VyY2VDYW5jZWxQcm9taXNlLCBub29wKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtQ2xvc2Uoc3RyZWFtKSB7XG4gICAgICAgIHN0cmVhbS5fc3RhdGUgPSBcImNsb3NlZFwiO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uX3JlYWRlcjtcbiAgICAgICAgaWYgKHJlYWRlciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHRSZWFkZXJDbG9zZWRQcm9taXNlUmVzb2x2ZShyZWFkZXIpO1xuICAgICAgICBpZiAoSXNSZWFkYWJsZVN0cmVhbURlZmF1bHRSZWFkZXIocmVhZGVyKSkge1xuICAgICAgICAgIHJlYWRlci5fcmVhZFJlcXVlc3RzLmZvckVhY2goKHJlYWRSZXF1ZXN0KSA9PiB7XG4gICAgICAgICAgICByZWFkUmVxdWVzdC5fY2xvc2VTdGVwcygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlYWRlci5fcmVhZFJlcXVlc3RzID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFJlYWRhYmxlU3RyZWFtRXJyb3Ioc3RyZWFtLCBlMikge1xuICAgICAgICBzdHJlYW0uX3N0YXRlID0gXCJlcnJvcmVkXCI7XG4gICAgICAgIHN0cmVhbS5fc3RvcmVkRXJyb3IgPSBlMjtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gc3RyZWFtLl9yZWFkZXI7XG4gICAgICAgIGlmIChyZWFkZXIgPT09IHZvaWQgMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0UmVhZGVyQ2xvc2VkUHJvbWlzZVJlamVjdChyZWFkZXIsIGUyKTtcbiAgICAgICAgaWYgKElzUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyKHJlYWRlcikpIHtcbiAgICAgICAgICByZWFkZXIuX3JlYWRSZXF1ZXN0cy5mb3JFYWNoKChyZWFkUmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgcmVhZFJlcXVlc3QuX2Vycm9yU3RlcHMoZTIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlYWRlci5fcmVhZFJlcXVlc3RzID0gbmV3IFNpbXBsZVF1ZXVlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVhZGVyLl9yZWFkSW50b1JlcXVlc3RzLmZvckVhY2goKHJlYWRJbnRvUmVxdWVzdCkgPT4ge1xuICAgICAgICAgICAgcmVhZEludG9SZXF1ZXN0Ll9lcnJvclN0ZXBzKGUyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZWFkZXIuX3JlYWRJbnRvUmVxdWVzdHMgPSBuZXcgU2ltcGxlUXVldWUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZnVuY3Rpb24gc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbiQxKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoYFJlYWRhYmxlU3RyZWFtLnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBSZWFkYWJsZVN0cmVhbWApO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFF1ZXVpbmdTdHJhdGVneUluaXQoaW5pdCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnREaWN0aW9uYXJ5KGluaXQsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBoaWdoV2F0ZXJNYXJrID0gaW5pdCA9PT0gbnVsbCB8fCBpbml0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbml0LmhpZ2hXYXRlck1hcms7XG4gICAgICAgIGFzc2VydFJlcXVpcmVkRmllbGQoaGlnaFdhdGVyTWFyaywgXCJoaWdoV2F0ZXJNYXJrXCIsIFwiUXVldWluZ1N0cmF0ZWd5SW5pdFwiKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoaWdoV2F0ZXJNYXJrOiBjb252ZXJ0VW5yZXN0cmljdGVkRG91YmxlKGhpZ2hXYXRlck1hcmspXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25zdCBieXRlTGVuZ3RoU2l6ZUZ1bmN0aW9uID0gKGNodW5rKSA9PiB7XG4gICAgICAgIHJldHVybiBjaHVuay5ieXRlTGVuZ3RoO1xuICAgICAgfTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShieXRlTGVuZ3RoU2l6ZUZ1bmN0aW9uLCBcIm5hbWVcIiwge1xuICAgICAgICB2YWx1ZTogXCJzaXplXCIsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBjbGFzcyBCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5IHtcbiAgICAgICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQob3B0aW9ucywgMSwgXCJCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5XCIpO1xuICAgICAgICAgIG9wdGlvbnMgPSBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5SW5pdChvcHRpb25zLCBcIkZpcnN0IHBhcmFtZXRlclwiKTtcbiAgICAgICAgICB0aGlzLl9ieXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5SGlnaFdhdGVyTWFyayA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgICAgICAgfVxuICAgICAgICBnZXQgaGlnaFdhdGVyTWFyaygpIHtcbiAgICAgICAgICBpZiAoIUlzQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24oXCJoaWdoV2F0ZXJNYXJrXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fYnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneUhpZ2hXYXRlck1hcms7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHNpemUoKSB7XG4gICAgICAgICAgaWYgKCFJc0J5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGJ5dGVMZW5ndGhCcmFuZENoZWNrRXhjZXB0aW9uKFwic2l6ZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGJ5dGVMZW5ndGhTaXplRnVuY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCB7XG4gICAgICAgIGhpZ2hXYXRlck1hcms6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5LnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogXCJCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5XCIsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYnl0ZUxlbmd0aEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneS5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneWApO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gSXNCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5KHgyKSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgyKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4MiwgXCJfYnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneUhpZ2hXYXRlck1hcmtcIikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHgyIGluc3RhbmNlb2YgQnl0ZUxlbmd0aFF1ZXVpbmdTdHJhdGVneTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvdW50U2l6ZUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH07XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY291bnRTaXplRnVuY3Rpb24sIFwibmFtZVwiLCB7XG4gICAgICAgIHZhbHVlOiBcInNpemVcIixcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGNsYXNzIENvdW50UXVldWluZ1N0cmF0ZWd5IHtcbiAgICAgICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICAgIGFzc2VydFJlcXVpcmVkQXJndW1lbnQob3B0aW9ucywgMSwgXCJDb3VudFF1ZXVpbmdTdHJhdGVneVwiKTtcbiAgICAgICAgICBvcHRpb25zID0gY29udmVydFF1ZXVpbmdTdHJhdGVneUluaXQob3B0aW9ucywgXCJGaXJzdCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgdGhpcy5fY291bnRRdWV1aW5nU3RyYXRlZ3lIaWdoV2F0ZXJNYXJrID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICAgICAgICB9XG4gICAgICAgIGdldCBoaWdoV2F0ZXJNYXJrKCkge1xuICAgICAgICAgIGlmICghSXNDb3VudFF1ZXVpbmdTdHJhdGVneSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgY291bnRCcmFuZENoZWNrRXhjZXB0aW9uKFwiaGlnaFdhdGVyTWFya1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50UXVldWluZ1N0cmF0ZWd5SGlnaFdhdGVyTWFyaztcbiAgICAgICAgfVxuICAgICAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgICBpZiAoIUlzQ291bnRRdWV1aW5nU3RyYXRlZ3kodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGNvdW50QnJhbmRDaGVja0V4Y2VwdGlvbihcInNpemVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjb3VudFNpemVGdW5jdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ291bnRRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLCB7XG4gICAgICAgIGhpZ2hXYXRlck1hcms6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICAgICAgICBzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfVxuICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb3VudFF1ZXVpbmdTdHJhdGVneS5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgdmFsdWU6IFwiQ291bnRRdWV1aW5nU3RyYXRlZ3lcIixcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb3VudEJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgQ291bnRRdWV1aW5nU3RyYXRlZ3kucHJvdG90eXBlLiR7bmFtZX0gY2FuIG9ubHkgYmUgdXNlZCBvbiBhIENvdW50UXVldWluZ1N0cmF0ZWd5YCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBJc0NvdW50UXVldWluZ1N0cmF0ZWd5KHgyKSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgyKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4MiwgXCJfY291bnRRdWV1aW5nU3RyYXRlZ3lIaWdoV2F0ZXJNYXJrXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4MiBpbnN0YW5jZW9mIENvdW50UXVldWluZ1N0cmF0ZWd5O1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFRyYW5zZm9ybWVyKG9yaWdpbmFsLCBjb250ZXh0KSB7XG4gICAgICAgIGFzc2VydERpY3Rpb25hcnkob3JpZ2luYWwsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBmbHVzaCA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC5mbHVzaDtcbiAgICAgICAgY29uc3QgcmVhZGFibGVUeXBlID0gb3JpZ2luYWwgPT09IG51bGwgfHwgb3JpZ2luYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9yaWdpbmFsLnJlYWRhYmxlVHlwZTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBvcmlnaW5hbCA9PT0gbnVsbCB8fCBvcmlnaW5hbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3JpZ2luYWwuc3RhcnQ7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IHdyaXRhYmxlVHlwZSA9IG9yaWdpbmFsID09PSBudWxsIHx8IG9yaWdpbmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcmlnaW5hbC53cml0YWJsZVR5cGU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmx1c2g6IGZsdXNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb252ZXJ0VHJhbnNmb3JtZXJGbHVzaENhbGxiYWNrKGZsdXNoLCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnZmx1c2gnIHRoYXRgKSxcbiAgICAgICAgICByZWFkYWJsZVR5cGUsXG4gICAgICAgICAgc3RhcnQ6IHN0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb252ZXJ0VHJhbnNmb3JtZXJTdGFydENhbGxiYWNrKHN0YXJ0LCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAnc3RhcnQnIHRoYXRgKSxcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udmVydFRyYW5zZm9ybWVyVHJhbnNmb3JtQ2FsbGJhY2sodHJhbnNmb3JtLCBvcmlnaW5hbCwgYCR7Y29udGV4dH0gaGFzIG1lbWJlciAndHJhbnNmb3JtJyB0aGF0YCksXG4gICAgICAgICAgd3JpdGFibGVUeXBlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBjb252ZXJ0VHJhbnNmb3JtZXJGbHVzaENhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY29udHJvbGxlcikgPT4gcHJvbWlzZUNhbGwoZm4sIG9yaWdpbmFsLCBbY29udHJvbGxlcl0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gY29udmVydFRyYW5zZm9ybWVyU3RhcnRDYWxsYmFjayhmbiwgb3JpZ2luYWwsIGNvbnRleHQpIHtcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24oZm4sIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gKGNvbnRyb2xsZXIpID0+IHJlZmxlY3RDYWxsKGZuLCBvcmlnaW5hbCwgW2NvbnRyb2xsZXJdKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGNvbnZlcnRUcmFuc2Zvcm1lclRyYW5zZm9ybUNhbGxiYWNrKGZuLCBvcmlnaW5hbCwgY29udGV4dCkge1xuICAgICAgICBhc3NlcnRGdW5jdGlvbihmbiwgY29udGV4dCk7XG4gICAgICAgIHJldHVybiAoY2h1bmssIGNvbnRyb2xsZXIpID0+IHByb21pc2VDYWxsKGZuLCBvcmlnaW5hbCwgW2NodW5rLCBjb250cm9sbGVyXSk7XG4gICAgICB9XG4gICAgICBjbGFzcyBUcmFuc2Zvcm1TdHJlYW0ge1xuICAgICAgICBjb25zdHJ1Y3RvcihyYXdUcmFuc2Zvcm1lciA9IHt9LCByYXdXcml0YWJsZVN0cmF0ZWd5ID0ge30sIHJhd1JlYWRhYmxlU3RyYXRlZ3kgPSB7fSkge1xuICAgICAgICAgIGlmIChyYXdUcmFuc2Zvcm1lciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByYXdUcmFuc2Zvcm1lciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHdyaXRhYmxlU3RyYXRlZ3kgPSBjb252ZXJ0UXVldWluZ1N0cmF0ZWd5KHJhd1dyaXRhYmxlU3RyYXRlZ3ksIFwiU2Vjb25kIHBhcmFtZXRlclwiKTtcbiAgICAgICAgICBjb25zdCByZWFkYWJsZVN0cmF0ZWd5ID0gY29udmVydFF1ZXVpbmdTdHJhdGVneShyYXdSZWFkYWJsZVN0cmF0ZWd5LCBcIlRoaXJkIHBhcmFtZXRlclwiKTtcbiAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lciA9IGNvbnZlcnRUcmFuc2Zvcm1lcihyYXdUcmFuc2Zvcm1lciwgXCJGaXJzdCBwYXJhbWV0ZXJcIik7XG4gICAgICAgICAgaWYgKHRyYW5zZm9ybWVyLnJlYWRhYmxlVHlwZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgcmVhZGFibGVUeXBlIHNwZWNpZmllZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRyYW5zZm9ybWVyLndyaXRhYmxlVHlwZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgd3JpdGFibGVUeXBlIHNwZWNpZmllZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVhZGFibGVIaWdoV2F0ZXJNYXJrID0gRXh0cmFjdEhpZ2hXYXRlck1hcmsocmVhZGFibGVTdHJhdGVneSwgMCk7XG4gICAgICAgICAgY29uc3QgcmVhZGFibGVTaXplQWxnb3JpdGhtID0gRXh0cmFjdFNpemVBbGdvcml0aG0ocmVhZGFibGVTdHJhdGVneSk7XG4gICAgICAgICAgY29uc3Qgd3JpdGFibGVIaWdoV2F0ZXJNYXJrID0gRXh0cmFjdEhpZ2hXYXRlck1hcmsod3JpdGFibGVTdHJhdGVneSwgMSk7XG4gICAgICAgICAgY29uc3Qgd3JpdGFibGVTaXplQWxnb3JpdGhtID0gRXh0cmFjdFNpemVBbGdvcml0aG0od3JpdGFibGVTdHJhdGVneSk7XG4gICAgICAgICAgbGV0IHN0YXJ0UHJvbWlzZV9yZXNvbHZlO1xuICAgICAgICAgIGNvbnN0IHN0YXJ0UHJvbWlzZSA9IG5ld1Byb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHN0YXJ0UHJvbWlzZV9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBJbml0aWFsaXplVHJhbnNmb3JtU3RyZWFtKHRoaXMsIHN0YXJ0UHJvbWlzZSwgd3JpdGFibGVIaWdoV2F0ZXJNYXJrLCB3cml0YWJsZVNpemVBbGdvcml0aG0sIHJlYWRhYmxlSGlnaFdhdGVyTWFyaywgcmVhZGFibGVTaXplQWxnb3JpdGhtKTtcbiAgICAgICAgICBTZXRVcFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRnJvbVRyYW5zZm9ybWVyKHRoaXMsIHRyYW5zZm9ybWVyKTtcbiAgICAgICAgICBpZiAodHJhbnNmb3JtZXIuc3RhcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgc3RhcnRQcm9taXNlX3Jlc29sdmUodHJhbnNmb3JtZXIuc3RhcnQodGhpcy5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlcikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydFByb21pc2VfcmVzb2x2ZSh2b2lkIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXQgcmVhZGFibGUoKSB7XG4gICAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbSh0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgc3RyZWFtQnJhbmRDaGVja0V4Y2VwdGlvbihcInJlYWRhYmxlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZGFibGU7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IHdyaXRhYmxlKCkge1xuICAgICAgICAgIGlmICghSXNUcmFuc2Zvcm1TdHJlYW0odGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24oXCJ3cml0YWJsZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhUcmFuc2Zvcm1TdHJlYW0ucHJvdG90eXBlLCB7XG4gICAgICAgIHJlYWRhYmxlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgd3JpdGFibGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybVN0cmVhbS5wcm90b3R5cGUsIFN5bWJvbFBvbHlmaWxsLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgICAgdmFsdWU6IFwiVHJhbnNmb3JtU3RyZWFtXCIsXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gSW5pdGlhbGl6ZVRyYW5zZm9ybVN0cmVhbShzdHJlYW0sIHN0YXJ0UHJvbWlzZSwgd3JpdGFibGVIaWdoV2F0ZXJNYXJrLCB3cml0YWJsZVNpemVBbGdvcml0aG0sIHJlYWRhYmxlSGlnaFdhdGVyTWFyaywgcmVhZGFibGVTaXplQWxnb3JpdGhtKSB7XG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QWxnb3JpdGhtKCkge1xuICAgICAgICAgIHJldHVybiBzdGFydFByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gd3JpdGVBbGdvcml0aG0oY2h1bmspIHtcbiAgICAgICAgICByZXR1cm4gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNpbmtXcml0ZUFsZ29yaXRobShzdHJlYW0sIGNodW5rKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBhYm9ydEFsZ29yaXRobShyZWFzb24pIHtcbiAgICAgICAgICByZXR1cm4gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNpbmtBYm9ydEFsZ29yaXRobShzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2xvc2VBbGdvcml0aG0oKSB7XG4gICAgICAgICAgcmV0dXJuIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rQ2xvc2VBbGdvcml0aG0oc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX3dyaXRhYmxlID0gQ3JlYXRlV3JpdGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHdyaXRlQWxnb3JpdGhtLCBjbG9zZUFsZ29yaXRobSwgYWJvcnRBbGdvcml0aG0sIHdyaXRhYmxlSGlnaFdhdGVyTWFyaywgd3JpdGFibGVTaXplQWxnb3JpdGhtKTtcbiAgICAgICAgZnVuY3Rpb24gcHVsbEFsZ29yaXRobSgpIHtcbiAgICAgICAgICByZXR1cm4gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNvdXJjZVB1bGxBbGdvcml0aG0oc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjYW5jZWxBbGdvcml0aG0ocmVhc29uKSB7XG4gICAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3JXcml0YWJsZUFuZFVuYmxvY2tXcml0ZShzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlZFdpdGgodm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX3JlYWRhYmxlID0gQ3JlYXRlUmVhZGFibGVTdHJlYW0oc3RhcnRBbGdvcml0aG0sIHB1bGxBbGdvcml0aG0sIGNhbmNlbEFsZ29yaXRobSwgcmVhZGFibGVIaWdoV2F0ZXJNYXJrLCByZWFkYWJsZVNpemVBbGdvcml0aG0pO1xuICAgICAgICBzdHJlYW0uX2JhY2twcmVzc3VyZSA9IHZvaWQgMDtcbiAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlID0gdm9pZCAwO1xuICAgICAgICBzdHJlYW0uX2JhY2twcmVzc3VyZUNoYW5nZVByb21pc2VfcmVzb2x2ZSA9IHZvaWQgMDtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgdHJ1ZSk7XG4gICAgICAgIHN0cmVhbS5fdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlciA9IHZvaWQgMDtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIElzVHJhbnNmb3JtU3RyZWFtKHgyKSB7XG4gICAgICAgIGlmICghdHlwZUlzT2JqZWN0KHgyKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4MiwgXCJfdHJhbnNmb3JtU3RyZWFtQ29udHJvbGxlclwiKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geDIgaW5zdGFuY2VvZiBUcmFuc2Zvcm1TdHJlYW07XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1FcnJvcihzdHJlYW0sIGUyKSB7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFcnJvcihzdHJlYW0uX3JlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIsIGUyKTtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3JXcml0YWJsZUFuZFVuYmxvY2tXcml0ZShzdHJlYW0sIGUyKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbUVycm9yV3JpdGFibGVBbmRVbmJsb2NrV3JpdGUoc3RyZWFtLCBlMikge1xuICAgICAgICBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsZWFyQWxnb3JpdGhtcyhzdHJlYW0uX3RyYW5zZm9ybVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICBXcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3JJZk5lZWRlZChzdHJlYW0uX3dyaXRhYmxlLl93cml0YWJsZVN0cmVhbUNvbnRyb2xsZXIsIGUyKTtcbiAgICAgICAgaWYgKHN0cmVhbS5fYmFja3ByZXNzdXJlKSB7XG4gICAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1TZXRCYWNrcHJlc3N1cmUoc3RyZWFtLCBiYWNrcHJlc3N1cmUpIHtcbiAgICAgICAgaWYgKHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlX3Jlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uX2JhY2twcmVzc3VyZUNoYW5nZVByb21pc2UgPSBuZXdQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RyZWFtLl9iYWNrcHJlc3N1cmUgPSBiYWNrcHJlc3N1cmU7XG4gICAgICB9XG4gICAgICBjbGFzcyBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlciB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICB9XG4gICAgICAgIGdldCBkZXNpcmVkU2l6ZSgpIHtcbiAgICAgICAgICBpZiAoIUlzVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIodGhpcykpIHtcbiAgICAgICAgICAgIHRocm93IGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbihcImRlc2lyZWRTaXplXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCByZWFkYWJsZUNvbnRyb2xsZXIgPSB0aGlzLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtLl9yZWFkYWJsZS5fcmVhZGFibGVTdHJlYW1Db250cm9sbGVyO1xuICAgICAgICAgIHJldHVybiBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyR2V0RGVzaXJlZFNpemUocmVhZGFibGVDb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlKGNodW5rID0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJlbnF1ZXVlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckVucXVldWUodGhpcywgY2h1bmspO1xuICAgICAgICB9XG4gICAgICAgIGVycm9yKHJlYXNvbiA9IHZvaWQgMCkge1xuICAgICAgICAgIGlmICghSXNUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcih0aGlzKSkge1xuICAgICAgICAgICAgdGhyb3cgZGVmYXVsdENvbnRyb2xsZXJCcmFuZENoZWNrRXhjZXB0aW9uKFwiZXJyb3JcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IodGhpcywgcmVhc29uKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXJtaW5hdGUoKSB7XG4gICAgICAgICAgaWYgKCFJc1RyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyKHRoaXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBkZWZhdWx0Q29udHJvbGxlckJyYW5kQ2hlY2tFeGNlcHRpb24oXCJ0ZXJtaW5hdGVcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyVGVybWluYXRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUsIHtcbiAgICAgICAgZW5xdWV1ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgICAgIGVycm9yOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgdGVybWluYXRlOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgICAgICAgZGVzaXJlZFNpemU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSwgU3ltYm9sUG9seWZpbGwudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICB2YWx1ZTogXCJUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlclwiLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIElzVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIoeDIpIHtcbiAgICAgICAgaWYgKCF0eXBlSXNPYmplY3QoeDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHgyLCBcIl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtXCIpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4MiBpbnN0YW5jZW9mIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gU2V0VXBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHRyYW5zZm9ybUFsZ29yaXRobSwgZmx1c2hBbGdvcml0aG0pIHtcbiAgICAgICAgY29udHJvbGxlci5fY29udHJvbGxlZFRyYW5zZm9ybVN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgc3RyZWFtLl90cmFuc2Zvcm1TdHJlYW1Db250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgY29udHJvbGxlci5fdHJhbnNmb3JtQWxnb3JpdGhtID0gdHJhbnNmb3JtQWxnb3JpdGhtO1xuICAgICAgICBjb250cm9sbGVyLl9mbHVzaEFsZ29yaXRobSA9IGZsdXNoQWxnb3JpdGhtO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gU2V0VXBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlckZyb21UcmFuc2Zvcm1lcihzdHJlYW0sIHRyYW5zZm9ybWVyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBPYmplY3QuY3JlYXRlKFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyLnByb3RvdHlwZSk7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1BbGdvcml0aG0gPSAoY2h1bmspID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKGNvbnRyb2xsZXIsIGNodW5rKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgICAgfSBjYXRjaCAodHJhbnNmb3JtUmVzdWx0RSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VSZWplY3RlZFdpdGgodHJhbnNmb3JtUmVzdWx0RSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBsZXQgZmx1c2hBbGdvcml0aG0gPSAoKSA9PiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1lci50cmFuc2Zvcm0gIT09IHZvaWQgMCkge1xuICAgICAgICAgIHRyYW5zZm9ybUFsZ29yaXRobSA9IChjaHVuaykgPT4gdHJhbnNmb3JtZXIudHJhbnNmb3JtKGNodW5rLCBjb250cm9sbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNmb3JtZXIuZmx1c2ggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGZsdXNoQWxnb3JpdGhtID0gKCkgPT4gdHJhbnNmb3JtZXIuZmx1c2goY29udHJvbGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgU2V0VXBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcihzdHJlYW0sIGNvbnRyb2xsZXIsIHRyYW5zZm9ybUFsZ29yaXRobSwgZmx1c2hBbGdvcml0aG0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbGVhckFsZ29yaXRobXMoY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLl90cmFuc2Zvcm1BbGdvcml0aG0gPSB2b2lkIDA7XG4gICAgICAgIGNvbnRyb2xsZXIuX2ZsdXNoQWxnb3JpdGhtID0gdm9pZCAwO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJFbnF1ZXVlKGNvbnRyb2xsZXIsIGNodW5rKSB7XG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNvbnRyb2xsZXIuX2NvbnRyb2xsZWRUcmFuc2Zvcm1TdHJlYW07XG4gICAgICAgIGNvbnN0IHJlYWRhYmxlQ29udHJvbGxlciA9IHN0cmVhbS5fcmVhZGFibGUuX3JlYWRhYmxlU3RyZWFtQ29udHJvbGxlcjtcbiAgICAgICAgaWYgKCFSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2FuQ2xvc2VPckVucXVldWUocmVhZGFibGVDb250cm9sbGVyKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJSZWFkYWJsZSBzaWRlIGlzIG5vdCBpbiBhIHN0YXRlIHRoYXQgcGVybWl0cyBlbnF1ZXVlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckVucXVldWUocmVhZGFibGVDb250cm9sbGVyLCBjaHVuayk7XG4gICAgICAgIH0gY2F0Y2ggKGUyKSB7XG4gICAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3JXcml0YWJsZUFuZFVuYmxvY2tXcml0ZShzdHJlYW0sIGUyKTtcbiAgICAgICAgICB0aHJvdyBzdHJlYW0uX3JlYWRhYmxlLl9zdG9yZWRFcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiYWNrcHJlc3N1cmUgPSBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVySGFzQmFja3ByZXNzdXJlKHJlYWRhYmxlQ29udHJvbGxlcik7XG4gICAgICAgIGlmIChiYWNrcHJlc3N1cmUgIT09IHN0cmVhbS5fYmFja3ByZXNzdXJlKSB7XG4gICAgICAgICAgVHJhbnNmb3JtU3RyZWFtU2V0QmFja3ByZXNzdXJlKHN0cmVhbSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyRXJyb3IoY29udHJvbGxlciwgZTIpIHtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3IoY29udHJvbGxlci5fY29udHJvbGxlZFRyYW5zZm9ybVN0cmVhbSwgZTIpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJQZXJmb3JtVHJhbnNmb3JtKGNvbnRyb2xsZXIsIGNodW5rKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybVByb21pc2UgPSBjb250cm9sbGVyLl90cmFuc2Zvcm1BbGdvcml0aG0oY2h1bmspO1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtUHJvbWlzZVdpdGgodHJhbnNmb3JtUHJvbWlzZSwgdm9pZCAwLCAocjIpID0+IHtcbiAgICAgICAgICBUcmFuc2Zvcm1TdHJlYW1FcnJvcihjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtLCByMik7XG4gICAgICAgICAgdGhyb3cgcjI7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJUZXJtaW5hdGUoY29udHJvbGxlcikge1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjb250cm9sbGVyLl9jb250cm9sbGVkVHJhbnNmb3JtU3RyZWFtO1xuICAgICAgICBjb25zdCByZWFkYWJsZUNvbnRyb2xsZXIgPSBzdHJlYW0uX3JlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgICAgIFJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJDbG9zZShyZWFkYWJsZUNvbnRyb2xsZXIpO1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBUeXBlRXJyb3IoXCJUcmFuc2Zvcm1TdHJlYW0gdGVybWluYXRlZFwiKTtcbiAgICAgICAgVHJhbnNmb3JtU3RyZWFtRXJyb3JXcml0YWJsZUFuZFVuYmxvY2tXcml0ZShzdHJlYW0sIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRTaW5rV3JpdGVBbGdvcml0aG0oc3RyZWFtLCBjaHVuaykge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gc3RyZWFtLl90cmFuc2Zvcm1TdHJlYW1Db250cm9sbGVyO1xuICAgICAgICBpZiAoc3RyZWFtLl9iYWNrcHJlc3N1cmUpIHtcbiAgICAgICAgICBjb25zdCBiYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlID0gc3RyZWFtLl9iYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlO1xuICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9taXNlV2l0aChiYWNrcHJlc3N1cmVDaGFuZ2VQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cml0YWJsZSA9IHN0cmVhbS5fd3JpdGFibGU7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdyaXRhYmxlLl9zdGF0ZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gXCJlcnJvcmluZ1wiKSB7XG4gICAgICAgICAgICAgIHRocm93IHdyaXRhYmxlLl9zdG9yZWRFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlclBlcmZvcm1UcmFuc2Zvcm0oY29udHJvbGxlciwgY2h1bmspO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlclBlcmZvcm1UcmFuc2Zvcm0oY29udHJvbGxlciwgY2h1bmspO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNpbmtBYm9ydEFsZ29yaXRobShzdHJlYW0sIHJlYXNvbikge1xuICAgICAgICBUcmFuc2Zvcm1TdHJlYW1FcnJvcihzdHJlYW0sIHJlYXNvbik7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZWRXaXRoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0U2lua0Nsb3NlQWxnb3JpdGhtKHN0cmVhbSkge1xuICAgICAgICBjb25zdCByZWFkYWJsZSA9IHN0cmVhbS5fcmVhZGFibGU7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBzdHJlYW0uX3RyYW5zZm9ybVN0cmVhbUNvbnRyb2xsZXI7XG4gICAgICAgIGNvbnN0IGZsdXNoUHJvbWlzZSA9IGNvbnRyb2xsZXIuX2ZsdXNoQWxnb3JpdGhtKCk7XG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbURlZmF1bHRDb250cm9sbGVyQ2xlYXJBbGdvcml0aG1zKGNvbnRyb2xsZXIpO1xuICAgICAgICByZXR1cm4gdHJhbnNmb3JtUHJvbWlzZVdpdGgoZmx1c2hQcm9taXNlLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHJlYWRhYmxlLl9zdGF0ZSA9PT0gXCJlcnJvcmVkXCIpIHtcbiAgICAgICAgICAgIHRocm93IHJlYWRhYmxlLl9zdG9yZWRFcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgUmVhZGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlckNsb3NlKHJlYWRhYmxlLl9yZWFkYWJsZVN0cmVhbUNvbnRyb2xsZXIpO1xuICAgICAgICB9LCAocjIpID0+IHtcbiAgICAgICAgICBUcmFuc2Zvcm1TdHJlYW1FcnJvcihzdHJlYW0sIHIyKTtcbiAgICAgICAgICB0aHJvdyByZWFkYWJsZS5fc3RvcmVkRXJyb3I7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gVHJhbnNmb3JtU3RyZWFtRGVmYXVsdFNvdXJjZVB1bGxBbGdvcml0aG0oc3RyZWFtKSB7XG4gICAgICAgIFRyYW5zZm9ybVN0cmVhbVNldEJhY2twcmVzc3VyZShzdHJlYW0sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHN0cmVhbS5fYmFja3ByZXNzdXJlQ2hhbmdlUHJvbWlzZTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGRlZmF1bHRDb250cm9sbGVyQnJhbmRDaGVja0V4Y2VwdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuZXcgVHlwZUVycm9yKGBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlci5wcm90b3R5cGUuJHtuYW1lfSBjYW4gb25seSBiZSB1c2VkIG9uIGEgVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXJgKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIHN0cmVhbUJyYW5kQ2hlY2tFeGNlcHRpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihgVHJhbnNmb3JtU3RyZWFtLnByb3RvdHlwZS4ke25hbWV9IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBUcmFuc2Zvcm1TdHJlYW1gKTtcbiAgICAgIH1cbiAgICAgIGV4cG9ydHMyLkJ5dGVMZW5ndGhRdWV1aW5nU3RyYXRlZ3kgPSBCeXRlTGVuZ3RoUXVldWluZ1N0cmF0ZWd5O1xuICAgICAgZXhwb3J0czIuQ291bnRRdWV1aW5nU3RyYXRlZ3kgPSBDb3VudFF1ZXVpbmdTdHJhdGVneTtcbiAgICAgIGV4cG9ydHMyLlJlYWRhYmxlQnl0ZVN0cmVhbUNvbnRyb2xsZXIgPSBSZWFkYWJsZUJ5dGVTdHJlYW1Db250cm9sbGVyO1xuICAgICAgZXhwb3J0czIuUmVhZGFibGVTdHJlYW0gPSBSZWFkYWJsZVN0cmVhbTI7XG4gICAgICBleHBvcnRzMi5SZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXIgPSBSZWFkYWJsZVN0cmVhbUJZT0JSZWFkZXI7XG4gICAgICBleHBvcnRzMi5SZWFkYWJsZVN0cmVhbUJZT0JSZXF1ZXN0ID0gUmVhZGFibGVTdHJlYW1CWU9CUmVxdWVzdDtcbiAgICAgIGV4cG9ydHMyLlJlYWRhYmxlU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIgPSBSZWFkYWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyO1xuICAgICAgZXhwb3J0czIuUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyID0gUmVhZGFibGVTdHJlYW1EZWZhdWx0UmVhZGVyO1xuICAgICAgZXhwb3J0czIuVHJhbnNmb3JtU3RyZWFtID0gVHJhbnNmb3JtU3RyZWFtO1xuICAgICAgZXhwb3J0czIuVHJhbnNmb3JtU3RyZWFtRGVmYXVsdENvbnRyb2xsZXIgPSBUcmFuc2Zvcm1TdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcbiAgICAgIGV4cG9ydHMyLldyaXRhYmxlU3RyZWFtID0gV3JpdGFibGVTdHJlYW07XG4gICAgICBleHBvcnRzMi5Xcml0YWJsZVN0cmVhbURlZmF1bHRDb250cm9sbGVyID0gV3JpdGFibGVTdHJlYW1EZWZhdWx0Q29udHJvbGxlcjtcbiAgICAgIGV4cG9ydHMyLldyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlciA9IFdyaXRhYmxlU3RyZWFtRGVmYXVsdFdyaXRlcjtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzMiwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBub2RlX21vZHVsZXMvLnBucG0vZmV0Y2gtYmxvYkAzLjEuMy9ub2RlX21vZHVsZXMvZmV0Y2gtYmxvYi9zdHJlYW1zLmNqc1xudmFyIHJlcXVpcmVfc3RyZWFtcyA9IF9fY29tbW9uSlMoe1xuICBcIm5vZGVfbW9kdWxlcy8ucG5wbS9mZXRjaC1ibG9iQDMuMS4zL25vZGVfbW9kdWxlcy9mZXRjaC1ibG9iL3N0cmVhbXMuY2pzXCIoKSB7XG4gICAgdmFyIFBPT0xfU0laRTIgPSA2NTUzNjtcbiAgICBpZiAoIWdsb2JhbFRoaXMuUmVhZGFibGVTdHJlYW0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBfX3JlcXVpcmUoXCJub2RlOnByb2Nlc3NcIik7XG4gICAgICAgIGNvbnN0IHsgZW1pdFdhcm5pbmcgfSA9IHByb2Nlc3M7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0V2FybmluZyA9ICgpID0+IHtcbiAgICAgICAgICB9O1xuICAgICAgICAgIE9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywgX19yZXF1aXJlKFwibm9kZTpzdHJlYW0vd2ViXCIpKTtcbiAgICAgICAgICBwcm9jZXNzLmVtaXRXYXJuaW5nID0gZW1pdFdhcm5pbmc7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0V2FybmluZyA9IGVtaXRXYXJuaW5nO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBPYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHJlcXVpcmVfcG9ueWZpbGxfZXMyMDE4KCkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBCbG9iOiBCbG9iMyB9ID0gX19yZXF1aXJlKFwiYnVmZmVyXCIpO1xuICAgICAgaWYgKEJsb2IzICYmICFCbG9iMy5wcm90b3R5cGUuc3RyZWFtKSB7XG4gICAgICAgIEJsb2IzLnByb3RvdHlwZS5zdHJlYW0gPSBmdW5jdGlvbiBuYW1lKHBhcmFtcykge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IDA7XG4gICAgICAgICAgY29uc3QgYmxvYiA9IHRoaXM7XG4gICAgICAgICAgcmV0dXJuIG5ldyBSZWFkYWJsZVN0cmVhbSh7XG4gICAgICAgICAgICB0eXBlOiBcImJ5dGVzXCIsXG4gICAgICAgICAgICBhc3luYyBwdWxsKGN0cmwpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2h1bmsgPSBibG9iLnNsaWNlKHBvc2l0aW9uLCBNYXRoLm1pbihibG9iLnNpemUsIHBvc2l0aW9uICsgUE9PTF9TSVpFMikpO1xuICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBjaHVuay5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgICBwb3NpdGlvbiArPSBidWZmZXIuYnl0ZUxlbmd0aDtcbiAgICAgICAgICAgICAgY3RybC5lbnF1ZXVlKG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpO1xuICAgICAgICAgICAgICBpZiAocG9zaXRpb24gPT09IGJsb2Iuc2l6ZSkge1xuICAgICAgICAgICAgICAgIGN0cmwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgfVxuICB9XG59KTtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL2ZldGNoLWJsb2JAMy4xLjMvbm9kZV9tb2R1bGVzL2ZldGNoLWJsb2IvaW5kZXguanNcbnZhciBpbXBvcnRfc3RyZWFtcyA9IF9fdG9FU00ocmVxdWlyZV9zdHJlYW1zKCksIDEpO1xudmFyIFBPT0xfU0laRSA9IDY1NTM2O1xuYXN5bmMgZnVuY3Rpb24qIHRvSXRlcmF0b3IocGFydHMsIGNsb25lID0gdHJ1ZSkge1xuICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICBpZiAoXCJzdHJlYW1cIiBpbiBwYXJ0KSB7XG4gICAgICB5aWVsZCogcGFydC5zdHJlYW0oKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhwYXJ0KSkge1xuICAgICAgaWYgKGNsb25lKSB7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHBhcnQuYnl0ZU9mZnNldDtcbiAgICAgICAgY29uc3QgZW5kID0gcGFydC5ieXRlT2Zmc2V0ICsgcGFydC5ieXRlTGVuZ3RoO1xuICAgICAgICB3aGlsZSAocG9zaXRpb24gIT09IGVuZCkge1xuICAgICAgICAgIGNvbnN0IHNpemUgPSBNYXRoLm1pbihlbmQgLSBwb3NpdGlvbiwgUE9PTF9TSVpFKTtcbiAgICAgICAgICBjb25zdCBjaHVuayA9IHBhcnQuYnVmZmVyLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIHNpemUpO1xuICAgICAgICAgIHBvc2l0aW9uICs9IGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgeWllbGQgbmV3IFVpbnQ4QXJyYXkoY2h1bmspO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5aWVsZCBwYXJ0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgICAgd2hpbGUgKHBvc2l0aW9uICE9PSBwYXJ0LnNpemUpIHtcbiAgICAgICAgY29uc3QgY2h1bmsgPSBwYXJ0LnNsaWNlKHBvc2l0aW9uLCBNYXRoLm1pbihwYXJ0LnNpemUsIHBvc2l0aW9uICsgUE9PTF9TSVpFKSk7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGNodW5rLmFycmF5QnVmZmVyKCk7XG4gICAgICAgIHBvc2l0aW9uICs9IGJ1ZmZlci5ieXRlTGVuZ3RoO1xuICAgICAgICB5aWVsZCBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxudmFyIF9CbG9iID0gY2xhc3MgQmxvYiB7XG4gICNwYXJ0cyA9IFtdO1xuICAjdHlwZSA9IFwiXCI7XG4gICNzaXplID0gMDtcbiAgY29uc3RydWN0b3IoYmxvYlBhcnRzID0gW10sIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0eXBlb2YgYmxvYlBhcnRzICE9PSBcIm9iamVjdFwiIHx8IGJsb2JQYXJ0cyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ0Jsb2InOiBUaGUgcHJvdmlkZWQgdmFsdWUgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhIHNlcXVlbmNlLlwiKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBibG9iUGFydHNbU3ltYm9sLml0ZXJhdG9yXSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnQmxvYic6IFRoZSBvYmplY3QgbXVzdCBoYXZlIGEgY2FsbGFibGUgQEBpdGVyYXRvciBwcm9wZXJ0eS5cIik7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnQmxvYic6IHBhcmFtZXRlciAyIGNhbm5vdCBjb252ZXJ0IHRvIGRpY3Rpb25hcnkuXCIpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucyA9PT0gbnVsbClcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGJsb2JQYXJ0cykge1xuICAgICAgbGV0IHBhcnQ7XG4gICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGVsZW1lbnQpKSB7XG4gICAgICAgIHBhcnQgPSBuZXcgVWludDhBcnJheShlbGVtZW50LmJ1ZmZlci5zbGljZShlbGVtZW50LmJ5dGVPZmZzZXQsIGVsZW1lbnQuYnl0ZU9mZnNldCArIGVsZW1lbnQuYnl0ZUxlbmd0aCkpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcGFydCA9IG5ldyBVaW50OEFycmF5KGVsZW1lbnQuc2xpY2UoMCkpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICBwYXJ0ID0gZWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnQgPSBlbmNvZGVyLmVuY29kZShlbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3NpemUgKz0gQXJyYXlCdWZmZXIuaXNWaWV3KHBhcnQpID8gcGFydC5ieXRlTGVuZ3RoIDogcGFydC5zaXplO1xuICAgICAgdGhpcy4jcGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IG9wdGlvbnMudHlwZSA9PT0gdm9pZCAwID8gXCJcIiA6IFN0cmluZyhvcHRpb25zLnR5cGUpO1xuICAgIHRoaXMuI3R5cGUgPSAvXltcXHgyMC1cXHg3RV0qJC8udGVzdCh0eXBlKSA/IHR5cGUgOiBcIlwiO1xuICB9XG4gIGdldCBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLiNzaXplO1xuICB9XG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiB0aGlzLiN0eXBlO1xuICB9XG4gIGFzeW5jIHRleHQoKSB7XG4gICAgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvciBhd2FpdCAoY29uc3QgcGFydCBvZiB0b0l0ZXJhdG9yKHRoaXMuI3BhcnRzLCBmYWxzZSkpIHtcbiAgICAgIHN0ciArPSBkZWNvZGVyLmRlY29kZShwYXJ0LCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgc3RyICs9IGRlY29kZXIuZGVjb2RlKCk7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBhc3luYyBhcnJheUJ1ZmZlcigpIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5zaXplKTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHRvSXRlcmF0b3IodGhpcy4jcGFydHMsIGZhbHNlKSkge1xuICAgICAgZGF0YS5zZXQoY2h1bmssIG9mZnNldCk7XG4gICAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gIH1cbiAgc3RyZWFtKCkge1xuICAgIGNvbnN0IGl0ID0gdG9JdGVyYXRvcih0aGlzLiNwYXJ0cywgdHJ1ZSk7XG4gICAgcmV0dXJuIG5ldyBnbG9iYWxUaGlzLlJlYWRhYmxlU3RyZWFtKHtcbiAgICAgIHR5cGU6IFwiYnl0ZXNcIixcbiAgICAgIGFzeW5jIHB1bGwoY3RybCkge1xuICAgICAgICBjb25zdCBjaHVuayA9IGF3YWl0IGl0Lm5leHQoKTtcbiAgICAgICAgY2h1bmsuZG9uZSA/IGN0cmwuY2xvc2UoKSA6IGN0cmwuZW5xdWV1ZShjaHVuay52YWx1ZSk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgY2FuY2VsKCkge1xuICAgICAgICBhd2FpdCBpdC5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzbGljZShzdGFydCA9IDAsIGVuZCA9IHRoaXMuc2l6ZSwgdHlwZSA9IFwiXCIpIHtcbiAgICBjb25zdCB7IHNpemUgfSA9IHRoaXM7XG4gICAgbGV0IHJlbGF0aXZlU3RhcnQgPSBzdGFydCA8IDAgPyBNYXRoLm1heChzaXplICsgc3RhcnQsIDApIDogTWF0aC5taW4oc3RhcnQsIHNpemUpO1xuICAgIGxldCByZWxhdGl2ZUVuZCA9IGVuZCA8IDAgPyBNYXRoLm1heChzaXplICsgZW5kLCAwKSA6IE1hdGgubWluKGVuZCwgc2l6ZSk7XG4gICAgY29uc3Qgc3BhbiA9IE1hdGgubWF4KHJlbGF0aXZlRW5kIC0gcmVsYXRpdmVTdGFydCwgMCk7XG4gICAgY29uc3QgcGFydHMgPSB0aGlzLiNwYXJ0cztcbiAgICBjb25zdCBibG9iUGFydHMgPSBbXTtcbiAgICBsZXQgYWRkZWQgPSAwO1xuICAgIGZvciAoY29uc3QgcGFydCBvZiBwYXJ0cykge1xuICAgICAgaWYgKGFkZGVkID49IHNwYW4pIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBzaXplMiA9IEFycmF5QnVmZmVyLmlzVmlldyhwYXJ0KSA/IHBhcnQuYnl0ZUxlbmd0aCA6IHBhcnQuc2l6ZTtcbiAgICAgIGlmIChyZWxhdGl2ZVN0YXJ0ICYmIHNpemUyIDw9IHJlbGF0aXZlU3RhcnQpIHtcbiAgICAgICAgcmVsYXRpdmVTdGFydCAtPSBzaXplMjtcbiAgICAgICAgcmVsYXRpdmVFbmQgLT0gc2l6ZTI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgY2h1bms7XG4gICAgICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcocGFydCkpIHtcbiAgICAgICAgICBjaHVuayA9IHBhcnQuc3ViYXJyYXkocmVsYXRpdmVTdGFydCwgTWF0aC5taW4oc2l6ZTIsIHJlbGF0aXZlRW5kKSk7XG4gICAgICAgICAgYWRkZWQgKz0gY2h1bmsuYnl0ZUxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaHVuayA9IHBhcnQuc2xpY2UocmVsYXRpdmVTdGFydCwgTWF0aC5taW4oc2l6ZTIsIHJlbGF0aXZlRW5kKSk7XG4gICAgICAgICAgYWRkZWQgKz0gY2h1bmsuc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICByZWxhdGl2ZUVuZCAtPSBzaXplMjtcbiAgICAgICAgYmxvYlBhcnRzLnB1c2goY2h1bmspO1xuICAgICAgICByZWxhdGl2ZVN0YXJ0ID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtdLCB7IHR5cGU6IFN0cmluZyh0eXBlKS50b0xvd2VyQ2FzZSgpIH0pO1xuICAgIGJsb2IuI3NpemUgPSBzcGFuO1xuICAgIGJsb2IuI3BhcnRzID0gYmxvYlBhcnRzO1xuICAgIHJldHVybiBibG9iO1xuICB9XG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gXCJCbG9iXCI7XG4gIH1cbiAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgKHR5cGVvZiBvYmplY3Quc3RyZWFtID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIG9iamVjdC5hcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiKSAmJiAvXihCbG9ifEZpbGUpJC8udGVzdChvYmplY3RbU3ltYm9sLnRvU3RyaW5nVGFnXSk7XG4gIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhfQmxvYi5wcm90b3R5cGUsIHtcbiAgc2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIHR5cGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICBzbGljZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xudmFyIEJsb2IyID0gX0Jsb2I7XG52YXIgZmV0Y2hfYmxvYl9kZWZhdWx0ID0gQmxvYjI7XG5cbi8vIG5vZGVfbW9kdWxlcy8ucG5wbS9mZXRjaC1ibG9iQDMuMS4zL25vZGVfbW9kdWxlcy9mZXRjaC1ibG9iL2ZpbGUuanNcbnZhciBfRmlsZSA9IGNsYXNzIEZpbGUgZXh0ZW5kcyBmZXRjaF9ibG9iX2RlZmF1bHQge1xuICAjbGFzdE1vZGlmaWVkID0gMDtcbiAgI25hbWUgPSBcIlwiO1xuICBjb25zdHJ1Y3RvcihmaWxlQml0cywgZmlsZU5hbWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRmFpbGVkIHRvIGNvbnN0cnVjdCAnRmlsZSc6IDIgYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAke2FyZ3VtZW50cy5sZW5ndGh9IHByZXNlbnQuYCk7XG4gICAgfVxuICAgIHN1cGVyKGZpbGVCaXRzLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucyA9PT0gbnVsbClcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBsYXN0TW9kaWZpZWQgPSBvcHRpb25zLmxhc3RNb2RpZmllZCA9PT0gdm9pZCAwID8gRGF0ZS5ub3coKSA6IE51bWJlcihvcHRpb25zLmxhc3RNb2RpZmllZCk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4obGFzdE1vZGlmaWVkKSkge1xuICAgICAgdGhpcy4jbGFzdE1vZGlmaWVkID0gbGFzdE1vZGlmaWVkO1xuICAgIH1cbiAgICB0aGlzLiNuYW1lID0gU3RyaW5nKGZpbGVOYW1lKTtcbiAgfVxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuICBnZXQgbGFzdE1vZGlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLiNsYXN0TW9kaWZpZWQ7XG4gIH1cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiBcIkZpbGVcIjtcbiAgfVxufTtcbnZhciBGaWxlMiA9IF9GaWxlO1xudmFyIGZpbGVfZGVmYXVsdCA9IEZpbGUyO1xuXG4vLyBub2RlX21vZHVsZXMvLnBucG0vZm9ybWRhdGEtcG9seWZpbGxANC4wLjEwL25vZGVfbW9kdWxlcy9mb3JtZGF0YS1wb2x5ZmlsbC9lc20ubWluLmpzXG52YXIgeyB0b1N0cmluZ1RhZzogdCwgaXRlcmF0b3I6IGksIGhhc0luc3RhbmNlOiBoIH0gPSBTeW1ib2w7XG52YXIgciA9IE1hdGgucmFuZG9tO1xudmFyIG0gPSBcImFwcGVuZCxzZXQsZ2V0LGdldEFsbCxkZWxldGUsa2V5cyx2YWx1ZXMsZW50cmllcyxmb3JFYWNoLGNvbnN0cnVjdG9yXCIuc3BsaXQoXCIsXCIpO1xudmFyIGYgPSAoYSwgYiwgYykgPT4gKGEgKz0gXCJcIiwgL14oQmxvYnxGaWxlKSQvLnRlc3QoYiAmJiBiW3RdKSA/IFsoYyA9IGMgIT09IHZvaWQgMCA/IGMgKyBcIlwiIDogYlt0XSA9PSBcIkZpbGVcIiA/IGIubmFtZSA6IFwiYmxvYlwiLCBhKSwgYi5uYW1lICE9PSBjIHx8IGJbdF0gPT0gXCJibG9iXCIgPyBuZXcgZmlsZV9kZWZhdWx0KFtiXSwgYywgYikgOiBiXSA6IFthLCBiICsgXCJcIl0pO1xudmFyIGUgPSAoYywgZjIpID0+IChmMiA/IGMgOiBjLnJlcGxhY2UoL1xccj9cXG58XFxyL2csIFwiXFxyXFxuXCIpKS5yZXBsYWNlKC9cXG4vZywgXCIlMEFcIikucmVwbGFjZSgvXFxyL2csIFwiJTBEXCIpLnJlcGxhY2UoL1wiL2csIFwiJTIyXCIpO1xudmFyIHggPSAobiwgYSwgZTIpID0+IHtcbiAgaWYgKGEubGVuZ3RoIDwgZTIpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBGYWlsZWQgdG8gZXhlY3V0ZSAnJHtufScgb24gJ0Zvcm1EYXRhJzogJHtlMn0gYXJndW1lbnRzIHJlcXVpcmVkLCBidXQgb25seSAke2EubGVuZ3RofSBwcmVzZW50LmApO1xuICB9XG59O1xudmFyIEZvcm1EYXRhID0gY2xhc3MgRm9ybURhdGEyIHtcbiAgI2QgPSBbXTtcbiAgY29uc3RydWN0b3IoLi4uYSkge1xuICAgIGlmIChhLmxlbmd0aClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEZhaWxlZCB0byBjb25zdHJ1Y3QgJ0Zvcm1EYXRhJzogcGFyYW1ldGVyIDEgaXMgbm90IG9mIHR5cGUgJ0hUTUxGb3JtRWxlbWVudCcuYCk7XG4gIH1cbiAgZ2V0IFt0XSgpIHtcbiAgICByZXR1cm4gXCJGb3JtRGF0YVwiO1xuICB9XG4gIFtpXSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzKCk7XG4gIH1cbiAgc3RhdGljIFtoXShvKSB7XG4gICAgcmV0dXJuIG8gJiYgdHlwZW9mIG8gPT09IFwib2JqZWN0XCIgJiYgb1t0XSA9PT0gXCJGb3JtRGF0YVwiICYmICFtLnNvbWUoKG0yKSA9PiB0eXBlb2Ygb1ttMl0gIT0gXCJmdW5jdGlvblwiKTtcbiAgfVxuICBhcHBlbmQoLi4uYSkge1xuICAgIHgoXCJhcHBlbmRcIiwgYXJndW1lbnRzLCAyKTtcbiAgICB0aGlzLiNkLnB1c2goZiguLi5hKSk7XG4gIH1cbiAgZGVsZXRlKGEpIHtcbiAgICB4KFwiZGVsZXRlXCIsIGFyZ3VtZW50cywgMSk7XG4gICAgYSArPSBcIlwiO1xuICAgIHRoaXMuI2QgPSB0aGlzLiNkLmZpbHRlcigoW2JdKSA9PiBiICE9PSBhKTtcbiAgfVxuICBnZXQoYSkge1xuICAgIHgoXCJnZXRcIiwgYXJndW1lbnRzLCAxKTtcbiAgICBhICs9IFwiXCI7XG4gICAgZm9yICh2YXIgYiA9IHRoaXMuI2QsIGwgPSBiLmxlbmd0aCwgYyA9IDA7IGMgPCBsOyBjKyspXG4gICAgICBpZiAoYltjXVswXSA9PT0gYSlcbiAgICAgICAgcmV0dXJuIGJbY11bMV07XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0QWxsKGEsIGIpIHtcbiAgICB4KFwiZ2V0QWxsXCIsIGFyZ3VtZW50cywgMSk7XG4gICAgYiA9IFtdO1xuICAgIGEgKz0gXCJcIjtcbiAgICB0aGlzLiNkLmZvckVhY2goKGMpID0+IGNbMF0gPT09IGEgJiYgYi5wdXNoKGNbMV0pKTtcbiAgICByZXR1cm4gYjtcbiAgfVxuICBoYXMoYSkge1xuICAgIHgoXCJoYXNcIiwgYXJndW1lbnRzLCAxKTtcbiAgICBhICs9IFwiXCI7XG4gICAgcmV0dXJuIHRoaXMuI2Quc29tZSgoYikgPT4gYlswXSA9PT0gYSk7XG4gIH1cbiAgZm9yRWFjaChhLCBiKSB7XG4gICAgeChcImZvckVhY2hcIiwgYXJndW1lbnRzLCAxKTtcbiAgICBmb3IgKHZhciBbYywgZF0gb2YgdGhpcylcbiAgICAgIGEuY2FsbChiLCBkLCBjLCB0aGlzKTtcbiAgfVxuICBzZXQoLi4uYSkge1xuICAgIHgoXCJzZXRcIiwgYXJndW1lbnRzLCAyKTtcbiAgICB2YXIgYiA9IFtdLCBjID0gdHJ1ZTtcbiAgICBhID0gZiguLi5hKTtcbiAgICB0aGlzLiNkLmZvckVhY2goKGQpID0+IHtcbiAgICAgIGRbMF0gPT09IGFbMF0gPyBjICYmIChjID0gIWIucHVzaChhKSkgOiBiLnB1c2goZCk7XG4gICAgfSk7XG4gICAgYyAmJiBiLnB1c2goYSk7XG4gICAgdGhpcy4jZCA9IGI7XG4gIH1cbiAgKmVudHJpZXMoKSB7XG4gICAgeWllbGQqIHRoaXMuI2Q7XG4gIH1cbiAgKmtleXMoKSB7XG4gICAgZm9yICh2YXIgW2FdIG9mIHRoaXMpXG4gICAgICB5aWVsZCBhO1xuICB9XG4gICp2YWx1ZXMoKSB7XG4gICAgZm9yICh2YXIgWywgYV0gb2YgdGhpcylcbiAgICAgIHlpZWxkIGE7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtRGF0YVRvQmxvYihGLCBCID0gZmV0Y2hfYmxvYl9kZWZhdWx0KSB7XG4gIHZhciBiID0gYCR7cigpfSR7cigpfWAucmVwbGFjZSgvXFwuL2csIFwiXCIpLnNsaWNlKC0yOCkucGFkU3RhcnQoMzIsIFwiLVwiKSwgYyA9IFtdLCBwID0gYC0tJHtifVxcclxuQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiYDtcbiAgRi5mb3JFYWNoKCh2LCBuKSA9PiB0eXBlb2YgdiA9PSBcInN0cmluZ1wiID8gYy5wdXNoKHAgKyBlKG4pICsgYFwiXFxyXG5cXHJcbiR7di5yZXBsYWNlKC9cXHIoPyFcXG4pfCg/PCFcXHIpXFxuL2csIFwiXFxyXFxuXCIpfVxcclxuYCkgOiBjLnB1c2gocCArIGUobikgKyBgXCI7IGZpbGVuYW1lPVwiJHtlKHYubmFtZSwgMSl9XCJcXHJcbkNvbnRlbnQtVHlwZTogJHt2LnR5cGUgfHwgXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn1cXHJcblxcclxuYCwgdiwgXCJcXHJcXG5cIikpO1xuICBjLnB1c2goYC0tJHtifS0tYCk7XG4gIHJldHVybiBuZXcgQihjLCB7IHR5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIgKyBiIH0pO1xufVxuXG5leHBvcnQge1xuICBmZXRjaF9ibG9iX2RlZmF1bHQsXG4gIGZpbGVfZGVmYXVsdCxcbiAgRm9ybURhdGEsXG4gIGZvcm1EYXRhVG9CbG9iXG59O1xuLyohIGZldGNoLWJsb2IuIE1JVCBMaWNlbnNlLiBKaW1teSBXXHUwMEU0cnRpbmcgPGh0dHBzOi8vamltbXkud2FydGluZy5zZS9vcGVuc291cmNlPiAqL1xuLyohIGZvcm1kYXRhLXBvbHlmaWxsLiBNSVQgTGljZW5zZS4gSmltbXkgV1x1MDBFNHJ0aW5nIDxodHRwczovL2ppbW15LndhcnRpbmcuc2Uvb3BlbnNvdXJjZT4gKi9cbiIsICJpbXBvcnQge2NyZWF0ZVJlcXVpcmUgYXMgX18kJGNyZWF0ZVJlcXVpcmV9IGZyb20gJ21vZHVsZSc7dmFyIHJlcXVpcmU9X18kJGNyZWF0ZVJlcXVpcmUoXCJmaWxlOi8vL1VzZXJzL2Vnb2lzdC9kZXYvdHNuby9kaXN0L211bHRpcGFydC1wYXJzZXItNU1ZTkZYRUEuanNcIik7XG5pbXBvcnQge1xuICBGb3JtRGF0YSxcbiAgZmlsZV9kZWZhdWx0XG59IGZyb20gXCIuL2NodW5rLVFUQVgzQlpDLmpzXCI7XG5cblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL2ZldGNoLWJsb2JAMy4xLjMvbm9kZV9tb2R1bGVzL2ZldGNoLWJsb2IvZnJvbS5qc1xuaW1wb3J0IHsgc3RhdFN5bmMsIGNyZWF0ZVJlYWRTdHJlYW0sIHByb21pc2VzIGFzIGZzIH0gZnJvbSBcIm5vZGU6ZnNcIjtcbmltcG9ydCB7IE1lc3NhZ2VDaGFubmVsIH0gZnJvbSBcIm5vZGU6d29ya2VyX3RocmVhZHNcIjtcbnZhciB7IHN0YXQgfSA9IGZzO1xudmFyIERPTUV4Y2VwdGlvbiA9IGdsb2JhbFRoaXMuRE9NRXhjZXB0aW9uIHx8ICgoKSA9PiB7XG4gIGNvbnN0IHBvcnQgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKS5wb3J0MTtcbiAgY29uc3QgYWIgPSBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIHRyeSB7XG4gICAgcG9ydC5wb3N0TWVzc2FnZShhYiwgW2FiLCBhYl0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gZXJyLmNvbnN0cnVjdG9yO1xuICB9XG59KSgpO1xudmFyIEJsb2JEYXRhSXRlbSA9IGNsYXNzIHtcbiAgI3BhdGg7XG4gICNzdGFydDtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuI3BhdGggPSBvcHRpb25zLnBhdGg7XG4gICAgdGhpcy4jc3RhcnQgPSBvcHRpb25zLnN0YXJ0O1xuICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgICB0aGlzLmxhc3RNb2RpZmllZCA9IG9wdGlvbnMubGFzdE1vZGlmaWVkO1xuICB9XG4gIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IEJsb2JEYXRhSXRlbSh7XG4gICAgICBwYXRoOiB0aGlzLiNwYXRoLFxuICAgICAgbGFzdE1vZGlmaWVkOiB0aGlzLmxhc3RNb2RpZmllZCxcbiAgICAgIHNpemU6IGVuZCAtIHN0YXJ0LFxuICAgICAgc3RhcnRcbiAgICB9KTtcbiAgfVxuICBhc3luYyAqc3RyZWFtKCkge1xuICAgIGNvbnN0IHsgbXRpbWVNcyB9ID0gYXdhaXQgc3RhdCh0aGlzLiNwYXRoKTtcbiAgICBpZiAobXRpbWVNcyA+IHRoaXMubGFzdE1vZGlmaWVkKSB7XG4gICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFwiVGhlIHJlcXVlc3RlZCBmaWxlIGNvdWxkIG5vdCBiZSByZWFkLCB0eXBpY2FsbHkgZHVlIHRvIHBlcm1pc3Npb24gcHJvYmxlbXMgdGhhdCBoYXZlIG9jY3VycmVkIGFmdGVyIGEgcmVmZXJlbmNlIHRvIGEgZmlsZSB3YXMgYWNxdWlyZWQuXCIsIFwiTm90UmVhZGFibGVFcnJvclwiKTtcbiAgICB9XG4gICAgeWllbGQqIGNyZWF0ZVJlYWRTdHJlYW0odGhpcy4jcGF0aCwge1xuICAgICAgc3RhcnQ6IHRoaXMuI3N0YXJ0LFxuICAgICAgZW5kOiB0aGlzLiNzdGFydCArIHRoaXMuc2l6ZSAtIDFcbiAgICB9KTtcbiAgfVxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuIFwiQmxvYlwiO1xuICB9XG59O1xuXG4vLyBub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjEuMC9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvdXRpbHMvbXVsdGlwYXJ0LXBhcnNlci5qc1xudmFyIHMgPSAwO1xudmFyIFMgPSB7XG4gIFNUQVJUX0JPVU5EQVJZOiBzKyssXG4gIEhFQURFUl9GSUVMRF9TVEFSVDogcysrLFxuICBIRUFERVJfRklFTEQ6IHMrKyxcbiAgSEVBREVSX1ZBTFVFX1NUQVJUOiBzKyssXG4gIEhFQURFUl9WQUxVRTogcysrLFxuICBIRUFERVJfVkFMVUVfQUxNT1NUX0RPTkU6IHMrKyxcbiAgSEVBREVSU19BTE1PU1RfRE9ORTogcysrLFxuICBQQVJUX0RBVEFfU1RBUlQ6IHMrKyxcbiAgUEFSVF9EQVRBOiBzKyssXG4gIEVORDogcysrXG59O1xudmFyIGYgPSAxO1xudmFyIEYgPSB7XG4gIFBBUlRfQk9VTkRBUlk6IGYsXG4gIExBU1RfQk9VTkRBUlk6IGYgKj0gMlxufTtcbnZhciBMRiA9IDEwO1xudmFyIENSID0gMTM7XG52YXIgU1BBQ0UgPSAzMjtcbnZhciBIWVBIRU4gPSA0NTtcbnZhciBDT0xPTiA9IDU4O1xudmFyIEEgPSA5NztcbnZhciBaID0gMTIyO1xudmFyIGxvd2VyID0gKGMpID0+IGMgfCAzMjtcbnZhciBub29wID0gKCkgPT4ge1xufTtcbnZhciBNdWx0aXBhcnRQYXJzZXIgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGJvdW5kYXJ5KSB7XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy5mbGFncyA9IDA7XG4gICAgdGhpcy5vbkhlYWRlckVuZCA9IG5vb3A7XG4gICAgdGhpcy5vbkhlYWRlckZpZWxkID0gbm9vcDtcbiAgICB0aGlzLm9uSGVhZGVyc0VuZCA9IG5vb3A7XG4gICAgdGhpcy5vbkhlYWRlclZhbHVlID0gbm9vcDtcbiAgICB0aGlzLm9uUGFydEJlZ2luID0gbm9vcDtcbiAgICB0aGlzLm9uUGFydERhdGEgPSBub29wO1xuICAgIHRoaXMub25QYXJ0RW5kID0gbm9vcDtcbiAgICB0aGlzLmJvdW5kYXJ5Q2hhcnMgPSB7fTtcbiAgICBib3VuZGFyeSA9IFwiXFxyXFxuLS1cIiArIGJvdW5kYXJ5O1xuICAgIGNvbnN0IHVpOGEgPSBuZXcgVWludDhBcnJheShib3VuZGFyeS5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHVpOGFbaV0gPSBib3VuZGFyeS5jaGFyQ29kZUF0KGkpO1xuICAgICAgdGhpcy5ib3VuZGFyeUNoYXJzW3VpOGFbaV1dID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ib3VuZGFyeSA9IHVpOGE7XG4gICAgdGhpcy5sb29rYmVoaW5kID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5ib3VuZGFyeS5sZW5ndGggKyA4KTtcbiAgICB0aGlzLnN0YXRlID0gUy5TVEFSVF9CT1VOREFSWTtcbiAgfVxuICB3cml0ZShkYXRhKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGxlbmd0aF8gPSBkYXRhLmxlbmd0aDtcbiAgICBsZXQgcHJldmlvdXNJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgbGV0IHsgbG9va2JlaGluZCwgYm91bmRhcnksIGJvdW5kYXJ5Q2hhcnMsIGluZGV4LCBzdGF0ZSwgZmxhZ3MgfSA9IHRoaXM7XG4gICAgY29uc3QgYm91bmRhcnlMZW5ndGggPSB0aGlzLmJvdW5kYXJ5Lmxlbmd0aDtcbiAgICBjb25zdCBib3VuZGFyeUVuZCA9IGJvdW5kYXJ5TGVuZ3RoIC0gMTtcbiAgICBjb25zdCBidWZmZXJMZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICBsZXQgYztcbiAgICBsZXQgY2w7XG4gICAgY29uc3QgbWFyayA9IChuYW1lKSA9PiB7XG4gICAgICB0aGlzW25hbWUgKyBcIk1hcmtcIl0gPSBpO1xuICAgIH07XG4gICAgY29uc3QgY2xlYXIgPSAobmFtZSkgPT4ge1xuICAgICAgZGVsZXRlIHRoaXNbbmFtZSArIFwiTWFya1wiXTtcbiAgICB9O1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKGNhbGxiYWNrU3ltYm9sLCBzdGFydCwgZW5kLCB1aThhKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPT09IHZvaWQgMCB8fCBzdGFydCAhPT0gZW5kKSB7XG4gICAgICAgIHRoaXNbY2FsbGJhY2tTeW1ib2xdKHVpOGEgJiYgdWk4YS5zdWJhcnJheShzdGFydCwgZW5kKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBkYXRhQ2FsbGJhY2sgPSAobmFtZSwgY2xlYXIyKSA9PiB7XG4gICAgICBjb25zdCBtYXJrU3ltYm9sID0gbmFtZSArIFwiTWFya1wiO1xuICAgICAgaWYgKCEobWFya1N5bWJvbCBpbiB0aGlzKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY2xlYXIyKSB7XG4gICAgICAgIGNhbGxiYWNrKG5hbWUsIHRoaXNbbWFya1N5bWJvbF0sIGksIGRhdGEpO1xuICAgICAgICBkZWxldGUgdGhpc1ttYXJrU3ltYm9sXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG5hbWUsIHRoaXNbbWFya1N5bWJvbF0sIGRhdGEubGVuZ3RoLCBkYXRhKTtcbiAgICAgICAgdGhpc1ttYXJrU3ltYm9sXSA9IDA7XG4gICAgICB9XG4gICAgfTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoXzsgaSsrKSB7XG4gICAgICBjID0gZGF0YVtpXTtcbiAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBTLlNUQVJUX0JPVU5EQVJZOlxuICAgICAgICAgIGlmIChpbmRleCA9PT0gYm91bmRhcnkubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgaWYgKGMgPT09IEhZUEhFTikge1xuICAgICAgICAgICAgICBmbGFncyB8PSBGLkxBU1RfQk9VTkRBUlk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMgIT09IENSKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IC0gMSA9PT0gYm91bmRhcnkubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgaWYgKGZsYWdzICYgRi5MQVNUX0JPVU5EQVJZICYmIGMgPT09IEhZUEhFTikge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFMuRU5EO1xuICAgICAgICAgICAgICBmbGFncyA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEoZmxhZ3MgJiBGLkxBU1RfQk9VTkRBUlkpICYmIGMgPT09IExGKSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgY2FsbGJhY2soXCJvblBhcnRCZWdpblwiKTtcbiAgICAgICAgICAgICAgc3RhdGUgPSBTLkhFQURFUl9GSUVMRF9TVEFSVDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYyAhPT0gYm91bmRhcnlbaW5kZXggKyAyXSkge1xuICAgICAgICAgICAgaW5kZXggPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09IGJvdW5kYXJ5W2luZGV4ICsgMl0pIHtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFMuSEVBREVSX0ZJRUxEX1NUQVJUOlxuICAgICAgICAgIHN0YXRlID0gUy5IRUFERVJfRklFTEQ7XG4gICAgICAgICAgbWFyayhcIm9uSGVhZGVyRmllbGRcIik7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICBjYXNlIFMuSEVBREVSX0ZJRUxEOlxuICAgICAgICAgIGlmIChjID09PSBDUikge1xuICAgICAgICAgICAgY2xlYXIoXCJvbkhlYWRlckZpZWxkXCIpO1xuICAgICAgICAgICAgc3RhdGUgPSBTLkhFQURFUlNfQUxNT1NUX0RPTkU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICBpZiAoYyA9PT0gSFlQSEVOKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09IENPTE9OKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YUNhbGxiYWNrKFwib25IZWFkZXJGaWVsZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHN0YXRlID0gUy5IRUFERVJfVkFMVUVfU1RBUlQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2wgPSBsb3dlcihjKTtcbiAgICAgICAgICBpZiAoY2wgPCBBIHx8IGNsID4gWikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTLkhFQURFUl9WQUxVRV9TVEFSVDpcbiAgICAgICAgICBpZiAoYyA9PT0gU1BBQ0UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYXJrKFwib25IZWFkZXJWYWx1ZVwiKTtcbiAgICAgICAgICBzdGF0ZSA9IFMuSEVBREVSX1ZBTFVFO1xuICAgICAgICBjYXNlIFMuSEVBREVSX1ZBTFVFOlxuICAgICAgICAgIGlmIChjID09PSBDUikge1xuICAgICAgICAgICAgZGF0YUNhbGxiYWNrKFwib25IZWFkZXJWYWx1ZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKFwib25IZWFkZXJFbmRcIik7XG4gICAgICAgICAgICBzdGF0ZSA9IFMuSEVBREVSX1ZBTFVFX0FMTU9TVF9ET05FO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTLkhFQURFUl9WQUxVRV9BTE1PU1RfRE9ORTpcbiAgICAgICAgICBpZiAoYyAhPT0gTEYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RhdGUgPSBTLkhFQURFUl9GSUVMRF9TVEFSVDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBTLkhFQURFUlNfQUxNT1NUX0RPTkU6XG4gICAgICAgICAgaWYgKGMgIT09IExGKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhbGxiYWNrKFwib25IZWFkZXJzRW5kXCIpO1xuICAgICAgICAgIHN0YXRlID0gUy5QQVJUX0RBVEFfU1RBUlQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUy5QQVJUX0RBVEFfU1RBUlQ6XG4gICAgICAgICAgc3RhdGUgPSBTLlBBUlRfREFUQTtcbiAgICAgICAgICBtYXJrKFwib25QYXJ0RGF0YVwiKTtcbiAgICAgICAgY2FzZSBTLlBBUlRfREFUQTpcbiAgICAgICAgICBwcmV2aW91c0luZGV4ID0gaW5kZXg7XG4gICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBpICs9IGJvdW5kYXJ5RW5kO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBidWZmZXJMZW5ndGggJiYgIShkYXRhW2ldIGluIGJvdW5kYXJ5Q2hhcnMpKSB7XG4gICAgICAgICAgICAgIGkgKz0gYm91bmRhcnlMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpIC09IGJvdW5kYXJ5RW5kO1xuICAgICAgICAgICAgYyA9IGRhdGFbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCA8IGJvdW5kYXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGJvdW5kYXJ5W2luZGV4XSA9PT0gYykge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkYXRhQ2FsbGJhY2soXCJvblBhcnREYXRhXCIsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYm91bmRhcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgaWYgKGMgPT09IENSKSB7XG4gICAgICAgICAgICAgIGZsYWdzIHw9IEYuUEFSVF9CT1VOREFSWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA9PT0gSFlQSEVOKSB7XG4gICAgICAgICAgICAgIGZsYWdzIHw9IEYuTEFTVF9CT1VOREFSWTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IC0gMSA9PT0gYm91bmRhcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZmxhZ3MgJiBGLlBBUlRfQk9VTkRBUlkpIHtcbiAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gTEYpIHtcbiAgICAgICAgICAgICAgICBmbGFncyAmPSB+Ri5QQVJUX0JPVU5EQVJZO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwib25QYXJ0RW5kXCIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwib25QYXJ0QmVnaW5cIik7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTLkhFQURFUl9GSUVMRF9TVEFSVDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmbGFncyAmIEYuTEFTVF9CT1VOREFSWSkge1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gSFlQSEVOKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXCJvblBhcnRFbmRcIik7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSBTLkVORDtcbiAgICAgICAgICAgICAgICBmbGFncyA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgIGxvb2tiZWhpbmRbaW5kZXggLSAxXSA9IGM7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c0luZGV4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgX2xvb2tiZWhpbmQgPSBuZXcgVWludDhBcnJheShsb29rYmVoaW5kLmJ1ZmZlciwgbG9va2JlaGluZC5ieXRlT2Zmc2V0LCBsb29rYmVoaW5kLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgY2FsbGJhY2soXCJvblBhcnREYXRhXCIsIDAsIHByZXZpb3VzSW5kZXgsIF9sb29rYmVoaW5kKTtcbiAgICAgICAgICAgIHByZXZpb3VzSW5kZXggPSAwO1xuICAgICAgICAgICAgbWFyayhcIm9uUGFydERhdGFcIik7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFMuRU5EOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBzdGF0ZSBlbnRlcmVkOiAke3N0YXRlfWApO1xuICAgICAgfVxuICAgIH1cbiAgICBkYXRhQ2FsbGJhY2soXCJvbkhlYWRlckZpZWxkXCIpO1xuICAgIGRhdGFDYWxsYmFjayhcIm9uSGVhZGVyVmFsdWVcIik7XG4gICAgZGF0YUNhbGxiYWNrKFwib25QYXJ0RGF0YVwiKTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuZmxhZ3MgPSBmbGFncztcbiAgfVxuICBlbmQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFMuSEVBREVSX0ZJRUxEX1NUQVJUICYmIHRoaXMuaW5kZXggPT09IDAgfHwgdGhpcy5zdGF0ZSA9PT0gUy5QQVJUX0RBVEEgJiYgdGhpcy5pbmRleCA9PT0gdGhpcy5ib3VuZGFyeS5sZW5ndGgpIHtcbiAgICAgIHRoaXMub25QYXJ0RW5kKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlICE9PSBTLkVORCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXVsdGlwYXJ0UGFyc2VyLmVuZCgpOiBzdHJlYW0gZW5kZWQgdW5leHBlY3RlZGx5XCIpO1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIF9maWxlTmFtZShoZWFkZXJWYWx1ZSkge1xuICBjb25zdCBtID0gaGVhZGVyVmFsdWUubWF0Y2goL1xcYmZpbGVuYW1lPShcIiguKj8pXCJ8KFteKCk8PkAsOzpcXFxcXCIvW1xcXT89e31cXHNcXHRdKykpKCR8O1xccykvaSk7XG4gIGlmICghbSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBtYXRjaCA9IG1bMl0gfHwgbVszXSB8fCBcIlwiO1xuICBsZXQgZmlsZW5hbWUgPSBtYXRjaC5zbGljZShtYXRjaC5sYXN0SW5kZXhPZihcIlxcXFxcIikgKyAxKTtcbiAgZmlsZW5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC8lMjIvZywgJ1wiJyk7XG4gIGZpbGVuYW1lID0gZmlsZW5hbWUucmVwbGFjZSgvJiMoXFxkezR9KTsvZywgKG0yLCBjb2RlKSA9PiB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XG4gIH0pO1xuICByZXR1cm4gZmlsZW5hbWU7XG59XG5hc3luYyBmdW5jdGlvbiB0b0Zvcm1EYXRhKEJvZHksIGN0KSB7XG4gIGlmICghL211bHRpcGFydC9pLnRlc3QoY3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBmZXRjaFwiKTtcbiAgfVxuICBjb25zdCBtID0gY3QubWF0Y2goL2JvdW5kYXJ5PSg/OlwiKFteXCJdKylcInwoW147XSspKS9pKTtcbiAgaWYgKCFtKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm5vIG9yIGJhZCBjb250ZW50LXR5cGUgaGVhZGVyLCBubyBtdWx0aXBhcnQgYm91bmRhcnlcIik7XG4gIH1cbiAgY29uc3QgcGFyc2VyID0gbmV3IE11bHRpcGFydFBhcnNlcihtWzFdIHx8IG1bMl0pO1xuICBsZXQgaGVhZGVyRmllbGQ7XG4gIGxldCBoZWFkZXJWYWx1ZTtcbiAgbGV0IGVudHJ5VmFsdWU7XG4gIGxldCBlbnRyeU5hbWU7XG4gIGxldCBjb250ZW50VHlwZTtcbiAgbGV0IGZpbGVuYW1lO1xuICBjb25zdCBlbnRyeUNodW5rcyA9IFtdO1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBjb25zdCBvblBhcnREYXRhID0gKHVpOGEpID0+IHtcbiAgICBlbnRyeVZhbHVlICs9IGRlY29kZXIuZGVjb2RlKHVpOGEsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICB9O1xuICBjb25zdCBhcHBlbmRUb0ZpbGUgPSAodWk4YSkgPT4ge1xuICAgIGVudHJ5Q2h1bmtzLnB1c2godWk4YSk7XG4gIH07XG4gIGNvbnN0IGFwcGVuZEZpbGVUb0Zvcm1EYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBuZXcgZmlsZV9kZWZhdWx0KGVudHJ5Q2h1bmtzLCBmaWxlbmFtZSwgeyB0eXBlOiBjb250ZW50VHlwZSB9KTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoZW50cnlOYW1lLCBmaWxlKTtcbiAgfTtcbiAgY29uc3QgYXBwZW5kRW50cnlUb0Zvcm1EYXRhID0gKCkgPT4ge1xuICAgIGZvcm1EYXRhLmFwcGVuZChlbnRyeU5hbWUsIGVudHJ5VmFsdWUpO1xuICB9O1xuICBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG4gIGRlY29kZXIuZGVjb2RlKCk7XG4gIHBhcnNlci5vblBhcnRCZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHBhcnNlci5vblBhcnREYXRhID0gb25QYXJ0RGF0YTtcbiAgICBwYXJzZXIub25QYXJ0RW5kID0gYXBwZW5kRW50cnlUb0Zvcm1EYXRhO1xuICAgIGhlYWRlckZpZWxkID0gXCJcIjtcbiAgICBoZWFkZXJWYWx1ZSA9IFwiXCI7XG4gICAgZW50cnlWYWx1ZSA9IFwiXCI7XG4gICAgZW50cnlOYW1lID0gXCJcIjtcbiAgICBjb250ZW50VHlwZSA9IFwiXCI7XG4gICAgZmlsZW5hbWUgPSBudWxsO1xuICAgIGVudHJ5Q2h1bmtzLmxlbmd0aCA9IDA7XG4gIH07XG4gIHBhcnNlci5vbkhlYWRlckZpZWxkID0gZnVuY3Rpb24odWk4YSkge1xuICAgIGhlYWRlckZpZWxkICs9IGRlY29kZXIuZGVjb2RlKHVpOGEsIHsgc3RyZWFtOiB0cnVlIH0pO1xuICB9O1xuICBwYXJzZXIub25IZWFkZXJWYWx1ZSA9IGZ1bmN0aW9uKHVpOGEpIHtcbiAgICBoZWFkZXJWYWx1ZSArPSBkZWNvZGVyLmRlY29kZSh1aThhLCB7IHN0cmVhbTogdHJ1ZSB9KTtcbiAgfTtcbiAgcGFyc2VyLm9uSGVhZGVyRW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaGVhZGVyVmFsdWUgKz0gZGVjb2Rlci5kZWNvZGUoKTtcbiAgICBoZWFkZXJGaWVsZCA9IGhlYWRlckZpZWxkLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGhlYWRlckZpZWxkID09PSBcImNvbnRlbnQtZGlzcG9zaXRpb25cIikge1xuICAgICAgY29uc3QgbTIgPSBoZWFkZXJWYWx1ZS5tYXRjaCgvXFxibmFtZT0oXCIoW15cIl0qKVwifChbXigpPD5ALDs6XFxcXFwiL1tcXF0/PXt9XFxzXFx0XSspKS9pKTtcbiAgICAgIGlmIChtMikge1xuICAgICAgICBlbnRyeU5hbWUgPSBtMlsyXSB8fCBtMlszXSB8fCBcIlwiO1xuICAgICAgfVxuICAgICAgZmlsZW5hbWUgPSBfZmlsZU5hbWUoaGVhZGVyVmFsdWUpO1xuICAgICAgaWYgKGZpbGVuYW1lKSB7XG4gICAgICAgIHBhcnNlci5vblBhcnREYXRhID0gYXBwZW5kVG9GaWxlO1xuICAgICAgICBwYXJzZXIub25QYXJ0RW5kID0gYXBwZW5kRmlsZVRvRm9ybURhdGE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoZWFkZXJGaWVsZCA9PT0gXCJjb250ZW50LXR5cGVcIikge1xuICAgICAgY29udGVudFR5cGUgPSBoZWFkZXJWYWx1ZTtcbiAgICB9XG4gICAgaGVhZGVyVmFsdWUgPSBcIlwiO1xuICAgIGhlYWRlckZpZWxkID0gXCJcIjtcbiAgfTtcbiAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBCb2R5KSB7XG4gICAgcGFyc2VyLndyaXRlKGNodW5rKTtcbiAgfVxuICBwYXJzZXIuZW5kKCk7XG4gIHJldHVybiBmb3JtRGF0YTtcbn1cbmV4cG9ydCB7XG4gIHRvRm9ybURhdGFcbn07XG4iLCAiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovLy9Vc2Vycy9lZ29pc3QvZGV2L3Rzbm8vZGlzdC9zcmMtNFE3UTY3QzMuanNcIik7XG5pbXBvcnQge1xuICBGb3JtRGF0YSxcbiAgZmV0Y2hfYmxvYl9kZWZhdWx0LFxuICBmb3JtRGF0YVRvQmxvYlxufSBmcm9tIFwiLi9jaHVuay1RVEFYM0JaQy5qc1wiO1xuXG5cbi8vIG5vZGVfbW9kdWxlcy8ucG5wbS9ub2RlLWZldGNoQDMuMS4wL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy9pbmRleC5qc1xuaW1wb3J0IGh0dHAyIGZyb20gXCJub2RlOmh0dHBcIjtcbmltcG9ydCBodHRwcyBmcm9tIFwibm9kZTpodHRwc1wiO1xuaW1wb3J0IHpsaWIgZnJvbSBcIm5vZGU6emxpYlwiO1xuaW1wb3J0IFN0cmVhbTIsIHsgUGFzc1Rocm91Z2ggYXMgUGFzc1Rocm91Z2gyLCBwaXBlbGluZSBhcyBwdW1wIH0gZnJvbSBcIm5vZGU6c3RyZWFtXCI7XG5cbi8vIG5vZGVfbW9kdWxlcy8ucG5wbS9kYXRhLXVyaS10by1idWZmZXJANC4wLjAvbm9kZV9tb2R1bGVzL2RhdGEtdXJpLXRvLWJ1ZmZlci9kaXN0L2luZGV4LmpzXG5mdW5jdGlvbiBkYXRhVXJpVG9CdWZmZXIodXJpKSB7XG4gIGlmICghL15kYXRhOi9pLnRlc3QodXJpKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2B1cmlgIGRvZXMgbm90IGFwcGVhciB0byBiZSBhIERhdGEgVVJJIChtdXN0IGJlZ2luIHdpdGggXCJkYXRhOlwiKScpO1xuICB9XG4gIHVyaSA9IHVyaS5yZXBsYWNlKC9cXHI/XFxuL2csIFwiXCIpO1xuICBjb25zdCBmaXJzdENvbW1hID0gdXJpLmluZGV4T2YoXCIsXCIpO1xuICBpZiAoZmlyc3RDb21tYSA9PT0gLTEgfHwgZmlyc3RDb21tYSA8PSA0KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm1hbGZvcm1lZCBkYXRhOiBVUklcIik7XG4gIH1cbiAgY29uc3QgbWV0YSA9IHVyaS5zdWJzdHJpbmcoNSwgZmlyc3RDb21tYSkuc3BsaXQoXCI7XCIpO1xuICBsZXQgY2hhcnNldCA9IFwiXCI7XG4gIGxldCBiYXNlNjQgPSBmYWxzZTtcbiAgY29uc3QgdHlwZSA9IG1ldGFbMF0gfHwgXCJ0ZXh0L3BsYWluXCI7XG4gIGxldCB0eXBlRnVsbCA9IHR5cGU7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgbWV0YS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtZXRhW2ldID09PSBcImJhc2U2NFwiKSB7XG4gICAgICBiYXNlNjQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlRnVsbCArPSBgOyR7bWV0YVtpXX1gO1xuICAgICAgaWYgKG1ldGFbaV0uaW5kZXhPZihcImNoYXJzZXQ9XCIpID09PSAwKSB7XG4gICAgICAgIGNoYXJzZXQgPSBtZXRhW2ldLnN1YnN0cmluZyg4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFtZXRhWzBdICYmICFjaGFyc2V0Lmxlbmd0aCkge1xuICAgIHR5cGVGdWxsICs9IFwiO2NoYXJzZXQ9VVMtQVNDSUlcIjtcbiAgICBjaGFyc2V0ID0gXCJVUy1BU0NJSVwiO1xuICB9XG4gIGNvbnN0IGVuY29kaW5nID0gYmFzZTY0ID8gXCJiYXNlNjRcIiA6IFwiYXNjaWlcIjtcbiAgY29uc3QgZGF0YSA9IHVuZXNjYXBlKHVyaS5zdWJzdHJpbmcoZmlyc3RDb21tYSArIDEpKTtcbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oZGF0YSwgZW5jb2RpbmcpO1xuICBidWZmZXIudHlwZSA9IHR5cGU7XG4gIGJ1ZmZlci50eXBlRnVsbCA9IHR5cGVGdWxsO1xuICBidWZmZXIuY2hhcnNldCA9IGNoYXJzZXQ7XG4gIHJldHVybiBidWZmZXI7XG59XG52YXIgZGlzdF9kZWZhdWx0ID0gZGF0YVVyaVRvQnVmZmVyO1xuXG4vLyBub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjEuMC9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvYm9keS5qc1xuaW1wb3J0IFN0cmVhbSwgeyBQYXNzVGhyb3VnaCB9IGZyb20gXCJub2RlOnN0cmVhbVwiO1xuaW1wb3J0IHsgdHlwZXMsIGRlcHJlY2F0ZSB9IGZyb20gXCJub2RlOnV0aWxcIjtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2Vycm9ycy9iYXNlLmpzXG52YXIgRmV0Y2hCYXNlRXJyb3IgPSBjbGFzcyBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgfVxufTtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2Vycm9ycy9mZXRjaC1lcnJvci5qc1xudmFyIEZldGNoRXJyb3IgPSBjbGFzcyBleHRlbmRzIEZldGNoQmFzZUVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSwgc3lzdGVtRXJyb3IpIHtcbiAgICBzdXBlcihtZXNzYWdlLCB0eXBlKTtcbiAgICBpZiAoc3lzdGVtRXJyb3IpIHtcbiAgICAgIHRoaXMuY29kZSA9IHRoaXMuZXJybm8gPSBzeXN0ZW1FcnJvci5jb2RlO1xuICAgICAgdGhpcy5lcnJvcmVkU3lzQ2FsbCA9IHN5c3RlbUVycm9yLnN5c2NhbGw7XG4gICAgfVxuICB9XG59O1xuXG4vLyBub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjEuMC9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvdXRpbHMvaXMuanNcbnZhciBOQU1FID0gU3ltYm9sLnRvU3RyaW5nVGFnO1xudmFyIGlzVVJMU2VhcmNoUGFyYW1ldGVycyA9IChvYmplY3QpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iamVjdC5hcHBlbmQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqZWN0LmRlbGV0ZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBvYmplY3QuZ2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIG9iamVjdC5nZXRBbGwgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2Ygb2JqZWN0LmhhcyA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBvYmplY3Quc2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIG9iamVjdC5zb3J0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqZWN0W05BTUVdID09PSBcIlVSTFNlYXJjaFBhcmFtc1wiO1xufTtcbnZhciBpc0Jsb2IgPSAob2JqZWN0KSA9PiB7XG4gIHJldHVybiBvYmplY3QgJiYgdHlwZW9mIG9iamVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqZWN0LmFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIG9iamVjdC50eXBlID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBvYmplY3Quc3RyZWFtID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gXCJmdW5jdGlvblwiICYmIC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9iamVjdFtOQU1FXSk7XG59O1xudmFyIGlzQWJvcnRTaWduYWwgPSAob2JqZWN0KSA9PiB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSBcIm9iamVjdFwiICYmIChvYmplY3RbTkFNRV0gPT09IFwiQWJvcnRTaWduYWxcIiB8fCBvYmplY3RbTkFNRV0gPT09IFwiRXZlbnRUYXJnZXRcIik7XG59O1xuXG4vLyBub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjEuMC9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvYm9keS5qc1xudmFyIElOVEVSTkFMUyA9IFN5bWJvbChcIkJvZHkgaW50ZXJuYWxzXCIpO1xudmFyIEJvZHkgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGJvZHksIHtcbiAgICBzaXplID0gMFxuICB9ID0ge30pIHtcbiAgICBsZXQgYm91bmRhcnkgPSBudWxsO1xuICAgIGlmIChib2R5ID09PSBudWxsKSB7XG4gICAgICBib2R5ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1ldGVycyhib2R5KSkge1xuICAgICAgYm9keSA9IEJ1ZmZlci5mcm9tKGJvZHkudG9TdHJpbmcoKSk7XG4gICAgfSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcbiAgICB9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuICAgIH0gZWxzZSBpZiAodHlwZXMuaXNBbnlBcnJheUJ1ZmZlcihib2R5KSkge1xuICAgICAgYm9keSA9IEJ1ZmZlci5mcm9tKGJvZHkpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG4gICAgICBib2R5ID0gQnVmZmVyLmZyb20oYm9keS5idWZmZXIsIGJvZHkuYnl0ZU9mZnNldCwgYm9keS5ieXRlTGVuZ3RoKTtcbiAgICB9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcbiAgICB9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgYm9keSA9IGZvcm1EYXRhVG9CbG9iKGJvZHkpO1xuICAgICAgYm91bmRhcnkgPSBib2R5LnR5cGUuc3BsaXQoXCI9XCIpWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGJvZHkpKTtcbiAgICB9XG4gICAgbGV0IHN0cmVhbSA9IGJvZHk7XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuICAgICAgc3RyZWFtID0gU3RyZWFtLlJlYWRhYmxlLmZyb20oYm9keSk7XG4gICAgfSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcbiAgICAgIHN0cmVhbSA9IFN0cmVhbS5SZWFkYWJsZS5mcm9tKGJvZHkuc3RyZWFtKCkpO1xuICAgIH1cbiAgICB0aGlzW0lOVEVSTkFMU10gPSB7XG4gICAgICBib2R5LFxuICAgICAgc3RyZWFtLFxuICAgICAgYm91bmRhcnksXG4gICAgICBkaXN0dXJiZWQ6IGZhbHNlLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgaWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcbiAgICAgIGJvZHkub24oXCJlcnJvclwiLCAoZXJyb3JfKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JfIGluc3RhbmNlb2YgRmV0Y2hCYXNlRXJyb3IgPyBlcnJvcl8gOiBuZXcgRmV0Y2hFcnJvcihgSW52YWxpZCByZXNwb25zZSBib2R5IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke3RoaXMudXJsfTogJHtlcnJvcl8ubWVzc2FnZX1gLCBcInN5c3RlbVwiLCBlcnJvcl8pO1xuICAgICAgICB0aGlzW0lOVEVSTkFMU10uZXJyb3IgPSBlcnJvcjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBnZXQgYm9keSgpIHtcbiAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFNdLnN0cmVhbTtcbiAgfVxuICBnZXQgYm9keVVzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQ7XG4gIH1cbiAgYXN5bmMgYXJyYXlCdWZmZXIoKSB7XG4gICAgY29uc3QgeyBidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGggfSA9IGF3YWl0IGNvbnN1bWVCb2R5KHRoaXMpO1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGJ5dGVMZW5ndGgpO1xuICB9XG4gIGFzeW5jIGZvcm1EYXRhKCkge1xuICAgIGNvbnN0IGN0ID0gdGhpcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKTtcbiAgICBpZiAoY3Quc3RhcnRzV2l0aChcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSkge1xuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGF3YWl0IHRoaXMudGV4dCgpKTtcbiAgICAgIGZvciAoY29uc3QgW25hbWUsIHZhbHVlXSBvZiBwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuICAgIGNvbnN0IHsgdG9Gb3JtRGF0YSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9tdWx0aXBhcnQtcGFyc2VyLTVNWU5GWEVBLmpzXCIpO1xuICAgIHJldHVybiB0b0Zvcm1EYXRhKHRoaXMuYm9keSwgY3QpO1xuICB9XG4gIGFzeW5jIGJsb2IoKSB7XG4gICAgY29uc3QgY3QgPSB0aGlzLmhlYWRlcnMgJiYgdGhpcy5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCB0aGlzW0lOVEVSTkFMU10uYm9keSAmJiB0aGlzW0lOVEVSTkFMU10uYm9keS50eXBlIHx8IFwiXCI7XG4gICAgY29uc3QgYnVmID0gYXdhaXQgdGhpcy5idWZmZXIoKTtcbiAgICByZXR1cm4gbmV3IGZldGNoX2Jsb2JfZGVmYXVsdChbYnVmXSwge1xuICAgICAgdHlwZTogY3RcbiAgICB9KTtcbiAgfVxuICBhc3luYyBqc29uKCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGNvbnN1bWVCb2R5KHRoaXMpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKGJ1ZmZlci50b1N0cmluZygpKTtcbiAgfVxuICBhc3luYyB0ZXh0KCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGNvbnN1bWVCb2R5KHRoaXMpO1xuICAgIHJldHVybiBidWZmZXIudG9TdHJpbmcoKTtcbiAgfVxuICBidWZmZXIoKSB7XG4gICAgcmV0dXJuIGNvbnN1bWVCb2R5KHRoaXMpO1xuICB9XG59O1xuQm9keS5wcm90b3R5cGUuYnVmZmVyID0gZGVwcmVjYXRlKEJvZHkucHJvdG90eXBlLmJ1ZmZlciwgXCJQbGVhc2UgdXNlICdyZXNwb25zZS5hcnJheUJ1ZmZlcigpJyBpbnN0ZWFkIG9mICdyZXNwb25zZS5idWZmZXIoKSdcIiwgXCJub2RlLWZldGNoI2J1ZmZlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJvZHkucHJvdG90eXBlLCB7XG4gIGJvZHk6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICBib2R5VXNlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIGFycmF5QnVmZmVyOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgYmxvYjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIGpzb246IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICB0ZXh0OiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5hc3luYyBmdW5jdGlvbiBjb25zdW1lQm9keShkYXRhKSB7XG4gIGlmIChkYXRhW0lOVEVSTkFMU10uZGlzdHVyYmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgYm9keSB1c2VkIGFscmVhZHkgZm9yOiAke2RhdGEudXJsfWApO1xuICB9XG4gIGRhdGFbSU5URVJOQUxTXS5kaXN0dXJiZWQgPSB0cnVlO1xuICBpZiAoZGF0YVtJTlRFUk5BTFNdLmVycm9yKSB7XG4gICAgdGhyb3cgZGF0YVtJTlRFUk5BTFNdLmVycm9yO1xuICB9XG4gIGNvbnN0IHsgYm9keSB9ID0gZGF0YTtcbiAgaWYgKGJvZHkgPT09IG51bGwpIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICB9XG4gIGlmICghKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKTtcbiAgfVxuICBjb25zdCBhY2N1bSA9IFtdO1xuICBsZXQgYWNjdW1CeXRlcyA9IDA7XG4gIHRyeSB7XG4gICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBib2R5KSB7XG4gICAgICBpZiAoZGF0YS5zaXplID4gMCAmJiBhY2N1bUJ5dGVzICsgY2h1bmsubGVuZ3RoID4gZGF0YS5zaXplKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEZldGNoRXJyb3IoYGNvbnRlbnQgc2l6ZSBhdCAke2RhdGEudXJsfSBvdmVyIGxpbWl0OiAke2RhdGEuc2l6ZX1gLCBcIm1heC1zaXplXCIpO1xuICAgICAgICBib2R5LmRlc3Ryb3koZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICAgIGFjY3VtQnl0ZXMgKz0gY2h1bmsubGVuZ3RoO1xuICAgICAgYWNjdW0ucHVzaChjaHVuayk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IGVycm9yXyA9IGVycm9yIGluc3RhbmNlb2YgRmV0Y2hCYXNlRXJyb3IgPyBlcnJvciA6IG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7ZGF0YS51cmx9OiAke2Vycm9yLm1lc3NhZ2V9YCwgXCJzeXN0ZW1cIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yXztcbiAgfVxuICBpZiAoYm9keS5yZWFkYWJsZUVuZGVkID09PSB0cnVlIHx8IGJvZHkuX3JlYWRhYmxlU3RhdGUuZW5kZWQgPT09IHRydWUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGFjY3VtLmV2ZXJ5KChjKSA9PiB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGFjY3VtLmpvaW4oXCJcIikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoYWNjdW0sIGFjY3VtQnl0ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRmV0Y2hFcnJvcihgQ291bGQgbm90IGNyZWF0ZSBCdWZmZXIgZnJvbSByZXNwb25zZSBib2R5IGZvciAke2RhdGEudXJsfTogJHtlcnJvci5tZXNzYWdlfWAsIFwic3lzdGVtXCIsIGVycm9yKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEZldGNoRXJyb3IoYFByZW1hdHVyZSBjbG9zZSBvZiBzZXJ2ZXIgcmVzcG9uc2Ugd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7ZGF0YS51cmx9YCk7XG4gIH1cbn1cbnZhciBjbG9uZSA9IChpbnN0YW5jZSwgaGlnaFdhdGVyTWFyaykgPT4ge1xuICBsZXQgcDE7XG4gIGxldCBwMjtcbiAgbGV0IHsgYm9keSB9ID0gaW5zdGFuY2VbSU5URVJOQUxTXTtcbiAgaWYgKGluc3RhbmNlLmJvZHlVc2VkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGNsb25lIGJvZHkgYWZ0ZXIgaXQgaXMgdXNlZFwiKTtcbiAgfVxuICBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSAmJiB0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcDEgPSBuZXcgUGFzc1Rocm91Z2goeyBoaWdoV2F0ZXJNYXJrIH0pO1xuICAgIHAyID0gbmV3IFBhc3NUaHJvdWdoKHsgaGlnaFdhdGVyTWFyayB9KTtcbiAgICBib2R5LnBpcGUocDEpO1xuICAgIGJvZHkucGlwZShwMik7XG4gICAgaW5zdGFuY2VbSU5URVJOQUxTXS5zdHJlYW0gPSBwMTtcbiAgICBib2R5ID0gcDI7XG4gIH1cbiAgcmV0dXJuIGJvZHk7XG59O1xudmFyIGdldE5vblNwZWNGb3JtRGF0YUJvdW5kYXJ5ID0gZGVwcmVjYXRlKChib2R5KSA9PiBib2R5LmdldEJvdW5kYXJ5KCksIFwiZm9ybS1kYXRhIGRvZXNuJ3QgZm9sbG93IHRoZSBzcGVjIGFuZCByZXF1aXJlcyBzcGVjaWFsIHRyZWF0bWVudC4gVXNlIGFsdGVybmF0aXZlIHBhY2thZ2VcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbm9kZS1mZXRjaC9ub2RlLWZldGNoL2lzc3Vlcy8xMTY3XCIpO1xudmFyIGV4dHJhY3RDb250ZW50VHlwZSA9IChib2R5LCByZXF1ZXN0KSA9PiB7XG4gIGlmIChib2R5ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04XCI7XG4gIH1cbiAgaWYgKGlzVVJMU2VhcmNoUGFyYW1ldGVycyhib2R5KSkge1xuICAgIHJldHVybiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04XCI7XG4gIH1cbiAgaWYgKGlzQmxvYihib2R5KSkge1xuICAgIHJldHVybiBib2R5LnR5cGUgfHwgbnVsbDtcbiAgfVxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpIHx8IHR5cGVzLmlzQW55QXJyYXlCdWZmZXIoYm9keSkgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKGJvZHkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgIHJldHVybiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9JHtyZXF1ZXN0W0lOVEVSTkFMU10uYm91bmRhcnl9YDtcbiAgfVxuICBpZiAoYm9keSAmJiB0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGBtdWx0aXBhcnQvZm9ybS1kYXRhO2JvdW5kYXJ5PSR7Z2V0Tm9uU3BlY0Zvcm1EYXRhQm91bmRhcnkoYm9keSl9YDtcbiAgfVxuICBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiO1xufTtcbnZhciBnZXRUb3RhbEJ5dGVzID0gKHJlcXVlc3QpID0+IHtcbiAgY29uc3QgeyBib2R5IH0gPSByZXF1ZXN0W0lOVEVSTkFMU107XG4gIGlmIChib2R5ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKGlzQmxvYihib2R5KSkge1xuICAgIHJldHVybiBib2R5LnNpemU7XG4gIH1cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuICAgIHJldHVybiBib2R5Lmxlbmd0aDtcbiAgfVxuICBpZiAoYm9keSAmJiB0eXBlb2YgYm9keS5nZXRMZW5ndGhTeW5jID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gYm9keS5oYXNLbm93bkxlbmd0aCAmJiBib2R5Lmhhc0tub3duTGVuZ3RoKCkgPyBib2R5LmdldExlbmd0aFN5bmMoKSA6IG51bGw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xudmFyIHdyaXRlVG9TdHJlYW0gPSAoZGVzdCwgeyBib2R5IH0pID0+IHtcbiAgaWYgKGJvZHkgPT09IG51bGwpIHtcbiAgICBkZXN0LmVuZCgpO1xuICB9IGVsc2Uge1xuICAgIGJvZHkucGlwZShkZXN0KTtcbiAgfVxufTtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2hlYWRlcnMuanNcbmltcG9ydCB7IHR5cGVzIGFzIHR5cGVzMiB9IGZyb20gXCJub2RlOnV0aWxcIjtcbmltcG9ydCBodHRwIGZyb20gXCJub2RlOmh0dHBcIjtcbnZhciB2YWxpZGF0ZUhlYWRlck5hbWUgPSB0eXBlb2YgaHR0cC52YWxpZGF0ZUhlYWRlck5hbWUgPT09IFwiZnVuY3Rpb25cIiA/IGh0dHAudmFsaWRhdGVIZWFkZXJOYW1lIDogKG5hbWUpID0+IHtcbiAgaWYgKCEvXltcXF5gXFwtXFx3ISMkJSYnKisufH5dKyQvLnRlc3QobmFtZSkpIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBUeXBlRXJyb3IoYEhlYWRlciBuYW1lIG11c3QgYmUgYSB2YWxpZCBIVFRQIHRva2VuIFske25hbWV9XWApO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgXCJjb2RlXCIsIHsgdmFsdWU6IFwiRVJSX0lOVkFMSURfSFRUUF9UT0tFTlwiIH0pO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xudmFyIHZhbGlkYXRlSGVhZGVyVmFsdWUgPSB0eXBlb2YgaHR0cC52YWxpZGF0ZUhlYWRlclZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBodHRwLnZhbGlkYXRlSGVhZGVyVmFsdWUgOiAobmFtZSwgdmFsdWUpID0+IHtcbiAgaWYgKC9bXlxcdFxcdTAwMjAtXFx1MDA3RVxcdTAwODAtXFx1MDBGRl0vLnRlc3QodmFsdWUpKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgY29udGVudCBbXCIke25hbWV9XCJdYCk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCBcImNvZGVcIiwgeyB2YWx1ZTogXCJFUlJfSU5WQUxJRF9DSEFSXCIgfSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG52YXIgSGVhZGVycyA9IGNsYXNzIGV4dGVuZHMgVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3RydWN0b3IoaW5pdCkge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGNvbnN0IHJhdyA9IGluaXQucmF3KCk7XG4gICAgICBmb3IgKGNvbnN0IFtuYW1lLCB2YWx1ZXNdIG9mIE9iamVjdC5lbnRyaWVzKHJhdykpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goLi4udmFsdWVzLm1hcCgodmFsdWUpID0+IFtuYW1lLCB2YWx1ZV0pKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGluaXQgPT0gbnVsbCkge1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGluaXQgPT09IFwib2JqZWN0XCIgJiYgIXR5cGVzMi5pc0JveGVkUHJpbWl0aXZlKGluaXQpKSB7XG4gICAgICBjb25zdCBtZXRob2QgPSBpbml0W1N5bWJvbC5pdGVyYXRvcl07XG4gICAgICBpZiAobWV0aG9kID09IG51bGwpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goLi4uT2JqZWN0LmVudHJpZXMoaW5pdCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJIZWFkZXIgcGFpcnMgbXVzdCBiZSBpdGVyYWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBbLi4uaW5pdF0ubWFwKChwYWlyKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwYWlyICE9PSBcIm9iamVjdFwiIHx8IHR5cGVzMi5pc0JveGVkUHJpbWl0aXZlKHBhaXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGFuIGl0ZXJhYmxlIG9iamVjdFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFsuLi5wYWlyXTtcbiAgICAgICAgfSkubWFwKChwYWlyKSA9PiB7XG4gICAgICAgICAgaWYgKHBhaXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGEgbmFtZS92YWx1ZSB0dXBsZVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFsuLi5wYWlyXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdIZWFkZXJzJzogVGhlIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBvZiB0eXBlICcoc2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+IG9yIHJlY29yZDxCeXRlU3RyaW5nLCBCeXRlU3RyaW5nPilcIik7XG4gICAgfVxuICAgIHJlc3VsdCA9IHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0Lm1hcCgoW25hbWUsIHZhbHVlXSkgPT4ge1xuICAgICAgdmFsaWRhdGVIZWFkZXJOYW1lKG5hbWUpO1xuICAgICAgdmFsaWRhdGVIZWFkZXJWYWx1ZShuYW1lLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgIHJldHVybiBbU3RyaW5nKG5hbWUpLnRvTG93ZXJDYXNlKCksIFN0cmluZyh2YWx1ZSldO1xuICAgIH0pIDogdm9pZCAwO1xuICAgIHN1cGVyKHJlc3VsdCk7XG4gICAgcmV0dXJuIG5ldyBQcm94eSh0aGlzLCB7XG4gICAgICBnZXQodGFyZ2V0LCBwLCByZWNlaXZlcikge1xuICAgICAgICBzd2l0Y2ggKHApIHtcbiAgICAgICAgICBjYXNlIFwiYXBwZW5kXCI6XG4gICAgICAgICAgY2FzZSBcInNldFwiOlxuICAgICAgICAgICAgcmV0dXJuIChuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUhlYWRlck5hbWUobmFtZSk7XG4gICAgICAgICAgICAgIHZhbGlkYXRlSGVhZGVyVmFsdWUobmFtZSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICAgIHJldHVybiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlW3BdLmNhbGwodGFyZ2V0LCBTdHJpbmcobmFtZSkudG9Mb3dlckNhc2UoKSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIGNhc2UgXCJkZWxldGVcIjpcbiAgICAgICAgICBjYXNlIFwiaGFzXCI6XG4gICAgICAgICAgY2FzZSBcImdldEFsbFwiOlxuICAgICAgICAgICAgcmV0dXJuIChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlSGVhZGVyTmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGVbcF0uY2FsbCh0YXJnZXQsIFN0cmluZyhuYW1lKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgY2FzZSBcImtleXNcIjpcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgIHRhcmdldC5zb3J0KCk7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgU2V0KFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUua2V5cy5jYWxsKHRhcmdldCkpLmtleXMoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHAsIHJlY2VpdmVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBbU3ltYm9sLnRvU3RyaW5nVGFnXSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH1cbiAgZ2V0KG5hbWUpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEFsbChuYW1lKTtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCB2YWx1ZSA9IHZhbHVlcy5qb2luKFwiLCBcIik7XG4gICAgaWYgKC9eY29udGVudC1lbmNvZGluZyQvaS50ZXN0KG5hbWUpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnID0gdm9pZCAwKSB7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIHRoaXMua2V5cygpKSB7XG4gICAgICBSZWZsZWN0LmFwcGx5KGNhbGxiYWNrLCB0aGlzQXJnLCBbdGhpcy5nZXQobmFtZSksIG5hbWUsIHRoaXNdKTtcbiAgICB9XG4gIH1cbiAgKnZhbHVlcygpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy5rZXlzKCkpIHtcbiAgICAgIHlpZWxkIHRoaXMuZ2V0KG5hbWUpO1xuICAgIH1cbiAgfVxuICAqZW50cmllcygpIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgdGhpcy5rZXlzKCkpIHtcbiAgICAgIHlpZWxkIFtuYW1lLCB0aGlzLmdldChuYW1lKV07XG4gICAgfVxuICB9XG4gIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXMoKTtcbiAgfVxuICByYXcoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmtleXMoKV0ucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLmdldEFsbChrZXkpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCB7fSk7XG4gIH1cbiAgW1N5bWJvbC5mb3IoXCJub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbVwiKV0oKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmtleXMoKV0ucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5nZXRBbGwoa2V5KTtcbiAgICAgIGlmIChrZXkgPT09IFwiaG9zdFwiKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZXMubGVuZ3RoID4gMSA/IHZhbHVlcyA6IHZhbHVlc1swXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30pO1xuICB9XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSGVhZGVycy5wcm90b3R5cGUsIFtcImdldFwiLCBcImVudHJpZXNcIiwgXCJmb3JFYWNoXCIsIFwidmFsdWVzXCJdLnJlZHVjZSgocmVzdWx0LCBwcm9wZXJ0eSkgPT4ge1xuICByZXN1bHRbcHJvcGVydHldID0geyBlbnVtZXJhYmxlOiB0cnVlIH07XG4gIHJldHVybiByZXN1bHQ7XG59LCB7fSkpO1xuZnVuY3Rpb24gZnJvbVJhd0hlYWRlcnMoaGVhZGVycyA9IFtdKSB7XG4gIHJldHVybiBuZXcgSGVhZGVycyhoZWFkZXJzLnJlZHVjZSgocmVzdWx0LCB2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyYXkuc2xpY2UoaW5kZXgsIGluZGV4ICsgMikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBbXSkuZmlsdGVyKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbGlkYXRlSGVhZGVyTmFtZShuYW1lKTtcbiAgICAgIHZhbGlkYXRlSGVhZGVyVmFsdWUobmFtZSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pKTtcbn1cblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3V0aWxzL2lzLXJlZGlyZWN0LmpzXG52YXIgcmVkaXJlY3RTdGF0dXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldChbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdKTtcbnZhciBpc1JlZGlyZWN0ID0gKGNvZGUpID0+IHtcbiAgcmV0dXJuIHJlZGlyZWN0U3RhdHVzLmhhcyhjb2RlKTtcbn07XG5cbi8vIG5vZGVfbW9kdWxlcy8ucG5wbS9ub2RlLWZldGNoQDMuMS4wL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy9yZXNwb25zZS5qc1xudmFyIElOVEVSTkFMUzIgPSBTeW1ib2woXCJSZXNwb25zZSBpbnRlcm5hbHNcIik7XG52YXIgUmVzcG9uc2UgPSBjbGFzcyBleHRlbmRzIEJvZHkge1xuICBjb25zdHJ1Y3Rvcihib2R5ID0gbnVsbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoYm9keSwgb3B0aW9ucyk7XG4gICAgY29uc3Qgc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgIT0gbnVsbCA/IG9wdGlvbnMuc3RhdHVzIDogMjAwO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpO1xuICAgIGlmIChib2R5ICE9PSBudWxsICYmICFoZWFkZXJzLmhhcyhcIkNvbnRlbnQtVHlwZVwiKSkge1xuICAgICAgY29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoYm9keSwgdGhpcyk7XG4gICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgY29udGVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzW0lOVEVSTkFMUzJdID0ge1xuICAgICAgdHlwZTogXCJkZWZhdWx0XCIsXG4gICAgICB1cmw6IG9wdGlvbnMudXJsLFxuICAgICAgc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogb3B0aW9ucy5zdGF0dXNUZXh0IHx8IFwiXCIsXG4gICAgICBoZWFkZXJzLFxuICAgICAgY291bnRlcjogb3B0aW9ucy5jb3VudGVyLFxuICAgICAgaGlnaFdhdGVyTWFyazogb3B0aW9ucy5oaWdoV2F0ZXJNYXJrXG4gICAgfTtcbiAgfVxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFMyXS50eXBlO1xuICB9XG4gIGdldCB1cmwoKSB7XG4gICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTMl0udXJsIHx8IFwiXCI7XG4gIH1cbiAgZ2V0IHN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFMyXS5zdGF0dXM7XG4gIH1cbiAgZ2V0IG9rKCkge1xuICAgIHJldHVybiB0aGlzW0lOVEVSTkFMUzJdLnN0YXR1cyA+PSAyMDAgJiYgdGhpc1tJTlRFUk5BTFMyXS5zdGF0dXMgPCAzMDA7XG4gIH1cbiAgZ2V0IHJlZGlyZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTMl0uY291bnRlciA+IDA7XG4gIH1cbiAgZ2V0IHN0YXR1c1RleHQoKSB7XG4gICAgcmV0dXJuIHRoaXNbSU5URVJOQUxTMl0uc3RhdHVzVGV4dDtcbiAgfVxuICBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFMyXS5oZWFkZXJzO1xuICB9XG4gIGdldCBoaWdoV2F0ZXJNYXJrKCkge1xuICAgIHJldHVybiB0aGlzW0lOVEVSTkFMUzJdLmhpZ2hXYXRlck1hcms7XG4gIH1cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShjbG9uZSh0aGlzLCB0aGlzLmhpZ2hXYXRlck1hcmspLCB7XG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICB1cmw6IHRoaXMudXJsLFxuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIG9rOiB0aGlzLm9rLFxuICAgICAgcmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgaGlnaFdhdGVyTWFyazogdGhpcy5oaWdoV2F0ZXJNYXJrXG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIHJlZGlyZWN0KHVybCwgc3RhdHVzID0gMzAyKSB7XG4gICAgaWYgKCFpc1JlZGlyZWN0KHN0YXR1cykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcInJlZGlyZWN0XCIgb24gXCJyZXNwb25zZVwiOiBJbnZhbGlkIHN0YXR1cyBjb2RlJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBsb2NhdGlvbjogbmV3IFVSTCh1cmwpLnRvU3RyaW5nKClcbiAgICAgIH0sXG4gICAgICBzdGF0dXNcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZXJyb3IoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwgeyBzdGF0dXM6IDAsIHN0YXR1c1RleHQ6IFwiXCIgfSk7XG4gICAgcmVzcG9uc2VbSU5URVJOQUxTMl0udHlwZSA9IFwiZXJyb3JcIjtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiBcIlJlc3BvbnNlXCI7XG4gIH1cbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXNwb25zZS5wcm90b3R5cGUsIHtcbiAgdHlwZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIHVybDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIHN0YXR1czogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIG9rOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgcmVkaXJlY3RlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIHN0YXR1c1RleHQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICBoZWFkZXJzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgY2xvbmU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3JlcXVlc3QuanNcbmltcG9ydCB7IGZvcm1hdCBhcyBmb3JtYXRVcmwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3V0aWxzL2dldC1zZWFyY2guanNcbnZhciBnZXRTZWFyY2ggPSAocGFyc2VkVVJMKSA9PiB7XG4gIGlmIChwYXJzZWRVUkwuc2VhcmNoKSB7XG4gICAgcmV0dXJuIHBhcnNlZFVSTC5zZWFyY2g7XG4gIH1cbiAgY29uc3QgbGFzdE9mZnNldCA9IHBhcnNlZFVSTC5ocmVmLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGhhc2ggPSBwYXJzZWRVUkwuaGFzaCB8fCAocGFyc2VkVVJMLmhyZWZbbGFzdE9mZnNldF0gPT09IFwiI1wiID8gXCIjXCIgOiBcIlwiKTtcbiAgcmV0dXJuIHBhcnNlZFVSTC5ocmVmW2xhc3RPZmZzZXQgLSBoYXNoLmxlbmd0aF0gPT09IFwiP1wiID8gXCI/XCIgOiBcIlwiO1xufTtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL3V0aWxzL3JlZmVycmVyLmpzXG5pbXBvcnQgeyBpc0lQIH0gZnJvbSBcIm5ldFwiO1xuZnVuY3Rpb24gc3RyaXBVUkxGb3JVc2VBc0FSZWZlcnJlcih1cmwsIG9yaWdpbk9ubHkgPSBmYWxzZSkge1xuICBpZiAodXJsID09IG51bGwpIHtcbiAgICByZXR1cm4gXCJuby1yZWZlcnJlclwiO1xuICB9XG4gIHVybCA9IG5ldyBVUkwodXJsKTtcbiAgaWYgKC9eKGFib3V0fGJsb2J8ZGF0YSk6JC8udGVzdCh1cmwucHJvdG9jb2wpKSB7XG4gICAgcmV0dXJuIFwibm8tcmVmZXJyZXJcIjtcbiAgfVxuICB1cmwudXNlcm5hbWUgPSBcIlwiO1xuICB1cmwucGFzc3dvcmQgPSBcIlwiO1xuICB1cmwuaGFzaCA9IFwiXCI7XG4gIGlmIChvcmlnaW5Pbmx5KSB7XG4gICAgdXJsLnBhdGhuYW1lID0gXCJcIjtcbiAgICB1cmwuc2VhcmNoID0gXCJcIjtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxudmFyIFJlZmVycmVyUG9saWN5ID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoW1xuICBcIlwiLFxuICBcIm5vLXJlZmVycmVyXCIsXG4gIFwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIixcbiAgXCJzYW1lLW9yaWdpblwiLFxuICBcIm9yaWdpblwiLFxuICBcInN0cmljdC1vcmlnaW5cIixcbiAgXCJvcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIixcbiAgXCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIsXG4gIFwidW5zYWZlLXVybFwiXG5dKTtcbnZhciBERUZBVUxUX1JFRkVSUkVSX1BPTElDWSA9IFwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiO1xuZnVuY3Rpb24gdmFsaWRhdGVSZWZlcnJlclBvbGljeShyZWZlcnJlclBvbGljeSkge1xuICBpZiAoIVJlZmVycmVyUG9saWN5LmhhcyhyZWZlcnJlclBvbGljeSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHJlZmVycmVyUG9saWN5OiAke3JlZmVycmVyUG9saWN5fWApO1xuICB9XG4gIHJldHVybiByZWZlcnJlclBvbGljeTtcbn1cbmZ1bmN0aW9uIGlzT3JpZ2luUG90ZW50aWFsbHlUcnVzdHdvcnRoeSh1cmwpIHtcbiAgaWYgKC9eKGh0dHB8d3MpczokLy50ZXN0KHVybC5wcm90b2NvbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBob3N0SXAgPSB1cmwuaG9zdC5yZXBsYWNlKC8oXlxcWyl8KF0kKS9nLCBcIlwiKTtcbiAgY29uc3QgaG9zdElQVmVyc2lvbiA9IGlzSVAoaG9zdElwKTtcbiAgaWYgKGhvc3RJUFZlcnNpb24gPT09IDQgJiYgL14xMjdcXC4vLnRlc3QoaG9zdElwKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChob3N0SVBWZXJzaW9uID09PSA2ICYmIC9eKCgoMCs6KXs3fSl8KDo6KDArOil7MCw2fSkpMCoxJC8udGVzdChob3N0SXApKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKC9eKC4rXFwuKSpsb2NhbGhvc3QkLy50ZXN0KHVybC5ob3N0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodXJsLnByb3RvY29sID09PSBcImZpbGU6XCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc1VybFBvdGVudGlhbGx5VHJ1c3R3b3J0aHkodXJsKSB7XG4gIGlmICgvXmFib3V0OihibGFua3xzcmNkb2MpJC8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHVybC5wcm90b2NvbCA9PT0gXCJkYXRhOlwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKC9eKGJsb2J8ZmlsZXN5c3RlbSk6JC8udGVzdCh1cmwucHJvdG9jb2wpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGlzT3JpZ2luUG90ZW50aWFsbHlUcnVzdHdvcnRoeSh1cmwpO1xufVxuZnVuY3Rpb24gZGV0ZXJtaW5lUmVxdWVzdHNSZWZlcnJlcihyZXF1ZXN0LCB7IHJlZmVycmVyVVJMQ2FsbGJhY2ssIHJlZmVycmVyT3JpZ2luQ2FsbGJhY2sgfSA9IHt9KSB7XG4gIGlmIChyZXF1ZXN0LnJlZmVycmVyID09PSBcIm5vLXJlZmVycmVyXCIgfHwgcmVxdWVzdC5yZWZlcnJlclBvbGljeSA9PT0gXCJcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHBvbGljeSA9IHJlcXVlc3QucmVmZXJyZXJQb2xpY3k7XG4gIGlmIChyZXF1ZXN0LnJlZmVycmVyID09PSBcImFib3V0OmNsaWVudFwiKSB7XG4gICAgcmV0dXJuIFwibm8tcmVmZXJyZXJcIjtcbiAgfVxuICBjb25zdCByZWZlcnJlclNvdXJjZSA9IHJlcXVlc3QucmVmZXJyZXI7XG4gIGxldCByZWZlcnJlclVSTCA9IHN0cmlwVVJMRm9yVXNlQXNBUmVmZXJyZXIocmVmZXJyZXJTb3VyY2UpO1xuICBsZXQgcmVmZXJyZXJPcmlnaW4gPSBzdHJpcFVSTEZvclVzZUFzQVJlZmVycmVyKHJlZmVycmVyU291cmNlLCB0cnVlKTtcbiAgaWYgKHJlZmVycmVyVVJMLnRvU3RyaW5nKCkubGVuZ3RoID4gNDA5Nikge1xuICAgIHJlZmVycmVyVVJMID0gcmVmZXJyZXJPcmlnaW47XG4gIH1cbiAgaWYgKHJlZmVycmVyVVJMQ2FsbGJhY2spIHtcbiAgICByZWZlcnJlclVSTCA9IHJlZmVycmVyVVJMQ2FsbGJhY2socmVmZXJyZXJVUkwpO1xuICB9XG4gIGlmIChyZWZlcnJlck9yaWdpbkNhbGxiYWNrKSB7XG4gICAgcmVmZXJyZXJPcmlnaW4gPSByZWZlcnJlck9yaWdpbkNhbGxiYWNrKHJlZmVycmVyT3JpZ2luKTtcbiAgfVxuICBjb25zdCBjdXJyZW50VVJMID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIHN3aXRjaCAocG9saWN5KSB7XG4gICAgY2FzZSBcIm5vLXJlZmVycmVyXCI6XG4gICAgICByZXR1cm4gXCJuby1yZWZlcnJlclwiO1xuICAgIGNhc2UgXCJvcmlnaW5cIjpcbiAgICAgIHJldHVybiByZWZlcnJlck9yaWdpbjtcbiAgICBjYXNlIFwidW5zYWZlLXVybFwiOlxuICAgICAgcmV0dXJuIHJlZmVycmVyVVJMO1xuICAgIGNhc2UgXCJzdHJpY3Qtb3JpZ2luXCI6XG4gICAgICBpZiAoaXNVcmxQb3RlbnRpYWxseVRydXN0d29ydGh5KHJlZmVycmVyVVJMKSAmJiAhaXNVcmxQb3RlbnRpYWxseVRydXN0d29ydGh5KGN1cnJlbnRVUkwpKSB7XG4gICAgICAgIHJldHVybiBcIm5vLXJlZmVycmVyXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVmZXJyZXJPcmlnaW4udG9TdHJpbmcoKTtcbiAgICBjYXNlIFwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiOlxuICAgICAgaWYgKHJlZmVycmVyVVJMLm9yaWdpbiA9PT0gY3VycmVudFVSTC5vcmlnaW4pIHtcbiAgICAgICAgcmV0dXJuIHJlZmVycmVyVVJMO1xuICAgICAgfVxuICAgICAgaWYgKGlzVXJsUG90ZW50aWFsbHlUcnVzdHdvcnRoeShyZWZlcnJlclVSTCkgJiYgIWlzVXJsUG90ZW50aWFsbHlUcnVzdHdvcnRoeShjdXJyZW50VVJMKSkge1xuICAgICAgICByZXR1cm4gXCJuby1yZWZlcnJlclwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlZmVycmVyT3JpZ2luO1xuICAgIGNhc2UgXCJzYW1lLW9yaWdpblwiOlxuICAgICAgaWYgKHJlZmVycmVyVVJMLm9yaWdpbiA9PT0gY3VycmVudFVSTC5vcmlnaW4pIHtcbiAgICAgICAgcmV0dXJuIHJlZmVycmVyVVJMO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwibm8tcmVmZXJyZXJcIjtcbiAgICBjYXNlIFwib3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCI6XG4gICAgICBpZiAocmVmZXJyZXJVUkwub3JpZ2luID09PSBjdXJyZW50VVJMLm9yaWdpbikge1xuICAgICAgICByZXR1cm4gcmVmZXJyZXJVUkw7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVmZXJyZXJPcmlnaW47XG4gICAgY2FzZSBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI6XG4gICAgICBpZiAoaXNVcmxQb3RlbnRpYWxseVRydXN0d29ydGh5KHJlZmVycmVyVVJMKSAmJiAhaXNVcmxQb3RlbnRpYWxseVRydXN0d29ydGh5KGN1cnJlbnRVUkwpKSB7XG4gICAgICAgIHJldHVybiBcIm5vLXJlZmVycmVyXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVmZXJyZXJVUkw7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgcmVmZXJyZXJQb2xpY3k6ICR7cG9saWN5fWApO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZVJlZmVycmVyUG9saWN5RnJvbUhlYWRlcihoZWFkZXJzKSB7XG4gIGNvbnN0IHBvbGljeVRva2VucyA9IChoZWFkZXJzLmdldChcInJlZmVycmVyLXBvbGljeVwiKSB8fCBcIlwiKS5zcGxpdCgvWyxcXHNdKy8pO1xuICBsZXQgcG9saWN5ID0gXCJcIjtcbiAgZm9yIChjb25zdCB0b2tlbiBvZiBwb2xpY3lUb2tlbnMpIHtcbiAgICBpZiAodG9rZW4gJiYgUmVmZXJyZXJQb2xpY3kuaGFzKHRva2VuKSkge1xuICAgICAgcG9saWN5ID0gdG9rZW47XG4gICAgfVxuICB9XG4gIHJldHVybiBwb2xpY3k7XG59XG5cbi8vIG5vZGVfbW9kdWxlcy8ucG5wbS9ub2RlLWZldGNoQDMuMS4wL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL3NyYy9yZXF1ZXN0LmpzXG52YXIgSU5URVJOQUxTMyA9IFN5bWJvbChcIlJlcXVlc3QgaW50ZXJuYWxzXCIpO1xudmFyIGlzUmVxdWVzdCA9IChvYmplY3QpID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iamVjdFtJTlRFUk5BTFMzXSA9PT0gXCJvYmplY3RcIjtcbn07XG52YXIgUmVxdWVzdCA9IGNsYXNzIGV4dGVuZHMgQm9keSB7XG4gIGNvbnN0cnVjdG9yKGlucHV0LCBpbml0ID0ge30pIHtcbiAgICBsZXQgcGFyc2VkVVJMO1xuICAgIGlmIChpc1JlcXVlc3QoaW5wdXQpKSB7XG4gICAgICBwYXJzZWRVUkwgPSBuZXcgVVJMKGlucHV0LnVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZFVSTCA9IG5ldyBVUkwoaW5wdXQpO1xuICAgICAgaW5wdXQgPSB7fTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZFVSTC51c2VybmFtZSAhPT0gXCJcIiB8fCBwYXJzZWRVUkwucGFzc3dvcmQgIT09IFwiXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7cGFyc2VkVVJMfSBpcyBhbiB1cmwgd2l0aCBlbWJlZGRlZCBjcmVkZW50YWlscy5gKTtcbiAgICB9XG4gICAgbGV0IG1ldGhvZCA9IGluaXQubWV0aG9kIHx8IGlucHV0Lm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgIG1ldGhvZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIGlmICgoaW5pdC5ib2R5ICE9IG51bGwgfHwgaXNSZXF1ZXN0KGlucHV0KSkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCAmJiAobWV0aG9kID09PSBcIkdFVFwiIHx8IG1ldGhvZCA9PT0gXCJIRUFEXCIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUmVxdWVzdCB3aXRoIEdFVC9IRUFEIG1ldGhvZCBjYW5ub3QgaGF2ZSBib2R5XCIpO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dEJvZHkgPSBpbml0LmJvZHkgPyBpbml0LmJvZHkgOiBpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwgPyBjbG9uZShpbnB1dCkgOiBudWxsO1xuICAgIHN1cGVyKGlucHV0Qm9keSwge1xuICAgICAgc2l6ZTogaW5pdC5zaXplIHx8IGlucHV0LnNpemUgfHwgMFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbml0LmhlYWRlcnMgfHwgaW5wdXQuaGVhZGVycyB8fCB7fSk7XG4gICAgaWYgKGlucHV0Qm9keSAhPT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoXCJDb250ZW50LVR5cGVcIikpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGlucHV0Qm9keSwgdGhpcyk7XG4gICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgY29udGVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgc2lnbmFsID0gaXNSZXF1ZXN0KGlucHV0KSA/IGlucHV0LnNpZ25hbCA6IG51bGw7XG4gICAgaWYgKFwic2lnbmFsXCIgaW4gaW5pdCkge1xuICAgICAgc2lnbmFsID0gaW5pdC5zaWduYWw7XG4gICAgfVxuICAgIGlmIChzaWduYWwgIT0gbnVsbCAmJiAhaXNBYm9ydFNpZ25hbChzaWduYWwpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgc2lnbmFsIHRvIGJlIGFuIGluc3RhbmNlb2YgQWJvcnRTaWduYWwgb3IgRXZlbnRUYXJnZXRcIik7XG4gICAgfVxuICAgIGxldCByZWZlcnJlciA9IGluaXQucmVmZXJyZXIgPT0gbnVsbCA/IGlucHV0LnJlZmVycmVyIDogaW5pdC5yZWZlcnJlcjtcbiAgICBpZiAocmVmZXJyZXIgPT09IFwiXCIpIHtcbiAgICAgIHJlZmVycmVyID0gXCJuby1yZWZlcnJlclwiO1xuICAgIH0gZWxzZSBpZiAocmVmZXJyZXIpIHtcbiAgICAgIGNvbnN0IHBhcnNlZFJlZmVycmVyID0gbmV3IFVSTChyZWZlcnJlcik7XG4gICAgICByZWZlcnJlciA9IC9eYWJvdXQ6KFxcL1xcLyk/Y2xpZW50JC8udGVzdChwYXJzZWRSZWZlcnJlcikgPyBcImNsaWVudFwiIDogcGFyc2VkUmVmZXJyZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZmVycmVyID0gdm9pZCAwO1xuICAgIH1cbiAgICB0aGlzW0lOVEVSTkFMUzNdID0ge1xuICAgICAgbWV0aG9kLFxuICAgICAgcmVkaXJlY3Q6IGluaXQucmVkaXJlY3QgfHwgaW5wdXQucmVkaXJlY3QgfHwgXCJmb2xsb3dcIixcbiAgICAgIGhlYWRlcnMsXG4gICAgICBwYXJzZWRVUkwsXG4gICAgICBzaWduYWwsXG4gICAgICByZWZlcnJlclxuICAgIH07XG4gICAgdGhpcy5mb2xsb3cgPSBpbml0LmZvbGxvdyA9PT0gdm9pZCAwID8gaW5wdXQuZm9sbG93ID09PSB2b2lkIDAgPyAyMCA6IGlucHV0LmZvbGxvdyA6IGluaXQuZm9sbG93O1xuICAgIHRoaXMuY29tcHJlc3MgPSBpbml0LmNvbXByZXNzID09PSB2b2lkIDAgPyBpbnB1dC5jb21wcmVzcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IGlucHV0LmNvbXByZXNzIDogaW5pdC5jb21wcmVzcztcbiAgICB0aGlzLmNvdW50ZXIgPSBpbml0LmNvdW50ZXIgfHwgaW5wdXQuY291bnRlciB8fCAwO1xuICAgIHRoaXMuYWdlbnQgPSBpbml0LmFnZW50IHx8IGlucHV0LmFnZW50O1xuICAgIHRoaXMuaGlnaFdhdGVyTWFyayA9IGluaXQuaGlnaFdhdGVyTWFyayB8fCBpbnB1dC5oaWdoV2F0ZXJNYXJrIHx8IDE2Mzg0O1xuICAgIHRoaXMuaW5zZWN1cmVIVFRQUGFyc2VyID0gaW5pdC5pbnNlY3VyZUhUVFBQYXJzZXIgfHwgaW5wdXQuaW5zZWN1cmVIVFRQUGFyc2VyIHx8IGZhbHNlO1xuICAgIHRoaXMucmVmZXJyZXJQb2xpY3kgPSBpbml0LnJlZmVycmVyUG9saWN5IHx8IGlucHV0LnJlZmVycmVyUG9saWN5IHx8IFwiXCI7XG4gIH1cbiAgZ2V0IG1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFMzXS5tZXRob2Q7XG4gIH1cbiAgZ2V0IHVybCgpIHtcbiAgICByZXR1cm4gZm9ybWF0VXJsKHRoaXNbSU5URVJOQUxTM10ucGFyc2VkVVJMKTtcbiAgfVxuICBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFMzXS5oZWFkZXJzO1xuICB9XG4gIGdldCByZWRpcmVjdCgpIHtcbiAgICByZXR1cm4gdGhpc1tJTlRFUk5BTFMzXS5yZWRpcmVjdDtcbiAgfVxuICBnZXQgc2lnbmFsKCkge1xuICAgIHJldHVybiB0aGlzW0lOVEVSTkFMUzNdLnNpZ25hbDtcbiAgfVxuICBnZXQgcmVmZXJyZXIoKSB7XG4gICAgaWYgKHRoaXNbSU5URVJOQUxTM10ucmVmZXJyZXIgPT09IFwibm8tcmVmZXJyZXJcIikge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIGlmICh0aGlzW0lOVEVSTkFMUzNdLnJlZmVycmVyID09PSBcImNsaWVudFwiKSB7XG4gICAgICByZXR1cm4gXCJhYm91dDpjbGllbnRcIjtcbiAgICB9XG4gICAgaWYgKHRoaXNbSU5URVJOQUxTM10ucmVmZXJyZXIpIHtcbiAgICAgIHJldHVybiB0aGlzW0lOVEVSTkFMUzNdLnJlZmVycmVyLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgZ2V0IHJlZmVycmVyUG9saWN5KCkge1xuICAgIHJldHVybiB0aGlzW0lOVEVSTkFMUzNdLnJlZmVycmVyUG9saWN5O1xuICB9XG4gIHNldCByZWZlcnJlclBvbGljeShyZWZlcnJlclBvbGljeSkge1xuICAgIHRoaXNbSU5URVJOQUxTM10ucmVmZXJyZXJQb2xpY3kgPSB2YWxpZGF0ZVJlZmVycmVyUG9saWN5KHJlZmVycmVyUG9saWN5KTtcbiAgfVxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcyk7XG4gIH1cbiAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgIHJldHVybiBcIlJlcXVlc3RcIjtcbiAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlcXVlc3QucHJvdG90eXBlLCB7XG4gIG1ldGhvZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIHVybDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICByZWRpcmVjdDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gIGNsb25lOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgc2lnbmFsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcbiAgcmVmZXJyZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuICByZWZlcnJlclBvbGljeTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xudmFyIGdldE5vZGVSZXF1ZXN0T3B0aW9ucyA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IHsgcGFyc2VkVVJMIH0gPSByZXF1ZXN0W0lOVEVSTkFMUzNdO1xuICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVxdWVzdFtJTlRFUk5BTFMzXS5oZWFkZXJzKTtcbiAgaWYgKCFoZWFkZXJzLmhhcyhcIkFjY2VwdFwiKSkge1xuICAgIGhlYWRlcnMuc2V0KFwiQWNjZXB0XCIsIFwiKi8qXCIpO1xuICB9XG4gIGxldCBjb250ZW50TGVuZ3RoVmFsdWUgPSBudWxsO1xuICBpZiAocmVxdWVzdC5ib2R5ID09PSBudWxsICYmIC9eKHBvc3R8cHV0KSQvaS50ZXN0KHJlcXVlc3QubWV0aG9kKSkge1xuICAgIGNvbnRlbnRMZW5ndGhWYWx1ZSA9IFwiMFwiO1xuICB9XG4gIGlmIChyZXF1ZXN0LmJvZHkgIT09IG51bGwpIHtcbiAgICBjb25zdCB0b3RhbEJ5dGVzID0gZ2V0VG90YWxCeXRlcyhyZXF1ZXN0KTtcbiAgICBpZiAodHlwZW9mIHRvdGFsQnl0ZXMgPT09IFwibnVtYmVyXCIgJiYgIU51bWJlci5pc05hTih0b3RhbEJ5dGVzKSkge1xuICAgICAgY29udGVudExlbmd0aFZhbHVlID0gU3RyaW5nKHRvdGFsQnl0ZXMpO1xuICAgIH1cbiAgfVxuICBpZiAoY29udGVudExlbmd0aFZhbHVlKSB7XG4gICAgaGVhZGVycy5zZXQoXCJDb250ZW50LUxlbmd0aFwiLCBjb250ZW50TGVuZ3RoVmFsdWUpO1xuICB9XG4gIGlmIChyZXF1ZXN0LnJlZmVycmVyUG9saWN5ID09PSBcIlwiKSB7XG4gICAgcmVxdWVzdC5yZWZlcnJlclBvbGljeSA9IERFRkFVTFRfUkVGRVJSRVJfUE9MSUNZO1xuICB9XG4gIGlmIChyZXF1ZXN0LnJlZmVycmVyICYmIHJlcXVlc3QucmVmZXJyZXIgIT09IFwibm8tcmVmZXJyZXJcIikge1xuICAgIHJlcXVlc3RbSU5URVJOQUxTM10ucmVmZXJyZXIgPSBkZXRlcm1pbmVSZXF1ZXN0c1JlZmVycmVyKHJlcXVlc3QpO1xuICB9IGVsc2Uge1xuICAgIHJlcXVlc3RbSU5URVJOQUxTM10ucmVmZXJyZXIgPSBcIm5vLXJlZmVycmVyXCI7XG4gIH1cbiAgaWYgKHJlcXVlc3RbSU5URVJOQUxTM10ucmVmZXJyZXIgaW5zdGFuY2VvZiBVUkwpIHtcbiAgICBoZWFkZXJzLnNldChcIlJlZmVyZXJcIiwgcmVxdWVzdC5yZWZlcnJlcik7XG4gIH1cbiAgaWYgKCFoZWFkZXJzLmhhcyhcIlVzZXItQWdlbnRcIikpIHtcbiAgICBoZWFkZXJzLnNldChcIlVzZXItQWdlbnRcIiwgXCJub2RlLWZldGNoXCIpO1xuICB9XG4gIGlmIChyZXF1ZXN0LmNvbXByZXNzICYmICFoZWFkZXJzLmhhcyhcIkFjY2VwdC1FbmNvZGluZ1wiKSkge1xuICAgIGhlYWRlcnMuc2V0KFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcCxkZWZsYXRlLGJyXCIpO1xuICB9XG4gIGxldCB7IGFnZW50IH0gPSByZXF1ZXN0O1xuICBpZiAodHlwZW9mIGFnZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBhZ2VudCA9IGFnZW50KHBhcnNlZFVSTCk7XG4gIH1cbiAgaWYgKCFoZWFkZXJzLmhhcyhcIkNvbm5lY3Rpb25cIikgJiYgIWFnZW50KSB7XG4gICAgaGVhZGVycy5zZXQoXCJDb25uZWN0aW9uXCIsIFwiY2xvc2VcIik7XG4gIH1cbiAgY29uc3Qgc2VhcmNoID0gZ2V0U2VhcmNoKHBhcnNlZFVSTCk7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcGF0aDogcGFyc2VkVVJMLnBhdGhuYW1lICsgc2VhcmNoLFxuICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgaGVhZGVyczogaGVhZGVyc1tTeW1ib2wuZm9yKFwibm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b21cIildKCksXG4gICAgaW5zZWN1cmVIVFRQUGFyc2VyOiByZXF1ZXN0Lmluc2VjdXJlSFRUUFBhcnNlcixcbiAgICBhZ2VudFxuICB9O1xuICByZXR1cm4ge1xuICAgIHBhcnNlZFVSTCxcbiAgICBvcHRpb25zXG4gIH07XG59O1xuXG4vLyBub2RlX21vZHVsZXMvLnBucG0vbm9kZS1mZXRjaEAzLjEuMC9ub2RlX21vZHVsZXMvbm9kZS1mZXRjaC9zcmMvZXJyb3JzL2Fib3J0LWVycm9yLmpzXG52YXIgQWJvcnRFcnJvciA9IGNsYXNzIGV4dGVuZHMgRmV0Y2hCYXNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCB0eXBlID0gXCJhYm9ydGVkXCIpIHtcbiAgICBzdXBlcihtZXNzYWdlLCB0eXBlKTtcbiAgfVxufTtcblxuLy8gbm9kZV9tb2R1bGVzLy5wbnBtL25vZGUtZmV0Y2hAMy4xLjAvbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvc3JjL2luZGV4LmpzXG52YXIgc3VwcG9ydGVkU2NoZW1hcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcImRhdGE6XCIsIFwiaHR0cDpcIiwgXCJodHRwczpcIl0pO1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRpb25zXykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIG9wdGlvbnNfKTtcbiAgICBjb25zdCB7IHBhcnNlZFVSTCwgb3B0aW9ucyB9ID0gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpO1xuICAgIGlmICghc3VwcG9ydGVkU2NoZW1hcy5oYXMocGFyc2VkVVJMLnByb3RvY29sKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgbm9kZS1mZXRjaCBjYW5ub3QgbG9hZCAke3VybH0uIFVSTCBzY2hlbWUgXCIke3BhcnNlZFVSTC5wcm90b2NvbC5yZXBsYWNlKC86JC8sIFwiXCIpfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG4gICAgfVxuICAgIGlmIChwYXJzZWRVUkwucHJvdG9jb2wgPT09IFwiZGF0YTpcIikge1xuICAgICAgY29uc3QgZGF0YSA9IGRpc3RfZGVmYXVsdChyZXF1ZXN0LnVybCk7XG4gICAgICBjb25zdCByZXNwb25zZTIgPSBuZXcgUmVzcG9uc2UoZGF0YSwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IGRhdGEudHlwZUZ1bGwgfSB9KTtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VuZCA9IChwYXJzZWRVUkwucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIgPyBodHRwcyA6IGh0dHAyKS5yZXF1ZXN0O1xuICAgIGNvbnN0IHsgc2lnbmFsIH0gPSByZXF1ZXN0O1xuICAgIGxldCByZXNwb25zZSA9IG51bGw7XG4gICAgY29uc3QgYWJvcnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBBYm9ydEVycm9yKFwiVGhlIG9wZXJhdGlvbiB3YXMgYWJvcnRlZC5cIik7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgaWYgKHJlcXVlc3QuYm9keSAmJiByZXF1ZXN0LmJvZHkgaW5zdGFuY2VvZiBTdHJlYW0yLlJlYWRhYmxlKSB7XG4gICAgICAgIHJlcXVlc3QuYm9keS5kZXN0cm95KGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmJvZHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2UuYm9keS5lbWl0KFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgIH07XG4gICAgaWYgKHNpZ25hbCAmJiBzaWduYWwuYWJvcnRlZCkge1xuICAgICAgYWJvcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWJvcnRBbmRGaW5hbGl6ZSA9ICgpID0+IHtcbiAgICAgIGFib3J0KCk7XG4gICAgICBmaW5hbGl6ZSgpO1xuICAgIH07XG4gICAgY29uc3QgcmVxdWVzdF8gPSBzZW5kKHBhcnNlZFVSTCwgb3B0aW9ucyk7XG4gICAgaWYgKHNpZ25hbCkge1xuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBhYm9ydEFuZEZpbmFsaXplKTtcbiAgICB9XG4gICAgY29uc3QgZmluYWxpemUgPSAoKSA9PiB7XG4gICAgICByZXF1ZXN0Xy5hYm9ydCgpO1xuICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGFib3J0QW5kRmluYWxpemUpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxdWVzdF8ub24oXCJlcnJvclwiLCAoZXJyb3IpID0+IHtcbiAgICAgIHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVxdWVzdCB0byAke3JlcXVlc3QudXJsfSBmYWlsZWQsIHJlYXNvbjogJHtlcnJvci5tZXNzYWdlfWAsIFwic3lzdGVtXCIsIGVycm9yKSk7XG4gICAgICBmaW5hbGl6ZSgpO1xuICAgIH0pO1xuICAgIGZpeFJlc3BvbnNlQ2h1bmtlZFRyYW5zZmVyQmFkRW5kaW5nKHJlcXVlc3RfLCAoZXJyb3IpID0+IHtcbiAgICAgIHJlc3BvbnNlLmJvZHkuZGVzdHJveShlcnJvcik7XG4gICAgfSk7XG4gICAgaWYgKHByb2Nlc3MudmVyc2lvbiA8IFwidjE0XCIpIHtcbiAgICAgIHJlcXVlc3RfLm9uKFwic29ja2V0XCIsIChzKSA9PiB7XG4gICAgICAgIGxldCBlbmRlZFdpdGhFdmVudHNDb3VudDtcbiAgICAgICAgcy5wcmVwZW5kTGlzdGVuZXIoXCJlbmRcIiwgKCkgPT4ge1xuICAgICAgICAgIGVuZGVkV2l0aEV2ZW50c0NvdW50ID0gcy5fZXZlbnRzQ291bnQ7XG4gICAgICAgIH0pO1xuICAgICAgICBzLnByZXBlbmRMaXN0ZW5lcihcImNsb3NlXCIsIChoYWRFcnJvcikgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZSAmJiBlbmRlZFdpdGhFdmVudHNDb3VudCA8IHMuX2V2ZW50c0NvdW50ICYmICFoYWRFcnJvcikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJQcmVtYXR1cmUgY2xvc2VcIik7XG4gICAgICAgICAgICBlcnJvci5jb2RlID0gXCJFUlJfU1RSRUFNX1BSRU1BVFVSRV9DTE9TRVwiO1xuICAgICAgICAgICAgcmVzcG9uc2UuYm9keS5lbWl0KFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVxdWVzdF8ub24oXCJyZXNwb25zZVwiLCAocmVzcG9uc2VfKSA9PiB7XG4gICAgICByZXF1ZXN0Xy5zZXRUaW1lb3V0KDApO1xuICAgICAgY29uc3QgaGVhZGVycyA9IGZyb21SYXdIZWFkZXJzKHJlc3BvbnNlXy5yYXdIZWFkZXJzKTtcbiAgICAgIGlmIChpc1JlZGlyZWN0KHJlc3BvbnNlXy5zdGF0dXNDb2RlKSkge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIik7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uVVJMID0gbG9jYXRpb24gPT09IG51bGwgPyBudWxsIDogbmV3IFVSTChsb2NhdGlvbiwgcmVxdWVzdC51cmwpO1xuICAgICAgICBzd2l0Y2ggKHJlcXVlc3QucmVkaXJlY3QpIHtcbiAgICAgICAgICBjYXNlIFwiZXJyb3JcIjpcbiAgICAgICAgICAgIHJlamVjdChuZXcgRmV0Y2hFcnJvcihgdXJpIHJlcXVlc3RlZCByZXNwb25kcyB3aXRoIGEgcmVkaXJlY3QsIHJlZGlyZWN0IG1vZGUgaXMgc2V0IHRvIGVycm9yOiAke3JlcXVlc3QudXJsfWAsIFwibm8tcmVkaXJlY3RcIikpO1xuICAgICAgICAgICAgZmluYWxpemUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICBjYXNlIFwibWFudWFsXCI6XG4gICAgICAgICAgICBpZiAobG9jYXRpb25VUkwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCBsb2NhdGlvblVSTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiZm9sbG93XCI6IHtcbiAgICAgICAgICAgIGlmIChsb2NhdGlvblVSTCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LmNvdW50ZXIgPj0gcmVxdWVzdC5mb2xsb3cpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBGZXRjaEVycm9yKGBtYXhpbXVtIHJlZGlyZWN0IHJlYWNoZWQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgXCJtYXgtcmVkaXJlY3RcIikpO1xuICAgICAgICAgICAgICBmaW5hbGl6ZSgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMocmVxdWVzdC5oZWFkZXJzKSxcbiAgICAgICAgICAgICAgZm9sbG93OiByZXF1ZXN0LmZvbGxvdyxcbiAgICAgICAgICAgICAgY291bnRlcjogcmVxdWVzdC5jb3VudGVyICsgMSxcbiAgICAgICAgICAgICAgYWdlbnQ6IHJlcXVlc3QuYWdlbnQsXG4gICAgICAgICAgICAgIGNvbXByZXNzOiByZXF1ZXN0LmNvbXByZXNzLFxuICAgICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgICBib2R5OiBjbG9uZShyZXF1ZXN0KSxcbiAgICAgICAgICAgICAgc2lnbmFsOiByZXF1ZXN0LnNpZ25hbCxcbiAgICAgICAgICAgICAgc2l6ZTogcmVxdWVzdC5zaXplLFxuICAgICAgICAgICAgICByZWZlcnJlcjogcmVxdWVzdC5yZWZlcnJlcixcbiAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6IHJlcXVlc3QucmVmZXJyZXJQb2xpY3lcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VfLnN0YXR1c0NvZGUgIT09IDMwMyAmJiByZXF1ZXN0LmJvZHkgJiYgb3B0aW9uc18uYm9keSBpbnN0YW5jZW9mIFN0cmVhbTIuUmVhZGFibGUpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBGZXRjaEVycm9yKFwiQ2Fubm90IGZvbGxvdyByZWRpcmVjdCB3aXRoIGJvZHkgYmVpbmcgYSByZWFkYWJsZSBzdHJlYW1cIiwgXCJ1bnN1cHBvcnRlZC1yZWRpcmVjdFwiKSk7XG4gICAgICAgICAgICAgIGZpbmFsaXplKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNwb25zZV8uc3RhdHVzQ29kZSA9PT0gMzAzIHx8IChyZXNwb25zZV8uc3RhdHVzQ29kZSA9PT0gMzAxIHx8IHJlc3BvbnNlXy5zdGF0dXNDb2RlID09PSAzMDIpICYmIHJlcXVlc3QubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5tZXRob2QgPSBcIkdFVFwiO1xuICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ID0gdm9pZCAwO1xuICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9ucy5oZWFkZXJzLmRlbGV0ZShcImNvbnRlbnQtbGVuZ3RoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VSZWZlcnJlclBvbGljeSA9IHBhcnNlUmVmZXJyZXJQb2xpY3lGcm9tSGVhZGVyKGhlYWRlcnMpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlUmVmZXJyZXJQb2xpY3kpIHtcbiAgICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMucmVmZXJyZXJQb2xpY3kgPSByZXNwb25zZVJlZmVycmVyUG9saWN5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShmZXRjaChuZXcgUmVxdWVzdChsb2NhdGlvblVSTCwgcmVxdWVzdE9wdGlvbnMpKSk7XG4gICAgICAgICAgICBmaW5hbGl6ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKGBSZWRpcmVjdCBvcHRpb24gJyR7cmVxdWVzdC5yZWRpcmVjdH0nIGlzIG5vdCBhIHZhbGlkIHZhbHVlIG9mIFJlcXVlc3RSZWRpcmVjdGApKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNpZ25hbCkge1xuICAgICAgICByZXNwb25zZV8ub25jZShcImVuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBhYm9ydEFuZEZpbmFsaXplKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsZXQgYm9keSA9IHB1bXAocmVzcG9uc2VfLCBuZXcgUGFzc1Rocm91Z2gyKCksIHJlamVjdCk7XG4gICAgICBpZiAocHJvY2Vzcy52ZXJzaW9uIDwgXCJ2MTIuMTBcIikge1xuICAgICAgICByZXNwb25zZV8ub24oXCJhYm9ydGVkXCIsIGFib3J0QW5kRmluYWxpemUpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2VPcHRpb25zID0ge1xuICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlXy5zdGF0dXNDb2RlLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZV8uc3RhdHVzTWVzc2FnZSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgc2l6ZTogcmVxdWVzdC5zaXplLFxuICAgICAgICBjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIsXG4gICAgICAgIGhpZ2hXYXRlck1hcms6IHJlcXVlc3QuaGlnaFdhdGVyTWFya1xuICAgICAgfTtcbiAgICAgIGNvbnN0IGNvZGluZ3MgPSBoZWFkZXJzLmdldChcIkNvbnRlbnQtRW5jb2RpbmdcIik7XG4gICAgICBpZiAoIXJlcXVlc3QuY29tcHJlc3MgfHwgcmVxdWVzdC5tZXRob2QgPT09IFwiSEVBRFwiIHx8IGNvZGluZ3MgPT09IG51bGwgfHwgcmVzcG9uc2VfLnN0YXR1c0NvZGUgPT09IDIwNCB8fCByZXNwb25zZV8uc3RhdHVzQ29kZSA9PT0gMzA0KSB7XG4gICAgICAgIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB6bGliT3B0aW9ucyA9IHtcbiAgICAgICAgZmx1c2g6IHpsaWIuWl9TWU5DX0ZMVVNILFxuICAgICAgICBmaW5pc2hGbHVzaDogemxpYi5aX1NZTkNfRkxVU0hcbiAgICAgIH07XG4gICAgICBpZiAoY29kaW5ncyA9PT0gXCJnemlwXCIgfHwgY29kaW5ncyA9PT0gXCJ4LWd6aXBcIikge1xuICAgICAgICBib2R5ID0gcHVtcChib2R5LCB6bGliLmNyZWF0ZUd1bnppcCh6bGliT3B0aW9ucyksIHJlamVjdCk7XG4gICAgICAgIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY29kaW5ncyA9PT0gXCJkZWZsYXRlXCIgfHwgY29kaW5ncyA9PT0gXCJ4LWRlZmxhdGVcIikge1xuICAgICAgICBjb25zdCByYXcgPSBwdW1wKHJlc3BvbnNlXywgbmV3IFBhc3NUaHJvdWdoMigpLCByZWplY3QpO1xuICAgICAgICByYXcub25jZShcImRhdGFcIiwgKGNodW5rKSA9PiB7XG4gICAgICAgICAgYm9keSA9IChjaHVua1swXSAmIDE1KSA9PT0gOCA/IHB1bXAoYm9keSwgemxpYi5jcmVhdGVJbmZsYXRlKCksIHJlamVjdCkgOiBwdW1wKGJvZHksIHpsaWIuY3JlYXRlSW5mbGF0ZVJhdygpLCByZWplY3QpO1xuICAgICAgICAgIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlT3B0aW9ucyk7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY29kaW5ncyA9PT0gXCJiclwiKSB7XG4gICAgICAgIGJvZHkgPSBwdW1wKGJvZHksIHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcygpLCByZWplY3QpO1xuICAgICAgICByZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZU9wdGlvbnMpO1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2VPcHRpb25zKTtcbiAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgIH0pO1xuICAgIHdyaXRlVG9TdHJlYW0ocmVxdWVzdF8sIHJlcXVlc3QpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGZpeFJlc3BvbnNlQ2h1bmtlZFRyYW5zZmVyQmFkRW5kaW5nKHJlcXVlc3QsIGVycm9yQ2FsbGJhY2spIHtcbiAgY29uc3QgTEFTVF9DSFVOSyA9IEJ1ZmZlci5mcm9tKFwiMFxcclxcblxcclxcblwiKTtcbiAgbGV0IGlzQ2h1bmtlZFRyYW5zZmVyID0gZmFsc2U7XG4gIGxldCBwcm9wZXJMYXN0Q2h1bmtSZWNlaXZlZCA9IGZhbHNlO1xuICBsZXQgcHJldmlvdXNDaHVuaztcbiAgcmVxdWVzdC5vbihcInJlc3BvbnNlXCIsIChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHsgaGVhZGVycyB9ID0gcmVzcG9uc2U7XG4gICAgaXNDaHVua2VkVHJhbnNmZXIgPSBoZWFkZXJzW1widHJhbnNmZXItZW5jb2RpbmdcIl0gPT09IFwiY2h1bmtlZFwiICYmICFoZWFkZXJzW1wiY29udGVudC1sZW5ndGhcIl07XG4gIH0pO1xuICByZXF1ZXN0Lm9uKFwic29ja2V0XCIsIChzb2NrZXQpID0+IHtcbiAgICBjb25zdCBvblNvY2tldENsb3NlID0gKCkgPT4ge1xuICAgICAgaWYgKGlzQ2h1bmtlZFRyYW5zZmVyICYmICFwcm9wZXJMYXN0Q2h1bmtSZWNlaXZlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIlByZW1hdHVyZSBjbG9zZVwiKTtcbiAgICAgICAgZXJyb3IuY29kZSA9IFwiRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0VcIjtcbiAgICAgICAgZXJyb3JDYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBzb2NrZXQucHJlcGVuZExpc3RlbmVyKFwiY2xvc2VcIiwgb25Tb2NrZXRDbG9zZSk7XG4gICAgcmVxdWVzdC5vbihcImFib3J0XCIsICgpID0+IHtcbiAgICAgIHNvY2tldC5yZW1vdmVMaXN0ZW5lcihcImNsb3NlXCIsIG9uU29ja2V0Q2xvc2UpO1xuICAgIH0pO1xuICAgIHNvY2tldC5vbihcImRhdGFcIiwgKGJ1ZikgPT4ge1xuICAgICAgcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQgPSBCdWZmZXIuY29tcGFyZShidWYuc2xpY2UoLTUpLCBMQVNUX0NIVU5LKSA9PT0gMDtcbiAgICAgIGlmICghcHJvcGVyTGFzdENodW5rUmVjZWl2ZWQgJiYgcHJldmlvdXNDaHVuaykge1xuICAgICAgICBwcm9wZXJMYXN0Q2h1bmtSZWNlaXZlZCA9IEJ1ZmZlci5jb21wYXJlKHByZXZpb3VzQ2h1bmsuc2xpY2UoLTMpLCBMQVNUX0NIVU5LLnNsaWNlKDAsIDMpKSA9PT0gMCAmJiBCdWZmZXIuY29tcGFyZShidWYuc2xpY2UoLTIpLCBMQVNUX0NIVU5LLnNsaWNlKDMpKSA9PT0gMDtcbiAgICAgIH1cbiAgICAgIHByZXZpb3VzQ2h1bmsgPSBidWY7XG4gICAgfSk7XG4gIH0pO1xufVxuZXhwb3J0IHtcbiAgQWJvcnRFcnJvcixcbiAgRmV0Y2hFcnJvcixcbiAgSGVhZGVycyxcbiAgUmVxdWVzdCxcbiAgUmVzcG9uc2UsXG4gIGZldGNoIGFzIGRlZmF1bHQsXG4gIGlzUmVkaXJlY3Rcbn07XG4iLCAiaW1wb3J0IHtjcmVhdGVSZXF1aXJlIGFzIF9fJCRjcmVhdGVSZXF1aXJlfSBmcm9tICdtb2R1bGUnO3ZhciByZXF1aXJlPV9fJCRjcmVhdGVSZXF1aXJlKFwiZmlsZTovLy9Vc2Vycy9lZ29pc3QvZGV2L3Rzbm8vZGlzdC9jbGllbnQuanNcIik7XG5pbXBvcnQge1xuICBjb2xvcnNcbn0gZnJvbSBcIi4vY2h1bmstRkhEWFhPS1kuanNcIjtcblxuXG4vLyBzcmMvY2xpZW50LnRzXG52YXIgZmV0Y2ggPSAodXJsLCBpbml0KSA9PiBpbXBvcnQoXCIuL3NyYy00UTdRNjdDMy5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KHVybCwgaW5pdCkpO1xudmFyIGF4aW9zID0gKGNvbmZpZykgPT4gaW1wb3J0KFwiLi9heGlvcy00RVNUSTZDSy5qc1wiKS50aGVuKChyZXMpID0+IHJlcy5kZWZhdWx0KGNvbmZpZykpO1xuZXhwb3J0IHtcbiAgYXhpb3MsXG4gIGNvbG9ycyxcbiAgZmV0Y2hcbn07XG4iLCAiZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xYClcbiAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLnRoZW4oKGpzb24pID0+IGNvbnNvbGUubG9nKGNvbG9ycy5ncmVlbihKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKSkpKVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUE4RCxVQUMxRCxV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
