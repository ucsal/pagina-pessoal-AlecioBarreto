'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/fonts/f_content.ttf": "bd27b3ec97d12655c7a2803cb6464924",
"/assets/fonts/f_heading.ttf": "6f0f25304d9bb7bbaf2b0bfe11f13ab4",
"/assets/fonts/f_menu.ttf": "6d10e6fe3abb1387c5d80fbf89a4ef59",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "3d8c0ffcd73f2157a13d3882fb2775ef",
"/assets/LICENSE": "31551f89cdf330ebb588de945b030844",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca122272cfac33efb09d0717efde2fa",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bdd8d75eb9e6832ccd3117e06c51f0d3",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d21f791b837673851dd14f7c132ef32e",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/images/icone.svg": "fa5770043c7a81c5cce4d03870784d46",
"/assets/images/home_profile_small.png": "6a912b440a585a7dd9e7b05a11104178",
"/assets/images/home_profile.png": "b4bd5d2a219c125ff398096d3008820d",
"/assets/images/ic_dart.png": "f3ae419dc11ddc054a8725e2cbab4939",
"/assets/images/icon.png": "fa5770043c7a81c5cce4d03870784d46",
"/assets/images/yllo.png": "db7469b306f810b6849dd6a9509dcc5b",
"/assets/AssetManifest.json": "9424c9e69c1466fce34a80738512db61",
"/index.html": "2c3f95d24975c69eb8a25d505ba500f1",
"/main.dart.js": "df720d73fbc07a0801c0cf7043b2a077"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
