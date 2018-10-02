var OGVDemuxerWebMW = function(OGVDemuxerWebMW) {
  OGVDemuxerWebMW = OGVDemuxerWebMW || {};

var a;a||(a=typeof OGVDemuxerWebMW !== 'undefined' ? OGVDemuxerWebMW : {});var ba=a;a.memoryLimit&&(a.TOTAL_MEMORY=ba.memoryLimit);var h={},m;for(m in a)a.hasOwnProperty(m)&&(h[m]=a[m]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(b,c){throw c;};a.preRun=[];a.postRun=[];var n=!1,p=!1,r=!1,t=!1;
if(a.ENVIRONMENT)if("WEB"===a.ENVIRONMENT)n=!0;else if("WORKER"===a.ENVIRONMENT)p=!0;else if("NODE"===a.ENVIRONMENT)r=!0;else if("SHELL"===a.ENVIRONMENT)t=!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else n="object"===typeof window,p="function"===typeof importScripts,r="object"===typeof process&&"function"===typeof require&&!n&&!p,t=!n&&!r&&!p;
if(r){var u,v;a.read=function(b,c){u||(u=require("fs"));v||(v=require("path"));b=v.normalize(b);b=u.readFileSync(b);return c?b:b.toString()};a.readBinary=function(b){b=a.read(b,!0);b.buffer||(b=new Uint8Array(b));assert(b.buffer);return b};1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);process.on("unhandledRejection",function(){process.exit(1)});a.inspect=function(){return"[Emscripten Module object]"}}else if(t)"undefined"!=typeof read&&
(a.read=function(b){return read(b)}),a.readBinary=function(b){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(b));b=read(b,"binary");assert("object"===typeof b);return b},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(b){quit(b)});else if(n||p)a.read=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},p&&(a.readBinary=function(b){var c=
new XMLHttpRequest;c.open("GET",b,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),a.readAsync=function(b,c,e){var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)},"undefined"!=typeof arguments&&(a.arguments=arguments),a.setWindowTitle=function(b){document.title=b};
a.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;a.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||a.print;a.print=a.print;a.printErr=a.printErr;for(m in h)h.hasOwnProperty(m)&&(a[m]=h[m]);h=void 0;function ca(b){var c;c||(c=16);return Math.ceil(b/c)*c}var w=0;function assert(b,c){b||x("Assertion failed: "+c)}
function y(b){var c;if(0===c||!b)return"";for(var e=0,d,f=0;;){d=A[b+f>>0];e|=d;if(0==d&&!c)break;f++;if(c&&f==c)break}c||(c=f);d="";if(128>e){for(;0<c;)e=String.fromCharCode.apply(String,A.subarray(b,b+Math.min(c,1024))),d=d?d+e:e,b+=1024,c-=1024;return d}return da(A,b)}var ea="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function da(b,c){for(var e=c;b[e];)++e;if(16<e-c&&b.subarray&&ea)return ea.decode(b.subarray(c,e));for(e="";;){var d=b[c++];if(!d)return e;if(d&128){var f=b[c++]&63;if(192==(d&224))e+=String.fromCharCode((d&31)<<6|f);else{var k=b[c++]&63;if(224==(d&240))d=(d&15)<<12|f<<6|k;else{var g=b[c++]&63;if(240==(d&248))d=(d&7)<<18|f<<12|k<<6|g;else{var l=b[c++]&63;if(248==(d&252))d=(d&3)<<24|f<<18|k<<12|g<<6|l;else{var q=b[c++]&63;d=(d&1)<<30|f<<24|k<<18|g<<12|l<<6|q}}}65536>d?e+=String.fromCharCode(d):(d-=
65536,e+=String.fromCharCode(55296|d>>10,56320|d&1023))}}else e+=String.fromCharCode(d)}}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function B(b,c){0<b%c&&(b+=c-b%c);return b}var buffer,fa,A,ha,C;
function D(){a.HEAP8=fa=new Int8Array(buffer);a.HEAP16=ha=new Int16Array(buffer);a.HEAP32=C=new Int32Array(buffer);a.HEAPU8=A=new Uint8Array(buffer);a.HEAPU16=new Uint16Array(buffer);a.HEAPU32=new Uint32Array(buffer);a.HEAPF32=new Float32Array(buffer);a.HEAPF64=new Float64Array(buffer)}var E,F,G,H,I,J,K,L;E=F=H=I=J=K=L=0;G=!1;
a.reallocBuffer||(a.reallocBuffer=function(b){try{if(ArrayBuffer.m)var c=ArrayBuffer.m(buffer,b);else{var e=fa;c=new ArrayBuffer(b);(new Int8Array(c)).set(e)}}catch(d){return!1}return ia(c)?c:!1});var M;try{M=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get),M(new ArrayBuffer(4))}catch(b){M=function(c){return c.byteLength}}var N=a.TOTAL_STACK||5242880,O=a.TOTAL_MEMORY||16777216;
O<N&&a.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+O+"! (TOTAL_STACK="+N+")");a.buffer?buffer=a.buffer:("object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:O/65536}),buffer=a.wasmMemory.buffer):buffer=new ArrayBuffer(O),a.buffer=buffer);D();C[0]=1668509029;ha[1]=25459;if(115!==A[2]||99!==A[3])throw"Runtime error: expected the system to be little-endian!";
function P(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c();else{var e=c.o;"number"===typeof e?void 0===c.a?a.dynCall_v(e):a.dynCall_vi(e,c.a):e(void 0===c.a?null:c.a)}}}var ja=[],ka=[],la=[],ma=[],na=[],oa=!1;function pa(){var b=a.preRun.shift();ja.unshift(b)}var Q=0,R=null,S=null;a.preloadedImages={};a.preloadedAudios={};function T(b){return String.prototype.startsWith?b.startsWith("data:application/octet-stream;base64,"):0===b.indexOf("data:application/octet-stream;base64,")}
(function(){function b(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(z){x(z)}}function c(){return a.wasmBinary||!n&&!p||"function"!==typeof fetch?new Promise(function(c){c(b())}):fetch(f,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+f+
"'";return b.arrayBuffer()}).catch(function(){return b()})}function e(b){function d(b){l=b.exports;if(l.memory){b=l.memory;var c=a.buffer;b.byteLength<c.byteLength&&a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");c=new Int8Array(c);(new Int8Array(b)).set(c);a.buffer=buffer=b;D()}a.asm=l;a.usingWasm=!0;Q--;a.monitorRunDependencies&&a.monitorRunDependencies(Q);0==Q&&(null!==R&&(clearInterval(R),R=null),S&&(b=S,S=null,b()))}function e(b){d(b.instance)}
function z(b){c().then(function(b){return WebAssembly.instantiate(b,g)}).then(b).catch(function(b){a.printErr("failed to asynchronously prepare wasm: "+b);x(b)})}if("object"!==typeof WebAssembly)return a.printErr("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return a.printErr("no native wasm Memory in use"),!1;b.memory=a.wasmMemory;g.global={NaN:NaN,Infinity:Infinity};g["global.Math"]=Math;g.env=b;Q++;a.monitorRunDependencies&&a.monitorRunDependencies(Q);if(a.instantiateWasm)try{return a.instantiateWasm(g,
d)}catch(va){return a.printErr("Module.instantiateWasm callback failed with error: "+va),!1}a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||T(f)||"function"!==typeof fetch?z(e):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),g).then(e).catch(function(b){a.printErr("wasm streaming compile failed: "+b);a.printErr("falling back to ArrayBuffer instantiation");z(e)});return{}}var d="ogv-demuxer-webm-wasm.wast",f="ogv-demuxer-webm-wasm.wasm",k="ogv-demuxer-webm-wasm.temp.asm.js";
"function"===typeof a.locateFile&&(T(d)||(d=a.locateFile(d)),T(f)||(f=a.locateFile(f)),T(k)||(k=a.locateFile(k)));var g={global:null,env:null,asm2wasm:{"f64-rem":function(b,c){return b%c},"debugger":function(){debugger}},parent:a},l=null;a.asmPreload=a.asm;var q=a.reallocBuffer;a.reallocBuffer=function(b){if("asmjs"===aa)var c=q(b);else a:{b=B(b,a.usingWasm?65536:16777216);var d=a.buffer.byteLength;if(a.usingWasm)try{c=-1!==a.wasmMemory.grow((b-d)/65536)?a.buffer=a.wasmMemory.buffer:null;break a}catch(ya){c=
null;break a}c=void 0}return c};var aa="";a.asm=function(b,c){if(!c.table){b=a.wasmTableSize;void 0===b&&(b=1024);var d=a.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==d?new WebAssembly.Table({initial:b,maximum:d,element:"anyfunc"}):new WebAssembly.Table({initial:b,element:"anyfunc"}):Array(b);a.wasmTable=c.table}c.memoryBase||(c.memoryBase=a.STATIC_BASE);c.tableBase||(c.tableBase=0);(c=e(c))||x("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");
return c}})();E=1024;F=E+10720;ka.push();a.STATIC_BASE=E;a.STATIC_BUMP=10720;F+=16;var U=0;function V(){U+=4;return C[U-4>>2]}var qa={};function W(b,c){U=c;try{var e=V(),d=V(),f=V();b=0;W.c||(W.c=[null,[],[]],W.i=function(b,c){var d=W.c[b];assert(d);0===c||10===c?((1===b?a.print:a.printErr)(da(d,0)),d.length=0):d.push(c)});for(c=0;c<f;c++){for(var k=C[d+8*c>>2],g=C[d+(8*c+4)>>2],l=0;l<g;l++)W.i(e,A[k+l]);b+=g}return b}catch(q){return"undefined"!==typeof FS&&q instanceof FS.b||x(q),-q.f}}assert(!G);
var ra=F;F=F+4+15&-16;L=ra;H=I=ca(F);J=H+N;K=ca(J);C[L>>2]=K;G=!0;a.wasmTableSize=22;a.wasmMaxTableSize=22;a.g={};
a.h={abort:x,enlargeMemory:function(){var b=a.usingWasm?65536:16777216,c=2147483648-b;if(C[L>>2]>c)return!1;var e=O;for(O=Math.max(O,16777216);O<C[L>>2];)536870912>=O?O=B(2*O,b):O=Math.min(B((3*O+2147483648)/4,b),c);b=a.reallocBuffer(O);if(!b||b.byteLength!=O)return O=e,!1;a.buffer=buffer=b;D();return!0},getTotalMemory:function(){return O},abortOnCannotGrowMemory:function(){x("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+O+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},
___assert_fail:function(b,c,e,d){x("Assertion failed: "+y(b)+", at: "+[c?y(c):"unknown filename",e,d?y(d):"unknown function"])},___setErrNo:function(b){a.___errno_location&&(C[a.___errno_location()>>2]=b);return b},___syscall140:function(b,c){U=c;try{var e=qa.j();V();var d=V(),f=V(),k=V();FS.s(e,d,k);C[f>>2]=e.position;e.l&&0===d&&0===k&&(e.l=null);return 0}catch(g){return"undefined"!==typeof FS&&g instanceof FS.b||x(g),-g.f}},___syscall146:W,___syscall54:function(b,c){U=c;return 0},___syscall6:function(b,
c){U=c;try{var e=qa.j();FS.close(e);return 0}catch(d){return"undefined"!==typeof FS&&d instanceof FS.b||x(d),-d.f}},_abort:function(){a.abort()},_emscripten_memcpy_big:function(b,c,e){A.set(A.subarray(c,c+e),b);return b},_ogvjs_callback_audio_packet:function(b,c,e){a.audioPackets.push({data:a.HEAPU8.buffer.slice?a.HEAPU8.buffer.slice(b,b+c):(new Uint8Array(new Uint8Array(a.HEAPU8.buffer,b,c))).buffer,timestamp:e})},_ogvjs_callback_init_video:function(b,c,e,d,f,k,g,l,q,aa,z){a.videoFormat={width:b,
height:c,chromaWidth:e,chromaHeight:d,cropLeft:l,cropTop:q,cropWidth:k,cropHeight:g,displayWidth:aa,displayHeight:z,fps:f}},_ogvjs_callback_loaded_metadata:function(b,c){function e(b){for(var c="",d=a.HEAPU8;0!=d[b];b++)c+=String.fromCharCode(d[b]);return c}b&&(a.videoCodec=e(b));c&&(a.audioCodec=e(c));b=a._ogv_demuxer_media_duration();a.duration=0<=b?b:NaN;a.loadedMetadata=!0},_ogvjs_callback_seek:function(b,c){if(a.onseek)a.onseek(b+4294967296*c)},_ogvjs_callback_video_packet:function(b,c,e,d,f){a.videoPackets.push({data:a.HEAPU8.buffer.slice?
a.HEAPU8.buffer.slice(b,b+c):(new Uint8Array(new Uint8Array(a.HEAPU8.buffer,b,c))).buffer,timestamp:e,keyframeTimestamp:d,isKeyframe:!!f})},DYNAMICTOP_PTR:L,STACKTOP:I};var sa=a.asm(a.g,a.h,buffer);a.asm=sa;var ia=a._emscripten_replace_memory=function(){return a.asm._emscripten_replace_memory.apply(null,arguments)};a._free=function(){return a.asm._free.apply(null,arguments)};a._malloc=function(){return a.asm._malloc.apply(null,arguments)};
a._ogv_demuxer_destroy=function(){return a.asm._ogv_demuxer_destroy.apply(null,arguments)};a._ogv_demuxer_flush=function(){return a.asm._ogv_demuxer_flush.apply(null,arguments)};a._ogv_demuxer_init=function(){return a.asm._ogv_demuxer_init.apply(null,arguments)};a._ogv_demuxer_keypoint_offset=function(){return a.asm._ogv_demuxer_keypoint_offset.apply(null,arguments)};a._ogv_demuxer_media_duration=function(){return a.asm._ogv_demuxer_media_duration.apply(null,arguments)};
a._ogv_demuxer_media_length=function(){return a.asm._ogv_demuxer_media_length.apply(null,arguments)};a._ogv_demuxer_process=function(){return a.asm._ogv_demuxer_process.apply(null,arguments)};a._ogv_demuxer_receive_input=function(){return a.asm._ogv_demuxer_receive_input.apply(null,arguments)};a._ogv_demuxer_seek_to_keypoint=function(){return a.asm._ogv_demuxer_seek_to_keypoint.apply(null,arguments)};a._ogv_demuxer_seekable=function(){return a.asm._ogv_demuxer_seekable.apply(null,arguments)};
a.asm=sa;a.then=function(b){if(a.calledRun)b(a);else{var c=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){c&&c();b(a)}}return a};function X(b){this.name="ExitStatus";this.message="Program terminated with exit("+b+")";this.status=b}X.prototype=Error();X.prototype.constructor=X;S=function ta(){a.calledRun||ua();a.calledRun||(S=ta)};
function ua(){function b(){if(!a.calledRun&&(a.calledRun=!0,!w)){oa||(oa=!0,P(ka));P(la);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var b=a.postRun.shift();na.unshift(b)}P(na)}}if(!(0<Q)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)pa();P(ja);0<Q||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);
b()},1)):b())}}a.run=ua;a.exit=function(b,c){if(!c||!a.noExitRuntime||0!==b){if(!a.noExitRuntime&&(w=!0,I=void 0,P(ma),a.onExit))a.onExit(b);r&&process.exit(b);a.quit(b,new X(b))}};function x(b){if(a.onAbort)a.onAbort(b);void 0!==b?(a.print(b),a.printErr(b),b=JSON.stringify(b)):b="";w=!0;throw"abort("+b+"). Build with -s ASSERTIONS=1 for more info.";}a.abort=x;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();a.noExitRuntime=!0;ua();
var Y,wa,xa;xa="undefined"===typeof performance||"undefined"===typeof performance.now?Date.now:performance.now.bind(performance);function Z(b){var c=xa();b=b();c=xa()-c;a.cpuTime+=c;return b}a.loadedMetadata=!1;a.videoCodec=null;a.audioCodec=null;a.duration=NaN;a.onseek=null;a.cpuTime=0;a.audioPackets=[];Object.defineProperty(a,"hasAudio",{get:function(){return a.loadedMetadata&&a.audioCodec}});Object.defineProperty(a,"audioReady",{get:function(){return 0<a.audioPackets.length}});
Object.defineProperty(a,"audioTimestamp",{get:function(){return 0<a.audioPackets.length?a.audioPackets[0].timestamp:-1}});a.videoPackets=[];Object.defineProperty(a,"hasVideo",{get:function(){return a.loadedMetadata&&a.videoCodec}});Object.defineProperty(a,"frameReady",{get:function(){return 0<a.videoPackets.length}});Object.defineProperty(a,"frameTimestamp",{get:function(){return 0<a.videoPackets.length?a.videoPackets[0].timestamp:-1}});
Object.defineProperty(a,"keyframeTimestamp",{get:function(){return 0<a.videoPackets.length?a.videoPackets[0].keyframeTimestamp:-1}});Object.defineProperty(a,"nextKeyframeTimestamp",{get:function(){for(var b=0;b<a.videoPackets.length;b++){var c=a.videoPackets[b];if(c.isKeyframe)return c.timestamp}return-1}});Object.defineProperty(a,"processing",{get:function(){return!1}});Object.defineProperty(a,"seekable",{get:function(){return!!a._ogv_demuxer_seekable()}});
a.init=function(b){Z(function(){a._ogv_demuxer_init()});b()};a.receiveInput=function(b,c){Z(function(){var c=b.byteLength;Y&&wa>=c||(Y&&a._free(Y),wa=c,Y=a._malloc(wa));var d=Y;a.HEAPU8.set(new Uint8Array(b),d);a._ogv_demuxer_receive_input(d,c)});c()};a.process=function(b){var c=Z(function(){return a._ogv_demuxer_process()});b(!!c)};a.dequeueVideoPacket=function(b){if(a.videoPackets.length){var c=a.videoPackets.shift().data;b(c)}else b(null)};
a.dequeueAudioPacket=function(b){if(a.audioPackets.length){var c=a.audioPackets.shift().data;b(c)}else b(null)};a.getKeypointOffset=function(b,c){var e=Z(function(){return a._ogv_demuxer_keypoint_offset(1E3*b)});c(e)};a.seekToKeypoint=function(b,c){var e=Z(function(){return a._ogv_demuxer_seek_to_keypoint(1E3*b)});e&&(a.audioPackets.splice(0,a.audioPackets.length),a.videoPackets.splice(0,a.videoPackets.length));c(!!e)};
a.flush=function(b){Z(function(){a.audioPackets.splice(0,a.audioPackets.length);a.videoPackets.splice(0,a.videoPackets.length);a._ogv_demuxer_flush()});b()};a.close=function(){};


  return OGVDemuxerWebMW;
};
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDemuxerWebMW;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return OGVDemuxerWebMW; });
else if (typeof exports === 'object')
  exports["OGVDemuxerWebMW"] = OGVDemuxerWebMW;