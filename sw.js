if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>i(e,c),a={module:{uri:c},exports:o,require:t};s[c]=Promise.all(n.map((e=>a[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-IGH3Vg2r.css",revision:null},{url:"assets/index-kiVE7tXv.js",revision:null},{url:"index.html",revision:"b6ed99785e9bc5760aedfd9372faadf3"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"./assets/icon-48x48.png",revision:"c5dccc544f0ebf592b3254939cd99e14"},{url:"./assets/icon-72x72.png",revision:"c1ad9adcee8f07ff202a3ea129eff5ac"},{url:"./assets/icon-96x96.png",revision:"ee82205d1fd33447fa37d89273b628cc"},{url:"./assets/icon-128x128.png",revision:"28f022cb9a902d22c2174281157e3eea"},{url:"./assets/icon-144x144.png",revision:"1c562a61a70a008ded2dfaf377965e15"},{url:"./assets/icon-152x152.png",revision:"1c4229f8fbd0b30c5a50f5ff8c43729d"},{url:"./assets/icon-192x192.png",revision:"8ce0539d9e90b03b9073b194da8df93a"},{url:"./assets/icon-384x384.png",revision:"39106bdfab63b4e79ab9e797575e93c7"},{url:"./assets/icon-512x512.png",revision:"742eace29d8719a6ae415a6c2419551f"},{url:"manifest.webmanifest",revision:"9e2185023f39980d806b2f88e7ce9d17"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
