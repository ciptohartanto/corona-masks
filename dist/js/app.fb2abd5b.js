(function(t){function e(e){for(var s,n,i=e[0],l=e[1],c=e[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2741:function(t,e,a){},"3b84":function(t,e,a){t.exports=a.p+"img/marker.ad2784db.png"},"481a":function(t,e,a){"use strict";var s=a("f2e7"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("leaflet-map",{attrs:{locations:t.newArr,center:t.current.center,zoom:t.current.zoom},on:{markerIndex:t.setMarkerIndex,updateNewZoom:t.setNewZoom}}),a("top-bar",{attrs:{locations:t.newArr,countyData:t.countyList,townData:t.townList,selectedCounty:t.selectedCounty},on:{gotKeyword:t.goToNewArea,gotSelectedCounty:t.setSelectedCounty,gotSelectedTown:t.setSelectedTown,gotMaskType:t.setMaskType}})],1)},o=[],n=a("bc3a"),i=a.n(n),l=a("e11e"),c=a.n(l),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mapid"}},[a("l-map",{staticStyle:{width:"100%",height:"100vh"},attrs:{zoom:t.zoom,center:t.center},on:{"update:center":t.updateCenter,"update:zoom":t.updateZoom}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),a("v-marker-cluster",{attrs:{options:t.clusterOptions}},t._l(t.locations,(function(e,s){return a("l-marker",{key:s,attrs:{"lat-lng":t.getLatLong(e.geometry.coordinates[1],e.geometry.coordinates[0])},on:{click:function(e){return t.getMarkerIndex(s)}}},[a("l-popup",[a("address",{staticClass:"popup-address"},[a("span",{staticClass:"popup-addressTitle"},[t._v(t._s(e.properties.name))]),a("div",{staticClass:"popup-stackUp"},[a("span",{staticClass:"popup-addressSubtitle"},[t._v(t._s(e.properties.address))]),a("span",{staticClass:"popup-addressSubtitle"},[t._v(t._s(e.properties.phone))])]),a("div",{staticClass:"popup-mainInfo"},[a("div",{staticClass:"popup-wrapp"},[a("span",{staticClass:"popup-addressIcon"},[a("svg",{attrs:{id:"Capa_1","enable-background":"new 0 0 512 512",height:"512",viewBox:"0 0 512 512",width:"512",xmlns:"http://www.w3.org/2000/svg"}},[a("g",[a("g",[a("path",{attrs:{"clip-rule":"evenodd",d:"m303.623 483.741c33.846-12.557 65.028-35.688 89.634-63.41v-76.165c0-1.814-.397-3.373-1.134-4.762-2.041-3.912-6.548-6.236-11.424-7.795l-107.351-34.44c-14.003-4.479-20.693-4.479-34.697 0l-107.351 34.44c-4.876 1.559-9.383 3.883-11.424 7.795-.737 1.361-1.134 2.948-1.134 4.762v76.165c24.605 27.722 55.787 50.853 89.634 63.41 17.292 6.435 32.457 9.638 47.623 9.638 15.167-.001 30.332-3.204 47.624-9.638z",fill:"#bfdbff","fill-rule":"evenodd"}})]),a("g",[a("path",{attrs:{"clip-rule":"evenodd",d:"m147.799 182.962c22.904-6.435 32.571-.34 54.767 5.471 109.08 28.516 143.635 30.443 244.551 42.434l-6.973-64.118c-2.069-19.077-1.077-25.114 8.447-34.497 15.081-14.825 37.872-26.22 40.593-70.723-49.069 12.529-59.16 20.324-101.511-5.783-126.57-78.036-192.619-13.663-236.16 18.538-39.913-14.542-75.29 13.946-81.045 52.581-5.528 37.275-5.584 49.549-5.584 104.001 29.481-28.771 50.628-38.833 82.915-47.904z",fill:"#ffda8f","fill-rule":"evenodd"}})]),a("g",[a("path",{attrs:{"clip-rule":"evenodd",d:"m118.743 420.331v-76.165c0-1.814.397-3.401 1.134-4.762l-54.993-108.537v67.917c0 6.179.539 12.472 1.531 18.878 5.357 34.468 24.661 71.488 52.328 102.669z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),a("g",[a("path",{attrs:{"clip-rule":"evenodd",d:"m131.301 331.608 107.351-34.44c14.003-4.479 20.693-4.479 34.697 0l107.351 34.44c4.876 1.559 9.383 3.883 11.424 7.795l54.993-108.536c-100.916-11.99-135.471-13.918-244.551-42.434-22.196-5.811-31.862-11.905-54.767-5.471-32.287 9.071-53.434 19.133-82.915 47.905l54.993 108.536c2.041-3.912 6.548-6.236 11.424-7.795z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),a("g",[a("path",{attrs:{"clip-rule":"evenodd",d:"m393.257 420.331c27.667-31.181 46.971-68.2 52.329-102.669.992-6.406 1.531-12.699 1.531-18.878v-67.917l-54.993 108.536c.737 1.389 1.134 2.948 1.134 4.762v76.166z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),a("g",[a("path",{attrs:{"clip-rule":"evenodd",d:"m462.112 317.662c49.267 0 53.293-86.795 9.865-86.795h-24.86v67.917c0 6.179-.539 12.472-1.531 18.878z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),a("g",[a("path",{attrs:{"clip-rule":"evenodd",d:"m66.414 317.662c-.992-6.406-1.531-12.699-1.531-18.878v-67.917h-24.86c-43.428 0-39.403 86.795 9.865 86.795z",fill:"#ffdcd5","fill-rule":"evenodd"}})]),a("g",[a("path",{attrs:{d:"m502.715 236.915c-7.241-10.349-18.158-16.048-30.738-16.048h-15.889l-6.003-55.197c-1.969-18.149-.599-20.264 5.516-26.287 2.303-2.264 4.89-4.517 7.629-6.901 14.886-12.961 33.413-29.092 35.936-70.343.195-3.189-1.146-6.28-3.609-8.317-2.462-2.037-5.75-2.773-8.847-1.982-5.913 1.51-11.342 2.972-16.133 4.262-34.705 9.348-44.031 11.86-77.656-8.868-54.072-33.338-102.488-44.917-148.017-35.399-38.662 8.083-66.846 29.639-89.493 46.958-1.976 1.511-3.889 2.974-5.752 4.384-18.381-5.228-37.027-2.956-53.045 6.575-19.066 11.346-32.538 32.146-36.038 55.646-5.325 35.907-5.669 49.498-5.691 95.468h-14.862c-12.581 0-23.497 5.699-30.738 16.048-5.988 8.558-9.285 20.095-9.285 32.486 0 28.244 17.485 58.261 49.888 58.261h8.254c7.209 33.414 26.079 68.631 52.754 98.855.252.319.518.626.806.912 10.416 11.693 21.986 22.631 34.513 32.395 1.827 1.424 3.991 2.113 6.141 2.113 2.977 0 5.923-1.324 7.894-3.853 3.395-4.356 2.616-10.64-1.74-14.035-10.738-8.369-20.712-17.636-29.767-27.497v-72.387c0-.087.006-.141.004-.152.107-.153 1.132-1.455 5.608-2.883l107.342-34.438c12.03-3.848 16.575-3.848 28.597-.003l107.366 34.445c4.666 1.489 5.574 2.858 5.585 2.858.001.005.011.058.011.172v72.215c-23.408 25.539-52.472 46.612-83.122 57.988-16.518 6.147-30.542 9.01-44.135 9.01-6.293 0-12.663-.621-19.474-1.898-5.431-1.02-10.654 2.557-11.672 7.985s2.557 10.654 7.985 11.672c8.041 1.508 15.616 2.241 23.16 2.241 16.049 0 32.29-3.262 51.103-10.263 39.496-14.66 77.066-43.379 105.789-80.869 20.741-27.072 34.944-56.686 40.969-84.585h8.252c32.403 0 49.888-30.018 49.888-58.261.001-12.389-3.296-23.926-9.284-32.483zm-452.827 70.747c-21.929 0-29.888-22.882-29.888-38.262 0-8.327 2.014-15.792 5.672-21.02 3.538-5.056 8.232-7.514 14.352-7.514h14.86v57.916c0 2.927.129 5.892.344 8.878h-5.34zm58.855 84.021c-16.997-24.26-28.467-50.386-32.372-74.884-.035-.408-1.487-12.535-1.487-18.015v-26.055l34.211 67.52c-.248 1.355-.352 2.673-.352 3.917zm279.974-67.683c-1.501-.69-3.145-1.334-4.963-1.914l-107.359-34.443c-16.01-5.12-24.778-5.121-40.798.003l-107.335 34.436c-1.822.581-3.473 1.223-4.983 1.91l-46.113-91.011c25.769-23.952 44.741-32.357 73.338-40.391 6.288-1.767 12.775-2.807 19.31-2.173 6.192.6 12.181 2.49 18.118 4.254 4.021 1.195 8.047 2.375 12.105 3.438 97.081 25.379 135.889 29.885 213.207 38.862 5.914.687 12.064 1.401 18.48 2.152zm46.91-7.168c-3.952 24.788-15.602 50.786-32.371 74.685v-47.351c0-1.14-.096-2.459-.368-3.884l34.228-67.553v26.055c.384 8.568-1.449 17.571-1.489 18.048zm-5.425-149.003 5.616 51.635c-7.067-.829-13.804-1.611-20.267-2.361-76.39-8.869-114.732-13.32-210.452-38.344-7.923-2.074-15.684-4.773-23.665-6.625-7.575-1.757-15.292-2.387-23.031-1.498-4.503.518-8.948 1.473-13.309 2.698-26.879 7.552-46.815 15.787-70.188 35.026.117-35.134.85-48.978 5.454-80.022 2.624-17.616 12.524-33.092 26.483-41.399 8.695-5.174 22.91-9.94 41.247-3.26 3.153 1.148 6.671.639 9.37-1.356 3.263-2.413 6.585-4.954 10.103-7.644 43.656-33.387 103.447-79.114 214.862-10.421 40.979 25.261 56.312 21.131 93.353 11.155.542-.146 1.091-.294 1.649-.444-4.559 22.601-16.106 32.655-27.331 42.429-2.842 2.475-5.782 5.034-8.524 7.729-13.09 12.896-13.517 22.914-11.37 42.702zm31.91 139.833h-5.333c.217-2.995.337-5.958.337-8.878v-57.916h14.86c6.119 0 10.813 2.458 14.352 7.514 3.658 5.227 5.672 12.692 5.672 21.02 0 15.378-7.959 38.26-29.888 38.26z"}}),a("path",{attrs:{d:"m172.404 253.408c-5.523 0-10 4.477-10 10v11.31c0 5.523 4.477 10 10 10s10-4.477 10-10v-11.31c0-5.523-4.477-10-10-10z"}}),a("path",{attrs:{d:"m339.596 253.408c-5.523 0-10 4.477-10 10v11.31c0 5.523 4.477 10 10 10s10-4.477 10-10v-11.31c0-5.523-4.477-10-10-10z"}}),a("path",{attrs:{d:"m195.246 467.199c-4.939-2.47-10.947-.468-13.417 4.472s-.468 10.947 4.472 13.417l.057.028c1.432.716 2.952 1.055 4.447 1.055 3.664 0 7.187-2.034 8.941-5.542 2.47-4.939.44-10.96-4.5-13.43z"}})])])])]),a("span",{staticClass:"popup-addressCaption"},[t._v("成人: "+t._s(e.properties.mask_adult))])]),a("div",{staticClass:"popup-wrapp"},[a("span",{staticClass:"popup-addressIcon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"512",height:"512"}},[a("g",{attrs:{id:"Filled_Outline","data-name":"Filled Outline"}},[a("rect",{staticStyle:{fill:"#60d1e0"},attrs:{x:"97.608",y:"154.177",width:"316.784",height:"203.647",transform:"translate(-106.039 256) rotate(-45)"}}),a("path",{staticStyle:{fill:"#5ac6d4"},attrs:{d:"M440,216,216,440l-93.58-93.58c92.69-39.76,189.64-99.58,262.14-185.86Z"}}),a("path",{attrs:{d:"M408.8,16a86.626,86.626,0,0,0-61.657,25.539L312,76.686,301.657,66.343a8,8,0,0,0-11.314,0l-224,224a8,8,0,0,0,0,11.314L76.686,312,41.539,347.146A87.2,87.2,0,0,0,164.853,470.461L200,435.314l10.343,10.343a8,8,0,0,0,11.314,0l224-224a8,8,0,0,0,0-11.314L435.314,200l35.147-35.146A87.2,87.2,0,0,0,408.8,16ZM296,83.313,324.686,112,112,324.686,83.314,296ZM155.314,368,368,155.314,388.686,176,176,388.686ZM144,356.686,123.314,336,336,123.314,356.686,144Zm9.539,102.46A71.2,71.2,0,1,1,52.853,358.461L88,323.314,188.686,424ZM216,428.687,187.314,400,400,187.314,428.686,216ZM459.147,153.539,424,188.686,323.314,88l35.147-35.146A71.2,71.2,0,1,1,459.147,153.539Z"}})])])]),a("span",{staticClass:"popup-addressCaption"},[t._v("兒童: "+t._s(e.properties.mask_child))])])])])]),a("l-icon",{attrs:{"icon-url":t.icon,"icon-size":t.iconSize}})],1)})),1)],1)],1)},d=[],u=a("2699"),h=a("a40a"),m=a("4e2b"),y=a("fbba"),v=a("f60f"),f=a("ca9f"),w=a.n(f),g=a("3b84"),C=a.n(g);delete l["Icon"].Default.prototype._getIconUrl,l["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var k={name:"LeafletMap",components:{LMap:u["a"],LTileLayer:h["a"],LMarker:m["a"],LIcon:y["a"],L:c.a,"v-marker-cluster":w.a,LPopup:v["a"]},props:{locations:{type:Array,default:()=>[]},zoom:{type:Number,default:()=>0},center:{type:Object,default:()=>{}},isUser:{type:Boolean,default:()=>!1},userLat:{type:Number,default:()=>null},userLong:{type:Number,default:()=>null}},data(){return{url:"https://api.maptiler.com/maps/bright/256/{z}/{x}/{y}@2x.png?key=9oeahMFWIODM5nvypMGz",attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',icon:C.a,iconSize:[35,35],iconBig:[100,100],clusterOptions:{disableClusteringAtZoom:17}}},methods:{getLatLong(t,e){return c.a.latLng(t,e)},userLatLong(t,e){return c.a.latLng(t,e)},getMarkerIndex(t){this.$emit("markerIndex",t)},updateZoom(t){this.$emit("updateNewZoom",t)},updateCenter(t){this.$emit("updateNewCenter",t)}}},b=k,_=(a("7e3b"),a("2877")),T=Object(_["a"])(b,p,d,!1,null,null,null),x=T.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topBar",class:!0===t.isPopupContext?"":"topBar--isClosed"},[!0!==t.isPopupContext?a("div",{staticClass:"topBar-intro"},[a("button",{staticClass:"topBar-button2",on:{click:t.setIsPopupContext}},[t._v("Show Settings Panel")])]):a("div",{staticClass:"topBar-context"},[a("div",{staticClass:"topBar-close",on:{click:t.setIsPopupContext}},[a("svg",{staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[a("path",{staticStyle:{fill:"#E04F5F"},attrs:{d:"M95.248,0h321.504C469.36,0,512,42.64,512,95.248v321.504C512,469.36,469.36,512,416.752,512H95.248\n\tC42.64,512,0,469.36,0,416.752V95.248C0,42.64,42.64,0,95.248,0z"}}),a("g",{attrs:{transform:"matrix(-0.7071 0.7071 -0.7071 -0.7071 77.25 32)"}},[a("rect",{staticStyle:{fill:"#FFFFFF"},attrs:{x:"-126.658",y:"-296.765",width:"317.36",height:"24"}}),a("rect",{staticStyle:{fill:"#FFFFFF"},attrs:{x:"20.022",y:"-443.445",width:"24",height:"317.36"}})]),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g"),a("g")])]),a("div",{staticClass:"topBar-top"},[a("h1",{staticClass:"topBar-title"},[t._v(" "+t._s(t.translate.message)+" "),a("br"),t._v("今天是"+t._s(t.todayDate))]),t._m(0)]),a("div",{staticClass:"topBar-bottom"},[a("div",{staticClass:"topBar-bottomSection"},[a("h3",{staticClass:"topBar-subtitle"},[t._v("Store Locator")]),a("div",{staticClass:"topBar-radioGroup"},[a("div",{staticClass:"topBar-theradio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBy,expression:"searchBy"}],staticClass:"topBar-radio",attrs:{name:"searchBy",type:"radio",value:"selectionAddress"},domProps:{checked:t._q(t.searchBy,"selectionAddress")},on:{change:function(e){t.searchBy="selectionAddress"}}}),a("label",{staticClass:"topbar-caption"},[t._v("選項")])]),a("div",{staticClass:"topBar-theradio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchBy,expression:"searchBy"}],staticClass:"topBar-radio",attrs:{name:"searchBy",type:"radio",value:"manualAddress"},domProps:{checked:t._q(t.searchBy,"manualAddress")},on:{change:function(e){t.searchBy="manualAddress"}}}),a("label",{staticClass:"topbar-caption"},[t._v("填寫地址")])])]),"manualAddress"===t.searchBy?a("div",{staticClass:"topBar-inputGroup"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"topBar-input",attrs:{type:"text",placeholder:t.translate.inputPlaceholder},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),a("button",{staticClass:"topBar-button",on:{click:function(e){t.getKeyword(),t.setIsPopupContext()}}},[t._v("搜尋")])]):t._e(),"selectionAddress"===t.searchBy?a("div",{staticClass:"topBar-selectGroup"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCounty,expression:"selectedCounty"}],staticClass:"topBar-select",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedCounty=e.target.multiple?a:a[0]},t.getSelectedCounty]}},[a("option",{attrs:{default:"",selected:"",disabled:"",value:""}},[t._v(t._s(t.translate.selectCounty))]),t._l(t.countyData,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedTown,expression:"selectedTown"}],staticClass:"topBar-select",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedTown=e.target.multiple?a:a[0]},function(e){t.getSelectedTown(),t.setIsPopupContext()}]}},[a("option",{attrs:{default:"",selected:"",disabled:"",value:""}},[t._v(t._s(t.translate.selectTown))]),t._l(t.townData,(function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))],2)]):t._e()]),a("div",{staticClass:"topBar-bottomSection"},[a("h3",{staticClass:"topBar-subtitle"},[t._v("Mask Type")]),a("div",{staticClass:"topBar-radioGroup"},[a("div",{staticClass:"topBar-theradio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.maskType,expression:"maskType"}],staticClass:"topBar-radio",attrs:{name:"maskTypes",type:"radio",value:"allMaskTypes"},domProps:{checked:t._q(t.maskType,"allMaskTypes")},on:{change:[function(e){t.maskType="allMaskTypes"},t.setMaskTypes]}}),a("label",{staticClass:"topbar-caption"},[t._v("成人與兒童用的")])]),a("div",{staticClass:"topBar-theradio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.maskType,expression:"maskType"}],staticClass:"topBar-radio",attrs:{name:"maskTypes",type:"radio",value:"childrenMaskType"},domProps:{checked:t._q(t.maskType,"childrenMaskType")},on:{change:[function(e){t.maskType="childrenMaskType"},t.setMaskTypes]}}),a("label",{staticClass:"topbar-caption"},[t._v("兒童用的")])])])])])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"topBar-caption"},[t._v("Let's combat Coronavirus! "),a("br"),t._v("This simple app will help you get masks for you and your beloved ones! ")])}],L={name:"TopBar",props:{locations:{type:Array,default:()=>[]},message:{type:String,default:()=>""},countyData:{type:Array,default:()=>[]},townData:{type:Array,default:()=>[]}},data(){return{keyword:"",current:{long:null,lat:null},selectedCounty:"臺北市",selectedTown:"內湖區",translate:{selectTown:"地區",selectCounty:"城市",inputPlaceholder:"地址",message:"哈囉!"},searchBy:"selectionAddress",maskType:"allMaskTypes",isPopupContext:!0}},methods:{getKeyword(){this.isPopup=!1,this.$emit("gotKeyword",this.keyword)},getSelectedCounty(){this.keyword="",this.$emit("gotSelectedCounty",this.selectedCounty)},getSelectedTown(){this.keyword="",this.isPopup=!1,this.$emit("gotSelectedTown",this.selectedTown)},setMaskTypes(){this.$emit("gotMaskType",this.maskType)},setIsPopupContext(){this.isPopupContext=!this.isPopupContext}},computed:{todayDate(){const t=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];return t[(new Date).getDate()-1]}}},A=L,S=(a("481a"),Object(_["a"])(A,B,M,!1,null,null,null)),z=S.exports,P={name:"App",components:{LeafletMap:x,TopBar:z},data(){return{locations:[],keyword:"",newArr:[],current:{center:c.a.latLng(25.054968,121.537027),zoom:15},countyList:[],townList:[],selectedCounty:"臺北市",selectedTown:"內湖區",maskType:"allMaskTypes"}},created(){i.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then(t=>{const e=t.data.features;this.locations=e,this.extractCounties(),this.extractTown(),this.getTheVeryLocation(),this.setMarkerIndex(1)}),document.title="Mask Locator - Combat Coronavirus, Taiwan!"},methods:{newAreaFromKeyword(){const t=this.locations,e=this.keyword,a=this.selectedCounty.replace("臺","台"),s=this.selectedTown,r=a+s;let o=t.filter(t=>""!==e?t.properties.address.includes(e)&&t.properties.mask_adult>2&&t.properties.mask_child>2:t.properties.address.includes(r)&&t.properties.mask_adult>2&&t.properties.mask_child>2);this.newArr=o},goToNewCenter(){const t=this.newArr[0].geometry.coordinates[1],e=this.newArr[0].geometry.coordinates[0];this.current.center=c.a.latLng(t,e)},getTheVeryLocation(){const t=this.locations,e=this.selectedCounty.replace("臺","台"),a=this.selectedTown,s=e+a,r=t.filter(t=>t.properties.address.includes(s));this.newArr=r},goToNewArea(t){this.keyword=t,this.newAreaFromKeyword(),this.goToNewCenter()},setMarkerIndex(t){const e=this.newArr[t].geometry.coordinates[1],a=this.newArr[t].geometry.coordinates[0];this.current.center=c.a.latLng(e,a)},setNewZoom(t){this.current.zoom=t},setNewCenter(t){this.current.center=t},extractCounties(){const t=this.locations.map(t=>t.properties.county),e=[...new Set(t)];this.countyList=e.filter(t=>t)},extractTown(){const t=this.locations.map(t=>{if(this.selectedCounty===t.properties.county)return t.properties.town}),e=[...new Set(t)];this.townList=e.filter(t=>t)},setSelectedCounty(t){this.selectedCounty=t,this.keyword="",this.selectedTown="",this.extractTown(),this.newAreaFromKeyword(),this.goToNewCenter()},setSelectedTown(t){this.selectedTown=t,this.keyword="",this.newAreaFromKeyword(),this.goToNewCenter()},setMaskType(t){this.maskType=t;const e=this.newArr,a=e.filter(t=>"allMaskTypes"===this.maskType?t.properties.mask_adult>2&&t.properties.mask_child>2:t.properties.mask_child>2);this.newArr=a}}},N=P,O=(a("cf25"),Object(_["a"])(N,r,o,!1,null,null,null)),F=O.exports;a("6cc5");s["a"].config.productionTip=!1,new s["a"]({render:t=>t(F)}).$mount("#app")},"7e3b":function(t,e,a){"use strict";var s=a("2741"),r=a.n(s);r.a},cf25:function(t,e,a){"use strict";var s=a("fea6"),r=a.n(s);r.a},f2e7:function(t,e,a){},fea6:function(t,e,a){}});
//# sourceMappingURL=app.fb2abd5b.js.map