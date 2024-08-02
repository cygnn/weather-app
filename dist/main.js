(()=>{var e={602:(e,t,n)=>{var r={"./clear-day.png":122,"./clear-night.png":358,"./cloudy.png":366,"./fog.png":848,"./hail.png":720,"./partly-cloudy-day.png":766,"./partly-cloudy-night.png":890,"./rain-snow-showers-day.png":173,"./rain-snow-showers-night.png":633,"./rain-snow.png":186,"./rain.png":572,"./showers-day.png":380,"./showers-night.png":40,"./sleet.png":505,"./snow-showers-day.png":288,"./snow-showers-night.png":196,"./snow.png":199,"./thunder-rain.png":367,"./thunder-showers-day.png":641,"./thunder-showers-night.png":77,"./thunder.png":382,"./wind.png":976};function s(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=c,e.exports=s,s.id=602},117:(e,t,n)=>{"use strict";function r(e){const t=document.querySelector(".weather-content"),r=document.createElement("div");r.classList.add("current-weather-wrapper");const s=document.createElement("div");s.classList.add("title-container");const c=document.createElement("h2");c.textContent="Current Weather";const o=document.createElement("p");o.textContent=function(e){e=e.split(":");let t,n=Number(e[0]),r=Number(e[1]);return Number(e[2]),n>0&&n<=12?t=""+n:n>12?t=""+(n-12):0==n&&(t="12"),t+=r<10?":0"+r:":"+r,t+=n>=12?" PM":" AM",t}(e.currentConditions.datetime),s.appendChild(c),s.appendChild(o);const i=document.createElement("div");i.classList.add("curr-weather-body");const p=document.createElement("div");p.classList.add("curr-weather-details");const a=document.createElement("img");let d=e.currentConditions.icon;const u=function(e){let t={};return e.keys().map(((n,r)=>{t[n.replace("./","")]=e(n)})),t}(n(602));a.src=u[`${d}.png`],console.log(typeof e.currentConditions.icon);const l=document.createElement("div");l.classList.add("temp-container");const g=document.createElement("div");g.textContent=e.currentConditions.temp+"°C";const h=document.createElement("div");h.textContent="Feels like "+e.currentConditions.feelslike+"°C",l.appendChild(g),l.appendChild(h);const b=document.createElement("span");b.classList.add("condition"),b.textContent=e.currentConditions.conditions,p.appendChild(a),p.appendChild(l),p.appendChild(b),i.appendChild(p),r.appendChild(s),r.appendChild(i),t.appendChild(r)}n.r(t),n.d(t,{buildWeatherContent:()=>r})},750:(e,t,n)=>{"use strict";async function r(e){let t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=metric&key=KLJQZAYYYQ2PT3EZCVTYFGXZV`),n=await t.json();return console.log(n),n}n.r(t),n.d(t,{getData:()=>r})},582:(e,t,n)=>{"use strict";n.r(t),n.d(t,{WeatherDetails:()=>r});class r{constructor(e,t,n){this.address=e,this.days=t,this.currentConditions=n}}},122:(e,t,n)=>{"use strict";e.exports=n.p+"2d2c4c1e0cea2ea94d9e.png"},358:(e,t,n)=>{"use strict";e.exports=n.p+"8b657d6b2a4c7f55c95f.png"},366:(e,t,n)=>{"use strict";e.exports=n.p+"3a22010cc574b8ec3467.png"},848:(e,t,n)=>{"use strict";e.exports=n.p+"bec51c6b905e71a69c73.png"},720:(e,t,n)=>{"use strict";e.exports=n.p+"22bc6a62d61cd4e61b23.png"},766:(e,t,n)=>{"use strict";e.exports=n.p+"e2cb38f56ab3f72e93c0.png"},890:(e,t,n)=>{"use strict";e.exports=n.p+"e406783465c1e058592a.png"},173:(e,t,n)=>{"use strict";e.exports=n.p+"03570f8770afb4578ef1.png"},633:(e,t,n)=>{"use strict";e.exports=n.p+"b56363b154ab1b8cabbf.png"},186:(e,t,n)=>{"use strict";e.exports=n.p+"038d450ab94c9555c80b.png"},572:(e,t,n)=>{"use strict";e.exports=n.p+"6966c27e67c496174de7.png"},380:(e,t,n)=>{"use strict";e.exports=n.p+"f4024ece0d1611677487.png"},40:(e,t,n)=>{"use strict";e.exports=n.p+"9c2b00d012491c137b95.png"},505:(e,t,n)=>{"use strict";e.exports=n.p+"7308695c26f29c07e780.png"},288:(e,t,n)=>{"use strict";e.exports=n.p+"bd8534b598bd67f042f8.png"},196:(e,t,n)=>{"use strict";e.exports=n.p+"144ff406034d20032dae.png"},199:(e,t,n)=>{"use strict";e.exports=n.p+"9ea730ccdd3c70265097.png"},367:(e,t,n)=>{"use strict";e.exports=n.p+"28c16fdbc81fa954c34d.png"},641:(e,t,n)=>{"use strict";e.exports=n.p+"4ecb49ae0e8456fffe83.png"},77:(e,t,n)=>{"use strict";e.exports=n.p+"b11d5ba572c6b2d69aec.png"},382:(e,t,n)=>{"use strict";e.exports=n.p+"bbaf7afabd2579a73577.png"},976:(e,t,n)=>{"use strict";e.exports=n.p+"1fe081956dbbfe6cc56a.png"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})();const{buildWeatherContent:r}=n(117),{getData:s}=n(750),{WeatherDetails:c}=n(582),o=document.querySelector("#search");document.querySelector("#search-btn").addEventListener("click",(async()=>{s(o.value).then((function(e){const t=new c(e.resolvedAddress,e.days,e.currentConditions);console.log(e.resolvedAddress),console.log(t.days[0].description),r(t)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQ2xCeEIsTUFBTSxvQkFBRTFFLEdBQXdCLEVBQVEsTUFDbEMsUUFBRXlDLEdBQVksRUFBUSxNQUN0QixlQUFFSyxHQUFtQixFQUFRLEtBRTdCc0MsRUFBU2pGLFNBQVNDLGNBQWMsV0FDcEJELFNBQVNDLGNBQWMsZUFFL0JpRixpQkFBaUIsU0FBUzdDLFVBQ3JCQyxFQUFRMkMsRUFBT1gsT0FFckJhLE1BQUssU0FBUzNDLEdBQ2YsTUFBTTRDLEVBQVUsSUFBSXpDLEVBQWVILEVBQVM2QyxnQkFBaUI3QyxFQUFTTSxLQUFNTixFQUFTeEIsbUJBQ3JGYyxRQUFRQyxJQUFJUyxFQUFTNkMsaUJBQ3JCdkQsUUFBUUMsSUFBSXFELEVBQVF0QyxLQUFLLEdBQUd3QyxhQUM1QnpGLEVBQW9CdUYsRUFDeEIsR0FBRSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaWNvbnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvanMvYnVpbGRXZWF0aGVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9jb252VGltZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9qcy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2pzL3dlYXRoZXJEZXRhaWxzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vY2xlYXItZGF5LnBuZ1wiOiAxMjIsXG5cdFwiLi9jbGVhci1uaWdodC5wbmdcIjogMzU4LFxuXHRcIi4vY2xvdWR5LnBuZ1wiOiAzNjYsXG5cdFwiLi9mb2cucG5nXCI6IDg0OCxcblx0XCIuL2hhaWwucG5nXCI6IDcyMCxcblx0XCIuL3BhcnRseS1jbG91ZHktZGF5LnBuZ1wiOiA3NjYsXG5cdFwiLi9wYXJ0bHktY2xvdWR5LW5pZ2h0LnBuZ1wiOiA4OTAsXG5cdFwiLi9yYWluLXNub3ctc2hvd2Vycy1kYXkucG5nXCI6IDE3Myxcblx0XCIuL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnBuZ1wiOiA2MzMsXG5cdFwiLi9yYWluLXNub3cucG5nXCI6IDE4Nixcblx0XCIuL3JhaW4ucG5nXCI6IDU3Mixcblx0XCIuL3Nob3dlcnMtZGF5LnBuZ1wiOiAzODAsXG5cdFwiLi9zaG93ZXJzLW5pZ2h0LnBuZ1wiOiA0MCxcblx0XCIuL3NsZWV0LnBuZ1wiOiA1MDUsXG5cdFwiLi9zbm93LXNob3dlcnMtZGF5LnBuZ1wiOiAyODgsXG5cdFwiLi9zbm93LXNob3dlcnMtbmlnaHQucG5nXCI6IDE5Nixcblx0XCIuL3Nub3cucG5nXCI6IDE5OSxcblx0XCIuL3RodW5kZXItcmFpbi5wbmdcIjogMzY3LFxuXHRcIi4vdGh1bmRlci1zaG93ZXJzLWRheS5wbmdcIjogNjQxLFxuXHRcIi4vdGh1bmRlci1zaG93ZXJzLW5pZ2h0LnBuZ1wiOiA3Nyxcblx0XCIuL3RodW5kZXIucG5nXCI6IDM4Mixcblx0XCIuL3dpbmQucG5nXCI6IDk3NlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDYwMjsiLCJpbXBvcnQgeyBjb252ZXJ0VGltZSB9IGZyb20gXCIuL2NvbnZUaW1lXCI7XG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICAgIGxldCBpbWFnZXMgPSB7fTtcbiAgICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xuICAgIHJldHVybiBpbWFnZXM7XG59ICAgXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFdlYXRoZXJDb250ZW50KGRhdGEpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBjdXJyV2VhdGhlcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjdXJyV2VhdGhlcldyYXAuY2xhc3NMaXN0LmFkZCgnY3VycmVudC13ZWF0aGVyLXdyYXBwZXInKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGUtY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0N1cnJlbnQgV2VhdGhlcic7XG5cbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRpbWUudGV4dENvbnRlbnQgPSBjb252ZXJ0VGltZShkYXRhLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lKTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIGNvbnN0IGN1cnJXZWF0aGVyQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGN1cnJXZWF0aGVyQm9keS5jbGFzc0xpc3QuYWRkKCdjdXJyLXdlYXRoZXItYm9keScpO1xuXG4gICAgY29uc3QgY3VycldlYXRoZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY3VycldlYXRoZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2N1cnItd2VhdGhlci1kZXRhaWxzJyk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGxldCBpY29uID0gZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uO1xuICAgIGNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ljb25zJywgZmFsc2UsIC9cXC4ocG5nfGpwZT9nfHN2ZykkLykpO1xuICAgIGltZy5zcmMgPSBpbWFnZXNbYCR7aWNvbn0ucG5nYF1cbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5pY29uKVxuXG4gICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlbXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGVtcC1jb250YWluZXInKTtcbiAgICBcbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcCArIFwiwrBDXCJcblxuICAgIGNvbnN0IGZlZWxzbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlZWxzbGlrZS50ZXh0Q29udGVudCA9IFwiRmVlbHMgbGlrZSBcIiArIGRhdGEuY3VycmVudENvbmRpdGlvbnMuZmVlbHNsaWtlICsgXCLCsENcIjtcblxuICAgIHRlbXBDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZChmZWVsc2xpa2UpO1xuXG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdjb25kaXRpb24nKTtcbiAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG5cbiAgICBjdXJyV2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjdXJyV2VhdGhlckRldGFpbHMuYXBwZW5kQ2hpbGQodGVtcENvbnRhaW5lcik7XG4gICAgY3VycldlYXRoZXJEZXRhaWxzLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG5cbiAgICBjdXJyV2VhdGhlckJvZHkuYXBwZW5kQ2hpbGQoY3VycldlYXRoZXJEZXRhaWxzKTtcblxuICAgIGN1cnJXZWF0aGVyV3JhcC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgY3VycldlYXRoZXJXcmFwLmFwcGVuZENoaWxkKGN1cnJXZWF0aGVyQm9keSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGN1cnJXZWF0aGVyV3JhcCk7XG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VGltZSh0aW1lKXtcbiAgICB0aW1lID0gdGltZS5zcGxpdCgnOicpOyAvLyBjb252ZXJ0IHRvIGFycmF5XG4gICAgXG4gICAgLy8gZmV0Y2hcbiAgICBsZXQgaG91cnMgPSBOdW1iZXIodGltZVswXSk7XG4gICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIodGltZVsxXSk7XG4gICAgbGV0IHNlY29uZHMgPSBOdW1iZXIodGltZVsyXSk7XG4gICAgXG4gICAgLy8gY2FsY3VsYXRlXG4gICAgbGV0IHRpbWVWYWx1ZTtcbiAgICBcbiAgICBpZiAoaG91cnMgPiAwICYmIGhvdXJzIDw9IDEyKSB7XG4gICAgICB0aW1lVmFsdWU9IFwiXCIgKyBob3VycztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID4gMTIpIHtcbiAgICAgIHRpbWVWYWx1ZT0gXCJcIiArIChob3VycyAtIDEyKTtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09IDApIHtcbiAgICAgIHRpbWVWYWx1ZT0gXCIxMlwiO1xuICAgIH1cbiAgICAgXG4gICAgdGltZVZhbHVlICs9IChtaW51dGVzIDwgMTApID8gXCI6MFwiICsgbWludXRlcyA6IFwiOlwiICsgbWludXRlczsgIC8vIGdldCBtaW51dGVzXG4gICAgdGltZVZhbHVlICs9IChob3VycyA+PSAxMikgPyBcIiBQTVwiIDogXCIgQU1cIjsgIC8vIGdldCBBTS9QTVxuXG4gICAgcmV0dXJuIHRpbWVWYWx1ZTtcbn0gICAiLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YShjaXR5KXtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7Y2l0eX0/dW5pdEdyb3VwPW1ldHJpYyZrZXk9S0xKUVpBWVlZUTJQVDNFWkNWVFlGR1haVmApXG4gICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gZGF0YTtcbn0iLCJleHBvcnQgY2xhc3MgV2VhdGhlckRldGFpbHN7XG4gICAgY29uc3RydWN0b3IoYWRkcmVzcywgZGF5cywgY3VycmVudENvbmRpdGlvbnMpe1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzXG4gICAgICAgIHRoaXMuZGF5cyA9IGRheXNcbiAgICAgICAgdGhpcy5jdXJyZW50Q29uZGl0aW9ucyA9IGN1cnJlbnRDb25kaXRpb25zXG4gICAgfVxufVxuXG4vL1VTRVxuLy8gYWRkcmVzc1xuXG4vLyBjbG91ZGNvdmVyXG5cbi8vIGluIGN1cnJlbnQgY29uZGl0aW9uXG4vLyBjb25kaXRpb25cbi8vIHRlbXBcbi8vIGZlZWxzbGlrZVxuXG4vLyBuZXh0IDcgZGF5c1xuXG4vLyBpbiBkYXlzXG4vLyBjb25kaXRpb25zXG4vLyBkZXNjcmlwdGlvblxuLy8gdGVtcG1heFxuLy8gdGVtcG1pbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImNvbnN0IHsgYnVpbGRXZWF0aGVyQ29udGVudCB9ID0gcmVxdWlyZShcIi4vanMvYnVpbGRXZWF0aGVyQ29udGVudFwiKTtcbmNvbnN0IHsgZ2V0RGF0YSB9ID0gcmVxdWlyZShcIi4vanMvZ2V0RGF0YVwiKTtcbmNvbnN0IHsgV2VhdGhlckRldGFpbHMgfSA9IHJlcXVpcmUoXCIuL2pzL3dlYXRoZXJEZXRhaWxzXCIpO1xuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoJyk7XG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWJ0bicpXG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jKCkgPT57XG4gICAgbGV0IGRhdGEgPSBnZXREYXRhKHNlYXJjaC52YWx1ZSk7XG4gICAgXG4gICAgZGF0YS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyRGV0YWlscyhyZXNwb25zZS5yZXNvbHZlZEFkZHJlc3MsIHJlc3BvbnNlLmRheXMsIHJlc3BvbnNlLmN1cnJlbnRDb25kaXRpb25zKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXNvbHZlZEFkZHJlc3MpXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXIuZGF5c1swXS5kZXNjcmlwdGlvbik7XG4gICAgICAgIGJ1aWxkV2VhdGhlckNvbnRlbnQod2VhdGhlcik7XG4gICAgfSk7XG59KVxuXG4iXSwibmFtZXMiOlsibWFwIiwid2VicGFja0NvbnRleHQiLCJyZXEiLCJpZCIsIndlYnBhY2tDb250ZXh0UmVzb2x2ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJvIiwiZSIsIkVycm9yIiwiY29kZSIsImtleXMiLCJPYmplY3QiLCJyZXNvbHZlIiwibW9kdWxlIiwiZXhwb3J0cyIsImJ1aWxkV2VhdGhlckNvbnRlbnQiLCJkYXRhIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJXZWF0aGVyV3JhcCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZUNvbnRhaW5lciIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJ0aW1lIiwic3BsaXQiLCJ0aW1lVmFsdWUiLCJob3VycyIsIk51bWJlciIsIm1pbnV0ZXMiLCJjb252ZXJ0VGltZSIsImN1cnJlbnRDb25kaXRpb25zIiwiZGF0ZXRpbWUiLCJhcHBlbmRDaGlsZCIsImN1cnJXZWF0aGVyQm9keSIsImN1cnJXZWF0aGVyRGV0YWlscyIsImltZyIsImljb24iLCJpbWFnZXMiLCJyIiwiaXRlbSIsImluZGV4IiwicmVwbGFjZSIsImltcG9ydEFsbCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJ0ZW1wQ29udGFpbmVyIiwidGVtcCIsImZlZWxzbGlrZSIsImNvbmRpdGlvbiIsImNvbmRpdGlvbnMiLCJhc3luYyIsImdldERhdGEiLCJjaXR5IiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJXZWF0aGVyRGV0YWlscyIsImNvbnN0cnVjdG9yIiwiYWRkcmVzcyIsImRheXMiLCJ0aGlzIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZCIsImRlZmluaXRpb24iLCJrZXkiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwid2luZG93Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0Iiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiaSIsInRlc3QiLCJwIiwic2VhcmNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRoZW4iLCJ3ZWF0aGVyIiwicmVzb2x2ZWRBZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9