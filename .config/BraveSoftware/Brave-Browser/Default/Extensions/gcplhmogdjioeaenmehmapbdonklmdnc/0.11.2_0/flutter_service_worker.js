'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"popup.html": "778d8328ee260f1853fa2b2c6e2d8626",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"netlify.toml": "e3b926cfc0edc35b03e6d18a216c4c8d",
"version.json": "e8dcb5191015c37fe8ce1fd6156b6151",
"assets/AssetManifest.json": "1752ea5c8fc64a492a79d1dfa491e9f4",
"assets/assets/sounds/speech_to_text_cancel.m4r": "50a8a92df3a6602d4711adbd7a578b43",
"assets/assets/sounds/speech_to_text_listening.m4r": "032b9346605a80aadffdbe7765248fb6",
"assets/assets/sounds/speech_to_text_stop.m4r": "50a8a92df3a6602d4711adbd7a578b43",
"assets/AssetManifest.bin": "bac000326a3cd843e78f2064e9ebd59b",
"assets/fonts/MaterialIcons-Regular.otf": "3e0aecfba1dd2774ad1b3b06976cf610",
"assets/NOTICES": "3a9ceb438f02df72c39a38504e5f24aa",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"icons/144.png": "bc8f0feac0cf08a65220aabce875a245",
"icons/32.png": "3fe8f0ac60b05d5190cf8f9284134548",
"icons/58.png": "771d9e08437824717f9b5da9d59e8350",
"icons/16.png": "47916c1b67534db5d211f99392d7f285",
"icons/100.png": "2419604a02c8f2bf42d849baf09abb12",
"icons/29.png": "77ead728f8d1fa711855b1b00a8adae2",
"icons/40.png": "9b8258929a8c32934360f22cdc87a129",
"icons/120.png": "c7dafae068d15a722f0e4c21c9569b7f",
"icons/167.png": "ed4faa661e992bed2d499f8757c9efed",
"icons/256.png": "bb3905da29f0aa626ffb53d742853efc",
"icons/20.png": "002231c1feab48545b92822668c55499",
"icons/60.png": "1a4a2f76d5134751a5a2d3cdae957bed",
"icons/50.png": "0fc352d60479b199d0b043a80952103a",
"icons/76.png": "c157e9d4f0d9bf44ce62c619bc5d3587",
"icons/114.png": "961c2cd4a3939c22d52a7ee760385ccc",
"icons/512.png": "a3e60c7f2ad500a1da9128049915d136",
"icons/Icon-maskable-192.png": "0b9ff26a5a5204b46bb54ecf37d4a7f8",
"icons/216.png": "4b63082c99ae0018efaec68b5dbd5cd8",
"icons/80.png": "3e03388c2318aa1fc13ab8975b9a45a1",
"icons/87.png": "357a23ecb35bef318f7478051dc7d9cc",
"icons/196.png": "07b684bbfd9100cbadc22dd31c39aac9",
"icons/88.png": "041aaffbc509ddf729e7a0b6775d1009",
"icons/172.png": "5b70aff9a49f9ba2e468f792a058fbff",
"icons/128.png": "e1bb4a0d9645a8f6717d747782f9fac9",
"icons/152.png": "a8e3b141de400142e92552cef55249a7",
"icons/180.png": "57de6bc0a8b8c980203fc19df124a859",
"icons/1024.png": "ef16fa06f7ce4c653caeee445ec3315a",
"icons/Icon-512.png": "3e5006cf4eef226791247a3667f709d4",
"icons/57.png": "82cad0ac5f3d74bd702c0dc27a2cfe73",
"icons/Icon-192.png": "0b9ff26a5a5204b46bb54ecf37d4a7f8",
"icons/55.png": "3621412dc193d71adc2842fe87828c09",
"icons/72.png": "4e678097e9f7886b8cb5e430f777db2c",
"icons/Icon-maskable-512.png": "3e5006cf4eef226791247a3667f709d4",
"icons/64.png": "121c48de265ee55f247c71fe65415c0b",
"icons/48.png": "7fd06c6f78453f138ec16573259f141d",
"shortcuts.js": "ddfd62dc6ff17274ef939ad8baced718",
"index.html": "2e0fb980c50084407bc29998437b8954",
"/": "2e0fb980c50084407bc29998437b8954",
"main.dart.js": "3c5901443cf8b8de76d010640a65d6ac",
"manifest2.json": "6046f43c0e0e1a8e7e8693963566b0ec",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"popup.js": "3c2af08a59bbc9317287399db73f23a0",
"manifest3.json": "7615e563fd88595e2a3e583178860c7c",
"extension/content.js": "ac4ea3cfa55134c8a20c1f27f7730ec1",
"extension/background.js": "35a53246a45976132f8c84d7a2b2bd6b",
"favicon.png": "ae10253ccf6ca0b87a9923bab5979840",
"manifest.json": "09af5f2e7db406e60cd26cfa70bc4ac9",
"web-ext.html": "d90904e5e89b794e64552d209074d963",
"utils.js": "522cc063b3a6d4adb069fe81cb651185"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
