!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/hacker_koans/",t(t.s=0)}([function(e,t,n){"use strict";var o=["./app.bundle.js","./font.bundle.js","https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0","https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/fonts/devicon.woff?-hdf3wh","https://fonts.gstatic.com/s/cutivemono/v6/N5odNRruTwjvCM8y77PhQaE8kM4xWR1_1bYURRojRGc.woff2","https://fonts.gstatic.com/s/cutivemono/v6/N5odNRruTwjvCM8y77PhQYgp9Q8gbYrhqGlRav_IXfk.woff2"];self.addEventListener("install",function(e){console.log("[service worker] Installed"),e.waitUntil(caches.open("hacker_koans-v-1.0.6").then(function(e){return console.log("[service worker] Caching"),e.addAll(o)}))}),self.addEventListener("activate",function(e){return console.log("[service worker] Activated"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if("hacker_koans-v-1.0.6"!==e)return console.log("[service worker] Removing old cache",e),caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(t){return t?console.log("[service worker]  return: ",e.request.url):console.log("[service worker]  request: ",e.request.url),t||fetch(e.request)}))})}]);