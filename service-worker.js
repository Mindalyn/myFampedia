"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/myFampedia/index.html","abffdd840895f940f1b4aee0ef18b30e"],["/myFampedia/static/css/main.5d4a7b2b.css","f8ae6905b34ad900a5b5ea0de85964a6"],["/myFampedia/static/js/main.85f258f7.js","2642be05789d8ba1f2753781f6eced6a"],["/myFampedia/static/media/Alan.1ab68cb7.png","1ab68cb75c8374d618cb8553a4d0ecf8"],["/myFampedia/static/media/Bonnie.4bdcfae8.png","4bdcfae84bad746965ae7b777016fefe"],["/myFampedia/static/media/Chris.0d9da64f.png","0d9da64fdd516bfebe493c493f1e9753"],["/myFampedia/static/media/Christina.e5b55c40.png","e5b55c404e06e8bec64e8cd32c396109"],["/myFampedia/static/media/Dorothy1.6b912b7e.png","6b912b7eeabd438a1b31d4f185f303c8"],["/myFampedia/static/media/Emmie.ab74ac54.png","ab74ac5450a6965f886a3780c2f75a99"],["/myFampedia/static/media/Fanny.3c5818d4.png","3c5818d4ed3cef0eff31fe87ba8a254e"],["/myFampedia/static/media/Fran.8457fec7.png","8457fec754e0eadb882090fd1e35b39f"],["/myFampedia/static/media/Frank.49ae5a57.png","49ae5a57c06ef7e12abe3b5ab0bd708b"],["/myFampedia/static/media/Grace.cee86e6b.png","cee86e6b6671d7b061b9402d2835a297"],["/myFampedia/static/media/Harry.0e407a56.png","0e407a5620d69eea0bd4de4274c37809"],["/myFampedia/static/media/Henry.a71ea590.png","a71ea590dd531452d96328f464b19956"],["/myFampedia/static/media/James.76453c7d.png","76453c7dafdb6cc41dd262fe6b1666de"],["/myFampedia/static/media/Jasmine.cf23ff81.png","cf23ff81e8908ec4514b9c91631fd74a"],["/myFampedia/static/media/Justin.7875cc16.png","7875cc16b723bc42c5a048f91f10bf63"],["/myFampedia/static/media/Kara.588d4e3a.png","588d4e3a52f0cc71b1ff7304dcfca142"],["/myFampedia/static/media/Katherine.701a001a.png","701a001acad21717850e025cfd6c4148"],["/myFampedia/static/media/Keenan.e0cc1eda.png","e0cc1eda68ebb3130e16e892bdbf3dfd"],["/myFampedia/static/media/Kelley.c3b8e14d.png","c3b8e14d4fa7ab17f0371d64f335b99b"],["/myFampedia/static/media/Lance.a4c735ff.png","a4c735ff1a2cb97607b543d34ebf7105"],["/myFampedia/static/media/Mari.e869a8aa.png","e869a8aa6bc1a2f0d3002224a6d4bcc5"],["/myFampedia/static/media/Mary.0b7bca9e.png","0b7bca9e87eaa9623f86a410fa97445c"],["/myFampedia/static/media/Matt.de579f3f.png","de579f3fdb4a8d2bf6f66e909883a296"],["/myFampedia/static/media/Michelle.6f1a6d93.png","6f1a6d93b5019da96a40f72c9fe4b505"],["/myFampedia/static/media/Mike.35b99f21.png","35b99f217472884c027b34cd5629833d"],["/myFampedia/static/media/Mindy.64ed462e.png","64ed462ec87a34b1de279cd74649bfe7"],["/myFampedia/static/media/Nick.b4d29aea.png","b4d29aea38b87c9e50fd87b4af387e64"],["/myFampedia/static/media/Ron.99e65235.png","99e65235fd6d27ff9c14e1a879993a36"],["/myFampedia/static/media/Tami.0852f0da.png","0852f0da9f5f48b21f925cd825672c43"],["/myFampedia/static/media/Timmy.38fcab47.png","38fcab47b91e288a293e9becf81493b2"],["/myFampedia/static/media/Veronica.e1be53d5.png","e1be53d562dbc6b799a88e0724b484f3"],["/myFampedia/static/media/Victor.08eb7917.png","08eb79174f9ff36b58c00cb58cf60196"],["/myFampedia/static/media/background.c63f7508.jpeg","c63f7508f70f45f31d509def891c07f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/myFampedia/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});