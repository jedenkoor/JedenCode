(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);C&&C(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var C=l;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2fb4":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("TheHeader"),r("main",{staticClass:"content"},[r("h1",{staticClass:"visually-hidden"},[t._v("Личный сайт веб-разработчика JedenCode")]),r("router-view")],1),r("TheFooter")],1)},i=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"container header__container"},[r("router-link",{staticClass:"header__logo",attrs:{to:{name:"main"}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"752",height:"176",viewBox:"0 0 752 176",fill:"none"}},[r("path",{attrs:{id:"logo-bg",d:"M748 172.5V3.5H3.5V172L748 172.5Z",fill:"white"}}),r("path",{attrs:{d:"M746.26 175.22H4.97002C2.30002 175.22 0.140015 173.05 0.140015 170.39V5.46989C0.140015 2.79989 2.31002 0.639893 4.97002 0.639893H746.26C748.93 0.639893 751.09 2.80989 751.09 5.46989V170.38C751.09 173.05 748.92 175.22 746.26 175.22ZM4.97002 4.63989C4.51002 4.63989 4.14001 5.00989 4.14001 5.46989V170.38C4.14001 170.84 4.51002 171.21 4.97002 171.21H746.26C746.72 171.21 747.09 170.84 747.09 170.38V5.46989C747.09 5.00989 746.72 4.63989 746.26 4.63989H4.97002Z"}}),r("path",{attrs:{d:"M69.0101 125.63C66.6001 125.63 64.3301 125.19 62.2601 124.33C58.8301 122.9 56.01 120.71 53.88 117.84C50.52 113.29 50.0501 108.46 50.0701 105.98C50.0801 105.27 50.6701 104.69 51.3901 104.69H56.3901C57.1001 104.69 57.68 105.24 57.7 105.94C57.77 107.71 58.2901 111.12 60.9801 114.03C62.2701 115.42 63.8401 116.48 65.6601 117.19C66.8001 117.63 68.0501 117.86 69.3701 117.86H87.0301C88.4601 117.86 89.8301 117.46 91.0001 116.69C92.3901 115.78 93.4801 114.67 94.2401 113.39C95.4201 111.41 95.58 109.4 95.84 105.03C95.95 103.2 95.9401 102.04 95.9201 100.58C95.9101 99.99 95.9101 99.36 95.9101 98.63V51.68C95.9101 50.92 96.5401 50.29 97.3101 50.28L102.63 50.23C103.42 50.23 104.05 50.86 104.06 51.62L104.11 98.62C104.12 100.74 104.03 102.91 103.86 105.05C103.42 110.54 103.18 113.56 101.59 116.73C100.27 119.36 98.22 121.65 95.51 123.56L94.8901 123.96C93.1701 125.06 91.1801 125.64 89.1401 125.64H69.0101V125.63Z"}}),r("path",{attrs:{d:"M128.95 125.54C128.58 125.54 128.28 125.23 128.28 124.86V50.9898C128.28 50.6198 128.58 50.3098 128.95 50.3098H174.65C175.02 50.3098 175.32 50.6098 175.32 50.9898V56.7398C175.32 57.1098 175.02 57.4198 174.65 57.4198H138.03C137.13 57.4198 136.4 58.1598 136.4 59.0698V82.0898C136.4 82.9998 137.13 83.7398 138.03 83.7398H161.88C162.25 83.7398 162.55 84.0398 162.55 84.4198V90.1198C162.55 90.4898 162.25 90.7998 161.88 90.7998H138.03C137.13 90.7998 136.4 91.5398 136.4 92.4498V116.8C136.4 117.71 137.13 118.45 138.03 118.45H174.76C175.13 118.45 175.43 118.75 175.43 119.13V124.88C175.43 125.25 175.13 125.56 174.76 125.56H128.95V125.54Z"}}),r("path",{attrs:{d:"M255.21 69.3799C255.15 64.3299 253.11 59.4399 249.37 55.9599C249.09 55.6999 248.79 55.4299 248.48 55.1699C248.21 54.9399 247.93 54.7199 247.65 54.5099C243.82 51.5999 239.07 50.1799 234.26 50.1799H196.96C196.27 50.1799 195.71 50.7399 195.71 51.4299V123.8C195.71 124.84 196.55 125.69 197.6 125.69H233.75C236.94 125.69 240.1 124.96 242.91 123.48C244.61 122.58 246.46 121.39 248.29 119.81C249.26 118.97 250.12 118.12 250.88 117.27C254.01 113.78 255.65 109.25 255.6 104.61C255.47 92.8599 255.34 81.1199 255.21 69.3799ZM243.99 111.1C243.44 111.76 242.81 112.43 242.1 113.09C240.77 114.32 239.42 115.25 238.19 115.96C236.15 117.12 233.85 117.69 231.52 117.69H203.83V58.6899H232.53C234.24 58.6899 235.94 58.9899 237.53 59.6299C238.97 60.2099 240.63 61.1299 242.25 62.5799C242.48 62.7799 242.69 62.9899 242.9 63.1899C245.63 65.9199 247.11 69.7299 247.15 73.6799C247.24 82.8499 247.34 92.0299 247.43 101.2C247.46 104.83 246.27 108.37 243.99 111.1Z"}}),r("path",{attrs:{d:"M278.77 125.54C278.4 125.54 278.1 125.23 278.1 124.86V50.9898C278.1 50.6198 278.4 50.3098 278.77 50.3098H324.47C324.84 50.3098 325.14 50.6098 325.14 50.9898V56.7398C325.14 57.1098 324.84 57.4198 324.47 57.4198H287.85C286.95 57.4198 286.22 58.1598 286.22 59.0698V82.0898C286.22 82.9998 286.95 83.7398 287.85 83.7398H311.7C312.07 83.7398 312.37 84.0398 312.37 84.4198V90.1198C312.37 90.4898 312.07 90.7998 311.7 90.7998H287.85C286.95 90.7998 286.22 91.5398 286.22 92.4498V116.8C286.22 117.71 286.95 118.45 287.85 118.45H324.58C324.95 118.45 325.25 118.75 325.25 119.13V124.88C325.25 125.25 324.95 125.56 324.58 125.56H278.77V125.54Z"}}),r("path",{attrs:{d:"M400.04 125.63C392.73 116 385.42 106.37 378.11 96.74L354.58 65.79L354.56 125.62L346.57 125.57V50.23C348.65 50.23 350.73 50.23 352.81 50.23C368.67 71.15 384.53 92.07 400.4 112.99V50.23L407.93 50.28L407.88 125.62C405.26 125.63 402.65 125.63 400.04 125.63Z"}}),r("path",{attrs:{d:"M458.4 125.6H445.48C432.1 125.6 421.22 114.67 421.22 101.25V74.62C421.22 61.19 432.1 50.26 445.48 50.26H458.4C470.33 50.26 477.96 57.78 479.33 70.89C479.47 72.18 478.53 73.34 477.23 73.48C475.92 73.61 474.78 72.68 474.64 71.38C474 65.25 471.03 54.97 458.39 54.97H445.47C434.69 54.97 425.93 63.78 425.93 74.61V101.24C425.93 112.07 434.7 120.88 445.47 120.88H458.39C470.34 120.88 473.93 111.31 475.01 105.6C475.25 104.32 476.49 103.48 477.76 103.72C479.04 103.96 479.88 105.19 479.64 106.47C477.35 118.63 469.61 125.6 458.4 125.6Z"}}),r("path",{attrs:{d:"M533.01 125.66H520.23C506.82 125.66 495.91 114.75 495.91 101.34V74.53C495.91 61.12 506.82 50.21 520.23 50.21H533.01C546.42 50.21 557.33 61.12 557.33 74.53V101.34C557.33 114.75 546.42 125.66 533.01 125.66ZM520.23 54.91C509.41 54.91 500.62 63.71 500.62 74.52V101.33C500.62 112.15 509.42 120.94 520.23 120.94H533.01C543.83 120.94 552.62 112.14 552.62 101.33V74.52C552.62 63.7 543.82 54.91 533.01 54.91H520.23V54.91Z"}}),r("path",{attrs:{d:"M578.46 125.68C577.72 125.68 577.12 125.07 577.12 124.33V51.3899C577.12 50.7199 577.66 50.1799 578.33 50.1799H614.58C617.08 50.2899 619.49 50.8299 621.74 51.7999C624.66 53.0499 626.57 54.7099 627.48 55.5099C628.38 56.2899 629.88 57.5899 631.19 59.5599C632.91 62.1299 633.89 65.1299 634.11 68.4799L634.48 103.11C634.52 106.54 633.9 109.73 632.65 112.57C632.39 113.16 631.96 114.15 631.19 115.35C630.9 115.8 630.01 117.18 627.83 119.23C626.28 120.69 624.82 122.06 622.64 123.27C620.07 124.7 617.19 125.51 614.08 125.7H614.07H578.46V125.68ZM581.88 120.94H611.79C614.5 120.94 617.14 120.23 619.43 118.89C620.97 117.99 622.42 116.89 623.73 115.64C624.46 114.94 625.16 114.19 625.8 113.39C628.36 110.23 629.75 106.13 629.71 101.83L629.43 72.9799C629.38 68.3099 627.62 63.8299 624.59 60.7099C624.36 60.4699 624.11 60.2299 623.86 59.9999C622.29 58.5499 620.5 57.3899 618.55 56.5699C616.78 55.8299 614.85 55.4499 612.81 55.4499H581.88V120.94Z"}}),r("path",{attrs:{d:"M655.95 125.68C655.56 125.68 655.25 125.36 655.25 124.97V50.7999C655.25 50.4599 655.53 50.1799 655.87 50.1799H701.88L701.83 53.6699L661.44 53.6199C660.68 53.6199 660.06 54.2499 660.06 55.0099V84.5199C660.06 85.2899 660.68 85.9199 661.44 85.9199L687.2 85.8099C687.27 85.8099 687.33 85.8699 687.33 85.9399V89.0599C687.33 89.1299 687.27 89.1899 687.2 89.1899L661.43 89.2999C660.67 89.2999 660.05 89.9299 660.05 90.6899V120.9C660.05 121.67 660.67 122.3 661.43 122.3H701.91L701.86 125.69H655.95V125.68Z"}})])]),r("BaseThemeToggle")],1)])},o=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"header__toggle theme-toggle",on:{click:function(e){return e.preventDefault(),t.changeTheme(e)}}},[r("span",{staticClass:"moon"}),r("span",{staticClass:"sun"}),r("small",{staticClass:"sun__ray"}),r("small",{staticClass:"sun__ray"}),r("small",{staticClass:"sun__ray"}),r("small",{staticClass:"sun__ray"}),r("small",{staticClass:"sun__ray"}),r("small",{staticClass:"sun__ray"})])},c=[],C={methods:{changeTheme:function(){var t=document.querySelector("html").classList;t.toggle("light-theme"),t.contains("light-theme")?localStorage.setItem("theme","light"):localStorage.removeItem("theme")}},created:function(){"light"===localStorage.getItem("theme")&&document.querySelector("html").classList.add("light-theme")}},u=C,p=r("2877"),d=Object(p["a"])(u,l,c,!1,null,null,null),h=d.exports,f={components:{BaseThemeToggle:h}},g=f,m=Object(p["a"])(g,n,o,!1,null,null,null),j=m.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"container footer__container"},[r("router-link",{staticClass:"header__logo",attrs:{to:{name:"main"}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"752",height:"176",viewBox:"0 0 752 176",fill:"none"}},[r("path",{attrs:{id:"logo-bg",d:"M748 172.5V3.5H3.5V172L748 172.5Z",fill:"white"}}),r("path",{attrs:{d:"M746.26 175.22H4.97002C2.30002 175.22 0.140015 173.05 0.140015 170.39V5.46989C0.140015 2.79989 2.31002 0.639893 4.97002 0.639893H746.26C748.93 0.639893 751.09 2.80989 751.09 5.46989V170.38C751.09 173.05 748.92 175.22 746.26 175.22ZM4.97002 4.63989C4.51002 4.63989 4.14001 5.00989 4.14001 5.46989V170.38C4.14001 170.84 4.51002 171.21 4.97002 171.21H746.26C746.72 171.21 747.09 170.84 747.09 170.38V5.46989C747.09 5.00989 746.72 4.63989 746.26 4.63989H4.97002Z"}}),r("path",{attrs:{d:"M69.0101 125.63C66.6001 125.63 64.3301 125.19 62.2601 124.33C58.8301 122.9 56.01 120.71 53.88 117.84C50.52 113.29 50.0501 108.46 50.0701 105.98C50.0801 105.27 50.6701 104.69 51.3901 104.69H56.3901C57.1001 104.69 57.68 105.24 57.7 105.94C57.77 107.71 58.2901 111.12 60.9801 114.03C62.2701 115.42 63.8401 116.48 65.6601 117.19C66.8001 117.63 68.0501 117.86 69.3701 117.86H87.0301C88.4601 117.86 89.8301 117.46 91.0001 116.69C92.3901 115.78 93.4801 114.67 94.2401 113.39C95.4201 111.41 95.58 109.4 95.84 105.03C95.95 103.2 95.9401 102.04 95.9201 100.58C95.9101 99.99 95.9101 99.36 95.9101 98.63V51.68C95.9101 50.92 96.5401 50.29 97.3101 50.28L102.63 50.23C103.42 50.23 104.05 50.86 104.06 51.62L104.11 98.62C104.12 100.74 104.03 102.91 103.86 105.05C103.42 110.54 103.18 113.56 101.59 116.73C100.27 119.36 98.22 121.65 95.51 123.56L94.8901 123.96C93.1701 125.06 91.1801 125.64 89.1401 125.64H69.0101V125.63Z"}}),r("path",{attrs:{d:"M128.95 125.54C128.58 125.54 128.28 125.23 128.28 124.86V50.9898C128.28 50.6198 128.58 50.3098 128.95 50.3098H174.65C175.02 50.3098 175.32 50.6098 175.32 50.9898V56.7398C175.32 57.1098 175.02 57.4198 174.65 57.4198H138.03C137.13 57.4198 136.4 58.1598 136.4 59.0698V82.0898C136.4 82.9998 137.13 83.7398 138.03 83.7398H161.88C162.25 83.7398 162.55 84.0398 162.55 84.4198V90.1198C162.55 90.4898 162.25 90.7998 161.88 90.7998H138.03C137.13 90.7998 136.4 91.5398 136.4 92.4498V116.8C136.4 117.71 137.13 118.45 138.03 118.45H174.76C175.13 118.45 175.43 118.75 175.43 119.13V124.88C175.43 125.25 175.13 125.56 174.76 125.56H128.95V125.54Z"}}),r("path",{attrs:{d:"M255.21 69.3799C255.15 64.3299 253.11 59.4399 249.37 55.9599C249.09 55.6999 248.79 55.4299 248.48 55.1699C248.21 54.9399 247.93 54.7199 247.65 54.5099C243.82 51.5999 239.07 50.1799 234.26 50.1799H196.96C196.27 50.1799 195.71 50.7399 195.71 51.4299V123.8C195.71 124.84 196.55 125.69 197.6 125.69H233.75C236.94 125.69 240.1 124.96 242.91 123.48C244.61 122.58 246.46 121.39 248.29 119.81C249.26 118.97 250.12 118.12 250.88 117.27C254.01 113.78 255.65 109.25 255.6 104.61C255.47 92.8599 255.34 81.1199 255.21 69.3799ZM243.99 111.1C243.44 111.76 242.81 112.43 242.1 113.09C240.77 114.32 239.42 115.25 238.19 115.96C236.15 117.12 233.85 117.69 231.52 117.69H203.83V58.6899H232.53C234.24 58.6899 235.94 58.9899 237.53 59.6299C238.97 60.2099 240.63 61.1299 242.25 62.5799C242.48 62.7799 242.69 62.9899 242.9 63.1899C245.63 65.9199 247.11 69.7299 247.15 73.6799C247.24 82.8499 247.34 92.0299 247.43 101.2C247.46 104.83 246.27 108.37 243.99 111.1Z"}}),r("path",{attrs:{d:"M278.77 125.54C278.4 125.54 278.1 125.23 278.1 124.86V50.9898C278.1 50.6198 278.4 50.3098 278.77 50.3098H324.47C324.84 50.3098 325.14 50.6098 325.14 50.9898V56.7398C325.14 57.1098 324.84 57.4198 324.47 57.4198H287.85C286.95 57.4198 286.22 58.1598 286.22 59.0698V82.0898C286.22 82.9998 286.95 83.7398 287.85 83.7398H311.7C312.07 83.7398 312.37 84.0398 312.37 84.4198V90.1198C312.37 90.4898 312.07 90.7998 311.7 90.7998H287.85C286.95 90.7998 286.22 91.5398 286.22 92.4498V116.8C286.22 117.71 286.95 118.45 287.85 118.45H324.58C324.95 118.45 325.25 118.75 325.25 119.13V124.88C325.25 125.25 324.95 125.56 324.58 125.56H278.77V125.54Z"}}),r("path",{attrs:{d:"M400.04 125.63C392.73 116 385.42 106.37 378.11 96.74L354.58 65.79L354.56 125.62L346.57 125.57V50.23C348.65 50.23 350.73 50.23 352.81 50.23C368.67 71.15 384.53 92.07 400.4 112.99V50.23L407.93 50.28L407.88 125.62C405.26 125.63 402.65 125.63 400.04 125.63Z"}}),r("path",{attrs:{d:"M458.4 125.6H445.48C432.1 125.6 421.22 114.67 421.22 101.25V74.62C421.22 61.19 432.1 50.26 445.48 50.26H458.4C470.33 50.26 477.96 57.78 479.33 70.89C479.47 72.18 478.53 73.34 477.23 73.48C475.92 73.61 474.78 72.68 474.64 71.38C474 65.25 471.03 54.97 458.39 54.97H445.47C434.69 54.97 425.93 63.78 425.93 74.61V101.24C425.93 112.07 434.7 120.88 445.47 120.88H458.39C470.34 120.88 473.93 111.31 475.01 105.6C475.25 104.32 476.49 103.48 477.76 103.72C479.04 103.96 479.88 105.19 479.64 106.47C477.35 118.63 469.61 125.6 458.4 125.6Z"}}),r("path",{attrs:{d:"M533.01 125.66H520.23C506.82 125.66 495.91 114.75 495.91 101.34V74.53C495.91 61.12 506.82 50.21 520.23 50.21H533.01C546.42 50.21 557.33 61.12 557.33 74.53V101.34C557.33 114.75 546.42 125.66 533.01 125.66ZM520.23 54.91C509.41 54.91 500.62 63.71 500.62 74.52V101.33C500.62 112.15 509.42 120.94 520.23 120.94H533.01C543.83 120.94 552.62 112.14 552.62 101.33V74.52C552.62 63.7 543.82 54.91 533.01 54.91H520.23V54.91Z"}}),r("path",{attrs:{d:"M578.46 125.68C577.72 125.68 577.12 125.07 577.12 124.33V51.3899C577.12 50.7199 577.66 50.1799 578.33 50.1799H614.58C617.08 50.2899 619.49 50.8299 621.74 51.7999C624.66 53.0499 626.57 54.7099 627.48 55.5099C628.38 56.2899 629.88 57.5899 631.19 59.5599C632.91 62.1299 633.89 65.1299 634.11 68.4799L634.48 103.11C634.52 106.54 633.9 109.73 632.65 112.57C632.39 113.16 631.96 114.15 631.19 115.35C630.9 115.8 630.01 117.18 627.83 119.23C626.28 120.69 624.82 122.06 622.64 123.27C620.07 124.7 617.19 125.51 614.08 125.7H614.07H578.46V125.68ZM581.88 120.94H611.79C614.5 120.94 617.14 120.23 619.43 118.89C620.97 117.99 622.42 116.89 623.73 115.64C624.46 114.94 625.16 114.19 625.8 113.39C628.36 110.23 629.75 106.13 629.71 101.83L629.43 72.9799C629.38 68.3099 627.62 63.8299 624.59 60.7099C624.36 60.4699 624.11 60.2299 623.86 59.9999C622.29 58.5499 620.5 57.3899 618.55 56.5699C616.78 55.8299 614.85 55.4499 612.81 55.4499H581.88V120.94Z"}}),r("path",{attrs:{d:"M655.95 125.68C655.56 125.68 655.25 125.36 655.25 124.97V50.7999C655.25 50.4599 655.53 50.1799 655.87 50.1799H701.88L701.83 53.6699L661.44 53.6199C660.68 53.6199 660.06 54.2499 660.06 55.0099V84.5199C660.06 85.2899 660.68 85.9199 661.44 85.9199L687.2 85.8099C687.27 85.8099 687.33 85.8699 687.33 85.9399V89.0599C687.33 89.1299 687.27 89.1899 687.2 89.1899L661.43 89.2999C660.67 89.2999 660.05 89.9299 660.05 90.6899V120.9C660.05 121.67 660.67 122.3 661.43 122.3H701.91L701.86 125.69H655.95V125.68Z"}})])]),r("span",{staticClass:"footer__copyright"},[t._v("JedenCode © 2021")])],1)])},_=[],V={},H=Object(p["a"])(V,v,_,!1,null,null,null),L=H.exports,k={components:{TheHeader:j,TheFooter:L}},b=k,M=Object(p["a"])(b,a,i,!1,null,null,null),Z=M.exports,y=r("8c4f"),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ProjectsBlock")},S=[],x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"projects margin-section"},[t._m(0),r("ProjectsFilter",{attrs:{filteredProjects:t.filteredProjects},on:{"update:filteredProjects":function(e){t.filteredProjects=e},"update:filtered-projects":function(e){t.filteredProjects=e}}}),r("ProjectsList",{attrs:{filteredProjects:t.filteredProjects}})],1)},P=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h2",{staticClass:"h2title"},[t._v("Проекты")])])}],O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"projects-filter__wrap"},[r("div",{staticClass:"container projects-filter__container"},[r("ul",{staticClass:"projects__filter projects-filter"},t._l(t.filtersList,(function(e,s){return r("li",{key:s,staticClass:"projects-filter__item"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.filters,expression:"filters"}],staticClass:"visually-hidden",attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.filters)?t._i(t.filters,e)>-1:t.filters},on:{change:function(r){var s=t.filters,a=r.target,i=!!a.checked;if(Array.isArray(s)){var n=e,o=t._i(s,n);a.checked?o<0&&(t.filters=s.concat([n])):o>-1&&(t.filters=s.slice(0,o).concat(s.slice(o+1)))}else t.filters=i}}}),r("span",[t._v(t._s(e))])])])})),0),r("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.hideSort,expression:"hideSort"}],staticClass:"projects-filter__sort projects-filter-sort"},[r("button",{staticClass:"projects-filter-sort__btn",class:{active:t.sortOpen},attrs:{"aria-label":"Сортировка"},on:{click:function(e){return e.preventDefault(),t.toggleSort(e)}}},[r("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none"}},[r("path",{attrs:{d:"M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"}})]),t._v(" По дате создания ")]),r("ul",{staticClass:"projects-filter-sort__list",class:{active:t.sortOpen}},[r("li",{staticClass:"projects-filter-sort__item"},[r("button",{staticClass:"projects-filter-sort__itembtn",attrs:{"data-value":"dateAsc"},on:{click:function(e){return e.preventDefault(),t.changeSort(e)}}},[r("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none"}},[r("path",{attrs:{d:"M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"}})]),t._v(" По дате создания ")])]),r("li",{staticClass:"projects-filter-sort__item"},[r("button",{staticClass:"projects-filter-sort__itembtn active",attrs:{"data-value":"dateDesc"},on:{click:function(e){return e.preventDefault(),t.changeSort(e)}}},[r("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none"}},[r("path",{attrs:{d:"M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"}})]),t._v(" По дате создания ")])]),r("li",{staticClass:"projects-filter-sort__item"},[r("button",{staticClass:"projects-filter-sort__itembtn",attrs:{"data-value":"alphabetAsc"},on:{click:function(e){return e.preventDefault(),t.changeSort(e)}}},[r("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none"}},[r("path",{attrs:{d:"M3.5 0.5L3.85355 0.146447C3.65829 -0.0488155 3.34171 -0.0488155 3.14645 0.146447L3.5 0.5ZM3.14645 0.146447L0.146447 3.14645L0.853553 3.85355L3.85355 0.853553L3.14645 0.146447ZM3.14645 0.853553L6.14645 3.85355L6.85355 3.14645L3.85355 0.146447L3.14645 0.853553ZM3 0.5V15H4V0.5H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"}})]),t._v(" По алфавиту A-Z ")])]),r("li",{staticClass:"projects-filter-sort__item"},[r("button",{staticClass:"projects-filter-sort__itembtn",attrs:{"data-value":"alphabetDesc"},on:{click:function(e){return e.preventDefault(),t.changeSort(e)}}},[r("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none"}},[r("path",{attrs:{d:"M3.5 14.5L3.14645 14.8536C3.34171 15.0488 3.65829 15.0488 3.85355 14.8536L3.5 14.5ZM3.85355 14.8536L6.85355 11.8536L6.14645 11.1464L3.14645 14.1464L3.85355 14.8536ZM3.85355 14.1464L0.853553 11.1464L0.146447 11.8536L3.14645 14.8536L3.85355 14.1464ZM3 0V14.5H4V0H3ZM9 4H15V3H9V4ZM9 8H13V7H9V8ZM9 12H11V11H9V12Z"}})]),t._v(" По алфавиту Z-A ")])])])]),t.filters.length?r("button",{staticClass:"projects-filter__clear",attrs:{"aria-label":"Сбросить фильтр"},on:{click:function(e){return e.preventDefault(),t.resetFilter(e)}}},[r("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none"}},[r("path",{attrs:{d:"M2 2L13 13M2 13L13 2"}})]),t._v(" Сбросить фильтр ")]):t._e()])])},E=[],T=r("2909"),D=(r("159b"),r("4de4"),r("caad"),r("2532"),[{title:"Internation",description:"Спортивный бренд одежды",link:"https://internation.jedenkoor.ru/",image:"/images/projects/internation.svg",tags:["Gulp","jQuery","Интернет-магазин"],date:"2019.03.25"},{title:"Малина",description:"Художественная мастерская по созданию и росписи матрешёк",link:"https://matreshki.jedenkoor.ru/",image:"/images/projects/matreshki.png",tags:["Gulp","jQuery","Сайт-визитка"],date:"2019.02.18"},{title:"Clevergrad Premium",description:"Элитная загородная недвижимость",link:"https://clever-elite.jedenkoor.ru/",image:"/images/projects/clever-elite.svg",tags:["Gulp","jQuery","Интернет-витрина","Анимации"],date:"2019.05.30"},{title:"Instafilter",description:"Студия разработки AR игр и масок для Instagram, TikTok, Snapchat и VK",link:"https://instafilter.jedenkoor.ru/",image:"/images/projects/instafilter.svg",tags:["Gulp","jQuery","Сайт-визитка","Анимации"],date:"2019.08.13"},{title:"Levitacia",description:"Премиальная одежда",link:"https://levitation.jedenkoor.ru/",image:"/images/projects/levitacia.png",tags:["Gulp","jQuery","Интернет-магазин"],date:"2019.10.18"},{title:"RA-Studio",description:"Создание дизайна сайта",link:"https://ra-design.jedenkoor.ru",image:"/images/projects/ra-studio.svg",tags:["Gulp","jQuery","Лендинг"],date:"2020.03.03"},{title:"RA-Studio",description:"Управление репутацией бренда",link:"https://ra-reputation.jedenkoor.ru",image:"/images/projects/ra-studio.svg",tags:["Gulp","jQuery","Лендинг"],date:"2020.06.25"},{title:"Bo-Box",description:"Мягкая мебель",link:"https://nordic.jedenkoor.ru/",image:"/images/projects/bo-box.svg",tags:["Gulp","jQuery","Лендинг"],date:"2020.04.24"},{title:"RA-Studio",description:"Цифровизация бизнеса",link:"https://ra-digital.jedenkoor.ru",image:"/images/projects/ra-studio.svg",tags:["Gulp","jQuery","Лендинг"],date:"2020.05.05"},{title:"Innes",description:"Косметика",link:"https://innes.jedenkoor.ru/",image:"/images/projects/innes.svg",tags:["Gulp","jQuery","Интернет-магазин"],date:"2020.06.08"},{title:"ITProgress",description:"Программные внедрения для бизнеса",link:"https://itprogress.jedenkoor.ru/",image:"/images/projects/itprogress.png",tags:["Gulp","jQuery","Корпоративный сайт"],date:"2020.01.21"},{title:"Райффайзен Банк",description:"Регистрация на конференцию Fintech Design Conf",link:"https://fintech.jedenkoor.ru/",image:"/images/projects/fintech.svg",tags:["Gulp","ES6","Лендинг","Анимации"],date:"2020.08.20"},{title:"Красные медведи",description:"Хоккейная экипировка",link:"https://red-bears.jedenkoor.ru/",image:"/images/projects/red-bears.png",tags:["Gulp","ES6","Интернет-магазин"],date:"2020.09.14"},{title:"My Tobacco",description:"Кальяны",link:"https://hookahs.jedenkoor.ru/",image:"/images/projects/hookahs.jpg",tags:["Gulp","ES6","Интернет-магазин"],date:"2020.09.28"},{title:"Райффайзен Банк",description:"Конференция Fintech Design Conf",link:"https://raiffeisen.jedenkoor.ru/",image:"/images/projects/fintech.svg",tags:["Gulp","ES6","Лендинг","Анимации","Canvas"],date:"2020.10.23"},{title:"Moire",description:"Дипломный проект SkillBox на Vue.js",link:"https://moire.jedenkoor.ru/",image:"/images/projects/moire.svg",tags:["Webpack","Vue","Интернет-магазин"],date:"2021.04.15"},{title:"Torbey",description:"Магазин матрасов",link:"https://torbey.jedenkoor.ru/",image:"/images/projects/torbey.svg",tags:["Webpack","ES6","Интернет-магазин"],date:"2021.04.02"},{title:"Kovalev",description:"Магазин ротанговой мебели",link:"https://rotang.jedenkoor.ru/",image:"/images/projects/rotang.svg",tags:["Webpack","ES6","Интернет-магазин"],date:"2021.04.22"},{title:"DPClo",description:"Дизайн и производство одежды",link:"https://dpclo.jedenkoor.ru/",image:"/images/projects/dpclo.svg",tags:["Webpack","ES6","Сайт-визитка"],date:"2021.04.30"}]),A=r("e67d"),B=r.n(A),G={props:["filteredProjects"],data:function(){return{currentSort:"dateDesc",sortOpen:!1,projects:D,filters:[]}},computed:{filtersList:function(){var t=[];return this.projects.forEach((function(e){t.push.apply(t,Object(T["a"])(e.tags))})),t.filter((function(t,e,r){return r.indexOf(t)===e})).sort()}},methods:{updateprojects:function(t){var e=this,r=this.projects;this.filters.length&&(r=this.projects.filter((function(t){return e.filters.some((function(e){return t.tags.includes(e)}))}))),this.$emit("update:filteredProjects",this.$options.filters.sort(r,t))},resetFilter:function(){this.filters=[]},toggleSort:function(){this.sortOpen=!this.sortOpen},hideSort:function(){this.sortOpen=!1},changeSort:function(t){this.currentSort=t.target.dataset.value,document.querySelector(".projects-filter-sort__btn").innerHTML=t.target.innerHTML,document.querySelectorAll(".projects-filter-sort__itembtn").forEach((function(t){t.classList.remove("active")})),t.target.classList.add("active"),this.toggleSort()}},created:function(){this.updateprojects(this.currentSort)},watch:{filters:function(){this.updateprojects(this.currentSort)},currentSort:function(){this.updateprojects(this.currentSort)}},filters:{sort:function(t,e){switch(e){case"dateAsc":t=t.sort((function(t,e){return Date.parse(t.date)-Date.parse(e.date)}));break;case"dateDesc":t=t.sort((function(t,e){return Date.parse(e.date)-Date.parse(t.date)}));break;case"alphabetAsc":t=t.sort((function(t,e){if(t.title.toLowerCase()<e.title.toLowerCase())return-1}));break;case"alphabetDesc":t=t.sort((function(t,e){if(t.title.toLowerCase()>e.title.toLowerCase())return-1}));break}return t}},directives:{ClickOutside:B.a}},$=G,Q=Object(p["a"])($,O,E,!1,null,null,null),I=Q.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("ul",{staticClass:"projects__list"},t._l(t.filteredProjects,(function(t,e){return r("ProjectsItem",{key:e,attrs:{project:t}})})),1)])},q=[],J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"projects__item projects-item"},[r("a",{staticClass:"projects-item__link",attrs:{href:t.project.link,target:"_blank"}},[r("div",{staticClass:"projects-item__logo"},[r("img",{staticClass:"projects-item__img",attrs:{src:t.project.image,alt:t.project.title}})]),r("h3",{staticClass:"projects-item__title"},[t._v(t._s(t.project.title))]),r("p",{staticClass:"projects-item__descr"},[t._v(t._s(t.project.description))])])])},R=[],W={props:["project"]},K=W,N=Object(p["a"])(K,J,R,!1,null,null,null),z=N.exports,U={props:["filteredProjects"],components:{ProjectsItem:z}},X=U,Y=Object(p["a"])(X,F,q,!1,null,null,null),tt=Y.exports,et={data:function(){return{filteredProjects:[]}},components:{ProjectsFilter:I,ProjectsList:tt}},rt=et,st=Object(p["a"])(rt,x,P,!1,null,null,null),at=st.exports,it={components:{ProjectsBlock:at}},nt=it,ot=Object(p["a"])(nt,w,S,!1,null,null,null),lt=ot.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Страница не найдена")])])}],ut={},pt=Object(p["a"])(ut,ct,Ct,!1,null,null,null),dt=pt.exports;s["a"].use(y["a"]);var ht=[{path:"/",name:"main",component:lt},{name:"notFound",component:dt,path:"/404"},{path:"*",redirect:"/404"}],ft=new y["a"]({mode:"history",base:"/",routes:ht}),gt=ft,mt=r("2f62");s["a"].use(mt["a"]);var jt=new mt["a"].Store({state:{},mutations:{},actions:{},modules:{}});r("2fb4");s["a"].config.productionTip=!1,new s["a"]({router:gt,store:jt,render:function(t){return t(Z)}}).$mount("#app")}});
//# sourceMappingURL=app.4aede394.js.map