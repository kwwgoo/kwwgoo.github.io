"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"kwwgoo"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"32aad8cf3b0351f8542449bb21799271",url:"./2021/04/13/hello-world/index.html"},{revision:"5c89ed64820f74db514973d5a74c9389",url:"./2021/04/13/Hexo部署/index.html"},{revision:"dbe4eb666f05c586326f0f0aebcb7bec",url:"./2021/04/13/耳鸣那些事/index.html"},{revision:"f8f00be6bd810161a8c1ebf058c1a243",url:"./2021/04/22/光纤通信/index.html"},{revision:"9d32ebf36d5dc11c66459e8bef2f9503",url:"./2021/04/28/Django学习/index.html"},{revision:"5707422a1583e626f957e099e41260d5",url:"./2021/05/03/Mysql学习/index.html"},{revision:"77f31af7b846d19871f18f4ab61931aa",url:"./2021/06/20/frequently-used/index.html"},{revision:"d8ec82b6e4264446bf5f67ef55b2be30",url:"./2021/07/02/光电科学与工程/index.html"},{revision:"c353e26b7ceedc2f5c381c8b4d5307b0",url:"./2021/07/11/实习总结/index.html"},{revision:"5db64aa421eb80cee5bf75ccc966feda",url:"./about/index.html"},{revision:"a43b18eaa2c5341303f1c4d4d1d5b877",url:"./archives/2021/04/index.html"},{revision:"88d8efc995e7070ce427e017bd447fcc",url:"./archives/2021/05/index.html"},{revision:"f014c39f5dd3f47403375be5135db585",url:"./archives/2021/06/index.html"},{revision:"46e316d2de8314319f2bfc05a3f43067",url:"./archives/2021/07/index.html"},{revision:"e8b77ddbc2302382cc0ea173cac3fc72",url:"./archives/2021/index.html"},{revision:"7bc6e3f0441d71f33d7784371b156011",url:"./archives/index.html"},{revision:"3c7653b65c09e02a83f610bc0cc2f3e3",url:"./artitalk/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"d751b777ec3263d5b2691cdf488d46d0",url:"./bber/index.html"},{revision:"0cf500c86eb04b98cb2954de6995f562",url:"./books/index.html"},{revision:"806539011dc736a3850ed0d9ffd2d8a5",url:"./categories/index.html"},{revision:"5b408e429676528fafef114ad99bccbe",url:"./categories/光纤通信/index.html"},{revision:"a040b57d99ceeba319b186118c530453",url:"./categories/学习/index.html"},{revision:"b968e227516399ea6a6ad6b8d93cc654",url:"./categories/学海无涯/index.html"},{revision:"6952186aa21be31e4f6fb4741e56a0b2",url:"./categories/浮生六记/index.html"},{revision:"67e93f71c035ee21b04b8feeb8bcacb1",url:"./css/custom.css"},{revision:"11ce5e5c2ef317ffb3f351e4935c2666",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"cf888ba2b8acbe6644a6491f7ddd0b6e",url:"./fcircle/index.html"},{revision:"2f40d817e9f3b27d3f83980da23eaff0",url:"./games/index.html"},{revision:"b9b2b455a3c4a36b4527e5d913a5fcdf",url:"./img/manifest.json"},{revision:"6aacbd4192af9d2d36ed50b34ec1ff47",url:"./img/siteicon/README.html"},{revision:"e08116139b2697b5c19d72ee53aea21a",url:"./index.html"},{revision:"7d3beced2c1e60697e23e0a501a3c4b9",url:"./js/custom.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"d838a4d4f3d999b7e231bfd4b0d7218a",url:"./link/index.html"},{revision:"40481becae1f76f81e6a41fae0ddd191",url:"./manifest.json"},{revision:"a5e3a41fac19d43e1f92a79fb90ba7ff",url:"./movie/index.html"},{revision:"288fc19a6b0e937817a293f542fea37f",url:"./movies/index.html"},{revision:"da47ed242f77ebdf9cb0856b55324c96",url:"./music/index.html"},{revision:"f69c4bdc4f82f5156cf09baae07f4665",url:"./photo/index.html"},{revision:"20694ec5d17733befb9f8dcf623d0ec3",url:"./photo/ohmygirl/index.html"},{revision:"8ff36c9e83470a6c1b7aa497e3b55756",url:"./photo/wallpaper/index.html"},{revision:"86102355b1a2344da8dabb45afb6196d",url:"./tags/Django/index.html"},{revision:"bf8e647c58b00eea993c03b85eb8bfc1",url:"./tags/Hexo/index.html"},{revision:"e44a6d27cd04251b751696ff54852d88",url:"./tags/index.html"},{revision:"124b0aa59e0320435bf3dd175445081c",url:"./tags/mysql/index.html"},{revision:"63d72b48a931585303ca6621c28ceede",url:"./tags/专业/index.html"},{revision:"170d663c9340ace9234527d492711a3e",url:"./tags/光纤通信/index.html"},{revision:"9c51d2656139fa69114d9dddb862e226",url:"./tags/实习/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();