(function(t){function e(e){for(var a,n,i=e[0],c=e[1],l=e[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},r={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"07ef":function(t,e,s){t.exports=s.p+"img/marker-low.45070383.png"},2741:function(t,e,s){},"481a":function(t,e,s){"use strict";var a=s("f2e7"),r=s.n(a);r.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("leaflet-map"),s("top-bar")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"mapid"}},[s("l-map",{staticStyle:{width:"100%",height:"100vh"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.updateZoom}},[s("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),s("v-marker-cluster",{attrs:{options:t.clusterOptions}},t._l(t.locations,(function(e,a){return s("l-marker",{key:a,attrs:{"lat-lng":t.getLatLong(e.geometry.coordinates[1],e.geometry.coordinates[0])},on:{click:function(e){return t.getMarkerIndex(a)}}},[s("l-popup",[s("address",{staticClass:"popup-address"},[s("span",{staticClass:"popup-addressTitle"},[t._v(t._s(e.properties.name))]),s("div",{staticClass:"popup-stackUp"},[s("span",{staticClass:"popup-addressSubtitle"},[t._v(t._s(e.properties.address))]),s("span",{staticClass:"popup-addressSubtitle"},[t._v(t._s(e.properties.phone))])]),s("div",{staticClass:"popup-mainInfo"},[s("div",{staticClass:"popup-wrapp"},[s("span",{staticClass:"popup-addressIcon"},[s("svg",{attrs:{id:"Capa_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[s("g",[s("g",[s("path",{attrs:{"clip-rule":"evenodd",d:"m303.623 483.741c33.846-12.557 65.028-35.688 89.634-63.41v-76.165c0-1.814-.397-3.373-1.134-4.762-2.041-3.912-6.548-6.236-11.424-7.795l-107.351-34.44c-14.003-4.479-20.693-4.479-34.697 0l-107.351 34.44c-4.876 1.559-9.383 3.883-11.424 7.795-.737 1.361-1.134 2.948-1.134 4.762v76.165c24.605 27.722 55.787 50.853 89.634 63.41 17.292 6.435 32.457 9.638 47.623 9.638 15.167-.001 30.332-3.204 47.624-9.638z",fill:"#bfdbff","fill-rule":"evenodd"}})]),s("g",[s("path",{attrs:{"clip-rule":"evenodd",d:"m147.799 182.962c22.904-6.435 32.571-.34 54.767 5.471 109.08 28.516 143.635 30.443 244.551 42.434l-6.973-64.118c-2.069-19.077-1.077-25.114 8.447-34.497 15.081-14.825 37.872-26.22 40.593-70.723-49.069 12.529-59.16 20.324-101.511-5.783-126.57-78.036-192.619-13.663-236.16 18.538-39.913-14.542-75.29 13.946-81.045 52.581-5.528 37.275-5.584 49.549-5.584 104.001 29.481-28.771 50.628-38.833 82.915-47.904z",fill:"#ffda8f","fill-rule":"evenodd"}})]),s("g",[s("path",{attrs:{"clip-rule":"evenodd",d:"m118.743 420.331v-76.165c0-1.814.397-3.401 1.134-4.762l-54.993-108.537v67.917c0 6.179.539 12.472 1.531 18.878 5.357 34.468 24.661 71.488 52.328 102.669z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),s("g",[s("path",{attrs:{"clip-rule":"evenodd",d:"m131.301 331.608 107.351-34.44c14.003-4.479 20.693-4.479 34.697 0l107.351 34.44c4.876 1.559 9.383 3.883 11.424 7.795l54.993-108.536c-100.916-11.99-135.471-13.918-244.551-42.434-22.196-5.811-31.862-11.905-54.767-5.471-32.287 9.071-53.434 19.133-82.915 47.905l54.993 108.536c2.041-3.912 6.548-6.236 11.424-7.795z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),s("g",[s("path",{attrs:{"clip-rule":"evenodd",d:"m393.257 420.331c27.667-31.181 46.971-68.2 52.329-102.669.992-6.406 1.531-12.699 1.531-18.878v-67.917l-54.993 108.536c.737 1.389 1.134 2.948 1.134 4.762v76.166z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),s("g",[s("path",{attrs:{"clip-rule":"evenodd",d:"m462.112 317.662c49.267 0 53.293-86.795 9.865-86.795h-24.86v67.917c0 6.179-.539 12.472-1.531 18.878z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),s("g",[s("path",{attrs:{"clip-rule":"evenodd",d:"m66.414 317.662c-.992-6.406-1.531-12.699-1.531-18.878v-67.917h-24.86c-43.428 0-39.403 86.795 9.865 86.795z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),s("g",[s("path",{attrs:{d:"m502.715 236.915c-7.241-10.349-18.158-16.048-30.738-16.048h-15.889l-6.003-55.197c-1.969-18.149-.599-20.264 5.516-26.287 2.303-2.264 4.89-4.517 7.629-6.901 14.886-12.961 33.413-29.092 35.936-70.343.195-3.189-1.146-6.28-3.609-8.317-2.462-2.037-5.75-2.773-8.847-1.982-5.913 1.51-11.342 2.972-16.133 4.262-34.705 9.348-44.031 11.86-77.656-8.868-54.072-33.338-102.488-44.917-148.017-35.399-38.662 8.083-66.846 29.639-89.493 46.958-1.976 1.511-3.889 2.974-5.752 4.384-18.381-5.228-37.027-2.956-53.045 6.575-19.066 11.346-32.538 32.146-36.038 55.646-5.325 35.907-5.669 49.498-5.691 95.468h-14.862c-12.581 0-23.497 5.699-30.738 16.048-5.988 8.558-9.285 20.095-9.285 32.486 0 28.244 17.485 58.261 49.888 58.261h8.254c7.209 33.414 26.079 68.631 52.754 98.855.252.319.518.626.806.912 10.416 11.693 21.986 22.631 34.513 32.395 1.827 1.424 3.991 2.113 6.141 2.113 2.977 0 5.923-1.324 7.894-3.853 3.395-4.356 2.616-10.64-1.74-14.035-10.738-8.369-20.712-17.636-29.767-27.497v-72.387c0-.087.006-.141.004-.152.107-.153 1.132-1.455 5.608-2.883l107.342-34.438c12.03-3.848 16.575-3.848 28.597-.003l107.366 34.445c4.666 1.489 5.574 2.858 5.585 2.858.001.005.011.058.011.172v72.215c-23.408 25.539-52.472 46.612-83.122 57.988-16.518 6.147-30.542 9.01-44.135 9.01-6.293 0-12.663-.621-19.474-1.898-5.431-1.02-10.654 2.557-11.672 7.985s2.557 10.654 7.985 11.672c8.041 1.508 15.616 2.241 23.16 2.241 16.049 0 32.29-3.262 51.103-10.263 39.496-14.66 77.066-43.379 105.789-80.869 20.741-27.072 34.944-56.686 40.969-84.585h8.252c32.403 0 49.888-30.018 49.888-58.261.001-12.389-3.296-23.926-9.284-32.483zm-452.827 70.747c-21.929 0-29.888-22.882-29.888-38.262 0-8.327 2.014-15.792 5.672-21.02 3.538-5.056 8.232-7.514 14.352-7.514h14.86v57.916c0 2.927.129 5.892.344 8.878h-5.34zm58.855 84.021c-16.997-24.26-28.467-50.386-32.372-74.884-.035-.408-1.487-12.535-1.487-18.015v-26.055l34.211 67.52c-.248 1.355-.352 2.673-.352 3.917zm279.974-67.683c-1.501-.69-3.145-1.334-4.963-1.914l-107.359-34.443c-16.01-5.12-24.778-5.121-40.798.003l-107.335 34.436c-1.822.581-3.473 1.223-4.983 1.91l-46.113-91.011c25.769-23.952 44.741-32.357 73.338-40.391 6.288-1.767 12.775-2.807 19.31-2.173 6.192.6 12.181 2.49 18.118 4.254 4.021 1.195 8.047 2.375 12.105 3.438 97.081 25.379 135.889 29.885 213.207 38.862 5.914.687 12.064 1.401 18.48 2.152zm46.91-7.168c-3.952 24.788-15.602 50.786-32.371 74.685v-47.351c0-1.14-.096-2.459-.368-3.884l34.228-67.553v26.055c.384 8.568-1.449 17.571-1.489 18.048zm-5.425-149.003 5.616 51.635c-7.067-.829-13.804-1.611-20.267-2.361-76.39-8.869-114.732-13.32-210.452-38.344-7.923-2.074-15.684-4.773-23.665-6.625-7.575-1.757-15.292-2.387-23.031-1.498-4.503.518-8.948 1.473-13.309 2.698-26.879 7.552-46.815 15.787-70.188 35.026.117-35.134.85-48.978 5.454-80.022 2.624-17.616 12.524-33.092 26.483-41.399 8.695-5.174 22.91-9.94 41.247-3.26 3.153 1.148 6.671.639 9.37-1.356 3.263-2.413 6.585-4.954 10.103-7.644 43.656-33.387 103.447-79.114 214.862-10.421 40.979 25.261 56.312 21.131 93.353 11.155.542-.146 1.091-.294 1.649-.444-4.559 22.601-16.106 32.655-27.331 42.429-2.842 2.475-5.782 5.034-8.524 7.729-13.09 12.896-13.517 22.914-11.37 42.702zm31.91 139.833h-5.333c.217-2.995.337-5.958.337-8.878v-57.916h14.86c6.119 0 10.813 2.458 14.352 7.514 3.658 5.227 5.672 12.692 5.672 21.02 0 15.378-7.959 38.26-29.888 38.26z"}}),s("path",{attrs:{d:"m172.404 253.408c-5.523 0-10 4.477-10 10v11.31c0 5.523 4.477 10 10 10s10-4.477 10-10v-11.31c0-5.523-4.477-10-10-10z"}}),s("path",{attrs:{d:"m339.596 253.408c-5.523 0-10 4.477-10 10v11.31c0 5.523 4.477 10 10 10s10-4.477 10-10v-11.31c0-5.523-4.477-10-10-10z"}}),s("path",{attrs:{d:"m195.246 467.199c-4.939-2.47-10.947-.468-13.417 4.472s-.468 10.947 4.472 13.417l.057.028c1.432.716 2.952 1.055 4.447 1.055 3.664 0 7.187-2.034 8.941-5.542 2.47-4.939.44-10.96-4.5-13.43z"}})])])])]),s("span",{staticClass:"popup-addressCaption"},[t._v("成人: "+t._s(e.properties.mask_adult))])]),s("div",{staticClass:"popup-wrapp"},[s("span",{staticClass:"popup-addressIcon"},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"512",height:"512"}},[s("g",{attrs:{id:"Filled_Outline","data-name":"Filled Outline"}},[s("rect",{staticStyle:{fill:"#60d1e0"},attrs:{x:"97.608",y:"154.177",width:"316.784",height:"203.647",transform:"translate(-106.039 256) rotate(-45)"}}),s("path",{staticStyle:{fill:"#5ac6d4"},attrs:{d:"M440,216,216,440l-93.58-93.58c92.69-39.76,189.64-99.58,262.14-185.86Z"}}),s("path",{attrs:{d:"M408.8,16a86.626,86.626,0,0,0-61.657,25.539L312,76.686,301.657,66.343a8,8,0,0,0-11.314,0l-224,224a8,8,0,0,0,0,11.314L76.686,312,41.539,347.146A87.2,87.2,0,0,0,164.853,470.461L200,435.314l10.343,10.343a8,8,0,0,0,11.314,0l224-224a8,8,0,0,0,0-11.314L435.314,200l35.147-35.146A87.2,87.2,0,0,0,408.8,16ZM296,83.313,324.686,112,112,324.686,83.314,296ZM155.314,368,368,155.314,388.686,176,176,388.686ZM144,356.686,123.314,336,336,123.314,356.686,144Zm9.539,102.46A71.2,71.2,0,1,1,52.853,358.461L88,323.314,188.686,424ZM216,428.687,187.314,400,400,187.314,428.686,216ZM459.147,153.539,424,188.686,323.314,88l35.147-35.146A71.2,71.2,0,1,1,459.147,153.539Z"}})])])]),s("span",{staticClass:"popup-addressCaption"},[t._v("兒童: "+t._s(e.properties.mask_child))])])])])]),s("l-icon",{attrs:{"icon-url":t.iconPerAmount(e),"icon-size":t.iconSize}})],1)})),1)],1)],1)},i=[],c=s("e11e"),l=s.n(c),p=s("2699"),d=s("a40a"),u=s("4e2b"),h=s("fbba"),m=s("f60f"),y=s("ca9f"),v=s.n(y),g=s("e4a0"),f=s.n(g),w=s("d2ce"),k=s.n(w),C=s("07ef"),T=s.n(C);delete c["Icon"].Default.prototype._getIconUrl,c["Icon"].Default.mergeOptions({iconRetinaUrl:s("584d"),iconUrl:s("6397"),shadowUrl:s("e2b9")});var _={name:"LeafletMap",components:{LMap:p["a"],LTileLayer:d["a"],LMarker:u["a"],LIcon:h["a"],L:l.a,"v-marker-cluster":v.a,LPopup:m["a"]},data(){return{url:"https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}@2x.png?key=9oeahMFWIODM5nvypMGz",attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',icons:{adults:f.a,children:k.a,low:T.a},iconSize:[35,35],iconBig:[100,100],clusterOptions:{disableClusteringAtZoom:17}}},computed:{locations(){return this.$store.state.newArr},center(){return this.$store.state.center},zoom(){return this.$store.state.zoom}},methods:{getLatLong(t,e){return l.a.latLng(t,e)},updateZoom(t){this.$store.commit("updateCurrentZoom",t)},iconPerAmount(t){return t.properties.mask_adult>200?this.icons.adults:t.properties.mask_child>200?this.icons.children:this.icons.low}}},b=_,B=(s("7e3b"),s("2877")),x=Object(B["a"])(b,n,i,!1,null,null,null),M=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topBar",class:!0===t.isPopup?"":"topBar--isClosed"},[!0!==t.isPopup?s("div",{staticClass:"topBar-intro"},[s("button",{staticClass:"topBar-button2",on:{click:t.showMainPopup}},[t._v("Show Settings Panel")])]):s("div",{staticClass:"topBar-context"},[s("div",{staticClass:"topBar-close",on:{click:t.hideMainPopup}},[s("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[s("path",{staticStyle:{fill:"#E04F5F"},attrs:{d:"M95.248,0h321.504C469.36,0,512,42.64,512,95.248v321.504C512,469.36,469.36,512,416.752,512H95.248\n\tC42.64,512,0,469.36,0,416.752V95.248C0,42.64,42.64,0,95.248,0z"}}),s("g",{attrs:{transform:"matrix(-0.7071 0.7071 -0.7071 -0.7071 77.25 32)"}},[s("rect",{staticStyle:{fill:"#FFFFFF"},attrs:{x:"-126.658",y:"-296.765",width:"317.36",height:"24"}}),s("rect",{staticStyle:{fill:"#FFFFFF"},attrs:{x:"20.022",y:"-443.445",width:"24",height:"317.36"}})]),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g"),s("g")])]),s("div",{staticClass:"topBar-top"},[s("h1",{staticClass:"topBar-title"},[t._v(t._s(t.translate.message)),s("br"),t._v("今天是"+t._s(t.todayDate))]),t._m(0)]),s("div",{staticClass:"topBar-bottom"},[s("div",{staticClass:"topBar-bottomSection"},[s("h3",{staticClass:"topBar-subtitle"},[t._v("Store Locator")]),s("div",{staticClass:"topBar-radioGroup"},[s("div",{staticClass:"topBar-theradio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBy,expression:"searchBy"}],staticClass:"topBar-radio",attrs:{name:"searchBy",type:"radio",value:"selectionAddress"},domProps:{checked:t._q(t.searchBy,"selectionAddress")},on:{change:function(e){t.searchBy="selectionAddress"}}}),s("label",{staticClass:"topbar-caption"},[t._v("選項")])]),s("div",{staticClass:"topBar-theradio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBy,expression:"searchBy"}],staticClass:"topBar-radio",attrs:{name:"searchBy",type:"radio",value:"manualAddress"},domProps:{checked:t._q(t.searchBy,"manualAddress")},on:{change:function(e){t.searchBy="manualAddress"}}}),s("label",{staticClass:"topbar-caption"},[t._v("填寫地址")])])]),!0===t.isWarningText?s("div",{staticClass:"topBar-warningText"},[s("h4",[t._v("Sorry bruh, no results!")])]):t._e(),"manualAddress"===t.searchBy?s("div",{staticClass:"topBar-inputGroup"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"topBar-input",attrs:{type:"text",placeholder:t.translate.inputPlaceholder},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),s("button",{staticClass:"topBar-button",on:{click:t.getKeyword}},[t._v("搜尋")])]):t._e(),"selectionAddress"===t.searchBy?s("div",{staticClass:"topBar-selectGroup"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCounty,expression:"selectedCounty"}],staticClass:"topBar-select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCounty=e.target.multiple?s:s[0]},t.changeSelectedCounty]}},[s("option",{attrs:{default:"",selected:"",disabled:"",value:""}},[t._v(t._s(t.translate.selectCounty))]),t._l(t.counties,(function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}))],2),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedTown,expression:"selectedTown"}],staticClass:"topBar-select",on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedTown=e.target.multiple?s:s[0]},t.changeSelectedTown]}},[s("option",{attrs:{default:"",selected:"",disabled:"",value:""}},[t._v(t._s(t.translate.selectTown))]),t._l(t.towns,(function(e,a){return s("option",{key:a,domProps:{value:e}},[t._v(t._s(e))])}))],2)]):t._e()]),s("div",{staticClass:"topBar-bottomSection"},[s("h3",{staticClass:"topBar-subtitle"},[t._v("Mask Type")]),s("div",{staticClass:"topBar-radioGroup"},[s("div",{staticClass:"topBar-theradio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.maskType,expression:"maskType"}],staticClass:"topBar-radio",attrs:{name:"maskTypes",type:"radio",value:"allMaskTypes"},domProps:{checked:t._q(t.maskType,"allMaskTypes")},on:{change:[function(e){t.maskType="allMaskTypes"},t.changeMaskType]}}),s("label",{staticClass:"topbar-caption"},[t._v("成人與兒童用的")])]),s("div",{staticClass:"topBar-theradio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.maskType,expression:"maskType"}],staticClass:"topBar-radio",attrs:{name:"maskTypes",type:"radio",value:"childrenMaskType"},domProps:{checked:t._q(t.maskType,"childrenMaskType")},on:{change:[function(e){t.maskType="childrenMaskType"},t.changeMaskType]}}),s("label",{staticClass:"topbar-caption"},[t._v("兒童用的")])])])])])])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"topBar-caption"},[t._v("Let's combat Coronavirus!"),s("br"),t._v("This simple app will help you get masks for you and your beloved ones!")])}];const $=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],L={computed:{dayOfToday(){return $[(new Date).getDay()]}}};var A={name:"TopBar",mixins:[L],data(){return{keyword:"",selectedCounty:this.$store.state.selectedCounty,selectedTown:this.$store.state.selectedTown,translate:{selectTown:"地區",selectCounty:"城市",inputPlaceholder:"地址",message:"哈囉!"},maskType:this.$store.state.maskType,searchBy:this.$store.state.searchBy}},computed:{newArr(){return this.$store.getters.update},todayDate(){return this.dayOfToday},isPopup(){return this.$store.state.isPopup},towns(){return this.$store.state.towns},counties(){return this.$store.state.counties},isWarningText(){return this.$store.state.isWarningText}},methods:{getKeyword(){this.$store.dispatch("setNewKeyword",this.keyword),this.$store.getters.update,this.checkNoZeroLocations(),this.$store.getters.center},clearKeyword(){this.$store.dispatch("setNewKeyword","")},emptyTown(){this.$store.dispatch("setNewSelectedTown","")},defaultZoom(){this.$store.dispatch("setNewZoom",14)},changeSelectedCounty(){this.clearKeyword(),this.emptyTown(),this.$store.dispatch("setNewSelectedCounty",this.selectedCounty),this.$store.getters.towns,this.$store.getters.update,this.checkNoZeroLocations(),this.$store.getters.center},changeSelectedTown(){this.clearKeyword(),this.$store.dispatch("setNewSelectedTown",this.selectedTown),this.$store.getters.update,this.checkNoZeroLocations(),this.$store.getters.center},changeMaskType(){this.$store.dispatch("setMaskType",this.maskType),this.$store.getters.update,this.checkNoZeroLocations()},changeSearchBy(){this.$store.dispatch("setSearchBy",this.searchBy)},setIsPopup(t){this.$store.dispatch("setIsPopup",t)},checkNoZeroLocations(){0===this.newArr.length?(this.setIsPopup(!0),this.$store.dispatch("setIsWarningText",!0)):(this.setIsPopup(!1),this.$store.dispatch("setIsWarningText",!1))},hideMainPopup(){this.setIsPopup(!1)},showMainPopup(){this.setIsPopup(!0)}}},z=A,I=(s("481a"),Object(B["a"])(z,S,P,!1,null,null,null)),N=I.exports,O=s("bc3a"),Z=s.n(O);const F="https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json",j={methods:{getLocations(){return Z.a.get(F).then(t=>t.data.features)}}};var W={name:"App",components:{LeafletMap:M,TopBar:N},mixins:[j],created(){this.getAPI(),document.title="Mask Locator - Combat Coronavirus, Taiwan!"},computed:{collectTowns(){return this.$store.getters.towns},collectCounties(){return this.$store.getters.counties},updateNewArr(){return this.$store.getters.update}},methods:{async getAPI(){try{const t=await this.getLocations();this.$store.commit("initLocationsArray",t),this.collectTowns,this.collectCounties,this.updateNewArr}catch(t){console.log(t)}}}},K=W,D=(s("cf25"),Object(B["a"])(K,r,o,!1,null,null,null)),E=D.exports,G=(s("6cc5"),s("2f62"));a["a"].use(G["a"]);const U=new G["a"].Store({state:{locations:[],newArr:[],towns:[],counties:[],center:l.a.latLng(25.054968,121.537027),zoom:13,keyword:"",selectedCounty:"臺北市",selectedTown:"",searchBy:"selectionAddress",maskType:"allMaskTypes",isPopup:!0,isWarningText:!1},mutations:{initLocationsArray(t,e){t.locations=e},updateKeyword(t,e){t.keyword=e},updateIsPopup(t,e){t.isPopup=e},updateSelectedCounty(t,e){t.selectedCounty=e},updateSelectedTown(t,e){t.selectedTown=e},updateCurrentZoom(t,e){t.zoom=e},updateMaskType(t,e){t.maskType=e},updateSearchBy(t,e){t.searchBy=e},updateIsWarningText(t,e){t.isWarningText=e}},actions:{setInitLocationsArray(t,e){t.commit("initLocationsArray",e)},setNewSelectedCounty(t,e){t.commit("updateSelectedCounty",e)},setNewSelectedTown(t,e){t.commit("updateSelectedTown",e)},setNewKeyword(t,e){t.commit("updateKeyword",e)},setNewZoom(t,e){t.commit("updateCurrentZoom",e)},setMaskType(t,e){t.commit("updateMaskType",e)},setSearchBy(t,e){t.commit("updateSearchBy",e)},setIsPopup(t,e){t.commit("updateIsPopup",e)},setIsWarningText(t,e){t.commit("updateIsWarningText",e)}},getters:{towns(t){const e=U.state.locations.map(e=>{if(t.selectedCounty===e.properties.county)return e.properties.town}),s=[...new Set(e)];return t.towns=s.filter(t=>t)},counties(t){const e=U.state.locations.map(t=>t.properties.county),s=[...new Set(e)];return t.counties=s.filter(t=>t)},update(t){const e=t.locations,s=t.keyword,a=t.selectedTown,r=t.selectedCounty,o=t.maskType,n=r.replace("臺","台"),i=n+a,c=e.filter(t=>""!==s?"allMaskTypes"===o?t.properties.address.includes(s)&&t.properties.mask_adult>10&&t.properties.mask_child>10:t.properties.address.includes(s)&&t.properties.mask_child>200:""!==i?"allMaskTypes"===o?t.properties.address.includes(i)&&t.properties.mask_adult>10&&t.properties.mask_child>10:t.properties.address.includes(i)&&t.properties.mask_child>200:void 0);return t.newArr=c},center(t){const e=t.newArr[0].geometry.coordinates[1],s=t.newArr[0].geometry.coordinates[0];t.center=l.a.latLng(e,s)}}});a["a"].config.productionTip=!1,new a["a"]({store:U,render:t=>t(E)}).$mount("#app")},"7e3b":function(t,e,s){"use strict";var a=s("2741"),r=s.n(a);r.a},cf25:function(t,e,s){"use strict";var a=s("fea6"),r=s.n(a);r.a},d2ce:function(t,e,s){t.exports=s.p+"img/marker-children.1b21361c.png"},e4a0:function(t,e,s){t.exports=s.p+"img/marker-adults.b4bf997b.png"},f2e7:function(t,e,s){},fea6:function(t,e,s){}});
//# sourceMappingURL=app.fffd238c.js.map