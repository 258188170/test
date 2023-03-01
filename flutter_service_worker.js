'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e295defe69efd5568fc11ad9e0599b0e",
"index.html": "d891749c7e18dc47c6f73ad54acb8b71",
"/": "d891749c7e18dc47c6f73ad54acb8b71",
"main.dart.js": "6512adfc5b7211f35e4c04d1586c6ad2",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0a729094e10b640bc130da13e746a09a",
"assets/images/google.webp": "544e8686c9deed3876b3e550e404051f",
"assets/images/tab4_false.webp": "7943035af98658ef918611e463d80de6",
"assets/images/coin.webp": "d0f1b4e28b4e657d5957ff5edeba9607",
"assets/images/visitor_login.webp": "e483309f033c39587375df0a5aea0925",
"assets/images/checkbox_true.webp": "56d2809c23944b6aa7e584aebb072934",
"assets/images/top_image.webp": "e6c5fa14b67ca90d8c9e6d19f8a48de3",
"assets/images/tab3_true.webp": "320f21c2690c553736ce56bcdb7b9eca",
"assets/images/message.webp": "848e0bfc60463ed0f41e252f51776201",
"assets/images/launcher1.webp": "d89385a683b491d7b13947e8d944343a",
"assets/images/tab1_false.webp": "d48955bfba83b0ff488ab7d728bd2af7",
"assets/images/feedback.webp": "1b5c11409a8a18e0b2f4a4176e81f0c8",
"assets/images/invite.webp": "33bb8744217aeccf74f6998c7eef7794",
"assets/images/ranking1.webp": "8ea691f7d6edb9c700ee34c8f3d890e9",
"assets/images/notification.webp": "fef1131e45d088eb3b856d543914c59f",
"assets/images/ranging_bg.webp": "fded66f3255dc1aeb22b3ef2fadef985",
"assets/images/tab2_true.webp": "2f664c6b7c899fbaa39e2ac990be6737",
"assets/images/rate_us.webp": "ced377d28d8076f494e930e0e828a586",
"assets/images/default_avatar.webp": "86eb0ede7219f4ac15fe4a956971511b",
"assets/images/tab3_false.webp": "9abe7a0a532273c6929948dc85a8eaec",
"assets/images/default_blod.webp": "b35450e42356d7cefae5b7838763dff7",
"assets/images/tab4_true.webp": "c81caf93f7f231e3477e556c36386257",
"assets/images/close_fill.png": "81e7bb64bfec540c6f3cb7840fd87796",
"assets/images/step1.webp": "cd9c098ba8a56df4f144955a97eb330f",
"assets/images/invitation_code.webp": "b8625a0d202dc04a1352d92a118a6ea7",
"assets/images/menu.webp": "3fbffebd9e6b4d38d7e81bff3021d46e",
"assets/images/edit_user.webp": "10c483f21e8f7622bc212c5e0636e4de",
"assets/images/checkbox_false.webp": "56fa29163d10c881c4fef9312ff64822",
"assets/images/step2.webp": "8d3110775590e5952a115a0805b652c7",
"assets/images/launcher4.webp": "f5b263f0e22187fbddb17097aaebf41e",
"assets/images/Illustration.webp": "46edc52dbcfeac84eba62ca3c010c944",
"assets/images/history.webp": "c3c57d6128d8ce477345a6b3b654cfe6",
"assets/images/card_holder_name.png": "bc2fabc5b1824613bb0d9c031ae3bd9c",
"assets/images/logo_launcher.webp": "ec1ee071be8a21e6d2a3db1b01477e0f",
"assets/images/tab1_true.webp": "de141d2fca2d578e3813ac80bfa3b92e",
"assets/images/ranking3.webp": "d52e5ee3134ee8452e2863f13ce9812d",
"assets/images/youtube.webp": "a3598fda1aa25251a14da4108d6504ae",
"assets/images/public_close.webp": "cd9454d8e9d70a23102b6510b1c19aec",
"assets/images/ranking2.webp": "50aa990d62c7b4f8318ebe29319cc2f2",
"assets/images/ranking_banner.webp": "6b46f8651891b6f0a1e52e0197250751",
"assets/images/invite_bg.webp": "ac68a4d8c43d848757e809b15d2f0356",
"assets/images/step3.webp": "92246fd67b5442efb4614ecd872044ba",
"assets/images/service.webp": "346c2256294292389783594c69edecff",
"assets/images/wallet.webp": "4f30d7b52a2c6531fb344abb11e4bf01",
"assets/images/sign_bg.webp": "8d26ed9c476f4f8b84bfeb5202224601",
"assets/images/lock.webp": "7f7fb53a8d9ffc46f6f60c81075aaf41",
"assets/images/tab2_false.webp": "54544869de6c835b31b77f729a2186c1",
"assets/images/sign_in_bg.webp": "985a5557af90a5c81f9c41bf4f79c639",
"assets/images/step4.webp": "d4cf3de69b396e8446d5d16a5a375f73",
"assets/images/launcher2.webp": "e32f3118c9a2bdd9c7a45de9926cb2a4",
"assets/images/image_add.webp": "279be7e51c7ac42cddb25bb24c5f2af3",
"assets/images/finish_step.png": "5d7fa865a0632523ad4ab66ee534d240",
"assets/images/ic_update.webp": "b7d16adfb6e40ef67b45a4bbf3f92c85",
"assets/images/launcher3.webp": "50c1e48f16a52ae5b491ed75bc27d858",
"assets/images/invite_friends.webp": "dec7b5316934103126f6aac69464d0ca",
"assets/images/version.webp": "d27fb5dcd0ec3c85022545f55b71dd3a",
"assets/images/empty.webp": "a0b8a515e58a889cf61d835c4a75d6cb",
"assets/images/faq.webp": "ffaee775c1ea6cd7031d7631e69e2e16",
"assets/AssetManifest.json": "50b48811741222839c05191800353a13",
"assets/NOTICES": "d25a4cb539a58a6e271ca977e7eefba0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
