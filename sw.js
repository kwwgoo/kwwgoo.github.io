"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"kwwgoo"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"c3dc1a0a84741db1faf20fd741fb3a7f",url:"./2021/04/13/hello-world/index.html"},{revision:"4dc4bf18511feb2a068b61f9e2323a37",url:"./2021/04/13/Hexo部署/index.html"},{revision:"65f1b29db27800e6c6f2ee1d4d707aa5",url:"./2021/06/20/frequently-used/index.html"},{revision:"a422b2704e0cfe064bfd1161a5dd3523",url:"./about/index.html"},{revision:"6d951b00406217f94ddb7b4176290b22",url:"./archives/2021/04/index.html"},{revision:"cad9cf4ee294417d002aed9c1acd58d1",url:"./archives/2021/06/index.html"},{revision:"f6139db61c0d2c035686d198e854469f",url:"./archives/2021/index.html"},{revision:"bb5c818b6f0df614743e25a6ccef0aca",url:"./archives/index.html"},{revision:"21b80afac576f038af1233fb06e571e5",url:"./artitalk/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"7693b170827adbc9cf8535be02f72dde",url:"./bber/index.html"},{revision:"939810e53caab0f45daf541eb7f95ddc",url:"./books/index.html"},{revision:"d11eb34426e0c81919a15915a09e8c19",url:"./categories/index.html"},{revision:"ddd5663c699861ee0804fc788c88f4f7",url:"./categories/学习/index.html"},{revision:"05046db1bad134db3f10e406b4d9adbe",url:"./categories/学海无涯/index.html"},{revision:"5e65fafbe62e29361cab3d00c9b7e405",url:"./css/custom.css"},{revision:"e65954b8b6465f01ba0fe25854f0c650",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"e955eb6fbe9f0f1d479a60de66dd25e1",url:"./games/index.html"},{revision:"b9b2b455a3c4a36b4527e5d913a5fcdf",url:"./img/manifest.json"},{revision:"5ae349080fafbafee78f8c730cc13574",url:"./img/siteicon/README.html"},{revision:"ca4afebd9a4aaeab2d50453e2a56a221",url:"./index.html"},{revision:"7d3beced2c1e60697e23e0a501a3c4b9",url:"./js/custom.js"},{revision:"5641b1a6b817df7d81f465c27ed538d9",url:"./js/main.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"260603694fa49f9aa268dd1ec24bccd7",url:"./link/index.html"},{revision:"40481becae1f76f81e6a41fae0ddd191",url:"./manifest.json"},{revision:"2d5b1c4a4c35123ee19eef7feb7ea745",url:"./movie/index.html"},{revision:"e7d1d5156af43072aa5cf2bc94210329",url:"./movies/index.html"},{revision:"0fdf88e7485d42c654b4f6110727b61e",url:"./music/index.html"},{revision:"51fea6e46cab2853c29f91a2bd21799f",url:"./photo/index.html"},{revision:"fd7a620f34f206598c6a62ea63726c65",url:"./photo/ohmygirl/index.html"},{revision:"442b66059ed0bb8be696500bb32a5b54",url:"./photo/wallpaper/index.html"},{revision:"d52d54e5861d65ae73f9a2e59e30031f",url:"./tags/Hexo，写作/index.html"},{revision:"363fcfa6c2c9be5e1be9451f38f362a6",url:"./tags/Hexo/index.html"},{revision:"0b28553441a3330263235404f8838081",url:"./tags/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();